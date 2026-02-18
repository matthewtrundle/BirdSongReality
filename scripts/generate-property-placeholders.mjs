import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const propertiesDir = path.join(publicDir, "images", "properties");

// All property images needed from properties.json
const propertyImages = [
  { slug: "westlake-hills-estate", file: "hero.jpg", label: "Westlake Hills Estate" },
  { slug: "westlake-hills-estate", file: "living.jpg", label: "Living Room" },
  { slug: "westlake-hills-estate", file: "pool.jpg", label: "Infinity Pool" },
  { slug: "westlake-hills-estate", file: "master.jpg", label: "Primary Suite" },
  { slug: "westlake-hills-estate", file: "kitchen.jpg", label: "Kitchen" },
  { slug: "tarrytown-craftsman", file: "hero.jpg", label: "Tarrytown Craftsman" },
  { slug: "tarrytown-craftsman", file: "living.jpg", label: "Living Room" },
  { slug: "tarrytown-craftsman", file: "backyard.jpg", label: "Backyard" },
  { slug: "tarrytown-craftsman", file: "kitchen.jpg", label: "Kitchen" },
  { slug: "barton-creek-lakefront", file: "hero.jpg", label: "Barton Creek Lakefront" },
  { slug: "barton-creek-lakefront", file: "lake-view.jpg", label: "Lake View" },
  { slug: "barton-creek-lakefront", file: "dock.jpg", label: "Dock" },
  { slug: "barton-creek-lakefront", file: "pool.jpg", label: "Pool" },
  { slug: "downtown-penthouse", file: "hero.jpg", label: "Downtown Penthouse" },
  { slug: "downtown-penthouse", file: "view.jpg", label: "Skyline View" },
  { slug: "downtown-penthouse", file: "terrace.jpg", label: "Terrace" },
  { slug: "downtown-penthouse", file: "master.jpg", label: "Primary Suite" },
  { slug: "mueller-modern", file: "hero.jpg", label: "Mueller Modern" },
  { slug: "mueller-modern", file: "living.jpg", label: "Living Room" },
  { slug: "mueller-modern", file: "kitchen.jpg", label: "Kitchen" },
  { slug: "mueller-modern", file: "porch.jpg", label: "Front Porch" },
  { slug: "zilker-bungalow", file: "hero.jpg", label: "Zilker Bungalow" },
  { slug: "zilker-bungalow", file: "living.jpg", label: "Living Room" },
  { slug: "zilker-bungalow", file: "backyard.jpg", label: "Backyard" },
  { slug: "hyde-park-victorian", file: "hero.jpg", label: "Hyde Park Victorian" },
  { slug: "hyde-park-victorian", file: "porch.jpg", label: "Wrap-Around Porch" },
  { slug: "hyde-park-victorian", file: "living.jpg", label: "Living Room" },
  { slug: "hyde-park-victorian", file: "studio.jpg", label: "Art Studio" },
  { slug: "south-congress-loft", file: "hero.jpg", label: "South Congress Loft" },
  { slug: "south-congress-loft", file: "living.jpg", label: "Living Space" },
  { slug: "south-congress-loft", file: "rooftop.jpg", label: "Rooftop Deck" },
  { slug: "east-austin-modern", file: "hero.jpg", label: "East Austin Modern" },
  { slug: "east-austin-modern", file: "courtyard.jpg", label: "Courtyard" },
  { slug: "east-austin-modern", file: "living.jpg", label: "Living Room" },
  { slug: "east-austin-modern", file: "rooftop.jpg", label: "Rooftop Deck" },
  { slug: "allandale-ranch", file: "hero.jpg", label: "Allandale Ranch" },
  { slug: "allandale-ranch", file: "pool.jpg", label: "Pool" },
  { slug: "allandale-ranch", file: "living.jpg", label: "Living Room" },
  { slug: "travis-heights-retreat", file: "hero.jpg", label: "Travis Heights Retreat" },
  { slug: "travis-heights-retreat", file: "deck.jpg", label: "Multi-Level Deck" },
  { slug: "travis-heights-retreat", file: "living.jpg", label: "Living Room" },
  { slug: "travis-heights-retreat", file: "backyard.jpg", label: "Backyard" },
  { slug: "lake-travis-villa", file: "hero.jpg", label: "Lake Travis Villa" },
  { slug: "lake-travis-villa", file: "lake-view.jpg", label: "Lake View" },
  { slug: "lake-travis-villa", file: "pool.jpg", label: "Pool" },
  { slug: "lake-travis-villa", file: "living.jpg", label: "Living Room" },
  { slug: "rosedale-cottage", file: "hero.jpg", label: "Rosedale Cottage" },
  { slug: "rosedale-cottage", file: "garden.jpg", label: "Garden" },
  { slug: "rosedale-cottage", file: "kitchen.jpg", label: "Kitchen" },
  { slug: "downtown-condo", file: "hero.jpg", label: "Downtown Condo" },
  { slug: "downtown-condo", file: "view.jpg", label: "City View" },
  { slug: "downtown-condo", file: "kitchen.jpg", label: "Kitchen" },
  { slug: "steiner-ranch-family", file: "hero.jpg", label: "Steiner Ranch Family" },
  { slug: "steiner-ranch-family", file: "pool.jpg", label: "Pool" },
  { slug: "steiner-ranch-family", file: "media.jpg", label: "Media Room" },
  { slug: "steiner-ranch-family", file: "view.jpg", label: "Lake Travis View" },
  { slug: "clarksville-townhome", file: "hero.jpg", label: "Clarksville Townhome" },
  { slug: "clarksville-townhome", file: "rooftop.jpg", label: "Rooftop" },
  { slug: "clarksville-townhome", file: "kitchen.jpg", label: "Kitchen" },
  { slug: "clarksville-townhome", file: "living.jpg", label: "Living Room" },
  { slug: "cedar-park-new-build", file: "hero.jpg", label: "Cedar Park New Build" },
  { slug: "cedar-park-new-build", file: "kitchen.jpg", label: "Kitchen" },
  { slug: "cedar-park-new-build", file: "patio.jpg", label: "Patio" },
  { slug: "bouldin-creek-duplex", file: "hero.jpg", label: "Bouldin Creek Duplex" },
  { slug: "bouldin-creek-duplex", file: "interior.jpg", label: "Interior" },
  { slug: "bouldin-creek-duplex", file: "exterior.jpg", label: "Exterior" },
  { slug: "north-loop-cottage", file: "hero.jpg", label: "North Loop Cottage" },
  { slug: "north-loop-cottage", file: "porch.jpg", label: "Front Porch" },
  { slug: "north-loop-cottage", file: "kitchen.jpg", label: "Kitchen" },
  { slug: "lake-austin-sanctuary", file: "hero.jpg", label: "Lake Austin Sanctuary" },
  { slug: "lake-austin-sanctuary", file: "dock.jpg", label: "Boat Dock" },
  { slug: "lake-austin-sanctuary", file: "living.jpg", label: "Living Room" },
  { slug: "lake-austin-sanctuary", file: "garden.jpg", label: "Garden" },
];

