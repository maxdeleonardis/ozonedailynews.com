import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  JackSection,
  JackCaseOverview,
  JackCallout,
  JackStats,
} from '@/components/JackArticle';

const SLUG = '/video-games/epic';

const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/video-games/unreal-engine-epic-games-film-automotive-architecture-2026.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Unreal Engine Expands Beyond Gaming Into Film, Automotive, and Architecture — 2026 Adoption Trends | ObjectWire',
  description:
    "Unreal Engine powers more than 28% of PC games released in 2024 and has expanded to 4,826 verified companies across film, automotive, architecture, and simulation as of 2026. Over 35 car models ship Unreal Engine-powered HMIs. Cumulative film and TV projects exceed 500. Epic VP Sebastien Miglio: 'We planned to diversify this way.'",
  keywords: [
    'Unreal Engine non-gaming adoption 2026',
    'Unreal Engine film television automotive architecture',
    'Epic Games Unreal Engine industry expansion 2026',
    'Unreal Engine HMI automotive Ford Rivian Volvo',
    'Unreal Engine 28 percent PC games 2024 Sensor Tower',
    'Unreal Engine 4826 companies Landbase 2026',
    'Unreal Engine StageCraft Mandalorian virtual production',
    'Unreal Engine CES 2026 ADAS digital cockpit',
    'Sebastien Miglio Epic Games diversification',
    'Unreal Engine services market 1.86 billion 2024',
    'Unreal Engine War is Over Academy Award 2024',
    'Unreal Engine architecture visualization simulation',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Unreal Engine in 2026: 28% of PC Games, 35+ Car Dashboards, 500+ Film Projects",
    description:
      "Epic Games' Unreal Engine has grown from a 1998 shooter engine to the backbone of real-time 3D across gaming, film, automotive HMIs, and architectural visualization. 4,826 companies use it as of 2026. Epic VP: 'We planned to diversify this way.'",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T20:00:00Z',
    modifiedTime: '2026-03-01T20:00:00Z',
    section: 'Video Games',
    tags: [
      'Unreal Engine',
      'Epic Games',
      'Game Engine',
      'Virtual Production',
      'Automotive HMI',
      'Architecture Visualization',
      'Film',
      'Video Games',
      'Technology',
      'Sebastien Miglio',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Unreal Engine Is Now in Car Dashboards, Film Sets, and Architecture — Not Just Games",
    description:
      "28% of PC games. 35+ car HMIs. 500+ film/TV projects. 4,826 companies across industries. Epic's Unreal Engine expansion by the numbers — 2026.",
    images: [IMAGE_URL],
  },
};

// ─── Infobox data ─────────────────────────────────────────────────────────────

const engineOverview = [
  { label: 'Engine',          value: 'Unreal Engine — developed by Epic Games (Tim Sweeney, founder)' },
  { label: 'Origin',          value: '1998 — launched with first-person shooter Unreal' },
  { label: 'Gaming share',    value: '28% of PC games released in 2024 (Steam) — Sensor Tower Big Game Engines Report 2025' },
  { label: 'Units sold',      value: '31% of PC game units sold in 2024 — Sensor Tower' },
  { label: 'Company adoption',value: '4,826 verified companies across industries as of 2026 — Landbase' },
  { label: 'Market size',     value: 'Unreal Engine Services market: $1.86 billion in 2024 — Dataintelo' },
  { label: 'Non-gaming use',  value: '51% of non-gaming companies use Unreal Engine — Perforce 2025' },
  { label: 'Survey leadership',value: '65% of respondents cite Unreal Engine as primary engine — Perforce 2025' },
  { label: 'Epic VP quote',   value: '"We planned to diversify this way" — Sebastien Miglio, VP Product Development, February 28, 2026' },
];

const filmStats = [
  { label: '2022 projects:',        value: '153 film and TV projects — 44% year-on-year increase.' },
  { label: 'Cumulative total:',     value: '500+ film and TV projects using Unreal Engine as of 2023.' },
  { label: 'The Mandalorian:',      value: 'StageCraft LED walls with real-time Unreal Engine environments — ILM on-set VFX.' },
  { label: 'War is Over! (2024):',  value: 'Academy Award-winning animated short — powered by Unreal Engine.' },
];

