import { Suspense } from "react"
import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import { PropertyGrid, PropertyFilters } from "@/components/properties"
import { SEOPageHero } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"
import type { Property } from "@/types/property"

export const metadata: Metadata = {
  title: "Our Portfolio | Recent Transactions in Austin",
  description:
    "Browse our portfolio of successfully closed properties in Austin, Texas. View case studies of homes, condos, and investment properties we've helped clients buy and sell.",
  openGraph: {
    title: "Our Portfolio | Recent Transactions in Austin",
    description:
      "Browse our portfolio of successfully closed properties in Austin, Texas.",
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
  const allProperties = propertiesData.properties as Property[]
  const filteredProperties = filterAndSortProperties(allProperties, params)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Portfolio" },
  ]

  return (
    <>
      {/* Hero Section with real Austin aerial photo */}
      <SEOPageHero
        title="Our Portfolio"
        subtitle="Showcasing our successful transactions across Austin, Texas. Every property tells a story of strategy, expertise, and results."
        backgroundImage="/images/hero/austin-homes-aerial.jpg"
        breadcrumbs={breadcrumbs}
        size="default"
      />

      {/* Properties Grid Section */}
      <Section className="bg-neutral-50">
        <Container>
          <Suspense fallback={<div className="h-24 bg-white rounded-xl animate-pulse" />}>
            <PropertyFilters />
          </Suspense>

          <div className="flex items-center justify-between mb-8">
            <p className="text-neutral-600">
              <span className="font-semibold text-neutral-900">{filteredProperties.length}</span>{" "}
              successful {filteredProperties.length === 1 ? "transaction" : "transactions"}
            </p>
          </div>

          <PropertyGrid
            properties={filteredProperties}
            emptyMessage="No properties match your criteria"
          />
        </Container>
      </Section>

      {/* Lead Form Section */}
      <LeadFormSection />
    </>
  )
}
