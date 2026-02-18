import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  FAQAccordion,
  type FAQItem,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "Austin Real Estate FAQ | Common Questions Answered",
  description:
    "Get answers to frequently asked questions about buying real estate in Austin, Texas. Learn about property taxes, neighborhoods, closing costs, and more.",
  keywords: [
    "Austin real estate FAQ",
    "buying home questions Austin",
    "Austin property taxes",
    "Texas home buying FAQ",
    "Austin real estate questions",
  ],
  openGraph: {
    title: "Austin Real Estate FAQ | Common Questions Answered",
    description:
      "Get answers to frequently asked questions about buying real estate in Austin.",
    type: "website",
  },
}

const buyingFAQs: FAQItem[] = [
  {
    question: "What should I know about property taxes in Austin?",
    answer:
      "Texas has no state income tax but makes up for it with relatively high property taxes. In Austin and Travis County, property tax rates typically range from 1.8% to 2.2% of assessed value. Rates vary by school district and municipality. Homestead exemptions can reduce your taxable value if the property is your primary residence. Budget property taxes carefully as they can significantly impact your monthly payment.",
  },
  {
    question: "Do I need flood insurance in Austin?",
    answer:
      "Some properties in Austin are located in FEMA flood zones, particularly those near creeks, rivers, and Lake Travis. If your property is in a designated flood zone and you have a mortgage, flood insurance is required. Even outside flood zones, flash flooding is common in Central Texas, so flood insurance is recommended. Costs vary based on flood zone, elevation, and property type.",
  },
  {
    question: "What are typical closing costs in Austin?",
    answer:
      "Closing costs in Texas typically range from 2-3% of the purchase price for buyers, including title insurance, escrow fees, appraisal, and inspections. Property taxes are prorated at closing. If financing, lender fees add additional costs. Budget 3-5% of purchase price for total closing costs.",
  },
  {
    question: "Should I get a property inspection?",
    answer:
      "Absolutely. A thorough home inspection is essential in Austin. Beyond a standard inspection, consider specialized inspections depending on the property: foundation inspection (common concern in Central Texas due to expansive clay soils), HVAC inspection (Austin summers demand reliable cooling), and a review of any septic systems for properties outside the city. These additional inspections are worth the investment.",
  },
  {
    question: "How long does it take to close on a property?",
    answer:
      "Cash transactions can close in as little as 2-3 weeks. Financed purchases typically take 30-45 days. Factors that can extend the timeline include appraisal delays, title issues, insurance procurement, and any repairs negotiated during the inspection period.",
  },
]

const investmentFAQs: FAQItem[] = [
  {
    question: "Can I rent my property as a short-term rental?",
    answer:
      "Short-term rental regulations in Austin are strict and depend on the property type and location. The City of Austin requires a Short-Term Rental (STR) license, and different rules apply to owner-occupied vs. non-owner-occupied properties. Some neighborhoods and HOAs have additional restrictions. Research current regulations carefully before purchasing an investment property for short-term rental purposes.",
  },
  {
    question: "What kind of rental income can I expect?",
    answer:
      "Rental income varies significantly by property type, location, and condition. A well-located 3-bedroom home might rent for $2,500-$4,000+ per month on a long-term lease. Short-term rental income potential varies widely based on regulations and location. Net income after expenses (management, maintenance, taxes, insurance) is typically 40-60% of gross for long-term rentals.",
  },
  {
    question: "What property management fees are typical?",
    answer:
      "Full-service property management companies typically charge 8-12% of monthly rental income for long-term rentals, which includes tenant screening, rent collection, maintenance coordination, and basic management. Short-term rental management fees are higher, typically 20-30% of gross income. Some owners self-manage to save on fees.",
  },
  {
    question: "Are there restrictions on rental properties?",
    answer:
      "Austin has specific regulations for rental properties. Short-term rentals require city licensing and have occupancy limits. Some neighborhoods and HOAs have their own rental restrictions, including minimum lease terms. Always check community rules and city ordinances before purchasing an investment property.",
  },
]

