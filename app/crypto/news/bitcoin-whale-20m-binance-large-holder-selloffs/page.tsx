import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/bitcoin-whale-20m-binance-large-holder-selloffs';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/images/crypto/bitcoin-whale-binance-selloff.jpg';

export const metadata: Metadata = {
  title: 'Bitcoin Whale Moves $20M to Binance | Large-Holder Selloffs',
  description: 'A Bitcoin whale transferred 300 BTC worth $20.6M to Binance on Monday, sitting on a 30% unrealized loss. The move follows a wave of large-holder liquidations tracked by Chainalysis.',
  keywords: [
    'Bitcoin whale Binance',
    'Bitcoin whale selloff 2026',
    'BTC whale transfer Binance',
    '300 BTC Binance deposit',
    'Bitcoin large holder liquidation',
    'Chainalysis whale tracking',
    'Exchange Whale Ratio',
    'Ki Young Ju CryptoQuant',
    'Bitcoin capitulation 2026',
    'BTC unrealized loss',
    'Bitcoin whale selling pressure',
    'crypto whale Binance deposit',
    'Bitcoin price $69000',
    'Bitcoin exchange inflows',
    'whale wallet BTC accumulation',
    'BlockBeats Bitcoin whale',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Bitcoin Whale Moves $20M to Binance Amid Large-Holder Selloffs',
    description: 'A whale transferred 300 BTC worth $20.6M to Binance, locking in roughly 30% losses on a position accumulated between January and March 2025.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-08T19:00:00Z',
    modifiedTime: '2026-04-08T19:00:00Z',
    section: 'Crypto',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Bitcoin whale transfer to Binance exchange amid selloff wave' }],
    tags: ['Bitcoin', 'Binance', 'Whale', 'Chainalysis', 'CryptoQuant', 'Selloff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Whale Sends $20M to Binance | 30% Loss, 300 BTC',
    description: 'Whale accumulated 500 BTC near $97K, just moved 300 BTC to Binance at $68.7K. Exchange Whale Ratio rising.',
    images: [OG_IMAGE],
  },
};

export default function CryptoNewsBitcoinWhale20mBinanceLargeHolderSelloffsPage() {
  return <NewsArticleDB slug="crypto-news-bitcoin-whale-20m-binance-large-holder-selloffs" />;
}
