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
  '/tech/news/gaming-industry-layoffs-ea-sony-riot-ubisoft-february-2026';

const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/tech/gaming-industry-layoffs-ea-sony-riot-ubisoft-february-2026.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Gaming Industry Sheds Jobs Across EA, Sony, Riot, and Ubisoft in February 2026 | ObjectWire',
  description:
    'Electronic Arts, Sony Interactive Entertainment, Riot Games, and Ubisoft all announced layoffs in February 2026. Bluepoint Games was closed with 70 cuts, Riot shed approximately 160 roles across two divisions, and Ubisoft restructured its Toronto studio. Industry trackers logged 2,374 affected roles through mid-February.',
  keywords: [
    'gaming industry layoffs February 2026',
    'EA Full Circle studio layoffs Skate reboot 2026',
    'Sony Bluepoint Games closure 70 layoffs Austin 2026',
    'Riot Games publishing layoffs 80 February 2026',
    'Riot 2XKO layoffs fighting game 2026',
    'Ubisoft Toronto layoffs 40 restructuring 2026',
    'Ubisoft voluntary departure plan 200 corporate staff',
    'video game layoffs 2026 tracker 2374 roles',
    'GDC 2026 state of game industry 28 percent layoffs',
    'Bluepoint Games Demon Souls remake studio closed',
    'iWOT Games Montreal layoffs February 2026',
    'gaming job cuts post-holiday earnings cycle 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'EA, Sony, Riot, and Ubisoft All Cut Staff in February 2026 — 2,374 Roles Affected Industry-Wide',
    description:
      'Bluepoint Games closed. Full Circle restructured after Skate launch. Riot shed ~160 roles across publishing and 2XKO. Ubisoft Toronto lost 40 with 200 more targeted in a voluntary departure plan. Industry trackers recorded 41 layoff events and 2,374 affected roles through mid-February 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-02T12:00:00Z',
    modifiedTime: '2026-03-02T12:00:00Z',
    section: 'Technology',
    tags: [
      'Gaming',
      'Layoffs',
      'Electronic Arts',
      'Sony',
      'Riot Games',
      'Ubisoft',
      'Video Games',
      'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Gaming Industry Layoffs: EA, Sony, Riot, Ubisoft Cut Jobs in February 2026',
    description:
      'Bluepoint closed (70). Full Circle restructured. Riot lost ~160 across publishing and 2XKO. Ubisoft Toronto shed 40 with 200 more targeted. 2,374 roles industry-wide through mid-February 2026.',
    images: [IMAGE_URL],
  },
};

// ─── Infobox data ─────────────────────────────────────────────────────────────

const layoffSummary = [
  { label: 'Full Circle (EA)',       value: 'Undisclosed roles — February 25, 2026 (Vancouver-area, Skate reboot)' },
  { label: 'Bluepoint Games (Sony)', value: '70 layoffs — February 19, 2026 (Austin, TX — studio closed)' },
  { label: 'Riot Publishing',        value: '~80 layoffs — February 26, 2026 (global publishing, three teams)' },
  { label: 'Riot 2XKO',             value: '~80 layoffs — February 9, 2026 (fighting game team, three weeks post-launch)' },
  { label: 'Ubisoft Toronto',        value: '40 layoffs — February 19, 2026' },
  { label: 'Ubisoft Corporate',      value: '200 targeted via voluntary departure plan — February 12, 2026' },
  { label: 'iWOT Games Montreal',    value: '~20 layoffs — February 26, 2026' },
  { label: 'Industry total (mid-Feb)', value: '2,374 roles across 41 events through February 16, 2026' },
];

const eaFacts = [
  { label: 'Studio',       value: 'Full Circle — Vancouver area' },
  { label: 'Game',         value: 'Skate (2026 reboot)' },
  { label: 'Date',         value: 'February 25, 2026' },
  { label: 'Roles cut',    value: 'Undisclosed' },
  { label: 'Context',      value: 'Restructuring to support long-term Skate development after 15 million players in under three weeks post-launch' },
];

