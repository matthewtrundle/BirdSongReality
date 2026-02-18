import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  HighlightBox,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "Things to Do in Austin | Activities, Attractions & Events",
  description:
    "Discover the best things to do in Austin, Texas - live music, outdoor adventures, food scene, tech events, and family activities. Your complete guide to Austin attractions.",
  keywords: [
    "things to do Austin",
    "Austin attractions",
    "Austin activities",
    "live music Austin",
    "Austin events",
    "family activities Austin TX",
  ],
  openGraph: {
    title: "Things to Do in Austin | Activities, Attractions & Events",
    description:
      "Discover live music, outdoor adventures, dining, and more in Austin, Texas.",
    type: "website",
  },
}

export default function ThingsToDoPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Austin", href: "/about-austin" },
    { label: "Things to Do" },
  ]

  return (
    <>
      <SEOPageHero
        title="Things to Do in Austin"
        subtitle="From world-class live music to stunning Hill Country trails, discover everything that makes Austin the Live Music Capital of the World"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Austin offers an irresistible blend of outdoor adventure, cultural
                richness, and innovative spirit. Whether you&apos;re seeking vibrant
                nightlife on Sixth Street or a peaceful paddle on Lady Bird Lake, this
                Central Texas gem has something for everyone.
              </p>
            </ContentSection>

            <ContentSection id="outdoor-recreation">
              <h2>Outdoor Recreation</h2>
              <p>
                With over 300 sunny days a year and stunning natural scenery, Austin
                is an outdoor lover&apos;s paradise. The city&apos;s parks, lakes, and trails
                offer year-round recreation just minutes from downtown.
              </p>
              <ul>
                <li><strong>Lady Bird Lake</strong> — Kayaking, paddleboarding, and the iconic hike-and-bike trail</li>
                <li><strong>Barton Springs Pool</strong> — Natural spring-fed swimming pool at 68 degrees year-round</li>
                <li><strong>Lake Travis</strong> — Boating, swimming, cliff jumping, and waterfront dining</li>
                <li><strong>Barton Creek Greenbelt</strong> — 12+ miles of hiking, biking, and swimming holes</li>
                <li><strong>Mount Bonnell</strong> — Stunning panoramic views of the city and Lake Austin</li>
                <li><strong>McKinney Falls State Park</strong> — Waterfalls, trails, and camping in the city</li>
              </ul>
            </ContentSection>

            <ContentSection id="live-music">
              <h2>Live Music &amp; Nightlife</h2>
              <p>
                Austin earned its title as the &ldquo;Live Music Capital of the World&rdquo;
                for good reason. With over 250 live music venues, you can hear
                everything from country and blues to indie rock and electronic any
                night of the week.
              </p>
              <ul>
                <li><strong>Sixth Street</strong> — The iconic entertainment district with wall-to-wall live music</li>
                <li><strong>Rainey Street</strong> — Converted bungalow bars with laid-back vibes</li>
                <li><strong>South Congress (SoCo)</strong> — Eclectic shops, restaurants, and live performances</li>
                <li><strong>Continental Club</strong> — Legendary venue for blues, country, and rock since 1955</li>
                <li><strong>Stubbs BBQ</strong> — Outdoor amphitheater hosting national touring acts</li>
                <li><strong>Moody Center / ACL Live</strong> — Major concert venues for big-name artists</li>
              </ul>
            </ContentSection>

            <ContentSection id="food-drink">
              <h2>Food &amp; Drink Scene</h2>
              <p>
                Austin&apos;s food scene is legendary, from world-famous BBQ to innovative
                food trucks and James Beard Award-winning restaurants. The city&apos;s
                culinary diversity reflects its creative, welcoming spirit.
              </p>
              <ul>
                <li><strong>BBQ</strong> — Franklin, la Barbecue, Micklethwait, and Terry Black&apos;s</li>
                <li><strong>Tex-Mex</strong> — Breakfast tacos are a way of life (try Veracruz All Natural or Torchy&apos;s)</li>
                <li><strong>Food Trucks</strong> — Over 1,000 food trucks and trailers citywide</li>
                <li><strong>Craft Beer</strong> — 70+ craft breweries including Jester King and Live Oak</li>
                <li><strong>Fine Dining</strong> — Uchi, Emmer &amp; Rye, Comedor, and more</li>
                <li><strong>Coffee Culture</strong> — Specialty shops like Houndstooth, Fleet, and Summer Moon</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Local Tip: Keep Austin Weird
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Austin&apos;s unofficial motto embraces the city&apos;s eclectic character.
                Explore the quirky side of town -- from the Cathedral of Junk to
                the Hope Outdoor Gallery, from watching the bats emerge at Congress
                Avenue Bridge to catching a movie at the Alamo Drafthouse. The best
                Austin experiences often come from simply wandering and discovering.
              </p>
            </HighlightBox>

            <ContentSection id="arts-culture">
              <h2>Arts &amp; Culture</h2>

              <h3>Museums &amp; Galleries</h3>
              <p>
                Austin&apos;s cultural scene extends well beyond music. The city offers
                world-class museums, galleries, and cultural institutions.
              </p>
              <ul>
                <li><strong>Blanton Museum of Art</strong> — One of the largest university art museums in the US</li>
                <li><strong>Bullock Texas State History Museum</strong> — Three floors of Texas history</li>
                <li><strong>Contemporary Austin</strong> — Modern art in beautiful indoor/outdoor settings</li>
                <li><strong>LBJ Presidential Library</strong> — Presidential history and beautiful campus setting</li>
                <li><strong>Mexic-Arte Museum</strong> — Mexican and Latino art and culture</li>
              </ul>

              <h3>Film &amp; Theatre</h3>
              <p>
                Austin has a thriving film and theatre community, anchored by
                institutions like the Alamo Drafthouse Cinema (born here!),
                the Paramount Theatre, and ZACH Theatre.
              </p>
            </ContentSection>

            <ContentSection id="events-festivals">
              <h2>Annual Events &amp; Festivals</h2>
              <ul>
                <li><strong>SXSW (March)</strong> — World-famous tech, film, and music festival</li>
                <li><strong>Austin City Limits Festival (October)</strong> — Two weekends of top-tier live music</li>
                <li><strong>Formula 1 USGP (October)</strong> — Circuit of the Americas hosts the US Grand Prix</li>
                <li><strong>Pecan Street Festival (May &amp; September)</strong> — Art and music on Sixth Street</li>
                <li><strong>Trail of Lights (December)</strong> — Iconic holiday light display at Zilker Park</li>
                <li><strong>Austin Food &amp; Wine Festival (April)</strong> — Culinary celebrations</li>
                <li><strong>Bat Fest (August)</strong> — Celebrating Austin&apos;s famous bat colony</li>
              </ul>
            </ContentSection>

            <ContentSection id="family">
              <h2>Family-Friendly Activities</h2>
              <p>
                Austin is exceptionally welcoming to families, with activities and
                attractions for all ages.
              </p>
              <ul>
                <li>Splash pads and swimming holes throughout the city</li>
                <li>Zilker Park playground, train, and botanical gardens</li>
                <li>Thinkery children&apos;s museum</li>
                <li>Peter Pan Mini Golf (a 1948 Austin classic)</li>
                <li>Austin Nature &amp; Science Center (free admission)</li>
                <li>Biking the hike-and-bike trail around Lady Bird Lake</li>
                <li>Inner Space Cavern and natural cave tours nearby</li>
              </ul>
            </ContentSection>

            <ContentSection id="day-trips">
              <h2>Day Trips from Austin</h2>
              <p>
                Austin&apos;s central location makes it a perfect base for exploring
                the Texas Hill Country and beyond.
              </p>
              <ul>
                <li><strong>Fredericksburg</strong> — German heritage town with wineries and shops (1.5 hrs)</li>
                <li><strong>San Antonio</strong> — The Alamo, River Walk, and more (1.5 hrs)</li>
                <li><strong>Dripping Springs</strong> — Distilleries, breweries, and Hamilton Pool (30 min)</li>
                <li><strong>Wimberley</strong> — Artsy Hill Country town with Blue Hole (1 hr)</li>
                <li><strong>Enchanted Rock</strong> — Iconic granite dome for hiking (1.5 hrs)</li>
                <li><strong>Lockhart</strong> — The BBQ Capital of Texas (30 min)</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Make Austin Your Home"
          description="Imagine having all these activities at your doorstep. Explore properties in this vibrant community."
        />
      </Container>
    </>
  )
}
