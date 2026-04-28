/**
 * add-faq-column.ts
 * Adds the faq_items JSONB column to the articles table.
 * Run: npx tsx scripts/add-faq-column.ts
 */
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;

async function main() {
  // Try the Supabase SQL REST endpoint (available in newer Supabase instances)
  const sqlEndpoint = `${url}/rest/v1/sql`;
  const res = await fetch(sqlEndpoint, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: "ALTER TABLE articles ADD COLUMN IF NOT EXISTS faq_items JSONB NOT NULL DEFAULT '[]'::jsonb",
    }),
  });

  if (res.ok) {
    console.log('✅ faq_items column added via SQL REST API');
    return;
  }

  const body = await res.text();
  console.log(`SQL REST API (${res.status}): ${body}`);

  // Fallback: try the Supabase management API
  // Extract project ref from URL: https://{ref}.supabase.co
  const ref = url.replace('https://', '').replace('.supabase.co', '');
  const mgmtRes = await fetch(`https://api.supabase.com/v1/projects/${ref}/database/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: "ALTER TABLE articles ADD COLUMN IF NOT EXISTS faq_items JSONB NOT NULL DEFAULT '[]'::jsonb",
    }),
  });

  if (mgmtRes.ok) {
    console.log('✅ faq_items column added via management API');
    return;
  }

  console.log(`Management API (${mgmtRes.status}): ${await mgmtRes.text()}`);
  console.log('\n⚠️  Could not auto-apply migration. Run this SQL in the Supabase dashboard:');
  console.log("  ALTER TABLE articles ADD COLUMN IF NOT EXISTS faq_items JSONB NOT NULL DEFAULT '[]'::jsonb;");
}

main().catch(console.error);
