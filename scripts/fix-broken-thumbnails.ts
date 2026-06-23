#!/usr/bin/env ts-node-script

/**
 * Fix Broken Thumbnail URLs
 * 
 * This script fixes articles with broken /api/og URLs by replacing them
 * with Unsplash placeholder images temporarily until Satori is available.
 */

import fs from 'fs';
import path from 'path';

const CONTENT_ROOT = path.join(process.cwd(), 'content', 'static');

const brokenArticles = [
  {
    path: 'articles/2026/06/science-earth-mycorrhizal-fungi-network-map-spun-2026.json',
    placeholder: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&h=675&fit=crop' // soil/fungi
  },
  {
    path: 'jack_articles/2026/05/science-space-blue-origin-new-glenn-explosion-cape-canaveral-2026.json',
    placeholder: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=1200&h=675&fit=crop' // rocket/space
  },
  {
    path: 'articles/2026/05/keeling-curve-co2-annual-peak-mauna-loa-2026.json',
    placeholder: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=675&fit=crop' // atmosphere/sky
  },
  {
    path: 'articles/2026/05/pigeon-magnetic-navigation-liver-macrophages-science-2026.json',
    placeholder: 'https://images.unsplash.com/photo-1511511450040-677116ff389e?w=1200&h=675&fit=crop' // bird
  },
];

function fixArticle(filePath: string, newImageUrl: string) {
  const fullPath = path.join(CONTENT_ROOT, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');
  const article = JSON.parse(content);

  // Check if it actually has a broken /api/og URL
  const hasBrokenUrl = article.thumbnail_src && article.thumbnail_src.includes('/api/og');
  
  if (!hasBrokenUrl) {
    console.log(`⏭️  Skipping ${path.basename(filePath)} — no broken URL found`);
    return false;
  }

  console.log(`\n🔧 Fixing ${path.basename(filePath)}`);
  console.log(`   Old: ${article.thumbnail_src}`);
  console.log(`   New: ${newImageUrl}`);

  // Update thumbnail_src
  article.thumbnail_src = newImageUrl;

  // Update metadata openGraph images
  if (article.metadata?.openGraph?.images?.[0]) {
    article.metadata.openGraph.images[0].url = newImageUrl;
  }

  // Write back
  fs.writeFileSync(fullPath, JSON.stringify(article, null, 2));
  console.log(`   ✅ Updated successfully`);
  
  return true;
}

async function main() {
  console.log('🔍 Fixing articles with broken /api/og URLs...\n');
  
  let fixed = 0;
  
  for (const article of brokenArticles) {
    if (fixArticle(article.path, article.placeholder)) {
      fixed++;
    }
  }

  console.log(`\n✅ Fixed ${fixed} articles`);
  console.log('\n📋 Next steps:');
  console.log('   1. Run: npm run wiki:sync -- --write');
  console.log('   2. Refresh your dev server');
  console.log('   3. The /api/og errors should be gone\n');
}

main().catch(console.error);
