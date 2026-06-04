import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Kagurabachi Anime | April 2027 Premiere, CygamesPictures';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Kagurabachi Anime | April 2027 Premiere, CygamesPictures"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="May 4, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
