import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Josh D\'Amaro - Disney CEO | Biography & Career | Object Wire',
  description: 'Josh D\'Amaro is the incoming Chief Executive Officer of The Walt Disney Company, set to assume leadership in March 2026. Learn about his career at Disney Parks, vision for the company, and strategic initiatives.',
  keywords: ['Josh D\'Amaro', 'Disney CEO', 'Disney Parks', 'Walt Disney Company', 'Bob Iger', 'theme parks', 'entertainment executive'],
  openGraph: {
    title: 'Josh D\'Amaro - Disney CEO Biography',
    description: 'Complete profile of Josh D\'Amaro, incoming CEO of The Walt Disney Company',
    type: 'article',
  },
};

export default function JoshDAmaroPage() {
  return <WikiArticle slug="disney-josh-damaro" />;
}
