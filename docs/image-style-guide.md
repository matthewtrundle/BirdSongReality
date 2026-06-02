# Birdsong Image Style Guide

This is the visual brand reference for any image we generate or commission for
birdsongrealtyteam.com. Used by `scripts/regenerate-images.ts` and human work alike.

---

## Brand prompt (applied to every generation)

> Photorealistic editorial real estate photography, Austin Texas. Golden hour
> natural light, warm color grading, shallow depth of field. Shot on Sony A7R IV
> with 35mm prime lens. Aspirational but grounded — feels lived-in, not staged
> stock photography. No text, no logos, no watermarks. No people facing the
> camera directly. Avoid: generic stock-photo cliches, oversaturated skies,
> cartoonish lighting.

The brand prompt is defined in `scripts/image-manifest.ts` as `BRAND_PROMPT` —
edit there if the look needs to evolve site-wide.

---

## Look-and-feel principles

| Do | Don't |
|---|---|
| Warm honeyed light, golden hour, twilight | Harsh midday sun, cool blue tones |
| 35mm-feel, shallow DoF, single subject | Wide-angle distortion, busy compositions |
| Subtle film grain or natural texture | Plasticky over-smoothed AI gloss |
| Real Austin geography references | Generic "any-city" downtown skylines |
| People in environment, not posed for camera | Smiling families looking into the lens |
| Architectural details, materials, plants | Sales-y "for sale" signs, branded swag |

---

## Composition notes

- **Hero images** (`public/images/hero/*`): 16:9, 2400px wide. Should work with
  a dark gradient overlay (most heroes have `from-primary-950/85` overlays in
  code). Keep critical detail in the center 60% — edges may be cropped on
  ultrawide viewports.
- **Blog images** (`public/images/blog/*`): 3:2 or 16:9, 1600–1920px wide. These
  appear as featured cards (cropped tighter) and as full-width article heroes.
  Compose with a clear focal point.
- **Section backgrounds** (`testimonials-bg`, `blog-bg`): texture-forward,
  unfocused enough that text overlays read clearly.
- **Avoid faces** — Austin-specific generic depictions (back-of-head, hands,
  silhouettes) read as authentic without putting AI-generated people front and
  center.

---

## Recommended models

Currently routing through OpenRouter:

| Model | Use for | Notes |
|---|---|---|
| `google/gemini-2.5-flash-image-preview` | Default — most images | Fast, photographic, ~$0.04/image |
| `black-forest-labs/flux-1.1-pro` (if available) | Higher-stakes hero images | Slightly better realism for architectural shots |

Flux generally beats Gemini on architectural detail. Gemini wins on speed and
consistent palette.

If OpenRouter doesn't surface a working image-gen model on the user's plan,
switch to **Replicate** (`black-forest-labs/flux-1.1-pro`) directly — separate
`REPLICATE_API_TOKEN`, similar JSON shape but the script needs adapting.

---

## Workflow

1. Edit prompts in `scripts/image-manifest.ts` if needed.
2. Test a single image: `npm run images:regen -- --only=blog/family-neighborhood.jpg`
3. Open `public/images/blog/__new/family-neighborhood.jpg` in Preview / Finder.
   Compare side-by-side with the original.
4. If the prompt needs tweaking, edit and re-run.
5. Once happy with the prompt style, run the full batch: `npm run images:regen`
6. Visually review every file in `__new/` folders.
7. Promote: `npm run images:regen -- --commit`. This `mv`s `__new/foo.jpg` over
   the original.
8. Commit the new JPGs to git.

The `public/images/**/__new/` paths are gitignored so previews don't pollute the
working tree.

---

## Cost expectations

- Gemini 2.5 Flash Image via OpenRouter: ~$0.04 / image
- 23-image batch ≈ $0.90
- Single test image is negligible

Add a `console.log` of the response cost (OpenRouter returns usage) if you need
exact tracking — currently the script doesn't surface it.

---

## When to NOT generate

- **Headshots** of real Birdsong team members. Always real photography.
- **Specific properties** in the portfolio. Use real listing photos.
- **Specific Austin landmarks** where you need accuracy (the Capitol, Frost
  Tower, etc.) — AI often hallucinates details. Use stock or commissioned
  photography for these or be very specific in the prompt.

---

## Editing this guide

When the brand evolves (e.g., the Birdsong palette shifts, or a new image style
proves more effective), update `BRAND_PROMPT` in
`scripts/image-manifest.ts:30` AND the prompt block at the top of this doc so
they stay in sync.
