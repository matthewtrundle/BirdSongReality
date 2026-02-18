/**
 * Google Sheets API v4 integration using service account
 * Appends lead data rows to configured spreadsheet
 */

import { google } from "googleapis"
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
        // The private key often comes with escaped newlines from env vars
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

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

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Leads!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    })

    console.log("[Sheets] Lead appended successfully")
    return { success: true }
  } catch (error) {
    console.error("[Sheets] Failed to append lead:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
