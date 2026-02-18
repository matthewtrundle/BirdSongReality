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
  title: "Tarrytown Homes for Sale | Austin's Premier Established Neighborhood",
  description:
    "Discover Tarrytown, Austin's most prestigious neighborhood. Stately homes, mature live oaks, top-rated schools, and Lake Austin access. Homes from $900K to $5M+.",
  keywords: [
    "Tarrytown homes for sale",
    "Tarrytown Austin real estate",
    "luxury homes Austin TX",
    "Casis Elementary homes",
    "Lake Austin neighborhood",
  ],
  openGraph: {
    title: "Tarrytown Homes for Sale | Austin's Premier Established Neighborhood",
    description:
      "Discover Tarrytown - stately homes and top schools near Lake Austin.",
    type: "website",
  },
}

export default function TarrytownPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Tarrytown" },
  ]

  const stats = [
    { value: "$900K+", label: "Starting price" },
    { value: "Top 10", label: "Casis Elementary" },
    { value: "Walk", label: "to Lake Austin" },
    { value: "78703", label: "Zip code" },
  ]

  return (
    <>
      <SEOPageHero
        title="Tarrytown"
        subtitle="Austin's premier established neighborhood with stately homes, mature live oaks, and walkable access to Lake Austin"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Tarrytown has been one of Austin&apos;s most coveted neighborhoods since
                the 1930s. With its grand live oak canopy, gracious homes, top-rated
                Casis Elementary, and proximity to Lake Austin, Tarrytown offers an
                exceptional quality of life that has attracted generations of Austin&apos;s
                most discerning families.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Neighborhood Overview</h2>
              <p>
                Tarrytown occupies a prime location west of MoPac and north of Lake
                Austin Boulevard, placing residents minutes from both downtown Austin
                and the natural beauty of Lake Austin. The neighborhood is characterized
                by its wide, tree-lined streets, generous lot sizes, and a quiet,
                residential atmosphere that belies its central location.
              </p>
              <p>
                The area is anchored by Casis Elementary, one of Austin ISD&apos;s
                highest-performing schools, and features several pocket parks, including
                Reed Park, Walsh Boat Landing, and the beloved Tarrytown United Methodist
                Church grounds. Lake Austin Boulevard provides easy access to Red Bud Isle,
                Deep Eddy Pool, and the Hike-and-Bike Trail.
              </p>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Casis Elementary
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Casis Elementary consistently ranks among Austin ISD&apos;s top schools,
                making Tarrytown a magnet for families who want excellent public education
                in a walkable neighborhood setting. The school serves as a community hub
                with active parent involvement.
              </p>
            </HighlightBox>

            <ContentSection id="architecture">
              <h2>Architecture &amp; Home Styles</h2>
              <p>
                Tarrytown homes reflect decades of architectural evolution, creating
                a rich and varied streetscape:
              </p>

              <h3>Classic Estate Homes</h3>
              <p>
                Original 1930s-1960s homes range from modest ranch houses to grand
                Georgian and Colonial Revival estates. Many sit on generous lots of
                a quarter-acre or more, shaded by century-old live oaks and pecans.
              </p>

              <h3>Thoughtful Renovations</h3>
              <p>
                Many Tarrytown homes have been beautifully renovated, preserving their
                architectural character while adding modern kitchens, spa bathrooms,
                and outdoor living spaces that take advantage of the mature landscaping.
              </p>

              <h3>New Construction</h3>
              <p>
                Tasteful new construction has appeared on select lots, typically
                featuring transitional or modern designs with high-end finishes,
                pools, and carefully integrated landscaping that respects the
                neighborhood&apos;s established character.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The Tarrytown Lifestyle</h2>
              <p>
                Life in Tarrytown centers on family, community, and the outdoors.
                Mornings might bring a jog along Lake Austin Boulevard or a swim
                at Deep Eddy Pool—one of the oldest swimming pools in Texas.
                Afternoons feature walks with the dog through the neighborhood&apos;s
                shaded streets or paddleboarding at Walsh Boat Landing.
              </p>
              <p>
                The neighborhood&apos;s proximity to downtown, Clarksville, and Lake
                Austin Boulevard dining means world-class restaurants are minutes
                away, while the residential streets remain peaceful and quiet.
                It&apos;s this balance of convenience and serenity that makes
                Tarrytown so special.
              </p>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <p>
                Tarrytown commands some of Austin&apos;s highest prices, reflecting
                the combination of location, schools, character, and limited supply.
                Homes here tend to hold their value exceptionally well.
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Smaller/Original Homes:</strong> $900,000 - $1,500,000</li>
                  <li><strong>Renovated Homes:</strong> $1,500,000 - $3,000,000</li>
                  <li><strong>New Construction/Estates:</strong> $2,500,000 - $5,000,000+</li>
                  <li><strong>Average Price/Sq Ft:</strong> $500 - $700</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Discover Tarrytown Living"
          description="Explore available properties in Austin's most prestigious established neighborhood."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
