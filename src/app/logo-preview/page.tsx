import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Logo Options · Birdsong",
  robots: { index: false, follow: false },
}

const NAVY = "#10295A"
const GREEN = "#1A9175"

/* ============================================================
   AI-generated candidates (public/images/logo-ai)
   ============================================================ */
const aiNames = [
  "Songbird (minimal line)",
  "Songbird seal / badge",
  "Coin emblem",
  "Monogram B",
  "Bird + house combo",
  "Abstract wing",
  "Bird + song note",
  "Full lockup",
]

const aiFiles = [
  "01-songbird-minimal.png",
  "02-songbird-seal.png",
  "03-coin-emblem.png",
  "04-monogram-b.png",
  "05-bird-house.png",
  "06-abstract-wing.png",
  "07-songnote-bird.png",
  "08-full-lockup.png",
]

const aiSets = [
  {
    code: "A",
    dir: "logo-ai",
    title: "AI candidates — Gemini",
    note: "raster generations (gemini-3-pro-image)",
  },
  {
    code: "B",
    dir: "logo-ai-gpt",
    title: "AI candidates — GPT",
    note: "raster generations (gpt-5.4-image-2)",
  },
]

/* ============================================================
   Circular SVG emblems (hand-built vector)
   ============================================================ */
function EmblemSeal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="Birdsong seal">
      <defs>
        <path id="seal-top" d="M 30 100 A 70 70 0 0 1 170 100" fill="none" />
        <path id="seal-bot" d="M 168 100 A 68 68 0 0 1 32 100" fill="none" />
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text fill="currentColor" fontSize="15" fontWeight="600" letterSpacing="4" fontFamily="var(--font-display), Georgia, serif">
        <textPath href="#seal-top" startOffset="50%" textAnchor="middle">BIRDSONG</textPath>
      </text>
      <text fill="currentColor" fontSize="10" fontWeight="500" letterSpacing="6" fontFamily="var(--font-sans), system-ui">
        <textPath href="#seal-bot" startOffset="50%" textAnchor="middle">REALTY TEAM</textPath>
      </text>
      <circle cx="46" cy="100" r="1.8" fill="currentColor" />
      <circle cx="154" cy="100" r="1.8" fill="currentColor" />
      <g transform="translate(58 56) scale(1.32)">
        <path
          d="M13.5 44.5c-1.2-9.4 4.6-17.6 14.4-18.7 0.9-3.4 3.3-6.2 6.6-7.6-0.7 2.4-0.6 4.6 0.1 6.6 7.6 0.5 13.9 4.9 16.9 11.9-3.1-2.1-6.3-3.2-9.6-3.4 2.1 2.6 3.2 5.8 3.1 9.4-1.6-3.1-3.7-5.4-6.2-7-0.2 6.7-4.7 12-11.4 12.9 2.2-2.5 3.3-5.1 3.4-7.9-4.9 3.3-11.1 4.2-16.8 2.9 2.7-0.4 5-1.2 6.9-2.4-3.1-0.1-5.7-0.9-7.9-2.6z"
          fill="currentColor"
        />
        <path d="M34.4 20.6l5.4-1.1-4.1 3.5z" fill="currentColor" />
        <g fill="currentColor" opacity="0.75">
          <circle cx="49" cy="17" r="2" />
          <rect x="50.4" y="9.5" width="1.4" height="8" rx="0.7" />
        </g>
      </g>
    </svg>
  )
}

function EmblemCoin({ className, fill = NAVY }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="Birdsong coin">
      <circle cx="100" cy="100" r="94" fill={fill} />
      <circle cx="100" cy="100" r="84" fill="none" stroke="#fff" strokeWidth="1" opacity="0.35" />
      <g transform="translate(28 36) scale(2.2)" fill="#fff">
        <path d="M13.5 44.5c-1.2-9.4 4.6-17.6 14.4-18.7 0.9-3.4 3.3-6.2 6.6-7.6-0.7 2.4-0.6 4.6 0.1 6.6 7.6 0.5 13.9 4.9 16.9 11.9-3.1-2.1-6.3-3.2-9.6-3.4 2.1 2.6 3.2 5.8 3.1 9.4-1.6-3.1-3.7-5.4-6.2-7-0.2 6.7-4.7 12-11.4 12.9 2.2-2.5 3.3-5.1 3.4-7.9-4.9 3.3-11.1 4.2-16.8 2.9 2.7-0.4 5-1.2 6.9-2.4-3.1-0.1-5.7-0.9-7.9-2.6z" />
        <path d="M34.4 20.6l5.4-1.1-4.1 3.5z" />
        <g opacity="0.8">
          <circle cx="49" cy="17" r="2" />
          <rect x="50.4" y="9.5" width="1.4" height="8" rx="0.7" />
        </g>
      </g>
    </svg>
  )
}

function EmblemRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="Birdsong ring">
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <g transform="translate(56 54) scale(1.35)">
        <path
          d="M13.5 44.5c-1.2-9.4 4.6-17.6 14.4-18.7 0.9-3.4 3.3-6.2 6.6-7.6-0.7 2.4-0.6 4.6 0.1 6.6 7.6 0.5 13.9 4.9 16.9 11.9-3.1-2.1-6.3-3.2-9.6-3.4 2.1 2.6 3.2 5.8 3.1 9.4-1.6-3.1-3.7-5.4-6.2-7-0.2 6.7-4.7 12-11.4 12.9 2.2-2.5 3.3-5.1 3.4-7.9-4.9 3.3-11.1 4.2-16.8 2.9 2.7-0.4 5-1.2 6.9-2.4-3.1-0.1-5.7-0.9-7.9-2.6z"
          fill="currentColor"
        />
        <path d="M34.4 20.6l5.4-1.1-4.1 3.5z" fill="currentColor" />
      </g>
    </svg>
  )
}

function EmblemMonogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="Birdsong monogram">
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <text x="100" y="132" textAnchor="middle" fill="currentColor" fontSize="96" fontWeight="600" fontFamily="var(--font-display), Georgia, serif">
        B
      </text>
      <circle cx="138" cy="66" r="6" fill="currentColor" />
      <rect x="142.5" y="44" width="3" height="24" rx="1.5" fill="currentColor" />
    </svg>
  )
}

function EmblemBranch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="Birdsong branch crest">
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="2" />
      <g transform="translate(56 38) scale(1.35)">
        <path
          d="M13.5 44.5c-1.2-9.4 4.6-17.6 14.4-18.7 0.9-3.4 3.3-6.2 6.6-7.6-0.7 2.4-0.6 4.6 0.1 6.6 7.6 0.5 13.9 4.9 16.9 11.9-3.1-2.1-6.3-3.2-9.6-3.4 2.1 2.6 3.2 5.8 3.1 9.4-1.6-3.1-3.7-5.4-6.2-7-0.2 6.7-4.7 12-11.4 12.9 2.2-2.5 3.3-5.1 3.4-7.9-4.9 3.3-11.1 4.2-16.8 2.9 2.7-0.4 5-1.2 6.9-2.4-3.1-0.1-5.7-0.9-7.9-2.6z"
          fill="currentColor"
        />
        <path d="M34.4 20.6l5.4-1.1-4.1 3.5z" fill="currentColor" />
      </g>
      <path d="M 48 132 Q 100 150 152 132" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <text x="100" y="170" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600" letterSpacing="3" fontFamily="var(--font-display), Georgia, serif">
        BIRDSONG
      </text>
    </svg>
  )
}

function EmblemDotRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="Birdsong dot ring">
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="2" />
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        <circle cx="100" cy="100" r="80" fill="none" strokeDasharray="2 6" />
      </g>
      <g transform="translate(56 54) scale(1.35)">
        <path
          d="M13.5 44.5c-1.2-9.4 4.6-17.6 14.4-18.7 0.9-3.4 3.3-6.2 6.6-7.6-0.7 2.4-0.6 4.6 0.1 6.6 7.6 0.5 13.9 4.9 16.9 11.9-3.1-2.1-6.3-3.2-9.6-3.4 2.1 2.6 3.2 5.8 3.1 9.4-1.6-3.1-3.7-5.4-6.2-7-0.2 6.7-4.7 12-11.4 12.9 2.2-2.5 3.3-5.1 3.4-7.9-4.9 3.3-11.1 4.2-16.8 2.9 2.7-0.4 5-1.2 6.9-2.4-3.1-0.1-5.7-0.9-7.9-2.6z"
          fill="currentColor"
        />
        <path d="M34.4 20.6l5.4-1.1-4.1 3.5z" fill="currentColor" />
        <g fill="currentColor" opacity="0.8">
          <circle cx="49" cy="17" r="2.4" />
          <rect x="50.6" y="8" width="1.6" height="9.5" rx="0.8" />
        </g>
      </g>
    </svg>
  )
}

