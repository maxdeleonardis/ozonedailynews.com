import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Vance Freezes $259M in Minnesota Medicaid Funding in Trump\'s "War on Fraud" | ObjectWire',
  description:
    'Vice President JD Vance announced a temporary deferral of $259.5 million in federal Medicaid matching funds owed to Minnesota for Q4 2025, citing unsupported claims and immigration status questions — the first concrete action in Trump\'s declared war on welfare fraud.',
  keywords: [
    'JD Vance Minnesota Medicaid',
    'Medicaid fraud Minnesota',
    'CMS deferral $259 million',
    'Minnesota Medical Assistance fraud',
    'Trump war on fraud Medicaid',
    'Feeding Our Future Minnesota fraud',
    'personal care assistance fraud Minnesota',
    'Tim Walz Medicaid response',
    'CMS Section 1903 deferral',
    'Minnesota Department of Human Services',
    'federal Medicaid matching funds withheld',
    'home community based services fraud',
    'non-emergency medical transportation fraud',
    'Minnesota Medicaid 2026',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/investigations/news/vance-minesoda-medicaid',
  },
  openGraph: {
    title: 'Vance Freezes $259M in Minnesota Medicaid: Trump\'s First "War on Fraud" Shot',
    description:
      'CMS placed $259.5 million in quarterly Medicaid funds on hold for Minnesota — flagging $243.8M in unsupported claims and $15.4M tied to unverified immigration status. The first deferral of this scale since 2017.',
    type: 'article',
    url: 'https://www.objectwire.org/investigations/news/vance-minesoda-medicaid',
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-02-25T12:00:00Z',
    modifiedTime: '2026-02-25T12:00:00Z',
    section: 'Investigations',
    tags: [
      'JD Vance', 'Medicaid', 'Minnesota', 'Fraud', 'CMS', 'Trump',
      'Feeding Our Future', 'Tim Walz', 'Healthcare', 'Federal Funding',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vance Freezes $259M in Minnesota Medicaid — First Shot in Trump\'s Fraud War',
    description:
      '$243.8M in unsupported claims, $15.4M tied to unverified immigration status. CMS hits Minnesota with its largest quarterly deferral since 2017.',
  },
};

export default function VanceMinesodaMedicaidPage() {
  return <WikiArticle slug="investigations-news-vance-minesoda-medicaid" />;
}
