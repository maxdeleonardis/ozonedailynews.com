import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'France Wins Biathlon Men\'s Relay Gold in Dramatic Comeback at Milano Cortina 2026 | ObjectWire',
  description: 'France stormed from nearly a minute behind to win men\'s biathlon relay gold at Milano Cortina 2026. Emilien Perrot\'s anchor leg powered the comeback over Norway and Sweden in one of the most dramatic races of the Games.',
  keywords: [
    'France biathlon relay gold', 'Emilien Perrot', 'biathlon Milano Cortina 2026',
    'men\'s biathlon relay', 'Winter Olympics 2026', 'France medal record',
    'biathlon dramatic comeback', 'Norway silver biathlon', 'Sweden biathlon bronze',
  ],
  openGraph: {
    title: 'France Storms Back from a Minute Down to Win Biathlon Relay Gold at Milano Cortina 2026',
    description: 'Emilien Perrot anchors a dramatic French comeback from nearly a minute behind Norway to claim men\'s relay gold — a historic moment for French Winter Olympics history.',
    type: 'article',
    publishedTime: '2026-02-17T13:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/france/biathlon-relay-gold-perrot-2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'France Wins Biathlon Relay Gold in Stunning Comeback | Milano Cortina 2026',
    description: 'Perrot anchors one of the most dramatic relay finishes in Winter Olympic history to bring France its biathlon gold.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/france/biathlon-relay-gold-perrot-2026',
  },
};

export default function FranceBiathlonRelayGoldPage() {
  return <WikiArticle slug="winter-olympics-france-biathlon-relay-gold-perrot-2026" />;
}
