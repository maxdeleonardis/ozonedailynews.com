import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/project-helix-xbox-pc-hybrid-console';

export const metadata: Metadata = {
  title: 'Project Helix | Next Xbox Runs PC & Console Games Natively',
  description: 'Microsoft Gaming CEO Asha Sharma unveiled Project Helix, a next-generation Xbox that natively runs PC and console games, powered by a custom AMD Magnus',
  keywords: [
    'Project Helix Xbox',
    'Microsoft Project Helix',
    'next Xbox console PC games',
    'Asha Sharma Xbox announcement',
    'Xbox PC hybrid console 2026',
    'Project Helix AMD Magnus chipset',
    'Xbox next generation 2026',
    'Xbox Steam integration',
    'Xbox Game Pass Project Helix',
    'Microsoft GDC 2026 gaming',
    'next Xbox runs PC games natively',
    'Xbox open ecosystem',
    'Project Helix release date',
    'Microsoft Xbox hardware 2026',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Project Helix | Next Xbox Runs PC & Console Games Natively',
    description: 'Asha Sharma confirmed Project Helix runs Xbox and PC games natively on one device, powered by AMD Magnus, with Steam access and an open ecosystem.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-03-05T14:00:00Z',
    modifiedTime: '2026-04-02T00:00:00Z',
    section: 'Tech',
    tags: ['Microsoft', 'Xbox', 'Project Helix', 'Gaming', 'GDC 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Helix | Xbox-PC Hybrid Console Confirmed by',
    description: 'AMD Magnus chipset, Steam compatibility, and native PC game support. Microsoft\'s next Xbox redefines the console.',
  },
};

export default function ProjectHelixPage() {
  return <NewsArticleDB slug="microsoft-news-project-helix-xbox-pc-hybrid-console" />;
}
