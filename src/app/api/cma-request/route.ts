import { NextResponse } from "next/server"
import { cmaRequestSchema } from "@/lib/validations"
import { processLead } from "@/lib/lead-handler"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validate the request body
    const validated = cmaRequestSchema.safeParse(body)

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

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      propertyType,
      timeline,
      additionalInfo,
      source,
    } = validated.data

    // Build CMA-specific message
    const messageParts = [
      `CMA Request for: ${address}`,
      `Property Type: ${propertyType}`,
      `Selling Timeline: ${timeline}`,
    ]
    if (additionalInfo) {
      messageParts.push(`Additional Info: ${additionalInfo}`)
    }

    // Process lead through all integrations
    const result = await processLead({
      firstName,
      lastName,
      email,
      phone,
      message: messageParts.join("\n"),
      source: source || "cma-request",
      type: "cma",
      tags: ["cma-request", "seller", `timeline:${timeline}`],
      address,
      propertyType,
      timeline,
    })

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your CMA request has been received. We'll prepare your property analysis and contact you within 24 hours.",
    })
  } catch (error) {
    console.error("CMA Request API error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again or call us directly.",
      },
      { status: 500 }
    )
  }
}
