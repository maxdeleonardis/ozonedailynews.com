import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/perplexity/news/perplexity-personal-computer-ai-agent-developer-suite-ask-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Perplexity Unveils "Personal Computer" AI Agent & Developer Suite at Ask 2026 | ObjectWire',
  description:
    'At its inaugural Ask 2026 developer conference in San Francisco, Perplexity AI revealed "Personal Computer", a 24/7 autonomous AI agent anchored to a Mac mini, alongside four new developer APIs: Agent, Sandbox, Search, and Embeddings.',
  keywords: [
    'Perplexity Personal Computer AI agent 2026',
    'Perplexity Ask 2026 developer conference',
    'Perplexity Agent API Sandbox API',
    'Perplexity Computer Mac mini 24/7 autonomous',
    'Aravind Srinivas AI operating system',
    'Perplexity Finance Bloomberg FactSet competitor',
    'Perplexity Enterprise SOC 2 Snowflake Databricks',
    'Perplexity Embeddings API semantic search',
    'Perplexity Max $200 per month',
    'AI computer agentic infrastructure 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Perplexity Unveils "Personal Computer" AI Agent & Developer Suite at Ask 2026',
    description:
      'A Mac mini becomes a 24/7 autonomous AI worker. Perplexity released four developer APIs and took direct aim at Bloomberg and FactSet with Perplexity Finance.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['Perplexity', 'AI Agent', 'Developer Tools', 'Personal Computer', 'Ask 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perplexity Turns Your Mac mini Into a 24/7 AI Worker',
    description:
      'Ask 2026: Perplexity "Personal Computer" runs autonomously on local hardware, issuing objectives on your behalf while you sleep. Plus 4 new APIs.',
  },
};

export default function PerplexityPersonalComputerPage() {
  return <NewsArticleDB slug="tech-perplexity-news-perplexity-personal-computer-ai-agent-developer-suite-ask-2026" />;
}
