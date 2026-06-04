import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Unreal Engine 5.8 Preview | Mesh Terrain and MegaLights';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Unreal Engine 5.8 Preview | Mesh Terrain and MegaLights"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="May 15, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
