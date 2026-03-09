import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Musk Confirms xAI Layoffs Amid Company Reorganization | Breaking News | Object Wire',
  description: 'Elon Musk confirms layoffs at xAI as the artificial intelligence company undergoes restructuring. Details on the reorganization, affected departments, and strategic direction.',
  keywords: ['xAI', 'Elon Musk', 'layoffs', 'artificial intelligence', 'AI', 'tech layoffs', 'company reorganization', 'restructuring'],
  openGraph: {
    title: 'Musk Confirms xAI Layoffs Amid Company Reorganization',
    description: 'Elon Musk confirms layoffs at xAI as the AI company undergoes restructuring',
    type: 'article',
    publishedTime: '2026-02-11T21:00:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musk Confirms xAI Layoffs Amid Company Reorganization',
    description: 'Elon Musk confirms layoffs at xAI as the AI company undergoes restructuring',
  }
};

export default function xAILayoffsArticle() {
  return <WikiArticle slug="news-layoffs-xai-musk-confirms-layoffs-reorganization" />;
}
