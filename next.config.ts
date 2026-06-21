import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
    localPatterns: [
      { pathname: "/api/og/**", search: "?slug=*" },
      { pathname: "/thumbnails/**" },
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
