import { Metadata } from "next"
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
  title: "Austin Market Trends 2025 | Real Estate Analysis",
  description:
    "Current Austin real estate market trends for 2025. Price movements, inventory levels, sales velocity, and market outlook for the Central Texas metro.",
  keywords: [
    "Austin market trends",
    "Austin real estate 2025",
    "Central Texas home market",
    "Austin property trends",
    "Austin housing market",
  ],
  openGraph: {
    title: "Austin Market Trends 2025 | Real Estate Analysis",
    description:
      "Current Austin real estate market trends for 2025.",
    type: "website",
  },
}

export default function MarketTrendsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market", href: "/market" },
    { label: "Market Trends" },
  ]

  const stats = [
    { value: "$550K", label: "Median price" },
    { value: "-2%", label: "YoY change" },
    { value: "55", label: "Days on market" },
    { value: "8,500+", label: "Active listings" },
  ]

  return (
    <>
      <SEOPageHero
        title="Austin Market Trends"
        subtitle="Current real estate market analysis and trends for 2025"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                The Austin real estate market continues to be one of Texas&apos;s
                most dynamic metros. After significant appreciation in
                recent years, the market is now finding equilibrium with modest
                adjustments and healthy transaction volumes.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="current-conditions">
              <h2>Current Market Conditions</h2>
              <p>
                The Austin market in early 2025 shows characteristics of
                a balanced market after several years of strong appreciation:
              </p>
              <ul>
                <li><strong>Price Stability:</strong> Prices have moderated slightly (-2% YoY)</li>
                <li><strong>Inventory Increase:</strong> More options for buyers than 2021-2022</li>
                <li><strong>Days on Market:</strong> Properties taking moderate time to sell (45-60 days)</li>
                <li><strong>Negotiation:</strong> Buyers have more room to negotiate</li>
                <li><strong>Quality Matters:</strong> Well-maintained properties still sell quickly</li>
              </ul>
            </ContentSection>

            <ContentSection id="price-trends">
              <h2>Price Trends</h2>

              <h3>Median Price History</h3>
              <div className="my-6 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>2020:</strong> $340,000</li>
                  <li><strong>2021:</strong> $450,000</li>
                  <li><strong>2022:</strong> $575,000</li>
                  <li><strong>2023:</strong> $560,000</li>
                  <li><strong>2024:</strong> $555,000</li>
                  <li><strong>2025 (current):</strong> $550,000</li>
                </ul>
              </div>

              <h3>Price Per Square Foot</h3>
              <p>
                Average price per square foot has followed similar patterns:
              </p>
              <ul>
                <li><strong>2020:</strong> ~$210/sqft</li>
                <li><strong>2022 Peak:</strong> ~$320/sqft</li>
                <li><strong>Current:</strong> ~$295/sqft</li>
              </ul>
              <p>
                This represents significant appreciation from pre-pandemic levels
                while showing modest cooling from the 2022 peak.
              </p>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Market Context
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Austin remains one of the fastest-growing metros in the United States,
                anchored by a thriving tech sector and strong population growth.
                Despite modest price adjustments, values remain well above
                pre-pandemic levels, reflecting sustained demand for Central Texas property.
              </p>
            </HighlightBox>

            <ContentSection id="inventory">
              <h2>Inventory Analysis</h2>

              <h3>Current Inventory</h3>
              <p>
                Active listings in the Austin metro currently number over 8,500
                properties across all types:
              </p>
              <ul>
                <li><strong>Single-Family:</strong> ~5,500 listings</li>
                <li><strong>Condos/Townhomes:</strong> ~2,000 listings</li>
                <li><strong>Lots/Land:</strong> ~1,000 listings</li>
              </ul>

              <h3>Months of Supply</h3>
              <p>
                Months of supply (how long it would take to sell current inventory
                at current sales pace) is approximately 4-5 months, indicating
                a balanced market. For comparison:
              </p>
              <ul>
                <li><strong>2021:</strong> 0.5-1 months (extreme seller&apos;s market)</li>
                <li><strong>2022:</strong> 1-2 months (seller&apos;s market)</li>
                <li><strong>2023:</strong> 3-4 months (transitioning)</li>
                <li><strong>Current:</strong> 4-5 months (balanced)</li>
              </ul>
            </ContentSection>

            <ContentSection id="sales-activity">
              <h2>Sales Activity</h2>

              <h3>Transaction Volume</h3>
              <p>
                Monthly closed sales have normalized from the frenzy of 2021-2022:
              </p>
              <ul>
                <li>Average 2,500-3,500 closed sales per month metro-wide</li>
                <li>Seasonal variation (higher in spring/summer)</li>
                <li>Cash purchases remain significant (25-30% of sales)</li>
              </ul>

              <h3>Days on Market</h3>
              <p>
                Average days on market has increased as the market balances:
              </p>
              <ul>
                <li><strong>2021:</strong> 7-15 days average</li>
                <li><strong>2022:</strong> 20-35 days average</li>
                <li><strong>Current:</strong> 45-60 days average</li>
              </ul>
              <p>
                Well-priced properties in desirable locations still sell faster,
                while overpriced listings may sit for extended periods.
              </p>
            </ContentSection>

            <ContentSection id="segment-performance">
              <h2>Market Segment Performance</h2>

              <h3>By Property Type</h3>
              <ul>
                <li><strong>Waterfront Homes (Lake Travis/Austin):</strong> Holding value best; limited supply</li>
                <li><strong>Central Austin Homes:</strong> Stable demand; location premium persists</li>
                <li><strong>Condos:</strong> More price sensitivity; higher inventory downtown</li>
                <li><strong>Suburban New Construction:</strong> Competitive pricing from builders</li>
                <li><strong>Vacant Land:</strong> Slower sales; builders cautious</li>
              </ul>

              <h3>By Price Point</h3>
              <ul>
                <li><strong>Under $400K:</strong> Limited inventory; quick sales when priced right</li>
                <li><strong>$400K-$700K:</strong> Most active segment; moderate competition</li>
                <li><strong>$700K-$1.2M:</strong> Adequate supply; selective buyers</li>
                <li><strong>Over $1.2M:</strong> Luxury market; longer marketing periods</li>
              </ul>
            </ContentSection>

            <ContentSection id="buyer-profile">
              <h2>Buyer Profile Trends</h2>

              <h3>Primary Buyer Types</h3>
              <ul>
                <li><strong>Primary Residence (Relocation):</strong> ~50% of purchases</li>
                <li><strong>Primary Residence (Local Move):</strong> ~25% of purchases</li>
                <li><strong>Investment/Rental:</strong> ~15% of purchases</li>
                <li><strong>Second Home:</strong> ~10% of purchases</li>
              </ul>

              <h3>Geographic Origins (Relocators)</h3>
              <p>
                Most relocating buyers come from:
              </p>
              <ul>
                <li>California (Bay Area, LA): ~30%</li>
                <li>Other Texas metros (DFW, Houston, SA): ~25%</li>
                <li>Northeast (NYC, NJ, CT): ~15%</li>
                <li>Pacific Northwest (Seattle, Portland): ~10%</li>
                <li>Other: ~20%</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Opportunity for Buyers
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Current market conditions favor patient, prepared buyers. With
                increased inventory and longer marketing times, buyers can be
                more selective and have room to negotiate. Properties that sat
                during peak season may offer especially attractive opportunities.
              </p>
            </HighlightBox>

            <ContentSection id="seasonal-patterns">
              <h2>Seasonal Patterns</h2>
              <p>
                Austin real estate follows predictable seasonal patterns:
              </p>
              <ul>
                <li><strong>Spring (March-May):</strong> Peak listing and buying activity</li>
                <li><strong>Summer (June-August):</strong> Strong activity; family moves before school</li>
                <li><strong>Fall (Sept-Nov):</strong> Slower but motivated buyers</li>
                <li><strong>Winter (Dec-Feb):</strong> Lowest activity; potential deals</li>
              </ul>
              <p>
                Sellers often list in spring to capture peak buyer traffic.
                Buyers may find less competition and more negotiating power
                in off-season months.
              </p>
            </ContentSection>

            <ContentSection id="economic-factors">
              <h2>Economic Factors</h2>

              <h3>Interest Rates</h3>
              <p>
                Higher mortgage rates have impacted affordability:
              </p>
              <ul>
                <li>Rates in 6.5-7.0% range for primary residences</li>
                <li>Monthly payments significantly higher than 2020-2021</li>
                <li>Cash buyers have competitive advantage</li>
                <li>Some buyers waiting for rate reductions</li>
              </ul>

              <h3>Tech Sector &amp; Employment</h3>
              <p>
                Austin&apos;s tech economy is a key market driver:
              </p>
              <ul>
                <li>Major employers (Apple, Tesla, Google, Meta) continue hiring</li>
                <li>Some tech layoffs have slightly tempered demand</li>
                <li>Startup ecosystem continues to attract talent</li>
                <li>Diversifying economy (biotech, film, clean energy) provides stability</li>
              </ul>

              <h3>Texas Economy</h3>
              <p>
                The broader Texas economy supports the market:
              </p>
              <ul>
                <li>Strong job growth across sectors</li>
                <li>Population growth continues (Austin metro gaining ~150 people/day)</li>
                <li>Corporate relocations driving housing demand</li>
                <li>No state income tax attracts high earners</li>
              </ul>
            </ContentSection>

            <ContentSection id="outlook">
              <h2>Market Outlook</h2>

              <h3>Near-Term (2025)</h3>
              <ul>
                <li>Prices expected to stabilize at current levels</li>
                <li>Inventory likely to remain elevated</li>
                <li>Buyer-friendly conditions to persist</li>
                <li>Well-priced properties will sell; overpriced will sit</li>
              </ul>

              <h3>Longer-Term Factors</h3>
              <ul>
                <li><strong>Positive:</strong> Tech sector growth, population influx, no income tax</li>
                <li><strong>Watchpoints:</strong> Affordability concerns, property tax rates, water supply</li>
                <li><strong>Structural:</strong> Austin&apos;s growth trajectory supports long-term values</li>
              </ul>

              <h3>Investment Perspective</h3>
              <p>
                For long-term investors, current conditions may represent an
                attractive entry point. The fundamental drivers of Austin
                property demand -- tech employment, population growth, quality of life,
                and lifestyle appeal -- remain intact.
              </p>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Navigate the Current Market"
          description="Get expert guidance on buying or selling in today's Austin market."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
