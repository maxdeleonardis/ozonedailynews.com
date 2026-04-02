import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/basement-usa-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Red Bull Basement USA 2026 | Student Tech Innovation',
  description:
    'Red Bull Basement USA on May 8, 2026 gives student founders a pitch stage, mentorship, and a shot at the global final. Format, eligibility, and how to apply.',
  keywords: [
    'Red Bull Basement USA 2026',
    'Red Bull student innovation program',
    'Red Bull Basement tech pitch',
    'student founder competition 2026',
    'Red Bull Basement global final',
    'Red Bull startup mentorship',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Red Bull Basement USA 2026 | Student Tech Innovation',
    description: 'Student founders pitch tech ideas for mentorship and a shot at the global final, May 8, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-01T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Tech',
    tags: ['Red Bull', 'Basement', 'Student Innovation', 'Startups'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Red Bull Basement USA 2026 student tech innovation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull Basement USA 2026 | Student Tech Innovation',
    description: 'Student founders pitch tech ideas for mentorship and a shot at the global final, May 8, 2026.',
  },
};

export default function RedbullBasementUsa2026Page() {
  return <CreatorArticleDB slug="redbull-basement-usa-2026" />;
}
