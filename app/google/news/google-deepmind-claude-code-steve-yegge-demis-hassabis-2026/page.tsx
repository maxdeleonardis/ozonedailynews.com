import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/google/news/google-deepmind-claude-code-steve-yegge-demis-hassabis-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'DeepMind Uses Claude Code | Steve Yegge vs Demis Hassabis',
  description: 'Steve Yegge claims Google DeepMind uses Anthropic Claude Code while 40,000 engineers are limited to Gemini. Demis Hassabis called it "completely false."',
  keywords: [
    'Google DeepMind Claude Code',
    'Steve Yegge Google DeepMind',
    'Demis Hassabis Claude Code',
    'DeepMind uses Claude Code 2026',
    'Google engineers Claude Code',
    'Steve Yegge viral post April 2026',
    'Demis Hassabis response Yegge',
    'Google Gemini vs Claude Code',
    'Google Antigravity coding tool',
    'Google AI strike team 2026',
    'Claude Opus 4.7 agentic coding',
    'Google internal AI tools',
    'Addy Osmani Google AI',
    'Sergey Brin AI code review',
    'Google DeepMind Gemini SWE-bench',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'DeepMind Uses Claude Code | Steve Yegge vs Demis Hassabis',
    description: 'A viral post from ex-Googler Steve Yegge alleges Google DeepMind quietly runs on Claude Code. DeepMind CEO Demis Hassabis called it nonsense. Google\'s',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-21T20:00:00Z',
    modifiedTime: '2026-04-21T20:00:00Z',
    section: 'Tech',
    tags: ['Google', 'DeepMind', 'Claude Code', 'Anthropic'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steve Yegge: DeepMind is using Claude Code. Demis Hassabis: "Absolute nonsense."',
    description: 'The claim. The rebuttal. The Strike Team that proves someone is worried.',
  },
};

export default function GoogleNewsGoogleDeepmindClaudeCodeSteveYeggeDemisHassabis2026Page() {
  return <NewsArticleDB slug="google-news-google-deepmind-claude-code-steve-yegge-demis-hassabis-2026" />;
}
