"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Austin neighborhoods with approximate coordinates
const neighborhoods = [
  { id: "downtown", name: "Downtown Austin", x: 50, y: 45, properties: 32, avgPrice: 850000 },
  { id: "south-congress", name: "South Congress", x: 50, y: 58, properties: 24, avgPrice: 725000 },
  { id: "west-lake-hills", name: "West Lake Hills", x: 30, y: 50, properties: 18, avgPrice: 1250000 },
  { id: "east-austin", name: "East Austin", x: 68, y: 42, properties: 28, avgPrice: 550000 },
  { id: "barton-hills", name: "Barton Hills", x: 40, y: 55, properties: 15, avgPrice: 950000 },
  { id: "circle-c", name: "Circle C Ranch", x: 35, y: 72, properties: 20, avgPrice: 625000 },
]

// Sample properties for demo
const sampleProperties = [
  { id: 1, neighborhood: "downtown", name: "Skyline Penthouse", price: 1450000, beds: 3, baths: 3, x: 52, y: 43 },
  { id: 2, neighborhood: "downtown", name: "Congress Ave Loft", price: 685000, beds: 2, baths: 2, x: 48, y: 47 },
  { id: 3, neighborhood: "south-congress", name: "SoCo Bungalow", price: 725000, beds: 3, baths: 2, x: 52, y: 56 },
  { id: 4, neighborhood: "west-lake-hills", name: "Hill Country Estate", price: 1350000, beds: 4, baths: 3, x: 28, y: 48 },
  { id: 5, neighborhood: "east-austin", name: "Modern Craftsman", price: 575000, beds: 3, baths: 2.5, x: 70, y: 40 },
  { id: 6, neighborhood: "east-austin", name: "Renovated Charmer", price: 495000, beds: 2, baths: 1, x: 66, y: 44 },
  { id: 7, neighborhood: "barton-hills", name: "Greenbelt Retreat", price: 895000, beds: 4, baths: 3, x: 42, y: 53 },
  { id: 8, neighborhood: "circle-c", name: "Family Home", price: 625000, beds: 4, baths: 3, x: 33, y: 70 },
]

