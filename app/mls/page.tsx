import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/nav/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';
import { scanAllContent } from '@/lib/content-scanner';

export const dynamic = 'force-dynamic';
const SLUG = '/mls';

export const metadata: Metadata = {
  title: 'MLS | Major League Soccer News, Scores & Analysis',
  description:
    'ObjectWire MLS coverage hub. Major League Soccer standings, transfer news, expansion updates, Inter Miami, LAFC, match analysis, and 2026 season coverage.',
  keywords: [
    'MLS',
    'Major League Soccer',
    'MLS 2026',
    'MLS standings',
    'MLS news',
    'Inter Miami',
    'LAFC',
    'MLS transfers',
    'MLS expansion',
    'MLS Cup',
    'soccer news',
    'MLS scores',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'MLS | Major League Soccer News & Analysis',
    description:
      'Complete MLS coverage from ObjectWire. Transfers, standings, expansion, match reports, and 2026 season analysis.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLS | Major League Soccer News & Analysis',
    description: 'Transfers, standings, expansion, and 2026 season coverage from ObjectWire.',
  },
};

const FEATURED_ARTICLES = [
  {
    href: '/mls/lafc-black-gold-lockdown',
    title: 'Black & Gold Lockdown | How LAFC Built the West\'s Best Defense',
    description:
      'LAFC have conceded just 7 goals through 8 MLS matches in 2026, the fewest in the Western Conference, while still averaging 2.1 goals per game on offense.',
    badge: 'ANALYSIS',
    badgeStyle: 'default' as const,
    emoji: '⚫',
    meta: 'Apr 4, 2026 · LAFC',
  },
  {
    href: '/mls/san-diego-fc-1904-fairytale',
    title: 'The 1904 Fairytale | San Diego FC Defies the Expansion Curse',
    description:
      'San Diego FC are 5W-3D-0L through 8 matches in their inaugural MLS season, the best expansion-year start in league history.',
    badge: 'EXPANSION',
    badgeStyle: 'historic' as const,
    emoji: '🏟️',
    meta: 'Apr 4, 2026 · San Diego FC',
  },
  {
    href: '/mls/san-jose-quakes-defensive-resurgence',
    title: 'Quakes 2.0 | Timo Werner\'s Golden Boot Charge in San Jose',
    description:
      'San Jose have conceded just 9 goals in 8 matches while Timo Werner leads MLS with 7 goals. A complete transformation from the team that finished 27th in 2025.',
    badge: 'GOLDEN BOOT',
    badgeStyle: 'default' as const,
    emoji: '🥇',
    meta: 'Apr 4, 2026 · San Jose Earthquakes',
  },
];

export default async function MLSHubPage() {
  const allArticles = await scanAllContent();
  const mlsArticles = allArticles.filter(
    (a) =>
      a.category.toLowerCase() === 'sports' ||
      a.slug.startsWith('mls/') ||
      a.slug.startsWith('mls-')
  );
  const featuredSlugs = new Set(FEATURED_ARTICLES.map((a) => a.href.slice(1)));
  const discoveredArticles = mlsArticles.filter((a) => !featuredSlugs.has(a.slug));

  return (
    <SEOWrapper slug="/mls">
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'MLS', item: '/mls' },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="MLS"
        badgeColor="from-emerald-600 to-green-500"
        title="⚽ Major League Soccer"
        subtitle="Transfer news, match analysis, expansion updates, and full 2026 season coverage across all 30 MLS clubs."
        updatedAt="2026-04-04T12:00:00Z"
        meta={
          <>
            <span>🏆 MLS Cup 2026</span>
            <span className="hidden md:inline">•</span>
            <span>📊 30 Clubs</span>
            <span className="hidden md:inline">•</span>
            <span>🌎 North America</span>
          </>
        }
      >
        <Hub.InfoGrid
          title="Coverage Overview"
          icon="📊"
          items={[
            { label: 'Articles Published', value: `${mlsArticles.length + FEATURED_ARTICLES.length}+` },
            { label: 'Season', value: '2026' },
            { label: 'Clubs Tracked', value: '30' },
            { label: 'Focus', value: 'Transfers & Expansion' },
          ]}
          columns={4}
        />

        <Hub.Section title="Featured Coverage" icon="🔥" variant="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURED_ARTICLES.map((article) => (
              <Hub.Card
                key={article.href}
                href={article.href}
                title={article.title}
                description={article.description}
                badge={article.badge}
                badgeStyle={article.badgeStyle}
                emoji={article.emoji}
                meta={article.meta}
              />
            ))}
          </div>
        </Hub.Section>

        <Hub.Section title="Key Clubs to Watch" icon="🏟️" variant="highlight">
          <Hub.LinkGrid
            items={[
              { href: '/mls/lafc-black-gold-lockdown', emoji: '⚫', label: 'LAFC', sub: 'Best Defense in the West' },
              { href: '/mls/san-diego-fc-1904-fairytale', emoji: '🔵', label: 'San Diego FC', sub: 'Unbeaten Expansion Start' },
              { href: '/mls/san-jose-quakes-defensive-resurgence', emoji: '🟡', label: 'San Jose Earthquakes', sub: 'Werner\'s Golden Boot Charge' },
              { href: '/mls', emoji: '🩷', label: 'Inter Miami', sub: 'Defending Champions' },
              { href: '/mls', emoji: '🔴', label: 'Atlanta United', sub: 'Eastern Conference' },
              { href: '/mls', emoji: '🟢', label: 'Austin FC', sub: 'Western Conference' },
              { href: '/mls', emoji: '🔵', label: 'NYCFC', sub: 'Eastern Conference' },
              { href: '/mls', emoji: '🟡', label: 'Columbus Crew', sub: 'Eastern Conference' },
            ]}
            columns={4}
          />
        </Hub.Section>

        <Hub.Section title="2026 Season Calendar" icon="📅" variant="default">
          <Hub.Table
            columns={[
              { key: 'date', label: 'Date', bold: true },
              { key: 'event', label: 'Event' },
            ]}
            rows={[
              { date: 'February 22, 2026', event: 'MLS 2026 Regular Season Kickoff' },
              { date: 'April 2026', event: 'Concacaf Champions Cup Group Stage' },
              { date: 'July 15, 2026', event: 'MLS All-Star Game, Los Angeles' },
              { date: 'August 2026', event: 'MLS Leagues Cup' },
              { date: 'October 2026', event: 'Decision Day (Regular Season Finale)' },
              { date: 'November 2026', event: 'MLS Cup Playoffs Begin' },
              { date: 'December 12, 2026', event: 'MLS Cup 2026 Final' },
            ]}
          />
        </Hub.Section>

        {discoveredArticles.length > 0 && (
          <Hub.Section title="All MLS Coverage" icon="📰" variant="default">
            <div className="space-y-4">
              {discoveredArticles.slice(0, 12).map((article) => (
                <Hub.Card
                  key={article.slug}
                  href={`/${article.slug}`}
                  title={article.title}
                  description={article.excerpt}
                  meta={`${article.date} · ${article.author}`}
                />
              ))}
            </div>
          </Hub.Section>
        )}

        <Hub.Banner gradient="from-emerald-600 to-green-500">
          <h3 className="text-2xl font-bold mb-2">Follow ObjectWire for Full MLS Coverage</h3>
          <p className="text-white/80 mb-4">Match reports, transfer analysis, and expansion news delivered weekly.</p>
          <a href="/account" className="inline-block bg-white text-emerald-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            Subscribe
          </a>
        </Hub.Banner>
      </Hub>
    </SEOWrapper>
  );
}
