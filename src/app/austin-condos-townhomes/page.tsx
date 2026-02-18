import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Austin Condos & Townhomes | Birdsong Realty Team | Keller Williams",
  description:
    "Browse Austin condos and townhomes for sale. From downtown high-rises to suburban townhome communities, find the perfect low-maintenance Austin property.",
  keywords: [
    "Austin condos for sale",
    "Austin townhomes",
    "downtown Austin condos",
    "Austin high-rise condos",
    "Austin townhouse",
    "condos near downtown Austin",
  ],
  openGraph: {
    title: "Austin Condos & Townhomes | Birdsong Realty Team | Keller Williams",
    description:
      "Browse Austin condos and townhomes for sale with the Birdsong Realty Team at Keller Williams.",
  },
}

export default function AustinCondosTownhomesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Buy", href: "/portfolio" },
    { label: "Condos & Townhomes" },
  ]

  return (
    <>
      <SEOPageHero
        title="Austin Condos & Townhomes"
        subtitle="Low-maintenance living with Austin's best amenities, from downtown high-rises to charming neighborhood townhomes."
        breadcrumbs={breadcrumbs}
      />

      <Section className="bg-white">
        <Container>
          <SEOContent>
            <ContentSection>
              <h2>Condo &amp; Townhome Living in Austin</h2>
              <p>
                Austin&apos;s condo and townhome market offers an appealing alternative to
                traditional single-family homes. Whether you&apos;re a young professional
                seeking a downtown high-rise with skyline views, a couple looking for a
                lock-and-leave lifestyle, or a downsizer ready to simplify, Austin has
                options to match every lifestyle and budget.
              </p>
              <p>
                The Birdsong Realty Team helps buyers navigate the unique aspects of condo
                and townhome purchases, including HOA analysis, reserve fund reviews, and
                building quality assessments.
              </p>
            </ContentSection>

            {/* Market Segments */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-6">
                Condo &amp; Townhome Market Segments
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Downtown High-Rises</p>
                  <p className="text-lg font-semibold text-primary-800">Urban Luxury</p>
                  <p className="text-sm text-neutral-600 mt-2">The Austonian, The Independent, 360 Condos</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Mid-Rise Condos</p>
                  <p className="text-lg font-semibold text-primary-800">Neighborhood Living</p>
                  <p className="text-sm text-neutral-600 mt-2">SoCo, East Austin, South Lamar corridors</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Townhomes</p>
                  <p className="text-lg font-semibold text-primary-800">Best of Both Worlds</p>
                  <p className="text-sm text-neutral-600 mt-2">Private yards, garages, community amenities</p>
                </div>
              </div>
            </div>

            <HighlightBox title="Condo Buying Tips">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>HOA Financials:</strong> Review reserves, assessments, and monthly fees carefully</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Rules &amp; Restrictions:</strong> Understand pet policies, rental restrictions, and renovation rules</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Insurance:</strong> Know what the master policy covers vs. your individual HO6 policy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Resale Value:</strong> Location, floor plan, and views significantly impact appreciation</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>Why Choose Condo or Townhome Living?</h2>
              <p>
                Condos and townhomes offer a compelling lifestyle for Austin residents who
                value convenience and amenities over yard work and exterior maintenance.
                Many buildings feature fitness centers, rooftop pools, concierge services,
                and communal spaces that rival boutique hotels.
              </p>
              <p>
                For investors, Austin condos can provide strong rental income, particularly
                in high-demand areas near the University of Texas, downtown tech offices,
                and entertainment districts. The Birdsong Realty Team can help you
                evaluate both lifestyle and investment potential.
              </p>
            </ContentSection>
          </SEOContent>

          <CTABanner
            title="Find Your Perfect Austin Condo"
            description="Whether you want a downtown penthouse or a neighborhood townhome, we'll help you find the right fit."
            buttonText="Start Your Search"
            buttonHref="/contact?interest=condos"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Explore Austin Condos & Townhomes"
        subtitle="Tell us your preferences and we'll curate the best condo and townhome options for you."
        source="condos_townhomes_page"
      />
    </>
  )
}
