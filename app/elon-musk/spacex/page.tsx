import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'SpaceX | Space Exploration Technologies Corp. Company Profile',
  description: 'Complete profile of SpaceX, American aerospace manufacturer and space transportation company founded by Elon Musk. History, Starship development, Starlink',
  keywords: [
    'SpaceX',
    'Space Exploration Technologies',
    'Elon Musk',
    'Starship',
    'Falcon 9',
    'Starlink',
    'Dragon capsule',
    'Mars colonization',
    'reusable rockets',
    'aerospace company',
    'Hawthorne California',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/elon-musk/spacex',
  },
  openGraph: {
    title: 'SpaceX | Space Exploration Technologies Corp. Company Profile',
    description: 'American aerospace manufacturer revolutionizing space technology with reusable rockets, Starship development, and Starlink satellite internet.',
    type: 'article',
    url: 'https://www.objectwire.org/elon-musk/spacex',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpaceX | Company Profile',
    description: 'Complete guide to SpaceX aerospace company and Mars mission.',
  },
};

export default function SpaceXPage() {
  return <WikiArticle slug="elon-musk-spacex" />;
}
