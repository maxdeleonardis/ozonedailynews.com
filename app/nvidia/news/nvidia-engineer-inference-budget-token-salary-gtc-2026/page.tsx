import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/nvidia/news/nvidia-engineer-inference-budget-token-salary-gtc-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "NVIDIA to Grant Engineers 'Inference Budgets' Worth 50% of Base Salary | ObjectWire",
  description:
    "NVIDIA CEO Jensen Huang announced at GTC 2026 that engineers will receive an annual AI token budget equivalent to roughly half their base salary, worth $100,000–$150,000 in compute credits, redefining Silicon Valley compensation.",
  keywords: [
    'NVIDIA inference budget engineer compensation GTC 2026',
    'Jensen Huang token salary GTC keynote March 2026',
    'NVIDIA engineer compute credits token allocation',
    'AI inference budget employee benefit Silicon Valley',
    'NVIDIA 50 percent base salary token budget',
    'Jensen Huang agentic AI productivity compute',
    'Silicon Valley compute compensation recruiting 2026',
    'NVIDIA engineer total compensation $450000',
    'inference tokens employee benefit IRS tax fringe',
    'NVIDIA Vera Rubin inference compute 2026',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "NVIDIA to Give Engineers AI 'Inference Budgets' Worth 50% of Base Salary",
    description:
      "Jensen Huang announced at GTC 2026 that NVIDIA engineers will receive an annual token budget worth ~50% of base pay, up to $150K in AI compute credits. The move redefines tech compensation and could force rivals to match.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T09:00:00Z',
    modifiedTime: '2026-03-18T09:00:00Z',
    section: 'Technology',
    tags: [
      'NVIDIA', 'Jensen Huang', 'GTC 2026', 'AI', 'Compensation',
      'Inference', 'Technology', 'Silicon Valley', 'Recruiting',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NVIDIA Engineers to Get AI 'Inference Budgets' Worth 50% of Base Salary | ObjectWire",
    description:
      "Huang's GTC 2026 announcement: NVIDIA engineers get $100K–$150K in annual AI compute credits on top of base salary. Total comp could hit $450K+. Silicon Valley recruiting just changed.",
  },
  other: {
    news_keywords:
      'NVIDIA inference budget, Jensen Huang token salary, AI compute compensation GTC 2026, Silicon Valley engineer benefits',
  },
};

export default function NVIDIAInferenceBudgetPage() {
  return <NewsArticleDB slug="nvidia-news-nvidia-engineer-inference-budget-token-salary-gtc-2026" />;
}
