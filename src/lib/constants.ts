/**
 * Site-wide constants
 */

export const SITE_CONFIG = {
  name: "Birdsong Realty Team",
  shortName: "Birdsong Realty",
  tagline: "Austin Homes & Real Estate",
  description:
    "Patrick Birdsong and the Birdsong Realty Team at Keller Williams help buyers, sellers, and investors navigate the Austin, Texas real estate market.",
  url: "https://birdsongrealtyteam.com",
  address: {
    city: "Austin",
    state: "TX",
  },
  hours: "9am - 6pm CST, Mon-Sat",
  responseTime: "within 24 hours",
} as const

export const NAV_LINKS = [
  {
    href: "/portfolio",
    label: "Portfolio",
    children: [
      { href: "/portfolio", label: "All Properties" },
      { href: "/austin-luxury-homes", label: "Luxury Homes" },
      { href: "/austin-new-construction", label: "New Construction" },
      { href: "/austin-waterfront-homes", label: "Waterfront Homes" },
      { href: "/austin-condos-townhomes", label: "Condos & Townhomes" },
      { href: "/austin-investment-properties", label: "Investment Properties" },
      { href: "/austin-first-time-buyers", label: "First-Time Buyers" },
      { href: "/austin-relocation", label: "Relocation Guide" },
    ],
  },
  { href: "/seller-services", label: "Sell" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/market", label: "Market" },
  {
    href: "/blog",
    label: "Resources",
    children: [
      { href: "/blog", label: "Blog" },
      { href: "/guides", label: "Guides" },
      { href: "/tools", label: "Tools & Calculators" },
      { href: "/faq", label: "FAQ" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const

export const ANIMATION = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
  },
  easing: {
    outExpo: [0.16, 1, 0.3, 1],
    outQuart: [0.25, 1, 0.5, 1],
    inOutSine: [0.37, 0, 0.63, 1],
  },
  stagger: {
    fast: 0.05,
    normal: 0.08,
    slow: 0.12,
  },
} as const
