import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  NeighborhoodCard,
  NeighborhoodGrid,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "Austin Neighborhoods | Find Your Perfect Community",
  description:
    "Explore Austin neighborhoods including Zilker, Tarrytown, Hyde Park, Mueller, West Lake Hills, Travis Heights, South Congress, and East Austin. Find the perfect community for your lifestyle.",
  keywords: [
    "Austin neighborhoods",
    "Zilker homes",
    "Tarrytown real estate",
    "Hyde Park Austin",
    "Mueller Austin",
    "West Lake Hills",
    "Travis Heights",
    "Austin TX communities",
  ],
  openGraph: {
    title: "Austin Neighborhoods | Find Your Perfect Community",
    description:
      "Explore Austin neighborhoods and find the perfect community for your lifestyle.",
    type: "website",
  },
}

const neighborhoods = [
  {
    name: "Zilker",
    slug: "zilker",
    image: "/images/neighborhoods/zilker.jpg",
    description:
      "Home to Barton Springs Pool and Zilker Park, this iconic neighborhood features charming bungalows, tree-lined streets, and an unbeatable central location near Lady Bird Lake.",
    priceRange: "$650K - $2.5M+",
    propertyCount: 42,
  },
  {
    name: "Tarrytown",
    slug: "tarrytown",
    image: "/images/neighborhoods/tarrytown.jpg",
    description:
      "Austin's premier established neighborhood with stately homes, mature live oaks, top-rated Casis Elementary, and walkable access to Lake Austin and the Hike-and-Bike Trail.",
    priceRange: "$900K - $5M+",
    propertyCount: 38,
  },
  {
    name: "Hyde Park",
    slug: "hyde-park",
    image: "/images/neighborhoods/hyde-park.jpg",
    description:
      "Austin's first suburb, beloved for its Victorian and Craftsman homes, towering pecan trees, and vibrant community near UT campus. Rich history meets walkable urban living.",
    priceRange: "$500K - $1.5M",
    propertyCount: 55,
  },
  {
    name: "Mueller",
    slug: "mueller",
    image: "/images/neighborhoods/mueller.jpg",
    description:
      "An award-winning New Urbanist community on the former airport site, featuring walkable streets, Mueller Lake Park, the Thinkery, and a vibrant mix of homes and local shops.",
    priceRange: "$400K - $1.2M",
    propertyCount: 48,
  },
  {
    name: "West Lake Hills",
    slug: "west-lake-hills",
    image: "/images/neighborhoods/west-lake-hills.jpg",
    description:
      "An affluent community renowned for Eanes ISD schools, panoramic Hill Country views, large custom estates on wooded lots, and proximity to both downtown and the lake.",
    priceRange: "$800K - $5M+",
    propertyCount: 32,
  },
  {
    name: "Travis Heights",
    slug: "travis-heights",
    image: "/images/neighborhoods/travis-heights.jpg",
    description:
      "One of Austin's most desirable neighborhoods with winding tree-canopied streets, stunning downtown views, and walkability to South Congress Avenue and Lady Bird Lake.",
    priceRange: "$700K - $2.5M",
    propertyCount: 36,
  },
  {
    name: "South Congress (SoCo)",
    slug: "south-congress",
    image: "/images/neighborhoods/south-congress.jpg",
    description:
      "Austin's most iconic street, famous for eclectic shops, restaurants, live music, and street art. A mix of condos, lofts, and homes at the heart of Austin's cultural identity.",
    priceRange: "$350K - $1.8M",
    propertyCount: 44,
  },
  {
    name: "East Austin",
    slug: "east-austin",
    image: "/images/neighborhoods/east-austin.jpg",
    description:
      "Austin's most dynamic neighborhood with craft breweries, acclaimed restaurants, art galleries, and a mix of historic bungalows alongside bold contemporary architecture.",
    priceRange: "$400K - $1.5M",
    propertyCount: 62,
  },
]

export default function NeighborhoodsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods" },
  ]

  return (
    <>
      <SEOPageHero
        title="Austin Neighborhoods"
        subtitle="From tree-lined historic streets to lakefront estates and vibrant urban enclaves, discover the perfect neighborhood for your Austin lifestyle"
        breadcrumbs={breadcrumbs}
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <SEOContent>
            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mb-12">
              Austin offers an incredibly diverse range of neighborhoods, each with its own
              unique character and appeal. Whether you&apos;re seeking a luxury lakefront estate,
              a charming bungalow near Barton Springs, or a modern condo with downtown skyline
              views, you&apos;ll find it here in the Live Music Capital of the World.
            </p>
          </SEOContent>

          <NeighborhoodGrid>
            {neighborhoods.map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.slug} {...neighborhood} />
            ))}
          </NeighborhoodGrid>
        </Container>
      </Section>

      {/* Neighborhood Comparison */}
      <Section className="bg-white">
        <Container size="narrow">
          <h2 className="font-display text-3xl text-primary-900 mb-8 text-center">
            Choosing the Right Neighborhood
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-display text-xl text-primary-900 mb-3">
                For Outdoor Lifestyle
              </h3>
              <p className="text-neutral-600">
                <strong>Zilker</strong> and <strong>Travis Heights</strong> offer the
                best access to Barton Springs, Zilker Park, and the Lady Bird Lake
                Hike-and-Bike Trail. Both neighborhoods put you within walking distance
                of Austin&apos;s most beloved outdoor spaces.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-display text-xl text-primary-900 mb-3">
                For Top Schools
              </h3>
              <p className="text-neutral-600">
                <strong>West Lake Hills</strong> and <strong>Tarrytown</strong> are the
                top choices for families prioritizing education. West Lake Hills offers
                Eanes ISD (one of Texas&apos;s highest-rated districts), while Tarrytown
                provides top-rated Casis Elementary within Austin ISD.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-display text-xl text-primary-900 mb-3">
                For Walkability &amp; Urban Living
              </h3>
              <p className="text-neutral-600">
                <strong>South Congress</strong>, <strong>East Austin</strong>, and{" "}
                <strong>Hyde Park</strong> offer the most walkable lifestyles with
                restaurants, shops, and coffee within easy reach. SoCo and East Austin
                provide the most vibrant nightlife and dining scenes.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-display text-xl text-primary-900 mb-3">
                For Best Value
              </h3>
              <p className="text-neutral-600">
                <strong>Mueller</strong> and <strong>East Austin</strong> offer strong
                value with modern homes, walkable communities, and excellent appreciation
                potential. Mueller&apos;s new urbanism design and East Austin&apos;s creative
                energy attract buyers seeking a vibrant lifestyle at a more accessible price point.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Need Help Choosing a Neighborhood?"
          description="Our Austin experts can help you find the perfect community based on your lifestyle, budget, and priorities."
        />
      </Container>
    </>
  )
}
