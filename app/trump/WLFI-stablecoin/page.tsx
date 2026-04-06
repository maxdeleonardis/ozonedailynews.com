import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = 'trump-WLFI-stablecoin';
const URL_PATH = '/trump/WLFI-stablecoin';
const FULL_URL = `https://www.objectwire.org${URL_PATH}`;

export const metadata: Metadata = {
  title: 'Binance Launches 135M Token Airdrop for USD1 Holders | WLFI Campaign',
  description:
    'Binance on March 20, 2026 launched a four-week airdrop distributing 135 million World Liberty Financial (WLFI) tokens to users holding the USD1',
  keywords: [
    'Binance WLFI airdrop',
    'USD1 stablecoin Binance',
    'World Liberty Financial WLFI tokens',
    'Trump DeFi airdrop 2026',
    'WLFI 135 million tokens',
    'USD1 stablecoin Trump family',
    'Binance Trump crypto',
    'World Liberty Financial airdrop March 2026',
    'WLFI USD1 holders',
    'Trump DeFi project',
    'Binance stablecoin promotion',
    'WLFI token distribution',
  ],
  alternates: { canonical: FULL_URL },
  openGraph: {
    title: 'Binance Launches 135M Token Airdrop for USD1 Holders',
    description:
      'A four-week campaign distributing 135 million WLFI tokens to Binance users holding the Trump-linked USD1 stablecoin. Runs March 20 – April 17, 2026, with',
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-24T00:00:00Z',
    modifiedTime: '2026-03-24T00:00:00Z',
    section: 'Crypto',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binance WLFI Airdrop: 135M Tokens for USD1 Holders',
    description:
      'Binance launched Round 2 of the WLFI airdrop on March 20, 135M tokens over four Fridays for holders of the Trump-family USD1 stablecoin.',
  },
};

export default function WLFIStablecoinPage() {
  return <ArticlePageDB slug="trump-WLFI-stablecoin" />;
}
