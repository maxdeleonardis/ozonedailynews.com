import { createClient } from '@supabase/supabase-js';

async function main() {
  const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const { data, error } = await s
    .from('articles')
    .select('slug,title,category,topic_tag,thumbnail_src,thumbnail_alt,hero_image_src,trending,tags,url,status,published_at')
    .eq('slug', 'video-games-mha-ultra-rumble-season-16-cluster-bakugo-shop')
    .single();
  console.log('error:', error);
  console.log(JSON.stringify(data, null, 2));
}
main();
