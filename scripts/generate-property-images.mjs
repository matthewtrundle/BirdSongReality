import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Property image definitions with contextual prompts
const properties = [
  {
    slug: "westlake-hills-estate",
    description: "6BR luxury estate, Hill Country views, infinity pool, live oaks, gated",
    images: [
      { file: "hero.jpg", prompt: "Stunning luxury estate home in Westlake Hills Austin Texas, Mediterranean style architecture, large facade with stone accents, mature live oak trees in front yard, manicured landscaping, gated entry, golden hour light, professional real estate exterior photography, wide angle" },
      { file: "living.jpg", prompt: "Luxurious open living room in a Westlake Hills estate, floor-to-ceiling windows with Hill Country views, 12-foot ceilings, modern furniture, natural stone fireplace, warm natural light, professional real estate interior photography" },
      { file: "pool.jpg", prompt: "Stunning infinity edge pool overlooking Texas Hill Country, luxurious backyard with outdoor kitchen, stone patio, mature live oak trees, sunset sky, resort-style real estate photography" },
      { file: "master.jpg", prompt: "Elegant primary bedroom suite with panoramic Hill Country views through large windows, king bed with luxury linens, sitting area, neutral tones, natural light, professional real estate interior photography" },
      { file: "kitchen.jpg", prompt: "Gourmet chef's kitchen with Sub-Zero refrigerator and Wolf range, large marble island with seating, custom white cabinetry, pendant lights, Hill Country view through window, professional real estate photography" },
    ],
  },
  {
    slug: "tarrytown-craftsman",
    description: "4BR craftsman, original details restored, large lot, central Austin",
    images: [
      { file: "hero.jpg", prompt: "Beautiful craftsman-style bungalow home in Tarrytown Austin Texas, wide front porch with columns, green lawn, mature trees, charming residential street, warm afternoon light, professional real estate exterior photography" },
      { file: "living.jpg", prompt: "Restored craftsman living room with original hardwood floors, built-in bookshelves, crown molding, fireplace with tile surround, warm natural light, Austin craftsman home interior photography" },
      { file: "backyard.jpg", prompt: "Large landscaped backyard of a Tarrytown Austin home, mature pecan tree, green grass, stone patio area, garden beds with native Texas plants, privacy fence, real estate photography" },
      { file: "kitchen.jpg", prompt: "Updated craftsman kitchen blending modern appliances with vintage character, subway tile backsplash, butcher block counters, pendant lighting, open to dining area, real estate interior photography" },
    ],
  },
  {
    slug: "barton-creek-lakefront",
    description: "5BR lakefront on Barton Creek, dock, pool, wooded lot",
    images: [
      { file: "hero.jpg", prompt: "Stunning lakefront home on Barton Creek Austin Texas, contemporary Texas architecture with stone and wood, large windows facing the water, wooded lot with mature trees, professional real estate exterior photography" },
      { file: "lake-view.jpg", prompt: "Panoramic view of Barton Creek from a luxury home deck, clear green water, limestone cliffs, dense tree canopy along shoreline, peaceful natural setting, Austin Texas lakefront photography" },
      { file: "dock.jpg", prompt: "Private boat dock on Barton Creek Austin Texas, wooden dock extending into calm water, kayaks stored nearby, lush green trees along shore, serene lakefront lifestyle photography" },
      { file: "pool.jpg", prompt: "Luxury swimming pool next to a lakefront home, overlooking Barton Creek through trees, natural stone pool deck, outdoor lounge furniture, Hill Country setting, real estate photography" },
    ],
  },
  {
    slug: "downtown-penthouse",
    description: "3BR penthouse downtown, skyline views, private terrace, luxury finishes",
    images: [
      { file: "hero.jpg", prompt: "Modern luxury penthouse in a downtown Austin Texas high-rise building, glass and steel architecture, nighttime skyline visible, rooftop terrace with city lights, professional real estate photography" },
      { file: "view.jpg", prompt: "Stunning panoramic view of downtown Austin skyline through floor-to-ceiling penthouse windows, Congress Avenue bridge, Colorado River, sunset colors, luxury condo photography" },
      { file: "terrace.jpg", prompt: "Private rooftop terrace of a downtown Austin penthouse, modern outdoor furniture, planter boxes, downtown skyline backdrop, string lights, evening ambiance, real estate photography" },
      { file: "master.jpg", prompt: "Sleek modern penthouse primary bedroom, floor-to-ceiling windows with Austin city view, platform bed, minimalist design, polished concrete floors, luxury real estate interior photography" },
    ],
  },
  {
    slug: "mueller-modern",
    description: "3BR modern home in Mueller, open plan, front porch, walkable community",
    images: [
      { file: "hero.jpg", prompt: "Modern contemporary home in Mueller neighborhood Austin Texas, clean lines, mixed materials of wood and metal siding, small front yard with native landscaping, sidewalk, new urbanist community, real estate photography" },
      { file: "living.jpg", prompt: "Open-concept modern living room and dining area in Mueller Austin home, polished concrete floors, large windows, contemporary furniture, bright and airy, professional real estate interior photography" },
      { file: "kitchen.jpg", prompt: "Modern kitchen in a Mueller Austin home, white quartz countertops, flat-panel cabinets, stainless steel appliances, island with bar seating, open to living area, real estate photography" },
      { file: "porch.jpg", prompt: "Welcoming front porch of a modern Mueller Austin home, Adirondack chairs, view of tree-lined neighborhood street, families walking, community park visible, lifestyle real estate photography" },
    ],
  },
  {
    slug: "zilker-bungalow",
    description: "3BR updated bungalow near Zilker Park, original charm, modern updates",
    images: [
      { file: "hero.jpg", prompt: "Charming updated bungalow home near Zilker Park Austin Texas, white painted exterior with colorful front door, covered porch, mature live oak tree, lush green yard, warm light, real estate photography" },
      { file: "living.jpg", prompt: "Bright and airy living room in a renovated Zilker Austin bungalow, original hardwood floors, white walls, modern furniture mixed with vintage pieces, large windows, natural light, interior photography" },
      { file: "backyard.jpg", prompt: "Private backyard of a Zilker Austin bungalow, deck with string lights, green grass, privacy fence with climbing vines, outdoor dining area, fire pit, cozy Austin backyard lifestyle photography" },
    ],
  },
  {
    slug: "hyde-park-victorian",
    description: "4BR Victorian, wrap-around porch, restored details, art studio",
    images: [
      { file: "hero.jpg", prompt: "Beautiful restored Victorian home in Hyde Park Austin Texas, ornate wrap-around porch with detailed woodwork, colorful paint scheme, picket fence, mature trees, historic neighborhood charm, real estate photography" },
      { file: "porch.jpg", prompt: "Wide wrap-around porch of a Victorian home in Hyde Park Austin, wooden rocking chairs, hanging ferns, ornate railing details, view of tree-lined street, warm afternoon light, architectural photography" },
      { file: "living.jpg", prompt: "Elegant Victorian living room with restored original details, tall ceilings with medallion, bay window with window seat, period fireplace, hardwood floors, antique furniture, real estate interior photography" },
      { file: "studio.jpg", prompt: "Bright art studio in a converted room of a Hyde Park Victorian home, large north-facing windows, easels and art supplies, paint-spattered wood floor, creative workspace, natural light photography" },
    ],
  },
  {
    slug: "south-congress-loft",
    description: "2BR industrial loft near SoCo, exposed brick, rooftop deck",
    images: [
      { file: "hero.jpg", prompt: "Industrial loft building near South Congress Avenue Austin Texas, converted warehouse with large windows, brick exterior, urban Austin neighborhood with shops visible, street-level view, real estate photography" },
      { file: "living.jpg", prompt: "Open industrial loft living space near South Congress Austin, exposed brick walls, concrete floors, high ceilings with exposed ductwork, modern furniture, large factory windows, interior real estate photography" },
      { file: "rooftop.jpg", prompt: "Private rooftop deck of a South Congress loft in Austin Texas, modern planters, lounge seating, view of SoCo neighborhood and downtown skyline, string lights, sunset, lifestyle real estate photography" },
    ],
  },
  {
    slug: "east-austin-modern",
    description: "4BR modern new build, courtyard, rooftop deck, urban location",
    images: [
      { file: "hero.jpg", prompt: "Contemporary modern home in East Austin Texas, dark metal and wood siding, geometric architecture, xeriscape front yard with native plants, urban residential street with murals visible, real estate photography" },
      { file: "courtyard.jpg", prompt: "Private central courtyard of a modern East Austin home, polished concrete, minimalist water feature, vertical garden wall, glass walls of house surrounding, zen atmosphere, architectural photography" },
      { file: "living.jpg", prompt: "Minimalist modern living room in East Austin home, floor-to-ceiling glass doors opening to courtyard, polished concrete floor, statement furniture, art on walls, natural light, interior real estate photography" },
      { file: "rooftop.jpg", prompt: "Rooftop deck of an East Austin modern home, panoramic view of downtown Austin skyline, built-in seating, fire pit, potted plants, sunset colors, lifestyle real estate photography" },
    ],
  },
  {
    slug: "allandale-ranch",
    description: "3BR mid-century ranch, pool, large lot, updated",
    images: [
      { file: "hero.jpg", prompt: "Classic mid-century ranch home in Allandale Austin Texas, low-slung roofline, large front windows, brick and wood exterior, mature trees in yard, retro mailbox, warm afternoon light, real estate photography" },
      { file: "pool.jpg", prompt: "Kidney-shaped swimming pool in backyard of mid-century Allandale Austin home, concrete pool deck, lounge chairs, privacy fence with mature hedges, retro mid-century style, sunny day, real estate photography" },
      { file: "living.jpg", prompt: "Updated mid-century living room in Allandale Austin ranch home, original terrazzo floors, wall of windows to backyard, open beam ceiling, vintage modern furniture, warm natural light, interior photography" },
    ],
  },
  {
    slug: "travis-heights-retreat",
    description: "4BR retreat in Travis Heights, multi-level decks, mature trees",
    images: [
      { file: "hero.jpg", prompt: "Charming cottage-style home in Travis Heights Austin Texas, elevated on a hillside, stone retaining walls, mature trees and lush landscaping, wooden stairs leading to front entrance, warm golden light, real estate photography" },
      { file: "deck.jpg", prompt: "Multi-level wooden deck in the backyard of a Travis Heights Austin home, overlooking treetops, hammock, outdoor dining table, string lights, peaceful retreat atmosphere, lifestyle real estate photography" },
      { file: "living.jpg", prompt: "Cozy living room in a Travis Heights Austin home, wide-plank hardwood floors, stone fireplace, built-in bookshelves, large windows with tree views, warm eclectic decor, interior real estate photography" },
      { file: "backyard.jpg", prompt: "Lush terraced backyard in Travis Heights Austin, stone pathways winding through gardens, mature live oaks and native plants, tiered landscape on hillside, peaceful private retreat, landscape photography" },
    ],
  },
  {
    slug: "lake-travis-villa",
    description: "5BR villa on Lake Travis, deep water dock, pool, Hill Country views",
    images: [
      { file: "hero.jpg", prompt: "Luxury Mediterranean villa on Lake Travis Austin Texas, stone and stucco exterior, red tile roof, sweeping views of blue lake water, Hill Country hills in background, luxury real estate photography" },
      { file: "lake-view.jpg", prompt: "Breathtaking panoramic view of Lake Travis from a luxury villa terrace, crystal blue water, limestone cliffs, boats on the water, Hill Country hills, golden hour, landscape real estate photography" },
      { file: "pool.jpg", prompt: "Infinity pool on cliff overlooking Lake Travis, luxury stone pool deck, outdoor cabana, blue lake water below, Hill Country sunset, resort-style living, real estate photography" },
      { file: "living.jpg", prompt: "Grand living room in Lake Travis villa, two-story ceiling, stone accent wall, large arched windows framing lake view, elegant furnishings, warm Mediterranean interior style, real estate photography" },
    ],
  },
  {
    slug: "rosedale-cottage",
    description: "2BR cottage in Rosedale, garden, updated kitchen, walkable",
    images: [
      { file: "hero.jpg", prompt: "Charming 1940s cottage in Rosedale Austin Texas, white painted wood siding, red front door, mature shade trees, cottage garden with flowers, picket fence, neighborhood sidewalk, real estate photography" },
      { file: "garden.jpg", prompt: "Beautiful cottage garden at a Rosedale Austin home, colorful native Texas flowers and herbs, stone pathway, small fountain, raised garden beds, mature shade trees, peaceful garden photography" },
      { file: "kitchen.jpg", prompt: "Updated cottage kitchen in Rosedale Austin home, white shaker cabinets, butcher block countertops, farmhouse sink, vintage-inspired light fixtures, open shelving with dishes, cozy charm, interior real estate photography" },
    ],
  },
  {
    slug: "downtown-condo",
    description: "2BR modern condo downtown, city views, building amenities",
    images: [
      { file: "hero.jpg", prompt: "Modern high-rise condo building in downtown Austin Texas, glass tower architecture, lobby entrance with modern landscaping, urban setting with Austin skyline, evening lighting, real estate photography" },
      { file: "view.jpg", prompt: "City view from a modern downtown Austin condo, floor-to-ceiling windows showing Congress Avenue, Capitol building, urban landscape, daytime, luxury condo living photography" },
      { file: "kitchen.jpg", prompt: "Sleek modern kitchen in a downtown Austin condo, waterfall quartz island, high-end appliances, floor-to-ceiling window with city view, minimalist design, interior real estate photography" },
    ],
  },
  {
    slug: "steiner-ranch-family",
    description: "5BR family home in Steiner Ranch, pool, media room, Lake Travis views",
    images: [
      { file: "hero.jpg", prompt: "Large family home in Steiner Ranch Austin Texas, Texas Hill Country architecture with stone facade, three-car garage, landscaped front yard, cul-de-sac street, blue sky, real estate photography" },
      { file: "pool.jpg", prompt: "Family swimming pool in Steiner Ranch backyard, slide and splash pad, stone pool deck, covered patio with outdoor kitchen, green lawn, Hill Country views, family lifestyle real estate photography" },
      { file: "media.jpg", prompt: "Home theater and media room in Steiner Ranch family home, reclining leather seats, large projection screen, acoustic panels, ambient lighting, popcorn bar, entertainment room real estate photography" },
      { file: "view.jpg", prompt: "View of Lake Travis from Steiner Ranch home backyard, blue water through Hill Country trees, limestone terrain, sunset colors, peaceful Texas landscape from elevated vantage point, real estate photography" },
    ],
  },
  {
    slug: "clarksville-townhome",
    description: "3BR luxury townhome in Clarksville, rooftop, modern finishes",
    images: [
      { file: "hero.jpg", prompt: "Modern luxury townhome in Clarksville Austin Texas, three-story contemporary architecture with mixed materials, small front garden, walkable tree-lined street, near MoPac, real estate photography" },
      { file: "rooftop.jpg", prompt: "Private rooftop terrace of a Clarksville townhome in Austin, downtown skyline view, modern outdoor furniture, built-in bar area, potted plants, evening lights, luxury urban living photography" },
      { file: "kitchen.jpg", prompt: "High-end modern kitchen in Clarksville townhome, Italian cabinetry, marble countertops, professional-grade appliances, wine cooler, open to dining area, designer interior real estate photography" },
      { file: "living.jpg", prompt: "Contemporary living room in Clarksville Austin townhome, double-height ceiling, modern staircase, designer furniture, large abstract art, floor-to-ceiling windows, natural light, interior real estate photography" },
    ],
  },
  {
    slug: "cedar-park-new-build",
    description: "4BR new construction in Cedar Park, modern farmhouse, energy efficient",
    images: [
      { file: "hero.jpg", prompt: "New construction modern farmhouse in Cedar Park Texas, white board-and-batten siding, black window frames, metal roof accents, fresh landscaping with native plants, wide driveway, blue sky, real estate photography" },
      { file: "kitchen.jpg", prompt: "Open-concept kitchen in a new Cedar Park Texas home, large white quartz island, navy blue lower cabinets, gold hardware, pendant lights, open to family room, bright and modern, interior real estate photography" },
      { file: "patio.jpg", prompt: "Covered back patio of a new Cedar Park Texas home, outdoor ceiling fan, stone tile floor, view of green fenced backyard, modern farmhouse style, family outdoor living space, real estate photography" },
    ],
  },
  {
    slug: "bouldin-creek-duplex",
    description: "Duplex in Bouldin Creek, investment property, updated units",
    images: [
      { file: "hero.jpg", prompt: "Stylish duplex property in Bouldin Creek South Austin Texas, craftsman-inspired architecture, two separate entrances, shared courtyard, native landscaping, South First Street neighborhood, real estate photography" },
      { file: "interior.jpg", prompt: "Modern updated duplex unit interior in Bouldin Creek Austin, open living and kitchen area, concrete floors, modern lighting, compact efficient layout, large windows, rental property real estate photography" },
      { file: "exterior.jpg", prompt: "Side view of a Bouldin Creek Austin duplex showing both units, private patios, shared green space, low maintenance xeriscaping, urban neighborhood with character, real estate photography" },
    ],
  },
  {
    slug: "north-loop-cottage",
    description: "2BR eclectic cottage in North Loop, vintage charm, creative neighborhood",
    images: [
      { file: "hero.jpg", prompt: "Eclectic cottage home in North Loop Austin Texas, colorful painted exterior, quirky mailbox, small front porch with vintage furniture, creative neighborhood with shops nearby, Austin character, real estate photography" },
      { file: "porch.jpg", prompt: "Quirky front porch of a North Loop Austin cottage, vintage metal chairs, potted succulents, string lights, view of eclectic neighborhood street with vintage shops, Austin bohemian lifestyle, photography" },
      { file: "kitchen.jpg", prompt: "Compact updated kitchen in North Loop Austin cottage, open shelving, colorful tile backsplash, butcher block counters, vintage stove, small breakfast nook, eclectic charm, interior real estate photography" },
    ],
  },
  {
    slug: "lake-austin-sanctuary",
    description: "5BR waterfront on Lake Austin, boat dock, gardens, private retreat",
    images: [
      { file: "hero.jpg", prompt: "Luxury waterfront estate on Lake Austin Texas, stone and glass contemporary architecture, manicured gardens leading to water's edge, private dock, mature cypress trees, evening golden light, luxury real estate photography" },
      { file: "dock.jpg", prompt: "Private boat dock on Lake Austin, covered boat lift, wooden dock with seating area, calm water reflecting trees, luxury waterfront lifestyle, peaceful morning light, real estate photography" },
      { file: "living.jpg", prompt: "Elegant great room in Lake Austin waterfront home, stone fireplace, vaulted ceiling with wood beams, wall of glass doors opening to lake view, sophisticated furniture, warm lighting, interior real estate photography" },
      { file: "garden.jpg", prompt: "Professionally landscaped gardens at a Lake Austin estate, stone pathways through native Texas plants, water feature, terraced landscape down to lake shore, mature trees, peaceful sanctuary atmosphere, landscape photography" },
    ],
  },
];

