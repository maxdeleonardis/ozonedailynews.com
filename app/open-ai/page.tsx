import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/open-ai';
const PAGE_URL = `https://www.ozonenetwork.news${SLUG}`;

export const metadata: Metadata = {
  title: 'OpenAI | ChatGPT, GPT-4o, Sora & AI Platform Overview 2026',
  description: 'OpenAI is the AI research company behind ChatGPT, GPT-4o, and Sora. Full platform overview: founding history, model roadmap, safety governance, Microsoft partnership, and 2026 developments.',
  keywords: [
    'OpenAI',
    'OpenAI overview 2026',
    'ChatGPT',
    'GPT-4o',
    'GPT-5',
    'Sora AI video',
    'OpenAI history',
    'Sam Altman',
    'OpenAI Microsoft partnership',
    'OpenAI valuation 2026',
    'OpenAI API',
    'OpenAI safety',
    'o3 reasoning model',
    'o4-mini',
    'OpenAI Stargate',
    'ChatGPT weekly users',
    'OpenAI vs Google Gemini',
    'OpenAI competition',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'OpenAI | ChatGPT, GPT-4o, Sora & AI Platform Overview 2026',
    description: '$300B valuation, 400M weekly ChatGPT users, and the company reshaping AI. Full OpenAI platform profile covering history, models, safety, and 2026 developments.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    section: 'Tech',
    tags: ['OpenAI', 'ChatGPT', 'Artificial Intelligence', 'Sam Altman'],
    publishedTime: '2026-05-22T12:00:00-05:00',
    modifiedTime: '2026-05-22T12:00:00-05:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAI | $300B, 400M ChatGPT Users, Platform Profile 2026',
    description: 'Full OpenAI overview: founding, GPT models, Sora, safety governance, Microsoft deal, and 2026 platform updates.',
  },
};

export default function OpenAIPage() {
  return <ArticlePageDB slug="open-ai" />;
}
