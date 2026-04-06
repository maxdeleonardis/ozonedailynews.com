import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/diamond-gym';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = '/influncer/Diamond Gym.PNG';

export const metadata: Metadata = {
  title: 'Diamond Gym | Maplewood, NJ | Where Elite Fitness Influencers Train',
  description:
    'Diamond Gym in Maplewood, NJ has become one of the most talked-about training facilities in the US fitness influencer scene. Logan Paul, the Tren Twins,',
  keywords: [
    'Diamond Gym',
    'Diamond Gym Maplewood NJ',
    'Diamond Gym New Jersey',
    'Logan Paul Diamond Gym',
    'Tren Twins Diamond Gym',
    'fitness influencer gym NJ',
    'best gym New Jersey',
    'bodybuilding gym Maplewood',
    'diamondgym.pro',
    'elite gym New Jersey',
    'influencer training gym',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Diamond Gym | Maplewood, NJ | Where Elite Fitness Influencers Train',
    description:
      'Diamond Gym in Maplewood, NJ: the private gym where Logan Paul, the Tren Twins, and a wave of fitness influencers have trained. Full profile on ObjectWire.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Diamond Gym', 'Maplewood NJ', 'Logan Paul', 'Tren Twins', 'Fitness', 'Bodybuilding', 'New Jersey'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-03-31T12:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Diamond Gym Maplewood NJ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diamond Gym, Maplewood NJ | Logan Paul, Tren Twins & Elite Influencers Train Here',
    description:
      'The New Jersey gym that became a destination for the biggest names in fitness content. Full profile on ObjectWire.',
  },
};

export default function InfluencerDiamondGymPage() {
  return <CreatorArticleDB slug="influencer-diamond-gym" />;
}
