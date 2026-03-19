import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Rocket League — News, Esports, Ranks & Updates | ObjectWire',
  description:
    "Complete Rocket League coverage — Season 17 updates, RLCS esports, ranked meta, car hitboxes, Psyonix news, and the future of rocket-powered soccer on PC, PS5, Xbox, and Switch.",
  keywords: [
    'Rocket League',
    'Rocket League Season 17',
    'RLCS',
    'Rocket League esports',
    'Rocket League ranks',
    'Psyonix',
    'Rocket League updates',
    'Epic Games',
    'car soccer',
    'rocket-powered soccer',
    'RLCS 2026',
    'Grand Champion',
  ],
  openGraph: {
    title: 'Rocket League — News, Esports & Updates | ObjectWire',
    description:
      'Rocket-powered soccer — Season updates, RLCS esports, ranked guides, and the full Psyonix roadmap.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/rocket-league',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function RocketLeagueHubPage() {
  return (
    <SEOWrapper slug="/rocket-league">
      <NewsArticleSchema
        title="Rocket League — News, Esports, Ranks & Updates"
        description="Complete Rocket League coverage — season updates, RLCS esports, ranked meta, and Psyonix's roadmap."
        author="ObjectWire Gaming Desk"
        publishedTime="2026-03-01T00:00:00Z"
        modifiedTime="2026-03-03T00:00:00Z"
        articleUrl="https://www.objectwire.org/rocket-league"
        section="Video Games"
        keywords={['Rocket League', 'RLCS', 'Psyonix', 'esports', 'ranked']}
      />

      {/* Breadcrumb bar */}
      <Hub.Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Rocket League' },
        ]}
      />

      <Hub
        badge="ROCKET LEAGUE"
        badgeColor="from-blue-500 to-cyan-400"
        title="Rocket League"
        subtitle="Psyonix's rocket-powered soccer phenomenon — simple to learn, impossible to master. One of the most-played free-to-play competitive games on the planet."
        updatedAt="2026-03-03"
        meta={
          <>
            <span>⚽ Vehicular Soccer</span>
            <span className="hidden md:inline">•</span>
            <span>🆓 Free-to-Play</span>
            <span className="hidden md:inline">•</span>
            <span>🖥️ PC · PS5 · Xbox · Switch</span>
          </>
        }
      >
        {/* ── Quick Facts ────────────────────────────────────────────────── */}
        <Hub.InfoGrid
          title="Quick Facts"
          icon="🚗"
          items={[
            { label: 'Developer', value: 'Psyonix (Epic Games)' },
            { label: 'Initial Release', value: 'Jul 7, 2015' },
            { label: 'Free-to-Play Since', value: 'Sep 23, 2020' },
            { label: 'Lifetime Players', value: '100M+' },
            { label: 'Platforms', value: 'PC · PS · Xbox · Switch' },
            { label: 'Genre', value: 'Sports / Vehicular' },
            { label: 'Current Season', value: 'Season 17' },
            { label: 'Esports Circuit', value: 'RLCS' },
          ]}
          columns={4}
        />

        {/* ── Stat Bar ───────────────────────────────────────────────────── */}
        <Hub.StatBar
          accentColor="text-cyan-400"
          items={[
            { value: '100M+', label: 'Players' },
            { value: '11', label: 'Years Live' },
            { value: '6M+', label: 'Peak Daily' },
            { value: '$50M+', label: 'RLCS Prize Pool (Lifetime)' },
          ]}
        />

        {/* ── TOC ────────────────────────────────────────────────────────── */}
        <Hub.TOC
          items={[
            { id: 'season-17', label: 'Season 17 Updates' },
            { id: 'gameplay', label: 'Gameplay & Mechanics' },
            { id: 'ranks', label: 'Ranked System' },
            { id: 'esports', label: 'RLCS Esports' },
            { id: 'history', label: 'Game History' },
            { id: 'related', label: 'Related Coverage' },
          ]}
        />

        {/* ── Season 17 ──────────────────────────────────────────────────── */}
        <Hub.Section id="season-17" title="Season 17 Updates" icon="🆕" variant="highlight">
          <Hub.Prose>
            <p>
              <strong>Season 17</strong> launched in early 2026 with a new arena, the highly requested
              <strong> Tournament Mode 2.0</strong> overhaul, and a refreshed competitive season.
              Psyonix also introduced a limited-time <strong>4v4 Chaos Ranked</strong> playlist,
              giving casual fans a competitive ladder for the first time in the mode&apos;s history.
            </p>
            <p>
              The season pass features over 80 tiers of cosmetic rewards including the
              community-designed <strong>&quot;Nebula&quot; decal series</strong> and a new goal explosion
              set inspired by the RLCS World Championship.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.CardGrid columns={2}>
              <Hub.Card
                href="/rocket-league"
                title="Season 17 Patch Notes Breakdown"
                description="Full analysis of gameplay changes — boost pad respawn adjustments, demo mechanics update, and the new 4v4 Chaos Ranked playlist."
                badge="NEW SEASON"
                badgeStyle="historic"
                emoji="📝"
                publishedAt="2026-02-15"
              />
              <Hub.Card
                href="/rocket-league"
                title="Tournament Mode 2.0 — Everything You Need to Know"
                description="Revamped tournament brackets, improved matchmaking, exclusive rewards, and scheduled weekend events."
                badge="FEATURE"
                emoji="🏟️"
                publishedAt="2026-02-20"
              />
            </Hub.CardGrid>
          </div>
        </Hub.Section>

        {/* ── Gameplay ───────────────────────────────────────────────────── */}
        <Hub.Section id="gameplay" title="Gameplay & Mechanics" icon="🎮" variant="card">
          <Hub.Prose>
            <p>
              Rocket League combines physics-based vehicular gameplay with competitive soccer.
              Players control rocket-powered cars to hit an oversized ball into the opposing
              team&apos;s goal. Despite a simple premise, the game features an
              extraordinarily <strong>deep mechanical skill ceiling</strong> — advanced techniques like
              <strong> air dribbles, flip resets, ceiling shots, </strong> and
              <strong> wave dashes </strong> separate ranks dramatically.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.Table
              columns={[
                { key: 'category', label: 'Category', bold: true },
                { key: 'mechanic', label: 'Key Mechanic' },
                { key: 'difficulty', label: 'Difficulty', align: 'center' },
              ]}
              rows={[
                { category: 'Movement', mechanic: 'Fast Aerials', difficulty: '⭐⭐' },
                { category: 'Movement', mechanic: 'Wave Dash', difficulty: '⭐⭐⭐' },
                { category: 'Offense', mechanic: 'Air Dribble', difficulty: '⭐⭐⭐⭐' },
                { category: 'Offense', mechanic: 'Flip Reset', difficulty: '⭐⭐⭐⭐⭐' },
                { category: 'Defense', mechanic: 'Shadow Defense', difficulty: '⭐⭐⭐' },
                { category: 'Team Play', mechanic: 'Rotation', difficulty: '⭐⭐' },
              ]}
            />
          </div>

          <div className="mt-6">
            <Hub.LinkGrid
              columns={4}
              items={[
                { href: '/rocket-league', emoji: '🚀', label: 'Aerials Guide', sub: 'Beginner → Advanced' },
                { href: '/rocket-league', emoji: '⚡', label: 'Speed & Boost', sub: 'Boost management tips' },
                { href: '/rocket-league', emoji: '🔄', label: 'Rotations', sub: '2v2 & 3v3 positioning' },
                { href: '/rocket-league', emoji: '🎯', label: 'Shooting', sub: 'Power shots & angles' },
              ]}
            />
          </div>
        </Hub.Section>

        {/* ── Ranked System ──────────────────────────────────────────────── */}
        <Hub.Section id="ranks" title="Ranked System" icon="📊" variant="default">
          <Hub.Prose>
            <p>
              Rocket League&apos;s competitive ladder spans <strong>23 ranks</strong> from Bronze I
              to Supersonic Legend. Each rank is divided into three divisions. Players earn
              MMR (matchmaking rating) based on wins and losses, with season rewards locked
              to the highest rank achieved.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.Table
              columns={[
                { key: 'rank', label: 'Rank', bold: true },
                { key: 'mmr', label: 'Approx. MMR (3v3)', align: 'center' },
                { key: 'percentile', label: 'Top %', align: 'center' },
              ]}
              rows={[
                { rank: '🟤 Bronze', mmr: '0 – 295', percentile: '100%' },
                { rank: '⚪ Silver', mmr: '296 – 495', percentile: '85%' },
                { rank: '🟡 Gold', mmr: '496 – 695', percentile: '65%' },
                { rank: '🔵 Platinum', mmr: '696 – 895', percentile: '40%' },
                { rank: '💎 Diamond', mmr: '896 – 1095', percentile: '20%' },
                { rank: '🏅 Champion', mmr: '1096 – 1435', percentile: '7%' },
                { rank: '🔮 Grand Champion', mmr: '1436 – 1715', percentile: '1.5%' },
                { rank: '⚡ Supersonic Legend', mmr: '1716+', percentile: '0.1%' },
              ]}
            />
          </div>
        </Hub.Section>

        {/* ── Esports ────────────────────────────────────────────────────── */}
        <Hub.Section id="esports" title="RLCS Esports" icon="🏆" variant="highlight">
          <Hub.Prose>
            <p>
              The <strong>Rocket League Championship Series (RLCS)</strong> is one of esports&apos;
              most exciting circuits. The 2025–26 season features open qualifiers, regional Majors,
              and the annual <strong>RLCS World Championship</strong> — the pinnacle of competitive
              Rocket League with multi-million-dollar prize pools.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.CardGrid columns={2}>
              <Hub.Card
                href="/rocket-league"
                title="RLCS 2026 World Championship Preview"
                description="The world's best Rocket League teams compete for the title. Regional qualifiers, bracket predictions, and team profiles."
                badge="RLCS"
                badgeStyle="historic"
                emoji="🌍"
                publishedAt="2026-03-01"
              />
              <Hub.Card
                href="/rocket-league"
                title="RLCS Regional Major Results"
                description="NA, EU, SAM, MENA, OCE, APAC, and SSA regional standings heading into the World Championship."
                badge="RESULTS"
                emoji="📊"
                publishedAt="2026-02-25"
              />
            </Hub.CardGrid>
          </div>

          <div className="mt-6">
            <Hub.Table
              columns={[
                { key: 'team', label: 'Team', bold: true },
                { key: 'region', label: 'Region' },
                { key: 'worlds', label: 'World Titles', align: 'center' },
              ]}
              rows={[
                { team: 'Team Vitality', region: 'EU', worlds: '2' },
                { team: 'Gen.G Mobil1 Racing', region: 'NA', worlds: '1' },
                { team: 'FURIA Esports', region: 'SAM', worlds: '1' },
                { team: 'Team Falcons', region: 'MENA', worlds: '1' },
              ]}
            />
          </div>
        </Hub.Section>

        {/* ── History ────────────────────────────────────────────────────── */}
        <Hub.Section id="history" title="Game History" icon="📖" variant="default">
          <Hub.Prose>
            <p>
              Rocket League launched on <strong>July 7, 2015</strong> as a sequel to Psyonix&apos;s
              under-the-radar <em>Supersonic Acrobatic Rocket-Powered Battle-Cars</em> (2008).
              It immediately became a PlayStation Plus free title, catapulting it to millions
              of downloads in its first month and establishing an overnight phenomenon.
            </p>
            <p>
              <strong>Epic Games acquired Psyonix</strong> in May 2019, and Rocket League
              transitioned to <strong>free-to-play in September 2020</strong>, drawing over
              one million concurrent players at launch. The move to the Epic Games Store
              (alongside Steam) expanded the audience dramatically, cementing Rocket League
              as one of the most-played games globally with over <strong>100 million lifetime players</strong>.
            </p>
            <p>
              Throughout its life, the game has maintained a thriving esports ecosystem,
              introduced cross-platform play across all major consoles and PC, collaborated
              with brands like <strong>Formula 1, Lamborghini, Ford, NASCAR, </strong>
              and <strong>the NFL</strong>, and delivered hundreds of seasonal updates.
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
                href: '/fortnite',
                emoji: '🔫',
                label: 'Fortnite',
                sub: 'Epic Games\' battle royale',
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
        <Hub.Banner gradient="from-blue-600 to-cyan-500">
          <p className="text-2xl font-bold mb-2">Rocket League Coverage</p>
          <p className="text-white/80 mb-4">
            Season updates, RLCS results, rank guides, and more — all from ObjectWire.
          </p>
        </Hub.Banner>
      </Hub>
    </SEOWrapper>
  );
}
