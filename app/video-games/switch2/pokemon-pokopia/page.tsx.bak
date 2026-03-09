import type { Metadata } from 'next';
import Link from 'next/link';
import JackArticle, {
  JackCaseOverview,
  JackStats,
  JackVideo,
  JackCallout,
  JackSection,
} from '@/components/JackArticle';

// ============================================================
// CONSTANTS
// ============================================================
const SLUG = '/video-games/switch2/pokemon-pokopia';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/entertainment/new_pokemon_game.PNG';

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  title:
    'Pokémon Pokopia Achieves Highest Review Scores in Pokémon Franchise History on Nintendo Switch 2 | ObjectWire',
  description:
    'Pokémon Pokopia scored 93 on OpenCritic and 90 on Metacritic from early reviews — the highest marks ever recorded for a Pokémon title. The life simulation game launches exclusively on Nintendo Switch 2 on March 5, 2026.',
  keywords: [
    'Pokémon Pokopia review scores 2026',
    'Pokémon Pokopia Nintendo Switch 2',
    'Pokémon Pokopia 93 OpenCritic',
    'Pokémon Pokopia 90 Metacritic',
    'Game Freak Omega Force Pokopia',
    'highest rated Pokémon game ever',
    'Pokémon Pokopia March 2026',
    'Pokémon Pokopia Ditto sandbox',
    'BenDavid Grabinski Hulu film 2026',
    'Nintendo Switch 2 exclusive 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'Pokémon Pokopia — Franchise-High 93 on OpenCritic, 90 on Metacritic. Launches March 5, 2026 on Switch 2.',
    description:
      'Game Freak and Omega Force\'s sandbox Pokémon game scores higher than any title in franchise history. No battles — just rebuilding a post-apocalyptic Kanto as a shape-shifting Ditto.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-02T12:00:00Z',
    modifiedTime: '2026-03-02T12:00:00Z',
    section: 'Gaming',
    tags: [
      'Pokémon Pokopia', 'Nintendo Switch 2', 'Game Freak', 'Omega Force',
      'Pokémon', 'Gaming', 'Nintendo', 'Review', 'OpenCritic', 'Metacritic',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokémon Pokopia: 93 OpenCritic. 90 Metacritic. Highest in Franchise History.',
    description:
      'No battles. Play as Ditto rebuilding post-apocalyptic Kanto. Game Freak × Omega Force. Switch 2 exclusive. March 5, 2026.',
    images: [IMAGE_URL],
  },
};

