import { createClient } from '@supabase/supabase-js';

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const SLUG = 'video-games-unreal-engine-ue-5-7-megalights-pcg-nanite-voxels-2026';

async function run() {
  const { data, error } = await sb.from('jack_articles').select('content_html').eq('slug', SLUG).single();
  if (error) { console.error(error.message); process.exit(1); }

  let html: string = data.content_html;

  // 1. Trim trailing whitespace on every line
  html = html.split('\n').map(line => line.trimEnd()).join('\n');

  // 2. Collapse multiple blank lines into one
  html = html.replace(/\n{3,}/g, '\n\n');

  // 3. Trim leading/trailing whitespace from the whole string
  html = html.trim();

  const { error: updateError } = await sb.from('jack_articles').update({ content_html: html }).eq('slug', SLUG);
  if (updateError) { console.error(updateError.message); process.exit(1); }

  console.log('Fixed. New length:', html.length);
}

run();
