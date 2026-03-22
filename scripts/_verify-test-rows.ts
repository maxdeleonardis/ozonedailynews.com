/**
 * Verifies all 3 test rows are present across the three article tables.
 * Run: npx tsx --env-file=.env.local scripts/_verify-test-rows.ts
 */
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function checkRow(table: string, slug: string, fields: string) {
  const { data, error } = await sb.from(table).select(fields).eq('slug', slug).single();
  if (error) {
    console.error(`✗ ${table}/${slug} — ${error.message}`);
    return false;
  }
  console.log(`✓ ${table}/${slug}`);
  console.log('  ', JSON.stringify(data).slice(0, 160));
  return true;
}

async function main() {
  let ok = true;
  ok = await checkRow('articles',      'newsarticle-test', 'slug,title,breaking') && ok;
  ok = await checkRow('jack_articles', 'jackarticle-test', 'slug,title,layout')   && ok;
  ok = await checkRow('article_pages', 'articlepage-test', 'slug,title,category,url') && ok;
  console.log('');
  console.log(ok ? '✓ All 3 rows verified' : '✗ One or more rows missing');
  process.exit(ok ? 0 : 1);
}

main().catch(e => { console.error(e); process.exit(1); });
