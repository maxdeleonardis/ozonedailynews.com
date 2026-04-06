import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Disney\'s Incoming CEO Floats Premiering Films in Fortnite | Breaking News | Object Wire',
  description: 'Josh D\'Amaro, set to become Disney\'s next CEO in March, outlined ambitious plans to premiere new Disney films inside Fortnite, expanding the Epic Games',
  keywords: ['Disney', 'Josh D\'Amaro', 'Fortnite', 'Epic Games', 'film premieres', 'metaverse', 'Disney CEO', 'streaming', 'virtual experiences'],
  openGraph: {
    title: 'Disney\'s Incoming CEO Floats Premiering Films in Fortnite',
    description: 'Josh D\'Amaro plans to premiere Disney films in Fortnite, expanding partnership with Epic Games beyond character skins.',
    type: 'article',
    publishedTime: '2026-02-11T20:00:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disney\'s Incoming CEO Floats Premiering Films in Fortnite',
    description: 'Josh D\'Amaro plans to premiere Disney films in Fortnite, expanding partnership with Epic Games beyond character skins.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/disney/news/incoming-ceo-floats-premiering-films-in-fortnite',
  },
};

export default function DisneyFortniteFilmPremiereArticle() {
  return <NewsArticleDB slug="disney-news-incoming-ceo-floats-premiering-films-in-fortnite" />;
}