const sonyFacts = [
  { label: 'Studio',       value: 'Bluepoint Games — Austin, TX' },
  { label: 'Known for',    value: 'Demon\'s Souls remake (PS5), Shadow of the Colossus, Ico remasters' },
  { label: 'Date',         value: 'February 19, 2026' },
  { label: 'Roles cut',    value: '70 (full closure)' },
  { label: 'Context',      value: 'Business review after 1+ year without a secured project; failed to obtain Bloodborne remake or PlayStation spinoff duties' },
];

const riotFacts = [
  { label: 'Division 1',   value: 'Publishing — ~80 layoffs on February 26, 2026 (three teams, half of global publishing unit)' },
  { label: 'Division 2',   value: '2XKO team — ~80 layoffs on February 9, 2026 (three weeks after launch)' },
  { label: 'Monthly total', value: '~92 positions reported' },
  { label: '2XKO status',  value: 'Development continues despite reductions' },
];

const ubisoftFacts = [
  { label: 'Studio',         value: 'Ubisoft Toronto' },
  { label: 'Date',           value: 'February 19, 2026' },
  { label: 'Roles cut',      value: '40' },
  { label: 'Corporate plan', value: '200 targeted via voluntary departure plan (announced February 12, 2026)' },
  { label: 'Strike action',  value: '1,200+ workers protested; 538 officially struck on February 12, 2026' },
  { label: 'Cancellations',  value: 'Two Assassin\'s Creed mobile titles cancelled alongside restructuring' },
];

