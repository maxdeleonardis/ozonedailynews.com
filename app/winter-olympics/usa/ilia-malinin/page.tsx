import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Ilia Malinin - "Quad God" Figure Skating Profile | Milan Cortina 2026 | Object Wire',
  description: 'Profile of Ilia Malinin, the American figure skating phenomenon known as the "Quad God," who leads the men\'s singles after dominating the short program with 108.16 points at Milan Cortina 2026.',
  keywords: ['Ilia Malinin', 'figure skating', 'Winter Olympics', 'Team USA', 'Milan Cortina 2026', 'Quad God', 'quadruple jumps'],
  openGraph: {
    title: 'Ilia Malinin - "Quad God" Figure Skating Profile',
    description: 'American figure skating star leads men\'s singles after dominant short program performance',
    type: 'article',
    publishedTime: '2026-02-11T22:30:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ilia Malinin - "Quad God" Figure Skating Profile',
    description: 'American figure skating star leads men\'s singles after dominant short program',
  }
};

export default function IliaMalininProfile() {
  return <NewsArticleDB slug="winter-olympics-usa-ilia-malinin" />;
}
