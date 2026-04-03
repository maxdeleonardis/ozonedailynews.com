import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'The Dawn of the Orbital AI Era: SpaceX and xAI Move the Cloud to the Stars | ObjectWire',
  description: 'Analysis of the SpaceX and xAI merger and the transition toward orbital computing, solving terrestrial bottlenecks in power, land, and cooling.',
  keywords: [
    'SpaceX',
    'xAI',
    'Orbital Computing',
    'AI Infrastructure',
    'Starship',
    'Starlink',
    'Satellite Servers',
    'Industrial Revolution'
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/technology/articles/dawn-of-orbital-ai',
  },
  openGraph: {
    title: 'The Dawn of the Orbital AI Era: Moving the Cloud to the Stars',
    description: 'The $1.25 trillion union of SpaceX and xAI is not merely a corporate restructuring; it is the launchpad for a planetary-scale computer.',
    type: 'article',
    url: 'https://www.objectwire.org/technology/articles/dawn-of-orbital-ai',
    publishedTime: '2026-02-10T14:00:00Z',
    section: 'Technology',
  },
};

export default function OrbitalAIEraPage() {
  return <WikiArticle slug="technology-articles-dawn-of-orbital-ai" />;
}
