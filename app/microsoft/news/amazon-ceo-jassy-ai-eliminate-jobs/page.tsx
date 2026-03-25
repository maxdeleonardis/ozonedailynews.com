import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/amazon-ceo-jassy-ai-eliminate-jobs';

export const metadata: Metadata = {
  title: 'Amazon CEO Andy Jassy States AI Will Reduce Headcount in Many Long-Standing Roles | ObjectWire',
  description: 'Amazon CEO Andy Jassy said on CNBC that AI will mean fewer humans are needed for many jobs, as Block CEO Jack Dorsey cut 4,000+ employees citing AI efficiency gains.',
  keywords: ['Amazon CEO Andy Jassy AI jobs', 'AI eliminate jobs', 'Block layoffs Jack Dorsey', 'Amazon AI workforce', 'tech layoffs 2026', 'AI job replacement', 'OpenAI Amazon partnership', 'Squawk Box AI interview'],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Amazon CEO Jassy: AI Will Reduce Headcount in Many Roles',
    description: 'Jassy says jobs that relied on human labor for decades will need fewer people. Block cuts 4,000+ employees citing AI.',
    type: 'article', url: `https://www.objectwire.org${SLUG}`, siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'], publishedTime: '2026-03-05T10:00:00Z', modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Technology & Business', tags: ['Amazon', 'Andy Jassy', 'AI', 'Jobs', 'Block', 'Jack Dorsey'],
  },
  twitter: { card: 'summary_large_image', title: 'Amazon CEO Jassy: AI Will Reduce Headcount in Many Roles', description: 'Jobs thrown at humans for decades will need fewer people, Jassy says. Block cuts 4,000+ in AI-driven layoffs.' },
};

export default function AmazonJassyAIJobsPage() {
  return <NewsArticleDB slug="microsoft-news-amazon-ceo-jassy-ai-eliminate-jobs" />;
}
