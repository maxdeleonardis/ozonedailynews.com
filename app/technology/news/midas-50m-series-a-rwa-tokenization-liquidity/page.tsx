import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/news/midas-50m-series-a-rwa-tokenization-liquidity';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Midas $50M Series A | RWA Tokenization Liquidity',
  description:
    'Midas raises $50M Series A to build 24/7 instant redemption for tokenized Treasuries. Franklin Templeton and Anchorage Digital participated in the Berlin fintech round.',
  keywords: [
    'Midas RWA tokenization $50M Series A',
    'Midas mTBILL stablecoin instant redemption',
    'real world asset tokenization startup 2026',
    'Midas Franklin Templeton investment',
    'Midas Anchorage Digital Coinbase Ventures funding',
    'mTBILL BlackRock Treasury ETF tokenized',
    'mBASIS delta neutral yield token',
    'RWA tokenization liquidity trap',
    'tokenized Treasury instant redemption 2026',
    'Midas Berlin fintech Series A',
    'Ondo Finance competitor RWA',
    'BlackRock BUIDL tokenized fund competitor',
    'MiCA compliant RWA startup Europe',
    'on-chain Treasury yield startup',
    'tokenized government bonds stablecoin',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Midas $50M Series A | Instant Redemption for Tokenized Treasuries',
    description:
      'Berlin-based Midas raises $50M from Franklin Templeton, Coinbase Ventures, and Anchorage Digital to solve the 24-hour settlement delay blocking institutional RWA adoption. Total funding: $58.75M.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-30T16:00:00Z',
    modifiedTime: '2026-03-30T16:00:00Z',
    section: 'Finance',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Finance and tokenization concept' }],
    tags: ['Midas', 'Franklin Templeton', 'RWA Tokenization', 'Anchorage Digital', 'Stablecoin', 'DeFi'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midas Raises $50M | Instant Redemption for Tokenized Treasuries',
    description:
      'Franklin Templeton, Coinbase Ventures, Anchorage Digital in the round. Midas builds 24/7 stablecoin exits for on-chain Treasury yields. RWA market: $2.5B, up 300% YoY.',
    images: [OG_IMAGE],
  },
};

export default function TechnologyNewsMidas50mSeriesARwaTokenizationLiquidityPage() {
  return <NewsArticleDB slug="technology-news-midas-50m-series-a-rwa-tokenization-liquidity" />;
}
