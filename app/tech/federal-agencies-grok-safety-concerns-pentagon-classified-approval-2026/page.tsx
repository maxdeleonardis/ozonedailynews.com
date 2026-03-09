import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title:
    'Federal Agencies Raised Grok Safety and Reliability Concerns Before Pentagon Classified Approval — February 2026 | ObjectWire',
  description:
    "Multiple U.S. federal agencies flagged xAI's Grok chatbot as unsafe for federal deployment before the Pentagon authorized its use in classified military environments in February 2026. GSA, NSA, and White House officials documented concerns about sycophancy, data poisoning, and unique security vulnerabilities — then the Pentagon approved it anyway.",
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
    canonical: 'https://www.objectwire.org/tech/federal-agencies-grok-safety-concerns-pentagon-classified-approval-2026',
  },
  openGraph: {
    title:
      "Federal Agencies Flagged Grok as Unsafe. The Pentagon Approved It Anyway.",
    description:
      "GSA called Grok-4 non-compliant with federal safety standards. The NSA identified unique security vulnerabilities. White House Chief of Staff Susie Wiles called a senior xAI executive. Then the Pentagon authorized Grok for classified use under a $200M contract — February 2026.",
    type: 'article',
    url: 'https://www.objectwire.org/tech/federal-agencies-grok-safety-concerns-pentagon-classified-approval-2026',
    siteName: 'ObjectWire',
    images: ['https://www.objectwire.org/tech/grok-xai-pentagon-classified-approval-federal-safety-2026.jpg'],
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
      'Internal reviews from the GSA, NSA, and CDAO all flagged Grok before Pentagon classified approval in February 2026. The Wall Street Journal reported the full sequence on February 27, 2026.',
    images: ['https://www.objectwire.org/tech/grok-xai-pentagon-classified-approval-federal-safety-2026.jpg'],
  },
};

export default function GrokPentagonApprovalPage() {
  return <WikiArticle slug="tech-federal-agencies-grok-safety-concerns-pentagon-classified-approval-2026" />;
}
