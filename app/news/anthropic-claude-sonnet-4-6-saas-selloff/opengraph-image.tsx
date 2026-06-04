import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Anthropic Claude Sonnet 4.6 Sells Fresh Wave of SaaS Falloff';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Anthropic Claude Sonnet 4.6 Sells Fresh Wave of SaaS Falloff"
        category="AI & Tech"
        author="ObjectWire Technology Desk"
        publishDate="February 18, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
