import Image from "next/image"
import { BrandLockup } from "@/components/icons/brand-lockup"
import { cn } from "@/lib/utils"

interface CoBrandLockupProps {
  /** "dark" = on a dark background (white ROA logo), "light" = on a light background (blue ROA logo) */
  tone?: "dark" | "light"
  /** Size of the Birdsong lockup */
  variant?: "hero" | "default"
  className?: string
}

/**
 * The "co-brand moment": Birdsong Realty Team locked up alongside the
 * official Realty of America mark, separated by a vertical hairline.
 * Birdsong leads (the local team); ROA follows (the brokerage backing it).
 */
export function CoBrandLockup({
  tone = "dark",
  variant = "default",
  className,
}: CoBrandLockupProps) {
  const isDark = tone === "dark"

  return (
    <div className={cn("flex items-center gap-4 md:gap-6", className)}>
      <BrandLockup
        variant={variant}
        className={isDark ? "text-white" : "text-navy-700"}
      />
      <span
        aria-hidden
        className={cn(
          "h-9 w-px md:h-12",
          isDark ? "bg-white/25" : "bg-navy-700/15"
        )}
      />
      <Image
        src={isDark ? "/images/roa/roa-horizontal-white.svg" : "/images/roa/roa-horizontal-blue.svg"}
        alt="Realty of America"
        width={150}
        height={32}
        className={cn(variant === "hero" ? "h-7 w-auto md:h-9" : "h-5 w-auto md:h-6")}
      />
    </div>
  )
}
