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
  title: "Buying a Home in Austin | Complete Guide 2025",
  description:
    "Everything you need to know about buying a home in Austin, TX. From neighborhoods and school districts to property taxes and market conditions, get expert guidance.",
  keywords: [
    "buying home Austin TX",
    "Austin home buying guide",
    "Austin real estate advice",
    "Austin neighborhoods guide",
    "Austin property purchase tips",
  ],
  openGraph: {
    title: "Buying a Home in Austin | Complete Guide 2025",
    description:
      "Everything you need to know about buying a home in Austin, TX.",
    type: "website",
  },
}

export default function BuyingInAustinPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Buying in Austin" },
  ]

  const stats = [
    { value: "$475K", label: "Median price" },
    { value: "45-60", label: "Days on market" },
    { value: "1.8-2.5%", label: "Property tax rate" },
    { value: "2M+", label: "Metro population" },
  ]

  return (
    <>
      <SEOPageHero
        title="Buying a Home in Austin"
        subtitle="Your comprehensive guide to purchasing property in one of America's most dynamic real estate markets"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Austin&apos;s real estate market offers incredible opportunities for
                buyers who understand the landscape. From vibrant urban neighborhoods
                to peaceful Hill Country communities, the Austin metro has something
                for every lifestyle and budget. This guide covers everything you need
                to know to make a confident purchase.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="austin-market-overview">
              <h2>Austin Market Overview</h2>
              <p>
                Austin has experienced remarkable growth over the past decade,
                driven by the tech industry, quality of life, and Texas&apos;s
                business-friendly environment. While the frenzy of 2020-2022 has
                normalized, the market remains strong with healthy appreciation
                and sustained demand from relocating professionals and families.
              </p>
              <p>
                The current market offers more balance than recent years. Buyers
                have more inventory to choose from, more time to make decisions,
                and more room to negotiate. Understanding the nuances of
                Austin&apos;s micro-markets is key to finding the right property
                at the right price.
              </p>
            </ContentSection>

            <ContentSection id="neighborhoods">
              <h2>Understanding Austin Neighborhoods</h2>

              <h3>Central Austin</h3>
              <p>
                Central neighborhoods like Tarrytown, Zilker, Bouldin Creek, and
                Travis Heights offer walkability, character, and proximity to
                downtown. Expect prices from $700,000 to well over $2 million for
                single-family homes.
              </p>

              <h3>East Austin</h3>
              <p>
                East Austin is the city&apos;s trendiest market, with a vibrant food
                and music scene. Mueller, Holly, and East Cesar Chavez offer urban
                energy with strong appreciation potential. Prices range from
                $400,000 for condos to $1 million+ for houses.
              </p>

              <h3>South Austin</h3>
              <p>
                South Austin has a laid-back, eclectic character centered around
                South Congress and South Lamar. Neighborhoods like Barton Hills,
                Galindo, and South Manchaca offer established homes with great
                access to Zilker Park and Barton Springs.
              </p>

              <h3>North Austin &amp; Suburbs</h3>
              <p>
                Round Rock, Cedar Park, Leander, and Pflugerville offer excellent
                schools, newer construction, and more home for the money. Prices
                range from the mid-$300,000s to $800,000+, depending on the
                community and school district.
              </p>

              <h3>Hill Country West</h3>
              <p>
                Dripping Springs, Bee Cave, Lakeway, and Westlake offer Hill
                Country beauty with top-rated schools. Prices start in the
                mid-$400,000s and extend to several million for estate properties
                with acreage and views.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                School Districts Drive Value
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                In Texas, your address determines your school district. Eanes ISD
                (Westlake), Round Rock ISD, Lake Travis ISD, and Leander ISD are
                among the highest-rated. Homes in these districts command 10-20%
                premiums—even for buyers without children, this impacts resale value.
              </p>
            </HighlightBox>

            <ContentSection id="property-types">
              <h2>Property Types in Austin</h2>

              <h3>Single-Family Homes</h3>
              <p>
                The most common property type, ranging from 1960s ranch homes in
                central neighborhoods to brand-new construction in the suburbs.
                Austin&apos;s diverse housing stock means you can find everything
                from Hill Country stone homes to modern architectural designs.
              </p>

              <h3>Condominiums</h3>
              <p>
                Downtown condos in buildings like The Independent, Seaholm
                Residences, and Spring offer urban living with amenities. HOA fees
                range from $200 to $600+ monthly and cover exterior maintenance,
                common areas, and amenities.
              </p>

              <h3>Townhomes</h3>
              <p>
                Townhome development has boomed in East Austin, South Austin, and
                along major corridors. They offer a middle ground between condos
                and houses in terms of price, space, and maintenance.
              </p>

              <h3>New Construction</h3>
              <p>
                Master-planned communities across the suburbs offer new homes with
                modern features and builder warranties. Pay attention to MUD taxes,
                HOA fees, and lot premiums that can add to your monthly costs.
              </p>
            </ContentSection>

            <ContentSection id="property-taxes">
              <h2>Understanding Texas Property Taxes</h2>
              <p>
                Texas has no state income tax, but property taxes are higher than
                the national average. This is one of the most important financial
                considerations for Austin home buyers.
              </p>
              <ul>
                <li><strong>Tax Rates:</strong> Typically 1.8% to 2.5% of assessed value, depending on location</li>
                <li><strong>Homestead Exemption:</strong> Primary residence owners can claim exemptions that reduce taxable value</li>
                <li><strong>Protest Rights:</strong> You can protest your assessed value annually if you believe it&apos;s too high</li>
                <li><strong>MUD Taxes:</strong> Some newer developments have Municipal Utility District taxes that add 0.5-1.5% on top</li>
              </ul>

              <div className="my-6 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-3">
                  Property Tax Example ($500K Home)
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Assessed Value:</strong> $500,000</li>
                  <li><strong>Homestead Exemption:</strong> -$100,000</li>
                  <li><strong>Taxable Value:</strong> $400,000</li>
                  <li><strong>Tax Rate (2.1%):</strong> ~$8,400/year ($700/month)</li>
                  <li><strong>With MUD (if applicable):</strong> Could add $2,500-7,500/year</li>
                </ul>
              </div>
            </ContentSection>

            <ContentSection id="due-diligence">
              <h2>Due Diligence Checklist</h2>
              <p>
                Before closing on an Austin property, verify:
              </p>
              <ul>
                <li><strong>Flood Zone Status:</strong> Some Austin areas are flood-prone—check FEMA maps</li>
                <li><strong>School District:</strong> Confirm which district and campus your address feeds into</li>
                <li><strong>Property Tax History:</strong> Review past assessments and calculate future taxes</li>
                <li><strong>HOA Rules:</strong> Review documents for any restrictions, fees, and rental policies</li>
                <li><strong>Title Search:</strong> Verify clear title and any easements or restrictions</li>
                <li><strong>Foundation:</strong> Austin&apos;s clay soil can cause foundation issues—get a specialist inspection</li>
                <li><strong>MUD/PID Status:</strong> Check for special taxing districts in newer developments</li>
                <li><strong>Future Development:</strong> Research planned construction near the property</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="warning">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Austin Foundation Considerations
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Austin&apos;s expansive clay soil can cause foundation movement over
                time. Always get a thorough foundation inspection, especially on
                older homes. Watering your foundation during dry periods and
                maintaining consistent moisture levels around the home helps prevent
                issues. A foundation repair can cost $5,000 to $30,000+.
              </p>
            </HighlightBox>

            <ContentSection id="making-an-offer">
              <h2>Making an Offer in Austin</h2>
              <p>
                The Texas Real Estate Commission (TREC) promulgated contract forms
                are used for most residential transactions. Key components include:
              </p>
              <ul>
                <li><strong>Purchase Price:</strong> Based on comparable sales and market conditions</li>
                <li><strong>Earnest Money:</strong> Typically 1-2% of purchase price</li>
                <li><strong>Option Period:</strong> Usually 7-10 days, paid as option fee ($200-500), gives you unrestricted right to terminate</li>
                <li><strong>Financing Contingency:</strong> Protection if your loan falls through</li>
                <li><strong>Closing Date:</strong> Typically 30-45 days from contract execution</li>
                <li><strong>Seller Concessions:</strong> You can request the seller contribute to closing costs</li>
              </ul>
            </ContentSection>

            <ContentSection id="closing-process">
              <h2>The Closing Process</h2>
              <p>
                Closing on an Austin property typically takes 30-45 days:
              </p>
              <ol>
                <li><strong>Contract Execution:</strong> Sign purchase agreement with all terms</li>
                <li><strong>Option Period:</strong> Complete inspections and negotiate repairs</li>
                <li><strong>Loan Processing:</strong> Lender orders appraisal, processes your loan</li>
                <li><strong>Title Work:</strong> Title company clears title and prepares documents</li>
                <li><strong>Final Walkthrough:</strong> Verify property condition before closing</li>
                <li><strong>Closing Day:</strong> Sign documents, fund the purchase, receive keys</li>
              </ol>
            </ContentSection>

            <ContentSection id="working-with-agent">
              <h2>Working with a Local Agent</h2>
              <p>
                Austin&apos;s market has distinct micro-markets that require local
                expertise. A knowledgeable agent will help you:
              </p>
              <ul>
                <li>Understand neighborhood dynamics and pricing trends</li>
                <li>Navigate school district boundaries and options</li>
                <li>Identify potential issues before you fall in love with a property</li>
                <li>Negotiate effectively in the current market conditions</li>
                <li>Connect you with trusted lenders, inspectors, and service providers</li>
                <li>Guide you through the Texas-specific closing process</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Ready to Start Your Austin Home Search?"
          description="Let the Birdsong Realty Team guide you through the buying process with deep local expertise."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Properties", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
