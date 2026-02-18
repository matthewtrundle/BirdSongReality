import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  HighlightBox,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "History of Austin TX | From Frontier Town to Tech Capital",
  description:
    "Discover the rich history of Austin, Texas - from its founding as the capital of the Republic of Texas to its rise as a world-renowned tech and music hub. Learn about the landmarks and events that shaped this vibrant city.",
  keywords: [
    "Austin history",
    "Austin Texas history",
    "history of Austin TX",
    "Texas capital history",
    "Austin landmarks",
    "Austin culture history",
  ],
  openGraph: {
    title: "History of Austin TX | From Frontier Town to Tech Capital",
    description:
      "Discover the rich history of Austin, from its frontier beginnings to its modern-day status as a tech and cultural capital.",
    type: "website",
  },
}

export default function HistoryPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Austin", href: "/about-austin" },
    { label: "History" },
  ]

  return (
    <>
      <SEOPageHero
        title="The History of Austin"
        subtitle="From a frontier capital on the Colorado River to the Live Music Capital of the World, discover Austin's remarkable story"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Austin has a history as vibrant as its music scene. From its founding as
                the capital of the Republic of Texas to its evolution into a global tech
                hub and cultural destination, this Hill Country city has witnessed nearly
                200 years of remarkable growth. Today, its historic landmarks and
                forward-thinking spirit stand as testament to the generations who shaped
                this unique community.
              </p>
            </ContentSection>

            <ContentSection id="early-history">
              <h2>Early History &amp; Founding</h2>
              <p>
                Long before European settlers arrived, the area around present-day Austin
                was home to Tonkawa, Comanche, and Lipan Apache peoples who lived along
                the banks of the Colorado River. Spanish missionaries and explorers
                traversed the region in the 18th century, but permanent settlement came
                later.
              </p>
              <p>
                In 1839, Mirabeau B. Lamar, President of the Republic of Texas, selected
                the site of a small settlement called Waterloo as the new capital.
                Renamed Austin in honor of Stephen F. Austin, the &ldquo;Father of Texas,&rdquo;
                the city was designed from the start to be a seat of government, with
                the original Capitol building and grid of streets laid out along the
                Colorado River.
              </p>
            </ContentSection>

            <ContentSection id="capital-era">
              <h2>Capital of the Republic &amp; Statehood</h2>
              <p>
                As the capital of the Republic of Texas and later the state, Austin
                grew steadily through the mid-1800s. The arrival of the Houston and
                Texas Central Railway in 1871 connected Austin to the broader economy
                and spurred growth in commerce, agriculture, and education.
              </p>
              <p>
                The current Texas State Capitol, completed in 1888, became a defining
                landmark. Built from distinctive sunset-red granite quarried in Marble
                Falls, it stands taller than the U.S. Capitol and remains one of the
                most recognizable buildings in the state.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Austin&apos;s Notable Landmarks
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Austin is home to numerous historic and cultural landmarks, including the
                Texas State Capitol, the Driskill Hotel (1886), Moonlight Towers (1895),
                the Paramount Theatre (1915), and the University of Texas Tower (1937).
                These sites represent the city&apos;s rich architectural and cultural heritage.
              </p>
            </HighlightBox>

            <ContentSection id="university">
              <h2>The University of Texas (1883)</h2>
              <p>
                The founding of the University of Texas at Austin in 1883 proved
                transformative for the city. The university brought a steady influx of
                students, faculty, and intellectual energy that shaped Austin&apos;s
                identity as a center of learning and innovation.
              </p>
              <p>
                The discovery of oil on university-owned lands in West Texas in 1923
                created the Permanent University Fund, providing resources that helped
                build UT into one of the nation&apos;s premier public research universities.
                Today, UT Austin is one of the city&apos;s largest employers and a driving
                force behind its tech and startup ecosystem.
              </p>
            </ContentSection>

            <ContentSection id="dam-era">
              <h2>The Dam Era &amp; Highland Lakes</h2>
              <p>
                The construction of a series of dams along the Colorado River in the
                1930s and 1940s transformed Austin&apos;s landscape and economy. The Highland
                Lakes, including Lake Travis and Lake Austin, were created to control
                flooding, generate hydroelectric power, and provide water.
              </p>
              <p>
                These lakes became central to Austin&apos;s identity, offering recreation,
                waterfront living, and scenic beauty that continue to attract residents
                and visitors today. The damming of Town Lake (now Lady Bird Lake) in
                1960 created the beloved urban waterway that anchors downtown.
              </p>
            </ContentSection>

            <ContentSection id="music-culture">
              <h2>The Music &amp; Cultural Revolution</h2>
              <p>
                Austin&apos;s music scene took root in the 1960s and 1970s with the rise of
                venues like the Armadillo World Headquarters and the Broken Spoke. Artists
                like Willie Nelson, Stevie Ray Vaughan, and Janis Joplin helped establish
                Austin as a music destination, leading to its designation as the &ldquo;Live
                Music Capital of the World.&rdquo;
              </p>
              <p>
                The launch of Austin City Limits on PBS in 1976 and the founding of
                South by Southwest (SXSW) in 1987 cemented Austin&apos;s reputation as a
                cultural powerhouse. These institutions continue to draw artists,
                filmmakers, and innovators from around the globe.
              </p>
            </ContentSection>

            <ContentSection id="tech-boom">
              <h2>The Tech Boom</h2>
              <p>
                Austin&apos;s technology sector began with the arrival of IBM in the 1960s,
                followed by Texas Instruments and Motorola. The founding of Dell
                Technologies in Michael Dell&apos;s UT dorm room in 1984 symbolized Austin&apos;s
                emergence as a tech hub. The area south of downtown earned the nickname
                &ldquo;Silicon Hills.&rdquo;
              </p>
              <p>
                In recent decades, major companies including Apple, Google, Meta,
                Amazon, Samsung, Oracle, and Tesla have established significant
                operations in Austin, driving rapid population and economic growth
                that has transformed the city into one of America&apos;s most dynamic metros.
              </p>
            </ContentSection>

            <ContentSection id="modern-era">
              <h2>The Modern Era</h2>
              <p>
                Austin has experienced remarkable growth in the 21st century, with
                the metro population surging past 2 million. The city has navigated
                the challenges of rapid expansion while working to preserve the
                character and culture that make it special.
              </p>
              <p>
                Today, Austin balances its rich heritage with forward-thinking development.
                New neighborhoods blend modern architecture with the city&apos;s eclectic spirit,
                while preservation efforts protect historic landmarks and green spaces.
                The city continues to attract people from around the world, drawn by its
                unique combination of economic opportunity, natural beauty, cultural
                richness, and authentic Texas hospitality.
              </p>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Own a Piece of Austin History"
          description="From historic bungalows to modern waterfront homes, find your place in this vibrant and storied city."
        />
      </Container>
    </>
  )
}
