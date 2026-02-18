"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { HeroParallax } from "@/components/hero"
import { PremiumButtonWrapper } from "@/components/motion"

// Premium easing curves
const easeOutExpo = [0.16, 1, 0.3, 1] as const

// Proof strip stats
const proofStats = [
  { value: "$85M+", label: "Closed Volume" },
  { value: "Top 3%", label: "Austin Agents" },
  { value: "250+", label: "Families Served" },
  { value: "5.0", label: "Google Rating" },
]

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-based fade and scale
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 50])

  return (
    <HeroParallax
      images={[
        "/images/hero/austin-skyline-golden.jpg",
        "/images/hero/austin-luxury-twilight.jpg",
        "/images/hero/austin-skyline-dusk.jpg",
      ]}
      interval={7000}
      className="flex items-center justify-center bg-primary-950"
    >
      <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center w-full">
        {/* Content - Centered with scroll fade, no glass panel */}
        <motion.div
          style={prefersReducedMotion ? {} : {
            opacity: contentOpacity,
            scale: contentScale,
            y: contentY,
          }}
        >
          <Container className="relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
              {/* Overline - brokerage identifier */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
                className="mb-8"
              >
                <span className="text-accent-400 text-xs tracking-[0.3em] uppercase font-medium inline-flex items-center gap-3">
                  <span className="w-8 h-px bg-accent-400/60" />
                  Birdsong Realty Team &middot; Austin
                  <span className="w-8 h-px bg-accent-400/60" />
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                className="text-fluid-6xl font-display font-normal text-white tracking-tight leading-[1.05] mb-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.3 }}
              >
                Sell Smarter.<br />Buy Stronger.
              </motion.h1>

              {/* Gold accent divider */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.4 }}
                className="w-20 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent mb-6 mx-auto"
              />

              {/* Subheadline */}
              <motion.p
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.45 }}
                className="text-fluid-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-light"
              >
                Data-driven strategy meets local expertise.
                The Birdsong Realty Team delivers results across Austin&apos;s most competitive markets.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.55 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              >
                <PremiumButtonWrapper
                  glowColor="rgba(166, 124, 26, 0.4)"
                  shineColor="rgba(255, 255, 255, 0.3)"
                >
                  <Button
                    variant="cta"
                    size="lg"
                    className="px-10 py-4 text-base font-semibold bg-accent-500 hover:bg-accent-400 text-primary-950 border-0 rounded-md transition-colors duration-300"
                    asChild
                  >
                    <Link href="/contact">Get Your Home Valuation</Link>
                  </Button>
                </PremiumButtonWrapper>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-10 py-4 text-base font-medium border border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-md transition-all duration-300"
                    asChild
                  >
                    <Link href="/portfolio">View Sold Properties</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Proof strip - Minimal, integrated into the layout */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.7 }}
                className="w-full max-w-2xl"
              >
                <div className="flex justify-center items-center gap-0 border-t border-white/10 pt-8">
                  {proofStats.map((stat, i) => (
                    <div key={stat.label} className="flex flex-col items-center flex-1 relative">
                      <span className="text-2xl sm:text-3xl font-display font-bold text-white">
                        {stat.value}
                      </span>
                      <span className="text-[10px] sm:text-xs text-white/40 tracking-wider uppercase mt-1.5">
                        {stat.label}
                      </span>
                      {i < proofStats.length - 1 && (
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </motion.div>

        {/* Animated scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
            y: [-10, 0, 0, 10],
          }}
          transition={{
            delay: 1.5,
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-5 h-5 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </motion.div>
      </section>
    </HeroParallax>
  )
}
