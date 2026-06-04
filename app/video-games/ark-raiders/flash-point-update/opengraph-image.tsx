import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Arc Raiders Flashpoint Update Launches Tuesday with New Enemies and Map Conditions';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Arc Raiders Flashpoint Update Launches Tuesday with New Enemies and Map Conditions"
        category="Video Games"
        author="Connan Boyle"
        publishDate="March 31, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
