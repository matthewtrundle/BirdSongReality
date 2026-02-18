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
  title: "Austin Short-Term Rental Guide | STR Investment & Regulations",
  description:
    "Complete guide to short-term rental investing in Austin, TX. Understand STR regulations, licensing requirements, revenue potential, and the best areas for Airbnb investment.",
  keywords: [
    "Austin short term rental",
    "Austin Airbnb guide",
    "STR investment Austin",
    "Austin rental regulations",
    "vacation rental Austin TX",
  ],
  openGraph: {
    title: "Austin Short-Term Rental Guide | STR Investment & Regulations",
    description:
      "Complete guide to short-term rental investing in Austin, TX.",
    type: "website",
  },
}

export default function ShortTermRentalGuidePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Short-Term Rental Guide" },
  ]

  const stats = [
    { value: "$150-400", label: "Avg nightly rate" },
    { value: "65-75%", label: "Avg occupancy" },
    { value: "Type 1-3", label: "STR license types" },
    { value: "8-12%", label: "Management fee" },
  ]

  return (
    <>
      <SEOPageHero
        title="Austin Short-Term Rental Guide"
        subtitle="Understanding regulations, revenue potential, and strategies for STR investment in Austin"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Austin&apos;s popularity as a travel destination—fueled by SXSW,
                ACL, Formula 1, and year-round tourism—makes it an attractive
                market for short-term rental investment. However, the City of
                Austin has specific STR regulations that investors must understand
                before purchasing. This guide covers everything you need to know.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="str-regulations">
              <h2>Understanding Austin STR Regulations</h2>
              <p>
                The City of Austin regulates short-term rentals through a licensing
                system. Understanding the license types is critical before investing:
              </p>

              <h3>Type 1: Owner-Occupied</h3>
              <ul>
                <li>Owner lives at the property as primary residence</li>
                <li>Can rent all or part of the home when present or absent</li>
                <li>Available in all residential zones</li>
                <li>Most flexible license type</li>
              </ul>

              <h3>Type 2: Non-Owner-Occupied (Residential)</h3>
              <ul>
                <li>Owner does not live at the property</li>
                <li>Located in residential zoning districts</li>
                <li>These licenses are being phased out—no new Type 2 licenses are being issued</li>
                <li>Existing Type 2 licenses are non-transferable to new owners</li>
              </ul>

              <h3>Type 3: Non-Owner-Occupied (Commercial)</h3>
              <ul>
                <li>Located in commercial zoning districts</li>
                <li>Still available for new applications</li>
                <li>Multi-family and mixed-use properties may qualify</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="warning">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Critical: Type 2 STR Licenses
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                The City of Austin is phasing out Type 2 (non-owner-occupied
                residential) STR licenses. These licenses do not transfer when a
                property is sold. If you&apos;re buying a property with the intent to
                operate it as a non-owner-occupied STR in a residential zone,
                verify that you can obtain the appropriate license before purchasing.
                This is one of the most common and costly mistakes investors make
                in the Austin STR market.
              </p>
            </HighlightBox>

            <ContentSection id="where-to-invest">
              <h2>Best Areas for STR Investment</h2>

              <h3>Downtown &amp; East Austin</h3>
              <p>
                Highest nightly rates and strong demand from business travelers,
                SXSW attendees, and weekend visitors. Properties near Sixth Street,
                Rainey Street, and East Austin restaurants command premium rates.
                Condos and townhomes work well in this area.
              </p>

              <h3>South Congress Area</h3>
              <p>
                One of Austin&apos;s most iconic neighborhoods for visitors.
                Properties within walking distance of SoCo shops and restaurants
                are highly desirable. Inventory is limited and prices are high,
                but nightly rates reflect the location premium.
              </p>

              <h3>Lake Travis Communities</h3>
              <p>
                Lake-area properties attract families, groups, and weekend visitors.
                Lakeway, Volente, and surrounding areas see strong summer demand.
                Larger homes with lake access or views perform best. Check local
                regulations as they differ from Austin city limits.
              </p>

              <h3>Surrounding Cities</h3>
              <p>
                Round Rock, Cedar Park, and other surrounding cities have their
                own STR regulations that may be more favorable than Austin&apos;s.
                Proximity to events at Dell Diamond, COTA (Formula 1), or
                specific employers can drive demand.
              </p>
            </ContentSection>

            <ContentSection id="revenue-potential">
              <h2>Revenue Potential</h2>

              <div className="my-6 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-3">
                  Estimated Annual Revenue by Property Type
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>1BR Condo (Downtown):</strong> $45,000-$65,000/year</li>
                  <li><strong>2BR House (East Austin):</strong> $55,000-$80,000/year</li>
                  <li><strong>3BR House (South Austin):</strong> $65,000-$95,000/year</li>
                  <li><strong>4BR Lake House:</strong> $80,000-$120,000/year</li>
                </ul>
              </div>

              <h3>Peak Revenue Periods</h3>
              <ul>
                <li><strong>SXSW (March):</strong> Highest nightly rates of the year, 3-5x normal</li>
                <li><strong>ACL Festival (October):</strong> Two weekends of premium rates</li>
                <li><strong>Formula 1 (October):</strong> High demand near COTA and downtown</li>
                <li><strong>UT Football Weekends:</strong> Strong demand September-November</li>
                <li><strong>Summer (June-August):</strong> Steady tourism and family travel</li>
                <li><strong>Holiday Periods:</strong> Thanksgiving, Christmas, New Year&apos;s</li>
              </ul>

              <h3>Seasonal Patterns</h3>
              <p>
                Austin&apos;s STR market is less seasonal than resort destinations.
                Business travel, events, and year-round tourism provide a more
                consistent revenue stream. That said, SXSW week alone can generate
                $5,000-$15,000+ for a well-positioned property.
              </p>
            </ContentSection>

            <ContentSection id="operating-costs">
              <h2>Operating Costs &amp; Management</h2>

              <h3>Typical Operating Expenses</h3>
              <ul>
                <li><strong>Property Management:</strong> 8-12% of gross revenue (or self-manage)</li>
                <li><strong>Cleaning:</strong> $100-250 per turnover</li>
                <li><strong>Supplies &amp; Amenities:</strong> $200-400/month</li>
                <li><strong>Utilities:</strong> $250-500/month (higher than long-term rental)</li>
                <li><strong>Platform Fees:</strong> Airbnb charges 3% host fee; VRBO varies</li>
                <li><strong>Maintenance &amp; Repairs:</strong> Budget 5-10% of revenue</li>
                <li><strong>Hotel Occupancy Tax:</strong> 15% collected from guests (9% city + 6% county)</li>
                <li><strong>License Fee:</strong> Annual STR license renewal</li>
              </ul>

              <h3>Self-Management vs. Professional Management</h3>
              <p>
                Self-managing saves the 8-12% management fee but requires
                significant time for guest communication, check-ins, cleaning
                coordination, and maintenance. Professional managers handle
                everything but reduce your net income. Many successful investors
                start self-managing and hire a manager once they scale.
              </p>
            </ContentSection>

            <ContentSection id="licensing-process">
              <h2>STR Licensing Process</h2>
              <ol>
                <li><strong>Determine Eligibility:</strong> Verify zoning and license type availability</li>
                <li><strong>Apply Online:</strong> Submit application through Austin Build + Connect portal</li>
                <li><strong>Safety Inspection:</strong> Schedule and pass city safety inspection</li>
                <li><strong>Insurance:</strong> Provide proof of liability insurance ($500K+ recommended)</li>
                <li><strong>Tax Registration:</strong> Register for Hotel Occupancy Tax collection</li>
                <li><strong>License Issued:</strong> Display license number in all listings</li>
                <li><strong>Annual Renewal:</strong> Renew license annually and maintain compliance</li>
              </ol>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Due Diligence Before Purchase
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Before purchasing a property for STR use, verify the zoning
                designation, confirm license availability, check HOA restrictions
                (many HOAs prohibit or limit STRs), and run detailed financial
                projections using conservative occupancy estimates. A 10% error
                in occupancy assumptions can dramatically change your returns.
              </p>
            </HighlightBox>

            <ContentSection id="tax-considerations">
              <h2>Tax Considerations</h2>
              <ul>
                <li><strong>Hotel Occupancy Tax (HOT):</strong> 15% collected from guests and remitted to city/county</li>
                <li><strong>Property Taxes:</strong> No homestead exemption on investment properties</li>
                <li><strong>Income Tax:</strong> STR income is reported on Schedule E or C</li>
                <li><strong>Depreciation:</strong> Property and furnishings can be depreciated</li>
                <li><strong>Deductions:</strong> Operating expenses, management fees, supplies, and platform fees are deductible</li>
                <li><strong>Self-Employment Tax:</strong> May apply if you provide substantial services</li>
              </ul>
              <p>
                Consult a CPA experienced in short-term rental taxation. The tax
                implications of STR ownership differ significantly from long-term
                rentals, and proper structuring can save thousands annually.
              </p>
            </ContentSection>

            <ContentSection id="investment-analysis">
              <h2>Running the Numbers</h2>
              <p>
                Before purchasing, create a detailed pro forma including:
              </p>
              <ul>
                <li>Purchase price and financing costs</li>
                <li>Conservative revenue projections (use 60-65% occupancy for year one)</li>
                <li>All operating expenses including management, cleaning, and taxes</li>
                <li>Capital expenditures for furnishing and setup ($15,000-50,000)</li>
                <li>Annual maintenance reserve (5% of revenue minimum)</li>
                <li>Cash-on-cash return target (most investors aim for 8%+ in Austin)</li>
              </ul>
              <p>
                The most common mistake is overestimating revenue. Use conservative
                assumptions and stress-test your model with lower occupancy and
                rates before committing.
              </p>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Interested in Austin STR Investment?"
          description="Let the Birdsong Realty Team help you find the right investment property and navigate Austin's STR regulations."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Properties", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
