import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/california/california-tech-layoffs-2026-ai-restructuring-26000-job-cuts';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "California Tech Sector Announces 26,000+ Job Cuts in Early 2026 Amid AI Restructuring | ObjectWire",
  description:
    "California-based tech companies announced 26,283 job cuts year-to-date through February 2026, according to Challenger, Gray & Christmas, with Amazon, Meta, Workday, Block, and C3.ai all contributing to the wave of AI-driven workforce restructuring.",
  keywords: [
    'California tech layoffs 2026',
    'California 26283 job cuts February 2026',
    'Amazon Meta Workday Block C3.ai layoffs California',
    'AI restructuring tech layoffs California 2026',
    'Challenger Gray Christmas California job cuts 2026',
    'California WARN notices tech layoffs 2026',
    'Bay Area tech layoffs early 2026',
    'Block 4000 layoffs fintech San Francisco 2026',
    'Workday 400 layoffs Pleasanton 2026',
    'Silicon Valley job cuts AI automation 2026',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "California Tech Sector Announces 26,000+ Job Cuts in Early 2026 Amid AI Restructuring",
    description:
      "26,283 tech job cuts announced in California through February 2026. Amazon, Meta, Block, Workday, and C3.ai all contributed, with 20.4% of global tracked cuts directly linked to AI adoption.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T15:00:00Z',
    modifiedTime: '2026-03-18T15:00:00Z',
    section: 'Technology',
    tags: [
      'California', 'Tech Layoffs', 'AI', 'Amazon', 'Meta', 'Block',
      'Workday', 'C3.ai', 'Silicon Valley', 'Technology', 'Jobs',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "26,000+ California Tech Jobs Cut in Early 2026 | AI Is the Common Thread | ObjectWire",
    description:
      "Amazon, Meta, Block, Workday, and C3.ai all contributed to 26,283 job cuts across California through February 2026. U.S. tech announcements are up 51% year-over-year.",
  },
  other: {
    news_keywords:
      'California tech layoffs 2026, AI restructuring job cuts, Amazon Meta Block Workday layoffs, Silicon Valley layoffs early 2026',
  },
};

export default function CaliforniaTechLayoffs2026Page() {
  return <NewsArticleDB slug="california-california-tech-layoffs-2026-ai-restructuring-26000-job-cuts" />;
}
