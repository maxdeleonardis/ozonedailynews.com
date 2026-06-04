import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Valve Ships Major CS2 Animation Overhaul | Not CS3';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Valve Ships Major CS2 Animation Overhaul | Not CS3"
        category="Gaming"
        author="Conan Boyle"
        publishDate="April 3, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
