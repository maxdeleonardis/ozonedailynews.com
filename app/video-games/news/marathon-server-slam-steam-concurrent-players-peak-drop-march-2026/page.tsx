import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  JackSection,
  JackCaseOverview,
  JackCallout,
  JackStats,
} from '@/components/JackArticle';

const SLUG =
  '/video-games/news/marathon-server-slam-steam-concurrent-players-peak-drop-march-2026';

const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/video-games/marathon-server-slam-steam-concurrent-players-peak-2026.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Marathon Server Slam Steam Concurrent Players Drop Over 50% From 143,621 Peak | ObjectWire',
  description:
    "Bungie's Marathon Server Slam beta peaked at 143,621 concurrent players on Steam on February 26, 2026, before dropping over 50% by March 1 to a live count of ~58,688. The open test runs through March 2; full launch is March 5, 2026.",
  keywords: [
    'Marathon Server Slam Steam concurrent players 2026',
    'Marathon beta peak 143621 Steam February 2026',
    'Bungie Marathon Server Slam March 2026',
    'Marathon extraction shooter beta Steam drop',
    'Marathon Server Slam player count SteamDB',
    'Marathon vs Arc Raiders beta comparison Steam peak',
    'Marathon launch date March 5 2026',
    'Marathon Server Slam rewards emblems implants weapons',
    'Marathon Server Slam cross-play PS5 Xbox Steam',
    'extraction shooter beta player count 2026',
    'Marathon beta feedback UI PvP complaints',
    'Marathon Steam Next Fest 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Marathon Server Slam: 143,621 Steam Peak on Day One, Then a 50%+ Drop Through March 1",
    description:
      "Bungie's Marathon Server Slam hit 143,621 concurrent Steam players on February 26, 2026, then shed more than half by March 1. The open beta runs through March 2; full launch is March 5. Here's what the numbers — and feedback — actually say.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T18:00:00Z',
    modifiedTime: '2026-03-01T18:00:00Z',
    section: 'Video Games',
    tags: [
      'Marathon',
      'Bungie',
      'Server Slam',
      'Steam',
      'Extraction Shooter',
      'Beta',
      'SteamDB',
      'Video Games',
      'Gaming',
      'Arc Raiders',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Marathon Server Slam Peaked at 143,621 Steam Players — Then Lost Half in 24 Hours",
    description:
      "Bungie's Marathon beta: 143,621 Steam peak on Feb 26, dropped to ~58,688 live by March 1. Full launch March 5. Here's the breakdown.",
    images: [IMAGE_URL],
  },
};

// ─── Infobox data ─────────────────────────────────────────────────────────────

const slamFacts = [
  { label: 'Event',           value: 'Marathon Server Slam — final public test before full launch' },
  { label: 'Developer',       value: 'Bungie' },
  { label: 'Platforms',       value: 'Steam (PC), PlayStation 5, Xbox Series X|S — cross-play & cross-save enabled' },
  { label: 'Date window',     value: 'February 26 – March 2, 2026 (10 a.m. PT close)' },
  { label: 'Full launch',     value: 'March 5, 2026' },
  { label: 'Steam App ID',    value: '4254230' },
  { label: 'Steam peak',      value: '143,621 concurrent players — February 26, ~7 p.m. UTC (SteamDB)' },
  { label: 'Mar 1 live count',value: '~58,688 concurrent players — March 1' },
  { label: 'Steam rank',      value: '#23 on Feb 28 → #32 on March 1' },
  { label: 'Launch rewards',  value: 'Emblems, implants, weapons — distributed March 5 based on Server Slam progress' },
];

const playerTimeline = [
  { label: 'Feb 26 peak:',   value: '143,621 concurrent — all-time beta high (~7 p.m. UTC). SteamDB.' },
  { label: 'Feb 27 peak:',   value: '65,432 concurrent (~7 p.m. UTC) — ~54% decline from Feb 26.' },
  { label: 'Feb 28 peak:',   value: '64,507 concurrent (~7 p.m. UTC) — Steam rank #23.' },
  { label: 'Mar 1 peak:',    value: '76,437 24-hour peak; 56,224 daily snapshot (~7 p.m. UTC).' },
  { label: 'Mar 1 live:',    value: '58,688 concurrent — Steam rank #32. Day-over-day avg decline: ~55% from Feb 26 high.' },
];

