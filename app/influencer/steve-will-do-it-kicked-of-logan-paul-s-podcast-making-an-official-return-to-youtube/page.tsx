import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'SteveWillDoIt Kicked Off Impaulsive | YouTube Return 2026',
  description: "SteveWillDoIt was removed from Logan Paul's Impaulsive podcast and announced his official return to YouTube. Full story, context, and what happened between Steve Deleonardis and Logan Paul.",
  keywords: [
    'SteveWillDoIt',
    'Steve Deleonardis',
    'SteveWillDoIt kicked off Impaulsive',
    'SteveWillDoIt Logan Paul',
    'SteveWillDoIt YouTube return',
    'Impaulsive podcast',
    'NELK Boys',
    'Logan Paul podcast',
    'SteveWillDoIt 2026',
    'creator news 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'SteveWillDoIt Kicked Off Impaulsive | YouTube Return 2026',
    description: "SteveWillDoIt was removed from Logan Paul's Impaulsive podcast. He announced his official return to YouTube. Full story and context.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-02-09T10:00:00Z',
    modifiedTime: '2026-02-09T10:00:00Z',
    tags: ['SteveWillDoIt', 'Logan Paul', 'Impaulsive', 'NELK Boys', 'YouTube', 'Creator News'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SteveWillDoIt Kicked Off Impaulsive | YouTube Return 2026',
    description: "SteveWillDoIt removed from Logan Paul's Impaulsive podcast, returning to YouTube. Full story.",
  },
};

export default function SteveWillDoItPodcastPage() {
  return <WikiArticle slug="creator-steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube" />;
}
