/**
 * Tests both anon and service-role reads against article_pages.
 * Run: npx tsx --env-file=.env.local scripts/_test-rls.ts
 */
import { createClient } from '@supabase/supabase-js';

const URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const SVC  = process.env.SUPABASE_SERVICE_ROLE_KEY!;

async function test(label: string, key: string) {
  const sb = createClient(URL, key);
  const { data, error } = await sb
    .from('article_pages')
    .select('slug, title')
    .eq('slug', 'articlepage-test')
    .single();
  if (error) {
    console.error(`✗ [${label}] ${error.message}`);
  } else {
    console.log(`✓ [${label}] title: "${data?.title}"`);
  }
}

async function main() {
  console.log('Target:', URL);
  await test('anon key    ', ANON);
  await test('service role', SVC);
}

main().catch(e => { console.error(e); process.exit(1); });
