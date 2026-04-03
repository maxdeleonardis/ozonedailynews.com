import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Eileen Gu - Chinese Freestyle Skiing Star Profile | Milan Cortina 2026 | Object Wire',
  description: 'Profile of Eileen Gu, the freestyle skiing sensation who won slopestyle silver on February 9, 2026, her fourth career Olympic medal, with halfpipe and big air events still to come.',
  keywords: ['Eileen Gu', 'freestyle skiing', 'slopestyle', 'China', 'Winter Olympics', 'Milan Cortina 2026', 'halfpipe', 'big air'],
  openGraph: {
    title: 'Eileen Gu - Chinese Freestyle Skiing Star Profile',
    description: 'Slopestyle silver medalist pursuing more gold at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-11T23:30:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eileen Gu - Chinese Freestyle Skiing Star Profile',
    description: 'Slopestyle silver medalist pursuing more gold at Milan Cortina 2026',
  }
};

export default function EileenGuProfile() {
  return <NewsArticleDB slug="winter-olympics-china-eileen-gu" />;
}
