import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/nav/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';
import { createClient } from '@/lib/supabase/server';

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const revalidate = 86400; // Profiles rarely change — daily ISR

export const metadata: Metadata = {
  title: 'Creator Hub | Profiles, News & Culture',
  description:
    "ObjectWire's Creator Hub: in-depth profiles, breaking news, and cultural coverage of the biggest names in content creation, fitness, YouTube, golf, and",
  keywords: [
    'creator profiles',
    'creator news 2026',
    'Tren Twins',
    'Bryson DeChambeau',
    'Iman Gadzhi',
    'MrBeast',
    'Diamond Gym',
    'Mika Lafuente',
    'queenkalin',
    'fitness creators',
    'content creators 2026',
    'creator hub',
    'ObjectWire creator',
  ],
  alternates: {
    canonical: 'https://www.owire.org/creator',
  },
  openGraph: {
    title: 'Creator Hub | Profiles, News & Culture',
    description:
      'In-depth profiles and breaking news covering the biggest creators across fitness, YouTube, golf, and online culture. Updated 2026.',
    type: 'website',
    url: 'https://www.owire.org/creator',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creator Hub',
    description:
      'Profiles, news, and cultural coverage of the biggest names in content creation, ObjectWire Creator Hub.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CREATOR PROFILES (curated)
// ─────────────────────────────────────────────────────────────────────────────

const PROFILES = [
  {
    href: '/creator/mika-lafuente',
    title: 'Mika Lafuente',
    description:
      'Spanish model and content creator with millions of followers across TikTok and Instagram. Known for fashion, lifestyle content, and a loyal international fanbase.',
    badge: 'PROFILE',
    thumbnail: '/influncer/mika.PNG',
    meta: 'TikTok · Instagram · OnlyFans',
  },
  {
    href: '/creator/queenkalin',
    title: 'queenkalin',
    description:
      'Brazilian-born creator @xqueenkalin with 2.1M+ TikTok followers. Viral content, bold personality, and a rapidly growing presence across platforms.',
    badge: 'PROFILE',
    emoji: '👑',
    meta: 'TikTok · Instagram',
  },
  {
    href: '/creator/eden-gross',
    title: 'Eden Gross',
    description:
      'TikTok dance and lifestyle creator @eden.gross with nearly 1 million followers and 43.6 million total likes. Known for high-energy dance content and authentic personality.',
    badge: 'PROFILE',
    thumbnail: '/influncer/eden_gross.PNG',
    meta: 'TikTok · Instagram',
  },
  {
    href: '/creator/tren-twins',
    title: 'Tren Twins',
    description:
      'Michael and Christian Gaiera, identical twin bodybuilders who became fitness sensations on YouTube and TikTok. Known for their extreme training and unfiltered content.',
    badge: 'PROFILE',
    thumbnail: '/influncer/tren_twins_wiki.PNG',
    meta: 'YouTube · TikTok · Fitness',
  },
  {
    href: '/creator/diamond-gym',
    title: 'Diamond Gym',
    description:
      'The legendary gym that produced some of the biggest names in fitness content. A cultural hub for bodybuilding and creator culture in the United States.',
    badge: 'PROFILE',
    thumbnail: '/influncer/Diamond Gym.PNG',
    meta: 'Fitness · Bodybuilding · Culture',
  },
  {
    href: '/creator/daddywellness',
    title: 'DaddyWellness',
    description:
      'Health, wellness, and lifestyle content creator pushing fitness culture forward. Candid routines, supplement reviews, and motivational content for a dedicated audience.',
    badge: 'PROFILE',
    thumbnail: '/influncer/daddy_wellness.jpg',
    meta: 'Wellness · Lifestyle · YouTube',
  },
  {
    href: '/creator/yellz0',
    title: 'yellz0',
    description:
      'Popular content creator known for bold, unfiltered takes and viral moments. Building an audience across TikTok and Instagram with authentic personality-driven content.',
    badge: 'PROFILE',
    thumbnail: '/influncer/yellz0_what_cup_size.PNG',
    meta: 'TikTok · Instagram',
  },
  {
    href: '/creator/iman-gadzhi',
    title: 'Iman Gadzhi',
    description:
      'Entrepreneur and social media educator who built a business empire before 25. Known for SMMA coaching, YouTube education, and Agency Navigator.',
    badge: 'PROFILE',
    emoji: '💼',
    meta: 'YouTube · Business · Education',
  },
  {
    href: '/creator/serge-gatari',
    title: 'Serge Gatari',
    description:
      'Business educator and content creator in the online marketing and agency space. Known for community building, client acquisition strategy, and business growth content.',
    badge: 'PROFILE',
    emoji: '📈',
    meta: 'YouTube · Business · Marketing',
  },
  {
    href: '/creator/bryson-dechambeau',
    title: 'Bryson DeChambeau',
    description:
      'Two-time US Open champion turned golf content creator. The "Golf Scientist" blends elite competitive play with YouTube experiments, long-drive records, and viral moments.',
    badge: 'PROFILE',
    emoji: '⛳',
    meta: 'Golf · YouTube · Sports',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// LATEST NEWS (curated)
// ─────────────────────────────────────────────────────────────────────────────

// Tags and categories used to pull fresh articles from Supabase
const INFLUENCER_TAGS = [
  'creator', 'Creator', 'MrBeast', 'Logan Paul', 'Tren Twins',
  'Diamond Gym', 'Bryson DeChambeau', 'Iman Gadzhi', 'creator',
  'YouTuber', 'TikTok', 'fitness creator', 'content creator',
];

interface ArticleRow {
  slug: string;
  title: string;
  category: string;
  publish_date: string;
  thumbnail_src?: string;
  url?: string;
  tags?: string[];
}

async function fetchCreatorNews(): Promise<ArticleRow[]> {
  try {
    const supabase = await createClient();

    // Pull articles where category = Creator OR tags overlap
    const { data: byCat } = await supabase
      .from('articles')
      .select('slug, title, category, publish_date, thumbnail_src, url, tags')
      .eq('status', 'published')
      .eq('category', 'Creator')
      .order('published_at', { ascending: false })
      .limit(20);

    // Also pull by any of the relevant tags using contains
    const { data: byTag } = await supabase
      .from('articles')
      .select('slug, title, category, publish_date, thumbnail_src, url, tags')
      .eq('status', 'published')
      .overlaps('tags', INFLUENCER_TAGS)
      .order('published_at', { ascending: false })
      .limit(20);

    // Also pull articles whose url starts with /creator
    const { data: byUrl } = await supabase
      .from('articles')
      .select('slug, title, category, publish_date, thumbnail_src, url, tags')
      .eq('status', 'published')
      .like('url', '/creator/%')
      .order('published_at', { ascending: false })
      .limit(20);

    // Merge and deduplicate by slug
    const all = [...(byCat ?? []), ...(byTag ?? []), ...(byUrl ?? [])];
    const seen = new Set<string>();
    const deduped: ArticleRow[] = [];
    for (const row of all) {
      if (!seen.has(row.slug)) {
        seen.add(row.slug);
        deduped.push(row);
      }
    }

    // Sort by publish_date descending (string sort works for "Month D, YYYY" if same year)
    // Use published_at if available — fall back to array order (already sorted)
    return deduped.slice(0, 12);
  } catch {
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default async function CreatorHubPage() {
  const liveNews = await fetchCreatorNews();

  return (
    <SEOWrapper slug="/creator">

      {/* Breadcrumb bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Creator', item: '/creator' },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="INFLUENCER HUB"
        badgeColor="from-purple-600 to-pink-600"
        title="Creator Hub"
        subtitle="Profiles, news, and culture covering the biggest names in content creation, fitness, YouTube, golf, and beyond."
        meta={
          <>
            <span>🎥 Creator Profiles</span>
            <span className="hidden md:inline">•</span>
            <span>📰 Breaking News</span>
            <span className="hidden md:inline">•</span>
            <span>🌍 Updated 2026</span>
          </>
        }
      >

        {/* ── Coverage Overview ──────────────────────────────────────────── */}
        <Hub.InfoGrid
          title="Coverage Overview"
          icon="📊"
          items={[
            { label: 'Creator Profiles', value: `${PROFILES.length}` },
            { label: 'Categories', value: 'Fitness · Golf · Business · Lifestyle' },
            { label: 'Platforms Tracked', value: 'YouTube · TikTok · Instagram' },
            { label: 'Live Articles', value: `${liveNews.length}` },
          ]}
          columns={4}
        />

        {/* ── Creator Profiles ───────────────────────────────────────────── */}
        <Hub.Section title="Creator Profiles" icon="🌟" variant="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROFILES.map((profile) => (
              <Hub.Card
                key={profile.href}
                href={profile.href}
                title={profile.title}
                description={profile.description}
                badge={profile.badge}
                thumbnail={profile.thumbnail}
                emoji={!profile.thumbnail ? profile.emoji : undefined}
                meta={profile.meta}
              />
            ))}
          </div>
        </Hub.Section>

        {/* ── Latest News ────────────────────────────────────────────────── */}
        <Hub.Section title="Latest News" icon="📰" variant="default">
          {liveNews.length > 0 ? (
            <div className="space-y-4">
              {liveNews.map((article) => (
                <Hub.Card
                  key={article.slug}
                  href={article.url ?? `/${article.slug}`}
                  title={article.title}
                  badge="NEWS"
                  thumbnail={article.thumbnail_src}
                  meta={`${article.publish_date}${article.category && article.category !== 'Creator' ? ` · ${article.category}` : ''}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No recent creator news found.</p>
          )}
        </Hub.Section>

        {/* ── Browse by Category ─────────────────────────────────────────── */}
        <Hub.Section title="Browse by Category" icon="🗂️" variant="card">
          <Hub.LinkGrid
            columns={3}
            items={[
              {
                href: '/creator/tren-twins',
                emoji: '💪',
                label: 'Fitness',
                sub: 'Tren Twins, Diamond Gym, DaddyWellness',
              },
              {
                href: '/creator/iman-gadzhi',
                emoji: '💼',
                label: 'Business',
                sub: 'Iman Gadzhi, Serge Gatari',
              },
              {
                href: '/creator/bryson-dechambeau',
                emoji: '⛳',
                label: 'Sports',
                sub: 'Bryson DeChambeau',
              },
              {
                href: '/creator/mika-lafuente',
                emoji: '✨',
                label: 'Lifestyle',
                sub: 'Mika Lafuente, queenkalin, yellz0',
              },
              {
                href: '/creator/mrbeast-launches-beast-games-season-2-casting',
                emoji: '🎬',
                label: 'YouTube',
                sub: 'MrBeast, Steve Will Do It',
              },
              {
                href: '/creator',
                emoji: '🌐',
                label: 'All Creators',
                sub: 'Full directory',
              },
            ]}
          />
        </Hub.Section>

      </Hub>
    </SEOWrapper>
  );
}
