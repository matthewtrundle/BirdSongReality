# Birdsong Realty — Master Site Improvement Plan

**Generated:** February 17, 2026
**Sources:** 7-agent swarm audit (Competitive Research, UX/UI Architecture, Visual Design & Polish, Accessibility, Performance & SEO, Content & Conversion, Mobile & Responsive)

---

## Priority Tiers

- **P0 — CRITICAL:** Broken functionality, legal compliance, data integrity. Fix before launch.
- **P1 — HIGH:** Major conversion impact, SEO impact, or user experience degradation.
- **P2 — MEDIUM:** Polish, consistency, and optimization improvements.
- **P3 — LOW:** Nice-to-haves, future enhancements.

---

## P0 — CRITICAL (Fix Immediately)

### 1. Fix URL Typo in site-config.json
**File:** `src/data/site-config.json` line 7
**Issue:** `"url": "https://birdsongreatyteam.com"` — missing "l" in "realty"
**Fix:** Change to `"https://birdsongrealtyteam.com"`
**Why:** Affects canonical URLs, structured data, social sharing, and SEO signals across the entire site.

### 2. Replace Fake Team Members on About Page
**File:** `src/app/about/page.tsx` lines 14-33
**Issue:** Team members are "Sarah Mitchell", "Michael Torres", "Jennifer Chen" — placeholder names that don't match the actual agent, Patrick Birdsong.
**Fix:** Replace with real team member data. Patrick Birdsong should be the primary featured agent.
**Why:** Fake team data on a live site destroys credibility instantly.

### 3. Fix Broken Guide Links (404s)
**File:** `src/app/guides/page.tsx`
**Issues:**
- Line 50: `href: "/guides/financing-coastal-property"` → should be `"/guides/financing-austin-property"`
- Line 67: `href: "/guides/vacation-rental-guide"` → should be `"/guides/short-term-rental-guide"`
**Why:** These produce 404 errors and waste crawl budget.

### 4. Fix Footer Neighborhood Links (404s)
**File:** `src/components/layout/footer.tsx` lines 19-26
**Issue:** Links to `/neighborhoods/downtown-austin`, `/neighborhoods/lakeway`, `/neighborhoods/westlake` — none of these pages exist. Actual pages are: zilker, tarrytown, hyde-park, mueller, west-lake-hills, travis-heights, south-congress, east-austin.
**Fix:** Replace footer neighborhood links with the 8 actual neighborhood pages.

### 5. Fix Broken #contact-form Anchor Links
**Files:**
- `src/app/market/page.tsx` line ~212: "Request Analysis" links to `#contact-form`
- `src/app/faq/page.tsx` line ~187: "Contact Us" links to `#contact-form`
- `src/app/guides/page.tsx` line ~235: "Contact Us" links to `#contact-form`
- `src/components/sections/cta-section.tsx` line ~131: "Request Listings" links to `#contact-form`
**Issue:** These pages don't have a `<LeadFormSection>` component, so the anchor goes nowhere.
**Fix:** Either add `<LeadFormSection />` to each page, or change href to `/contact`.

### 6. Fix Sitemap Wrong Path
**File:** `src/app/sitemap.ts` line ~43
**Issue:** References `/guides/financing-your-home` — page doesn't exist.
**Fix:** Change to `/guides/financing-austin-property`.

### 7. Consolidate Conflicting Statistics
**Issue:** Numbers conflict across files:

| Stat | Hero Section | Sellers Section | site-config.json | testimonials.json |
|------|-------------|-----------------|------------------|-------------------|
| Properties | 250+ families | — | 300+ | 500 |
| Volume | $85M+ | $45M+ last year | — | — |
| Satisfaction | — | 100% | 98% | 98% |
| Experience | — | — | 10 years | 15 years |

**Fix:** Create a single source of truth for all statistics. Add a `stats` section to `site-config.json` and reference it everywhere. Choose the correct numbers.

### 8. Fill Remaining Placeholder Data
**File:** `src/data/site-config.json`
- `"license": "TODO-REPLACE-license-number"` — TREC requires license display (legal compliance)
- `"phone": "TODO-REPLACE-phone-number"` — breaks call CTA and footer
- `"street": "TBD"` — hurts local SEO
**Action:** Owner must provide real values.

---

## P1 — HIGH (Major Impact)

