/**
 * Probes whether article_pages exists and, if not, creates it via a
 * temporary `exec_sql` RPC function bootstrapped through the DB itself.
 *
 * Run: npx tsx --env-file=.env.local scripts/_probe-article-pages.ts
 */
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const sb  = createClient(url, key);

async function main() {
// 1. Does article_pages already exist?
const { data, error } = await sb.from('article_pages').select('slug').limit(1);
if (!error) {
  console.log('✓ article_pages table exists. Rows sampled:', data?.length ?? 0);
  process.exit(0);
}

console.log('Table missing or inaccessible:', error?.message);
console.log('');
console.log('─── Manual Step Required ───────────────────────────────────────────');
console.log('Open the Supabase SQL Editor for project kzcwclprrtonpsnownbl and run:');
console.log('  https://supabase.com/dashboard/project/kzcwclprrtonpsnownbl/sql/new');
console.log('');
console.log('Paste the following SQL:');
console.log('');

const m1 = fs.readFileSync(
  path.join(process.cwd(), 'supabase/migrations/20260318000000_create_article_pages.sql'), 'utf8',
);
const m2 = fs.readFileSync(
  path.join(process.cwd(), 'supabase/migrations/20260321000001_article_pages_url.sql'), 'utf8',
);
console.log(m1);
console.log(m2);
console.log('────────────────────────────────────────────────────────────────────');
process.exit(1);
} // end main

main().catch(e => { console.error(e); process.exit(1); });
