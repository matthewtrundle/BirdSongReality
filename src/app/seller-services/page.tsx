import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, StatsGrid, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Sell Your Austin Home | Birdsong Realty Team | Keller Williams",
  description:
    "Sell your Austin home for top dollar with the Birdsong Realty Team at Keller Williams. Expert pricing, professional marketing, and proven negotiation strategies.",
  keywords: [
    "sell home Austin TX",
    "Austin listing agent",
    "sell my house Austin",
    "Austin home selling",
    "Keller Williams Austin seller",
    "best realtor to sell Austin home",
  ],
  openGraph: {
    title: "Sell Your Austin Home | Birdsong Realty Team | Keller Williams",
    description:
      "Sell your Austin home for top dollar with expert guidance from the Birdsong Realty Team.",
  },
}

export default function SellerServicesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Seller Services" },
  ]

  const sellerStats = [
    { value: "98%", label: "List-to-sale ratio" },
    { value: "21", label: "Avg. days on market" },
    { value: "100+", label: "Homes sold" },
    { value: "5-Star", label: "Client reviews" },
  ]

  return (
    <>
      <SEOPageHero
        title="Sell Your Austin Home"
        subtitle="Strategic pricing, professional marketing, and expert negotiation to maximize your home's value."
        backgroundImage="/images/hero/austin-staged-interior.jpg"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Selling your home is about more than putting a sign in the yard. The
                Birdsong Realty Team combines data-driven pricing strategy, professional
                marketing, and skilled negotiation to help Austin homeowners achieve the
                best possible outcome. Backed by Keller Williams, we bring world-class
                resources to every listing.
              </p>
            </ContentSection>

            <StatsGrid stats={sellerStats} />

            <ContentSection>
              <h2>Our Proven Selling Process</h2>
              <p>
                Every home sale follows our proven process designed to minimize stress and
                maximize your net proceeds:
              </p>
              <ul>
                <li><strong>Strategic Pricing:</strong> Comprehensive market analysis to price your home right from day one</li>
                <li><strong>Home Preparation:</strong> Staging consultation and recommendations to maximize appeal</li>
                <li><strong>Professional Marketing:</strong> Photography, video, 3D tours, and targeted digital campaigns</li>
                <li><strong>Maximum Exposure:</strong> MLS, Zillow, Realtor.com, social media, and our network</li>
                <li><strong>Showings &amp; Open Houses:</strong> Professionally managed to attract qualified buyers</li>
                <li><strong>Offer Negotiation:</strong> Expert guidance to evaluate and negotiate the best terms</li>
                <li><strong>Transaction Management:</strong> Seamless coordination through inspection, appraisal, and closing</li>
              </ul>
            </ContentSection>

            <HighlightBox title="What Sets Us Apart">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Professional Photography &amp; Video:</strong> High-quality visuals that make your home stand out online</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Digital Marketing Expertise:</strong> Targeted campaigns across social media and search platforms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Keller Williams Network:</strong> Access to the largest real estate network in the world</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">&#10003;</span>
                  <span><strong>Transparent Communication:</strong> Weekly updates, showing feedback, and market insights</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>Understanding Austin&apos;s Seller Market</h2>
              <p>
                Austin&apos;s real estate market is dynamic and varies by neighborhood, price
                point, and property type. Pricing your home correctly from the start is
                the single most important factor in a successful sale. Overpricing leads
                to extended days on market, while strategic pricing can generate multiple
                offers and drive the sale price above asking.
              </p>
              <p>
                The Birdsong Realty Team provides a thorough comparative market analysis
                that considers recent sales, active competition, market trends, and your
                home&apos;s unique features to determine the optimal listing price.
              </p>
            </ContentSection>

            <ContentSection>
              <h2>Preparing Your Home to Sell</h2>
              <p>
                First impressions matter. We provide a detailed home preparation checklist
                and can connect you with trusted vendors for repairs, deep cleaning,
                landscaping, and professional staging. Our goal is to present your home
                in its best possible light while keeping preparation costs reasonable.
              </p>
              <p>
                Not every home needs extensive preparation. We&apos;ll give you an honest
                assessment of what improvements will generate a return and which ones
                you can skip.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Free Home Valuation
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Curious what your Austin home is worth? We offer complimentary home
                valuations with no obligation. Our analysis goes beyond automated estimates
                to provide a realistic market value based on local expertise and
                current conditions.
              </p>
            </HighlightBox>
          </SEOContent>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <CTABanner
            title="Ready to Sell Your Austin Home?"
            description="Schedule a complimentary listing consultation to learn how we can help you achieve the best possible outcome."
            buttonText="Get Your Home Valuation"
            buttonHref="/contact?interest=selling"
            secondaryCTA={{
              text: "View Our Sold Properties",
              href: "/portfolio",
            }}
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Request a Free Home Valuation"
        subtitle="Tell us about your property and we'll provide a complimentary market analysis."
        source="seller_services_page"
      />
    </>
  )
}
