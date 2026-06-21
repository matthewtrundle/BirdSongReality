/**
 * Derives transparent-background brand assets from the client-selected
 * "A2" seal logo (public/images/logo-ai/02-songbird-seal.png).
 *
 * The source is a navy + green seal on a SOLID WHITE background (no alpha),
 * which can't sit on the dark site header or the warm ROA paper background.
 * This script knocks out the white, then emits two variants:
 *   - seal-navy.png   navy/green seal, transparent bg  (for light surfaces)
 *   - seal-white.png  monochrome white seal, transparent bg (for dark surfaces)
 * Both are auto-trimmed to the artwork and exported at icon + retina sizes.
 *
 * Run: node scripts/generate-seal-logo.mjs
 */
import sharp from "sharp"
import { mkdir } from "node:fs/promises"

const SRC = "public/images/logo-ai/02-songbird-seal.png"
const OUT_DIR = "public/images/brand"

async function build() {
  await mkdir(OUT_DIR, { recursive: true })

  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  const navy = Buffer.from(data) // copy → original colors + knockout alpha
  const white = Buffer.from(data) // copy → forced white + knockout alpha

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    // "Whiteness" knockout: pure white bg (min≈255) → alpha 0,
    // dark navy / saturated green ink (low min) → fully opaque.
    const minc = Math.min(r, g, b)
    // Near-white (paper/AA fringe) → fully transparent; ink ramps to opaque.
    const alpha = minc >= 248 ? 0 : Math.min(255, Math.round((248 - minc) * 1.3))

    navy[i + 3] = alpha

    white[i] = 255
    white[i + 1] = 255
    white[i + 2] = 255
    white[i + 3] = alpha
  }

  const rawOpts = { raw: { width, height, channels } }

  // Navy variant — trimmed, transparent
  await sharp(navy, rawOpts)
    .trim({ threshold: 10 })
    .png()
    .toFile(`${OUT_DIR}/seal-navy.png`)

  // White variant — trimmed, transparent
  await sharp(white, rawOpts)
    .trim({ threshold: 10 })
    .png()
    .toFile(`${OUT_DIR}/seal-white.png`)

  // Square favicon/app icon from the navy seal (padded onto transparent square)
  const navyTrim = await sharp(navy, rawOpts).trim({ threshold: 10 }).png().toBuffer()
  const meta = await sharp(navyTrim).metadata()
  const side = Math.max(meta.width, meta.height)
  await sharp(navyTrim)
    .resize(side, side, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(`${OUT_DIR}/seal-icon-512.png`)

  for (const f of ["seal-navy.png", "seal-white.png", "seal-icon-512.png"]) {
    const m = await sharp(`${OUT_DIR}/${f}`).metadata()
    console.log(`✓ ${OUT_DIR}/${f} — ${m.width}x${m.height}`)
  }
}

build().catch((e) => {
  console.error(e)
  process.exit(1)
})
