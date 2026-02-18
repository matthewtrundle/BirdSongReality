import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Austin Luxury Homes | Birdsong Realty Team | Keller Williams",
  description:
    "Explore Austin's finest luxury real estate. From Westlake estates to Barton Creek mansions, the Birdsong Realty Team helps discerning buyers find premium properties in Austin, TX.",
  keywords: [
    "Austin luxury homes",
    "luxury real estate Austin TX",
    "Westlake estates",
    "Barton Creek luxury",
    "high end homes Austin",
    "premium Austin properties",
  ],
  openGraph: {
    title: "Austin Luxury Homes | Birdsong Realty Team | Keller Williams",
    description:
      "Explore Austin's finest luxury real estate with the Birdsong Realty Team at Keller Williams.",
  },
}

export default function AustinLuxuryHomesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Buy", href: "/portfolio" },
    { label: "Luxury Homes" },
  ]

  return (
    <>
      <SEOPageHero
        title="Austin Luxury Homes"
        subtitle="Discover premier estates and luxury properties across Austin's most prestigious neighborhoods."
        breadcrumbs={breadcrumbs}
      />

      <Section className="bg-white">
        <Container>
          <SEOContent>
            <ContentSection>
              <h2>Luxury Living in Austin</h2>
              <p>
                Austin&apos;s luxury real estate market offers an exceptional range of high-end
                properties, from sprawling Hill Country estates with panoramic views to
                contemporary architectural masterpieces in the heart of the city. The
                Birdsong Realty Team specializes in connecting discerning buyers with
                Austin&apos;s most exclusive properties.
              </p>
              <p>
                Whether you&apos;re drawn to the rolling hills of Westlake, the established
                elegance of Tarrytown, or the modern sophistication of downtown high-rises,
                Austin&apos;s luxury market has something for every taste and lifestyle.
              </p>
            </ContentSection>

            {/* Market Overview */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-6">
                Luxury Market Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Entry Luxury</p>
                  <p className="text-2xl font-semibold text-primary-800">$1M - $2M</p>
                  <p className="text-sm text-neutral-600 mt-2">Premium finishes, desirable locations</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Mid Luxury</p>
                  <p className="text-2xl font-semibold text-primary-800">$2M - $5M</p>
                  <p className="text-sm text-neutral-600 mt-2">Custom builds, premier neighborhoods</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Ultra Luxury</p>
                  <p className="text-2xl font-semibold text-primary-800">$5M+</p>
                  <p className="text-sm text-neutral-600 mt-2">Estate properties, trophy homes</p>
                </div>
              </div>
            </div>

            <HighlightBox title="Austin Luxury Property Features">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Premier Locations:</strong> Westlake Hills, Barton Creek, Tarrytown, and Lake Austin</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Custom Architecture:</strong> Award-winning designs with high-end finishes throughout</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Resort-Style Amenities:</strong> Infinity pools, outdoor living, home theaters, wine cellars</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Smart Home Technology:</strong> Integrated automation, security, and energy systems</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>Top Luxury Neighborhoods</h2>
              <p>
                Austin&apos;s luxury market is concentrated in several highly desirable areas,
                each with its own distinct character. Westlake Hills offers top-rated schools
                and Hill Country views. Barton Creek provides a resort-like atmosphere with
                world-class golf. Tarrytown delivers old Austin charm with walkability to
                downtown, while Rob Roy and Davenport Ranch combine privacy with proximity.
              </p>
              <p>
                The Birdsong Realty Team has deep relationships across these communities,
                often providing access to off-market properties and exclusive listings before
                they hit the MLS. Let us help you find the luxury home that matches your
                vision.
              </p>
            </ContentSection>
          </SEOContent>

          <CTABanner
            title="Seeking Luxury in Austin?"
            description="Let us introduce you to Austin's finest properties and provide personalized guidance through the luxury market."
            buttonText="Schedule Consultation"
            buttonHref="/contact?interest=luxury"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Explore Austin Luxury Homes"
        subtitle="Tell us about your luxury home requirements for personalized market insights."
        source="luxury_homes_page"
      />
    </>
  )
}
