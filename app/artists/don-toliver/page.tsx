import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Don Toliver - Artist Profile, Discography & Latest Music | ObjectWire',
  description: 'Complete guide to Don Toliver: biography, discography, collaborations with Travis Scott and Kanye West, and latest album OCTANE review.',
  keywords: [
    'Don Toliver',
    'Cactus Jack',
    'Travis Scott',
    'Kanye West',
    'OCTANE album',
    'Hip Hop',
    'R&B',
    'Houston rapper',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/artists/don-toliver',
  },
  openGraph: {
    type: 'profile',
    title: 'Don Toliver - Artist Profile',
    description: 'Houston\'s melodic trap pioneer: biography, discography, and latest releases.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Don Toliver - Artist Profile',
    description: 'Complete guide to Don Toliver\'s music, collaborations, and latest album OCTANE.',
  },
};

export default function DonToliverPage() {
  return <WikiArticle slug="artists-don-toliver" />;
}
