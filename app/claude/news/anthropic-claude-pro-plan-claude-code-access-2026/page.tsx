import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/anthropic-claude-pro-plan-claude-code-access-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Claude Pro $20 Plan | Claude Code Access Scare Explained',
  description: 'Anthropic briefly removed Claude Code from the $20 Pro plan on April 21, 2026, then reversed it. Here is what actually happened, why it happened, and what',
  keywords: [
    'Claude Pro plan Claude Code',
    'Anthropic Claude Code removed',
    'Claude Pro $20 plan 2026',
    'Claude Max plan pricing',
    'Claude Code Pro plan 2026',
    'Anthropic pricing change April 2026',
    'Claude Code access $20',
    'Anthropic Claude Max $100',
    'Amol Avasare Anthropic 2% test',
    'Claude Code token cost',
    'Anthropic Pro plan Claude Code removed',
    'Claude Max 5x 20x pricing',
    'OpenClaw ban Anthropic April 2026',
    'Claude Code agentic AI plan',
    'Anthropic AI subscription pricing',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Claude Pro $20 Plan | The Claude Code Removal Scare',
    description: 'Anthropic\'s pricing docs briefly showed Claude Code removed from the $20 Pro plan. Then they reversed it. The "2% test" is a warning shot developers',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfasa'],
    publishedTime: '2026-04-21T18:00:00Z',
    modifiedTime: '2026-04-21T18:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Anthropic Claude AI pricing plans subscription tiers 2026' }],
    tags: ['Anthropic', 'Claude', 'Claude Code', 'AI Pricing'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthropic tested removing Claude Code from the $20 Pro',
    description: 'The "2% new user test" that accidentally went public. What it means for every Claude Pro subscriber.',
    images: [OG_IMAGE],
  },
};

export default function ClaudeNewsAnthropicClaudeProPlanClaudeCodeAccess2026Page() {
  return <NewsArticleDB slug="claude-news-anthropic-claude-pro-plan-claude-code-access-2026" />;
}
