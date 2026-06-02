/**
 * Image regeneration manifest.
 *
 * Each entry produces ONE image written to public/images/<dir>/__new/<file>.
 * Run via:
 *   npm run images:regen                       # full batch
 *   npm run images:regen -- --only=<key>       # single image (dry-run friendly)
 *   npm run images:regen -- --dry-run          # log prompts without calling API
 *   npm run images:regen -- --commit           # promote __new/ files to final paths
 *
 * "key" = "<dir>/<file>" (e.g., "blog/family-neighborhood.jpg").
 */

export interface ImageTarget {
  /** Relative output path inside public/, e.g. "images/blog/family-neighborhood.jpg" */
  outputPath: string
  /** Subject-specific prompt fragment. Brand prompt is prepended automatically. */
  prompt: string
  /** Aspect ratio hint sent to model + used for final crop */
  aspect: "16:9" | "3:2" | "4:3" | "1:1"
  /** Final pixel width (height derived from aspect) */
  width: number
}

/**
 * Birdsong brand prompt — prepended to every subject prompt.
 * See docs/image-style-guide.md for rationale and editing guidance.
 */
export const BRAND_PROMPT = [
  "Photorealistic editorial real estate photography, Austin Texas.",
  "Golden hour natural light, warm color grading, shallow depth of field.",
  "Shot on Sony A7R IV with 35mm prime lens.",
  "Aspirational but grounded — feels lived-in, not staged stock photography.",
  "No text, no logos, no watermarks. No people facing the camera directly.",
  "Avoid: generic stock-photo cliches, oversaturated skies, cartoonish lighting.",
].join(" ")

