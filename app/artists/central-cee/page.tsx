import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/artists/central-cee';

export const metadata: Metadata = {
  title: 'Central Cee | UK Rap, Drill & Global Crossover',
  description:
    'Complete profile of Central Cee (Oakley Neil H T Caesar-Su), the UK drill and rap artist behind Wild West, 23, and Can\'t Rush Greatness. Discography,',
  keywords: [
    'Central Cee',
    'UK drill',
    'UK rap',
    'Wild West',
    '23 album',
    'Can\'t Rush Greatness',
    'Doja',
    'Sprinter',
    'Dave',
    'British rapper',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'profile',
    title: 'Central Cee | UK Rap, Drill & Global Crossover',
    description:
      'Profile of Central Cee, the West London rapper who took UK drill global. 50M+ monthly Spotify listeners, Columbia Records, collaborations with Lil Baby,',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: '/artist/centralcee.png',
        width: 1200,
        height: 675,
        alt: 'Central Cee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central Cee',
    description:
      'UK drill went global. Central Cee is why. 50M+ monthly listeners, Columbia Records, and a debut album that hit #1 in 12 countries.',
  },
};

export default function CentralCeePage() {
  return <CreatorArticleDB slug="artists/central-cee" />;
}
