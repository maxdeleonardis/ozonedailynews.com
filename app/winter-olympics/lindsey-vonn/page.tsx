import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Lindsey Vonn - Career History and Legacy | ObjectWire',
  description: 'Complete biography of Lindsey Vonn, the most successful female alpine ski racer in history. Olympic champion, 82 World Cup victories, and inspiring comeback story.',
  openGraph: {
    title: 'Lindsey Vonn - Career History and Legacy',
    description: 'Complete biography of Lindsey Vonn, the most successful female alpine ski racer in history.',
    type: 'profile',
  },
};

export default function LindseyVonnPage() {
  return <WikiArticle slug="winter-olympics-lindsey-vonn" />;
}
