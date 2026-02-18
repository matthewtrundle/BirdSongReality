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
  title: "West Lake Hills Homes for Sale | Luxury Living & Top Schools",
  description:
    "Discover West Lake Hills, Austin's most prestigious community. Hill Country views, Eanes ISD schools, custom estates, and proximity to downtown. Homes from $800K to $5M+.",
  keywords: [
    "West Lake Hills homes for sale",
    "Westlake Austin real estate",
    "Eanes ISD homes",
    "luxury homes Austin TX",
    "Hill Country views Austin",
  ],
  openGraph: {
    title: "West Lake Hills Homes for Sale | Luxury Living & Top Schools",
    description:
      "Discover West Lake Hills - luxury estates with Hill Country views and top-rated Eanes ISD schools.",
    type: "website",
  },
}

export default function WestLakeHillsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "West Lake Hills" },
  ]

  const stats = [
    { value: "$800K+", label: "Starting price" },
    { value: "#1", label: "Eanes ISD" },
    { value: "Views", label: "Hill Country" },
    { value: "78746", label: "Zip code" },
  ]

  return (
    <>
      <SEOPageHero
        title="West Lake Hills"
        subtitle="Panoramic Hill Country views, top-rated Eanes ISD schools, and custom estates define Austin's most prestigious address"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                West Lake Hills is an incorporated city within the Austin metro
                area that consistently ranks among the most desirable communities
                in Texas. Known for its acclaimed Eanes ISD schools, stunning Hill
                Country vistas, and large custom estates nestled among live oaks and
                native cedars, West Lake Hills offers a serene, natural setting just
                minutes from downtown Austin.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Community Overview</h2>
              <p>
                West Lake Hills sits west of MoPac (Loop 1) along the rolling hills
                between Loop 360 (Capital of Texas Highway) and Bee Cave Road. The
                area&apos;s topography provides many properties with panoramic views
                of the Hill Country, downtown Austin skyline, or both.
              </p>
              <p>
                As an incorporated city, West Lake Hills maintains its own municipal
                services and lower-density zoning that preserves the area&apos;s
                wooded, residential character. The city is home to Wild Basin Wilderness
                Preserve, offering 227 acres of trails and natural beauty within the
                community.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Eanes ISD Excellence
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Eanes Independent School District is consistently ranked among the top
                school districts in Texas. Westlake High School is nationally recognized
                for academic excellence, athletics, and fine arts. This reputation is a
                primary driver of real estate demand in West Lake Hills.
              </p>
            </HighlightBox>

            <ContentSection id="property-types">
              <h2>Property Types</h2>

              <h3>Custom Estates</h3>
              <p>
                The majority of West Lake Hills properties are custom-built single-family
                homes on large, wooded lots. Many feature Hill Country stone construction,
                resort-style pools, and outdoor living spaces designed to take advantage
                of the views and natural setting. Lot sizes often exceed an acre.
              </p>

              <h3>Contemporary New Builds</h3>
              <p>
                Newer construction tends toward contemporary Hill Country modern
                architecture, with walls of glass, clean lines, and sustainable design
                elements. These homes often feature smart home technology, energy-efficient
                systems, and luxury finishes.
              </p>

              <h3>Gated Communities</h3>
              <p>
                Several gated enclaves within West Lake Hills offer additional security
                and shared amenities, including Rob Roy, Barton Creek, and The Preserve.
                These communities feature some of the area&apos;s most prestigious properties.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The West Lake Hills Lifestyle</h2>
              <p>
                Living in West Lake Hills means enjoying nature and privacy while
                being minutes from Austin&apos;s urban core. Morning hikes at Wild
                Basin Preserve, afternoon swims in resort-style pools with Hill
                Country views, and evening sunsets from expansive terraces define
                the daily rhythm.
              </p>
              <p>
                Despite its secluded feel, West Lake Hills provides quick access
                to downtown Austin via MoPac or Loop 360, and the nearby Westlake
                area along Bee Cave Road offers upscale shopping and dining. Lake
                Austin is also easily accessible for boating and water recreation.
              </p>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <p>
                West Lake Hills represents the top tier of the Austin market. Limited
                supply, exceptional schools, and the desirable 78746 zip code drive
                strong and consistent demand.
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Smaller/Older Homes:</strong> $800,000 - $1,500,000</li>
                  <li><strong>Updated Homes:</strong> $1,500,000 - $3,000,000</li>
                  <li><strong>Custom Estates:</strong> $3,000,000 - $5,000,000+</li>
                  <li><strong>Average Price/Sq Ft:</strong> $400 - $600</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Discover West Lake Hills"
          description="Explore luxury estates and family homes in Austin's most prestigious community with top-rated Eanes ISD schools."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