const contentFacts = [
  { label: 'Zones:',          value: 'Two — Perimeter and Dire Marsh.' },
  { label: 'Factions:',       value: 'Five — CyberAcme, NuCaloric, Traxus, MIDA, Arachne.' },
  { label: 'Runner shells:',  value: 'Five of six available in beta.' },
  { label: 'Mode:',           value: 'Rook scavenger mode included.' },
  { label: 'Intro mission:',  value: 'Unique emblem + player background granted to all who complete it.' },
  { label: 'Rewards system:',  value: 'Faction level progression during Server Slam unlocks tiered loot at March 5 launch.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MarathonServerSlamPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Marathon Server Slam Steam Concurrent Players Drop Over 50% From 143,621 Peak — February 26–March 1, 2026"
        description="Bungie's Marathon Server Slam beta peaked at 143,621 concurrent Steam players on February 26, 2026, then fell over 50% by March 1. Full launch is March 5."
        author="Alfansa"
        authorUrl="https://www.objectwire.org/team/alfansa"
        publishedTime="2026-03-01T18:00:00Z"
        modifiedTime="2026-03-01T18:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Video Games"
        keywords={[
          'Marathon Server Slam Steam peak 143621',
          'Bungie Marathon beta player count March 2026',
          'extraction shooter beta concurrent players',
          'Marathon vs Arc Raiders Steam peak comparison',
          'Marathon launch March 5 2026',
        ]}
      />

      <JackArticle
        layout="news"
        title="Marathon Server Slam Steam Concurrent Players Drop Over 50% From 143,621 Peak"
        subtitle="Bungie's Marathon Server Slam — the final open test before the extraction shooter's full release — peaked at 143,621 concurrent players on Steam on February 26, 2026. By March 1, live concurrent counts had fallen to approximately 58,688, a decline exceeding 50% from the day-one high, with the beta continuing through March 2 and full launch set for March 5."
        categoryLabel="Video Games"
        categories={[
          { label: 'Video Games', color: 'blue' },
          { label: 'Gaming News', color: 'black' },
        ]}
        publishDate="March 1, 2026"
        publishDateISO="2026-03-01T18:00:00Z"
        modifiedDateISO="2026-03-01T18:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Alfansa',
          department: 'ObjectWire Gaming Desk',
          url: 'https://www.objectwire.org/team/alfansa',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/video-games', label: 'Video Games' },
          { href: SLUG, label: 'Marathon Server Slam Player Count' },
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
            href: '/video-games/valve-corporation',
            category: 'Gaming',
            categoryColor: 'text-gray-700',
            title: 'Valve Corporation Coverage — ObjectWire',
          },
          {
            href: '/tech',
            category: 'Technology',
            categoryColor: 'text-blue-600',
            title: 'Technology Desk — ObjectWire',
          },
        ]}
        timeline={[
          { date: 'Feb 26, 2026 10 a.m. PT', description: 'Marathon Server Slam opens on Steam, PS5, and Xbox Series X|S.', highlight: true },
          { date: 'Feb 26 ~7 p.m. UTC', description: '143,621 concurrent Steam players — all-time beta peak (SteamDB).', highlight: true },
          { date: 'Feb 27 ~7 p.m. UTC', description: '65,432 concurrent — ~54% decline from day-one peak.' },
          { date: 'Feb 28 ~7 p.m. UTC', description: '64,507 concurrent — Steam chart position #23.' },
          { date: 'Mar 1', description: '76,437 24-hr peak; 56,224 snapshot; ~58,688 live concurrent. Steam rank #32.' },
          { date: 'Mar 2, 2026 10 a.m. PT', description: 'Server Slam closes on all platforms.' },
          { date: 'Mar 5, 2026', description: 'Marathon full launch — Server Slam rewards (emblems, implants, weapons) distributed.', highlight: true },
        ]}
        documents={[
          { href: 'https://store.steampowered.com/app/4254230', label: 'Marathon on Steam — App ID 4254230', icon: '🔗' },
          { href: 'https://steamdb.info', label: 'SteamDB — Marathon Concurrent Player Data', icon: '📊' },
          { href: 'https://www.bungie.net', label: 'Bungie — Official Marathon Site', icon: '🎮' },
        ]}
        accentColor="blue"
        articleUrl={ARTICLE_URL}
        description="Marathon Server Slam beta hit 143,621 Steam peak on Feb 26, 2026, then shed 50%+ by March 1. Full launch March 5."
        section="Video Games"
        keywords={['Marathon Server Slam player count', 'Bungie Marathon beta Steam 2026', 'extraction shooter beta concurrent players']}
        showCorrections
        showEditorialStandards
        footerTagline="When betas launch midweek but shed players over the weekend, the real stress test arrives with the full release."
        footerLinks={[
          { href: '/video-games', label: 'Video Games' },
          { href: '/tech', label: 'Technology' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          <strong>Bungie&apos;s</strong> extraction shooter{' '}
          <strong>Marathon</strong> launched its <strong>Server Slam</strong> — the final
          public test before full release — on <strong>February 26, 2026</strong>, at 10 a.m.
          PT across Steam, PlayStation 5, and Xbox Series X|S. The beta achieved a{' '}
          <strong>peak of 143,621 concurrent players on Steam</strong> shortly after opening,
          per SteamDB tracking, before shedding more than half that count over the following
          days. By <strong>March 1</strong>, live concurrent players hovered around{' '}
          <strong>58,688</strong> — a decline exceeding 50% from the day-one high, with the
          event still active through <strong>March 2 at 10 a.m. PT</strong>. Full launch
          remains on track for <strong>March 5, 2026</strong>.
        </p>

        <JackCaseOverview
          title="Marathon Server Slam — At a Glance"
          accentColor="blue"
          items={slamFacts}
        />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="Steam Concurrent Player Timeline — February 26 to March 1" accentColor="blue">
          <JackStats
            title="Player Count Milestones"
            accentColor="blue"
            stats={[
              { value: '143,621', label: 'Steam peak — Feb 26, 2026 (SteamDB)' },
              { value: '58,688', label: 'Live concurrent — March 1' },
              { value: '55%+', label: 'Avg day-over-day decline from Feb 26 peak' },
              { value: '#32', label: 'Steam chart position on March 1 (was #23 Feb 28)' },
            ]}
          />
          <JackCaseOverview
            title="Daily Steam Peaks — SteamDB Tracking"
            accentColor="blue"
            items={playerTimeline}
          />
          <JackCallout accentColor="blue" label="Steam Only">
            These figures represent <strong>PC Steam players only</strong>. PlayStation 5 and
            Xbox Series X|S participation added undisclosed additional volume.{' '}
            <strong>No aggregate cross-platform concurrent data</strong> has been released by
            Bungie as of March 1, 2026. Total real-world participation across all platforms is
            higher than Steam figures alone reflect.
          </JackCallout>
          <p>
            The Server Slam also aligned with <strong>Steam Next Fest</strong>, boosting
            visibility in Steam discovery queues. Pre-Slam U.S. Steam pre-sales had ranked{' '}
            <strong>Marathon at #3</strong> in pre-orders before the event opened.
          </p>
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="Server Slam Content, Schedule, and Launch Rewards" accentColor="blue">
          <p>
            The Server Slam gives all participants access to a meaningful slice of the full
            game, with progress carrying forward to the March 5 launch as earned rewards.
          </p>
          <JackCaseOverview
            title="What's Available in Server Slam"
            accentColor="blue"
            items={contentFacts}
          />
          <JackCallout accentColor="black" label="Rewards Carry to Launch">
            All participants who complete the <strong>introductory mission</strong> receive a
            unique emblem and player background at launch on{' '}
            <strong>March 5, 2026</strong>. Faction level progress accumulated during the
            Server Slam translates directly into tiered loot distributed at launch — making
            time invested in the beta tangibly rewarded on day one.
          </JackCallout>
        </JackSection>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <JackSection number={3} title="Player Feedback and Known Issues" accentColor="blue">
          <p>
            Community reports from the Server Slam surfaced consistent feedback themes that
            Bungie acknowledged in official updates before the beta&apos;s last status update on{' '}
            <strong>February 28, 2026</strong>.
          </p>
          <JackCaseOverview
            title="Server Slam Feedback Summary"
            accentColor="blue"
            items={[
              { label: 'UI complaints:', value: 'Widespread community reports of confusing or underdeveloped user interface — acknowledged by Bungie.' },
              { label: 'PvP uptime:', value: 'Low player-versus-player match frequency reported; Bungie acknowledged low PvP uptime in updates.' },
              { label: 'Time-to-kill (TTK):', value: 'Balance feedback on TTK — community split on whether feel aligns with extraction shooter genre expectations.' },
              { label: 'Progression carryover:', value: 'Some players cited lack of full progression carryover to launch as a point of concern; rewards system addresses partial carryover.' },
            ]}
          />
        </JackSection>

        {/* ── Section 4 ────────────────────────────────────────── */}
        <JackSection number={4} title="Context: Extraction Shooter Beta Benchmarks" accentColor="blue">
          <p>
            Marathon&apos;s 143,621 Steam beta peak positions it within competitive range for
            the extraction shooter genre, though it trails the leading recent benchmark.
          </p>
          <JackCaseOverview
            title="Extraction Shooter Beta Steam Peak Comparison"
            accentColor="blue"
            items={[
              { label: 'Arc Raiders Stress Test:', value: '189,668 concurrent Steam peak — prior 2026. Current genre benchmark.' },
              { label: 'Marathon Server Slam:', value: '143,621 concurrent Steam peak — February 26, 2026. Trails Arc Raiders by ~46,000.' },
              { label: 'Note:', value: 'Marathon figures are Steam-only. Cross-platform (PS5 + Xbox) totals are not publicly disclosed, meaning real Marathon participation may narrow or eliminate the gap.' },
            ]}
          />
          <JackCallout accentColor="orange" label="The Real Test Is March 5">
            Beta player counts are a demand signal, not a launch forecast. Both{' '}
            <strong>Arc Raiders</strong> and <strong>Marathon</strong> face the same validation
            event: whether their day-one launch concurrents hold or replicate beta peaks.
            Marathon&apos;s Server Slam decline curve — over 50% from peak within 72 hours — is
            typical for open betas but will be compared directly to launch-week retention once
            March 5 data becomes available.
          </JackCallout>
          <p>
            <em>
              When betas launch midweek but shed players over the weekend, the real stress test
              arrives with the full release.
            </em>
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
