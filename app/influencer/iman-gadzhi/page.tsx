import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Iman Gadzhi - Digital Marketing Entrepreneur & Educator | OBJECTWIRE',
  description: 'Comprehensive profile of Iman Gadzhi, Russian-British entrepreneur, digital marketing educator, and founder of IAG Media and Educate. From teenage dropout to multi-millionaire business owner.',
  keywords: 'Iman Gadzhi, digital marketing, SMMA, social media marketing agency, IAG Media, Educate, entrepreneur, influencer',
  openGraph: {
    title: 'Iman Gadzhi - Digital Marketing Entrepreneur',
    description: 'From high school dropout to building a digital marketing empire. The story of Iman Gadzhi.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
  },
};

export default function ImanGadzhiPage() {
  return <WikiArticle slug="influencer-iman-gadzhi" />;
}