function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`
  }
  return `$${(price / 1000).toFixed(0)}K`
}

interface PropertyMapProps {
  className?: string
  onPropertySelect?: (propertyId: number) => void
}

export function PropertyMap({ className, onPropertySelect }: PropertyMapProps) {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null)
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"neighborhoods" | "properties">("neighborhoods")

  const filteredProperties = useMemo(() => {
    if (!selectedNeighborhood) return sampleProperties
    return sampleProperties.filter((p) => p.neighborhood === selectedNeighborhood)
  }, [selectedNeighborhood])

  return (
    <div className={cn("relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl overflow-hidden", className)}>
      {/* Controls */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <button
          onClick={() => {
            setViewMode("neighborhoods")
            setSelectedNeighborhood(null)
          }}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm",
            viewMode === "neighborhoods"
              ? "bg-primary-600 text-white"
              : "bg-white text-neutral-700 hover:bg-neutral-50"
          )}
        >
          Neighborhoods
        </button>
        <button
          onClick={() => setViewMode("properties")}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm",
            viewMode === "properties"
              ? "bg-primary-600 text-white"
              : "bg-white text-neutral-700 hover:bg-neutral-50"
          )}
        >
          Properties
        </button>
      </div>

      {/* Filter by neighborhood when in properties view */}
      {viewMode === "properties" && (
        <div className="absolute top-4 right-4 z-20">
          <select
            value={selectedNeighborhood || ""}
            onChange={(e) => setSelectedNeighborhood(e.target.value || null)}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-neutral-700 border-0 shadow-sm focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Areas</option>
            {neighborhoods.map((n) => (
              <option key={n.id} value={n.id}>{n.name}</option>
            ))}
          </select>
        </div>
      )}

      {/* Map Container */}
      <div className="relative aspect-[16/10] md:aspect-[16/9]">
        {/* Stylized Map Background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Background - land */}
          <rect x="0" y="0" width="100" height="100" fill="#f0fdf4" />

          {/* Hill Country terrain texture */}
          <g opacity="0.15">
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d={`M -10 ${20 + i * 12} Q 25 ${15 + i * 12} 50 ${20 + i * 12} T 110 ${20 + i * 12}`}
                stroke="#16a34a"
                strokeWidth="0.3"
                fill="none"
              />
            ))}
          </g>

          {/* Lady Bird Lake / Colorado River */}
          <path
            d="M 10 48 Q 25 44 40 46 Q 55 48 65 45 Q 75 42 90 44"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M 10 48 Q 25 44 40 46 Q 55 48 65 45 Q 75 42 90 44 L 90 47 Q 75 45 65 48 Q 55 51 40 49 Q 25 47 10 51 Z"
            fill="#bae6fd"
            opacity="0.5"
          />

          {/* Parks / Greenbelt areas */}
          <ellipse cx="38" cy="55" rx="8" ry="5" fill="#bbf7d0" opacity="0.4" />
          <ellipse cx="25" cy="48" rx="6" ry="4" fill="#bbf7d0" opacity="0.3" />

          {/* Roads */}
          <g stroke="#94a3b8" strokeWidth="0.4" fill="none" opacity="0.5">
            {/* I-35 (vertical through center) */}
            <path d="M 50 10 L 50 90" />
            {/* Mopac / Loop 1 */}
            <path d="M 38 15 L 38 85" />
            {/* 183 */}
            <path d="M 20 30 L 70 70" />
            {/* Ben White / 290 */}
            <path d="M 15 62 L 85 62" />
          </g>
        </svg>

        {/* Neighborhood Markers */}
        {viewMode === "neighborhoods" && (
          <div className="absolute inset-0">
            {neighborhoods.map((hood) => (
              <motion.button
                key={hood.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: neighborhoods.indexOf(hood) * 0.1, type: "spring" }}
                onClick={() => {
                  setSelectedNeighborhood(hood.id)
                  setViewMode("properties")
                }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${hood.x}%`, top: `${hood.y}%` }}
              >
                {/* Pulse animation */}
                <span className="absolute inset-0 -m-2 rounded-full bg-primary-400 animate-ping opacity-20" />

                {/* Main marker */}
                <div className="relative w-10 h-10 rounded-full bg-primary-600 shadow-lg flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform">
                  {hood.properties}
                </div>

                {/* Label */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="font-medium text-neutral-900 text-sm">{hood.name}</div>
                  <div className="text-xs text-neutral-500">Avg: {formatPrice(hood.avgPrice)}</div>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {/* Property Markers */}
        {viewMode === "properties" && (
          <div className="absolute inset-0">
            <AnimatePresence>
              {filteredProperties.map((property, index) => (
                <motion.button
                  key={property.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  onClick={() => onPropertySelect?.(property.id)}
                  onMouseEnter={() => setHoveredProperty(property.id)}
                  onMouseLeave={() => setHoveredProperty(null)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${property.x}%`, top: `${property.y}%` }}
                >
                  {/* Property pin */}
                  <div
                    className={cn(
                      "relative px-2 py-1 rounded-full shadow-lg text-xs font-bold transition-all",
                      hoveredProperty === property.id
                        ? "bg-accent-500 text-white scale-110 z-10"
                        : "bg-white text-neutral-900"
                    )}
                  >
                    {formatPrice(property.price)}
                    {/* Pin tail */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent",
                        hoveredProperty === property.id ? "border-t-accent-500" : "border-t-white"
                      )}
                    />
                  </div>

                  {/* Property card on hover */}
                  <AnimatePresence>
                    {hoveredProperty === property.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white rounded-xl shadow-xl p-4 w-56 pointer-events-none z-20"
                      >
                        <div className="font-medium text-neutral-900">{property.name}</div>
                        <div className="text-lg font-bold text-primary-600 mt-1">
                          {formatPrice(property.price)}
                        </div>
                        <div className="text-sm text-neutral-500 mt-1">
                          {property.beds} bed • {property.baths} bath
                        </div>
                        <div className="text-xs text-primary-600 mt-2 font-medium">
                          Click to view details →
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm px-4 py-3">
        <div className="text-xs font-medium text-neutral-500 mb-2">
          {viewMode === "neighborhoods" ? "Click a neighborhood to explore" : `${filteredProperties.length} properties`}
        </div>
        <div className="flex items-center gap-4 text-xs text-neutral-600">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-primary-600" />
            Active Listings
          </span>
        </div>
      </div>
    </div>
  )
}
