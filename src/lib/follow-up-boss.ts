/**
 * Follow Up Boss CRM integration
 * POST to /v1/events with Basic Auth (API key as username, empty password)
 * Source: "BirdsongRealtyWebsite"
 * Handle lead types: buyer, seller, general, relocation, cma
 */

const FUB_API_URL = "https://api.followupboss.com/v1/events"
const FUB_SOURCE = "BirdsongRealtyWebsite"

export type LeadType = "buyer" | "seller" | "general" | "relocation" | "cma"

export interface FUBLead {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message?: string
  source?: string
  type?: LeadType
  tags?: string[]
}

interface FUBEventPayload {
  source: string
  type: string
  person: {
    firstName: string
    lastName: string
    emails: { value: string }[]
    phones?: { value: string }[]
    tags?: string[]
  }
  description?: string
  property?: {
    street?: string
  }
}

/**
 * Push a lead to Follow Up Boss CRM
 * Uses Basic Auth with the API key as the username and an empty password
 */
export async function pushLeadToFUB(
  lead: FUBLead
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.FOLLOWUPBOSS_API_KEY

  if (!apiKey) {
    console.warn("[FUB] FOLLOWUPBOSS_API_KEY not configured, skipping CRM push")
    return { success: false, error: "API key not configured" }
  }

  try {
    // Map lead type to FUB event type
    const eventTypeMap: Record<LeadType, string> = {
      buyer: "Property Inquiry",
      seller: "Seller Inquiry",
      general: "General Inquiry",
      relocation: "Relocation Inquiry",
      cma: "CMA Request",
    }

    const eventType = lead.type
      ? eventTypeMap[lead.type] || "General Inquiry"
      : "General Inquiry"

    const payload: FUBEventPayload = {
      source: FUB_SOURCE,
      type: eventType,
      person: {
        firstName: lead.firstName,
        lastName: lead.lastName,
        emails: [{ value: lead.email }],
      },
    }

    // Add phone if provided
    if (lead.phone) {
      payload.person.phones = [{ value: lead.phone }]
    }

    // Add tags if provided
    if (lead.tags && lead.tags.length > 0) {
      payload.person.tags = lead.tags
    }

    // Add message as description
    if (lead.message) {
      payload.description = lead.message
    }

    // Add source tracking as additional tag
    if (lead.source) {
      payload.person.tags = [
        ...(payload.person.tags || []),
        `source:${lead.source}`,
      ]
    }

    // Basic Auth: API key as username, empty password
    const authString = Buffer.from(`${apiKey}:`).toString("base64")

    const response = await fetch(FUB_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authString}`,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(
        `[FUB] API error (${response.status}):`,
        errorText
      )
      return {
        success: false,
        error: `API error: ${response.status} ${response.statusText}`,
      }
    }

    const data = await response.json()
    console.log("[FUB] Lead pushed successfully:", data?.id || "OK")
    return { success: true }
  } catch (error) {
    console.error("[FUB] Failed to push lead:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
