import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Domen Prevc Wins Large Hill Gold - Slovenia\'s Flying Family Soars at Olympics | ObjectWire',
  description: 'Domen Prevc captures ski jumping large hill gold at Milan Cortina 2026. The world record holder and Four Hills champion leads Slovenia\'s famous flying family to Olympic glory.',
  keywords: ['Domen Prevc', 'ski jumping', 'large hill gold', 'Winter Olympics 2026', 'Milan Cortina', 'Slovenia', 'world record', 'Four Hills Tournament', 'Prevc family'],
  openGraph: {
    title: 'Domen Prevc Wins Large Hill Gold - Slovenia\'s Flying Family Soars',
    description: 'World record holder Domen Prevc captures ski jumping gold at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-14T22:00:00Z',
    authors: ['ObjectWire Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domen Prevc - Ski Jumping Olympic Gold',
    description: 'Slovenia\'s world record holder wins large hill at Milan Cortina 2026',
  }
};

export default function DomenPrevcProfile() {
  return <WikiArticle slug="winter-olympics-slovenia-domen-prevc" />;
}
