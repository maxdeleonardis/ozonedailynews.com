import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
import { createClient } from '@supabase/supabase-js';

async function main() {
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const { data } = await sb
    .from('articles')
    .select('content_html, publish_date, author_name, category, tags, read_time')
    .eq('slug', 'news-vast-freshwater-reservoir-found-beneath-great-salt-lake-2026')
    .maybeSingle();
  console.log('publish_date:', data?.publish_date);
  console.log('author_name:', data?.author_name);
  console.log('category:', data?.category);
  console.log('tags:', data?.tags);
  console.log('read_time:', data?.read_time);
  console.log('content_html (first 500):', data?.content_html?.slice(0, 500));
}
main().catch(console.error);
