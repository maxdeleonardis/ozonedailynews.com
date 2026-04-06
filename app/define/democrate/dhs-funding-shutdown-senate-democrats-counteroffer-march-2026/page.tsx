import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/define/democrate/dhs-funding-shutdown-senate-democrats-counteroffer-march-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Democrats Send DHS Funding Proposal Amid 32-Day Partial Shutdown',
  description:
    'Senate Democrats delivered their latest counteroffer to the White House on Monday night to fund the Department of Homeland Security, as the partial',
  keywords: [
    'Democrats DHS funding proposal March 2026',
    'partial government shutdown 32 days DHS',
    'Senate Democrats counteroffer White House DHS',
    'John Thune DHS funding shutdown',
    'Department of Homeland Security shutdown March 2026',
    'government shutdown DHS funding lapse February 2026',
    'Senate Democrats White House budget negotiations',
    'government shutdown 2026',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: 'Democrats Send DHS Funding Proposal Amid 32-Day Partial Shutdown',
    description:
      'Senate Democrats sent their latest counteroffer to fund the Department of Homeland Security as the partial shutdown entered its 32nd day, but Senate',
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T12:30:00Z',
    modifiedTime: '2026-03-18T12:30:00Z',
    section: 'Politics',
    tags: [
      'Democrats', 'DHS', 'Government Shutdown', 'Senate', 'John Thune',
      'Department of Homeland Security', 'Politics', 'U.S. Congress', 'White House',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Democrats Send DHS Funding Proposal Amid 32-Day Partial Shutdown',
    description:
      'Senate Democrats sent the White House a new DHS funding counteroffer on Monday, but Thune says it "didn\'t change much." The partial shutdown is now in',
  },
  other: {
    news_keywords:
      'DHS shutdown, Senate Democrats counteroffer, government shutdown March 2026, John Thune, Department of Homeland Security funding',
  },
};

export default function DHSShutdownDemocratsPage() {
  return <NewsArticleDB slug="define-democrate-dhs-funding-shutdown-senate-democrats-counteroffer-march-2026" />;
}
