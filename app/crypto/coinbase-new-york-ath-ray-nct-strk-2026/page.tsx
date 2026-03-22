import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Coinbase Opens Four Crypto Tokens to New York Traders | ObjectWire',
  description:
    'Coinbase has enabled trading of Aethir (ATH), Raydium (RAY), PolySwarm (NCT), and Starknet (STRK) for New York residents — a notable milestone under the state\'s strict BitLicense framework.',
  keywords: [
    'Coinbase New York crypto 2026',
    'Aethir ATH Coinbase New York',
    'Raydium RAY Coinbase New York',
    'PolySwarm NCT Coinbase',
    'Starknet STRK Coinbase New York',
    'BitLicense new tokens 2026',
    'NYDFS crypto approval',
    'Coinbase New York listing',
    'crypto regulation New York',
    'Starknet Layer 2 Coinbase',
    'Raydium Solana AMM trading',
    'Aethir GPU cloud crypto',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/crypto/coinbase-new-york-ath-ray-nct-strk-2026',
  },
  openGraph: {
    title: 'Coinbase Opens ATH, RAY, NCT & STRK to New York Traders',
    description:
      'Coinbase enabled four tokens — Aethir, Raydium, PolySwarm, and Starknet — for New York residents on March 21, 2026. The expansion is significant because New York maintains one of the strictest BitLicense frameworks in the U.S.',
    type: 'article',
    url: 'https://www.objectwire.org/crypto/coinbase-new-york-ath-ray-nct-strk-2026',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Finance Desk'],
    publishedTime: '2026-03-21T14:00:00Z',
    modifiedTime: '2026-03-21T14:00:00Z',
    section: 'Crypto',
    tags: ['Coinbase', 'New York', 'Crypto', 'Aethir', 'Raydium', 'PolySwarm', 'Starknet', 'BitLicense', 'NYDFS'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coinbase Unlocks ATH, RAY, NCT & STRK for New York — A BitLicense Milestone',
    description:
      'Four tokens just cleared New York\'s strict NYDFS BitLicense review. Aethir, Raydium, PolySwarm, and Starknet are now live on Coinbase for all NY residents.',
  },
};

export default function CoinbaseNYPage() {
  return <NewsArticleDB slug="coinbase-new-york-ath-ray-nct-strk-2026" />;
}
