import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/technology/terrapower';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'TerraPower | Bill Gates Nuclear Company, Natrium Reactor 2026',
  description: 'TerraPower is Bill Gates\'s nuclear reactor company building the Natrium sodium-cooled fast reactor in Kemmerer, Wyoming. Full company profile: history, technology, funding, and 2026 construction milestone.',
  keywords: [
    'TerraPower nuclear company',
    'TerraPower Bill Gates',
    'Natrium reactor TerraPower',
    'TerraPower Kemmerer Wyoming',
    'sodium-cooled fast reactor',
    'TerraPower 2026',
    'advanced nuclear reactor USA',
    'TerraPower Chris Levesque CEO',
    'Natrium 345 MW power plant',
    'TerraPower DOE ARDP grant',
    'Bill Gates nuclear energy',
    'Generation IV nuclear reactor',
    'TerraPower NRC construction permit',
    'Natrium molten salt storage',
    'TerraPower vs traditional nuclear',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'TerraPower | Bill Gates Nuclear Company & Natrium Reactor Profile',
    description: 'Full profile of TerraPower: Bill Gates\'s nuclear company building America\'s first advanced sodium-cooled reactor in Kemmerer, Wyoming.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    section: 'Technology',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Nuclear power plant representing TerraPower Natrium reactor Kemmerer Wyoming 2026' }],
    tags: ['TerraPower', 'Bill Gates', 'Nuclear Energy', 'Natrium'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TerraPower | Bill Gates Nuclear Company, Natrium Reactor 2026',
    description: 'Full profile of TerraPower: the Bill Gates nuclear company breaking ground on America\'s first advanced reactor in Wyoming.',
    images: [OG_IMAGE],
  },
};

export default function TechnologyTerrapowerPage() {
  return <ArticlePageDB slug="technology-terrapower" />;
}
