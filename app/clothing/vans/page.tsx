import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Vans | American Skate Shoe and Apparel Brand | OBJECTWIRE',
  description: 'Complete history of Vans, the iconic skateboard shoe brand founded in 1966. From Southern California origins to global streetwear phenomenon.',
  keywords: 'Vans, skateboard shoes, Paul Van Doren, Off The Wall, skate culture, streetwear, sneakers',
  openGraph: {
    title: 'Vans | Off The Wall Since 1966',
    description: 'How Vans became the definitive skateboard shoe brand and cultural icon through grassroots marketing and authentic skate culture connection.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
    authors: ['OBJECTWIRE Fashion Desk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vans | Off The Wall Since 1966',
    description: 'How Vans became the definitive skateboard shoe brand and cultural icon through grassroots marketing and authentic skate culture connection.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/clothing/vans',
  },
};

export default function VansPage() {
  return <WikiArticle slug="clothing-vans" />;
}
