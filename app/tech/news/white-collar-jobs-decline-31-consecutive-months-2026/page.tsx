import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/news/white-collar-jobs-decline-31-consecutive-months-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80';

export const metadata: Metadata = {
  title: 'White-Collar Jobs | 31 Months of Contraction, No Recession',
  description:
    'White-collar payrolls have contracted for 31 consecutive months, the longest streak outside a formal recession in modern history, per Glassdoor economist',
  keywords: [
    'white collar jobs decline 2026',
    'white collar payroll contraction 31 months',
    'Aaron Terrazas Glassdoor economist white collar',
    'white collar recession 2026',
    'corporate job market contraction 2026',
    'professional white collar unemployment 2026',
    'tech layoffs white collar jobs 2026',
    'AI automation white collar job loss',
    'knowledge worker layoffs 2026',
    'white collar vs blue collar jobs 2026',
    'BLS payroll data white collar 2026',
    'corporate hiring freeze 2026',
    'finance jobs decline 2026',
    'management consulting layoffs 2026',
    'white collar job market outlook 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'White-Collar Jobs | 31 Consecutive Months of Contraction',
    description:
      'The longest white-collar payroll contraction streak outside a formal recession. Aaron Terrazas data, AI automation drivers, and what the headline jobs',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfasa'],
    publishedTime: '2026-04-21T12:00:00Z',
    modifiedTime: '2026-04-21T12:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Empty corporate office with rows of vacant desks' }],
    tags: ['White Collar', 'Layoffs', 'Labor Market', 'AI Automation', 'Tech'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White-Collar Jobs Have Contracted for 31 Straight Months',
    description:
      'No recession required. The longest sustained white-collar payroll decline in modern history, and the headline numbers are hiding it.',
    images: [OG_IMAGE],
  },
};

export default function TechNewsWhiteCollarJobsDecline31ConsecutiveMonths2026Page() {
  return <JackArticleDB slug="tech-news-white-collar-jobs-decline-31-consecutive-months-2026" />;
}
