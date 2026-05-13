import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section, TableOfContents } from '@/components/articles/ArticlePage';
import TopicMedia from '@/components/articles/TopicMedia';
import { SourcesInterlink } from '@/components/articles/SourcesInterlink';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/video-games/fortnite';
const OG_IMAGE = 'https://images.unsplash.com/photo-1635372730136-06b29022281c?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Fortnite | Chapter 6 Season 2, News & Guides 2026',
  description:
    'Fortnite Chapter 6 Season 2 hub. Map changes, Battle Pass breakdown, weapons tier list, ranked mode, and the latest Fortnite news and guides from ObjectWire.',
  keywords: [
    'Fortnite',
    'Fortnite Chapter 6 Season 2',
    'Fortnite Lawless',
    'Fortnite Chapter 6',
    'Fortnite 2026',
    'Fortnite map changes',
    'Fortnite Battle Pass',
    'Fortnite weapons',
    'Fortnite ranked',
    'Epic Games Fortnite',
    'Fortnite news',
    'Fortnite guides',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Fortnite | Chapter 6 Season 2 Hub, News & Guides 2026',
    description:
      'Fortnite Chapter 6 Season 2 "Lawless": map changes, Battle Pass skins, weapons tier list, ranked updates, and all current guides.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Fortnite Chapter 6 Season 2 Lawless hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortnite | Chapter 6 Season 2, News & Guides',
    description: 'Map changes, Battle Pass, weapons tier list, and ranked mode for Fortnite Chapter 6 Season 2.',
    images: [OG_IMAGE],
  },
};

