import siteConfig from "@/data/site-config.json"
import { cn } from "@/lib/utils"

interface ComplianceBarProps {
  className?: string
  /** Use "light" on dark backgrounds, "dark" on light backgrounds */
  variant?: "light" | "dark"
}

/**
 * TREC Compliance Bar
 *
 * Displays legally required Texas Real Estate Commission (TREC) links:
 * - Information About Brokerage Services (IABS) - minimum 10pt font
 * - Consumer Protection Notice - minimum 12pt font
 *
 * This component can be used independently or as part of the footer.
 * TREC requires these links to be displayed on every page of the website.
 */
export function ComplianceBar({ className, variant = "light" }: ComplianceBarProps) {
  const { compliance } = siteConfig

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-3",
        className
      )}
      role="contentinfo"
      aria-label="Texas Real Estate Commission compliance information"
    >
      {/* TREC IABS Link - minimum 10pt font (10pt = 0.833rem, using text-[0.85rem] to be safe) */}
      <a
        href={compliance.trecIabsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "underline underline-offset-2 transition-colors duration-200",
          "text-[0.85rem] leading-snug",
          variant === "light"
            ? "text-neutral-400 hover:text-white"
            : "text-neutral-600 hover:text-neutral-900"
        )}
        style={{ fontSize: "max(0.85rem, 10pt)" }}
      >
        Texas Real Estate Commission Information About Brokerage Services
      </a>

      <span
        className={cn(
          "hidden sm:inline",
          variant === "light" ? "text-neutral-600" : "text-neutral-300"
        )}
        aria-hidden="true"
      >
        |
      </span>

      {/* TREC Consumer Protection Notice - minimum 12pt font (12pt = 1rem, using text-[1rem] to be safe) */}
      <a
        href={compliance.trecConsumerProtectionUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "underline underline-offset-2 transition-colors duration-200",
          "text-[1rem] leading-snug",
          variant === "light"
            ? "text-neutral-400 hover:text-white"
            : "text-neutral-600 hover:text-neutral-900"
        )}
        style={{ fontSize: "max(1rem, 12pt)" }}
      >
        TREC Consumer Protection Notice
      </a>
    </div>
  )
}
