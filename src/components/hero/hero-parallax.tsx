"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

/**
 * HeroParallax - Rotating hero images with crossfade + Ken Burns zoom
 *
 * Architecture:
 * - Layer 1: Rotating background images with crossfade and Ken Burns
 * - Layer 2: Gradient overlays for depth + text legibility
 * - Layer 3: Subtle grain texture
 * - Layer 4: Content (static, crisp)
 */

interface HeroParallaxProps {
  /** Array of background images to rotate through */
  images?: string[]
  /** Single image (backward compat) */
  imageUrl?: string
  /** @deprecated Use imageUrl or images instead */
  backgroundUrl?: string
  /** Interval between image transitions in ms */
  interval?: number
  children: React.ReactNode
  className?: string
}

// SVG noise for grain texture (inline data URI)
const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`

export function HeroParallax({
  images,
  imageUrl = "/images/hero/austin-skyline.jpg",
  backgroundUrl,
  interval = 7000,
  children,
  className = "",
}: HeroParallaxProps) {
  const prefersReducedMotion = useReducedMotion()

  // Build the image list
  const imageList = images && images.length > 0
    ? images
    : [imageUrl || backgroundUrl || "/images/hero/austin-skyline.jpg"]

  const [currentIndex, setCurrentIndex] = useState(0)

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length)
  }, [imageList.length])

  useEffect(() => {
    if (imageList.length <= 1) return
    const timer = setInterval(advance, interval)
    return () => clearInterval(timer)
  }, [advance, interval, imageList.length])

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Layer 1: Rotating background images with crossfade + Ken Burns */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={prefersReducedMotion ? undefined : {
            animation: "kenBurns 25s ease-in-out infinite alternate",
          }}
        >
          <Image
            src={imageList[currentIndex]}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={currentIndex === 0}
            quality={85}
          />
        </motion.div>
      </AnimatePresence>

      {/* Preload next image */}
      {imageList.length > 1 && (
        <div className="hidden">
          <Image
            src={imageList[(currentIndex + 1) % imageList.length]}
            alt=""
            fill
            sizes="100vw"
            quality={85}
          />
        </div>
      )}

      {/* Layer 2a: Heavy gradient overlay — image complements, text dominates */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to bottom, rgba(18,35,8,0.82) 0%, rgba(18,35,8,0.65) 35%, rgba(18,35,8,0.6) 55%, rgba(18,35,8,0.82) 100%)",
        }}
      />

      {/* Layer 2b: Strong vignette — pushes focus to center text */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 20%, rgba(18,35,8,0.7) 100%)",
        }}
      />

      {/* Layer 2c: Subtle warm light leak from top-left */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-[1]"
        style={{
          background: `
            radial-gradient(ellipse at 25% 30%, rgba(201,169,98,0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 70%, rgba(201,169,98,0.08) 0%, transparent 40%)
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Layer 3: Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay z-[1]"
        style={{
          backgroundImage: GRAIN_SVG,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Layer 4: Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}

// Export index file helper
export { HeroParallax as default }
