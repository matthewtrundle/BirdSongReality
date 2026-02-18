"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cmaRequestSchema, type CMARequestData } from "@/lib/validations"
import { Button } from "@/components/ui"
import { FormField } from "./form-field"
import { trackEvent } from "@/lib/analytics"
import { cn } from "@/lib/utils"

interface CMARequestFormProps {
  source?: string
  className?: string
}

const propertyTypeOptions = [
  { value: "single-family", label: "Single Family Home" },
  { value: "condo", label: "Condo / Townhome" },
  { value: "townhome", label: "Townhome" },
  { value: "multi-family", label: "Multi-Family" },
  { value: "land", label: "Land / Lot" },
  { value: "other", label: "Other" },
]

const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "6-12-months", label: "6-12 months" },
  { value: "just-curious", label: "Just curious about my home value" },
]

export function CMARequestForm({ source = "cma-request", className }: CMARequestFormProps) {
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
  } = useForm<CMARequestData>({
    resolver: zodResolver(cmaRequestSchema),
    defaultValues: {
      propertyType: "single-family",
      timeline: "just-curious",
      source,
    },
  })

  const onSubmit = async (data: CMARequestData) => {
    setIsSubmitting(true)
    trackEvent("LEAD_FORM_SUBMITTED", { source: "cma-request" })

    try {
      const response = await fetch("/api/cma-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitResult({
          success: true,
          message:
            result.message ||
            "Thank you! We'll prepare your property analysis and contact you within 24 hours.",
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
          CMA Request Received!
        </h3>
        <p className="text-neutral-600">{submitResult.message}</p>
        <p className="text-sm text-neutral-500 mt-4">
          Our team will prepare a detailed analysis of your property&apos;s market value.
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
      <div className="p-4 bg-accent-50 border border-accent-200 rounded-lg">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">
              Free Comparative Market Analysis
            </h4>
            <p className="text-sm text-neutral-600 mt-1">
              Get a professional assessment of your Austin property&apos;s current market value.
              No obligation -- just valuable information to help you make informed decisions.
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
            placeholder="Patrick"
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
            placeholder="patrick@example.com"
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
            placeholder="(512) 555-1234"
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

      {/* Property Information */}
      <div className="space-y-2">
        <label htmlFor="address" className="block text-sm font-medium text-neutral-700">
          Property Address <span className="text-red-500">*</span>
        </label>
        <input
          id="address"
          type="text"
          placeholder="123 Main St, Austin, TX 78701"
          {...register("address")}
          className={cn(
            "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
            errors.address
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-neutral-200 hover:border-neutral-300"
          )}
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="propertyType" className="block text-sm font-medium text-neutral-700">
            Property Type
          </label>
          <select
            id="propertyType"
            {...register("propertyType")}
            className={cn(
              "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
              "border-neutral-200 hover:border-neutral-300"
            )}
          >
            {propertyTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700">
            Selling Timeline
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
      </div>

      <div className="space-y-2">
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-neutral-700">
          Additional Information
        </label>
        <textarea
          id="additionalInfo"
          placeholder="Tell us about any recent upgrades, unique features, or specific questions you have..."
          rows={4}
          {...register("additionalInfo")}
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
          Request Free CMA
        </Button>

        <p className="text-sm text-neutral-500">
          100% free, no obligation
        </p>
      </div>
    </form>
  )
}
