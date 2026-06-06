import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section, TableOfContents } from '@/components/articles/ArticlePage';
import { SourcesInterlink } from '@/components/articles/SourcesInterlink';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/video-games/battlefield-6';
const OG_IMAGE = 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Battlefield 6 | Season 3 Blast Point, News & Guides 2026',
  description:
    'Battlefield 6 hub. Season 3 Blast Point launches June 10 with Cairo Bazaar, Golmud Sands, Flashpoint mode, server browser, ranked Conquest, and 6 new weapons.',
  keywords: [
    'Battlefield 6',
    'Battlefield 6 Season 3',
    'Battlefield 6 Blast Point',
    'Battlefield 6 2026',
    'Battlefield 6 maps',
    'Battlefield 6 Cairo Bazaar',
    'Battlefield 6 Golmud Sands',
    'Battlefield 6 Battle Pass',
    'Battlefield 6 server browser',
    'Battlefield 6 ranked Conquest',
    'EA DICE Battlefield',
    'Battlefield 6 guides',
    'Battlefield 6 news',
    'BF6 Season 3',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Battlefield 6 | Season 3 Blast Point, News & Guides 2026',
    description:
      'Battlefield 6 Season 3 Blast Point: Cairo Bazaar, Golmud Sands, Flashpoint mode, server browser, ranked Conquest — everything coming June 10, 2026.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Battlefield 6 Season 3 Blast Point hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Battlefield 6 | Season 3 Blast Point, News & Guides',
    description: 'Cairo Bazaar, Golmud Sands, server browser, Flashpoint mode — Season 3 launches June 10.',
    images: [OG_IMAGE],
  },
};

