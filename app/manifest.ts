import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OzoneNews',
    short_name: 'ONN',
    description: 'Breaking news, technology, and digital culture',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f6',
    theme_color: '#ffffff',
    orientation: 'portrait-primary',
    categories: ['news'],
    icons: [
      {
        src: '/Favicon (1).png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/Favicon (1).png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Latest News',
        short_name: 'News',
        description: 'Read the latest breaking news',
        url: '/news',
        icons: [{ src: '/Favicon (1).png', sizes: '96x96' }],
      },
    ],
  };
}
