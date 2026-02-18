import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Blog images to generate
const blogImages = [
  {
    filename: "family-neighborhood.jpg",
    prompt:
      "A beautiful Austin Texas suburban neighborhood street with families walking, tree-lined sidewalks, green lawns, warm golden hour lighting, peaceful residential homes, photorealistic real estate photography style",
  },
  {
    filename: "market-update.jpg",
    prompt:
      "Aerial view of Austin Texas downtown skyline with Colorado River and Congress Avenue bridge, modern office towers and construction cranes, clear blue sky, photorealistic drone photography style",
  },
  {
    filename: "first-time-buyer.jpg",
    prompt:
      "A charming starter home in Austin Texas with a welcoming front porch, small yard with native plants, friendly neighborhood feel, warm natural lighting, photorealistic real estate photography",
  },
  {
    filename: "investment-property.jpg",
    prompt:
      "Modern duplex or multi-family property in East Austin Texas, contemporary architecture, urban setting with Austin skyline visible in background, professional real estate photography",
  },
  {
    filename: "austin-lifestyle.jpg",
    prompt:
      "Lady Bird Lake in Austin Texas with people kayaking and paddleboarding, downtown skyline in background, lush green trees along the shore, beautiful sunny day, lifestyle photography",
  },
  {
    filename: "tech-neighborhood.jpg",
    prompt:
      "The Domain area in North Austin Texas, modern mixed-use development with glass office buildings and trendy restaurants, people walking along outdoor promenade, contemporary urban photography",
  },
  {
    filename: "lake-living.jpg",
    prompt:
      "Lake Travis Austin Texas waterfront property with a boat dock, clear blue water, limestone cliffs and Hill Country hills in background, luxury lakefront home visible, golden hour photography",
  },
  {
    filename: "new-construction.jpg",
    prompt:
      "New construction homes in a master-planned community near Austin Texas, modern farmhouse style architecture, fresh landscaping, wide streets, blue sky, professional real estate photography",
  },
  {
    filename: "california-relocation.jpg",
    prompt:
      "Split composition showing Austin Texas lifestyle - Congress Avenue bats bridge, food trucks, live music venue neon sign, Lady Bird Lake trail, warm welcoming atmosphere, editorial photography",
  },
  {
    filename: "austin-investment.jpg",
    prompt:
      "Panoramic view of Austin Texas skyline from South Congress Avenue, downtown towers, Texas State Capitol dome visible, bustling street with shops and restaurants, golden hour cityscape photography",
  },
  {
    filename: "condo-vs-house.jpg",
    prompt:
      "Modern luxury condo building in downtown Austin Texas next to a charming single-family craftsman home with a yard, showing the contrast of urban and suburban living, professional architectural photography",
  },
  {
    filename: "hill-country.jpg",
    prompt:
      "Texas Hill Country landscape west of Austin, rolling green hills with live oak trees, wildflowers in a meadow, limestone outcroppings, scenic rural road, beautiful sunset sky, landscape photography",
  },
  {
    filename: "east-austin.jpg",
    prompt:
      "Vibrant East Austin Texas street scene with colorful murals on building walls, food trucks, hip coffee shops, people dining on patios, eclectic creative neighborhood atmosphere, street photography",
  },
  {
    filename: "school-districts.jpg",
    prompt:
      "Beautiful modern Texas elementary school campus with children playing on green fields, playground equipment, American flag, clean architecture, blue sky, welcoming educational environment photography",
  },
  {
    filename: "selling-tips.jpg",
    prompt:
      "Beautifully staged modern living room in an Austin Texas home for sale, neutral decor, natural light streaming through windows, fresh flowers on table, professional real estate staging photography",
  },
];

