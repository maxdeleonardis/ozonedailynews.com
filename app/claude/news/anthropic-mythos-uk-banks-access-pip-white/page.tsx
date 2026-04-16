import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/anthropic-mythos-uk-banks-access-pip-white';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1568649704650-a6ab20e84311?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Anthropic Mythos UK Banks | Access Coming Next Week',
  description: 'Anthropic is extending Claude Mythos Preview access to UK financial institutions as early as next week, confirmed by UK head Pip White on Bloomberg Television.',
  keywords: [
    'Anthropic Mythos UK banks',
    'Claude Mythos UK access',
    'Pip White Anthropic UK',
    'Anthropic UK financial institutions',
    'Claude Mythos Bank of England',
    'Mythos cybersecurity UK',
    'Anthropic UK Ireland northern Europe',
    'Claude Mythos Preview rollout',
    'Bank of England AI briefing',
    'Anthropic Claude UK 2026',
    'Mythos AI financial sector UK',
    'Claude cybersecurity expansion',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Anthropic Extends Claude Mythos Access to UK Banks Next Week',
    description: 'UK head Pip White confirmed on Bloomberg that Mythos Preview access for British financial institutions is "in the very near term, in the next week."',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-17T15:00:00Z',
    modifiedTime: '2026-04-17T15:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'London financial district bank buildings' }],
    tags: ['Anthropic', 'Claude Mythos', 'UK Banks', 'Bank of England'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthropic Mythos hits UK banks next week',
    description: 'Pip White on Bloomberg: "in the very near term, in the next week." Bank of England briefings already underway.',
    images: [OG_IMAGE],
  },
};

export default function ClaudeNewsAnthropicMythosUkBanksAccessPipWhitePage() {
  return <NewsArticleDB slug="claude-news-anthropic-mythos-uk-banks-access-pip-white" />;
}
