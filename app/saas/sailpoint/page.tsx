import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'SailPoint | Identity Security Company Profile',
  description: 'Complete profile of SailPoint, a leading identity security platform serving Fortune 500 companies with unified identity solutions, compliance automation,',
  openGraph: {
    title: 'SailPoint | Identity Security Company Profile',
    description: 'Enterprise identity security solutions helping businesses automate access management and simplify regulatory compliance.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SailPoint | Identity Security Company Profile',
    description: 'Enterprise identity security solutions helping businesses automate access management and simplify regulatory compliance.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/saas/sailpoint',
  },
};

export default function SailPointPage() {
  return <WikiArticle slug="saas-sailpoint" />;
}
