import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ==========================================================================
  // IMAGE OPTIMIZATION - Critical for Core Web Vitals (LCP)
  // ==========================================================================
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
    // Modern formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Responsive breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize layout shift with blur placeholder
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    // Quality optimization
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // ==========================================================================
  // CDN CACHING & COMPRESSION HEADERS
  // ==========================================================================
  headers: async () => {
    return [
      // Static images - aggressive caching (1 year)
      {
        source: '/:path*.{jpg,jpeg,png,gif,webp,avif,svg,ico}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Vary',
            value: 'Accept'
          },
        ],
      },
      // Fonts - aggressive caching with CORS
      {
        source: '/:path*.{woff,woff2,ttf,otf,eot}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
        ],
      },
      // JS and CSS bundles - immutable caching
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      // HTML pages - short cache with stale-while-revalidate
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, s-maxage=120, stale-while-revalidate=600'
          },
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
      // Sitemaps and feeds - moderate caching
      {
        source: '/:path*.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
          },
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8'
          },
        ],
      },
    ];
  },
  
  // ==========================================================================
  // URL NORMALIZATION (SEO)
  // ==========================================================================
  trailingSlash: false,
  
  // ==========================================================================
  // COMPRESSION & BUILD OPTIMIZATION
  // ==========================================================================
  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  
  // ==========================================================================
  // EXPERIMENTAL PERFORMANCE FEATURES
  // ==========================================================================
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
};

export default nextConfig;
