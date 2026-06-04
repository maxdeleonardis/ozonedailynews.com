import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async redirects() {
    return [
      {
        source: '/tech-meta-instagram-drops-encrypted-dms',
        destination: 'https://www.ozonenetwork.news/social/meta/instagram-drops-encrypted-dms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
