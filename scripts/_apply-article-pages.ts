/**
 * One-time script: creates the article_pages table (+ url column) on the remote DB
 * by calling Supabase's internal pg-meta API with the service_role key.
 * Run: npx tsx scripts/_apply-article-pages.ts
 */
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';

const SUPABASE_URL   = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SERVICE_KEY    = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

async function runSQL(sql: string, label: string) {
  // Try the pg-meta /query endpoint
  const pgMetaUrl = SUPABASE_URL.replace(/\/$/, '') + '/pg-meta/v1/query';
  const res = await fetch(pgMetaUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'apikey': SERVICE_KEY,
    },
    body: JSON.stringify({ query: sql }),
  });
  const text = await res.text();
  if (res.ok) {
    console.log(`✓ ${label} (status ${res.status})`);
  } else {
    console.error(`✗ ${label} — HTTP ${res.status}: ${text}`);
    throw new Error(`${label} failed`);
  }
}

// Read the two migration files
const m1 = fs.readFileSync(
  path.join(process.cwd(), 'supabase/migrations/20260318000000_create_article_pages.sql'),
  'utf8',
);
const m2 = fs.readFileSync(
  path.join(process.cwd(), 'supabase/migrations/20260321000001_article_pages_url.sql'),
  'utf8',
);

(async () => {
  console.log(`Target: ${SUPABASE_URL}`);
  try {
    await runSQL(m1, '20260318000000_create_article_pages');
    await runSQL(m2, '20260321000001_article_pages_url');
    console.log('\nDone ✓');
  } catch {
    process.exit(1);
  }
})();
