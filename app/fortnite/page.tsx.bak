import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Fortnite — News, Seasons, Esports & Updates | ObjectWire',
  description:
    "Complete Fortnite coverage — Chapter 6 season updates, battle pass breakdowns, competitive FNCS, Fortnite Festival, Creative 2.0, Lego Fortnite, Epic Games news, and the cultural phenomenon reshaping gaming.",
  keywords: [
    'Fortnite',
    'Fortnite Chapter 6',
    'Fortnite Season',
    'Fortnite battle pass',
    'FNCS',
    'Fortnite esports',
    'Epic Games',
    'Fortnite Creative',
    'Lego Fortnite',
    'Fortnite Festival',
    'Fortnite map',
    'battle royale',
    'Fortnite OG',
    'Unreal Engine',
  ],
  openGraph: {
    title: 'Fortnite — News, Seasons & Esports | ObjectWire',
    description:
      'Chapter 6 updates, FNCS esports, Creative 2.0, Lego Fortnite, and the complete Epic Games ecosystem.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/fortnite',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function FortniteHubPage() {
  return (
    <SEOWrapper slug="/fortnite">
      <NewsArticleSchema
        title="Fortnite — News, Seasons, Esports & Updates"
        description="Complete Fortnite coverage — Chapter 6, FNCS, Creative 2.0, Lego Fortnite, and Epic Games ecosystem."
        author="ObjectWire Gaming Desk"
        publishedTime="2026-03-01T00:00:00Z"
        modifiedTime="2026-03-03T00:00:00Z"
        articleUrl="https://www.objectwire.org/fortnite"
        section="Video Games"
        keywords={['Fortnite', 'Epic Games', 'battle royale', 'FNCS', 'Fortnite Chapter 6']}
      />

      {/* Breadcrumb bar */}
      <Hub.Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Fortnite' },
        ]}
      />

      <Hub
        badge="FORTNITE"
        badgeColor="from-violet-500 to-blue-500"
        title="Fortnite"
        subtitle="Epic Games' cultural juggernaut — 500M+ registered accounts, a billion-dollar ecosystem spanning battle royale, Lego, music festivals, and the metaverse."
        updatedAt="2026-03-03"
        meta={
          <>
            <span>🔫 Battle Royale</span>
            <span className="hidden md:inline">•</span>
            <span>🆓 Free-to-Play</span>
            <span className="hidden md:inline">•</span>
            <span>🖥️ All Platforms</span>
            <span className="hidden md:inline">•</span>
            <span>🌍 500M+ Players</span>
          </>
        }
      >
        {/* ── Quick Facts ────────────────────────────────────────────────── */}
        <Hub.InfoGrid
          title="Quick Facts"
          icon="📋"
          items={[
            { label: 'Developer', value: 'Epic Games' },
            { label: 'Battle Royale Launch', value: 'Sep 26, 2017' },
            { label: 'Registered Players', value: '500M+' },
            { label: 'Current Chapter', value: 'Chapter 6' },
            { label: 'Platforms', value: 'All Major + Mobile' },
            { label: 'Price', value: 'Free-to-Play' },
            { label: 'Engine', value: 'Unreal Engine 5' },
            { label: 'Revenue (2024)', value: '$6B+ Lifetime' },
          ]}
          columns={4}
        />

        {/* ── Stat Bar ───────────────────────────────────────────────────── */}
        <Hub.StatBar
          accentColor="text-violet-400"
          items={[
            { value: '500M+', label: 'Accounts' },
            { value: '80M+', label: 'Monthly Active' },
            { value: '7+', label: 'Game Modes' },
            { value: '$6B+', label: 'Lifetime Revenue' },
          ]}
        />

        {/* ── TOC ────────────────────────────────────────────────────────── */}
        <Hub.TOC
          items={[
            { id: 'chapter-6', label: 'Chapter 6 Season Updates' },
            { id: 'ecosystem', label: 'The Fortnite Ecosystem' },
            { id: 'competitive', label: 'Competitive & FNCS' },
            { id: 'collabs', label: 'Collaborations & Crossovers' },
            { id: 'creative', label: 'Creative 2.0 & UEFN' },
            { id: 'cultural', label: 'Cultural Impact' },
            { id: 'history', label: 'Game History' },
            { id: 'related', label: 'Related Coverage' },
          ]}
        />

        {/* ── Chapter 6 Updates ──────────────────────────────────────────── */}
        <Hub.Section id="chapter-6" title="Chapter 6 Season Updates" icon="🆕" variant="highlight">
          <Hub.Prose>
            <p>
              <strong>Fortnite Chapter 6</strong> launched in late 2025, introducing a Greek mythology-themed
              island with entirely new POIs (Points of Interest), weapon pools, and traversal mechanics.
              Season 2 (early 2026) expanded the narrative with the <strong>Underworld biome</strong>,
              mythic boss encounters, and the return of fan-favorite vehicles.
            </p>
            <p>
              The battle pass features original and licensed skins, including crossovers with
              major entertainment IPs. Epic continues its cadence of <strong>weekly content updates</strong>,
              keeping the meta and map in constant evolution.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.CardGrid columns={2}>
              <Hub.Card
                href="/fortnite"
                title="Chapter 6 Season 2 — Full Battle Pass Breakdown"
                description="All 100+ tiers, bonus styles, secret skins, and how to unlock every reward in the new season."
                badge="SEASON 2"
                badgeStyle="historic"
                emoji="🎫"
                publishedAt="2026-02-01"
              />
              <Hub.Card
                href="/fortnite"
                title="New Map Changes & Underworld POIs"
                description="The Underworld biome reshapes the southeast corner of the island — full loot paths, rotation guides, and landing spots."
                badge="MAP UPDATE"
                emoji="🗺️"
                publishedAt="2026-02-05"
              />
              <Hub.Card
                href="/fortnite"
                title="Chapter 6 Weapon Tier List — Season 2 Meta"
                description="S-tier picks, sleeper weapons, and what to avoid. Updated weekly based on competitive usage data."
                badge="TIER LIST"
                emoji="🔫"
                publishedAt="2026-02-20"
              />
              <Hub.Card
                href="/fortnite"
                title="Mythic Boss Locations & Loot Drops"
                description="Where to find the new mythic bosses, their attack patterns, and the exclusive weapons they drop."
                emoji="👹"
                publishedAt="2026-02-10"
              />
            </Hub.CardGrid>
          </div>
        </Hub.Section>

        {/* ── The Fortnite Ecosystem ─────────────────────────────────────── */}
        <Hub.Section id="ecosystem" title="The Fortnite Ecosystem" icon="🌐" variant="card">
          <Hub.Prose>
            <p>
              Fortnite has evolved far beyond a single battle royale mode. The game now functions
              as a <strong>platform</strong> — a multi-experience ecosystem with distinct game modes,
              each with its own dedicated player base and update cadence.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.LinkGrid
              columns={3}
              items={[
                {
                  href: '/fortnite',
                  emoji: '🔫',
                  label: 'Battle Royale',
                  sub: 'The original 100-player mode',
                },
                {
                  href: '/fortnite',
                  emoji: '🏗️',
                  label: 'Lego Fortnite',
                  sub: 'Survival crafting with Lego',
                },
                {
                  href: '/fortnite',
                  emoji: '🎸',
                  label: 'Fortnite Festival',
                  sub: 'Rhythm game mode',
                },
                {
                  href: '/fortnite',
                  emoji: '🏎️',
                  label: 'Rocket Racing',
                  sub: 'Racing by Psyonix',
                },
                {
                  href: '/fortnite',
                  emoji: '🎨',
                  label: 'Creative 2.0',
                  sub: 'User-generated worlds',
                },
                {
                  href: '/fortnite',
                  emoji: '⚔️',
                  label: 'Save the World',
                  sub: 'PvE co-op (original mode)',
                },
              ]}
            />
          </div>
        </Hub.Section>

        {/* ── Competitive & FNCS ─────────────────────────────────────────── */}
        <Hub.Section id="competitive" title="Competitive & FNCS" icon="🏆" variant="highlight">
          <Hub.Prose>
            <p>
              The <strong>Fortnite Champion Series (FNCS)</strong> is Epic Games&apos; premier competitive
              circuit. The 2026 season features regional qualifiers leading to the <strong>FNCS Global
              Championship</strong>, one of gaming&apos;s largest prize-pool events with over <strong>$10M</strong> 
              on the line.
            </p>
            <p>
              Fortnite&apos;s competitive ecosystem also includes Cash Cups (weekly open tournaments),
              community-run events, and the <strong>Fortnite Competitive Creator Program</strong> that
              empowers content creators to host their own prize-pool tournaments.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.CardGrid columns={2}>
              <Hub.Card
                href="/fortnite"
                title="FNCS 2026 Global Championship Preview"
                description="The best Fortnite players worldwide compete for the largest prize pool in competitive Fortnite history."
                badge="FNCS"
                badgeStyle="historic"
                emoji="🌍"
                publishedAt="2026-03-01"
              />
              <Hub.Card
                href="/fortnite"
                title="Chapter 6 Competitive Settings & Loot Pool"
                description="The full competitive loot pool, building/no-build splits, storm timings, and rule changes for ranked and FNCS."
                badge="COMP"
                emoji="⚙️"
                publishedAt="2026-02-15"
              />
            </Hub.CardGrid>
          </div>

          <div className="mt-6">
            <Hub.Table
              columns={[
                { key: 'event', label: 'Event', bold: true },
                { key: 'format', label: 'Format' },
                { key: 'prize', label: 'Prize Pool', align: 'center' },
                { key: 'status', label: 'Status', align: 'center' },
              ]}
              rows={[
                { event: 'FNCS Global Championship', format: 'LAN Finals', prize: '$10M+', status: '🟡 Upcoming' },
                { event: 'FNCS Major 1', format: 'Online · Trios', prize: '$3M', status: '✅ Completed' },
                { event: 'FNCS Major 2', format: 'Online · Trios', prize: '$3M', status: '🔴 In Progress' },
                { event: 'Weekly Cash Cups', format: 'Open · Solo/Duo', prize: '$50K/week', status: '🟢 Ongoing' },
              ]}
            />
          </div>
        </Hub.Section>

        {/* ── Collaborations ─────────────────────────────────────────────── */}
        <Hub.Section id="collabs" title="Collaborations & Crossovers" icon="🤝" variant="card">
          <Hub.Prose>
            <p>
              Fortnite has become the <strong>ultimate crossover platform</strong>, collaborating with
              virtually every major entertainment franchise. From Marvel and Star Wars to the NFL, Nike,
              and global music artists — Fortnite&apos;s Item Shop and in-game events have
              blurred the line between gaming and pop culture.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.Table
              columns={[
                { key: 'franchise', label: 'Franchise', bold: true },
                { key: 'type', label: 'Collab Type' },
                { key: 'highlights', label: 'Notable Items' },
              ]}
              rows={[
                { franchise: '🦸 Marvel', type: 'Ongoing', highlights: 'Spider-Man, Wolverine, Iron Man, Thor skins' },
                { franchise: '⭐ Star Wars', type: 'Seasonal', highlights: 'Darth Vader, Ahsoka, Lightsaber mythic' },
                { franchise: '🎵 Music Artists', type: 'In-Game Events', highlights: 'Eminem, Billie Eilish, Travis Scott concerts' },
                { franchise: '🎬 Movies', type: 'Tie-in Events', highlights: 'John Wick, Dune, Avatar skins & events' },
                { franchise: '🧱 Lego', type: 'Game Mode', highlights: 'Full survival crafting game mode' },
                { franchise: '🏀 NBA / 🏈 NFL', type: 'Seasonal', highlights: 'Team jerseys, custom skins' },
              ]}
            />
          </div>
        </Hub.Section>

        {/* ── Creative 2.0 & UEFN ────────────────────────────────────────── */}
        <Hub.Section id="creative" title="Creative 2.0 & UEFN" icon="🎨" variant="default">
          <Hub.Prose>
            <p>
              <strong>Unreal Editor for Fortnite (UEFN)</strong> has transformed Creative mode into
              a full game-development platform. Creators can build experiences using a modified
              version of Unreal Engine 5, publish them to the Fortnite Discover page, and
              <strong> earn revenue</strong> based on player engagement through Epic&apos;s
              Creator Economy program.
            </p>
            <p>
              UEFN experiences range from custom battle royale islands and racing games to
              RPGs, horror maps, and even educational content. Epic has committed to a
              <strong> 40% engagement-based revenue share</strong> with creators, making Fortnite
              one of the most lucrative UGC platforms in gaming.
            </p>
          </Hub.Prose>

          <div className="mt-6">
            <Hub.CardGrid columns={2}>
              <Hub.Card
                href="/fortnite"
                title="UEFN Creator Economy — How Creators Earn"
                description="Breakdown of Epic's revenue-sharing model, top-earning islands, and how to get started building in Fortnite Creative."
                emoji="💰"
                publishedAt="2026-01-20"
              />
              <Hub.Card
                href="/fortnite"
                title="Top 10 Creative Maps — March 2026"
                description="The most popular community-created islands this month — from action-packed gun games to immersive story experiences."
                emoji="🏆"
                publishedAt="2026-03-01"
              />
            </Hub.CardGrid>
          </div>
        </Hub.Section>

        {/* ── Cultural Impact ────────────────────────────────────────────── */}
        <Hub.Section id="cultural" title="Cultural Impact" icon="🌍" variant="default">
          <Hub.Prose>
            <p>
              Fortnite isn&apos;t just a game — it&apos;s a <strong>cultural platform</strong>.
              Over 10 million concurrent players attended the <strong>Travis Scott Astronomical</strong>
              event in 2020, demonstrations have been held on the island, brands have launched
              products within Fortnite, and the game has become a primary social space for
              an entire generation of players.
            </p>
            <p>
              Epic Games&apos; vision of the <strong>&quot;metaverse&quot;</strong> is arguably most realized
              within Fortnite — a persistent digital world where players socialize, attend
              concerts, watch movie trailers, build their own games, and compete, all within
              a single interconnected ecosystem.
            </p>
            <p>
              The game&apos;s influence extends to fashion (Nike, Balenciaga collabs), music
              (in-game concerts drawing tens of millions), education (MIT and Epic&apos;s educational
              initiatives), and even politics (the <em>Epic v. Apple</em> antitrust case that
              reshaped mobile app store economics globally).
            </p>
          </Hub.Prose>
        </Hub.Section>

        {/* ── History ────────────────────────────────────────────────────── */}
        <Hub.Section id="history" title="Game History" icon="📖" variant="default">
          <Hub.Prose>
            <p>
              Fortnite began as <strong>Save the World</strong>, a co-op PvE survival game announced
              in 2011 and released in paid Early Access in July 2017. Two months later, Epic Games
              pivoted to launch <strong>Fortnite Battle Royale</strong> as a free-to-play mode
              on September 26, 2017 — riding the wave of PUBG&apos;s genre-defining success.
            </p>
            <p>
              By early 2018, Fortnite had exploded into a global phenomenon, breaking Twitch records
              (with Ninja&apos;s Drake stream reaching 635K concurrent viewers), generating
              <strong> $5.4 billion in revenue in 2018 alone</strong>, and introducing the
              <strong> Battle Pass</strong> monetization model that would become the industry standard.
            </p>
            <p>
              Key moments include the <strong>Black Hole event</strong> (October 2019) that
              &quot;deleted&quot; the game for 2 days, the <strong>Chapter 2</strong> relaunch with a
              new map, the <strong>Epic v. Apple lawsuit</strong> (2020–2024), the
              <strong> no-build mode</strong> introduction (Chapter 3, 2022), <strong>Fortnite OG</strong>
              returning the original map (2023), and the expansion into the multi-experience
              platform model with Lego Fortnite, Festival, and Rocket Racing in late 2023.
            </p>
          </Hub.Prose>
        </Hub.Section>

        {/* ── Related Coverage ────────────────────────────────────────────── */}
        <Hub.Section id="related" title="Related Coverage" icon="🔗" variant="default">
          <Hub.LinkGrid
            columns={4}
            items={[
              {
                href: '/video-games',
                emoji: '🎮',
                label: 'All Video Games',
                sub: 'Full gaming hub',
              },
              {
                href: '/rocket-league',
                emoji: '🚗',
                label: 'Rocket League',
                sub: 'Also by Epic / Psyonix',
              },
              {
                href: '/video-games/rainbow-6-siege',
                emoji: '🎯',
                label: 'Rainbow Six Siege',
                sub: 'Tactical FPS coverage',
              },
              {
                href: '/tech',
                emoji: '💻',
                label: 'Gaming Tech',
                sub: 'Hardware & Unreal Engine',
              },
            ]}
          />
        </Hub.Section>

        {/* ── CTA Banner ─────────────────────────────────────────────────── */}
        <Hub.Banner gradient="from-violet-600 to-blue-600">
          <p className="text-2xl font-bold mb-2">Never Miss a Drop</p>
          <p className="text-white/80 mb-4">
            New seasons, FNCS results, map changes, and Item Shop alerts — ObjectWire keeps you in the loop.
          </p>
        </Hub.Banner>
      </Hub>
    </SEOWrapper>
  );
}
