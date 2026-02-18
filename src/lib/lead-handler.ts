/**
 * Orchestrates lead processing: FUB + Sheets + Email notification
 * Error isolation - one failure doesn't block others
 */

import { Resend } from "resend"
import { render } from "@react-email/components"
import { pushLeadToFUB, type LeadType } from "./follow-up-boss"
import { appendToSheet } from "./google-sheets"
import { LeadNotification } from "@/emails/lead-notification"
import { InquiryConfirmation } from "@/emails/inquiry-confirmation"

const NOTIFICATION_EMAIL = "patrick@birdsongrealtyteam.com"

// Lazy-initialize Resend to avoid build-time errors when env var is missing
let _resend: Resend | null = null
function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY)
  }
  return _resend
}

export interface LeadData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message?: string
  source?: string
  type?: LeadType
  tags?: string[]
  // Additional fields for specific lead types
  propertyInterest?: string
  propertyType?: string
  priceRange?: string
  preferredContact?: string
  // CMA-specific fields
  address?: string
  // Relocation-specific fields
  currentCity?: string
  timeline?: string
  budget?: string
}

export interface ProcessLeadResult {
  success: boolean
  results: {
    fub: { success: boolean; error?: string }
    sheets: { success: boolean; error?: string }
    email: { success: boolean; error?: string }
  }
}

/**
 * Process a lead through all integrations in parallel
 * Uses Promise.allSettled so one failure doesn't block others
 */
export async function processLead(lead: LeadData): Promise<ProcessLeadResult> {
  console.log("=== PROCESSING LEAD ===")
  console.log("Timestamp:", new Date().toISOString())
  console.log("Name:", lead.firstName, lead.lastName)
  console.log("Email:", lead.email)
  console.log("Type:", lead.type || "general")
  console.log("Source:", lead.source || "website")
  console.log("========================")

  // Run all integrations in parallel - errors are isolated
  const [fubResult, sheetsResult, emailResult] = await Promise.allSettled([
    // 1. Push to Follow Up Boss CRM
    pushLeadToFUB({
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      message: lead.message,
      source: lead.source,
      type: lead.type,
      tags: lead.tags,
    }),

    // 2. Append to Google Sheets
    appendToSheet({
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      type: lead.type,
      source: lead.source,
      message: lead.message,
    }),

    // 3. Send email notifications
    sendEmailNotifications(lead),
  ])

  // Extract results with error handling
  const fub =
    fubResult.status === "fulfilled"
      ? fubResult.value
      : { success: false, error: String(fubResult.reason) }

  const sheets =
    sheetsResult.status === "fulfilled"
      ? sheetsResult.value
      : { success: false, error: String(sheetsResult.reason) }

  const email =
    emailResult.status === "fulfilled"
      ? emailResult.value
      : { success: false, error: String(emailResult.reason) }

  // Log summary
  console.log("=== LEAD PROCESSING RESULTS ===")
  console.log("FUB:", fub.success ? "OK" : `FAILED - ${fub.error}`)
  console.log("Sheets:", sheets.success ? "OK" : `FAILED - ${sheets.error}`)
  console.log("Email:", email.success ? "OK" : `FAILED - ${email.error}`)
  console.log("================================")

  // Overall success if at least the email or FUB succeeded
  const overallSuccess = fub.success || email.success

  return {
    success: overallSuccess,
    results: { fub, sheets, email },
  }
}

/**
 * Send email notifications (owner + confirmation to lead)
 */
async function sendEmailNotifications(
  lead: LeadData
): Promise<{ success: boolean; error?: string }> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[Email] RESEND_API_KEY not configured, skipping emails")
    return { success: false, error: "Email API key not configured" }
  }

  try {
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })

    const fullName = `${lead.firstName} ${lead.lastName}`.trim()

    // Build a descriptive subject line
    const subjectDetail =
      lead.type === "cma"
        ? "CMA Request"
        : lead.type === "relocation"
          ? "Relocation Inquiry"
          : lead.type === "seller"
            ? "Seller Inquiry"
            : lead.propertyType || lead.propertyInterest || "General Inquiry"

    // 1. Send notification to owner
    const notificationEmailHtml = await render(
      LeadNotification({
        name: fullName,
        email: lead.email,
        phone: lead.phone,
        preferredContact: lead.preferredContact,
        propertyInterest: lead.propertyInterest,
        propertyType: lead.propertyType,
        priceRange: lead.priceRange,
        message: lead.message,
        source: lead.source,
        submittedAt,
      })
    )

    await getResend().emails.send({
      from: "Birdsong Realty <noreply@birdsongrealtyteam.com>",
      to: NOTIFICATION_EMAIL,
      subject: `New Lead: ${fullName} - ${subjectDetail}`,
      html: notificationEmailHtml,
    })

    // 2. Send confirmation to lead
    const confirmationEmailHtml = await render(
      InquiryConfirmation({
        name: fullName,
        propertyInterest: lead.propertyInterest,
        propertyType: lead.propertyType,
        priceRange: lead.priceRange,
        source: lead.source,
      })
    )

    await getResend().emails.send({
      from: "Birdsong Realty <noreply@birdsongrealtyteam.com>",
      to: lead.email,
      subject: "Thanks for reaching out! - Birdsong Realty Team",
      html: confirmationEmailHtml,
    })

    console.log("[Email] Notifications sent successfully")
    return { success: true }
  } catch (error) {
    console.error("[Email] Failed to send notifications:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
