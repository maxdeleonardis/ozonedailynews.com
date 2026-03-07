import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/tech/real-estate';
const AUTHOR_NAME = 'Jack Want';
const PUBLISH_ISO = '2026-03-06T15:00:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Pending Home Sales Hit Historic Floor as 2026 Opens — PHSI Drops to 70.9 | ObjectWire',
  description:
    'The Pending Home Sales Index plunged to 70.9 in January 2026, the lowest reading in the index\'s 25-year history, falling below the 2008 financial crisis trough as the locked-in effect freezes the US housing market.',
  keywords: [
    'pending home sales index January 2026',
    'PHSI 70.9 record low',
    'housing market 2026 frozen',
    'NAR pending home sales',
    'mortgage rate lock-in effect 2026',
    'home sales historic low 2026',
    'Lawrence Yun NAR housing',
    'US housing market crisis 2026',
    'pending home sales regional breakdown',
    'housing affordability 2026',
    'mortgage rates 6 percent 2026',
    'real estate market freeze',
    'home sales below 2008 levels',
    'housing inventory shortage 2026',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Pending Home Sales Hit Historic Floor — PHSI Drops to 70.9 in January 2026',
    description:
      'The lowest reading in 25 years of tracking. Below the 2008 crisis trough. Down 43% from the 2021 peak. The US housing market is frozen despite improving mortgage rates.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Technology',
    tags: ['Real Estate', 'Housing Market', 'Pending Home Sales', 'NAR', 'Mortgage Rates', 'Economy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pending Home Sales Hit 25-Year Low — PHSI 70.9 in January 2026',
    description:
      'Below the 2008 crisis. Down 43% from 2021 peak. NAR says 5.5M more households qualify for loans but aren\'t buying. The lock-in effect is real.',
  },
};

// ─── Regional data ────────────────────────────────────────────────────────────
const regionalData = [
  { region: 'Northeast', mom: '−6.1%', yoy: '−5.9%', trend: 'Worst hit — winter weather + extreme supply shortage', color: 'bg-red-500' },
  { region: 'Midwest', mom: '−1.8%', yoy: '−2.4%', trend: 'Steady decline, low inventory in metro areas', color: 'bg-orange-500' },
  { region: 'South', mom: '+0.1%', yoy: '+0.8%', trend: 'Flat — population growth offset by affordability wall', color: 'bg-yellow-500' },
  { region: 'West', mom: '+4.1%', yoy: '+5.6%', trend: 'Only bright spot — price corrections attracting buyers', color: 'bg-green-500' },
];

// ─── Historical comparison ───────────────────────────────────────────────────
const historicalComparison = [
  { period: 'Oct 2021 (Post-Pandemic Peak)', phsi: '124.5', context: 'Ultra-low rates + FOMO buying frenzy' },
  { period: 'Jan 2020 (Pre-COVID)', phsi: '111.4', context: 'Stable market, rates ~3.5%' },
  { period: 'Jan 2009 (Financial Crisis Trough)', phsi: '~80', context: 'Credit freeze, foreclosure wave' },
  { period: 'Jan 2026 (Current)', phsi: '70.9', context: 'Lock-in effect + prices still elevated' },
];

