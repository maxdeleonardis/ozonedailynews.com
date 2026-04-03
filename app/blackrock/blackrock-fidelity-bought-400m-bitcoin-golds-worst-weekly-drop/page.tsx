import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/blackrock/blackrock-fidelity-bought-400m-bitcoin-golds-worst-weekly-drop';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg';

export const metadata: Metadata = {
  title: 'BlackRock and Fidelity Bought $400M in Bitcoin Amid Gold\'s Worst Weekly Drop in Decades | ObjectWire',
  description:
    'BlackRock and Fidelity purchased nearly $400 million in Bitcoin last week, even as they sold $250 million, generating a net bullish signal for crypto markets. The moves came during gold\'s steepest weekly decline in nearly 40 years, with Arkham Intelligence data suggesting a capital rotation is underway.',
  keywords: [
    'BlackRock Bitcoin 2026',
    'Fidelity Bitcoin purchase',
    'BlackRock Fidelity $400 million Bitcoin',
    'spot Bitcoin ETF inflows March 2026',
    'gold worst weekly drop 2026',
    'capital rotation gold to Bitcoin',
    'Arkham Intelligence Bitcoin',
    'institutional Bitcoin buying 2026',
    'Bitcoin $68500',
    'US Iran conflict Bitcoin gold',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "BlackRock and Fidelity Bought $400M in Bitcoin Amid Gold's Worst Weekly Drop in Decades",
    description:
      "BlackRock and Fidelity bought nearly $400M in Bitcoin while selling $250M, a net bullish signal. The trades coincided with gold's steepest weekly decline in ~40 years and a total of $93.1M in spot Bitcoin ETF inflows.",
    url: FULL_URL,
    images: [{ url: IMAGE_URL }],
    type: 'article',
    publishedTime: '2026-03-24T14:00:00Z',
    modifiedTime: '2026-03-24T14:00:00Z',
    section: 'Finance',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BlackRock & Fidelity Bought $400M Bitcoin as Gold Had Its Worst Week in 40 Years",
    description:
      "Net bullish: $400M in, $250M out. Spot Bitcoin ETF week: +$93.1M net inflows. Bitcoin ~$68,500. Gold in freefall. Arkham Intelligence confirms the trades.",
    images: [IMAGE_URL],
  },
};

export default function BlackRockFidelityBitcoinPage() {
  return <NewsArticleDB slug="blackrock-blackrock-fidelity-bought-400m-bitcoin-golds-worst-weekly-drop" />;
}
