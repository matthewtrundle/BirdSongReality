"use client"

import { useState, useMemo } from "react"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { Button } from "@/components/ui"

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

const neighborhoods = [
  { value: "westlake", label: "Westlake / Barton Creek", priceMultiplier: 1.35, basePrice: 550 },
  { value: "lake-travis", label: "Lake Travis / Lakeway", priceMultiplier: 1.2, basePrice: 450 },
  { value: "central-austin", label: "Central Austin / 78704", priceMultiplier: 1.15, basePrice: 420 },
  { value: "east-austin", label: "East Austin", priceMultiplier: 1.0, basePrice: 380 },
  { value: "cedar-park", label: "Cedar Park / Leander", priceMultiplier: 0.85, basePrice: 280 },
  { value: "round-rock", label: "Round Rock / Pflugerville", priceMultiplier: 0.82, basePrice: 260 },
  { value: "other", label: "Other Area", priceMultiplier: 0.8, basePrice: 250 },
]

const propertyTypes = [
  { value: "single-family", label: "Single-Family Home", multiplier: 1.0 },
  { value: "townhome", label: "Townhome", multiplier: 0.92 },
  { value: "condo", label: "Condo", multiplier: 0.85 },
]

const conditions = [
  { value: "excellent", label: "Excellent / Renovated", multiplier: 1.15 },
  { value: "good", label: "Good / Well-Maintained", multiplier: 1.0 },
  { value: "fair", label: "Fair / Needs Updates", multiplier: 0.88 },
  { value: "poor", label: "Poor / Major Work Needed", multiplier: 0.75 },
]

const waterViews = [
  { value: "lake-front", label: "Lakefront (Lake Travis/Austin)", premium: 500000 },
  { value: "lake-view", label: "Lake View (Not Waterfront)", premium: 150000 },
  { value: "greenbelt", label: "Greenbelt / Creek View", premium: 75000 },
  { value: "skyline", label: "Downtown Skyline View", premium: 50000 },
  { value: "none", label: "No Premium View", premium: 0 },
]

export default function HomeValueEstimatorPage() {
  const [squareFeet, setSquareFeet] = useState(1800)
  const [bedrooms, setBedrooms] = useState(3)
  const [bathrooms, setBathrooms] = useState(2)
  const [yearBuilt, setYearBuilt] = useState(2010)
  const [neighborhood, setNeighborhood] = useState("east-austin")
  const [propertyType, setPropertyType] = useState("single-family")
  const [condition, setCondition] = useState("good")
  const [waterView, setWaterView] = useState("none")
  const [hasPool, setHasPool] = useState(false)
  const [hasGarage, setHasGarage] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Home Value Estimator" },
  ]

  const estimate = useMemo(() => {
    const hood = neighborhoods.find((n) => n.value === neighborhood) || neighborhoods[6]
    const type = propertyTypes.find((t) => t.value === propertyType) || propertyTypes[0]
    const cond = conditions.find((c) => c.value === condition) || conditions[1]
    const view = waterViews.find((v) => v.value === waterView) || waterViews[3]

    // Base price per sqft for neighborhood
    const basePricePerSqft = hood.basePrice

    // Adjustments
    let pricePerSqft = basePricePerSqft * hood.priceMultiplier * type.multiplier * cond.multiplier

    // Age adjustment (newer = higher)
    const age = new Date().getFullYear() - yearBuilt
    const ageMultiplier = Math.max(0.8, 1 - age * 0.005) // 0.5% reduction per year, min 80%
    pricePerSqft *= ageMultiplier

    // Calculate base value
    let estimatedValue = squareFeet * pricePerSqft

    // Add view premium
    estimatedValue += view.premium

    // Add pool premium
    if (hasPool) {
      estimatedValue += 50000
    }

    // Add garage premium
    if (hasGarage) {
      estimatedValue += 25000
    }

    // Calculate range (±10%)
    const low = estimatedValue * 0.9
    const high = estimatedValue * 1.1

    return {
      value: estimatedValue,
      low,
      high,
      pricePerSqft,
    }
  }, [squareFeet, bedrooms, bathrooms, yearBuilt, neighborhood, propertyType, condition, waterView, hasPool, hasGarage])

  return (
    <>
      <SEOPageHero
        title="Home Value Estimator"
        subtitle="Get an instant estimate of your Austin property's value"
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8">
              <h2 className="font-display text-xl text-neutral-900 mb-6">
                Property Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Square Footage */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Square Footage
                  </label>
                  <input
                    type="number"
                    value={squareFeet}
                    onChange={(e) => setSquareFeet(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                {/* Year Built */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Year Built
                  </label>
                  <input
                    type="number"
                    value={yearBuilt}
                    onChange={(e) => setYearBuilt(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Bedrooms
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Bathrooms
                  </label>
                  <select
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                {/* Neighborhood */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Neighborhood
                  </label>
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {neighborhoods.map((n) => (
                      <option key={n.value} value={n.value}>{n.label}</option>
                    ))}
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {propertyTypes.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                {/* Condition */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Property Condition
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {conditions.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>

                {/* Water View */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Water View
                  </label>
                  <select
                    value={waterView}
                    onChange={(e) => setWaterView(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {waterViews.map((v) => (
                      <option key={v.value} value={v.value}>{v.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Additional Features
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasPool}
                      onChange={(e) => setHasPool(e.target.checked)}
                      className="w-5 h-5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-neutral-700">Private Pool</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasGarage}
                      onChange={(e) => setHasGarage(e.target.checked)}
                      className="w-5 h-5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-neutral-700">Attached Garage</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Estimate Card */}
              <div className="bg-primary-900 text-white rounded-xl p-6">
                <p className="text-sm text-primary-200 mb-1">Estimated Value</p>
                <p className="text-4xl font-display font-semibold">
                  {formatCurrency(estimate.value)}
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  Range: {formatCurrency(estimate.low)} - {formatCurrency(estimate.high)}
                </p>
              </div>

              {/* Details */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Estimate Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-600">Price per Sq Ft</span>
                    <span className="text-sm font-medium">${Math.round(estimate.pricePerSqft)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-600">Square Footage</span>
                    <span className="text-sm font-medium">{squareFeet.toLocaleString()} sqft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-600">Bed / Bath</span>
                    <span className="text-sm font-medium">{bedrooms} bed / {bathrooms} bath</span>
                  </div>
                </div>
              </div>

              {/* Get Accurate Estimate */}
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="font-medium text-neutral-900 mb-2">Want a Precise Value?</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Get a free, no-obligation Comparative Market Analysis from our local experts.
                </p>
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <a href="/contact">Request Free CMA</a>
                </Button>
              </div>

              {/* Sell Your Home */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-2">Thinking of Selling?</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  We can help you sell your Austin property for top dollar.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/contact">List Your Home</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-neutral-100 rounded-lg">
            <p className="text-xs text-neutral-500">
              <strong>Disclaimer:</strong> This estimate is based on general market data and the information
              you provided. Actual property values depend on many factors including specific location,
              lot size, views, recent updates, and current market conditions. For an accurate valuation,
              request a professional Comparative Market Analysis (CMA) from a local real estate expert.
            </p>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Ready to Sell?"
          description="Get a professional market analysis and list your property with local experts"
          primaryCTA={{ text: "Contact Us", href: "/contact" }}
        />
      </Container>
    </>
  )
}
