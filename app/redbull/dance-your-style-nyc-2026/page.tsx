import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/dance-your-style-nyc-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Red Bull Dance Your Style NYC 2026 | Freestyle Battle',
  description:
    'Red Bull Dance Your Style NYC on April 11, 2026 brings freestyle dancers to New York for crowd-judged 1-on-1 battles. Event format, dance styles, and how to attend.',
  keywords: [
    'Red Bull Dance Your Style NYC 2026',
    'Red Bull freestyle dance battle New York',
    'Dance Your Style crowd judging',
    'Red Bull dance competition 2026',
    'freestyle street dance NYC',
    'Red Bull Dance Your Style format',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Red Bull Dance Your Style NYC 2026 | Freestyle Battle',
    description: 'Freestyle dancers battle 1-on-1 in NYC with the crowd deciding the winner, April 11, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-01T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Sports',
    tags: ['Red Bull', 'Dance Your Style', 'NYC', 'Freestyle Dance'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Red Bull Dance Your Style NYC 2026 freestyle dance battle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull Dance Your Style NYC 2026 | Freestyle Battle',
    description: 'Freestyle dancers battle 1-on-1 in NYC with the crowd deciding the winner, April 11, 2026.',
  },
};

export default function RedbullDanceYourStyleNyc2026Page() {
  return <CreatorArticleDB slug="redbull-dance-your-style-nyc-2026" />;
}
