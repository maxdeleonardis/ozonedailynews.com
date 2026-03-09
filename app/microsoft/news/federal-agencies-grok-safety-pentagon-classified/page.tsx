import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Federal Agencies Raised Concerns About Grok Safety and Reliability Before Pentagon Classified Approval | ObjectWire',
  description: 'Multiple federal agencies flagged xAI Grok chatbot safety risks including sycophancy and data manipulation before the Pentagon approved it for classified military settings in February 2026.',
  keywords: ['Grok safety risks Pentagon', 'xAI Grok classified military', 'GSA Grok safety report', 'NSA Grok vulnerability', 'Pentagon AI approval Grok', 'Elon Musk xAI government', 'Anthropic Claude federal', 'AI military deployment', 'Grok sycophantic manipulation'],
  alternates: { canonical: 'https://www.objectwire.org/microsoft/news/federal-agencies-grok-safety-pentagon-classified' },
  openGraph: {
    title: 'Federal Agencies Warn About Grok Safety Before Pentagon Classified Approval',
    description: 'GSA, NSA flagged Grok vulnerabilities; Pentagon approved it for classified use anyway in February 2026.',
    type: 'article', url: 'https://www.objectwire.org/microsoft/news/federal-agencies-grok-safety-pentagon-classified', siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'], publishedTime: '2026-03-05T10:00:00Z', modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Technology & Government', tags: ['Grok', 'xAI', 'Pentagon', 'AI Safety', 'Elon Musk'],
  },
  twitter: { card: 'summary_large_image', title: 'Federal Agencies Warned About Grok Safety Before Pentagon Approval', description: 'GSA flagged Grok as sycophantic and susceptible to data poisoning. Pentagon approved classified use anyway.' },
};

export default function GrokPentagonPage() {
  return <WikiArticle slug="microsoft-news-federal-agencies-grok-safety-pentagon-classified" />;
}
