import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/meta/virtual-reality/polyarc-eidos-montreal-layoffs-march-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Polyarc, Eidos-Montreal Hit by Layoffs | Gaming Crisis March 2026',
  description:
    'Polyarc cut 35 of 52 employees after a major VR project lost funding. Eidos-Montreal laid off 124 as studio head David Anfossi departed after 19 years. Gaming industry crisis continues in Q1 2026.',
  keywords: [
    'Polyarc layoffs 2026',
    'Eidos-Montreal layoffs 2026',
    'gaming industry layoffs March 2026',
    'Moss VR studio layoffs',
    'David Anfossi Eidos-Montreal',
    'Embracer Group studio cuts',
    'VR gaming market collapse 2026',
    'nDreams layoffs VR',
    'Deus Ex studio layoffs',
    'Fable Xbox support studio',
    'Meta VR funding pullback',
    'Seattle VR studio layoffs',
    'gaming jobs lost 2026',
    'AAA gaming crisis',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Polyarc, Eidos-Montreal Hit by Major Layoffs | Gaming Crisis March 2026',
    description:
      'Polyarc cut 66% of staff after VR project funding collapsed. Eidos-Montreal axed 124, losing its 19-year studio head. Two more victims in gaming industry crisis Q1 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-03-30T18:00:00Z',
    modifiedTime: '2026-03-30T18:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'VR headset gaming studio' }],
    tags: ['Polyarc', 'Eidos-Montreal', 'Embracer Group', 'VR Gaming', 'Gaming Layoffs', 'Moss VR', 'Deus Ex'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polyarc Cuts 66% of Staff, Eidos-Montreal Axes 124 | Gaming Crisis',
    description:
      'Polyarc: VR funding collapsed, 35 of 52 employees gone. Eidos-Montreal: 124 cut, studio head of 19 years out. Q1 2026 gaming layoffs show no sign of stopping.',
    images: [OG_IMAGE],
  },
};

export default function MetaVirtualRealityPolyarcEidosMontrealLayoffsMarch2026Page() {
  return <NewsArticleDB slug="meta-virtual-reality-polyarc-eidos-montreal-layoffs-march-2026" />;
}
