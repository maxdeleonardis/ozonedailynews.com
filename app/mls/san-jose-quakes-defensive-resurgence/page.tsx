import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/mls/san-jose-quakes-defensive-resurgence';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1558465202-92356bf74344?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'San Jose Earthquakes 2026 | Timo Werner Golden Boot Charge',
  description:
    'The San Jose Earthquakes have allowed just 9 goals in 8 matches and Timo Werner leads MLS with 7 goals. A defensive rebuild and a marquee signing are',
  keywords: [
    'San Jose Earthquakes 2026',
    'Timo Werner MLS',
    'Timo Werner San Jose',
    'Timo Werner Golden Boot',
    'San Jose Earthquakes defense',
    'MLS Golden Boot 2026',
    'San Jose Earthquakes season',
    'Quakes 2026',
    'MLS Western Conference',
    'Timo Werner goals',
    'San Jose Earthquakes roster',
    'Major League Soccer 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "San Jose Earthquakes 2026 | Defensive Resurgence and Timo’s Golden Boot Charge",
    description:
      '9 goals allowed in 8 matches. 7 goals from Timo Werner. The Quakes are relevant again in 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-04T16:00:00Z',
    modifiedTime: '2026-04-04T16:00:00Z',
    section: 'Sports',
    tags: ['San Jose Earthquakes', 'MLS', 'Timo Werner', 'Golden Boot', 'Soccer'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Aerial view of a professional soccer match in progress' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timo Werner Leads MLS with 7 Goals as Quakes Defense',
    description: 'San Jose allowed just 9 goals in 8 matches. Werner has 7. The Quakes are back.',
  },
};

export default function MlsSanJoseQuakesDefensiveResurgencePage() {
  return <NewsArticleDB slug="mls-san-jose-quakes-defensive-resurgence" />;
}
