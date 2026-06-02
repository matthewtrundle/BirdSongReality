import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <ValueProp />
      <RoaPartnership />
      <Neighborhoods />
      <JoinTeam />
      <FinalCta />
    </>
  )
}

/* ============================================================
   1. HERO — Navy gradient, big H1, Buy/Sell/Rent search pill
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white">
      {/* Subtle radial accent for airy depth */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 78% 0%, rgb(210 220 240) 0%, transparent 60%)",
        }}
      />
      <div className="container-x relative grid gap-12 py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-32">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-accent-600">
            Austin, Texas · Realty of America
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-navy-700 sm:text-5xl lg:text-6xl">
            Find your perfect Austin home.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            Patrick Birdsong helps buyers, sellers, and renters move
            confidently through Austin&apos;s real estate market — backed by
            the modern tools and national network of Realty of America.
          </p>

          {/* Search pill */}
          <div className="mt-10 max-w-2xl rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl shadow-navy-900/10">
            {/* Buy / Sell / Rent toggle */}
            <div className="flex gap-1 px-2 pt-1">
              <button className="rounded-pill bg-accent-500 px-5 py-2 text-sm font-semibold text-white">
                Buy
              </button>
              <button className="rounded-pill px-5 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-100">
                Sell
              </button>
              <button className="rounded-pill px-5 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-100">
                Rent
              </button>
            </div>

            <div className="mt-2 flex items-center gap-2 p-2">
              <input
                type="text"
                placeholder="Address, neighborhood, city, or ZIP"
                className="flex-1 rounded-pill bg-neutral-50 px-5 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:outline-2 focus:outline-accent-500"
              />
              <button className="rounded-pill bg-navy-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-navy-700">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right column: stat block — light card */}
        <div className="hidden lg:block">
          <div className="ml-auto max-w-sm rounded-2xl border border-neutral-200 bg-white p-8 shadow-card">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight text-navy-700">600+</span>
              <span className="text-neutral-500">families served</span>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              From first-time buyers to luxury sellers, Birdsong has guided
              hundreds of Austin families home over the last decade.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-neutral-200 pt-6">
              <div>
                <div className="text-2xl font-bold text-navy-700">$250M+</div>
                <div className="text-xs text-neutral-500">in transactions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-700">5.0★</div>
                <div className="text-xs text-neutral-500">average rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   2. FEATURED LISTINGS — 3-up cards
   ============================================================ */
const listings = [
  {
    price: "$1,850,000",
    address: "1234 Travis Heights Dr",
    location: "Travis Heights · Austin, TX",
    beds: 4,
    baths: 3,
    sqft: 3200,
    tag: "New Listing",
  },
  {
    price: "$895,000",
    address: "456 Mueller Ln",
    location: "Mueller · Austin, TX",
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    tag: "Open House",
  },
  {
    price: "$2,450,000",
    address: "789 Westlake Cv",
    location: "West Lake Hills · Austin, TX",
    beds: 5,
    baths: 4.5,
    sqft: 4800,
    tag: "Featured",
  },
]

