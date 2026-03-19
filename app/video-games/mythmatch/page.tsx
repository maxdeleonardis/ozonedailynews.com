import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ObjectDesign,
  ObjSection,
  ObjHighlight,
  ObjQuote,
  ObjCallout,
  ObjTimeline,
  ObjStatGrid,
} from '@/components/ObjectDesign';
import { DataTable } from '@/components/ArticlePage';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: 'Mythmatch — Gameplay, Story, Developer & Pricing | ObjectWire',
  description:
    "Complete guide to Mythmatch — the narrative merge-puzzle RPG from Team Artichoke. Released March 13, 2026 on Steam and macOS. Play as Artemis cast down by Olympus Inc., helping the women of Ithaca through a cozy, anti-capitalist town-building adventure on the world map.",
  keywords: [
    'Mythmatch',
    'Mythmatch game',
    'Team Artichoke',
    'Moo Yu developer',
    'merge puzzle RPG',
    'Greek mythology game 2026',
    'Mythmatch Steam',
    'Artemis game',
    'indie game SXSW',
    'Wholesome Direct game',
    'anti-capitalist game',
    'narrative puzzle RPG',
    'cozy game 2026',
    'UK Games Fund',
    'LittleBigPlanet developer',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/mythmatch',
  },
  openGraph: {
    title: 'Mythmatch — Complete Guide: Gameplay, Story, Developer & Pricing',
    description:
      'Team Artichoke\'s Mythmatch launched March 13, 2026 on Steam. Play as Artemis rejected by "Olympus Inc." and help the women of Ithaca rebuild through a bow-powered merge-puzzle mechanic. $15.99 until March 27.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/mythmatch',
    siteName: 'ObjectWire',
    section: 'Video Games',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mythmatch — Indie Merge RPG Guide | ObjectWire',
    description:
      'Artemis vs. Olympus Inc. — Team Artichoke\'s cozy, anti-capitalist merge-puzzle RPG is out now on Steam. $15.99 (20% off) until March 27.',
  },
};

