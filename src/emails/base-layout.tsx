import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

interface BaseLayoutProps {
  previewText: string
  children: React.ReactNode
}

export function BaseLayout({ previewText, children }: BaseLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logoText}>Birdsong Realty Team</Text>
            <Text style={tagline}>Austin Real Estate | Keller Williams</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>{children}</Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Birdsong Realty Team | Keller Williams Realty
              <br />
              Austin, TX 78701
              <br />
              Patrick Birdsong, REALTOR
            </Text>
            <Text style={footerLinks}>
              <Link href="https://birdsongrealtyteam.com" style={footerLink}>
                Visit Our Website
              </Link>
              {" | "}
              <Link href="https://birdsongrealtyteam.com/contact" style={footerLink}>
                Contact Us
              </Link>
            </Text>
            <Text style={trecText}>
              <Link href="https://www.trec.texas.gov/sites/default/files/pdf-forms/IABS%201-0.pdf" style={footerLink}>
                TREC Information About Brokerage Services
              </Link>
              {" | "}
              <Link href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4.pdf" style={footerLink}>
                TREC Consumer Protection Notice
              </Link>
            </Text>
            <Text style={copyright}>
              Each office is independently owned and operated.
              <br />
              &copy; {new Date().getFullYear()} Birdsong Realty Team. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
}

const header = {
  backgroundColor: "#2D5016",
  padding: "40px 48px",
  textAlign: "center" as const,
}

const logoText = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "600",
  margin: "0",
  letterSpacing: "-0.5px",
}

const tagline = {
  color: "#d4e4c8",
  fontSize: "14px",
  fontWeight: "400",
  margin: "8px 0 0 0",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
}

const content = {
  padding: "48px",
}

const footer = {
  backgroundColor: "#f1f5f9",
  padding: "32px 48px",
  textAlign: "center" as const,
}

const footerText = {
  color: "#64748b",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
}

const footerLinks = {
  color: "#64748b",
  fontSize: "14px",
  margin: "0 0 16px 0",
}

const footerLink = {
  color: "#2D5016",
  textDecoration: "none",
}

const trecText = {
  color: "#94a3b8",
  fontSize: "11px",
  margin: "0 0 12px 0",
  lineHeight: "18px",
}

const copyright = {
  color: "#94a3b8",
  fontSize: "12px",
  margin: "0",
}
