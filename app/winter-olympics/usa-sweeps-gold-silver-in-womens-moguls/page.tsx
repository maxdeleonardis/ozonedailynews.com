import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'USA Sweeps Gold, Silver in Women\'s Moguls at Winter Olympics | Breaking News | Object Wire',
  description: 'Team USA dominated the women\'s moguls competition at the Milano Cortina Winter Olympics, sweeping the gold and silver medals in a historic performance on the Italian slopes.',
  keywords: ['Winter Olympics', 'Milano Cortina', 'womens moguls', 'Team USA', 'freestyle skiing', 'gold medal', 'silver medal', 'Olympic sweep'],
  openGraph: {
    title: 'USA Sweeps Gold, Silver in Women\'s Moguls at Winter Olympics',
    description: 'Team USA dominated the women\'s moguls competition, sweeping gold and silver at Milano Cortina 2026.',
    type: 'article',
    publishedTime: '2026-02-11T14:30:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USA Sweeps Gold, Silver in Women\'s Moguls at Winter Olympics',
    description: 'Team USA dominated the women\'s moguls competition, sweeping gold and silver at Milano Cortina 2026.',
  }
};

export default function USAMogulsSweepArticle() {
  return <WikiArticle slug="winter-olympics-usa-sweeps-gold-silver-in-womens-moguls" />;
}
