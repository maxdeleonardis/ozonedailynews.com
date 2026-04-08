import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/openai-safety-fellowship-new-yorker-probe';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'OpenAI Launches Safety Fellowship After New Yorker Probe',
  description: 'OpenAI announced a Safety Fellowship funding external researchers for independent AI safety work from September 2026 to February 2027, hours after a New Yorker investigation questioned its safety practices.',
  keywords: [
    'OpenAI Safety Fellowship',
    'OpenAI safety program 2026',
    'OpenAI New Yorker investigation',
    'OpenAI AI alignment research',
    'OpenAI external researchers safety',
    'OpenAI Constellation Berkeley',
    'AI safety fellowship 2026',
    'OpenAI safety evaluation',
    'OpenAI agentic oversight',
    'OpenAI scalable mitigation',
    'AI alignment funding 2026',
    'OpenAI safety criticism',
    'OpenAI researcher stipend',
    'OpenAI safety reputation',
    'AI safety independent research',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'OpenAI Launches Safety Fellowship After New Yorker Probe',
    description: 'OpenAI opens applications for a funded AI safety fellowship, hours after a damning New Yorker report questioned the company\'s internal safety culture.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-04-08T14:00:00Z',
    modifiedTime: '2026-04-08T14:00:00Z',
    section: 'Tech',
    tags: ['OpenAI', 'AI Safety', 'New Yorker', 'AI Alignment', 'Sam Altman'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAI Safety Fellowship Launches Hours After New Yorker Probe',
    description: 'External researchers get stipends, API credits, and Berkeley workspace, but no access to internal systems. Applications open until May 3.',
  },
};

export default function OpenAiNewsOpenaiSafetyFellowshipNewYorkerProbePage() {
  return <NewsArticleDB slug="open-ai-news-openai-safety-fellowship-new-yorker-probe" />;
}
