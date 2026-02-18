"use client"

import Script from "next/script"
import { SITE_CONFIG } from "@/lib/constants"

// LocalBusiness + RealEstateAgent Schema
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.2672,
      longitude: -97.7431,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Austin",
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      },
      {
        "@type": "City",
        name: "Round Rock",
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      },
      {
        "@type": "City",
        name: "Cedar Park",
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      },
      {
        "@type": "City",
        name: "Lakeway",
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      },
      {
        "@type": "City",
        name: "West Lake Hills",
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      },
    ],
    priceRange: "$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    image: `${SITE_CONFIG.url}/images/og-default.jpg`,
    logo: `${SITE_CONFIG.url}/images/og-default.jpg`,
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/images/og-default.jpg`,
      width: 160,
      height: 50,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${SITE_CONFIG.url}/contact`,
      areaServed: "US",
      availableLanguage: "English",
    },
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// WebSite Schema with SearchAction
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/portfolio?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Property/RealEstateListing Schema
interface PropertySchemaProps {
  name: string
  description: string
  url: string
  image: string
  price: number
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  specs: {
    bedrooms: number
    bathrooms: number
    sqft: number
  }
  features?: string[]
}

export function PropertySchema({ name, description, url, image, price, address, specs, features }: PropertySchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name,
    description,
    url,
    image,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "US",
    },
    numberOfRooms: specs.bedrooms,
    numberOfBathroomsTotal: specs.bathrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: specs.sqft,
      unitCode: "FTK",
    },
    amenityFeature: features?.map((feature) => ({
      "@type": "LocationFeatureSpecification",
      name: feature,
    })),
  }

  return (
    <Script
      id="property-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Review Schema
interface ReviewSchemaProps {
  author: string
  reviewBody: string
  ratingValue: number
  datePublished?: string
}

export function ReviewSchema({ author, reviewBody, ratingValue, datePublished }: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: author,
    },
    reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: datePublished || new Date().toISOString().split("T")[0],
    itemReviewed: {
      "@type": "RealEstateAgent",
      name: SITE_CONFIG.name,
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
  }

  return (
    <Script
      id={`review-schema-${author.replace(/\s/g, "-").toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// AggregateRating Schema
interface AggregateRatingSchemaProps {
  ratingValue: number
  reviewCount: number
  bestRating?: number
}

export function AggregateRatingSchema({ ratingValue, reviewCount, bestRating = 5 }: AggregateRatingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating,
      worstRating: 1,
    },
  }

  return (
    <Script
      id="aggregate-rating-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Combined schema component for layout
export function GlobalSchemas() {
  return (
    <>
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebSiteSchema />
    </>
  )
}
