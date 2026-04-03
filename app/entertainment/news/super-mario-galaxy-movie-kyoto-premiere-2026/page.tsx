import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/news/super-mario-galaxy-movie-kyoto-premiere-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1719900626418-1f1e41acc853?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Super Mario Galaxy Movie Opens in US on Wednesday | ObjectWire',
  description:
    'The Super Mario Galaxy Movie opens in US theaters Wednesday after its world premiere in Kyoto. Chris Pratt, Anya Taylor-Joy, Jack Black, and Donald Glover star.',
  keywords: [
    'Super Mario Galaxy Movie US release date',
    'Super Mario Galaxy Movie Wednesday',
    'Super Mario Galaxy Movie cast',
    'Chris Pratt Anya Taylor-Joy Jack Black Mario',
    'Shigeru Miyamoto Mario movie',
    'Nintendo movie 2026',
    'Super Mario Galaxy film theaters',
    'Mario movie Kyoto premiere',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Super Mario Galaxy Movie Opens in US on Wednesday | ObjectWire',
    description:
      'The Super Mario Galaxy Movie opens in US theaters Wednesday. The film debuted last Saturday at Kyoto\'s Minamiza Theater with Chris Pratt, Anya Taylor-Joy, Jack Black, Donald Glover, and Shigeru Miyamoto in attendance.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Nighttime scene outside a Japanese theater in Kyoto' }],
    publishedTime: '2026-03-30T18:00:00Z',
    modifiedTime: '2026-03-30T18:00:00Z',
    section: 'Entertainment',
    tags: ['Super Mario', 'Nintendo', 'Movie', 'Chris Pratt', 'Anya Taylor-Joy', 'Jack Black', 'Donald Glover', 'Shigeru Miyamoto'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super Mario Galaxy Movie Opens in US on Wednesday',
    description:
      'The Super Mario Galaxy Movie hits US theaters Wednesday after its Kyoto world premiere. Chris Pratt, Anya Taylor-Joy, Jack Black, and Donald Glover star.',
    images: [OG_IMAGE],
  },
};

export default function EntertainmentNewsSuperMarioGalaxyMovieKyotoPremiere2026Page() {
  return <NewsArticleDB slug="entertainment-news-super-mario-galaxy-movie-kyoto-premiere-2026" />;
}
