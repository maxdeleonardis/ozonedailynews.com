import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/nvidia/class-action-jensen-huang-crypto-revenue-2026';
const OG_IMAGE = '/crypto/huang.png';

export const metadata: Metadata = {
  title: 'NVIDIA Class Action Certified | Jensen Huang Crypto Revenue Fraud | ObjectWire',
  description:
    'Federal judge certifies class action against NVIDIA and Jensen Huang over $1B in crypto mining revenue mislabeled as gaming sales during 2017-2018. Trial now proceeds.',
  keywords: [
    'NVIDIA class action lawsuit 2026',
    'Jensen Huang crypto revenue fraud',
    'NVIDIA investor lawsuit certified',
    'NVIDIA GeForce crypto mining revenue',
    'NVIDIA stock drop 2018 lawsuit',
    'Judge Haywood Gilliam NVIDIA',
    'NVIDIA SEC penalty 2022',
    'NVIDIA gaming vs crypto revenue',
    'NVIDIA shareholder lawsuit',
    'Jensen Huang PCAST AI advisor',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Federal Judge Certifies Class Action Against NVIDIA and Jensen Huang | ObjectWire',
    description:
      'A California judge certified a class action against NVIDIA and CEO Jensen Huang over $1B+ in crypto revenue mislabeled as gaming sales during 2017-2018.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: `https://www.objectwire.org${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'Jensen Huang NVIDIA class action lawsuit certified 2026',
      },
    ],
    publishedTime: '2026-03-30T16:00:00Z',
    section: 'Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVIDIA Class Action Certified | Jensen Huang Crypto Fraud Lawsuit | ObjectWire',
    description:
      'Judge certifies class action against NVIDIA over $1B in crypto GPU sales mislabeled as gaming revenue. Thousands of investors can now proceed as a group.',
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function NvidiaClassActionJensenHuangCryptoRevenue2026Page() {
  return <NewsArticleDB slug="nvidia-class-action-jensen-huang-crypto-revenue-2026" />;
}
