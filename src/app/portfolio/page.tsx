import { Suspense } from "react"
import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import { PropertyGrid, PropertyFilters } from "@/components/properties"
import { SEOPageHero } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"
import type { Property } from "@/types/property"

export const metadata: Metadata = {
  title: "Current Listings | Birdsong Realty Team",
  description:
    "Browse current Austin listings represented by the Birdsong Realty Team.",
  openGraph: {
    title: "Current Listings | Birdsong Realty Team",
    description:
      "Browse current Austin listings represented by the Birdsong Realty Team.",
  },
}

interface PropertiesPageProps {
  searchParams: Promise<{
    bedrooms?: string
    priceRange?: string
    features?: string
    sort?: string
  }>
}

function filterAndSortProperties(
  properties: Property[],
  params: {
    bedrooms?: string
    priceRange?: string
    features?: string
    sort?: string
  }
): Property[] {
  let filtered = [...properties]

  // Filter by bedrooms
  if (params.bedrooms) {
    const minBedrooms = parseInt(params.bedrooms)
    if (params.bedrooms === "6+") {
      filtered = filtered.filter((p) => p.specs.bedrooms >= 6)
    } else {
      filtered = filtered.filter((p) => p.specs.bedrooms >= minBedrooms)
    }
  }

  // Filter by price range
  if (params.priceRange) {
    const [min, max] = params.priceRange.split("-").map(Number)
    filtered = filtered.filter((p) => {
      if (max) {
        return p.pricing.listPrice >= min && p.pricing.listPrice <= max
      }
      return p.pricing.listPrice >= min
    })
  }

  // Filter by features
  if (params.features) {
    const requiredFeatures = params.features.split(",").filter(Boolean)
    filtered = filtered.filter((p) => {
      const propertyFeatures = [
        ...p.features.highlights.map((a) => a.toLowerCase().replace(/\s+/g, "-")),
        ...p.features.outdoor.map((a) => a.toLowerCase().replace(/\s+/g, "-")),
        ...p.features.indoor.map((a) => a.toLowerCase().replace(/\s+/g, "-")),
      ]
      return requiredFeatures.every((required) =>
        propertyFeatures.some((a) => a.includes(required))
      )
    })
  }

  // Sort
  const sort = params.sort || "featured"
  switch (sort) {
    case "price-asc":
      filtered.sort((a, b) => a.pricing.listPrice - b.pricing.listPrice)
      break
    case "price-desc":
      filtered.sort((a, b) => b.pricing.listPrice - a.pricing.listPrice)
      break
    case "newest":
      filtered.sort((a, b) => a.pricing.daysOnMarket - b.pricing.daysOnMarket)
      break
    case "sqft":
      filtered.sort((a, b) => b.specs.sqft - a.specs.sqft)
      break
    case "featured":
    default:
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      break
  }

  return filtered
}

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const params = await searchParams
  // Hide sold properties for now — only show active/pending listings
  const allProperties = (propertiesData.properties as Property[]).filter(
    (p) => p.status !== "sold",
  )
  const filteredProperties = filterAndSortProperties(allProperties, params)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Listings" },
  ]

  const hasListings = filteredProperties.length > 0

  return (
    <>
      <SEOPageHero
        title="Current Listings"
        subtitle="Active properties represented by the Birdsong Realty Team. New listings coming soon."
        backgroundImage="/images/hero/austin-homes-aerial.jpg"
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section className="bg-neutral-50">
        <Container>
          {hasListings ? (
            <>
              <Suspense fallback={<div className="h-24 bg-white rounded-xl animate-pulse" />}>
                <PropertyFilters />
              </Suspense>

              <div className="flex items-center justify-between mb-8">
                <p className="text-neutral-600">
                  <span className="font-semibold text-neutral-900">{filteredProperties.length}</span>{" "}
                  active {filteredProperties.length === 1 ? "listing" : "listings"}
                </p>
              </div>

              <PropertyGrid properties={filteredProperties} />
            </>
          ) : (
            <div className="text-center py-16 max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-neutral-900 mb-3">
                New listings coming soon
              </h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                We&apos;re between listings right now. If you&apos;re looking
                to buy or sell in Austin, get in touch — we know the off-market
                inventory and we&apos;ll match you with the right home.
              </p>
            </div>
          )}
        </Container>
      </Section>

      <LeadFormSection />
    </>
  )
}
