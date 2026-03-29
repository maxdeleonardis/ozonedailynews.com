import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/news/vast-freshwater-reservoir-found-beneath-great-salt-lake-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/salt-lake.jpg';

export const metadata: Metadata = {
  title: 'Vast Freshwater Reservoir Found Beneath Great Salt Lake | ObjectWire',
  description:
    'University of Utah geophysicists have discovered a massive freshwater reservoir hidden 3–4 kilometers beneath the Great Salt Lake, potentially reshaping drought management and water security strategies across the American West.',
  keywords: [
    'Great Salt Lake freshwater reservoir',
    'University of Utah geophysics 2026',
    'aquifer beneath Great Salt Lake',
    'airborne electromagnetic survey AEM',
    'Great Salt Lake water discovery',
    'Scientific Reports hydrology 2026',
    'Utah groundwater discovery',
    'Great Salt Lake drought',
    'subsurface freshwater reservoir',
    'American West water crisis',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Vast Freshwater Reservoir Found Beneath Great Salt Lake',
    description:
      'Water-saturated sediments extending up to 4 kilometers below the hypersaline surface may represent one of the largest undiscovered freshwater reserves in the American West, according to research published in Scientific Reports.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T16:00:00Z',
    modifiedTime: '2026-03-25T16:00:00Z',
    section: 'Science',
    tags: ['Great Salt Lake', 'Freshwater', 'Hydrology', 'Utah', 'Science', 'Climate', 'Water Security', 'Geology'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scientists Find Massive Freshwater Reservoir Hidden Beneath the Great Salt Lake',
    description:
      'A helicopter-borne electromagnetic survey has revealed water-saturated sediments 3–4 km deep, a find that could reframe water security across the drought-stricken American West.',
    images: [IMAGE_URL],
  },
};

export default function GreatSaltLakeFreshwaterPage() {
  return <NewsArticleDB slug="news-vast-freshwater-reservoir-found-beneath-great-salt-lake-2026" />;
}
