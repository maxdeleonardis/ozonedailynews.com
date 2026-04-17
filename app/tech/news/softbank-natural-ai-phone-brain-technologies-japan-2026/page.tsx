import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/news/softbank-natural-ai-phone-brain-technologies-japan-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'SoftBank Natural AI Phone | Brain Technologies Launches April 2026',
  description: 'SoftBank launches the Natural AI Phone in Japan on April 24, built by California startup Brain Technologies. The device replaces apps with autonomous AI agents running on Android 15.',
  keywords: [
    'SoftBank Natural AI Phone',
    'Brain Technologies AI phone',
    'Natural AI Phone Japan 2026',
    'SoftBank AI smartphone April 2026',
    'Brain Technologies San Mateo',
    'post-app smartphone AI',
    'Android 15 AI agent phone',
    'SoftBank Masayoshi Son AI',
    'Natural AI generative interface',
    'AI phone no apps 2026',
    'SoftBank Nvidia AI phone',
    'Snapdragon 7s Gen 3 AI device',
    'AI agent smartphone 2026',
    'SoftBank ASI strategy',
    'generative AI smartphone interface',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'SoftBank Natural AI Phone | Brain Technologies Replaces Apps With AI Agents',
    description: 'SoftBank is launching a California-built AI phone in Japan at ¥1/month. It books restaurants, messages friends, and manages tasks without opening a single app.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-04-17T20:00:00Z',
    modifiedTime: '2026-04-17T20:00:00Z',
    section: 'Tech',
    tags: ['SoftBank', 'Brain Technologies', 'AI Phone', 'Japan'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftBank launches AI phone that kills apps — built by a California startup',
    description: '¥1/month. No app grid. Android 15 AI agent handles Gmail, Amazon, YouTube autonomously. Japan first, US next.',
  },
};

export default function TechNewsSoftbankNaturalAiPhoneBrainTechnologiesJapan2026Page() {
  return <NewsArticleDB slug="tech-news-softbank-natural-ai-phone-brain-technologies-japan-2026" />;
}
