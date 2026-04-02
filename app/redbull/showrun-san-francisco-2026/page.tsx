import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/showrun-san-francisco-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Red Bull Showrun San Francisco 2026 | F1 Demo Run',
  description:
    'Red Bull Showrun brings Formula 1 demo cars to the streets of San Francisco on February 21, 2026. Full event details, car specs, and fan zone information.',
  keywords: [
    'Red Bull Showrun San Francisco 2026',
    'Red Bull F1 demo San Francisco',
    'Formula 1 street demo 2026',
    'Red Bull Racing Showrun',
    'F1 car San Francisco streets',
    'Red Bull Showrun events USA',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Red Bull Showrun San Francisco 2026 | F1 Demo Run',
    description: 'Formula 1-style demo runs through the streets of San Francisco, February 21, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-02-21T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Sports',
    tags: ['Red Bull', 'Showrun', 'Formula 1', 'San Francisco'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Red Bull Showrun San Francisco 2026 F1 demo run' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull Showrun San Francisco 2026 | F1 Demo Run',
    description: 'Formula 1-style demo runs through the streets of San Francisco, February 21, 2026.',
  },
};

export default function RedbullShowrunSanFrancisco2026Page() {
  return <CreatorArticleDB slug="redbull-showrun-san-francisco-2026" />;
}