export default function Battlefield6HubPage() {
  return (
    <ArticlePage
      title="Battlefield 6 | Season 3 Blast Point Hub"
      subtitle="All guides, news, and breakdowns for Battlefield 6 including Season 3 Blast Point launching June 10, 2026 with Cairo Bazaar, Golmud Sands, server browser, Flashpoint mode, and ranked Conquest"
      category="Gaming"
      lastUpdated="June 6, 2026"
      slug="video-games-battlefield-6"
      url="/video-games/battlefield-6"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/video-games', label: 'Video Games' },
        { href: '/video-games/battlefield-6', label: 'Battlefield 6' },
      ]}
      infoBox={{
        title: 'Battlefield 6',
        image: { src: OG_IMAGE, alt: 'Battlefield 6 Season 3 Blast Point', caption: 'Season 3 Blast Point, EA DICE' },
        sections: [
          {
            heading: 'Game Info',
            items: [
              { label: 'Developer', value: 'DICE Stockholm' },
              { label: 'Publisher', value: 'Electronic Arts' },
              { label: 'Released', value: 'November 14, 2025' },
              { label: 'Platforms', value: 'PC, PS5, Xbox Series X|S' },
              { label: 'Genre', value: 'First-Person Shooter' },
              { label: 'Max Players', value: '128 (64v64 Conquest)' },
            ],
          },
          {
            heading: 'Season 3 Blast Point',
            items: [
              { label: 'Season', value: 'Season 3 "Blast Point"' },
              { label: 'Launches', value: 'June 10, 2026' },
              { label: 'New Maps', value: 'Cairo Bazaar, Golmud Sands' },
              { label: 'New Mode', value: 'Flashpoint (5v5 extraction)' },
              { label: 'New Feature', value: 'Server Browser, Ranked Conquest' },
            ],
          },
          {
            heading: 'Season Coverage',
            links: [
              { href: '/video-games/battlefield-6/season-3-blastpoint', label: 'Season 3 Blast Point | Full Preview' },
              { href: '/video-games/battlefield-6/news/2026-roadmap-seasons-3-4-5-naval-warfare-back-to-roots', label: '2026 Roadmap | Seasons 3-5, Naval Warfare' },
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
        { id: 'overview', label: 'Battlefield 6 Overview' },
        { id: 'season-3', label: 'Season 3 Blast Point | June 10' },
        { id: 'roadmap', label: 'Season Roadmap 2026' },
        { id: 'maps', label: 'All Maps | Current Rotation' },
        { id: 'classes', label: 'Class System | Back to Roots' },
        { id: 'guides', label: 'All Guides' },
        { id: 'sources', label: 'Sources' },
      ]}
      relatedLinks={[
        { href: '/video-games/battlefield-6/season-3-blastpoint', label: 'Season 3 Blast Point | Full Preview', description: 'Cairo Bazaar, Golmud Sands, 6 new weapons, Flashpoint mode, Battle Pass, server browser' },
        { href: '/video-games/battlefield-6/news/2026-roadmap-seasons-3-4-5-naval-warfare-back-to-roots', label: 'Battlefield 6 2026 Roadmap', description: 'Official DICE plan for Seasons 3, 4, and 5 including Wake Island and naval warfare' },
        { href: '/video-games', label: 'Video Games Hub', description: 'All gaming news and guides on OzoneNews' },
      ]}
      backLink={{ href: '/video-games', label: 'Video Games' }}
    >
      <TableOfContents items={[
        { id: 'overview', label: 'Battlefield 6 Overview' },
        { id: 'season-3', label: 'Season 3 Blast Point | June 10' },
        { id: 'roadmap', label: 'Season Roadmap 2026' },
        { id: 'maps', label: 'All Maps | Current Rotation' },
        { id: 'classes', label: 'Class System | Back to Roots' },
        { id: 'guides', label: 'All Guides' },
        { id: 'sources', label: 'Sources' },
      ]} />

      <Section id="overview" title="Battlefield 6 | The Franchise Returns to Form">
        <p>
          Battlefield 6, developed by DICE Stockholm with support from Criterion and Ripple Effect Studios,
          launched on November 14, 2025. The game marked a deliberate course correction from Battlefield 2042,
          restoring the four-class system of Assault, Engineer, Support, and Recon in place of the individual
          specialist system, and returning map design to the large-scale combined-arms philosophy of the
          Battlefield 3 and 4 era.
        </p>
        <p>
          Launch reviews landed mixed-to-positive. Critics praised the map quality and vehicle depth while
          noting a thin content slate at release: six maps, three modes, no server browser, and no ranked queue.
          DICE committed publicly to a post-launch content schedule. The game&apos;s reputation has improved with
          each of the three seasons since release, and by March 2026 the title had surpassed 8 million players.
        </p>
        <p>
          Season 2, &quot;Cold Tide,&quot; delivered the first two classic map remasters and pushed concurrent
          players to their highest point since launch week. Season 3 arrives June 10 with the single
          largest content drop DICE has shipped for the game: two new maps, six new weapons, two new operators,
          a new vehicle class, a permanent new game mode, and three features that players requested
          since day one.
        </p>
        <p>
          Full Season 3 breakdown in the{' '}
          <Link href="/video-games/battlefield-6/season-3-blastpoint" className="text-blue-600 hover:text-blue-800 underline">
            Season 3 Blast Point preview
          </Link>.
          For all gaming coverage, visit the{' '}
          <Link href="/video-games" className="text-blue-600 hover:text-blue-800 underline">
            video games hub
          </Link>.
        </p>
      </Section>

      <Section id="season-3" title="Season 3 Blast Point | Cairo Bazaar, Golmud Sands, Flashpoint">
        <p>
          Season 3 &quot;Blast Point&quot; launches June 10, 2026. Two new maps anchor the update.
          <strong> Cairo Bazaar</strong> is a reimagining of Grand Bazaar from Battlefield 3, set in modern
          Cairo with dense market corridors, a central mosque courtyard, and rooftop control routes. It is
          an infantry-first map and launches Day 1 in the Ranked Conquest playlist.
        </p>
        <p>
          <strong>Golmud Sands</strong> reimagines Golmud Railway from Battlefield 4 as an open desert
          armored theater. The collapsed railway line bisects the map east to west, flanked by sand dunes
          and four vehicle depots. The new M1128 Mobile Gun System debuts here. DICE describes it as
          &quot;the most pure combined-arms arena&quot; the studio has built for Battlefield 6.
        </p>
        <p>
          <strong>Flashpoint</strong> is a permanent new 5v5 mode with no respawns: one team extracts a
          hard-drive payload while the other defends. No vehicles, no spotting UI, proximity voice chat on
          by default. It is Battlefield&apos;s first tactical extraction mode and the clearest signal that
          DICE is building toward a competitive audience.
        </p>
        <p>
          All maps, weapons, operators, Battle Pass tiers, free rewards, and the server browser launch
          are covered in full in the{' '}
          <Link href="/video-games/battlefield-6/season-3-blastpoint" className="text-blue-600 hover:text-blue-800 underline">
            Season 3 Blast Point complete preview
          </Link>.
        </p>
      </Section>

      <Section id="roadmap" title="Season Roadmap 2026 | Naval Warfare, Wake Island, Platoons">
        <p>
          DICE published the official Battlefield 6 content roadmap on April 19, 2026, covering Seasons 3
          through 5. Season 4, arriving October 2026, is the naval warfare season. It introduces
          <strong> Wake Island</strong> as a full remake, adds aircraft carrier spawns to the Conquest
          rotation, and launches a ship-to-shore assault mode. Wake Island was the most-requested map
          within 48 hours of the game&apos;s original launch.
        </p>
        <p>
          Season 5, slated for December 2026, is a holiday-themed season with three winter maps.
          DICE confirmed that <strong>Platoons and Leaderboards</strong>, a persistent clan system cut
          before launch, ships alongside Season 5.
        </p>
        <p>
          The server browser, which opens Community Servers with custom rulesets and admin tools, launches
          with Season 3 on PC and rolls out to console via a mid-season patch approximately six weeks later.
        </p>
        <p>
          Full three-season roadmap breakdown:{' '}
          <Link href="/video-games/battlefield-6/news/2026-roadmap-seasons-3-4-5-naval-warfare-back-to-roots" className="text-blue-600 hover:text-blue-800 underline">
            Battlefield 6 2026 Roadmap | Seasons 3-5, Naval Warfare
          </Link>.
        </p>
      </Section>

      <Section id="maps" title="Maps | Full Season 3 Rotation">
        <p>
          Battlefield 6 launched with six maps. Seasons 1 and 2 added four more, and Season 3 brings the
          total to ten. The full Season 3 rotation:
        </p>
        <ul className="space-y-2 mt-4">
          <li><strong>Karakoram Ridge</strong> — mountain infantry combat, launch map</li>
          <li><strong>Suez Crossing</strong> — flat desert highway, vehicle-dominant, launch map</li>
          <li><strong>Black Sea Terminal</strong> — port facility, infantry and IFV combat, launch map</li>
          <li><strong>Highrise Station</strong> — urban vertical combat, launch map</li>
          <li><strong>Barents Shelf</strong> — arctic offshore platform, close-range, launch map</li>
          <li><strong>Verdansk Outpost</strong> — mid-range open fields, combined arms, launch map</li>
          <li><strong>Tsuru Reef</strong> — Pacific island chain, Season 1, amphibious vehicles</li>
          <li><strong>Hamra Compound</strong> — urban raid layout, Season 2, Rush-focused</li>
          <li><strong>Cairo Bazaar</strong> — Grand Bazaar remake, Season 3, infantry, Ranked Conquest</li>
          <li><strong>Golmud Sands</strong> — Golmud Railway reimagining, Season 3, armored open desert</li>
        </ul>
        <p className="mt-4">
          Ranked Conquest in Season 3 runs a five-map curated playlist: Karakoram Ridge, Black Sea Terminal,
          Hamra Compound, Cairo Bazaar, and Golmud Sands.
        </p>
      </Section>

      <Section id="classes" title="Class System | Assault, Engineer, Support, Recon Restored">
        <p>
          Battlefield 6 fully restored the four-class template. Assault, Engineer, Support, and Recon each
          have fixed gadget slots tied to their role, with two customizable loadout slots for class-appropriate
          gear swaps. The specialist system from Battlefield 2042 was removed entirely.
        </p>
        <p>
          <strong>Assault</strong> leads the push, carries revive paddles, and in Season 3 gains access to
          the M18 Claymore and breaching charge gadgets.{' '}
          <strong>Engineer</strong> is the primary anti-vehicle role, gaining the Type-85 Anti-Tank Rocket
          in Season 3. The new Season 3 operators, Raziya Okafor (Support) and Hamid Rostami (Engineer),
          add gadgets tied to their class slot rather than overriding the framework.
        </p>
        <p>
          <strong>Support</strong> carries ammo and health drops, with resupply crate range increased from
          12m to 18m in Season 3 based on community feedback.{' '}
          <strong>Recon</strong> anchors the spotting system, with the Motion Sensor receiving a range and
          duration buff in the Season 3 patch notes.
        </p>
      </Section>

      <Section id="guides" title="All Battlefield 6 Guides">
        <ul className="space-y-2">
          <li>
            <Link href="/video-games/battlefield-6/season-3-blastpoint" className="text-blue-600 hover:text-blue-800 underline font-semibold">
              Season 3 Blast Point | Complete Preview
            </Link>
            {' '}— Cairo Bazaar, Golmud Sands, 6 new weapons, Flashpoint mode, server browser, Battle Pass, and all free rewards
          </li>
          <li>
            <Link href="/video-games/battlefield-6/news/2026-roadmap-seasons-3-4-5-naval-warfare-back-to-roots" className="text-blue-600 hover:text-blue-800 underline font-semibold">
              Battlefield 6 2026 Roadmap | Seasons 3-5
            </Link>
            {' '}— Official DICE roadmap: Wake Island, naval combat, server browser, and the Platoons system
          </li>
        </ul>
      </Section>

      <Section id="sources" title="Sources & Further Reading">
        <SourcesInterlink
          accentColor="blue"
          sources={[
            {
              number: 1,
              url: 'https://www.ea.com/games/battlefield',
              title: 'Battlefield | Official EA Site',
              author: 'Electronic Arts',
              description: 'Official Battlefield 6 page with season updates, patch notes, and roadmap.',
            },
            {
              number: 2,
              url: 'https://www.ea.com/games/battlefield/battlefield-6/news',
              title: 'Battlefield 6 News | EA / DICE',
              author: 'Electronic Arts',
              description: 'All official season announcements, patch notes, and feature breakdowns.',
            },
            {
              number: 3,
              url: 'https://www.ign.com/games/battlefield-6',
              title: 'Battlefield 6 | IGN',
              author: 'IGN',
              description: 'Launch review, season guides, and ongoing coverage.',
            },
          ]}
          internalLinks={[
            { href: '/video-games/battlefield-6/season-3-blastpoint', label: 'Season 3 Blast Point Complete Preview', description: 'New maps, weapons, operators, Flashpoint mode, Battle Pass, server browser, free rewards' },
            { href: '/video-games/battlefield-6/news/2026-roadmap-seasons-3-4-5-naval-warfare-back-to-roots', label: 'Battlefield 6 2026 Roadmap', description: 'Official Seasons 3-5 roadmap: Wake Island, naval combat, holiday maps, platoons' },
            { href: '/video-games', label: 'Video Games Hub', description: 'All gaming news, guides, and analysis on OzoneNews' },
          ]}
        />
      </Section>
    </ArticlePage>
  );
}
