import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/sam-altman-apology-tumbler-ridge-shooting-chatgpt-law-enforcement-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Sam Altman Apology | OpenAI Failed to Alert Police Before Tumbler Ridge Shooting',
  description:
    'Sam Altman apologized to Tumbler Ridge, BC after OpenAI failed to report Jesse Van Rootselaar\'s ChatGPT account to police eight months before she killed eight people in a February 2026 mass shooting.',
  keywords: [
    'Sam Altman apology Tumbler Ridge',
    'OpenAI ChatGPT Tumbler Ridge shooting',
    'Jesse Van Rootselaar ChatGPT account',
    'OpenAI failed to alert police mass shooting',
    'OpenAI negligence lawsuit Maya Gebala',
    'ChatGPT mass shooting Canada 2026',
    'OpenAI law enforcement referral policy',
    'Sam Altman letter Tumbler Ridge BC',
    'David Eby OpenAI AI safety',
    'OpenAI Florida State University shooting',
    'Phoenix Ikner ChatGPT Florida shooting',
    'James Uthmeier OpenAI criminal investigation',
    'OpenAI abuse detection mass shooting',
    'ChatGPT banned account shooter',
    'OpenAI safety protocols law enforcement 2026',
    'Tumbler Ridge Secondary School shooting OpenAI',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Sam Altman Apology | OpenAI Banned Shooter\'s ChatGPT Account 8 Months Before Attack',
    description:
      'OpenAI flagged and banned Van Rootselaar\'s account in June 2025 but did not alert police. Altman\'s apology letter came as a B.C. negligence suit and a Florida criminal investigation mount simultaneously.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T14:00:00Z',
    modifiedTime: '2026-04-26T14:00:00Z',
    section: 'Tech',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Federal courthouse representing the legal proceedings and negligence lawsuit against OpenAI following the Tumbler Ridge mass shooting',
      },
    ],
    tags: ['Sam Altman', 'OpenAI', 'Tumbler Ridge', 'ChatGPT', 'Mass Shooting', 'AI Safety'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAI Banned the Shooter\'s Account 8 Months Early and Didn\'t Call Police. Now Altman Is Apologizing.',
    description:
      'Jesse Van Rootselaar\'s ChatGPT account was flagged in June 2025. 12 employees reportedly urged a police referral. Leadership declined. Eight people died in February. Altman sent an apology letter Thursday.',
    images: [OG_IMAGE],
  },
};

export default function OpenAiNewsSamAltmanApologyTumblerRidgeShootingChatgptLawEnforcement2026Page() {
  return <NewsArticleDB slug="open-ai-news-sam-altman-apology-tumbler-ridge-shooting-chatgpt-law-enforcement-2026" />;
}
