import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/youtube/logan-paul';

export const metadata: Metadata = {
  title: 'Logan Paul | YouTuber, WWE Star & Entrepreneur | ObjectWire',
  description:
    'Full profile of Logan Paul: YouTube career, Impaulsive podcast, PRIME Hydration, WWE appearances, and his record-breaking Pokémon card collection. ObjectWire coverage hub.',
  keywords: [
    'Logan Paul',
    'Logan Paul YouTube',
    'Impaulsive podcast',
    'PRIME Hydration',
    'Logan Paul WWE',
    'Logan Paul Pokemon card',
    'Pikachu Illustrator',
    'Logan Paul net worth',
    'Logan Paul influencer',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/logan-paul',
  },
  openGraph: {
    title: 'Logan Paul | YouTuber, WWE Star & Entrepreneur',
    description:
      'Complete profile of Logan Paul: from Vine star to WWE champion, PRIME co-founder, and record-breaking Pokémon card investor.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/logan-paul',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'YouTube',
    tags: ['Logan Paul', 'YouTube', 'WWE', 'PRIME', 'Impaulsive', 'Pokemon'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logan Paul | YouTuber, WWE Star & Entrepreneur | ObjectWire',
    description:
      'Full profile of Logan Paul: YouTube, PRIME Hydration, WWE, Impaulsive, and $16M Pikachu card.',
  },
};

export default function LoganPaulPage() {
  return <WikiArticle slug="youtube-logan-paul" />;
}
