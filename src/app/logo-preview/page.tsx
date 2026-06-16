/* TEMPORARY logo exploration page — delete after a direction is chosen. */

const GREEN = "#1A9175"

function Row({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-8 py-10">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
          {label}
        </span>
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* on dark */}
          <div className="flex h-40 items-center justify-center rounded-2xl bg-[#10295A] text-white">
            {children}
          </div>
          {/* on light */}
          <div className="flex h-40 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-[#10295A]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

/* Shared wordmark so every option pairs with the same name treatment */
function Wordmark({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={
          size === "sm"
            ? "font-display text-xl font-semibold tracking-tight"
            : "font-display text-2xl font-semibold tracking-tight"
        }
      >
        Birdsong
      </span>
      <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.42em]">
        Realty&nbsp;Team
      </span>
    </span>
  )
}

/* ── 1 — Monogram crest "B" ───────────────────────────────────────── */
function OptMonogram() {
  return (
    <span className="flex items-center gap-4">
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-current">
        <span className="font-display text-3xl font-semibold leading-none">B</span>
        <span className="absolute -bottom-px left-1/2 h-px w-6 -translate-x-1/2 bg-current opacity-50" />
      </span>
      <Wordmark />
    </span>
  )
}

/* ── 2 — Typographic wordmark, song-note dot on the "i" ───────────── */
function OptWordmark() {
  return (
    <span className="flex flex-col items-center leading-none">
      <span className="relative font-display text-4xl font-semibold tracking-tight">
        B<span className="relative">i
          <span
            className="absolute -top-1 left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full"
            style={{ backgroundColor: GREEN }}
          />
        </span>rdsong
      </span>
      <span className="mt-2 text-[0.6rem] font-medium uppercase tracking-[0.55em]">
        Realty&nbsp;Team
      </span>
    </span>
  )
}

/* ── 3 — Minimal line songbird ────────────────────────────────────── */
function LineBird({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path
        d="M11 41c0-11 8.5-20 20-20 2.5 0 5 .5 7 1.4 1.2-2.2 3.4-3.8 6-4.2-.7 1.7-.8 3.3-.4 4.8 4.6 2.8 7.7 7.9 7.7 13.7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 41c6 5 14 6 21 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M44 23l5-2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="41.5" cy="27.5" r="1.4" fill="currentColor" />
    </svg>
  )
}
function OptLineBird() {
  return (
    <span className="flex items-center gap-3">
      <LineBird className="h-14 w-14" />
      <Wordmark />
    </span>
  )
}

/* ── 4 — Feather / plume ──────────────────────────────────────────── */
function Feather({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path
        d="M46 14C30 16 19 27 17 43c-1 7-1 7-5 11l3 3c4-4 4-4 11-5 16-2 27-13 29-29 .3-2 .5-5 .5-9-3 0-6 .2-9 .5z"
        fill="currentColor"
        opacity="0.12"
      />
      <path d="M46 14C30 16 19 27 17 43c-1 7-1 7-5 11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M46 14c.5 16-8 27-24 30M40 18c.4 11-5 19-15 22M34 24c.3 7-3 12-9 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
function OptFeather() {
  return (
    <span className="flex items-center gap-3">
      <Feather className="h-14 w-14" />
      <Wordmark />
    </span>
  )
}

/* ── 5 — Circular badge / roundel with curved text ────────────────── */
function OptBadge() {
  return (
    <svg viewBox="0 0 132 132" className="h-28 w-28" aria-hidden>
      <defs>
        <path id="topArc" d="M22,66 a44,44 0 0,1 88,0" fill="none" />
        <path id="botArc" d="M22,66 a44,44 0 0,0 88,0" fill="none" />
      </defs>
      <circle cx="66" cy="66" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="66" cy="66" r="50" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
      <text fill="currentColor" fontSize="8.5" letterSpacing="3.4" fontWeight="600">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">BIRDSONG</textPath>
      </text>
      <text fill="currentColor" fontSize="6.5" letterSpacing="4" fontWeight="500">
        <textPath href="#botArc" startOffset="50%" textAnchor="middle">REALTY · TEAM</textPath>
      </text>
      <g transform="translate(40,40) scale(0.8)">
        <path
          d="M11 41c0-11 8.5-20 20-20 2.5 0 5 .5 7 1.4 1.2-2.2 3.4-3.8 6-4.2-.7 1.7-.8 3.3-.4 4.8 4.6 2.8 7.7 7.9 7.7 13.7"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M11 41c6 5 14 6 21 3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        <circle cx="41.5" cy="27.5" r="1.5" fill="currentColor" />
      </g>
    </svg>
  )
}

/* ── 6 — Songbird on a branch + notes ─────────────────────────────── */
function BranchBird({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      {/* branch */}
      <path d="M6 50h44" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M40 50c2-3 6-4 9-3M16 50c-1-3-4-4-7-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* bird */}
      <path
        d="M22 50c-4-2-6-7-5-12 1-6 6-10 13-10 2-3 6-4 9-2-2 1-3 3-2 5 4 2 6 6 5 11"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 50c0-2 .5-4 1.5-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="35.5" cy="29.5" r="1.4" fill="currentColor" />
      {/* notes */}
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="52" cy="20" r="2.4" fill="currentColor" stroke="none" />
        <path d="M54.2 20V11" />
        <circle cx="46" cy="13" r="1.8" fill="currentColor" stroke="none" />
        <path d="M47.7 13V6" />
      </g>
    </svg>
  )
}
function OptBranch() {
  return (
    <span className="flex items-center gap-3">
      <BranchBird className="h-14 w-14" />
      <Wordmark />
    </span>
  )
}

/* ── 7 — Geometric / origami bird ─────────────────────────────────── */
function OptOrigami() {
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
        <path d="M8 42 L34 14 L37 35 Z" fill="currentColor" opacity="0.9" />
        <path d="M34 14 L56 24 L37 35 Z" fill="currentColor" opacity="0.5" />
        <path d="M37 35 L50 52 L24 47 Z" fill="currentColor" opacity="0.72" />
        <circle cx="46.5" cy="22" r="1.4" fill="#fff" opacity="0.9" />
      </svg>
      <Wordmark />
    </span>
  )
}

