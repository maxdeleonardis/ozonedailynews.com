import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/netflix/news/enola-holmes-3-netflix-july-2026-release-date';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Enola Holmes 3 Netflix Release Date | July 1, 2026 Confirmed',
  description:
    'Netflix confirmed Enola Holmes 3 premieres July 1, 2026. Millie Bobby Brown returns alongside Henry Cavill and a new Dr. Watson played by Himesh Patel. Filming took place in Malta.',
  keywords: [
    'Enola Holmes 3 release date',
    'Enola Holmes 3 Netflix 2026',
    'Enola Holmes 3 July 2026',
    'Millie Bobby Brown Netflix 2026',
    'Enola Holmes 3 cast',
    'Himesh Patel Dr Watson Enola Holmes',
    'Enola Holmes 3 Malta filming',
    'Henry Cavill Sherlock Holmes 2026',
    'Louis Partridge Tewkesbury Enola Holmes 3',
    'Enola Holmes 3 wedding veil',
    'Harry Bradbeer Enola Holmes director',
    'Netflix movies July 2026',
    'Enola Holmes 3 trailer',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Enola Holmes 3 | Netflix July 1 Release Date, Cast & Malta Setting',
    description:
      'Netflix sets July 1, 2026 for Enola Holmes 3. Millie Bobby Brown, Henry Cavill, and Himesh Patel as a new Dr. Watson head to Malta for the biggest case yet.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Conan Boyle'],
    publishedTime: '2026-04-28T20:00:00Z',
    modifiedTime: '2026-04-28T20:00:00Z',
    section: 'Entertainment',
    tags: ['Enola Holmes', 'Netflix', 'Millie Bobby Brown', 'Henry Cavill', 'Himesh Patel'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Film set with atmospheric lighting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enola Holmes 3 Confirmed for July 1, 2026 on Netflix',
    description:
      'Millie Bobby Brown returns. Himesh Patel joins as Dr. Watson. Malta replaces Victorian London. July 1 on Netflix.',
    images: [OG_IMAGE],
  },
};

export default function NetflixNewsEnolaHolmes3NetflixJuly2026ReleaseDatePage() {
  return <NewsArticleDB slug="netflix-news-enola-holmes-3-netflix-july-2026-release-date" />;
}
