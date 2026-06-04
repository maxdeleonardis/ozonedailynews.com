import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'IGN Fan Fest 2026 Cinematic Trailer Reveals Lenny Kravitz as Villain Bawma in 007: First Light';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="IGN Fan Fest 2026 Cinematic Trailer Reveals Lenny Kravitz as Villain Bawma in 007: First Light"
        category="Gaming"
        author="OzoneNews Editorial Team"
        publishDate="February 26, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
