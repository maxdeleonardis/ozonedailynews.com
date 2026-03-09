import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Malinin Surges Into Lead in Olympic Men\'s Figure Skating | Breaking News | Object Wire',
  description: 'American figure skater Ilia Malinin delivered his strongest performance at Milan Cortina, executing two quadruple jumps and his signature backflip to surge into first place in the men\'s short program with 108.16 points.',
  keywords: ['Ilia Malinin', 'figure skating', 'Winter Olympics', 'Milano Cortina', 'quad jumps', 'backflip', 'Team USA', 'Yuma Kagiyama', 'short program'],
  openGraph: {
    title: 'Malinin Surges Into Lead in Olympic Men\'s Figure Skating',
    description: 'Ilia Malinin scores 108.16 points with two quads and signature backflip to lead men\'s short program.',
    type: 'article',
    publishedTime: '2026-02-11T19:30:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malinin Surges Into Lead in Olympic Men\'s Figure Skating',
    description: 'Ilia Malinin scores 108.16 points with two quads and signature backflip to lead men\'s short program.',
  }
};

export default function MalininLeadsFigureSkatingArticle() {
  return <WikiArticle slug="winter-olympics-usa-malinin-surges-into-lead-olympic-figure-skating" />;
}
