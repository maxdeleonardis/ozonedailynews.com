import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/technology/stablecoins/paypal-pyusd-70-markets-global-expansion-march-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "PayPal Expands PYUSD Stablecoin to 70 Markets Worldwide | ObjectWire",
  description:
    "PayPal announced on March 18, 2026, that its dollar-backed stablecoin PayPal USD (PYUSD) is now available in 70 markets across Asia-Pacific, Europe, Latin America, and North America — a major expansion from its previous U.S. and U.K. availability.",
  keywords: [
    'PayPal PYUSD 70 markets global expansion 2026',
    'PayPal USD stablecoin international rollout March 2026',
    'PYUSD Asia-Pacific Europe Latin America 2026',
    'PayPal stablecoin Colombia Singapore Panama 2026',
    'PYUSD global availability dollar-backed stablecoin',
    'PayPal digital currency expansion 2026',
    'PayPal USD stablecoin new countries March 2026',
    'stablecoin payments global 2026',
    'PYUSD vs USDC USDT global reach',
    'PayPal cross-border payments stablecoin 2026',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "PayPal Expands PYUSD Stablecoin to 70 Markets Worldwide",
    description:
      "PayPal USD now available in 70 markets across four continents after launching exclusively in the U.S. and U.K. New regions include Colombia, Singapore, Panama, Costa Rica, and dozens more — with remaining markets expected in weeks.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T14:00:00Z',
    modifiedTime: '2026-03-18T14:00:00Z',
    section: 'Finance',
    tags: [
      'PayPal', 'PYUSD', 'Stablecoins', 'Crypto', 'Finance',
      'Payments', 'Digital Currency', 'Global', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "PayPal's PYUSD Stablecoin Goes Global — 70 Markets Across 4 Continents | ObjectWire",
    description:
      "PayPal USD just expanded from 2 countries to 70 markets. Colombia, Singapore, Panama, Guatemala, Peru and dozens more now have access to the dollar-backed stablecoin.",
  },
  other: {
    news_keywords:
      'PayPal PYUSD 70 markets, PayPal USD global expansion, stablecoin international rollout March 2026',
  },
};

// =============================================================================
// PAGE
// =============================================================================

export default function PayPalPYUSDExpansionPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="PayPal Expands PYUSD Stablecoin to 70 Markets Worldwide"
        description="PayPal announced on March 18, 2026 that its dollar-backed stablecoin PayPal USD is now available in 70 markets across Asia-Pacific, Europe, Latin America, and North America."
        author="ObjectWire Finance Desk"
        publishedTime="2026-03-18T14:00:00Z"
        modifiedTime="2026-03-18T14:00:00Z"
        imageUrl="https://www.objectwire.org/images/paypal-pyusd-global-og.jpg"
        articleUrl={FULL_URL}
        section="Finance"
        keywords={[
          'PayPal PYUSD 70 markets global expansion',
          'PayPal USD stablecoin March 2026',
          'PYUSD Asia-Pacific Latin America Europe rollout',
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
              { name: 'PayPal PYUSD 70 Markets', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="PayPal Expands PYUSD Stablecoin to 70 Markets Worldwide"
        subtitle="The dollar-backed PayPal USD is now available across Asia-Pacific, Europe, Latin America, and North America — opening to millions of new users after launching exclusively in the U.S. and U.K."
        category="Finance"
        categoryColor="blue"
        topicTag="finance"
        publishDate="March 18, 2026"
        readTime="3 min read"
        author={{
          name: 'ObjectWire Finance Desk',
          role: 'Finance Reporter',
        }}
        tags={[
          'PayPal', 'PYUSD', 'Stablecoins', 'Crypto', 'Finance',
          'Payments', 'Digital Currency', 'Global', 'Technology',
        ]}
        slug={SLUG}
        url={SLUG}
      >

        {/* Lede */}
        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
          PayPal announced on <strong>Tuesday, March 18, 2026</strong>, that its
          dollar-backed stablecoin <strong>PayPal USD (PYUSD)</strong> is now available
          in <strong>70 markets globally</strong> — a sweeping expansion from its previous
          availability in just the United States and United Kingdom, opening the digital
          currency to millions of new users across four continents.
        </p>

        <HighlightBox type="stat" color="blue">
          <strong>70 markets</strong> now live across Asia-Pacific, Europe, Latin America,
          and North America. Users in remaining markets are expected to gain access{' '}
          <strong>within weeks</strong>.
        </HighlightBox>

        {/* Rollout detail */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Where PYUSD Is Now Available
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The rollout spans countries across four regions. PayPal confirmed availability
          in the following markets as part of the initial wave:
        </p>

        {/* Region grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            {
              region: 'Latin America',
              flag: '🌎',
              countries: ['Colombia', 'Costa Rica', 'Dominican Republic', 'Guatemala', 'Honduras', 'Panama', 'Peru'],
            },
            {
              region: 'Asia-Pacific',
              flag: '🌏',
              countries: ['Singapore', '+ additional APAC markets'],
            },
            {
              region: 'Europe',
              flag: '🌍',
              countries: ['Existing UK market extended', '+ European expansion markets'],
            },
            {
              region: 'North America',
              flag: '🌐',
              countries: ['United States (existing)', 'Canada', '+ additional markets'],
            },
          ].map(({ region, flag, countries }) => (
            <div key={region} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{flag}</span>
                <h3 className="font-bold text-gray-900">{region}</h3>
              </div>
              <ul className="space-y-1">
                {countries.map((c) => (
                  <li key={c} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why the Expansion Matters
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          PYUSD&apos;s global rollout arrives as the stablecoin market undergoes its most
          significant period of institutional adoption. Traditional payment networks — including{' '}
          <Link href="/technology/stablecoins/mastercard-bvnk-acquisition-1-8-billion-march-2026" className="text-blue-600 hover:underline font-medium">
            Mastercard, which agreed to acquire stablecoin infrastructure provider BVNK for
            up to $1.8 billion
          </Link>{' '}
          earlier this week — are racing to own the on-chain settlement rails that bridge
          fiat and digital currencies.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          For PayPal, the expansion represents an attempt to leverage its existing global
          merchant and consumer payment network — over 400 million active accounts — to give
          PYUSD distribution advantages that purely crypto-native stablecoins like USDC and
          USDT cannot easily match. Reaching 70 markets simultaneously is a scale move
          designed to establish PYUSD as the default dollar-denominated stablecoin for
          PayPal&apos;s existing user base before competitors can close the gap.
        </p>

        <HighlightBox type="key-point" color="green">
          <strong>PYUSD advantage:</strong> PayPal&apos;s 400M+ active account base gives
          PYUSD an instant distribution channel that crypto-native stablecoins lack.
          The 70-market launch is a pre-emptive scale move ahead of the stablecoin
          market&apos;s anticipated regulatory formalization in 2026.
        </HighlightBox>

        {/* Context */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Stablecoin Sector Context
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The PYUSD expansion follows a week of significant stablecoin news. Mastercard&apos;s
          BVNK acquisition and the advancement of the U.S. GENIUS Act — a federal licensing
          framework for stablecoin issuers — have underscored that 2026 is shaping up as the
          year mainstream finance fully integrates stablecoin rails. Stablecoin transaction
          volume hit{' '}
          <Link href="/technology/stablecoins" className="text-blue-600 hover:underline font-medium">
            $27.6 trillion in 2025
          </Link>
          , surpassing Visa and Mastercard combined.
        </p>

        {/* Related */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Related Coverage
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/technology/stablecoins/mastercard-bvnk-acquisition-1-8-billion-march-2026" className="text-blue-600 hover:underline font-medium">
                Mastercard to Acquire BVNK for $1.8 Billion in Massive Stablecoin Bet
              </Link>
            </li>
            <li>
              <Link href="/technology/stablecoins" className="text-blue-600 hover:underline font-medium">
                Druckenmiller: Stablecoins Will Be the Backbone of Global Payments
              </Link>
            </li>
          </ul>
        </div>

      </NewsArticle>
    </SEOWrapper>
  );
}
