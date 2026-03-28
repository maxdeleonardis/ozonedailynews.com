import * as path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing Supabase env vars in .env.local');
  process.exit(1);
}

const EDEN_GROSS_ARTICLE = {
  slug: 'influencer/eden-gross',
  status: 'published',

  // ── JSON-LD Schema ────────
  schema_title:          'Eden Gross — TikTok Creator & Dancer Biography',
  schema_description:    'Full biography, career details, and social media presence of Eden Gross, a TikTok dance and lifestyle creator with nearly 1 million followers and 43.6 million likes.',
  schema_author:         'ObjectWire Influencer Desk',
  schema_author_url:     null,
  schema_article_url:    'https://www.objectwire.org/influencer/eden-gross',
  schema_image_url:      '/influncer/eden_gross.PNG',
  schema_section:        'Influencer',
  schema_keywords:       ['Eden Gross', 'eden.gross TikTok', 'edengross Instagram', 'TikTok dancer', 'lifestyle creator', 'biography'],
  schema_published_time: '2026-03-27T12:00:00Z',
  schema_modified_time:  '2026-03-27T12:00:00Z',

  // ── Breadcrumbs ────────
  breadcrumbs: [
    { name: 'Home',       item: '/' },
    { name: 'Influencer', item: '/influencer' },
    { name: 'Eden Gross', item: '/influencer/eden-gross' },
  ],

  // ── Hero ────────
  hero_image_src:   '/influncer/eden_gross.PNG',
  hero_image_alt:   'Eden Gross — TikTok Dance & Lifestyle Creator',
  hero_gradient:    'linear-gradient(135deg, #0f172a 0%, #7c3aed 50%, #ec4899 100%)',
  hero_name:        'Eden Gross',
  hero_subtitle:    'TikTok Creator · @eden.gross · 970K Followers',
  hero_description: 'TikTok dance and lifestyle creator with nearly 1 million followers and 43.6 million total likes. Known for authentic dance content, trending sounds, and a magnetic screen presence that keeps fans coming back.',
  hero_badges: [
    { label: 'TikTok Creator',   style: 'default' },
    { label: 'Dancer',           style: 'secondary' },
    { label: '✨ 970K Followers', style: 'achievement' },
  ],
  hero_cta_buttons: [
    { href: '/influencer',                              label: '📱 Influencer Hub', variant: 'secondary' },
    { href: 'https://www.tiktok.com/@eden.gross',       label: '🎵 TikTok',         variant: 'accent' },
    { href: 'https://www.instagram.com/edengross/',     label: '📸 Instagram',      variant: 'secondary' },
  ],

  // ── Sidebar: Infobox ────────
  sidebar_infobox_image_src:  '/influncer/eden_gross.PNG',
  sidebar_infobox_image_alt:  'Eden Gross portrait',
  sidebar_infobox_name:       'Eden Gross',
  sidebar_infobox_subtitle:   '@eden.gross · TikTok Creator',
  sidebar_infobox_rows: [
    { label: 'Known As',         value: 'Eden Gross' },
    { label: 'TikTok',           value: '@eden.gross' },
    { label: 'Instagram',        value: '@edengross' },
    { label: 'TikTok Followers', value: '970.4K' },
    { label: 'Total Likes',      value: '43.6M' },
    { label: 'Content Type',     value: 'Dance · Lifestyle · Trending' },
  ],

  // ── Sidebar: Callout ────────
  sidebar_callout: {
    title:    '🎵 Eden Gross',
    body:     'Eden has built a loyal TikTok following through consistent, high-energy dance content and a relatable personality that resonates with audiences worldwide.',
    ctaLabel: 'View TikTok',
    ctaHref:  'https://www.tiktok.com/@eden.gross',
    color:    'purple',
  },

  // ── Sidebar: Timeline ────────
  sidebar_timeline: [
    { year: 'Early Career',  event: 'Began posting short-form video content, quickly gaining traction through dance and lifestyle content.' },
    { year: 'TikTok Growth', event: 'Grew @eden.gross to nearly 1 million TikTok followers with 43.6 million total likes through consistent, trending content.' },
    { year: 'Present',       event: 'Active across TikTok and Instagram, continuing to build audience with dance videos and lifestyle content.' },
  ],

  // ── Sidebar: Related Links ────────
  sidebar_related_links: [
    { href: '/influencer',                label: 'Influencer News Hub' },
    { href: '/influencer/mika-lafuente',  label: 'Mika Lafuente Profile' },
    { href: '/influencer/queenkalin',     label: 'queenkalin Profile' },
  ],

  // ── Sidebar: Meta ────────
  sidebar_meta_published_date: 'March 27, 2026',
  sidebar_meta_updated_date:   'March 27, 2026',
  sidebar_meta_author:         'ObjectWire Influencer Desk',
  sidebar_meta_category:       'Influencer · TikTok',

  // ── Flags ────────
  tiktok_embed: true,

  content_html: `
<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Who Is Eden Gross?</h2>
  <div class="prose prose-lg max-w-none">
    <p>Eden Gross is a TikTok dance and lifestyle creator who has amassed nearly <strong>1 million followers</strong> on TikTok with an impressive <strong>43.6 million total likes</strong>. Known on TikTok as <strong>@eden.gross</strong> and on Instagram as <strong>@edengross</strong>, she has built a dedicated fanbase through high-energy dance content and an authentic presence that feels both aspirational and relatable.</p>
    <p>Her content spans trending dances, lifestyle moments, and popular sounds — a mix that has fueled consistent growth and made her one of the more recognizable faces in the TikTok dance creator space.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">TikTok Career and Growth</h2>
  <div class="prose prose-lg max-w-none">
    <p>Eden's rise on TikTok has been driven by her commitment to posting consistently and her ability to tap into trending sounds and formats at exactly the right moment. With just under a million followers and 43.6 million likes, her engagement rate speaks to a fanbase that actively interacts with every post.</p>
    <p>Her videos regularly attract tens of thousands of views, with standout clips reaching north of 30K likes. The caption <em>"I love this dance"</em> on one of her most-liked recent videos captures the genuine enthusiasm she brings to every piece of content.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Popular TikTok Content</h2>
  <div class="prose prose-lg max-w-none">
    <p>Eden's most-watched videos are a blend of dance trends and spontaneous lifestyle moments. Her dedication to her craft comes through in behind-the-scenes practice clips — one captioned <em>"day 2 practicing and not going well"</em> gave fans a candid look at the work behind a flawless TikTok, earning strong engagement from her community.</p>
  </div>
  <div class="mt-6 flex justify-center">
    <blockquote
      class="tiktok-embed"
      cite="https://www.tiktok.com/@eden.gross/video/7621986491262127374"
      data-video-id="7621986491262127374"
      style="max-width:605px; min-width:325px;"
    >
      <section>
        <a target="_blank" title="@eden.gross" href="https://www.tiktok.com/@eden.gross?refer=embed">@eden.gross</a>
      </section>
    </blockquote>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Content Style and Aesthetic</h2>
  <div class="prose prose-lg max-w-none">
    <p>Eden's content aesthetic blends polished execution with genuine personality. Her dance videos are technically sharp, but what sets her apart is the natural charisma she brings to every clip — whether she is nailing a choreography trend on the first attempt or laughing through an imperfect take.</p>
    <p>This authenticity has proven to be her strongest asset, attracting fans who appreciate creators who feel real rather than rehearsed. Her lifestyle content complements the dance-heavy feed by giving followers glimpses into her life beyond the choreography.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Where to Follow Eden Gross</h2>
  <div class="prose prose-lg max-w-none">
    <ul>
      <li><strong>TikTok:</strong> <a href="https://www.tiktok.com/@eden.gross" target="_blank" rel="noopener noreferrer">@eden.gross</a></li>
      <li><strong>Instagram:</strong> <a href="https://www.instagram.com/edengross/" target="_blank" rel="noopener noreferrer">@edengross</a></li>
    </ul>
  </div>
</section>
  `.trim(),
};

async function main() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  console.log('migrate-eden-gross.ts — LIVE');

  const { error } = await supabase
    .from('creator_articles')
    .upsert(EDEN_GROSS_ARTICLE, { onConflict: 'slug' });

  if (error) {
    console.error('   Error: ' + error.message);
    process.exit(1);
  }

  console.log('   Done: ' + EDEN_GROSS_ARTICLE.slug);
}

main();
