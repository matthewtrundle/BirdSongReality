import { cn } from "@/lib/utils"

interface BrandLockupProps {
  className?: string
  /** "hero" = large homepage treatment, "default" = compact header/scrolled */
  variant?: "hero" | "default"
}

/**
 * Birdsong Realty Team brand lockup.
 * A crisp, vector songbird mark paired with a Playfair wordmark and
 * tracked "REALTY TEAM" sub-label. Renders in `currentColor`, so the
 * parent controls the color (white over dark headers, navy on light).
 */
export function BrandLockup({ className, variant = "default" }: BrandLockupProps) {
  const isHero = variant === "hero"

  return (
    <span
      className={cn("flex items-center", isHero ? "gap-3 md:gap-4" : "gap-2.5", className)}
      aria-label="Birdsong Realty Team"
    >
      <SongbirdMark
        className={cn(
          "shrink-0",
          isHero ? "h-14 w-14 md:h-20 md:w-20" : "h-9 w-9 md:h-11 md:w-11"
        )}
      />
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
    </span>
  )
}

/** Stylized perched songbird, mid-song. Single-color, uses currentColor. */
function SongbirdMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Birdsong"
    >
      {/* Body + head + tail silhouette */}
      <path
        d="M13.5 44.5c-1.2-9.4 4.6-17.6 14.4-18.7 0.9-3.4 3.3-6.2 6.6-7.6-0.7 2.4-0.6 4.6 0.1 6.6 7.6 0.5 13.9 4.9 16.9 11.9-3.1-2.1-6.3-3.2-9.6-3.4 2.1 2.6 3.2 5.8 3.1 9.4-1.6-3.1-3.7-5.4-6.2-7-0.2 6.7-4.7 12-11.4 12.9 2.2-2.5 3.3-5.1 3.4-7.9-4.9 3.3-11.1 4.2-16.8 2.9 2.7-0.4 5-1.2 6.9-2.4-3.1-0.1-5.7-0.9-7.9-2.6 0.1 1.3 0.3 2.5 0.6 3.7-0.1-0.1-0.1-0.1-0.1-0.2z"
        fill="currentColor"
      />
      {/* Beak */}
      <path d="M34.4 20.6l5.4-1.1-4.1 3.5z" fill="currentColor" />
      {/* Eye */}
      <circle cx="33.2" cy="24.4" r="1.5" fill="#10295A" className="opacity-90" />
      {/* Song notes */}
      <g fill="currentColor" className="opacity-80">
        <circle cx="49" cy="17" r="2" />
        <rect x="50.4" y="9.5" width="1.4" height="8" rx="0.7" />
        <circle cx="56" cy="21" r="1.5" />
        <rect x="57.1" y="15" width="1.1" height="6.5" rx="0.55" />
      </g>
    </svg>
  )
}
