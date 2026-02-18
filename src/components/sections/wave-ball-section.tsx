"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "@/components/layout"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function WaveBallSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-24 md:py-32">
      <Container>
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Fish Tank Scene with premium entrance */}
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
          >
            <div className="aspect-[4/3] max-w-xl mx-auto relative">
              {/* Tank Frame with enhanced glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-3 shadow-2xl"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25), 0 0 60px rgba(45,80,22,0.2)",
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Image container */}
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-primary-950">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-white/15 via-transparent to-transparent" />
                  </div>

                  <Image
                    src="/images/hero/hill-country-aerial.jpg"
                    alt="Austin Hill Country aerial view"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Tank stand/base */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-xl shadow-lg"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Content - slides in from right */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 mb-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.4 }}
              >
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent to-primary-400"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 48 } : { width: 0 }}
                  transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.5 }}
                />
                <span className="text-primary-600 text-sm tracking-[0.2em] uppercase font-medium">
                  Austin Living
                </span>
              </motion.div>

              <motion.h2
                className="text-fluid-4xl font-display font-normal text-neutral-900 tracking-tight mb-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.5 }}
              >
                Where Hill Country{" "}<br />
                Meets Home
              </motion.h2>

              <motion.p
                className="text-lg text-neutral-600 leading-relaxed mb-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.6 }}
              >
                There's something special about Austin — the live music drifting
                from every corner, the Hill Country sunsets, the vibrant food scene,
                and the welcoming community. Whether you're drawn by the tech
                industry, the outdoor lifestyle, or the creative energy, we're here to
                help you find your place in Austin.
              </motion.p>

              {/* Stats with glass morphism and pop animation */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div
                  className="text-center p-5 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 backdrop-blur-sm border border-primary-100/50 shadow-lg shadow-primary-100/20"
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.7 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(45,80,22,0.15)",
                  }}
                >
                  <div className="text-2xl font-display text-primary-900 mb-1">
                    300+
                  </div>
                  <div className="text-sm text-primary-700">days of sunshine</div>
                </motion.div>
                <motion.div
                  className="text-center p-5 rounded-xl bg-gradient-to-br from-accent-50 to-accent-100/50 backdrop-blur-sm border border-accent-100/50 shadow-lg shadow-accent-100/20"
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.8 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(139,105,20,0.15)",
                  }}
                >
                  <div className="text-2xl font-display text-primary-900 mb-1">
                    #1
                  </div>
                  <div className="text-sm text-primary-700">place to live in TX</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
