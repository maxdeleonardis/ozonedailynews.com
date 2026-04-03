import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/federal-agencies-replace-claude-gpt-41-trump-executive-directive';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Federal Agencies Evict Claude, Replace It With GPT-4.1 After Trump Executive Directive | ObjectWire',
  description:
    "The U.S. State Department's StateChat has swapped Claude Sonnet 4.5 for OpenAI GPT-4.1, the Senate has approved Microsoft Copilot, Google Gemini, and ChatGPT Enterprise for official use, while excluding Anthropic entirely. Anthropic has filed two lawsuits in response.",
  keywords: [
    'federal government replaces Claude GPT-4.1 2026',
    'Trump executive directive Anthropic supply chain risk',
    'State Department StateChat Claude GPT-4.1 switch',
    'Senate approved AI tools Copilot Gemini ChatGPT',
    'Anthropic federal ban Pete Hegseth Department of War',
    'Anthropic evicted federal agencies March 2026',
    'Anthropic supply chain risk designation lawsuit',
    'Dario Amodei federal government AI contract',
    'StateChat GPT-4.1 training cutoff regression',
    'Senate Sergeant at Arms AI memo March 2026',
    'Anthropic autonomous weapons refusal federal ban',
    'Claude federal government banned OpenAI replacement',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Federal Agencies Evict Claude, Replace With GPT-4.1 After Trump Directive',
    description:
      "The State Department's StateChat has silently swapped Claude Sonnet 4.5 for GPT-4.1. The Senate has approved Microsoft, Google, and OpenAI, but not Anthropic. Anthropic CEO Dario Amodei says the move threatens 'billions in contracts.'",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['Anthropic', 'Claude', 'OpenAI', 'GPT-4.1', 'Federal Government', 'AI Policy', 'Trump'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude is Out of the U.S. Federal Government. GPT-4.1 Is In.',
    description:
      "State Department's StateChat: Claude → GPT-4.1. Senate approves Copilot, Gemini, ChatGPT, zero mention of Anthropic. Anthropic suing the government. Full breakdown.",
  },
};

export default function FederalAgenciesEvictClaudePage() {
  return <JackArticleDB slug="claude-news-federal-agencies-replace-claude-gpt-41-trump-executive-directive" />;
}
