import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  JackSection,
  JackCaseOverview,
  JackCallout,
  JackStats,
} from '@/components/JackArticle';

const SLUG =
  '/amazon/news/andy-jassy-ai-will-reduce-headcount-many-roles-cnbc-february-2026';

const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/amazon/andy-jassy-ai-workforce-headcount-cnbc-2026.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "Amazon CEO Andy Jassy: AI Will Reduce Headcount in Many Long-Standing Roles While Creating New Ones — February 2026 | ObjectWire",
  description:
    "Amazon CEO Andy Jassy told CNBC on February 27, 2026 that AI will mean fewer humans are needed for many jobs that have relied on human labor for 20–30 years, while new job categories will emerge. The comments followed a $110B OpenAI funding round and Jack Dorsey's announcement of 4,000+ Block layoffs tied to AI efficiency.",
  keywords: [
    'Andy Jassy AI workforce headcount CNBC 2026',
    'Amazon CEO AI jobs reduction February 2026',
    'Jassy AI most transformational technology shift',
    'Amazon layoffs AI automation 2026',
    'Block Jack Dorsey layoffs AI efficiency 2026',
    'OpenAI $110 billion funding round Amazon 2026',
    'AI job displacement tech sector 2026',
    'Andy Jassy Squawk Box February 27 2026',
    'Amazon 30000 layoffs corporate 2025 2026',
    'tech layoffs 26000 early 2026',
    'AI workforce transition new job categories',
    'Sam Altman Andy Jassy CNBC interview',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Andy Jassy: AI Will Mean Fewer Humans for Jobs We've Thrown People at for 30 Years — New Ones Will Emerge",
    description:
      'Amazon CEO Andy Jassy told CNBC February 27, 2026 that AI will reduce headcount across many long-standing roles while creating new ones — hours after Jack Dorsey announced 4,000+ Block layoffs tied to AI efficiency gains.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T21:00:00Z',
    modifiedTime: '2026-03-01T22:00:00Z',
    section: 'Technology',
    tags: [
      'Amazon',
      'Andy Jassy',
      'AI',
      'Workforce',
      'Layoffs',
      'Block',
      'Jack Dorsey',
      'OpenAI',
      'Sam Altman',
      'CNBC',
      'Technology',
      'Labor',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Jassy on CNBC: AI Will Cut Headcount in Decades-Old Roles. 'But There Will Be Other Jobs Created.'",
    description:
      "Amazon CEO Andy Jassy said AI will reduce human labor in many long-standing jobs while new categories emerge — hours after Block CEO Jack Dorsey announced 4,000+ layoffs explicitly tied to AI efficiency. February 27, 2026.",
    images: [IMAGE_URL],
  },
};

// ─── Infobox data ─────────────────────────────────────────────────────────────

const contextFacts = [
  { label: 'Interview Date',       value: 'February 27, 2026 — CNBC Squawk Box' },
  { label: 'Interviewers',         value: 'Andrew Ross Sorkin (CNBC) alongside Sam Altman (OpenAI CEO)' },
  { label: 'Trigger Context',      value: '$110B OpenAI funding round at $730B valuation; Amazon committed $50B' },
  { label: 'Same-Day Context',     value: 'Block CEO Jack Dorsey announced 4,000+ layoffs tied to AI efficiency (Feb 26)' },
  { label: 'Amazon Layoffs (2025–26)', value: '~30,000 corporate reductions — 14,000 (Oct 2025) + 16,000 (Jan 2026)' },
  { label: 'Jassy June 2025 Memo', value: 'Generative AI and agents expected to reduce Amazon corporate headcount over coming years' },
  { label: 'Jassy Davos (Jan 2026)', value: 'Coding, customer service, research, analytics to see impact; hiring continues in AI/automation/robotics' },
  { label: 'Jassy Characterization', value: '"The most transformational technology shift that we\'ve seen in our lifetime"' },
];

