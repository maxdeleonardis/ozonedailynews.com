import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Johannes Høsflot Klæbo - Norwegian Cross-Country Legend | Milan Cortina 2026 | Object Wire',
  description: 'Profile of Johannes Høsflot Klæbo, the Norwegian cross-country skiing legend competing as a gold medal favorite in six events while chasing history to become the winningest Winter Olympian ever.',
  keywords: ['Johannes Klæbo', 'cross-country skiing', 'Norway', 'Winter Olympics', 'Milan Cortina 2026', 'Olympic records'],
  openGraph: {
    title: 'Johannes Høsflot Klæbo - Norwegian Cross-Country Legend',
    description: 'Six-event gold favorite chasing historic Olympic record',
    type: 'article',
    publishedTime: '2026-02-12T00:00:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Johannes Høsflot Klæbo - Norwegian Cross-Country Legend',
    description: 'Six-event gold favorite chasing historic Olympic record',
  }
};

export default function JohannesKlaeboProfile() {
  return <WikiArticle slug="winter-olympics-norway-johannes-klaebo" />;
}
