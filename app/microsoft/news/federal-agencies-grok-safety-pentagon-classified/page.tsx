import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


const SLUG = '/microsoft/news/federal-agencies-grok-safety-pentagon-classified';

export const metadata: Metadata = {
  title: 'Federal Agencies Raised Concerns About Grok Safety and',
  description: 'Multiple federal agencies flagged xAI Grok chatbot safety risks including sycophancy and data manipulation before the Pentagon approved it for classified',
  keywords: ['Grok safety risks Pentagon', 'xAI Grok classified military', 'GSA Grok safety report', 'NSA Grok vulnerability', 'Pentagon AI approval Grok', 'Elon Musk xAI government', 'Anthropic Claude federal', 'AI military deployment', 'Grok sycophantic manipulation'],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Federal Agencies Warn About Grok Safety Before Pentagon',
    description: 'GSA, NSA flagged Grok vulnerabilities; Pentagon approved it for classified use anyway in February 2026.',
    type: 'article', url: `https://www.objectwire.org${SLUG}`, siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'], publishedTime: '2026-03-05T10:00:00Z', modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Technology & Government', tags: ['Grok', 'xAI', 'Pentagon', 'AI Safety', 'Elon Musk'],
  },
  twitter: { card: 'summary_large_image', title: 'Federal Agencies Warned About Grok Safety Before Pentagon Approval', description: 'GSA flagged Grok as sycophantic and susceptible to data poisoning. Pentagon approved classified use anyway.' },
};

export default function GrokPentagonPage() {
  return <NewsArticleDB slug="microsoft-news-federal-agencies-grok-safety-pentagon-classified" />;
}
