import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Kim Kardashian | SKIMS Creative Director | OBJECTWIRE',
  description: 'Profile of Kim Kardashian as Creative Director and co-founder of SKIMS. Her vision, design philosophy, and impact on the shapewear revolution.',
  keywords: 'Kim Kardashian, SKIMS creative director, fashion designer, celebrity entrepreneur, shapewear',
  openGraph: {
    title: 'Kim Kardashian | Creative Vision Behind SKIMS',
    description: 'How Kim Kardashian transformed her personal frustrations with shapewear into a $4 billion fashion empire.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kim Kardashian | Creative Vision Behind SKIMS',
    description: 'How Kim Kardashian transformed her personal frustrations with shapewear into a $4 billion fashion empire.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/clothing/skims/creative-director',
  },
};

export default function KimKardashianPage() {
  return <WikiArticle slug="clothing-skims-creative-director" />;
}
