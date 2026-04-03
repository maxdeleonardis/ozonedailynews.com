import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Mikaela Shiffrin - Olympic Alpine Skier Profile | Milan Cortina 2026 | Object Wire',
  description: 'Complete profile of Mikaela Shiffrin, the most decorated alpine skier in World Cup history, competing at Milan Cortina 2026. Career highlights, achievements, and Olympic pursuit.',
  keywords: ['Mikaela Shiffrin', 'alpine skiing', 'Winter Olympics', 'Milan Cortina 2026', 'Team USA', 'slalom', 'giant slalom', 'World Cup'],
  openGraph: {
    title: 'Mikaela Shiffrin - Olympic Alpine Skier Profile',
    description: 'Profile of the most decorated alpine skier in World Cup history competing at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-11T22:00:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikaela Shiffrin - Olympic Alpine Skier Profile',
    description: 'Profile of the most decorated alpine skier in World Cup history',
  }
};

export default function MikaelaShiffrinProfile() {
  return <NewsArticleDB slug="winter-olympics-mikaela-shiffrin" />;
}
