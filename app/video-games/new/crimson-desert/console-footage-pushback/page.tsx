import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically â€” content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/new/crimson-desert/console-footage-pushback';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Crimson Desert Dev Pushes Back on Claims of Hiding Console Footage | ObjectWire',
  description:
    'Pearl Abyss responds to fan accusations that the studio is deliberately hiding PS5 and Xbox Series X|S footage of Crimson Desert ahead of its March 19, 2026 launch.',
  keywords: [
    'Crimson Desert console footage',
    'Crimson Desert PS5 gameplay',
    'Crimson Desert Xbox footage',
    'Pearl Abyss Crimson Desert controversy',
    'Crimson Desert March 19 launch',
    'Crimson Desert console performance',
    'Crimson Desert PC vs console',
    'Pearl Abyss response',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Crimson Desert Dev Pushes Back on Claims of Hiding Console Footage',
    description:
      'With March 19 two weeks away, Pearl Abyss addresses growing fan frustration over the absence of PS5 and Xbox gameplay footage for Crimson Desert.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-01T00:00:00Z',
    modifiedTime: '2026-03-01T00:00:00Z',
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crimson Desert Dev Responds to Console Footage Accusations',
    description:
      'Pearl Abyss pushes back after fans accuse the studio of deliberately withholding PS5 and Xbox gameplay ahead of March 19 launch.',
  },
};

export default function CrimsonDesertConsoleFootagePage() {
  return <NewsArticleDB slug="video-games-new-crimson-desert-console-footage-pushback" />;
}