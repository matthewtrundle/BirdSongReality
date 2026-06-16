import Image from "next/image"
import Link from "next/link"
import { CoBrandLockup } from "@/components/roa/co-brand-lockup"
import { economics, pillars, steps, teamSupport } from "./content"

/* ============================================================
   VARIANT B — "EDITORIAL"
   Refined magazine layout. Warm paper background, oversized
   Playfair serif headlines, hairline rules, numbered sections,
   generous whitespace. Calm, established, premium.
   ============================================================ */
export function VariantEditorial() {
  return (
    <div className="bg-[#f7f4ee] text-navy-700">
      {/* ---------------- HERO ---------------- */}
      <section className="border-b border-navy-700/10">
        <div className="container-x">
          {/* Co-brand masthead */}
          <div className="flex flex-col gap-4 border-b border-navy-700/10 py-7 sm:flex-row sm:items-center sm:justify-between">
            <CoBrandLockup tone="light" variant="default" />
            <span className="text-xs font-medium uppercase tracking-[0.32em] text-navy-700/45">
              Agent Opportunities · Austin, TX
            </span>
          </div>

          <div className="grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="font-display text-sm italic text-accent-600">
                An invitation to Austin agents
              </p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Build your business. Build your equity.
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-navy-700/70">
                Birdsong Realty Team is growing in Austin with Realty of America —
                a brokerage built to give agents better economics, modern tools,
                and a real team behind them.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/roa/apply"
                  className="rounded-pill bg-navy-700 px-8 py-4 text-sm font-semibold text-white transition hover:bg-navy-600"
                >
                  Apply to join the team
                </Link>
                <Link
                  href="/roa/call"
                  className="text-sm font-semibold text-navy-700 underline decoration-accent-500 decoration-2 underline-offset-[6px] transition hover:text-accent-600"
                >
                  Book a confidential call
                </Link>
              </div>
            </div>

            {/* Patrick — tall editorial portrait, fixed crop */}
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-navy-700/10 shadow-xl shadow-navy-900/10">
                <Image
                  src="/images/team/patrick-seated.jpg"
                  alt="Patrick Birdsong, founder of Birdsong Realty Team"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="scale-[1.15] object-cover object-[50%_20%]"
                  priority
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between border-t border-navy-700/10 pt-3">
                <span className="font-display text-lg font-semibold">Patrick Birdsong</span>
                <span className="text-xs uppercase tracking-widest text-navy-700/50">
                  Founder
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------- ECONOMICS ---------------- */}
      <section className="border-b border-navy-700/10 py-20">
        <div className="container-x">
          <SectionHead index="01" kicker="The economics" title="Keep more of what you earn." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-navy-700/10 bg-navy-700/10 sm:grid-cols-2 lg:grid-cols-4">
            {economics.map((e) => (
              <div key={e.label} className="bg-[#f7f4ee] p-8 text-center">
                <div className="font-display text-5xl font-semibold tracking-tight text-navy-700">
                  {e.value}
                </div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-navy-700/80">
                  {e.label}
                </div>
                <div className="mt-1 text-sm text-navy-700/55">{e.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PULL QUOTE ---------------- */}
      <section className="border-b border-navy-700/10 py-20">
        <div className="container-x">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-navy-700 sm:text-4xl">
              &ldquo;You don&apos;t have to choose between great splits and real
              support. We give you both.&rdquo;
            </p>
            <footer className="mt-6 text-sm uppercase tracking-widest text-accent-600">
              Patrick Birdsong · Founder
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ---------------- WHY JOIN ---------------- */}
      <section className="border-b border-navy-700/10 py-20">
        <div className="container-x">
          <SectionHead index="02" kicker="Why Realty of America" title="A brokerage built around the agent." />
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div key={p.title} className="border-t border-navy-700/15 pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-accent-600">0{i + 1}</span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-3 text-navy-700/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LOCAL TEAM ---------------- */}
      <section className="border-b border-navy-700/10 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHead index="03" kicker="Cloud economics, local team" title="A real Austin team behind you." />
            <p className="mt-6 max-w-lg text-lg text-navy-700/70">
              Most cloud brokerages hand you a login and wish you luck. We pair
              modern economics with people who actually know the market.
            </p>
          </div>
          <ul className="divide-y divide-navy-700/10 border-y border-navy-700/10">
            {teamSupport.map((item) => (
              <li key={item} className="flex items-center gap-4 py-4">
                <span className="font-display text-accent-600">&mdash;</span>
                <span className="text-navy-700/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="border-b border-navy-700/10 py-20">
        <div className="container-x">
          <SectionHead index="04" kicker="How it works" title="Joining is simple." />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title}>
                <div className="font-display text-6xl font-semibold text-navy-700/15">
                  0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-navy-700/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="bg-navy-700 py-20 text-white">
        <div className="container-x text-center">
          <CoBrandLockup tone="dark" variant="default" className="justify-center" />
          <h2 className="mx-auto mt-8 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Ready to grow with Birdsong?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            Take 15 minutes to see what your business could look like. The
            conversation is always confidential.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/roa/apply"
              className="rounded-pill bg-white px-8 py-4 text-sm font-semibold text-navy-700 transition hover:bg-neutral-100"
            >
              Apply to join the team
            </Link>
            <Link
              href="/roa/call"
              className="rounded-pill border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a confidential call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function SectionHead({
  index,
  kicker,
  title,
}: {
  index: string
  kicker: string
  title: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <span className="font-display text-sm text-accent-600">{index}</span>
        <span className="h-px flex-1 bg-navy-700/15" />
        <span className="text-xs font-semibold uppercase tracking-widest text-navy-700/50">
          {kicker}
        </span>
      </div>
      <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
    </div>
  )
}