export default function PendingHomeSalesPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Pending Home Sales Hit Historic Floor as 2026 Opens — PHSI Drops to 70.9"
        description="The Pending Home Sales Index plunged to 70.9 in January 2026, the lowest reading in the index's 25-year history, falling below the 2008 financial crisis trough."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/team"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Technology"
        keywords={[
          'pending home sales', 'PHSI', 'housing market', 'NAR',
          'mortgage rates', 'real estate', 'lock-in effect', 'housing crisis 2026',
        ]}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Tech', item: '/tech' },
              { name: 'Pending Home Sales Hit Historic Floor', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Pending Home Sales Hit Historic Floor as 2026 Opens"
        subtitle="The Pending Home Sales Index plunged to 70.9 in January — the lowest level in the index's 25-year history, falling below the depths of the 2008 financial crisis as the locked-in effect and elevated prices freeze the American housing market."
        category="ECONOMY"
        categoryColor="orange"
        topicTag="finance"
        publishDate="March 6, 2026"
        readTime="5 min read"
        breaking
        author={{
          name: AUTHOR_NAME,
          role: 'Business & Economy',
        }}
        tags={[
          'Real Estate',
          'Housing Market',
          'Pending Home Sales',
          'NAR',
          'Mortgage Rates',
          'Economy',
          'Affordability',
          'Lock-In Effect',
        ]}
        slug="real-estate"
        url={SLUG}
      >
        {/* ── THE LEAD ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The Lead: A New Record Low
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The American housing market has entered uncharted territory. On <strong>February 19, 2026</strong>, the National Association of Realtors (NAR) released a staggering update: the Pending Home Sales Index (PHSI) plunged to <strong>70.9 in January</strong> — the lowest level since the index began tracking data a quarter-century ago.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Despite a slight dip in mortgage rates from their 2025 peaks, the &quot;locked-in&quot; effect and high price tags have created a frozen market where even the most motivated buyers are finding themselves on the sidelines.
          </p>

          <HighlightBox type="stat" color="orange">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-400">70.9</div>
                <div className="text-sm text-gray-300">PHSI Reading</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">25-Yr</div>
                <div className="text-sm text-gray-300">Record Low</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">−43%</div>
                <div className="text-sm text-gray-300">From 2021 Peak</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">−0.8%</div>
                <div className="text-sm text-gray-300">Month-over-Month</div>
              </div>
            </div>
          </HighlightBox>
        </section>

        {/* ── HISTORICAL CONTEXT ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Below the 2008 Crisis — In Context
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The January reading of 70.9 is not just a &quot;down&quot; month — it is a significant breach of the historical floor. This level is lower than the depths of the <strong>2008–2009 Global Financial Crisis</strong>, which troughed around 80, and represents a <strong>43% drop</strong> from the post-pandemic high of 124.5 in October 2021.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Period</th>
                  <th className="px-4 py-3 text-left font-semibold">PHSI</th>
                  <th className="px-4 py-3 text-left font-semibold">Context</th>
                </tr>
              </thead>
              <tbody>
                {historicalComparison.map((row, i) => (
                  <tr key={row.period} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.period}</td>
                    <td className={`px-4 py-3 font-bold ${row.phsi === '70.9' ? 'text-red-600' : 'text-gray-700'}`}>{row.phsi}</td>
                    <td className="px-4 py-3 text-gray-600">{row.context}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Month-over-Month:</strong> The index fell 0.8% from a revised December reading of 71.5. <strong>Year-over-Year:</strong> Activity is down 0.4% compared to January 2025, confirming that the freeze is not seasonal — it is structural.
          </p>
        </section>

        {/* ── REGIONAL BREAKDOWN ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Regional Breakdown: A Tale of Two Coasts
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The national headline masks a stark geographic divide. Winter weather and extreme supply shortages hammered the East, while the West showed a surprising flicker of life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {regionalData.map((region) => (
              <div key={region.region} className="bg-gray-900 rounded-xl border border-gray-700 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${region.color}`} />
                  <h3 className="text-lg font-bold text-white">{region.region}</h3>
                </div>
                <div className="flex gap-4 mb-2">
                  <span className="text-sm text-gray-400">MoM: <span className={region.mom.startsWith('+') ? 'text-green-400' : 'text-red-400'}>{region.mom}</span></span>
                  <span className="text-sm text-gray-400">YoY: <span className={region.yoy.startsWith('+') ? 'text-green-400' : 'text-red-400'}>{region.yoy}</span></span>
                </div>
                <p className="text-gray-300 text-sm">{region.trend}</p>
              </div>
            ))}
          </div>

          <HighlightBox type="key-point" color="blue">
            <strong>The West stands alone:</strong> The West region posted a +4.1% month-over-month gain and +5.6% year-over-year, driven by price corrections in markets like Phoenix, Denver, and parts of the Bay Area that are finally pulling buyers off the sidelines.
          </HighlightBox>
        </section>

        {/* ── WHY THE RATE DROP ISN'T WORKING ──────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why the &quot;Rate Drop&quot; Isn&apos;t Working Yet
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NAR Chief Economist <strong>Lawrence Yun</strong> pointed out a frustrating paradox: affordability is technically improving, but sales are not following.
          </p>

          <div className="space-y-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-5">
              <h3 className="text-green-400 font-bold mb-2">Qualified vs. Active</h3>
              <p className="text-gray-300 text-sm">As mortgage rates neared <strong>6.0%</strong> in early February, an additional <strong>5.5 million households</strong> became &quot;technically&quot; qualified for a loan compared to 2025. But qualification does not equal purchase intent.</p>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-700 p-5">
              <h3 className="text-orange-400 font-bold mb-2">The Lock-In Effect</h3>
              <p className="text-gray-300 text-sm">Roughly <strong>60% of existing homeowners</strong> hold mortgages below 4%. Selling means trading a 3.2% rate for a 6.0% rate on a more expensive home — an effective monthly payment increase of 40–60%. Most are choosing to stay put.</p>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-700 p-5">
              <h3 className="text-red-400 font-bold mb-2">Prices Aren&apos;t Falling Enough</h3>
              <p className="text-gray-300 text-sm">National median home prices remain elevated at <strong>~$396,000</strong>. Even with lower rates, the monthly payment on a median-priced home is still <strong>$700+ higher</strong> than it was in 2021 at equivalent rates.</p>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-700 p-5">
              <h3 className="text-purple-400 font-bold mb-2">Inventory Starvation</h3>
              <p className="text-gray-300 text-sm">Active listings remain <strong>30% below pre-pandemic norms</strong> in most metro areas. Even willing buyers face bidding wars on the limited homes that do come to market.</p>
            </div>
          </div>

          <HighlightBox type="quote" color="purple">
            &quot;We have more qualified buyers today than at any point in 2025. The problem is not demand — it is that the existing homeowners who would create supply by selling are mathematically locked into their current mortgages.&quot;
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Lawrence Yun, NAR Chief Economist</span>
          </HighlightBox>
        </section>

        {/* ── WHAT BREAKS THE FREEZE ───────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What Could Break the Freeze?
          </h2>
          <ul className="space-y-3 my-4">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>Rates below 5.5%:</strong> Most models suggest meaningful lock-in release begins when rates drop to the low-5% range, narrowing the gap with existing mortgages.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>Life events:</strong> Divorces, job relocations, deaths, and growing families will continue to force sales regardless of rate differential — but at a slower trickle.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>New construction:</strong> Builders are the only source of net-new supply. Starts have increased modestly, but permitting backlogs and labor shortages limit the pace.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>Policy intervention:</strong> Proposals ranging from portable mortgage rates to first-time buyer tax credits are circulating in Congress, but none have advanced to a vote.</span>
            </li>
          </ul>
        </section>

        {/* ── SOURCES ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Sources &amp; Methodology
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This report is based on the National Association of Realtors&apos; Pending Home Sales Index release dated February 19, 2026, supplemented by historical PHSI data, Freddie Mac Primary Mortgage Market Survey rates, and regional MLS inventory data. ObjectWire verified month-over-month and year-over-year calculations against NAR&apos;s published tables.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/finance" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Finance</span>
              <h3 className="font-semibold text-gray-900 mt-1">Finance Hub</h3>
              <p className="text-sm text-gray-600 mt-1">Banking, Fed policy, interest rates, and economic data coverage.</p>
            </Link>
            <Link href="/bank-of-america" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-blue-600 uppercase">Banking</span>
              <h3 className="font-semibold text-gray-900 mt-1">Bank of America Coverage</h3>
              <p className="text-sm text-gray-600 mt-1">Mortgage lending, earnings, and consumer credit data from the nation&apos;s largest lender.</p>
            </Link>
            <Link href="/tech" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Tech</span>
              <h3 className="font-semibold text-gray-900 mt-1">Technology Hub</h3>
              <p className="text-sm text-gray-600 mt-1">Breaking technology news, proptech, and fintech coverage.</p>
            </Link>
            <Link href="/crypto/news/florida-hb175-stablecoin-law-payment-regulation" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-blue-600 uppercase">Finance</span>
              <h3 className="font-semibold text-gray-900 mt-1">Florida Passes First US Stablecoin Law</h3>
              <p className="text-sm text-gray-600 mt-1">HB 175 creates the first state-level stablecoin rulebook with a live government payment pilot.</p>
            </Link>
          </div>
        </section>
      </NewsArticle>
    </SEOWrapper>
  );
}
