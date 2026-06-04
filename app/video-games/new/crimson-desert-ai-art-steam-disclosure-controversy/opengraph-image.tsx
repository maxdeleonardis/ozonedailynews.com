import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Crimson Desert Players Flag Suspected AI Art, Raising Steam Disclosure Questions';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Crimson Desert Players Flag Suspected AI Art, Raising Steam Disclosure Questions"
        category="GAMING"
        author="ObjectWire Staff"
        publishDate="March 24, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
