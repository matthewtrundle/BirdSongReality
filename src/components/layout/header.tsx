"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { Container } from "./container"
import { Button } from "@/components/ui"
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { MobileNav } from "./mobile-nav"

// Calm transitions
const calmTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1] as const,
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null)
    }
    if (openDropdown) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [openDropdown])

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setOpenDropdown(label)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  const isHomepage = pathname === "/"

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...calmTransition, delay: 0.1 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-primary-950/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 pt-0"
            : "bg-gradient-to-b from-black/40 via-black/20 to-transparent",
          isHomepage && !isScrolled ? "pt-4 md:pt-6" : ""
        )}
      >
        <Container>
          <nav className={cn(
            "flex items-center justify-between overflow-visible transition-all duration-500",
            isHomepage && !isScrolled ? "h-28 md:h-40" : "h-20"
          )}>
            {/* Logo */}
            <Link href="/" className="relative flex items-center z-10">
              <Image
                src="/logo.png"
                alt="Birdsong Realty Team"
                width={600}
                height={200}
                className={cn(
                  "w-auto transition-all duration-500",
                  isHomepage && !isScrolled
                    ? "h-24 md:h-36"
                    : "h-10 md:h-14"
                )}
                style={{
                  filter: "brightness(0) invert(1)",
                }}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const hasChildren = "children" in link && link.children && link.children.length > 0
                const isActive = pathname === link.href || (hasChildren && link.children?.some((child) => pathname === child.href))

                if (hasChildren) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => handleDropdownEnter(link.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "relative text-sm tracking-wide transition-colors duration-300 flex items-center gap-1",
                          isActive
                            ? "text-accent-400"
                            : isScrolled
                              ? "text-white/70 hover:text-white"
                              : "text-white/70 hover:text-white"
                        )}
                      >
                        {link.label}
                        <svg
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200",
                            openDropdown === link.label && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        {isActive && (
                          <motion.span
                            layoutId="nav-indicator"
                            className="absolute -bottom-1 left-0 right-0 h-px bg-accent-400"
                            transition={calmTransition}
                          />
                        )}
                      </Link>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                          >
                            <div className="bg-primary-900/95 backdrop-blur-md rounded-xl shadow-lg border border-white/10 py-2 min-w-[220px]">
                              {link.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={cn(
                                    "block px-4 py-2.5 text-sm transition-colors duration-150",
                                    pathname === child.href
                                      ? "bg-white/10 text-accent-400 font-medium"
                                      : "text-white/70 hover:bg-white/5 hover:text-white"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-sm tracking-wide transition-colors duration-300",
                      isActive
                        ? "text-accent-400"
                        : isScrolled
                          ? "text-white/70 hover:text-white"
                          : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-accent-400"
                        transition={calmTransition}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA - Confident, squared */}
            <div className="hidden md:flex items-center ml-6">
              <Button
                variant="cta"
                size="sm"
                className="px-6 py-2 text-sm tracking-wide border-0 rounded-md transition-all duration-300 whitespace-nowrap bg-accent-500/90 hover:bg-accent-400 text-primary-950 backdrop-blur-sm"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-3 -mr-3 transition-colors duration-300 text-white"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
