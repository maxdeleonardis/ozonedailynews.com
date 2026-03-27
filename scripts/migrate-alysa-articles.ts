#!/usr/bin/env tsx
// =============================================================================
// scripts/migrate-alysa-articles.ts
// =============================================================================
// Upserts alysa_articles rows into Supabase.
// Table: alysa_articles — athlete / sports figure biography profiles
//
// Add new athlete entries to ALYSA_ARTICLES below; each will be upserted by slug.
// Image URLs resolve against the Supabase media bucket.
//
// Usage:
//   npm run alysa:migrate          — upsert all rows
//   npm run alysa:migrate-dry      — preview without writing
// =============================================================================

import * as path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Missing Supabase env vars in .env.local');
  process.exit(1);
}

const DRY_RUN = process.argv.includes('--dry-run');
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/** Resolve a /public-relative path to the Supabase CDN URL */
const BUCKET_BASE = `${SUPABASE_URL}/storage/v1/object/public/blog-images`;
function media(publicPath: string): string {
  return `${BUCKET_BASE}${publicPath}`;
}

// =============================================================================
// ATHLETE ARTICLE ENTRIES
// Add new entries here. Run `npm run media:sync` first to make sure images
// are in the Supabase bucket, then run `npm run alysa:migrate`.
// =============================================================================

const ALYSA_ARTICLES: Record<string, unknown>[] = [

  // ── Add athlete profile entries here ──────────────────────────────────────
  // Example template:
  // {
  //   slug:    'winter-olympics/usa/ilia-malinin',
  //   status:  'published',
  //   schema_title:       'Ilia Malinin - ...',
  //   schema_description: '...',
  //   schema_author:      'ObjectWire Olympic Bureau',
  //   schema_article_url: 'https://www.objectwire.org/winter-olympics/usa/ilia-malinin',
  //   schema_image_url:   media('/winter-olympics/ilia-malinin.jpeg'),
  //   schema_section:     'Winter Olympics',
  //   schema_keywords:    ['Ilia Malinin', ...],
  //   schema_published_time: '2026-02-18T12:00:00Z',
  //   schema_modified_time:  '2026-02-18T12:00:00Z',
  //   breadcrumbs: [...],
  //   hero_image_src:   media('/winter-olympics/ilia-malinin.jpeg'),
  //   hero_image_alt:   '...',
  //   hero_gradient:    'linear-gradient(135deg, #0f172a 0%, #1e3a5f 45%, #b45309 100%)',
  //   hero_name:        'Ilia Malinin',
  //   hero_subtitle:    '...',
  //   hero_description: '...',
  //   hero_badges:      [...],
  //   hero_cta_buttons: [...],
  //   sidebar_infobox_image_src:  media('/winter-olympics/ilia-malinin.jpeg'),
  //   sidebar_infobox_image_alt:  '...',
  //   sidebar_infobox_name:       'Ilia Malinin',
  //   sidebar_infobox_subtitle:   '...',
  //   sidebar_infobox_rows:       [...],
  //   sidebar_callout:            { title: '...', body: '...', ctaHref: '...', ctaLabel: '...', color: 'yellow' },
  //   sidebar_timeline:           [...],
  //   sidebar_related_links:      [...],
  //   sidebar_meta_published_date: 'February 18, 2026',
  //   sidebar_meta_updated_date:   null,
  //   sidebar_meta_author:         'ObjectWire Olympic Bureau',
  //   sidebar_meta_category:       'Winter Olympics · Figure Skating',
  //   tiktok_embed: false,
  //   content_html: `<section>...</section>`,
  // },

];

// =============================================================================
// UPSERT RUNNER
// =============================================================================

async function run() {
  if (ALYSA_ARTICLES.length === 0) {
    console.log('\n⚠️  No entries in ALYSA_ARTICLES. Add athlete profiles to the script first.\n');
    return;
  }

  console.log(`\n${DRY_RUN ? '🔍  DRY RUN — no writes' : '🚀  Upserting alysa_articles'}\n`);

  let ok = 0;
  let fail = 0;

  for (const entry of ALYSA_ARTICLES) {
    const slug = entry.slug as string;

    if (DRY_RUN) {
      console.log(`  ✓ [dry] ${slug}`);
      ok++;
      continue;
    }

    const { error } = await supabase
      .from('alysa_articles')
      .upsert(entry, { onConflict: 'slug' });

    if (error) {
      console.error(`  ✗ ${slug}\n    ${error.message}`);
      fail++;
    } else {
      console.log(`  ✓ ${slug}`);
      ok++;
    }
  }

  console.log(`\n${DRY_RUN ? 'Preview' : 'Done'}: ${ok} ok, ${fail} failed\n`);
  if (fail > 0) process.exit(1);
}

run();
