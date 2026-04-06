import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/wings-for-life-world-run-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Wings for Life World Run 2026 | Global Charity Run',
  description:
    'Wings for Life World Run on May 10, 2026 is a global charity run funding spinal cord injury research. 100% of entry fees go to research. How the catcher',
  keywords: [
    'Wings for Life World Run 2026',
    'Red Bull charity run 2026',
    'spinal cord injury research run',
    'Wings for Life catcher car',
    'global running event May 2026',
    'Wings for Life World Run USA',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Wings for Life World Run 2026 | Global Charity Run',
    description: 'Global charity run where 100% of entry fees fund spinal cord injury research. The catcher car eliminates you. May 10, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-01T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Sports',
    tags: ['Wings for Life', 'Red Bull', 'Charity Run', 'Spinal Cord Research'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Wings for Life World Run 2026 global charity run' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wings for Life World Run 2026 | Global Charity Run',
    description: 'Global charity run where 100% of entry fees fund spinal cord injury research. May 10, 2026.',
  },
};

export default function RedbullWingsForLifeWorldRun2026Page() {
  return <CreatorArticleDB slug="redbull-wings-for-life-world-run-2026" />;
}
