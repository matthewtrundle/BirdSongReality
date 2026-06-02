import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  title: {
    default: "Birdsong Realty Team | Realty of America",
    template: "%s | Birdsong Realty Team",
  },
  description:
    "Buy, sell, and rent in Austin, TX with the Birdsong Realty Team — powered by Realty of America. Expert agents, modern tools, a better real estate experience.",
  keywords: [
    "Austin real estate",
    "Realty of America Austin",
    "Birdsong Realty Team",
    "join Realty of America",
    "Austin homes for sale",
    "agent recruiting Austin",
  ],
  authors: [{ name: "Birdsong Realty Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Birdsong Realty Team",
    title: "Birdsong Realty Team | Realty of America",
    description:
      "A smarter way to buy, sell, and rent in Austin — with the Birdsong Team at Realty of America.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="bg-white text-neutral-900 antialiased">
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
