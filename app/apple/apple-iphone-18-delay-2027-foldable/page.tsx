import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Apple Delays iPhone 18 to 2027, Prioritizing Foldable Launch',
  description: 'Apple postpones standard iPhone 18 until early 2027, shifting focus to premium models and its first-ever foldable iPhone launching in H2 2026, amid memory',
  keywords: [
    'Apple iPhone 18',
    'iPhone delay',
    'foldable iPhone',
    'Apple foldable',
    'iPhone 2027',
    'Apple supply chain',
    'memory chip costs',
    'Tim Cook',
    'iPhone 18 postponed',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/apple-iphone-18-delay-2027-foldable',
  },
  openGraph: {
    type: 'article',
    title: 'Apple Delays iPhone 18 to 2027, Prioritizing Foldable Launch',
    description: 'Apple postpones standard iPhone 18 to focus on premium models and first foldable iPhone in 2026.',
    publishedTime: '2026-01-30T14:00:00Z',
    section: 'Technology',
    tags: ['Apple', 'iPhone', 'Foldable', 'Technology', 'Supply Chain'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple Delays iPhone 18 to 2027, Prioritizing Foldable Launch',
    description: 'Apple shifts strategy to launch premium foldable iPhone in 2026.',
  },
};

export default function AppleIPhone18DelayPage() {
  return <WikiArticle slug="apple-apple-iphone-18-delay-2027-foldable" />;
}
