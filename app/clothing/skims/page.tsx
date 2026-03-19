import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'SKIMS - Shapewear, Loungewear & Underwear Brand | OBJECTWIRE',
  description: 'Comprehensive history of SKIMS, the revolutionary shapewear and loungewear company founded by Kim Kardashian and Jens Grede. From controversial launch to billion-dollar valuation.',
  keywords: 'SKIMS, Kim Kardashian, Jens Grede, shapewear, loungewear, underwear, fashion brand, body inclusivity',
  openGraph: {
    title: 'SKIMS - The Complete Company History',
    description: 'From Kimono controversy to billion-dollar brand. The story of SKIMS shapewear revolution.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
    authors: ['OBJECTWIRE Fashion Desk'],
  },
};

export default function SkimsPage() {
  return <WikiArticle slug="clothing-skims" />;
}
