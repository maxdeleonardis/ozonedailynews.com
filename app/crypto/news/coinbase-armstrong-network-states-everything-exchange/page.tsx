import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/coinbase-armstrong-network-states-everything-exchange';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/images/crypto/coinbase-armstrong-network-states.jpg';

export const metadata: Metadata = {
  title: 'Coinbase Armstrong Vision | Network States, Everything Exchange',
  description: 'Coinbase CEO Brian Armstrong outlined three strategic priorities: an everything exchange spanning equities and crypto, stablecoin payments at scale, and a self-custodial DeFi wallet.',
  keywords: [
    'Brian Armstrong Coinbase',
    'Coinbase everything exchange',
    'Coinbase network states',
    'Armstrong stablecoin payments',
    'Coinbase DeFi wallet',
    'Coinbase stock trading 2026',
    'Coinbase prediction markets',
    'Coinbase Kalshi partnership',
    'Armstrong unbundling money state',
    'Coinbase 2026 roadmap',
    'Coinbase financial super app',
    'Brian Armstrong interview 2026',
    'Coinbase equities futures options',
    'Coinbase self-custody wallet',
    'crypto network states',
    'Coinbase Robinhood competition',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Coinbase CEO Armstrong Outlines Vision for Crypto Network States',
    description: 'Armstrong laid out three priorities: an everything exchange, stablecoin payments, and a self-custodial DeFi wallet, with a broader mission to unbundle money from the state.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-08T20:00:00Z',
    modifiedTime: '2026-04-08T20:00:00Z',
    section: 'Crypto',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Coinbase CEO Brian Armstrong discusses network states vision' }],
    tags: ['Coinbase', 'Brian Armstrong', 'Network States', 'DeFi', 'Stablecoin', 'Exchange'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armstrong Lays Out Coinbase Vision | Everything Exchange + Network States',
    description: 'Three priorities: everything exchange (equities, crypto, prediction markets), stablecoin payments, self-custodial DeFi wallet.',
    images: [OG_IMAGE],
  },
};

export default function CryptoNewsCoinbaseArmstrongNetworkStatesEverythingExchangePage() {
  return <NewsArticleDB slug="crypto-news-coinbase-armstrong-network-states-everything-exchange" />;
}