function createSVG(label, sublabel, width, height) {
  // Branded colors
  const bgColor1 = "#0a1423"; // primary-950
  const bgColor2 = "#1a2a3d"; // primary-900
  const accentColor = "#c9a962"; // accent-500
  const textColor = "#ffffff";
  const subtextColor = "rgba(255,255,255,0.5)";

  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${bgColor1}"/>
          <stop offset="100%" style="stop-color:${bgColor2}"/>
        </linearGradient>
        <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:transparent"/>
          <stop offset="30%" style="stop-color:${accentColor}"/>
          <stop offset="70%" style="stop-color:${accentColor}"/>
          <stop offset="100%" style="stop-color:transparent"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <!-- Subtle grid pattern -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <!-- Accent line -->
      <rect x="${width * 0.3}" y="${height * 0.42}" width="${width * 0.4}" height="1" fill="url(#line)"/>
      <!-- Property icon placeholder -->
      <text x="${width / 2}" y="${height * 0.38}" font-family="system-ui, -apple-system, sans-serif" font-size="${Math.max(14, width * 0.025)}" fill="${accentColor}" text-anchor="middle" letter-spacing="3">BIRDSONG REALTY</text>
      <!-- Label -->
      <text x="${width / 2}" y="${height * 0.52}" font-family="system-ui, -apple-system, sans-serif" font-size="${Math.max(20, width * 0.035)}" fill="${textColor}" text-anchor="middle" font-weight="300" letter-spacing="1">${label}</text>
      <!-- Sublabel -->
      <text x="${width / 2}" y="${height * 0.60}" font-family="system-ui, -apple-system, sans-serif" font-size="${Math.max(12, width * 0.02)}" fill="${subtextColor}" text-anchor="middle" letter-spacing="2">${sublabel.toUpperCase()}</text>
      <!-- Bottom accent -->
      <rect x="${width * 0.45}" y="${height * 0.66}" width="${width * 0.1}" height="2" fill="${accentColor}" opacity="0.5" rx="1"/>
    </svg>
  `);
}

async function main() {
  const width = 1200;
  const height = 800;

  let generated = 0;
  let skipped = 0;

  for (const img of propertyImages) {
    const dir = path.join(propertiesDir, img.slug);
    fs.mkdirSync(dir, { recursive: true });

    const outputPath = path.join(dir, img.file);

    // Skip if already exists (preserve DALL-E generated ones)
    if (fs.existsSync(outputPath)) {
      skipped++;
      continue;
    }

    const propertyName = img.slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    const svg = createSVG(propertyName, img.label, width, height);

    await sharp(svg).jpeg({ quality: 85 }).toFile(outputPath);

    generated++;
  }

  console.log(`Done! ${generated} placeholders generated, ${skipped} already existed (kept).`);
}

main().catch(console.error);
