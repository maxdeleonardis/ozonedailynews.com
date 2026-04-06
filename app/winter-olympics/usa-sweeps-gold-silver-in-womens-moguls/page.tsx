import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'USA Sweeps Gold, Silver in Women\'s Moguls at Winter Olympics | Breaking News | Object Wire',
  description: 'Team USA dominated the women\'s moguls competition at the Milano Cortina Winter Olympics, sweeping the gold and silver medals in a historic performance on',
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
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa-sweeps-gold-silver-in-womens-moguls',
  },
};

export default function USAMogulsSweepArticle() {
  return <NewsArticleDB slug="winter-olympics-usa-sweeps-gold-silver-in-womens-moguls" />;
}
