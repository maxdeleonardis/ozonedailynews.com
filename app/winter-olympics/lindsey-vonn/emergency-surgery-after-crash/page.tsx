import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Lindsey Vonn Undergoes Emergency Surgery After Crash at 2026 Winter Olympics | ObjectWire',
  description: 'Lindsey Vonn airlifted to hospital after devastating crash during downhill event at 2026 Winter Olympics. Emergency surgery performed on right knee.',
  openGraph: {
    title: 'Lindsey Vonn Undergoes Emergency Surgery After Crash at 2026 Winter Olympics',
    description: 'Lindsey Vonn airlifted to hospital after devastating crash during downhill event at 2026 Winter Olympics. Emergency surgery performed on right knee.',
    type: 'article',
    publishedTime: '2026-02-08T16:30:00Z',
    authors: ['Conan Boyle'],
    tags: ['Winter Olympics', 'Lindsey Vonn', 'Alpine Skiing', 'Sports Injury', 'Milan-Cortina 2026'],
  },
};

export default function LargeArticlePage() {
  return <WikiArticle slug="winter-olympics-lindsey-vonn-emergency-surgery-after-crash" />;
}
