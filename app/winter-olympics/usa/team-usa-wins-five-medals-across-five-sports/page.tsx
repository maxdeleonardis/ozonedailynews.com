import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Team USA Wins Five Medals Across Five Sports at Milan Cortina | Breaking News | Object Wire',
  description: 'Team USA made history at the Milan Cortina Winter Olympics, winning five medals across five different sports in a single day for the first time ever. The',
  keywords: ['Team USA', 'Winter Olympics', 'Milano Cortina', 'five medals', 'curling', 'mixed doubles', 'cross-country skiing', 'Cory Thiesse', 'Korey Dropkin', 'Sweden'],
  openGraph: {
    title: 'Team USA Wins Five Medals Across Five Sports at Milan Cortina',
    description: 'Historic day sees Team USA win five medals across five different sports for the first time ever at Winter Olympics.',
    type: 'article',
    publishedTime: '2026-02-11T16:30:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team USA Wins Five Medals Across Five Sports at Milan Cortina',
    description: 'Historic day sees Team USA win five medals across five different sports for the first time ever at Winter Olympics.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/team-usa-wins-five-medals-across-five-sports',
  },
};

export default function TeamUSAFiveMedalsArticle() {
  return <NewsArticleDB slug="winter-olympics-usa-team-usa-wins-five-medals-across-five-sports" />;
}
