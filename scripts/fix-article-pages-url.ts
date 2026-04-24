#!/usr/bin/env tsx
// One-time patch: fixes article_pages rows where the `url` field
// was stored as the literal string "${SLUG}" instead of the actual URL path.
// Also sets url for article_pages rows that have a known mapping.

import path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// article_pages slug → correct canonical URL path
const FIXES: Record<string, string> = {
  // ${SLUG} literal bug — page.tsx files exist, URLs derived from file path
  'influencer-mrbeast':                          '/influencer/mrbeast',
  'video-games-anime-neverness-to-everness':     '/video-games/anime/neverness-to-everness',
  'video-games-dispatch-adhoc-studio':           '/video-games/dispatch-adhoc-studio',
  'video-games-star-wars-star-wars-zero-company':'/video-games/star-wars/star-wars-zero-company',
};

async function run() {
  console.log('\n🔧  Patching article_pages.url fields…\n');

  for (const [slug, url] of Object.entries(FIXES)) {
    const { error } = await supabase
      .from('article_pages')
      .update({ url })
      .eq('slug', slug);

    if (error) {
      console.error(`  ❌  ${slug}: ${error.message}`);
    } else {
      console.log(`  ✅  ${slug} → ${url}`);
    }
  }

  console.log('\nDone.');
}

run().catch(e => { console.error(e); process.exit(1); });
