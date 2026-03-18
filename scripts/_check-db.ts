import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
const slugs = [
  'entertainment-apple-tv-spring-2026-premiere-schedule-imperfect-women-for-all-mankind-outcome-margos-got-money-troubles',
  'elon-musk-news-tesla-terafab-chip-fabrication-launch-march-21-2026',
  'entertainment-news-conan-obrien-hosting-98th-oscars-abc-hulu',
  'entertainment-news-marty-supreme-enters-oscar-weekend-nine-nominations-low-odds',
  'trump-news-trump-administration-10-billion-fee-tiktok-deal',
];

console.log('\nChecking NewsArticle pages in `articles` table:\n');
for (const slug of slugs) {
  const { data, error } = await sb
    .from('articles')
    .select('slug, title, status')
    .eq('slug', slug)
    .single();

  if (data) {
    console.log(`  ✓  ${slug}\n     title: "${data.title}" | status: ${data.status}`);
  } else {
    console.log(`  ❌  ${slug} — NOT FOUND (${error?.message})`);
  }
}

console.log('\nChecking wiki hub pages in `wiki_articles` table:\n');
const wikiSlugs = ['bio-hacking', 'events-gdc-2026', 'microsoft', 'events-gtc-2026', 'video-games-mythmatch'];
for (const slug of wikiSlugs) {
  const { data, error } = await sb
    .from('wiki_articles')
    .select('slug, title')
    .eq('slug', slug)
    .single();
  if (data) {
    console.log(`  ✓  ${slug} | "${data.title}"`);
  } else {
    console.log(`  ❌  ${slug} — NOT FOUND (${error?.message})`);
  }
}
}
main().catch(console.error);
