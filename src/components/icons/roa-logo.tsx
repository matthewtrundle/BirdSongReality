import { cn } from "@/lib/utils"

interface ROALogoProps {
  className?: string
  size?: number
}

/**
 * Realty of America logo placeholder component.
 * Renders a clean "ROA" text-based logo in Powersuit Blue (#10295A)
 * with a Power Pink (#DB1263) underline accent.
 * Replace with the official ROA SVG when available.
 */
export function ROALogo({ className, size = 48 }: ROALogoProps) {
  const fontSize = size * 0.34
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
      aria-label="Realty of America"
    >
      {/* Outer border */}
      <rect
        x={borderWidth / 2}
        y={borderWidth / 2}
        width={48 - borderWidth}
        height={48 - borderWidth}
        rx="4"
        stroke="#10295A"
        strokeWidth={borderWidth}
        fill="none"
      />
      {/* ROA text */}
      <text
        x="24"
        y="25"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#10295A"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="bold"
        fontSize={fontSize}
        letterSpacing="-0.5"
      >
        ROA
      </text>
      {/* Underline accent */}
      <line
        x1="10"
        y1="36"
        x2="38"
        y2="36"
        stroke="#DB1263"
        strokeWidth={borderWidth * 0.75}
      />
    </svg>
  )
}
