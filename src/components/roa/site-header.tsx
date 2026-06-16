import Link from "next/link"
import { CoBrandLockup } from "@/components/roa/co-brand-lockup"

const navLinks = [
  { label: "Why ROA", href: "/roa#why" },
  { label: "The Economics", href: "/roa#economics" },
  { label: "How It Works", href: "/roa#process" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-700/10 bg-[#f7f4ee]/90 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        {/* Editorial co-brand lockup: Birdsong mark + official ROA logo */}
        <Link href="/roa" className="transition-opacity hover:opacity-80">
          <CoBrandLockup tone="light" variant="default" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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
            href="/roa/call"
            className="hidden rounded-pill border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-navy-600 transition hover:bg-neutral-50 sm:inline-flex"
          >
            Book a call
          </Link>
          <Link
            href="/roa/apply"
            className="inline-flex rounded-pill bg-navy-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-navy-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  )
}
