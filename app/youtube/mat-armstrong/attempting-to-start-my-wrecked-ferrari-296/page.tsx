import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/youtube/mat-armstrong/attempting-to-start-my-wrecked-ferrari-296';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = '/mat-armstrong-ferrari-296-gtb.jpg';

export const metadata: Metadata = {
  title: 'Mat Armstrong Ferrari 296 | Attempting to Start the Wrecked',
  description:
    'Mat Armstrong bought a crash-damaged Ferrari 296 GTB, rebuilt it with a genuine Ferrari challenge kit, but cannot get it started. Ferrari refused to help',
  keywords: [
    'Mat Armstrong Ferrari 296',
    'Mat Armstrong wrecked Ferrari 296 GTB',
    'Mat Armstrong Ferrari start',
    'Ferrari 296 GTB crash rebuild',
    'Mat Armstrong MK2',
    'Ferrari challenge kit rebuild',
    'Mat Armstrong YouTube 2026',
    'wrecked Ferrari rebuild YouTube',
    'Ferrari refused to work on car',
    'Mat Armstrong 2.87M subscribers',
    'Mat Armstrong Ferrari email',
    'Ferrari 296 GTB repair',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Mat Armstrong | Attempting to Start My Wrecked Ferrari 296',
    description:
      'Mat Armstrong rebuilt a crash-damaged Ferrari 296 GTB using a genuine Ferrari challenge kit, but cannot get it started. Ferrari refused to touch it, so he',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire YouTube Desk'],
    publishedTime: '2026-03-31T14:00:00Z',
    modifiedTime: '2026-03-31T14:00:00Z',
    section: 'YouTube',
    tags: ['Mat Armstrong', 'Ferrari 296 GTB', 'YouTube', 'Car Rebuild', 'Supercar'],
    images: [{ url: OG_IMAGE, width: 1280, height: 720, alt: 'Mat Armstrong Ferrari 296 GTB wrecked rebuild' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mat Armstrong | Can He Start the Wrecked Ferrari 296 GTB?',
    description:
      'Ferrari refused to help after Mat Armstrong rebuilt a crash-damaged 296 GTB with a challenge kit. He emailed Ferrari directly, and they finally responded.',
  },
};

export default function YoutubeMatArmstrongAttemptingToStartMyWreckedFerrari296Page() {
  return <NewsArticleDB slug="youtube-mat-armstrong-attempting-to-start-my-wrecked-ferrari-296" />;
}
