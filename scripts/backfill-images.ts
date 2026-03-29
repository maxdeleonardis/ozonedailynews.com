#!/usr/bin/env tsx
// =============================================================================
// scripts/backfill-images.ts
//
// Scans all page.tsx stub files for image URLs defined in metadata/constants,
// then:
//   1. Patches lib/content-registry.ts with imageUrl/imageWidth/imageHeight
//   2. (Optional) --supabase flag also writes hero_image_src to the DB row
//
// Usage:
//   npx tsx scripts/backfill-images.ts              — dry run (show what would change)
//   npx tsx scripts/backfill-images.ts --write       — write to content-registry.ts
//   npx tsx scripts/backfill-images.ts --write --supabase — also update Supabase rows
// =============================================================================

import * as fs   from 'fs';
import * as path from 'path';
import { contentRegistry } from '../lib/content-registry';

const WRITE_MODE    = process.argv.includes('--write');
const SUPABASE_MODE = process.argv.includes('--supabase');
const REGISTRY_PATH = path.resolve(process.cwd(), 'lib/content-registry.ts');
const APP_DIR       = path.resolve(process.cwd(), 'app');

// ---------------------------------------------------------------------------
// Extract image URL from a page.tsx source string
// Handles:
//   const IMAGE_URL = '/foo/bar.jpg'
//   images: [IMAGE_URL]          ← resolves the const
//   images: ['/foo/bar.jpg']     ← direct string
// ---------------------------------------------------------------------------
function extractImageUrl(source: string): string | null {
  // Pattern 1: explicit IMAGE_URL constant
  const constMatch = source.match(/const\s+IMAGE_URL\s*=\s*['"`]([^'"`]+)['"`]/);
  if (constMatch) return constMatch[1];

  // Pattern 2: images: ['...'] or images: ["..."]
  const imagesMatch = source.match(/images:\s*\[\s*['"`]([^'"`]+)['"`]/);
  if (imagesMatch) return imagesMatch[1];

  // Pattern 3: image: '...' in openGraph block (single image)
  const singleMatch = source.match(/openGraph[\s\S]{0,300}?image:\s*['"`]([^'"`]+)['"`]/);
  if (singleMatch) return singleMatch[1];

  return null;
}

// ---------------------------------------------------------------------------
// Derive the registry slug from a file path
// e.g. app/trump/foo/page.tsx → /trump/foo
// ---------------------------------------------------------------------------
function slugFromPath(filePath: string): string {
  const rel = path.relative(APP_DIR, filePath);          // trump/foo/page.tsx
  const parts = rel.split(path.sep).slice(0, -1);       // ['trump', 'foo']
  return '/' + parts.join('/');
}

// ---------------------------------------------------------------------------
// Find all page.tsx files that are DB stubs (contain NewsArticleDB / JackArticleDB etc.)
// ---------------------------------------------------------------------------
function findStubPages(dir: string, results: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip Next.js special dirs
      if (['_components', '(admin)', '(public)', 'api', 'auth'].includes(entry.name)) continue;
      findStubPages(full, results);
    } else if (entry.name === 'page.tsx') {
      const src = fs.readFileSync(full, 'utf-8');
      if (/NewsArticleDB|JackArticleDB|ArticlePageDB|CreatorArticleDB|AlysaArticleDB/.test(src)) {
        results.push(full);
      }
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main(): Promise<void> {
  console.log('\n🔍  Scanning stub page.tsx files for image URLs...\n');

  const stubs = findStubPages(APP_DIR);
  console.log(`  Found ${stubs.length} stub pages\n`);

  // Build slug → imageUrl map from page files
  const pageImageMap = new Map<string, string>();
  for (const filePath of stubs) {
    const src = fs.readFileSync(filePath, 'utf-8');
    const imageUrl = extractImageUrl(src);
    if (!imageUrl) continue;
    const slug = slugFromPath(filePath);
    pageImageMap.set(slug, imageUrl);
  }

  console.log(`  Found image URLs in ${pageImageMap.size} pages\n`);

  // Cross-reference with registry entries missing imageUrl
  const missing = contentRegistry.filter(e => !e.imageUrl);
  const matches: Array<{ slug: string; imageUrl: string }> = [];

  for (const entry of missing) {
    const imageUrl = pageImageMap.get(entry.slug);
    if (imageUrl) {
      matches.push({ slug: entry.slug, imageUrl });
    }
  }

  console.log(`  ${missing.length} registry entries missing imageUrl`);
  console.log(`  ${matches.length} have a match from page.tsx metadata\n`);

  if (matches.length === 0) {
    console.log('⚠️  Nothing to patch.\n');
    return;
  }

  // Show what will change
  for (const { slug, imageUrl } of matches) {
    console.log(`  ${slug}`);
    console.log(`    → ${imageUrl}`);
  }

  if (!WRITE_MODE) {
    console.log(`\n⚠️  DRY RUN — run with --write to apply ${matches.length} patches.\n`);
    return;
  }

  // ── Write to content-registry.ts ─────────────────────────────────────────
  let registrySource = fs.readFileSync(REGISTRY_PATH, 'utf-8');
  let patchCount = 0;

  for (const { slug, imageUrl } of matches) {
    const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const slugPattern = new RegExp(
      `(slug:\\s*['"]${escapedSlug}['"][,\\s]*\\n)`,
      'g'
    );
    const patched = registrySource.replace(slugPattern, (match) => {
      return `${match}    imageUrl: "${imageUrl}",\n    imageWidth: 1200,\n    imageHeight: 675,\n`;
    });
    if (patched !== registrySource) {
      registrySource = patched;
      patchCount++;
    }
  }

  fs.writeFileSync(REGISTRY_PATH, registrySource, 'utf-8');
  console.log(`\n✅  Patched ${patchCount} entries in lib/content-registry.ts`);

  // ── Optionally write hero_image_src to Supabase ───────────────────────────
  if (SUPABASE_MODE) {
    const { createClient } = await import('@supabase/supabase-js');
    const dotenv = await import('dotenv');
    dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) { console.error('❌  Missing Supabase env vars'); return; }
    const sb = createClient(url, key);

    let dbCount = 0;
    for (const { slug, imageUrl } of matches) {
      // Try both slug formats: /foo/bar → foo-bar (DB) and foo/bar (direct)
      const dbSlugDirect = slug.replace(/^\//, '');
      const dbSlugDashed = dbSlugDirect.replace(/\//g, '-');

      // Try articles table first, then jack_articles
      for (const table of ['articles', 'jack_articles', 'article_pages', 'creator_articles'] as const) {
        const { error: e1 } = await sb
          .from(table)
          .update({ hero_image_src: imageUrl })
          .eq('slug', dbSlugDirect);
        const { error: e2 } = await sb
          .from(table)
          .update({ hero_image_src: imageUrl })
          .eq('slug', dbSlugDashed);
        if (!e1 || !e2) dbCount++;
      }
    }
    console.log(`✅  Updated hero_image_src on ~${dbCount} Supabase rows`);
  }

  console.log('\n   Run `npm run audit` to see updated issue count.\n');
}

main().catch((err) => {
  console.error('❌  Error:', err);
  process.exit(1);
});
