import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/youtube/news/omnibus-project-ken-jennings-john-roderick-suspended-ai-moderation';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'YouTube Suspends "The Omnibus Project" for 90 Days After AI Flags 2019 Antisemitism Debunking Episode | ObjectWire',
  description:
    "YouTube's AI hate speech filter issued a three-month suspension to Ken Jennings and John Roderick's Omnibus Project podcast — targeting a 2019 episode that debunked The Protocols of the Elders of Zion. The automated appeals system rejected their appeal in minutes.",
  keywords: [
    'YouTube suspends Omnibus Project podcast',
    'Ken Jennings John Roderick YouTube ban 2026',
    'YouTube AI moderation false positive',
    'Protocols of the Elders of Zion debunking YouTube strike',
    'YouTube contextual blindness AI moderation',
    'YouTube three strikes policy podcast',
    'automated content moderation error educational content',
    'YouTube hate speech filter false flag',
    'Omnibus Project suspension June 2026',
    'AI moderation satire educational content problem',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'YouTube AI Flags Antisemitism Debunking as Hate Speech — Suspends "The Omnibus Project" 90 Days',
    description:
      "Ken Jennings and John Roderick's podcast is suspended until June 6, 2026 after YouTube's AI flagged a 2019 episode debunking The Protocols of the Elders of Zion. Automated appeal rejected in minutes.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['YouTube', 'Ken Jennings', 'John Roderick', 'Omnibus Project', 'AI Moderation', 'Content Moderation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube AI Flagged a Podcast Episode Debunking Antisemitism as Hate Speech',
    description:
      "The Omnibus Project is suspended until June 6. YouTube's AI hit a 2019 debunking episode with a strike for \"promoting violence against protected groups.\" The automated appeal was rejected in minutes.",
  },
};

export default function OmnibusProjectSuspensionPage() {
  return <NewsArticleDB slug="youtube-news-omnibus-project-ken-jennings-john-roderick-suspended-ai-moderation" />;
}
