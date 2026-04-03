import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/artists/don-toliver';

export const metadata: Metadata = {
  title: 'Don Toliver | Artist Profile, Discography & Latest Music | ObjectWire',
  description:
    'Complete profile of Don Toliver, Houston melodic trap pioneer signed to Cactus Jack Records. Discography, collaborations with Travis Scott and Kanye West, and OCTANE album review.',
  keywords: [
    'Don Toliver',
    'Cactus Jack Records',
    'Travis Scott',
    'Kanye West',
    'OCTANE album',
    'Hip Hop',
    'R&B',
    'Houston rapper',
    'melodic trap',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'profile',
    title: 'Don Toliver | Melodic Trap Pioneer | ObjectWire',
    description:
      'Houston rapper Don Toliver, signed to Cactus Jack Records, with 40M+ monthly Spotify listeners. Full biography, discography, and OCTANE album review.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Don Toliver | ObjectWire',
    description:
      'Complete guide to Don Toliver\'s music, collaborations with Travis Scott and Kanye West, and latest album OCTANE.',
  },
};

export default function DonToliverPage() {
  return <CreatorArticleDB slug="artists/don-toliver" />;
}
