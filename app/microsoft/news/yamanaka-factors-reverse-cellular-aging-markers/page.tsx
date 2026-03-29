import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/yamanaka-factors-reverse-cellular-aging-markers';

export const metadata: Metadata = {
  title: 'Yamanaka Factors Can Reverse Cellular Aging Markers in Studies | But Not Yet Safely in Whole Humans | ObjectWire',
  description:
    'Yamanaka factors OCT4 SOX2 KLF4 and c-MYC can reverse epigenetic aging in cells and mice, but no approved human rejuvenation therapy exists. Review of partial reprogramming research, safety risks, and clinical status as of 2026.',
  keywords: [
    'Yamanaka factors cellular aging',
    'OSKM partial reprogramming',
    'epigenetic rejuvenation',
    'OCT4 SOX2 KLF4 c-MYC',
    'cellular aging reversal',
    'partial reprogramming mouse studies',
    'Ocampo et al 2016',
    'Macip et al 2024 lifespan',
    'Gill et al 2022 rejuvenation',
    'Life Biosciences FDA clearance',
    'induced pluripotent stem cells',
    'anti-aging gene therapy',
    'epigenetic age reversal',
    'rejuvenation safety risks',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Yamanaka Factors Can Reverse Cellular Aging Markers | But Not Yet Safely in Whole Humans',
    description:
      'Review of Yamanaka factor research showing epigenetic rejuvenation in cells and mice, safety risks including tumorigenesis, and current human trial status.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Science Desk'],
    publishedTime: '2026-03-05T10:00:00Z',
    modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Science & Research',
    tags: ['Yamanaka Factors', 'Epigenetic Rejuvenation', 'OSKM', 'Aging Research', 'Gene Therapy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yamanaka Factors Reverse Cellular Aging | But Not Safely in Humans Yet',
    description:
      'OSKM partial reprogramming reverses aging markers in cells and mice. No approved human therapy exists as of 2026.',
  },
};

export default function YamanakaFactorsPage() {
  return <NewsArticleDB slug="microsoft-news-yamanaka-factors-reverse-cellular-aging-markers" />;
}
