import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/anthropic-mythos-uk-banks-expansion';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1769411293428-b9208449b20b?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Anthropic Mythos UK Banks | Claude AI Expansion Timeline',
  description:
    'Anthropic will give UK banks access to Claude Mythos Preview as early as next week. The Bank of England is briefing insurers, banks, and exchanges on cybersecurity risks.',
  keywords: [
    'Anthropic Mythos UK',
    'Claude Mythos Preview',
    'Anthropic UK banks',
    'Bank of England AI',
    'Anthropic Pip White',
    'Claude Mythos cybersecurity',
    'Anthropic financial institutions',
    'Claude AI UK expansion',
    'Mythos model UK rollout',
    'Anthropic Bloomberg',
    'UK AI regulation banks',
    'Claude Mythos Preview banks',
    'Anthropic cybersecurity initiative',
    'Bank of England cybersecurity briefing',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Anthropic Mythos UK Banks | Claude AI Expansion Timeline',
    description:
      'Anthropic extends Claude Mythos Preview access to UK financial institutions within days. Bank of England prepares cybersecurity briefings for major banks and insurers.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire News Desk'],
    publishedTime: '2026-04-16T14:00:00Z',
    modifiedTime: '2026-04-16T14:00:00Z',
    section: 'Tech',
    tags: ['Anthropic', 'Claude Mythos', 'Bank of England', 'UK Finance', 'Cybersecurity'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthropic Mythos Expanding to UK Banks Next Week',
    description:
      'Pip White confirms Claude Mythos Preview rollout to UK financial institutions. Bank of England preparing cybersecurity briefings.',
  },
};

export default function ClaudeNewsAnthropicMythosUkBanksExpansionPage() {
  return <NewsArticleDB slug="claude-news-anthropic-mythos-uk-banks-expansion" />;
}