/* ── 8 — House + perched bird (real-estate nod) ───────────────────── */
function OptHouseBird() {
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden>
        <path
          d="M13 54V30L32 15l19 15v24"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d="M11 54h42" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M27 54V40h10v14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        {/* bird on the roof peak */}
        <path
          d="M32 15c1-3 4-4.5 7-3.5-1.5 .8-2 2-1.5 3.4 2 .6 3 2.2 2.6 4.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="38" cy="11" r="1" fill="currentColor" />
      </svg>
      <Wordmark />
    </span>
  )
}

/* ── 9 — Song / soundwave bars ────────────────────────────────────── */
function OptSoundwave() {
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14" aria-hidden>
        <g fill="currentColor">
          <rect x="9" y="34" width="4.5" height="16" rx="2.25" />
          <rect x="18" y="26" width="4.5" height="24" rx="2.25" />
          <rect x="27" y="16" width="4.5" height="34" rx="2.25" />
          <rect x="36" y="23" width="4.5" height="27" rx="2.25" />
          <rect x="45" y="31" width="4.5" height="19" rx="2.25" />
        </g>
        <circle cx="29.25" cy="9" r="3" fill={GREEN} />
      </svg>
      <Wordmark />
    </span>
  )
}

/* ── 10 — Serif "BR" ligature in a rounded square ─────────────────── */
function OptSquareMono() {
  return (
    <span className="flex items-center gap-4">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-current">
        <span className="font-display text-2xl font-semibold leading-none tracking-tight">BR</span>
      </span>
      <Wordmark />
    </span>
  )
}

/* ── Current (reference) ──────────────────────────────────────────── */
function CurrentMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path
        d="M13.5 44.5c-1.2-9.4 4.6-17.6 14.4-18.7 0.9-3.4 3.3-6.2 6.6-7.6-0.7 2.4-0.6 4.6 0.1 6.6 7.6 0.5 13.9 4.9 16.9 11.9-3.1-2.1-6.3-3.2-9.6-3.4 2.1 2.6 3.2 5.8 3.1 9.4-1.6-3.1-3.7-5.4-6.2-7-0.2 6.7-4.7 12-11.4 12.9 2.2-2.5 3.3-5.1 3.4-7.9-4.9 3.3-11.1 4.2-16.8 2.9 2.7-0.4 5-1.2 6.9-2.4-3.1-0.1-5.7-0.9-7.9-2.6 0.1 1.3 0.3 2.5 0.6 3.7z"
        fill="currentColor"
      />
    </svg>
  )
}
function OptCurrent() {
  return (
    <span className="flex items-center gap-3 opacity-80">
      <CurrentMark className="h-14 w-14" />
      <Wordmark />
    </span>
  )
}

export default function LogoPreviewPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-16">
      <div className="mx-auto max-w-5xl px-8">
        <h1 className="font-display text-3xl font-semibold text-neutral-900">
          Birdsong Realty Team — 10 logo directions
        </h1>
        <p className="mt-2 text-neutral-500">
          Each shown on navy and on white. Pick a number — you can also mix a mark
          from one with the wordmark styling of another.
        </p>
      </div>
      <div className="mt-12">
        <Row label="1 · Monogram crest (circle B)">
          <OptMonogram />
        </Row>
        <Row label="2 · Typographic wordmark (song-note accent)">
          <OptWordmark />
        </Row>
        <Row label="3 · Minimal line songbird">
          <OptLineBird />
        </Row>
        <Row label="4 · Feather / plume">
          <OptFeather />
        </Row>
        <Row label="5 · Circular badge / roundel">
          <OptBadge />
        </Row>
        <Row label="6 · Songbird on a branch + notes">
          <OptBranch />
        </Row>
        <Row label="7 · Geometric / origami bird">
          <OptOrigami />
        </Row>
        <Row label="8 · House + perched bird (real-estate nod)">
          <OptHouseBird />
        </Row>
        <Row label="9 · Song / soundwave bars">
          <OptSoundwave />
        </Row>
        <Row label="10 · Serif BR monogram (rounded square)">
          <OptSquareMono />
        </Row>
        <Row label="Current (for reference)">
          <OptCurrent />
        </Row>
      </div>
    </main>
  )
}
