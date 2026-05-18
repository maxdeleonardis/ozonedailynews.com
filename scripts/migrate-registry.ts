#!/usr/bin/env tsx
// =============================================================================
// scripts/migrate-registry.ts
// Upserts all contentRegistry entries → Supabase content_registry table.
// Usage:  npx tsx --env-file=.env.local scripts/migrate-registry.ts
// =============================================================================

import * as path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { contentRegistry } from '../lib/content-registry';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const BATCH_SIZE = 500;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(url, key);

async function run() {
  console.log(`\n📦  Preparing ${contentRegistry.length} entries for upsert…`);

  const rows = contentRegistry.map((item) => ({
    slug:             item.slug,
    title:            item.title,
    description:      item.description,
    publish_date:     item.publishDate,
    modified_date:    item.modifiedDate,
    category:         item.category         || 'General',
    tags:             item.tags             || [],
    author:           item.author           || 'OzoneNews Editorial',
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

  let totalUpserted = 0;
  const totalBatches = Math.ceil(rows.length / BATCH_SIZE);

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    process.stdout.write(`  Batch ${batchNum}/${totalBatches} (${batch.length} rows)…`);

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

  // Verify
  const { count } = await supabase
    .from('content_registry')
    .select('*', { count: 'exact', head: true });

  console.log(`\n✅  Upserted ${totalUpserted} entries. Table now has ${count} rows.`);
}

run();