function FeaturedListings() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured Austin Listings
            </h2>
            <p className="mt-2 text-neutral-500">
              Hand-picked homes from the Birdsong portfolio.
            </p>
          </div>
          <Link
            href="/buy"
            className="hidden text-sm font-semibold text-navy-600 hover:text-navy-700 sm:inline-block"
          >
            View all listings →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {listings.map((l) => (
            <article
              key={l.address}
              className="group overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:shadow-lg"
            >
              {/* Photo placeholder — gradient until real photos drop in */}
              <div
                className="aspect-[4/3] bg-gradient-to-br from-navy-200 to-navy-400"
                role="img"
                aria-label={`${l.address} photo`}
              >
                <div className="flex h-full items-start justify-between p-4">
                  <span className="rounded-pill bg-white/90 px-3 py-1 text-xs font-semibold text-navy-700">
                    {l.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-2xl font-bold tracking-tight text-navy-700">
                  {l.price}
                </div>
                <div className="mt-1 text-sm font-medium text-neutral-900">
                  {l.address}
                </div>
                <div className="text-sm text-neutral-500">{l.location}</div>
                <div className="mt-4 flex gap-4 border-t border-neutral-200 pt-4 text-sm text-neutral-600">
                  <span>
                    <strong className="text-neutral-900">{l.beds}</strong> bed
                  </span>
                  <span>
                    <strong className="text-neutral-900">{l.baths}</strong> bath
                  </span>
                  <span>
                    <strong className="text-neutral-900">
                      {l.sqft.toLocaleString()}
                    </strong>{" "}
                    sqft
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   3. VALUE PROP — Centered headline + 3-up cards (Buy / Sell / Rent)
   ============================================================ */
const valueProps = [
  {
    title: "Buy",
    body: "Find the home you'll grow into. Birdsong helps Austin buyers cut through noise, win in tight markets, and move with confidence.",
    cta: "Start your search",
    href: "/buy",
  },
  {
    title: "Sell",
    body: "Top-dollar marketing, professional photography, and a national buyer network through Realty of America. Your listing, everywhere it matters.",
    cta: "Get your home value",
    href: "/sell",
  },
  {
    title: "Rent",
    body: "Whether you're between homes or new to Austin, we'll help you find a rental that fits your life — without the typical Austin headache.",
    cta: "Browse rentals",
    href: "/rent",
  },
]

function ValueProp() {
  return (
    <section className="section-y section-mute">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A smarter way to buy, sell, & rent.
          </h2>
          <p className="mt-3 text-lg text-neutral-600">
            Expert local agents + the modern tools of Realty of America = a
            better real estate experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {valueProps.map((v) => (
            <div
              key={v.title}
              className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold tracking-tight text-navy-700">
                {v.title}
              </h3>
              <p className="mt-3 text-neutral-600">{v.body}</p>
              <Link
                href={v.href}
                className="mt-6 inline-flex rounded-pill border border-neutral-200 px-5 py-2 text-sm font-semibold text-navy-600 transition hover:border-navy-600 hover:bg-navy-50"
              >
                {v.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   4. ROA PARTNERSHIP — Dark navy strip, the "we joined ROA" moment
   ============================================================ */
function RoaPartnership() {
  return (
    <section className="section-navy-deep section-y">
      <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Built by REALTORS®
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Birdsong is now part of Realty of America.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            We joined Realty of America to bring our Austin clients the
            national network, modern tooling, and competitive economics of a
            cloud-first brokerage — without giving up the local team they
            already trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/why-roa"
              className="rounded-pill bg-white px-6 py-3 text-sm font-semibold text-navy-700 transition hover:bg-neutral-100"
            >
              Why we made the move
            </Link>
            <Link
              href="/join"
              className="rounded-pill border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Join us at ROA
            </Link>
          </div>
        </div>

        {/* Right: stat panel */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid grid-cols-2 gap-6">
            <Stat label="Commission split" value="85/15" />
            <Stat label="Annual cap" value="$14k" />
            <Stat label="Post-cap" value="100%" />
            <Stat label="Markets" value="22+" />
          </div>
          <p className="mt-6 text-sm text-white/60">
            Plus revenue share, equity, and modern agent tools.
          </p>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-3xl font-bold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
        {label}
      </div>
    </div>
  )
}

/* ============================================================
   5. NEIGHBORHOODS — 4×2 grid mirroring ROA's "Trending Cities"
   ============================================================ */
const neighborhoods = [
  { name: "Zilker", slug: "zilker" },
  { name: "Tarrytown", slug: "tarrytown" },
  { name: "Hyde Park", slug: "hyde-park" },
  { name: "Mueller", slug: "mueller" },
  { name: "West Lake Hills", slug: "west-lake-hills" },
  { name: "Travis Heights", slug: "travis-heights" },
  { name: "South Congress", slug: "south-congress" },
  { name: "East Austin", slug: "east-austin" },
]

function Neighborhoods() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore Austin&apos;s top neighborhoods.
          </h2>
          <p className="mt-3 text-neutral-600">
            From Hill Country quiet to East Side energy — find where you belong.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {neighborhoods.map((n, i) => (
            <Link
              key={n.slug}
              href={`/neighborhoods/${n.slug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              style={{
                background: `linear-gradient(135deg, hsl(${
                  210 + i * 12
                } 50% ${30 + (i % 3) * 8}%) 0%, hsl(${
                  220 + i * 8
                } 60% ${20 + (i % 3) * 6}%) 100%)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-semibold text-white">{n.name}</h3>
                <p className="text-xs text-white/70">Austin, TX</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   6. JOIN TEAM — recruiting block (the "ROA-as-us" hook)
   ============================================================ */
const joinReasons = [
  {
    title: "Better economics",
    body: "85/15 split, $14k cap, 100% post-cap. Keep more of every transaction at every production tier.",
  },
  {
    title: "Revenue share & equity",
    body: "Build passive income through ROA's revenue share program — and earn equity as the company grows.",
  },
  {
    title: "A real local team",
    body: "Cloud brokerage economics, but with a real Austin team behind you. Coaching, lead support, and weekly accountability — not a faceless dashboard.",
  },
]

function JoinTeam() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
              For agents
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Why agents are joining Birdsong at Realty of America.
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              If you&apos;re producing in Austin and ready for better economics
              without losing local support, we should talk.
            </p>
            <Link
              href="/join"
              className="mt-8 inline-flex rounded-pill bg-navy-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-700"
            >
              Schedule a 15-minute call →
            </Link>
          </div>

          <div className="space-y-4">
            {joinReasons.map((r, i) => (
              <div
                key={r.title}
                className="rounded-xl border border-neutral-200 bg-white p-7 transition hover:border-accent-500/40 hover:shadow-md"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent-500/10 text-sm font-bold text-accent-600">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-navy-700">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-neutral-600">{r.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   7. FINAL CTA — Navy strip
   ============================================================ */
function FinalCta() {
  return (
    <section className="section-mute border-t border-neutral-200">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-navy-700 sm:text-3xl">
            Ready to make a move?
          </h2>
          <p className="mt-2 max-w-md text-neutral-600">
            Whether you&apos;re buying, selling, or thinking about your next
            chapter as an agent — Birdsong is here.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-pill bg-navy-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-700"
          >
            Talk to Birdsong
          </Link>
          <Link
            href="/join"
            className="rounded-pill border border-neutral-300 px-6 py-3 text-sm font-semibold text-navy-700 transition hover:border-navy-600 hover:bg-white"
          >
            Join the team
          </Link>
        </div>
      </div>
    </section>
  )
}
