import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/tech/federal-agencies-grok-safety-concerns-pentagon-classified-approval-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/tech/grok-xai-pentagon-classified-approval-federal-safety-2026.jpg';

export const metadata: Metadata = {
  title:
    'Federal Agencies Raised Grok Safety and Reliability Concerns Before Pentagon Classified Approval, February 2026',
  description:
    "Multiple U.S. federal agencies flagged xAI's Grok chatbot as unsafe for federal deployment before the Pentagon authorized its use in classified military",
  keywords: [
    'Grok xAI Pentagon classified approval 2026',
    'GSA Grok safety concerns federal deployment',
    'NSA Grok security vulnerabilities classified review',
    'Pentagon AI contract xAI Google OpenAI Anthropic 2026',
    'Grok-4 federal safety alignment standards',
    'xAI Grok sycophantic data poisoning risk',
    'Pentagon $200 million AI contract 2026',
    'Elon Musk xAI government AI deployment',
    'CDAO Grok rejection Biden administration',
    'federal AI safety concerns Grok chatbot',
    'Susie Wiles xAI White House contact Grok',
    'Public Citizen Grok national security warning',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Federal Agencies Flagged Grok as Unsafe. The Pentagon Approved It Anyway.",
    description:
      "GSA called Grok-4 non-compliant with federal safety standards. The NSA identified unique security vulnerabilities. White House Chief of Staff Susie Wiles",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T18:00:00Z',
    modifiedTime: '2026-03-01T20:00:00Z',
    section: 'Technology',
    tags: [
      'xAI',
      'Grok',
      'Pentagon',
      'GSA',
      'NSA',
      'AI Safety',
      'Federal AI',
      'Classified AI',
      'Elon Musk',
      'National Security',
      'Technology',
      'AI Policy',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'GSA Said Grok Failed Federal Safety Standards. NSA Found Unique Vulnerabilities. Pentagon Approved It.',
    description:
      'Internal reviews from the GSA, NSA, and CDAO all flagged Grok before Pentagon classified approval in February 2026. The Wall Street Journal reported the',
    images: [IMAGE_URL],
  },
};

export default function GrokPentagonApprovalPage() {
  return <JackArticleDB slug="tech-federal-agencies-grok-safety-concerns-pentagon-classified-approval-2026" />;
}
