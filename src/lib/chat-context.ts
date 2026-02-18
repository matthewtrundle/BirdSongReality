// Chat context generator for Austin AI assistant
// Compiles site content into a context string for the LLM

import {
  getAllPlaces,
  getAllActivities,
  getAllEvents,
  getAllMonthlyGuides,
  getCurrentMonthGuide,
} from "@/data"

import propertiesData from "@/data/properties.json"

interface Property {
  name: string
  status: string
  shortDescription: string
  location: { neighborhood: string }
  specs: { bedrooms: number; bathrooms: number; sqft: number }
  pricing: { listPrice: number }
  features: { highlights: string[] }
}

const properties = propertiesData.properties as Property[]

export function getAustinContext(): string {
  const sections: string[] = []

  // About Austin
  sections.push(`
## About Austin
Austin is the capital of Texas and one of the fastest-growing cities in the U.S. Known for:
- The Live Music Capital of the World with 250+ live music venues
- A thriving tech hub (Silicon Hills) with major employers like Apple, Tesla, Google, Meta
- Beautiful Hill Country setting with lakes, greenbelts, and 300+ days of sunshine
- World-famous food scene including BBQ, Tex-Mex, and innovative cuisine
- Outdoor lifestyle with Lady Bird Lake, Barton Springs Pool, and extensive trail systems
- Iconic events: SXSW, Austin City Limits, Formula 1, Trail of Lights
- No state income tax in Texas
- Top-ranked schools and universities including UT Austin
`)

  // Properties summary
  const activeProperties = properties.filter((p) => p.status === "active")
  const soldProperties = properties.filter((p) => p.status === "sold")

  sections.push(`
## Real Estate Portfolio
We specialize in Austin metro area properties:
- Currently: ${activeProperties.length} active listings, ${soldProperties.length} recently sold
- Property types: Luxury homes, new construction, waterfront, condos, townhomes, investment properties
- Neighborhoods: Zilker, Tarrytown, Hyde Park, Mueller, Travis Heights, South Congress, West Lake Hills, Lakeway, Cedar Park, Round Rock

${soldProperties.length > 0 ? `Recent sales include:
${soldProperties.slice(0, 5).map((p) => `- ${p.name}: ${p.specs.bedrooms}BR/${p.specs.bathrooms}BA, ${p.location.neighborhood}, $${(p.pricing.listPrice / 1000).toFixed(0)}K`).join("\n")}` : ""}
`)

  // Popular restaurants
  const restaurants = getAllPlaces().filter((p) => p.category === "restaurants")
  sections.push(`
## Dining (${restaurants.length} restaurants)
Popular spots include:
${restaurants.slice(0, 8).map((r) => `- ${r.name}: ${r.description}`).join("\n")}
`)

  // Bars and nightlife
  const bars = getAllPlaces().filter((p) => p.category === "bars")
  sections.push(`
## Bars & Nightlife (${bars.length} spots)
${bars.slice(0, 5).map((b) => `- ${b.name}: ${b.description}`).join("\n")}
`)

  // Attractions
  const attractions = getAllPlaces().filter((p) => p.category === "attractions")
  sections.push(`
## Attractions & Activities
${attractions.slice(0, 6).map((a) => `- ${a.name}: ${a.description}`).join("\n")}
`)

  // Activities
  const activities = getAllActivities()
  sections.push(`
## Things to Do
${activities.slice(0, 8).map((a) => `- ${a.name}: ${a.description}`).join("\n")}
`)

  // Events
  const events = getAllEvents()
  sections.push(`
## Annual Events & Festivals
${events.slice(0, 8).map((e) => `- ${e.name} (${e.recurring?.month || e.date}): ${e.description}`).join("\n")}
`)

  // Current month info
  const currentGuide = getCurrentMonthGuide()
  if (currentGuide) {
    sections.push(`
## This Month in Austin (${currentGuide.month})
- Weather: Highs around ${currentGuide.weather.avgHigh}°F
- Crowd level: ${currentGuide.crowdLevel}
- Top activities: ${currentGuide.activities.slice(0, 3).map((a) => a.name).join(", ")}
`)
  }

  // Contact info
  sections.push(`
## Contact Us
For inquiries about properties or to schedule a tour, visitors should use the contact form on our website at birdsongrealtyteam.com/contact. Patrick Birdsong and the team respond within 24 hours.
`)

  return sections.join("\n")
}

// Fun facts for the popup
export const austinFunFacts = [
  "Did you know Austin has over 250 live music venues?",
  "Barton Springs Pool stays a refreshing 68°F year-round!",
  "Austin is home to the largest urban bat colony in North America — 1.5 million bats under Congress Avenue Bridge!",
  "The Texas State Capitol building is actually taller than the U.S. Capitol in Washington, D.C.",
  "Austin has over 300 days of sunshine per year — perfect for outdoor living!",
  "Lady Bird Lake offers 10+ miles of hike-and-bike trails right through downtown.",
  "Austin's food trailer scene has over 1,000 food trucks and trailers across the city.",
  "SXSW brings over 400,000 visitors to Austin every March!",
  "Zilker Park is 351 acres of green space right in the heart of the city.",
  "Austin was ranked the #1 place to live in America by U.S. News & World Report.",
]

export function getRandomFunFact(): string {
  return austinFunFacts[Math.floor(Math.random() * austinFunFacts.length)]
}
