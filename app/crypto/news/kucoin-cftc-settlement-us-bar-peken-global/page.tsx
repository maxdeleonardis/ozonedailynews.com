import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/kucoin-cftc-settlement-us-bar-peken-global';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/crypto/kucoin.png';

export const metadata: Metadata = {
  title: 'KuCoin CFTC Settlement | Peken Global Barred from U.S.',
  description:
    'KuCoin operator Peken Global Limited agrees to a $500K CFTC civil penalty and is indefinitely barred from letting U.S. persons trade without foreign board of trade registration.',
  keywords: [
    'KuCoin CFTC settlement 2026',
    'Peken Global Limited CFTC consent order',
    'KuCoin U.S. trading ban',
    'CFTC foreign board of trade registration',
    'KuCoin $500K civil penalty',
    'KuCoin regulatory enforcement',
    'CFTC crypto exchange enforcement',
    'KuCoin US customers barred',
    'offshore crypto exchange CFTC',
    'Commodity Exchange Act crypto derivatives',
    'CFTC FBOT registration crypto',
    'KuCoin DOJ settlement 2024',
    'crypto exchange U.S. compliance',
    'CFTC unregistered derivatives platform',
    'crypto regulation enforcement 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'KuCoin CFTC Settlement | Peken Global Barred from U.S.',
    description:
      'KuCoin operator Peken Global Limited accepts a $500K CFTC civil penalty and is indefinitely blocked from serving U.S. traders. The consent order closes the loop on a two-year U.S. regulatory reckoning.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennen'],
    publishedTime: '2026-04-07T14:00:00Z',
    modifiedTime: '2026-04-07T14:00:00Z',
    section: 'Crypto',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'KuCoin exchange logo CFTC settlement 2026' }],
    tags: ['KuCoin', 'CFTC', 'Peken Global', 'Crypto Regulation', 'Enforcement', 'U.S. Trading Ban'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KuCoin Barred from U.S. in CFTC Settlement | $500K Penalty',
    description:
      'Peken Global (KuCoin) hit with $500K CFTC civil penalty and indefinite U.S. trading bar. No U.S. customers without foreign board of trade registration.',
    images: [OG_IMAGE],
  },
};

export default function CryptoNewsKucoinCftcSettlementUsBarPekenGlobalPage() {
  return <JackArticleDB slug="crypto-news-kucoin-cftc-settlement-us-bar-peken-global" />;
}
