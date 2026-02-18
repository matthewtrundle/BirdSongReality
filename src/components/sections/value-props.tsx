"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "@/components/layout"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1] as const

const valueProps = [
  {
    number: "01",
    title: "Austin Expertise",
    description:
      "We know Austin inside and out — from Zilker to Georgetown, South Congress to Steiner Ranch. Our deep knowledge of neighborhoods, market trends, and local nuances gives you an edge.",
    highlights: ["Deep Austin market knowledge", "Neighborhood specialists", "Data-driven insights"],
    image: "/images/hero/hill-country-aerial.jpg",
  },
  {
    number: "02",
    title: "Honest Guidance",
    description:
      "Real estate is one of the biggest decisions you'll make. We provide straightforward advice, transparent communication, and always put your interests first — no pressure, no games.",
    highlights: ["Transparent communication", "Client-first approach", "Trusted advisors"],
    image: "/images/hero/austin-neighborhood.jpg",
  },
  {
    number: "03",
    title: "Concierge Service",
    description:
      "From your first search to the closing table and beyond, the Birdsong Realty Team handles every detail. We make buying or selling in Austin seamless and stress-free.",
    highlights: ["Dedicated team support", "Full transaction management", "Post-closing resources"],
    image: "/images/hero/austin-south-congress.jpg",
  },
]

// SVG noise for grain texture
const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`

function ValueCard({
  item,
  index,
  isInView,
  prefersReducedMotion,
}: {
  item: typeof valueProps[number]
  index: number
  isInView: boolean
  prefersReducedMotion: boolean
}) {
  const isReversed = index % 2 !== 0

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 + index * 0.15 }}
      className={`grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl bg-primary-900/50 border border-white/[0.06] ${isReversed ? "" : ""}`}
    >
      {/* Image side */}
      <div className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${isReversed ? "md:order-2" : ""}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Subtle overlay to soften the image */}
        <div className="absolute inset-0 bg-primary-950/30" />
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
          style={{ backgroundImage: GRAIN_SVG, backgroundRepeat: "repeat" }}
        />
        {/* Number badge on image */}
        <motion.div
          className="absolute top-6 left-6 w-12 h-12 rounded-full bg-accent-500/90 backdrop-blur-sm flex items-center justify-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.5 + index * 0.15 }}
        >
          <span className="text-sm font-semibold text-primary-950 tracking-wider">{item.number}</span>
        </motion.div>
      </div>

      {/* Content side */}
      <div className={`p-8 md:p-12 lg:p-14 flex flex-col justify-center ${isReversed ? "md:order-1" : ""}`}>
        <motion.h3
          className="text-2xl md:text-3xl font-display font-normal text-white tracking-tight mb-4"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.35 + index * 0.15 }}
        >
          {item.title}
        </motion.h3>

        <motion.div
          className="w-12 h-px bg-accent-500/60 mb-6"
          initial={prefersReducedMotion ? {} : { scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.4 + index * 0.15 }}
          style={{ originX: 0 }}
        />

        <motion.p
          className="text-white/60 leading-relaxed mb-8"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.45 + index * 0.15 }}
        >
          {item.description}
        </motion.p>

        {/* Highlights */}
        <ul className="space-y-3">
          {item.highlights.map((highlight, idx) => (
            <motion.li
              key={idx}
              className="flex items-center gap-3 text-sm text-white/50"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, ease: easeOutExpo, delay: 0.55 + index * 0.15 + idx * 0.08 }}
            >
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500/70" />
              {highlight}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function ValueProps() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section className="relative overflow-hidden bg-primary-950 py-24 md:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-primary-800/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent-900/10 to-transparent blur-3xl" />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: GRAIN_SVG, backgroundRepeat: "repeat" }}
        />
      </div>

      <Container className="relative">
        <div ref={sectionRef}>
          {/* Section header */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
            >
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-accent-500/60"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
              />
              <span className="text-accent-400/80 text-sm tracking-[0.2em] uppercase font-medium">
                Why Choose Us
              </span>
              <motion.div
                className="h-px w-12 bg-gradient-to-l from-transparent to-accent-500/60"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
              />
            </motion.div>
            <motion.h2
              className="text-fluid-4xl md:text-fluid-5xl font-display font-normal text-white tracking-tight mb-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
            >
              The Difference is in<br className="hidden md:block" /> the Details
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
            >
              Buying or selling a home in Austin is about more than square footage.
              It&apos;s about finding the right fit for your life.
            </motion.p>
          </motion.div>

          {/* Value prop cards — alternating image/text layout */}
          <div className="space-y-8 md:space-y-10">
            {valueProps.map((item, index) => (
              <ValueCard
                key={item.title}
                item={item}
                index={index}
                isInView={isInView}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
