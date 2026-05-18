/**
 * fix-creator-articles.ts
 *
 * Direct Supabase updater for the 8 recent creator articles.
 * Fixes:
 *   - Missing hero_image_src / sidebar_infobox_image_src (images not rendering)
 *   - schema_image_url
 *   - Author across schema_author, schema_author_url, sidebar_meta_author → Jack Brennan
 *
 * Why: wiki:publish cannot resolve template-literal variables (IMAGE_URL etc.)
 * in JSX prop blocks, so image fields land as empty strings in Supabase.
 *
 * Run: npx tsx --env-file=.env.local scripts/fix-creator-articles.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Missing Supabase env vars');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const SITE = 'https://www.ozonenetwork.news';
const AUTHOR = 'Jack Brennan';
const AUTHOR_URL = `${SITE}/authors/jack-brennan`;

interface FixRow {
  slug: string;
  imagePath: string;
  alt: string;
  name: string;
  category?: string;
}

const FIXES: FixRow[] = [
  {
    slug: 'influencer-abby-berner',
    imagePath: '/influncer/usa/abby_berner.png',
    alt: 'Abby Berner US fitness creator portrait',
    name: 'Abby Berner',
  },
  {
    slug: 'influencer-lean-beef-patty',
    imagePath: '/influncer/usa/lean_beef_patty.png',
    alt: 'Lean Beef Patty (Victoria Waldrip) US bodybuilding creator',
    name: 'Lean Beef Patty',
  },
  {
    slug: 'influencer-bufalika',
    imagePath: '/influncer/of/bufalika.png',
    alt: 'Bufalika lifestyle creator and model',
    name: 'Bufalika',
  },
  {
    slug: 'influencer-mika-lafuente',
    imagePath: '/influncer/mika.PNG',
    alt: 'Mika Lafuente Argentine-American model and lifestyle creator',
    name: 'Mika Lafuente',
  },
  {
    slug: 'influencer-colleen-sheehan',
    imagePath: '/influncer/usa/collen333.png',
    alt: 'Colleen Sheehan (colleen.333) Boston-based model',
    name: 'Colleen Sheehan',
  },
  {
    slug: 'influencer-miranda-marie',
    imagePath: '/influncer/usa/mirandamarie.png',
    alt: 'Miranda Marie (itsmirandahmarie) Florida creator',
    name: 'Miranda Marie',
  },
  {
    slug: 'influencer-megan-marie',
    imagePath: '/influncer/usa/meganmarie.png',
    alt: 'Megan Marie McCarthy (meganmariiee) US content creator',
    name: 'Megan Marie',
  },
  {
    slug: 'influencer-leah-davies',
    imagePath: '/influncer/uk/leahdavies.png',
    alt: 'Leah Davies (lleahdavies) UK house DJ',
    name: 'Leah Davies',
  },
];

async function fixOne(fix: FixRow): Promise<boolean> {
  const fullImageUrl = `${SITE}${fix.imagePath}`;
  const update = {
    hero_image_src:               fix.imagePath,
    hero_image_alt:               fix.alt,
    sidebar_infobox_image_src:    fix.imagePath,
    sidebar_infobox_image_alt:    fix.alt,
    schema_image_url:             fullImageUrl,
    schema_author:                AUTHOR,
    schema_author_url:            AUTHOR_URL,
    sidebar_meta_author:          AUTHOR,
    schema_modified_time:         new Date().toISOString(),
    sidebar_meta_updated_date:    'April 27, 2026',
  };

  const { data, error } = await supabase
    .from('creator_articles')
    .update(update)
    .eq('slug', fix.slug)
    .select('slug')
    .single();

  if (error) {
    console.error(`  ❌ ${fix.slug}: ${error.message}`);
    return false;
  }
  if (!data) {
    console.error(`  ⚠️  ${fix.slug}: no row found`);
    return false;
  }
  console.log(`  ✅ ${fix.slug} → ${fix.imagePath}`);
  return true;
}

async function main() {
  console.log(`🔧  Fixing ${FIXES.length} creator articles…`);
  console.log(`    Author → ${AUTHOR} (${AUTHOR_URL})\n`);

  let ok = 0;
  for (const fix of FIXES) {
    const success = await fixOne(fix);
    if (success) ok++;
  }

  console.log(`\n✨  Done. ${ok}/${FIXES.length} updated.`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
