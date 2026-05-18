import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/diamond-gym';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;
const OG_IMAGE = '/influncer/Diamond Gym.PNG';

export const metadata: Metadata = {
  title: 'Diamond Gym | Maplewood, NJ | Where Elite Fitness',
  description:
    'Diamond Gym in Maplewood, NJ has become one of the most talked-about training facilities in the US fitness creator scene. Logan Paul, the Tren Twins,',
  keywords: [
    'Diamond Gym',
    'Diamond Gym Maplewood NJ',
    'Diamond Gym New Jersey',
    'Logan Paul Diamond Gym',
    'Tren Twins Diamond Gym',
    'fitness creator gym NJ',
    'best gym New Jersey',
    'bodybuilding gym Maplewood',
    'diamondgym.pro',
    'elite gym New Jersey',
    'creator training gym',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Diamond Gym | Maplewood, NJ | Where Elite Fitness',
    description:
      'Diamond Gym in Maplewood, NJ: the private gym where Logan Paul, the Tren Twins, and a wave of fitness creators have trained. Full profile on OzoneNews.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    tags: ['Diamond Gym', 'Maplewood NJ', 'Logan Paul', 'Tren Twins', 'Fitness', 'Bodybuilding', 'New Jersey'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-03-31T12:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Diamond Gym Maplewood NJ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diamond Gym, Maplewood NJ | Logan Paul, Tren Twins & Elite',
    description:
      'The New Jersey gym that became a destination for the biggest names in fitness content. Full profile on OzoneNews.',
  },
};

export default function CreatorDiamondGymPage() {
  return <CreatorArticleDB slug="creator-diamond-gym" />;
}
