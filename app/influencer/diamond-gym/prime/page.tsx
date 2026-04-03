import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/diamond-gym/prime';

export const metadata: Metadata = {
  title: 'PRIME x Diamond Gym: Logan Paul\'s Brand Becomes Official Hydration Sponsor of "The World\'s Most Dangerous Gym" | ObjectWire',
  description:
    'Logan Paul\'s PRIME Hydration has officially partnered with Diamond Gym in Maplewood, NJ, "The World\'s Most Dangerous Gym." The deal includes a Special Edition TTD Prime bottle and Prime Protein Shakes, marking a major strategic shift for the brand.',
  keywords: [
    'PRIME Diamond Gym',
    'Logan Paul PRIME partnership',
    'Diamond Gym PRIME sponsorship',
    'TTD Athletics PRIME',
    'Prime Hydration Diamond Gym',
    'Till The Death PRIME',
    'Haddy Abdelhady PRIME',
    'PRIME protein shakes',
    'Logan Paul PRIME bodybuilding',
    'Diamond Gym Maplewood NJ',
    'PRIME hydration 2026',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/diamond-gym/prime',
  },
  openGraph: {
    title: 'PRIME x Diamond Gym: Logan Paul\'s Brand Becomes Official Hydration Sponsor of "The World\'s Most Dangerous Gym"',
    description:
      'Logan Paul\'s PRIME Hydration partners with Diamond Gym, a historic deal that includes a Special Edition TTD bottle and Prime Protein, repositioning PRIME as a serious athlete brand.',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/diamond-gym/prime',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-20T10:00:00Z',
    section: 'Influencer',
    tags: ['PRIME', 'Diamond Gym', 'Logan Paul', 'TTD Athletics', 'Bodybuilding', 'Fitness', 'Sponsorship'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRIME x Diamond Gym | Logan Paul\'s Brand Partners with "The World\'s Most Dangerous Gym"',
    description:
      'Special Edition TTD Prime bottle, Prime Protein Shakes, and a major brand repositioning. Full breakdown on ObjectWire.',
  },
};

export default function PrimeDiamondGymPage() {
  return <WikiArticle slug="influencer-diamond-gym-prime" />;
}
