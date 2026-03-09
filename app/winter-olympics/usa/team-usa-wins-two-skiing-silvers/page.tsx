import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Team USA Wins Two Skiing Silvers at Milano Cortina Olympics | Breaking News | Object Wire',
  description: 'American skiers delivered back-to-back podium finishes at Milano Cortina 2026. Alex Hall earned silver in men\'s freestyle slopestyle and Ben Ogden captured silver in cross-country sprint classic, ending a 50-year medal drought.',
  keywords: ['Team USA', 'Winter Olympics', 'Milano Cortina', 'Alex Hall', 'Ben Ogden', 'freestyle slopestyle', 'cross-country skiing', 'silver medals', '50-year drought'],
  openGraph: {
    title: 'Team USA Wins Two Skiing Silvers at Milano Cortina Olympics',
    description: 'Alex Hall and Ben Ogden deliver back-to-back silver medals for Team USA, with Ogden ending 50-year cross-country drought.',
    type: 'article',
    publishedTime: '2026-02-11T18:00:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team USA Wins Two Skiing Silvers at Milano Cortina Olympics',
    description: 'Alex Hall and Ben Ogden deliver back-to-back silver medals for Team USA, with Ogden ending 50-year cross-country drought.',
  }
};

export default function TeamUSATwoSkiingSilversArticle() {
  return <WikiArticle slug="winter-olympics-usa-team-usa-wins-two-skiing-silvers" />;
}
