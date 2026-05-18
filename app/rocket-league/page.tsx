import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section, TableOfContents } from '@/components/articles/ArticlePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/rocket-league';
const OG_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Rocket League | News, Esports, Ranks & Updates 2026',
  description:
    'Rocket League hub covering Season 22, competitive ranks, esports, patch notes, car builds, and the latest Psyonix updates. Physics-based vehicular soccer on PC, PS5, Xbox, and Switch.',
  keywords: [
    'Rocket League',
    'Rocket League 2026',
    'Rocket League news',
    'Rocket League ranks',
    'Rocket League esports',
    'Rocket League Season 22',
    'Rocket League patch notes',
    'Rocket League car builds',
    'Psyonix',
    'Rocket League competitive',
    'Rocket League updates',
    'Rocket League guides',
    'RLCS 2026',
    'Rocket League mechanics',
    'Rocket League free to play',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Rocket League | News, Esports, Ranks & Updates 2026',
    description:
      'Physics-based vehicular soccer. Season 22 patch notes, competitive rank breakdown, RLCS esports coverage, and car build guides on OzoneNews.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Rocket League arena cars ball aerial' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rocket League | News, Esports, Ranks & Updates 2026',
    description: 'Season 22, ranked breakdown, esports, car builds, and patch notes. Everything Rocket League on OzoneNews.',
    images: [OG_IMAGE],
  },
};

