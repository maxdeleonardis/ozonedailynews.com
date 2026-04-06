import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/chariot-race-missouri-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Red Bull Chariot Race Missouri 2026 | Homemade Race Event',
  description:
    'Red Bull Chariot Race hits Missouri April 11, 2026. Teams build homemade chariots and race them in a chaotic, crowd-judged competition. Full event details',
  keywords: [
    'Red Bull Chariot Race Missouri 2026',
    'Red Bull soapbox race Missouri',
    'homemade chariot race Red Bull',
    'Red Bull events Missouri April 2026',
    'Red Bull chariot race rules',
    'Red Bull comedy sports event',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Red Bull Chariot Race Missouri 2026 | Homemade Race Event',
    description: 'Teams race homemade chariots in Missouri at Red Bull Chariot Race, April 11, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-01T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Sports',
    tags: ['Red Bull', 'Chariot Race', 'Missouri', 'Extreme Sports'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Red Bull Chariot Race Missouri 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull Chariot Race Missouri 2026 | Homemade Race Event',
    description: 'Teams race homemade chariots in Missouri at Red Bull Chariot Race, April 11, 2026.',
  },
};

export default function RedbullChariotRaceMissouri2026Page() {
  return <CreatorArticleDB slug="redbull-chariot-race-missouri-2026" />;
}
