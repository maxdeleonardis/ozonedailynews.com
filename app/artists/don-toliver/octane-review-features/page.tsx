import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'OCTANE Album Review - Don Toliver ft. Ye, Travis Scott, Young Thug | ObjectWire',
  description: 'In-depth review of Don Toliver\'s OCTANE album featuring Kanye West (Ye), Travis Scott, and Young Thug. Track-by-track analysis, production breakdown, and why it scores 8/10.',
  keywords: [
    'OCTANE review',
    'Don Toliver',
    'Kanye West',
    'Travis Scott',
    'Young Thug',
    'album review',
    'hip hop',
    '2026 music',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/artists/don-toliver/octane-review-features',
  },
  openGraph: {
    type: 'article',
    title: 'OCTANE Album Review - Don Toliver',
    description: 'Don Toliver delivers a solid 8/10 project with star-studded features from Ye, Travis Scott, and Young Thug.',
    publishedTime: '2026-01-30T17:00:00Z',
    section: 'Music Reviews',
    tags: ['OCTANE', 'Don Toliver', 'Album Review', 'Hip Hop', 'Music'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCTANE Album Review - Don Toliver ★★★★☆',
    description: 'Track-by-track breakdown of Don Toliver\'s latest featuring Ye, Travis, and Thugger.',
  },
};

export default function OctaneReviewPage() {
  return <WikiArticle slug="artists-don-toliver-octane-review-features" />;
}
