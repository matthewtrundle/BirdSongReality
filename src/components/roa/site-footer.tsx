import Image from "next/image"
import Link from "next/link"

const footerCols = [
  {
    heading: "Join the Team",
    links: [
      { label: "Apply Now", href: "/roa/apply" },
      { label: "Book a Call", href: "/roa/call" },
      { label: "Why Realty of America", href: "/roa#why" },
      { label: "The Economics", href: "/roa#economics" },
    ],
  },
  {
    heading: "For Agents",
    links: [
      { label: "Revenue Share", href: "/roa#why" },
      { label: "Equity & Ownership", href: "/roa#economics" },
      { label: "Coaching & Support", href: "/roa#why" },
      { label: "How It Works", href: "/roa#process" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Birdsong", href: "/roa" },
      { label: "Realty of America", href: "https://www.realtyofamerica.com" },
      { label: "Contact", href: "/roa/call" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-tight">BIRDSONG</span>
              <span className="h-5 w-px bg-white/30" aria-hidden />
              <Image
                src="/images/roa/roa-horizontal-white.svg"
                alt="Realty of America"
                width={150}
                height={14}
                className="h-3.5 w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Empowering agents, simplifying real estate. Birdsong Realty Team
              is growing in Austin, Texas with Realty of America.
            </p>
            <p className="mt-6 text-sm text-white/70">
              <a href="mailto:hello@birdsongrealtyteam.com" className="hover:text-white">
                hello@birdsongrealtyteam.com
              </a>
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Birdsong Realty Team. Realty of America.
            All rights reserved.
          </p>
          <p className="text-white/40">
            Equal Housing Opportunity. Licensed in Texas.
          </p>
        </div>
      </div>
    </footer>
  )
}
