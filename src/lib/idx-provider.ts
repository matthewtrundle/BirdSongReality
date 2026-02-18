/**
 * IDX/MLS Provider Interface
 *
 * Austin uses ACTRIS / Unlock MLS.
 * Approved IDX vendors: IDX Broker, Showcase IDX, Ultimate IDX.
 *
 * This file provides the interface and stubs for future IDX vendor integration.
 * When Patrick selects a vendor and gets MLS access configured, implement the
 * concrete provider class below.
 */

export interface IDXProperty {
  mlsNumber: string
  address: string
  city: string
  state: string
  zip: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  lotSize?: string
  yearBuilt?: number
  propertyType: string
  status: "active" | "pending" | "sold" | "withdrawn"
  listDate: string
  photos: string[]
  description: string
  agent: {
    name: string
    brokerage: string
    phone: string
    email: string
  }
  features: string[]
  neighborhood?: string
  lat?: number
  lng?: number
}

export interface IDXSearchParams {
  city?: string
  zip?: string
  minPrice?: number
  maxPrice?: number
  minBedrooms?: number
  minBathrooms?: number
  propertyType?: string
  status?: string
  sort?: "price_asc" | "price_desc" | "newest" | "sqft"
  page?: number
  limit?: number
}

export interface IDXSearchResult {
  properties: IDXProperty[]
  total: number
  page: number
  totalPages: number
}

export interface IDXProvider {
  search(params: IDXSearchParams): Promise<IDXSearchResult>
  getProperty(mlsNumber: string): Promise<IDXProperty | null>
  getFeatured(limit?: number): Promise<IDXProperty[]>
}

/**
 * Stub implementation - returns empty results.
 * Replace with actual IDX vendor SDK when configured.
 */
export class StubIDXProvider implements IDXProvider {
  async search(_params: IDXSearchParams): Promise<IDXSearchResult> {
    console.log("[IDX] Search called - IDX not configured yet")
    return { properties: [], total: 0, page: 1, totalPages: 0 }
  }

  async getProperty(_mlsNumber: string): Promise<IDXProperty | null> {
    console.log("[IDX] getProperty called - IDX not configured yet")
    return null
  }

  async getFeatured(_limit = 6): Promise<IDXProperty[]> {
    console.log("[IDX] getFeatured called - IDX not configured yet")
    return []
  }
}

// Export a singleton instance
export const idxProvider: IDXProvider = new StubIDXProvider()
