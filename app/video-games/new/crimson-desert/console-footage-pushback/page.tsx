import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

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
  alternates: { canonical: 'https://www.objectwire.org/video-games/new/crimson-desert/console-footage-pushback' },
  openGraph: {
    title: 'Crimson Desert Dev Pushes Back on Claims of Hiding Console Footage',
    description:
      'With March 19 two weeks away, Pearl Abyss addresses growing fan frustration over the absence of PS5 and Xbox gameplay footage for Crimson Desert.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/new/crimson-desert/console-footage-pushback',
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-03-06T21:30:00Z',
    modifiedTime: '2026-03-06T21:30:00Z',
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crimson Desert Dev Responds to Console Footage Accusations',
    description:
      'Pearl Abyss pushes back after fans accuse the studio of deliberately withholding PS5 and Xbox gameplay ahead of March 19 launch.',
  },
};

export default function ConsoleFootagePushbackPage() {
  return <WikiArticle slug="/video-games/new/crimson-desert/console-footage-pushback" />;
}
