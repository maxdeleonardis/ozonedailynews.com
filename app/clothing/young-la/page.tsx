import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Young LA - Fitness Apparel Brand | OBJECTWIRE',
  description: 'Profile of Young LA, the Los Angeles-based fitness apparel brand popular with bodybuilders and gym culture. Known for affordable gym wear and social media marketing.',
  keywords: 'Young LA, fitness apparel, gym clothing, bodybuilding apparel, Los Angeles, activewear',
  openGraph: {
    title: 'Young LA - Los Angeles Fitness Apparel',
    description: 'How Young LA became a popular fitness brand through affordable pricing and gym culture authenticity.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
    authors: ['OBJECTWIRE Fashion Desk'],
  },
};

export default function YoungLAPage() {
  return <WikiArticle slug="clothing-young-la" />;
}
