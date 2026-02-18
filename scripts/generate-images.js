const fs = require('fs');
const path = require('path');
require('dotenv').config();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const images = [
  {
    name: 'luxury-homes.jpg',
    prompt: 'Luxury homes in Austin Texas hill country, aerial view showing modern architecture, mature live oak trees, swimming pools, sunny day, professional real estate photography style, 4k quality'
  },
  {
    name: 'condos.jpg',
    prompt: 'Modern luxury condominium building in downtown Austin Texas, skyline views, rooftop pool area, urban landscaping, blue sky, professional real estate photography, upscale city living'
  },
  {
    name: 'investment.jpg',
    prompt: 'Investment property in East Austin Texas, charming renovated bungalow with rental income potential, tenants enjoying front porch, xeriscaped landscaping, investment property, professional real estate photography'
  },
  {
    name: 'waterfront.jpg',
    prompt: 'Waterfront home on Lake Austin Texas, private boat dock, hill country views, mature trees, Texas limestone architecture, golden hour lighting, real estate photography'
  },
  {
    name: 'new-construction.jpg',
    prompt: 'New construction modern home in Austin Texas, contemporary Hill Country architecture, large windows, native landscaping, construction complete, professional real estate photography'
  },
  {
    name: 'luxury.jpg',
    prompt: 'Ultra-luxury estate in West Lake Hills Austin Texas, infinity pool overlooking Lake Austin, modern architecture, floor-to-ceiling windows, live oak trees, sunset, premium real estate photography'
  },
  {
    name: 'austin-skyline.jpg',
    prompt: 'Panoramic view of Austin Texas skyline and real estate, Lady Bird Lake in foreground, downtown high-rises, South Congress bridge, hill country in background, aerial drone photography'
  },
  {
    name: 'blog-bg.jpg',
    prompt: 'Austin Texas Lady Bird Lake scene, morning light on the water, kayakers in distance, Congress Avenue bridge, peaceful urban nature atmosphere, soft focus background suitable for text overlay'
  },
  {
    name: 'testimonials-bg.jpg',
    prompt: 'Happy family enjoying Zilker Park Austin Texas, children playing, parents relaxing on blanket, Austin skyline in background, warm sunny day, lifestyle photography'
  },
  {
    name: 'og-default.jpg',
    prompt: 'Birdsong Realty Team Austin real estate hero image, luxury homes in Austin Texas hill country, aerial view of Lake Austin, green hills, premium properties, professional marketing photography, 1200x630 aspect ratio'
  }
];

async function generateImage(imageConfig) {
  console.log(`Generating: ${imageConfig.name}...`);

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://birdsongrealtyteam.com',
        'X-Title': 'Birdsong Realty Team'
      },
      body: JSON.stringify({
        model: 'bytedance-seed/seedream-4.5',
        messages: [
          {
            role: 'user',
            content: imageConfig.prompt
          }
        ],
        modalities: ['image', 'text']
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API error: ${response.status} - ${error}`);
    }

    const data = await response.json();

    // Check for image in the images array (new format)
    const images = data.choices[0]?.message?.images;
    if (images && images.length > 0 && images[0].image_url?.url) {
      const imageUrl = images[0].image_url.url;
      if (imageUrl.includes('data:image')) {
        const matches = imageUrl.match(/data:image\/[^;]+;base64,(.+)/);
        if (matches && matches[1]) {
          const base64Data = matches[1];
          const buffer = Buffer.from(base64Data, 'base64');
          const outputPath = path.join(__dirname, '../public/images/hero', imageConfig.name);
          fs.writeFileSync(outputPath, buffer);
          console.log(`  Saved: ${imageConfig.name}`);
          return true;
        }
      }
    }

    // Fallback: check content for base64 image
    const content = data.choices[0]?.message?.content;
    if (content && content.includes('data:image')) {
      const matches = content.match(/data:image\/[^;]+;base64,([^"]+)/);
      if (matches && matches[1]) {
        const base64Data = matches[1];
        const buffer = Buffer.from(base64Data, 'base64');
        const outputPath = path.join(__dirname, '../public/images/hero', imageConfig.name);
        fs.writeFileSync(outputPath, buffer);
        console.log(`  Saved: ${imageConfig.name}`);
        return true;
      }
    }

    console.log(`No image found for ${imageConfig.name}`);
    return false;
  } catch (error) {
    console.error(`  Error generating ${imageConfig.name}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('\nGenerating hero images with Seedream 4.5...\n');

  const heroDir = path.join(__dirname, '../public/images/hero');
  if (!fs.existsSync(heroDir)) {
    fs.mkdirSync(heroDir, { recursive: true });
  }

  const imagesDir = path.join(__dirname, '../public/images');

  let success = 0;
  let failed = 0;

  for (const img of images) {
    const result = await generateImage(img);
    if (result) {
      success++;
      if (img.name === 'og-default.jpg') {
        const srcPath = path.join(heroDir, img.name);
        const destPath = path.join(imagesDir, img.name);
        fs.copyFileSync(srcPath, destPath);
        console.log(`  Copied og-default.jpg to images root`);
      }
    } else {
      failed++;
    }
    // Wait 2 seconds between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log(`\nResults: ${success} successful, ${failed} failed`);
  console.log(`Estimated cost: $${(success * 0.04).toFixed(2)}`);
}

main().catch(console.error);
