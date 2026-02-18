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
  title: "Mueller Homes for Sale | Austin's Award-Winning Urban Community",
  description:
    "Discover Mueller, Austin's award-winning New Urbanist community. Walkable streets, Mueller Lake Park, the Thinkery, and modern homes. Homes from $400K to $1.2M.",
  keywords: [
    "Mueller homes for sale",
    "Mueller Austin real estate",
    "Mueller development Austin",
    "new urbanist Austin",
    "walkable Austin neighborhood",
  ],
  openGraph: {
    title: "Mueller Homes for Sale | Austin's Award-Winning Urban Community",
    description:
      "Discover Mueller - walkable New Urbanist living in the heart of Austin.",
    type: "website",
  },
}

export default function MuellerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Mueller" },
  ]

  const stats = [
    { value: "$400K+", label: "Starting price" },
    { value: "700 ac", label: "Development" },
    { value: "Walk", label: "to everything" },
    { value: "LEED", label: "Certified" },
  ]

  return (
    <>
      <SEOPageHero
        title="Mueller"
        subtitle="Austin's award-winning New Urbanist community where walkable streets, parks, and local businesses create a vibrant urban village"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Built on the 700-acre site of Austin&apos;s former Robert Mueller
                Municipal Airport, Mueller is a nationally recognized model for
                sustainable urban development. This New Urbanist community combines
                walkable streets, diverse housing, parks, shops, and restaurants into
                a self-contained neighborhood that feels like a small town—right in
                the heart of Austin.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Community Overview</h2>
              <p>
                Mueller&apos;s master plan prioritizes walkability, green space, and
                community gathering. The development includes over 140 acres of parks
                and open space, anchored by Mueller Lake Park—a 30-acre park surrounding
                a spring-fed lake that serves as the community&apos;s living room.
              </p>
              <p>
                The neighborhood is conveniently located near I-35 and the UT campus,
                with easy access to downtown, East Austin dining, and major employers.
                The on-site H-E-B, Alamo Drafthouse, Thinkery children&apos;s museum,
                and a growing list of restaurants and shops make Mueller increasingly
                self-sufficient.
              </p>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Sustainability Leadership
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Mueller was designed with sustainability at its core. All homes meet
                Austin Energy Green Building standards, many with solar panels. The
                development includes a district cooling system, extensive native
                landscaping, and infrastructure for electric vehicles. It&apos;s one
                of the greenest communities in Texas.
              </p>
            </HighlightBox>

            <ContentSection id="home-styles">
              <h2>Home Styles</h2>
              <p>
                Mueller offers a diverse mix of housing types, ensuring options for
                various lifestyles and budgets:
              </p>

              <h3>Single-Family Homes</h3>
              <p>
                Detached homes in Mueller range from compact cottages to larger
                family homes, typically featuring modern farmhouse or contemporary
                designs with porches, energy-efficient systems, and two-car garages.
              </p>

              <h3>Townhomes &amp; Row Houses</h3>
              <p>
                Attached homes offer an excellent entry point into the community,
                with 2-4 bedrooms, private patios or rooftop decks, and low-maintenance
                living. These are popular with young professionals and downsizers.
              </p>

              <h3>Condos &amp; Flats</h3>
              <p>
                Several condo buildings provide affordable options and lock-and-leave
                convenience, with access to Mueller&apos;s walkable amenities and
                community events.
              </p>
            </ContentSection>

            <ContentSection id="amenities">
              <h2>Community Amenities</h2>
              <ul>
                <li><strong>Mueller Lake Park</strong> — 30-acre park with spring-fed lake, trails, and event lawn</li>
                <li><strong>The Thinkery</strong> — Austin&apos;s premier children&apos;s museum</li>
                <li><strong>Farmers Market</strong> — Weekly market with local vendors</li>
                <li><strong>H-E-B</strong> — Full-service grocery within walking distance</li>
                <li><strong>Alamo Drafthouse</strong> — Dine-in cinema on site</li>
                <li><strong>Trail System</strong> — Miles of hike-and-bike trails</li>
                <li><strong>Community Events</strong> — Movies in the park, festivals, and fitness classes</li>
              </ul>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <p>
                Mueller offers some of the best value in central Austin for new and
                near-new construction. The strong community amenities and walkability
                drive consistent demand and appreciation.
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Condos/Flats:</strong> $300,000 - $500,000</li>
                  <li><strong>Townhomes:</strong> $450,000 - $700,000</li>
                  <li><strong>Single-Family Homes:</strong> $650,000 - $1,200,000</li>
                  <li><strong>Average Price/Sq Ft:</strong> $250 - $350</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Experience Mueller Living"
          description="Browse available homes in Austin's most walkable community, where parks, shops, and neighbors are always just steps away."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
