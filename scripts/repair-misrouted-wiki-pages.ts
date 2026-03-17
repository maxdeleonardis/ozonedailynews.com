/**
 * repair-misrouted-wiki-pages.ts
 *
 * One-time repair script.
 *
 * Before the 3-table routing was fixed, some raw-JSX/wiki-grid pages were
 * accidentally written to `articles` instead of `wiki_articles`.  Those pages
 * are already trimmed (no source content left) so we can't re-run the
 * migration script on them.  This script copies those records from `articles`
 * into `wiki_articles` so the `<WikiArticle>` component can find them.
 *
 * Safe to run multiple times (upsert on slug).
 *
 * Usage:
 *   npx tsx scripts/repair-misrouted-wiki-pages.ts
 *   npx tsx scripts/repair-misrouted-wiki-pages.ts --dry-run
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Missing Supabase env vars in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const isDryRun = process.argv.includes('--dry-run');

// Slugs of pages that were written to `articles` but belong in `wiki_articles`
// (raw-JSX / wiki-grid pages trimmed to <WikiArticle> in earlier sessions)
const MISROUTED_SLUGS = [
  'bio-hacking',
  'events-gdc-2026',
  'microsoft',
  'microsoft-xbox',
  'rocket-league',
  'video-games-rainbow-6-siege',
  'events-gtc-2026',
  'video-games-mythmatch',
];

async function main() {
  console.log(`\n${isDryRun ? '[DRY RUN] ' : ''}Repairing ${MISROUTED_SLUGS.length} misrouted wiki pages\n`);

  let ok = 0, notFound = 0, failed = 0;

  for (const slug of MISROUTED_SLUGS) {
    // Fetch from the wrong table
    const { data, error: fetchErr } = await supabase
      .from('articles')
      .select('slug, title, subtitle, category, author_name, published_at, content, content_html')
      .eq('slug', slug)
      .single();

    if (fetchErr || !data) {
      console.warn(`  ⚠️  ${slug} — not found in articles (may already be fixed or never migrated)`);
      notFound++;
      continue;
    }

    if (isDryRun) {
      console.log(`  ✓  ${slug} — would copy to wiki_articles (title: "${data.title}")`);
      ok++;
      continue;
    }

    // Copy to the correct table
    const { error: upsertErr } = await supabase
      .from('wiki_articles')
      .upsert({
        slug: data.slug,
        title: data.title,
        subtitle: data.subtitle || undefined,
        category: data.category || undefined,
        author_name: data.author_name || undefined,
        published_at: data.published_at || undefined,
        // prefer the JSON content block; fall back to building one from content_html
        content: data.content ?? (data.content_html
          ? [{ id: 'html-body', type: 'html', content: data.content_html }]
          : undefined),
      }, { onConflict: 'slug' });

    if (upsertErr) {
      console.error(`  ❌  ${slug} — ${upsertErr.message}`);
      failed++;
      continue;
    }

    console.log(`  ✓  ${slug} → wiki_articles`);
    ok++;
  }

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`Done — ${ok} copied, ${notFound} not found in articles, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
