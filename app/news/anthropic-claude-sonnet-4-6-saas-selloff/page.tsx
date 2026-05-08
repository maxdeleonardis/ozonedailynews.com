import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const revalidate = 3600;

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


const SLUG = '/news/anthropic-claude-sonnet-4-6-saas-selloff';

export const metadata: Metadata = {
  title: 'Anthropic Claude Sonnet 4.6 Triggers Fresh SaaS Stock',
  description:
    'Anthropic released Claude Sonnet 4.6 on February 17, 2026, its most capable mid-tier model yet. The announcement triggered declines in Oracle, Salesforce,',
  keywords: [
    'Anthropic Claude Sonnet 4.6',
    'Claude 4.6',
    'Anthropic AI',
    'SaaS stocks selloff',
    'AI impact on software stocks',
    'Oracle stock decline',
    'Salesforce AI competition',
    'Intuit stock',
    'Adobe stock',
    'Nifty IT index',
    'AI automation SaaS',
    'enterprise software AI disruption',
    'iShares Tech Software ETF',
    'Claude AI model 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Anthropic Claude Sonnet 4.6 Sells Fresh Wave of SaaS Falloff',
    description:
      'Anthropic\'s Claude Sonnet 4.6 dropped Feb 17, 2026. Oracle fell 3.4%, Intuit 5.2%, Salesforce 2.7%, Adobe 1.4%. India\'s Nifty IT dropped 2.5% the next',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'],
    publishedTime: '2026-02-18T10:00:00Z',
    modifiedTime: '2026-02-18T10:00:00Z',
    section: 'Technology',
    tags: ['Anthropic', 'Claude', 'AI', 'SaaS', 'Stocks', 'Oracle', 'Salesforce', 'Intuit', 'Adobe'],
    images: [
      {
        url: 'https://www.objectwire.org/news/calude%20sonnet%204.6.png',
        width: 1200,
        height: 630,
        alt: 'Anthropic Claude Sonnet 4.6',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthropic Claude Sonnet 4.6 Triggers SaaS Selloff | Oracle',
    description:
      'Anthropic\'s most capable mid-tier model yet hit on Feb 17. The market reaction was immediate. Full breakdown on ObjectWire.',
    images: ['https://www.objectwire.org/news/calude%20sonnet%204.6.png'],
  },
};

export default function ClaudeSonnet46SaasPage() {
  return <NewsArticleDB slug="news-anthropic-claude-sonnet-4-6-saas-selloff" />;
}
