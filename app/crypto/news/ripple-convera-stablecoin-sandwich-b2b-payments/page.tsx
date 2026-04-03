import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/ripple-convera-stablecoin-sandwich-b2b-payments';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Ripple, Convera Partner on Stablecoin B2B Cross-Border Payments',
  description:
    'Ripple and Convera announce a strategic partnership to settle B2B cross-border payments using a "stablecoin sandwich" model, compressing 3-5 day settlement to under an hour. RLUSD reaches $1.4B market cap.',
  keywords: [
    'Ripple Convera partnership 2026',
    'stablecoin sandwich payments',
    'RLUSD cross-border payments',
    'Convera B2B stablecoin settlement',
    'Ripple RLUSD $1.4 billion',
    'stablecoin B2B payments 2026',
    'correspondent banking stablecoin',
    'on-demand liquidity Ripple',
    'cross-border payment settlement speed',
    'Ripple corporate treasury stablecoin',
    'Mastercard BVNK stablecoin acquisition',
    'PayPal PYUSD global expansion',
    'stablecoin infrastructure institutional',
    'trapped capital treasury stablecoin',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ripple, Convera Partner on "Stablecoin Sandwich" B2B Payments',
    description:
      'Convera, the world\'s largest non-bank commercial payment provider, integrates Ripple\'s RLUSD to cut cross-border settlement from 5 days to under an hour. RLUSD hits $1.4B market cap.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Crypto Desk'],
    publishedTime: '2026-04-02T12:00:00Z',
    modifiedTime: '2026-04-02T12:00:00Z',
    section: 'Crypto',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Global payment network digital finance' }],
    tags: ['Ripple', 'Convera', 'RLUSD', 'Stablecoin', 'B2B Payments', 'Cross-Border', 'Fintech'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ripple, Convera Partner on Stablecoin B2B Settlement',
    description:
      '3-5 day wire transfers down to under an hour. Ripple\'s RLUSD now powering Convera\'s global B2B payment rails. RLUSD hits $1.4B market cap. The stablecoin land grab accelerates.',
    images: [OG_IMAGE],
  },
};

export default function CryptoNewsRippleConveraStablecoinSandwichB2bPaymentsPage() {
  return <NewsArticleDB slug="crypto-news-ripple-convera-stablecoin-sandwich-b2b-payments" />;
}
