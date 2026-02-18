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
  title: "Austin Home Prices | Complete Price Guide by Neighborhood",
  description:
    "Comprehensive guide to Austin home prices by neighborhood, property type, and features. Understand pricing for condos, homes, and waterfront properties across the Austin metro.",
  keywords: [
    "Austin home prices",
    "Austin property values",
    "Westlake home prices",
    "Austin real estate prices",
    "Austin TX home cost",
  ],
  openGraph: {
    title: "Austin Home Prices | Complete Price Guide by Neighborhood",
    description:
      "Comprehensive guide to Austin home prices by neighborhood and property type.",
    type: "website",
  },
}

export default function PriceGuidePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market", href: "/market" },
    { label: "Price Guide" },
  ]

  const stats = [
    { value: "$350K", label: "Entry price" },
    { value: "$550K", label: "Median price" },
    { value: "$3M+", label: "Luxury homes" },
    { value: "$295", label: "Avg $/sqft" },
  ]

  return (
    <>
      <SEOPageHero
        title="Austin Price Guide"
        subtitle="Comprehensive pricing by neighborhood, property type, and features"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Understanding Austin pricing requires looking beyond
                simple averages. Location, property type, condition, and
                amenities all significantly impact value. This guide breaks
                down pricing across neighborhoods and property types to help
                you understand what you can expect at different price points.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Market Overview</h2>
              <p>
                Austin is one of the largest and most active real estate markets
                in Texas, with thousands of homes typically available. Prices range
                from around $350,000 for starter condos to over $3 million for
                premium waterfront and Hill Country estates.
              </p>
              <p>
                Key pricing factors in Austin include:
              </p>
              <ul>
                <li><strong>Location:</strong> Waterfront and central locations command significant premiums</li>
                <li><strong>Neighborhood:</strong> Top school districts price considerably higher</li>
                <li><strong>Condition:</strong> Updated homes sell at significant premiums</li>
                <li><strong>Lot Size:</strong> Larger lots in established neighborhoods add substantial value</li>
                <li><strong>Views:</strong> Lake, Hill Country, or downtown skyline views add premium</li>
              </ul>
            </ContentSection>

            <ContentSection id="by-neighborhood">
              <h2>Pricing by Neighborhood</h2>

              <h3>Westlake / Barton Creek</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Range:</strong> $900,000 - $5,000,000+</li>
                  <li><strong>Avg $/sqft:</strong> $400 - $700</li>
                  <li><strong>Premium for:</strong> Eanes ISD schools, privacy, Hill Country views</li>
                </ul>
              </div>
              <p>
                Austin&apos;s premier luxury neighborhoods command top
                prices. Eanes ISD schools, mature trees, and proximity to downtown
                create sustained demand. Limited inventory keeps prices firm.
              </p>

              <h3>Lake Travis / Lakeway</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Waterfront:</strong> $1,200,000 - $5,000,000+</li>
                  <li><strong>Lake View:</strong> $600,000 - $1,500,000</li>
                  <li><strong>Inland/Community:</strong> $400,000 - $800,000</li>
                </ul>
              </div>
              <p>
                Direct waterfront on Lake Travis is among the most valuable
                real estate in Central Texas. Lake-view properties with
                dock access offer strong value while maintaining proximity.
              </p>

              <h3>Downtown / East Austin</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Downtown Condos:</strong> $400,000 - $2,000,000+</li>
                  <li><strong>East Austin Homes:</strong> $500,000 - $1,200,000</li>
                  <li><strong>Avg $/sqft:</strong> $350 - $600</li>
                </ul>
              </div>
              <p>
                Urban living with walkability and character at
                varied price points. East Austin has seen significant
                appreciation as the neighborhood has evolved.
              </p>

              <h3>South Austin / 78704</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Bungalows/Updated:</strong> $550,000 - $1,000,000</li>
                  <li><strong>New Construction:</strong> $700,000 - $1,500,000</li>
                  <li><strong>Avg $/sqft:</strong> $400 - $550</li>
                </ul>
              </div>
              <p>
                The iconic South Austin vibe -- eclectic, creative, and close
                to Barton Springs, the Greenbelt, and South Congress. Strong
                demand keeps prices firm in this sought-after area.
              </p>

              <h3>Cedar Park / Leander / Round Rock</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Starter Homes:</strong> $350,000 - $500,000</li>
                  <li><strong>Mid-Range:</strong> $500,000 - $750,000</li>
                  <li><strong>Premium:</strong> $750,000 - $1,200,000</li>
                </ul>
              </div>
              <p>
                Family-friendly suburbs with excellent schools (Round Rock ISD,
                Leander ISD). Great value compared to central Austin while
                providing modern amenities and community living.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Price Per Square Foot Context
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Price per square foot varies significantly by property type.
                Smaller homes often have higher $/sqft due to fixed land costs.
                Always consider total price, not just $/sqft, when comparing
                properties of different sizes.
              </p>
            </HighlightBox>

            <ContentSection id="by-property-type">
              <h2>Pricing by Property Type</h2>

              <h3>Condominiums</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>1 BR Units:</strong> $200,000 - $400,000</li>
                  <li><strong>2 BR Units:</strong> $350,000 - $600,000</li>
                  <li><strong>3 BR Units:</strong> $500,000 - $900,000</li>
                  <li><strong>Luxury/High-Rise:</strong> $800,000 - $2,000,000+</li>
                </ul>
              </div>
              <p>
                Condos offer the lowest entry point but include HOA fees that
                affect total cost of ownership. Downtown units with skyline or
                lake views command substantial premiums.
              </p>

              <h3>Townhomes</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>2 BR:</strong> $350,000 - $500,000</li>
                  <li><strong>3 BR:</strong> $450,000 - $650,000</li>
                  <li><strong>4 BR:</strong> $600,000 - $850,000</li>
                </ul>
              </div>
              <p>
                Townhomes bridge condos and single-family homes. More space than
                condos with some shared maintenance through HOA.
              </p>

              <h3>Single-Family Homes</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Modest (2-3 BR, older):</strong> $350,000 - $500,000</li>
                  <li><strong>Standard (3 BR, updated):</strong> $500,000 - $750,000</li>
                  <li><strong>Premium (4+ BR, desirable):</strong> $750,000 - $1,500,000</li>
                  <li><strong>Luxury/Waterfront:</strong> $1,500,000 - $5,000,000+</li>
                </ul>
              </div>
              <p>
                Single-family homes represent the bulk of the market. Condition,
                location, and size all significantly impact pricing within
                broad ranges.
              </p>

              <h3>Vacant Land</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Suburban Lots:</strong> $80,000 - $200,000</li>
                  <li><strong>Central Austin:</strong> $200,000 - $500,000</li>
                  <li><strong>Hill Country Acreage:</strong> $300,000 - $800,000</li>
                  <li><strong>Waterfront:</strong> $500,000 - $2,000,000+</li>
                </ul>
              </div>
              <p>
                Land prices vary dramatically by location. Construction costs
                for custom homes typically run $200-400/sqft or more,
                so factor total build cost when evaluating lots.
              </p>
            </ContentSection>

            <ContentSection id="price-factors">
              <h2>Major Price Factors</h2>

              <h3>Location Premium Multipliers</h3>
              <p>
                Using suburban homes as the baseline, typical premiums are:
              </p>
              <ul>
                <li><strong>Waterfront (Lake Travis):</strong> 100-200% premium</li>
                <li><strong>Lake View:</strong> 30-60% premium</li>
                <li><strong>Central Austin (78704, 78703):</strong> 40-70% premium</li>
                <li><strong>Top School District (Eanes, Lake Travis):</strong> 20-40% premium</li>
                <li><strong>Master-Planned Community:</strong> 10-20% premium</li>
              </ul>

              <h3>Condition Impact</h3>
              <ul>
                <li><strong>Turn-key updated:</strong> Commands full market value</li>
                <li><strong>Good condition, dated finishes:</strong> 5-15% below updated</li>
                <li><strong>Needs cosmetic work:</strong> 15-25% below updated</li>
                <li><strong>Major renovation needed:</strong> 30-50% below updated</li>
              </ul>

              <h3>Size Considerations</h3>
              <p>
                Price per square foot typically decreases as size increases:
              </p>
              <ul>
                <li><strong>Under 1,500 sqft:</strong> $300-450/sqft typical</li>
                <li><strong>1,500-2,500 sqft:</strong> $250-375/sqft typical</li>
                <li><strong>2,500-3,500 sqft:</strong> $225-350/sqft typical</li>
                <li><strong>Over 3,500 sqft:</strong> $200-325/sqft typical</li>
              </ul>
            </ContentSection>

            <ContentSection id="what-you-get">
              <h2>What You Get at Each Price Point</h2>

              <h3>$300,000 - $450,000</h3>
              <ul>
                <li>Condos downtown or near campus</li>
                <li>Starter homes in outlying suburbs</li>
                <li>Older properties needing updates</li>
                <li>Entry-level investment options</li>
              </ul>

              <h3>$450,000 - $650,000</h3>
              <ul>
                <li>Nice 2-3 BR condos with amenities</li>
                <li>Suburban single-family homes in good condition</li>
                <li>Townhomes in desirable locations</li>
                <li>Solid primary residence options</li>
              </ul>

              <h3>$650,000 - $900,000</h3>
              <ul>
                <li>Well-maintained 3-4 BR single-family homes</li>
                <li>Homes in good school districts</li>
                <li>Updated properties in central neighborhoods</li>
                <li>Entry into premium areas</li>
              </ul>

              <h3>$900,000 - $1,300,000</h3>
              <ul>
                <li>Premium 4+ BR homes in top neighborhoods</li>
                <li>Westlake and Barton Creek area</li>
                <li>Quality finishes and updates</li>
                <li>Some lake-view properties</li>
              </ul>

              <h3>$1,300,000 - $2,000,000</h3>
              <ul>
                <li>Luxury homes in premier neighborhoods</li>
                <li>Lake Travis properties with views</li>
                <li>Large custom homes on acreage</li>
                <li>Newer construction with high-end finishes</li>
              </ul>

              <h3>$2,000,000+</h3>
              <ul>
                <li>Waterfront estates on Lake Travis or Lake Austin</li>
                <li>Large estate properties in Westlake</li>
                <li>Exceptional views and locations</li>
                <li>Premium construction and finishes</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="warning">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Don&apos;t Forget Carrying Costs
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Purchase price is just the beginning. Factor in property taxes
                (~1.8-2.2% of value depending on jurisdiction), insurance ($3,000-8,000+/year),
                HOA fees (if applicable), and maintenance when calculating total cost
                of ownership. A $600,000 home can easily cost $25,000+/year
                beyond any mortgage.
              </p>
            </HighlightBox>

            <ContentSection id="negotiation">
              <h2>Negotiation Considerations</h2>

              <h3>Current Market Dynamics</h3>
              <p>
                In the current balanced market:
              </p>
              <ul>
                <li>Well-priced properties sell near asking</li>
                <li>Overpriced listings sit and eventually reduce</li>
                <li>Buyers have room to negotiate on properties over 90 days</li>
                <li>Cash offers still have advantage but not as extreme as 2021-22</li>
              </ul>

              <h3>Reasonable Expectations</h3>
              <ul>
                <li><strong>Hot property:</strong> Full price or slight escalation</li>
                <li><strong>Fairly priced:</strong> 2-5% below asking often accepted</li>
                <li><strong>Overpriced/long listing:</strong> 5-10% below may be considered</li>
                <li><strong>Estate sales or motivated:</strong> Potentially more negotiable</li>
              </ul>
            </ContentSection>

            <ContentSection id="value-opportunities">
              <h2>Finding Value</h2>

              <h3>Undervalued Property Types</h3>
              <ul>
                <li><strong>Cosmetic fixer-uppers:</strong> Sweat equity opportunity</li>
                <li><strong>Off-season purchases:</strong> Less competition, motivated sellers</li>
                <li><strong>Long-listed properties:</strong> Sellers may be flexible</li>
                <li><strong>Emerging neighborhoods:</strong> Often better value than established areas</li>
              </ul>

              <h3>Red Flags</h3>
              <ul>
                <li>Priced significantly below comparable properties (why?)</li>
                <li>Recent price reductions without obvious reason</li>
                <li>Unusual sale terms or conditions</li>
                <li>Seller unwilling to allow proper inspection</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Find Properties in Your Price Range"
          description="Let us help you find the perfect home within your budget."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
