import Link from "next/link"

const footerCols = [
  {
    heading: "Buyers",
    links: [
      { label: "Search Listings", href: "/buy" },
      { label: "Featured Homes", href: "/featured" },
      { label: "Neighborhoods", href: "/neighborhoods" },
      { label: "Mortgage Tools", href: "/tools" },
    ],
  },
  {
    heading: "Sellers",
    links: [
      { label: "Sell Your Home", href: "/sell" },
      { label: "Home Valuation", href: "/valuation" },
      { label: "Marketing Plan", href: "/marketing" },
    ],
  },
  {
    heading: "Agents",
    links: [
      { label: "Join Birdsong", href: "/join" },
      { label: "Why Realty of America", href: "/why-roa" },
      { label: "Commission & Cap", href: "/commission" },
      { label: "Revenue Share", href: "/rev-share" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-tight">BIRDSONG</span>
              <span className="h-5 w-px bg-white/30" aria-hidden />
              <span className="text-xs font-medium uppercase tracking-wider text-white/70">
                Realty of America
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Patrick Birdsong. Austin, Texas. A smarter way to buy, sell,
              and rent — built by REALTORS®.
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
                  <li key={link.href}>
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
