/**
 * Google Sheets API v4 integration using service account
 * Uses direct REST API calls with google-auth-library for JWT auth
 * (Replaces heavy googleapis package ~194MB with lightweight fetch calls)
 */

import { GoogleAuth } from "google-auth-library"

interface SheetLeadRow {
  firstName: string
  lastName: string
  email: string
  phone?: string
  type?: string
  source?: string
  message?: string
}

const SHEETS_API_BASE = "https://sheets.googleapis.com/v4/spreadsheets"

/**
 * Append a lead data row to the configured Google Spreadsheet
 * Row format: [timestamp, firstName, lastName, email, phone, type, source, message]
 */
export async function appendToSheet(
  lead: SheetLeadRow
): Promise<{ success: boolean; error?: string }> {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

  if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
    console.warn(
      "[Sheets] Google Sheets credentials not fully configured, skipping append"
    )
    return { success: false, error: "Google Sheets credentials not configured" }
  }

  try {
    // Authenticate with service account
    const auth = new GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const client = await auth.getClient()
    const tokenResponse = await client.getAccessToken()
    const accessToken = typeof tokenResponse === "string" ? tokenResponse : tokenResponse?.token

    if (!accessToken) {
      return { success: false, error: "Failed to obtain access token" }
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })

    const row = [
      timestamp,
      lead.firstName,
      lead.lastName,
      lead.email,
      lead.phone || "",
      lead.type || "general",
      lead.source || "website",
      lead.message || "",
    ]

    const url = `${SHEETS_API_BASE}/${spreadsheetId}/values/Leads!A:H:append?valueInputOption=USER_ENTERED`

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [row],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Sheets API error ${response.status}: ${errorText}`)
    }

    return { success: true }
  } catch (error) {
    console.error("[Sheets] Failed to append lead:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
