"use server"

import { z } from "zod"
import { processLead } from "@/lib/lead-handler"

// Lead form validation schema
const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      "Please enter a valid phone number"
    ),
  message: z.string().max(1000, "Message is too long").optional(),
  propertyInterest: z.string().optional(),
  propertyType: z.string().optional(),
  priceRange: z.string().optional(),
  preferredContact: z.enum(["email", "phone", "either"]).default("email"),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.string().optional(),
  source: z.string().optional(),
})

export type LeadFormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

const initialState: LeadFormState = {
  success: false,
  message: "",
}

/**
 * Parse a full name into first and last name parts
 */
function parseName(name: string): { firstName: string; lastName: string } {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" }
  }
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  }
}

export async function submitLead(
  prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  // Extract form data
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    message: (formData.get("message") as string) || undefined,
    propertyInterest: (formData.get("propertyInterest") as string) || undefined,
    propertyType: (formData.get("propertyType") as string) || undefined,
    priceRange: (formData.get("priceRange") as string) || undefined,
    preferredContact:
      (formData.get("preferredContact") as "email" | "phone" | "either") ||
      "email",
    checkIn: (formData.get("checkIn") as string) || undefined,
    checkOut: (formData.get("checkOut") as string) || undefined,
    guests: (formData.get("guests") as string) || undefined,
    source: (formData.get("source") as string) || "website",
  }

  // Validate
  const validated = leadFormSchema.safeParse(rawData)

  if (!validated.success) {
    return {
      success: false,
      message: "Please check the form for errors",
      errors: validated.error.flatten().fieldErrors,
    }
  }

  try {
    const { firstName, lastName } = parseName(validated.data.name)

    // Build a comprehensive message with all the details
    const messageParts: string[] = []
    if (validated.data.message) messageParts.push(validated.data.message)
    if (validated.data.propertyType)
      messageParts.push(`Property Type: ${validated.data.propertyType}`)
    if (validated.data.priceRange)
      messageParts.push(`Budget: ${validated.data.priceRange}`)
    if (validated.data.preferredContact)
      messageParts.push(`Preferred Contact: ${validated.data.preferredContact}`)
    if (validated.data.checkIn || validated.data.checkOut)
      messageParts.push(
        `Dates: ${validated.data.checkIn || "Flexible"} - ${validated.data.checkOut || "Flexible"}`
      )
    if (validated.data.guests)
      messageParts.push(`Guests: ${validated.data.guests}`)

    // Determine lead type based on source
    const sourceStr = validated.data.source || "website"
    let leadType: "buyer" | "seller" | "general" = "general"
    if (
      sourceStr.includes("property-alerts") ||
      sourceStr.includes("portfolio") ||
      sourceStr.includes("buy")
    ) {
      leadType = "buyer"
    } else if (sourceStr.includes("sell")) {
      leadType = "seller"
    }

    // Process lead through all integrations (FUB, Sheets, Email)
    await processLead({
      firstName,
      lastName,
      email: validated.data.email,
      phone: validated.data.phone,
      message: messageParts.join("\n"),
      source: sourceStr,
      type: leadType,
      tags: [sourceStr, leadType],
      propertyInterest: validated.data.propertyInterest,
      propertyType: validated.data.propertyType,
      priceRange: validated.data.priceRange,
      preferredContact: validated.data.preferredContact,
    })

    return {
      success: true,
      message:
        "Thank you for your inquiry! Our team will contact you within 24 hours.",
    }
  } catch (error) {
    console.error("Lead submission error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again or call us directly.",
    }
  }
}