const automotiveFacts = [
  { label: 'HMI deployments:', value: '35+ vehicle models ship with Unreal Engine-powered human-machine interfaces as of late 2025.' },
  { label: 'Brands:',          value: 'Ford, GM, Rivian (R1 series), Lotus, Volvo (EVs), Lincoln, Sony Honda Mobility AFEELA 1.' },
  { label: 'CES 2026:',        value: 'ADAS simulation, digital cockpits, and infotainment showcased at CES 2026.' },
  { label: 'Asset library:',   value: '280+ production-ready Substrate automotive materials assets for UE 5.7 — Unreal Engine Fab, March 2026.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function UnrealEngineEpicPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Unreal Engine Expands Beyond Gaming Into Film, Automotive, and Architecture — 2026 Adoption Trends"
        description="Unreal Engine powers 28% of PC games released in 2024, 35+ automotive HMIs, 500+ film and TV projects, and is used by 4,826 companies across industries as of 2026. Epic VP Sebastien Miglio: 'We planned to diversify this way.'"
        author="Alfansa"
        authorUrl="https://www.objectwire.org/team/alfansa"
        publishedTime="2026-03-01T20:00:00Z"
        modifiedTime="2026-03-01T20:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Video Games"
        keywords={[
          'Unreal Engine non-gaming expansion 2026',
          'Epic Games Unreal Engine film automotive architecture',
          'Unreal Engine 4826 companies industry adoption',
          'Unreal Engine HMI automotive Rivian Volvo Ford',
          'Sebastien Miglio Epic Games diversification',
        ]}
      />

      <JackArticle
        layout="news"
        title="Unreal Engine Expands Beyond Gaming Into Film, Automotive, and Architecture — 2026 Adoption Trends"
        subtitle="Unreal Engine powers more than 28% of PC games released in 2024 while simultaneously driving digital cockpits in over 35 vehicle models, 500+ film and television projects, and architectural visualization across 4,826 verified companies. Epic Games VP Sebastien Miglio on the expansion: 'We planned to diversify this way.'"
        categoryLabel="Video Games"
        categories={[
          { label: 'Video Games', color: 'blue' },
          { label: 'Epic Games', color: 'black' },
        ]}
        publishDate="March 1, 2026"
        publishDateISO="2026-03-01T20:00:00Z"
        modifiedDateISO="2026-03-01T20:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Alfansa',
          department: 'ObjectWire Gaming Desk',
          url: 'https://www.objectwire.org/team/alfansa',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/video-games', label: 'Video Games' },
          { href: SLUG, label: 'Epic Games & Unreal Engine' },
        ]}
        relatedArticles={[
          {
            href: '/video-games',
            category: 'Video Games',
            categoryColor: 'text-blue-600',
            title: 'Video Games Hub — ObjectWire',
          },
          {
            href: '/video-games/gta-6',
            category: 'Video Games',
            categoryColor: 'text-blue-600',
            title: 'GTA 6 Coverage — ObjectWire',
          },
          {
            href: '/video-games/news/marathon-server-slam-steam-concurrent-players-peak-drop-march-2026',
            category: 'Gaming News',
            categoryColor: 'text-blue-600',
            title: 'Marathon Server Slam: 143,621 Steam Peak, Then a 50%+ Drop',
          },
          {
            href: '/tech',
            category: 'Technology',
            categoryColor: 'text-blue-600',
            title: 'Technology Desk — ObjectWire',
          },
        ]}
        timeline={[
          { date: '1998', description: 'Unreal Engine launches with Epic Games\' first-person shooter Unreal — founded by Tim Sweeney.' },
          { date: '2022', description: '153 film and TV projects use Unreal Engine — 44% year-on-year increase. Cumulative total approaching 500.' },
          { date: '2023', description: '500+ cumulative film and TV projects confirmed — Unreal Engine real-time round-up.' },
          { date: '2024', description: '28% of PC Steam games released use Unreal Engine; 31% of units sold. Sensor Tower Big Game Engines Report.', highlight: true },
          { date: '2024', description: 'War Is Over! wins Academy Award for Animated Short — powered by Unreal Engine.' },
          { date: 'Late 2025', description: '35+ car models ship Unreal Engine-powered HMIs — Rivian, Volvo, Ford, GM, Lotus, Lincoln.', highlight: true },
          { date: 'Jan 2026', description: 'CES 2026 — Unreal Engine showcased in ADAS simulation, digital cockpits, Sony Honda Mobility AFEELA 1.' },
          { date: 'Feb 28, 2026', description: 'Epic VP Sebastien Miglio: "We planned to diversify this way" — AFP report.', highlight: true },
          { date: 'Mar 2026', description: '4,826 verified companies across industries use Unreal Engine — Landbase data. $1.86B services market.' },
        ]}
        documents={[
          { href: 'https://www.unrealengine.com', label: 'Unreal Engine — Official Site', icon: '🔗' },
          { href: 'https://sensortower.com', label: 'Sensor Tower Big Game Engines Report 2025', icon: '📊' },
          { href: 'https://www.unrealengine.com/en-US/blog', label: 'Unreal Engine Blog — Real-Time Round-Up', icon: '📄' },
        ]}
        accentColor="blue"
        articleUrl={ARTICLE_URL}
        description="Unreal Engine has expanded from gaming into automotive HMIs, film production, and architecture — 4,826 companies and 35+ car dashboards by 2026."
        section="Video Games"
        keywords={['Unreal Engine expansion 2026', 'Epic Games non-gaming adoption', 'Unreal Engine automotive film architecture']}
        showCorrections
        showEditorialStandards
        footerTagline="When a game engine from 1998 ends up rendering car dashboards in millions of vehicles, the diversification metric isn't ambition — it's just mileage."
        footerLinks={[
          { href: '/video-games', label: 'Video Games' },
          { href: '/tech', label: 'Technology' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          <strong>Unreal Engine</strong>, developed by <strong>Epic Games</strong>, launched in
          1998 to power a single first-person shooter. By 2026, it accounts for{' '}
          <strong>28% of PC games released on Steam</strong> and runs inside{' '}
          <strong>35+ automotive dashboards</strong>, <strong>500+ film and television
          projects</strong>, and{' '}
          <strong>4,826 verified companies across industries</strong> from architecture to
          aerospace simulation. Epic&apos;s vice president for Unreal Engine product
          development, <strong>Sebastien Miglio</strong>, offered a concise summary of the
          strategy in a February 28, 2026 AFP report: <em>&quot;We planned to diversify this
          way.&quot;</em>
        </p>

        <JackCaseOverview
          title="Unreal Engine — 2026 Adoption Overview"
          accentColor="blue"
          items={engineOverview}
        />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="Origins and Gaming Market Position" accentColor="blue">
          <p>
            Unreal Engine debuted with the release of <strong>Unreal</strong> in 1998,
            Epic Games&apos; first-person shooter that served as a showcase for the engine&apos;s
            real-time 3D rendering capabilities. Founder <strong>Tim Sweeney</strong> designed
            the engine to be licensable from the start — a decision that shaped its trajectory
            from proprietary game tool to industry infrastructure.
          </p>
          <JackStats
            title="Gaming Market Metrics — 2024"
            accentColor="blue"
            stats={[
              { value: '28%', label: 'Share of PC games released on Steam in 2024 — Sensor Tower' },
              { value: '31%', label: 'Share of PC game units sold in 2024 — Sensor Tower' },
              { value: '42%', label: 'Custom engines share of units sold in 2024 (down from prior years)' },
              { value: '65%', label: 'Survey respondents citing Unreal Engine as primary engine — Perforce 2025' },
            ]}
          />
          <p>
            Notable 2024 titles driving Unreal Engine&apos;s unit-sold share included{' '}
            <strong>Black Myth: Wukong</strong> and{' '}
            <strong>Clair Obscur: Expedition 33</strong> — both built on Unreal and delivering
            commercially significant results that reinforced the engine&apos;s visibility in
            the AAA and prestige indie segments.
          </p>
          <JackCallout accentColor="blue" label="Custom Engine Decline">
            Custom engines held <strong>42% of PC game units sold in 2024</strong>, down from
            higher shares in prior years — a trend that benefits standardized engines like
            Unreal as development costs and team size pressures push more studios toward
            established middleware rather than proprietary engine investment.
          </JackCallout>
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="Film and Television: Virtual Production at Scale" accentColor="blue">
          <p>
            Unreal Engine&apos;s expansion into film and television accelerated with the
            adoption of <strong>StageCraft</strong> — a virtual production technology using
            large-format LED video walls to render real-time Unreal Engine environments on set,
            eliminating the need for location shoots or post-production compositing for many
            shots.
          </p>
          <JackCaseOverview
            title="Film and TV Adoption — Key Milestones"
            accentColor="blue"
            items={filmStats}
          />
          <JackCallout accentColor="black" label="The Mandalorian and ILM">
            Industrial Light &amp; Magic&apos;s use of Unreal Engine&apos;s StageCraft for{' '}
            <em>The Mandalorian</em> — with LED walls rendering photorealistic Star Wars
            environments in real time — marked a turning point for virtual production adoption.
            The technique has since been adopted across major studio productions, with the
            cumulative Unreal Engine film project count exceeding <strong>500 by 2023</strong>.
          </JackCallout>
        </JackSection>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <JackSection number={3} title="Automotive: Digital Cockpits and HMI Deployment" accentColor="blue">
          <p>
            The automotive vertical represents one of Unreal Engine&apos;s fastest-growing
            non-gaming deployments. Human-machine interfaces built on Unreal Engine now ship
            in production vehicles from a cross-section of the global automotive market.
          </p>
          <JackCaseOverview
            title="Automotive Deployment — 2025–2026"
            accentColor="blue"
            items={automotiveFacts}
          />
          <JackCallout accentColor="orange" label="Why Automotive Chose a Game Engine">
            Automotive HMIs demand <strong>real-time 3D rendering, responsive UI, and
            high-quality visual output</strong> at automotive-grade reliability — requirements
            that game engines like Unreal Engine are uniquely positioned to meet from
            day one. The alternative — building bespoke HMI rendering stacks — carries
            significantly higher engineering cost and longer iteration cycles. At CES 2026,
            <strong> Sony Honda Mobility&apos;s AFEELA 1</strong> demonstrated this directly,
            using Unreal Engine for its digital cockpit alongside ADAS simulation.
          </JackCallout>
        </JackSection>

        {/* ── Section 4 ────────────────────────────────────────── */}
        <JackSection number={4} title="Architecture, Simulation, and the Broader Cross-Industry Footprint" accentColor="blue">
          <p>
            Beyond film and automotive, Unreal Engine supports architectural visualization,
            industrial simulation, defense training, and interactive experience design —
            categories that collectively contribute to the 4,826 company count and the
            $1.86 billion Unreal Engine Services market as of 2024.
          </p>
          <JackCaseOverview
            title="Cross-Industry Metrics — 2024–2026"
            accentColor="blue"
            items={[
              { label: 'Company count:',     value: '4,826 verified companies across all industries — Landbase 2026.' },
              { label: 'Non-gaming share:',  value: '51% of non-gaming companies in Perforce survey use Unreal Engine — Perforce 2025.' },
              { label: 'Services market:',   value: '$1.86 billion — Unreal Engine Services market size in 2024 — Dataintelo.' },
              { label: 'Architecture:',      value: 'Real-time modeling and visualization for design review, client presentations, and urban planning.' },
              { label: 'Simulation/defense:','value': 'Training simulation, ADAS testing, and industrial digital twins.' },
            ]}
          />
          <JackCallout accentColor="blue" label="Sebastien Miglio — Epic Games, February 28, 2026">
            &quot;We planned to diversify this way.&quot; — Epic&apos;s VP for Unreal Engine
            product development, speaking to AFP. The statement reflects a multi-year strategy
            that pre-dates the current cross-industry expansion — Unreal Engine&apos;s
            licensing model, toolchain investment, and platform-agnostic rendering architecture
            were designed with non-gaming verticals in mind from the outset.
          </JackCallout>
          <p>
            <em>
              When a game engine from 1998 ends up rendering car dashboards in millions of
              vehicles, the diversification metric isn&apos;t ambition — it&apos;s just
              mileage.
            </em>
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
