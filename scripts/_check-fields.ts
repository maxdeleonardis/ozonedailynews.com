import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(url, key);

async function main() {
  const { data, error } = await supabase
    .from('articles')
    .select('slug, title, subtitle, category, topic_tag, publish_date, published_at, author_name, author_slug, read_time, thumbnail_src, hero_image_src, tags, url')
    .eq('slug', 'microsoft-news-nadella-copilot-code-red-ai-gap-e7-suite')
    .single();

  if (error) { console.error(error.message); return; }
  console.log(JSON.stringify(data, null, 2));
}
main();
