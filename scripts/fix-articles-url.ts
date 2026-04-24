#!/usr/bin/env tsx
// One-time patch: fixes articles rows where the `url` field is null.
// URLs derived from the existing page.tsx file locations.

import path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const FIXES: Record<string, string> = {
  'meta-layoffs':                                                '/meta/layoffs',
  'technology-news-midas-50m-series-a-rwa-tokenization-liquidity': '/technology/news/midas-50m-series-a-rwa-tokenization-liquidity',
  'world-cup-news-2026-world-cup-48-team-field-complete-italy-out':  '/world-cup/news/2026-world-cup-48-team-field-complete-italy-out',
  'world-cup-news-trump-iran-world-cup-2026-usa-hosting-controversy': '/world-cup/news/trump-iran-world-cup-2026-usa-hosting-controversy',
};

async function run() {
  console.log('\n🔧  Patching articles.url fields…\n');
  for (const [slug, url] of Object.entries(FIXES)) {
    const { error } = await supabase.from('articles').update({ url }).eq('slug', slug);
    if (error) console.error(`  ❌  ${slug}: ${error.message}`);
    else console.log(`  ✅  ${slug} → ${url}`);
  }
  console.log('\nDone.');
}

run().catch(e => { console.error(e); process.exit(1); });
