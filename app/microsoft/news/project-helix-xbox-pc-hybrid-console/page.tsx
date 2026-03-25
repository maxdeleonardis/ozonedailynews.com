import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/project-helix-xbox-pc-hybrid-console';

export const metadata: Metadata = {
  title: 'Microsoft Unveils Project Helix: Next Xbox Will Run PC and Console Games Natively | ObjectWire',
  description: 'Microsoft Gaming CEO Asha Sharma announced Project Helix, a next-generation Xbox console that runs PC and console games natively, positioning it as the most open gaming platform in history.',
  keywords: [
    'Microsoft Project Helix',
    'Project Helix Xbox',
    'next Xbox console PC games',
    'Asha Sharma Xbox',
    'Xbox PC hybrid console',
    'Project Helix specs',
    'Xbox next generation 2026',
    'Microsoft Gaming Project Helix',
    'Xbox Steam integration',
    'Project Helix AMD Magnus',
    'next Xbox runs PC games',
    'Microsoft GDC 2026',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Microsoft Unveils Project Helix: Next Xbox Runs PC and Console Games',
    description: 'Microsoft Gaming CEO Asha Sharma confirmed the next Xbox will natively play PC and console titles, bridging the console-PC divide.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-03-05T14:00:00Z',
    modifiedTime: '2026-03-05T14:00:00Z',
    section: 'Technology',
    tags: ['Microsoft', 'Xbox', 'Project Helix', 'Gaming', 'GDC 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Unveils Project Helix: Xbox-PC Hybrid Console',
    description: 'CEO Asha Sharma says Project Helix will lead in performance and play Xbox and PC games natively.',
  },
};

export default function ProjectHelixPage() {
  return <NewsArticleDB slug="microsoft-news-project-helix-xbox-pc-hybrid-console" />;
}
