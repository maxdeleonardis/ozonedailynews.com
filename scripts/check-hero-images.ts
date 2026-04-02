import { createClient } from '@supabase/supabase-js';
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
(async () => {
  const { data } = await sb.from('creator_articles').select('slug,hero_image_src').eq('status','published');
  (data || []).forEach((r: any) => console.log((r.hero_image_src ? 'OK ' : '!!!') + ' ' + r.slug + ' -> ' + (r.hero_image_src || 'NULL')));
})();
