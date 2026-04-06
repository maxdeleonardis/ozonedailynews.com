import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/bio-hacking/life-biosciences-fda-clearance-er-100-epigenetic-reprogramming-optic-neuropathy-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/bio-hacking/life-biosciences-er100-fda-clearance.jpg';

export const metadata: Metadata = {
  title:
    'Life Biosciences FDA Clearance: ER-100 Epigenetic Reprogramming Trial for Glaucoma & NAION, January 2026',
  description:
    "The FDA cleared Life Biosciences' ER-100 IND application on January 28, 2026, the first human trial of partial epigenetic reprogramming using OSK Yamanaka",
  keywords: [
    'Life Biosciences ER-100 FDA clearance 2026',
    'epigenetic reprogramming clinical trial human',
    'OSK Yamanaka factors retinal ganglion cells',
    'partial epigenetic reprogramming AAV2 gene therapy',
    'glaucoma epigenetic therapy IND clearance',
    'NAION treatment gene therapy 2026',
    'NCT07290244 ER-100 phase 1 trial',
    'Life Biosciences IND application FDA',
    'Yamanaka OCT4 SOX2 KLF4 optic neuropathy',
    'cellular rejuvenation retinal FDA first human',
    'epigenetic age reversal clinical trial clearance',
    'AAV gene therapy retinal ganglion cell reprogramming',
    'partial reprogramming without pluripotency glaucoma',
    'bio-hacking longevity clinical trial 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'FDA Clears First Human Trial of Partial Epigenetic Reprogramming, Life Biosciences ER-100',
    description:
      "On January 28, 2026, the FDA cleared Life Biosciences' ER-100 IND, a Phase 1 trial of AAV2-delivered OSK Yamanaka factors for retinal rejuvenation in",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-01-28T12:00:00Z',
    modifiedTime: '2026-03-01T09:00:00Z',
    section: 'Bio-Hacking & Longevity',
    tags: [
      'Life Biosciences',
      'ER-100',
      'FDA',
      'Epigenetic Reprogramming',
      'Gene Therapy',
      'Glaucoma',
      'NAION',
      'Yamanaka Factors',
      'AAV2',
      'Clinical Trial',
      'Longevity',
      'Bio-Hacking',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'FDA Clears ER-100: The First Human Trial of Partial Epigenetic Reprogramming',
    description:
      "Life Biosciences' ER-100, an AAV2 vector delivering OSK Yamanaka factors to retinal ganglion cells, received FDA IND clearance January 28, 2026. Phase 1",
    images: [IMAGE_URL],
  },
};

export default function LifeBiosciencesER100Page() {
  return <JackArticleDB slug="bio-hacking-life-biosciences-fda-clearance-er-100-epigenetic-reprogramming-optic-neuropathy-2026" />;
}
