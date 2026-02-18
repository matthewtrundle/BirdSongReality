import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Austin New Construction Homes | Birdsong Realty Team | Keller Williams",
  description:
    "Find new construction homes in Austin, TX. From master-planned communities to custom builds, the Birdsong Realty Team guides buyers through Austin's new home market.",
  keywords: [
    "Austin new construction homes",
    "new builds Austin TX",
    "Austin custom homes",
    "master planned communities Austin",
    "new development Austin",
    "Austin home builders",
  ],
  openGraph: {
    title: "Austin New Construction Homes | Birdsong Realty Team | Keller Williams",
    description:
      "Find new construction homes in Austin, TX with expert guidance from the Birdsong Realty Team.",
  },
}

export default function AustinNewConstructionPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Buy", href: "/portfolio" },
    { label: "New Construction" },
  ]

  return (
    <>
      <SEOPageHero
        title="New Construction in Austin"
        subtitle="Brand-new homes with modern designs, energy efficiency, and the latest features across Austin's growing communities."
        breadcrumbs={breadcrumbs}
      />

      <Section className="bg-white">
        <Container>
          <SEOContent>
            <ContentSection>
              <h2>Austin&apos;s New Construction Market</h2>
              <p>
                Austin continues to be one of the fastest-growing cities in the nation, and
                new construction is thriving across the metro area. From large master-planned
                communities in the suburbs to infill custom builds closer to downtown, new
                homes offer buyers the chance to move into a property designed for
                modern living.
              </p>
              <p>
                The Birdsong Realty Team has strong relationships with Austin&apos;s top builders
                and developers, giving our clients early access to new phases, pre-construction
                pricing, and insider knowledge about upcoming communities.
              </p>
            </ContentSection>

            <HighlightBox title="Why Buy New Construction?">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Energy Efficiency:</strong> Modern insulation, windows, and HVAC systems lower utility costs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Customization:</strong> Choose your finishes, floor plans, and design options</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Builder Warranties:</strong> Structural and systems warranties for peace of mind</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Low Maintenance:</strong> Everything is brand new with no deferred maintenance</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>Popular New Construction Areas</h2>
              <p>
                Austin&apos;s growth corridors offer a wide variety of new construction options.
                The north and northwest suburbs, including Cedar Park, Leander, and Round Rock,
                feature large master-planned communities with amenity centers, pools, and parks.
                South Austin areas like Dripping Springs and Buda are attracting families with
                Hill Country settings and excellent schools.
              </p>
              <p>
                Closer to downtown, infill developments in East Austin and the Mueller
                neighborhood provide new-construction convenience with urban walkability.
                No matter your preferred location, we can help you navigate the new
                construction process from builder selection to closing.
              </p>
            </ContentSection>

            <ContentSection>
              <h2>Buyer Representation Matters</h2>
              <p>
                When purchasing new construction, having your own agent is essential. Builder
                sales offices represent the builder, not you. The Birdsong Realty Team
                advocates for your interests throughout the process, from negotiating upgrades
                and incentives to ensuring quality through inspections.
              </p>
            </ContentSection>
          </SEOContent>

          <CTABanner
            title="Interested in New Construction?"
            description="Let us connect you with Austin's top builders and guide you through the new construction buying process."
            buttonText="Explore New Builds"
            buttonHref="/contact?interest=new-construction"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Find Your New Home"
        subtitle="Share your preferences and we'll match you with the best new construction options in Austin."
        source="new_construction_page"
      />
    </>
  )
}
