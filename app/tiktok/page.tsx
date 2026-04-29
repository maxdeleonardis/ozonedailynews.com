import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/nav/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';
import { scanAllContent } from '@/lib/content-scanner';

export const dynamic = 'force-dynamic';

const SLUG = '/tiktok';

export const metadata: Metadata = {
  title: 'TikTok | News, Creators & Platform Updates 2026',
  description:
    'ObjectWire TikTok hub: creator profiles, platform policy, viral trends, and TikTok news coverage. Stay current on the biggest short-form video platform in 2026.',
  keywords: [
    'TikTok news 2026',
    'TikTok creators',
    'TikTok platform updates',
    'TikTok ban',
    'TikTok algorithm',
    'TikTok influencers',
    'short-form video',
    'TikTok trends',
    'ByteDance',
    'TikTok US',
    'TikTok content creators',
    'TikTok viral',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'TikTok | News, Creators & Platform Updates 2026',
    description:
      'Creator profiles, platform policy, viral trends, and breaking TikTok news from ObjectWire. Updated 2026.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Hub | ObjectWire',
    description:
      'TikTok news, creator profiles, and platform coverage from ObjectWire.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED CREATORS (crosslinked from /influencer)
// ─────────────────────────────────────────────────────────────────────────────

const FEATURED_CREATORS = [
  {
    href: '/influencer/ari-kytsya',
    title: 'Ari Kytsya',
    description:
      'Seattle-based model and content creator with millions of followers across TikTok and Instagram. Known for fashion, lifestyle, and a loyal international fanbase.',
    badge: 'CREATOR',
    emoji: '✨',
    meta: 'TikTok · Instagram · Model',
  },
  {
    href: '/influencer/lean-beef-patty',
    title: 'Lean Beef Patty',
    description:
      'Fitness and lifestyle creator with a massive TikTok presence. Known for workout content, candid personality, and building a dedicated fitness community.',
    badge: 'CREATOR',
    emoji: '💪',
    meta: 'TikTok · Fitness',
  },
  {
    href: '/influencer/abby-berner',
    title: 'Abby Berner',
    description:
      'Lifestyle and content creator with a strong TikTok following. Known for relatable, personality-driven content and growing cross-platform presence.',
    badge: 'CREATOR',
    emoji: '🌟',
    meta: 'TikTok · Lifestyle',
  },
  {
    href: '/influencer/colleen-sheehan',
    title: 'Colleen Sheehan',
    description:
      'Creator and personality with an engaged TikTok audience. Covers lifestyle, humor, and day-in-the-life content that resonates with a broad demographic.',
    badge: 'CREATOR',
    emoji: '🎬',
    meta: 'TikTok · Lifestyle',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default async function TikTokHubPage() {
  const allArticles = await scanAllContent();

  const tiktokArticles = allArticles.filter(
    (a) =>
      a.slug.startsWith('/tiktok/'),
  );

  return (
    <SEOWrapper slug={SLUG}>

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'TikTok', item: '/tiktok' },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="TIKTOK"
        badgeColor="from-black to-gray-700"
        title="TikTok"
        subtitle="News, creator profiles, platform policy, and viral trends from the world's leading short-form video platform. Verified coverage updated 2026."
        meta={
          <>
            <span>🎥 Creator Profiles</span>
            <span className="hidden md:inline">•</span>
            <span>📰 Platform News</span>
            <span className="hidden md:inline">•</span>
            <span>🔥 Viral Trends</span>
          </>
        }
      >

        {/* Coverage Overview */}
        <Hub.InfoGrid
          title="Coverage Overview"
          icon="📊"
          items={[
            { label: 'Creator Profiles', value: `${FEATURED_CREATORS.length}` },
            { label: 'Platform', value: 'ByteDance / TikTok' },
            { label: 'Content Focus', value: 'Creators · Policy · Trends' },
            { label: 'Updated', value: '2026' },
          ]}
          columns={4}
        />

        {/* Latest TikTok News */}
        <Hub.Section title="Latest Coverage" icon="📰" variant="card">
          <div className="space-y-4">
            <Hub.Card
              href="/tiktok/seedance-2.0"
              title="Seedance 2.0 | TikTok AI Video Generation"
              description="TikTok's next-generation AI video creation tool Seedance 2.0 raises the bar for short-form AI-generated content, enabling creator-level quality at consumer scale."
              badge="AI"
              emoji="🤖"
              meta="2026 · Tech · TikTok"
            />
          </div>
        </Hub.Section>

        {/* Top Creators on TikTok */}
        <Hub.Section title="Top Creators on TikTok" icon="🌟" variant="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURED_CREATORS.map((creator) => (
              <Hub.Card
                key={creator.href}
                href={creator.href}
                title={creator.title}
                description={creator.description}
                badge={creator.badge}
                emoji={creator.emoji}
                meta={creator.meta}
              />
            ))}
          </div>
        </Hub.Section>

        {/* More TikTok coverage */}
        {tiktokArticles.length > 0 && (
          <Hub.Section title="More TikTok Coverage" icon="🎬" variant="default">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tiktokArticles.slice(0, 8).map((article) => (
                <Hub.Card
                  key={article.slug}
                  href={article.slug}
                  title={article.title}
                  badge="NEWS"
                  meta={article.date}
                />
              ))}
            </div>
          </Hub.Section>
        )}

        {/* Related hubs */}
        <Hub.Section title="Related Hubs" icon="🔗" variant="default">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Hub.Card
              href="/influencer"
              title="Influencer Hub"
              description="Full profiles, news, and culture covering the biggest names in content creation across all platforms."
              emoji="🎥"
              meta="Profiles · News · Culture"
            />
            <Hub.Card
              href="/youtube"
              title="YouTube Hub"
              description="Creator news, platform updates, and coverage of the biggest names on YouTube."
              emoji="▶️"
              meta="Creators · Platform · News"
            />
            <Hub.Card
              href="/entertainment"
              title="Entertainment Hub"
              description="Streaming, film, TV, and entertainment industry coverage from ObjectWire."
              emoji="🎬"
              meta="Streaming · Film · TV"
            />
          </div>
        </Hub.Section>

      </Hub>
    </SEOWrapper>
  );
}
