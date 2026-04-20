import { createClient } from '@supabase/supabase-js';

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const SLUG = 'video-games-unreal-engine-ue-5-7-megalights-pcg-nanite-voxels-2026';

async function run() {
  const { data, error } = await sb.from('jack_articles').select('content_html').eq('slug', SLUG).single();
  if (error) { console.error(error.message); process.exit(1); }
  console.log(data.content_html);
}

run();
