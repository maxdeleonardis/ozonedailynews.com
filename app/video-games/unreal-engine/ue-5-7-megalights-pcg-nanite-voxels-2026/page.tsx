import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/unreal-engine/ue-5-7-megalights-pcg-nanite-voxels-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Unreal Engine 5.7 | MegaLights, PCG Production-Ready, Nanite Voxels 2026',
  description: 'Unreal Engine 5.7 delivers MegaLights beta, production-ready PCG with 35% GPU gains, Nanite Voxels for foliage, and a built-in AI assistant. Current version 5.7.2. UE 5.8 preview expected Summer 2026.',
  keywords: [
    'Unreal Engine 5.7',
    'Unreal Engine 5.7 MegaLights',
    'UE 5.7 PCG production ready',
    'Unreal Engine 5.7 Nanite Voxels',
    'UE 5.7 features 2026',
    'Unreal Engine 5.7.2',
    'UE 5.7 performance benchmarks',
    'Unreal Engine AI assistant',
    'PCG GPU compute UE 5.7',
    'Megaplants Unreal Engine',
    'UE 5.7 Substrate materials',
    'Unreal Engine 5.7 vs 5.4',
    'Epic Games Unreal Engine 2026',
    'UE 5.7 world building',
    'Unreal Engine 5.8 preview',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Unreal Engine 5.7 | MegaLights, Nanite Voxels, PCG Production-Ready',
    description: 'Epic Games UE 5.7: thousands of dynamic shadow-casting lights, 35% faster PCG via GPU compute, Nanite Voxels eliminating LOD popping in forests, and a context-aware in-editor AI assistant.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-19T16:00:00Z',
    modifiedTime: '2026-04-19T16:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Game engine development environment with lighting' }],
    tags: ['Unreal Engine', 'Epic Games', 'Game Development', 'PCG', 'MegaLights'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unreal Engine 5.7 | MegaLights, 35% Faster PCG, Nanite Voxels, AI Assistant',
    description: '25% GPU gain, 60% faster lighting iteration, and the end of baked lighting for complex indoor scenes. UE 5.7.2 is out now.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesUnrealEngineUe57MegalightsPcgNaniteVoxels2026Page() {
  return <JackArticleDB slug="video-games-unreal-engine-ue-5-7-megalights-pcg-nanite-voxels-2026" />;
}
