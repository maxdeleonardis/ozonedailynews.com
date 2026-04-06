import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/bc-one-cypher-denver-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Red Bull BC One Cypher Denver 2026 | Breaking Battle',
  description:
    'Red Bull BC One Cypher Denver on April 3, 2026 sends top breakers to the larger BC One circuit. Event format, qualification path, and how to watch the',
  keywords: [
    'Red Bull BC One Cypher Denver 2026',
    'BC One Denver breaking battle',
    'Red Bull breakdancing 2026',
    'BC One qualification Denver',
    'breaking competition Colorado',
    'Red Bull BC One circuit 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Red Bull BC One Cypher Denver 2026 | Breaking Battle',
    description: 'Top breakers battle in Denver for a spot in the Red Bull BC One circuit, April 3, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-01T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Sports',
    tags: ['Red Bull', 'BC One', 'Breaking', 'Denver'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Red Bull BC One Cypher Denver 2026 breaking battle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull BC One Cypher Denver 2026 | Breaking Battle',
    description: 'Top breakers battle in Denver for a spot in the Red Bull BC One circuit, April 3, 2026.',
  },
};

export default function RedbullBcOneCypherDenver2026Page() {
  return <CreatorArticleDB slug="redbull-bc-one-cypher-denver-2026" />;
}
