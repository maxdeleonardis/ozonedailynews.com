import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/technology/grok-xai-pentagon-classified-approval-federal-safety-warnings-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/technology/grok-pentagon-federal-safety-2026.jpg';

export const metadata: Metadata = {
  title:
    "Federal Agencies Flagged Grok's Safety Risks. The Pentagon Approved It for Classified Use Anyway.",
  description:
    "The GSA found Grok-4 failed federal safety standards. The NSA identified unique security vulnerabilities. The Biden-era CDAO rejected it. Then the",
  keywords: [
    'Grok xAI Pentagon classified approval 2026',
    'federal agencies Grok safety warnings GSA NSA',
    'Grok-4 failed federal safety standards',
    'Pentagon AI contract xAI 2026',
    'NSA Grok unique security vulnerabilities',
    'CDAO Grok rejection Biden administration',
    'Elon Musk xAI government AI classified',
    'Susie Wiles xAI White House contact',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "GSA | Grok Failed Federal Safety Standards. NSA: Unique",
    description:
      "Multiple federal agencies flagged xAI's Grok chatbot as unsafe before the Pentagon authorized it for classified use in February 2026. The WSJ reported the",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T22:00:00Z',
    modifiedTime: '2026-03-01T22:00:00Z',
    section: 'Technology',
    tags: [
      'xAI', 'Grok', 'Pentagon', 'GSA', 'NSA', 'AI Safety',
      'Federal AI', 'Classified AI', 'Elon Musk', 'National Security', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The GSA Said Grok Failed Safety Standards. The NSA Found",
    description:
      "Federal agencies documented Grok's risks for over a year before the Pentagon cleared it for classified use in February 2026. The WSJ reported it all on",
    images: [IMAGE_URL],
  },
};

export default function GrokPentagonApprovalBriefPage() {
  return <JackArticleDB slug="technology-grok-xai-pentagon-classified-approval-federal-safety-warnings-2026" />;
}
