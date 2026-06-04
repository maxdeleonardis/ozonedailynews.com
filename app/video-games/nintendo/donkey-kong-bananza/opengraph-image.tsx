import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Donkey Kong Bananza — GDC 2026 Tech Reveal: 347M Voxels, Switch 2 Destruction Engine | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Donkey Kong Bananza — GDC 2026 Tech Reveal: 347M Voxels, Switch 2 Destruction Engine | ObjectWire"
        category="General"
        author="Conan Boyle"
        publishDate="March 12, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
