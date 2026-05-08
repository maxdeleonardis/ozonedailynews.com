/**
 * Sync article table images → content_registry.image_url
 *
 * For each article table, pull rows that have an image field set,
 * convert the slug to the canonical URL path, and update
 * content_registry.image_url where it is currently null/empty.
 *
 * Usage: npx tsx --env-file=.env.local scripts/_sync-db-images-to-registry.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const BASE_URL = 'https://www.objectwire.org';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/** Convert a table slug like "creator-ari-kytsya" to a path like "/creator/ari-kytsya" */
function slugToPath(slug: string): string {
  return '/' + slug.replace(/-/g, '/');
}

/** Make a relative image path into a full URL if needed */
function toFullUrl(src: string): string {
  if (!src) return '';
  if (src.startsWith('http')) return src;
  return `${BASE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
}

interface TableConfig {
  table: string;
  slugField: string;
  imageField: string;
}

const TABLES: TableConfig[] = [
  { table: 'articles',         slugField: 'slug', imageField: 'thumbnail_src' },
  { table: 'jack_articles',    slugField: 'slug', imageField: 'hero_image_url' },
  { table: 'article_pages',    slugField: 'slug', imageField: 'thumbnail_src' },
  { table: 'creator_articles', slugField: 'slug', imageField: 'hero_image_src' },
  { table: 'alysa_articles',   slugField: 'slug', imageField: 'thumbnail_src' },
];

async function main() {
  // First load the full content_registry so we can match slugs
  const { data: registry, error: regErr } = await sb
    .from('content_registry')
    .select('id, slug, image_url');

  if (regErr || !registry) {
    console.error('Failed to load content_registry:', regErr);
    process.exit(1);
  }

  // Build a map: path → registry row id
  const pathToId = new Map<string, string>();
  const pathToExisting = new Map<string, string | null>();
  for (const row of registry) {
    const p = row.slug as string; // e.g. "/creator/ari-kytsya"
    pathToId.set(p, row.id as string);
    pathToExisting.set(p, row.image_url as string | null);
  }

  let totalUpdated = 0;
  let totalSkipped = 0;

  for (const cfg of TABLES) {
    console.log(`\n=== ${cfg.table} ===`);

    // Fetch all rows with an image value
    const { data: rows, error } = await sb
      .from(cfg.table)
      .select(`${cfg.slugField}, ${cfg.imageField}`)
      .not(cfg.imageField, 'is', null)
      .neq(cfg.imageField, '');

    if (error) {
      console.error(`  Error fetching ${cfg.table}:`, error.message);
      continue;
    }
    if (!rows || rows.length === 0) {
      console.log('  No rows with images found.');
      continue;
    }

    let updated = 0;
    let skipped = 0;

    for (const row of rows) {
      const tableSlug = row[cfg.slugField] as string;
      const imgSrc   = row[cfg.imageField] as string;
      if (!tableSlug || !imgSrc) continue;

      const canonicalPath = slugToPath(tableSlug);
      const registryId = pathToId.get(canonicalPath);

      if (!registryId) {
        // No matching registry entry - skip silently
        continue;
      }

      const existingImg = pathToExisting.get(canonicalPath);
      if (existingImg && existingImg.trim() !== '') {
        // Already has an image - don't overwrite
        skipped++;
        continue;
      }

      const fullUrl = toFullUrl(imgSrc);
      const { error: updateErr } = await sb
        .from('content_registry')
        .update({ image_url: fullUrl })
        .eq('id', registryId);

      if (updateErr) {
        console.error(`  ❌ ${canonicalPath}: ${updateErr.message}`);
      } else {
        console.log(`  ✅ ${canonicalPath}`);
        updated++;
        // Update local cache so subsequent tables don't double-write
        pathToExisting.set(canonicalPath, fullUrl);
      }
    }

    console.log(`  ${updated} updated, ${skipped} already had image.`);
    totalUpdated += updated;
    totalSkipped += skipped;
  }

  console.log(`\n=== DONE ===`);
  console.log(`Total updated: ${totalUpdated}`);
  console.log(`Total already had image: ${totalSkipped}`);
}

main().catch(console.error);
