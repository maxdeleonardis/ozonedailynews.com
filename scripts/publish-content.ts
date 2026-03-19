/**
 * publish-content.ts
 *
 * Reads every article file in content/articles/ and upserts it to Supabase.
 *
 * Usage:
 *   npm run content:publish              — publish all articles
 *   npm run content:publish -- --dry-run — preview without writing
 *   npm run content:publish -- --file crypto/my-article   — single file
 *   npm run content:publish -- --status published         — only published ones
 */

import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const CONTENT_DIR = path.resolve(process.cwd(), 'content', 'articles');

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ── CLI flags ─────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const fileFlag = (() => {
  const i = args.indexOf('--file');
  return i !== -1 ? args[i + 1] : null;
})();
const statusFilter = (() => {
  const i = args.indexOf('--status');
  return i !== -1 ? args[i + 1] : null; // 'published' | 'draft' | null
})();

// ── Discover files ────────────────────────────────────────────────────────────
function findArticleFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findArticleFiles(full));
    } else if (
      entry.isFile() &&
      entry.name.endsWith('.ts') &&
      !entry.name.startsWith('_')        // skip _template.ts etc.
    ) {
      results.push(full);
    }
  }
  return results;
}

// ── Map Article → Supabase row ────────────────────────────────────────────────
function toRow(article: any): Record<string, any> {
  return {
    title:          article.title,
    slug:           article.slug,
    subtitle:       article.subtitle ?? null,
    excerpt:        article.excerpt ?? null,
    content:        article.content ?? [],
    status:         article.status ?? 'draft',
    category:       article.category ?? null,
    category_color: article.category_color ?? null,
    topic_tag:      article.topic_tag ?? null,
    tags:           article.tags ?? [],
    read_time:      article.read_time ?? null,
    author_name:    article.author_name ?? null,
    author_role:    article.author_role ?? null,
    author_avatar:  article.author_avatar ?? null,
    author_twitter: article.author_twitter ?? null,
    author_slug:    article.author_slug ?? null,
    author_bio:     article.author_bio ?? null,
    image_url:      article.image_url ?? null,
    image_alt:      article.image_alt ?? null,
    image_caption:  article.image_caption ?? null,
    image_credit:   article.image_credit ?? null,
    thumbnail_url:  article.thumbnail_url ?? null,
    featured:       article.featured ?? false,
    trending:       article.trending ?? false,
    breaking:       article.breaking ?? false,
    exclusive:      article.exclusive ?? false,
    published_at:   article.published_at ?? null,
  };
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  let files: string[];

  if (fileFlag) {
    // --file crypto/my-article  OR  --file crypto/my-article.ts
    const target = fileFlag.endsWith('.ts') ? fileFlag : `${fileFlag}.ts`;
    const full = path.resolve(CONTENT_DIR, target);
    if (!fs.existsSync(full)) {
      console.error(`❌  File not found: ${full}`);
      process.exit(1);
    }
    files = [full];
  } else {
    files = findArticleFiles(CONTENT_DIR);
  }

  if (files.length === 0) {
    console.log('⚠️  No article files found in content/articles/');
    return;
  }

  const modeLabel = isDryRun ? '[DRY RUN] ' : '';
  console.log(`\n${modeLabel}Found ${files.length} article file(s)\n`);

  let published = 0;
  let skipped = 0;
  let failed = 0;

  for (const filePath of files) {
    const relPath = path.relative(CONTENT_DIR, filePath);

    let article: any;
    try {
      // tsx handles dynamic import of TypeScript files
      const mod = await import(pathToFileURL(filePath).href);
      article = mod.default;
    } catch (err: any) {
      console.error(`  ❌  ${relPath} — import error: ${err.message}`);
      failed++;
      continue;
    }

    if (!article || !article.slug || !article.title) {
      console.error(`  ❌  ${relPath} — missing required fields (title, slug)`);
      failed++;
      continue;
    }

    // Apply --status filter
    if (statusFilter && article.status !== statusFilter) {
      console.log(`  ⏭   ${relPath} — skipped (status is '${article.status}', filter is '${statusFilter}')`);
      skipped++;
      continue;
    }

    const row = toRow(article);

    if (isDryRun) {
      console.log(`  ✓  ${relPath}`);
      console.log(`     slug: ${row.slug} | status: ${row.status} | category: ${row.category}`);
      published++;
      continue;
    }

    const { error } = await supabase
      .from('articles')
      .upsert(row, { onConflict: 'slug' });

    if (error) {
      console.error(`  ❌  ${relPath} — ${error.message}`);
      failed++;
    } else {
      console.log(`  ✓  ${relPath} → ${row.slug} (${row.status})`);
      published++;
    }
  }

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`${modeLabel}Done — ${published} upserted, ${skipped} skipped, ${failed} failed`);

  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
