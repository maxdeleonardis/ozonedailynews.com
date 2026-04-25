import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/coinbase/clarity-act-stablecoin-yield-ban';
const OG_IMAGE = '/crypto/coinbase.png';

export const metadata: Metadata = {
  title: 'Coinbase Clarity Act Stablecoin Yield Ban | Circle Stock',
  description:
    'Coinbase says it cannot support the Digital Asset Market Clarity Act\'s stablecoin yield ban. Circle fell 20%, Coinbase 10% after the provision leaked.',
  keywords: [
    'Coinbase Clarity Act stablecoin yield ban',
    'Digital Asset Market Clarity Act',
    'Circle stock drop 2026',
    'USDC yield ban',
    'Coinbase Circle stock selloff',
    'stablecoin regulation 2026',
    'crypto equities selloff',
    'Coinbase earnings impact',
    'Circle IPO 2025',
    'Robinhood crypto decline',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Coinbase Says It Can\'t Support Clarity Act Stablecoin Yield Ban',
    description:
      'A leaked draft of the Digital Asset Market Clarity Act includes a provision banning stablecoin yield payments. Circle dropped 20%, Coinbase 10% on the',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: `https://www.objectwire.org${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'Coinbase and Circle stock selloff after Clarity Act stablecoin yield ban leak',
      },
    ],
    publishedTime: '2026-03-30T14:00:00Z',
    section: 'Crypto',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coinbase vs. Clarity Act | Stablecoin Yield Ban Tanks',
    description:
      'Leaked draft of Digital Asset Market Clarity Act would ban stablecoin yield on consumer balances. Circle -20%, Coinbase -10%, Robinhood -5%.',
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function CryptoCoinbaseClarityActStablecoinYieldBanPage() {
  return <NewsArticleDB slug="crypto-coinbase-clarity-act-stablecoin-yield-ban" />;
}
