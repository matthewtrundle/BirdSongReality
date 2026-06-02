"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { HeroParallax } from "@/components/hero"
import { PremiumButtonWrapper } from "@/components/motion"

// Premium easing curve
const easeOutExpo = [0.16, 1, 0.3, 1] as const

// Proof strip stats
const proofStats = [
  { value: "$250M+", label: "Closed Volume" },
  { value: "Top 3%", label: "Austin Agents" },
  { value: "600+", label: "Families Served" },
  { value: "5.0", label: "Google Rating" },
]

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-based fade and lift
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, 64])

  return (
    <HeroParallax
      images={[
        "/images/hero/austin-skyline-golden.jpg",
        "/images/hero/austin-luxury-twilight.jpg",
        "/images/hero/austin-skyline-dusk.jpg",
      ]}
      interval={7000}
      className="bg-primary-950"
    >
      <section
        ref={sectionRef}
        className="relative min-h-screen w-full flex flex-col justify-end"
      >
        {/* Right-edge vertical label — asymmetric anchor */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 hidden lg:flex items-center pr-7 z-10">
          <div className="flex flex-col items-center gap-5">
            <span className="h-20 w-px bg-white/25" />
            <span
              className="text-[10px] tracking-[0.45em] uppercase text-white/45 font-medium"
              style={{ writingMode: "vertical-rl" }}
            >
              Est. Austin &middot; Texas
            </span>
            <span className="h-20 w-px bg-white/25" />
          </div>
        </div>

        {/* Main content — anchored bottom-left, editorial */}
        <motion.div
          style={prefersReducedMotion ? {} : { opacity: contentOpacity, y: contentY }}
          className="relative z-10 pb-28 md:pb-32 pt-40"
        >
          <Container>
            <div className="max-w-4xl">
              {/* Kicker — Power Pink tick + identifier */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-3 w-px bg-highlight-500" />
                <span className="text-white/75 text-[11px] md:text-xs tracking-[0.32em] uppercase font-semibold">
                  Birdsong Realty Team &middot; Realty of America
                </span>
              </motion.div>

              {/* Headline — oversized, left-aligned, italic emphasis */}
              <h1 className="font-display font-normal text-white tracking-tight leading-[0.95] mb-8">
                <motion.span
                  className="block text-fluid-6xl"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: easeOutExpo, delay: 0.3 }}
                >
                  Sell Smarter.
                </motion.span>
                <motion.span
                  className="block text-fluid-6xl"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: easeOutExpo, delay: 0.42 }}
                >
                  Buy{" "}
                  <span className="relative inline-block italic">
                    Stronger.
                    {/* Power Pink underline swash */}
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="10"
                      viewBox="0 0 200 10"
                      fill="none"
                      preserveAspectRatio="none"
                      initial={prefersReducedMotion ? {} : { scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.85 }}
                    >
                      <path
                        d="M2 6.5C40 3 90 2.5 198 5.5"
                        stroke="rgb(219 18 99)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                </motion.span>
              </h1>

              {/* Subheadline */}
              <motion.p
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.5 }}
                className="text-fluid-lg text-white/75 max-w-xl mb-10 leading-relaxed font-light"
              >
                Data-driven strategy meets deep local expertise. We deliver results
                across Austin&apos;s most competitive markets&mdash;from first homes to
                luxury estates.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <PremiumButtonWrapper
                  glowColor="rgba(255, 255, 255, 0.25)"
                  shineColor="rgba(255, 255, 255, 0.3)"
                >
                  <Button
                    variant="cta"
                    size="lg"
                    className="px-9 py-4 text-base font-semibold bg-white hover:bg-white/90 text-primary-900 border-0 rounded-md transition-colors duration-300"
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
                    className="px-9 py-4 text-base font-medium border border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-md transition-all duration-300"
                    asChild
                  >
                    <Link href="/portfolio">View Sold Properties</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </motion.div>

        {/* Stat ribbon — full-width, left-aligned, editorial */}
        <motion.div
          style={prefersReducedMotion ? {} : { opacity: contentOpacity }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.75 }}
          className="relative z-10 border-t border-white/12 pb-6 md:pb-8"
        >
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2">
              {proofStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col pt-6 md:pt-7 relative pl-4 first:pl-0 md:pl-7"
                >
                  {/* divider */}
                  {i > 0 && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/12 hidden md:block" />
                  )}
                  <span className="flex items-baseline gap-2">
                    <span className="text-2xl md:text-4xl font-display font-medium text-white leading-none">
                      {stat.value}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-highlight-500" />
                  </span>
                  <span className="text-[10px] md:text-[11px] text-white/45 tracking-[0.18em] uppercase mt-2.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </motion.div>

        {/* Scroll hint — bottom-left aligned */}
        <motion.div
          className="absolute bottom-6 right-6 z-10 hidden md:flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.55, 0.55, 0], y: [-6, 0, 0, 8] }}
          transition={{
            delay: 1.4,
            duration: 2.6,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
            Scroll
          </span>
          <svg
            className="w-4 h-4 text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </motion.div>
      </section>
    </HeroParallax>
  )
}
