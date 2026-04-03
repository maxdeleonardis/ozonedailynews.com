import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/run-the-racks-okc-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Red Bull Run the Racks OKC 2026 | Street Basketball Event',
  description:
    'Red Bull Run the Racks hits Oklahoma City April 12, 2026 with a street basketball competition built around speed, accuracy, and pickup game energy. Full format and details.',
  keywords: [
    'Red Bull Run the Racks OKC 2026',
    'Red Bull basketball Oklahoma City',
    'Run the Racks street hoops',
    'Red Bull street basketball event',
    'OKC basketball competition 2026',
    'Red Bull Run the Racks format',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Red Bull Run the Racks OKC 2026 | Street Basketball Event',
    description: 'Street basketball competition in Oklahoma City with a pickup game vibe, April 12, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-01T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Sports',
    tags: ['Red Bull', 'Run the Racks', 'Basketball', 'Oklahoma City'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Red Bull Run the Racks OKC 2026 street basketball' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull Run the Racks OKC 2026 | Street Basketball Event',
    description: 'Street basketball competition in Oklahoma City with a pickup game vibe, April 12, 2026.',
  },
};

export default function RedbullRunTheRacksOkc2026Page() {
  return <CreatorArticleDB slug="redbull-run-the-racks-okc-2026" />;
}
