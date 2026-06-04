#!/usr/bin/env tsx
/**
 * Bulk OG Image Generator
 * 
 * Generates opengraph-image.tsx files for all articles missing image dimensions.
 * Uses Satori templates from lib/og-templates.tsx
 * 
 * Usage:
 *   npx tsx scripts/generate-og-images.ts [--dry-run] [--category=News]
 * 
 * Flags:
 *   --dry-run: Show what would be generated without writing files
 *   --category: Only generate for specific category (News, Tech, Entertainment, etc.)
 */

import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const REGISTRY_PATH = path.join(ROOT, 'content', 'static', 'content_registry.json');
const APP_DIR = path.join(ROOT, 'app');

interface RegistryEntry {
  slug: string;
  title: string;
  description: string;
  category?: string;
  author?: string;
  publish_date?: string;
  image_url?: string | null;
  image_width?: number | null;
  image_height?: number | null;
}

// Parse CLI flags
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const CATEGORY_FILTER = args.find((a) => a.startsWith('--category='))?.split('=')[1];

// Article type detection
function detectArticleType(slug: string): 'news' | 'creator' | 'hub' | 'jack' | 'skip' {
  if (slug.includes('/news/')) return 'news';
  if (slug.startsWith('influencer/') || slug.startsWith('creator/')) return 'creator';
  if (slug.startsWith('crypto/news/') || slug.startsWith('meta/news/') || slug.startsWith('microsoft/news/')) return 'jack';
  
  // Skip these types (they're hub pages or special routes)
  if (
    slug.startsWith('about') ||
    slug.startsWith('authors') ||
    slug.startsWith('contact') ||
    slug.startsWith('corrections') ||
    slug.startsWith('editorial-standards') ||
    slug.startsWith('get-help') ||
    slug.startsWith('login') ||
    slug.startsWith('privacy-policy') ||
    slug.startsWith('saved') ||
    slug.startsWith('search') ||
    slug.startsWith('site-index') ||
    slug.startsWith('tags') ||
    slug.startsWith('terms-of-service') ||
    slug === 'amazon' ||
    slug === 'anime' ||
    slug === 'disney' ||
    slug === 'entertainment' ||
    slug === 'google' ||
    slug === 'meta' ||
    slug === 'microsoft' ||
    slug === 'news' ||
    slug === 'video-games' ||
    slug === 'video-games/fortnite' ||
    slug === 'video-games/gta-6' ||
    slug === 'video-games/marvels-wolverine' ||
    slug === 'video-games/mha' ||
    slug === 'video-games/mha/ultra-rumble' ||
    slug === 'video-games/mha/alls-justice' ||
    slug === 'video-games/mythmatch' ||
    slug === 'video-games/nintendo' ||
    slug === 'video-games/rainbow-6-siege' ||
    slug === 'video-games/resident-evil-requiem' ||
    slug === 'video-games/toxic-comando' ||
    slug === 'video-games/valve-corporation' ||
    slug === 'video-games/007-first-light' ||
    slug === 'video-games/anime/hunter-hunter-nen-survivor' ||
    slug === 'video-games/anime/seven-deadly-sins-origin' ||
    slug === 'video-games/arknights-endfield' ||
    slug === 'video-games/new/crimson-desert'
  ) {
    return 'hub';
  }
  
  // Default to news article
  return 'news';
}

// Template selection
function selectTemplate(type: 'news' | 'creator' | 'hub' | 'jack'): string {
  switch (type) {
    case 'creator':
      return 'CreatorProfileOG';
    case 'hub':
      return 'HubPageOG';
    case 'jack':
      return 'JackArticleOG';
    default:
      return 'NewsArticleOG';
  }
}

