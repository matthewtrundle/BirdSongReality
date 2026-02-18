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
  title: "East Austin Homes for Sale | Austin's Most Dynamic Neighborhood",
  description:
    "Discover East Austin, the epicenter of Austin's creative renaissance. Craft breweries, acclaimed restaurants, galleries, and a mix of historic and modern homes. From $400K to $1.5M.",
  keywords: [
    "East Austin homes for sale",
    "East Austin real estate",
    "East Cesar Chavez homes",
    "East 6th Street neighborhood",
    "contemporary homes Austin TX",
  ],
  openGraph: {
    title: "East Austin Homes for Sale | Austin's Most Dynamic Neighborhood",
    description:
      "Discover East Austin - the epicenter of Austin's creative renaissance.",
    type: "website",
  },
}

export default function EastAustinPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "East Austin" },
  ]

  const stats = [
    { value: "$400K+", label: "Starting price" },
    { value: "90+", label: "Walk Score" },
    { value: "Fast", label: "Appreciation" },
    { value: "78702", label: "Zip code" },
  ]

  return (
    <>
      <SEOPageHero
        title="East Austin"
        subtitle="The epicenter of Austin's creative renaissance, where craft breweries, acclaimed restaurants, and bold architecture define the city's most dynamic neighborhood"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                East Austin has undergone one of the most dramatic transformations
                in American urbanism. What was once a overlooked part of the city has
                become the creative and culinary epicenter of Austin, drawing chefs,
                artists, entrepreneurs, and homebuyers who want to be at the leading
                edge of the city&apos;s evolution. Today, East Austin&apos;s mix of
                historic bungalows, striking contemporary architecture, and world-class
                food and drink make it one of the most exciting places to live in Texas.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Neighborhood Overview</h2>
              <p>
                East Austin broadly encompasses the area east of I-35, with the most
                active residential and commercial corridors running along East Cesar
                Chavez Street, East 6th Street, and East 7th Street. Sub-neighborhoods
                include East Cesar Chavez, Holly, and Govalle, each with its own
                distinct character.
              </p>
              <p>
                The area&apos;s proximity to downtown—just across I-35—means residents
                are minutes from the Capitol, Rainey Street, and Lady Bird Lake. Yet
                East Austin has developed its own self-sufficient ecosystem of
                restaurants, bars, coffee shops, and shops that rivals any neighborhood
                in the city.
              </p>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Culinary Destination
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                East Austin has become one of the country&apos;s most exciting food
                neighborhoods, home to nationally acclaimed restaurants like Suerte,
                Nixta Taqueria, and Kemuri Tatsu-ya. The area&apos;s food trailer parks,
                craft breweries (Lazarus, Blue Owl), and cocktail bars create a
                dining scene that draws visitors from around the world.
              </p>
            </HighlightBox>

            <ContentSection id="property-types">
              <h2>Property Types</h2>

              <h3>Historic Bungalows</h3>
              <p>
                East Austin&apos;s original housing stock consists of charming 1920s-1950s
                bungalows and shotgun houses, many of which have been beautifully
                renovated. These homes offer character, covered porches, and mature
                trees on quiet side streets.
              </p>

              <h3>Contemporary New Construction</h3>
              <p>
                Bold contemporary homes have become East Austin&apos;s architectural
                signature. These striking designs feature flat roofs, walls of glass,
                rooftop decks, courtyard pools, and innovative use of materials.
                Many are built by acclaimed Austin architects pushing design boundaries.
              </p>

              <h3>Townhomes &amp; Condos</h3>
              <p>
                Modern townhome and condo developments offer more affordable entry
                points into the neighborhood, with contemporary finishes, private
                patios or rooftop decks, and walkability to East Austin&apos;s
                restaurants and entertainment.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The East Austin Lifestyle</h2>
              <p>
                East Austin attracts a diverse, creative community that values
                walkability, authentic experiences, and being part of something
                dynamic. A typical day might include morning coffee at Cenote,
                lunch from a food trailer on East Cesar Chavez, an afternoon gallery
                walk, and dinner at one of the neighborhood&apos;s acclaimed restaurants.
              </p>
              <p>
                The entertainment scene extends from craft cocktail bars and
                microbreweries to live music venues and art galleries. Weekend
                mornings bring farmers markets and brunch crowds, while evenings
                buzz with energy along East 6th Street and the surrounding blocks.
              </p>
            </ContentSection>

            <ContentSection id="considerations">
              <h2>Buying Considerations</h2>
              <ul>
                <li><strong>Rapid Change</strong> — The neighborhood continues to evolve; research specific blocks carefully</li>
                <li><strong>Mixed Zoning</strong> — Commercial and residential mix can mean varied neighbors</li>
                <li><strong>Appreciation</strong> — East Austin has seen some of Austin&apos;s strongest price appreciation</li>
                <li><strong>I-35 Expansion</strong> — The ongoing I-35 rebuild will impact some properties; consider proximity</li>
                <li><strong>Walkability</strong> — Walk scores are among the highest in Austin, reducing car dependence</li>
              </ul>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <p>
                East Austin pricing varies significantly by exact location, property
                type, and condition. The area offers both accessible entry points and
                premium contemporary homes.
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Condos/Townhomes:</strong> $350,000 - $650,000</li>
                  <li><strong>Historic Bungalows:</strong> $500,000 - $800,000</li>
                  <li><strong>Contemporary Homes:</strong> $800,000 - $1,500,000</li>
                  <li><strong>Average Price/Sq Ft:</strong> $350 - $500</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Explore East Austin"
          description="Find your place in Austin's most dynamic neighborhood, where creativity, culture, and community come together."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
