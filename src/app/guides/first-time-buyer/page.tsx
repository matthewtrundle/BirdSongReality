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
  title: "First-Time Home Buyer Guide | Austin Real Estate",
  description:
    "First-time buyer's guide to purchasing a home in Austin, TX. Learn about financing, neighborhoods, property taxes, and what to expect in the Austin market.",
  keywords: [
    "first time home buyer Austin",
    "buying first home Austin TX",
    "Austin first time buyer guide",
    "Austin real estate beginners",
    "first home purchase Austin",
  ],
  openGraph: {
    title: "First-Time Home Buyer Guide | Austin Real Estate",
    description:
      "First-time buyer's guide to purchasing a home in Austin, TX.",
    type: "website",
  },
}

export default function FirstTimeBuyerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "First-Time Buyer" },
  ]

  const stats = [
    { value: "$350K+", label: "Entry price" },
    { value: "3-5%", label: "Min down payment" },
    { value: "30-45", label: "Days to close" },
    { value: "7-10", label: "Option period days" },
  ]

  return (
    <>
      <SEOPageHero
        title="First-Time Home Buyer Guide"
        subtitle="Everything you need to know for your first home purchase in Austin, Texas"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Buying your first home is one of the biggest financial decisions
                you&apos;ll make, and Austin&apos;s market has its own unique
                dynamics. This guide walks you through the entire process, from
                getting your finances in order to picking up the keys to your
                new home.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="is-it-right">
              <h2>Is Now the Right Time to Buy in Austin?</h2>
              <p>
                The Austin market has shifted from the seller-dominated frenzy of
                recent years to a more balanced environment. For first-time buyers,
                this is actually good news:
              </p>
              <ul>
                <li>More inventory means more choices</li>
                <li>Less competition from other buyers</li>
                <li>Room to negotiate on price and terms</li>
                <li>Sellers are more willing to make concessions</li>
                <li>Austin&apos;s long-term growth trajectory remains strong</li>
              </ul>
              <p>
                The question isn&apos;t really about market timing—it&apos;s about
                whether buying a home fits your financial situation and life plans.
                If you plan to stay in Austin for 3+ years, can afford the monthly
                payment comfortably, and have savings for a down payment and
                reserves, it&apos;s worth serious consideration.
              </p>
            </ContentSection>

            <ContentSection id="financial-prep">
              <h2>Financial Preparation</h2>

              <h3>Understanding Total Costs</h3>
              <p>
                Your monthly housing cost in Austin includes more than just the
                mortgage:
              </p>

              <div className="my-6 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-3">
                  Monthly Cost Estimate ($400K Home, 5% Down)
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Principal &amp; Interest (6.5%):</strong> ~$2,402/month</li>
                  <li><strong>Property Taxes (2.0%):</strong> ~$533/month (after homestead exemption)</li>
                  <li><strong>Homeowners Insurance:</strong> ~$175/month</li>
                  <li><strong>PMI (under 20% down):</strong> ~$150/month</li>
                  <li><strong>HOA (if applicable):</strong> ~$50-200/month</li>
                  <li className="pt-2 border-t border-neutral-300 font-semibold">
                    <strong>Total:</strong> ~$3,260-3,460/month
                  </li>
                </ul>
              </div>

              <h3>Down Payment</h3>
              <p>
                While 20% down is ideal, most first-time buyers put down less:
              </p>
              <ul>
                <li><strong>Conventional:</strong> As low as 3% down</li>
                <li><strong>FHA:</strong> 3.5% down with 580+ credit score</li>
                <li><strong>VA:</strong> Zero down for eligible veterans</li>
                <li><strong>USDA:</strong> Zero down for eligible rural areas (some Austin suburbs qualify)</li>
              </ul>

              <h3>Down Payment Assistance</h3>
              <p>
                Texas offers several programs for first-time buyers:
              </p>
              <ul>
                <li><strong>Austin Housing Finance Corporation:</strong> Grants and forgivable loans for qualifying buyers</li>
                <li><strong>My First Texas Home:</strong> State program with down payment assistance</li>
                <li><strong>Texas State Affordable Housing Corp:</strong> Below-market rate loans</li>
                <li><strong>Texas Heroes Program:</strong> For teachers, police, firefighters, EMS, and veterans</li>
              </ul>

              <h3>Additional Cash Needed</h3>
              <ul>
                <li><strong>Closing Costs:</strong> 2-4% of purchase price ($8,000-16,000 on a $400K home)</li>
                <li><strong>Option Fee:</strong> $200-500 (paid at contract, credited at closing)</li>
                <li><strong>Earnest Money:</strong> 1-2% of purchase price (held in escrow)</li>
                <li><strong>Emergency Fund:</strong> 3-6 months of expenses recommended</li>
                <li><strong>Move-in Costs:</strong> Moving, utility deposits, immediate needs</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Get Pre-Approved First
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Before touring homes, get pre-approved for a mortgage. This tells
                you exactly what you can afford (including Austin&apos;s property
                taxes in the payment), shows sellers you&apos;re serious, and
                prevents the heartbreak of falling in love with a home outside
                your budget.
              </p>
            </HighlightBox>

            <ContentSection id="austin-neighborhoods">
              <h2>Affordable Neighborhoods for First-Time Buyers</h2>

              <h3>Under $400,000</h3>
              <ul>
                <li><strong>Pflugerville:</strong> Family-friendly, good schools, strong community</li>
                <li><strong>Manor:</strong> Rapid growth, newer construction, most affordable option</li>
                <li><strong>Hutto:</strong> Small-town feel, new master-planned communities</li>
                <li><strong>Kyle/Buda:</strong> South of Austin, growing quickly, newer homes</li>
                <li><strong>Del Valle:</strong> Close to downtown, Tesla proximity, appreciating fast</li>
              </ul>

              <h3>$400,000-$550,000</h3>
              <ul>
                <li><strong>Cedar Park:</strong> Excellent Leander ISD schools, family-centric</li>
                <li><strong>Leander:</strong> Newer construction, great schools, MetroRail access</li>
                <li><strong>South Austin:</strong> Eclectic neighborhoods near Manchaca and Slaughter</li>
                <li><strong>East Austin:</strong> Condos and smaller homes with urban energy</li>
                <li><strong>North Austin:</strong> Established neighborhoods near tech corridor</li>
              </ul>
            </ContentSection>

            <ContentSection id="the-process">
              <h2>The Home Buying Process in Texas</h2>

              <h3>Step 1: Get Pre-Approved</h3>
              <p>
                Submit your financial documents to a lender and receive a
                pre-approval letter showing how much you can borrow.
              </p>

              <h3>Step 2: Find an Agent</h3>
              <p>
                Work with a buyer&apos;s agent who knows Austin&apos;s neighborhoods.
                Your agent represents your interests and helps you navigate the
                entire process. Their commission is typically paid from the
                transaction, not out of your pocket.
              </p>

              <h3>Step 3: Search &amp; Tour Homes</h3>
              <p>
                Your agent will set up a custom search based on your criteria
                and schedule tours. In Austin, you&apos;ll want to consider:
              </p>
              <ul>
                <li>Commute to work (traffic matters in Austin)</li>
                <li>School district (affects value even if you don&apos;t have kids)</li>
                <li>Property tax rate (varies by location)</li>
                <li>HOA and MUD fees</li>
                <li>Flood zone status</li>
              </ul>

              <h3>Step 4: Make an Offer</h3>
              <p>
                Your agent will help you write an offer using the Texas TREC
                contract. Key elements include price, option period, financing
                terms, and closing date.
              </p>

              <h3>Step 5: Option Period</h3>
              <p>
                Texas offers an &quot;option period&quot; (typically 7-10 days) where
                you pay a small fee ($200-500) for the unrestricted right to
                terminate. This is when you complete inspections and negotiate
                any repairs.
              </p>

              <h3>Step 6: Loan Processing &amp; Closing</h3>
              <p>
                Your lender processes the loan, orders an appraisal, and prepares
                for closing. The title company handles the closing, where you sign
                documents and receive keys. Total timeline: 30-45 days.
              </p>
            </ContentSection>

            <ContentSection id="inspections">
              <h2>Home Inspections in Austin</h2>
              <p>
                Austin has specific concerns to watch for during inspection:
              </p>
              <ul>
                <li><strong>Foundation:</strong> Austin&apos;s clay soil causes movement—look for cracks, uneven floors, sticking doors</li>
                <li><strong>Roof:</strong> Texas sun and hail take a toll—check age and condition</li>
                <li><strong>HVAC:</strong> AC systems work hard in Austin summers—verify age and condition</li>
                <li><strong>Plumbing:</strong> Older homes may have cast iron pipes that need replacement</li>
                <li><strong>Electrical:</strong> Older homes may have outdated panels or wiring</li>
                <li><strong>Drainage:</strong> Verify property drains properly, especially in flood-prone areas</li>
              </ul>
              <p>
                A thorough inspection typically costs $350-550 and is money well
                spent. Consider additional specialty inspections for foundation,
                pool, septic, or pest issues as needed.
              </p>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                The Homestead Exemption
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                After closing, file for your homestead exemption with the Travis
                County Appraisal District (or your county). This exempts $100,000
                of your home&apos;s value from school district taxes and caps
                annual assessment increases at 10%. File by April 30 of the year
                after purchase. This can save you $2,000-4,000+ annually.
              </p>
            </HighlightBox>

            <ContentSection id="common-mistakes">
              <h2>Common First-Time Buyer Mistakes</h2>
              <ul>
                <li><strong>Ignoring Property Taxes:</strong> A $400K home can have $8,000-10,000+ in annual taxes—budget for it</li>
                <li><strong>Skipping Pre-Approval:</strong> Don&apos;t tour homes without knowing your budget</li>
                <li><strong>Buying at Your Maximum:</strong> Leave room in your budget for repairs, maintenance, and life</li>
                <li><strong>Ignoring the Commute:</strong> Drive the commute during rush hour before committing</li>
                <li><strong>Waiving Inspections:</strong> Always get a thorough inspection, especially for foundation</li>
                <li><strong>Forgetting About MUD Taxes:</strong> Ask about MUD districts in newer developments</li>
                <li><strong>Not Filing Homestead Exemption:</strong> This saves you thousands annually—don&apos;t forget</li>
                <li><strong>Going Without an Agent:</strong> A buyer&apos;s agent protects your interests at no cost to you</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Ready to Find Your First Austin Home?"
          description="Let the Birdsong Realty Team guide you through your first home purchase with patient, expert support."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Properties", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
