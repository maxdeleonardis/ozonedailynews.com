import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'TurboQuant KV Cache Compression | 6x Less Memory, 8x Faster Attention for LLMs';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="TurboQuant KV Cache Compression | 6x Less Memory, 8x Faster Attention for LLMs"
        category="Tech"
        author="Jack Wang"
        publishDate="March 25, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
