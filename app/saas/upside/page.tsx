import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Upside | Cash Back Rewards Platform Profile',
  description: 'Complete profile of Upside, the mobile app offering cash back rewards at stores, restaurants, and gas stations. Radical transparency workplace culture',
  openGraph: {
    title: 'Upside | Cash Back Rewards Platform',
    description: 'Mobile app providing cash back rewards with a transparent, engineer-focused workplace culture.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upside | Cash Back Rewards Platform',
    description: 'Mobile app providing cash back rewards with a transparent, engineer-focused workplace culture.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/saas/upside',
  },
};

export default function UpsidePage() {
  return <WikiArticle slug="saas-upside" />;
}
