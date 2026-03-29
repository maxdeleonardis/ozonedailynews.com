import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'KSI (JJ Olatunji) | YouTuber, Boxer, Musician & PRIME Co-Founder | ObjectWire',
  description:
    'Complete profile of KSI (JJ Olatunji): Sidemen founding member, professional boxer with a 6-0-1 record, multi-platinum recording artist, and co-founder of PRIME Hydration. ObjectWire coverage hub.',
  keywords: [
    'KSI',
    'JJ Olatunji',
    'Sidemen',
    'KSI boxing record',
    'PRIME Hydration',
    'KSI music',
    'UK YouTuber',
    'KSI rapper',
    'KSI Logan Paul',
    'KSI net worth',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/ksi',
  },
  openGraph: {
    title: 'KSI (JJ Olatunji) | YouTuber, Boxer, Musician & PRIME Co-Founder',
    description:
      'Full profile of KSI: from FIFA videos to professional boxing, chart-topping music, and co-founding PRIME Hydration with Logan Paul.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/sidemen/ksi',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'YouTube',
    tags: ['KSI', 'Sidemen', 'PRIME', 'Boxing', 'Music'],
    images: [
      {
        url: 'https://www.objectwire.org/sidemen/ksi-talking-head.gif',
        width: 800,
        height: 600,
        alt: 'KSI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KSI (JJ Olatunji) | ObjectWire',
    description: 'Full profile of KSI: YouTube, boxing, music, PRIME Hydration, and Sidemen.',
    images: ['https://www.objectwire.org/sidemen/ksi-talking-head.gif'],
  },
};

export default function KSIPage() {
  return <WikiArticle slug="youtube-sidemen-ksi" />;
}
