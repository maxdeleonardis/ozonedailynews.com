import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/unreal-engine/ue-5-8-preview-mesh-terrain-megalights-2026';

export const metadata: Metadata = {
  title: 'Unreal Engine 5.8 Preview | Mesh Terrain and MegaLights',
  description:
    'Unreal Engine 5.8 Preview (May 2026) introduces experimental Mesh Terrain 3D topology and production-ready MegaLights for PS5, Xbox Series X, and mobile handhelds.',
  keywords: [
    'Unreal Engine 5.8 Preview',
    'Unreal Engine 5.8 Mesh Terrain',
    'UE 5.8 MegaLights production ready',
    'Unreal Engine 5.8 features 2026',
    'UE 5.8 PCG procedural content generation',
    'Mesh Terrain vs Landscape UE5',
    'Unreal Engine 5.8 MetaHuman Crowd',
    'UE 5.8 release date preview',
    'Epic Games Unreal Engine 5.8',
    'UE5 open world terrain tools 2026',
    'MegaLights PS5 Xbox Series X',
    'Unreal Engine 5.8 virtual production',
    'Procedural Vegetation Editor UE5',
    'Unreal Engine mobile lighting 2026',
    'UE 5.8 vs UE 5.7',
    'Nanite Unreal Engine 5.8',
    'PCG hybrid pipeline UE5',
    'Unreal Engine Switch 2 optimization',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Unreal Engine 5.8 Preview | Mesh Terrain & MegaLights Go Production',
    description:
      'Epic released UE 5.8 Preview on May 12, 2026. Mesh Terrain replaces legacy height-fields with true 3D topology. MegaLights hits production status for PS5, Xbox Series X, and mobile.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-15T14:00:00Z',
    modifiedTime: '2026-05-15T14:00:00Z',
    section: 'Gaming',
    tags: [
      'Unreal Engine',
      'Epic Games',
      'Game Development',
      'MegaLights',
      'Mesh Terrain',
      'PCG',
      'Virtual Production',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UE 5.8 Preview | Mesh Terrain replaces height-fields, MegaLights goes production',
    description:
      'Epic dropped UE 5.8 Preview May 12. True 3D terrain, 100+ dynamic lights on console, MetaHuman Crowd at scale. Here is what it means for 2026 studios.',
  },
};

export default function UE58PreviewPage() {
  return (
    <NewsArticleDB slug="video-games-unreal-engine-ue-5-8-preview-mesh-terrain-megalights-2026" />
  );
}
