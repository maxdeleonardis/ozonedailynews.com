import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Diamond Gym — Maplewood, NJ | Where Elite Fitness Influencers Train | ObjectWire',
  description:
    'Diamond Gym in Maplewood, NJ has become one of the most talked-about training facilities in the US fitness influencer scene. Logan Paul, the Tren Twins, and dozens of elite athletes have trained here. Full profile, history, and video.',
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
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/diamond-gym',
  },
  openGraph: {
    title: 'Diamond Gym — Maplewood, NJ | Where Elite Fitness Influencers Train',
    description:
      'Diamond Gym in Maplewood, NJ: the private gym where Logan Paul, the Tren Twins, and a wave of fitness influencers have trained. Full profile on ObjectWire.',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/diamond-gym',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'Influencer',
    tags: ['Diamond Gym', 'Maplewood NJ', 'Logan Paul', 'Tren Twins', 'Fitness', 'Bodybuilding', 'New Jersey'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diamond Gym, Maplewood NJ — Logan Paul, Tren Twins & Elite Influencers Train Here',
    description:
      'The New Jersey gym that became a destination for the biggest names in fitness content. Full profile on ObjectWire.',
  },
};

export default function DiamondGymPage() {
  return <WikiArticle slug="influencer-diamond-gym" />;
}
