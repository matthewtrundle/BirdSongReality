"use client"

import Link from "next/link"
import { Container } from "./container"
import { ComplianceBar } from "./compliance-bar"
import { BrokerageInfo } from "./brokerage-info"
import { KWLogo } from "@/components/icons/kw-logo"
import siteConfig from "@/data/site-config.json"

const footerLinks = {
  buy: [
    { href: "/portfolio", label: "All Properties" },
    { href: "/austin-luxury-homes", label: "Luxury Homes" },
    { href: "/austin-new-construction", label: "New Construction" },
    { href: "/austin-waterfront-homes", label: "Waterfront Homes" },
    { href: "/austin-condos-townhomes", label: "Condos & Townhomes" },
    { href: "/austin-investment-properties", label: "Investment Properties" },
  ],
  neighborhoods: [
    { href: "/neighborhoods", label: "All Neighborhoods" },
    { href: "/neighborhoods/zilker", label: "Zilker" },
    { href: "/neighborhoods/south-congress", label: "South Congress" },
    { href: "/neighborhoods/east-austin", label: "East Austin" },
    { href: "/neighborhoods/tarrytown", label: "Tarrytown" },
    { href: "/neighborhoods/west-lake-hills", label: "West Lake Hills" },
  ],
  resources: [
    { href: "/market", label: "Market Overview" },
    { href: "/blog", label: "Blog" },
    { href: "/seller-services", label: "Seller Services" },
    { href: "/guides", label: "Guides" },
    { href: "/tools", label: "Tools & Calculators" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

export function Footer() {
  const { site, agent, contact, social, compliance } = siteConfig

  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        {/* ============================================= */}
        {/* Main Footer Content                           */}
        {/* ============================================= */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">

          {/* Brand & Agent Info Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            {/* Team Branding */}
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-semibold text-white">
                {site.name}
              </span>
            </Link>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
              {site.tagline}
            </p>

            {/* Agent & License Info */}
            <div className="mt-6 space-y-1">
              {/* Agent name - displayed prominently */}
              <p className="text-white font-semibold text-base">
                {agent.name}, {agent.title}
              </p>
              <p className="text-neutral-400 text-xs">
                License #{agent.license}
              </p>
              {/* Broker name - must be at least half the size of agent name (16px agent / 2 = 8px min; using 12px) */}
              <p className="text-neutral-400 text-xs">
                Brokered by{" "}
                <span className="font-medium" style={{ fontSize: "max(0.75rem, 8pt)" }}>
                  {agent.marketCenter}
                </span>
              </p>
            </div>

            {/* KW Branding */}
            <div className="mt-5 flex items-center gap-3">
              <KWLogo size={36} />
              <div>
                <p className="text-white text-sm font-medium">{agent.brokerage}</p>
                <p className="text-neutral-500 text-xs">{agent.marketCenter}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-5 space-y-1">
              <address className="not-italic text-neutral-400 text-xs leading-relaxed">
                {contact.address.street !== "TBD" && (
                  <>{contact.address.street}, </>
                )}
                {contact.address.city}, {contact.address.state} {contact.address.zip}
              </address>
              <p className="text-neutral-400 text-xs">
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </p>
              <p className="text-neutral-500 text-xs">
                {contact.hours}
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-4">
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Buy Column */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Buy</h4>
            <ul className="space-y-2">
              {footerLinks.buy.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods Column */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Neighborhoods</h4>
            <ul className="space-y-2">
              {footerLinks.neighborhoods.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Equal Housing Opportunity */}
            <div className="mt-8 flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-neutral-500"
                role="img"
                aria-label="Equal Housing Opportunity"
              >
                <path
                  d="M12 2L2 10h3v12h14V10h3L12 2z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                />
                <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" />
                <line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-neutral-500 text-[10px] uppercase tracking-wider leading-tight">
                Equal Housing<br />Opportunity
              </span>
            </div>
          </div>
        </div>

        {/* ============================================= */}
        {/* TREC Compliance Bar (Legally Required)        */}
        {/* ============================================= */}
        <div className="border-t border-neutral-800">
          <ComplianceBar variant="light" />
        </div>

        {/* ============================================= */}
        {/* Brokerage Disclaimer                          */}
        {/* ============================================= */}
        <div className="border-t border-neutral-800 py-4">
          <p className="text-neutral-500 text-xs text-center italic">
            {compliance.brokerDisclaimer}
          </p>
        </div>

        {/* ============================================= */}
        {/* Bottom Bar - Copyright & Legal Links          */}
        {/* ============================================= */}
        <div className="py-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-500 hover:text-white transition-colors text-xs"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
