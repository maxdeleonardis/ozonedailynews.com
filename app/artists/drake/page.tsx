import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/artists/drake';

export const metadata: Metadata = {
  title: 'Drake | Most Streamed Artist of All Time | ObjectWire',
  description:
    'Complete profile of Drake (Aubrey Drake Graham), the most streamed artist of all time. Discography, awards, streaming records, OVO Sound, and latest news.',
  keywords: [
    'Drake',
    'Aubrey Drake Graham',
    'OVO Sound',
    'most streamed artist',
    'Toronto rapper',
    'Gods Plan',
    'Certified Lover Boy',
    'hip-hop',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'profile',
    title: 'Drake | Most Streamed Artist of All Time | ObjectWire',
    description:
      'Profile of Drake, the most streamed artist of all time with 85M+ monthly listeners. Full discography, records, business ventures, and OVO Sound.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drake | ObjectWire',
    description:
      'The most streamed artist of all time. 320+ Billboard Hot 100 entries, 34 Billboard Music Awards, 5 Grammys.',
  },
};

export default function DrakePage() {
  return <CreatorArticleDB slug="artists/drake" />;
}
