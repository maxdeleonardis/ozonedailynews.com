import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Lindsey Vonn Undergoes Emergency Surgery After Crash at',
  description: 'Lindsey Vonn airlifted to hospital after devastating crash during downhill event at 2026 Winter Olympics. Emergency surgery performed on right knee.',
  openGraph: {
    title: 'Lindsey Vonn Undergoes Emergency Surgery After Crash at',
    description: 'Lindsey Vonn airlifted to hospital after devastating crash during downhill event at 2026 Winter Olympics. Emergency surgery performed on right knee.',
    type: 'article',
    publishedTime: '2026-02-08T16:30:00Z',
    authors: ['Conan Boyle'],
    tags: ['Winter Olympics', 'Lindsey Vonn', 'Alpine Skiing', 'Sports Injury', 'Milan-Cortina 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lindsey Vonn Undergoes Emergency Surgery After Crash at',
    description: 'Lindsey Vonn airlifted to hospital after devastating crash during downhill event at 2026 Winter Olympics. Emergency surgery performed on right knee.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/lindsey-vonn/emergency-surgery-after-crash',
  },
};

export default function LargeArticlePage() {
  return <NewsArticleDB slug="winter-olympics-lindsey-vonn-emergency-surgery-after-crash" />;
}
