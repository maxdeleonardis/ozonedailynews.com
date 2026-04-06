import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Gymshark | British Fitness Apparel Brand | OBJECTWIRE',
  description: 'The complete history of Gymshark, the fitness apparel brand founded by teenager Ben Francis. From garage startup to billion-dollar unicorn through',
  keywords: 'Gymshark, Ben Francis, fitness apparel, activewear, influencer marketing, athleisure, British brand',
  openGraph: {
    title: 'Gymshark | From Garage Startup to Fitness Empire',
    description: 'How 19-year-old Ben Francis built Gymshark into a billion-dollar fitness brand through social media and influencer partnerships.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
    authors: ['OBJECTWIRE Fashion Desk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gymshark | From Garage Startup to Fitness Empire',
    description: 'How 19-year-old Ben Francis built Gymshark into a billion-dollar fitness brand through social media and influencer partnerships.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/clothing/gymshark',
  },
};

export default function GymsharkPage() {
  return <WikiArticle slug="clothing-gymshark" />;
}
