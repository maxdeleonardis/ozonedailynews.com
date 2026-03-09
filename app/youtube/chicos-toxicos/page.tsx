import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Chicos Toxicos — Latin YouTuber Entertainment Group | ObjectWire',
  description:
    'Full coverage of Chicos Toxicos, the Latin American YouTuber entertainment group featuring Felipe, Diego, and Brandom. Weekly Toxico Thursdays, Zoo Culture and Bradley Martyn collaborations.',
  keywords: [
    'Chicos Toxicos',
    'Felipito96',
    'Diegovnoboa',
    'DonBrandom',
    'Latin YouTubers',
    'Toxico Thursdays',
    'Zoo Culture',
    'Bradley Martyn',
    'Latin American content creators',
    'Spanish YouTube',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/chicos-toxicos',
  },
  openGraph: {
    title: 'Chicos Toxicos — Latin YouTuber Entertainment Group',
    description:
      'Felipe, Diego, and Brandom deliver new content every Toxico Thursday. Full profile, member breakdowns, and collaboration history on ObjectWire.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/chicos-toxicos',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'YouTube',
    tags: ['Chicos Toxicos', 'Latin YouTube', 'Toxico Thursdays', 'Felipito96'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chicos Toxicos — Latin YouTuber Entertainment Group',
    description:
      'Full profile of Chicos Toxicos: members, schedule, collaborations, and stats.',
  },
};

export default function ChicosToxicosPage() {
  return <WikiArticle slug="youtube-chicos-toxicos" />;
}
