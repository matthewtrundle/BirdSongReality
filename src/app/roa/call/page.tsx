import type { Metadata } from "next"
import Link from "next/link"
import { RoaLeadForm } from "@/components/roa/roa-lead-form"

export const metadata: Metadata = {
  title: "Book a Confidential Call | Birdsong Realty Team at Realty of America",
  description:
    "Book a confidential 15-minute call with Patrick Birdsong about joining Birdsong Realty Team at Realty of America in Austin. No pressure, no pitch.",
}

const steps = [
  {
    title: "We talk",
    body: "A relaxed 15-minute conversation about your business and where you want to take it.",
  },
  {
    title: "You see the numbers",
    body: "We walk through the economics and support, side-by-side with where you are today.",
  },
  {
    title: "You decide",
    body: "No pressure. If it's a fit, we make the move simple. If not, no hard feelings.",
  },
]

export default function RoaCallPage() {
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
            Book a confidential call
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
            15 minutes. Zero pressure.
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Tell us how to reach you and when works best. Patrick will follow up
            within one business day to lock in a time.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* How it works rail */}
          <div className="section-mute rounded-2xl border border-neutral-200 p-7 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold tracking-tight text-navy-700">
              What to expect
            </h2>
            <ol className="mt-5 space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-500/10 text-xs font-bold text-accent-600">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-navy-700">{s.title}</p>
                    <p className="mt-1 text-sm text-neutral-600">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-neutral-500">
              Ready to apply instead?{" "}
              <Link href="/roa/apply" className="font-medium text-accent-600 hover:text-accent-500">
                Submit an application
              </Link>
              .
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <RoaLeadForm variant="call" />
          </div>
        </div>
      </div>
    </section>
  )
}
