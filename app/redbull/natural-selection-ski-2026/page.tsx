import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/natural-selection-ski-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Natural Selection Ski 2026 | Big-Mountain Skiing Alaska',
  description:
    'Natural Selection Ski sends elite skiers to big-mountain terrain in Alaska on April 14, 2026. Format, athletes, and why it is the hardest freeride ski event in the world.',
  keywords: [
    'Natural Selection Ski 2026',
    'Red Bull Natural Selection skiing',
    'big mountain skiing Alaska 2026',
    'freeride ski competition 2026',
    'Natural Selection Tour skiing',
    'Alaska backcountry ski event',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Natural Selection Ski 2026 | Big-Mountain Skiing Alaska',
    description: 'Elite skiers tackle big-mountain terrain in Alaska at Natural Selection, April 14, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-01T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Sports',
    tags: ['Natural Selection', 'Skiing', 'Alaska', 'Freeride'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Natural Selection Ski 2026 big-mountain skiing Alaska' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natural Selection Ski 2026 | Big-Mountain Skiing Alaska',
    description: 'Elite skiers tackle big-mountain terrain in Alaska at Natural Selection, April 14, 2026.',
  },
};

export default function RedbullNaturalSelectionSki2026Page() {
  return <CreatorArticleDB slug="redbull-natural-selection-ski-2026" />;
}
