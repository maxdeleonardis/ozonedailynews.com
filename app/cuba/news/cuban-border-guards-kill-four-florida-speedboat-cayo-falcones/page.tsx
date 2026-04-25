import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/cuba/news/cuban-border-guards-kill-four-florida-speedboat-cayo-falcones';

export const metadata: Metadata = {
  title: 'Cuban Border Guards Kill Four in Gunfight With Florida',
  description:
    'Cuban border guard forces exchanged gunfire with a Florida-registered speedboat near Cayo Falcones on February 25, 2026, killing four and wounding six.',
  keywords: [
    'Cuba Florida speedboat shooting 2026',
    'Cuban border guards kill four speedboat',
    'Cayo Falcones Florida boat gunfight',
    'FL7726SH Cuba incident',
    'Cuba Villa Clara speedboat 2026',
    'Florida Straits maritime shooting',
    'Cuban territorial waters Florida boat',
    'Cuba Interior Ministry speedboat',
    'El Pino channel Cuba incident',
    'Cuba US boat gunfight February 2026',
    'Florida Straits interdiction 2026',
    'Cuban maritime enforcement',
    'Cuba US diplomatic incident speedboat',
    'Cuba coast guard shooting',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Cuban Border Guards Kill Four in Gunfight With Florida',
    description:
      'A Florida-registered speedboat entered Cuban territorial waters near Cayo Falcones on February 25, 2026. What followed was a gunfight that killed four and',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-02-25T18:00:00Z',
    modifiedTime: '2026-02-25T18:00:00Z',
    section: 'World',
    tags: [
      'Cuba', 'Florida', 'Maritime', 'Gunfight', 'Villa Clara',
      'Cayo Falcones', 'Florida Straits', 'U.S. Cuba Relations',
      'Border Enforcement', 'Latin America',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuban Border Guards Kill Four in Gunfight With Florida',
    description:
      'Florida-registered FL7726SH entered Cuban waters near Villa Clara on February 25. Cuban border guards report an exchange of fire: four dead, six wounded,',
  },
};

export default function CubaSpeedboatShootingPage() {
  return <NewsArticleDB slug="cuba-news-cuban-border-guards-kill-four-florida-speedboat-cayo-falcones" />;
}
