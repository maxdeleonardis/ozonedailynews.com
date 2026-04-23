import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/news/binance-prediction-markets-keyless-wallet-on-chain-probability-trading';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1629193382974-f478714dba26?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Binance Prediction Markets | Keyless Wallet On-Chain Trading',
  description: 'Binance launches prediction markets via Keyless Wallet integration, allowing users to trade on-chain probability contracts directly from the Binance App.',
  keywords: [
    'Binance prediction markets',
    'Binance Keyless Wallet',
    'Binance on-chain prediction trading',
    'Binance prediction market 2026',
    'Binance Wallet prediction account',
    'Binance Barbados prediction markets',
    'on-chain probability trading',
    'Binance prediction market launch',
    'Polymarket Binance competitor',
    'crypto prediction markets 2026',
    'Binance Web3 wallet',
    'prediction market exchange',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Binance Launches Prediction Markets | Keyless Wallet Integration',
    description: 'On-chain probability trading comes to the Binance App through a new Prediction Account powered by Keyless Wallet. Provided by Binance Barbados Limited.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-18T00:00:00Z',
    modifiedTime: '2026-04-18T00:00:00Z',
    section: 'News',
    tags: ['Binance', 'Prediction Markets', 'Crypto', 'Keyless Wallet'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binance enters prediction markets with Keyless Wallet integration',
    description: 'On-chain probability trading now live in the Binance App. Separate Prediction Account required. Powered by Binance Barbados Limited.',
  },
};

export default function NewsBinancePredictionMarketsKeylessWalletOnChainProbabilityTradingPage() {
  return <NewsArticleDB slug="news-binance-prediction-markets-keyless-wallet-on-chain-probability-trading" />;
}
