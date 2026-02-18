import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  StatsGrid,
  HighlightBox,
  CTABanner,
} from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Living in Austin TX | Cost of Living, Lifestyle & Community | Birdsong Realty Team | Keller Williams",
  description:
    "Discover what it's like to live in Austin, Texas. Learn about the cost of living, neighborhoods, schools, outdoor recreation, and why Austin is one of America's best cities.",
  keywords: [
    "living in Austin TX",
    "Austin cost of living",
    "Austin lifestyle",
    "move to Austin Texas",
    "Austin community",
    "Austin neighborhoods guide",
  ],
  openGraph: {
    title: "Living in Austin TX | Cost of Living, Lifestyle & Community",
    description:
      "Discover what it's like to live in Austin - lifestyle, community, and everything you need to know.",
    type: "website",
  },
}

export default function LivingInAustinPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Living in Austin" },
  ]

  const communityStats = [
    { value: "2M+", label: "Metro population" },
    { value: "#1", label: "Best place to live" },
    { value: "0%", label: "State income tax" },
    { value: "300+", label: "Sunny days per year" },
  ]

  return (
    <>
      <SEOPageHero
        title="Living in Austin"
        subtitle="Discover the vibrant lifestyle, diverse neighborhoods, and unique culture that make Austin one of America's most desirable cities"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Austin isn&apos;t just a city&mdash;it&apos;s a way of life. Known for its live music
                scene, outdoor recreation, thriving tech economy, and famously friendly
                culture, Austin attracts people from every walk of life. Whether you&apos;re
                drawn by career opportunities, the warm climate, or the legendary food
                scene, Austin has a way of making everyone feel at home.
              </p>
            </ContentSection>

            <StatsGrid stats={communityStats} />

            <ContentSection id="lifestyle">
              <h2>The Austin Lifestyle</h2>
              <p>
                Life in Austin strikes a rare balance between big-city amenities and
                laid-back Texas hospitality. The city&apos;s unofficial motto, &ldquo;Keep Austin
                Weird,&rdquo; reflects a community that celebrates individuality, creativity,
                and entrepreneurial spirit. From food trucks to Formula 1, from hiking
                trails to honky-tonks, Austin offers something for everyone.
              </p>
              <p>
                Residents enjoy easy access to Barton Springs Pool, Lady Bird Lake, the
                Greenbelt, and hundreds of miles of hike-and-bike trails. The dining scene
                ranges from legendary barbecue and Tex-Mex to acclaimed farm-to-table
                restaurants. And of course, live music plays somewhere in the city every
                single night of the year.
              </p>

              <h3>Outdoor Recreation</h3>
              <p>
                Austin&apos;s mild climate and natural beauty make it an outdoor enthusiast&apos;s
                paradise. Kayak or paddleboard on Lady Bird Lake, swim in the spring-fed
                waters of Barton Springs, hike the Barton Creek Greenbelt, or mountain
                bike at Walnut Creek Park. The Highland Lakes offer boating, fishing, and
                waterfront relaxation just minutes from downtown.
              </p>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                The Live Music Capital of the World
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Austin has more live music venues per capita than any other U.S. city.
                From legendary spots like the Continental Club and Stubb&apos;s to intimate
                neighborhood bars, there&apos;s live music every night. Major festivals
                including SXSW and Austin City Limits draw visitors from around the globe.
              </p>
            </HighlightBox>

            <ContentSection id="cost-of-living">
              <h2>Cost of Living</h2>
              <p>
                Austin&apos;s cost of living has risen with its popularity, but it remains
                significantly more affordable than comparable tech hubs like San Francisco,
                Seattle, or New York. Texas has no state income tax, which can offset higher
                property taxes and represents meaningful savings for many transplants.
              </p>

              <h3>Housing Costs</h3>
              <p>
                Austin&apos;s housing market offers a wide range of options. Median home prices
                vary significantly by neighborhood, from affordable starter homes in
                emerging areas to multi-million-dollar estates in Westlake and Barton Creek.
                The rental market is also robust, with options from downtown apartments to
                suburban single-family leases.
              </p>

              <h3>Other Expenses</h3>
              <ul>
                <li><strong>Utilities</strong> -- Moderate year-round; expect higher AC costs in summer months</li>
                <li><strong>Transportation</strong> -- Car-dependent city, though downtown and certain corridors are bikeable</li>
                <li><strong>Groceries &amp; Dining</strong> -- Comparable to national averages with excellent variety</li>
                <li><strong>Healthcare</strong> -- Multiple major hospital systems with comprehensive services</li>
                <li><strong>Property Taxes</strong> -- Higher than national average, offset by no state income tax</li>
              </ul>
            </ContentSection>

            <ContentSection id="economy">
              <h2>Economy &amp; Employment</h2>
              <p>
                Austin&apos;s economy is one of the strongest in the nation, anchored by the
                technology sector but diversified across government, education, healthcare,
                and creative industries. Major employers include Tesla, Apple, Google, Meta,
                Samsung, Dell, Oracle, and the University of Texas.
              </p>
              <p>
                The city&apos;s entrepreneurial culture has produced a thriving startup ecosystem,
                and the presence of the state capital and the University of Texas adds
                stability and depth to the job market. Unemployment rates have consistently
                tracked below state and national averages.
              </p>
            </ContentSection>

            <ContentSection id="schools">
              <h2>Schools &amp; Education</h2>
              <p>
                The Austin area is served by several school districts, many of which rank
                among the best in Texas. Eanes ISD (Westlake), Lake Travis ISD, and
                Round Rock ISD are particularly well-regarded. Austin ISD, the largest
                district, offers a range of specialized programs including STEM academies,
                fine arts magnets, and dual-language immersion.
              </p>
              <p>
                Higher education options include the University of Texas at Austin (a
                top-tier public research university), St. Edward&apos;s University, Huston-Tillotson
                University, and Austin Community College. These institutions contribute to
                the city&apos;s educated workforce and vibrant campus culture.
              </p>
            </ContentSection>

            <ContentSection id="getting-around">
              <h2>Getting Around</h2>
              <p>
                Austin is primarily a car-dependent city, though significant investments in
                public transit are underway. Capital Metro operates bus routes and the
                MetroRail commuter line, and Project Connect promises a light rail system
                in the coming years. Downtown and certain corridors like South Congress and
                East 6th are walkable and bikeable.
              </p>
              <p>
                Austin-Bergstrom International Airport (AUS) offers direct flights to major
                cities nationwide and select international destinations. The airport is
                conveniently located just 15 minutes from downtown.
              </p>
            </ContentSection>

            <ContentSection id="weather">
              <h2>Weather &amp; Climate</h2>
              <p>
                Austin enjoys a subtropical climate with hot summers and mild winters.
                Average highs reach the mid-90s in summer (with occasional triple-digit
                days) and dip to the 60s in winter. The city averages over 300 sunny days
                per year, making outdoor activities a year-round possibility.
              </p>
              <p>
                Spring and fall are particularly pleasant, with moderate temperatures and
                wildflower blooms that draw visitors from across Texas. Severe weather,
                including occasional hail and flooding, is possible but infrequent.
              </p>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      {/* Related Links */}
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-center text-primary-900 mb-12">
            Ready to Learn More?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/austin-relocation"
              className="p-6 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-lg text-primary-900 mb-2 group-hover:text-primary-700">
                Relocation Guide
              </h3>
              <p className="text-sm text-neutral-600">
                Step-by-step guide to making the move to Austin.
              </p>
            </Link>
            <Link
              href="/neighborhoods"
              className="p-6 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-lg text-primary-900 mb-2 group-hover:text-primary-700">
                Neighborhoods
              </h3>
              <p className="text-sm text-neutral-600">
                Find the right Austin neighborhood for your lifestyle.
              </p>
            </Link>
            <Link
              href="/market"
              className="p-6 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-lg text-primary-900 mb-2 group-hover:text-primary-700">
                Market Overview
              </h3>
              <p className="text-sm text-neutral-600">
                Current pricing and market conditions in Austin.
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Start Your Austin Journey"
          description="Whether you're relocating full-time or seeking an investment, let us help you find the perfect property in Austin."
        />
      </Container>

      <LeadFormSection
        variant="dark"
        title="Get in Touch"
        subtitle="Have questions about living in Austin? We'd love to help."
        source="living_in_austin_page"
      />
    </>
  )
}