const emblems = [
  { id: "seal", name: "Seal", note: "Curved text crest — classic, established", render: (c: string) => <EmblemSeal className={c} /> },
  { id: "coin", name: "Coin", note: "Solid disc, reversed bird — bold app-icon", render: () => <EmblemCoin className="h-full w-full" /> },
  { id: "ring", name: "Double ring", note: "Minimal, modern, scales tiny", render: (c: string) => <EmblemRing className={c} /> },
  { id: "monogram", name: "Monogram B", note: "Serif B + song note — refined", render: (c: string) => <EmblemMonogram className={c} /> },
  { id: "branch", name: "Branch crest", note: "Bird on a branch + name", render: (c: string) => <EmblemBranch className={c} /> },
  { id: "dotring", name: "Dotted ring", note: "Bird mid-song, dashed orbit", render: (c: string) => <EmblemDotRing className={c} /> },
]

function Tile({
  bg,
  color,
  label,
  children,
}: {
  bg: string
  color: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="flex h-32 w-32 items-center justify-center rounded-2xl border border-neutral-200"
        style={{ backgroundColor: bg, color }}
      >
        <div className="h-24 w-24">{children}</div>
      </div>
      <span className="text-[0.65rem] uppercase tracking-wider text-neutral-400">{label}</span>
    </div>
  )
}

export default function LogoPreviewPage() {
  return (
    <div className="min-h-screen bg-neutral-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-neutral-900">
          Birdsong logo options
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Two tracks below. <strong>AI candidates</strong> are raster (PNG) image-model
          generations — good for exploring directions. <strong>Vector emblems</strong> are
          hand-built SVG — sharp at any size, recolorable, no image files. Tell me a code
          (e.g. <em>A2</em> or <em>V1</em>) and I&apos;ll make it the live brand mark.
        </p>

        {/* ===================== AI candidates ===================== */}
        {aiSets.map((set) => (
          <section key={set.code} className="mt-14">
            <div className="mb-6 flex items-baseline gap-3">
              <h2 className="font-display text-2xl font-semibold text-[#10295A]">{set.title}</h2>
              <span className="text-sm text-neutral-500">— {set.note}</span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aiFiles.map((file, i) => (
                <div key={file} className="rounded-3xl border border-neutral-200 bg-white p-4">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
                    <Image
                      src={`/images/${set.dir}/${file}`}
                      alt={aiNames[i]}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-lg font-semibold text-[#1A9175]">
                      {set.code}
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-neutral-900">{aiNames[i]}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* ===================== Vector emblems ===================== */}
        <section className="mt-16">
          <div className="mb-6 flex items-baseline gap-3">
            <h2 className="font-display text-2xl font-semibold text-[#10295A]">Vector emblems</h2>
            <span className="text-sm text-neutral-500">— hand-built SVG, on light / navy / green</span>
          </div>
          <div className="space-y-10">
            {emblems.map((e, i) => (
              <div key={e.id} className="rounded-3xl border border-neutral-200 bg-white p-8">
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-display text-xl font-semibold text-[#1A9175]">V{i + 1}</span>
                  <span className="font-display text-xl font-semibold text-neutral-900">{e.name}</span>
                  <span className="text-sm text-neutral-500">— {e.note}</span>
                </div>
                <div className="flex flex-wrap items-start gap-8">
                  <Tile bg="#ffffff" color={NAVY} label="Navy / white">
                    {e.id === "coin" ? <EmblemCoin className="h-full w-full" fill={NAVY} /> : e.render("h-full w-full")}
                  </Tile>
                  <Tile bg={NAVY} color="#ffffff" label="On navy">
                    {e.id === "coin" ? <EmblemCoin className="h-full w-full" fill={GREEN} /> : e.render("h-full w-full")}
                  </Tile>
                  <Tile bg={GREEN} color="#ffffff" label="On green">
                    {e.id === "coin" ? <EmblemCoin className="h-full w-full" fill={NAVY} /> : e.render("h-full w-full")}
                  </Tile>

                  {/* In-context lockup */}
                  <div className="flex items-center gap-4 self-center border-l border-neutral-200 pl-8">
                    <div className="h-16 w-16" style={{ color: NAVY }}>
                      {e.id === "coin" ? <EmblemCoin className="h-full w-full" fill={NAVY} /> : e.render("h-full w-full")}
                    </div>
                    <span className="flex flex-col leading-none">
                      <span className="font-display text-2xl font-semibold tracking-tight text-[#10295A]">
                        Birdsong
                      </span>
                      <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.4em] text-neutral-500">
                        Realty Team
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
