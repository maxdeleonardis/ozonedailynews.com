import { createClient } from '@supabase/supabase-js';

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

const SLUG = 'video-games-battlefield-6-news-2026-roadmap-seasons-3-4-5-naval-warfare-back-to-roots';

const VIDEO_BLOCK = `
      <div class="my-8 w-full overflow-hidden rounded-xl shadow-lg" style="aspect-ratio:16/9">
        <iframe
          style="width:100%;height:100%"
          src="https://www.youtube.com/embed/pPhLtirFp7E"
          title="Battlefield 6 | Official 2026 Roadmap Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
`;

async function run() {
  const { data, error } = await sb.from('jack_articles').select('content_html').eq('slug', SLUG).single();
  if (error) { console.error(error.message); process.exit(1); }

  let html: string = data.content_html;

  // Remove any leftover old bare video div at the very top if present
  html = html.replace(/^<div>\s*<iframe[^>]*pPhLtirFp7E[^/]*\/>\s*<\/div>\s*/s, '');

  // Insert full-width video after JackStats closing />
  const MARKER = '\n\n      <JackSection number={1}';
  const idx = html.indexOf(MARKER);
  if (idx === -1) {
    console.error('Marker not found. First 300 chars:', html.substring(0, 300));
    process.exit(1);
  }

  html = html.slice(0, idx) + '\n' + VIDEO_BLOCK + '\n' + html.slice(idx);

  const { error: updateError } = await sb.from('jack_articles').update({ content_html: html }).eq('slug', SLUG);
  if (updateError) { console.error(updateError.message); process.exit(1); }

  console.log('Video moved and styled. New length:', html.length);
}

run();
