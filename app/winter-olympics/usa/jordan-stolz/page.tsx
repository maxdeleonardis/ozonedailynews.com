import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Jordan Stolz Wins 500m Gold | The Milwaukee Missile Strikes',
  description: 'Jordan Stolz claims speed skating 500m gold at Milan Cortina 2026 with an Olympic record 33.77 seconds. The Wisconsin native becomes the first American to',
  keywords: ['Jordan Stolz', 'speed skating', '500m gold', 'Winter Olympics 2026', 'Milan Cortina', 'Team USA', 'Olympic record', 'Milwaukee Missile', 'Wisconsin'],
  openGraph: {
    title: 'Jordan Stolz Wins 500m Gold | Milwaukee Missile Strikes',
    description: 'Wisconsin\'s Jordan Stolz wins 500m speed skating gold with Olympic record at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-14T22:00:00Z',
    authors: ['ObjectWire Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jordan Stolz | 500m Olympic Gold',
    description: 'The Milwaukee Missile claims speed skating glory at Milan Cortina 2026',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/jordan-stolz',
  },
};

export default function JordanStolzProfile() {
  return <WikiArticle slug="winter-olympics-usa-jordan-stolz" />;
}
