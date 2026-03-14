"use client"

import { useRef } from "react"

interface Hero3DProps {
  className?: string
}

// Shared background layer - always visible
function BackgroundLayer() {
  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/hero/austin-skyline.jpg")`,
        }}
      />
      {/* Lighter gradient overlay - lets more photo show through */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/50 via-primary-900/35 to-primary-800/25" />
    </>
  )
}

// Overlay effects - always on top
function OverlayEffects() {
  return (
    <>
      {/* Gradient for text legibility - lighter on right side */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/40 via-primary-900/10 to-transparent pointer-events-none" />

      {/* Subtle vignette - reduced opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 60%, rgba(15,30,50,0.25) 100%)",
        }}
      />

      {/* Subtle animated light shimmer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(201,169,98,0.1) 25%, transparent 50%, rgba(201,169,98,0.05) 75%, transparent 100%)",
          animation: "shimmer 8s ease-in-out infinite",
        }}
      />
    </>
  )
}

export function Hero3D({ className = "" }: Hero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      {/* Background is ALWAYS visible - never hidden */}
      <BackgroundLayer />

      {/* 3D Globe removed for now */}

      {/* Overlays - always on top */}
      <OverlayEffects />
    </div>
  )
}
