import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "First-Time Home Buyers in Austin | Birdsong Realty Team | Keller Williams",
  description:
    "A complete guide for first-time home buyers in Austin, TX. The Birdsong Realty Team walks you through every step from pre-approval to closing day.",
  keywords: [
    "first time home buyer Austin",
    "buying first home Austin TX",
    "Austin first time buyer guide",
    "first time buyer programs Austin",
    "how to buy a home Austin",
    "Austin home buying process",
  ],
  openGraph: {
    title: "First-Time Home Buyers in Austin | Birdsong Realty Team | Keller Williams",
    description:
      "A complete guide for first-time home buyers in Austin, TX with the Birdsong Realty Team.",
  },
}

export default function AustinFirstTimeBuyersPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Buy", href: "/portfolio" },
    { label: "First-Time Buyers" },
  ]

  return (
    <>
      <SEOPageHero
        title="First-Time Home Buyers"
        subtitle="Buying your first home in Austin doesn't have to be overwhelming. We guide you through every step with patience and expertise."
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Purchasing your first home is one of the most significant financial decisions
                you&apos;ll make. The Austin market can feel competitive and fast-moving, but
                with the right guidance, first-time buyers can find great homes at fair
                prices. The Birdsong Realty Team specializes in helping first-time buyers
                navigate the process with confidence.
              </p>
            </ContentSection>

            <ContentSection>
              <h2>The Home Buying Process</h2>
              <p>
                Understanding the steps involved in buying a home removes much of the
                anxiety. Here&apos;s what the journey looks like from start to finish:
              </p>
              <ul>
                <li><strong>Get Pre-Approved:</strong> Work with a lender to understand your budget and strengthen your offer</li>
                <li><strong>Define Your Criteria:</strong> Location, size, features, and must-haves vs. nice-to-haves</li>
                <li><strong>Tour Properties:</strong> We schedule showings based on your curated list of matches</li>
                <li><strong>Make an Offer:</strong> We craft competitive offers with strategic terms and pricing</li>
                <li><strong>Inspections &amp; Due Diligence:</strong> Thorough review of the property condition</li>
                <li><strong>Appraisal &amp; Financing:</strong> Lender completes appraisal and finalizes your loan</li>
                <li><strong>Closing Day:</strong> Sign the papers and get the keys to your new home</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Down Payment Programs
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Several programs exist to help Austin first-time buyers with down payments
                and closing costs. The Austin Housing Finance Corporation, Texas State
                Affordable Housing Corporation, and various FHA programs can reduce the
                upfront costs of homeownership. We can connect you with lenders who
                specialize in these programs.
              </p>
            </HighlightBox>

            <ContentSection>
              <h2>Affordable Areas for First-Time Buyers</h2>
              <p>
                While some Austin neighborhoods have premium price tags, plenty of areas
                offer first-time buyers quality homes within reach. Here are some
                neighborhoods worth exploring:
              </p>
              <ul>
                <li><strong>Manor &amp; Pflugerville:</strong> Affordable new construction with growing amenities</li>
                <li><strong>South Austin (Slaughter Lane Corridor):</strong> Established neighborhoods with moderate prices</li>
                <li><strong>Round Rock:</strong> Excellent schools and a wide range of price points</li>
                <li><strong>Hutto &amp; Taylor:</strong> Emerging communities with the most affordable entry points</li>
                <li><strong>Del Valle:</strong> Close to the airport and downtown, with lower median prices</li>
              </ul>
            </ContentSection>

            <ContentSection>
              <h2>Common First-Time Buyer Mistakes to Avoid</h2>
              <p>
                We&apos;ve seen these pitfalls trip up first-time buyers, and we proactively
                help our clients avoid them:
              </p>
              <ul>
                <li><strong>Skipping pre-approval:</strong> Know your budget before you start shopping</li>
                <li><strong>Stretching too thin:</strong> Buy within your comfort zone, not the max approval</li>
                <li><strong>Waiving inspections:</strong> Always inspect, even in competitive markets</li>
                <li><strong>Ignoring closing costs:</strong> Budget 2-5% of the purchase price beyond your down payment</li>
                <li><strong>Not using a buyer&apos;s agent:</strong> Our services are typically free to buyers</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Our Commitment to First-Time Buyers
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                We believe everyone deserves patient, thorough guidance when buying their
                first home. There are no rushed decisions, no pressure, and no question too
                basic. The Birdsong Realty Team takes the time to educate and empower
                first-time buyers throughout the entire process.
              </p>
            </HighlightBox>
          </SEOContent>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <CTABanner
            title="Ready to Buy Your First Home?"
            description="Let us walk you through the process step by step. We make first-time buying easy and stress-free."
            buttonText="Get Started Today"
            buttonHref="/contact?interest=first-time-buyer"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Start Your Home Buying Journey"
        subtitle="Tell us a bit about yourself and we'll schedule a no-pressure first-time buyer consultation."
        source="first_time_buyers_page"
      />
    </>
  )
}
