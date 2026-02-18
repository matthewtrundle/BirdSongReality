import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Austin Waterfront Homes | Birdsong Realty Team | Keller Williams",
  description:
    "Find waterfront homes on Lake Austin, Lake Travis, and beyond. The Birdsong Realty Team specializes in lakefront and waterfront properties across the Austin area.",
  keywords: [
    "Austin waterfront homes",
    "Lake Austin homes",
    "Lake Travis waterfront",
    "lakefront property Austin",
    "waterfront real estate Austin TX",
    "lake homes Austin",
  ],
  openGraph: {
    title: "Austin Waterfront Homes | Birdsong Realty Team | Keller Williams",
    description:
      "Find waterfront homes on Lake Austin, Lake Travis, and beyond with the Birdsong Realty Team.",
  },
}

export default function AustinWaterfrontHomesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Buy", href: "/portfolio" },
    { label: "Waterfront Homes" },
  ]

  return (
    <>
      <SEOPageHero
        title="Austin Waterfront Homes"
        subtitle="Live on the water in one of Texas's most desirable lake communities, from Lake Austin to Lake Travis and beyond."
        breadcrumbs={breadcrumbs}
      />

      <Section className="bg-white">
        <Container>
          <SEOContent>
            <ContentSection>
              <h2>Waterfront Living in Austin</h2>
              <p>
                Austin is uniquely blessed with a chain of Highland Lakes that wind through
                the Texas Hill Country, creating some of the most sought-after waterfront
                real estate in the state. From the exclusive shores of Lake Austin to the
                expansive waters of Lake Travis, waterfront living here means spectacular
                views, private boat docks, and a lifestyle centered around the water.
              </p>
              <p>
                The Birdsong Realty Team understands the nuances of waterfront property
                purchases, including water rights, dock permits, flood zones, and the
                unique considerations that come with lakeside ownership.
              </p>
            </ContentSection>

            {/* Lake Overview */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-6">
                Austin&apos;s Premier Lakes
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Lake Austin</p>
                  <p className="text-lg font-semibold text-primary-800">Most Exclusive</p>
                  <p className="text-sm text-neutral-600 mt-2">Constant-level lake, minutes from downtown</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Lake Travis</p>
                  <p className="text-lg font-semibold text-primary-800">Most Popular</p>
                  <p className="text-sm text-neutral-600 mt-2">65 miles of shoreline, vibrant lake culture</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Lady Bird Lake</p>
                  <p className="text-lg font-semibold text-primary-800">Urban Waterfront</p>
                  <p className="text-sm text-neutral-600 mt-2">Downtown living with waterfront trails</p>
                </div>
              </div>
            </div>

            <HighlightBox title="Waterfront Property Considerations">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Water Access:</strong> Verify dock permits, water depth, and boat access rights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Flood Zones:</strong> Understand FEMA flood maps and insurance requirements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>LCRA Regulations:</strong> Lake-level management and shoreline building rules</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Septic vs. Sewer:</strong> Many lakefront properties use septic systems</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>Why Choose Waterfront in Austin?</h2>
              <p>
                Austin&apos;s waterfront properties offer a rare combination of natural beauty,
                recreational access, and proximity to a world-class city. Homeowners enjoy
                boating, kayaking, paddleboarding, and fishing right from their back yard,
                while still being a short drive from Austin&apos;s renowned dining, entertainment,
                and tech industry employment centers.
              </p>
              <p>
                Waterfront homes in Austin have historically held their value well and often
                appreciate faster than non-waterfront properties. The limited supply of
                lakefront land ensures these properties remain highly desirable investments.
              </p>
            </ContentSection>
          </SEOContent>

          <CTABanner
            title="Dream of Living on the Water?"
            description="Let us help you find the perfect waterfront property on Austin's Highland Lakes."
            buttonText="Explore Waterfront Homes"
            buttonHref="/contact?interest=waterfront"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Find Your Waterfront Home"
        subtitle="Tell us about your lakefront dream and we'll curate waterfront options tailored to you."
        source="waterfront_homes_page"
      />
    </>
  )
}
