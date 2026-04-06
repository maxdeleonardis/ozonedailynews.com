import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Kristi Noem | U.S. Secretary of Homeland Security',
  description:
    'Kristi Noem is the U.S. Secretary of Homeland Security under President Donald Trump, confirmed January 25, 2025. Formerly the 33rd Governor of South',
  keywords: [
    'Kristi Noem DHS Secretary',
    'Kristi Noem Homeland Security',
    'Kristi Noem biography',
    'Kristi Noem South Dakota Governor',
    'Kristi Noem Trump cabinet',
    'Secretary of Homeland Security 2025',
    'Kristi Noem immigration policy',
    'Kristi Noem COVID policy South Dakota',
    'DHS Secretary 2026',
    'Kristi Noem FEMA',
    'Kristi Noem World Cup security',
    'Kristi Noem No Going Back memoir',
    'Kristi Noem career profile',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/trump/kristi-noem',
  },
  openGraph: {
    title: 'Kristi Noem | U.S. Secretary of Homeland Security',
    description:
      'From South Dakota state legislator to Governor to head of DHS under Trump. The full profile of Kristi Noem.',
    type: 'article',
    publishedTime: '2026-02-25T18:00:00Z',
    url: 'https://www.objectwire.org/trump/kristi-noem',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kristi Noem | U.S. Secretary of Homeland Security',
    description:
      'Former South Dakota Governor, now leading DHS under Trump. Full biography and policy record.',
  },
};

export default function KristiNoemPage() {
  return <WikiArticle slug="trump-kristi-noem" />;
}
