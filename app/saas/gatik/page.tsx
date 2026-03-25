import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Gatik: Autonomous Trucking Company Profile & History | ObjectWire',
  description: 'Complete profile of Gatik, the first U.S. company to operate fully autonomous commercial trucks. Founded 2017, pioneering middle-mile logistics automation with Walmart and Kroger partnerships.',
  keywords: [
    'Gatik',
    'Gatik AI',
    'autonomous trucking',
    'middle-mile delivery',
    'self-driving trucks',
    'Gautam Narang',
    'driverless logistics',
    'Walmart autonomous delivery',
    'commercial autonomous vehicles',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/gatik',
  },
  openGraph: {
    title: 'Gatik: Autonomous Trucking Company Profile & History',
    description: 'Complete profile of Gatik, the first U.S. company to operate fully autonomous commercial trucks.',
    type: 'article',
    url: 'https://www.objectwire.org/gatik',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gatik: Autonomous Trucking Company Profile & History',
    description: 'First U.S. company operating fully driverless commercial trucks.',
  },
};

export default function GatikPage() {
  return <WikiArticle slug="saas-gatik" />;
}
