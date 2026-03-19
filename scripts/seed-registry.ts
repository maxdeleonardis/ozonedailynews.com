#!/usr/bin/env tsx
// =============================================================================
// scripts/seed-registry.ts
// =============================================================================
// ONE-TIME migration: reads the static contentRegistry TS array and upserts all
// entries into the Supabase content_registry table.
//
// Run ONCE after creating the content_registry table:
//
//   npx tsx scripts/seed-registry.ts
//
// Safe to re-run — uses upsert so existing rows are updated, not duplicated.
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load .env.local so NEXT_PUBLIC_SUPABASE_URL etc. are available
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
  console.error('    Make sure .env.local contains these values.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ---------------------------------------------------------------------------
// Dynamically import the TS registry (tsx handles the compilation)
// ---------------------------------------------------------------------------
async function loadRegistry() {
  const registryPath = path.resolve(__dirname, '../lib/content-registry.ts');
  // On Windows, dynamic import() requires a file:// URL for absolute paths
  const registryUrl = registryPath.startsWith('/')
    ? `file://${registryPath}`
    : `file:///${registryPath.replace(/\\/g, '/')}`;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = await import(registryUrl);
  return mod.contentRegistry as Array<Record<string, unknown>>;
}

function toRow(entry: Record<string, unknown>) {
  return {
    slug:             String(entry.slug ?? ''),
    title:            String(entry.title ?? ''),
    description:      String(entry.description ?? ''),
    publish_date:     String(entry.publishDate ?? ''),
    modified_date:    String(entry.modifiedDate ?? ''),
    category:         String(entry.category ?? 'General'),
    tags:             Array.isArray(entry.tags) ? entry.tags : [],
    author:           String(entry.author ?? 'ObjectWire Editorial'),
    author_slug:      entry.authorSlug ? String(entry.authorSlug) : null,
    priority:         Number(entry.priority ?? 0.7),
    change_frequency: String(entry.changeFrequency ?? 'weekly'),
    featured:         Boolean(entry.featured),
    image_url:        entry.imageUrl  ? String(entry.imageUrl)  : null,
    image_width:      entry.imageWidth  ? Number(entry.imageWidth)  : null,
    image_height:     entry.imageHeight ? Number(entry.imageHeight) : null,
    image_alt:        entry.imageAlt  ? String(entry.imageAlt)  : null,
    image_credit:     entry.imageCredit ? String(entry.imageCredit) : null,
  };
}

const BATCH_SIZE = 200;

async function main() {
  console.log('📚  Loading contentRegistry from lib/content-registry.ts…');
  const registry = await loadRegistry();
  console.log(`    Found ${registry.length} entries.\n`);

  const rows = registry.map(toRow);

  console.log(`⬆️   Upserting to Supabase content_registry table in batches of ${BATCH_SIZE}…`);

  let totalUpserted = 0;
  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);
    const { error } = await supabase
      .from('content_registry')
      .upsert(batch, { onConflict: 'slug' });

    if (error) {
      console.error(`❌  Error upserting batch ${Math.floor(i / BATCH_SIZE) + 1}:`, error.message);
      process.exit(1);
    }

    totalUpserted += batch.length;
    const pct = Math.round((totalUpserted / rows.length) * 100);
    process.stdout.write(`\r    Progress: ${totalUpserted}/${rows.length} (${pct}%) `);
  }

  console.log('\n');
  console.log(`✅  Successfully seeded ${totalUpserted} entries into content_registry.`);
  console.log('\nNext steps:');
  console.log('  1. Verify data in Supabase dashboard → Table Editor → content_registry');
  console.log('  2. Run: npm run build  (should still pass, now served from DB)');
  console.log('  3. Future articles are auto-added by the prebuild sync script via Supabase.');
}

main().catch(err => {
  console.error('❌ Unexpected error:', err);
  process.exit(1);
});
