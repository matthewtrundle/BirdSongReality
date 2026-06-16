/** Shared copy + data for every ROA landing-page variant. */

export const economics = [
  { value: "85/15", label: "Commission split", sub: "until you hit your annual cap" },
  { value: "$14,000", label: "Annual cap", sub: "then you keep 100% of commissions" },
  { value: "100%", label: "Post-cap", sub: "every dollar after cap is yours" },
  { value: "Equity", label: "Ownership", sub: "earn stock as the company grows" },
] as const

export const pillars = [
  {
    title: "Empowerment",
    body: "Get the resources, technology, and support you need to win — to achieve success, build equity, and foster meaningful client relationships.",
  },
  {
    title: "Innovation",
    body: "Cutting-edge tools and platforms that streamline the busywork and elevate the experience for you and your clients alike.",
  },
  {
    title: "Integrity",
    body: "Trust is the foundation of everything we do. We earn it by consistently doing what's right — guiding every decision toward your long-term success.",
  },
  {
    title: "Community Impact",
    body: "We're dedicated to making a positive difference through meaningful initiatives that strengthen and uplift the communities we serve.",
  },
] as const

export const steps = [
  {
    title: "Have a conversation",
    body: "Book a confidential call. We'll learn about your business and where you want to take it — no pressure, no pitch.",
  },
  {
    title: "See the numbers",
    body: "We'll walk through the economics, the tools, and exactly what support looks like, side-by-side with where you are today.",
  },
  {
    title: "Make the move",
    body: "When it's a fit, we handle the transition and get you onboarded with the team, systems, and coaching from day one.",
  },
] as const

export const teamSupport = [
  "1-on-1 coaching and business planning",
  "Lead support and proven systems",
  "Weekly accountability with a real team",
  "Revenue share — income beyond your own deals",
  "Equity ownership as the company grows",
] as const

export const proofStats = [
  { value: "85/15", label: "Split to cap" },
  { value: "$14k", label: "Annual cap" },
  { value: "Equity", label: "Real ownership" },
  { value: "Rev share", label: "Beyond your deals" },
] as const