const blockLayoffFacts = [
  { label: 'Announcement Date',   value: 'February 26, 2026' },
  { label: 'Employees Cut',       value: 'More than 4,000 — from 10,000+ to under 6,000 by end of Q2 FY2026' },
  { label: 'Stated Reason',       value: 'AI tools enabling smaller, flatter teams to achieve more' },
  { label: 'Dorsey Quote',        value: '"Intelligence tools are compounding faster weekly, changing how we operate"' },
  { label: 'Share Price Reaction', value: '+25% in after-hours trading following announcement' },
  { label: 'Dorsey Prediction',   value: 'Most companies will adopt similar efficiency measures within the next year' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function JassyAIWorkforcePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Amazon CEO Andy Jassy States AI Will Reduce Headcount in Many Long-Standing Roles While Creating New Ones — February 27, 2026 CNBC Interview"
        description="Amazon CEO Andy Jassy told CNBC on February 27, 2026 that AI will mean fewer humans needed for many jobs that have relied on human labor for 20–30 years. The comments followed a $110B OpenAI funding round and Block CEO Jack Dorsey's announcement of 4,000+ layoffs tied to AI efficiency gains."
        author="Alfansa"
        authorUrl="https://www.objectwire.org/team/alfansa"
        publishedTime="2026-03-01T21:00:00Z"
        modifiedTime="2026-03-01T22:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Technology"
        keywords={[
          'Andy Jassy AI workforce CNBC 2026',
          'Amazon layoffs AI 2026',
          'Block Jack Dorsey AI layoffs',
          'OpenAI $110 billion funding Amazon',
          'AI job displacement tech 2026',
          'tech layoffs early 2026',
        ]}
      />

      <JackArticle
        layout="news"
        title="Amazon CEO Andy Jassy States AI Will Reduce Headcount in Many Long-Standing Roles While Creating New Ones"
        subtitle="In a February 27, 2026 CNBC Squawk Box interview alongside OpenAI CEO Sam Altman, Amazon CEO Andy Jassy said AI will mean fewer humans are needed for many jobs that have relied on human labor over the past 20–30 years — while noting new job categories will emerge. The remarks came hours after Block CEO Jack Dorsey announced 4,000+ layoffs explicitly tied to AI efficiency gains."
        categoryLabel="Technology"
        categories={[
          { label: 'Technology', color: 'blue' },
          { label: 'Amazon', color: 'orange' },
        ]}
        publishDate="March 1, 2026"
        publishDateISO="2026-03-01T21:00:00Z"
        modifiedDateISO="2026-03-01T22:00:00Z"
        readTime="6 min read"
        author={{
          name: 'Alfansa',
          department: 'ObjectWire Technology Desk',
          url: 'https://www.objectwire.org/team/alfansa',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/amazon', label: 'Amazon' },
          { href: '/amazon/news', label: 'News' },
          { href: SLUG, label: 'Jassy AI Workforce Remarks' },
        ]}
        relatedArticles={[
          {
            href: '/amazon',
            category: 'Amazon',
            categoryColor: 'text-orange-600',
            title: 'Amazon Coverage Hub — ObjectWire',
          },
          {
            href: '/amazon/news/aws-uae-data-center-fire-iran-strikes-march-2026',
            category: 'Amazon',
            categoryColor: 'text-orange-600',
            title: 'AWS UAE Data Center Shutdown During Iranian Strikes — March 1, 2026',
          },
          {
            href: '/open-ai',
            category: 'AI',
            categoryColor: 'text-green-600',
            title: 'OpenAI Coverage — ObjectWire',
          },
          {
            href: '/tech',
            category: 'Technology',
            categoryColor: 'text-blue-600',
            title: 'Technology Desk — ObjectWire',
          },
        ]}
        timeline={[
          { date: 'Jun 2025', description: 'Jassy memo: generative AI and agents expected to reduce Amazon corporate headcount in coming years.' },
          { date: 'Oct 2025', description: 'Amazon implements 14,000 corporate layoffs.' },
          { date: 'Jan 20, 2026', description: 'Jassy at Davos: coding, customer service, research, analytics to see AI-driven impact over time.' },
          { date: 'Jan 28, 2026', description: 'Amazon announces 16,000 additional corporate layoffs — total ~30,000 since late 2025.' },
          { date: 'Feb 26, 2026', description: 'Block CEO Jack Dorsey announces 4,000+ layoffs — AI efficiency cited. Block shares +25% after-hours.', highlight: true },
          { date: 'Feb 27, 2026', description: 'Jassy on CNBC Squawk Box alongside Sam Altman: AI will reduce headcount in long-standing roles, new ones will emerge.', highlight: true },
        ]}
        documents={[
          { href: 'https://www.cnbc.com', label: 'CNBC Squawk Box — Jassy Interview Transcript, Feb 27, 2026', icon: '📰' },
          { href: 'https://www.reuters.com', label: 'Reuters — Block Layoffs Coverage, Feb 26, 2026', icon: '📄' },
          { href: 'https://finance.yahoo.com', label: 'Yahoo Finance — Jassy AI Remarks, Feb 27, 2026', icon: '🔗' },
        ]}
        accentColor="orange"
        articleUrl={ARTICLE_URL}
        description="Amazon CEO Andy Jassy told CNBC on February 27, 2026 that AI will reduce headcount in many long-standing roles while creating new job categories — hours after Block announced 4,000+ AI-driven layoffs."
        section="Technology"
        keywords={['Andy Jassy AI workforce', 'Amazon layoffs 2026', 'Block Jack Dorsey AI layoffs', 'AI job displacement 2026', 'CNBC Squawk Box Jassy']}
        showCorrections
        showEditorialStandards
        footerTagline="The transition period looks a lot like the old normal — just with fewer people on the payroll."
        footerLinks={[
          { href: '/amazon', label: 'Amazon Hub' },
          { href: '/tech', label: 'Technology Desk' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          Amazon CEO <strong>Andy Jassy</strong> stated on CNBC&apos;s Squawk Box on{' '}
          <strong>February 27, 2026</strong> that artificial intelligence will mean{' '}
          <strong>fewer humans are needed for many jobs</strong> that have relied on human labor
          over the past 20 to 30 years — while noting that new job categories will emerge during
          the transition, as they have in prior technology shifts.
        </p>
        <p>
          The remarks came during an interview alongside{' '}
          <strong>OpenAI CEO Sam Altman</strong>, conducted by Andrew Ross Sorkin, hours after
          a <strong>$110 billion funding round</strong> for OpenAI at a $730 billion valuation —
          in which Amazon committed <strong>$50 billion</strong> as part of a multi-year
          strategic partnership. They also came the morning after <strong>Block CEO Jack Dorsey</strong>{' '}
          announced plans to cut more than <strong>4,000 employees</strong> — nearly half of
          Block&apos;s workforce — explicitly attributing the reduction to AI-driven efficiency gains.
        </p>

        <JackCallout accentColor="orange" label="Jassy — February 27, 2026">
          &quot;I do believe that a lot of the jobs that we&apos;ve thrown human beings at for
          the last 20 or 30 years, you won&apos;t need as many human beings doing those same
          jobs. But I also think there will be other jobs created. And that has always happened
          in every technology shift.&quot;
        </JackCallout>

        <JackCaseOverview
          title="Interview Context — At a Glance"
          accentColor="orange"
          items={contextFacts}
        />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="Jassy's Exact Statements on AI and Workforce Impact" accentColor="orange">
          <p>
            Jassy addressed AI&apos;s effect on labor directly during the CNBC discussion,
            characterizing the current moment as{' '}
            <strong>&quot;the most transformational technology shift that we&apos;ve seen in
            our lifetime.&quot;</strong>
          </p>
          <JackCaseOverview
            title="Jassy Quotes — February 27, 2026"
            accentColor="orange"
            items={[
              { label: 'On job reduction:', value: '"I do believe that a lot of the jobs that we\'ve thrown human beings at for the last 20 or 30 years, you won\'t need as many human beings doing those same jobs."' },
              { label: 'On new job creation:', value: '"But I also think there will be other jobs created. And that has always happened in every technology shift."' },
              { label: 'On the transition:', value: '"So we will have lots of new jobs, and there\'ll be some sort of transition, and we\'ll all work through it together."' },
              { label: 'On AI broadly:', value: '"The most transformational technology shift that we\'ve seen in our lifetime."' },
            ]}
          />
          <p>
            Jassy grounded his optimism in historical precedent — citing{' '}
            <strong>cloud computing</strong> as an example of a technology shift that created
            entirely new job categories, such as cloud solutions architects, that did not exist
            15 years ago.
          </p>
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="Context: Amazon's Prior Statements and Layoff Record" accentColor="orange">
          <p>
            The February 27 remarks were consistent with — and an escalation of — positions
            Jassy has articulated across multiple forums over the preceding eight months.
          </p>
          <JackStats
            title="Amazon Workforce Reduction — 2025–2026"
            accentColor="orange"
            stats={[
              { value: '14,000', label: 'Corporate layoffs, Oct 2025' },
              { value: '16,000', label: 'Corporate layoffs, Jan 2026' },
              { value: '~30,000', label: 'Total corporate reductions since late 2025' },
              { value: '$50B', label: "Amazon's OpenAI investment commitment" },
            ]}
          />
          <p>
            In a <strong>June 2025 internal memo</strong>, Jassy wrote that generative AI and
            autonomous agents would change work processes across Amazon, and that he expected
            efficiency gains to reduce Amazon&apos;s total corporate workforce over the coming
            years. The memo was notable for its directness — it did not frame AI as purely
            additive to headcount.
          </p>
          <p>
            Amazon&apos;s October 2025 and January 2026 layoff rounds — totaling roughly 30,000
            corporate positions — were attributed publicly to removing management layers and
            bureaucracy. Jassy has consistently maintained that AI-driven efficiency is a
            contributing factor rather than the sole cause, though the June 2025 memo made the
            AI connection explicit.
          </p>
          <p>
            At <strong>Davos in January 2026</strong>, Jassy specified the job categories he
            expected to see AI impact most directly: <strong>coding, customer service, research,
            and analytics</strong> — while noting that Amazon continues hiring in AI, automation,
            and robotics to build the systems doing that work.
          </p>
        </JackSection>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <JackSection number={3} title="Block's 4,000+ Layoffs: AI Efficiency as Explicit Justification" accentColor="orange">
          <p>
            The day before Jassy&apos;s CNBC appearance, <strong>Block CEO Jack Dorsey</strong>{' '}
            provided the most direct example yet of a major tech company publicly framing a large
            workforce reduction as an AI efficiency story.
          </p>
          <JackCaseOverview
            title="Block Workforce Reduction — February 26, 2026"
            accentColor="orange"
            items={blockLayoffFacts}
          />
          <p>
            Dorsey&apos;s framing was notably unambiguous — he did not attribute the cuts to
            macroeconomic conditions or strategic pivots. He stated that AI tools are
            &quot;compounding faster weekly&quot; and that this was changing how Block operates,
            enabling smaller, flatter teams to achieve what larger teams previously required.
          </p>
          <JackCallout accentColor="blue" label="Dorsey Prediction">
            Dorsey stated he expected <strong>most companies would adopt similar
            efficiency measures within the next year</strong>. Block&apos;s shares rose 25% in
            after-hours trading following the announcement — a market signal that investors
            are currently rewarding AI-driven headcount reduction as a value creation event.
          </JackCallout>
        </JackSection>

        {/* ── Section 4 ────────────────────────────────────────── */}
        <JackSection number={4} title="Broader Tech Sector Layoff Trends in Early 2026" accentColor="orange">
          <p>
            The Jassy and Dorsey remarks arrived against a backdrop of accelerating tech
            sector workforce reductions. Industry tracking data indicates{' '}
            <strong>26,000 tech layoffs in the first two months of 2026</strong> — a pace
            that, if sustained, would exceed 2025&apos;s total of 245,000.
          </p>
          <p>
            Amazon&apos;s ~30,000 corporate reductions since late 2025 represent a significant
            portion of that figure. The pattern across companies is consistent: efficiency and
            AI are the stated drivers, with organizations flattening management structures and
            reducing headcount in roles that AI tools can partially or fully automate.
          </p>
          <JackStats
            title="Tech Sector Layoff Context"
            accentColor="orange"
            stats={[
              { value: '26,000', label: 'Tech layoffs, Jan–Feb 2026' },
              { value: '245,000', label: 'Tech layoffs, full year 2025' },
              { value: '4,000+', label: 'Block cuts, Feb 26, 2026' },
              { value: '+25%', label: "Block share price, after-hours Feb 26" },
            ]}
          />
          <p>
            What distinguishes the current cycle from prior tech layoff waves is the explicit
            attribution to AI efficiency rather than growth normalization or interest rate
            sensitivity. The Dorsey announcement is the clearest data point — but Jassy&apos;s
            February 27 remarks suggest that framing is becoming more common, not less, among
            major tech CEOs.
          </p>
          <p>
            For Amazon-specific coverage including AWS, Alexa, and corporate strategy, see{' '}
            <Link href="/amazon" className="font-medium underline hover:opacity-70">
              ObjectWire&apos;s Amazon hub
            </Link>. For the broader AI and workforce policy story, see the{' '}
            <Link href="/tech" className="font-medium underline hover:opacity-70">
              Technology desk
            </Link>.
          </p>
          <p>
            <em>
              When a CEO says jobs thrown at humans for decades won&apos;t need as many humans
              anymore, the transition period starts looking a lot like the old normal —
              just with fewer people on the payroll.
            </em>
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
