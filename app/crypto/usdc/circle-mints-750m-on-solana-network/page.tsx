import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/usdc/circle-mints-750m-on-solana-network';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/crypto/usdc.png';

export const metadata: Metadata = {
  title: 'Circle Mints $750M USDC on Solana | 24-Hour Liquidity Surge',
  description:
    'Circle minted approximately $750 million in USDC on the Solana blockchain within 24 hours ending March 31, 2026, injecting fresh dollar liquidity into',
  keywords: [
    'Circle USDC Solana mint 2026',
    'Circle $750 million USDC Solana',
    'USDC Solana liquidity March 2026',
    'Solana DeFi USDC injection',
    'Circle USDC minting event',
    'Solana blockchain stablecoin',
    'USDC circulating supply 2026',
    'Whale Alert USDC Solana',
    'SolanaFloor USDC tracking',
    'Solana DEX volume USDC',
    'USDC total supply March 2026',
    'stablecoin liquidity Solana network',
    'Circle Internet Group Solana',
    'Solana DeFi TVL USDC',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Circle Mints $750M USDC on Solana | 24-Hour Liquidity Surge',
    description:
      '$750M in USDC minted on Solana in 24 hours. Accounts for 0.3% of total USDC supply. Solana DEX volumes surged 18% as institutional demand for on-chain',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Finance Desk'],
    publishedTime: '2026-04-01T14:00:00Z',
    modifiedTime: '2026-04-01T14:00:00Z',
    section: 'Crypto',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Solana blockchain cryptocurrency network visualization' }],
    tags: ['Circle', 'USDC', 'Solana', 'Stablecoin', 'DeFi', 'Crypto'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circle Mints $750M USDC on Solana in 24 Hours',
    description:
      '$750M USDC minted on Solana in one day, 0.3% of total supply. Solana DEX volumes surged 18%. Institutional dollar liquidity is flooding the network.',
    images: [OG_IMAGE],
  },
};

export default function CryptoUsdcCircleMints750mOnSolanaNetworkPage() {
  return <JackArticleDB slug="crypto-usdc-circle-mints-750m-on-solana-network" />;
}
