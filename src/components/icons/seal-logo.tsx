import Image from "next/image"
import { cn } from "@/lib/utils"

interface SealLogoProps {
  className?: string
  /** "hero" = large homepage treatment, "default" = compact header/scrolled */
  variant?: "hero" | "default"
  /** Which seal artwork to use. "white" for dark backgrounds, "navy" for light. */
  tone?: "white" | "navy"
  /** Pair the seal with the Birdsong wordmark (default true). */
  showWordmark?: boolean
}

/**
 * Birdsong Realty Team brand mark — the client-selected "A2" seal.
 * Derived (white knocked out, transparent) by scripts/generate-seal-logo.mjs
 * into public/images/brand/seal-{navy,white}.png.
 *
 * The wordmark renders in `currentColor`, so the parent controls its color
 * (white over dark headers, navy on light surfaces).
 */
export function SealLogo({
  className,
  variant = "default",
  tone = "white",
  showWordmark = true,
}: SealLogoProps) {
  const isHero = variant === "hero"

  return (
    <span
      className={cn("flex items-center", isHero ? "gap-3 md:gap-4" : "gap-2.5", className)}
      aria-label="Birdsong Realty Team"
    >
      <Image
        src={tone === "white" ? "/images/brand/seal-white.png" : "/images/brand/seal-navy.png"}
        alt="Birdsong Realty Team"
        width={744}
        height={744}
        priority={isHero}
        className={cn(
          "shrink-0 object-contain",
          isHero ? "h-16 w-16 md:h-24 md:w-24" : "h-11 w-11 md:h-12 md:w-12"
        )}
      />
      {showWordmark && (
        <span className="flex flex-col justify-center leading-none">
          <span
            className={cn(
              "font-display font-semibold tracking-tight",
              isHero ? "text-2xl md:text-4xl" : "text-lg md:text-xl"
            )}
          >
            Birdsong
          </span>
          <span
            className={cn(
              "font-sans font-medium uppercase",
              isHero
                ? "mt-1 text-[0.6rem] tracking-[0.42em] md:text-xs"
                : "mt-0.5 text-[0.5rem] tracking-[0.34em] md:text-[0.6rem]"
            )}
          >
            Realty&nbsp;Team
          </span>
        </span>
      )}
    </span>
  )
}