async function generateImage(prompt, outputPath) {
  try {
    const basename = path.basename(path.dirname(outputPath)) + "/" + path.basename(outputPath);
    console.log(`  Generating: ${basename}...`);

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1792x1024",
      quality: "standard",
      response_format: "url",
    });

    const imageUrl = response.data[0].url;
    const imageResponse = await fetch(imageUrl);
    const arrayBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(outputPath, buffer);
    const sizeMB = (buffer.length / 1024 / 1024).toFixed(1);
    console.log(`  Done: ${basename} (${sizeMB} MB)`);
    return true;
  } catch (error) {
    const basename = path.basename(path.dirname(outputPath)) + "/" + path.basename(outputPath);
    console.error(`  FAILED: ${basename} - ${error.message}`);
    return false;
  }
}

async function main() {
  // Optional: pass property slug to generate only that property
  const filterSlug = process.argv[2];

  let toProcess = properties;
  if (filterSlug) {
    toProcess = properties.filter((p) => p.slug === filterSlug);
    if (toProcess.length === 0) {
      console.error(`Property "${filterSlug}" not found`);
      process.exit(1);
    }
  }

  // Build list of all images, skipping existing ones
  const allImages = [];
  for (const prop of toProcess) {
    const dir = path.join(publicDir, "images", "properties", prop.slug);
    fs.mkdirSync(dir, { recursive: true });

    for (const img of prop.images) {
      const outputPath = path.join(dir, img.file);
      if (!fs.existsSync(outputPath)) {
        allImages.push({ ...img, outputPath, slug: prop.slug });
      }
    }
  }

  console.log(`\nTotal property images to generate: ${allImages.length}`);
  const skipped = toProcess.reduce((s, p) => s + p.images.length, 0) - allImages.length;
  console.log(`(${skipped} already exist, skipping)\n`);

  if (allImages.length === 0) {
    console.log("All property images already exist!");
    return;
  }

  let success = 0;
  let failed = 0;

  for (let i = 0; i < allImages.length; i++) {
    const img = allImages[i];
    console.log(`[${i + 1}/${allImages.length}] ${img.slug}`);
    const ok = await generateImage(img.prompt, img.outputPath);
    if (ok) success++;
    else failed++;

    // Delay between requests
    if (i < allImages.length - 1) {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  console.log(`\nDone! ${success} generated, ${failed} failed.`);
}

main().catch(console.error);
