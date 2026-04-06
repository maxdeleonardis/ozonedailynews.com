import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Corrections Policy",
  description: "ObjectWire is committed to accuracy. Learn about our corrections policy, how we handle errors, and how to report inaccuracies.",
  alternates: {
    canonical: 'https://www.objectwire.org/corrections',
  },
  openGraph: {
    title: "Corrections Policy",
    description: "Our commitment to transparency and accuracy in correcting errors.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corrections Policy',
    description: 'Our commitment to transparency and accuracy in correcting errors.',
  },
};

export default function CorrectionsPage() {
  return <WikiArticle slug="corrections" />;
}
