// =============================================================================
// Publish Yellz0 (Aniela Verbin) creator article to Supabase
// Run: node scripts/publish-yellz0.js
// =============================================================================

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const article = {
  slug: 'influencer/yellz0',
  status: 'published',

  // ── Schema (JSON-LD) ───────────────────────────────────────────────────
  schema_title: 'Yellz0 (Aniela Verbin) | TikTok Star, Model & Content Creator Biography',
  schema_description: 'Full biography of Yellz0, real name Aniela Verbin. Pennsylvania-born TikTok star with 4M+ followers, model, and content creator known for lifestyle content and her signature blonde look.',
  schema_author: 'ObjectWire Influencer Desk',
  schema_author_url: null,
  schema_article_url: 'https://www.objectwire.org/influencer/yellz0',
  schema_image_url: '/influncer/yellz0_what_cup_size.PNG',
  schema_section: 'Influencer',
  schema_keywords: ['Yellz0', 'Aniela Verbin', 'yellz0 TikTok', 'yellz0 real name', 'yellz0 Instagram', 'TikTok model', 'Pennsylvania influencer', 'content creator biography'],
  schema_published_time: '2026-02-21T12:00:00Z',
  schema_modified_time: '2026-03-29T12:00:00Z',

  // ── Breadcrumbs ────────────────────────────────────────────────────────
  breadcrumbs: [
    { name: 'Home', item: '/' },
    { name: 'Influencer', item: '/influencer' },
    { name: 'Yellz0', item: '/influencer/yellz0' },
  ],

  // ── Hero Banner ────────────────────────────────────────────────────────
  hero_image_src: '/influncer/yellz0_what_cup_size.PNG',
  hero_image_alt: 'Yellz0 (Aniela Verbin) - TikTok Star and Content Creator',
  hero_gradient: 'linear-gradient(135deg, #0f172a 0%, #6d28d9 40%, #ec4899 80%, #f59e0b 100%)',
  hero_name: 'Yellz0',
  hero_subtitle: 'TikTok Creator · Model · @yellz0 · 4M+ Followers',
  hero_description: 'Pennsylvania-born content creator Aniela Verbin, known online as Yellz0, has built one of TikTok\'s most recognizable personal brands. With over 4 million followers and hundreds of millions of likes, she is a dominant force in lifestyle and fashion content.',
  hero_badges: [
    { label: 'TikTok Star', style: 'default' },
    { label: 'Model', style: 'secondary' },
    { label: '✨ 4M+ Followers', style: 'achievement' },
  ],
  hero_cta_buttons: [
    { href: '/influencer', label: '📱 Influencer Hub', variant: 'secondary' },
    { href: 'https://www.tiktok.com/@yellz0', label: '🎵 TikTok', variant: 'accent' },
    { href: 'https://www.instagram.com/yellz0', label: '📸 Instagram', variant: 'primary' },
  ],

  // ── Sidebar: Infobox ───────────────────────────────────────────────────
  sidebar_infobox_image_src: '/influncer/yellz0_what_cup_size.PNG',
  sidebar_infobox_image_alt: 'Yellz0 portrait',
  sidebar_infobox_name: 'Aniela Verbin',
  sidebar_infobox_subtitle: 'Yellz0 · TikTok Creator & Model',
  sidebar_infobox_rows: [
    { label: 'Known As', value: 'Yellz0' },
    { label: 'Real Name', value: 'Aniela Verbin' },
    { label: 'Born', value: 'October 16, 2002' },
    { label: 'Age', value: '23' },
    { label: 'Birthplace', value: 'Pennsylvania, USA' },
    { label: 'Nationality', value: 'American' },
    { label: 'TikTok', value: '@yellz0' },
    { label: 'Instagram', value: '@yellz0' },
    { label: 'TikTok Followers', value: '4M+' },
    { label: 'Known For', value: 'Lifestyle, Fashion, Modeling' },
  ],

  // ── Sidebar: Callout ───────────────────────────────────────────────────
  sidebar_callout: {
    title: '✨ Rising Star',
    body: 'Yellz0 has grown from a Pennsylvania teenager posting lip-sync videos to one of TikTok\'s most-followed lifestyle creators, amassing millions of followers and brand partnerships.',
    color: 'purple',
    ctaLabel: 'View TikTok',
    ctaHref: 'https://www.tiktok.com/@yellz0',
  },

  // ── Sidebar: Timeline ──────────────────────────────────────────────────
  sidebar_timeline: [
    { year: '2002', event: 'Born Aniela Verbin in Pennsylvania, USA.' },
    { year: '2019', event: 'Created TikTok account @yellz0, began posting lifestyle and lip-sync content.' },
    { year: '2020', event: 'First viral videos during lockdown-era TikTok boom, rapid follower growth.' },
    { year: '2021', event: 'Crossed 1 million TikTok followers, expanded to Instagram modeling.' },
    { year: '2022', event: 'Became one of TikTok\'s most recognizable lifestyle creators with 2M+ followers.' },
    { year: '2023', event: 'Diversified content across platforms, brand collaborations accelerated.' },
    { year: '2024-25', event: 'Surpassed 4 million TikTok followers, established as top-tier content creator.' },
    { year: 'Present', event: 'Active across TikTok, Instagram, and YouTube with a growing multimedia brand.' },
  ],

  // ── Sidebar: Related Links ─────────────────────────────────────────────
  sidebar_related_links: [
    { href: '/influencer', label: 'Influencer News Hub' },
    { href: '/influencer/queenkalin', label: 'queenkalin Profile' },
    { href: '/influencer/eden-gross', label: 'Eden Gross Profile' },
    { href: '/influencer/mika-lafuente', label: 'Mika Lafuente Profile' },
  ],

  // ── Sidebar: Meta ──────────────────────────────────────────────────────
  sidebar_meta_published_date: 'February 21, 2026',
  sidebar_meta_updated_date: 'March 29, 2026',
  sidebar_meta_author: 'ObjectWire Influencer Desk',
  sidebar_meta_category: 'Influencer · TikTok',

  // ── TikTok embed flag ──────────────────────────────────────────────────
  tiktok_embed: true,

  // ── Article Body (content_html) ────────────────────────────────────────
  content_html: `
<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Who Is Yellz0?</h2>
  <div class="prose prose-lg max-w-none">
    <p>Yellz0 is the online persona of <strong>Aniela Verbin</strong>, a 23-year-old American social media influencer, model, and content creator from Pennsylvania. She first gained attention on TikTok in 2019, where her mix of lifestyle vlogs, fashion content, lip-sync videos, and candid personality quickly resonated with a massive audience.</p>
    <p>By 2025, Yellz0 has amassed over <strong>4 million followers on TikTok</strong> and hundreds of millions of total video likes, making her one of the platform's most prominent lifestyle creators. Her content spans fashion hauls, get-ready-with-me videos, day-in-my-life vlogs, and trend participation, all delivered with the unfiltered confidence that defines her brand.</p>
    <p>Beyond TikTok, Yellz0 maintains an active presence on Instagram, where she shares modeling photos and behind-the-scenes content. Her signature blonde look and bold aesthetic have attracted brand partnerships and collaborations across the fashion and beauty industries.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Early Life and Background</h2>
  <div class="prose prose-lg max-w-none">
    <p>Aniela Verbin was born on <strong>October 16, 2002</strong>, in Pennsylvania. She grew up in a relatively private household and attended local schools before turning her attention to social media during her high school years. Like many Gen Z creators, she was drawn to TikTok during its explosive growth period in 2019-2020.</p>
    <p>Details about her family life remain largely private. Yellz0 has occasionally referenced her upbringing in Pennsylvania in her content but has generally kept personal family matters off-camera, choosing instead to focus her public persona on lifestyle, fashion, and entertainment content.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Rise to Fame on TikTok</h2>
  <div class="prose prose-lg max-w-none">
    <p>Yellz0 created her TikTok account in 2019, initially posting the platform's standard fare of lip-sync videos and trending challenges. However, her distinctive personality, confident on-camera presence, and signature blonde aesthetic helped her stand out in an increasingly crowded creator landscape.</p>
    <p>Her growth accelerated dramatically during 2020 and 2021, a period when TikTok experienced its largest user influx globally. Yellz0 capitalized on this by posting consistently and leaning into formats that showcased her lifestyle, from outfit-of-the-day videos to candid vlogs about her daily life.</p>
    <p>Several of her videos went viral, accumulating millions of views individually. By mid-2021, she had crossed the <strong>1 million follower</strong> threshold, a milestone that opened doors to brand deals and cross-platform opportunities. Her follower count continued climbing steadily, reaching 2 million by 2022 and eventually surpassing 4 million.</p>
    <p>What sets Yellz0 apart from many TikTok creators is her willingness to be unfiltered. While many influencers carefully curate every post, Yellz0 often shares raw, unscripted moments that feel genuine, a quality her audience consistently rewards with engagement.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Content Style and Brand</h2>
  <div class="prose prose-lg max-w-none">
    <p>Yellz0's content centers on several core pillars:</p>
    <ul>
      <li><strong>Fashion and Style</strong> — Outfit hauls, try-on videos, and get-ready-with-me content form the backbone of her TikTok presence. She frequently showcases affordable fashion finds alongside designer pieces.</li>
      <li><strong>Lifestyle Vlogs</strong> — Day-in-my-life content, apartment tours, and routine videos give followers a window into her daily world.</li>
      <li><strong>Trend Participation</strong> — Like most successful TikTok creators, Yellz0 is quick to participate in viral trends and challenges, often adding her own spin.</li>
      <li><strong>Modeling Content</strong> — Professional and semi-professional photo content, particularly on Instagram, showcases a more polished side of her brand.</li>
      <li><strong>Q&A and Engagement</strong> — Interactive content where she responds to fan questions and comments, maintaining the parasocial connection that drives creator loyalty.</li>
    </ul>
    <p>Her visual brand is defined by a consistent aesthetic: blonde hair, bold fashion choices, and a confidence that reads as effortless even when carefully produced. This consistency has made her instantly recognizable in the scroll-heavy TikTok feed.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Social Media Presence</h2>
  <div class="prose prose-lg max-w-none">
    <p>Yellz0's social media footprint extends across multiple platforms:</p>
    <ul>
      <li><strong>TikTok (@yellz0)</strong> — Primary platform with 4M+ followers. The bulk of her content lives here, with new posts multiple times per week.</li>
      <li><strong>Instagram (@yellz0)</strong> — Modeling photos, lifestyle posts, and Stories. Functions as a more curated extension of her TikTok presence.</li>
      <li><strong>YouTube</strong> — Longer-form content including vlogs and behind-the-scenes footage. Growing channel that complements her short-form work.</li>
    </ul>
    <p>Her multi-platform strategy is typical of established creators who recognize the risk of building on a single platform. By maintaining active profiles across TikTok, Instagram, and YouTube, Yellz0 has built a resilient audience that follows her wherever she posts.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Brand Partnerships and Business</h2>
  <div class="prose prose-lg max-w-none">
    <p>With millions of followers and strong engagement metrics, Yellz0 has attracted partnerships with fashion and beauty brands. While she typically does not disclose the financial details of these arrangements, her sponsored content appears regularly across her platforms.</p>
    <p>Common partnership categories include:</p>
    <ul>
      <li>Fashion brands (clothing lines, accessories)</li>
      <li>Beauty and skincare products</li>
      <li>Lifestyle and wellness brands</li>
    </ul>
    <p>Like many top-tier creators, Yellz0 also generates revenue through TikTok's Creator Fund and Instagram's monetization features. Her consistent posting schedule and strong engagement rates make her an attractive partner for brands targeting the Gen Z and young millennial demographic.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Personal Life</h2>
  <div class="prose prose-lg max-w-none">
    <p>Yellz0 keeps much of her personal life private despite her massive public following. She is known to be based in the United States, having grown up in Pennsylvania. She has occasionally shared glimpses of her personal relationships in her content but generally maintains a boundary between her public persona and private life.</p>
    <p>Her interests outside of content creation include fashion, fitness, travel, and photography. She has shared content from various locations, suggesting a lifestyle that balances content production with personal exploration.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Impact and Legacy</h2>
  <div class="prose prose-lg max-w-none">
    <p>Yellz0 represents a generation of creators who built their careers entirely on short-form video. Unlike earlier influencers who crossed over from YouTube or traditional media, she is a product of the TikTok era, having built her audience from zero on the platform and expanded outward.</p>
    <p>Her success underscores several trends in the creator economy:</p>
    <ul>
      <li><strong>Authenticity sells</strong> — Her unfiltered approach resonates in a market saturated with overly polished content.</li>
      <li><strong>Consistency compounds</strong> — Regular posting over years has turned initial virality into a sustainable career.</li>
      <li><strong>Multi-platform is essential</strong> — Diversifying across TikTok, Instagram, and YouTube provides insurance against algorithm changes or platform decline.</li>
    </ul>
    <p>At 23, Yellz0 is still in the early stages of what could be a long career in digital media. Whether she continues to focus on lifestyle content or branches into other verticals, her established audience gives her a significant head start.</p>
  </div>
</section>
`.trim(),
};

async function main() {
  console.log('Publishing Yellz0 to creator_articles...');

  const { data, error } = await sb
    .from('creator_articles')
    .upsert(article, { onConflict: 'slug' })
    .select('id, slug, status')
    .single();

  if (error) {
    console.error('ERROR:', error.message);
    process.exit(1);
  }

  console.log('SUCCESS:', data);
}

main();
