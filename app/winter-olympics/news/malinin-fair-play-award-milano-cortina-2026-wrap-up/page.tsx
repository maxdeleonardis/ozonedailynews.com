import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/winter-olympics/news/malinin-fair-play-award-milano-cortina-2026-wrap-up';

export const metadata: Metadata = {
  title: 'Malinin Wins Milano Cortina 2026 Fair Play Award After',
  description: 'American figure skater Ilia Malinin received the Milano Cortina 2026 Fair Play Award for congratulating surprise gold medalist Mikhail Shaidorov after',
  keywords: [
    'Ilia Malinin Fair Play Award 2026',
    'Milano Cortina 2026 Fair Play Award',
    'Malinin 8th place Olympics',
    'Mikhail Shaidorov Kazakhstan gold',
    'Milano Cortina 2026 Winter Olympics recap',
    '2026 Winter Olympics wrap up',
    'Malinin Quad God Olympics',
    'Kazakhstan first figure skating gold',
    'Milano Cortina 2026 results',
    'Winter Olympics 2026 highlights',
    'IOC Fair Play Award history',
    'Eugenio Monti Fair Play',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Malinin Wins Fair Play Award After Heartbreaking Olympic',
    description: 'The Quad God fell from 1st to 8th, then embraced the surprise gold medalist. The IOC honored him with the Milano Cortina 2026 Fair Play Award.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-03-05T20:00:00Z',
    modifiedTime: '2026-03-05T20:00:00Z',
    section: 'Sports',
    tags: ['Winter Olympics', 'Ilia Malinin', 'Fair Play Award', 'Figure Skating', 'Milano Cortina 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malinin Wins Milano Cortina 2026 Fair Play Award',
    description: 'Fell from 1st to 8th. Embraced the winner. Won the award that matters beyond medals.',
  },
};

export default function MalininFairPlayPage() {
  return <NewsArticleDB slug="winter-olympics-news-malinin-fair-play-award-milano-cortina-2026-wrap-up" />;
}