export default function FortniteHubPage() {
  return (
    <ArticlePage
      title="Fortnite | Chapter 6 Season 2 Hub"
      subtitle="All guides, news, and breakdowns for Fortnite Chapter 6 Season 2 'Lawless', covering map changes, Battle Pass, weapons, and ranked mode"
      category="Gaming"
      lastUpdated="April 29, 2026"
      slug="video-games-fortnite"
      url="/video-games/fortnite"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/video-games', label: 'Video Games' },
        { href: '/video-games/fortnite', label: 'Fortnite' },
      ]}
      infoBox={{
        title: 'Fortnite',
        image: { src: OG_IMAGE, alt: 'Fortnite gameplay Chapter 6 Season 2', caption: 'Chapter 6 Season 2, Epic Games' },
        sections: [
          {
            heading: 'Current Season',
            items: [
              { label: 'Chapter', value: 'Chapter 6' },
              { label: 'Season', value: 'Season 2 "Lawless"' },
              { label: 'Theme', value: 'Japanese/Yakuza Crime' },
              { label: 'Developer', value: 'Epic Games' },
              { label: 'Platforms', value: 'PC, PS5, Xbox, Switch, Mobile' },
              { label: 'Genre', value: 'Battle Royale, Third-Person Shooter' },
            ],
          },
          {
            heading: 'Season 2 Guides',
            links: [
              { href: '/video-games/fortnite/chapter-6-season-2-map-changes', label: 'Map Changes | All New POIs' },
              { href: '/video-games/fortnite/chapter-6-season-2-battle-pass', label: 'Battle Pass | All Skins' },
              { href: '/video-games/fortnite/chapter-6-season-2-weapons-tier-list', label: 'Weapons Tier List' },
            ],
          },
          {
            heading: 'Gaming Hub',
            links: [
              { href: '/video-games', label: 'All Gaming Coverage' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Chapter 6 Season 2 Overview' },
        { id: 'map', label: 'Map | Shogun POI and New Locations' },
        { id: 'battle-pass', label: 'Battle Pass | Skins and Rewards' },
        { id: 'weapons', label: 'Weapons | Katana, SMGs, LMGs' },
        { id: 'ranked', label: 'Ranked Mode Updates' },
        { id: 'guides', label: 'All Season 2 Guides' },
        { id: 'sources', label: 'Sources & Further Reading' },
      ]}
      relatedLinks={[
        { href: '/video-games/fortnite/chapter-6-season-2-map-changes', label: 'Chapter 6 Season 2 Map Changes', description: 'Shogun POI, cherry blossoms, and every new named location' },
        { href: '/video-games/fortnite/chapter-6-season-2-battle-pass', label: 'Chapter 6 Season 2 Battle Pass', description: 'All skins, secret styles, and bonus rewards in the Season 2 pass' },
        { href: '/video-games/fortnite/chapter-6-season-2-weapons-tier-list', label: 'Season 2 Weapons Tier List', description: 'Katanas, SMGs, LMGs and the complete weapon rankings' },
        { href: '/video-games', label: 'Video Games Hub', description: 'All gaming news and guides on ObjectWire' },
      ]}
      backLink={{ href: '/video-games', label: 'Video Games' }}
    >
      <TableOfContents items={[
        { id: 'overview', label: 'Chapter 6 Season 2 Overview' },
        { id: 'map', label: 'Map | Shogun POI and New Locations' },
        { id: 'battle-pass', label: 'Battle Pass | Skins and Rewards' },
        { id: 'weapons', label: 'Weapons | Katana, SMGs, LMGs' },
        { id: 'ranked', label: 'Ranked Mode Updates' },
        { id: 'guides', label: 'All Season 2 Guides' },
        { id: 'sources', label: 'Sources & Further Reading' },
      ]} />

      <Section id="overview" title="Fortnite Chapter 6 Season 2 | Lawless Overview">
        <p>
          Fortnite Chapter 6 Season 2, titled <strong>Lawless</strong>, centers on a Japanese crime
          aesthetic with yakuza-inspired visual design, a major new Shogun-era castle POI, and a
          narrative built around crime lords controlling the island. The season introduced melee combat
          as a first-class mechanic through the Katana weapon class, and reshaped a significant portion
          of the Chapter 6 map from its Season 1 state.
        </p>
        <p>
          The season builds on Chapter 6 Season 1's Japanese-inspired visual language, deepening the
          aesthetic with feudal architecture, cherry blossom canopies, and crime-syndicate structures
          embedded into the named POIs. New weapons, a reworked ranked ladder, and a Battle Pass
          featuring both original characters and licensed crossover skins defined the season's content
          slate.
        </p>
        <p>
          All Season 2 guides, breakdowns, and news are indexed below. For the full video games
          catalogue, see the{' '}
          <Link href="/video-games" className="text-blue-600 hover:text-blue-800 underline">
            video games hub
          </Link>.
        </p>
        <TopicMedia topic="fortnite" variant="video" />
      </Section>

      <Section id="map" title="Map | Shogun POI, Cherry Blossoms, and New Named Locations">
        <p>
          The Shogun's castle is the centerpiece of the Season 2 map overhaul. Located in the elevated
          central region of the Chapter 6 island, it is a multi-story feudal structure with interior
          corridors, rooftop vantage points, and surrounding grounds with cherry blossom trees. The POI
          is named <strong>Shogun's Sorrow</strong> and is one of the highest-loot-density locations
          in the season.
        </p>
        <p>
          Additional named locations reflect the yakuza crime theme: underground fight clubs, neon-lit
          urban districts replacing more neutral POIs from Season 1, and scattered crime-lord outpost
          camps serving as mid-tier loot zones. The Katana Shrine is a smaller, higher-altitude POI
          guaranteeing at least one legendary Katana spawn per match.
        </p>
        <p>
          Cherry blossom trees appear throughout the map's northern and central sections, functioning
          as both visual markers and foliage cover. The blossom density is highest around Shogun's
          Sorrow and the ridge systems connecting it to the coast.
        </p>
        <p>
          Full coverage of every new named location, rotation path, and loot table is in the{' '}
          <Link href="/video-games/fortnite/chapter-6-season-2-map-changes" className="text-blue-600 hover:text-blue-800 underline">
            Chapter 6 Season 2 map changes guide
          </Link>.
        </p>
      </Section>

      <Section id="battle-pass" title="Battle Pass | Skins, Secret Styles, and Bonus Rewards">
        <p>
          The Chapter 6 Season 2 Battle Pass includes original yakuza-themed characters alongside a
          licensed crossover skin. The pass is structured across 100 tiers with a bonus Page 2 section
          containing additional cosmetics unlockable after tier 100.
        </p>
        <p>
          The flagship Battle Pass skin is a high-ranking crime boss character with multiple unlockable
          style variants tied to progression milestones. Secret skins, accessible via hidden challenges
          scattered across the map, expand the pass roster beyond the standard tier track.
        </p>
        <p>
          For a complete tier-by-tier list of every skin, back bling, pickaxe, glider, loading screen,
          and bonus reward in the Season 2 pass, see the{' '}
          <Link href="/video-games/fortnite/chapter-6-season-2-battle-pass" className="text-blue-600 hover:text-blue-800 underline">
            Battle Pass breakdown
          </Link>.
        </p>
      </Section>

      <Section id="weapons" title="Weapons | Katana, New SMGs, and LMGs This Season">
        <p>
          Season 2 introduced the <strong>Katana</strong> as a legendary-rarity melee weapon with a
          unique dash-slash combo mechanic. It is the first dedicated melee weapon added to the core
          battle royale loot pool (outside of limited-time modes) in several chapters.
        </p>
        <p>
          Two new SMG variants and a high-capacity LMG were also added to the loot pool, while
          several carryover weapons from Season 1 were vaulted. The weapon balance shifted toward
          close-to-mid-range aggression, rewarding players who push rather than camp.
        </p>
        <p>
          For a full S-through-D tier ranking of every weapon in the current Season 2 loot pool,
          see the{' '}
          <Link href="/video-games/fortnite/chapter-6-season-2-weapons-tier-list" className="text-blue-600 hover:text-blue-800 underline">
            Season 2 weapons tier list
          </Link>.
        </p>
      </Section>

      <Section id="ranked" title="Ranked Mode | New Ladder Structure for Season 2">
        <p>
          Chapter 6 Season 2 introduced revisions to the Ranked mode ladder. Bronze through Diamond
          divisions remain, but the Ranked Reset at the start of Season 2 placed returning players
          lower than their final Season 1 position, creating a fresh competitive environment. The
          matchmaking pool was split more granularly to reduce skill disparity in high-Diamond and
          Elite lobbies.
        </p>
        <p>
          Ranked-exclusive loot table changes limit access to certain weapons in ranked play,
          specifically adjusting the Katana spawn rate downward compared to casual matches to reduce
          melee dominance in competitive lobbies. The ranked scoring system still rewards placement
          plus eliminations in a blended points model.
        </p>
      </Section>

      <Section id="guides" title="All Season 2 Guides">
        <ul className="space-y-2">
          <li>
            <Link href="/video-games/fortnite/chapter-6-season-2-map-changes" className="text-blue-600 hover:text-blue-800 underline font-semibold">
              Chapter 6 Season 2 Map Changes
            </Link>
            {' '}— Shogun&apos;s Sorrow, cherry blossom zones, every new named location and rotation path
          </li>
          <li>
            <Link href="/video-games/fortnite/chapter-6-season-2-battle-pass" className="text-blue-600 hover:text-blue-800 underline font-semibold">
              Chapter 6 Season 2 Battle Pass
            </Link>
            {' '}— All 100 tiers, secret skins, Page 2 bonuses, and the fastest XP routes
          </li>
          <li>
            <Link href="/video-games/fortnite/chapter-6-season-2-weapons-tier-list" className="text-blue-600 hover:text-blue-800 underline font-semibold">
              Season 2 Weapons Tier List
            </Link>
            {' '}— Full S-to-D ranking of the current loot pool including Katana, SMGs, and LMGs
          </li>
        </ul>
      </Section>

      <Section id="sources" title="Sources & Further Reading">
        <SourcesInterlink
          accentColor="orange"
          sources={[
            {
              number: 1,
              url: 'https://www.fortnite.com/',
              title: 'Fortnite | Official Site',
              author: 'Epic Games',
              description: 'Official Fortnite patch notes, news, and Chapter 6 Season 2 updates.',
            },
            {
              number: 2,
              url: 'https://www.epicgames.com/fortnite/en-US/news',
              title: 'Epic Games Fortnite News | Chapter 6 Season 2 Patch Notes',
              author: 'Epic Games',
              description: 'All official Season 2 patch notes, balance changes, and event announcements.',
            },
            {
              number: 3,
              url: 'https://www.epicgames.com/site/en-US/news/fortnite-chapter-6-season-2',
              title: 'Fortnite Chapter 6 Season 2 | Epic Games Official Announcement',
              author: 'Epic Games',
              description: 'Official Chapter 6 Season 2 reveal with map, Battle Pass, and new mechanics details.',
            },
          ]}
          internalLinks={[
            { href: '/video-games/fortnite/chapter-6-season-2-map-changes', label: 'Chapter 6 Season 2 Map Changes', description: 'Every new named location, Shogun POI, and rotation paths' },
            { href: '/video-games/fortnite/chapter-6-season-2-battle-pass', label: 'Chapter 6 Season 2 Battle Pass', description: 'All skins, secret styles, and bonus rewards tier by tier' },
            { href: '/video-games/fortnite/chapter-6-season-2-weapons-tier-list', label: 'Season 2 Weapons Tier List', description: 'Full S-to-D ranking of every weapon in the current loot pool' },
            { href: '/entertainment/news/fortnite-moves-into-movies', label: 'Fortnite Moves Into Movies', description: 'How Epic is building Fortnite into a full entertainment IP' },
            { href: '/video-games/epic', label: 'Epic Games Hub', description: 'All Epic Games news and coverage on ObjectWire' },
            { href: '/video-games', label: 'Video Games Hub', description: 'All gaming news, guides, and analysis' },
          ]}
        />
      </Section>
    </ArticlePage>
  );
}
