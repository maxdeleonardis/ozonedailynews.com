import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Luca Spechenhauser Wins Short Track 1500m | Italy Strikes',
  description: 'Italian short track star Luca Spechenhauser wins the men\'s 1500m final at Milan Cortina 2026, delivering a home country gold medal in front of ecstatic',
  keywords: ['Luca Spechenhauser', 'short track', '1500m gold', 'Winter Olympics 2026', 'Milan Cortina', 'Italy', 'home gold', 'speed skating', 'Bormio'],
  openGraph: {
    title: 'Luca Spechenhauser Wins 1500m Gold for Italy on Home Ice',
    description: 'Italian hero delivers short track gold at Milan Cortina 2026 in front of home crowd',
    type: 'article',
    publishedTime: '2026-02-14T22:00:00Z',
    authors: ['ObjectWire Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spechenhauser | Italy\'s Home Ice Hero',
    description: 'Short track 1500m gold for Italy at Milan Cortina 2026',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/italy/luca-spechenhauser',
  },
};

export default function LucaSpechenhauserProfile() {
  return <WikiArticle slug="winter-olympics-italy-luca-spechenhauser" />;
}
