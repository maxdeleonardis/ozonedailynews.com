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

const QUEENKALIN_ARTICLE = {
  slug: 'influencer/queenkalin',
  status: 'published',

  // ── JSON-LD Schema ────────
  schema_title:          'queenkalin (Kalin) - Brazilian TikTok Creator Biography',
  schema_description:    'Full biography, career details, and social media presence of queenkalin (Kalin), a Brazilian TikTok creator with 2.1 million followers and 138.5 million likes.',
  schema_author:         'ObjectWire Influencer Desk',
  schema_author_url:     null,
  schema_article_url:    'https://www.objectwire.org/influencer/queenkalin',
  schema_image_url:      '/influncer/queenkalin.PNG',
  schema_section:        'Influencer',
  schema_keywords:       ['queenkalin', 'Kalin', 'xqueenkalin', 'TikTok creator', 'Brazilian influencer', 'biography'],
  schema_published_time: '2026-03-27T12:00:00Z',
  schema_modified_time:  '2026-03-27T12:00:00Z',

  // ── Breadcrumbs ────────
  breadcrumbs: [
    { name: 'Home',       item: '/' },
    { name: 'Influencer', item: '/influencer' },
    { name: 'queenkalin', item: '/influencer/queenkalin' },
  ],

  // ── Hero ────────
  hero_image_src:   '/influncer/queenkalin.PNG',
  hero_image_alt:   'queenkalin (Kalin) - Brazilian TikTok Creator',
  hero_gradient:    'linear-gradient(135deg, #1e293b 0%, #7c3aed 45%, #db2777 100%)',
  hero_name:        'queenkalin',
  hero_subtitle:    'Brazilian TikTok Creator · @xqueenkalin · 2.1M Followers',
  hero_description: 'Brazilian social media creator and TikTok sensation with over 2.1 million followers and 138.5 million total likes. Known for her bold personality, confident aesthetic, and viral lifestyle content.',
  hero_badges: [
    { label: 'Popular Creator',     style: 'default' },
    { label: 'Brazilian Creator',   style: 'secondary' },
    { label: '✨ 2.1M Followers',    style: 'achievement' },
  ],
  hero_cta_buttons: [
    { href: '/influencer',                               label: '📱 Influencer Hub', variant: 'secondary' },
    { href: 'https://www.tiktok.com/@xqueenkalin',      label: '🎵 TikTok',         variant: 'accent' },
  ],

  // ── Sidebar: Infobox ────────
  sidebar_infobox_image_src:  '/influncer/queenkalin.PNG',
  sidebar_infobox_image_alt:  'queenkalin portrait',
  sidebar_infobox_name:       'Kalin',
  sidebar_infobox_subtitle:   'queenkalin · TikTok Creator',
  sidebar_infobox_rows: [
    { label: 'Known As',        value: 'Kalin / queenkalin' },
    { label: 'Nationality',     value: 'Brazilian' },
    { label: 'TikTok',          value: '@xqueenkalin' },
    { label: 'Instagram',       value: '@queenkalin' },
    { label: 'TikTok Followers',value: '2.1M' },
    { label: 'Total Likes',     value: '138.5M' },
    { label: 'OnlyFans',        value: 'Yes' },
  ],

  // ── Sidebar: Callout ────────
  sidebar_callout: {
    title:    '✨ queenkalin',
    body:     'Kalin has built a massive TikTok following through bold, unapologetic content that resonates with millions of fans worldwide.',
    ctaLabel: 'View TikTok',
    ctaHref:  'https://www.tiktok.com/@xqueenkalin',
    color:    'purple',
  },

  // ── Sidebar: Timeline ────────
  sidebar_timeline: [
    { year: 'Origin',        event: 'Born in Brazil, later building her audience internationally.' },
    { year: 'TikTok Growth', event: 'Grew @xqueenkalin to millions of followers with viral lifestyle and trending content.' },
    { year: 'Present',       event: 'Active across TikTok, Instagram, and OnlyFans with 2.1M+ TikTok followers.' },
  ],

  // ── Sidebar: Related Links ────────
  sidebar_related_links: [
    { href: '/influencer',                label: 'Influencer News Hub' },
    { href: '/influencer/mika-lafuente',  label: 'Mika Lafuente Profile' },
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
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Who Is Kalin (queenkalin)?</h2>
  <div class="prose prose-lg max-w-none">
    <p>Kalin, known online as <strong>queenkalin</strong> and on TikTok as <strong>@xqueenkalin</strong>, is a Brazilian social media creator who has built a highly engaged following of over 2.1 million on TikTok with a staggering 138.5 million total likes. Her magnetic screen presence, confidence, and authentic personality have made her one of the most-followed Brazilian creators on the platform.</p>
    <p>Operating primarily under the handle <em>queenkalin</em>, she has cultivated a distinctive brand that blends lifestyle, beauty, and candid personal content.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Rise on TikTok</h2>
  <div class="prose prose-lg max-w-none">
    <p>Kalin's ascent on TikTok has been nothing short of meteoric. Her videos routinely rack up hundreds of thousands of views, with her most viral clips surpassing 1.3 million views. The combination of her natural charisma and consistent output has driven rapid follower growth across platforms.</p>
    <p>Her TikTok presence at <strong>@xqueenkalin</strong> is the epicenter of her digital empire, where she posts lifestyle clips, trending audio content, and glimpses into her day-to-day life that keep followers coming back.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Popular TikTok Content</h2>
  <div class="prose prose-lg max-w-none">
    <p>One of Kalin's most-watched recent TikToks has accumulated over 1.3 million views. Her content style blends trending sounds with her own confident delivery, creating videos that feel both timely and distinctly <em>queenkalin</em>.</p>
  </div>
  <div class="mt-6 flex justify-center">
    <blockquote
      class="tiktok-embed"
      cite="https://www.tiktok.com/@xqueenkalin/video/7621022020628794638"
      data-video-id="7621022020628794638"
      style="max-width:605px; min-width:325px;"
    >
      <section>
        <a target="_blank" title="@xqueenkalin" href="https://www.tiktok.com/@xqueenkalin?refer=embed">@xqueenkalin</a>
      </section>
    </blockquote>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Content Style and Aesthetic</h2>
  <div class="prose prose-lg max-w-none">
    <p>Kalin's content leans into a bold, unapologetic aesthetic. Her videos are polished yet feel effortlessly spontaneous, a balance that resonates strongly with Gen Z and millennial audiences. The "queen" in her brand name is fitting — her content exudes self-assurance and sets trends rather than following them.</p>
    <p>Her Brazilian roots add a cultural dimension to her content, with occasional Portuguese-language posts and references that strengthen her connection to her home fanbase while remaining internationally accessible.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">OnlyFans and Exclusive Content</h2>
  <div class="prose prose-lg max-w-none">
    <p>Beyond TikTok and Instagram, Kalin creates exclusive content for her most dedicated fans. Her OnlyFans presence rounds out a comprehensive digital brand strategy that spans multiple monetization channels.</p>
    <p>
      <a href="https://onlyfans.com/queenkalin" target="_blank" rel="nofollow noopener noreferrer" class="text-blue-600 hover:underline">
        Visit queenkalin's OnlyFans page &rarr;
      </a>
    </p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Where to Follow Kalin</h2>
  <div class="prose prose-lg max-w-none">
    <ul>
      <li><strong>TikTok:</strong> <a href="https://www.tiktok.com/@xqueenkalin" target="_blank" rel="noopener noreferrer">@xqueenkalin</a></li>
      <li><strong>Instagram:</strong> <a href="https://www.instagram.com/queenkalin/" target="_blank" rel="noopener noreferrer">@queenkalin</a></li>
      <li><strong>OnlyFans:</strong> <a href="https://onlyfans.com/queenkalin" target="_blank" rel="nofollow noopener noreferrer">onlyfans.com/queenkalin</a></li>
    </ul>
  </div>
</section>
    `.trim(),
};

async function main() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  console.log('migrate-queenkalin.ts — LIVE');

  const { error } = await supabase
    .from('creator_articles')
    .upsert(QUEENKALIN_ARTICLE, { onConflict: 'slug' });

  if (error) {
    console.error('   Error: ' + error.message);
    process.exit(1);
  }

  console.log('   Done: ' + QUEENKALIN_ARTICLE.slug);
}

main();
