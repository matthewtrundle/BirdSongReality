import Image from "next/image"
import Link from "next/link"

export default function RoaRecruitingPage() {
  return (
    <>
      <Hero />
      <Economics />
      <WhyJoin />
      <Values />
      <Process />
      <FinalCta />
    </>
  )
}

/* ============================================================
   1. HERO — Recruiting headline + dual CTA over navy gradient
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-700 to-navy-600 text-white">
      {/* Atmospheric accents */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 10%, rgb(26 145 117 / 0.35) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 90%, rgb(219 18 99 / 0.18) 0%, transparent 55%)",
        }}
      />
      <div className="container-x relative grid gap-12 py-24 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16 lg:py-32">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Empowering Agents · Simplifying Real Estate
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Build your business.
            <br />
            Build your equity.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Birdsong Realty Team is growing in Austin with Realty of America —
            a brokerage built to give agents better economics, modern tools,
            and a real team behind them. If you&apos;re ready to keep more of
            what you earn and grow something that lasts, let&apos;s talk.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/roa/apply"
              className="rounded-pill bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/20 transition hover:bg-accent-600"
            >
              Apply to join the team
            </Link>
            <Link
              href="/roa/call"
              className="rounded-pill border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a confidential call
            </Link>
          </div>
        </div>

        {/* Right: Patrick portrait + floating proof card */}
        <div className="relative hidden lg:block">
          <div className="relative ml-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src="/images/team/patrick-seated.jpg"
              alt="Patrick Birdsong, founder of Birdsong Realty Team"
              fill
              sizes="448px"
              className="object-cover"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy-700 via-navy-700/20 to-transparent"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-navy-700/70 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-white">Patrick Birdsong</p>
              <p className="text-xs text-white/65">
                Founder · Birdsong Realty Team
              </p>
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
                <ProofRow value="85/15" label="Split to cap" />
                <ProofRow value="$14k" label="Annual cap" />
                <ProofRow value="Equity" label="Real ownership" />
                <ProofRow value="Rev share" label="Beyond your deals" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProofRow({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-lg font-bold leading-tight tracking-tight text-accent-400">
        {value}
      </div>
      <div className="text-xs text-white/65">{label}</div>
    </div>
  )
}

/* ============================================================
   2. ECONOMICS — The numbers, front and center
   ============================================================ */
const economics = [
  { value: "85/15", label: "Commission split", sub: "until you hit your annual cap" },
  { value: "$14,000", label: "Annual cap", sub: "then you keep 100% of commissions" },
  { value: "100%", label: "Post-cap", sub: "every dollar after cap is yours" },
  { value: "Equity", label: "Ownership", sub: "earn stock as the company grows" },
]

function Economics() {
  return (
    <section id="economics" className="section-y bg-white scroll-mt-16">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
            The economics
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
            Keep more of what you earn.
          </h2>
          <p className="mt-3 text-lg text-neutral-600">
            Realty of America&apos;s model is built so agents win first — at
            every production level, from your first deal to your hundredth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {economics.map((e) => (
            <div
              key={e.label}
              className="rounded-xl border border-neutral-200 bg-white p-7 text-center transition hover:border-accent-500/40 hover:shadow-md"
            >
              <div className="text-4xl font-bold tracking-tight text-navy-700">
                {e.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-neutral-900">
                {e.label}
              </div>
              <div className="mt-1 text-sm text-neutral-500">{e.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   3. WHY JOIN — Pillars drawn from ROA's values & mission
   ============================================================ */
const pillars = [
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
]

function WhyJoin() {
  return (
    <section id="why" className="section-y section-mute scroll-mt-16">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
              Why Realty of America
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-700 sm:text-4xl">
              A brokerage built around the agent.
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Our mission is to empower agents to succeed while building
              stronger, more connected communities — earning trust through
              transparency, modern tools, and lasting relationships.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-neutral-200 bg-white p-7 transition hover:border-accent-500/40 hover:shadow-md"
              >
                <span className="inline-block rounded-pill bg-navy-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {p.title}
                </span>
                <p className="mt-4 text-neutral-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   4. VALUES — The local-team differentiator (navy strip)
   ============================================================ */
function Values() {
  return (
    <section className="section-navy-deep section-y">
      <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Cloud economics, local team
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            You don&apos;t have to choose between great splits and real support.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            Most cloud brokerages hand you a login and wish you luck. Birdsong
            gives you the economics of a modern brokerage with a real Austin
            team behind you — coaching, lead support, and weekly accountability
            from people who actually know the market.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/roa/apply"
              className="rounded-pill bg-white px-6 py-3 text-sm font-semibold text-navy-700 transition hover:bg-neutral-100"
            >
              Apply to join
            </Link>
            <Link
              href="/roa/call"
              className="rounded-pill border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a call
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <ul className="space-y-5">
            {[
              "1-on-1 coaching and business planning",
              "Lead support and proven systems",
              "Weekly accountability with a real team",
              "Revenue share — income beyond your own deals",
              "Equity ownership as the company grows",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 flex-none rounded-full bg-accent-400"
                />
                <span className="text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   5. PROCESS — Simple 3-step path to joining
   ============================================================ */
const steps = [
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
]

function Process() {
  return (
    <section id="process" className="section-y bg-white scroll-mt-16">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
            Joining is simple.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl border border-neutral-200 bg-white p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-500/10 text-sm font-bold text-accent-600">
                0{i + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-navy-700">
                {s.title}
              </h3>
              <p className="mt-2 text-neutral-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   6. FINAL CTA — Navy strip
   ============================================================ */
function FinalCta() {
  return (
    <section className="bg-navy-700 text-white">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to grow with Birdsong?
          </h2>
          <p className="mt-2 max-w-md text-white/70">
            Take 15 minutes to see what your business could look like at Realty
            of America. The conversation is always confidential.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/roa/apply"
            className="rounded-pill bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
          >
            Apply to join the team
          </Link>
          <Link
            href="/roa/call"
            className="rounded-pill border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Book a confidential call
          </Link>
        </div>
      </div>
    </section>
  )
}
