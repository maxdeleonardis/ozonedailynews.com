import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/target-jumping-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Red Bull Target Jumping 2026 | Precision Bike Challenge',
  description:
    'Red Bull Target Jumping returns April 1, 2026 with riders competing in a scored precision bike challenge. Full event format, scoring rules, and how to',
  keywords: [
    'Red Bull Target Jumping 2026',
    'Red Bull bike challenge',
    'precision cycling event',
    'Red Bull extreme sports 2026',
    'target jumping bike competition',
    'Red Bull events April 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Red Bull Target Jumping 2026 | Precision Bike Challenge',
    description: 'Riders compete in a scored precision bike challenge at Red Bull Target Jumping, April 1, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-01T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Sports',
    tags: ['Red Bull', 'Target Jumping', 'Cycling', 'Extreme Sports'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Red Bull Target Jumping 2026 precision bike challenge' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull Target Jumping 2026 | Precision Bike Challenge',
    description: 'Riders compete in a scored precision bike challenge at Red Bull Target Jumping, April 1, 2026.',
  },
};

export default function RedbullTargetJumping2026Page() {
  return <CreatorArticleDB slug="redbull-target-jumping-2026" />;
}
