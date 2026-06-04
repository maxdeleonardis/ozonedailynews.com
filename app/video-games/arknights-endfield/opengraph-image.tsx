import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Arknights: Endfield Launches January 22, 2026 on PC, Mobile, and PS5 as Open-World Action RPG with Real-Time Combat and Factory Building';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Arknights: Endfield Launches January 22, 2026 on PC, Mobile, and PS5 as Open-World Action RPG with Real-Time Combat and Factory Building"
        category="Gaming"
        author="Jack Sterling"
        publishDate="February 26, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
