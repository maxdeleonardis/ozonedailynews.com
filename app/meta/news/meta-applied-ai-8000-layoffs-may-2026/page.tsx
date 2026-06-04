import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/meta/news/meta-applied-ai-8000-layoffs-may-2026';

export const metadata: Metadata = {
  title: 'Meta 8,000 Layoffs | Applied AI Draft and $145B Silicon Race',
  description:
    'Meta terminates 8,000 employees May 20, 2026 while drafting 1,000 engineers into its Applied AI unit. Q1 revenue hit $56.3B as capex targets $145B.',
  keywords: [
    'Meta 8000 layoffs May 2026',
    'Meta Applied AI unit 2026',
    'Maher Saba Meta',
    'Meta Superintelligence Labs',
    'Alexandr Wang Meta',
    'Meta May 20 layoffs 2026',
    'Meta engineer draft 2026',
    'Meta 50 to 1 management ratio',
    'Meta layoffs $145 billion',
    'Meta Q1 2026 revenue',
    'Meta Llama AI 2026',
    'Meta workforce reduction 2026',
    'Meta layoffs Austin Texas',
    'Meta bond sale 2026',
    'Meta 10 percent workforce cut',
    'Meta morale 2026',
    'Meta flat management structure',
    'Meta AI data center spending',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Meta 8,000 Layoffs | Applied AI Draft and $145B Silicon Race',
    description:
      'Meta terminates 8,000 employees May 20, 2026 while drafting 1,000 elite engineers into a mandatory Applied AI unit under VP Maher Saba. Record Q1 revenue',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-15T16:00:00Z',
    modifiedTime: '2026-05-15T16:00:00Z',
    section: 'Tech',
    tags: ['Meta', 'Layoffs', 'Applied AI', 'Maher Saba', 'Alexandr Wang', 'AI Pivot'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta 8,000 Layoffs May 20 | 1,000 Engineers Drafted Into',
    description:
      'Record $56.3B Q1 revenue. $145B capex target. 8,000 jobs gone. 1,000 engineers mandatory drafted. Meta rewrites the Big Tech employment contract.',
  },
};

export default function MetaAppliedAILayoffsMay2026Page() {
  return <NewsArticleDB slug="meta-news-meta-applied-ai-8000-layoffs-may-2026" />;
}
