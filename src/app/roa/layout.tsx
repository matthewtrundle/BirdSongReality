import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { SiteHeader } from "@/components/roa/site-header"
import { SiteFooter } from "@/components/roa/site-footer"

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  title: "Birdsong Realty Team | Realty of America",
  description:
    "Patrick Birdsong helps buyers, sellers, and renters move confidently through Austin's real estate market — backed by the modern tools and national network of Realty of America.",
}

export default function RoaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`roa-scope ${figtree.variable} bg-white text-neutral-900`}>
      <SiteHeader />
      <main className="min-h-screen">{children}</main>
      <SiteFooter />
    </div>
  )
}
