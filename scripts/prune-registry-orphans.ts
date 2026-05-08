/**
 * prune-registry-orphans.ts
 *
 * Deletes rows from the Supabase `content_registry` table that are NOT in
 * the local content/static/content_registry.json (source of truth).
 *
 * Usage:
 *   npx tsx --env-file=.env.local scripts/prune-registry-orphans.ts --dry-run
 *   npx tsx --env-file=.env.local scripts/prune-registry-orphans.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const DRY_RUN = process.argv.includes('--dry-run');

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const LOCAL_REGISTRY = path.resolve(process.cwd(), 'content', 'static', 'content_registry.json');

async function main() {
  // Load local registry slugs (source of truth)
  if (!fs.existsSync(LOCAL_REGISTRY)) {
    console.error(`❌ Local registry not found at ${LOCAL_REGISTRY}`);
    process.exit(1);
  }

  const local = JSON.parse(fs.readFileSync(LOCAL_REGISTRY, 'utf8')) as Array<{ slug: string }>;
  const localSlugs = new Set(local.map(r => r.slug));
  console.log(`📋 Local registry: ${localSlugs.size} entries`);

  // Fetch all slugs from Supabase (paginate to get all 842+)
  const allRemote: string[] = [];
  let from = 0;
  const PAGE = 1000;

  while (true) {
    const { data, error } = await sb
      .from('content_registry')
      .select('slug')
      .range(from, from + PAGE - 1);

    if (error) { console.error('Supabase error:', error.message); process.exit(1); }
    if (!data || data.length === 0) break;

    allRemote.push(...data.map((r: { slug: string }) => r.slug));
    if (data.length < PAGE) break;
    from += PAGE;
  }

  console.log(`🗄️  Supabase registry: ${allRemote.length} entries`);

  const orphans = allRemote.filter(slug => !localSlugs.has(slug));
  console.log(`🗑️  Orphans to delete: ${orphans.length}\n`);

  if (orphans.length === 0) {
    console.log('✅ No orphans found. Registry is clean.');
    return;
  }

  if (DRY_RUN) {
    console.log('--- DRY RUN (first 30) ---');
    orphans.slice(0, 30).forEach(s => console.log(`  ${s}`));
    if (orphans.length > 30) console.log(`  … and ${orphans.length - 30} more`);
    console.log('\nRe-run without --dry-run to delete.');
    return;
  }

  // Delete in batches of 100
  const BATCH = 100;
  let deleted = 0;
  let failed = 0;

  for (let i = 0; i < orphans.length; i += BATCH) {
    const batch = orphans.slice(i, i + BATCH);
    const { error } = await sb
      .from('content_registry')
      .delete()
      .in('slug', batch);

    if (error) {
      console.error(`  ❌ Batch ${i / BATCH + 1} failed: ${error.message}`);
      failed += batch.length;
    } else {
      deleted += batch.length;
      console.log(`  ✅ Deleted batch ${Math.floor(i / BATCH) + 1} (${deleted}/${orphans.length})`);
    }
  }

  console.log(`\n=== DONE ===`);
  console.log(`Deleted: ${deleted}`);
  if (failed > 0) console.log(`Failed:  ${failed}`);
}

main().catch(console.error);
