/* TEMPORARY logo exploration page — delete after a direction is chosen. */

const GREEN = "#1A9175"

/* ── Shared wordmark ──────────────────────────────────────────────── */
function Wordmark({ size = "sm" }: { size?: "sm" | "md" }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={
          size === "md"
            ? "font-display text-2xl font-semibold tracking-tight"
            : "font-display text-lg font-semibold tracking-tight"
        }
      >
        Birdsong
      </span>
      <span className="mt-1 text-[0.5rem] font-medium uppercase tracking-[0.4em]">
        Realty&nbsp;Team
      </span>
    </span>
  )
}

/* ── Reusable bird glyphs (currentColor) ──────────────────────────── */
function LineSongbird({ className }: { className?: string }) {
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

function FilledSongbird({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path
        d="M14 46c-2-10 4-19 15-20 1-4 4-7 9-8-1 3-1 5 0 7 8 1 14 7 15 16-3-2-6-3-9-3 2 3 3 6 2 10-2-3-4-6-7-7 0 8-6 13-13 13 2-3 3-6 3-9-5 4-12 4-18 2 3-1 5-2 7-3-3-1-6-2-8-5 1 1 2 1 4 1z"
        fill="currentColor"
      />
      <circle cx="33" cy="22" r="1.4" fill="#fff" opacity="0.85" />
    </svg>
  )
}

function Swallow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path
        d="M6 38C18 24 27 24 32 34c5-10 14-10 26 4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FlyingV({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path d="M8 40c8-2 12-6 14-12 2 6 6 10 14 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 44c8-2 12-6 14-12 2 6 6 10 14 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
    </svg>
  )
}

function SingingBird({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path
        d="M14 48c-3-3-4-9-2-14 2-6 8-10 15-9 1-3 4-5 7-4-1 2-1 4 0 5 4 2 6 6 5 11"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 48c0-2 .5-4 1.5-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M30 26l-6-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="33" cy="29" r="1.3" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="currentColor">
        <circle cx="48" cy="20" r="2" stroke="none" />
        <path d="M50 20v-8" fill="none" />
        <circle cx="42" cy="13" r="1.6" stroke="none" />
        <path d="M43.6 13V6" fill="none" />
      </g>
    </svg>
  )
}

/* ── Monogram frame helpers ───────────────────────────────────────── */
function PolyFrame({
  sides,
  letter = "B",
  rotate = 0,
}: {
  sides: "diamond" | "hex" | "shield"
  letter?: string
  rotate?: number
}) {
  const poly =
    sides === "diamond"
      ? "M32 4 60 32 32 60 4 32Z"
      : sides === "hex"
        ? "M32 4 56 18 56 46 32 60 8 46 8 18Z"
        : "M32 5 57 14v22c0 13-11 21-25 24-14-3-25-11-25-24V14L32 5Z"
  return (
    <span className="relative inline-flex h-16 w-16 items-center justify-center">
      <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full" aria-hidden>
        <path d={poly} fill="none" stroke="currentColor" strokeWidth="2" transform={`rotate(${rotate} 32 32)`} />
      </svg>
      <span className="font-display text-2xl font-semibold leading-none">{letter}</span>
    </span>
  )
}

