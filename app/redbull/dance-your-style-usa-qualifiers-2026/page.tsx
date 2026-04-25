import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/dance-your-style-usa-qualifiers-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Red Bull Dance Your Style USA Qualifiers 2026 | Full',
  description:
    'Red Bull Dance Your Style USA qualifiers run through October 2026 across U.S. cities. Crowd-judged freestyle battles feed into the national and world',
  keywords: [
    'Red Bull Dance Your Style USA 2026',
    'Dance Your Style qualifiers schedule',
    'Red Bull freestyle dance USA',
    'Dance Your Style city battles 2026',
    'Red Bull dance competition schedule',
    'Dance Your Style national final USA',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Red Bull Dance Your Style USA Qualifiers 2026 | Full',
    description: 'U.S. city battles leading to the national and world finals, running through October 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-01T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Sports',
    tags: ['Red Bull', 'Dance Your Style', 'Freestyle Dance', 'USA Qualifiers'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Red Bull Dance Your Style USA qualifiers 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull Dance Your Style USA Qualifiers 2026',
    description: 'U.S. city battles leading to the national and world finals, running through October 2026.',
  },
};

export default function RedbullDanceYourStyleUsaQualifiers2026Page() {
  return <CreatorArticleDB slug="redbull-dance-your-style-usa-qualifiers-2026" />;
}
