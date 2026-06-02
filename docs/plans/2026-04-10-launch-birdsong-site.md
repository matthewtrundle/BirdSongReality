# Birdsong Realty Website Launch Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Get the Birdsong Realty website live on a custom domain with working lead capture, email notifications, and CRM integration.

**Architecture:** Next.js 16 on Vercel. Resend for transactional email. Follow Up Boss for CRM. Curated featured listings (no live IDX). AI chat via Vercel AI Gateway.

**Tech Stack:** Next.js 16, Vercel, Resend, Follow Up Boss API, React Email

---

## Context from Client (Erin, April 9 2026)

Erin confirmed the following decisions:
- **Domain**: They do NOT own one yet. Need help purchasing.
- **Logo**: Patrick mentioned Matt was working on one. Wants to see it.
- **Leads/CRM**: They use **Follow Up Boss**. Leads currently come via Drivebytech to Patrick. Going forward, **both Patrick and Erin** should receive leads.
- **Auto-responses**: Yes, they want them. Will work out wording.
- **AI follow-up**: Interested in the AI communications platform.
- **Listings**: **Option C** - curated featured listings only. No live IDX search.
- **Photos/Content**: Still needs real photos and content review.

---

## Phase 1: Things That Need Client Input (Blockers)

These items require action from Erin/Patrick before we can proceed. Send a consolidated email covering all of them.

### Task 1: Send "Pre-Launch Checklist" Email to Erin

**Action:** Draft and send an email asking for everything we need from their side. This unblocks the rest of the plan.

**Items to request:**

1. **Domain name preference** - Suggest `birdsongrealtyteam.com` (matches their email) or `birdsongrealty.com`. Offer to purchase on their behalf via Namecheap/Google Domains (~$12/yr). Need their preference.

2. **Follow Up Boss API key** - They need to go to FUB > Admin > API and copy the API key. Include step-by-step instructions. Also confirm: should Erin receive ALL lead types or just certain ones?

3. **Erin's notification email address** - Currently only `patrick@birdsongrealtyteam.com` is configured. Need Erin's preferred email (likely `info@birdsongrealtyteam.com` or `erin@birdsongrealtyteam.com`).

4. **Auto-response wording approval** - Send them the current auto-response text for review. The template is already built in `src/emails/inquiry-confirmation.tsx`.

5. **Professional photos** - Team headshots, property photos, Austin lifestyle shots. These replace placeholder images.

6. **About page bio review** - Ask them to review the About page content at the preview link and flag any corrections.

7. **Logo direction** - Send the current logo (`public/logo.png`) and ask if Patrick wants to keep it, modify it, or provide something new.

---

## Phase 2: Technical Work (Can Start Now)

### Task 2: Add Erin as Lead Notification Recipient

**Files:**
- Modify: `src/lib/lead-handler.ts`

**Step 1:** Read the current lead-handler.ts to find the notification email recipient configuration.

**Step 2:** Update the notification logic to send to both Patrick AND Erin. The handler currently sends `LeadNotification` to `patrick@birdsongrealtyteam.com`. Add a second recipient (configurable via env var `NOTIFICATION_EMAILS` as comma-separated list).

**Step 3:** Update `.env.local` to add:
```
NOTIFICATION_EMAILS=patrick@birdsongrealtyteam.com,info@birdsongrealtyteam.com
```

**Step 4:** Test that the lead handler reads the env var and sends to both addresses.

**Step 5:** Commit.
```bash
git commit -m "feat: support multiple lead notification recipients"
```

---

### Task 3: Update Site for Option C (Curated Listings Only)

**Context:** Erin chose Option C - no live IDX search, just curated featured listings they update manually. The site already supports this via the portfolio/listing pages. Ensure there's no "Search All Listings" functionality that implies live MLS data.

**Step 1:** Audit the site for any references to live property search, IDX, or MLS search pages. Check navigation, CTAs, and footer links.

**Step 2:** If there's a property search page or search functionality that implies live data, either remove it or rework it to be a "Featured Listings" / "View Our Portfolio" page.

**Step 3:** Ensure the portfolio page (`src/app/portfolio/page.tsx`) is prominent in navigation and clearly positioned as curated listings.

**Step 4:** Commit.
```bash
git commit -m "feat: position site for curated listings approach (Option C)"
```

---

### Task 4: Set Up Resend Email Domain for birdsongrealtyteam.com

**Context:** Emails are configured to send from `noreply@birdsongrealtyteam.com` via Resend. For this to work in production, the domain needs to be verified in Resend with DNS records.

**Step 1:** Once the domain is purchased, add it to Resend dashboard.

**Step 2:** Add the required DNS records (DKIM, SPF, DMARC) to the domain registrar.

**Step 3:** Verify domain in Resend.

**Step 4:** Get the production Resend API key and add to Vercel environment variables.

**Blocked by:** Domain purchase (Task 1).

---