export default function MythmatchPage() {
  return (
    <>
      <NewsArticleSchema
        title="Mythmatch — Gameplay, Story, Developer & Complete Guide"
        description="Complete guide to Mythmatch, the narrative merge-puzzle RPG developed by Team Artichoke. Released March 13, 2026 on Steam and macOS, the game stars Artemis navigating a satirical Olympus Inc. and helping the women of Ithaca through altruism and community-building."
        publishedTime="2026-03-14T00:00:00Z"
        modifiedTime="2026-03-14T00:00:00Z"
        author="ObjectWire Gaming Desk"
        articleUrl="https://www.objectwire.org/video-games/mythmatch"
        section="Video Games"
        keywords={[
          'Mythmatch',
          'Team Artichoke',
          'Moo Yu',
          'Greek mythology game',
          'merge puzzle RPG',
          'indie game 2026',
          'Steam',
          'Artemis',
          'Wholesome Direct',
        ]}
      />

      <ObjectDesign
        title="Mythmatch"
        subtitle="Team Artichoke's cozy, anti-capitalist merge-puzzle RPG set in ancient Ithaca — out now on Steam."
        category="Video Games"
        categoryColor="purple"
        publishDate="March 14, 2026"
        lastUpdated="March 14, 2026"
        trending
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/video-games', label: 'Video Games' },
          { href: '/video-games/mythmatch', label: 'Mythmatch' },
        ]}
        infoBox={{
          title: 'Mythmatch',
          accentColor: 'purple',
          items: [
            { label: 'Developer', value: 'Team Artichoke' },
            { label: 'Creative Director', value: 'Moo Yu' },
            { label: 'Release Date', value: 'March 13, 2026' },
            { label: 'Platforms', value: 'PC (Steam) · macOS · Steam Deck (Verified)' },
            { label: 'Genre', value: 'Narrative Merge-Puzzle / Town-Building RPG' },
            { label: 'Setting', value: 'Ancient Ithaca, Greece' },
            { label: 'Protagonist', value: 'Artemis' },
            { label: 'Standard Price', value: '$19.99' },
            { label: 'Sale Price', value: '$15.99 (–20%, ends March 27)' },
            { label: 'Soundtrack Bundle', value: 'Available — 20% discount' },
            { label: 'Funding', value: 'UK Games Fund (partial)' },
            { label: 'Featured At', value: 'Wholesome Direct · Tiny Teams' },
          ],
        }}
        tableOfContents={[
          { id: 'overview', label: 'Overview' },
          { id: 'story', label: 'Story & Setting' },
          { id: 'gameplay', label: 'Gameplay' },
          { id: 'bow-mechanic', label: 'The Bow Mechanic', level: 2 },
          { id: 'mini-games', label: 'Mini-Games', level: 2 },
          { id: 'accessibility', label: 'Accessibility', level: 2 },
          { id: 'developer', label: 'Developer — Team Artichoke' },
          { id: 'release', label: 'Release & Pricing' },
          { id: 'reception', label: 'Critical Reception' },
          { id: 'references', label: 'References' },
        ]}
        tags={[
          'Mythmatch',
          'TeamArtichoke',
          'IndieGame',
          'MergePuzzle',
          'GreekMythology',
          'CosyGames',
          'Steam2026',
          'VideoGames',
        ]}
        relatedLinks={[
          {
            href: '/video-games',
            label: 'Video Games Hub',
            description: "ObjectWire's full video games coverage",
            category: 'Hub',
          },
          {
            href: '/video-games/game-of-the-year-2026-Clair-Obscur',
            label: 'Game of the Year 2026',
            description: 'Clair Obscur and the best games of 2026',
            category: 'Video Games',
          },
          {
            href: '/entertainment',
            label: 'Entertainment',
            description: 'Film, TV, and pop culture coverage',
            category: 'Entertainment',
          },
        ]}
        externalLinks={[
          {
            href: 'https://store.steampowered.com/app/mythmatch',
            label: 'Mythmatch on Steam',
          },
          {
            href: 'https://ukg.games/',
            label: 'UK Games Fund — Official Site',
          },
          {
            href: 'https://wholesomegames.com/',
            label: 'Wholesome Direct — Official Site',
          },
        ]}
      >

        {/* ── KEY STATS ────────────────────────────── */}
        <ObjStatGrid
          accentColor="purple"
          columns={4}
          stats={[
            { value: 'Mar 13', label: 'Release Date', description: '2026 — Steam & macOS' },
            { value: '$15.99', label: 'Launch Sale Price', description: '20% off — ends March 27, 2026' },
            { value: '4 Years', label: 'In Development', description: 'Team Artichoke — Ithaca, Greece' },
            { value: '2', label: 'Showcase Features', description: 'Wholesome Direct & Tiny Teams' },
          ]}
        />

        {/* ── OVERVIEW ─────────────────────────────── */}
        <ObjSection id="overview" title="Overview" accentColor="purple">
          <p>
            <strong>Mythmatch</strong> is a narrative-driven merge-puzzle RPG developed by
            independent studio <strong>Team Artichoke</strong> and released on{' '}
            <strong>March 13, 2026</strong> for PC (Steam) and macOS. The game is also
            verified for the{' '}
            <Link href="/video-games" className="text-purple-600 hover:underline">
              Steam Deck
            </Link>
            . After four years in development — built out of Ithaca, Greece — Mythmatch
            delivers a sharp anti-capitalist critique of Olympian power structures through
            the lens of a cozy, comic-book-styled adventure.
          </p>
          <p>
            Players take on the role of the goddess <strong>Artemis</strong>, who is cast
            down to the mortal realm after being rejected by the Olympian elite — reimagined
            here as a gatekeeping corporate board, <em>"Olympus Inc."</em> Stripped of divine
            status, Artemis uses her bow and merge-puzzle powers to help the women of Ithaca
            rebuild their community while the men are away fighting the Trojan War.
          </p>
          <p>
            The game was created with support from the{' '}
            <strong>UK Games Fund</strong> and has been featured prominently throughout its
            development in indie showcases including <strong>Wholesome Direct</strong> and{' '}
            <strong>Tiny Teams</strong>. It was designed as a deliberate antithesis to
            ad-riddled mobile merge games — using the same core mechanic but reorienting
            it around altruism, community resilience, and storytelling.
          </p>
          <ObjCallout type="note" title="Launch Window Sale">
            Mythmatch launched at <strong>$19.99</strong> with an introductory{' '}
            <strong>20% discount</strong> bringing it to <strong>$15.99</strong> until{' '}
            <strong>March 27, 2026</strong>. The original soundtrack bundle is also
            available at 20% off during the same window.
          </ObjCallout>
        </ObjSection>

        {/* ── STORY & SETTING ──────────────────────── */}
        <ObjSection id="story" title="Story & Setting" accentColor="purple">
          <p>
            Mythmatch reimagines the mythology of ancient Greece through a satirical,
            modern-corporate lens. The gods of Olympus function as a{' '}
            <strong>gatekeeping corporate board</strong> — complete with a sexist HR
            department that grants divine titles and powers to the <em>"boys' club"</em>{' '}
            while demanding that others prove their worth before being granted any standing.
          </p>
          <p>
            <strong>Artemis</strong>, goddess of the hunt, finds herself on the wrong side
            of this power structure. Rejected by the elite and cast down into the mortal
            realm, she arrives in <strong>Ithaca</strong> — a vibrant, comic-book-styled
            ancient world currently hollowed out by the absence of its men, all away
            at the Trojan War.
          </p>
          <p>
            Rather than seeking a way back to Olympus or searching for the validation of
            divine authority, Artemis pivots entirely. The game's central arc is not one of
            revenge or restoration — it is one of{' '}
            <strong>mutual aid and community resilience</strong>. Artemis helps the women
            of Ithaca rebuild: livestock, tools, shelters, and social bonds. The narrative
            argues that local relationships and collective action are more meaningful
            than the corrupted "belief" currency that powers the Olympian hierarchy.
          </p>
          <ObjHighlight type="key-point" color="purple">
            The game explicitly rejects the common video game narrative of{' '}
            <em>seeking divine power to defeat a corrupt system</em>. Instead, Artemis
            succeeds by building something new alongside ordinary people — a foundational
            anti-capitalist storytelling choice that runs through every mechanic and
            narrative beat.
          </ObjHighlight>
          <DataTable
            headers={['Element', 'Details']}
            rows={[
              ['Setting', 'Ancient Ithaca, Greece — comic-book visual style'],
              ['Era', 'During the Trojan War — men largely absent from the island'],
              ['Protagonist', 'Artemis — cast out of Olympus after being rejected by the divine board'],
              ['Antagonist System', '"Olympus Inc." — a corporate-board reimagining of the Greek gods'],
              ['Core Conflict', 'Artemis vs. institutional divine authority; altruism vs. power accumulation'],
              ['Resolution Path', 'Community building, mutual aid, and restoring Ithaca\'s resilience'],
            ]}
          />
        </ObjSection>

        {/* ── GAMEPLAY ─────────────────────────────── */}
        <ObjSection id="gameplay" title="Gameplay" accentColor="purple">
          <p>
            Mythmatch is a <strong>narrative merge-puzzle RPG</strong> built around a
            large, explorable world map of Ithaca. The core loop involves collecting items,
            merging them into tools, livestock, and building materials, and distributing
            those resources to the women of Ithaca to rebuild their livelihoods. Each
            successful contribution advances the story and unlocks new areas or narrative
            branches.
          </p>
          <p>
            The game deliberately distances itself from the design patterns of mobile
            "merger" games. There are no advertisements, no energy timers, and no
            exploitative microtransactions. The mechanic is repurposed entirely as a tool
            for <strong>altruism</strong> — every merge you make serves a person in the
            community rather than a personal power or score accumulation.
          </p>
          <DataTable
            headers={['Feature', 'Details']}
            rows={[
              ['Genre', 'Narrative Merge-Puzzle / Town-Building RPG'],
              ['World Structure', 'Sprawling Ithaca world map — non-grid-based exploration'],
              ['Core Mechanic', 'Bow-powered item snatching and merging across the open world'],
              ['Progression', 'Community aid missions unlock story chapters and map areas'],
              ['Mini-Games', 'Turn-based auto-battlers and board-clear challenges vs. the Gods'],
              ['Difficulty', 'Adjustable — multiple settings available'],
              ['Monetisation', 'None — no ads, no microtransactions, no energy timers'],
            ]}
          />

          {/* ── BOW MECHANIC ─── */}
          <ObjSection id="bow-mechanic" title="The Bow Mechanic" level={3} accentColor="purple">
            <p>
              The defining gameplay innovation in Mythmatch is the{' '}
              <strong>"Bow" mechanic</strong>. Breaking from the standard grid-based puzzle
              format common to merge games, players use <strong>Artemis's bow</strong> to{' '}
              physically snatch items from across the world map — dragging them together in
              space to trigger merges. The result is a far more kinetic and spatial
              experience than traditional merge puzzles, tied directly to Artemis's identity
              as the goddess of the hunt.
            </p>
            <p>
              The bow gives players a sense of agency that standard grid mergers lack:
              items exist in a real-world location on the Ithaca map rather than an
              abstract tile grid, and the act of reaching out to pull them together
              feels consistent with Artemis's character. The mechanic scales in complexity
              as the world map expands and more item types become available.
            </p>
          </ObjSection>

          {/* ── MINI-GAMES ─── */}
          <ObjSection id="mini-games" title="Mini-Games" level={3} accentColor="purple">
            <p>
              Mythmatch incorporates two distinct mini-game formats that break up the
              core merge loop and introduce conflict into what is otherwise a peaceful,
              cozy experience:
            </p>
            <DataTable
              headers={['Mini-Game Type', 'Description']}
              rows={[
                [
                  'Turn-Based Auto-Battlers',
                  'Structured encounters where Artemis faces off against agents of the Olympian hierarchy. Combat resolves automatically based on items, allies, and resources the player has prepared.',
                ],
                [
                  'Board-Clear Challenges',
                  'Puzzle-format encounters against specific Gods — requiring players to clear a board configuration under constraint, testing mastery of the merge mechanic in a time-pressured context.',
                ],
              ]}
            />
          </ObjSection>

          {/* ── ACCESSIBILITY ─── */}
          <ObjSection id="accessibility" title="Accessibility" level={3} accentColor="purple">
            <p>
              Team Artichoke built a suite of accessibility options into Mythmatch from the
              ground up, reflecting the studio's commitment to inclusive design:
            </p>
            <DataTable
              headers={['Accessibility Feature', 'Details']}
              rows={[
                ['Keyboard Only Mode', 'Full game playable without mouse — complete keyboard navigation support'],
                ['Camera Comfort Settings', 'Adjustable camera movement speed and zoom for motion sensitivity'],
                ['Difficulty Settings', 'Multiple difficulty tiers — game is completable at all levels'],
              ]}
            />
            <ObjCallout type="note" title="Steam Deck Verified">
              Mythmatch has received official Steam Deck verification, confirming that all
              gameplay, UI, and accessibility features are fully functional on Valve's
              handheld hardware.
            </ObjCallout>
          </ObjSection>
        </ObjSection>

        {/* ── DEVELOPER ────────────────────────────── */}
        <ObjSection id="developer" title="Developer — Team Artichoke" accentColor="purple">
          <p>
            <strong>Team Artichoke</strong> is the independent studio behind Mythmatch,
            operating out of <strong>Ithaca, Greece</strong>. The studio is led by
            Creative Director <strong>Moo Yu</strong>, a veteran developer with significant
            previous credits in the indie and social games space.
          </p>
          <p>
            Yu is best known for his contributions to{' '}
            <strong>
              <em>LittleBigPlanet</em>
            </strong>{' '}
            — the landmark PlayStation platformer known for its user-generated content
            tools and distinctively handcrafted aesthetic — and{' '}
            <strong>
              <em>Knights and Bikes</em>
            </strong>
            , a critically acclaimed narrative adventure set in 1980s Cornwall that shared
            Mythmatch's emphasis on community, friendship, and non-combat resolution.
            Both titles are notable touchstones for understanding Team Artichoke's design
            philosophy.
          </p>
          <p>
            Mythmatch was partially funded by the <strong>UK Games Fund</strong> — a
            non-profit organisation that provides grants to UK-based games businesses and
            developers — reflecting the studio's UK connections despite its Greek base
            of operations. The game was developed over a four-year period and made regular
            appearances in curated indie showcases before launch.
          </p>
          <ObjHighlight type="key-point" color="purple">
            <strong>Moo Yu</strong> on the game's design philosophy:{' '}
            <em>
              "We wanted to make the complete antithesis of those grimly ad-riddled mobile
              mergers — a combat-free game about Greek mythology, anti-capitalism, and
              altruism."
            </em>
          </ObjHighlight>
          <DataTable
            headers={['Detail', 'Information']}
            rows={[
              ['Studio Name', 'Team Artichoke'],
              ['Location', 'Ithaca, Greece'],
              ['Creative Director', 'Moo Yu'],
              ['Composer', 'Gina (original score)'],
              ['Development Period', 'Approx. 4 years (2022–2026)'],
              ['Funding', 'UK Games Fund (partial)'],
              ['LittleBigPlanet (2008)', 'Moo Yu — credited developer'],
              ['Knights and Bikes (2019)', 'Moo Yu — lead creative'],
              ['Showcase History', 'Wholesome Direct, Tiny Teams'],
            ]}
          />
        </ObjSection>

        {/* ── RELEASE & PRICING ────────────────────── */}
        <ObjSection id="release" title="Release & Pricing" accentColor="purple">
          <p>
            Mythmatch officially launched on <strong>March 13, 2026</strong>, simultaneously
            on PC via Steam and macOS. The{' '}
            <Link href="/video-games" className="text-purple-600 hover:underline">
              Steam Deck
            </Link>{' '}
            version carries full Verified status.
          </p>
          <p>
            At launch, an introductory <strong>20% discount</strong> was applied to both
            the base game and the official soundtrack bundle — both sold separately. The
            sale runs until <strong>March 27, 2026</strong>.
          </p>
          <DataTable
            headers={['Edition', 'Standard Price', 'Sale Price (ends Mar 27)', 'Platform']}
            rows={[
              ['Base Game', '$19.99', '$15.99', 'Steam · macOS'],
              ['Soundtrack Bundle', 'Varies', '20% discount applied', 'Steam'],
              ['Steam Deck', '$19.99', '$15.99', 'Steam Deck (Verified)'],
            ]}
          />
          <ObjCallout type="insight" title="No Free-to-Play Elements">
            Unlike mobile merge games, Mythmatch has a one-time purchase price with no
            ads, no energy systems, and no in-app purchases of any kind. The 20% launch
            discount is the only promotional pricing the studio has announced.
          </ObjCallout>

          {/* Timeline */}
          <ObjTimeline
            accentColor="purple"
            events={[
              {
                time: '2022',
                title: 'Development Begins',
                description:
                  'Team Artichoke, led by Creative Director Moo Yu, begins work on Mythmatch in Ithaca, Greece. Project partially funded by the UK Games Fund.',
              },
              {
                time: '2023',
                title: 'Wholesome Direct Debut',
                description:
                  'Mythmatch makes its public debut at Wholesome Direct, one of the premier indie game showcases for cozy and feel-good games. First public reaction is strongly positive.',
              },
              {
                time: '2024–2025',
                title: 'Tiny Teams & Further Showcases',
                description:
                  'The game continues to appear in Tiny Teams and other curated indie events, steadily building a community of interested players ahead of launch.',
              },
              {
                time: 'March 13, 2026',
                title: 'Official Launch',
                description:
                  'Mythmatch launches on Steam and macOS. Steam Deck Verified status confirmed at launch. 20% introductory discount applied to base game and soundtrack bundle.',
              },
              {
                time: 'March 27, 2026',
                title: 'Launch Sale Ends',
                description:
                  'The 20% introductory discount expires. Standard price of $19.99 applies from this date.',
              },
            ]}
          />
        </ObjSection>

        {/* ── CRITICAL RECEPTION ───────────────────── */}
        <ObjSection id="reception" title="Critical Reception" accentColor="purple">
          <p>
            Early critical response to Mythmatch has been enthusiastic, with reviewers
            singling out its subversive design philosophy, narrative coherence, and the
            clarity of its anti-capitalist message as distinguishing qualities in the
            crowded cozy game market. The game's refusal to deploy any of the manipulative
            design patterns common to mobile merge games has been a consistent talking point
            across reviews.
          </p>
          <ObjQuote source="John Walker" sourceRole="Kotaku">
            "This is the complete antithesis of those grimly ad-riddled mobile mergers… a
            combat-free game about Greek mythology, anti-capitalism, and altruism."
          </ObjQuote>
          <p>
            Walker's review framing — positioning Mythmatch explicitly against the mobile
            merge genre — has been widely cited in early coverage as capturing something
            essential about what Team Artichoke has built. The game's{' '}
            <Link href="/video-games" className="text-purple-600 hover:underline">
              indie gaming
            </Link>{' '}
            community reception has also been strong, with particular enthusiasm around the
            SXSW 2026 window and the broader cozy games resurgence of the mid-2020s.
          </p>
          <ObjCallout type="insight" title="SXSW 2026 Context">
            While Mythmatch did not premiere at SXSW directly, its launch on March 13 —
            one day before the conclusion of SXSW 2026 in Austin — placed it squarely
            within the broader cultural conversation around indie creativity that
            characterises the festival window each year.
          </ObjCallout>
          <ObjHighlight type="key-point" color="purple">
            The combination of the SXSW cultural moment, the Wholesome Direct audience
            built over three years, and a first-week 20% discount positions Mythmatch
            for strong launch-window sales momentum within the indie PC market.
          </ObjHighlight>
        </ObjSection>

      </ObjectDesign>
    </>
  );
}
