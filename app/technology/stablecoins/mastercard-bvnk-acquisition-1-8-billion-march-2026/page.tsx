import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/technology/stablecoins/mastercard-bvnk-acquisition-1-8-billion-march-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const AUTHOR_NAME = 'Conan Boyle';
const AUTHOR_SLUG = 'conan-boyle';

export const metadata: Metadata = {
  title: "Mastercard to Acquire BVNK for $1.8 Billion in Largest Digital Asset Bet Yet | ObjectWire",
  description:
    "Mastercard announced a definitive agreement to acquire London-based stablecoin infrastructure provider BVNK for up to $1.8 billion on March 17, 2026, including $300 million in earnouts. The deal closes by year-end 2026 and follows the collapse of a $2 billion Coinbase bid in late 2025.",
  keywords: [
    'Mastercard acquires BVNK $1.8 billion 2026',
    'BVNK stablecoin infrastructure acquisition',
    'Mastercard BVNK deal March 2026',
    'BVNK $750 million Series B valuation',
    'Coinbase BVNK acquisition failed November 2025',
    'Jorn Lambert Mastercard digital assets',
    'stablecoin payments infrastructure acquisition',
    'Mastercard blockchain settlement 2026',
    'BVNK on-chain fiat bridge',
    'Mastercard $1.8 billion crypto fintech deal',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "Mastercard to Acquire Stablecoin Infrastructure Firm BVNK for Up to $1.8 Billion",
    description:
      "Mastercard will pay up to $1.8 billion for BVNK, a London-based stablecoin rails provider — more than doubling its last valuation of $750 million. The move comes months after a rival Coinbase bid fell apart at $2 billion.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-18T10:00:00Z',
    modifiedTime: '2026-03-18T10:00:00Z',
    section: 'Finance',
    tags: [
      'Mastercard', 'BVNK', 'Stablecoins', 'Acquisition', 'Finance',
      'Crypto', 'Payments', 'Digital Assets', 'Fintech', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mastercard to Buy BVNK for $1.8 Billion in Stablecoin Infrastructure Push | ObjectWire",
    description:
      "Mastercard outmaneuvered Coinbase for BVNK — a stablecoin 'plumbing' provider that processed trillions in on-chain volume. Deal includes $300M in earnouts tied to stablecoin transaction growth.",
  },
  other: {
    news_keywords:
      'Mastercard BVNK acquisition, stablecoin infrastructure, BVNK $1.8 billion, Mastercard digital assets 2026',
  },
};

// =============================================================================
// PAGE
// =============================================================================

export default function MastercardBVNKPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Mastercard to Acquire BVNK for $1.8 Billion in Largest Digital Asset Bet Yet"
        description="Mastercard announced a definitive agreement to acquire London-based stablecoin infrastructure provider BVNK for up to $1.8 billion on March 17, 2026, including $300 million in earnouts tied to performance milestones."
        author={AUTHOR_NAME}
        publishedTime="2026-03-18T10:00:00Z"
        modifiedTime="2026-03-18T10:00:00Z"
        imageUrl="https://www.objectwire.org/images/mastercard-bvnk-og.jpg"
        articleUrl={FULL_URL}
        section="Finance"
        keywords={[
          'Mastercard BVNK acquisition $1.8 billion',
          'stablecoin infrastructure payments 2026',
          'Coinbase BVNK failed bid November 2025',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Technology', item: '/technology' },
              { name: 'Stablecoins', item: '/technology/stablecoins' },
              { name: 'Mastercard Acquires BVNK', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Mastercard to Acquire BVNK for $1.8 Billion in Massive Stablecoin Bet"
        subtitle="The $1.8B deal — including $300M in performance earnouts — marks the largest move into digital assets by a traditional payment network, and follows the collapse of a rival Coinbase bid."
        category="Finance"
        categoryColor="blue"
        topicTag="finance"
        publishDate="March 18, 2026"
        readTime="4 min read"
        author={{
          name: AUTHOR_NAME,
          role: 'Finance Reporter',
          authorSlug: AUTHOR_SLUG,
        }}
        tags={[
          'Mastercard', 'BVNK', 'Stablecoins', 'Acquisition',
          'Finance', 'Crypto', 'Payments', 'Digital Assets', 'Fintech',
        ]}
        breaking
        slug={SLUG}
        url={SLUG}
      >

        {/* Lede */}
        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
          <strong>PURCHASE, NY</strong> — Mastercard announced a definitive agreement on{' '}
          <strong>Tuesday, March 17, 2026</strong>, to acquire London-based stablecoin
          infrastructure provider{' '}
          <strong>BVNK</strong> in a deal valued at up to{' '}
          <strong>$1.8 billion</strong>. The acquisition — the company&apos;s largest move into
          digital assets to date — is expected to close by{' '}
          <strong>December 31, 2026</strong>, pending customary regulatory reviews.
        </p>

        {/* Stat highlight */}
        <HighlightBox type="stat" color="blue">
          <strong>$1.8B</strong> total consideration — including <strong>$300M</strong> in
          contingent earnouts tied to stablecoin transaction volume milestones. BVNK&apos;s
          last private valuation: <strong>~$750M</strong> (Series B, late 2024).
        </HighlightBox>

        {/* Deal structure */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Deal Structure: Base Price Plus Performance Earnouts
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The $1.8 billion figure represents a more-than-2× premium over BVNK&apos;s{' '}
          Series B valuation of roughly $750 million from late 2024. The structure includes
          a base acquisition price plus up to $300 million in earnout payments contingent on
          BVNK hitting specific performance milestones — primarily stablecoin transaction
          volume growth post-close.
        </p>

        {/* Deal table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 text-left font-semibold">Term</th>
                <th className="px-4 py-3 text-left font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Acquirer', 'Mastercard Incorporated (NYSE: MA)'],
                ['Target', 'BVNK Ltd. — London, United Kingdom'],
                ['Total Consideration', 'Up to $1.8 billion'],
                ['Base Acquisition Price', '~$1.5 billion (implied)'],
                ['Contingent Earnout', '$300 million, tied to stablecoin volume milestones'],
                ['BVNK Last Valuation', '~$750 million (Series B, late 2024)'],
                ['Premium Over Series B', '>2.4×'],
                ['Expected Close', 'By December 31, 2026'],
                ['Condition', 'Customary regulatory reviews'],
              ].map(([term, detail]) => (
                <tr key={term} className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{term}</td>
                  <td className="px-4 py-3 text-gray-700">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coinbase context */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The Coinbase Context: Mastercard Wins a Contested Asset
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The deal&apos;s significance is sharpened by what didn&apos;t happen six months ago.
          Coinbase was in advanced talks to acquire BVNK for approximately{' '}
          <strong>$2 billion</strong> in November 2025, according to people familiar with the
          matter. Those discussions collapsed without a deal. Mastercard has now secured the
          same asset at a slightly lower headline figure — but with earnout upside — and in
          doing so has outmaneuvered a leading crypto-native rival for a critical piece of the
          emerging{' '}
          <Link href="/technology/stablecoins" className="text-blue-600 hover:underline font-medium">
            global stablecoin payments stack
          </Link>.
        </p>

        <HighlightBox type="key-point" color="purple">
          <strong>Competitive context:</strong> Coinbase reportedly bid ~$2 billion for BVNK
          in November 2025. That deal collapsed. Mastercard stepped in at a slightly lower
          total — with earnout structure — and closed within weeks.
        </HighlightBox>

        {/* Why BVNK */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why BVNK? The Infrastructure Layer Mastercard Couldn&apos;t Build Fast Enough
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Mastercard Chief Product Officer <strong>Jorn Lambert</strong> was direct about the
          build-vs-buy calculus: constructing equivalent capabilities internally would have
          taken &quot;quite a bit of time.&quot; BVNK provides what the industry calls the{' '}
          &quot;plumbing&quot; layer — the technical infrastructure that makes blockchain-based
          settlement invisible and instant for end users and enterprise clients moving value
          across borders.
        </p>

        {/* CPO quote */}
        <figure className="border-l-4 border-blue-500 pl-6 my-8 bg-blue-50 py-4 pr-4 rounded-r-lg">
          <blockquote className="text-lg italic text-gray-800 leading-relaxed">
            &quot;Building these capabilities internally would have taken quite a bit of time.&quot;
          </blockquote>
          <figcaption className="mt-3 text-sm font-semibold text-gray-600">
            — Jorn Lambert, Chief Product Officer, Mastercard
          </figcaption>
        </figure>

        <p className="text-gray-700 leading-relaxed mb-6">
          BVNK&apos;s core product is a multi-currency accounts and payments platform that
          allows businesses to send, receive, and convert between stablecoins and fiat
          currencies in real time. Clients include payroll processors, exchanges, and
          cross-border payment platforms that need settlement finality faster and cheaper
          than the traditional correspondent banking system can provide.
        </p>

        {/* What BVNK does: 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {[
            {
              icon: '🔗',
              label: 'On-Chain Rails',
              body: 'Bridges fiat and stablecoin settlement, enabling instant cross-border payments without traditional correspondent banks.',
            },
            {
              icon: '💱',
              label: 'Multi-Currency Accounts',
              body: 'Real-time conversion between USDC, USDT, and fiat currencies for enterprise clients, payroll processors, and payment platforms.',
            },
            {
              icon: '🌍',
              label: 'Global Reach',
              body: 'Operations spanning major corridors including Europe, Latin America, and Southeast Asia — markets Mastercard is targeting for stablecoin growth.',
            },
          ].map(({ icon, label, body }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Broader context */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Mastercard Bets Big on the Stablecoin Decade
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The BVNK acquisition lands inside a rapidly shifting environment for stablecoin
          adoption. Stablecoin transaction volume hit{' '}
          <strong>$27.6 trillion</strong> in 2025 — surpassing Visa and Mastercard&apos;s
          combined volume — according to data from The Block. The U.S. GENIUS Act, advancing
          through Congress in early 2026, would create a federal regulatory framework for
          stablecoin issuers, potentially opening significant institutional flows.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Visa and PayPal have both moved aggressively into stablecoin rails over the past
          eighteen months. Mastercard&apos;s BVNK acquisition represents an attempt to skip
          years of organic infrastructure development and land at the center of the emerging
          on-chain payment stack — before the market consolidates around a smaller number of
          infrastructure providers.
        </p>

        <HighlightBox type="key-point" color="green">
          <strong>Regulatory tailwind:</strong> The U.S. GENIUS Act, advancing in Congress
          in early 2026, would establish a federal licensing framework for stablecoin issuers —
          broadly expected to accelerate institutional stablecoin adoption and generate
          significant volume for infrastructure providers like BVNK.
        </HighlightBox>

        {/* Related */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Related Coverage
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/technology/stablecoins"
                className="text-blue-600 hover:underline font-medium"
              >
                Druckenmiller: Stablecoins Will Be the Backbone of Global Payments Within 15 Years
              </Link>
            </li>
            <li>
              <Link
                href="/finance"
                className="text-blue-600 hover:underline font-medium"
              >
                ObjectWire Finance Coverage
              </Link>
            </li>
          </ul>
        </div>

      </NewsArticle>
    </SEOWrapper>
  );
}
