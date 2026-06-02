/**
 * Birdsong image regeneration via OpenRouter.
 *
 * Reads scripts/image-manifest.ts, calls OpenRouter image-gen models, writes
 * images to public/images/<dir>/__new/<file>. Originals untouched until you
 * pass --commit to promote them.
 *
 * Setup:
 *   1. Set OPENROUTER_API_KEY in .env.local (rotate first if it has been pasted in chat).
 *   2. npm install (ensures sharp + dotenv).
 *   3. npm install --save-dev tsx
 *
 * Usage:
 *   npm run images:regen                                  # batch, generate to __new/
 *   npm run images:regen -- --only=blog/family-neighborhood.jpg
 *   npm run images:regen -- --dry-run                     # log prompts only
 *   npm run images:regen -- --commit                      # promote __new/* over originals
 *   npm run images:regen -- --model=google/gemini-2.5-flash-image-preview
 */

import { readFile, mkdir, rename } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"
import "dotenv/config"

import { TARGETS, BRAND_PROMPT, type ImageTarget } from "./image-manifest"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const REPO_ROOT = path.resolve(__dirname, "..")
const PUBLIC_DIR = path.join(REPO_ROOT, "public")

interface CliFlags {
  only: string | null
  dryRun: boolean
  commit: boolean
  model: string
}

function parseArgs(argv: string[]): CliFlags {
  const flags: CliFlags = {
    only: null,
    dryRun: false,
    commit: false,
    model: "google/gemini-2.5-flash-image-preview",
  }
  for (const arg of argv.slice(2)) {
    if (arg === "--dry-run") flags.dryRun = true
    else if (arg === "--commit") flags.commit = true
    else if (arg.startsWith("--only=")) flags.only = arg.slice("--only=".length)
    else if (arg.startsWith("--model=")) flags.model = arg.slice("--model=".length)
  }
  return flags
}

function aspectToHeight(aspect: ImageTarget["aspect"], width: number): number {
  const [w, h] = aspect.split(":").map(Number)
  return Math.round((width * h) / w)
}

function newPathFor(target: ImageTarget): string {
  // images/blog/foo.jpg -> public/images/blog/__new/foo.jpg
  const parsed = path.parse(target.outputPath)
  return path.join(PUBLIC_DIR, parsed.dir, "__new", parsed.base)
}

function finalPathFor(target: ImageTarget): string {
  return path.join(PUBLIC_DIR, target.outputPath)
}

async function callOpenRouter(
  apiKey: string,
  model: string,
  prompt: string,
  aspect: string,
): Promise<Buffer> {
  const fullPrompt = `${BRAND_PROMPT}\n\nSubject: ${prompt}\n\nAspect ratio: ${aspect}.`

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://birdsongrealtyteam.com",
      "X-Title": "Birdsong Realty Image Pipeline",
    },
    body: JSON.stringify({
      model,
      modalities: ["image", "text"],
      messages: [{ role: "user", content: fullPrompt }],
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`OpenRouter ${res.status}: ${text.slice(0, 500)}`)
  }

  const json = (await res.json()) as {
    choices?: Array<{
      message?: {
        content?: string
        images?: Array<{ image_url?: { url?: string } }>
      }
    }>
  }

  const dataUrl = json.choices?.[0]?.message?.images?.[0]?.image_url?.url
  if (!dataUrl) {
    throw new Error(
      `No image in response. Model may not support image generation.\nResponse: ${JSON.stringify(json).slice(0, 800)}`,
    )
  }

  const match = dataUrl.match(/^data:(image\/[a-z+]+);base64,(.+)$/i)
  if (!match) throw new Error(`Unexpected data URL format: ${dataUrl.slice(0, 80)}`)
  return Buffer.from(match[2], "base64")
}

async function processTarget(
  target: ImageTarget,
  flags: CliFlags,
  apiKey: string,
): Promise<void> {
  const outNew = newPathFor(target)
  const height = aspectToHeight(target.aspect, target.width)
  const label = target.outputPath

  if (flags.dryRun) {
    console.log(`\n[dry-run] ${label}  (${target.width}x${height}, ${target.aspect})`)
    console.log(`  prompt: ${target.prompt}`)
    return
  }

  console.log(`\n→ ${label}  (${target.width}x${height})`)
  const start = Date.now()
  const rawImage = await callOpenRouter(apiKey, flags.model, target.prompt, target.aspect)

  // Resize / crop to exact dimensions, save as JPEG with reasonable quality
  await mkdir(path.dirname(outNew), { recursive: true })
  await sharp(rawImage)
    .resize(target.width, height, { fit: "cover", position: "center" })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(outNew)

  const ms = Date.now() - start
  console.log(`  ✓ wrote ${path.relative(REPO_ROOT, outNew)} in ${(ms / 1000).toFixed(1)}s`)
}

async function commitTargets(targets: ImageTarget[]): Promise<void> {
  console.log("\nPromoting __new/ files to final paths...\n")
  let promoted = 0
  for (const target of targets) {
    const src = newPathFor(target)
    const dst = finalPathFor(target)
    if (!existsSync(src)) {
      console.log(`  · skip (no __new file): ${target.outputPath}`)
      continue
    }
    await rename(src, dst)
    console.log(`  ✓ ${target.outputPath}`)
    promoted++
  }
  console.log(`\nPromoted ${promoted} file(s).`)
}

async function main(): Promise<void> {
  const flags = parseArgs(process.argv)
  const apiKey = process.env.OPENROUTER_API_KEY

  // Load .env.local explicitly (dotenv/config only reads .env)
  if (!apiKey) {
    const envLocal = path.join(REPO_ROOT, ".env.local")
    if (existsSync(envLocal)) {
      const text = await readFile(envLocal, "utf8")
      const match = text.match(/^OPENROUTER_API_KEY\s*=\s*(.+)$/m)
      if (match) process.env.OPENROUTER_API_KEY = match[1].trim().replace(/^["']|["']$/g, "")
    }
  }

  const filtered = flags.only
    ? TARGETS.filter((t) => t.outputPath.endsWith(flags.only!))
    : TARGETS

  if (filtered.length === 0) {
    console.error(`No targets match --only=${flags.only}`)
    process.exit(1)
  }

  if (flags.commit) {
    await commitTargets(filtered)
    return
  }

  if (!flags.dryRun && !process.env.OPENROUTER_API_KEY) {
    console.error("Missing OPENROUTER_API_KEY. Set it in .env.local and re-run.")
    console.error("Or use --dry-run to preview prompts without calling the API.")
    process.exit(1)
  }

  console.log(
    `Regenerating ${filtered.length} image(s) via ${flags.model}${flags.dryRun ? " (dry run)" : ""}`,
  )

  let ok = 0
  let failed = 0
  for (const target of filtered) {
    try {
      await processTarget(target, flags, process.env.OPENROUTER_API_KEY ?? "")
      ok++
    } catch (err) {
      failed++
      console.error(`  ✗ ${target.outputPath}: ${(err as Error).message}`)
    }
  }

  console.log(`\nDone. ${ok} succeeded, ${failed} failed.`)
  if (!flags.dryRun && ok > 0) {
    console.log("\nReview generated files in public/images/<dir>/__new/")
    console.log("When happy, promote them with:  npm run images:regen -- --commit")
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
