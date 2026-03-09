import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Life Biosciences Receives FDA Clearance for First Human Trial of Partial Epigenetic Reprogramming Therapy ER-100 | ObjectWire',
  description:
    'The FDA cleared Life Biosciences IND for ER-100, an AAV-delivered OSK gene therapy for partial epigenetic reprogramming targeting glaucoma and NAION. First human trial of cellular rejuvenation.',
  keywords: [
    'Life Biosciences FDA clearance',
    'ER-100 gene therapy',
    'partial epigenetic reprogramming',
    'OSK Yamanaka factors',
    'glaucoma gene therapy',
    'NAION treatment',
    'retinal ganglion cell rejuvenation',
    'cellular rejuvenation human trial',
    'AAV2 OSK gene therapy',
    'optic neuropathy clinical trial',
    'Phase 1 epigenetic reprogramming',
    'Life Biosciences IND approval',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/microsoft/news/life-biosciences-fda-clearance-epigenetic-reprogramming-er-100',
  },
  openGraph: {
    title: 'Life Biosciences Receives FDA Clearance for First Human Trial of ER-100 Epigenetic Reprogramming',
    description:
      'FDA clears first human trial of partial epigenetic reprogramming. ER-100 delivers OSK Yamanaka factors via AAV to treat glaucoma and NAION.',
    type: 'article',
    url: 'https://www.objectwire.org/microsoft/news/life-biosciences-fda-clearance-epigenetic-reprogramming-er-100',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Science Desk'],
    publishedTime: '2026-03-05T10:00:00Z',
    modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Science & Biotech',
    tags: ['Life Biosciences', 'ER-100', 'FDA', 'Gene Therapy', 'Epigenetic Reprogramming', 'Glaucoma'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FDA Clears First Human Trial of Epigenetic Reprogramming Therapy ER-100',
    description: 'Life Biosciences receives IND clearance for ER-100, delivering OSK Yamanaka factors to treat optic neuropathies.',
  },
};

export default function LifeBiosciencesFDAPage() {
  return <WikiArticle slug="microsoft-news-life-biosciences-fda-clearance-epigenetic-reprogramming-er-100" />;
}
