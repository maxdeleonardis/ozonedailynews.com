import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Janine Flock Wins Skeleton Gold | Austria\'s Veteran Finally Claims Olympic Glory',
  description: 'Janine Flock captures women\'s skeleton gold at Milan Cortina 2026 at age 36. Austria\'s greatest skeleton racer finally wins the Olympic title that',
  keywords: ['Janine Flock', 'skeleton', 'gold medal', 'Winter Olympics 2026', 'Milan Cortina', 'Austria', 'womens skeleton', 'Hall in Tirol', 'IBSF'],
  openGraph: {
    title: 'Janine Flock Finally Wins Olympic Gold at 36',
    description: 'Austria\'s skeleton legend captures elusive Olympic title at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-14T22:00:00Z',
    authors: ['ObjectWire Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janine Flock | Olympic Skeleton Gold',
    description: 'Austrian veteran wins gold at Milan Cortina 2026 after four Olympic appearances',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/austria/janine-flock',
  },
};

export default function JanineFlockProfile() {
  return <WikiArticle slug="winter-olympics-austria-janine-flock" />;
}
