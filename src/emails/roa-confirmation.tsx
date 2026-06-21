import {
  Button,
  Heading,
  Hr,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"
import { BaseLayout } from "./base-layout"

interface RoaConfirmationProps {
  name: string
  /** "apply" = submitted an application, "call" = requested a confidential call */
  intent?: "apply" | "call"
}

/**
 * Confirmation sent to AGENTS who reach out through the /roa recruiting page.
 * Tone is recruiting + confidential — distinct from the consumer-facing
 * InquiryConfirmation used on the core real-estate site.
 */
export function RoaConfirmation({ name, intent = "apply" }: RoaConfirmationProps) {
  const firstName = name.split(" ")[0]
  const isCall = intent === "call"

  const previewText = isCall
    ? `Thanks, ${firstName} — your confidential call request is in.`
    : `Thanks, ${firstName} — your application is in. This stays confidential.`

  return (
    <BaseLayout previewText={previewText}>
      <Section style={iconSection}>
        <Text style={icon}>&#x1F91D;</Text>
      </Section>

      <Heading style={heading}>
        Thanks for reaching out, {firstName}.
      </Heading>

      <Text style={paragraph}>
        {isCall
          ? "Your request for a confidential call has been received. Patrick Birdsong will personally reach out to find a time that works — no pressure, no obligation."
          : "Your application to join the Birdsong Realty Team at Realty of America has been received. Patrick Birdsong will personally review it and get back to you."}
      </Text>

      {/* Confidentiality assurance */}
      <Section style={highlightBox}>
        <Text style={highlightIcon}>&#x1F512;</Text>
        <Text style={highlightText}>
          <strong>Completely confidential.</strong>
          <br />
          <span style={{ fontSize: "14px", color: "#64748b" }}>
            Your current brokerage will never hear about this from us. This is
            an exploratory conversation, on your terms.
          </span>
        </Text>
      </Section>

      <Hr style={divider} />

      <Heading as="h3" style={subheading}>
        What happens next
      </Heading>

      <Section style={stepsSection}>
        <Text style={stepItem}>
          <span style={stepNumber}>1</span>
          <span style={stepText}>
            <strong>Personal review</strong> &mdash; Patrick reviews where you
            are today and what would make a move worth it for you.
          </span>
        </Text>
        <Text style={stepItem}>
          <span style={stepNumber}>2</span>
          <span style={stepText}>
            <strong>A real conversation</strong> &mdash; We&apos;ll connect within
            one business day to talk through your goals and answer your questions.
          </span>
        </Text>
        <Text style={stepItem}>
          <span style={stepNumber}>3</span>
          <span style={stepText}>
            <strong>See your numbers</strong> &mdash; If it&apos;s a fit, we&apos;ll
            walk through exactly what your economics could look like with Realty
            of America.
          </span>
        </Text>
      </Section>

      <Hr style={divider} />

      <Section style={ctaSection}>
        <Text style={ctaText}>
          Want to skip ahead and book a time directly?
        </Text>
        <Button style={primaryButton} href="https://birdsongrealtyteam.com/roa/call">
          Book a confidential call
        </Button>
      </Section>

      <Section style={signatureSection}>
        <Text style={signatureText}>
          Looking forward to connecting.
        </Text>
        <Text style={signatureName}>
          Patrick Birdsong &mdash; Birdsong Realty Team at Realty of America
        </Text>
      </Section>
    </BaseLayout>
  )
}

// Styles
const iconSection = { textAlign: "center" as const, marginBottom: "16px" }
const icon = { fontSize: "48px", margin: "0" }

const heading = {
  color: "#10295A",
  fontSize: "28px",
  fontWeight: "600",
  lineHeight: "36px",
  margin: "0 0 24px 0",
  textAlign: "center" as const,
}

const paragraph = {
  color: "#334155",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0 0 24px 0",
}

const highlightBox = {
  backgroundColor: "#f0f9ff",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center" as const,
  marginBottom: "24px",
}

const highlightIcon = { fontSize: "32px", margin: "0 0 12px 0" }

const highlightText = {
  color: "#10295A",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0",
}

const divider = { borderColor: "#e2e8f0", margin: "32px 0" }

const subheading = {
  color: "#1e293b",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 20px 0",
}

const stepsSection = { marginBottom: "8px" }

const stepItem = {
  display: "flex",
  alignItems: "flex-start",
  margin: "0 0 16px 0",
}

const stepNumber = {
  backgroundColor: "#10295A",
  borderRadius: "50%",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "600",
  height: "28px",
  lineHeight: "28px",
  marginRight: "16px",
  textAlign: "center" as const,
  width: "28px",
  flexShrink: 0,
}

const stepText = { color: "#334155", fontSize: "15px", lineHeight: "24px" }

const ctaSection = { textAlign: "center" as const, marginBottom: "8px" }

const ctaText = {
  color: "#64748b",
  fontSize: "15px",
  margin: "0 0 20px 0",
}

const primaryButton = {
  backgroundColor: "#10295A",
  borderRadius: "8px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: "600",
  padding: "14px 28px",
  textDecoration: "none",
  textAlign: "center" as const,
}

const signatureSection = { marginTop: "32px", textAlign: "center" as const }

const signatureText = {
  color: "#64748b",
  fontSize: "15px",
  fontStyle: "italic",
  margin: "0 0 8px 0",
}

const signatureName = {
  color: "#10295A",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
}

export default RoaConfirmation
