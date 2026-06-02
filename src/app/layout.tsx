import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteChrome } from "@/components/layout/site-chrome"
import { AnalyticsProvider } from "@/components/providers/analytics-provider"
import { LenisProvider } from "@/components/providers/lenis-provider"
import { GlobalSchemas } from "@/components/seo"

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
    default: "Austin Real Estate | Birdsong Realty Team | Realty of America",
    template: "%s | Birdsong Realty Team | Realty of America",
  },
  description:
    "Find your dream home in Austin, TX with the Birdsong Realty Team at Realty of America. Luxury homes, new construction, waterfront properties, condos, and investment opportunities.",
  keywords: [
    "Austin real estate",
    "Austin homes for sale",
    "Austin TX realtor",
    "Realty of America Austin",
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
    title: "Austin Real Estate | Birdsong Realty Team | Realty of America",
    description:
      "Find your dream home in Austin, TX with the Birdsong Realty Team at Realty of America.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Birdsong Realty Team - Austin Real Estate at Realty of America",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Real Estate | Birdsong Realty Team | Realty of America",
    description:
      "Find your dream home in Austin, TX with the Birdsong Realty Team at Realty of America.",
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
      <head>
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
      </head>
      <body className="font-body antialiased">
        <GlobalSchemas />
        <LenisProvider>
          <AnalyticsProvider>
            <SiteChrome>{children}</SiteChrome>
          </AnalyticsProvider>
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
