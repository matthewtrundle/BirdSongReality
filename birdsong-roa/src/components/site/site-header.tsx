import Link from "next/link"

const navLinks = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Rent", href: "/rent" },
  { label: "Our Team", href: "/team" },
  { label: "Join Birdsong", href: "/join" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        {/* Co-branded wordmark: BIRDSONG | REALTY OF AMERICA */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-lg font-bold tracking-tight text-navy-600">
            BIRDSONG
          </span>
          <span className="h-5 w-px bg-neutral-300" aria-hidden />
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
            Realty of America
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-navy-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/join"
            className="hidden rounded-pill border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-navy-600 transition hover:bg-neutral-50 sm:inline-flex"
          >
            Join Our Team
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-pill bg-navy-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-navy-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
