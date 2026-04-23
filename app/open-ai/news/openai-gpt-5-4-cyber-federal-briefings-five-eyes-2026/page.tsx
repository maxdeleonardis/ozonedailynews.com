import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/openai-gpt-5-4-cyber-federal-briefings-five-eyes-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'OpenAI GPT-5.4-Cyber | Federal Agency Briefings, Five Eyes Access',
  description: 'OpenAI briefed 50 federal cyber professionals in Washington and began Five Eyes outreach on GPT-5.4-Cyber, a defensive AI model that reaches broader government users than Anthropic\'s restricted Mythos.',
  keywords: [
    'OpenAI GPT-5.4-Cyber federal briefing',
    'OpenAI Five Eyes cybersecurity model',
    'GPT-5.4-Cyber federal agencies 2026',
    'OpenAI Trusted Access for Cyber program',
    'OpenAI vs Anthropic cyber AI 2026',
    'GPT-5.4-Cyber binary reverse engineering',
    'OpenAI UK AI Security Institute',
    'OpenAI US Center for AI Standards',
    'Five Eyes intelligence AI model',
    'OpenAI cyber defense government',
    'OpenAI GPT-5.4 cybersecurity variant',
    'Anthropic Mythos vs OpenAI GPT cyber',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'OpenAI GPT-5.4-Cyber | Federal Briefings, Five Eyes Outreach',
    description: 'OpenAI hosted 50 federal cyber professionals in Washington and launched Five Eyes briefings on GPT-5.4-Cyber. The model takes a broader access approach than Anthropic\'s locked-down Mythos.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennen'],
    publishedTime: '2026-04-22T18:00:00Z',
    modifiedTime: '2026-04-22T18:00:00Z',
    section: 'Tech',
    tags: ['OpenAI', 'GPT-5.4-Cyber', 'Five Eyes', 'Cybersecurity', 'Federal Government'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAI Is Briefing Federal Agencies on Its Cyber AI. 50 Showed Up in DC.',
    description: 'GPT-5.4-Cyber can reverse-engineer binaries and find vulnerabilities. OpenAI wants government defenders to have it. Five Eyes is next.',
  },
};

export default function OpenAiNewsOpenaiGpt54CyberFederalBriefingsFiveEyes2026Page() {
  return <NewsArticleDB slug="open-ai-news-openai-gpt-5-4-cyber-federal-briefings-five-eyes-2026" />;
}
