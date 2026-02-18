import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, StatsGrid, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Austin Investment Properties | Birdsong Realty Team | Keller Williams",
  description:
    "Find investment properties in Austin, TX. Rental properties, multi-family, fix-and-flip, and long-term appreciation opportunities with expert investor guidance.",
  keywords: [
    "Austin investment properties",
    "Austin rental property",
    "Austin real estate investing",
    "multi-family Austin TX",
    "Austin income property",
    "real estate investment Austin",
  ],
  openGraph: {
    title: "Austin Investment Properties | Birdsong Realty Team | Keller Williams",
    description:
      "Find profitable investment properties in Austin, TX with expert guidance from the Birdsong Realty Team.",
  },
}

export default function AustinInvestmentPropertiesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Buy", href: "/portfolio" },
    { label: "Investment Properties" },
  ]

  const investmentStats = [
    { value: "2.1%", label: "Population growth (annual)" },
    { value: "Top 5", label: "U.S. job growth market" },
    { value: "Strong", label: "Rental demand" },
    { value: "0%", label: "State income tax" },
  ]

  return (
    <>
      <SEOPageHero
        title="Austin Investment Properties"
        subtitle="Capitalize on Austin's booming growth with strategically selected investment properties that generate returns."
        breadcrumbs={breadcrumbs}
      />

      <Section className="bg-white">
        <Container>
          <SEOContent>
            <ContentSection>
              <h2>Investing in Austin Real Estate</h2>
              <p>
                Austin has emerged as one of the top real estate investment markets in the
                country. Fueled by a thriving tech economy, strong population growth, and a
                vibrant cultural scene, the city offers investors a compelling mix of cash
                flow potential and long-term appreciation.
              </p>
              <p>
                The Birdsong Realty Team works with investors at every level, from first-time
                landlords to experienced portfolio builders. We provide data-driven analysis,
                local market knowledge, and a network of property managers, contractors, and
                lenders to support your investment goals.
              </p>
            </ContentSection>

            <StatsGrid stats={investmentStats} />

            <HighlightBox title="Investment Strategies We Support">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Long-Term Rentals:</strong> Single-family and multi-family properties for steady cash flow</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Short-Term Rentals:</strong> STR-eligible properties in high-demand tourist areas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Fix-and-Flip:</strong> Value-add properties with renovation upside potential</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Appreciation Plays:</strong> Properties in emerging corridors poised for growth</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>Why Austin for Investment?</h2>
              <p>
                Austin&apos;s economy is anchored by major tech employers including Tesla, Apple,
                Google, and Meta, plus a deep bench of startups and established companies.
                The University of Texas brings a steady stream of renters, and the city&apos;s
                cultural appeal draws transplants from across the country.
              </p>
              <p>
                Texas&apos;s business-friendly environment, with no state income tax and relatively
                affordable cost of living compared to coastal tech hubs, continues to attract
                both employers and residents. This demand drives healthy rental markets and
                sustained property appreciation.
              </p>
            </ContentSection>

            <ContentSection>
              <h2>Our Investor Services</h2>
              <p>
                We provide comprehensive support for real estate investors, including
                comparative market analysis for target properties, rental income projections,
                cap rate calculations, and connections to trusted property managers who can
                handle day-to-day operations.
              </p>
              <p>
                Whether you&apos;re looking to acquire your first rental property or expand an
                existing portfolio, the Birdsong Realty Team delivers the local expertise
                and market access you need to invest with confidence.
              </p>
            </ContentSection>
          </SEOContent>

          <CTABanner
            title="Ready to Invest in Austin?"
            description="Let us help you identify the right investment property to meet your financial goals."
            buttonText="Discuss Investment Strategy"
            buttonHref="/contact?interest=investment"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Start Your Investment Journey"
        subtitle="Share your investment criteria and we'll send you opportunities that match your goals."
        source="investment_properties_page"
      />
    </>
  )
}
