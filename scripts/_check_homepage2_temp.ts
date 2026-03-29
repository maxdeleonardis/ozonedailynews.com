import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const sb = createClient(url, key);

async function main() {
  // Check creator_articles table
  const { data: creators, error } = await sb
    .from('creator_articles')
    .select('slug, title, published_at, category, author_name, hero_image_url')
    .order('published_at', { ascending: false })
    .limit(15);

  if (error) {
    console.error('creator_articles error:', error.message);
  } else {
    console.log('=== CREATOR ARTICLES (latest 15) ===\n');
    for (const r of creators!) {
      const img = r.hero_image_url ? 'IMG' : '   ';
      const date = (r.published_at || '??').slice(0, 10);
      console.log(`${img}  ${date}  ${(r.category || '').padEnd(16)}  ${(r.title || '').slice(0, 65)}`);
    }
    console.log(`\nTotal creator articles shown: ${creators!.length}`);
  }

  // Check the homepage merge logic — what does getAllBlogPosts return?
  // It only queries 'articles' table, not creator_articles
  // So creator articles NEVER appear on the homepage through Supabase

  // Check content_registry for these slugs
  console.log('\n=== CHECKING CONTENT REGISTRY ===');
  const { data: regEntries } = await sb
    .from('content_registry')
    .select('slug, title, image_url')
    .or('slug.ilike.%eden-gross%,slug.ilike.%mika-lafuente%,slug.ilike.%queenkalin%,slug.ilike.%nvidia-engineer%')
    .limit(10);

  if (regEntries && regEntries.length > 0) {
    for (const r of regEntries) {
      console.log(`  ${r.slug}  img: ${r.image_url ? 'YES' : 'NO'}`);
    }
  } else {
    console.log('  No matches in content_registry');
  }

  // Count articles with NULL published_at
  const { count: nullDates } = await sb
    .from('articles')
    .select('id', { count: 'exact', head: true })
    .is('published_at', null);
  console.log(`\nArticles with NULL published_at: ${nullDates}`);

  // Articles with no image_url
  const { count: noImage } = await sb
    .from('articles')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'published')
    .is('image_url', null);
  const { count: totalPub } = await sb
    .from('articles')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'published');
  console.log(`Published articles without image_url: ${noImage}/${totalPub}`);
}

main();
