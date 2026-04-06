import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/artists/don-toliver/octane-review-features';

export const metadata: Metadata = {
  title: 'OCTANE Album Review | Don Toliver ft. Ye, Travis Scott, Young Thug',
  description:
    'In-depth review of Don Toliver\'s OCTANE album featuring Kanye West (Ye), Travis Scott, and Young Thug. Track-by-track analysis, production breakdown, and',
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
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'OCTANE Album Review | Don Toliver ft. Ye, Travis Scott, Young Thug',
    description:
      'Don Toliver delivers a solid 8/10 project with star-studded features from Ye, Travis Scott, and Young Thug.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    publishedTime: '2026-01-30T17:00:00Z',
    section: 'Entertainment',
    tags: ['OCTANE', 'Don Toliver', 'Album Review', 'Hip Hop', 'Music'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCTANE Album Review | Don Toliver',
    description:
      'Track-by-track breakdown of Don Toliver\'s latest featuring Ye, Travis Scott, and Young Thug. Score: 8/10.',
  },
};

export default function OctaneReviewPage() {
  return <NewsArticleDB slug="artists-don-toliver-octane-review-features" />;
}
