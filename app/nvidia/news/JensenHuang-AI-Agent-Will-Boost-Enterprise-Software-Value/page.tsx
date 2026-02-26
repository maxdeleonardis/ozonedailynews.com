import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/nvidia/news/JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value';
const AUTHOR_NAME = 'Alfansa';
const AUTHOR_URL = 'https://www.objectwire.org/authors/alfansa';

export const metadata: Metadata = {
  title: "Jensen Huang Says AI Will Boost Enterprise Software's Inherent Value | ObjectWire",
  description:
    'Nvidia CEO Jensen Huang told a Goldman Sachs conference on February 24, 2026 that markets have misjudged AI agents, arguing the technology will increase the value of ServiceNow, Snowflake, SAP, and Oracle rather than displace them.',
  keywords: [
    'Jensen Huang AI enterprise software',
    'Nvidia CEO Goldman Sachs 2026',
    'AI agents ServiceNow Snowflake SAP Oracle',
    'enterprise software AI value',
    'Jensen Huang software stocks',
    'AI agents not replacing software',
    'ServiceNow AI agents 2026',
    'Snowflake data cloud AI',
    'SAP Oracle AI agents',
    'enterprise software market trillion',
    'Jensen Huang Goldman Sachs February 2026',
    'Nvidia AI enterprise strategy',
    'software stocks AI recovery',
    'agentic AI enterprise platforms',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Jensen Huang: AI Agents Will Boost Enterprise Software Value, Not Destroy It",
    description:
      'At a Goldman Sachs conference, Jensen Huang called the market sell-off in software stocks a misreading. He argues AI agents sit on top of ServiceNow, Snowflake, SAP, and Oracle as intelligent users, not replacements.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-02-25T08:00:00Z',
    modifiedTime: '2026-02-25T08:00:00Z',
    section: 'Technology',
    tags: [
      'Jensen Huang', 'Nvidia', 'AI Agents', 'ServiceNow', 'Snowflake',
      'SAP', 'Oracle', 'Enterprise Software', 'Goldman Sachs', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jensen Huang: Markets Got It Wrong on AI and Enterprise Software",
    description:
      "Nvidia's CEO says AI agents will act as intelligent users layered on top of ServiceNow, Snowflake, SAP, and Oracle -- not replace them. ServiceNow jumped 3.1% in pre-market.",
  },
};

const softwareStocks = [
  {
    ticker: 'NOW',
    company: 'ServiceNow',
    price: '$942.15',
    marketCap: '$194 billion',
    forwardPE: '52.4x',
    color: 'border-green-500 bg-green-50',
    dot: 'bg-green-500',
    note: 'IT service management and workflow orchestration leader',
  },
  {
    ticker: 'SNOW',
    company: 'Snowflake',
    price: '$148.70',
    marketCap: '$49.8 billion',
    forwardPE: '-78.6x (pre-profit)',
    color: 'border-blue-500 bg-blue-50',
    dot: 'bg-blue-500',
    note: 'Data cloud platform; 3.2 billion daily queries processed in Q3 FY2026',
  },
  {
    ticker: 'SAP',
    company: 'SAP',
    price: '$248.90',
    marketCap: '$291 billion',
    forwardPE: 'N/A',
    color: 'border-purple-500 bg-purple-50',
    dot: 'bg-purple-500',
    note: 'Global ERP backbone; deep enterprise workflow integration',
  },
  {
    ticker: 'ORCL',
    company: 'Oracle',
    price: '$168.45',
    marketCap: '$468 billion',
    forwardPE: 'N/A',
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
    note: 'Database and cloud infrastructure; foundational to enterprise data stacks',
  },
];

const timelineEvents = [
  {
    time: 'Late 2024 - Early 2025',
    title: 'AI Agent Hype Peaks',
    description:
      'Investor enthusiasm for autonomous AI agents triggers a narrative that agentic systems could replace existing software platforms by handling tasks end-to-end without traditional SaaS tools.',
  },
  {
    time: 'Q1 2025',
    title: 'Software Stock Sell-Off Begins',
    description:
      'Enterprise software stocks including ServiceNow, Snowflake, SAP, and Oracle face valuation pressure as analysts debate whether AI agents reduce demand for workflow and data platforms.',
  },
  {
    time: 'Q4 2025',
    title: 'ServiceNow AI Bookings Surge',
    description:
      'ServiceNow reports AI-related features contributing 15% of new bookings in Q4 2025, generating $10.2 billion in subscription revenue for the full fiscal year -- up 22% year-over-year.',
  },
  {
    time: 'February 24, 2026',
    title: "Huang Speaks at Goldman Sachs Conference",
    description:
      'Nvidia CEO Jensen Huang states markets have misjudged AI agent impact on enterprise software, arguing platforms like ServiceNow will build their own specialized AI agents, increasing platform value rather than diminishing it.',
  },
  {
    time: 'February 25, 2026',
    title: 'Pre-Market Software Rally',
    description:
      'ServiceNow rises 3.1% and Snowflake gains 2.4% in pre-market trading following Huang\'s remarks, partially reversing recent AI disruption-driven declines.',
  },
];

export default function JensenHuangAIEnterprisePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Jensen Huang Says AI Will Boost Enterprise Software's Inherent Value -- Here Is Why"
        description="Nvidia CEO Jensen Huang told a Goldman Sachs conference on February 24, 2026 that markets have misjudged AI agents, arguing the technology will increase -- not diminish -- the value of ServiceNow, Snowflake, SAP, and Oracle."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-02-25T08:00:00Z"
        modifiedTime="2026-02-25T08:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Technology"
        keywords={[
          'Jensen Huang AI enterprise software',
          'Nvidia CEO Goldman Sachs 2026',
          'AI agents ServiceNow Snowflake SAP Oracle',
          'enterprise software AI value',
          'software stocks AI recovery 2026',
          'agentic AI enterprise platforms',
          'ServiceNow AI bookings 2025',
          'Snowflake data cloud AI workloads',
          'Jensen Huang software not declining',
          'trillion dollar enterprise software market',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Nvidia', item: '/nvidia' },
              { name: 'Jensen Huang on AI and Enterprise Software', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Jensen Huang Says AI Will Boost Enterprise Software's Inherent Value -- Here Is Why"
        subtitle="At a Goldman Sachs conference, Nvidia's CEO pushed back on the market narrative that AI agents threaten platforms like ServiceNow, Snowflake, SAP, and Oracle -- calling the sell-off a misreading and predicting AI will expand their value."
        category="Technology"
        categoryColor="green"
        topicTag="ai"
        publishDate="February 25, 2026"
        readTime="6 min read"
        breaking={false}
        trending={true}
        author={{
          name: AUTHOR_NAME,
          role: 'Finance & Markets Reporter',
          authorSlug: 'alfansa',
        }}
        tags={[
          'Jensen Huang', 'Nvidia', 'AI Agents', 'ServiceNow', 'Snowflake',
          'SAP', 'Oracle', 'Goldman Sachs', 'Enterprise Software', 'Technology',
          'Software Stocks', 'Agentic AI',
        ]}
      >

        {/* Lede */}
        <p>
          <Link href="/nvidia" className="text-blue-600 font-medium hover:underline">Nvidia</Link> CEO{' '}
          <strong>Jensen Huang</strong> stated on <strong>February 24, 2026</strong>, during a Goldman Sachs
          conference that investors have misjudged the impact of AI agents on enterprise software companies. He
          argued that AI will increase -- not diminish -- the value of platforms such as{' '}
          <strong>ServiceNow</strong>, <strong>Snowflake</strong>, <strong>SAP</strong>, and{' '}
          <strong>Oracle</strong>.
        </p>
        <p>
          Huang described the market's recent sell-off in software stocks as a misreading, asserting that AI
          agents will act as intelligent users layered on top of existing platforms rather than replacing them
          entirely.
        </p>

        <HighlightBox type="key-point" color="blue">
          "The markets got it wrong" on AI agents replacing traditional platforms. Huang called the idea of
          structural software decline due to AI <strong>"illogical"</strong> -- and predicted that companies
          like ServiceNow will build <strong>specialized AI agents optimized for their own ecosystems</strong>,
          making the platforms more valuable, not less.
        </HighlightBox>

        {/* Huang's Core Statements */}
        <h2>Huang's Core Statements on AI Agents and Software</h2>
        <p>
          Huang directly addressed fears that AI agents will cannibalize enterprise software. His key
          statements at the Goldman Sachs conference:
        </p>
        <ul>
          <li>
            <strong>"The markets got it wrong"</strong> on the idea that AI agents will replace traditional
            platforms.
          </li>
          <li>
            The notion that software faces <strong>"structural decline"</strong> because of AI is{' '}
            <strong>"illogical."</strong>
          </li>
          <li>
            <strong>"Nobody will service better than ServiceNow"</strong> -- he expects companies like
            ServiceNow to build highly specialized AI agents optimized for their own ecosystems.
          </li>
          <li>
            Enterprise software remains a <strong>trillion-dollar market</strong> where AI agents will sit on
            top as an intelligent layer, consuming existing tools rather than rebuilding everything from
            scratch.
          </li>
        </ul>
        <p>
          He emphasized that large language models and agentic systems require structured data, workflow
          orchestration, and integration layers -- areas where established platforms hold dominant positions.
        </p>

        {/* Market Size */}
        <h2>Size of the Enterprise Software Market</h2>
        <p>
          The global enterprise software market reached <strong>$1.02 trillion</strong> in 2025 according to
          Gartner, with cloud-based applications contributing <strong>$318 billion</strong>. IDC's 2025
          estimate placed the total enterprise software and services market at{' '}
          <strong>$1.05 trillion</strong>. Huang's reference to a trillion-dollar market aligns with both
          figures.
        </p>
        <p>
          The four companies Huang named -- ServiceNow, Snowflake, SAP, and Oracle -- collectively represent
          over <strong>$1 trillion in market capitalization</strong> as of February 24, 2026 closing prices.
        </p>

        {/* Stock Cards */}
        <h2>Performance of Key Software Companies Named by Huang</h2>
        <p>
          Closing prices and market data for the four companies Huang referenced, as of{' '}
          <strong>February 24, 2026</strong>:
        </p>

        <div className="not-prose space-y-4 my-6">
          {softwareStocks.map((stock, i) => (
            <div key={stock.ticker} className={`border-l-4 ${stock.color} rounded-r-xl p-5 shadow-sm`}>
              <div className="flex items-start gap-3">
                <div
                  className={`w-7 h-7 ${stock.dot} rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 mt-0.5`}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="font-black text-gray-900 text-base">{stock.company}</span>
                    <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {stock.ticker}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3 mb-2 text-xs">
                    <div>
                      <span className="text-gray-500 uppercase tracking-wider font-semibold block">
                        Price (Feb 24)
                      </span>
                      <span className="font-black text-gray-900 text-base">{stock.price}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 uppercase tracking-wider font-semibold block">
                        Market Cap
                      </span>
                      <span className="font-bold text-gray-900">{stock.marketCap}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 uppercase tracking-wider font-semibold block">
                        Forward P/E
                      </span>
                      <span className="font-bold text-gray-900">{stock.forwardPE}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{stock.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ServiceNow Deep Dive */}
        <h2>ServiceNow's Revenue and AI Momentum</h2>
        <p>
          ServiceNow reported <strong>$10.2 billion</strong> in subscription revenue for fiscal 2025, up{' '}
          <strong>22% year-over-year</strong>. AI-related features contributed <strong>15%</strong> of new
          bookings in Q4 2025. The company's platform processed over{' '}
          <strong>1.2 billion workflow transactions monthly</strong> in late 2025, providing a large surface
          area for AI agent integration and making Huang's thesis particularly applicable to its
          business model.
        </p>

        {/* Snowflake Deep Dive */}
        <h2>Snowflake's Data Cloud Scale</h2>
        <p>
          Snowflake reported <strong>3.2 billion daily queries</strong> processed in Q3 fiscal 2026, up{' '}
          <strong>28% year-over-year</strong>. The platform's data-sharing and governance capabilities
          position it as a foundational layer for AI workloads requiring structured, governed data -- precisely
          the kind of infrastructure Huang described as essential for effective agentic systems.
        </p>

        {/* Huang's Thesis */}
        <h2>Huang's Thesis: AI Agents as Intelligent Users</h2>
        <p>
          Huang's argument centers on AI agents functioning as advanced users that consume and enhance
          existing software rather than compete as standalone replacements. He noted that effective agentic
          systems depend on:
        </p>
        <ul>
          <li>
            <strong>Structured data repositories</strong> -- the core offering of Snowflake and Oracle
          </li>
          <li>
            <strong>Workflow orchestration engines</strong> -- ServiceNow's primary value proposition
          </li>
          <li>
            <strong>Deep integration with business processes</strong> -- the domain of SAP's ERP platform
          </li>
        </ul>
        <p>
          Under this framework, each AI agent requires a platform layer below it to function reliably at
          enterprise scale. Rather than shrinking the addressable market for these companies, agentic AI
          creates a new category of automated consumer on top of their existing infrastructure.
        </p>

        <HighlightBox type="stat" color="green">
          Four companies. One trillion dollars in combined market cap. ServiceNow: $194B. Oracle: $468B.
          SAP: $291B. Snowflake: $49.8B. Huang's argument is that every AI agent deployed in the enterprise
          is a new user of these platforms -- not a replacement for them.
        </HighlightBox>

        {/* Market Reaction */}
        <h2>Market Reaction After Huang's Remarks</h2>
        <p>
          Following Huang's February 24, 2026 comments, <strong>ServiceNow shares rose 3.1%</strong> in
          pre-market trading on February 25, while <strong>Snowflake gained 2.4%</strong>. The statements
          provided a counterpoint to the prior week's declines in software stocks linked to AI disruption
          fears, and gave institutional investors a framework for reconsidering valuations in enterprise
          software.
        </p>
        <p>
          The reaction was concentrated in workflow and data platform companies -- consistent with Huang's
          framing of those specific categories as the primary beneficiaries of agentic AI adoption in
          enterprise environments.
        </p>

        <blockquote>
          When a trillion-dollar software market gets called illogical to decline, sometimes the rebound
          starts before the next quarterly earnings call.
        </blockquote>

        {/* Timeline */}
        <h2>Timeline: From AI Agent Fears to Huang's Pushback</h2>
        <div className="not-prose">
          <Timeline events={timelineEvents} />
        </div>

        {/* Summary Table */}
        <h2>Key Figures at a Glance</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Metric</th>
                <th className="px-4 py-3 font-semibold">Figure</th>
                <th className="px-4 py-3 font-semibold">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Global Enterprise Software Market (2025)</td>
                <td className="px-4 py-3 font-bold text-green-700 text-xs">$1.02 trillion</td>
                <td className="px-4 py-3 text-gray-600 text-xs">Gartner</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Cloud App Segment (2025)</td>
                <td className="px-4 py-3 font-bold text-blue-700 text-xs">$318 billion</td>
                <td className="px-4 py-3 text-gray-600 text-xs">Gartner</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Enterprise Software + Services (2025)</td>
                <td className="px-4 py-3 font-bold text-blue-700 text-xs">$1.05 trillion</td>
                <td className="px-4 py-3 text-gray-600 text-xs">IDC</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">ServiceNow FY2025 Subscription Revenue</td>
                <td className="px-4 py-3 font-bold text-gray-900 text-xs">$10.2B (+22% YoY)</td>
                <td className="px-4 py-3 text-gray-600 text-xs">ServiceNow Earnings</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">ServiceNow AI New Bookings Share (Q4 2025)</td>
                <td className="px-4 py-3 font-bold text-gray-900 text-xs">15%</td>
                <td className="px-4 py-3 text-gray-600 text-xs">ServiceNow Earnings</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">ServiceNow Monthly Workflow Transactions</td>
                <td className="px-4 py-3 font-bold text-gray-900 text-xs">1.2+ billion</td>
                <td className="px-4 py-3 text-gray-600 text-xs">ServiceNow Investor Relations</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Snowflake Daily Queries (Q3 FY2026)</td>
                <td className="px-4 py-3 font-bold text-gray-900 text-xs">3.2B (+28% YoY)</td>
                <td className="px-4 py-3 text-gray-600 text-xs">Snowflake Earnings</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">ServiceNow Pre-Market Move (Feb 25)</td>
                <td className="px-4 py-3 font-bold text-green-700 text-xs">+3.1%</td>
                <td className="px-4 py-3 text-gray-600 text-xs">Post-Huang Remarks</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Snowflake Pre-Market Move (Feb 25)</td>
                <td className="px-4 py-3 font-bold text-green-700 text-xs">+2.4%</td>
                <td className="px-4 py-3 text-gray-600 text-xs">Post-Huang Remarks</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Related Coverage */}
        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link href="/nvidia" className="text-blue-600 hover:underline font-medium">
              Nvidia -- Coverage hub for Nvidia news, products, and strategy
            </Link>
          </li>
          <li>
            <Link href="/tech" className="text-blue-600 hover:underline font-medium">
              Technology -- AI infrastructure and enterprise software reporting
            </Link>
          </li>
          <li>
            <Link href="/finance" className="text-blue-600 hover:underline font-medium">
              Finance -- Software stock analysis and market coverage
            </Link>
          </li>
          <li>
            <Link href="/open-ai" className="text-blue-600 hover:underline font-medium">
              OpenAI -- Agentic AI development and enterprise deployment coverage
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
