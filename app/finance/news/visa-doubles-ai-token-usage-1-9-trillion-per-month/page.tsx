import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/news/visa-doubles-ai-token-usage-1-9-trillion-per-month';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1653389527286-604ab2dd2471?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Visa Doubles AI Token Usage to 1.9 Trillion Per Month',
  description: 'Visa consumed 1.9 trillion AI tokens in March 2026, doubling February. 89% of employees use AI tools regularly, with Anthropic Claude the most popular',
  keywords: [
    'Visa AI token usage 2026',
    'Visa 1.9 trillion tokens',
    'Visa Anthropic Claude',
    'Visa AI adoption workforce',
    'Rajat Taneja Visa AI',
    'Visa enterprise AI',
    'Visa Claude Sonnet API',
    'Visa AI power users',
    'enterprise AI token consumption',
    'Visa AI internal awards',
    'Visa ChatGPT Gemini Claude',
    'Visa AI software engineering',
    'fintech AI adoption 2026',
    'Visa AI commerce',
    'corporate AI usage statistics',
    'Visa technology president AI',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Visa Doubles AI Token Usage to 1.9 Trillion Per Month',
    description: 'Visa consumed 1.9T AI tokens in March 2026, up 2x from February. 89% of employees use AI tools, 44% are power users averaging 25+ prompts per day.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T21:00:00Z',
    modifiedTime: '2026-04-11T21:00:00Z',
    section: 'Finance',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Visa logo representing the payments giant doubling AI token usage' }],
    tags: ['Visa', 'Anthropic', 'Claude', 'Enterprise AI', 'Fintech', 'Tokens'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Doubles AI Tokens to 1.9T/Month | 89% Employee Adoption',
    description: '44% of Visa employees are AI power users. Anthropic Claude is the most popular tool. A team built and shipped a new API in 6 days using Claude Sonnet.',
    images: [OG_IMAGE],
  },
};

export default function FinanceNewsVisaDoublesAiTokenUsage19TrillionPerMonthPage() {
  return <NewsArticleDB slug="finance-news-visa-doubles-ai-token-usage-1-9-trillion-per-month" />;
}
