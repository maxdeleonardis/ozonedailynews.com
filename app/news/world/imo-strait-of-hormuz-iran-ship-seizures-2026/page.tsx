import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/news/world/imo-strait-of-hormuz-iran-ship-seizures-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'IMO Strait of Hormuz | Iran Ship Seizures, Dual Blockade',
  description:
    'Iran seized two MSC-affiliated vessels on April 22 as a dual blockade formed in the Strait of Hormuz. The IMO, global shipping\'s UN body, faces pressure to act as traffic through the world\'s most critical chokepoint collapses.',
  keywords: [
    'IMO Strait of Hormuz 2026',
    'International Maritime Organization Iran',
    'Strait of Hormuz blockade 2026',
    'MSC Francesca seized Iran',
    'Epaminondas Iran attack',
    'IRGC ship seizure 2026',
    'US Navy Touska blockade',
    'dual blockade Strait of Hormuz',
    'IMO shipping chokepoint',
    'Iran ceasefire Trump shipping',
    'Lloyd\'s List Iran MSC 2026',
    'Strait of Hormuz traffic 2026',
    'IMO maritime safety Iran',
    'Iran Panama-flagged ship seizure',
    'what is the IMO',
    'IMO freedom of navigation',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'IMO, Strait of Hormuz | Iran Seizures Form a Dual Blockade',
    description:
      'Iran seized MSC Francesca and attacked Epaminondas on April 22. The US Navy seized Touska three days earlier. The IMO, the UN body governing global shipping, is the institution caught in the middle.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Marcus Webb'],
    publishedTime: '2026-04-25T15:00:00Z',
    modifiedTime: '2026-04-25T15:00:00Z',
    section: 'World',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Large container ship transiting a narrow waterway at dusk' }],
    tags: ['IMO', 'Strait of Hormuz', 'Iran', 'MSC', 'Shipping', 'Maritime Law'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iran Seized Two Ships in the Hormuz Strait | What the IMO Can and Cannot Do',
    description:
      'Two MSC vessels seized, one attacked, one US Navy capture three days prior. A dual blockade is forming. The IMO governs global shipping — and its limits are now on display.',
    images: [OG_IMAGE],
  },
};

export default function NewsWorldImoStraitOfHormuzIranShipSeizures2026Page() {
  return <NewsArticleDB slug="news-world-imo-strait-of-hormuz-iran-ship-seizures-2026" />;
}
