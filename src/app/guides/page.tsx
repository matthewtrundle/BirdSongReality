import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  GuideCard,
  GuideGrid,
  CTABanner,
} from "@/components/seo"
import { HomeIcon, TrendingUpIcon, PalmTreeIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Austin Real Estate Guides | Buying, Investing & Living",
  description:
    "Expert guides on buying a home, investment properties, short-term rentals, and relocating to Austin. Everything you need to know about Austin, Texas real estate.",
  keywords: [
    "Austin real estate guide",
    "buying home Austin Texas",
    "Austin investment property",
    "short-term rental guide Austin",
    "relocating to Austin",
  ],
  openGraph: {
    title: "Austin Real Estate Guides | Buying, Investing & Living",
    description:
      "Expert guides on buying a home, investment properties, and relocating to Austin.",
    type: "website",
  },
}

const buyingGuides = [
  {
    title: "Buying a Home in Austin",
    description:
      "A comprehensive guide to purchasing property in Austin, from understanding neighborhoods to choosing the right inspections. Essential reading for home buyers.",
    href: "/guides/buying-in-austin",
    category: "Buying",
  },
  {
    title: "First-Time Buyer's Guide",
    description:
      "New to buying real estate in Texas? This guide covers everything from working with agents to closing costs and what to expect throughout the process.",
    href: "/guides/first-time-buyer",
    category: "Buying",
  },
  {
    title: "Financing Your Home Purchase",
    description:
      "Learn about mortgage options, jumbo loans, and financing strategies specific to homes and investment properties in Austin.",
    href: "/guides/financing-austin-property",
    category: "Buying",
  },
]

const investmentGuides = [
  {
    title: "Austin Investment Property Guide",
    description:
      "Analyze the Austin market for investment opportunities. Understand ROI potential, property management, and long-term value appreciation.",
    href: "/guides/investment-property",
    category: "Investing",
  },
  {
    title: "Short-Term Rental & Investment Guide",
    description:
      "Understand Austin's rental market, regulations, pricing strategies, property management, and income potential for investors.",
    href: "/guides/short-term-rental-guide",
    category: "Investing",
  },
]

const sellingGuides = [
  {
    title: "Selling Your Austin Property",
    description:
      "Expert guidance on selling your home or investment property. Market timing, pricing strategy, preparation tips, and what to expect from the selling process.",
    href: "/guides/selling",
    category: "Selling",
  },
]

const lifestyleGuides = [
  {
    title: "Relocating to Austin",
    description:
      "Everything you need to know about making Austin your home, from schools and healthcare to local services and community life.",
    href: "/guides/relocating-to-austin",
    category: "Lifestyle",
  },
]

export default function GuidesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides" },
  ]

  return (
    <>
      <SEOPageHero
        title="Austin Real Estate Guides"
        subtitle="Expert resources to help you buy, invest, and live in Austin, Texas"
        breadcrumbs={breadcrumbs}
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <SEOContent>
            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mb-12">
              Whether you&apos;re buying your first home, exploring investment
              opportunities, or planning to relocate to Austin, our comprehensive
              guides provide the local knowledge and expert insights you need to make
              informed decisions.
            </p>
          </SEOContent>

          {/* Buying Guides */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-primary-900 mb-6">
              Buying Guides
            </h2>
            <GuideGrid>
              {buyingGuides.map((guide) => (
                <GuideCard
                  key={guide.href}
                  {...guide}
                  icon={<HomeIcon size={28} />}
                />
              ))}
            </GuideGrid>
          </div>

          {/* Investment Guides */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-primary-900 mb-6">
              Investment Guides
            </h2>
            <GuideGrid columns={2}>
              {investmentGuides.map((guide) => (
                <GuideCard
                  key={guide.href}
                  {...guide}
                  icon={<TrendingUpIcon size={28} />}
                />
              ))}
            </GuideGrid>
          </div>

          {/* Selling Guides */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-primary-900 mb-6">
              Selling Guides
            </h2>
            <GuideGrid columns={2}>
              {sellingGuides.map((guide) => (
                <GuideCard
                  key={guide.href}
                  {...guide}
                  icon={<HomeIcon size={28} />}
                />
              ))}
            </GuideGrid>
          </div>

          {/* Lifestyle Guides */}
          <div>
            <h2 className="font-display text-2xl text-primary-900 mb-6">
              Lifestyle Guides
            </h2>
            <GuideGrid columns={2}>
              {lifestyleGuides.map((guide) => (
                <GuideCard
                  key={guide.href}
                  {...guide}
                  icon={<PalmTreeIcon size={28} />}
                />
              ))}
            </GuideGrid>
          </div>
        </Container>
      </Section>

      {/* Featured Topics */}
      <Section className="bg-white">
        <Container size="narrow">
          <h2 className="font-display text-3xl text-primary-900 mb-8 text-center">
            Popular Topics
          </h2>

          <div className="space-y-4">
            <details className="p-6 bg-neutral-50 rounded-lg cursor-pointer group">
              <summary className="font-display text-lg text-primary-900 list-none flex items-center justify-between">
                What should I know about property taxes in Austin?
                <span className="text-neutral-400 group-open:rotate-180 transition-transform">&#9660;</span>
              </summary>
              <p className="mt-4 text-neutral-600">
                Texas has no state income tax but makes up for it with higher property taxes.
                In Austin and Travis County, property tax rates typically range from 1.8% to 2.2%
                of assessed value. Our buying guide covers tax rates, homestead exemptions,
                and how property taxes impact your monthly payment.
              </p>
            </details>

            <details className="p-6 bg-neutral-50 rounded-lg cursor-pointer group">
              <summary className="font-display text-lg text-primary-900 list-none flex items-center justify-between">
                Can I rent my property as a short-term rental?
                <span className="text-neutral-400 group-open:rotate-180 transition-transform">&#9660;</span>
              </summary>
              <p className="mt-4 text-neutral-600">
                Austin has specific regulations for short-term rentals, including licensing requirements
                and different rules for owner-occupied vs. non-owner-occupied properties. Our rental guide
                covers permits, management options, and expected rental income.
              </p>
            </details>

            <details className="p-6 bg-neutral-50 rounded-lg cursor-pointer group">
              <summary className="font-display text-lg text-primary-900 list-none flex items-center justify-between">
                What are the ongoing costs of homeownership in Austin?
                <span className="text-neutral-400 group-open:rotate-180 transition-transform">&#9660;</span>
              </summary>
              <p className="mt-4 text-neutral-600">
                Beyond mortgage and insurance, budget for property taxes, HOA fees (in some
                communities), maintenance, and HVAC upkeep for Austin&apos;s hot summers.
                Our guides break down typical costs by property type.
              </p>
            </details>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Have Questions About Buying?"
          description="Our team of local experts is here to answer your questions and guide you through the process."
          primaryCTA={{ text: "Contact Us", href: "/contact" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
