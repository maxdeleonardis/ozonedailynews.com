import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { SEOWrapper } from '@/components/SEOWrapper';

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Rainbow Six Siege — News, Operators, Maps & Esports | ObjectWire',
  description:
    "Complete Rainbow Six Siege coverage — Year 11 season updates, new operators, map reworks, ranked meta, esports tournaments, and Ubisoft's tactical FPS roadmap for 2026.",
  keywords: [
    'Rainbow Six Siege',
    'R6 Siege',
    'Rainbow Six Siege Year 11',
    'Rainbow Six Siege operators',
    'Rainbow Six Siege maps',
    'Rainbow Six Siege esports',
    'Siege ranked',
    'Ubisoft',
    'tactical shooter',
    'R6 esports',
    'Six Invitational',
  ],
  openGraph: {
    title: 'Rainbow Six Siege — News, Operators & Esports | ObjectWire',
    description:
      'Year 11 updates, new operators, competitive meta, and esports coverage for Ubisoft\'s tactical FPS.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/rainbow-6-siege',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function RainbowSixSiegeHubPage() {
  return (
    <SEOWrapper slug="/video-games/rainbow-6-siege">
      
      {/* Breadcrumb bar */}
      <Hub.Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Video Games', href: '/video-games' },
          { label: 'Rainbow Six Siege' },
        ]}
      />

      <Hub
        badge="RAINBOW SIX SIEGE"
        badgeColor="from-amber-500 to-orange-600"
        title="Rainbow Six Siege"
        subtitle="Ubisoft's genre-defining tactical shooter — 10+ years of evolving operators, destructible environments, and one of the most competitive esports scenes in gaming."
        updatedAt="2026-03-03"
        meta={
          <>
            <span>🎯 Tactical FPS</span>
            <span className="hidden md:inline">•</span>
            <span>🖥️ PC · PS5 · Xbox</span>
            <span className="hidden md:inline">•</span>
            <span>🏆 Year 11 Active</span>
          </>
        }
      >
        {/* ── Quick Facts ────────────────────────────────────────────────── */}
        <Hub.InfoGrid
          title="Quick Facts"
          icon="📋"
          items={[
            { label: 'Developer', value: 'Ubisoft Montreal' },
            { label: 'Initial Release', value: 'Dec 1, 2015' },
            { label: 'Current Season', value: 'Year 11 · Season 1' },
            { label: 'Total Operators', value: '70+' },
            { label: 'Platforms', value: 'PC · PS5 · Xbox' },
            { label: 'Genre', value: 'Tactical FPS' },
            { label: 'Player Count', value: '60M+ Lifetime' },
            { label: 'Esports League', value: 'R6 Esports Global' },
          ]}
          columns={4}
        />

        {/* ── Stat Bar ───────────────────────────────────────────────────── */}
        <Hub.StatBar
          accentColor="text-amber-400"
          items={[
            { value: '70+', label: 'Operators' },
            { value: '20+', label: 'Maps' },
            { value: '10', label: 'Years Live' },
            { value: '60M+', label: 'Players' },
          ]}
        />

        {/* ── TOC ────────────────────────────────────────────────────────── */}
        <Hub.TOC
          items={[
            { id: 'year-11', label: 'Year 11 Updates' },
            { id: 'operators', label: 'Operators & Meta' },
            { id: 'maps', label: 'Maps' },
            { id: 'esports', label: 'Esports' },
            { id: 'history', label: 'Game History' },
            { id: 'related', label: 'Related Coverage' },
          ]}
        />

        {/* ── Year 11 Updates ────────────────────────────────────────────── */}
        <Hub.Section id="year-11" title="Year 11 Updates" icon="🆕" variant="highlight">
          <Hub.Prose>
            <p>
              Rainbow Six Siege entered its <strong>eleventh year</strong> of live service in early 2026,
              making it one of the longest-running competitive shooters in gaming history.
              Ubisoft Montreal continues to deliver seasonal content drops with new operators,
              map reworks, balancing passes, and quality-of-life improvements.
            </p>
            <p>
              Year 11 Season 1 launched in <strong>March 2026</strong> with a new attacking operator,
              a full rework of the Bartlett University map, and significant changes to the ranked
              progression system including a new Emerald rank tier.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.CardGrid columns={2}>
              <Hub.Card
                href="/video-games/rainbow-6-siege"
                title="Year 11 Season 1 — Full Patch Notes"
                description="New operator, Bartlett U. rework, Emerald rank, and all weapon balancing changes for Y11S1."
                badge="NEW SEASON"
                badgeStyle="historic"
                emoji="📝"
                publishedAt="2026-03-01"
              />
              <Hub.Card
                href="/video-games/rainbow-6-siege"
                title="Year 11 Roadmap Revealed"
                description="Ubisoft outlines four seasons of content for 2026 — two new operators, three map reworks, and a new game mode."
                badge="ROADMAP"
                emoji="🗺️"
                publishedAt="2026-02-15"
              />
            </Hub.CardGrid>
          </div>
        </Hub.Section>

        {/* ── Operators & Meta ────────────────────────────────────────────── */}
        <Hub.Section id="operators" title="Operators & Meta" icon="🛡️" variant="card">
          <Hub.Prose>
            <p>
              With over <strong>70 operators</strong> spanning Attackers and Defenders, Siege&apos;s roster
              offers unmatched tactical depth. Each operator brings unique gadgets, loadouts,
              and playstyles that shape the competitive meta every season.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.Table
              columns={[
                { key: 'role', label: 'Role', bold: true },
                { key: 'operator', label: 'Top Picks (Y11S1)' },
                { key: 'pickRate', label: 'Pick Rate', align: 'center' },
                { key: 'winRate', label: 'Win Delta', align: 'center' },
              ]}
              rows={[
                { role: '🔵 Attacker', operator: 'Ace', pickRate: '42%', winRate: '+1.8%' },
                { role: '🔵 Attacker', operator: 'Iana', pickRate: '38%', winRate: '+2.1%' },
                { role: '🔵 Attacker', operator: 'Thatcher', pickRate: '35%', winRate: '+0.9%' },
                { role: '🟠 Defender', operator: 'Mute', pickRate: '45%', winRate: '+1.5%' },
                { role: '🟠 Defender', operator: 'Jäger', pickRate: '40%', winRate: '+0.7%' },
                { role: '🟠 Defender', operator: 'Smoke', pickRate: '33%', winRate: '+2.3%' },
              ]}
            />
          </div>
        </Hub.Section>

        {/* ── Maps ────────────────────────────────────────────────────────── */}
        <Hub.Section id="maps" title="Maps" icon="🗺️" variant="default">
          <Hub.Prose>
            <p>
              Siege&apos;s map pool rotates seasonally for Ranked play. Year 11 Season 1 features
              the reworked <strong>Bartlett University</strong> returning to competitive rotation
              alongside staples like Clubhouse, Oregon, and Coastline.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.LinkGrid
              columns={4}
              items={[
                { href: '/video-games/rainbow-6-siege', emoji: '🏫', label: 'Bartlett U.', sub: 'Reworked Y11S1' },
                { href: '/video-games/rainbow-6-siege', emoji: '🏠', label: 'Clubhouse', sub: 'Competitive Staple' },
                { href: '/video-games/rainbow-6-siege', emoji: '🌲', label: 'Oregon', sub: 'Fan Favorite' },
                { href: '/video-games/rainbow-6-siege', emoji: '🏖️', label: 'Coastline', sub: 'Ranked Classic' },
                { href: '/video-games/rainbow-6-siege', emoji: '✈️', label: 'Plane', sub: 'Casual Only' },
                { href: '/video-games/rainbow-6-siege', emoji: '🏢', label: 'Consulate', sub: 'Ranked Pool' },
                { href: '/video-games/rainbow-6-siege', emoji: '🗼', label: 'Kafe Dostoyevsky', sub: 'Competitive' },
                { href: '/video-games/rainbow-6-siege', emoji: '🌃', label: 'Nighthaven Labs', sub: 'Year 8 Addition' },
              ]}
            />
          </div>
        </Hub.Section>

        {/* ── Esports ────────────────────────────────────────────────────── */}
        <Hub.Section id="esports" title="Esports" icon="🏆" variant="highlight">
          <Hub.Prose>
            <p>
              Rainbow Six Siege boasts one of gaming&apos;s premier esports circuits. The
              <strong> Six Invitational</strong> — Siege&apos;s annual world championship — features
              a $3M+ prize pool and draws millions of viewers worldwide.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.CardGrid columns={2}>
              <Hub.Card
                href="/video-games/rainbow-6-siege"
                title="Six Invitational 2026"
                description="The biggest R6 tournament returns in February 2026 with 20 teams competing for $3M+ in Montreal, Canada."
                badge="ESPORTS"
                emoji="🏅"
                publishedAt="2026-02-20"
              />
              <Hub.Card
                href="/video-games/rainbow-6-siege"
                title="R6 Global Circuit — Stage 1 Results"
                description="Regional leagues across NA, EU, LATAM, and APAC crown their Stage 1 champions heading into the Major."
                badge="RESULTS"
                emoji="📊"
                publishedAt="2026-02-28"
              />
            </Hub.CardGrid>
          </div>

          <div className="mt-6">
            <Hub.Table
              columns={[
                { key: 'team', label: 'Team', bold: true },
                { key: 'region', label: 'Region' },
                { key: 'titles', label: 'Major Titles', align: 'center' },
              ]}
              rows={[
                { team: 'Team BDS', region: 'EU', titles: '2' },
                { team: 'w7m esports', region: 'LATAM', titles: '1' },
                { team: 'DarkZero', region: 'NA', titles: '1' },
                { team: 'SANDBOX Gaming', region: 'APAC', titles: '0' },
              ]}
            />
          </div>
        </Hub.Section>

        {/* ── Game History ────────────────────────────────────────────────── */}
        <Hub.Section id="history" title="Game History" icon="📖" variant="default">
          <Hub.Prose>
            <p>
              Originally launched on <strong>December 1, 2015</strong>, Rainbow Six Siege was Ubisoft&apos;s
              bold bet on a live-service tactical shooter. After a rocky launch with server issues and
              limited content, the game grew into one of the decade&apos;s most successful multiplayer titles
              through consistent free updates, operator additions, and a thriving esports ecosystem.
            </p>
            <p>
              Key milestones include the <strong>Operation Health</strong> initiative (Year 2) that
              prioritized stability over new content, the introduction of the <strong>attacker repick</strong>
              system (Year 7) that revolutionized competitive play, and the transition to a
              <strong> cross-platform </strong> ecosystem (Year 8) unifying PC, PlayStation, and Xbox
              player bases.
            </p>
          </Hub.Prose>
        </Hub.Section>

        {/* ── Related Coverage ────────────────────────────────────────────── */}
        <Hub.Section id="related" title="Related Coverage" icon="🔗" variant="default">
          <Hub.LinkGrid
            columns={3}
            items={[
              {
                href: '/video-games',
                emoji: '🎮',
                label: 'All Video Games',
                sub: 'Full gaming hub',
              },
              {
                href: '/microsoft/xbox',
                emoji: '🟩',
                label: 'Xbox Coverage',
                sub: 'Console & Game Pass news',
              },
              {
                href: '/tech',
                emoji: '💻',
                label: 'Gaming Tech',
                sub: 'Hardware & peripherals',
              },
            ]}
          />
        </Hub.Section>

        {/* ── CTA Banner ─────────────────────────────────────────────────── */}
        <Hub.Banner gradient="from-amber-600 to-orange-600">
          <p className="text-2xl font-bold mb-2">Stay Briefed on Siege</p>
          <p className="text-white/80 mb-4">
            ObjectWire covers every season, every patch, and every major tournament.
          </p>
        </Hub.Banner>
      </Hub>
    </SEOWrapper>
  );
}