const lifestyleFAQs: FAQItem[] = [
  {
    question: "What is the cost of living in Austin?",
    answer:
      "Cost of living in Austin is moderate compared to other major tech hubs but has risen significantly in recent years. Housing is the largest expense. Texas has no state income tax, which helps offset higher property taxes. Daily expenses (groceries, dining, utilities) are near the national average. Entertainment options range from free outdoor activities to world-class dining and music venues.",
  },
  {
    question: "How hot does it get in Austin?",
    answer:
      "Austin summers are hot, with temperatures regularly exceeding 100°F from June through September. However, the city offers abundant swimming holes, springs, and lakes to cool off. Winters are mild, with average highs in the 50s-60s°F and occasional freezes. Spring and fall are beautiful with comfortable temperatures in the 70s-80s°F.",
  },
  {
    question: "What healthcare is available in Austin?",
    answer:
      "Austin has excellent healthcare facilities including several major hospital systems: Ascension Seton, St. David's, Baylor Scott & White, and Dell Medical School at UT Austin. The city has numerous specialists, urgent care centers, and the Dell Children's Medical Center. Healthcare access is a strong point of living in Austin.",
  },
  {
    question: "Are there good schools in Austin?",
    answer:
      "Austin has a wide range of school options. Austin ISD and surrounding districts (Eanes, Lake Travis, Round Rock, Leander) include many highly rated schools. Eanes ISD and Lake Travis ISD are consistently among the top districts in Texas. There are also numerous private schools and charter schools. The University of Texas at Austin and other colleges provide higher education options.",
  },
  {
    question: "How is traffic in Austin?",
    answer:
      "Austin traffic has grown significantly with the city's population boom. Major corridors like I-35, MoPac, and 183 can be congested during rush hours. However, the city is expanding public transit, building new toll roads, and Project Connect aims to bring light rail. Many neighborhoods offer walkable lifestyles, and cycling infrastructure continues to improve.",
  },
]

const propertyFAQs: FAQItem[] = [
  {
    question: "What are the different neighborhoods like?",
    answer:
      "Austin offers incredibly diverse neighborhoods: Downtown and East Austin are vibrant and urban; South Lamar and Zilker are trendy with great outdoor access; Tarrytown and Westlake are established and family-friendly; Mueller is a master-planned urban community; and the Hill Country neighborhoods like Bee Cave and Lakeway offer more space and lake access. Each area has distinct character and price points.",
  },
  {
    question: "What should I look for in an Austin home?",
    answer:
      "Key considerations include foundation condition (expansive clay soils are common in Central Texas), HVAC efficiency (critical for Austin summers), outdoor living space (patios, pools), tree coverage for shade, and proximity to highways or public transit. Newer construction typically offers better energy efficiency, while older homes in established neighborhoods offer mature trees and character.",
  },
  {
    question: "How do foundation issues work in Austin?",
    answer:
      "Central Texas clay soils expand and contract with moisture changes, which can cause foundation movement. Many Austin homes are built on slab foundations that may develop cracks over time. Look for signs like sticking doors, cracked walls, and uneven floors. A foundation inspection by a structural engineer is recommended for any purchase. Foundation repair costs can range from a few thousand to tens of thousands of dollars.",
  },
  {
    question: "What maintenance considerations are unique to Austin homes?",
    answer:
      "Austin's climate and soil present unique maintenance needs. Budget for regular HVAC maintenance (systems work hard in summer heat), foundation watering during droughts to prevent soil shrinkage, tree maintenance (Austin is known for its urban canopy), and pest control (termites and other insects are common). Budget 1-2% of home value annually for maintenance.",
  },
]

export default function FAQPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "FAQ" },
  ]

  return (
    <>
      <SEOPageHero
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about buying, owning, and investing in Austin real estate"
        breadcrumbs={breadcrumbs}
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <h2>Buying a Home</h2>
            <p className="mb-8">
              Essential questions about purchasing property in Austin.
            </p>
          </SEOContent>
          <FAQAccordion items={buyingFAQs} className="mb-16" />

          <SEOContent>
            <h2>Investment &amp; Rentals</h2>
            <p className="mb-8">
              Questions about rental income and investment properties.
            </p>
          </SEOContent>
          <FAQAccordion items={investmentFAQs} className="mb-16" />

          <SEOContent>
            <h2>Living in Austin</h2>
            <p className="mb-8">
              What to expect when you make Austin your home.
            </p>
          </SEOContent>
          <FAQAccordion items={lifestyleFAQs} className="mb-16" />

          <SEOContent>
            <h2>Property Considerations</h2>
            <p className="mb-8">
              Important factors when choosing and maintaining an Austin home.
            </p>
          </SEOContent>
          <FAQAccordion items={propertyFAQs} />
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Have More Questions?"
          description="Our local experts are happy to answer any questions about Austin real estate. Reach out anytime."
          primaryCTA={{ text: "Contact Us", href: "/contact" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