export default function RocketLeagueHubPage() {
  return (
    <ArticlePage
      title="Rocket League | News, Esports, Ranks & Updates"
      subtitle="The complete OzoneNews hub for Rocket League — Season 22 patch notes, competitive rank tiers, RLCS esports, car builds, mechanics guides, and all Psyonix updates"
      category="Gaming"
      lastUpdated="May 4, 2026"
      slug="rocket-league"
      url="/rocket-league"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/rocket-league', label: 'Rocket League' },
      ]}
      infoBox={{
        title: 'Rocket League',
        image: { src: OG_IMAGE, alt: 'Rocket League aerial car soccer', caption: 'Rocket League, Psyonix / Epic Games' },
        sections: [
          {
            heading: 'Game Info',
            items: [
              { label: 'Developer', value: 'Psyonix' },
              { label: 'Publisher', value: 'Epic Games' },
              { label: 'Model', value: 'Free to Play' },
              { label: 'Platforms', value: 'PC, PS5, PS4, Xbox, Switch' },
              { label: 'Genre', value: 'Vehicular Soccer' },
              { label: 'Current Season', value: 'Season 22' },
              { label: 'Esports', value: 'RLCS (Rocket League Championship Series)' },
            ],
          },
          {
            heading: 'Latest Coverage',
            links: [
              { href: '/video-games/news/rocket-league-season-22-v2-66-patch-notes', label: 'Season 22 Patch Notes | v2.66' },
            ],
          },
          {
            heading: 'Video Games Hub',
            links: [
              { href: '/video-games', label: 'All Gaming Coverage' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'what-is-rl', label: 'What Is Rocket League' },
        { id: 'season-22', label: 'Season 22 | Current Updates' },
        { id: 'ranks', label: 'Competitive Ranks | Full Tier Breakdown' },
        { id: 'esports', label: 'RLCS Esports | Structure and Teams' },
        { id: 'mechanics', label: 'Core Mechanics | Aerials, Boost, Dribbling' },
        { id: 'car-builds', label: 'Car Builds | Hitboxes Explained' },
        { id: 'coverage', label: 'OzoneNews Rocket League Coverage' },
      ]}
      relatedLinks={[
        { href: '/video-games/news/rocket-league-season-22-v2-66-patch-notes', label: 'Season 22 Patch Notes | v2.66', description: 'Rocket Pass, concurrent LTEs, ranked modifications, and training overhaul' },
        { href: '/video-games/fortnite', label: 'Fortnite Hub', description: 'Chapter 6 Season 2 news, guides, and patch notes' },
        { href: '/video-games', label: 'Video Games Hub', description: 'All gaming news and guides on OzoneNews' },
      ]}
      backLink={{ href: '/video-games', label: 'Video Games' }}
    >
      <TableOfContents items={[
        { id: 'what-is-rl', label: 'What Is Rocket League' },
        { id: 'season-22', label: 'Season 22 | Current Updates' },
        { id: 'ranks', label: 'Competitive Ranks | Full Tier Breakdown' },
        { id: 'esports', label: 'RLCS Esports | Structure and Teams' },
        { id: 'mechanics', label: 'Core Mechanics | Aerials, Boost, Dribbling' },
        { id: 'car-builds', label: 'Car Builds | Hitboxes Explained' },
        { id: 'coverage', label: 'OzoneNews Rocket League Coverage' },
      ]} />

      <Section id="what-is-rl" title="What Is Rocket League | Physics-Based Vehicular Soccer">
        <p>
          <strong>Rocket League</strong> is a physics-based vehicular soccer game developed by{' '}
          <strong>Psyonix</strong> and published by <strong>Epic Games</strong>. Players control
          rocket-powered cars and compete to hit an oversized ball into the opposing team's goal
          across matches that last five minutes in standard competitive play. The game became
          free-to-play in September 2020 and is available on PC (Epic Games Store and Steam legacy),
          PlayStation 5, PlayStation 4, Xbox Series X|S, Xbox One, and Nintendo Switch.
        </p>
        <p>
          Despite its simple premise, Rocket League has a mechanical ceiling among the highest of
          any competitive game. The physics engine allows players to drive on walls and ceilings,
          fly through the air using boost, and execute aerial shots and saves at speeds that require
          thousands of hours to master. The skill gap between Bronze and Grand Champion, the game's
          highest standard rank, is substantial enough that professional RLCS players and casual
          players are effectively playing different games within the same lobby structure.
        </p>
        <p>
          The game launched in July 2015 as a spiritual successor to Psyonix's earlier{' '}
          <em>Supersonic Acrobatic Rocket-Powered Battle-Cars</em> (2008). Its first year on PlayStation
          Plus introduced it to millions of players simultaneously, seeding the initial competitive
          community that would grow into one of the most active esports ecosystems in the world.
        </p>
      </Section>

      <Section id="season-22" title="Season 22 | Current Updates and Patch Notes">
        <p>
          Rocket League Season 22 launched with the <strong>v2.66 update</strong>, introducing a new
          Rocket Pass, concurrent Limited Time Events (LTEs), a redesigned News Panel within the
          game client, modified ranked matchmaking parameters, and a major overhaul to the
          in-game training system. Season 22 continues Psyonix's post-Epic acquisition approach
          of bundling cosmetic content updates with structural competitive improvements.
        </p>
        <p>
          The concurrent LTE system is the most significant structural change in Season 22. Previously,
          limited-time modes ran sequentially. Season 22 allows multiple LTEs to run simultaneously,
          giving players more variety in playlist selection at any given time. The change directly
          addresses one of the most common complaints from the community: that rotating LTEs meant
          players often missed modes they wanted to play.
        </p>
        <p>
          Full patch notes for v2.66 including all ranked modifications, Rocket Pass item tiers,
          and training changes are covered in the{' '}
          <Link href="/video-games/news/rocket-league-season-22-v2-66-patch-notes" className="text-blue-600 hover:text-blue-800 underline">
            Season 22 v2.66 patch notes article
          </Link>.
        </p>
      </Section>

      <Section id="ranks" title="Competitive Ranks | Full Tier Breakdown">
        <p>
          Rocket League's competitive ranking system uses nine tiers, each divided into divisions.
          Rank is earned through Ranked Matchmaking Rating (MMR) gained and lost from wins and
          losses in competitive playlists including 1v1, 2v2, 3v3, and Hoops, Dropshot, and
          Snow Day in their respective competitive modes.
        </p>
        <p>
          The nine tiers in ascending order are: <strong>Bronze</strong>, <strong>Silver</strong>,{' '}
          <strong>Gold</strong>, <strong>Platinum</strong>, <strong>Diamond</strong>,{' '}
          <strong>Champion</strong>, <strong>Grand Champion</strong>, <strong>Supersonic Legend</strong>,
          and <strong>SSL</strong> (Supersonic Legend top percentile). Each tier from Bronze through
          Grand Champion has three divisions (I, II, III).
        </p>
        <p>
          The rank distribution is heavily weighted toward the lower-middle tiers. The majority of
          the active player base sits in Platinum and Diamond. Champion and above represents a
          significant minority, and Supersonic Legend is occupied by a fraction of a percent of
          players. Grand Champion is itself a meaningful achievement for most dedicated players.
        </p>
        <p>
          Season 22 introduced modifications to the MMR gain and loss calculations that affect
          the rate of rank mobility, particularly at the Diamond-to-Champion transition, historically
          one of the most contested rank thresholds in the game.
        </p>
      </Section>

      <Section id="esports" title="RLCS Esports | Structure, Teams, and 2026 Season">
        <p>
          The <strong>Rocket League Championship Series (RLCS)</strong> is the official global
          esports circuit organized by Psyonix and Epic Games. It operates across four major
          regions: North America, Europe, Middle East and North Africa (MENA), and South America,
          with additional sub-regional coverage for Oceania, Asia-Pacific, and Sub-Saharan Africa.
        </p>
        <p>
          The RLCS season runs as a series of regional events building toward international
          Majors and the RLCS World Championship. Teams earn RLCS points through regional
          tournament placements across Split 1, Split 2, and Split 3 of each season year,
          qualifying for the World Championship based on cumulative point totals.
        </p>
        <p>
          Top RLCS organizations include Team Vitality, Karmine Corp, G2 Esports, and NRG,
          among the most consistently competitive across regions. The RLCS World Championship
          has historically drawn peak viewership above 200,000 concurrent viewers, placing it
          among the top-watched esports events in its broadcast windows.
        </p>
      </Section>

      <Section id="mechanics" title="Core Mechanics | Aerials, Boost, Dribbling, and Wave Dashes">
        <p>
          Rocket League's mechanical complexity emerges from the interaction of its physics engine
          with boost management and car control inputs. The fundamental skills for competitive play,
          in rough order of acquisition, are: consistent ground shooting, boost management,
          air roll control, aerial shots, wall clears, and saves. The advanced tier adds:
          double touches, ceiling shots, flip resets, and musty flicks.
        </p>
        <p>
          <strong>Aerial play</strong> is the mechanic most associated with high-level Rocket League.
          Players use boost to launch off the ground and redirect the car mid-air to meet the ball
          at height, enabling offensive shots and defensive saves that ground play cannot reach.
          Fast aerials, which compress the launch time, are the standard above Diamond rank.
        </p>
        <p>
          <strong>Boost management</strong> is equally important. Each car has a maximum of 100
          boost. Large boost pads around the field provide 100 units; small pads scattered across
          the pitch provide 12. Collecting boost efficiently while maintaining positional awareness
          and not over-committing is the core skill-expression difference between mid-rank and
          high-rank play.
        </p>
        <p>
          <strong>Wave dashes</strong> and <strong>half-flips</strong> are ground-level mechanics
          that allow speed maintenance and directional reversals without the momentum loss of
          standard turns. They are staples at Champion rank and above.
        </p>
      </Section>

      <Section id="car-builds" title="Car Builds | Hitboxes, Popular Choices, and Settings">
        <p>
          Rocket League's cars are cosmetically diverse but mechanically sorted into a smaller
          set of <strong>hitbox classes</strong>. The hitbox determines the actual collision shape
          of the car regardless of how it looks. The six hitbox classes are: Octane, Dominus,
          Breakout, Plank, Hybrid, and Merc.
        </p>
        <p>
          The <strong>Octane hitbox</strong> is the most commonly used in competitive play at all
          levels from Diamond upward. It is taller and slightly shorter than the Dominus, which
          makes it more forgiving for aerial contact and flicks. The <strong>Dominus hitbox</strong>
          is wider and flatter, preferred by players whose playstyle favors ground dribbling and
          front-face shots. Professional RLCS rosters use both, with Octane being the plurality.
        </p>
        <p>
          Car customization in Rocket League is purely cosmetic beyond hitbox selection. Decals,
          wheels, boost effects, toppers, and goal explosions do not affect car performance.
          The <strong>camera settings</strong> are among the most impactful non-cosmetic
          adjustments: field of view, camera height, camera angle, and ball camera toggle behavior
          each significantly affect how a player reads the field. Standard competitive camera
          presets shared widely in the community prioritize wide FOV (around 110) and lower
          camera angle for improved aerial trajectory reading.
        </p>
      </Section>

      <Section id="coverage" title="OzoneNews Rocket League Coverage">
        <p>
          OzoneNews covers Rocket League patch notes, esports results, and competitive guides.
          The most recent article covers{' '}
          <Link href="/video-games/news/rocket-league-season-22-v2-66-patch-notes" className="text-blue-600 hover:text-blue-800 underline">
            Season 22 v2.66 patch notes
          </Link>
          , including the full Rocket Pass breakdown, the concurrent LTE system changes, and the
          ranked matchmaking modifications. All gaming coverage including Rocket League updates
          is indexed on the{' '}
          <Link href="/video-games" className="text-blue-600 hover:text-blue-800 underline">
            Video Games hub
          </Link>.
        </p>
      </Section>
    </ArticlePage>
  );
}
