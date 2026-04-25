import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/nadella-copilot-code-red-ai-gap-e7-suite';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1768006273705-760cf15058e0?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Nadella Declares Copilot Code Red to Close AI Gap',
  description: 'Microsoft CEO Satya Nadella launched an emergency initiative to overhaul Copilot, introducing the $99/month M365 E7 suite and Copilot Cowork built with',
  keywords: [
    'Microsoft Copilot code red',
    'Satya Nadella AI emergency',
    'Microsoft 365 E7 suite',
    'Copilot Cowork Anthropic',
    'Microsoft AI gap',
    'Nadella Copilot overhaul',
    'Microsoft 365 E7 pricing $99',
    'Agent 365 control plane',
    'Microsoft Frontier program',
    'BNP Paribas Microsoft analysis',
    'Stefan Slowinski Microsoft',
    'Copilot enterprise AI 2026',
    'Microsoft Azure AI capacity',
    'Microsoft vs Anthropic AI',
    'Copilot multi-step workflows',
    'Microsoft AI assistant competition 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Nadella Declares Copilot Code Red | M365 E7 at $99/Month',
    description: 'Microsoft CEO launches emergency AI initiative. M365 E7 bundles Copilot + Agent 365 at $99/user/month. Copilot Cowork, built with Anthropic, orchestrates',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T22:30:00Z',
    modifiedTime: '2026-04-11T22:30:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Microsoft building exterior with golden sunset reflections' }],
    tags: ['Microsoft', 'Satya Nadella', 'Copilot', 'Anthropic', 'M365 E7', 'AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nadella Declares Copilot Code Red | $99 E7 Suite May 1',
    description: 'Emergency AI overhaul at Microsoft. M365 E7 bundles Copilot + Agent 365. Copilot Cowork built with Anthropic. First new enterprise tier in a decade.',
    images: [OG_IMAGE],
  },
};

export default function MicrosoftNewsNadellaCopilotCodeRedAiGapE7SuitePage() {
  return <NewsArticleDB slug="microsoft-news-nadella-copilot-code-red-ai-gap-e7-suite" />;
}
