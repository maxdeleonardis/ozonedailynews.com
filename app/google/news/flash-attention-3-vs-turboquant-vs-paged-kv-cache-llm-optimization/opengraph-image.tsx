import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'FlashAttention 3 vs TurboQuant vs Paged KV Cache | How the LLM Optimization Stack Actually Works';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="FlashAttention 3 vs TurboQuant vs Paged KV Cache | How the LLM Optimization Stack Actually Works"
        category="Tech"
        author="Jack Wang"
        publishDate="April 1, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
