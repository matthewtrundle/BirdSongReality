"use client"

import { useState, type FormEvent } from "react"
import { trackEvent } from "@/lib/analytics"
import { cn } from "@/lib/utils"

type Variant = "apply" | "call"

interface RoaLeadFormProps {
  variant: Variant
  className?: string
}

const experienceOptions = [
  { value: "", label: "Select…" },
  { value: "new", label: "New / getting licensed" },
  { value: "1-3", label: "1–3 years" },
  { value: "3-5", label: "3–5 years" },
  { value: "5-10", label: "5–10 years" },
  { value: "10-plus", label: "10+ years" },
]

const productionOptions = [
  { value: "", label: "Select…" },
  { value: "under-10", label: "Under 10 deals / yr" },
  { value: "10-25", label: "10–25 deals / yr" },
  { value: "25-50", label: "25–50 deals / yr" },
  { value: "50-plus", label: "50+ deals / yr" },
]

const timeOptions = [
  { value: "", label: "Select…" },
  { value: "morning", label: "Mornings (8am–12pm)" },
  { value: "afternoon", label: "Afternoons (12pm–5pm)" },
  { value: "evening", label: "Evenings (5pm–8pm)" },
  { value: "anytime", label: "Anytime works" },
]

const inputClass = cn(
  "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-0",
  "border-neutral-200 hover:border-neutral-300"
)

const labelClass = "block text-sm font-medium text-neutral-700"

export function RoaLeadForm({ variant, className }: RoaLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const source = variant === "apply" ? "roa-recruiting-apply" : "roa-recruiting-call"

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formEl = e.currentTarget
    const fd = new FormData(formEl)

    const firstName = (fd.get("firstName") as string)?.trim() || ""
    const lastName = (fd.get("lastName") as string)?.trim() || ""
    const email = (fd.get("email") as string)?.trim() || ""
    const phone = (fd.get("phone") as string)?.trim() || ""
    const notes = (fd.get("notes") as string)?.trim() || ""

    const fullName = `${firstName} ${lastName}`.trim()

    // Build a descriptive message body for the CRM / email notification
    const lines: string[] = [
      variant === "apply"
        ? "AGENT RECRUITING APPLICATION (Realty of America)"
        : "CONFIDENTIAL CALL REQUEST (Realty of America)",
    ]

    if (variant === "apply") {
      const brokerage = (fd.get("brokerage") as string)?.trim() || ""
      const experience = (fd.get("experience") as string) || ""
      const production = (fd.get("production") as string) || ""
      if (brokerage) lines.push(`Current brokerage: ${brokerage}`)
      if (experience)
        lines.push(
          `Experience: ${experienceOptions.find((o) => o.value === experience)?.label || experience}`
        )
      if (production)
        lines.push(
          `Production: ${productionOptions.find((o) => o.value === production)?.label || production}`
        )
    } else {
      const bestTime = (fd.get("bestTime") as string) || ""
      if (bestTime)
        lines.push(
          `Best time to call: ${timeOptions.find((o) => o.value === bestTime)?.label || bestTime}`
        )
    }

    if (notes) lines.push(`Notes: ${notes}`)

    setIsSubmitting(true)
    trackEvent("LEAD_FORM_SUBMITTED", { source })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          phone: phone || undefined,
          subject:
            variant === "apply"
              ? `ROA Agent Application — ${fullName}`
              : `ROA Confidential Call Request — ${fullName}`,
          message: lines.join("\n"),
          source,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setResult({
          success: true,
          message:
            variant === "apply"
              ? "Application received. Patrick will personally review it and reach out within one business day."
              : "Request received. We'll reach out to confirm a time within one business day.",
        })
        formEl.reset()
      } else {
        setResult({
          success: false,
          message: data.message || "Something went wrong. Please try again.",
        })
      }
    } catch {
      setResult({
        success: false,
        message: "Something went wrong. Please try again or email patrick@birdsongrealtyteam.com.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (result?.success) {
    return (
      <div className={cn("rounded-2xl border border-accent-500/30 bg-accent-500/5 p-8 text-center", className)}>
        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-navy-700">
          {variant === "apply" ? "Thanks for applying." : "You're all set."}
        </h3>
        <p className="mt-2 text-neutral-600">{result.message}</p>
        <p className="mt-4 text-sm text-neutral-500">Every conversation is kept completely confidential.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-6", className)}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="firstName" className={labelClass}>
            First name <span className="text-accent-600">*</span>
          </label>
          <input id="firstName" name="firstName" type="text" required placeholder="Jane" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className={labelClass}>
            Last name <span className="text-accent-600">*</span>
          </label>
          <input id="lastName" name="lastName" type="text" required placeholder="Smith" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-accent-600">*</span>
          </label>
          <input id="email" name="email" type="email" required placeholder="jane@example.com" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className={labelClass}>
            Phone {variant === "call" && <span className="text-accent-600">*</span>}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required={variant === "call"}
            placeholder="(512) 555-1234"
            className={inputClass}
          />
        </div>
      </div>

      {variant === "apply" ? (
        <>
          <div className="space-y-2">
            <label htmlFor="brokerage" className={labelClass}>
              Current brokerage
            </label>
            <input id="brokerage" name="brokerage" type="text" placeholder="e.g. Keller Williams, eXp, independent" className={inputClass} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="experience" className={labelClass}>
                Years in real estate
              </label>
              <select id="experience" name="experience" className={inputClass} defaultValue="">
                {experienceOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="production" className={labelClass}>
                Annual production
              </label>
              <select id="production" name="production" className={inputClass} defaultValue="">
                {productionOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className={labelClass}>
              What are you looking for in your next move?
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Tell us a bit about your business and what would make a move worth it."
              className={cn(inputClass, "min-h-[120px] resize-none")}
            />
          </div>
        </>
      ) : (
        <>
          <div className="space-y-2">
            <label htmlFor="bestTime" className={labelClass}>
              Best time to reach you
            </label>
            <select id="bestTime" name="bestTime" className={inputClass} defaultValue="">
              {timeOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className={labelClass}>
              Anything you&apos;d like us to know? (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Where you are today, what you're curious about, questions you have…"
              className={cn(inputClass, "min-h-[120px] resize-none")}
            />
          </div>
        </>
      )}

      {result && !result.success && (
        <p className="text-sm text-red-500">{result.message}</p>
      )}

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-pill bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/20 transition hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? "Sending…"
            : variant === "apply"
              ? "Submit application"
              : "Request my call"}
        </button>
        <p className="text-sm text-neutral-500">100% confidential · No pressure</p>
      </div>
    </form>
  )
}
