import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'HBO Max | Streaming Platform Profile',
  description: 'Complete profile of HBO Max (now Max), the premium streaming service featuring HBO originals, Warner Bros. films, DC content, and exclusive series.',
  openGraph: {
    title: 'HBO Max | Premium Streaming Service',
    description: 'HBO Max streaming platform with HBO originals, blockbuster movies, and prestige television.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HBO Max | Premium Streaming Service',
    description: 'HBO Max streaming platform with HBO originals, blockbuster movies, and prestige television.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/entertainment/hbomax',
  },
};

export default function HBOMaxPage() {
  return <WikiArticle slug="entertainment-hbomax" />;
}
