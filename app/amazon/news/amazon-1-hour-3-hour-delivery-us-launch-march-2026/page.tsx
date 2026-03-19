import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/amazon/news/amazon-1-hour-3-hour-delivery-us-launch-march-2026';
const AUTHOR_NAME = 'Jack Wang';
const AUTHOR_URL = 'https://www.objectwire.org/authors/jack-wang';

export const metadata: Metadata = {
  title: "Amazon Launches 1-Hour and 3-Hour Delivery Across US Cities — March 17, 2026 | ObjectWire",
  description:
    "Amazon rolled out 1-hour and 3-hour delivery options for more than 90,000 products on March 17, 2026. Prime members pay $9.99 for 1-hour delivery and $4.99 for 3-hour delivery. The service is live in hundreds of metros and over 2,000 cities, challenging Walmart's same-day network.",
  keywords: [
    'Amazon 1-hour delivery launch 2026',
    'Amazon 3-hour delivery US cities March 2026',
    'Amazon same-day delivery 90000 products',
    'Amazon getitfast delivery service',
    'amazon.com/getitfast',
    'Amazon Prime 1-hour delivery $9.99',
    'Amazon vs Walmart same-day delivery 2026',
    'Amazon express delivery Prime members',
    'Amazon fast delivery 2000 cities',
    'Amazon same-day fulfillment network 2026',
    'Amazon delivery expansion March 2026',
    'Amazon pantry OTC delivery 1 hour',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Amazon Launches 1-Hour and 3-Hour Delivery Options Across US Cities",
    description:
      "Amazon rolled out 1-hour and 3-hour delivery for 90,000+ products on March 17, 2026. Prime members pay $9.99 for 1-hour, $4.99 for 3-hour. The service covers hundreds of metro markets and 2,000+ cities — a direct challenge to Walmart's same-day network.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-17T14:00:00Z',
    modifiedTime: '2026-03-17T16:00:00Z',
    section: 'Technology',
    tags: [
      'Amazon', 'Breaking News', 'Delivery', 'Same-Day', 'Prime',
      'E-Commerce', 'Walmart', 'Retail', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Amazon Launches 1-Hour Delivery Nationally — $9.99 for Prime, 90,000 Products | ObjectWire",
    description:
      "Amazon's 1-hour and 3-hour delivery is now live in hundreds of US metros. Prime: $9.99 / $4.99. Non-Prime: $19.99 / $14.99. Direct competition with Walmart's sub-1-hour store network.",
  },
  other: {
    news_keywords:
      'Amazon 1-hour delivery, Amazon 3-hour delivery, Amazon same-day, Prime delivery 2026, amazon.com/getitfast, Walmart same-day, e-commerce delivery, March 2026',
  },
};

// =============================================================================
// DATA
// =============================================================================

const pricingRows = [
  { tier: 'Prime — 1-Hour',     price: '$9.99 per order',  note: 'Premium add-on beyond standard Prime same-day benefits' },
  { tier: 'Prime — 3-Hour',     price: '$4.99 per order',  note: 'Premium add-on beyond standard Prime same-day benefits' },
  { tier: 'Non-Prime — 1-Hour', price: '$19.99 per order', note: 'Available to all Amazon.com customers' },
  { tier: 'Non-Prime — 3-Hour', price: '$14.99 per order', note: 'Available to all Amazon.com customers' },
];

const coverageRows = [
  { tier: '1-Hour Delivery', coverage: 'Hundreds of locations at launch', focus: 'Major metros and select mid-sized cities' },
  { tier: '3-Hour Delivery', coverage: '2,000+ cities and towns',         focus: 'Urban centers, suburbs, and smaller communities' },
];

// =============================================================================
// PAGE
// =============================================================================

export default function Amazon1HourDeliveryPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Amazon Launches 1-Hour and 3-Hour Delivery Options Across US Cities — March 17, 2026"
        description="Amazon rolled out 1-hour and 3-hour delivery options for more than 90,000 products on March 17, 2026, using its existing same-day fulfillment network. Prime members pay $9.99 for 1-hour delivery and $4.99 for 3-hour delivery."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-03-17T14:00:00Z"
        modifiedTime="2026-03-17T16:00:00Z"
        imageUrl="https://www.objectwire.org/images/amazon-og.jpg"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Technology"
        keywords={[
          'Amazon 1-hour delivery 2026',
          'Amazon 3-hour delivery US cities',
          'Amazon Prime same-day express',
          'amazon.com/getitfast',
          'Amazon vs Walmart delivery 2026',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Amazon', item: '/amazon' },
              { name: 'News', item: '/amazon/news' },
              { name: 'Amazon 1-Hour & 3-Hour Delivery Launch', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Amazon Launches 1-Hour and 3-Hour Delivery Options Across US Cities"
        subtitle="90,000 products. Hundreds of metros. $9.99 for an hour. Amazon's fastest consumer delivery tier yet is live — and Walmart is the obvious target."
        category="E-Commerce"
        categoryColor="orange"
        topicTag="technology"
        publishDate="March 17, 2026"
        readTime="4 min read"
        breaking
        author={{
          name: AUTHOR_NAME,
          role: 'Technology Reporter',
          authorSlug: 'jack-wang',
        }}
        tags={[
          'Amazon', 'Breaking News', 'Delivery', 'Same-Day',
          'Prime', 'E-Commerce', 'Walmart', 'Retail', 'Technology',
        ]}
        slug="amazon-1-hour-3-hour-delivery-us-launch-march-2026"
        url={SLUG}
      >

        {/* Lede */}
        <p>
          <Link href="/amazon" className="text-orange-700 font-medium hover:underline">
            Amazon
          </Link>{' '}
          rolled out <strong>1-hour and 3-hour delivery options</strong> for more than{' '}
          <strong>90,000 products</strong> on <strong>March 17, 2026</strong>, using its
          existing same-day fulfillment network rather than separate dedicated hubs. The service
          covers everyday essentials — pantry staples, over-the-counter medications, cleaning
          supplies, health and beauty items, electronics, toys, and clothing — and is accessible
          via new <strong>&quot;In 1 Hour&quot;</strong> and{' '}
          <strong>&quot;In 3 Hours&quot;</strong> search filters, as well as a dedicated
          shopping page at <strong>amazon.com/getitfast</strong>.
        </p>
        <p>
          Prime members pay <strong>$9.99 for 1-hour delivery</strong> and{' '}
          <strong>$4.99 for 3-hour delivery</strong>. Non-Prime customers can access the same
          service for <strong>$19.99</strong> and <strong>$14.99</strong> respectively. Amazon
          plans expansion to additional areas in the coming months.
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>Key Facts:</strong> 90,000+ eligible products · 1-hour delivery live in
          hundreds of metros · 3-hour delivery in 2,000+ cities · Prime pricing: $9.99 / $4.99
          · Shop at <strong>amazon.com/getitfast</strong> or via new search filters ·
          Seven-days-a-week service
        </HighlightBox>

        {/* Pricing Table */}
        <h2>Pricing Structure for Delivery Tiers</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Customer Tier</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pricingRows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-semibold text-gray-800 text-xs">{row.tier}</td>
                  <td className="px-4 py-3 font-bold text-orange-700 text-xs">{row.price}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coverage Table */}
        <h2>Delivery Coverage and Availability</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Service</th>
                <th className="px-4 py-3 font-semibold">Coverage</th>
                <th className="px-4 py-3 font-semibold">Focus Areas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {coverageRows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-bold text-gray-900 text-xs whitespace-nowrap">{row.tier}</td>
                  <td className="px-4 py-3 font-semibold text-orange-700 text-xs">{row.coverage}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{row.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          All eligible products are limited to a curated 90,000-item assortment resembling a
          local supercenter selection, focused on emergency and high-frequency household needs.
          The service operates <strong>seven days a week</strong> with dedicated storefronts
          for faster browsing.
        </p>

        {/* Walmart Competition */}
        <h2>Competitive Context: Amazon vs. Walmart Same-Day</h2>
        <p>
          Walmart provides same-day fast delivery in under 3 hours to approximately{' '}
          <strong>95% of the U.S. population</strong>, leveraging its network of{' '}
          <strong>4,700 physical stores</strong> as fulfillment points. The company has reported
          average express delivery times under one hour for many orders, with growth in
          expedited channels exceeding 50% in recent periods.
        </p>
        <p>
          Amazon&apos;s rollout takes a structurally different approach — using{' '}
          <strong>reorganized regional same-day fulfillment sites</strong> and predictive
          inventory placement rather than a physical retail footprint. The bet is that
          algorithmic inventory positioning across its existing logistics network can replicate
          the proximity advantage that Walmart inherits from its store density.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="text-xs font-bold text-orange-700 uppercase tracking-wider mb-2">Amazon</p>
            <p className="font-bold text-gray-900 text-sm mb-1">Fulfillment Network Approach</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reorganized same-day sites + predictive inventory placement. No physical retail
              footprint. 1-hour in hundreds of metros; 3-hour in 2,000+ cities.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">Walmart</p>
            <p className="font-bold text-gray-900 text-sm mb-1">Store-as-Fulfillment Approach</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              4,700 physical stores as fulfillment points. Reaches ~95% of U.S. population.
              Average express delivery often under 1 hour. 50%+ expedited channel growth.
            </p>
          </div>
        </div>

        <HighlightBox type="quote" color="blue">
          When 90,000 items arrive in 60 minutes but still cost extra, the fastest path
          sometimes runs through a fee gate.
        </HighlightBox>

      </NewsArticle>
    </SEOWrapper>
  );
}