export const TARGETS: ImageTarget[] = [
  // ---- BLOG (15) ---------------------------------------------------
  {
    outputPath: "images/blog/family-neighborhood.jpg",
    prompt:
      "A quiet Austin suburban street at golden hour. Live oak trees arching over the road, a single-family craftsman home with a wide front porch in soft focus, kids' bicycles leaning against a fence. Warm late-afternoon light, no faces visible.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/market-update.jpg",
    prompt:
      "Austin downtown skyline at golden hour seen from the South Congress bridge over Lady Bird Lake. Reflection on the water, hill country in the far distance, calm and composed. No text overlays.",
    aspect: "16:9",
    width: 1920,
  },
  {
    outputPath: "images/blog/first-time-buyer.jpg",
    prompt:
      "Close-up of hands holding a brass house key on a craftsman home's wooden front porch in Austin. Soft warm afternoon light, shallow depth of field, blurred porch swing in background. Hopeful, tactile.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/austin-investment.jpg",
    prompt:
      "Modern East Austin duplex with black trim, large windows, and xeriscaped front yard. Twilight, interior lights warmly glowing, no signs or text. Architectural editorial feel.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/austin-lifestyle.jpg",
    prompt:
      "Austin backyard patio at golden hour with string lights, two empty chairs, a low fire pit, and Texas hill country rolling in the distance. Warm honeyed light, soft focus, lived-in.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/california-relocation.jpg",
    prompt:
      "Cardboard moving boxes stacked in a sunlit empty Austin living room with white oak floors and tall windows. Soft morning light streaming in, plant in a corner. Calm, hopeful, no faces.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/condo-vs-house.jpg",
    prompt:
      "Diptych composition: left half a sleek Austin downtown condo balcony at twilight overlooking the skyline; right half a craftsman bungalow front porch with a swing in golden hour. Same warm color grading, editorial.",
    aspect: "16:9",
    width: 1920,
  },
  {
    outputPath: "images/blog/east-austin.jpg",
    prompt:
      "East Austin street scene at golden hour: colorful mural on a building, vintage food trailer, eclectic neighborhood feel, bicycles, soft warm light. Editorial documentary style, no readable text.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/hill-country.jpg",
    prompt:
      "Texas Hill Country at sunset: rolling hills, oak silhouettes, warm dusty light, a single ranch road winding through. Painterly, cinematic, no people.",
    aspect: "16:9",
    width: 1920,
  },
  {
    outputPath: "images/blog/investment-property.jpg",
    prompt:
      "Exterior of a clean professional Austin small multi-unit rental property in late afternoon light. Modern architecture, well-maintained landscaping, no signs or text. Investor-grade quality.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/lake-living.jpg",
    prompt:
      "A modern Lake Travis lakehouse at golden hour with a wooden dock extending over still water, hill-country backdrop. Two Adirondack chairs on the dock, warm honey light. Aspirational, calm, no faces.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/new-construction.jpg",
    prompt:
      "Modern Austin new-build single-family home at twilight: black trim, white cladding, large picture windows glowing warm from inside, xeriscaped front. Architectural editorial.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/school-districts.jpg",
    prompt:
      "Sunlit empty wooden playground in a leafy Austin suburban park, live oaks overhead, soft late-afternoon light, no people. Suggests safe family neighborhood.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/selling-tips.jpg",
    prompt:
      "Tastefully staged Austin living room: white oak floors, neutral linen sofa, indoor plants, a stack of design books, soft natural daylight. Calm, magazine-editorial, no people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/blog/tech-neighborhood.jpg",
    prompt:
      "Modern Austin walkable mixed-use neighborhood (Domain-style) at golden hour: pedestrian street, low-rise modern buildings, planters, warm light. Quiet upscale energy, no readable signs.",
    aspect: "3:2",
    width: 1600,
  },

  // ---- HEROES (6) --------------------------------------------------
  {
    outputPath: "images/hero/austin-daytime.jpg",
    prompt:
      "Cinematic mid-day Austin downtown skyline from above with hill country rolling behind. Crisp blue sky with light cloud detail, dimensional lighting on the buildings. Confident, editorial, not stock.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/austin-skyline.jpg",
    prompt:
      "Austin downtown skyline at twilight from a fresh angle (not the typical postcard): foreground bridge or tree silhouette, the Frost Tower and capitol dome glowing warm, hill country fading to indigo. Cinematic.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/austin-neighborhood.jpg",
    prompt:
      "A walkable Austin residential street under a canopy of live oaks at golden hour. Craftsman and bungalow homes on both sides, soft dappled light on the road, no cars or people. Editorial, warm.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/austin-south-congress.jpg",
    prompt:
      "Iconic South Congress (SoCo) view in Austin: looking north up Congress Avenue toward the Texas State Capitol dome, bats-bridge / vintage neon vibe in foreground. Late afternoon golden hour, warm honeyed light.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/blog-bg.jpg",
    prompt:
      "Moody hill country aerial at dawn: low fog hugging the contours of the land, oak silhouettes, soft purple-gold sky. Texture-forward, suitable as a background image with text overlay.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/testimonials-bg.jpg",
    prompt:
      "Warm soft Austin interior detail: a sun-dappled corner of a living room with a linen chair, indoor plant, and a window letting in late-afternoon golden light. Painterly, unfocused enough to serve as a section background.",
    aspect: "16:9",
    width: 2400,
  },

  // ---- NEIGHBORHOODS (25) ------------------------------------------
  {
    outputPath: "images/neighborhoods/allandale.jpg",
    prompt:
      "Established central Austin Allandale neighborhood: a leafy street of well-kept mid-century ranch homes with mature live oaks, wide lawns, golden afternoon light. Quiet, settled, family feel. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/barton-hills.jpg",
    prompt:
      "Barton Hills Austin: hillside homes nestled among heavy tree cover near the Barton Creek greenbelt, dappled green light, a winding leafy residential street. Lush, natural, close to nature. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/bee-cave.jpg",
    prompt:
      "Bee Cave west of Austin: upscale newer Hill Country homes on rolling terrain with limestone accents and distant hills, golden hour, manicured xeriscaped yards. Spacious, premium suburban. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/bouldin-creek.jpg",
    prompt:
      "Bouldin Creek just south of downtown Austin: eclectic bungalows and modern infill homes on a walkable tree-lined street, the downtown skyline peeking above the rooftops, warm late light. Hip and central. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/cedar-park.jpg",
    prompt:
      "Cedar Park northwest of Austin: a newer master-planned subdivision of family homes with tidy lawns, young trees, and a community park, clear afternoon light. Clean, family-oriented suburban. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/clarksville.jpg",
    prompt:
      "Historic Clarksville in central Austin: charming restored cottages with picket fences on a narrow tree-canopied street near downtown, soft golden light, intimate and historic character. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/east-austin.jpg",
    prompt:
      "East Austin: a vibrant block of modern black-and-white infill homes beside a colorful mural wall, a vintage food trailer, bicycles, eclectic creative energy at golden hour. No readable text, no people facing camera.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/georgetown.jpg",
    prompt:
      "Georgetown north of Austin: the historic town square with restored Victorian-era brick storefronts and a stately limestone courthouse, warm golden hour, classic small-town Texas charm. No readable text, no people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/govalle.jpg",
    prompt:
      "Govalle in east Austin: industrial-chic modern homes and converted warehouses with steel and wood, xeriscaped yards, an artsy emerging-neighborhood feel at golden hour. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/holly.jpg",
    prompt:
      "Holly neighborhood in east Austin near Lady Bird Lake: eclectic colorful bungalows and modern builds on a quiet street with glimpses of the lake and downtown skyline, warm light. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/hyde-park.jpg",
    prompt:
      "Historic Hyde Park in central Austin: a tree-lined street of restored Victorian and craftsman homes with deep front porches, a vintage moonlight tower in the distance, dappled golden light. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/lakeway.jpg",
    prompt:
      "Lakeway on Lake Travis: hillside upscale homes overlooking the blue lake, boat docks below, Hill Country backdrop, golden hour glow on the water. Resort-like waterfront living. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/mueller.jpg",
    prompt:
      "Mueller planned community in Austin: rows of modern sustainable homes with metal roofs and front porches facing a green park with a central lake, solar panels, walkable sidewalks, golden hour. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/north-loop.jpg",
    prompt:
      "North Loop Austin: a quirky vintage central neighborhood of small bungalows with eclectic gardens and retro charm on a shaded street, warm afternoon light. Funky and characterful. No readable text, no people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/pflugerville.jpg",
    prompt:
      "Pflugerville northeast of Austin: a friendly newer suburban subdivision of family homes with neat lawns, a neighborhood pond and trail, clear bright afternoon light. Affordable family suburb. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/rosedale.jpg",
    prompt:
      "Rosedale in central Austin: charming updated cottages and bungalows on a quiet leafy street with mature trees and tidy gardens, soft golden light. Coveted central living. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/round-rock.jpg",
    prompt:
      "Round Rock north of Austin: a spacious newer family subdivision with two-story homes, three-car garages, young landscaping and a community park, clear afternoon light. Growing family suburb. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/south-austin.jpg",
    prompt:
      "South Austin: an eclectic mix of restored bungalows and modern homes on a relaxed tree-lined street with a 'keep it weird' character, warm golden hour light. Laid-back and creative. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/south-congress.jpg",
    prompt:
      "South Congress (SoCo) Austin: the iconic strip of vintage shopfronts and neon signage looking north toward the Texas Capitol dome, retro Americana charm, warm golden hour. No readable text, no people facing camera.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/steiner-ranch.jpg",
    prompt:
      "Steiner Ranch northwest of Austin: an upscale Hill Country master-planned community of large stone-and-stucco homes among oak-covered hills near Lake Travis, golden hour. Family luxury suburb. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/sunset-valley.jpg",
    prompt:
      "Sunset Valley enclave in south Austin: a small leafy community of homes surrounded by mature trees and green space, peaceful and tucked-away, warm late-afternoon light. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/tarrytown.jpg",
    prompt:
      "Prestigious Tarrytown in west-central Austin: established estate homes with manicured lawns and grand live oaks on a stately tree-canopied street near Lake Austin, golden hour. Refined and exclusive. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/travis-heights.jpg",
    prompt:
      "Travis Heights in south Austin: charming character homes on hilly winding streets shaded by mature trees, just south of downtown, warm dappled golden light. Eclectic and beloved. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/west-lake-hills.jpg",
    prompt:
      "West Lake Hills west of Austin: luxury modern estates perched on wooded hillsides with sweeping canyon and lake views, limestone and glass architecture, golden hour. Prestigious hill-country luxury. No people.",
    aspect: "3:2",
    width: 1600,
  },
  {
    outputPath: "images/neighborhoods/zilker.jpg",
    prompt:
      "Zilker neighborhood in central Austin near Barton Springs and Zilker Park: updated bungalows on a green leafy street with the downtown skyline beyond the treetops, warm golden hour. Central and outdoorsy. No people.",
    aspect: "3:2",
    width: 1600,
  },

  // ---- CATEGORY / EXTRA HEROES (13) --------------------------------
  {
    outputPath: "images/hero/austin-homes-aerial.jpg",
    prompt:
      "Aerial drone view over an established Austin residential neighborhood at golden hour: a canopy of green live oaks, winding streets, single-family homes with pools, the downtown skyline on the horizon. Cinematic, warm. No people.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/austin-ladybird-lake.jpg",
    prompt:
      "Lady Bird Lake in Austin at golden hour: calm water reflecting the downtown skyline, the hike-and-bike trail and green shoreline, a few distant kayaks, hill country beyond. Serene and iconic. No people facing camera.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/austin-luxury-twilight.jpg",
    prompt:
      "A modern Austin luxury home at twilight: clean limestone-and-glass architecture, warm interior lights glowing through floor-to-ceiling windows, an infinity pool reflecting the dusk sky, manicured xeriscape. Architectural editorial. No people.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/austin-skyline-dusk.jpg",
    prompt:
      "Austin downtown skyline at dusk: glowing skyscrapers including the distinctive towers, deep indigo-to-amber sky, lights beginning to twinkle, reflection on Lady Bird Lake in the foreground. Cinematic and moody. No people.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/austin-skyline-golden.jpg",
    prompt:
      "Austin downtown skyline bathed in warm golden-hour light from across Lady Bird Lake: crisp dimensional light on the towers, gentle reflection on the water, hill country fading behind. Premium, confident, editorial. No people.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/austin-staged-interior.jpg",
    prompt:
      "A beautifully staged luxury Austin living room: white oak floors, a linen sectional, designer light fixtures, large windows with greenery beyond, fresh styling and natural daylight. Magazine-quality real estate interior. No people.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/austin-zilker-park.jpg",
    prompt:
      "Zilker Park in Austin at golden hour: the great green lawn and tree line with the downtown skyline rising beyond, Barton Springs greenery, warm inviting light. Iconic Austin outdoors. No people facing camera.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/condos.jpg",
    prompt:
      "A sleek modern Austin high-rise condominium at twilight: a stylish balcony with glass railing overlooking the glowing downtown skyline, contemporary outdoor furniture, warm city lights below. Urban luxury. No people.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/hill-country-aerial.jpg",
    prompt:
      "Aerial view of the Texas Hill Country near Austin at golden hour: rolling oak-covered hills, a winding river or lake glinting below, warm dusty light, layered ridgelines fading into haze. Expansive and cinematic. No people.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/investment.jpg",
    prompt:
      "A clean professional Austin small multi-unit rental property in late-afternoon light: modern duplex or fourplex architecture, well-maintained landscaping, off-street parking, investor-grade and well-kept. No signs, no people.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/luxury.jpg",
    prompt:
      "A grand modern Austin luxury estate at golden hour: limestone and glass facade, dramatic entry, mature landscaping and a circular drive, sweeping hill-country setting. Aspirational architectural editorial. No people.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/new-construction.jpg",
    prompt:
      "A modern Austin new-build single-family home at twilight: black trim, crisp white cladding, large picture windows glowing warm from inside, freshly xeriscaped front yard, clean contemporary lines. Architectural editorial. No people.",
    aspect: "16:9",
    width: 2400,
  },
  {
    outputPath: "images/hero/waterfront.jpg",
    prompt:
      "A modern Lake Austin waterfront home at golden hour: a private wooden dock extending over calm blue water, two Adirondack chairs, the home's glass facade behind, hill-country backdrop. Aspirational lakeside luxury. No people.",
    aspect: "16:9",
    width: 2400,
  },
]
