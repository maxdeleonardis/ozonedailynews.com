/**
 * sync-wiki-content.ts
 *
 * Full bidirectional sync: Supabase ↔ codebase.
 *
 *   1. Migrate (upsert) every article page.tsx → Supabase.
 *   2. Publish (upsert) every content/articles/*.ts → Supabase.
 *   3. Query ALL slugs currently in Supabase.
 *   4. Delete any slug that no longer has a matching source file.
 *
 * Result: Supabase is an exact mirror of the codebase.
 *
 * Usage:
 *   npm run wiki:sync              — full sync (upsert + delete orphans)
 *   npm run wiki:sync -- --dry-run — preview only, no writes
 */

import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { spawnSync } from 'child_process';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const APP_DIR      = path.resolve(process.cwd(), 'app');
const CONTENT_DIR  = path.resolve(process.cwd(), 'content', 'articles');

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Missing Supabase env vars in .env.local');
  process.exit(1);
}

const supabase  = createClient(SUPABASE_URL, SUPABASE_KEY);
const isDryRun  = process.argv.includes('--dry-run');
const modeLabel = isDryRun ? '[DRY RUN] ' : '';

// System directories that are never content pages
const SYSTEM_DIRS_SYNC = new Set([
  'node_modules', '.next', '(admin)', 'api', 'feeds', 'rss.xml',
  'news-sitemap.xml', 'saved', 'history', 'search',
]);

// ── 1. Collect expected slugs from page.tsx files ─────────────────────────────
// Covers BOTH:
//   (a) pages not yet migrated  → have export const metadata
//   (b) already-trimmed pages   → now just `<WikiArticle slug="..." />`
function findPageFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SYSTEM_DIRS_SYNC.has(entry.name)) continue;
      results.push(...findPageFiles(full));
    } else if (entry.name === 'page.tsx') {
      if (path.dirname(full) === APP_DIR) continue; // skip root home
      const src = fs.readFileSync(full, 'utf-8');
      if (/^['"](use client)['"]/.test(src.trimStart())) continue;
      // Skip hub/listing pages that dynamically aggregate content (not Supabase-backed)
      const HUB_PATTERNS = ['scanAllContent', 'NewsLibrary', '<Hub ', 'getLatestArticles', 'getAllArticles'];
      if (HUB_PATTERNS.some(p => src.includes(p))) continue;
      if (src.includes('WikiArticle') || src.includes('export const metadata')) {
        results.push(full);
      }
    }
  }
  return results;
}

function slugFromPagePath(filePath: string): string {
  const rel = path.relative(APP_DIR, path.dirname(filePath));
  return rel.replace(/\\/g, '/').replace(/\//g, '-');
}

// ── 2. Collect expected slugs from content/articles/**/*.ts ──────────────────
async function collectContentSlugs(): Promise<Set<string>> {
  const slugs = new Set<string>();
  if (!fs.existsSync(CONTENT_DIR)) return slugs;

  function walk(dir: string): string[] {
    const out: string[] = [];
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) out.push(...walk(full));
      else if (e.isFile() && e.name.endsWith('.ts') && !e.name.startsWith('_')) out.push(full);
    }
    return out;
  }

  const files = walk(CONTENT_DIR);
  for (const f of files) {
    try {
      const mod = await import(pathToFileURL(f).href);
      const article = mod.default ?? mod.article ?? Object.values(mod)[0];
      if (article?.slug) slugs.add(String(article.slug));
    } catch {
      // ignore parse errors — slug unknown, won't be deleted
    }
  }
  return slugs;
}

// ── 3. Run wiki:migrate and content:publish ───────────────────────────────────
function runScript(script: string, extraArgs: string[] = []) {
  console.log(`\n${'─'.repeat(70)}`);
  console.log(`▶  Running ${script}${isDryRun ? ' --dry-run' : ''}\n`);
  const args = ['tsx', script, ...(isDryRun ? ['--dry-run'] : []), ...extraArgs];
  const res = spawnSync('npx', args, {
    stdio: 'inherit',
    env:   process.env,
    shell: true,
  });
  if (res.status !== 0) {
    console.error(`\n❌  ${script} exited with code ${res.status}`);
    process.exit(res.status ?? 1);
  }
}

// ── 4. Main ───────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n${'═'.repeat(70)}`);
  console.log(`  ${modeLabel}wiki:sync — full codebase ↔ Supabase sync`);
  console.log(`${'═'.repeat(70)}\n`);

  // ── Step A: Upsert all pages ──────────────────────────────────────────────
  runScript('scripts/migrate-wiki-content.ts');

  // ── Step B: Upsert all content/articles ──────────────────────────────────
  if (fs.existsSync(CONTENT_DIR)) {
    runScript('scripts/publish-content.ts');
  }

  // ── Step C: Collect all known slugs ──────────────────────────────────────
  const pageFiles   = findPageFiles(APP_DIR);
  const pageSlugs   = new Set(pageFiles.map(slugFromPagePath));
  const contentSlugs = await collectContentSlugs();
  const knownSlugs  = new Set([...pageSlugs, ...contentSlugs]);

  console.log(`\n${'─'.repeat(70)}`);
  console.log(`▶  Orphan cleanup`);
  console.log(`   Known page slugs    : ${pageSlugs.size}`);
  console.log(`   Known content slugs : ${contentSlugs.size}`);
  console.log(`   Total known         : ${knownSlugs.size}\n`);

  // ── Step D: Fetch all slugs currently in Supabase ────────────────────────
  const { data: rows, error } = await supabase
    .from('articles')
    .select('slug');

  if (error) {
    console.error('❌  Failed to query Supabase slugs:', error.message);
    process.exit(1);
  }

  const supabaseSlugs = (rows ?? []).map((r: { slug: string }) => r.slug);
  const orphans       = supabaseSlugs.filter((s: string) => !knownSlugs.has(s));

  if (orphans.length === 0) {
    console.log('   ✅  No orphaned records found — Supabase is up to date.\n');
  } else {
    console.log(`   Found ${orphans.length} orphaned slug(s):\n`);
    for (const slug of orphans) {
      console.log(`     🗑  ${slug}`);
    }
    console.log('');

    if (isDryRun) {
      console.log(`   [DRY RUN] Would delete ${orphans.length} record(s). Re-run without --dry-run to apply.`);
    } else {
      let deleted = 0;
      for (const slug of orphans) {
        const { error: delErr } = await supabase
          .from('articles')
          .delete()
          .eq('slug', slug);
        if (delErr) {
          console.error(`   ❌  Failed to delete "${slug}": ${delErr.message}`);
        } else {
          console.log(`   🗑  Deleted: ${slug}`);
          deleted++;
        }
      }
      console.log(`\n   Deleted ${deleted}/${orphans.length} orphaned record(s).`);
    }
  }

  console.log(`\n${'═'.repeat(70)}`);
  console.log(`  ${modeLabel}Sync complete.`);
  console.log(`${'═'.repeat(70)}\n`);
}

main().catch(err => {
  console.error('❌  Sync failed:', err);
  process.exit(1);
});
