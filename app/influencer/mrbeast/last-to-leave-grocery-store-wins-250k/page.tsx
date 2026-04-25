import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/mrbeast/last-to-leave-grocery-store-wins-250k';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://www.objectwire.org/influncer/usa/mr_beast.png';

export const metadata: Metadata = {
  title: 'MrBeast Grocery Store | $250K, Part 2 Cliffhanger',
  description:
    'MrBeast locks random shoppers in a grocery store for $250,000. Coca-Cola FIFA World Cup 2026 Easter egg, surprise brand lineup, and a shocking Part 2',
  keywords: [
    'MrBeast grocery store challenge',
    'Last to Leave Grocery Store wins 250000',
    'MrBeast $250k video',
    'MrBeast grocery store Part 2',
    'MrBeast Jimmy Donaldson',
    'MrBeast Beast Games',
    'MrBeast Feastables brand',
    'MrBeast Good Ranchers sponsor',
    'MrBeast Coca-Cola FIFA World Cup 2026',
    'MrBeast grocery store challenge twist',
    'MrBeast YouTube April 2026',
    'MrBeast challenge video 2026',
    'Good Ranchers BEAST promo code',
    'Coca-Cola World Cup Panini stickers',
    'MrBeast random people challenge',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'MrBeast Grocery Store | $250K, Part 2 Cliffhanger',
    description:
      '$250,000 grocery store lockdown. Random shoppers, Coca-Cola World Cup 2026 Easter egg, 8 major brand sponsors, no winner crowned. Part 2 incoming.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-22T10:00:00Z',
    modifiedTime: '2026-04-22T10:00:00Z',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'MrBeast grocery store $250,000 challenge' }],
    tags: ['MrBeast', 'YouTube', 'Beast Games', 'Feastables', 'World Cup 2026', 'Coca-Cola'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MrBeast locked random shoppers in a grocery store for',
    description: 'Coca-Cola World Cup 2026 Easter egg, $40-off BEAST promo code, and no winner crowned. Part 2 is coming.',
    images: [OG_IMAGE],
  },
};

export default function InfluencerMrbeastLastToLeaveGroceryStoreWins250kPage() {
  return <JackArticleDB slug="influencer-mrbeast-last-to-leave-grocery-store-wins-250k" />;
}
