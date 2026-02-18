import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnalyticsProvider } from "@/components/providers/analytics-provider"
import { LenisProvider } from "@/components/providers/lenis-provider"
import { GlobalSchemas } from "@/components/seo"
import { ChatWidget } from "@/components/chat"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://birdsongrealtyteam.com"),
  title: {
    default: "Austin Real Estate | Birdsong Realty Team | Keller Williams",
    template: "%s | Birdsong Realty Team | Keller Williams",
  },
  description:
    "Find your dream home in Austin, TX with the Birdsong Realty Team at Keller Williams. Luxury homes, new construction, waterfront properties, condos, and investment opportunities.",
  keywords: [
    "Austin real estate",
    "Austin homes for sale",
    "Austin TX realtor",
    "Keller Williams Austin",
    "Birdsong Realty Team",
    "Austin luxury homes",
    "Austin new construction",
    "Austin waterfront homes",
    "Austin condos",
    "Austin investment property",
  ],
  authors: [{ name: "Birdsong Realty Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://birdsongrealtyteam.com",
    siteName: "Birdsong Realty Team",
    title: "Austin Real Estate | Birdsong Realty Team | Keller Williams",
    description:
      "Find your dream home in Austin, TX with the Birdsong Realty Team at Keller Williams.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Birdsong Realty Team - Austin Real Estate at Keller Williams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Real Estate | Birdsong Realty Team | Keller Williams",
    description:
      "Find your dream home in Austin, TX with the Birdsong Realty Team at Keller Williams.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head />
      <body className="font-body antialiased">
        <GlobalSchemas />
        <LenisProvider>
          <AnalyticsProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AnalyticsProvider>
        </LenisProvider>
        {/* AI Chat Widget */}
        <ChatWidget />
        {/* Premium grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  )
}
