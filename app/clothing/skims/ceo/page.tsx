import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Jens Grede - SKIMS CEO and Co-Founder | OBJECTWIRE',
  description: 'Profile of Jens Grede, CEO and co-founder of SKIMS. His entrepreneurial background, partnership with Kim Kardashian, and business strategy behind the $4 billion brand.',
  keywords: 'Jens Grede, SKIMS CEO, fashion entrepreneur, Frame Denim, Good American, celebrity brands',
  openGraph: {
    title: 'Jens Grede - The Business Mind Behind SKIMS',
    description: 'How serial entrepreneur Jens Grede built multiple billion-dollar fashion brands and transformed SKIMS into an industry leader.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
  },
};

export default function JensGredePage() {
  return <WikiArticle slug="clothing-skims-ceo" />;
}
