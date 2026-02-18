import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  StatsGrid,
  HighlightBox,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "Austin Real Estate Market | Trends, Prices & Analysis",
  description:
    "Get the latest Austin real estate market data, price trends, and expert analysis. Understand market conditions before buying or selling property in the Austin metro area.",
  keywords: [
    "Austin real estate market",
    "Austin home prices",
    "Central Texas real estate",
    "Austin market trends",
    "Austin home values",
  ],
  openGraph: {
    title: "Austin Real Estate Market | Trends, Prices & Analysis",
    description:
      "Get the latest Austin real estate market data, price trends, and expert analysis.",
    type: "website",
  },
}

export default function MarketPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market" },
  ]

  const marketStats = [
    { value: "$550K", label: "Median Home Price" },
    { value: "$295", label: "Price per Sq Ft" },
    { value: "8,500+", label: "Active Listings" },
    { value: "-2%", label: "YoY Price Change" },
  ]

  return (
    <>
      <SEOPageHero
        title="Austin Real Estate Market"
        subtitle="Current market conditions, pricing trends, and expert analysis for Austin metro area property buyers and sellers"
        breadcrumbs={breadcrumbs}
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                The Austin real estate market continues to attract buyers seeking
                primary residences, investment properties, and relocation opportunities.
                As one of the fastest-growing metros in the nation, Austin offers a diverse
                inventory ranging from affordable starter homes to luxury waterfront estates.
              </p>
            </ContentSection>

            <StatsGrid stats={marketStats} />

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Market Update - 2025
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Data reflects current market conditions. The Austin market has seen
                a correction from pandemic-era highs, creating opportunities for
                buyers while maintaining strong long-term fundamentals.
              </p>
            </HighlightBox>

            <ContentSection id="current-conditions">
              <h2>Current Market Conditions</h2>
              <p>
                The Austin real estate market in 2025 shows stabilization after
                the significant appreciation seen during 2020-2022. Median home prices
                currently hover around $550,000, representing a modest adjustment from
                the previous year. This correction has improved affordability for buyers
                while maintaining healthy equity for existing homeowners.
              </p>
              <p>
                The median price per square foot of approximately $295 varies
                significantly by neighborhood, with waterfront properties on Lake Travis
                and premium areas like Westlake and Barton Creek
                commanding considerably higher prices than suburban areas further out.
              </p>
            </ContentSection>

            <ContentSection id="inventory">
              <h2>Inventory &amp; Supply</h2>
              <p>
                Austin typically maintains over 8,500 active listings at any
                given time, making it one of the most active real estate markets in
                Texas. Current inventory levels are considered balanced, providing
                buyers with reasonable selection while supporting property values.
              </p>
              <p>
                New construction continues to add inventory, particularly in
                master-planned communities in the suburbs and exurbs. Developments
                in areas like Leander, Cedar Park, Dripping Springs, and Buda
                offer modern designs that appeal to today&apos;s buyers.
              </p>
            </ContentSection>

            <ContentSection id="price-ranges">
              <h2>Price Ranges by Property Type</h2>

              <div className="my-8 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary-50">
                      <th className="text-left p-4 font-display text-primary-900">Property Type</th>
                      <th className="text-left p-4 font-display text-primary-900">Price Range</th>
                      <th className="text-left p-4 font-display text-primary-900">Typical Sq Ft</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="p-4">Condos</td>
                      <td className="p-4">$200K - $600K</td>
                      <td className="p-4">600 - 1,500</td>
                    </tr>
                    <tr>
                      <td className="p-4">Townhomes</td>
                      <td className="p-4">$350K - $700K</td>
                      <td className="p-4">1,200 - 2,200</td>
                    </tr>
                    <tr>
                      <td className="p-4">Single Family</td>
                      <td className="p-4">$400K - $1.2M</td>
                      <td className="p-4">1,500 - 3,500</td>
                    </tr>
                    <tr>
                      <td className="p-4">Luxury/Waterfront</td>
                      <td className="p-4">$1M - $5M+</td>
                      <td className="p-4">3,000 - 7,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ContentSection>

            <ContentSection id="investment">
              <h2>Investment Outlook</h2>
              <p>
                Austin remains attractive for real estate investment due to its
                strong job market, continued population growth, and appeal as a
                relocation destination. Properties in desirable neighborhoods
                and near major employers can generate significant appreciation
                over time.
              </p>
              <p>
                Long-term appreciation in Austin has historically outpaced many
                Texas markets, driven by the tech sector boom, population growth,
                and consistent demand from both relocating professionals and investors.
              </p>
              <p>
                <Link href="/guides/investment-property" className="text-primary-600 hover:text-primary-800">
                  Read our Investment Property Guide →
                </Link>
              </p>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      {/* Market Reports Links */}
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-center text-primary-900 mb-12">
            Detailed Market Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Link
              href="/market/trends"
              className="p-8 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-xl text-primary-900 mb-3 group-hover:text-primary-700">
                Market Trends
              </h3>
              <p className="text-neutral-600">
                Historical data, seasonal patterns, and projected trends for the
                Austin real estate market.
              </p>
            </Link>
            <Link
              href="/market/price-guide"
              className="p-8 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-xl text-primary-900 mb-3 group-hover:text-primary-700">
                Price Guide
              </h3>
              <p className="text-neutral-600">
                Detailed pricing by neighborhood, property type, and location
                within the Austin metro area.
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Get a Free Market Analysis"
          description="Interested in buying or selling? Our team can provide a detailed analysis of current market conditions for your property type and target neighborhoods."
          primaryCTA={{ text: "Request Analysis", href: "/contact" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
