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
  title: "Travis Heights Homes for Sale | Tree-Canopied Streets & Downtown Views",
  description:
    "Discover Travis Heights, one of Austin's most desirable neighborhoods. Tree-canopied streets, downtown views, walkability to SoCo and Lady Bird Lake. Homes from $700K to $2.5M.",
  keywords: [
    "Travis Heights homes for sale",
    "Travis Heights Austin real estate",
    "south Austin homes",
    "near South Congress homes",
    "downtown views Austin homes",
  ],
  openGraph: {
    title: "Travis Heights Homes for Sale | Tree-Canopied Streets & Downtown Views",
    description:
      "Discover Travis Heights - tree-canopied streets with downtown views near South Congress.",
    type: "website",
  },
}

export default function TravisHeightsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Travis Heights" },
  ]

  const stats = [
    { value: "$700K+", label: "Starting price" },
    { value: "Walk", label: "to SoCo" },
    { value: "Skyline", label: "Views" },
    { value: "78704", label: "Zip code" },
  ]

  return (
    <>
      <SEOPageHero
        title="Travis Heights"
        subtitle="Winding tree-canopied streets, stunning downtown views, and walkability to South Congress make this one of Austin's most coveted addresses"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Travis Heights is one of those rare neighborhoods that feels like a
                secret garden in the middle of a major city. With its winding, hilly
                streets shaded by towering live oaks and pecans, views of the downtown
                skyline from elevated lots, and walkability to South Congress Avenue
                and Lady Bird Lake, Travis Heights has quietly become one of Austin&apos;s
                most desirable places to live.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Neighborhood Overview</h2>
              <p>
                Travis Heights sits on the bluffs south of Lady Bird Lake, bounded
                roughly by South Congress to the west and I-35 to the east. The
                neighborhood&apos;s rolling topography creates a distinctive landscape
                where some properties enjoy panoramic views of downtown Austin and
                the Capitol dome.
              </p>
              <p>
                The area was developed in the 1920s-1940s and has maintained much of
                its original character, with narrow streets that wind through the hills,
                mature trees forming dense canopies, and a mix of architectural styles
                from modest cottages to substantial family homes.
              </p>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Downtown Skyline Views
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Travis Heights&apos; hilly terrain means many properties enjoy views
                of the downtown Austin skyline, particularly spectacular at sunset
                and during the evening when the buildings light up. These view
                properties command significant premiums and are among the most
                desirable in all of Austin.
              </p>
            </HighlightBox>

            <ContentSection id="home-styles">
              <h2>Home Styles</h2>

              <h3>Historic Homes</h3>
              <p>
                Original 1920s-1940s homes range from cozy bungalows to larger
                Craftsman and Colonial Revival homes. Many feature wide front
                porches, hardwood floors, and the character details that make
                older Austin homes so appealing.
              </p>

              <h3>Mid-Century Gems</h3>
              <p>
                Several notable mid-century modern homes dot the neighborhood,
                taking advantage of the hillside lots with walls of glass and
                dramatic cantilevers. These architectural gems are highly prized
                by design-conscious buyers.
              </p>

              <h3>Contemporary Construction</h3>
              <p>
                New and recent construction in Travis Heights tends toward
                sophisticated modern design, with multi-level homes that
                maximize views and integrate indoor-outdoor living. These
                homes often feature rooftop decks, courtyard pools, and
                high-end finishes.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The Travis Heights Lifestyle</h2>
              <p>
                Travis Heights residents enjoy a lifestyle that balances urban
                convenience with neighborhood tranquility. A morning walk to
                Jo&apos;s Coffee on South Congress, an afternoon paddle on Lady Bird
                Lake, and an evening exploring SoCo&apos;s restaurants and shops—
                all within walking distance of home.
              </p>
              <p>
                The neighborhood&apos;s proximity to both South Congress and East
                Austin&apos;s dining scenes means an embarrassment of culinary riches,
                while the Hike-and-Bike Trail along Lady Bird Lake provides miles
                of recreation at your doorstep. The Big Stacy neighborhood pool is
                a beloved community gathering spot in summer months.
              </p>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <p>
                Travis Heights commands strong prices reflecting its location,
                views, walkability, and limited supply. The 78704 zip code is one
                of Austin&apos;s most desirable and competitive markets.
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Cottages/Bungalows:</strong> $700,000 - $1,000,000</li>
                  <li><strong>Updated/Family Homes:</strong> $1,000,000 - $1,800,000</li>
                  <li><strong>View Properties/New Build:</strong> $1,500,000 - $2,500,000+</li>
                  <li><strong>Average Price/Sq Ft:</strong> $400 - $550</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Discover Travis Heights"
          description="Find your home in one of Austin's most charming and walkable neighborhoods, minutes from South Congress and Lady Bird Lake."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