// Generate OG image file content
function generateOGImageFile(entry: RegistryEntry, type: 'news' | 'creator' | 'hub' | 'jack'): string {
  const template = selectTemplate(type);
  const cleanTitle = entry.title.replace(/'/g, "\\'");
  const cleanCategory = (entry.category || 'News').replace(/'/g, "\\'");
  const cleanAuthor = (entry.author || 'OzoneNews Editorial Team').replace(/'/g, "\\'");
  const cleanDate = entry.publish_date || 'June 4, 2026';
  
  if (type === 'creator') {
    // Extract creator name from title (usually "Name | ...")
    const nameMatch = cleanTitle.match(/^([^|]+)/);
    const name = nameMatch ? nameMatch[1].trim() : cleanTitle;
    const roleMatch = cleanTitle.match(/\|\s*(.+)/);
    const role = roleMatch ? roleMatch[1].trim() : 'Creator Profile';
    
    return `import { ImageResponse } from 'next/og';
import { ${template} } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = '${cleanTitle}';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <${template}
        name="${name}"
        role="${role}"
        platform="TikTok"
      />
    ),
    {
      ...size,
    }
  );
}
`;
  }
  
  if (type === 'hub') {
    const cleanDescription = (entry.description || '').replace(/'/g, "\\'").slice(0, 120);
    return `import { ImageResponse } from 'next/og';
import { ${template} } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = '${cleanTitle}';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <${template}
        title="${cleanTitle}"
        description="${cleanDescription}"
        category="${cleanCategory}"
      />
    ),
    {
      ...size,
    }
  );
}
`;
  }
  
  // News or Jack article (same structure, different template)
  return `import { ImageResponse } from 'next/og';
import { ${template} } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = '${cleanTitle}';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <${template}
        title="${cleanTitle}"
        category="${cleanCategory}"
        author="${cleanAuthor}"
        publishDate="${cleanDate}"
      />
    ),
    {
      ...size,
    }
  );
}
`;
}

// Main execution
async function main() {
  console.log('🎨  OG Image Bulk Generator\n');
  
  // Load registry
  if (!fs.existsSync(REGISTRY_PATH)) {
    console.error(`❌ Registry not found at ${REGISTRY_PATH}`);
    process.exit(1);
  }
  
  const registry: RegistryEntry[] = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf-8'));
  console.log(`📋  Loaded ${registry.length} registry entries\n`);
  
  // Filter entries missing images
  let missingImages = registry.filter(
    (e) => !e.image_width || !e.image_height || !e.image_url || e.image_url === 'NO_IMAGE'
  );
  
  if (CATEGORY_FILTER) {
    missingImages = missingImages.filter((e) => e.category === CATEGORY_FILTER);
    console.log(`🔍  Filtered to category: ${CATEGORY_FILTER}\n`);
  }
  
  console.log(`⚠️  Found ${missingImages.length} entries missing image dimensions\n`);
  
  let generated = 0;
  let skipped = 0;
  
  for (const entry of missingImages) {
    const type = detectArticleType(entry.slug);
    
    if (type === 'skip') {
      skipped++;
      continue;
    }
    
    // Convert slug to directory path
    const slugPath = entry.slug.replace(/^\//, '');
    const targetDir = path.join(APP_DIR, slugPath);
    const ogImagePath = path.join(targetDir, 'opengraph-image.tsx');
    
    // Skip if directory doesn't exist
    if (!fs.existsSync(targetDir)) {
      console.log(`⚠️  Directory not found, skipping: ${slugPath}`);
      skipped++;
      continue;
    }
    
    // Skip if OG image already exists
    if (fs.existsSync(ogImagePath)) {
      console.log(`✅  Already exists, skipping: ${slugPath}`);
      skipped++;
      continue;
    }
    
    const ogImageContent = generateOGImageFile(entry, type);
    
    if (DRY_RUN) {
      console.log(`[DRY RUN] Would create: ${slugPath}/opengraph-image.tsx (type: ${type})`);
    } else {
      fs.writeFileSync(ogImagePath, ogImageContent, 'utf-8');
      console.log(`✨  Created: ${slugPath}/opengraph-image.tsx (type: ${type})`);
    }
    
    generated++;
  }
  
  console.log(`\n✅  Done!`);
  console.log(`   Generated: ${generated}`);
  console.log(`   Skipped: ${skipped}`);
  
  if (DRY_RUN) {
    console.log(`\n💡  Run without --dry-run to actually create the files`);
  } else {
    console.log(`\n💡  Next steps:`);
    console.log(`   1. Run: npx tsx scripts/sync-registry.ts --write`);
    console.log(`   2. Verify: jq -r '.[] | select(.image_width != null) | .slug' content/static/content_registry.json | wc -l`);
    console.log(`   3. Test: npm run dev and visit any article to see the OG image`);
  }
}

main().catch((err) => {
  console.error('❌  Fatal error:', err);
  process.exit(1);
});
