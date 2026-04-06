import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/nvidia/news/qualcomm-nvidia-6g-coalitions-mwc-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Qualcomm and Nvidia Launch Competing 6G Coalitions at MWC 2026 in Barcelona',
  description:
    'Qualcomm announced its 6G Forward Consortium with 47 companies at Mobile World Congress 2026 in Barcelona on March 1, while Nvidia unveiled the 6G AI',
  keywords: [
    'Qualcomm 6G Forward Consortium MWC 2026',
    'Nvidia 6G AI Infrastructure Alliance',
    'MWC 2026 Barcelona 6G announcements',
    '3GPP Release 21 6G standards 2028',
    '6G commercial networks 2029',
    'Qualcomm Nvidia 6G competition',
    '6G spectrum sub-100 GHz sub-THz',
    'AI-native radio access 6G',
    'Open RAN 6G Nvidia GPU acceleration',
    '6G performance targets 1000 Gbit',
    'IMT-2030 ITU 6G framework',
    'Grace Blackwell 6G network simulation',
    'Mobile World Congress 2026 attendance 95000',
    '5G Advanced 2027 2028 transition',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'Qualcomm vs. Nvidia: Two Rival 6G Coalitions Launch at MWC 2026 on the Same Day',
    description:
      'Qualcomm formed a 47-member 6G Forward Consortium and Nvidia countered with its 6G AI Infrastructure Alliance at Mobile World Congress 2026 in Barcelona',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-02T10:00:00Z',
    modifiedTime: '2026-03-02T10:00:00Z',
    section: 'Technology',
    tags: [
      'Qualcomm',
      'Nvidia',
      '6G',
      'MWC 2026',
      'Barcelona',
      '3GPP',
      'AI',
      'Wireless',
      'Telecommunications',
      'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qualcomm and Nvidia Both Launched 6G Coalitions at MWC 2026 | Hours Apart',
    description:
      "Qualcomm's 6G Forward Consortium (47 members) and Nvidia's 6G AI Infrastructure Alliance both debuted at MWC 2026 in Barcelona on March 1, targeting the",
  },
};

export default function QualcommNvidia6GMWCPage() {
  return <NewsArticleDB slug="nvidia-news-qualcomm-nvidia-6g-coalitions-mwc-2026" />;
}