const industryStats = [
  { value: '2,374',   label: 'Roles affected through February 16, 2026' },
  { value: '41',      label: 'Layoff events tracked through mid-February' },
  { value: '~900',    label: 'Roles cut in January 2026 (full month)' },
  { value: '5,000+',  label: 'Cuts recorded industry-wide in 2025' },
  { value: '28%',     label: 'GDC respondents who experienced layoffs in prior two years' },
  { value: '33%',     label: 'U.S.-based GDC respondents who experienced layoffs' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GamingLayoffsFebruary2026Page() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Gaming Industry Sheds Jobs Across EA, Sony, Riot, and Ubisoft in February 2026"
        description="Electronic Arts, Sony Interactive Entertainment, Riot Games, and Ubisoft all announced layoffs in February 2026. Bluepoint Games was closed with 70 cuts, Riot shed approximately 160 roles across two divisions, and Ubisoft restructured its Toronto studio. Industry trackers logged 2,374 affected roles through mid-February."
        author="Jack"
        authorUrl="https://www.objectwire.org/team/jack"
        publishedTime="2026-03-02T12:00:00Z"
        modifiedTime="2026-03-02T12:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Technology"
        keywords={[
          'gaming industry layoffs February 2026',
          'EA Full Circle Bluepoint Sony Riot Ubisoft cuts',
          'video game job losses 2026 tracker',
          'GDC 2026 state of game industry survey',
        ]}
      />

      <JackArticle
        layout="news"
        title="Gaming Industry Sheds Jobs Across EA, Sony, Riot, and Ubisoft in February 2026"
        subtitle="Electronic Arts announced layoffs at its Full Circle studio, Sony shut down Bluepoint Games with 70 roles eliminated, Riot Games cut roughly 160 positions across its publishing and 2XKO divisions, and Ubisoft reduced staff at its Toronto studio while targeting 200 more through a voluntary departure plan. Industry trackers recorded 2,374 affected roles across 41 events through mid-February 2026."
        categoryLabel="Gaming"
        categories={[
          { label: 'Gaming', color: 'blue' },
          { label: 'Layoffs', color: 'red' },
        ]}
        publishDate="March 2, 2026"
        publishDateISO="2026-03-02T12:00:00Z"
        modifiedDateISO="2026-03-02T12:00:00Z"
        readTime="6 min read"
        author={{
          name: 'Jack',
          department: 'ObjectWire Technology Desk',
          url: 'https://www.objectwire.org/team/jack',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/tech', label: 'Tech' },
          { href: '/tech/news', label: 'News' },
          { href: SLUG, label: 'Gaming Layoffs February 2026' },
        ]}
        relatedArticles={[
          {
            href: '/tech',
            category: 'Technology',
            categoryColor: 'text-blue-600',
            title: 'Technology Desk — ObjectWire',
          },
          {
            href: '/video-games',
            category: 'Video Games',
            categoryColor: 'text-purple-600',
            title: 'Video Games Coverage — ObjectWire',
          },
          {
            href: '/tech/federal-agencies-grok-safety-concerns-pentagon-classified-approval-2026',
            category: 'AI Policy',
            categoryColor: 'text-red-600',
            title: 'Federal Agencies Flagged Grok Safety Concerns Before Pentagon Approval',
          },
          {
            href: '/tech/minimax-maxclaw-openclaw-cloud-agent-clawbot-saas-february-2026',
            category: 'AI',
            categoryColor: 'text-green-600',
            title: 'MiniMax MaxClaw and Clawbot AI Launch Cloud OpenClaw Agents',
          },
        ]}
        timeline={[
          { date: 'Feb 9, 2026',  description: 'Riot Games cuts ~80 from the 2XKO fighting game team, three weeks after launch.' },
          { date: 'Feb 12, 2026', description: 'Ubisoft announces voluntary departure plan targeting 200 corporate staff; 538 workers officially strike.' },
          { date: 'Feb 16, 2026', description: 'Industry trackers record 41 layoff events and 2,374 roles cut year-to-date through mid-February.', highlight: true },
          { date: 'Feb 19, 2026', description: 'Sony closes Bluepoint Games (70 layoffs, Austin). Ubisoft Toronto cuts 40 staff.', highlight: true },
          { date: 'Feb 25, 2026', description: 'EA announces restructuring at Full Circle (Skate), impacting undisclosed number of roles.', highlight: true },
          { date: 'Feb 26, 2026', description: 'Riot Games cuts ~80 in publishing division across three teams. iWOT Games Montreal sheds ~20.', highlight: true },
          { date: 'Mar 2026',     description: 'GDC 2026 State of the Game Industry report publishes: 28% of global respondents experienced layoffs in prior two years.' },
        ]}
        documents={[
          { href: 'https://www.ea.com', label: 'Electronic Arts Corporate — ea.com', icon: '🔗' },
          { href: 'https://www.sie.com', label: 'Sony Interactive Entertainment', icon: '🔗' },
          { href: 'https://www.riotgames.com', label: 'Riot Games Official Site', icon: '🔗' },
          { href: 'https://www.ubisoft.com', label: 'Ubisoft Corporate', icon: '🔗' },
          { href: 'https://gdconf.com', label: 'GDC 2026 State of the Game Industry Report', icon: '📄' },
        ]}
        accentColor="red"
        articleUrl={ARTICLE_URL}
        description="EA, Sony, Riot Games, and Ubisoft all cut staff in February 2026, contributing to 2,374 roles affected industry-wide through mid-month."
        section="Technology"
        keywords={['gaming layoffs February 2026', 'EA Bluepoint Sony Riot Ubisoft cuts', 'video game jobs 2026']}
        showCorrections
        showEditorialStandards
        footerTagline="When 41 layoff events cut 2,374 roles by mid-February 2026, the industry's headcount aligns with post-holiday earnings cycles."
        footerLinks={[
          { href: '/tech', label: 'Technology Desk' },
          { href: '/video-games', label: 'Video Games' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          The video game industry shed hundreds of roles in February 2026, with{' '}
          <strong>Electronic Arts</strong>, <strong>Sony Interactive Entertainment</strong>,{' '}
          <strong>Riot Games</strong>, and <strong>Ubisoft</strong> all announcing cuts within
          a two-week span. Sony permanently shuttered <strong>Bluepoint Games</strong>,
          eliminating 70 positions. Riot cut approximately{' '}
          <strong>160 roles across its publishing division and 2XKO team</strong>. EA
          restructured its Full Circle studio developing Skate, and Ubisoft reduced 40 staff
          at its Toronto location while pursuing a broader voluntary departure plan. Industry
          trackers recorded <strong>2,374 affected roles across 41 events</strong> through
          mid-February 2026.
        </p>

        <JackCaseOverview
          title="February 2026 Gaming Layoffs — Summary"
          accentColor="red"
          items={layoffSummary}
        />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="EA Layoffs at Full Circle Studio" accentColor="red">
          <p>
            Full Circle, the Vancouver-area studio developing the long-awaited{' '}
            <strong>Skate</strong> reboot, announced structural changes on{' '}
            <strong>February 25, 2026</strong>, stating that roles would be impacted to support
            the game&apos;s long-term development. Electronic Arts, Full Circle&apos;s parent
            company, confirmed the layoffs as part of efforts to streamline operations after
            Skate attracted <strong>15 million players in under three weeks</strong> post-launch.
          </p>
          <JackCaseOverview
            title="Full Circle — Key Facts"
            accentColor="red"
            items={eaFacts}
          />
          <p>
            Developer posts on social media indicated multiple staff members were affected,
            though EA provided no specific headcount. The studio emphasized continued
            commitment to Skate despite the reductions, positioning the restructuring as
            a recalibration for ongoing live-service development rather than a wind-down.
          </p>
          <JackCallout accentColor="red" label="Context">
            Skate&apos;s player numbers — <strong>15 million in three weeks</strong> — would
            normally signal commercial success. The layoffs arriving simultaneously suggest
            EA treated the launch milestone as the threshold at which to restructure development
            costs for what it expects to be a long live-service cycle.
          </JackCallout>
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="Sony Closes Bluepoint Games" accentColor="red">
          <p>
            Sony Interactive Entertainment shuttered <strong>Bluepoint Games</strong> on{' '}
            <strong>February 19, 2026</strong>, leading to{' '}
            <strong>70 layoffs</strong> primarily at its Austin, Texas facility. The closure
            followed a business review and more than a year without a secured project after
            the studio failed to obtain the <strong>Bloodborne remake</strong> assignment or
            other PlayStation spinoff duties.
          </p>
          <JackCaseOverview
            title="Bluepoint Games — Key Facts"
            accentColor="red"
            items={sonyFacts}
          />
          <p>
            Bluepoint had contributed significantly to early PlayStation 5 titles, including
            the critically acclaimed <em>Demon&apos;s Souls</em> remake that launched alongside
            the console in 2020. Sony terminated operations amid broader studio adjustments
            across the PlayStation portfolio.
          </p>
          <JackCallout accentColor="black" label="Bluepoint&apos;s Legacy">
            Bluepoint built its reputation on high-fidelity remakes — <em>Demon&apos;s Souls</em>,{' '}
            <em>Shadow of the Colossus</em>, <em>Ico</em>. The closure ends a studio that had
            become synonymous with PlayStation&apos;s back-catalog preservation effort at a
            moment when that strategy appears to have deprioritized dedicated remake studios.
          </JackCallout>
        </JackSection>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <JackSection number={3} title="Riot Games Layoffs in Publishing and 2XKO Divisions" accentColor="red">
          <p>
            Riot Games laid off around <strong>80 employees in its publishing division</strong>{' '}
            on <strong>February 26, 2026</strong>, representing half of the global team across
            three units. This followed <strong>80 cuts to the 2XKO fighting game team</strong>{' '}
            on <strong>February 9, 2026</strong>, just three weeks after the game&apos;s launch,
            for a reported monthly total of approximately <strong>92 positions</strong>.
          </p>
          <JackCaseOverview
            title="Riot Games Layoffs — Key Facts"
            accentColor="red"
            items={riotFacts}
          />
          <p>
            Riot stated that development on <strong>2XKO</strong> would continue despite the
            reductions. The back-to-back cuts — first to the game team weeks after launch,
            then to publishing — compressed significant restructuring into a single month
            across two distinct operational areas.
          </p>
          <JackCallout accentColor="orange" label="2XKO Timing">
            Cutting half the 2XKO team <strong>three weeks after launch</strong> is an unusual
            sequencing. It suggests Riot assessed early engagement data rapidly and made a
            structural decision about the game&apos;s commercial trajectory before the
            typical post-launch evaluation window closed.
          </JackCallout>
        </JackSection>

        {/* ── Section 4 ────────────────────────────────────────── */}
        <JackSection number={4} title="Ubisoft Restructuring Hits Toronto Studio" accentColor="red">
          <p>
            Ubisoft laid off <strong>40 staff at Ubisoft Toronto</strong> on{' '}
            <strong>February 19, 2026</strong>, as part of a second major restructuring within
            a year. The cuts followed a <strong>February 12, 2026</strong> voluntary departure
            plan aiming to reduce <strong>200 corporate positions</strong>.
          </p>
          <JackCaseOverview
            title="Ubisoft Restructuring — Key Facts"
            accentColor="red"
            items={ubisoftFacts}
          />
          <p>
            At least <strong>1,200 Ubisoft workers</strong> participated in strikes protesting
            the changes, with <strong>538 officially reported on February 12, 2026</strong>. The
            actions accompanied project cancellations including{' '}
            <strong>two Assassin&apos;s Creed mobile titles</strong>, signaling continued
            contraction in Ubisoft&apos;s development footprint following a difficult 2025.
          </p>
        </JackSection>

        {/* ── Section 5 ────────────────────────────────────────── */}
        <JackSection number={5} title="Total Video Game Layoffs Tracked for February 2026" accentColor="red">
          <p>
            Layoff trackers documented multiple events across the month, with activity
            concentrated in the final two weeks of February 2026:
          </p>
          <JackCaseOverview
            title="February 2026 — Documented Events"
            accentColor="red"
            items={[
              { label: 'Full Circle (EA)',        value: 'Undisclosed — February 25, 2026' },
              { label: 'Ubisoft Toronto',          value: '40 — February 19, 2026' },
              { label: 'Riot Publishing',          value: '~80 — February 26, 2026' },
              { label: 'Riot 2XKO',               value: '~80 — February 9, 2026' },
              { label: 'Bluepoint Games',          value: '70 — February 19, 2026' },
              { label: 'iWOT Games Montreal',      value: '~20 — February 26, 2026' },
            ]}
          />
          <JackStats
            title="Industry-Wide Layoff Figures"
            accentColor="red"
            stats={industryStats}
          />
          <p>
            Through <strong>February 16, 2026</strong>, trackers had recorded{' '}
            <strong>41 situations affecting 2,374 roles</strong> industry-wide. Early February
            tallied <strong>32 events impacting 2,015 jobs</strong>, with the second half of
            the month accelerating the pace.
          </p>
        </JackSection>

        {/* ── Section 6 ────────────────────────────────────────── */}
        <JackSection number={6} title="Gaming Industry Layoff Context Through Early 2026" accentColor="red">
          <p>
            The <strong>GDC 2026 State of the Game Industry</strong> survey of over 2,300
            professionals found <strong>28 percent experienced layoffs</strong> in the past
            two years, rising to <strong>33 percent for U.S. respondents</strong>. January
            2026 recorded under 900 cuts, a lower figure than the prior year&apos;s trajectory.
          </p>
          <JackCallout accentColor="red" label="2026 Projections">
            With <strong>5,000-plus cuts recorded in 2025</strong>, projections estimated{' '}
            <strong>7,952 additional roles</strong> through the remainder of 2026 — for a
            projected yearly total of approximately <strong>10,326</strong>. If the February
            pace holds, that estimate will need upward revision.
          </JackCallout>
          <p>
            The February cluster — EA, Sony, Riot, and Ubisoft all moving within a two-week
            window — aligns with the post-holiday earnings cycle, when Q3 financial results
            are finalized and studios reset headcount targets for the calendar year.
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
