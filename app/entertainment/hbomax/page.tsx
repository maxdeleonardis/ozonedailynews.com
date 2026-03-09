import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'HBO Max - Streaming Platform Profile | ObjectWire',
  description: 'Complete profile of HBO Max (now Max), the premium streaming service featuring HBO originals, Warner Bros. films, DC content, and exclusive series.',
  openGraph: {
    title: 'HBO Max - Premium Streaming Service',
    description: 'HBO Max streaming platform with HBO originals, blockbuster movies, and prestige television.',
    type: 'article',
  },
};

export default function HBOMaxPage() {
  return <WikiArticle slug="entertainment-hbomax" />;
}
