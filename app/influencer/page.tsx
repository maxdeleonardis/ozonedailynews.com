import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Influencer Hub — Profiles, News & Culture | ObjectWire',
  description:
    "ObjectWire's Influencer Hub: in-depth profiles, breaking news, and cultural coverage of the biggest names in content creation — fitness, YouTube, golf, and beyond.",
  keywords: [
    'influencer profiles',
    'influencer news 2026',
    'Tren Twins',
    'Bryson DeChambeau',
    'Iman Gadzhi',
    'MrBeast',
    'Diamond Gym',
    'Mika Lafuente',
    'queenkalin',
    'fitness influencers',
    'content creators 2026',
    'influencer hub',
    'ObjectWire influencer',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer',
  },
  openGraph: {
    title: 'Influencer Hub — Profiles, News & Culture | ObjectWire',
    description:
      'In-depth profiles and breaking news covering the biggest influencers across fitness, YouTube, golf, and online culture. Updated 2026.',
    type: 'website',
    url: 'https://www.objectwire.org/influencer',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Hub | ObjectWire',
    description:
      'Profiles, news, and cultural coverage of the biggest names in content creation — ObjectWire Influencer Hub.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CREATOR PROFILES (curated)
// ─────────────────────────────────────────────────────────────────────────────

const PROFILES = [
  {
    href: '/influencer/mika-lafuente',
    title: 'Mika Lafuente',
    description:
      'Spanish model and content creator with millions of followers across TikTok and Instagram. Known for fashion, lifestyle content, and a loyal international fanbase.',
    badge: 'PROFILE',
    thumbnail: '/influncer/mika.PNG',
    meta: 'TikTok · Instagram · OnlyFans',
  },
  {
    href: '/influencer/queenkalin',
    title: 'queenkalin',
    description:
      'Brazilian-born creator @xqueenkalin with 2.1M+ TikTok followers. Viral content, bold personality, and a rapidly growing presence across platforms.',
    badge: 'PROFILE',
    emoji: '👑',
    meta: 'TikTok · Instagram',
  },
  {
    href: '/influencer/eden-gross',
    title: 'Eden Gross',
    description:
      'TikTok dance and lifestyle creator @eden.gross with nearly 1 million followers and 43.6 million total likes. Known for high-energy dance content and authentic personality.',
    badge: 'PROFILE',
    thumbnail: '/influncer/eden_gross.PNG',
    meta: 'TikTok · Instagram',
  },
  {
    href: '/influencer/tren-twins',
    title: 'Tren Twins',
    description:
      'Michael and Christian Gaiera — identical twin bodybuilders who became fitness sensations on YouTube and TikTok. Known for their extreme training and unfiltered content.',
    badge: 'PROFILE',
    thumbnail: '/influncer/tren_twins_wiki.PNG',
    meta: 'YouTube · TikTok · Fitness',
  },
  {
    href: '/influencer/diamond-gym',
    title: 'Diamond Gym',
    description:
      'The legendary gym that produced some of the biggest names in fitness content. A cultural hub for bodybuilding and creator culture in the United States.',
    badge: 'PROFILE',
    thumbnail: '/influncer/Diamond Gym.PNG',
    meta: 'Fitness · Bodybuilding · Culture',
  },
  {
    href: '/influencer/daddywellness',
    title: 'DaddyWellness',
    description:
      'Health, wellness, and lifestyle content creator pushing fitness culture forward. Candid routines, supplement reviews, and motivational content for a dedicated audience.',
    badge: 'PROFILE',
    thumbnail: '/influncer/daddy_wellness.jpg',
    meta: 'Wellness · Lifestyle · YouTube',
  },
  {
    href: '/influencer/yellz0',
    title: 'yellz0',
    description:
      'Popular content creator known for bold, unfiltered takes and viral moments. Building an audience across TikTok and Instagram with authentic personality-driven content.',
    badge: 'PROFILE',
    thumbnail: '/influncer/yellz0_what_cup_size.PNG',
    meta: 'TikTok · Instagram',
  },
  {
    href: '/influencer/iman-gadzhi',
    title: 'Iman Gadzhi',
    description:
      'Entrepreneur and social media educator who built a business empire before 25. Known for SMMA coaching, YouTube education, and Agency Navigator.',
    badge: 'PROFILE',
    emoji: '💼',
    meta: 'YouTube · Business · Education',
  },
  {
    href: '/influencer/serge-gatari',
    title: 'Serge Gatari',
    description:
      'Business educator and content creator in the online marketing and agency space. Known for community building, client acquisition strategy, and business growth content.',
    badge: 'PROFILE',
    emoji: '📈',
    meta: 'YouTube · Business · Marketing',
  },
  {
    href: '/influencer/bryson-dechambeau',
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

const LATEST_NEWS = [
  {
    href: '/influencer/mrbeast-launches-beast-games-season-2-casting',
    title: 'MrBeast Launches Beast Games Season 2 Casting',
    description:
      'MrBeast opens casting for the next season of Beast Games — the record-breaking Amazon Prime competition series. Applications are live now.',
    badge: 'NEWS',
    badgeStyle: 'breaking' as const,
    emoji: '🎬',
    meta: '2026 · MrBeast · Amazon Prime',
  },
  {
    href: '/influencer/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube',
    title: "Steve Will Do It Kicked Off Logan Paul's Podcast — Making an Official Return to YouTube",
    description:
      "Steve Will Do It was removed from Logan Paul's IMPAULSIVE podcast amid controversy. Now he's staging a full comeback on his own YouTube channel.",
    badge: 'NEWS',
    emoji: '📺',
    meta: '2026 · YouTube · Creator Drama',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function InfluencerHubPage() {
  return (
    <SEOWrapper slug="/influencer">

      {/* Breadcrumb bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Influencer', item: '/influencer' },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="INFLUENCER HUB"
        badgeColor="from-purple-600 to-pink-600"
        title="Influencer Hub"
        subtitle="Profiles, news, and culture covering the biggest names in content creation — fitness, YouTube, golf, and beyond."
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
            { label: 'Updated', value: '2026' },
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
          <div className="space-y-4">
            {LATEST_NEWS.map((article) => (
              <Hub.Card
                key={article.href}
                href={article.href}
                title={article.title}
                description={article.description}
                badge={article.badge}
                badgeStyle={article.badgeStyle ?? 'default'}
                emoji={article.emoji}
                meta={article.meta}
              />
            ))}
          </div>
        </Hub.Section>

        {/* ── Browse by Category ─────────────────────────────────────────── */}
        <Hub.Section title="Browse by Category" icon="🗂️" variant="card">
          <Hub.LinkGrid
            columns={3}
            items={[
              {
                href: '/influencer/tren-twins',
                emoji: '💪',
                label: 'Fitness',
                sub: 'Tren Twins, Diamond Gym, DaddyWellness',
              },
              {
                href: '/influencer/iman-gadzhi',
                emoji: '💼',
                label: 'Business',
                sub: 'Iman Gadzhi, Serge Gatari',
              },
              {
                href: '/influencer/bryson-dechambeau',
                emoji: '⛳',
                label: 'Sports',
                sub: 'Bryson DeChambeau',
              },
              {
                href: '/influencer/mika-lafuente',
                emoji: '✨',
                label: 'Lifestyle',
                sub: 'Mika Lafuente, queenkalin, yellz0',
              },
              {
                href: '/influencer/mrbeast-launches-beast-games-season-2-casting',
                emoji: '🎬',
                label: 'YouTube',
                sub: 'MrBeast, Steve Will Do It',
              },
              {
                href: '/influencer',
                emoji: '🌐',
                label: 'All Influencers',
                sub: 'Full directory',
              },
            ]}
          />
        </Hub.Section>

      </Hub>
    </SEOWrapper>
  );
}
