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
  title: "South Congress (SoCo) Homes for Sale | Austin's Most Iconic Street",
  description:
    "Discover South Congress (SoCo), Austin's most iconic neighborhood. Eclectic shops, legendary restaurants, live music, and a mix of condos, lofts, and homes. From $350K to $1.8M.",
  keywords: [
    "South Congress homes for sale",
    "SoCo Austin real estate",
    "South Congress condos",
    "Austin iconic neighborhood",
    "SoCo lofts Austin",
  ],
  openGraph: {
    title: "South Congress (SoCo) Homes for Sale | Austin's Most Iconic Street",
    description:
      "Discover South Congress - urban living on Austin's most iconic street.",
    type: "website",
  },
}

export default function SouthCongressPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "South Congress" },
  ]

  const stats = [
    { value: "$350K+", label: "Starting price" },
    { value: "Walk", label: "to everything" },
    { value: "Iconic", label: "SoCo strip" },
    { value: "78704", label: "Zip code" },
  ]

  return (
    <>
      <SEOPageHero
        title="South Congress (SoCo)"
        subtitle="Austin's most iconic street where eclectic shops, legendary restaurants, and live music create an unmatchable urban lifestyle"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                South Congress Avenue is more than a street—it&apos;s the beating heart
                of Austin&apos;s cultural identity. From the iconic &ldquo;I love you so
                much&rdquo; mural to legendary venues like the Continental Club, SoCo
                embodies everything that makes Austin weird, wonderful, and irresistible.
                Living here means being at the center of it all, with Lady Bird Lake,
                downtown, and world-class dining at your doorstep.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Area Overview</h2>
              <p>
                The South Congress corridor stretches from Lady Bird Lake southward,
                with the most vibrant commercial stretch running roughly from the
                bridge to Oltorf Street. The surrounding residential areas include
                a mix of housing types, from historic bungalows on side streets to
                modern condos and lofts along the avenue itself.
              </p>
              <p>
                SoCo has evolved from a somewhat gritty stretch into one of Austin&apos;s
                premier destinations, attracting both local favorites and nationally
                recognized brands. Despite the growth, the area has maintained its
                eclectic, independent spirit with locally owned shops, food trailers,
                and live music venues continuing to thrive.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                First Thursday
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                On the first Thursday of each month, South Congress comes alive with
                street vendors, live music, food trucks, and special events at local
                businesses. It&apos;s a beloved Austin tradition that showcases the
                creative energy of the SoCo community—and it happens right outside
                your door when you live here.
              </p>
            </HighlightBox>

            <ContentSection id="property-types">
              <h2>Property Types</h2>

              <h3>Condos &amp; Lofts</h3>
              <p>
                Modern condo buildings and converted loft spaces offer the quintessential
                SoCo living experience. Many feature rooftop decks with downtown skyline
                views, industrial design elements, and walkability to everything the
                avenue has to offer. These range from efficient studios to spacious
                penthouses.
              </p>

              <h3>Townhomes</h3>
              <p>
                Newer townhome developments on adjacent streets provide more space
                and privacy while maintaining walkability to SoCo&apos;s attractions.
                These typically feature modern designs with private garages and
                outdoor spaces.
              </p>

              <h3>Side Street Bungalows</h3>
              <p>
                The residential streets flanking South Congress Avenue contain
                charming bungalows and cottages from the 1930s-1960s. These homes
                offer the SoCo lifestyle with a quieter, more residential feel
                and are highly sought after.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The SoCo Lifestyle</h2>
              <p>
                Living on or near South Congress means your daily life unfolds against
                a backdrop of Austin&apos;s best offerings. Morning coffee at Jo&apos;s
                (home of the famous &ldquo;I love you so much&rdquo; wall), browsing
                at Uncommon Objects and Allen&apos;s Boots, lunch at one of numerous
                acclaimed restaurants, and evening cocktails at the Hotel San Jose—all
                within a pleasant stroll.
              </p>
              <p>
                The Congress Avenue Bridge, famous for its 1.5 million Mexican
                free-tailed bats, is at the northern end of SoCo, connecting you
                to downtown and Lady Bird Lake. The Hike-and-Bike Trail provides
                miles of recreation, and downtown&apos;s entertainment is just across
                the bridge.
              </p>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <p>
                SoCo real estate reflects the premium of living in one of Austin&apos;s
                most desirable and walkable locations. Condos provide accessible
                entry points, while single-family homes on side streets command
                significant premiums.
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Condos/Lofts:</strong> $350,000 - $800,000</li>
                  <li><strong>Townhomes:</strong> $600,000 - $1,000,000</li>
                  <li><strong>Single-Family Homes:</strong> $800,000 - $1,800,000</li>
                  <li><strong>Average Price/Sq Ft:</strong> $350 - $500</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Live the SoCo Lifestyle"
          description="Find your place on Austin's most iconic street, where culture, dining, and live music are always just steps away."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