// Missing neighborhood images
const neighborhoodImages = [
  {
    filename: "barton-hills.jpg",
    prompt:
      "Barton Hills neighborhood Austin Texas, quiet residential street with mature live oak trees, mid-century ranch homes, hilly terrain, lush green vegetation, Barton Creek Greenbelt entrance visible, warm natural lighting, real estate photography",
  },
  {
    filename: "clarksville.jpg",
    prompt:
      "Historic Clarksville neighborhood in Austin Texas, charming Victorian-era homes with white picket fences, tree-canopied streets, small locally-owned shops and cafes, walkable community feel, warm golden hour light, neighborhood photography",
  },
  {
    filename: "rosedale.jpg",
    prompt:
      "Rosedale neighborhood Austin Texas, classic 1940s-1950s bungalow homes on tree-lined streets, well-maintained yards with native Texas plants, families walking dogs, peaceful established neighborhood, warm afternoon light, residential photography",
  },
  {
    filename: "allandale.jpg",
    prompt:
      "Allandale neighborhood in North Central Austin Texas, mid-century ranch-style homes with large lots, mature pecan and live oak trees, quiet residential street, neighborhood pool visible, warm suburban feel, real estate photography",
  },
  {
    filename: "north-loop.jpg",
    prompt:
      "North Loop neighborhood Austin Texas, eclectic strip of vintage shops and restaurants along North Loop Boulevard, retro neon signs, people walking past record stores and coffee shops, quirky Austin character, street photography",
  },
  {
    filename: "holly.jpg",
    prompt:
      "Holly neighborhood East Austin Texas, mix of renovated craftsman bungalows and modern infill homes, colorful yards with Texas native landscaping, view of downtown skyline in distance, urban neighborhood with character, real estate photography",
  },
  {
    filename: "govalle.jpg",
    prompt:
      "Govalle neighborhood East Austin Texas, diverse mix of homes from classic bungalows to modern new construction, community garden visible, street art on nearby building, developing urban neighborhood, warm afternoon photography",
  },
  {
    filename: "bee-cave.jpg",
    prompt:
      "Bee Cave Texas Hill Country community west of Austin, upscale shopping center with Hill Country Galleria, limestone architecture, rolling hills with live oaks in background, luxury suburban feel, clear blue sky, real estate photography",
  },
  {
    filename: "lakeway.jpg",
    prompt:
      "Lakeway Texas community on Lake Travis, resort-style homes along the lake shore, golf course green with Hill Country backdrop, crystal blue lake water, luxury Hill Country living, aerial-style real estate photography",
  },
  {
    filename: "steiner-ranch.jpg",
    prompt:
      "Steiner Ranch master-planned community Austin Texas, beautiful family homes on hillside with Lake Travis views, community pool and park, Hill Country landscape, well-maintained streets, family suburban lifestyle photography",
  },
  {
    filename: "cedar-park.jpg",
    prompt:
      "Cedar Park Texas suburban neighborhood north of Austin, newer construction homes with modern farmhouse style, wide clean streets, community park with playground, families outside, blue sky, suburban real estate photography",
  },
  {
    filename: "round-rock.jpg",
    prompt:
      "Round Rock Texas downtown Main Street area, charming small-town historic buildings alongside modern development, Round Rock donuts shop visible, families walking, water tower in background, community photography",
  },
  {
    filename: "georgetown.jpg",
    prompt:
      "Georgetown Texas historic town square with beautiful Victorian courthouse, surrounding shops and restaurants, tree-lined sidewalks, charm of a small Texas Hill Country town, clear blue sky, travel photography",
  },
  {
    filename: "pflugerville.jpg",
    prompt:
      "Pflugerville Texas suburban community, Lake Pflugerville with people walking on trail, modern suburban homes in background, green parkland, diverse family-friendly neighborhood, warm afternoon light, lifestyle photography",
  },
  {
    filename: "south-austin.jpg",
    prompt:
      "South Austin Texas neighborhood along South Lamar Boulevard, mix of vintage Austin bungalows and trendy restaurants, food truck park, Keep Austin Weird mural visible, laid-back eclectic atmosphere, street photography",
  },
  {
    filename: "bouldin-creek.jpg",
    prompt:
      "Bouldin Creek neighborhood South Austin Texas, charming craftsman homes on quiet streets, mature trees, community coffee shop with patio seating, South First Street art galleries visible, bohemian Austin atmosphere, neighborhood photography",
  },
  {
    filename: "sunset-valley.jpg",
    prompt:
      "Sunset Valley area South Austin Texas, mix of established homes and Brodie Oaks shopping area, green hills in background, quiet residential streets with shade trees, pleasant suburban community, real estate photography",
  },
];

async function generateImage(prompt, outputPath) {
  try {
    console.log(`  Generating: ${path.basename(outputPath)}...`);

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1792x1024",
      quality: "standard",
      response_format: "url",
    });

    const imageUrl = response.data[0].url;

    // Download the image
    const imageResponse = await fetch(imageUrl);
    const arrayBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(outputPath, buffer);

    const sizeMB = (buffer.length / 1024 / 1024).toFixed(1);
    console.log(`  Done: ${path.basename(outputPath)} (${sizeMB} MB)`);

    return true;
  } catch (error) {
    console.error(
      `  FAILED: ${path.basename(outputPath)} - ${error.message}`
    );
    return false;
  }
}

async function main() {
  const args = process.argv.slice(2);
  const mode = args[0] || "all"; // "blog", "neighborhoods", or "all"

  let images = [];

  if (mode === "blog" || mode === "all") {
    images.push(
      ...blogImages.map((img) => ({
        ...img,
        outputPath: path.join(publicDir, "images", "blog", img.filename),
      }))
    );
  }

  if (mode === "neighborhoods" || mode === "all") {
    images.push(
      ...neighborhoodImages.map((img) => ({
        ...img,
        outputPath: path.join(
          publicDir,
          "images",
          "neighborhoods",
          img.filename
        ),
      }))
    );
  }

  // Filter out images that already exist
  const missing = images.filter((img) => !fs.existsSync(img.outputPath));

  console.log(`\nTotal images to generate: ${missing.length}`);
  console.log(`(${images.length - missing.length} already exist, skipping)\n`);

  if (missing.length === 0) {
    console.log("All images already exist!");
    return;
  }

  let success = 0;
  let failed = 0;

  // Generate sequentially to avoid rate limits
  for (let i = 0; i < missing.length; i++) {
    const img = missing[i];
    console.log(`[${i + 1}/${missing.length}]`);
    const ok = await generateImage(img.prompt, img.outputPath);
    if (ok) success++;
    else failed++;

    // Small delay between requests to be nice to the API
    if (i < missing.length - 1) {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  console.log(`\nDone! ${success} generated, ${failed} failed.`);
}

main().catch(console.error);
