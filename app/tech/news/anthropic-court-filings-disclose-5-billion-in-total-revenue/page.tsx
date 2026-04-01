import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/news/anthropic-court-filings-disclose-5-billion-in-total-revenue';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Anthropic Court Filings Disclose $5 Billion Total Revenue vs. $19 Billion Reported Run Rate | ObjectWire',
  description:
    'Court documents filed by Anthropic in its lawsuit against the U.S. Department of Defense reveal approximately $5 billion in total revenue since commercializing its AI technology in 2023 — standing in contrast to the $19 billion annualized run rate cited in investor discussions.',
  keywords: [
    'Anthropic court filing revenue disclosure',
    'Anthropic $5 billion total revenue 2023 2025',
    'Anthropic $19 billion run rate 2026',
    'Anthropic DoD blacklist lawsuit',
    'Anthropic Department of Defense federal ban',
    'Anthropic CFO Krishna Rao declaration',
    'Anthropic $61.5 billion valuation 2026',
    'AI company revenue reporting run rate vs trailing',
    'OpenAI Anthropic revenue comparison 2026',
    'generative AI market revenue 2025 Gartner',
    'Anthropic commercial Claude revenue since 2023',
    'AI revenue run rate metrics private companies',
    'Anthropic federal contractor blacklist',
    'Anthropic enterprise API revenue 2025',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'Anthropic Court Filing: $5 Billion Total Revenue Since 2023 vs. $19 Billion Run Rate',
    description:
      'CFO Krishna Rao\'s declaration in the DoD blacklisting lawsuit puts Anthropic\'s cumulative revenue since commercializing Claude at ~$5B. Industry reports had cited a $19B annualized run rate. The gap reveals just how fast the ramp was in late 2025.',
    type: 'article',
    url: 'https://www.objectwire.org/tech/news/anthropic-court-filings-disclose-5-billion-in-total-revenue',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: [
      'Anthropic',
      'AI',
      'Revenue',
      'Department of Defense',
      'Legal',
      'Technology',
      'Finance',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthropic Filed $5B Total Revenue in DoD Lawsuit. Industry Was Citing $19B Run Rate.',
    description:
      '$5B cumulative since 2023 vs. $19B annualized run rate. CFO declaration in federal lawsuit reveals the biggest public revenue data point yet for a private AI lab.',
  },
};

export default function AnthropicCourtFilingsDisclose5BillionInTotalRevenuePage() {
  return <JackArticleDB slug="tech-news-anthropic-court-filings-disclose-5-billion-in-total-revenue" />;
}
