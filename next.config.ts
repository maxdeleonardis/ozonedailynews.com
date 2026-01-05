import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=120'
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      // Redirect old objectwire.org blog URLs to new /blog structure
      {
        source: '/objectwire.org/:slug*',
        destination: '/blog/:slug*',
        permanent: true, // 301 redirect
      },
      // Redirect any www.objectwire.org paths to /blog
      {
        source: '/www.objectwire.org/:slug*',
        destination: '/blog/:slug*',
        permanent: true, // 301 redirect
      },
      // Redirect RSS feed to a future API endpoint (optional)
      {
        source: '/feed/rss2',
        destination: '/blog',
        permanent: false, // 302 temporary redirect
      },
    ];
  },
};

export default nextConfig;
