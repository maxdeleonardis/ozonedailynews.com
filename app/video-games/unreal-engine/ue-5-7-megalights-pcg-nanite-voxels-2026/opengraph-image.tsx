import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Unreal Engine 5.7 | MegaLights, PCG Production-Ready, Nanite Voxels 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Unreal Engine 5.7 | MegaLights, PCG Production-Ready, Nanite Voxels 2026"
        category="News"
        author="Jack Sterling"
        publishDate="April 19, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
