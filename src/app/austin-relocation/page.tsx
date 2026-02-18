import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, StatsGrid, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Relocating to Austin TX | Birdsong Realty Team | Keller Williams",
  description:
    "Your complete guide to relocating to Austin, Texas. The Birdsong Realty Team helps families and professionals make a smooth transition to Austin living.",
  keywords: [
    "relocating to Austin TX",
    "moving to Austin",
    "Austin relocation guide",
    "Austin relocation realtor",
    "corporate relocation Austin",
    "Austin area guide",
  ],
  openGraph: {
    title: "Relocating to Austin TX | Birdsong Realty Team | Keller Williams",
    description:
      "Your complete guide to relocating to Austin, Texas with the Birdsong Realty Team.",
  },
}

export default function AustinRelocationPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Buy", href: "/portfolio" },
    { label: "Relocation Guide" },
  ]

  const austinStats = [
    { value: "2M+", label: "Metro population" },
    { value: "#1", label: "Best place to live (multiple years)" },
    { value: "300+", label: "Sunny days per year" },
    { value: "0%", label: "State income tax" },
  ]

  return (
    <>
      <SEOPageHero
        title="Relocating to Austin"
        subtitle="Everything you need to know about making Austin your new home, from neighborhoods to schools to lifestyle."
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Moving to a new city is a major life decision, and we&apos;re here to make
                your transition to Austin as smooth as possible. The Birdsong Realty Team
                has helped dozens of families and professionals relocate to Austin, and
                we bring deep local knowledge to every step of the process.
              </p>
            </ContentSection>

            <StatsGrid stats={austinStats} />

            <ContentSection>
              <h2>Why People Move to Austin</h2>
              <p>
                Austin has consistently ranked among the best places to live in the United
                States, and for good reason. The city offers a unique combination of economic
                opportunity, cultural richness, outdoor recreation, and Texas-sized hospitality
                that draws people from every corner of the country.
              </p>
              <p>
                The tech industry has been a major driver, with companies like Tesla, Apple,
                Google, Oracle, and Samsung establishing significant operations here. But
                Austin&apos;s appeal extends far beyond tech, encompassing healthcare, education,
                government, creative industries, and more.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Corporate Relocation Support
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                If you&apos;re relocating for work, we coordinate with corporate relocation
                companies and can arrange virtual tours, neighborhood driving tours, and
                temporary housing assistance. We understand the tight timelines and unique
                needs of corporate transferees.
              </p>
            </HighlightBox>

            <ContentSection>
              <h2>Choosing the Right Neighborhood</h2>
              <p>
                Austin is a city of diverse neighborhoods, each with its own personality.
                Where you choose to live depends on your commute, lifestyle preferences,
                school priorities, and budget. Here are some areas we commonly recommend
                for relocating families and professionals:
              </p>
              <ul>
                <li><strong>Northwest Austin / Cedar Park</strong> -- Great schools, suburban feel, tech corridor access</li>
                <li><strong>Westlake / Eanes ISD</strong> -- Top-rated schools, Hill Country setting, luxury homes</li>
                <li><strong>South Austin / Circle C</strong> -- Family-friendly, nature access, strong community</li>
                <li><strong>East Austin / Mueller</strong> -- Urban living, walkability, vibrant culture</li>
                <li><strong>Downtown / Zilker</strong> -- Walkable lifestyle, dining and entertainment, active living</li>
                <li><strong>Dripping Springs / Bee Cave</strong> -- Hill Country charm, space, newer construction</li>
              </ul>
            </ContentSection>

            <ContentSection>
              <h2>Schools in Austin</h2>
              <p>
                Austin is served by multiple school districts, with Eanes ISD (Westlake) and
                Round Rock ISD consistently ranking among the best in Texas. Austin ISD,
                Lake Travis ISD, Dripping Springs ISD, and Leander ISD also offer excellent
                options. The city also has a strong network of private and charter schools.
              </p>
              <p>
                We can help you understand the school landscape and find a home within
                your preferred district boundaries.
              </p>
            </ContentSection>

            <ContentSection>
              <h2>Our Relocation Process</h2>
              <p>
                When you work with the Birdsong Realty Team for your Austin relocation,
                you get a structured approach designed to make the process efficient
                and stress-free:
              </p>
              <ul>
                <li><strong>Initial Consultation:</strong> We learn your priorities, timeline, and budget</li>
                <li><strong>Area Orientation:</strong> Virtual or in-person tours of recommended neighborhoods</li>
                <li><strong>Curated Property Search:</strong> Homes selected to match your specific criteria</li>
                <li><strong>Offer &amp; Negotiation:</strong> Strategic offers backed by local market expertise</li>
                <li><strong>Closing &amp; Beyond:</strong> Smooth transaction plus local resource connections</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <CTABanner
            title="Planning Your Move to Austin?"
            description="Let the Birdsong Realty Team guide your relocation from start to finish. We make it easy."
            buttonText="Start Relocation Consultation"
            buttonHref="/contact?interest=relocation"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Let Us Help You Relocate"
        subtitle="Tell us where you're coming from, when you're moving, and what you're looking for."
        source="relocation_page"
      />
    </>
  )
}
