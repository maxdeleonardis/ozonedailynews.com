import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/white-house-block-and-find-out-coinbase-clarity-act-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1772821290762-46430c512f11?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'White House Block and Find Out | Coinbase, CLARITY Act Stablecoin 2026',
  description:
    'White House digital assets director Patrick Witt warned Coinbase that blocking the CLARITY Act stablecoin yield provision risks "far worse" rules under a future administration.',
  keywords: [
    'White House Coinbase warning 2026',
    'Coinbase CLARITY Act block and find out',
    'Patrick Witt Coinbase stablecoin',
    'Digital Asset Market Clarity Act stablecoin yield',
    'Coinbase Brian Armstrong no bill bad bill',
    'stablecoin yield ban Senate 2026',
    'Tillis Alsobrooks CLARITY Act',
    'Coinbase USDC yield revenue 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: 'article',
    title: 'White House Block and Find Out Warning to Coinbase | CLARITY Act Stablecoin 2026',
    description:
      "Patrick Witt, the White House's executive director for digital assets, warned Coinbase that blocking the CLARITY Act's stablecoin yield provision is a 'dangerous gamble' that could invite far stricter rules under a future administration.",
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Conan Boyle'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'US Capitol building dome on a foggy day' }],
    publishedTime: '2026-03-30T19:00:00Z',
    modifiedTime: '2026-03-30T19:00:00Z',
    section: 'Crypto',
    tags: ['Coinbase', 'White House', 'CLARITY Act', 'Stablecoin', 'USDC', 'Patrick Witt', 'Brian Armstrong', 'Crypto Regulation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White House to Coinbase: "Block and Find Out"',
    description:
      'Patrick Witt warned Coinbase that blocking the CLARITY Act stablecoin yield ban risks "far worse" rules under a future Democratic administration.',
    images: [OG_IMAGE],
  },
};

export default function CryptoWhiteHouseBlockAndFindOutCoinbaseClarityAct2026Page() {
  return <NewsArticleDB slug="crypto-white-house-block-and-find-out-coinbase-clarity-act-2026" />;
}
