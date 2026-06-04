import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Crimson Desert Delivers Native 4K at 60fps on Ultra Settings with Ray Tracing in Digital Foundry Tech Preview';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Crimson Desert Delivers Native 4K at 60fps on Ultra Settings with Ray Tracing in Digital Foundry Tech Preview"
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
