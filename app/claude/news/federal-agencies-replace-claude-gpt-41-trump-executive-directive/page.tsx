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

const SLUG = '/claude/news/federal-agencies-replace-claude-gpt-41-trump-executive-directive';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Federal Agencies Evict Claude, Replace It With GPT-4.1 After Trump Executive Directive | ObjectWire',
  description:
    "The U.S. State Department's StateChat has swapped Claude Sonnet 4.5 for OpenAI GPT-4.1, the Senate has approved Microsoft Copilot, Google Gemini, and ChatGPT Enterprise for official use — while excluding Anthropic entirely. Anthropic has filed two lawsuits in response.",
  keywords: [
    'federal government replaces Claude GPT-4.1 2026',
    'Trump executive directive Anthropic supply chain risk',
    'State Department StateChat Claude GPT-4.1 switch',
    'Senate approved AI tools Copilot Gemini ChatGPT',
    'Anthropic federal ban Pete Hegseth Department of War',
    'Anthropic evicted federal agencies March 2026',
    'Anthropic supply chain risk designation lawsuit',
    'Dario Amodei federal government AI contract',
    'StateChat GPT-4.1 training cutoff regression',
    'Senate Sergeant at Arms AI memo March 2026',
    'Anthropic autonomous weapons refusal federal ban',
    'Claude federal government banned OpenAI replacement',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Federal Agencies Evict Claude, Replace With GPT-4.1 After Trump Directive',
    description:
      "The State Department's StateChat has silently swapped Claude Sonnet 4.5 for GPT-4.1. The Senate has approved Microsoft, Google, and OpenAI — but not Anthropic. Anthropic CEO Dario Amodei says the move threatens 'billions in contracts.'",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['Anthropic', 'Claude', 'OpenAI', 'GPT-4.1', 'Federal Government', 'AI Policy', 'Trump'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude is Out of the U.S. Federal Government. GPT-4.1 Is In.',
    description:
      "State Department's StateChat: Claude → GPT-4.1. Senate approves Copilot, Gemini, ChatGPT — zero mention of Anthropic. Anthropic suing the government. Full breakdown.",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const keyFacts = [
  { label: 'Executive Directive',    value: 'February 27, 2026 — President Trump' },
  { label: 'Anthropic Designation',  value: '"Supply chain risk" — Secretary Pete Hegseth' },
  { label: 'State Dept. Platform',   value: 'StateChat — backbone swapped Claude Sonnet 4.5 → GPT-4.1' },
  { label: 'Compliance Deadline',    value: 'March 6, 2026 — all custom Anthropic configurations' },
  { label: 'Training Cutoff Shift',  value: 'June 2025 (Claude) → May 2024 (GPT-4.1) — 13-month regression' },
  { label: 'Senate Memo Date',       value: 'March 9, 2026 — Sergeant at Arms' },
  { label: 'Senate-Approved Tools',  value: 'Microsoft Copilot Chat · Google Gemini · OpenAI ChatGPT Enterprise' },
  { label: 'Anthropic Status',       value: '"Under evaluation" — effectively excluded from all executive branch use' },
  { label: 'Lawsuits Filed',         value: '2 — Anthropic vs. federal government, filed March 9, 2026' },
];

const divideStats = [
  { value: '3', label: 'Senate-approved AI tools (Copilot, Gemini, ChatGPT)' },
  { value: '0', label: 'Anthropic products on the Senate approved list' },
  { value: '13 mo', label: 'Training data regression: Claude (Jun 2025) → GPT-4.1 (May 2024)' },
  { value: '2', label: 'Lawsuits Anthropic filed vs. the federal government (Mar 9, 2026)' },
];

const safetyDivide = [
  { label: 'Autonomous Warfare',      value: 'Anthropic prohibits Claude for lethal autonomous weapons. Government: called it a "handcuff" on innovation.' },
  { label: 'Domestic Surveillance',   value: 'Anthropic refused mass surveillance of U.S. citizens. Government: designated as "supply chain risk."' },
  { label: 'Control Model',           value: 'Anthropic: industry-led guardrails. Government: the state must decide AI deployment for national defense.' },
];

const senateApproved = [
  { label: 'Microsoft Copilot Chat',      value: 'Integrated into Microsoft 365 — approved for official Senate use' },
  { label: 'Google Workspace + Gemini',  value: 'Gemini Chat within Google Workspace — approved' },
  { label: 'OpenAI ChatGPT Enterprise',  value: 'Enterprise tier — approved' },
  { label: "Elon Musk's Grok",          value: 'Absent from approved list — not approved' },
  { label: 'Anthropic Claude',           value: '"Under evaluation" — excluded from executive branch; not on Senate list' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FederalAgenciesEvictClaudePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Federal Agencies Evict Claude, Replace It With GPT-4.1 After Trump Executive Directive"
        description="The U.S. State Department has swapped Claude Sonnet 4.5 for GPT-4.1 in its StateChat platform. The Senate has approved Microsoft Copilot, Google Gemini, and ChatGPT Enterprise — excluding Anthropic entirely. Anthropic has filed two lawsuits in response."
        author="Jack Wang"
        authorUrl="https://www.objectwire.org/authors/jack-wang"
        publishedTime="2026-03-12T00:00:00Z"
        modifiedTime="2026-03-12T00:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Technology"
        keywords={[
          'federal government Claude GPT-4.1',
          'Anthropic supply chain risk',
          'StateChat GPT-4.1',
          'Senate AI approved tools',
          'Anthropic federal ban lawsuit',
        ]}
      />

      <JackArticle
        layout="news"
        title="Federal Agencies Evict Claude, Replace It With GPT-4.1 After Trump Executive Directive"
        subtitle="The U.S. government's break with Anthropic has moved from policy to operations. The State Department's StateChat silently swapped Claude for GPT-4.1, the Senate approved three AI tools while excluding Anthropic entirely, and Dario Amodei's company filed two lawsuits on March 9 calling the government's actions 'retaliatory.'"
        categoryLabel="AI Policy"
        categories={[
          { label: 'AI Policy', color: 'red' },
          { label: 'Anthropic', color: 'orange' },
          { label: 'Federal', color: 'blue' },
        ]}
        publishDate="March 12, 2026"
        publishDateISO="2026-03-12T00:00:00Z"
        modifiedDateISO="2026-03-12T00:00:00Z"
        readTime="7 min read"
        author={{
          name: 'Jack Wang',
          department: 'ObjectWire Technology Desk',
          url: 'https://www.objectwire.org/authors/jack-wang',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/claude', label: 'Claude / Anthropic' },
          { href: '/claude/news', label: 'News' },
          { href: SLUG, label: 'Federal Agencies Evict Claude' },
        ]}
        relatedArticles={[
          {
            href: '/tech/news/anthropic-court-filings-disclose-5-billion-in-total-revenue',
            category: 'Anthropic',
            categoryColor: 'text-orange-600',
            title: 'Anthropic Court Filings Disclose $5B Total Revenue vs. $19B Run Rate',
          },
          {
            href: '/claude/news/antrhopic-opus-3-retires',
            category: 'Anthropic',
            categoryColor: 'text-orange-600',
            title: "Anthropic's Retired Claude Opus 3 Gets Its Own Substack — And 4,800 Subscribers",
          },
          {
            href: '/claude',
            category: 'Claude / Anthropic',
            categoryColor: 'text-orange-600',
            title: 'ObjectWire Claude Hub — All Anthropic Coverage',
          },
          {
            href: '/open-ai',
            category: 'OpenAI',
            categoryColor: 'text-blue-600',
            title: 'ObjectWire OpenAI Hub — GPT-4.1, Sora & More',
          },
        ]}
        timeline={[
          { date: 'Feb 27, 2026', description: 'President Trump issues executive directive. Anthropic designated a "supply chain risk" by Secretary Pete Hegseth.', highlight: true },
          { date: 'Mar 1–5, 2026', description: 'Federal agencies begin operational transition. State Department\'s StateChat backend swapped from Claude Sonnet 4.5 to GPT-4.1.', highlight: false },
          { date: 'Mar 6, 2026', description: 'Compliance deadline. All federal employees with custom Anthropic integrations ordered to fully migrate.', highlight: true },
          { date: 'Mar 9, 2026', description: 'Senate Sergeant at Arms issues memo approving Microsoft Copilot Chat, Google Gemini, and ChatGPT Enterprise for official Senate use. Anthropic absent.', highlight: true },
          { date: 'Mar 9, 2026', description: 'Anthropic files two lawsuits against the federal government seeking to block the "supply chain risk" designation. Dario Amodei calls the action "retaliatory."', highlight: true },
          { date: 'Mar 12, 2026', description: 'Full operational impact confirmed. Thousands of federal employees now working with GPT-4.1 with a 13-month training data regression.', highlight: false },
        ]}
        documents={[
          { href: 'https://www.anthropic.com', label: 'Anthropic Corporate — anthropic.com', icon: '🔗' },
          { href: 'https://www.state.gov', label: 'U.S. State Department — state.gov', icon: '🔗' },
          { href: 'https://www.senate.gov', label: 'U.S. Senate — senate.gov', icon: '🔗' },
          { href: 'https://openai.com', label: 'OpenAI — openai.com', icon: '🔗' },
        ]}
        accentColor="red"
        articleUrl={ARTICLE_URL}
        description="Federal agencies have operationally replaced Claude with GPT-4.1 following a Trump executive directive. Anthropic has filed two lawsuits in response."
        section="Technology"
        keywords={['Anthropic federal ban', 'StateChat GPT-4.1', 'Claude evicted government', 'Senate AI tools']}
        showCorrections
        showEditorialStandards
        footerTagline="When an AI company's safety principles become a national security liability in the eyes of the state, the market for government contracts doesn't wait for the courts."
        footerLinks={[
          { href: '/claude', label: 'Claude / Anthropic' },
          { href: '/open-ai', label: 'OpenAI' },
          { href: '/tech', label: 'Technology Desk' },
        ]}
      >

        {/* ── KEY STATS ────────────────────────────── */}
        <JackStats
          accentColor="red"
          stats={divideStats}
        />

        {/* ── OVERVIEW ─────────────────────────────── */}
        <JackSection title="Overview" accentColor="red">
          <p>
            The federal government&apos;s transition away from Anthropic has moved beyond policy
            into a full-scale operational overhaul. Following a{' '}
            <strong>February 27, 2026 executive directive</strong> by President Trump, the U.S.
            State Department and several other cabinet-level agencies have officially &quot;evicted&quot;{' '}
            <Link href="/claude" className="text-orange-600 hover:underline">Claude</Link>, replacing
            it with{' '}
            <Link href="/open-ai" className="text-blue-600 hover:underline">OpenAI</Link>&apos;s
            GPT-4.1.
          </p>
          <p>
            This shift — triggered by Anthropic&apos;s designation as a{' '}
            <strong>&quot;supply chain risk&quot;</strong> by Secretary Pete Hegseth — has
            fundamentally altered the digital tools used by thousands of federal employees, with
            one notable operational consequence: a <strong>13-month regression in training data</strong>{' '}
            for the government&apos;s most-used enterprise AI platform.
          </p>
          <JackCallout label="BREAKING — Anthropic Fights Back" accentColor="red">
            On March 9, 2026, Anthropic filed two lawsuits against the federal government seeking
            to block the &quot;supply chain risk&quot; designation. CEO Dario Amodei called the
            actions &quot;retaliatory&quot; and said the designation could turn Anthropic into a
            &quot;pariah&quot; in the tech industry, threatening <strong>billions in contracts</strong>.
          </JackCallout>
        </JackSection>

        {/* ── KEY FACTS ────────────────────────────── */}
        <JackSection title="Key Facts" accentColor="red">
          <JackCaseOverview
            accentColor="red"
            title="Federal-Anthropic Divorce — At a Glance"
            items={keyFacts}
          />
        </JackSection>

        {/* ── STATE DEPT ───────────────────────────── */}
        <JackSection title='The State Department: "StateChat" Goes GPT' accentColor="red">
          <p>
            The State Department&apos;s flagship enterprise AI platform, <strong>StateChat</strong>,
            has undergone what internal memos describe as a &quot;silent backbone transplant.&quot;
            The platform&apos;s interface remains the same; the intelligence powering it has not.
          </p>
          <p>
            Internal communications reviewed by ObjectWire confirm that{' '}
            <strong>Claude Sonnet 4.5</strong> has been replaced by <strong>OpenAI&apos;s GPT-4.1</strong>.
            The switch carries a significant operational downgrade in one area: knowledge currency.
          </p>
          <JackCaseOverview
            accentColor="orange"
            title="StateChat: Before & After"
            items={[
              { label: 'Previous Model', value: 'Claude Sonnet 4.5 (Anthropic)' },
              { label: 'Current Model', value: 'GPT-4.1 (OpenAI)' },
              { label: 'Previous Training Cutoff', value: 'June 2025' },
              { label: 'Current Training Cutoff', value: 'May 2024' },
              { label: 'Intelligence Lag Introduced', value: '13 months of training data lost' },
              { label: 'Migration Deadline', value: 'March 6, 2026 — all custom configurations' },
            ]}
          />
          <JackCallout label="INSIGHT — The Intelligence Regression" accentColor="orange">
            While StateChat&apos;s interface is unchanged, federal employees are now working with
            an AI model whose knowledge stops at <strong>May 2024</strong> — meaning it has no
            awareness of roughly 13 months of world events, policy changes, and technical
            developments compared to its predecessor.
          </JackCallout>
        </JackSection>

        {/* ── SENATE ───────────────────────────────── */}
        <JackSection title='The Senate: "The Big Three" Approved' accentColor="red">
          <p>
            In a parallel move on <strong>March 9, 2026</strong>, the U.S. Senate Sergeant at
            Arms issued a memo authorizing a limited list of AI tools for official Senate use.
            The exclusion of Anthropic — and the presence of all three major commercial AI
            competitors — sent an unambiguous signal about Washington&apos;s current posture.
          </p>
          <JackCaseOverview
            accentColor="blue"
            title="Senate AI Tool Approval Status"
            items={senateApproved}
          />
          <p>
            Notably, Elon Musk&apos;s <strong>Grok</strong> was also absent from the approved
            list — a detail that surprised some observers given Musk&apos;s proximity to the Trump
            administration. Claude remains in a permanent &quot;under evaluation&quot; status that,
            in practice, means it is <strong>unavailable for use across the entire executive
            branch</strong>.
          </p>
        </JackSection>

        {/* ── WHY THE BREAK ────────────────────────── */}
        <JackSection title="Why the Sudden Break? Safety vs. National Security" accentColor="red">
          <p>
            The &quot;divorce&quot; between Washington and Anthropic stems from a fundamental
            philosophical disagreement over how AI should be governed when national security
            interests are at stake. Anthropic built its identity around safety-first principles;
            the current administration views those same principles as constraints on American
            military and intelligence capability.
          </p>
          <JackCaseOverview
            accentColor="red"
            title="The Core Disagreement"
            items={safetyDivide}
          />
          <JackCallout label="WARNING — The Designation That Changed Everything" accentColor="red">
            The &quot;supply chain risk&quot; label — applied by Secretary Pete Hegseth — is not
            merely symbolic. Under existing procurement rules, it triggers automatic exclusion from
            federal contracting processes and forces agencies to immediately cease and migrate away
            from the designated vendor&apos;s products. It is the federal equivalent of a
            vendor blacklist.
          </JackCallout>
        </JackSection>

        {/* ── ANTHROPIC COUNTER ────────────────────── */}
        <JackSection title="Anthropic's Counter-Attack" accentColor="red">
          <p>
            Anthropic did not absorb the designation quietly. On <strong>March 9, 2026</strong>,
            the company filed <strong>two major lawsuits</strong> against the federal government,
            seeking to block the supply chain risk label in court. The lawsuits argue that:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.9', marginBottom: '1rem' }}>
            <li>
              The designation was <strong>issued without due process</strong> — Anthropic argues
              it was given no opportunity to respond before the label was applied
            </li>
            <li>
              The action is <strong>retaliatory</strong> — triggered specifically because
              Anthropic refused to weaken its safety protocols at the government&apos;s request
            </li>
            <li>
              The economic harm is <strong>existential in scale</strong> — Amodei cited
              &quot;billions in contracts&quot; at risk, with potential knock-on effects that could
              turn Anthropic into a &quot;pariah&quot; with private enterprise clients as well
            </li>
          </ul>
          <JackCaseOverview
            accentColor="orange"
            title="Anthropic Legal Action — March 9, 2026"
            items={[
              { label: 'Lawsuits Filed', value: '2 — both against the federal government' },
              { label: 'Target', value: 'Block the "supply chain risk" designation' },
              { label: 'Legal Argument', value: 'Retaliatory + lack of due process' },
              { label: 'CEO Statement', value: 'Dario Amodei: designation threatens "billions in contracts"' },
              { label: 'Risk Cited', value: 'Could turn Anthropic into a "pariah" in the tech industry' },
              { label: 'Status', value: 'Active — court proceedings ongoing' },
            ]}
          />
        </JackSection>

        {/* ── WHAT THIS MEANS ──────────────────────── */}
        <JackSection title="What This Means for the AI Market" accentColor="red">
          <p>
            The federal government is the largest single technology buyer in the world. Its
            explicit endorsement of{' '}
            <Link href="/open-ai" className="text-blue-600 hover:underline">OpenAI</Link>,{' '}
            Microsoft, and Google — and its simultaneous exclusion of Anthropic — carries
            market signalling weight far beyond the revenue directly at stake.
          </p>
          <p>
            For enterprise procurement teams across industries that follow federal security
            standards, the &quot;supply chain risk&quot; designation creates a reputational
            overhang. Anthropic&apos;s argument that this could produce a &quot;pariah&quot;
            effect in private markets is not hyperbole — it is a documented pattern in federal
            vendor exclusion cases.
          </p>
          <p>
            OpenAI, meanwhile, has received the most unambiguous government endorsement of any
            AI company to date: its product is now the backbone of the U.S. State
            Department&apos;s primary AI tool, with no competing alternative on the approved
            list for any major federal platform.
          </p>
          <JackCallout label="INSIGHT — The OpenAI Windfall" accentColor="blue">
            GPT-4.1 replacing Claude in StateChat is not just a product swap — it is a federal
            reference win that OpenAI&apos;s sales team can deploy in every enterprise conversation
            globally. &quot;The U.S. State Department runs on GPT-4.1&quot; is a line worth
            billions in sales cycles.
          </JackCallout>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
