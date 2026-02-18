"use client"

import Image from "next/image"
import { Container, Section } from "@/components/layout"
import { LeadForm } from "@/components/forms"
import { cn } from "@/lib/utils"

interface LeadFormSectionProps {
  title?: string
  subtitle?: string
  variant?: "light" | "dark"
  source?: string
}

export function LeadFormSection({
  title = "Start Your Property Search",
  subtitle = "Tell us about your goals and we'll help you find the perfect Austin property",
  variant = "dark",
  source = "home_form_section",
}: LeadFormSectionProps) {
  const isDark = variant === "dark"

  return (
    <Section
      className={cn(
        "relative overflow-hidden",
        isDark ? "bg-primary-950" : "bg-neutral-50"
      )}
      id="contact-form"
    >
      {/* Background image for dark variant */}
      {isDark && (
        <>
          <div className="absolute inset-0 opacity-15">
            <Image
              src="/images/hero/austin-daytime.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-950/90 to-primary-950" />
        </>
      )}

      <Container size="narrow" className="relative">
        <div className="text-center mb-10">
          <h2
            className={cn(
              "font-display text-fluid-3xl mb-4",
              isDark ? "text-white" : "text-neutral-900"
            )}
          >
            {title}
          </h2>
          <p className={cn("text-lg", isDark ? "text-neutral-300" : "text-neutral-600")}>
            {subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <LeadForm source={source} />
        </div>
      </Container>
    </Section>
  )
}
