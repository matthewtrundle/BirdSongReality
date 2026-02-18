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
  title: "Austin Investment Property Guide | ROI & Market Analysis",
  description:
    "Explore investment opportunities in Austin, TX real estate. Rental income potential, market trends, ROI analysis, and strategies for residential and multi-family investors.",
  keywords: [
    "Austin investment property",
    "Austin real estate investment",
    "rental property ROI Austin",
    "Austin TX rental property",
    "Austin real estate investor guide",
  ],
  openGraph: {
    title: "Austin Investment Property Guide | ROI & Market Analysis",
    description:
      "Explore investment opportunities in Austin, TX real estate.",
    type: "website",
  },
}

export default function InvestmentPropertyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Investment Property" },
  ]

  const stats = [
    { value: "4-8%", label: "Cap rate range" },
    { value: "$24K+", label: "Annual rent (median)" },
    { value: "95%+", label: "Occupancy rate" },
    { value: "5-7%", label: "Historic appreciation" },
  ]

  return (
    <>
      <SEOPageHero
        title="Investment Property in Austin"
        subtitle="Understanding the rental market and investment potential in one of America's fastest-growing metros"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Austin offers compelling investment opportunities driven by
                sustained population growth, a booming tech sector, and strong
                rental demand. Whether you&apos;re looking at long-term rentals,
                short-term vacation properties, or multi-family investments,
                Austin&apos;s market fundamentals support real estate investing
                at multiple price points.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="market-overview">
              <h2>Investment Market Overview</h2>
              <p>
                Austin&apos;s investment landscape benefits from powerful demand
                drivers that few other markets can match. The metro continues
                to attract major employers—Apple, Tesla, Google, Oracle, Meta,
                Samsung—while a thriving startup ecosystem fuels job growth
                across sectors.
              </p>
              <p>
                Key market characteristics:
              </p>
              <ul>
                <li><strong>Population Growth:</strong> Austin metro adds 50,000-100,000+ residents annually</li>
                <li><strong>No State Income Tax:</strong> Texas tax advantages benefit rental income and investor returns</li>
                <li><strong>Diverse Economy:</strong> Tech, government, education, and healthcare provide stability</li>
                <li><strong>Strong Rental Demand:</strong> High renter population driven by young professionals and transplants</li>
                <li><strong>Appreciation History:</strong> Consistent long-term appreciation despite short-term cycles</li>
              </ul>
            </ContentSection>

            <ContentSection id="rental-income">
              <h2>Rental Income Potential</h2>
              <p>
                Austin&apos;s rental market is robust, driven by a large
                population of young professionals, university students, and
                relocating workers who rent before buying.
              </p>

              <h3>Long-Term Rental Income Ranges</h3>
              <div className="my-6 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>1 BR Condo/Apartment:</strong> $1,200 - $1,800/month</li>
                  <li><strong>2-3 BR Townhome:</strong> $1,800 - $2,800/month</li>
                  <li><strong>3 BR Single-Family:</strong> $2,200 - $3,200/month</li>
                  <li><strong>4+ BR Single-Family:</strong> $2,800 - $4,500+/month</li>
                </ul>
              </div>

              <h3>Where Rents Are Strongest</h3>
              <ul>
                <li><strong>Downtown &amp; East Austin:</strong> Highest rents, strong demand from young professionals</li>
                <li><strong>Domain/North Austin:</strong> Tech corridor drives premium rents</li>
                <li><strong>Near UT Campus:</strong> Steady student demand for condos and small units</li>
                <li><strong>Cedar Park/Round Rock:</strong> Family renters seeking top school districts</li>
                <li><strong>South Austin:</strong> Lifestyle renters drawn to SoCo and Barton Springs area</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Net vs. Gross Income
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Gross rental income doesn&apos;t tell the full story. After
                property management fees (8-10%), maintenance, property taxes,
                insurance, vacancy, and capital reserves, net income is typically
                50-65% of gross for long-term rentals. Always analyze deals using
                realistic net projections, especially factoring in Austin&apos;s
                higher property taxes.
              </p>
            </HighlightBox>

            <ContentSection id="investment-analysis">
              <h2>Investment Analysis</h2>

              <h3>Cap Rate Calculation</h3>
              <p>
                Cap rate (capitalization rate) measures return on investment
                based on rental income:
              </p>
              <div className="my-6 p-4 bg-neutral-100 rounded-lg font-mono text-sm">
                Cap Rate = Net Operating Income / Purchase Price
              </div>
              <p>
                Austin cap rates typically range from 4-8%, with higher
                returns in emerging neighborhoods and value-add properties.
                Central Austin tends toward lower cap rates but stronger
                appreciation, while suburban properties offer higher
                cash flow.
              </p>

              <h3>Cash-on-Cash Return</h3>
              <p>
                If financing your purchase, cash-on-cash return measures return
                on actual cash invested:
              </p>
              <div className="my-6 p-4 bg-neutral-100 rounded-lg font-mono text-sm">
                Cash-on-Cash = Annual Cash Flow / Total Cash Invested
              </div>
              <p>
                A 20-25% down payment on a well-performing Austin rental can
                generate 6-12% cash-on-cash returns, though leverage increases
                risk. Austin&apos;s property taxes make cash flow tighter than
                markets with lower tax burdens.
              </p>

              <h3>Total Return Perspective</h3>
              <p>
                Smart investors consider total return, which includes:
              </p>
              <ul>
                <li>Net rental income</li>
                <li>Property appreciation (Austin&apos;s strongest advantage)</li>
                <li>Principal paydown (if financed)</li>
                <li>Tax benefits (depreciation, deductions)</li>
                <li>Equity build-up from forced appreciation (renovations)</li>
              </ul>
            </ContentSection>

            <ContentSection id="investment-strategies">
              <h2>Investment Strategies for Austin</h2>

              <h3>Long-Term Buy &amp; Hold</h3>
              <p>
                The most common strategy in Austin. Purchase a property, place
                a long-term tenant, and benefit from appreciation and rent
                growth over time. Austin&apos;s strong population growth makes
                this a reliable approach.
              </p>

              <h3>House Hacking</h3>
              <p>
                Popular with younger investors: buy a duplex, triplex, or
                home with an ADU, live in one unit, and rent the others. Austin
                has expanded ADU (Accessory Dwelling Unit) regulations, making
                this increasingly viable.
              </p>

              <h3>Short-Term Rental (STR)</h3>
              <p>
                Austin&apos;s tourism and event economy (SXSW, ACL, F1, UT
                football) drives strong STR demand. However, the city has
                specific licensing requirements and restrictions. See our
                dedicated STR guide for details.
              </p>

              <h3>Value-Add / Fix and Rent</h3>
              <p>
                Purchase undervalued or outdated properties, renovate to
                modern standards, and rent at higher rates. Central and East
                Austin have significant value-add opportunities in older
                housing stock.
              </p>

              <h3>Multi-Family</h3>
              <p>
                Small multi-family (2-4 units) offers better cash flow per
                dollar invested. Duplexes and fourplexes are available in
                central neighborhoods, while larger complexes are found in
                suburban corridors.
              </p>
            </ContentSection>

            <ContentSection id="property-selection">
              <h2>Selecting an Investment Property</h2>
              <p>
                Not all properties make good investments. Consider these factors:
              </p>

              <h3>Location Factors</h3>
              <ul>
                <li><strong>Employment Centers:</strong> Proximity to tech campuses, downtown, or the medical district</li>
                <li><strong>School Districts:</strong> Properties in top-rated districts command premium rents</li>
                <li><strong>Transit Access:</strong> MetroRail and bus routes matter to renters</li>
                <li><strong>Walkability:</strong> Proximity to restaurants, shops, and entertainment</li>
                <li><strong>Growth Corridors:</strong> Areas with planned infrastructure and development</li>
              </ul>

              <h3>Property Characteristics</h3>
              <ul>
                <li><strong>Bedroom Count:</strong> 3-bedroom homes are the most versatile for families</li>
                <li><strong>Outdoor Space:</strong> Fenced yards are premium in the Austin rental market</li>
                <li><strong>Condition:</strong> Updated kitchens and bathrooms reduce vacancy</li>
                <li><strong>Energy Efficiency:</strong> Low utility costs matter in Austin summers</li>
                <li><strong>Parking:</strong> Off-street parking is valuable, especially in central areas</li>
              </ul>

              <h3>Financial Factors</h3>
              <ul>
                <li><strong>Property Tax Rate:</strong> Varies significantly by location and taxing jurisdictions</li>
                <li><strong>HOA Fees:</strong> High fees eat into returns—verify before purchasing</li>
                <li><strong>Insurance Costs:</strong> Texas rates are above national average</li>
                <li><strong>MUD Taxes:</strong> Check for Municipal Utility District taxes in newer developments</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="warning">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Property Tax Impact on Cash Flow
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Austin&apos;s property taxes (1.8-2.5%+) are one of the highest
                ongoing costs for investors. Unlike owner-occupied homes,
                investment properties do not qualify for the homestead exemption.
                A $400,000 investment property could face $8,000-$10,000+ in
                annual taxes. Always factor this into your pro forma before
                purchasing.
              </p>
            </HighlightBox>

            <ContentSection id="expenses">
              <h2>Understanding Expenses</h2>
              <p>
                Accurate expense projections are crucial for investment analysis:
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-4">
                  Typical Annual Expenses (3BR Home @ $400K, Long-Term Rental)
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Property Taxes:</strong> $8,000 - $10,000</li>
                  <li><strong>Insurance:</strong> $2,000 - $3,500</li>
                  <li><strong>Property Management (8-10%):</strong> $2,400 - $3,600</li>
                  <li><strong>Maintenance &amp; Repairs:</strong> $2,000 - $4,000</li>
                  <li><strong>Vacancy (5-8%):</strong> $1,500 - $2,400</li>
                  <li><strong>Capital Reserves:</strong> $1,200 - $2,400</li>
                  <li><strong>HOA (if applicable):</strong> $0 - $3,600</li>
                  <li><strong>Lawn Care:</strong> $1,200 - $2,400</li>
                  <li className="pt-2 border-t border-neutral-300 font-semibold">
                    <strong>Total:</strong> $18,300 - $31,900/year
                  </li>
                </ul>
              </div>
            </ContentSection>

            <ContentSection id="tax-considerations">
              <h2>Tax Considerations</h2>
              <p>
                Investment properties offer several tax benefits:
              </p>
              <ul>
                <li><strong>Depreciation:</strong> Deduct property value over 27.5 years</li>
                <li><strong>Expense Deductions:</strong> Interest, taxes, insurance, repairs, management fees</li>
                <li><strong>1031 Exchange:</strong> Defer capital gains by reinvesting proceeds into like-kind property</li>
                <li><strong>Qualified Business Income:</strong> Potential 20% deduction on rental income</li>
                <li><strong>Cost Segregation:</strong> Accelerate depreciation on certain property components</li>
              </ul>
              <p>
                Texas has no state income tax, which means your rental income
                is only subject to federal taxes. This is a significant advantage
                compared to investing in states with high income tax rates.
                Consult a CPA experienced in real estate for your specific situation.
              </p>
            </ContentSection>

            <ContentSection id="risks">
              <h2>Understanding the Risks</h2>
              <p>
                All investments carry risk. Key risks for Austin properties:
              </p>
              <ul>
                <li><strong>Market Corrections:</strong> Austin experienced a price correction in 2022-2023; cycles happen</li>
                <li><strong>Property Tax Increases:</strong> Rising assessed values increase annual costs</li>
                <li><strong>Regulatory Changes:</strong> STR regulations, zoning changes, and rent-related policies could shift</li>
                <li><strong>New Supply:</strong> Significant multifamily construction can impact rents</li>
                <li><strong>Interest Rates:</strong> Rising rates reduce purchasing power and can compress values</li>
                <li><strong>Tenant Risk:</strong> Non-payment, damage, and turnover affect returns</li>
                <li><strong>Foundation Issues:</strong> Austin&apos;s clay soil can cause costly foundation problems</li>
              </ul>
            </ContentSection>

            <ContentSection id="getting-started">
              <h2>Getting Started</h2>
              <p>
                Ready to invest in Austin? Here&apos;s a recommended approach:
              </p>
              <ol>
                <li><strong>Define Your Goals:</strong> Cash flow, appreciation, tax benefits, or a combination?</li>
                <li><strong>Establish Your Budget:</strong> Include closing costs, repairs, and reserves</li>
                <li><strong>Get Pre-Approved:</strong> Know your financing options for investment properties</li>
                <li><strong>Choose a Strategy:</strong> Long-term rental, STR, house hack, or value-add</li>
                <li><strong>Research Neighborhoods:</strong> Each area has different investment profiles</li>
                <li><strong>Analyze Properties:</strong> Run numbers conservatively with realistic expenses</li>
                <li><strong>Build Your Team:</strong> Agent, lender, inspector, property manager, CPA</li>
                <li><strong>Make an Offer:</strong> Move decisively on properties that meet your criteria</li>
              </ol>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Explore Austin Investment Opportunities"
          description="Speak with the Birdsong Realty Team about investment strategies and properties with strong rental potential in Austin."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
