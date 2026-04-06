import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Chloe Kim Faces Unfamiliar Hurdles in Bid for Historic Olympic Halfpipe Three-Peat | Object Wire',
  description: 'Chloe Kim confronts new challenges in her pursuit of a third consecutive Olympic halfpipe gold medal at Milan Cortina 2026, including injuries,',
  keywords: ['Chloe Kim', 'Winter Olympics', 'snowboarding', 'halfpipe', 'Milan Cortina 2026', 'Team USA', 'three-peat', 'Olympic gold'],
  openGraph: {
    title: 'Chloe Kim Faces Unfamiliar Hurdles in Historic Three-Peat Bid',
    description: 'Chloe Kim confronts injuries and pressure in pursuit of third consecutive Olympic halfpipe gold',
    type: 'article',
    publishedTime: '2026-02-11T21:30:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chloe Kim Faces Unfamiliar Hurdles in Historic Three-Peat Bid',
    description: 'Chloe Kim confronts injuries and pressure in pursuit of third consecutive Olympic halfpipe gold',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/chloe-kim-historic-three-peat-bid',
  },
};

export default function ChloeKimArticle() {
  return <NewsArticleDB slug="winter-olympics-chloe-kim-historic-three-peat-bid" />;
}
