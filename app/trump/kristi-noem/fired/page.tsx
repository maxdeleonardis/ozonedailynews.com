import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Kristi Noem Fired: Trump Removes DHS Secretary Amid $120M Horse Ad Scandal | ObjectWire',
  description:
    'President Trump has fired Kristi Noem as U.S. Secretary of Homeland Security. The removal follows a growing $120 million contract scandal tied to the now-infamous "Kristi Noem on a Horse" campaign commercial, which drew bipartisan outrage over taxpayer spending.',
  keywords: [
    'Kristi Noem fired',
    'Kristi Noem dismissed',
    'Kristi Noem horse commercial',
    'Kristi Noem $120 million ad',
    'Trump fires DHS Secretary',
    'Kristi Noem horse ad scandal',
    'Kristi Noem removed from office',
    'DHS Secretary fired 2026',
    'Kristi Noem contract scandal',
    'Trump cabinet shake-up',
    'Kristi Noem horse ad taxpayer money',
    'Homeland Security Secretary replaced',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/trump/kristi-noem/fired',
  },
  openGraph: {
    title: 'Kristi Noem Fired: Trump Removes DHS Secretary Amid $120M Horse Ad Scandal',
    description:
      'Trump has removed Kristi Noem from DHS Secretary. The final straw: a $120 million campaign commercial featuring Noem on a horse, paid with government contract funds.',
    type: 'article',
    url: 'https://www.objectwire.org/trump/kristi-noem/fired',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-03-07T12:00:00Z',
    modifiedTime: '2026-03-07T12:00:00Z',
    section: 'Politics',
    tags: [
      'Kristi Noem',
      'Trump',
      'DHS',
      'Fired',
      'Horse Ad',
      'Scandal',
      '$120 Million',
      'Homeland Security',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kristi Noem Fired from Trump Admin | $120M Horse Ad Scandal Was the Breaking Point',
    description:
      'Trump removes Kristi Noem as DHS Secretary. The viral "Kristi Noem on a Horse" commercial cost $120 million and accelerated her exit from the administration.',
  },
};

export default function KristiNoemFiredPage() {
  return <WikiArticle slug="trump-kristi-noem-fired" />;
}
