import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/symphony-open-source-autonomous-coding-agents';
const IMAGE_URL = 'https://www.objectwire.org/open-ai.PNG';

export const metadata: Metadata = {
  title: 'OpenAI Open-Sources Symphony | An Autonomous Coding Agent',
  description: 'OpenAI released Symphony, an open-source autonomous coding agent framework built in Elixir under Apache 2.0, that monitors GitHub Issues and Linear,',
  keywords: [
    'OpenAI Symphony open source',
    'Symphony autonomous coding agent framework',
    'OpenAI Symphony Elixir BEAM',
    'autonomous coding agents 2026',
    'OpenAI Symphony Apache 2.0',
    'Implementation Run Symphony OpenAI',
    'Symphony vs Cursor Automations',
    'Harness Engineering OpenAI',
    'AI agent framework open source 2026',
    'WORKFLOW.md Symphony standard',
    'Symphony GitHub Issues Linear integration',
    'OpenAI autonomous software development',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'OpenAI Open-Sources Symphony | Autonomous Coding Agents',
    description: 'Symphony uses Elixir and the BEAM runtime to spawn hundreds of parallel coding agents triggered by GitHub Issues and Linear tasks, no prompt required.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    authors: ['Alfanasa'],
    publishedTime: '2026-03-05T22:00:00Z',
    modifiedTime: '2026-03-05T22:00:00Z',
    section: 'Technology',
    tags: ['OpenAI', 'Symphony', 'Autonomous Agents', 'Open Source', 'Developer Tools'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAI Open-Sources Symphony | AI Agents That Write, Test',
    description: 'Symphony replaces the typing phase entirely. Tasks marked Ready in GitHub Issues or Linear trigger autonomous agents that land the PR.',
  },
};

export default function SymphonyOpenAIPage() {
  return <NewsArticleDB slug="open-ai-news-symphony-open-source-autonomous-coding-agents" />;
}
