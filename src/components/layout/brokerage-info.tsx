import siteConfig from "@/data/site-config.json"
import { cn } from "@/lib/utils"
import { KWLogo } from "@/components/icons/kw-logo"

interface BrokerageInfoProps {
  className?: string
  /** Use "light" on dark backgrounds, "dark" on light backgrounds */
  variant?: "light" | "dark"
  /** Show the Equal Housing text inline or stacked */
  layout?: "inline" | "stacked"
}

/**
 * Keller Williams Brokerage Information Block
 *
 * Displays required brokerage information:
 * - Keller Williams branding with KW logo
 * - Market center name
 * - Office address
 * - Independent ownership disclaimer
 * - Equal Housing Opportunity statement
 *
 * Can be used standalone or as part of the footer.
 */
export function BrokerageInfo({
  className,
  variant = "light",
  layout = "stacked",
}: BrokerageInfoProps) {
  const { agent, contact, compliance } = siteConfig

  const textMuted = variant === "light" ? "text-neutral-400" : "text-neutral-600"
  const textSubtle = variant === "light" ? "text-neutral-500" : "text-neutral-500"
  const textPrimary = variant === "light" ? "text-white" : "text-neutral-900"

  return (
    <div
      className={cn(
        layout === "inline"
          ? "flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          : "flex flex-col gap-3",
        className
      )}
    >
      {/* KW Logo + Market Center */}
      <div
        className={cn(
          "flex items-center gap-3",
          layout === "inline" ? "" : ""
        )}
      >
        <KWLogo size={40} />
        <div>
          <p className={cn("font-semibold text-sm", textPrimary)}>
            {agent.marketCenter}
          </p>
          <p className={cn("text-xs", textMuted)}>
            {agent.brokerage}
          </p>
        </div>
      </div>

      {/* Office Address */}
      <address className={cn("not-italic text-xs leading-relaxed", textMuted)}>
        {contact.address.street !== "TBD" && (
          <>{contact.address.street}<br /></>
        )}
        {contact.address.city}, {contact.address.state} {contact.address.zip}
        <br />
        <a
          href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
          className={cn("hover:underline", variant === "light" ? "hover:text-white" : "hover:text-neutral-900")}
        >
          {contact.phone}
        </a>
      </address>

      {/* Independent Ownership Disclaimer */}
      <p className={cn("text-xs italic", textSubtle)}>
        {compliance.brokerDisclaimer}
      </p>

      {/* Equal Housing Opportunity */}
      <div className="flex items-center gap-2">
        {/* Equal Housing Opportunity Icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("shrink-0", textMuted)}
          role="img"
          aria-label="Equal Housing Opportunity"
        >
          {/* House outline */}
          <path
            d="M12 2L2 10h3v12h14V10h3L12 2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Equal sign inside house */}
          <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" />
          <line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className={cn("text-xs uppercase tracking-wider", textSubtle)}>
          Equal Housing Opportunity
        </span>
      </div>
    </div>
  )
}
