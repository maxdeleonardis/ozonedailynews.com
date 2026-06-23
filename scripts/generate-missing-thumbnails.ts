#!/usr/bin/env ts-node-script

/**
 * Generate Missing Thumbnails Script
 * 
 * This script:
 * 1. Reads content_registry.json
 * 2. Identifies articles without /thumbnails/ references
 * 3. Generates Satori thumbnails one by one
 * 4. Updates the JSON files with new thumbnail paths
 * 5. Updates content_registry.json
 */

import fs from 'fs';
import path from 'path';

interface RegistryEntry {
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
  filePath: string;
  category: string;
  articleType: string;
}

const CONTENT_ROOT = path.join(process.cwd(), 'content', 'static');
const REGISTRY_PATH = path.join(CONTENT_ROOT, 'content_registry.json');
const PUBLIC_THUMBNAILS = path.join(process.cwd(), 'public', 'thumbnails');

// Ensure thumbnails directory exists
if (!fs.existsSync(PUBLIC_THUMBNAILS)) {
  fs.mkdirSync(PUBLIC_THUMBNAILS, { recursive: true });
}

async function main() {
  const generateFlag = process.argv.includes('--generate');
  console.log('🔍 Reading content registry...\n');
  
  const registry: RegistryEntry[] = JSON.parse(
    fs.readFileSync(REGISTRY_PATH, 'utf-8')
  );

  // Find articles without local thumbnails
  const needsThumbnails = registry.filter(entry => {
    if (!entry.imageUrl) return true;
    if (entry.imageUrl.startsWith('/thumbnails/')) return false;
    return true;
  });

  console.log(`📊 Summary:`);
  console.log(`   Total articles: ${registry.length}`);
  console.log(`   Need thumbnails: ${needsThumbnails.length}`);
  console.log(`   Already have local thumbnails: ${registry.length - needsThumbnails.length}\n`);

  if (needsThumbnails.length === 0) {
    console.log('✅ All articles have local thumbnails!');
    return;
  }

  if (!generateFlag) {
    console.log('📝 Articles needing thumbnails:\n');
    needsThumbnails.forEach((entry, index) => {
      console.log(`${index + 1}. ${entry.slug} | ${entry.title.substring(0, 60)}...`);
    });
    console.log('\n📋 NEXT STEPS:\n');
    console.log('Run: npm run generate:thumbnails -- --generate\n');
    return;
  }

  console.log('🚀 Generating thumbnails one by one...\n');

  for (const entry of needsThumbnails) {
    const slug = entry.slug.replace(/^\//, '');
    const fileName = `${slug}.jpg`;
    const destPath = path.join(PUBLIC_THUMBNAILS, fileName);
    
    process.stdout.write(`  ⚡ ${slug} ... `);

    try {
      // 1. Register in Satori DB first (quick-generate)
      const regRes = await fetch('http://localhost:3001/api/v1/quick-generate', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3'
        },
        body: JSON.stringify({
          network: 'ozone',
          slug: slug,
          title: entry.title,
          subtitle: entry.description.substring(0, 160),
          layout: 'breaking'
        }),
      });

      if (!regRes.ok) throw new Error(`Registration failed: ${regRes.status}`);

      // 2. Download the rendered PNG
      const imgRes = await fetch(`http://localhost:3001/api/v1/generate?network=ozone&slug=${slug}`);
      if (!imgRes.ok) throw new Error(`Download failed: ${imgRes.status}`);

      const buffer = await imgRes.arrayBuffer();
      fs.writeFileSync(destPath, Buffer.from(buffer));

      // 3. Update the JSON file
      const articlePath = path.join(CONTENT_ROOT, entry.filePath);
      const articleData = JSON.parse(fs.readFileSync(articlePath, 'utf-8'));
      
      articleData.thumbnail_src = `/thumbnails/${fileName}`;
      if (articleData.hero_image) articleData.hero_image.src = `/thumbnails/${fileName}`;
      if (articleData.metadata?.openGraph?.images?.[0]) {
        articleData.metadata.openGraph.images[0].url = `/thumbnails/${fileName}`;
      }
      
      fs.writeFileSync(articlePath, JSON.stringify(articleData, null, 2));
      
      console.log(`✓ Saved to ${fileName}`);
    } catch (error) {
      console.log(`✗ Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  console.log('\n✅ Generation complete. Now syncing registry...');
  // We'll run the sync command via terminal after this script
}

main().catch(console.error);
