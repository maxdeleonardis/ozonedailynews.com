import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/youtube/chicos-toxicos/cristiana-love';

export const metadata: Metadata = {
  title: 'Cristiana Love | Chicos Toxicos Personality | ObjectWire',
  description:
    'Cristiana Love is a prominent figure within the Chicos Toxicos community, known for her humorous TikTok videos, fan engagement, and charismatic presence in the Latin entertainment space.',
  keywords: [
    'Cristiana Love',
    'cristiana.love',
    'Chicos Toxicos',
    'Latin influencer',
    'TikTok creator',
    'Instagram personality',
    'Latin entertainment',
    'Felipito96',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/chicos-toxicos/cristiana-love',
  },
  openGraph: {
    title: 'Cristiana Love | Chicos Toxicos Personality',
    description:
      'Full profile of Cristiana Love, prominent figure in the Chicos Toxicos community. TikTok videos, fan interactions, and her role in the Latin content creator space.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/chicos-toxicos/cristiana-love',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'YouTube',
    tags: ['Cristiana Love', 'Chicos Toxicos', 'Latin Entertainment', 'TikTok'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristiana Love | Chicos Toxicos Personality | ObjectWire',
    description:
      'Profile of Cristiana Love: her role in Chicos Toxicos, TikTok presence, fan interactions, and content style.',
  },
};

export default function CristianaLovePage() {
  return <WikiArticle slug="youtube-chicos-toxicos-cristiana-love" />;
}
