import type { Metadata } from "next"
import Link from "next/link"
import { RoaLeadForm } from "@/components/roa/roa-lead-form"

export const metadata: Metadata = {
  title: "Apply to Join | Birdsong Realty Team at Realty of America",
  description:
    "Apply to join Birdsong Realty Team at Realty of America in Austin. Better economics, modern tools, real ownership, and a local team behind you.",
}

const reasons = [
  "85/15 split with a $14k cap — then keep 100%",
  "Equity ownership as the company grows",
  "Revenue share beyond your own deals",
  "1-on-1 coaching and a real Austin team",
]

export default function RoaApplyPage() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Link
            href="/roa"
            className="text-sm font-medium text-accent-600 transition hover:text-accent-500"
          >
            ← Back to overview
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent-600">
            Apply to join the team
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
            Let&apos;s build something that lasts.
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Tell us a little about your business. Patrick reviews every
            application personally and follows up within one business day —
            always confidentially.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* Why join rail */}
          <div className="section-mute rounded-2xl border border-neutral-200 p-7 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold tracking-tight text-navy-700">
              Why agents make the move
            </h2>
            <ul className="mt-5 space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1.5 h-2 w-2 flex-none rounded-full bg-accent-500"
                  />
                  <span className="text-neutral-700">{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-500">
              Prefer to talk first?{" "}
              <Link href="/roa/call" className="font-medium text-accent-600 hover:text-accent-500">
                Book a confidential call
              </Link>
              .
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <RoaLeadForm variant="apply" />
          </div>
        </div>
      </div>
    </section>
  )
}
