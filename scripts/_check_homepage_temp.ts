import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) { console.log('Missing env vars'); process.exit(1); }

const sb = createClient(url, key);

async function main() {
  // Latest published articles
  const { data, error } = await sb
    .from('articles')
    .select('slug, title, published_at, category, author_name, image_url, breaking, featured')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(20);

  if (error) { console.error(error); process.exit(1); }

  console.log('=== LATEST 20 PUBLISHED ARTICLES (Supabase) ===\n');
  for (const r of data!) {
    const img = r.image_url ? 'IMG' : '   ';
    const brk = r.breaking ? 'BRK' : '   ';
    const feat = r.featured ? 'FT' : '  ';
    const date = (r.published_at || '??').slice(0, 10);
    const cat = (r.category || '').padEnd(16);
    const title = (r.title || '').slice(0, 65);
    console.log(`${img} ${brk} ${feat} ${date}  ${cat}  ${title}`);
  }

  // Count total
  const { count } = await sb
    .from('articles')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'published');
  console.log(`\nTotal published articles: ${count}`);

  // Check for the production articles that appear on live homepage
  console.log('\n=== CHECKING SPECIFIC PRODUCTION HOMEPAGE ARTICLES ===\n');
  const checkSlugs = [
    'nvidia',
    'eden-gross',
    'mika-lafuente',
    'queenkalin',
  ];
  for (const partial of checkSlugs) {
    const { data: matches } = await sb
      .from('articles')
      .select('slug, title, published_at, image_url')
      .eq('status', 'published')
      .ilike('slug', `%${partial}%`)
      .limit(3);
    if (matches && matches.length > 0) {
      for (const m of matches) {
        console.log(`  FOUND: ${m.slug}  (${m.published_at?.slice(0,10)})  img: ${m.image_url ? 'YES' : 'NO'}`);
      }
    } else {
      console.log(`  MISSING: no article matching *${partial}*`);
    }
  }
}

main();
