/**
 * add-meta-columns.ts
 *
 * Adds meta_title and meta_description columns to articles, jack_articles,
 * and article_pages tables. Safe to run multiple times (IF NOT EXISTS).
 *
 * Usage: npx tsx scripts/add-meta-columns.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(url, key);

async function run() {
  const tables = ['articles', 'jack_articles', 'article_pages'];

  for (const table of tables) {
    // Try to add meta_title
    const { error: e1 } = await supabase.rpc('exec_sql', {
      query: `ALTER TABLE ${table} ADD COLUMN IF NOT EXISTS meta_title text;`,
    });

    // Try to add meta_description
    const { error: e2 } = await supabase.rpc('exec_sql', {
      query: `ALTER TABLE ${table} ADD COLUMN IF NOT EXISTS meta_description text;`,
    });

    if (e1 || e2) {
      console.log(`⚠️  RPC exec_sql not available for ${table}. Run this SQL in the Supabase dashboard:`);
      console.log(`   ALTER TABLE ${table} ADD COLUMN IF NOT EXISTS meta_title text, ADD COLUMN IF NOT EXISTS meta_description text;`);
    } else {
      console.log(`✅ ${table}: meta_title + meta_description columns added`);
    }
  }
}

run().catch(console.error);
