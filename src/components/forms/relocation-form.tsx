"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { relocationFormSchema, type RelocationFormData } from "@/lib/validations"
import { Button } from "@/components/ui"
import { trackEvent } from "@/lib/analytics"
import { cn } from "@/lib/utils"

interface RelocationFormProps {
  source?: string
  className?: string
}

const timelineOptions = [
  { value: "asap", label: "Immediately" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "6-12-months", label: "6-12 months" },
  { value: "12-plus-months", label: "12+ months" },
  { value: "just-exploring", label: "Just exploring" },
]

const budgetOptions = [
  { value: "under-300k", label: "Under $300K" },
  { value: "300k-500k", label: "$300K - $500K" },
  { value: "500k-750k", label: "$500K - $750K" },
  { value: "750k-1m", label: "$750K - $1M" },
  { value: "1m-plus", label: "$1M+" },
  { value: "not-sure", label: "Not sure yet" },
]

const interestOptions = [
  "Downtown living",
  "Suburban neighborhoods",
  "Good schools",
  "Outdoor lifestyle",
  "Tech corridor access",
  "Night life & dining",
  "Waterfront / lake access",
  "Low property taxes",
  "Investment potential",
  "New construction",
]

export function RelocationForm({ source = "relocation", className }: RelocationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<RelocationFormData>({
    resolver: zodResolver(relocationFormSchema),
    defaultValues: {
      timeline: "just-exploring",
      budget: "not-sure",
      interests: [],
      source,
    },
  })

  const selectedInterests = watch("interests") || []

  const toggleInterest = (interest: string) => {
    const current = selectedInterests || []
    const updated = current.includes(interest)
      ? current.filter((i) => i !== interest)
      : [...current, interest]
    setValue("interests", updated)
  }

  const onSubmit = async (data: RelocationFormData) => {
    setIsSubmitting(true)
    trackEvent("LEAD_FORM_SUBMITTED", { source: "relocation" })

    try {
      // Build a comprehensive message for the lead
      const messageParts = [
        `Relocating from: ${data.currentCity}`,
        `Timeline: ${timelineOptions.find((t) => t.value === data.timeline)?.label || data.timeline}`,
        `Budget: ${budgetOptions.find((b) => b.value === data.budget)?.label || data.budget}`,
      ]
      if (data.interests && data.interests.length > 0) {
        messageParts.push(`Interests: ${data.interests.join(", ")}`)
      }
      if (data.message) {
        messageParts.push(`Additional: ${data.message}`)
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          subject: `Relocation Inquiry from ${data.currentCity}`,
          message: messageParts.join("\n"),
          source: "relocation",
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitResult({
          success: true,
          message:
            result.message ||
            "Thank you! Your relocation guide request has been received. We'll be in touch within 24 hours.",
        })
        reset()
      } else {
        setSubmitResult({
          success: false,
          message:
            result.message || "Something went wrong. Please try again.",
        })
      }
    } catch {
      setSubmitResult({
        success: false,
        message: "Something went wrong. Please try again or call us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success state
  if (submitResult?.success) {
    return (
      <div className={cn("text-center p-8 bg-primary-50 rounded-xl", className)}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-display text-primary-700 mb-2">
          Welcome to Austin!
        </h3>
        <p className="text-neutral-600">{submitResult.message}</p>
        <p className="text-sm text-neutral-500 mt-4">
          We&apos;ll send you our comprehensive Austin relocation guide and connect you with a local specialist.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
    >
      {/* Header info */}
      <div className="p-4 bg-primary-50 border border-primary-100 rounded-lg">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">
              Moving to Austin?
            </h4>
            <p className="text-sm text-neutral-600 mt-1">
              Let us be your local guide. We&apos;ll help you find the right neighborhood, understand the market, and make your transition seamless.
            </p>
          </div>
        </div>
      </div>

      <input type="hidden" {...register("source")} />

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Jane"
            {...register("firstName")}
            className={cn(
              "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
              errors.firstName
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-neutral-200 hover:border-neutral-300"
            )}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Smith"
            {...register("lastName")}
            className={cn(
              "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
              errors.lastName
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-neutral-200 hover:border-neutral-300"
            )}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            {...register("email")}
            className={cn(
              "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
              errors.email
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-neutral-200 hover:border-neutral-300"
            )}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            {...register("phone")}
            className={cn(
              "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
              errors.phone
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-neutral-200 hover:border-neutral-300"
            )}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Relocation Details */}
      <div className="space-y-2">
        <label htmlFor="currentCity" className="block text-sm font-medium text-neutral-700">
          Where are you moving from? <span className="text-red-500">*</span>
        </label>
        <input
          id="currentCity"
          type="text"
          placeholder="San Francisco, CA"
          {...register("currentCity")}
          className={cn(
            "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
            errors.currentCity
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-neutral-200 hover:border-neutral-300"
          )}
        />
        {errors.currentCity && (
          <p className="text-sm text-red-500">{errors.currentCity.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700">
            Move Timeline
          </label>
          <select
            id="timeline"
            {...register("timeline")}
            className={cn(
              "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
              "border-neutral-200 hover:border-neutral-300"
            )}
          >
            {timelineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="block text-sm font-medium text-neutral-700">
            Budget Range
          </label>
          <select
            id="budget"
            {...register("budget")}
            className={cn(
              "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
              "border-neutral-200 hover:border-neutral-300"
            )}
          >
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-neutral-700">
          What&apos;s important to you? (select all that apply)
        </label>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-all border",
                selectedInterests.includes(interest)
                  ? "bg-primary-600 text-white border-primary-600"
                  : "bg-white text-neutral-700 border-neutral-200 hover:border-primary-300"
              )}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
          Anything else we should know?
        </label>
        <textarea
          id="message"
          placeholder="Tell us about your family, work situation, hobbies, or anything that would help us find the right neighborhood for you..."
          rows={4}
          {...register("message")}
          className={cn(
            "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors resize-none min-h-[120px]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
            "border-neutral-200 hover:border-neutral-300"
          )}
        />
      </div>

      {/* Error message */}
      {submitResult && !submitResult.success && (
        <p className="text-sm text-red-500">{submitResult.message}</p>
      )}

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <Button type="submit" variant="cta" size="lg" isLoading={isSubmitting}>
          Get My Relocation Guide
        </Button>

        <p className="text-sm text-neutral-500">
          Free guide + personal consultation
        </p>
      </div>
    </form>
  )
}
