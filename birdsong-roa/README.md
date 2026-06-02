# Birdsong | Realty of America

Marketing site for the Birdsong Realty Team at Realty of America. Austin, TX.

This is a **separate Next.js application** living as a sibling to the existing
Birdsong consumer site at the repository root. The two apps:

- Share **nothing** — independent `package.json`, `node_modules`, build, and deploy.
- Will deploy to **separate Vercel projects** with **separate domains**.
- Live in the same git repo for convenience while both are under the same team.

## Why a sibling, not a monorepo

Converting to npm workspaces would require moving the existing Birdsong site
into `apps/birdsong/`, which is exactly the kind of "overwrite" we want to avoid
during the ROA transition. Sibling-directory keeps the existing site
completely untouched.

If we later have a real reason to share components or analytics across the two
sites, we can promote to a monorepo at that point.

## Stack

- Next.js 16 (App Router) · React 19
- Tailwind CSS v4
- Figtree (Google Font, single typeface — matches Realty of America's design language)
- TypeScript strict

## Run locally

```bash
cd birdsong-roa
npm install
npm run dev
```

Visit http://localhost:3000.

> If port 3000 is already taken by the existing Birdsong site, run
> `PORT=3001 npm run dev` instead.

## Deploying

Create a **new Vercel project** pointing at the **root directory** `birdsong-roa/`.
Do not point it at the repo root — that would deploy the existing Birdsong site.

## Design DNA

Visual language is adapted from [realtyofamerica.com](https://www.realtyofamerica.com/)
so this site reads as part of the ROA visual ecosystem:

- **Navy primary** (`#10295A`) — single dominant brand color
- **Accent green-teal** (`#1A9175`) — surgical use only (active states, success)
- **Figtree** — single typeface, weights 400/500/600/700, tight tracking on headings
- **16px button radius** — ROA's signature pill-vs-square middle ground

See `src/app/globals.css` for full design tokens.

## Structure

```
birdsong-roa/
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← root layout, fonts, header/footer
│   │   ├── page.tsx          ← home (all sections inline for v0)
│   │   └── globals.css       ← Tailwind + design tokens
│   └── components/
│       └── site/
│           ├── site-header.tsx
│           └── site-footer.tsx
└── public/
```

## Roadmap (not yet built)

- `/buy`, `/sell`, `/rent` listing pages
- `/team` Patrick Birdsong bio
- `/join` agent recruiting flow with form → calendar handoff
- `/why-roa` longer-form ROA value-prop page
- `/neighborhoods/[slug]` neighborhood detail pages
- Real photography (currently uses gradient placeholders for hero/listing/neighborhood imagery)
- Listing data integration (FUB or ROA's listing feed when available)
