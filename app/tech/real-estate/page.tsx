import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'How Technology Is Reshaping Real Estate in 2026',
  description: 'From AI-powered valuations to blockchain property records and virtual tours, technology is transforming how homes are bought, sold, and managed. A deep',
  keywords: ['proptech 2026','real estate technology','AI home valuation','blockchain real estate','virtual tours','smart home technology','real estate trends','property technology'],
  alternates: { canonical: 'https://www.objectwire.org/tech/real-estate' },
  openGraph: {
    title: 'How Technology Is Reshaping Real Estate in 2026',
    description: 'From AI-powered valuations to blockchain property records and virtual tours, technology is transforming how homes are bought, sold, and managed.',
    type: 'article',
    publishedTime: '2026-03-06T15:00:00Z',
    modifiedTime: '2026-03-06T15:00:00Z',
    authors: ['Jack Wang'],
    url: 'https://www.objectwire.org/tech/real-estate',
    images: [{ url: 'https://www.objectwire.org/tech-real-estate-og.jpg', width: 1200, height: 630, alt: 'Technology reshaping real estate in 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Technology Is Reshaping Real Estate in 2026',
    description: 'AI valuations, blockchain deeds, virtual tours, the full proptech story.',
  },
};

export default function RealEstatePage() {
  return <WikiArticle slug="tech-real-estate" />;
}
