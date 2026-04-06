import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const URL_PATH = '/crypto/usdc';
const FULL_URL = `https://www.objectwire.org${URL_PATH}`;

export const metadata: Metadata = {
  title: 'USD Coin (USDC) | Circle Internet Group',
  description:
    'Comprehensive profile of USD Coin (USDC), the regulated dollar stablecoin issued by Circle Internet Group. Covers history, reserve transparency,',
  keywords: [
    'USDC stablecoin',
    'USD Coin Circle',
    'Circle Internet Group CRCL',
    'USDC vs USDT',
    'stablecoin regulated',
    'USDC reserves transparency',
    'USDC market cap 2026',
    'USDC DeFi payments',
    'USDC cross-chain CCTP',
    'Circle Jeremy Allaire',
    'stablecoin GENIUS Act',
    'USDC AI agent payments',
    'USDC Coinbase x402',
  ],
  alternates: { canonical: FULL_URL },
  openGraph: {
    title: 'USD Coin (USDC) | Circle Internet Group',
    description:
      'Full profile of USDC: history, reserves, blockchain coverage, use cases, USDC vs USDT comparison, and the AI-era stablecoin opportunity.',
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-23T00:00:00Z',
    modifiedTime: '2026-03-23T00:00:00Z',
    section: 'Crypto',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USD Coin (USDC) | Everything You Need to Know',
    description:
      'Circle\'s USDC is the compliance-first stablecoin reaching $75–78B market cap. Full profile including reserves, chains, DeFi, AI payments, and USDC vs',
  },
};

export default function USDCPage() {
  return <ArticlePageDB slug="crypto-usdc" />;
}
