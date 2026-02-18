export interface Neighborhood {
  name: string
  slug: string
  description: string
  highlights: string[]
  priceRange: {
    min: number
    max: number
  }
  avgPrice: number
  propertyTypes: string[]
  coordinates: {
    lat: number
    lng: number
  }
  imageUrl: string
  region: "central" | "north-central" | "east" | "west" | "north" | "south"
}

export const neighborhoods: Neighborhood[] = [
  // Central Austin
  {
    name: "Zilker",
    slug: "zilker",
    description: "One of Austin's most iconic neighborhoods, Zilker is home to Barton Springs Pool, Zilker Park, and the beloved Zilker Botanical Garden. Tree-lined streets, charming bungalows, and an unbeatable location make this a perennial favorite for families and outdoor enthusiasts.",
    highlights: [
      "Walk to Barton Springs Pool and Zilker Park",
      "Close to Lady Bird Lake Hike-and-Bike Trail",
      "Eclectic mix of updated bungalows and new construction",
      "Home to Austin City Limits Music Festival",
      "Top-rated Austin ISD schools nearby"
    ],
    priceRange: { min: 650000, max: 2500000 },
    avgPrice: 1100000,
    propertyTypes: ["Single Family", "Bungalow", "New Construction"],
    coordinates: { lat: 30.2614, lng: -97.7702 },
    imageUrl: "/images/neighborhoods/zilker.jpg",
    region: "central"
  },
  {
    name: "Barton Hills",
    slug: "barton-hills",
    description: "Nestled between Zilker Park and the Barton Creek Greenbelt, Barton Hills offers a nature-lover's paradise with mature live oaks, hilly terrain, and direct access to some of Austin's best hiking and swimming. A quiet, established neighborhood with strong community ties.",
    highlights: [
      "Direct access to Barton Creek Greenbelt trails",
      "Minutes from Barton Springs Pool",
      "Quiet, family-friendly streets under live oak canopy",
      "Strong neighborhood association and community events",
      "Close to Zilker Park and Lady Bird Lake"
    ],
    priceRange: { min: 600000, max: 2000000 },
    avgPrice: 950000,
    propertyTypes: ["Single Family", "Ranch", "Mid-Century"],
    coordinates: { lat: 30.2500, lng: -97.7750 },
    imageUrl: "/images/neighborhoods/barton-hills.jpg",
    region: "central"
  },
  {
    name: "Travis Heights",
    slug: "travis-heights",
    description: "One of Austin's most desirable inner-city neighborhoods, Travis Heights features winding, tree-canopied streets, stunning views of downtown, and walkability to South Congress Avenue. The neighborhood blends historic charm with modern updates and a vibrant, creative community.",
    highlights: [
      "Walkable to South Congress (SoCo) shops and restaurants",
      "Stunning downtown skyline views from hillside properties",
      "Historic homes under towering live oaks",
      "Close to Lady Bird Lake and the Hike-and-Bike Trail",
      "Strong sense of community with active neighborhood association"
    ],
    priceRange: { min: 700000, max: 2500000 },
    avgPrice: 1200000,
    propertyTypes: ["Single Family", "Bungalow", "Contemporary"],
    coordinates: { lat: 30.2440, lng: -97.7473 },
    imageUrl: "/images/neighborhoods/travis-heights.jpg",
    region: "central"
  },
  {
    name: "South Congress (SoCo)",
    slug: "south-congress",
    description: "South Congress Avenue is Austin's most iconic street, famous for its eclectic mix of shops, restaurants, live music venues, and street art. Living on or near SoCo means being at the heart of Austin's cultural identity, with walkability to entertainment and Lady Bird Lake.",
    highlights: [
      "Austin's most iconic shopping and dining corridor",
      "Walkable to Lady Bird Lake and downtown",
      "Vibrant live music and nightlife scene",
      "Mix of condos, lofts, and single-family homes",
      "Strong property values and appreciation"
    ],
    priceRange: { min: 350000, max: 1800000 },
    avgPrice: 750000,
    propertyTypes: ["Condo", "Loft", "Townhome", "Single Family"],
    coordinates: { lat: 30.2488, lng: -97.7489 },
    imageUrl: "/images/neighborhoods/south-congress.jpg",
    region: "central"
  },
  {
    name: "Clarksville",
    slug: "clarksville",
    description: "One of Austin's oldest neighborhoods with deep historical roots, Clarksville is a walkable, tree-shaded enclave west of downtown. Known for its boutique dining scene (Jeffrey's, Josephine House), charming cottages, and proximity to Lake Austin Boulevard and MoPac.",
    highlights: [
      "Historic neighborhood with deep cultural roots",
      "Walk to world-class dining and boutique shopping",
      "Close to Lake Austin Boulevard and MoPac",
      "Charming cottages alongside modern townhomes",
      "One of Austin's most walkable neighborhoods"
    ],
    priceRange: { min: 600000, max: 3000000 },
    avgPrice: 1300000,
    propertyTypes: ["Single Family", "Townhome", "Historic Cottage"],
    coordinates: { lat: 30.2822, lng: -97.7611 },
    imageUrl: "/images/neighborhoods/clarksville.jpg",
    region: "central"
  },
  {
    name: "Tarrytown",
    slug: "tarrytown",
    description: "Austin's premier established neighborhood, Tarrytown is defined by its tree-lined streets, stately homes, and proximity to Lake Austin. With top-rated Casis Elementary, beautiful parks, and a quiet residential feel just minutes from downtown, Tarrytown is consistently one of Austin's most sought-after addresses.",
    highlights: [
      "Top-rated Casis Elementary (Austin ISD)",
      "Walk to Lake Austin and the Hike-and-Bike Trail",
      "Grand live oaks and established landscaping",
      "Close to downtown yet quiet and residential",
      "Mix of historic estates and tasteful new construction"
    ],
    priceRange: { min: 900000, max: 5000000 },
    avgPrice: 2200000,
    propertyTypes: ["Single Family", "Estate", "New Construction"],
    coordinates: { lat: 30.2966, lng: -97.7739 },
    imageUrl: "/images/neighborhoods/tarrytown.jpg",
    region: "central"
  },

  // North Central
  {
    name: "Hyde Park",
    slug: "hyde-park",
    description: "Austin's first suburb, Hyde Park is a beloved historic neighborhood known for its Victorian and Craftsman homes, towering pecan trees, and vibrant community spirit. Home to the famous Hyde Park Bar & Grill and annual Homes Tour, this walkable neighborhood is near UT Austin and offers a distinctly Austin lifestyle.",
    highlights: [
      "Austin's first planned suburb with rich history",
      "Victorian and Craftsman architecture throughout",
      "Walk to UT campus, restaurants, and coffee shops",
      "Annual Hyde Park Homes Tour and active community life",
      "Shady Pecan trees and established gardens"
    ],
    priceRange: { min: 500000, max: 1500000 },
    avgPrice: 775000,
    propertyTypes: ["Single Family", "Victorian", "Craftsman", "Duplex"],
    coordinates: { lat: 30.3055, lng: -97.7314 },
    imageUrl: "/images/neighborhoods/hyde-park.jpg",
    region: "north-central"
  },
  {
    name: "Mueller",
    slug: "mueller",
    description: "Built on the former Robert Mueller Municipal Airport, Mueller is Austin's award-winning New Urbanist community. With walkable streets, Mueller Lake Park, the Thinkery children's museum, and a mix of homes, shops, and restaurants, Mueller represents a new vision for urban Austin living.",
    highlights: [
      "Award-winning New Urbanist master-planned community",
      "Mueller Lake Park, farmers market, and Thinkery museum",
      "Walkable to restaurants, shops, and H-E-B",
      "Mix of single-family, townhomes, and condos",
      "Strong community events and neighborhood gathering spaces"
    ],
    priceRange: { min: 400000, max: 1200000 },
    avgPrice: 725000,
    propertyTypes: ["Single Family", "Townhome", "Condo", "Modern Farmhouse"],
    coordinates: { lat: 30.2981, lng: -97.7055 },
    imageUrl: "/images/neighborhoods/mueller.jpg",
    region: "north-central"
  },
  {
    name: "Rosedale",
    slug: "rosedale",
    description: "A quiet, tree-canopied neighborhood in central Austin, Rosedale is known for its charming mid-century homes, excellent Rosedale School, and proximity to Ramsey Park. Families flock here for the walkability, community feel, and access to nearby dining and shopping on Burnet Road.",
    highlights: [
      "Top-rated Rosedale School (Austin ISD)",
      "Tree-canopied streets with mid-century charm",
      "Walk to Ramsey Park and neighborhood shops",
      "Close to Burnet Road dining corridor",
      "Strong sense of community with active neighborhood groups"
    ],
    priceRange: { min: 500000, max: 1400000 },
    avgPrice: 750000,
    propertyTypes: ["Single Family", "Ranch", "Cottage"],
    coordinates: { lat: 30.3210, lng: -97.7408 },
    imageUrl: "/images/neighborhoods/rosedale.jpg",
    region: "north-central"
  },
  {
    name: "Allandale",
    slug: "allandale",
    description: "A beloved mid-century neighborhood in north-central Austin, Allandale features tree-lined streets, spacious lots, and a strong neighborhood identity. Popular with families and young professionals, Allandale offers proximity to the Burnet Road restaurant corridor and Northwest Recreation Center.",
    highlights: [
      "Mid-century ranch homes on generous lots",
      "Walk to Burnet Road restaurants and shops",
      "Northwest Recreation Center with pool",
      "Strong neighborhood association and events",
      "Central location with easy access to MoPac and 183"
    ],
    priceRange: { min: 450000, max: 1200000 },
    avgPrice: 680000,
    propertyTypes: ["Single Family", "Mid-Century Ranch", "New Construction"],
    coordinates: { lat: 30.3292, lng: -97.7381 },
    imageUrl: "/images/neighborhoods/allandale.jpg",
    region: "north-central"
  },
  {
    name: "North Loop",
    slug: "north-loop",
    description: "An eclectic, walkable neighborhood centered around the North Loop Boulevard commercial strip. Known for vintage shops, indie record stores, coffee houses, and a creative, community-oriented vibe. Affordable cottages and bungalows make this a favorite for first-time buyers and artists.",
    highlights: [
      "Eclectic vintage shops and indie businesses on North Loop Blvd",
      "Walkable to Epoch Coffee, Brentwood Social House, and more",
      "Affordable entry point in central Austin",
      "Creative, community-oriented neighborhood culture",
      "Close to UT campus and major employers"
    ],
    priceRange: { min: 350000, max: 900000 },
    avgPrice: 550000,
    propertyTypes: ["Single Family", "Cottage", "Bungalow", "Duplex"],
    coordinates: { lat: 30.3180, lng: -97.7225 },
    imageUrl: "/images/neighborhoods/north-loop.jpg",
    region: "north-central"
  },

  // East
  {
    name: "East Austin",
    slug: "east-austin",
    description: "East Austin has undergone a dramatic transformation, becoming one of Austin's most dynamic and culturally rich neighborhoods. Centered around East Cesar Chavez and East 6th Street, the area offers an exciting mix of craft breweries, acclaimed restaurants, art galleries, and a thriving creative scene alongside both historic homes and bold contemporary architecture.",
    highlights: [
      "Austin's most dynamic food, drink, and arts scene",
      "Mix of historic bungalows and striking modern architecture",
      "Walk to East 6th Street entertainment district",
      "Rapidly appreciating property values",
      "Close to downtown with excellent walkability"
    ],
    priceRange: { min: 400000, max: 1500000 },
    avgPrice: 750000,
    propertyTypes: ["Single Family", "Contemporary", "Townhome", "Condo"],
    coordinates: { lat: 30.2558, lng: -97.7268 },
    imageUrl: "/images/neighborhoods/east-austin.jpg",
    region: "east"
  },
  {
    name: "Holly",
    slug: "holly",
    description: "The Holly neighborhood, bordering Lady Bird Lake in East Austin, is a small but highly desirable area known for its proximity to the water, mature trees, and community gardens. With quick access to the Hike-and-Bike Trail and downtown, Holly offers urban convenience in a quieter setting.",
    highlights: [
      "Borders Lady Bird Lake with trail access",
      "Quick walk or bike ride to downtown",
      "Community gardens and green spaces",
      "Mix of renovated homes and new builds",
      "Quiet residential streets near urban amenities"
    ],
    priceRange: { min: 500000, max: 1400000 },
    avgPrice: 850000,
    propertyTypes: ["Single Family", "Bungalow", "New Construction"],
    coordinates: { lat: 30.2540, lng: -97.7320 },
    imageUrl: "/images/neighborhoods/holly.jpg",
    region: "east"
  },
  {
    name: "Govalle",
    slug: "govalle",
    description: "A rapidly evolving East Austin neighborhood, Govalle offers a blend of old and new with historic homes alongside modern infill development. Close to the Boggy Creek Greenbelt and with increasing dining and retail options, Govalle represents an exciting opportunity in East Austin.",
    highlights: [
      "Boggy Creek Greenbelt access for hiking and biking",
      "Growing restaurant and retail scene",
      "More affordable entry point in East Austin",
      "Mix of historic homes and modern development",
      "Close to Mueller development and I-35"
    ],
    priceRange: { min: 350000, max: 1000000 },
    avgPrice: 600000,
    propertyTypes: ["Single Family", "Cottage", "New Construction", "Townhome"],
    coordinates: { lat: 30.2600, lng: -97.7100 },
    imageUrl: "/images/neighborhoods/govalle.jpg",
    region: "east"
  },

  // West
  {
    name: "West Lake Hills",
    slug: "west-lake-hills",
    description: "An affluent incorporated city within the Austin metro, West Lake Hills is renowned for its Hill Country vistas, mature live oak canopy, and the highly acclaimed Eanes ISD school district. Large lots, custom estates, and a serene atmosphere make this one of the most prestigious addresses in Central Texas.",
    highlights: [
      "Top-rated Eanes ISD schools (Westlake High School)",
      "Panoramic Hill Country views from elevated lots",
      "Large custom estates on wooded acreage",
      "Minutes from downtown Austin via MoPac or Loop 360",
      "Wild Basin Wilderness Preserve access"
    ],
    priceRange: { min: 800000, max: 5000000 },
    avgPrice: 2000000,
    propertyTypes: ["Single Family", "Estate", "Custom Build"],
    coordinates: { lat: 30.3077, lng: -97.8012 },
    imageUrl: "/images/neighborhoods/west-lake-hills.jpg",
    region: "west"
  },
  {
    name: "Bee Cave",
    slug: "bee-cave",
    description: "A fast-growing community west of Austin, Bee Cave offers Hill Country living with convenient access to shopping, dining, and Lake Travis. The Hill Country Galleria and a growing list of restaurants and retailers make Bee Cave increasingly self-sufficient while maintaining its scenic, suburban feel.",
    highlights: [
      "Hill Country Galleria shopping and dining",
      "Easy access to Lake Travis recreation",
      "Top-rated Lake Travis ISD schools",
      "Master-planned communities with resort amenities",
      "Scenic Hill Country setting with nature preserves"
    ],
    priceRange: { min: 500000, max: 2500000 },
    avgPrice: 900000,
    propertyTypes: ["Single Family", "New Construction", "Estate"],
    coordinates: { lat: 30.3083, lng: -97.9400 },
    imageUrl: "/images/neighborhoods/bee-cave.jpg",
    region: "west"
  },
  {
    name: "Lakeway",
    slug: "lakeway",
    description: "A resort-style community on the shores of Lake Travis, Lakeway offers waterfront living, golf courses, and a laid-back Hill Country lifestyle. With its own municipal services, excellent schools, and abundant recreation, Lakeway is ideal for families and retirees seeking lakeside tranquility.",
    highlights: [
      "Waterfront properties on Lake Travis",
      "Multiple golf courses and country clubs",
      "Lake Travis ISD schools",
      "Resort-style amenities including marina and spa",
      "Active outdoor lifestyle with boating, golf, and hiking"
    ],
    priceRange: { min: 450000, max: 3000000 },
    avgPrice: 850000,
    propertyTypes: ["Single Family", "Waterfront", "Condo", "Estate"],
    coordinates: { lat: 30.3565, lng: -97.9488 },
    imageUrl: "/images/neighborhoods/lakeway.jpg",
    region: "west"
  },
  {
    name: "Steiner Ranch",
    slug: "steiner-ranch",
    description: "A premier master-planned community in northwest Austin, Steiner Ranch offers Hill Country views, Lake Austin access, and resort-style amenities. With excellent Leander ISD schools, pools, parks, and a strong family-oriented community, Steiner Ranch is a top choice for families seeking suburban comfort near the city.",
    highlights: [
      "Lake Austin access with community boat ramp",
      "Top-rated Leander ISD schools",
      "Multiple community pools, parks, and trails",
      "Hill Country views throughout the community",
      "Strong community events and family activities"
    ],
    priceRange: { min: 500000, max: 1800000 },
    avgPrice: 800000,
    propertyTypes: ["Single Family", "New Construction", "Estate"],
    coordinates: { lat: 30.3780, lng: -97.8920 },
    imageUrl: "/images/neighborhoods/steiner-ranch.jpg",
    region: "west"
  },

  // North
  {
    name: "Cedar Park",
    slug: "cedar-park",
    description: "A thriving suburb north of Austin, Cedar Park offers excellent schools, affordable new construction, and a growing list of dining and entertainment options. Home to the H-E-B Center and numerous parks, Cedar Park provides family-friendly living with easy access to Austin via 183A toll road.",
    highlights: [
      "Top-rated Leander ISD schools",
      "Affordable new construction options",
      "H-E-B Center for concerts and sports",
      "Numerous parks and trail systems",
      "Easy commute to Austin via 183A toll road"
    ],
    priceRange: { min: 350000, max: 900000 },
    avgPrice: 525000,
    propertyTypes: ["Single Family", "New Construction", "Townhome"],
    coordinates: { lat: 30.5015, lng: -97.8083 },
    imageUrl: "/images/neighborhoods/cedar-park.jpg",
    region: "north"
  },
  {
    name: "Round Rock",
    slug: "round-rock",
    description: "Known as the 'Sports Capital of Texas,' Round Rock is a booming suburb with excellent schools, diverse dining, and family entertainment. Home to Dell Technologies headquarters and numerous tech employers, Round Rock offers strong employment, affordable housing, and a high quality of life.",
    highlights: [
      "Award-winning Round Rock ISD schools",
      "Dell Technologies and major tech employers",
      "Round Rock Express minor league baseball",
      "Diverse dining scene and growing entertainment",
      "Affordable homes with strong value retention"
    ],
    priceRange: { min: 300000, max: 800000 },
    avgPrice: 475000,
    propertyTypes: ["Single Family", "New Construction", "Townhome"],
    coordinates: { lat: 30.5083, lng: -97.6789 },
    imageUrl: "/images/neighborhoods/round-rock.jpg",
    region: "north"
  },
  {
    name: "Georgetown",
    slug: "georgetown",
    description: "Named the best place to live in Texas by multiple publications, Georgetown features a beautifully preserved historic downtown square, excellent schools, and the stunning Blue Hole Park. Increasingly popular with families and retirees, Georgetown offers small-town charm with big-city proximity.",
    highlights: [
      "Award-winning historic downtown square",
      "Blue Hole Park and San Gabriel River access",
      "Georgetown ISD and excellent private schools",
      "Sun City active adult community",
      "Charming small-town feel with growing amenities"
    ],
    priceRange: { min: 280000, max: 750000 },
    avgPrice: 450000,
    propertyTypes: ["Single Family", "New Construction", "Active Adult"],
    coordinates: { lat: 30.6327, lng: -97.6773 },
    imageUrl: "/images/neighborhoods/georgetown.jpg",
    region: "north"
  },
  {
    name: "Pflugerville",
    slug: "pflugerville",
    description: "A diverse, family-friendly suburb northeast of Austin, Pflugerville offers affordable housing, good schools, and a growing commercial base. Lake Pflugerville provides recreation, and the Stone Hill Town Center offers shopping and dining, making Pflugerville increasingly self-sufficient.",
    highlights: [
      "Affordable homes close to Austin",
      "Pflugerville ISD schools",
      "Lake Pflugerville recreation area",
      "Stone Hill Town Center shopping and dining",
      "Diverse, welcoming community"
    ],
    priceRange: { min: 275000, max: 650000 },
    avgPrice: 400000,
    propertyTypes: ["Single Family", "New Construction", "Townhome"],
    coordinates: { lat: 30.4393, lng: -97.6200 },
    imageUrl: "/images/neighborhoods/pflugerville.jpg",
    region: "north"
  },

  // South
  {
    name: "South Austin",
    slug: "south-austin",
    description: "South Austin embodies the 'Keep Austin Weird' spirit with its eclectic mix of food trailers, live music venues, and independent shops along South Lamar and South First Street. The area offers diverse housing from funky cottages to modern builds, all with the laid-back South Austin vibe.",
    highlights: [
      "South Lamar and South First dining corridors",
      "Eclectic food trailer parks and live music",
      "Proximity to Zilker Park and Lady Bird Lake",
      "Diverse housing options at various price points",
      "Quintessential 'Keep Austin Weird' neighborhood"
    ],
    priceRange: { min: 400000, max: 1500000 },
    avgPrice: 700000,
    propertyTypes: ["Single Family", "Cottage", "Condo", "Townhome"],
    coordinates: { lat: 30.2350, lng: -97.7650 },
    imageUrl: "/images/neighborhoods/south-austin.jpg",
    region: "south"
  },
  {
    name: "Bouldin Creek",
    slug: "bouldin-creek",
    description: "A trendy south Austin neighborhood named for the creek that runs through it, Bouldin Creek is walkable to South First Street's vibrant food and bar scene. The area has seen significant new development while retaining its eclectic, creative character with a mix of renovated homes and modern builds.",
    highlights: [
      "Walk to South First Street dining and nightlife",
      "Bouldin Creek Greenbelt access",
      "Mix of vintage charm and modern architecture",
      "Close to downtown and Lady Bird Lake",
      "Strong investment potential in 78704 zip code"
    ],
    priceRange: { min: 500000, max: 1800000 },
    avgPrice: 900000,
    propertyTypes: ["Single Family", "Duplex", "Townhome", "New Construction"],
    coordinates: { lat: 30.2505, lng: -97.7555 },
    imageUrl: "/images/neighborhoods/bouldin-creek.jpg",
    region: "south"
  },
  {
    name: "Sunset Valley",
    slug: "sunset-valley",
    description: "A small incorporated city within the Austin metro, Sunset Valley is centered around the Sunset Valley Village shopping center and Brodie Oaks. With its own city services and no city property tax, Sunset Valley offers a unique value proposition for homeowners seeking a central south Austin location.",
    highlights: [
      "No city property tax (incorporated city)",
      "Central south Austin location near Brodie Oaks",
      "Easy access to MoPac and South Lamar",
      "Shopping and dining at your doorstep",
      "Small-town governance with big-city access"
    ],
    priceRange: { min: 400000, max: 1000000 },
    avgPrice: 650000,
    propertyTypes: ["Single Family", "Townhome"],
    coordinates: { lat: 30.2260, lng: -97.7985 },
    imageUrl: "/images/neighborhoods/sunset-valley.jpg",
    region: "south"
  }
]

// Helper function to get neighborhoods by region
export function getNeighborhoodsByRegion(region: Neighborhood["region"]): Neighborhood[] {
  return neighborhoods.filter((n) => n.region === region)
}

// Helper function to get a neighborhood by slug
export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug)
}

// Region labels for display
export const regionLabels: Record<Neighborhood["region"], string> = {
  central: "Central Austin",
  "north-central": "North Central",
  east: "East Austin",
  west: "West Austin",
  north: "North Austin",
  south: "South Austin"
}
