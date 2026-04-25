import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/blackrock/news/blackrock-600m-bitcoin-cold-storage-ibit-etf-settlement';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1635840418908-772c54d7931f?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'BlackRock Moves $600M Bitcoin to Cold Storage | IBIT ETF',
  description: 'BlackRock shifted $600 million in Bitcoin from Coinbase Prime to private cold wallets. The move signals long-term settlement, not a sell-off, as IBIT',
  keywords: [
    'BlackRock Bitcoin cold storage',
    'IBIT ETF Bitcoin movement',
    'BlackRock Coinbase Prime transfer',
    'BlackRock 600 million Bitcoin',
    'IBIT 784000 BTC holdings',
    'BlackRock crypto cold wallet',
    'Bitcoin ETF rebalancing 2026',
    'Larry Fink digital wallets',
    'BlackRock hot storage cold storage',
    'IBIT Bitcoin Trust settlement',
    'BlackRock 4 percent Bitcoin supply',
    'ETHA Ethereum ETF BlackRock',
    'institutional Bitcoin custody 2026',
    'BlackRock crypto institutional finance',
    'Bitcoin ETF authorized participants',
    'SaaSpocalypse crypto rotation',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'BlackRock Moves $600M in Bitcoin to Cold Storage as IBIT',
    description: 'The $600M transfer from Coinbase Prime to private wallets is operational settlement, not a sell-off. IBIT now controls nearly 4% of total Bitcoin supply.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T23:30:00Z',
    modifiedTime: '2026-04-11T23:30:00Z',
    section: 'Finance',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Bitcoin coin on a padlock representing cold storage security' }],
    tags: ['BlackRock', 'Bitcoin', 'IBIT', 'Coinbase Prime', 'Cold Storage', 'Larry Fink'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlackRock Moves $600M BTC to Cold Storage | Not a Sell-Off',
    description: 'IBIT holds 784K BTC, nearly 4% of total supply. The $600M Coinbase Prime transfer is long-term settlement, not liquidation.',
    images: [OG_IMAGE],
  },
};

export default function BlackrockNewsBlackrock600mBitcoinColdStorageIbitEtfSettlementPage() {
  return <NewsArticleDB slug="blackrock-news-blackrock-600m-bitcoin-cold-storage-ibit-etf-settlement" />;
}
