import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/technology/terrapower/natrium-kemmerer-groundbreaking-wyoming-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'TerraPower Kemmerer Groundbreaking | First Advanced Nuclear Reactor USA 2026',
  description: 'TerraPower breaks ground on nuclear components of its Natrium reactor in Kemmerer, Wyoming on April 22, 2026 — the first advanced non-light-water reactor to begin construction in the US in over 40 years.',
  keywords: [
    'TerraPower Kemmerer groundbreaking 2026',
    'Natrium reactor construction Wyoming',
    'TerraPower nuclear groundbreaking April 2026',
    'first advanced nuclear reactor USA 2026',
    'TerraPower Bill Gates Kemmerer Wyoming',
    'Natrium 345 MW sodium-cooled reactor',
    'NRC construction permit non-LWR 2026',
    'TerraPower DOE ARDP 4 billion',
    'Generation IV nuclear reactor construction',
    'molten salt energy storage nuclear',
    'Kemmerer Wyoming nuclear energy jobs',
    'PacifiCorp Naughton coal to nuclear',
    'TerraPower 2030 completion date',
    'advanced nuclear reactor baseload clean energy',
    'TerraPower 500 MW peak output',
    'nuclear energy climate change solution',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'TerraPower Kemmerer Groundbreaking | America\'s First Advanced Nuclear Reactor',
    description: 'Bill Gates\'s TerraPower breaks ground on nuclear components of the Natrium reactor in Wyoming — the first non-LWR construction permit in U.S. history, and a new chapter for clean baseload power.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Wang'],
    publishedTime: '2026-04-23T19:00:00Z',
    modifiedTime: '2026-04-23T19:00:00Z',
    section: 'Technology',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Nuclear power plant construction representing TerraPower Natrium groundbreaking Kemmerer Wyoming 2026' }],
    tags: ['TerraPower', 'Natrium', 'Nuclear Energy', 'Bill Gates'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TerraPower Breaks Ground in Wyoming | America\'s Advanced Nuclear Era Begins',
    description: 'April 22, 2026: Bill Gates\'s Natrium reactor begins nuclear construction in Kemmerer. First non-LWR construction permit in U.S. history. Target: 2030.',
    images: [OG_IMAGE],
  },
};

export default function TechnologyTerrapowerNatriumKemmererGroundbreakingWyoming2026Page() {
  return <NewsArticleDB slug="technology-terrapower-natrium-kemmerer-groundbreaking-wyoming-2026" />;
}
