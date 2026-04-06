import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/world-cup/news/fifa-backs-mexico-after-cartel-violence-jalisco';

export const metadata: Metadata = {
  title: 'FIFA Backs Mexico After Jalisco Cartel Violence Raises 2026 World Cup Security Questions',
  description:
    'Violence linked to the Jalisco New Generation Cartel escalated sharply following the February 22, 2026 killing of CJNG leader El Mencho, with 252+',
  keywords: [
    'FIFA Mexico 2026 World Cup security',
    'CJNG El Mencho death World Cup',
    'Jalisco cartel violence 2026 World Cup',
    'Guadalajara World Cup 2026 security',
    'Estadio Akron FIFA 2026',
    'El Mencho killed CJNG February 2026',
    'Puerto Vallarta flight cancellations 2026',
    'FIFA confidence Mexico 2026',
    'CJNG retaliation Jalisco 2026',
    'World Cup Guadalajara security concerns',
    'Puerto Vallarta World Cup tourism',
    'Mexico World Cup contingency plans',
    'Delta American Alaska Airlines Puerto Vallarta',
    'Portugal Mexico friendly cancelled cartel',
    'FIFA World Cup 2026 Mexico safety',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'FIFA Backs Mexico After CJNG Violence Targets Jalisco, Home of a Key World Cup Host City',
    description:
      'The killing of El Mencho on February 22 triggered 252+ violent incidents across Jalisco in 72 hours. Estadio Akron in Guadalajara hosts four World Cup',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-02-25T18:00:00Z',
    modifiedTime: '2026-02-25T18:00:00Z',
    section: 'World Cup',
    tags: [
      'FIFA', 'World Cup 2026', 'CJNG', 'El Mencho', 'Jalisco',
      'Guadalajara', 'Puerto Vallarta', 'Mexico Security', 'Cartel Violence',
      'Estadio Akron', 'FIFA 2026 Mexico',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA Backs Mexico as CJNG Violence Sweeps Jalisco, Home of World Cup Host Guadalajara',
    description:
      '252+ violent incidents in 72 hours after El Mencho killed. Estadio Akron hosts four group games. Puerto Vallarta flights cancelled. FIFA says it has "full',
  },
};

export default function FifaMexicoCartelViolencePage() {
  return <NewsArticleDB slug="world-cup-news-fifa-backs-mexico-after-cartel-violence-jalisco" />;
}
