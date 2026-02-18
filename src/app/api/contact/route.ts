import { NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validations"
import { processLead } from "@/lib/lead-handler"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validate the request body
    const validated = contactFormSchema.safeParse(body)

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validated.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const { name, email, phone, subject, message, source } = validated.data

    // Parse name into first/last
    const nameParts = name.trim().split(/\s+/)
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : ""

    // Process lead through all integrations
    const result = await processLead({
      firstName,
      lastName,
      email,
      phone,
      message: `Subject: ${subject}\n\n${message}`,
      source: source || "contact-form",
      type: "general",
      tags: ["contact-form", "general"],
    })

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message! Our team will get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again or call us directly.",
      },
      { status: 500 }
    )
  }
}