### 9. Compress Hero Videos (88MB → ~15MB total)
**Files:** `public/hero-cinematic.mp4` (27MB), `public/hero-professional.mp4` (16MB), `public/hero-action.mp4` (45MB)
**Issue:** All three videos preload on homepage with `preload="auto"`. Total: 88MB.
**Fix:**
- Compress each to 3-5MB using H.265/VP9 at 720p
- Change `preload="auto"` to `preload="none"` on videos 2 and 3
- Add `poster="/images/hero-poster.jpg"` to all video elements (file exists but isn't referenced)
- Lazy-load the WaveBallSection video on scroll intersection
**Impact:** LCP improvement from ~8s+ to ~2s on average connections.

### 10. Remove or Refactor template.tsx Client Boundary
**File:** `src/app/template.tsx`
**Issue:** Wraps every page in `"use client"` + `<PageTransition>`, forcing all pages to hydrate as client components. This ships framer-motion JS for every page including static content (blog, guides, FAQ, legal).
**Fix:** Remove `template.tsx` entirely, or make page transitions opt-in per-page.
**Impact:** Enables server-side rendering for 40+ content pages. Major bundle size reduction.

### 11. Make Orphan Pages Discoverable (14+ pages hidden)
**Issue:** Guides, Tools, FAQ, Reviews, Events, Places, Activities, Best Of, Compare, Living scenarios — none accessible from primary nav or footer.
**Fix in `src/lib/constants.ts`:**
- Remove "Home" from nav (logo already links home)
- Add "Resources" dropdown with children: Guides, Tools, FAQ, Reviews
- Consider "Explore Austin" dropdown: Neighborhoods, Things to Do, Events, Living
**Fix in `src/components/layout/footer.tsx`:**
- Add Guides, Tools, Reviews to footer Resources column

### 12. Add Lead Forms to Content Pages
**Issue:** Neighborhoods, Market, Blog, FAQ, Guides, Tools pages have no lead capture.
**Fix:** Add `<LeadFormSection />` to the bottom of every content page.
**Impact:** These are high-intent research pages — perfect moment for conversion.

### 13. Add Property Search to Homepage Hero
**File:** `src/components/sections/hero-section.tsx`
**Issue:** No path for buyer visitors to search for properties. Hero CTAs are seller-oriented ("Get Your Home Valuation") and backward-looking ("View Sold Properties"). The `IdxSearchWidget` component exists but isn't used.
**Fix:** Add a search bar or prominent "Search Homes for Sale" CTA to the hero area.

### 14. Add Seller Option to Lead Form
**File:** `src/components/forms/lead-form.tsx` lines 223-233
**Issue:** Property Type Interest dropdown only has buyer options. No way for sellers to indicate intent.
**Fix:** Add "Selling My Home" option, or add an "I'm interested in" field with Buying/Selling/Both.

### 15. Replace CSS background-image with next/image in SEOPageHero
**File:** `src/components/seo/seo-page-hero.tsx` lines 36-38
**Issue:** Uses `style={{ backgroundImage: url(...) }}` which bypasses Next.js image optimization. This hero component is used on nearly every content page — major LCP impact.
**Fix:** Replace with `<Image fill priority sizes="100vw" />`.

### 16. Replace Raw `<img>` Tags with next/image
**Files:**
- `src/components/seo/neighborhood-card.tsx` line 33-38
- `src/components/ui/card.tsx` lines 78-93 (CardImage)
**Fix:** Replace with `next/image` using `fill` and proper `sizes` attributes.

### 17. Use next/dynamic for Heavy Components
**Issue:** Zero uses of `next/dynamic` in the codebase. Heavy components loaded eagerly:
- Three.js components (Canvas, OrbitControls — 500KB+ gzipped)
- ChatWidget (AI SDK + framer-motion)
- Calculator tools (6 client-side pages)
**Fix:** `next/dynamic` with `{ ssr: false }` for ChatWidget, Three.js components, and calculators.

### 18. Fix Keyboard Navigation on Dropdown Menu
**File:** `src/components/layout/header.tsx` lines 108-183
**Issue:** Portfolio dropdown triggered by `onMouseEnter`/`onMouseLeave` only. No keyboard support (`onKeyDown`, `aria-expanded`, `aria-haspopup`). Keyboard users cannot access 7 sub-navigation items.
**Fix:** Add keyboard handlers (Enter/Space to open, Escape to close, Arrow keys to navigate items) and ARIA attributes.

### 19. Add Pause Control to Testimonial Carousel
**File:** `src/components/sections/testimonials.tsx` lines 44-55
**Issue:** Auto-advances every 6 seconds with no pause button. WCAG 2.1 SC 2.2.2 requires a mechanism to pause auto-updating content.
**Fix:** Add a pause/play button.

---

## P2 — MEDIUM (Polish & Optimization)

### 20. Brighten Accent Gold Color
**File:** `src/app/globals.css` lines 20-23
**Issue:** Current gold `#8B6914` reads as dark ochre, not luxury gold. Compare: Rolex `#A37E2C`, The Agency `#C9B06B`.
**Fix:** Brighten accent-400 to ~`rgb(190 160 90)` and accent-500 to ~`rgb(168 138 62)`.

### 21. Reduce Button Hover Scale
**File:** `src/components/ui/button.tsx` line 10
**Issue:** `hover:scale-105` (5%) feels playful, not luxury. Top luxury sites use 1-2%.
**Fix:** Change to `hover:scale-[1.02]`.

### 22. Compress Hero Animation Timeline
**File:** `src/components/sections/hero-section.tsx` lines 59-133
**Issue:** 6 sequentially-delayed elements take ~2.5s total. Core content should appear within 1s.
**Fix:** Compress delays: overline 0.1s, headline 0.2s, subhead 0.4s, CTA 0.5s, proof strip 0.7s.

### 23. Remove Infinite Pulse/Float Animations
**Files:**
- `src/app/globals.css` lines 394-419 (`animate-float`, `animate-pulse-glow`)
- `src/components/sections/cta-section.tsx` lines 163-174 (pulsing "Available 7 days")
**Issue:** Pulsing glows and floating animations feel like SaaS/gaming, not luxury real estate.
**Fix:** Remove or restrict to very specific decorative use. Replace with static, subtly-styled elements.

### 24. Fix CTA Button Variant Definition
**File:** `src/components/ui/button.tsx` line 22-23
**Issue:** CTA variant uses `bg-secondary-500` (warm tan) but is always overridden inline to `bg-accent-500`.
**Fix:** Redefine CTA variant to `bg-accent-500 text-primary-950 hover:bg-accent-400` as its default.

### 25. Simplify Value Props 3D Card Animation
**File:** `src/components/sections/value-props.tsx` lines 37-49, 150
**Issue:** `rotateY` with `perspective: 1000` feels like a tech demo, not a luxury brand.
**Fix:** Replace with simpler `opacity + y` entrance animation.

### 26. Standardize Section Spacing
**Issue:** Some sections use `<Section spacing="...">`, others use raw `py-` classes.
**Files:** `wave-ball-section.tsx`, `sellers-section.tsx`, `value-props.tsx`
**Fix:** Standardize all sections to use the `Section` component with the `spacing` prop.

### 27. Progressive Heading Font Weights
**File:** `src/app/globals.css` lines 258-265
**Issue:** All headings h1-h6 use `font-weight: 400`. Small headings (h4-h6) in Playfair Display at 400 look wispy.
**Fix:** h1-h2: 400, h3-h4: 500, h5-h6: 600.

### 28. Remove Redundant Google Fonts Preconnect
**File:** `src/app/layout.tsx` lines 83-85
**Issue:** `next/font/google` already self-hosts fonts at build time. Preconnect hints to Google Fonts CDN are unused.
**Fix:** Remove both `<link rel="preconnect">` tags.

### 29. Fix Blog Category Pills (Non-Functional)
**File:** `src/app/blog/page.tsx` lines 121-130
**Issue:** Category pills render as `<span>` with `cursor-pointer` but no onClick or Link. They appear clickable but do nothing.
**Fix:** Either link to filtered views or remove interactive styling.

### 30. Add Contact Info to Contact Page
**File:** `src/app/contact/page.tsx`
**Issue:** The dedicated Contact page shows location and hours but no phone number or email.
**Fix:** Add phone with click-to-call and email address.

### 31. Fix Mobile Hamburger Touch Target
**File:** `src/components/layout/header.tsx` line 236
**Issue:** Touch target is ~40x40px (p-2 around 24x24 icon). Apple recommends 44x44px minimum.
**Fix:** Increase to `p-3`.

### 32. Consider Removing Lenis Smooth Scroll
**File:** `src/components/providers/lenis-provider.tsx`
**Issue:** Scroll hijacking is a UX anti-pattern (breaks native behavior, accessibility issues, mobile performance). Creates a client boundary wrapping the entire app.
**Fix:** Remove Lenis. Use native CSS `scroll-behavior: smooth` if needed.

### 33. Convert Unnecessary Client Components to Server Components
**Issue:** 63 files use `"use client"`. Several don't need it:
- `src/components/layout/footer.tsx` — static links, no interactivity
- `src/components/seo/structured-data.tsx` — can use raw `<script>` tags
- `src/components/seo/faq-accordion.tsx` — can use native `<details>`/`<summary>`
**Fix:** Audit each and convert where possible.

### 34. Add Section Transition Dividers
**Issue:** Sections stack with hard color boundaries. No visual transitions between sections.
**Fix:** Add subtle gradient lines between light sections (`h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent`) and gradient overlaps before dark sections.

### 35. Break Up Consecutive Dark Sections
**Issue:** SellersSection (primary-950) + Testimonials (primary-900) create a heavy dark block.
**Fix:** Make Testimonials use `section-cream` variant, or insert a light section between them.

---

## P3 — LOW (Future Enhancements)

### 36. Add Neighborhood Showcase to Homepage
Create a new section highlighting 4-6 popular Austin neighborhoods with links to their pages. "Where to live" is the primary question for most prospects.

### 37. Add Buyer-Focused Section to Homepage
The homepage has a dedicated SellersSection but no BuyersSection. Add a buyer-focused section between ValueProps and SellersSection.

### 38. Add CTAs to Dead-End Sections
WaveBallSection and ValueProps sections have no calls-to-action. Add "Explore Austin Neighborhoods" to WaveBall and relevant CTAs to ValueProps.

### 39. Update Blog Content to 2026
All blog posts are from 2024-2025. Add fresh 2026 content, especially market updates.

### 40. Add BreadcrumbList Structured Data
Visual breadcrumbs exist but no corresponding JSON-LD schema. Google uses breadcrumb markup for rich results.

### 41. Add Canonical URLs to All Pages
No `alternates: { canonical: '/path' }` metadata is defined anywhere. Add explicit canonicals to prevent duplicate content issues.

### 42. Add School Data to Neighborhood Pages
School information is the top factor for family home buyers. Add structured school data to each neighborhood profile.

### 43. Create Newsletter Subscription Flow
Blog "Subscribe to Updates" links to generic contact page. Create a dedicated email capture form.

### 44. Add Awards/Certifications Section
No visible NAR designations, KW awards, or media mentions. Add an awards/recognition bar or logo cloud.

### 45. Use Gold Text Gradient for Premium Elements
`.text-gradient-gold` is defined in globals.css but never used. Apply to hero overline or stat values for visual richness.

---

## Implementation Order

**Phase 1 — Data Integrity & Broken Links (P0)**
Items 1-8. Requires real data from the business owner (phone, license, team info, correct stats).

**Phase 2 — Performance & Core Architecture (P1)**
Items 9-10, 15-17, 32-33. Video compression, template.tsx removal, image optimization, code splitting.

**Phase 3 — Navigation & Discovery (P1)**
Items 11-13. Restructure nav, add Resources dropdown, surface orphan pages.

**Phase 4 — Conversion Optimization (P1)**
Items 12, 14, 5 (add lead forms). Fix lead capture across the site.

**Phase 5 — Accessibility (P1)**
Items 18-19. Keyboard navigation, carousel pause control.

**Phase 6 — Visual Polish (P2)**
Items 20-28, 34-35. Color refinement, animation tightening, spacing consistency.

**Phase 7 — Content & UX Refinements (P2-P3)**
Items 29-31, 36-45. Blog categories, contact info, neighborhood showcase, SEO enhancements.

---

## Agent Grades Summary

| Dimension | Grade | Key Finding |
|-----------|-------|-------------|
| Content & Conversion | B- | Good funnel structure, but seller-biased CTAs, inconsistent stats, fake team data |
| Performance & SEO | D+ | 88MB video, template.tsx client boundary, 63 client components, no code splitting |
| UX/UI Architecture | B | Strong homepage flow, but 14+ orphan pages, broken links everywhere, no property search |
| Visual Design | B+ | Excellent motion philosophy and color concept, needs gold brightening and animation restraint |
| Overall | B- | Strong foundation, significant data integrity and performance issues holding it back |
