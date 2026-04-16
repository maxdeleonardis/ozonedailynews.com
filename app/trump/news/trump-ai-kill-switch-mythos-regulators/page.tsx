import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/news/trump-ai-kill-switch-mythos-regulators';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1742413628280-8bfae633391b?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Trump AI Kill Switch | Mythos Model Alarms Global Regulators',
  description:
    'Trump backs AI kill switch as Anthropic Mythos triggers emergency meetings at Treasury, the Fed, Bank of England, and regulators across three continents. Full breakdown.',
  keywords: [
    'Trump AI kill switch',
    'Anthropic Mythos regulators',
    'Claude Mythos cybersecurity',
    'Trump AI banking',
    'Scott Bessent Mythos',
    'Jerome Powell AI risk',
    'Bank of England Mythos',
    'UK AI Safety Institute Mythos',
    'Mythos cyber offence',
    'Trump artificial intelligence 2026',
    'AI kill switch banking',
    'Mythos financial stability',
    'Anthropic Mythos Wall Street',
    'Andrew Bailey AI',
    'Goldman Sachs Citigroup AI risk',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Trump Backs AI Kill Switch | Claude Mythos Alarms Global Regulators',
    description:
      'Treasury, the Fed, Bank of England, and the EU scramble after Anthropic Mythos raises unprecedented cyber risk concerns. Trump supports government safeguards including a kill switch.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire News Desk'],
    publishedTime: '2026-04-16T20:00:00Z',
    modifiedTime: '2026-04-16T20:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Washington government AI regulation' }],
    tags: ['Trump', 'Anthropic', 'Claude Mythos', 'AI Regulation', 'Bank of England'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Backs AI Kill Switch as Mythos Alarms Regulators Worldwide',
    description:
      'Bessent, Powell, and bank CEOs met April 8. UK calls Mythos "substantially more capable at cyber offence than any model we have assessed."',
    images: [OG_IMAGE],
  },
};

export default function TrumpNewsTrumpAiKillSwitchMythosRegulatorsPage() {
  return <NewsArticleDB slug="trump-news-trump-ai-kill-switch-mythos-regulators" />;
}
