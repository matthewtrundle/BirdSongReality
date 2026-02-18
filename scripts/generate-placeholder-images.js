const fs = require('fs');
const path = require('path');

// Using the provided API key directly
const OPENROUTER_API_KEY = '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';

// All placeholder images needed
const imageGroups = {
  team: {
    dir: 'team',
    images: [
      {
        name: 'patrick.jpg',
        prompt: 'Professional headshot portrait of a friendly male real estate agent in his 40s with warm smile, clean cut appearance, wearing a navy blue blazer over white dress shirt, neutral gray studio background, high-end corporate photography, soft natural lighting, confident and approachable expression, professional Texas realtor'
      },
      {
        name: 'team-member-2.jpg',
        prompt: 'Professional headshot portrait of a distinguished female real estate agent in her 30s with brunette hair, warm genuine smile, wearing an elegant cream colored silk blouse, neutral gray studio background, high-end corporate photography, soft natural lighting, trustworthy and experienced expression, Austin Texas real estate professional'
      },
      {
        name: 'team-member-3.jpg',
        prompt: 'Professional headshot portrait of a male real estate marketing specialist in his 30s with friendly professional smile showing confidence, wearing a crisp light blue dress shirt no tie open collar, neutral gray studio background, high-end corporate photography, soft natural lighting, creative and approachable marketing professional'
      }
    ]
  },
  neighborhoods: {
    dir: 'neighborhoods',
    images: [
      {
        name: 'zilker.jpg',
        prompt: 'Beautiful Zilker neighborhood in Austin Texas at golden hour, charming craftsman homes with mature live oak trees, Barton Springs Road visible, green lawns, blue sky with wispy clouds, upscale Austin neighborhood aesthetic, architectural real estate photography'
      },
      {
        name: 'barton-hills.jpg',
        prompt: 'Beautiful tree-lined residential street in Barton Hills Austin Texas, mid-century modern and ranch homes nestled among live oaks and cedar trees, hilly terrain, peaceful suburban feel with access to Barton Creek greenbelt, professional real estate marketing photography'
      },
      {
        name: 'tarrytown.jpg',
        prompt: 'Luxury homes in Tarrytown Austin Texas, beautiful waterfront properties near Lake Austin, mature trees and lush landscaping, traditional and modern architecture blend, calm residential streets, golden hour lighting, high-end real estate marketing photography'
      },
      {
        name: 'downtown-austin.jpg',
        prompt: 'Vibrant downtown Austin Texas scene, Sixth Street area with live music venues, modern high-rise condos in background, Lady Bird Lake visible, tourists and locals walking, warm evening lighting, urban lifestyle photography'
      },
      {
        name: 'west-lake-hills.jpg',
        prompt: 'Stunning aerial view of West Lake Hills Austin Texas, luxury hilltop estates with panoramic views of Lake Austin and hill country, green rolling hills, large custom homes with pools, bright sunny day, real estate marketing aerial drone photography'
      }
    ]
  },
  demo: {
    dir: 'demo',
    images: [
      {
        name: 'before-1.jpg',
        prompt: 'Interior real estate photography of dated 1990s Austin Texas home kitchen before renovation, outdated oak cabinets, old white appliances, worn laminate countertops, beige walls with scuff marks, fluorescent lighting, cluttered counters, needs updating but has potential, Texas home renovation before photo, documentary style'
      },
      {
        name: 'after-1.jpg',
        prompt: 'Stunning modern Austin kitchen after complete renovation, bright white shaker cabinets with brushed gold hardware, white quartz countertops with subtle veining, stainless steel professional appliances, white subway tile backsplash, sage green accents, elegant pendant lighting over large island with barstools, natural light flooding in, luxury Austin home interior design photography'
      },
      {
        name: 'before-2.jpg',
        prompt: 'Outdated Austin Texas home living room before renovation needing work, old popcorn ceiling, dated furniture, worn carpet, small windows with heavy drapes blocking light, 1980s brass fixtures, cramped feeling, needs complete refresh, real estate before photo, documentary style'
      },
      {
        name: 'after-2.jpg',
        prompt: 'Beautiful renovated Austin home living room transformation, open airy floor plan with vaulted ceiling and exposed beams, large windows with hill country views, modern furniture in natural tones and greens, white shiplap accent wall, ceiling fan with light wood blades, natural light flooding the space, luxury Austin home interior design photography'
      }
    ]
  },
  about: {
    dir: 'about',
    images: [
      {
        name: 'team-hero.jpg',
        prompt: 'Professional real estate team group photo of 4 agents standing together at scenic overlook in Austin Texas hill country at sunset, casual professional attire, warm golden hour lighting, genuine team camaraderie and smiles, Austin luxury real estate agents, confident and friendly poses, Lady Bird Lake and downtown Austin skyline in background, professional marketing photography'
      }
    ]
  }
};

async function generateImage(imageConfig, outputDir) {
  console.log(`Generating: ${imageConfig.name}...`);
  console.log(`  Prompt: "${imageConfig.prompt.substring(0, 80)}..."`);

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

    // Check for image in the images array (OpenRouter format)
    const images = data.choices[0]?.message?.images;
    if (images && images.length > 0 && images[0].image_url?.url) {
      const imageUrl = images[0].image_url.url;
      if (imageUrl.includes('data:image')) {
        const matches = imageUrl.match(/data:image\/[^;]+;base64,(.+)/);
        if (matches && matches[1]) {
          const base64Data = matches[1];
          const buffer = Buffer.from(base64Data, 'base64');
          const outputPath = path.join(outputDir, imageConfig.name);
          fs.writeFileSync(outputPath, buffer);
          console.log(`  ✓ Saved: ${outputPath}`);
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
        const outputPath = path.join(outputDir, imageConfig.name);
        fs.writeFileSync(outputPath, buffer);
        console.log(`  ✓ Saved: ${outputPath}`);
        return true;
      }
    }

    console.log(`  ✗ No image returned for ${imageConfig.name}`);
    console.log(`  Response: ${JSON.stringify(data).substring(0, 200)}`);
    return false;
  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('============================================');
  console.log('Birdsong Realty Team - Placeholder Image Generator');
  console.log('Model: bytedance-seed/seedream-4.5');
  console.log('============================================\n');

  const baseDir = path.join(__dirname, '..', 'public', 'images');

  let totalSuccess = 0;
  let totalFailed = 0;

  for (const [groupName, group] of Object.entries(imageGroups)) {
    console.log(`\n[${ groupName.toUpperCase() }]`);
    console.log('-'.repeat(44));

    const outputDir = path.join(baseDir, group.dir);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log(`Created directory: ${outputDir}`);
    }

    for (const image of group.images) {
      const result = await generateImage(image, outputDir);
      if (result) {
        totalSuccess++;
      } else {
        totalFailed++;
      }
      // Wait between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  console.log('\n============================================');
  console.log(`COMPLETE: ${totalSuccess} successful, ${totalFailed} failed`);
  console.log(`Estimated cost: ~$${(totalSuccess * 0.04).toFixed(2)}`);
  console.log('============================================');
}

main().catch(console.error);
