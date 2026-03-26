#!/usr/bin/env tsx
// =============================================================================
// scripts/migrate-registry.ts
// One-time migration: upserts all contentRegistry entries → Supabase
// content_registry table (service_role key bypasses RLS).
//
// Usage:
//   npm run registry:migrate           -- run the full migration
//   npm run registry:migrate -- --dry-run  -- preview rows, no writes
// =============================================================================

import * as path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { contentRegistry } from '../lib/content-registry';

// Load .env.local (same pattern as push-articles-to-supabase.ts)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const DRY_RUN    = process.argv.includes('--dry-run');
const BATCH_SIZE = 1000;

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error('\n❌  Missing env vars. Ensure .env.local contains:');
  console.error('    NEXT_PUBLIC_SUPABASE_URL');
  console.error('    SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(url, key);

async function runMigration() {
  console.log(`\nPreparing ${contentRegistry.length} entries for migration...`);
  if (DRY_RUN) console.log('  [DRY RUN] No data will be written.\n');

  // Map TypeScript camelCase → Postgres snake_case columns.
  // Matches the live content_registry schema exactly (including component_type).
  // publish_date / modified_date are timestamptz — ISO date strings are auto-cast by Postgres.
  const rows = contentRegistry.map((item) => ({
    slug:             item.slug,
    title:            item.title,
    description:      item.description,
    publish_date:     item.publishDate,
    modified_date:    item.modifiedDate,
    category:         item.category         || 'General',
    tags:             item.tags             || [],
    author:           item.author           || 'ObjectWire Editorial',
    author_slug:      item.authorSlug       ?? null,
    priority:         item.priority         ?? 0.70,
    change_frequency: item.changeFrequency  || 'weekly',
    featured:         item.featured         ?? false,
    image_url:        item.imageUrl         ?? null,
    image_width:      item.imageWidth       ?? null,
    image_height:     item.imageHeight      ?? null,
    image_alt:        item.imageAlt         ?? null,
    image_credit:     item.imageCredit      ?? null,
    component_type:   'standard_article',
  }));

  if (DRY_RUN) {
    console.log('Sample (first 3 rows):');
    console.log(JSON.stringify(rows.slice(0, 3), null, 2));
    console.log(`\n✔  Dry run complete — ${rows.length} rows would be upserted.`);
    return;
  }

  const totalBatches = Math.ceil(rows.length / BATCH_SIZE);
  let totalUpserted  = 0;

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch    = rows.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;

    process.stdout.write(
      `  Uploading batch ${batchNum}/${totalBatches} (${batch.length} rows)...`
    );

    const { error } = await supabase
      .from('content_registry')
      .upsert(batch, { onConflict: 'slug' });

    if (error) {
      console.error(`\n❌  Error on batch ${batchNum}: ${error.message}`);
      process.exit(1);
    }

    totalUpserted += batch.length;
    console.log(' ✓');
  }

  console.log(`\n✅  Migration complete! ${totalUpserted} entries upserted into content_registry.`);
}

runMigration();
