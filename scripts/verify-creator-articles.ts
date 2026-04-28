/**
 * verify-creator-articles.ts
 * Checks all 8 recent creator articles for status, image, author, content length.
 */

import { createClient } from '@supabase/supabase-js';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const SLUGS = [
  'influencer-abby-berner',
  'influencer-lean-beef-patty',
  'influencer-bufalika',
  'influencer-mika-lafuente',
  'influencer-colleen-sheehan',
  'influencer-miranda-marie',
  'influencer-megan-marie',
  'influencer-leah-davies',
];

async function main() {
  const { data, error } = await supabase
    .from('creator_articles')
    .select('slug, status, hero_image_src, sidebar_meta_author, schema_author_url, schema_keywords, content_html')
    .in('slug', SLUGS);

  if (error) { console.error(error); process.exit(1); }

  console.log('Slug                                 | Status     | Author        | Img | KW | HTML');
  console.log('-------------------------------------|------------|---------------|-----|----|-------');
  for (const s of SLUGS) {
    const r = data?.find(d => d.slug === s);
    if (!r) { console.log(`${s.padEnd(37)} | NOT FOUND`); continue; }
    console.log(
      `${s.padEnd(37)} | ${(r.status ?? '?').padEnd(10)} | ${(r.sidebar_meta_author ?? '?').padEnd(13)} | ${r.hero_image_src ? 'Y' : 'N'}   | ${(r.schema_keywords?.length ?? 0).toString().padStart(2)} | ${r.content_html?.length ?? 0}`,
    );
  }
}

main();