/* ── Compact display cell ─────────────────────────────────────────── */
function Cell({
  n,
  label,
  children,
}: {
  n: number
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
        {n} · {label}
      </span>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex h-24 items-center justify-center rounded-xl bg-[#10295A] px-3 text-white">
          {children}
        </div>
        <div className="flex h-24 items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 text-[#10295A]">
          {children}
        </div>
      </div>
    </div>
  )
}

function SectionHead({ title }: { title: string }) {
  return (
    <div className="col-span-full mt-10 first:mt-0">
      <h2 className="font-display text-xl font-semibold text-neutral-800">{title}</h2>
      <div className="mt-2 h-px w-full bg-neutral-200" />
    </div>
  )
}

/* Mark + wordmark convenience */
function L({ children }: { children: React.ReactNode }) {
  return <span className="flex items-center gap-2.5">{children}</span>
}

/* ── The catalog ──────────────────────────────────────────────────── */
type Item = { label: string; node: React.ReactNode }
type Group = { title: string; items: Item[] }

const wordmarks: Item[] = [
  { label: "Clean wordmark", node: <Wordmark size="md" /> },
  {
    label: "Song-note dot on i",
    node: (
      <span className="flex flex-col items-center leading-none">
        <span className="relative font-display text-3xl font-semibold tracking-tight">
          B<span className="relative">i
            <span className="absolute -top-1 left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full" style={{ backgroundColor: GREEN }} />
          </span>rdsong
        </span>
        <span className="mt-2 text-[0.55rem] font-medium uppercase tracking-[0.5em]">Realty Team</span>
      </span>
    ),
  },
  {
    label: "Underline rule",
    node: (
      <span className="flex flex-col items-center leading-none">
        <span className="font-display text-3xl font-semibold tracking-tight">Birdsong</span>
        <span className="mt-1.5 h-px w-full bg-current opacity-40" />
        <span className="mt-1.5 text-[0.55rem] font-medium uppercase tracking-[0.5em]">Realty Team</span>
      </span>
    ),
  },
  {
    label: "Two-tone weight",
    node: (
      <span className="flex flex-col items-center leading-none">
        <span className="font-display text-3xl tracking-tight">
          <span className="font-bold">Bird</span><span className="font-normal opacity-80">song</span>
        </span>
        <span className="mt-1.5 text-[0.55rem] font-medium uppercase tracking-[0.5em]">Realty Team</span>
      </span>
    ),
  },
  {
    label: "Eighth-note over i",
    node: (
      <span className="flex flex-col items-center leading-none">
        <span className="relative font-display text-3xl font-semibold tracking-tight">
          B<span className="relative">i
            <svg viewBox="0 0 12 16" className="absolute -top-2.5 left-1/2 h-3 w-3 -translate-x-1/2" style={{ color: GREEN }} aria-hidden>
              <path d="M5 2v9.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M5 2c3 .5 5 2 5 4" stroke="currentColor" strokeWidth="1.4" fill="none" />
              <circle cx="3" cy="12" r="2.4" fill="currentColor" />
            </svg>
          </span>rdsong
        </span>
        <span className="mt-2 text-[0.55rem] font-medium uppercase tracking-[0.5em]">Realty Team</span>
      </span>
    ),
  },
  {
    label: "Italic editorial",
    node: (
      <span className="flex flex-col items-center leading-none">
        <span className="font-display text-3xl font-semibold italic tracking-tight">Birdsong</span>
        <span className="mt-1.5 text-[0.55rem] font-medium uppercase tracking-[0.5em]">Realty Team</span>
      </span>
    ),
  },
  {
    label: "Tagline dots",
    node: (
      <span className="flex flex-col items-center leading-none">
        <span className="font-display text-3xl font-semibold tracking-tight">Birdsong</span>
        <span className="mt-1.5 text-[0.5rem] font-medium uppercase tracking-[0.35em]">Realty · Team · Austin</span>
      </span>
    ),
  },
  {
    label: "Small bird prefix",
    node: (
      <L>
        <Swallow className="h-7 w-7" />
        <span className="font-display text-2xl font-semibold tracking-tight">Birdsong</span>
      </L>
    ),
  },
]

const monograms: Item[] = [
  {
    label: "Circle B",
    node: (
      <L>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-current">
          <span className="font-display text-2xl font-semibold leading-none">B</span>
        </span>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Double-ring circle B",
    node: (
      <L>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-current">
          <span className="absolute inset-1 rounded-full border border-current opacity-50" />
          <span className="font-display text-xl font-semibold leading-none">B</span>
        </span>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Rounded square B",
    node: (
      <L>
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-current">
          <span className="font-display text-2xl font-semibold leading-none">B</span>
        </span>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Sharp square B",
    node: (
      <L>
        <span className="flex h-14 w-14 items-center justify-center border-2 border-current">
          <span className="font-display text-2xl font-semibold leading-none">B</span>
        </span>
        <Wordmark />
      </L>
    ),
  },
  { label: "Diamond B", node: <L><PolyFrame sides="diamond" /><Wordmark /></L> },
  { label: "Hexagon B", node: <L><PolyFrame sides="hex" /><Wordmark /></L> },
  { label: "Shield B", node: <L><PolyFrame sides="shield" /><Wordmark /></L> },
  {
    label: "Pill BR",
    node: (
      <L>
        <span className="flex h-12 items-center justify-center rounded-full border-2 border-current px-4">
          <span className="font-display text-xl font-semibold leading-none tracking-tight">BR</span>
        </span>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Square BR ligature",
    node: (
      <L>
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-current">
          <span className="font-display text-xl font-semibold leading-none tracking-tight">BR</span>
        </span>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Circle B + bird above",
    node: (
      <L>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-current">
          <Swallow className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2" />
          <span className="font-display text-xl font-semibold leading-none">B</span>
        </span>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Stacked B over name",
    node: (
      <span className="flex flex-col items-center leading-none">
        <span className="font-display text-3xl font-semibold">B</span>
        <span className="mt-1 h-px w-8 bg-current opacity-40" />
        <span className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.42em]">Birdsong</span>
      </span>
    ),
  },
  {
    label: "Serif b lowercase",
    node: (
      <L>
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-current">
          <span className="font-display text-2xl font-semibold italic leading-none">b</span>
        </span>
        <Wordmark />
      </L>
    ),
  },
]

const lineBirds: Item[] = [
  { label: "Minimal songbird", node: <L><LineSongbird className="h-12 w-12" /><Wordmark /></L> },
  { label: "Swallow swoosh", node: <L><Swallow className="h-12 w-12" /><Wordmark /></L> },
  { label: "Flock V", node: <L><FlyingV className="h-12 w-12" /><Wordmark /></L> },
  { label: "Singing bird + notes", node: <L><SingingBird className="h-12 w-12" /><Wordmark /></L> },
  {
    label: "Bird in ring",
    node: (
      <L>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-current">
          <LineSongbird className="h-9 w-9" />
        </span>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Bird over wordmark",
    node: (
      <span className="flex flex-col items-center leading-none">
        <LineSongbird className="h-9 w-9" />
        <span className="mt-1 font-display text-2xl font-semibold tracking-tight">Birdsong</span>
        <span className="mt-1 text-[0.5rem] font-medium uppercase tracking-[0.45em]">Realty Team</span>
      </span>
    ),
  },
  {
    label: "Two birds",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M8 30C16 22 22 22 26 28c4-6 10-6 16 1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 44C28 38 33 38 36 43c3-5 8-5 13 1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Bird + rising sun",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <circle cx="32" cy="34" r="16" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
          <path d="M16 40C24 30 30 30 34 37c4-7 10-7 16 2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Continuous-line bird",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M12 44c-2-9 4-17 14-18 1-4 5-6 9-5-1 2-1 4 0 5 6 1 10 6 10 12 0 1 4-1 7 1-3 1-5 2-7 4 1 3 0 6-2 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="33.5" cy="24.5" r="1.3" fill="currentColor" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Hummingbird",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M40 22l12-6-8 10c4 6 2 14-4 18-3 2-7 2-10 0l-14 6 9-12c-3-6-1-13 5-17 2-1 4-1 5 1z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
          <path d="M44 26l9-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
]

const filledBirds: Item[] = [
  { label: "Songbird silhouette", node: <L><FilledSongbird className="h-12 w-12" /><Wordmark /></L> },
  {
    label: "Filled swallow",
    node: (
      <L>
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
          <path d="M6 40c14-14 24-12 28 0 4-12 14-14 24-2-8-2-14 1-18 8-3-6-9-8-16-6-6 2-12 1-18 0z" fill="currentColor" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Bird knockout circle",
    node: (
      <L>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-current">
          <FilledSongbird className="h-9 w-9 text-[#10295A] [.bg-white_&]:text-white" />
        </span>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Bird on a dot",
    node: (
      <span className="flex flex-col items-center leading-none">
        <FilledSongbird className="h-9 w-9" />
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-current" />
        <span className="mt-1.5 font-display text-xl font-semibold tracking-tight">Birdsong</span>
      </span>
    ),
  },
  {
    label: "Origami bird",
    node: (
      <L>
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
          <path d="M8 42 34 14 37 35Z" fill="currentColor" opacity="0.9" />
          <path d="M34 14 56 24 37 35Z" fill="currentColor" opacity="0.5" />
          <path d="M37 35 50 52 24 47Z" fill="currentColor" opacity="0.72" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Origami two-tone",
    node: (
      <L>
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
          <path d="M10 46 32 12 36 40Z" fill="currentColor" />
          <path d="M32 12 54 30 36 40Z" fill={GREEN} />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Triangle bird",
    node: (
      <L>
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
          <path d="M10 38l22-22 4 18 16 4-24 8z" fill="currentColor" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Bird + leaf",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M16 44c-2-9 4-17 15-18 1-3 4-5 8-4-1 2-1 4 0 5 5 1 9 5 9 11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M44 40c6 0 10-4 10-10-6 0-10 4-10 10z" fill={GREEN} />
        </svg>
        <Wordmark />
      </L>
    ),
  },
]

const houseMarks: Item[] = [
  {
    label: "House + perched bird",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M13 54V30L32 15l19 15v24" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M11 54h42" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M27 54V40h10v14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M32 15c1-3 4-4.5 7-3.5-1.5.8-2 2-1.5 3.4 2 .6 3 2.2 2.6 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Roof becomes wing",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M10 36L32 16l22 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 16c6 4 9 9 9 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 40v14h32V40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "House in circle + bird",
    node: (
      <L>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-current">
          <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden>
            <path d="M8 34V18L20 8l12 10v16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M20 8c3-2 6-1 7 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Key + bird",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="2.4" />
          <path d="M31 31l16 16M41 41l5-5M45 45l4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M19 22c1-3 4-4 7-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Gable + bird ridge",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M12 52L32 18l20 34" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 52c0-7 5-12 10-12s10 5 10 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M28 22c2-2 5-2 7 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
]

const badges: Item[] = [
  {
    label: "Roundel curved text",
    node: (
      <svg viewBox="0 0 132 132" className="h-24 w-24" aria-hidden>
        <defs>
          <path id="ta" d="M22,66 a44,44 0 0,1 88,0" fill="none" />
          <path id="ba" d="M22,66 a44,44 0 0,0 88,0" fill="none" />
        </defs>
        <circle cx="66" cy="66" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="66" cy="66" r="50" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
        <text fill="currentColor" fontSize="8.5" letterSpacing="3.4" fontWeight="600">
          <textPath href="#ta" startOffset="50%" textAnchor="middle">BIRDSONG</textPath>
        </text>
        <text fill="currentColor" fontSize="6.5" letterSpacing="4" fontWeight="500">
          <textPath href="#ba" startOffset="50%" textAnchor="middle">REALTY · TEAM</textPath>
        </text>
        <g transform="translate(42,42) scale(0.78)">
          <path d="M11 41c0-11 8.5-20 20-20 2.5 0 5 .5 7 1.4 1.2-2.2 3.4-3.8 6-4.2-.7 1.7-.8 3.3-.4 4.8 4.6 2.8 7.7 7.9 7.7 13.7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M11 41c6 5 14 6 21 3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    ),
  },
  {
    label: "Oval badge",
    node: (
      <span className="flex h-20 w-28 flex-col items-center justify-center rounded-[50%] border-2 border-current">
        <FilledSongbird className="h-7 w-7" />
        <span className="mt-0.5 font-display text-sm font-semibold leading-none">Birdsong</span>
        <span className="mt-0.5 text-[0.42rem] font-medium uppercase tracking-[0.35em]">Realty Team</span>
      </span>
    ),
  },
  {
    label: "Ribbon emblem",
    node: (
      <span className="flex flex-col items-center leading-none">
        <LineSongbird className="h-8 w-8" />
        <span className="mt-1 border-y border-current px-3 py-1 font-display text-lg font-semibold tracking-tight">Birdsong</span>
        <span className="mt-1 text-[0.5rem] font-medium uppercase tracking-[0.4em]">Est · Austin</span>
      </span>
    ),
  },
  {
    label: "Shield emblem",
    node: (
      <span className="relative inline-flex h-20 w-16 items-center justify-center">
        <svg viewBox="0 0 64 80" className="absolute inset-0 h-full w-full" aria-hidden>
          <path d="M32 4 60 14v30c0 18-15 28-28 32C19 72 4 62 4 44V14L32 4Z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="flex flex-col items-center">
          <LineSongbird className="h-7 w-7" />
          <span className="mt-0.5 font-display text-[0.6rem] font-semibold uppercase tracking-widest">BRT</span>
        </span>
      </span>
    ),
  },
]

const abstract: Item[] = [
  {
    label: "Soundwave bars",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
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
      </L>
    ),
  },
  {
    label: "Sound ripples + bird",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M30 40C36 30 42 30 46 38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M14 24c4-3 8-3 12 0M10 32c6-5 14-5 20 0M8 41c8-7 20-7 28 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
          <circle cx="46" cy="20" r="3" fill={GREEN} />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Eighth-note bird",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M28 14v30" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M28 14c10 1 16 7 16 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <ellipse cx="20" cy="46" rx="8" ry="6" fill="currentColor" transform="rotate(-18 20 46)" />
          <path d="M40 24c2-2 5-2 7 0" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Branch tuning fork",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M32 54V34M22 14v12c0 4 4 8 10 8s10-4 10-8V14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 16c-3-2-6-2-9 0M42 16c3-2 6-2 9 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Wave + bird",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M6 42c8-10 14-10 18 0s10 10 18 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M42 24C48 16 54 18 56 26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="50" cy="18" r="2.4" fill={GREEN} />
        </svg>
        <Wordmark />
      </L>
    ),
  },
  {
    label: "Abstract B-wave",
    node: (
      <L>
        <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12" aria-hidden>
          <path d="M18 12v40M18 12h14c7 0 12 4 12 10s-5 10-12 10H18M18 32h16c7 0 12 4 12 10s-5 10-12 10H18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <Wordmark />
      </L>
    ),
  },
]

const groups: Group[] = [
  { title: "Wordmarks", items: wordmarks },
  { title: "Monogram marks", items: monograms },
  { title: "Line birds", items: lineBirds },
  { title: "Filled / geometric birds", items: filledBirds },
  { title: "House / real-estate", items: houseMarks },
  { title: "Badges & emblems", items: badges },
  { title: "Abstract / song", items: abstract },
]

export default function LogoPreviewPage() {
  let counter = 0
  const total = groups.reduce((a, g) => a + g.items.length, 0)
  return (
    <main className="min-h-screen bg-neutral-50 py-16">
      <div className="mx-auto max-w-6xl px-8">
        <h1 className="font-display text-3xl font-semibold text-neutral-900">
          Birdsong Realty Team — {total} logo directions
        </h1>
        <p className="mt-2 max-w-2xl text-neutral-500">
          A working board for the brand consult. Each mark is shown on navy and on
          white. Jot down the numbers you like — you can mix any mark with any
          wordmark treatment.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="contents">
              <SectionHead title={group.title} />
              {group.items.map((item) => {
                counter += 1
                return (
                  <Cell key={`${group.title}-${item.label}`} n={counter} label={item.label}>
                    {item.node}
                  </Cell>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
