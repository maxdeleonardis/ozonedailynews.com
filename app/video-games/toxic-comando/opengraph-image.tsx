import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'John Carpenter\'s Toxic Commando — Review Roundup, Launch Day Guide | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="John Carpenter\'s Toxic Commando — Review Roundup, Launch Day Guide | ObjectWire"
        category="General"
        author="Conan Boyle"
        publishDate="March 12, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
