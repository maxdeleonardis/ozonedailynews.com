import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/diamond-gym/prime';

export const metadata: Metadata = {
  title: 'PRIME x Diamond Gym | Logan Paul Hydration Sponsor Deal',
  description:
    "Logan Paul's PRIME Hydration becomes the official hydration sponsor of Diamond Gym in Maplewood, NJ. Special Edition TTD bottle and Prime Protein shakes included.",
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
    canonical: 'https://www.owire.org/creator/diamond-gym/prime',
  },
  openGraph: {
    title: 'PRIME x Diamond Gym | Logan Paul Hydration Sponsor Deal',
    description:
      "Logan Paul's PRIME Hydration partners with Diamond Gym in Maplewood, NJ. The deal includes a Special Edition TTD bottle and Prime Protein, repositioning PRIME in the bodybuilding market.",
    type: 'article',
    url: 'https://www.owire.org/creator/diamond-gym/prime',
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    publishedTime: '2026-02-20T10:00:00Z',
    modifiedTime: '2026-02-20T10:00:00Z',
    section: 'Creator',
    tags: ['PRIME', 'Diamond Gym', 'Logan Paul', 'TTD Athletics', 'Bodybuilding', 'Fitness', 'Sponsorship'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRIME x Diamond Gym | Logan Paul Hydration Sponsor 2026',
    description:
      'Special Edition TTD Prime bottle, Prime Protein Shakes, and a major brand repositioning. Full breakdown.',
  },
};

export default function PrimeDiamondGymPage() {
  return <WikiArticle slug="creator-diamond-gym-prime" />;
}
