"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface CinematicDividerProps {
  image: string
  alt?: string
  height?: "sm" | "md" | "lg"
  overlay?: "dark" | "green" | "warm"
  children?: React.ReactNode
  /** Edge color for top blending */
  topBlend?: "dark" | "light"
  /** Edge color for bottom blending */
  bottomBlend?: "dark" | "light"
  /** Shorthand for both edges (overridden by topBlend/bottomBlend) */
  edgeBlend?: "dark" | "light"
}

export function CinematicDivider({
  image,
  alt = "",
  height = "md",
  overlay = "dark",
  children,
  topBlend,
  bottomBlend,
  edgeBlend = "light",
}: CinematicDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7])

  const heights = {
    sm: "h-[30vh] min-h-[200px]",
    md: "h-[40vh] min-h-[300px]",
    lg: "h-[50vh] min-h-[400px]",
  }

  const overlays = {
    dark: "from-primary-950/80 via-primary-950/40 to-primary-950/80",
    green: "from-primary-950/70 via-primary-900/30 to-primary-950/70",
    warm: "from-primary-950/70 via-black/20 to-primary-950/70",
  }

  const resolvedTop = topBlend ?? edgeBlend
  const resolvedBottom = bottomBlend ?? edgeBlend

  return (
    <div ref={ref} className={`relative ${heights[height]} overflow-hidden`}>
      {/* Parallax image */}
      <motion.div
        className="absolute inset-[-20%] w-[140%] h-[140%]"
        style={prefersReducedMotion ? {} : { y, scale }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${overlays[overlay]}`} />

      {/* Edge fade for seamless blending with surrounding sections */}
      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${resolvedTop === "dark" ? "from-primary-950" : "from-neutral-50"} to-transparent z-[1]`} />
      <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${resolvedBottom === "dark" ? "from-primary-950" : "from-neutral-50"} to-transparent z-[1]`} />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Optional content (text overlay) */}
      {children && (
        <motion.div
          className="relative z-10 h-full flex items-center justify-center"
          style={prefersReducedMotion ? {} : { opacity }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
