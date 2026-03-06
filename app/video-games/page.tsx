import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import { scanAllContent, filterByCategory } from '@/lib/content-scanner';

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Video Games — News, Reviews & Guides | ObjectWire',
  description:
    "ObjectWire's complete video games coverage hub — GTA 6, Marvel's Wolverine, Resident Evil Requiem, Nintendo, anime battle royales, and the latest gaming news.",
  keywords: [
    'video games',
    'GTA 6',
    "Marvel's Wolverine",
    'Resident Evil Requiem',
    '007 First Light',
    'Nintendo',
    'MHA Ultra Rumble',
    'anime games',
    'gaming news',
    'game reviews',
    'PS5',
    'Xbox Series X',
  ],
  openGraph: {
    title: 'Video Games — News, Reviews & Guides | ObjectWire',
    description:
      "ObjectWire's complete video games hub covering GTA 6, Marvel's Wolverine, Resident Evil Requiem, Nintendo, and the latest gaming news.",
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/video-games',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// STATIC FEATURED GAMES (always shown, curated for quality)
// ─────────────────────────────────────────────────────────────────────────────

const FEATURED_GAMES = [
  {
    href: '/video-games/gta-6',
    title: 'Grand Theft Auto VI',
    description:
      'November 19, 2026 — PS5 & Xbox Series X/S. Vice City returns with Lucia as the first female GTA protagonist. Speculated $90–$124 price tag makes it the most expensive game launch ever.',
    badge: 'Nov 19, 2026',
    badgeStyle: 'historic' as const,
    emoji: '🌴',
    meta: 'Nov 19, 2026 · Rockstar Games',
  },
  {
    href: '/video-games/marvels-wolverine',
    title: "Marvel's Wolverine",
    description:
      "Insomniac Games brings Logan to PS5 in an M-rated action adventure — the same studio behind Spider-Man 2. Expected 2026.",
    badge: 'UPCOMING',
    emoji: '🐺',
    meta: '2026 · Insomniac Games · PS5',
  },
  {
    href: '/video-games/resident-evil-requiem',
    title: 'Resident Evil: Requiem',
    description:
      "Capcom's next mainline Resident Evil entry. A fresh survival horror chapter built for PS5 — continuing one of gaming's most beloved franchises.",
    badge: 'UPCOMING',
    emoji: '🧟',
    meta: '2026 · Capcom · PS5',
  },
  {
    href: '/video-games/007-first-light',
    title: '007: First Light',
    description:
      "IO Interactive's James Bond origin story — next-gen spy thriller from the creators of the Hitman World of Assassination trilogy.",
    badge: 'UPCOMING',
    emoji: '🔫',
    meta: 'TBA · IO Interactive · Multi-Platform',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default async function VideoGamesHubPage() {
  // Auto-discovers articles from filesystem — updates automatically as new
  // page.tsx files are added under app/video-games/ with section: 'Video Games'
  const allArticles = await scanAllContent();
  const gameArticles = filterByCategory(allArticles, 'VIDEO GAMES');

  // Deduplicate: exclude slugs already in FEATURED_GAMES
  const featuredSlugs = new Set(FEATURED_GAMES.map((g) => g.href.slice(1)));
  const discoveredArticles = gameArticles.filter(
    (a) => !featuredSlugs.has(a.slug)
  );

  return (
    <SEOWrapper slug="/video-games">
      <NewsArticleSchema
        title="Video Games — News, Reviews & Guides | ObjectWire"
        description="ObjectWire's complete video games coverage hub — GTA 6, Marvel's Wolverine, Resident Evil Requiem, Nintendo, anime games, and the latest gaming news."
        author="ObjectWire Gaming Desk"
        publishedTime="2026-01-01T00:00:00Z"
        modifiedTime={new Date().toISOString()}
        articleUrl="https://www.objectwire.org/video-games"
        section="Video Games"
        keywords={[
          'video games',
          'GTA 6',
          "Marvel's Wolverine",
          'Resident Evil',
          'Nintendo',
          'gaming',
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="VIDEO GAMES"
        badgeColor="from-violet-600 to-purple-500"
        title="🎮 Video Games"
        subtitle="The biggest games, the sharpest reviews, and the latest news — from GTA 6 and Marvel's Wolverine to Nintendo and anime battle royales."
        meta={
          <>
            <span>🕹️ Multi-Platform Coverage</span>
            <span className="hidden md:inline">•</span>
            <span>🗓️ Updated Continuously</span>
            <span className="hidden md:inline">•</span>
            <span>🌍 Global Gaming News</span>
          </>
        }
      >

        {/* ── Coverage Overview ─────────────────────────────────────────── */}
        <Hub.InfoGrid
          title="Coverage Overview"
          icon="📊"
          items={[
            {
              label: 'Articles Published',
              value: `${gameArticles.length > 0 ? gameArticles.length : '10'}+`,
            },
            { label: 'GTA 6 Launch', value: 'Nov 19, 2026' },
            { label: 'Platforms Covered', value: 'PS5 · Xbox · PC · Switch' },
            { label: 'Games Tracked', value: '20+' },
          ]}
          columns={4}
        />

        {/* ── Most Anticipated Games ────────────────────────────────────── */}
        <Hub.Section title="Most Anticipated Games" icon="🔥" variant="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURED_GAMES.map((game) => (
              <Hub.Card
                key={game.href}
                href={game.href}
                title={game.title}
                description={game.description}
                badge={game.badge}
                badgeStyle={game.badgeStyle ?? 'default'}
                emoji={game.emoji}
                meta={game.meta}
              />
            ))}
          </div>
        </Hub.Section>

        {/* ── Anime & Seasonal Games ────────────────────────────────────── */}
        <Hub.Section title="Anime & Seasonal Games" icon="⚡" variant="default">
          <div className="space-y-4">
            <Hub.Card
              href="/video-games/top-10-anime-games-2026"
              title="Top 10 Anime Games of 2026"
              description="Rankings of the best seasonal anime games — My Hero Ultra Rumble, Dragon Ball Legends, Jujutsu Kaisen, and more. Complete player counts and tier analysis."
              badge="RANKED"
              emoji="🏆"
              meta="2026 · ObjectWire Gaming Desk"
            />
            <Hub.Card
              href="/video-games/mha"
              title="My Hero Academia Games Hub"
              description="Complete coverage of the My Hero Academia gaming universe — Ultra Rumble seasons, All's Justice, character guides, and competitive scene."
              emoji="🦸"
              meta="Updated Seasonally · Free-to-Play"
            />
            <Hub.Card
              href="/video-games/mha/alls-justice"
              title="MHA: All's Justice — Final War Arc 3v3 Fighter"
              description="Released February 6, 2026. PlayStation 5, Xbox Series X/S, and PC. The Final War Arc comes to life in spectacular 3v3 battles."
              badge="RELEASED"
              emoji="💥"
              meta="Feb 6, 2026 · Bandai Namco"
            />
            <Hub.Card
              href="/video-games/mha/ultra-rumble"
              title="My Hero Ultra Rumble — Complete Wiki & Guide"
              description="Comprehensive guide to the free-to-play 24-player battle royale. Characters, seasons, meta rankings, and the competitive scene."
              emoji="🌀"
              meta="Free-to-Play · PS4/PS5 · Xbox · PC · Switch"
            />
          </div>
        </Hub.Section>

        {/* ── Auto-Discovered Articles (updates as content is added) ────── */}
        {discoveredArticles.length > 0 && (
          <Hub.Section title="All Gaming Coverage" icon="📰" variant="default">
            <div className="space-y-4">
              {discoveredArticles.slice(0, 10).map((article) => (
                <Hub.Card
                  key={article.slug}
                  href={`/${article.slug}`}
                  title={article.title}
                  description={article.excerpt}
                  badge={article.urgent ? 'BREAKING' : undefined}
                  badgeStyle={article.urgent ? 'breaking' : 'default'}
                  meta={`${article.date} · ${article.author}`}
                />
              ))}
            </div>
            {discoveredArticles.length > 10 && (
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  {discoveredArticles.length} total articles in Video Games coverage
                </p>
              </div>
            )}
          </Hub.Section>
        )}

        {/* ── Nintendo ──────────────────────────────────────────────────── */}
        <Hub.Section title="Nintendo" icon="🔴" variant="highlight">
          <div className="space-y-4">
            <Hub.Card
              href="/video-games/nintendo"
              title="Nintendo Co., Ltd. — Company Profile"
              description="Founded 1889, Nintendo is the creator of Mario, Zelda, Pokémon, and the Switch. Full company history, franchises, financials, and the road to Switch 2."
              emoji="🍄"
              meta="Complete Profile · Updated 2026"
            />
            <Hub.Card
              href="/video-games/nintendo/google-project-genie-ai-knockoffs"
              title="Google's Project Genie AI Generates Nintendo Knockoffs"
              description="Google's AI tool creates playable Nintendo-style games — raising copyright and legal concerns for the Japanese gaming giant."
              badge="AI"
              emoji="🤖"
              meta="2026 · Technology & Gaming"
            />
          </div>
        </Hub.Section>

        {/* ── Browse by Platform ────────────────────────────────────────── */}
        <Hub.Section title="Browse by Platform" icon="🕹️" variant="card">
          <Hub.LinkGrid
            columns={4}
            items={[
              {
                href: '/video-games/gta-6',
                emoji: '🎮',
                label: 'PlayStation 5',
                sub: 'GTA 6, Wolverine, RE Requiem',
              },
              {
                href: '/video-games/gta-6',
                emoji: '🟩',
                label: 'Xbox Series X/S',
                sub: 'GTA 6, Game Pass coverage',
              },
              {
                href: '/video-games/nintendo',
                emoji: '🔴',
                label: 'Nintendo Switch 2',
                sub: 'Mario, Zelda & hybrid gaming',
              },
              {
                href: '/video-games/top-10-anime-games-2026',
                emoji: '💻',
                label: 'PC Gaming',
                sub: 'Steam, Epic & anime games',
              },
            ]}
          />
        </Hub.Section>

        {/* ── Browse by Genre ───────────────────────────────────────────── */}
        <Hub.Section title="Browse by Genre" icon="🎯" variant="default">
          <Hub.LinkGrid
            columns={4}
            items={[
              {
                href: '/video-games/top-10-anime-games-2026',
                emoji: '⚡',
                label: 'Anime Games',
                sub: 'MHA, Dragon Ball, JJK & more',
              },
              {
                href: '/video-games/gta-6',
                emoji: '🌴',
                label: 'Open World',
                sub: 'GTA 6 & sandbox epics',
              },
              {
                href: '/video-games/resident-evil-requiem',
                emoji: '🧟',
                label: 'Survival Horror',
                sub: 'Resident Evil series',
              },
              {
                href: '/video-games/mha/alls-justice',
                emoji: '🥊',
                label: 'Fighting Games',
                sub: "MHA: All's Justice & more",
              },
            ]}
          />
        </Hub.Section>

        {/* ── Related Coverage ──────────────────────────────────────────── */}
        <Hub.Section title="Related Coverage" icon="🔗" variant="default">
          <Hub.LinkGrid
            columns={3}
            items={[
              {
                href: '/tech',
                emoji: '💾',
                label: 'Gaming Tech',
                sub: 'GPUs, consoles, and hardware',
              },
              {
                href: '/entertainment',
                emoji: '🎬',
                label: 'Entertainment',
                sub: 'Video game adaptations & media',
              },
              {
                href: '/finance',
                emoji: '📈',
                label: 'Gaming Industry',
                sub: 'Take-Two, Sony, Nintendo stocks',
              },
            ]}
          />
        </Hub.Section>

      </Hub>
    </SEOWrapper>
  );
}
