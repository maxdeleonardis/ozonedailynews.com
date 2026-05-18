import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function run() {
  const { error } = await sb.from('articles').update({
    thumbnail_src: '/video-games/thumbnail.PNG',
    thumbnail_alt: 'Counter-Strike 2 gameplay screenshot',
    topic_tag: 'gaming',
    published_at: '2026-04-01T18:00:00Z',
    publish_date: 'April 1, 2026',
    status: 'published',
    read_time: '4 min read',
    author_name: 'OzoneNews Gaming Desk',
    author_slug: 'OzoneNews-gaming-desk',
    category: 'Gaming',
    trending: false,
    breaking: false,
    subtitle: 'Reports of Counter-Strike 3 on Unreal Engine 5 are false. Valve released a CS2 animation overhaul beta on April 1, 2026. The CS3 rumor referenced a "March 32nd" launch date.',
    url: '/microsoft/news/valve-ships-cs2-animation-overhaul-not-cs3-april-2026',
  }).eq('slug', 'microsoft-news-valve-ships-cs2-animation-overhaul-not-cs3-april-2026');

  if (error) { console.error(error); process.exit(1); }
  console.log('articles row patched');
}

run();
