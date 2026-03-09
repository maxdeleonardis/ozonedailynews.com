import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/entertainment/news/paramount-skydance-acquires-warner-bros-discovery-110-billion';
const AUTHOR_NAME = 'Alfanasa';
const AUTHOR_URL = 'https://www.objectwire.org/authors/alfanasa';

export const metadata: Metadata = {
  title: 'Paramount Skydance Agrees to Acquire Warner Bros. Discovery in $110 Billion Deal | ObjectWire',
  description:
    'Paramount Skydance entered into a definitive agreement on February 27, 2026, to acquire Warner Bros. Discovery in an all-cash transaction valued at $110 billion in enterprise value, creating one of the largest media conglomerates in the United States.',
  keywords: [
    'Paramount Skydance Warner Bros Discovery acquisition',
    'Warner Bros Discovery merger 2026',
    '$110 billion media deal',
    'Paramount Skydance acquisition',
    'Warner Bros Discovery $31 per share',
    'media consolidation 2026',
    'Paramount Plus Max streaming merger',
    'Warner Bros Discovery shareholders',
    'Skydance media deal',
    'Hollywood merger 2026',
    'Warner Bros Discovery debt',
    'media conglomerate United States',
    'DC Comics Paramount merger',
    'HBO Max Paramount Plus combined',
    'Warner Bros Discovery stock WBD',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Paramount Skydance Agrees to Acquire Warner Bros. Discovery in $110 Billion Deal',
    description:
      'The all-cash deal at $31 per share represents a 42% premium and would create one of the largest media conglomerates in U.S. history, combining Paramount+, Max, HBO, DC, and major Hollywood franchises.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-02T00:00:00Z',
    modifiedTime: '2026-03-02T00:00:00Z',
    section: 'Entertainment',
    tags: [
      'Paramount Skydance',
      'Warner Bros. Discovery',
      'Media Merger',
      'Entertainment',
      'Streaming',
      'Hollywood',
      'Finance',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paramount Skydance Acquires Warner Bros. Discovery for $110 Billion',
    description:
      '$31/share all-cash deal. 42% premium. $79B in net debt. 210M streaming subscribers combined. The biggest media deal since the AT&T-Time Warner merger.',
  },
};

export default function ParamountSkydanceWBDPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Paramount Skydance Agrees to Acquire Warner Bros. Discovery in $110 Billion Enterprise-Value Deal"
        description="Paramount Skydance entered into a definitive agreement on February 27, 2026, to acquire Warner Bros. Discovery in an all-cash transaction valued at $110 billion in enterprise value, creating one of the largest media conglomerates in the United States."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-03-02T00:00:00Z"
        modifiedTime="2026-03-02T00:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Entertainment"
        keywords={[
          'Paramount Skydance Warner Bros Discovery acquisition',
          'Warner Bros Discovery merger 2026',
          '$110 billion media deal',
          'media consolidation 2026',
          'Paramount Plus Max streaming merger',
          'Warner Bros Discovery stock WBD',
          'DC Comics Paramount merger',
          'Hollywood merger 2026',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Entertainment', item: '/entertainment' },
              { name: 'News', item: '/entertainment/news' },
              { name: 'Paramount Skydance Acquires Warner Bros. Discovery', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Paramount Skydance Agrees to Acquire Warner Bros. Discovery in $110 Billion Enterprise-Value Deal"
        subtitle="The all-cash acquisition at $31 per share — a 42% premium — would merge two of Hollywood's most iconic studios, combine Paramount+ and Max into the world's second-largest streaming platform, and saddle the new entity with $79 billion in net debt."
        category="Entertainment"
        categoryColor="purple"
        topicTag="entertainment"
        publishDate="March 2, 2026"
        readTime="6 min read"
        breaking={false}
        trending
        author={{
          name: AUTHOR_NAME,
          role: 'Entertainment Reporter',
          authorSlug: 'alfanasa',
        }}
        thumbnail={{
          src: '/entertainment/warnerbros deal paramount.PNG',
          alt: 'Paramount Skydance and Warner Bros. Discovery merger deal',
        }}
        tags={[
          'Paramount Skydance',
          'Warner Bros. Discovery',
          'Media Merger',
          'Streaming',
          'Hollywood',
          'Finance',
          'HBO',
          'DC Comics',
          'Paramount+',
          'Max',
        ]}
      >
        {/* Lede */}
        <p>
          <strong>Paramount Skydance</strong> entered into a definitive agreement on{' '}
          <strong>February 27, 2026</strong>, to acquire{' '}
          <Link href="/entertainment/hbomax" className="text-purple-600 font-medium hover:underline">
            Warner Bros. Discovery
          </Link>{' '}
          in an all-cash transaction valued at <strong>$110 billion in enterprise value</strong>, creating
          one of the largest media conglomerates in the United States. The deal values Warner Bros. Discovery
          equity at <strong>$81 billion</strong>, with Paramount paying <strong>$31 per share</strong> in
          cash for all outstanding shares.
        </p>
        <p>
          The agreement follows Netflix&apos;s withdrawal from a competing bid earlier in February 2026.
          Post-closing, the combined entity will operate under the <strong>Paramount Skydance</strong> name
          and maintain dual headquarters in New York and Los Angeles.
        </p>

        <HighlightBox type="key-point" color="purple">
          <strong>Deal at a Glance:</strong> $110B enterprise value &bull; $31/share all-cash &bull;
          42% premium to Feb. 26, 2026 close &bull; $79B net debt at closing &bull; 210M combined
          global streaming subscribers &bull; Expected close mid-2026.
        </HighlightBox>

        {/* Deal Structure */}
        <h2>Deal Structure and Valuation Metrics</h2>
        <p>
          The transaction is structured as an all-cash acquisition at{' '}
          <strong>$31 per share</strong>, representing a{' '}
          <strong>42% premium</strong> to Warner Bros. Discovery&apos;s closing price on
          February 26, 2026. The $110 billion enterprise value breaks down as follows:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="text-left px-5 py-3 font-semibold">Component</th>
                <th className="text-right px-5 py-3 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Equity Value', value: '$81 billion' },
                { label: 'Assumed Net Debt (WBD, as of Dec. 31, 2025)', value: '$38.7 billion' },
                { label: 'Total WBD Debt (Dec. 31, 2025)', value: '$41.5 billion' },
                { label: 'WBD Cash (Dec. 31, 2025)', value: '$2.8 billion' },
                { label: 'Additional Transaction Costs & Financing', value: 'Remaining balance' },
                { label: 'Enterprise Value (Total)', value: '$110 billion' },
              ].map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-purple-50'}
                >
                  <td className="px-5 py-3 text-gray-800">{row.label}</td>
                  <td className="px-5 py-3 text-right font-semibold text-gray-900">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          The combined company is projected to generate <strong>$54 billion in annual revenue</strong> based
          on 2025 pro-forma figures from both entities.
        </p>

        {/* Debt Load */}
        <h2>Debt Load and Financing Plan</h2>
        <p>
          The merged entity will carry approximately <strong>$79 billion in net debt</strong> upon closing.
          Paramount Skydance plans to finance the acquisition through a three-part structure:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          {[
            {
              label: 'New Debt Issuance',
              amount: '$40B',
              color: 'border-red-400 bg-red-50',
              textColor: 'text-red-700',
            },
            {
              label: 'Equity Contribution',
              amount: '$25B',
              color: 'border-blue-400 bg-blue-50',
              textColor: 'text-blue-700',
              note: 'From existing Paramount shareholders & Skydance stakeholders',
            },
            {
              label: 'Cash on Hand & Asset Sales',
              amount: '$16B',
              color: 'border-green-400 bg-green-50',
              textColor: 'text-green-700',
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`border-2 rounded-xl p-5 ${item.color}`}
            >
              <div className={`text-3xl font-black mb-1 ${item.textColor}`}>{item.amount}</div>
              <div className="font-semibold text-gray-800 text-sm">{item.label}</div>
              {item.note && <div className="text-xs text-gray-500 mt-1">{item.note}</div>}
            </div>
          ))}
        </div>

        <p>
          Post-closing leverage is expected to reach <strong>4.8x net debt to adjusted EBITDA</strong>,
          with management projecting deleveraging to <strong>3.5x within 24 months</strong> through free
          cash flow generation and non-core asset divestitures.
        </p>
        <p>
          Warner Bros. Discovery carried <strong>$41.5 billion in total debt</strong> and{' '}
          <strong>$2.8 billion in cash</strong> at the end of 2025, with an existing net leverage ratio
          of <strong>4.1x adjusted EBITDA</strong>.
        </p>

        <HighlightBox type="stat" color="orange">
          <strong>Leverage Risk:</strong> The post-closing debt load of ~$79 billion places the combined
          entity among the most leveraged media companies in the world. Projected deleveraging assumes
          consistent free cash flow generation and successful asset sales — both subject to market conditions
          and regulatory constraints.
        </HighlightBox>

        {/* Synergies */}
        <h2>Strategic Rationale and Expected Synergies</h2>
        <p>
          Paramount Skydance projects <strong>$2.8 billion in annual run-rate cost synergies</strong>{' '}
          within three years of closing, primarily from:
        </p>
        <ul>
          <li>Elimination of duplicative overhead across both organizations</li>
          <li>Consolidated content licensing and global distribution networks</li>
          <li>Combined advertising sales operations</li>
          <li>Shared technology infrastructure across streaming platforms</li>
        </ul>

        <p>
          The combined entity will control approximately <strong>30% of U.S. domestic theatrical
          box-office market share</strong> based on 2025 data, owning major franchises including{' '}
          <em>Star Trek</em>, <em>Mission: Impossible</em>, <em>Top Gun</em>, DC Comics properties,
          and HBO&apos;s premium content libraries.
        </p>

        <div className="bg-gray-900 text-white rounded-xl p-6 my-6">
          <h3 className="text-lg font-bold mb-4 text-purple-300">Combined Streaming Footprint</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Combined Subscribers', value: '~210M', sub: 'Paramount+ & Max global (Q4 2025)' },
              { label: 'U.S. Box Office Share', value: '~30%', sub: '2025 domestic theatrical' },
              { label: 'Annual Revenue', value: '$54B', sub: 'Pro-forma 2025' },
              { label: 'Cost Synergies', value: '$2.8B', sub: 'Run-rate within 3 years' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-black text-purple-300 mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-white">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <p>
          The transaction will also create the <strong>second-largest U.S. streaming subscriber
          base behind Netflix</strong>, with Paramount+ and Max combining for approximately{' '}
          <strong>210 million global subscribers</strong> as of Q4 2025.
        </p>

        {/* Regulatory */}
        <h2>Regulatory and Shareholder Approval Path</h2>
        <p>
          The deal requires approval from antitrust regulators in the United States and several
          international jurisdictions, as well as a <strong>majority vote of Warner Bros. Discovery
          shareholders</strong>. The companies expect regulatory clearance by{' '}
          <strong>mid-2026</strong>, with a shareholder vote planned for{' '}
          <strong>April or May 2026</strong>.
        </p>
        <p>
          No breakup fee was disclosed in the initial announcement, though standard provisions are
          expected in the definitive merger agreement.
        </p>

        <div className="border border-gray-200 rounded-xl overflow-hidden my-6">
          <div className="bg-gray-800 text-white px-5 py-3 font-semibold text-sm">
            Approval Timeline
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { date: 'Feb. 27, 2026', event: 'Definitive agreement announced', status: '✅ Complete' },
              { date: 'Apr–May 2026', event: 'Warner Bros. Discovery shareholder vote', status: '⏳ Pending' },
              { date: 'Mid-2026', event: 'Expected U.S. antitrust clearance', status: '⏳ Pending' },
              { date: 'Mid-2026', event: 'International regulatory approvals', status: '⏳ Pending' },
              { date: 'TBD', event: 'Deal close — combined entity begins operating', status: '⏳ Pending' },
            ].map((row) => (
              <div key={row.date} className="flex items-center gap-4 px-5 py-3 text-sm">
                <div className="w-28 font-semibold text-gray-600 shrink-0">{row.date}</div>
                <div className="flex-1 text-gray-800">{row.event}</div>
                <div className="text-gray-500 shrink-0">{row.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Reaction */}
        <h2>Market Reaction on February 27, 2026</h2>
        <p>
          Warner Bros. Discovery shares rose <strong>18.4%</strong> to close at{' '}
          <strong>$29.80</strong> on February 27, 2026, approaching but not yet reaching the{' '}
          <strong>$31 offer price</strong> — a gap that typically reflects residual deal-close risk
          in the minds of arbitrageurs.
        </p>

        <HighlightBox type="quote" color="purple">
          &ldquo;When a $79 billion debt pile meets a $110 billion enterprise value in Hollywood,
          the only thing bigger than the balance sheet might be the number of lawyers reviewing
          it.&rdquo;
        </HighlightBox>

      </NewsArticle>
    </SEOWrapper>
  );
}
