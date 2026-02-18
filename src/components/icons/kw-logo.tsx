import { cn } from "@/lib/utils"

interface KWLogoProps {
  className?: string
  size?: number
}

/**
 * Keller Williams logo placeholder component.
 * Renders a clean "KW" text-based logo in KW brand red (#B40101).
 * Replace with official KW SVG when available.
 */
export function KWLogo({ className, size = 48 }: KWLogoProps) {
  const fontSize = size * 0.45
  const borderWidth = Math.max(1.5, size * 0.04)

  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Keller Williams"
    >
      {/* Outer border */}
      <rect
        x={borderWidth / 2}
        y={borderWidth / 2}
        width={48 - borderWidth}
        height={48 - borderWidth}
        rx="4"
        stroke="#B40101"
        strokeWidth={borderWidth}
        fill="none"
      />
      {/* KW text */}
      <text
        x="24"
        y="26"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#B40101"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="bold"
        fontSize={fontSize}
        letterSpacing="-0.5"
      >
        KW
      </text>
      {/* Underline accent */}
      <line
        x1="10"
        y1="36"
        x2="38"
        y2="36"
        stroke="#B40101"
        strokeWidth={borderWidth * 0.75}
      />
    </svg>
  )
}
