import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/altman-government-oversight-pentagon-deal';

export const metadata: Metadata = {
  title: 'Sam Altman Calls for Government Oversight of AI After',
  description: 'OpenAI CEO Sam Altman stated the U.S. government should hold more authority over private AI companies, days after signing a classified DoD contract and',
  keywords: [
    'Sam Altman government oversight AI',
    'OpenAI Pentagon deal 2026',
    'OpenAI DoD classified contract',
    'Anthropic blacklisted federal',
    'OpenAI $110 billion funding round',
    'OpenAI $840 billion valuation',
    'CancelChatGPT',
    'Anthropic DoD guardrails',
    'AI military use 2026',
    'Sam Altman AI regulation',
    'OpenAI defense contract',
    'Dario Amodei safety guardrails',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Altman Calls for Government AI Oversight After Pentagon Deal',
    description: 'OpenAI CEO says government should hold more authority over AI companies, days after signing DoD classified contract and closing $110B round.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-03-05T16:00:00Z',
    modifiedTime: '2026-03-05T16:00:00Z',
    section: 'Technology',
    tags: ['OpenAI', 'Sam Altman', 'Pentagon', 'AI Regulation', 'Anthropic'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altman Calls for Government AI Oversight After Pentagon Deal',
    description: 'OpenAI signs DoD classified contract, closes $110B round, then the CEO asks for more regulation.',
  },
};

export default function AltmanGovernmentOversightPage() {
  return <NewsArticleDB slug="open-ai-altman-government-oversight-pentagon-deal" />;
}
