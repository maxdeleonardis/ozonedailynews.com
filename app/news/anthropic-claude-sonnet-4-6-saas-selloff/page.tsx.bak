import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline, TagsSection } from '@/components/NewsArticle';

const SLUG = '/news/anthropic-claude-sonnet-4-6-saas-selloff';

export const metadata: Metadata = {
  title: 'Anthropic Claude Sonnet 4.6 Triggers Fresh SaaS Stock Selloff | ObjectWire',
  description:
    'Anthropic released Claude Sonnet 4.6 on February 17, 2026 — its most capable mid-tier model yet. The announcement triggered declines in Oracle, Salesforce, Intuit, Adobe, and India\'s Nifty IT index as markets reacted to deepening AI automation pressure on enterprise software.',
  keywords: [
    'Anthropic Claude Sonnet 4.6',
    'Claude 4.6',
    'Anthropic AI',
    'SaaS stocks selloff',
    'AI impact on software stocks',
    'Oracle stock decline',
    'Salesforce AI competition',
    'Intuit stock',
    'Adobe stock',
    'Nifty IT index',
    'AI automation SaaS',
    'enterprise software AI disruption',
    'iShares Tech Software ETF',
    'Claude AI model 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Anthropic Claude Sonnet 4.6 Sells Fresh Wave of SaaS Falloff',
    description:
      'Anthropic\'s Claude Sonnet 4.6 dropped Feb 17, 2026. Oracle fell 3.4%, Intuit 5.2%, Salesforce 2.7%, Adobe 1.4%. India\'s Nifty IT dropped 2.5% the next day. Full breakdown on ObjectWire.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'],
    publishedTime: '2026-02-18T10:00:00Z',
    modifiedTime: '2026-02-18T10:00:00Z',
    section: 'Technology',
    tags: ['Anthropic', 'Claude', 'AI', 'SaaS', 'Stocks', 'Oracle', 'Salesforce', 'Intuit', 'Adobe'],
    images: [
      {
        url: 'https://www.objectwire.org/news/calude%20sonnet%204.6.png',
        width: 1200,
        height: 630,
        alt: 'Anthropic Claude Sonnet 4.6',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthropic Claude Sonnet 4.6 Triggers SaaS Selloff — Oracle -3.4%, Intuit -5.2%',
    description:
      'Anthropic\'s most capable mid-tier model yet hit on Feb 17. The market reaction was immediate. Full breakdown on ObjectWire.',
    images: ['https://www.objectwire.org/news/calude%20sonnet%204.6.png'],
  },
};

const timelineEvents = [
  {
    time: 'Feb 17, 2026 — Morning',
    title: 'Anthropic Releases Claude Sonnet 4.6',
    description: 'Announced as the most capable Sonnet-class model to date. Becomes the default model for free and Pro users on claude.ai immediately.',
  },
  {
    time: 'Feb 17, 2026 — Market Hours',
    title: 'US Software Stocks Decline',
    description: 'Oracle -3.4%, Thomson Reuters -3%, Salesforce -2.7%, Intuit -5.2%, Adobe -1.4% during trading.',
  },
  {
    time: 'Feb 18, 2026',
    title: 'India\'s Nifty IT Index Drops ~2.5%',
    description: 'Persistent Systems, Infosys, Coforge, Tech Mahindra, and LTI Mindtree each decline 2–3% as global IT markets absorb the implications.',
  },
];

const stockMoves = [
  { company: 'Oracle', ticker: 'ORCL', move: '-3.4%', color: 'text-red-600', bar: 'w-[68%]' },
  { company: 'Thomson Reuters', ticker: 'TRI', move: '-3.0%', color: 'text-red-600', bar: 'w-[60%]' },
  { company: 'Salesforce', ticker: 'CRM', move: '-2.7%', color: 'text-red-600', bar: 'w-[54%]' },
  { company: 'Adobe', ticker: 'ADBE', move: '-1.4%', color: 'text-red-500', bar: 'w-[28%]' },
  { company: 'Intuit', ticker: 'INTU', move: '-5.2%', color: 'text-red-700 font-extrabold', bar: 'w-[100%]' },
];

export default function ClaudeSonnet46SaasPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Anthropic Claude Sonnet 4.6 Triggers Fresh SaaS Stock Selloff"
        description="Anthropic released Claude Sonnet 4.6 on February 17, 2026. The announcement triggered immediate declines in Oracle, Salesforce, Intuit, Adobe, and India's Nifty IT index as markets priced in deepening AI disruption to enterprise software."
        author="ObjectWire Technology Desk"
        publishedTime="2026-02-18T10:00:00Z"
        modifiedTime="2026-02-18T10:00:00Z"
        imageUrl="https://www.objectwire.org/news/calude%20sonnet%204.6.png"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Technology"
        keywords={[
          'Anthropic Claude Sonnet 4.6',
          'SaaS stocks selloff',
          'AI automation',
          'Oracle stock',
          'Intuit stock',
          'Salesforce AI',
          'Nifty IT index',
          'iShares Tech Software ETF',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'News', item: '/news' },
              { name: 'Claude Sonnet 4.6 & SaaS Selloff', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Anthropic Claude Sonnet 4.6 Sells Fresh Wave of SaaS Falloff"
        subtitle="A mid-tier model with near-flagship performance at unchanged pricing. The market didn't wait for earnings calls to respond."
        category="AI & Tech"
        categoryColor="purple"
        topicTag="ai"
        publishDate="February 18, 2026"
        readTime="5 min read"
        breaking={true}
        heroImage={{
          src: '/news/calude sonnet 4.6.png',
          alt: 'Anthropic Claude Sonnet 4.6 model announcement',
          caption: 'Anthropic released Claude Sonnet 4.6 on February 17, 2026 — triggering a fresh wave of SaaS stock declines.',
          credit: 'ObjectWire / Anthropic',
        }}
        author={{
          name: 'ObjectWire Technology Desk',
          role: 'AI & Markets Reporter',
        }}
        tags={['Anthropic', 'Claude 4.6', 'AI', 'SaaS', 'Stocks', 'Oracle', 'Salesforce', 'Intuit', 'Adobe', 'Nifty IT', 'Enterprise Software', 'AI Disruption']}
      >

        {/* Lede */}
        <p>
          Anthropic introduced <strong>Claude Sonnet 4.6</strong> on February 17, 2026, describing it as the company&apos;s most capable Sonnet-class model to date. Within hours, shares of major enterprise software companies were moving lower — Oracle, Salesforce, Intuit, Adobe, and Thomson Reuters all closed in the red, and the ripple reached India&apos;s Nifty IT index the following morning. The pattern is becoming a familiar one: a new frontier AI model drops, and the market re-evaluates how much enterprise software is worth.
        </p>

        <HighlightBox type="key-point" color="purple">
          <strong>Intuit fell 5.2%</strong>, Oracle 3.4%, Thomson Reuters 3%, Salesforce 2.7%, and Adobe 1.4% on February 17, 2026 alone — following the Sonnet 4.6 announcement. India&apos;s Nifty IT index declined ~2.5% the next day.
        </HighlightBox>

        {/* Capabilities */}
        <h2>Model Capabilities: What Sonnet 4.6 Actually Delivers</h2>
        <p>
          Claude Sonnet 4.6 delivers measurable improvements across six core capability areas: <strong>coding, computer use (browser-based automation), long-context reasoning, agent planning, knowledge work, and design</strong>. The benchmark results are what spooked the market:
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-3 gap-4">
          {[
            { label: 'OSWorld-Verified', value: '72.5%', sub: 'Computer use tasks — within 0.2% of flagship Opus 4.6', color: 'border-purple-500 bg-purple-50' },
            { label: 'SWE-bench Verified', value: '79.6%', sub: 'Software engineering coding benchmark', color: 'border-blue-500 bg-blue-50' },
            { label: 'Office Productivity Elo', value: '1,633', sub: 'Leading performance in knowledge work tasks', color: 'border-green-500 bg-green-50' },
          ].map((s) => (
            <div key={s.label} className={`border-l-4 ${s.color} p-4 rounded-r-lg`}>
              <p className="text-2xl font-black text-gray-900">{s.value}</p>
              <p className="text-sm font-bold text-gray-700">{s.label}</p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">{s.sub}</p>
            </div>
          ))}
        </div>

        <p>
          The 72.5% score on OSWorld-Verified — a benchmark measuring how well AI can autonomously control a computer browser and desktop environment — is particularly significant. It&apos;s within 0.2% of Anthropic&apos;s flagship Opus model. For tasks that involve navigating software interfaces, filling forms, running reports, or automating repetitive digital work, Sonnet 4.6 is nearly indistinguishable from the top of the line.
        </p>

        {/* Pricing */}
        <h2>Pricing: Same Cost, Significantly More Capable</h2>
        <p>
          Anthropic held pricing flat at <strong>$3 per million input tokens</strong> and <strong>$15 per million output tokens</strong> — identical to Sonnet 4.5. The model immediately became the <strong>default for free and Pro users</strong> on claude.ai, Claude Cowork, and related products, meaning the upgrade was automatic and universal for existing users.
        </p>
        <p>
          Early access users reported preferring Sonnet 4.6 over the prior Opus 4.5 on many tasks, citing better consistency, stronger instruction-following, and equivalent or superior results at significantly lower cost. That combination — more capable, same price, better instruction compliance — is precisely what enterprise software buyers evaluate when deciding whether to build internal AI tooling or continue paying SaaS subscription fees.
        </p>

        <blockquote>
          When a mid-tier model delivers near-flagship performance at unchanged pricing, the market doesn&apos;t always wait for the full earnings call to adjust valuations.
        </blockquote>

        {/* Stock Market Response */}
        <h2>Stock Market Response: February 17, 2026</h2>
        <p>
          The sell-off was immediate and broad. Software companies whose revenue is most directly threatened by AI automation — tax preparation, legal research, CRM, creative tools — took the largest hits.
        </p>

        {/* Bar chart visual */}
        <div className="not-prose my-6 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-red-700 px-5 py-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">US SaaS Stock Moves — Feb 17, 2026</h3>
          </div>
          <div className="p-5 space-y-4">
            {stockMoves.map((s) => (
              <div key={s.ticker}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-gray-800">{s.company} <span className="text-gray-400 font-normal text-xs">({s.ticker})</span></span>
                  <span className={`text-sm ${s.color}`}>{s.move}</span>
                </div>
                <div className="w-full bg-red-100 rounded-full h-2">
                  <div className={`bg-red-600 h-2 rounded-full ${s.bar}`} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 px-5 pb-3 italic">Source: Market data, Feb 17, 2026. Bars scaled relative to largest single-day move (Intuit -5.2%).</p>
        </div>

        <p>
          <strong>Intuit</strong> — parent of TurboTax, QuickBooks, and Credit Karma — suffered the biggest single-day decline at 5.2%. The market is pricing in that AI agents capable of autonomous computer use and reasoning represent an existential threat to tax preparation and bookkeeping software workflows. <strong>Oracle</strong> declined 3.4%, a company that has made aggressive AI-integration announcements of its own, suggesting the market views the pace of third-party AI development as outrunning Oracle&apos;s internal roadmap.
        </p>
        <p>
          <strong>Salesforce</strong> fell 2.7% — notable given that Salesforce has positioned its Agentforce platform as an AI-native CRM solution. The market appeared to weigh whether Sonnet 4.6&apos;s agentic planning and computer use capabilities give enterprises a reason to build their own AI CRM tooling rather than pay Salesforce licensing fees.
        </p>

        {/* India / Nifty IT */}
        <h2>India: Nifty IT Drops ~2.5% on February 18</h2>
        <p>
          The sell-off extended to Indian IT services on February 18, 2026, with the <strong>Nifty IT index declining approximately 2.5%</strong>. Companies exposed to software services and outsourced knowledge work were among the hardest hit:
        </p>
        <ul>
          <li><strong>Persistent Systems</strong> — 2–3% decline</li>
          <li><strong>Infosys</strong> — 2–3% decline</li>
          <li><strong>Coforge</strong> — 2–3% decline</li>
          <li><strong>Tech Mahindra</strong> — 2–3% decline</li>
          <li><strong>LTI Mindtree</strong> — 2–3% decline</li>
        </ul>
        <p>
          Indian IT services companies are particularly exposed to AI automation risk because a significant portion of their revenue comes from software development outsourcing, QA, data processing, and IT support — all categories where Sonnet 4.6&apos;s coding (79.6% SWE-bench) and computer use (72.5% OSWorld) capabilities directly compete.
        </p>

        {/* Broader Context */}
        <h2>Broader Context: SaaS Under Sustained AI Pressure</h2>

        <HighlightBox type="stat" color="orange">
          The <strong>iShares Expanded Tech-Software Sector ETF (IGV)</strong> has declined approximately <strong>21% year-to-date</strong> as of mid-February 2026 — reflecting sustained market concern about AI automation compressing enterprise software workflows and willingness-to-pay.
        </HighlightBox>

        <p>
          The Sonnet 4.6 announcement is not a standalone event. It is part of an accelerating model release cadence from Anthropic, <Link href="/open-ai" className="text-blue-600 font-medium hover:underline">OpenAI</Link>, Google DeepMind, and others that has put software sector valuations under a sustained re-rating pressure throughout 2025 and into 2026. The earlier Claude Opus 4.6 release also contributed to the broader tech-software softness seen in recent weeks.
        </p>
        <p>
          Analysts are divided on the ultimate impact. The bearish read is that <Link href="/saas" className="text-blue-600 font-medium hover:underline">SaaS companies</Link> charging per-seat subscription fees for software that AI models can now replicate through browser automation face a structural pricing ceiling. The more cautious view holds that enterprise software is sticky — procurement cycles are long, compliance requirements are complex, and organizations don&apos;t abandon their ERP or CRM systems based on a benchmark score.
        </p>
        <p>
          But both camps agree on one point: the pace of AI capability gains is outrunning most enterprise software companies&apos; ability to ship AI-native counterfeatures fast enough to justify their current multiples.
        </p>

        {/* Timeline */}
        <h2>Timeline: Claude Sonnet 4.6 &amp; Market Reaction</h2>
        <div className="not-prose">
          <Timeline events={timelineEvents} />
        </div>

        {/* Related */}
        <h2>Related Coverage</h2>
        <ul>
          <li><Link href="/open-ai" className="text-blue-600 hover:underline font-medium">OpenAI — Coverage of GPT models and AI competition →</Link></li>
          <li><Link href="/saas" className="text-blue-600 hover:underline font-medium">SaaS — Enterprise software sector coverage →</Link></li>
          <li><Link href="/finance" className="text-blue-600 hover:underline font-medium">Finance — Markets &amp; macro analysis →</Link></li>
          <li><Link href="/tech" className="text-blue-600 hover:underline font-medium">Tech News — Broader technology reporting →</Link></li>
          <li><Link href="/nvidia" className="text-blue-600 hover:underline font-medium">Nvidia — AI hardware &amp; infrastructure →</Link></li>
        </ul>

        <p className="text-xs text-gray-400 mt-4 italic">
          Disclaimer: This article is for informational purposes only and does not constitute investment advice. Stock movements cited are for reporting purposes. Consult a qualified financial advisor before making any investment decisions.
        </p>

      </NewsArticle>
    </SEOWrapper>
  );
}
