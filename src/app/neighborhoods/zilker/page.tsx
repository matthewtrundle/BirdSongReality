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
  title: "Zilker Homes for Sale | Live Near Barton Springs & Zilker Park",
  description:
    "Discover Zilker, one of Austin's most iconic neighborhoods. Charming bungalows, Barton Springs Pool, Zilker Park, and the Lady Bird Lake trail. Homes from $650K to $2.5M+.",
  keywords: [
    "Zilker homes for sale",
    "Zilker Austin real estate",
    "Barton Springs neighborhood",
    "Zilker Park homes",
    "Austin central homes for sale",
  ],
  openGraph: {
    title: "Zilker Homes for Sale | Live Near Barton Springs & Zilker Park",
    description:
      "Discover Zilker - charming homes near Barton Springs Pool and Zilker Park in Austin, TX.",
    type: "website",
  },
}

export default function ZilkerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Zilker" },
  ]

  const stats = [
    { value: "$650K+", label: "Starting price" },
    { value: "Walk", label: "to Barton Springs" },
    { value: "351 ac", label: "Zilker Park" },
    { value: "78704", label: "Zip code" },
  ]

  return (
    <>
      <SEOPageHero
        title="Zilker"
        subtitle="Austin's iconic neighborhood where tree-lined streets, charming bungalows, and Barton Springs Pool create an unbeatable lifestyle"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Zilker is the neighborhood that embodies the Austin lifestyle. Named after
                the beloved 351-acre Zilker Park, this central Austin gem puts you within
                walking distance of Barton Springs Pool, the Lady Bird Lake Hike-and-Bike
                Trail, and some of the city&apos;s best restaurants and live music venues.
                It&apos;s no wonder Zilker consistently ranks as one of Austin&apos;s most
                desirable places to live.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Neighborhood Overview</h2>
              <p>
                Zilker sits just south of Lady Bird Lake and west of South Lamar
                Boulevard, placing residents at the intersection of nature and urban
                energy. The neighborhood is defined by its mature live oaks, eclectic
                mix of homes ranging from 1940s bungalows to modern new construction,
                and a community that truly lives outdoors.
              </p>
              <p>
                The area is home to ACL Music Festival each October, the Zilker Kite
                Festival, Trail of Lights during the holidays, and countless community
                events in the park. Residents enjoy a rare combination of green space,
                walkability, and access to Austin&apos;s vibrant cultural scene.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Barton Springs Pool
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Fed by natural underground springs, Barton Springs Pool maintains a
                refreshing 68-70 degrees year-round. This three-acre natural swimming
                pool in Zilker Park is the heart of Austin&apos;s outdoor culture and
                one of the top reasons people choose to live in Zilker.
              </p>
            </HighlightBox>

            <ContentSection id="home-styles">
              <h2>Home Styles</h2>
              <p>
                Zilker offers an eclectic mix of housing that reflects its evolution
                over the decades:
              </p>

              <h3>Classic Bungalows</h3>
              <p>
                Original 1930s-1950s bungalows are the heart of Zilker&apos;s charm.
                Many have been lovingly updated while preserving their character,
                featuring hardwood floors, covered front porches, and mature
                landscaping. These homes are highly sought-after and sell quickly.
              </p>

              <h3>New Construction</h3>
              <p>
                Modern homes have appeared throughout Zilker, typically featuring
                contemporary designs with open floor plans, energy-efficient systems,
                and rooftop decks with downtown skyline or Hill Country views.
              </p>

              <h3>Renovated &amp; Expanded Homes</h3>
              <p>
                Many original homes have been thoughtfully renovated and expanded,
                blending period charm with modern amenities like chef&apos;s kitchens,
                spa bathrooms, and outdoor living spaces.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The Zilker Lifestyle</h2>
              <p>
                Living in Zilker means embracing the outdoors. A typical day might
                start with a morning swim at Barton Springs, followed by brunch at
                one of South Lamar&apos;s restaurants. Afternoons bring trail runs
                along Lady Bird Lake, paddleboarding, or simply reading under the
                live oaks in Zilker Park. Evenings feature live music, food trucks,
                or gathering with neighbors on spacious front porches.
              </p>
              <p>
                The neighborhood is family-friendly with excellent playgrounds,
                the Zilker Botanical Garden, and the beloved Zilker Zephyr train.
                Young professionals appreciate the proximity to downtown, South
                Lamar dining, and Barton Creek Mall.
              </p>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <p>
                Zilker homes command premium prices reflecting the neighborhood&apos;s
                exceptional location and lifestyle. Properties sell quickly here,
                often with multiple offers.
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Bungalows/Cottages:</strong> $650,000 - $1,200,000</li>
                  <li><strong>Updated/Expanded Homes:</strong> $900,000 - $1,800,000</li>
                  <li><strong>New Construction:</strong> $1,200,000 - $2,500,000+</li>
                  <li><strong>Average Price/Sq Ft:</strong> $450 - $600</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Find Your Home in Zilker"
          description="Browse available properties in one of Austin's most beloved neighborhoods, steps from Barton Springs and Zilker Park."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
