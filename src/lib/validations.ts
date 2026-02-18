import { z } from "zod"

// Reusable field validators
const phoneValidator = z
  .string()
  .optional()
  .refine(
    (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
    "Please enter a valid phone number"
  )

const nameValidator = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(100, "Name is too long")

const emailValidator = z
  .string()
  .email("Please enter a valid email address")

/**
 * Lead form validation schema
 */
export const leadFormSchema = z.object({
  name: nameValidator,
  email: emailValidator,
  phone: phoneValidator,
  message: z
    .string()
    .max(1000, "Message is too long")
    .optional(),
  propertyInterest: z
    .string()
    .optional(),
  propertyType: z
    .string()
    .optional(),
  priceRange: z
    .string()
    .optional(),
  preferredContact: z
    .enum(["email", "phone", "either"])
    .default("email"),
  source: z
    .string()
    .optional(),
  dates: z
    .object({
      checkIn: z.string().optional(),
      checkOut: z.string().optional(),
    })
    .optional(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: nameValidator,
  email: emailValidator,
  phone: phoneValidator,
  subject: z
    .string()
    .min(2, "Subject is required")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  source: z
    .string()
    .optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Newsletter subscription schema
 */
export const newsletterSchema = z.object({
  email: emailValidator,
})

export type NewsletterData = z.infer<typeof newsletterSchema>

/**
 * CMA request form validation schema
 */
export const cmaRequestSchema = z.object({
  firstName: nameValidator,
  lastName: nameValidator,
  email: emailValidator,
  phone: phoneValidator,
  address: z
    .string()
    .min(5, "Please enter your property address")
    .max(200, "Address is too long"),
  propertyType: z
    .enum(["single-family", "condo", "townhome", "multi-family", "land", "other"])
    .optional(),
  timeline: z
    .enum(["asap", "1-3-months", "3-6-months", "6-12-months", "just-curious"])
    .optional(),
  additionalInfo: z
    .string()
    .max(1000, "Additional info is too long")
    .optional(),
  source: z
    .string()
    .optional(),
})

export type CMARequestData = z.infer<typeof cmaRequestSchema>

/**
 * Relocation guide request form validation schema
 */
export const relocationFormSchema = z.object({
  firstName: nameValidator,
  lastName: nameValidator,
  email: emailValidator,
  phone: phoneValidator,
  currentCity: z
    .string()
    .min(2, "Please enter your current city")
    .max(100, "City name is too long"),
  timeline: z
    .enum(["asap", "1-3-months", "3-6-months", "6-12-months", "12-plus-months", "just-exploring"])
    .optional(),
  budget: z
    .enum(["under-300k", "300k-500k", "500k-750k", "750k-1m", "1m-plus", "not-sure"])
    .optional(),
  interests: z
    .array(z.string())
    .optional(),
  message: z
    .string()
    .max(1000, "Message is too long")
    .optional(),
  source: z
    .string()
    .optional(),
})

export type RelocationFormData = z.infer<typeof relocationFormSchema>

/**
 * Property alerts form validation schema
 */
export const propertyAlertsSchema = z.object({
  name: nameValidator,
  email: emailValidator,
  phone: phoneValidator,
  priceRange: z
    .string()
    .optional(),
  propertyTypes: z
    .array(z.string())
    .optional(),
  neighborhoods: z
    .array(z.string())
    .optional(),
  source: z
    .string()
    .optional(),
})

export type PropertyAlertsData = z.infer<typeof propertyAlertsSchema>
