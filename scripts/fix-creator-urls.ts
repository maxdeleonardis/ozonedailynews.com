/**
 * fix-creator-urls.ts
 * Sets schema_article_url to the correct /influencer/[name] path for all 8 creator articles.
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

// slug → correct canonical URL (slash-separated path)
const URL_MAP: Record<string, string> = {
  'influencer-abby-berner':      'https://www.ozonenetwork.news/influencer/abby-berner',
  'influencer-lean-beef-patty':  'https://www.ozonenetwork.news/influencer/lean-beef-patty',
  'influencer-bufalika':         'https://www.ozonenetwork.news/influencer/bufalika',
  'influencer-mika-lafuente':    'https://www.ozonenetwork.news/influencer/mika-lafuente',
  'influencer-colleen-sheehan':  'https://www.ozonenetwork.news/influencer/colleen-sheehan',
  'influencer-miranda-marie':    'https://www.ozonenetwork.news/influencer/miranda-marie',
  'influencer-megan-marie':      'https://www.ozonenetwork.news/influencer/megan-marie',
  'influencer-leah-davies':      'https://www.ozonenetwork.news/influencer/leah-davies',
};

async function main() {
  console.log('Fixing schema_article_url for 8 creator articles...\n');
  let ok = 0;
  for (const [slug, url] of Object.entries(URL_MAP)) {
    const { error } = await sb.from('creator_articles').update({ schema_article_url: url }).eq('slug', slug);
    if (error) {
      console.error(`  ❌ ${slug}: ${error.message}`);
    } else {
      console.log(`  ✅ ${slug.padEnd(36)} → ${url}`);
      ok++;
    }
  }
  console.log(`\n${ok}/${Object.keys(URL_MAP).length} updated.`);
}
main();
