import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function main() {
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

  // Get 10 most recent articles by published_at
  const { data, error } = await sb
    .from('articles')
    .select('slug, title, thumbnail_src, published_at')
    .order('published_at', { ascending: false })
    .limit(10);

  if (error) { console.error(error); process.exit(1); }

  console.log('\n=== 10 Most Recent Articles ===\n');
  data?.forEach((r: { slug: string; title: string; thumbnail_src: string; published_at: string }) => {
    const hasThumbnail = r.thumbnail_src && r.thumbnail_src.trim() !== '';
    console.log(`${hasThumbnail ? '✅' : '❌'} ${r.slug}`);
    console.log(`   title: ${r.title}`);
    console.log(`   thumb: ${r.thumbnail_src || '(none)'}`);
    console.log(`   date:  ${r.published_at}`);
    console.log('');
  });
}
main().catch(console.error);
