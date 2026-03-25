import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/blackrock';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'BlackRock: World\'s Largest Asset Manager, iShares ETFs & Aladdin | ObjectWire',
  description:
    'Comprehensive profile of BlackRock Inc. — the world\'s largest asset manager with over $10 trillion in AUM. Covers history, business segments, iShares ETFs, the Aladdin platform, Bitcoin ETF, Larry Fink leadership, and global market influence.',
  keywords: [
    'BlackRock',
    'BlackRock AUM',
    'Larry Fink',
    'iShares ETF',
    'Aladdin BlackRock',
    'BlackRock Bitcoin ETF',
    'world largest asset manager',
    'BlackRock IBIT',
    'BLK stock',
    'BlackRock investment management',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "BlackRock: World's Largest Asset Manager",
    description:
      "Complete guide to BlackRock Inc. — $10 trillion AUM, iShares ETFs, Aladdin technology platform, Bitcoin ETF, and the Larry Fink era.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [{ url: 'https://www.objectwire.org/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BlackRock — World's Largest Asset Manager | ObjectWire",
    description: '$10 trillion AUM. iShares. Aladdin. IBIT. Full profile of the most powerful investment firm on Earth.',
    images: ['https://www.objectwire.org/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg'],
  },
};

export default function BlackRockPage() {
  return <ArticlePageDB slug="blackrock" />;
}
