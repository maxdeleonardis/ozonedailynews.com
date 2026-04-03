import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Breezy Johnson - Team USA Downhill Gold Profile | Milan Cortina 2026 | Object Wire',
  description: 'Profile of Breezy Johnson, who secured Team USA\'s first gold medal of Milan Cortina 2026 by winning the women\'s downhill on February 8, marking a breakthrough Olympic victory.',
  keywords: ['Breezy Johnson', 'alpine skiing', 'downhill', 'Team USA', 'Winter Olympics', 'Milan Cortina 2026', 'gold medal'],
  openGraph: {
    title: 'Breezy Johnson - Team USA Downhill Gold Profile',
    description: 'First U.S. gold of Milan Cortina 2026 in women\'s downhill',
    type: 'article',
    publishedTime: '2026-02-11T23:00:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breezy Johnson - Team USA Downhill Gold Profile',
    description: 'First U.S. gold of Milan Cortina 2026 in women\'s downhill',
  }
};

export default function BreezyJohnsonProfile() {
  return <NewsArticleDB slug="winter-olympics-usa-breezy-johnson" />;
}