// ============================================================
// PAGE
// ============================================================
export default function PokemonPokopiaPage() {
  return (
    <JackArticle
      layout="news"
      categories={[
        { label: 'GAME REVIEW', color: 'green' },
        { label: 'NINTENDO SWITCH 2', color: 'blue' },
      ]}
      publishDate="March 2, 2026"
      publishDateISO="2026-03-02T12:00:00Z"
      modifiedDateISO="2026-03-02T12:00:00Z"
      readTime="7 min read"
      title="Pokémon Pokopia Achieves Highest Review Scores in Pokémon Franchise History on Nintendo Switch 2"
      subtitle="Pokopia scored 93 on OpenCritic and 90 on Metacritic — surpassing every prior mainline and spinoff Pokémon title. The life simulation game, developed by Game Freak and Omega Force, launches exclusively on Nintendo Switch 2 on March 5, 2026."
      heroImage={{
        src: IMAGE_URL,
        alt: 'Pokémon Pokopia — Nintendo Switch 2 exclusive, March 2026',
        caption: 'Pokémon Pokopia official artwork. Developed by Game Freak and Koei Tecmo\'s Omega Force, launching March 5, 2026 on Nintendo Switch 2.',
        credit: 'The Pokémon Company / Game Freak / Omega Force',
      }}
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/video-games', label: 'Video Games' },
        { href: '/video-games/switch2', label: 'Nintendo Switch 2' },
        { href: SLUG, label: 'Pokémon Pokopia' },
      ]}
      author={{
        name: 'ObjectWire Gaming Desk',
        department: 'Gaming Correspondent',
      }}
      articleUrl={ARTICLE_URL}
      description="Pokémon Pokopia scored 93 on OpenCritic and 90 on Metacritic — the highest review scores in franchise history. Launches March 5, 2026 exclusively on Nintendo Switch 2."
      section="Gaming"
      keywords={[
        'Pokémon Pokopia', 'Nintendo Switch 2', 'Game Freak Omega Force',
        'highest rated Pokémon', 'Pokopia review 2026',
      ]}
      relatedArticles={[
        {
          href: '/video-games',
          category: 'VIDEO GAMES',
          categoryColor: 'text-blue-600',
          title: 'ObjectWire Video Games Coverage',
        },
        {
          href: '/video-games/arknights-endfield',
          category: 'GAME LAUNCH',
          categoryColor: 'text-blue-600',
          title: 'Arknights: Endfield — $173M in Two Weeks After January 22 Launch',
        },
        {
          href: '/video-games/nintendo',
          category: 'NINTENDO',
          categoryColor: 'text-red-600',
          title: 'Nintendo Coverage — ObjectWire',
        },
      ]}
      timeline={[
        { date: 'February 1, 2026', description: 'Pre-orders open for standard and digital deluxe editions.' },
        { date: 'February 2026', description: 'Official gameplay trailer shown at Nintendo Direct.' },
        { date: 'February 26, 2026', description: 'Review embargo lifts — 8 days before launch. First wave of critic scores published.', highlight: true },
        { date: 'March 1, 2026', description: 'OpenCritic aggregates 93 from 42 reviews (100% recommend). Metacritic reaches 90 from 28 reviews.', highlight: true },
        { date: 'March 3, 2026', description: 'Deluxe edition early access begins — 2 days ahead of full release.' },
        { date: 'March 5, 2026', description: 'Global launch exclusively on Nintendo Switch 2.', highlight: true },
      ]}
      documents={[
        { href: 'https://www.nintendo.com', label: 'Nintendo — Pokopia Official Page', icon: '🎮' },
        { href: 'https://opencritic.com', label: 'OpenCritic — Pokémon Pokopia (93)', icon: '📊' },
        { href: 'https://www.metacritic.com', label: 'Metacritic — Pokémon Pokopia (90)', icon: '📊' },
      ]}
      showCorrections
      showEditorialStandards
      footerTagline="When a Pokémon game skips battles for building and hits franchise-high scores of 93 on OpenCritic, the meta shifts from catching them all to crafting them homes."
      footerLinks={[
        { href: '/video-games', label: 'Video Games' },
        { href: '/video-games/nintendo', label: 'Nintendo' },
      ]}
    >

      {/* ── Lede ─────────────────────────────────────────────── */}
      <p>
        <strong>Pokémon Pokopia</strong> recorded a <strong>93 on OpenCritic</strong> and{' '}
        <strong>90 on Metacritic</strong> from early reviews published between February 26 and
        March 1, 2026 — the highest aggregate scores ever recorded for a Pokémon title across
        both platforms. The previous Metacritic high stood at <strong>88</strong> for{' '}
        <em>Pokémon Y</em> in 2013.
      </p>
      <p>
        The life simulation game places players as a shape-shifting{' '}
        <strong>Ditto</strong> rebuilding a post-apocalyptic Kanto region, with no traditional
        turn-based battles. Developed jointly by <strong>Game Freak</strong> and Koei Tecmo&apos;s{' '}
        <strong>Omega Force</strong>, Pokopia launches exclusively on{' '}
        <Link href="/video-games/nintendo" className="text-blue-600 hover:underline font-medium">
          Nintendo Switch 2
        </Link>{' '}
        on <strong>March 5, 2026</strong>.
      </p>

      <JackCaseOverview
        title="POKÉMON POKOPIA — QUICK FACTS"
        accentColor="green"
        items={[
          { label: 'OpenCritic Score:', value: '93 — 42 reviews, 100% recommend (as of March 1, 2026)' },
          { label: 'Metacritic Score:', value: '90 — 28 reviews (25 positive, 3 mixed)' },
          { label: 'Previous Franchise High:', value: '88 — Pokémon Y (Metacritic, 2013)' },
          { label: 'Developer:', value: 'Game Freak × Koei Tecmo\'s Omega Force' },
          { label: 'Platform:', value: 'Nintendo Switch 2 (exclusive)' },
          { label: 'Launch Date:', value: 'March 5, 2026' },
          { label: 'Standard Edition:', value: '$59.99' },
          { label: 'Deluxe Edition:', value: '$69.99 (includes cosmetic DLC, soundtrack, early access March 3)' },
          { label: 'Core Playtime:', value: '50+ hours for full Kanto restoration' },
        ]}
      />

      <JackStats
        title="REVIEW SCORE SNAPSHOT"
        accentColor="green"
        stats={[
          { value: '93', label: 'OpenCritic' },
          { value: '90', label: 'Metacritic' },
          { value: '100%', label: 'Critics Recommend' },
          { value: '88', label: 'Prev. Franchise High' },
        ]}
      />

      {/* ── Video ────────────────────────────────────────────── */}
      <JackVideo
        videoId="KV32d4bIzJE"
        title="Pokémon Pokopia — Official Trailer | Nintendo Switch 2"
        caption="Official trailer for Pokémon Pokopia. Launches March 5, 2026 exclusively on Nintendo Switch 2."
        provider="youtube"
      />

      {/* ── Section 1 ────────────────────────────────────────── */}
      <JackSection number={1} title="Review Scores Breakdown" accentColor="green">
        <p>
          Pokopia aggregated <strong>93</strong> across 42 critic reviews on OpenCritic as of
          March 1, 2026, with <strong>100% of reviewers recommending</strong> the title.
          Metacritic compiled <strong>90</strong> from 28 reviews — 25 positive and 3 mixed.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Outlet</th>
                <th className="px-4 py-3 text-right font-semibold">Score</th>
              </tr>
            </thead>
            <tbody>
              {[
                { outlet: 'Nintendo Life', score: '98/100' },
                { outlet: 'IGN', score: '95/100' },
                { outlet: 'GameSpot', score: '94/100' },
                { outlet: 'Eurogamer', score: '87/100' },
                { outlet: 'Polygon', score: '85/100' },
              ].map(({ outlet, score }, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border-b border-gray-100 font-medium">{outlet}</td>
                  <td className="px-4 py-3 border-b border-gray-100 text-right">{score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <JackCaseOverview
          title="FRANCHISE METACRITIC COMPARISON"
          accentColor="green"
          items={[
            { label: 'Pokémon Pokopia (2026):', value: '90 — franchise all-time high' },
            { label: 'Pokémon Y (2013):', value: '88 — previous record' },
            { label: 'Legends: Arceus (2022):', value: '83' },
            { label: 'Scarlet / Violet (2022):', value: '72 (average)' },
          ]}
        />

        <JackCallout accentColor="green" label="Franchise First">
          No prior Pokémon game — mainline or spinoff — reached 90 on Metacritic before Pokopia.
          The gap between Pokopia (90) and the previous record holder Pokémon Y (88) is larger
          than the gap between any two consecutive Pokémon generations on the same chart.
        </JackCallout>
      </JackSection>

      {/* ── Section 2 ────────────────────────────────────────── */}
      <JackSection number={2} title="Core Gameplay Loop in Post-Apocalyptic Kanto" accentColor="green">
        <p>
          Pokopia shifts entirely from turn-based battles to sandbox rebuilding. Players control{' '}
          <strong>Ditto</strong> in human form, guided by{' '}
          <strong>Professor Tangrowth</strong>, across a ruined Kanto region. Ditto transforms
          into Pokémon to access traversal abilities — surfing as Lapras, flying as Dragonite —
          and restoring habitats to attract species including Bulbasaur, Squirtle, and Charmander.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border-l-4 border-green-600 bg-green-50 p-4">
            <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">
              Core Mechanics
            </p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Craft and build ruins into functional areas</li>
              <li>Restore Pokémon habitats to attract species</li>
              <li>Fulfill NPC requests to repopulate Kanto</li>
              <li>Ditto transformation for traversal abilities</li>
              <li>50+ hour campaign for full restoration</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-600 bg-blue-50 p-4">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
              Multiplayer
            </p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Up to 4 players in shared Pallet Town instances</li>
              <li>Nintendo Switch 2 online multiplayer</li>
              <li>Co-operative habitat restoration</li>
              <li>Shared building and crafting sessions</li>
            </ul>
          </div>
        </div>

        <p>
          Reviewers noted sandbox mechanics blending elements from <em>Minecraft</em> and{' '}
          <em>Animal Crossing</em>, with Nintendo Life calling Pokopia{' '}
          &quot;one of the most robust Pokémon titles ever made.&quot; The full restoration arc
          spans <strong>50+ hours</strong> per GameSpot&apos;s playtime breakdown.
        </p>
      </JackSection>

      {/* ── Section 3 ────────────────────────────────────────── */}
      <JackSection
        number={3}
        title="Development Collaboration Between Game Freak and Omega Force"
        accentColor="green"
      >
        <p>
          Game Freak partnered with Koei Tecmo&apos;s <strong>Omega Force</strong> due to
          limited internal sandbox experience. Director <strong>Shigeru Ohmori</strong> stated
          in a Famitsu interview: <em>&quot;Despite having made a prototype, Game Freak had
          almost no development know-how in this genre.&quot;</em>
        </p>
        <p>
          Omega Force director <strong>Takuto Edagawa</strong>, previously on{' '}
          <em>Dragon Quest Builders 2</em>, led the largest team in the division&apos;s history.
          An alignment phase lasting <strong>3–4 months</strong> resolved core design questions
          before full production began, wrapping in late 2025.
        </p>

        <JackCallout accentColor="green" label="IGN Verdict">
          &quot;Pokopia masterfully blends creative freedom with the warm familiarity of Kanto —
          a sandbox that earns every one of its 95 points.&quot; — IGN, February 28, 2026.
        </JackCallout>
      </JackSection>

      {/* ── Section 4 ────────────────────────────────────────── */}
      <JackSection
        number={4}
        title="Nintendo Switch 2 Exclusive — Pricing and Technical Specs"
        accentColor="green"
      >
        <JackCaseOverview
          title="EDITION PRICING"
          accentColor="green"
          items={[
            { label: 'Standard Edition:', value: '$59.99 — launches March 5, 2026' },
            { label: 'Deluxe Edition:', value: '$69.99 — includes cosmetic DLC pack, full soundtrack, and early access from March 3' },
            { label: 'Pre-orders opened:', value: 'February 1, 2026' },
          ]}
        />

        <p>
          Nintendo Switch 2 hardware supports <strong>native 4K resolution</strong> while
          docked and <strong>1080p handheld</strong> at a locked{' '}
          <strong>60 frames per second</strong>, per a Digital Foundry technical preview. The
          performance ceiling allows Pokopia&apos;s open-world density — populated habitats,
          particle effects from restoration events, and up to 4-player sessions — without
          frame drops noted in any reviewed press build.
        </p>
      </JackSection>

      {/* ── Section 5 ────────────────────────────────────────── */}
      <JackSection number={5} title="Review Embargo and Early Access Timeline" accentColor="green">
        <p>
          Reviews lifted on <strong>February 26, 2026</strong> — 8 days before the March 5
          global launch — giving critics extended time with the full game prior to publication.
          Early access for Deluxe Edition buyers begins <strong>March 3, 2026</strong>, two days
          ahead of the standard release.
        </p>
        <p>
          By March 1, the OpenCritic page showed 42 reviews with a 93 aggregate and 100%
          recommendation rate. Metacritic had compiled 28 reviews at 90, with no negative scores
          and only three mixed readings. The review window remains open through launch.
        </p>
      </JackSection>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <h2>Frequently Asked Questions</h2>
      <div className="space-y-4 my-6">
        {[
          {
            q: 'What platform is Pokémon Pokopia on?',
            a: 'Pokémon Pokopia is a Nintendo Switch 2 exclusive. No PC, mobile, or other console versions have been announced.',
          },
          {
            q: 'Does Pokémon Pokopia have traditional battles?',
            a: 'No. Pokopia replaces turn-based battles entirely with sandbox rebuilding and habitat restoration. Players transform into Pokémon for traversal, not combat.',
          },
          {
            q: 'What is the highest Metacritic score a Pokémon game has ever received?',
            a: 'As of March 2026, Pokémon Pokopia holds the franchise high at 90. The previous record was 88 for Pokémon Y (2013).',
          },
          {
            q: 'How long is Pokémon Pokopia?',
            a: 'The full Kanto restoration campaign spans 50+ hours according to GameSpot\'s playtime analysis.',
          },
          {
            q: 'When does early access begin for the Deluxe Edition?',
            a: 'Deluxe Edition buyers can start playing March 3, 2026 — two days before the March 5 standard launch.',
          },
        ].map(({ q, a }, i) => (
          <div key={i} className="border border-gray-200 p-4">
            <p className="font-semibold text-sm mb-1">{q}</p>
            <p className="text-sm text-gray-700">{a}</p>
          </div>
        ))}
      </div>

    </JackArticle>
  );
}
