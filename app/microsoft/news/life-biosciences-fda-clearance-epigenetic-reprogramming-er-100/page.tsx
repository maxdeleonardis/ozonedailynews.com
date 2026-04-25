import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/life-biosciences-fda-clearance-epigenetic-reprogramming-er-100';
const OG_IMAGE = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'ER-100 FDA Clearance | First Epigenetic Reprogramming Human',
  description:
    'ER-100 receives FDA IND clearance January 28, 2026, the first human trial of partial epigenetic reprogramming using AAV2-delivered OSK Yamanaka factors',
  keywords: [
    'ER-100 FDA IND clearance 2026',
    'Life Biosciences epigenetic reprogramming trial',
    'partial epigenetic reprogramming human clinical trial',
    'OSK Yamanaka factors retinal ganglion cells',
    'AAV2 gene therapy glaucoma 2026',
    'NAION gene therapy treatment clinical trial',
    'NCT07290244 Phase 1 epigenetic trial',
    'epigenetic age reversal FDA clearance',
    'OCT4 SOX2 KLF4 retinal rejuvenation',
    'cellular rejuvenation optic nerve human trial',
    'doxycycline controlled gene expression AAV',
    'retinal ganglion cell epigenetic therapy',
    'Life Biosciences IND application ER-100',
    'partial reprogramming without pluripotency',
    'optic neuropathy regenerative medicine 2026',
    'glaucoma epigenetic gene therapy Phase 1',
    'intravitreal AAV2 OSK injection trial',
    'first human epigenetic reprogramming FDA',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'ER-100 FDA Clearance | First Human Epigenetic Reprogramming',
    description:
      'Life Biosciences ER-100 cleared for Phase 1 human trial, AAV2-delivered OSK Yamanaka factors targeting retinal ganglion cell rejuvenation in glaucoma and',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Science Desk'],
    publishedTime: '2026-01-28T12:00:00Z',
    modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Science',
    tags: [
      'Life Biosciences',
      'ER-100',
      'FDA',
      'Epigenetic Reprogramming',
      'Gene Therapy',
      'Glaucoma',
      'NAION',
      'Yamanaka Factors',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FDA Clears First Human Trial of Epigenetic Reprogramming',
    description:
      'Life Biosciences ER-100: AAV2 vector delivering OSK Yamanaka factors to retinal ganglion cells. Phase 1 in glaucoma and NAION, Q1 2026. First-ever human',
  },
};

export default function MicrosoftNewsLifeBiosciencesFdaClearanceEpigeneticReprogrammingEr100Page() {
  return <NewsArticleDB slug="microsoft-news-life-biosciences-fda-clearance-epigenetic-reprogramming-er-100" />;
}
