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
  title: "Hyde Park Homes for Sale | Austin's Beloved Historic Neighborhood",
  description:
    "Discover Hyde Park, Austin's first suburb. Victorian and Craftsman homes, towering pecan trees, walkability to UT campus, and vibrant community life. Homes from $500K to $1.5M.",
  keywords: [
    "Hyde Park homes for sale",
    "Hyde Park Austin real estate",
    "historic homes Austin TX",
    "Victorian homes Austin",
    "near UT campus homes",
  ],
  openGraph: {
    title: "Hyde Park Homes for Sale | Austin's Beloved Historic Neighborhood",
    description:
      "Discover Hyde Park - historic homes and vibrant community life in Austin's first suburb.",
    type: "website",
  },
}

export default function HydeParkPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Hyde Park" },
  ]

  const stats = [
    { value: "$500K+", label: "Starting price" },
    { value: "1891", label: "Established" },
    { value: "Walk", label: "to UT campus" },
    { value: "Historic", label: "District" },
  ]

  return (
    <>
      <SEOPageHero
        title="Hyde Park"
        subtitle="Austin's first suburb, where Victorian charm, towering pecan trees, and vibrant community spirit create one of the city's most beloved neighborhoods"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Founded in 1891, Hyde Park holds the distinction of being Austin&apos;s
                first planned suburb. Today, it remains one of the city&apos;s most
                cherished neighborhoods, known for its stunning Victorian and Craftsman
                homes, towering pecan trees, and a community spirit that brings
                neighbors together for porch gatherings, the annual Homes Tour, and
                lively debates at local coffee shops.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Neighborhood Overview</h2>
              <p>
                Hyde Park sits just north of the UT Austin campus between Guadalupe
                Street and Duval Street, roughly bounded by 38th Street to the south
                and 51st Street to the north. This location puts residents within
                walking or biking distance of the university, the Drag, and an
                impressive array of restaurants, coffee shops, and local businesses.
              </p>
              <p>
                The neighborhood features a mix of carefully preserved historic homes,
                charming duplexes, and apartment buildings that create a diverse,
                walkable community. Shipe Park provides a green gathering space with
                a pool, playground, and basketball courts.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Hyde Park Homes Tour
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                The annual Hyde Park Homes Tour is a beloved Austin tradition, offering
                a rare look inside some of the neighborhood&apos;s most beautifully
                preserved and creatively renovated historic homes. It&apos;s a testament
                to the community&apos;s pride in its architectural heritage.
              </p>
            </HighlightBox>

            <ContentSection id="architecture">
              <h2>Architecture &amp; Home Styles</h2>
              <p>
                Hyde Park offers one of Austin&apos;s richest collections of historic
                residential architecture:
              </p>

              <h3>Victorian Homes</h3>
              <p>
                Grand Victorian homes dating from the 1890s-1910s line many of Hyde
                Park&apos;s streets, featuring ornate millwork, wraparound porches,
                stained glass windows, and soaring ceilings. These homes are the
                neighborhood&apos;s crown jewels.
              </p>

              <h3>Craftsman Bungalows</h3>
              <p>
                Arts and Crafts-style bungalows from the 1920s-1940s are abundant,
                featuring characteristic deep porches, tapered columns, and warm
                wood interiors. Many have been thoughtfully updated while maintaining
                their period character.
              </p>

              <h3>Duplexes &amp; Multi-Family</h3>
              <p>
                Historic duplexes and small apartment buildings contribute to Hyde
                Park&apos;s diverse housing stock and walkable, mixed-use character.
                These properties often appeal to investors and owner-occupants alike.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The Hyde Park Lifestyle</h2>
              <p>
                Hyde Park residents are passionate about their neighborhood&apos;s character
                and community. Mornings start with coffee at Quack&apos;s on 43rd Street
                or Epoch Coffee, followed by a bike ride to campus or downtown. The
                neighborhood is famously walkable, with Hyde Park Bar &amp; Grill, Asti
                Trattoria, and numerous local favorites within easy reach.
              </p>
              <p>
                The community&apos;s active neighborhood association organizes events,
                advocates for historic preservation, and fosters the kind of neighbor-to-neighbor
                connections that make Hyde Park feel like a small town within a big city.
              </p>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <p>
                Hyde Park offers a range of price points depending on home size,
                condition, and architectural significance. Homes here sell on their
                character and walkability as much as their square footage.
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Smaller Homes/Condos:</strong> $400,000 - $600,000</li>
                  <li><strong>Bungalows &amp; Updated Homes:</strong> $600,000 - $900,000</li>
                  <li><strong>Large Victorians/Premium:</strong> $900,000 - $1,500,000</li>
                  <li><strong>Average Price/Sq Ft:</strong> $300 - $450</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Explore Hyde Park Living"
          description="Discover historic homes with character and community in Austin's beloved first suburb."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
