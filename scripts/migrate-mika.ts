#!/usr/bin/env tsx
import * as path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Missing Supabase env vars in .env.local');
  process.exit(1);
}

const DRY_RUN = process.argv.includes('--dry-run');
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const MIKA_ARTICLE = {
  slug: 'influencer/mika-lafuente',
  status: 'published',

  // ── JSON-LD Schema ────────
  schema_title:          "Mika Lafuente - Argentine-American Model & Influencer Biography",
  schema_description:    "Full biography, career details, and social media presence of Mika Lafuente, Argentine-American model and popular lifestyle influencer.",
  schema_author:         'ObjectWire Influencer Desk',
  schema_author_url:     null,
  schema_article_url:    'https://www.objectwire.org/influencer/mika-lafuente',
  schema_image_url:      '/influncer/mika.PNG',
  schema_section:        'Influencer',
  schema_keywords:       ['Mika Lafuente', 'model', 'influencer', 'Instagram', 'TikTok', 'biography', 'lifestyle'],
  schema_published_time: '2026-03-27T12:00:00Z',
  schema_modified_time:  '2026-03-27T12:00:00Z',

  // ── Breadcrumbs ────────
  breadcrumbs: [
    { name: 'Home',       item: '/' },
    { name: 'Influencer', item: '/influencer' },
    { name: 'Profiles',   item: '/influencer' },
    { name: 'Mika Lafuente', item: '/influencer/mika-lafuente' },
  ],

  // ── Hero ────────
  hero_image_src:   '/influncer/mika.PNG',
  hero_image_alt:   'Mika Lafuente - Model and Influencer',
  hero_gradient:    'linear-gradient(135deg, #1e293b 0%, #3b0764 45%, #ec4899 100%)',
  hero_name:        'Mika Lafuente',
  hero_subtitle:    "Model · Lifestyle Influencer · Creator",
  hero_description: 'Argentine-American model and prominent social media influencer who has captivated millions across Instagram and TikTok with her lifestyle, fashion, and fitness content. She has become one of the most recognizable faces in the creator economy.',
  hero_badges: [
    { label: 'Popular Creator',               style: 'default' },
    { label: 'Fashion & Lifestyle',           style: 'secondary' },
    { label: '✨ Verified Figure',            style: 'achievement' },
  ],
  hero_cta_buttons: [
    { href: '/influencer',                    label: '📱 Influencer Hub',    variant: 'secondary' },
    { href: 'https://www.instagram.com/mikalafuente/', label: '📸 Instagram', variant: 'accent' },
  ],

  // ── Sidebar: Infobox ────────
  sidebar_infobox_image_src:  '/influncer/mika.PNG',
  sidebar_infobox_image_alt:  'Mika Lafuente portrait',
  sidebar_infobox_name:       'Mika Lafuente',
  sidebar_infobox_subtitle:   'Model & Digital Creator',
  sidebar_infobox_rows: [
    { label: 'Profession',     value: 'Model, Influencer' },
    { label: 'Origin',         value: 'Argentina / USA' },
    { label: 'Known For',      value: 'Fashion & Lifestyle Content' },
    { label: 'Instagram',      value: '@mikalafuente' },
    { label: 'TikTok',         value: '@mikalafuente' },
    { label: 'Status',         value: 'Active' },
  ],

  // ── Sidebar: Callout ────────
  sidebar_callout: {
    title:    '✨ Digital Phenomenon',
    body:     'Mika has built a highly engaged audience through authentic lifestyle sharing, brand collaborations, and high-quality fashion content.',
    ctaLabel: 'View Instagram',
    ctaHref:  'https://www.instagram.com/mikalafuente/',
    color:    'purple',
  },

  // ── Sidebar: Timeline ────────
  sidebar_timeline: [
    { year: 'Early Life', event: 'Born in Argentina, later moving to the United States.' },
    { year: 'Career Beginnings', event: 'Started sharing modeling shots and lifestyle posts on Instagram.' },
    { year: 'TikTok Growth', event: 'Expanded to TikTok, sharing behind-the-scenes content and trend videos, rapidly increasing her follower count.' },
    { year: 'Present', event: 'Established as a prominent fashion and lifestyle influencer with major brand partnerships.' },
  ],

  // ── Sidebar: Related Links ────────
  sidebar_related_links: [
    { href: '/influencer',                                      label: 'Influencer News Hub' },
    { href: '/influencer/instagram-models',                     label: 'Top Instagram Models' },
  ],

  // ── Sidebar: Meta ────────
  sidebar_meta_published_date: 'March 27, 2026',
  sidebar_meta_updated_date:   'March 27, 2026',
  sidebar_meta_author:         'ObjectWire Influencer Desk',
  sidebar_meta_category:       'Influencer · Fashion',

  // ── Flags ────────
  tiktok_embed: false, // We don't have a specific TikTok embed right now

  // ── Article Body HTML ────────
  content_html: `
<section>
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Who Is Mika Lafuente?</h2>
  <div class="prose prose-lg max-w-none">
    <p><strong>Mika Lafuente</strong> is a popular Argentine-American model and digital creator known for her vibrant presence on platforms like Instagram and TikTok. With her striking aesthetic and engaging personality, she has carved out a significant niche in the highly competitive lifestyle and fashion influencer space.</p>
    <p>Originating from Argentina and building her career primarily in the United States, Mika blends international flair with accessible, relatable content. Her platforms offer a mix of high-fashion modeling, fitness routines, behind-the-scenes glimpses into influencer life, and travel vlogs.</p>
    <p>As the creator economy continues to evolve, Mika represents the modern archetype of the self-made digital model—one who manages her own brand identity, audience engagement, and corporate partnerships seamlessly.</p>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Rise to Digital Stardom</h2>
  <div class="prose prose-lg max-w-none">
    <p>Mika's ascent on social media wasn't overnight. It was built on consistent, high-quality visual content that highlighted her modeling skills. Her early Instagram feed showcased professional photoshoots, swiftly earning the attention of both fans and talent scouts.</p>
    <p>When short-form video took over, Mika adapted flawlessly. Her transition to TikTok allowed fans to see her personality beyond stylized photos. Participating in trends, sharing quick styling tips, and posting fitness journeys helped her transition from a "traditional" Instagram model to a multi-platform digital personality.</p>
    <blockquote>
      <p class="italic text-gray-600 border-l-4 border-pink-500 pl-4 my-6">"In today's digital landscape, visual appeal is just the entry ticket. Sustained success requires authenticity, consistent engagement, and the agility to adapt across platforms."</p>
    </blockquote>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Brand Collaborations and Impact</h2>
  <div class="prose prose-lg max-w-none">
    <p>With her massive following, Mika Lafuente has become highly sought after by fashion, swimwear, and lifestyle brands. Her ability to integrate sponsored content authentically into her everyday narrative yields high conversion rates, making her a valuable asset for digital marketing campaigns.</p>
    <p>She actively advocates for body positivity and fitness, often sharing her workout regimens. This multifaceted approach ensures her content resonates with both those seeking fashion inspiration and followers interested in health and wellness.</p>
  </div>
</section>
<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Where to Follow Mika Lafuente</h2>
  <div class="prose prose-lg max-w-none">
    <ul>
      <li><strong>Instagram:</strong> <a href="https://www.instagram.com/mikalafuente/" target="_blank" rel="noopener noreferrer">@mikalafuente</a></li>
      <li><strong>TikTok:</strong> <a href="https://www.tiktok.com/@mikalafuente" target="_blank" rel="noopener noreferrer">@mikalafuente</a></li>
      <li><strong>OnlyFans:</strong> <a href="https://onlyfans.com/mikalafuente" target="_blank" rel="nofollow noopener noreferrer">onlyfans.com/mikalafuente</a></li>
    </ul>
  </div>
</section>  `,
};

async function main() {
  console.log('🔄 migrate-mika.ts — ' + (DRY_RUN ? 'DRY RUN' : 'LIVE'));

  if (DRY_RUN) {
    console.log('   ✓ [dry] ' + MIKA_ARTICLE.slug);
  } else {
    const { error } = await supabase
      .from('creator_articles')
      .upsert(MIKA_ARTICLE, { onConflict: 'slug' });

    if (error) {
      console.error('   ✗ ' + MIKA_ARTICLE.slug + ': ' + error.message);
      process.exit(1);
    } else {
      console.log('   ✓ ' + MIKA_ARTICLE.slug);
    }
  }

  console.log('\n✅ Done\n');
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
