import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/artists/yeat';

export const metadata: Metadata = {
  title: 'Yeat | Rage Rap Pioneer & Chart-Topping Artist | ObjectWire',
  description:
    'Complete profile of Yeat (Noah Olivier Smith), the rage rap phenomenon dominating modern hip-hop. Discography, streaming stats, musical style, and tour dates.',
  keywords: [
    'Yeat',
    'Noah Olivier Smith',
    'rage rap',
    'hip-hop',
    'Sorry Bout That',
    'Lyfestyle',
    'streaming artist',
    'modern rap',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'profile',
    title: 'Yeat | Rage Rap Pioneer | ObjectWire',
    description:
      'Profile of Yeat, the rage rap phenomenon with 42M+ monthly Spotify listeners. Discography from 4L to Lyfestyle (#1), tour dates, and latest news.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: 'https://www.objectwire.org/artist/Yeat-adl.png',
        width: 1200,
        height: 675,
        alt: 'Yeat ADL album cover 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yeat | ObjectWire',
    description:
      'Rage rap pioneer Yeat, 42M+ monthly listeners, first #1 album with Lyfestyle. Full profile and discography.',
    images: ['https://www.objectwire.org/artist/Yeat-adl.png'],
  },
};

export default function YeatPage() {
  return <CreatorArticleDB slug="artists/yeat" />;
}
