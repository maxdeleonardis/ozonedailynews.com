#!/usr/bin/env tsx
// =============================================================================
// scripts/sync-public-to-supabase.ts
// =============================================================================
// Uploads every image in the local /public folder to the Supabase
// `blog-images` storage bucket, preserving the folder structure so that
// production Supabase URLs map 1-to-1 with local /public paths.
//
// LOCAL path:       /public/formula-1/ceo_formula_1.PNG
// Supabase path:    formula-1/ceo_formula_1.PNG
// Production URL:   https://{project}.supabase.co/storage/v1/object/public/blog-images/formula-1/ceo_formula_1.PNG
//
// Usage:
//   npx tsx scripts/sync-public-to-supabase.ts              -- upload all (skip existing)
//   npx tsx scripts/sync-public-to-supabase.ts --overwrite  -- re-upload everything
//   npx tsx scripts/sync-public-to-supabase.ts --dry-run    -- preview only, no uploads
//   npx tsx scripts/sync-public-to-supabase.ts --folder entertainment  -- one folder only
//
// Requires: NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { lookup as mimeLookup } from 'mime-types';

// Load .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// ── Config ────────────────────────────────────────────────────────────────────

const BUCKET    = 'blog-images';
const PUBLIC_DIR = path.resolve(__dirname, '../public');

const DRY_RUN   = process.argv.includes('--dry-run');
const OVERWRITE = process.argv.includes('--overwrite');
const FOLDER_FILTER = (() => {
  const i = process.argv.indexOf('--folder');
  return i !== -1 ? process.argv[i + 1] : null;
})();

// Files to skip (non-media assets that live in /public but aren't images)
const SKIP_FILES = new Set([
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  'hero-video.mp4',
]);

// Only upload these mime types
const ALLOWED_MIME = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
]);

// ── Supabase client ───────────────────────────────────────────────────────────

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('\n❌  Missing env vars. Ensure .env.local has:');
  console.error('    NEXT_PUBLIC_SUPABASE_URL=...');
  console.error('    NEXT_PUBLIC_SUPABASE_ANON_KEY=...');
  process.exit(1);
}

const supabase = createClient(url, key);

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Recursively collect all image files under a directory */
function walkImages(dir: string, base: string = dir): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkImages(full, base));
    } else if (entry.isFile()) {
      if (SKIP_FILES.has(entry.name)) continue;
      const mime = mimeLookup(entry.name) || '';
      if (!ALLOWED_MIME.has(mime)) continue;
      results.push(full);
    }
  }
  return results;
}

/** Convert absolute local path → Supabase storage key (forward slashes, no leading /) */
function toStorageKey(absPath: string): string {
  return path.relative(PUBLIC_DIR, absPath).replace(/\\/g, '/');
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n📦  ObjectWire — sync /public → Supabase bucket: ${BUCKET}`);
  if (DRY_RUN)   console.log('    ⚡ DRY RUN — no uploads will be made');
  if (OVERWRITE) console.log('    🔁 OVERWRITE mode — re-uploading all files');
  if (FOLDER_FILTER) console.log(`    📁 Filtering to folder: ${FOLDER_FILTER}`);
  console.log('');

  // Collect files
  let files = walkImages(PUBLIC_DIR);
  if (FOLDER_FILTER) {
    files = files.filter(f => toStorageKey(f).startsWith(FOLDER_FILTER + '/'));
  }

  if (files.length === 0) {
    console.log('⚠️  No image files found.');
    return;
  }

  console.log(`Found ${files.length} image(s) to process.\n`);

  const baseUrl = `${url}/storage/v1/object/public/${BUCKET}`;
  let uploaded = 0;
  let skipped  = 0;
  let failed   = 0;

  for (const file of files) {
    const storageKey = toStorageKey(file);
    const mime = (mimeLookup(file) || 'image/jpeg') as string;
    const publicUrl = `${baseUrl}/${storageKey}`;

    if (DRY_RUN) {
      console.log(`  [dry]  ${storageKey}`);
      console.log(`         → ${publicUrl}`);
      uploaded++;
      continue;
    }

    // Check if already exists (skip unless --overwrite)
    if (!OVERWRITE) {
      const { data: existing } = await supabase.storage
        .from(BUCKET)
        .list(path.dirname(storageKey).replace(/\\/g, '/'), {
          search: path.basename(storageKey),
        });
      if (existing && existing.some(f => f.name === path.basename(storageKey))) {
        console.log(`  [skip] ${storageKey}`);
        skipped++;
        continue;
      }
    }

    // Upload
    const buffer = fs.readFileSync(file);
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(storageKey, buffer, {
        contentType: mime,
        cacheControl: '31536000',
        upsert: OVERWRITE,
      });

    if (error) {
      // "already exists" is not a real error unless we wanted to overwrite
      if (error.message.includes('already exists')) {
        console.log(`  [skip] ${storageKey}  (already in bucket)`);
        skipped++;
      } else {
        console.error(`  [FAIL] ${storageKey}  ← ${error.message}`);
        failed++;
      }
    } else {
      console.log(`  [✓]    ${storageKey}`);
      console.log(`         → ${publicUrl}`);
      uploaded++;
    }
  }

  console.log('\n─────────────────────────────────────');
  if (DRY_RUN) {
    console.log(`Preview: ${uploaded} file(s) would be uploaded.`);
  } else {
    console.log(`✅  Uploaded: ${uploaded}  |  Skipped: ${skipped}  |  Failed: ${failed}`);
    if (uploaded > 0) {
      console.log(`\n📋  Production NEXT_PUBLIC_MEDIA_BASE:`);
      console.log(`    ${baseUrl}`);
      console.log(`\n    Set this in Vercel → Settings → Environment Variables`);
    }
  }
  console.log('');
}

main().catch(err => {
  console.error('\n❌  Unexpected error:', err);
  process.exit(1);
});
