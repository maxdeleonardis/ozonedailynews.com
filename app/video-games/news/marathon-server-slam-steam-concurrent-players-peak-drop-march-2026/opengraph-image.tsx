import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Marathon Server Slam Steam Concurrent Players Drop Over 50% From 143,621 Peak';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Marathon Server Slam Steam Concurrent Players Drop Over 50% From 143,621 Peak"
        category="Video Games"
        author="Alfansa"
        publishDate="March 1, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
