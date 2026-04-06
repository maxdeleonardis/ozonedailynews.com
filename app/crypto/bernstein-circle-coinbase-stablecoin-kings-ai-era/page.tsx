import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/bernstein-circle-coinbase-stablecoin-kings-ai-era';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Bernstein Crowns Circle and Coinbase as "Stablecoin Kings" for the AI Era',
  description:
    'Bernstein SocGen Group designates Circle (CRCL) and Coinbase (COIN) as the premier proxy plays for stablecoin growth in the AI era, citing a $190 price',
  keywords: [
    'Bernstein Circle Coinbase stablecoin',
    'Circle CRCL price target $190',
    'Coinbase COIN stablecoin AI era',
    'Bernstein SocGen stablecoin kings',
    'Gautam Chhugani Circle outperform',
    'USDC Agentic AI machine payments',
    'Coinbase x402 agent payment protocol',
    'Circle nanopayments AI developer stacks',
    'stablecoin decoupled crypto cycle 2026',
    'USDC financial infrastructure AI agents',
    'stablecoin market growth 2026',
    'Circle IPO NASDAQ CRCL',
    'Coinbase COIN stablecoin revenue',
    'AI agent micropayments stablecoin',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Bernstein Names Circle and Coinbase "Stablecoin Kings" for the AI Era',
    description:
      'Bernstein SocGen gives Circle a $190 price target and names both CRCL and COIN the top proxy plays as stablecoins decouple from crypto volatility and',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-23T08:00:00Z',
    modifiedTime: '2026-03-23T08:00:00Z',
    section: 'Crypto',
    tags: ['Crypto', 'Stablecoins', 'Circle', 'Coinbase', 'USDC', 'AI', 'Finance', 'Bernstein'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bernstein: Circle (CRCL) and Coinbase (COIN) Are the "Stablecoin Kings" of the AI Era',
    description:
      '$190 price target for Circle, Coinbase x402 hitting $25M in 30 days, and USDC Nanopayments entering AI dev stacks, Bernstein makes the case stablecoins',
  },
};

export default function BernsteinStablecoinKingsPage() {
  return <JackArticleDB slug="crypto-bernstein-circle-coinbase-stablecoin-kings-ai-era" />;
}
