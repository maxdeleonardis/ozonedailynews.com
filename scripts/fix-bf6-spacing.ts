import { createClient } from '@supabase/supabase-js';

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const SLUG = 'video-games-battlefield-6-news-2026-roadmap-seasons-3-4-5-naval-warfare-back-to-roots';

async function run() {
  const { data, error } = await sb.from('jack_articles').select('content_html').eq('slug', SLUG).single();
  if (error) { console.error(error.message); process.exit(1); }

  let html: string = data.content_html;
  html = html.split('\n').map(line => line.trimEnd()).join('\n');
  html = html.replace(/\n{3,}/g, '\n\n');
  html = html.trim();

  const { error: updateError } = await sb.from('jack_articles').update({ content_html: html }).eq('slug', SLUG);
  if (updateError) { console.error(updateError.message); process.exit(1); }
  console.log('Fixed. New length:', html.length);
}

run();