### Task 5: Configure Vercel Production Environment Variables

**Files:**
- Vercel Dashboard > Project Settings > Environment Variables

**Step 1:** Set the following production environment variables on Vercel:

```
NEXT_PUBLIC_SITE_URL=https://birdsongrealtyteam.com
RESEND_API_KEY=<from Resend dashboard>
FOLLOWUPBOSS_API_KEY=<from Erin>
NOTIFICATION_EMAILS=patrick@birdsongrealtyteam.com,info@birdsongrealtyteam.com
AI_GATEWAY_API_KEY=<already configured or from Vercel AI Gateway>
```

**Step 2:** Verify the Google Sheets backup logging env vars. If they don't want Google Sheets tracking, these can be left empty (the system handles missing vars gracefully).

**Blocked by:** Resend API key (Task 4), FUB API key (Task 1).

---

### Task 6: Connect Custom Domain on Vercel

**Step 1:** Purchase domain (likely `birdsongrealtyteam.com`).

**Step 2:** In Vercel Dashboard > Project > Domains, add the custom domain.

**Step 3:** Update DNS at the registrar:
- A record: `76.76.21.21`
- CNAME for `www`: `cname.vercel-dns.com`

**Step 4:** Wait for DNS propagation and SSL certificate provisioning.

**Step 5:** Verify site loads at the custom domain.

**Blocked by:** Domain purchase (Task 1).

---

### Task 7: Update SITE_CONFIG and Metadata for Production Domain

**Files:**
- Modify: Site config file (wherever `SITE_CONFIG` is defined)
- Modify: `src/app/layout.tsx` (metadata/OG tags)

**Step 1:** Verify `SITE_CONFIG` already references `https://birdsongrealtyteam.com`. Update if needed.

**Step 2:** Verify OG image, site title, description are all production-ready.

**Step 3:** Check robots.txt and sitemap configuration - ensure the site will be indexable.

**Step 4:** Commit.
```bash
git commit -m "chore: verify production metadata and SEO config"
```

---

### Task 8: Swap Placeholder Images with Real Photos

**Context:** Blog posts and interior pages have placeholder images. Once Erin sends professional photos, swap them in.

**Step 1:** Catalog all placeholder images currently in use (look for stock photos, unsplash references, or generic real estate imagery).

**Step 2:** Receive photos from Erin.

**Step 3:** Optimize images (WebP, appropriate sizing) and replace placeholders.

**Step 4:** Commit.
```bash
git commit -m "chore: replace placeholder images with professional photos"
```

**Blocked by:** Photos from Erin (Task 1).

---

### Task 9: Final Logo Integration

**Step 1:** Once Patrick confirms the logo direction, update `public/logo.png`.

**Step 2:** Verify it renders correctly in the header (check the brightness/invert CSS filter in `src/components/layout/header.tsx`).

**Step 3:** Update the email template logo if needed (`src/emails/base-layout.tsx` currently uses text-based logo).

**Step 4:** Commit.
```bash
git commit -m "chore: update logo to final approved version"
```

**Blocked by:** Logo decision from Patrick (Task 1).

---

## Phase 3: Pre-Launch QA

### Task 10: End-to-End Testing

**Step 1:** Test all contact forms submit successfully and trigger:
- Email to Patrick AND Erin
- Auto-response to the lead
- Follow Up Boss event creation

**Step 2:** Test the AI chat widget works in production.

**Step 3:** Test all pages render correctly on mobile, tablet, desktop.

**Step 4:** Run Lighthouse audit for performance, accessibility, SEO.

**Step 5:** Verify all internal links work (no 404s).

**Step 6:** Check that `robots.txt` and sitemap are correct.

---

## Phase 4: Launch

### Task 11: Go Live

**Step 1:** Deploy final build to Vercel.

**Step 2:** Verify custom domain serves the site with SSL.

**Step 3:** Submit sitemap to Google Search Console.

**Step 4:** Send "We're Live" email to Erin and Patrick with the URL.

---

## Dependency Graph

```
Task 1 (Email to Erin) ─── unblocks everything below
  ├── Task 4 (Resend domain) ──> Task 5 (Vercel env vars)
  ├── Task 6 (Custom domain) ──> Task 7 (Update SITE_CONFIG)
  ├── Task 8 (Swap photos)
  └── Task 9 (Logo)

Tasks 2, 3 ──> Can start immediately (no blockers)

Tasks 10, 11 ──> After all above complete
```

## Summary: What We Can Do Right Now vs. What's Blocked

| Can Do Now | Blocked On Erin/Patrick |
|---|---|
| Task 2: Add Erin as notification recipient | Task 1: Domain preference |
| Task 3: Audit/update for Option C listings | Task 1: Follow Up Boss API key |
| Task 7: Verify SEO/metadata config | Task 1: Logo decision |
| | Task 1: Professional photos |
| | Task 1: Auto-response wording approval |
| | Task 1: About page bio review |
