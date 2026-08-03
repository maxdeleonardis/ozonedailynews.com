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
      // ── Missing category hubs → /news ──────────────────────────────────
      { source: '/culture',       destination: '/news', permanent: true },
      { source: '/sports',        destination: '/news', permanent: true },
      { source: '/entertainment', destination: '/news', permanent: true },
      { source: '/politics',      destination: '/news', permanent: true },
      { source: '/finance',       destination: '/news', permanent: true },
      { source: '/gaming',        destination: '/news', permanent: true },
      { source: '/world',         destination: '/news', permanent: true },
      { source: '/crypto',        destination: '/news', permanent: true },

      // ── Orphaned sub-pages → closest existing hub ─────────────────────
      { source: '/science/space',  destination: '/space',  permanent: true },
      { source: '/science/energy', destination: '/science', permanent: true },

      // ── Old /nasa-news-* slug format → / ──────────────────────────────
      { source: '/nasa-news-black-hole-jet-power-measured-cygnus-x1-curtin-university', destination: '/', permanent: true },
      { source: '/nasa-news-jwst-wasp-94ab-daily-cloud-cycle-hot-jupiter-weather-2026', destination: '/', permanent: true },

      // ── Old /tech/news/ slug format → / ──────────────────────────────
      { source: '/tech/news/87-percent-ai-agent-pull-requests-security-flaws-dryrun-report-2026', destination: '/', permanent: true },

      // ── Orphaned single-page slugs → / ────────────────────────────────
      { source: '/intel-18a-high-volume-manufacturing', destination: '/', permanent: true },

      // ── /tags/* → search (catches all 33+ tag pages) ──────────────────
      { source: '/tags/:tag', destination: '/search?q=:tag', permanent: true },

      // ── Existing ──────────────────────────────────────────────────────
      {
        source: '/tech-meta-instagram-drops-encrypted-dms',
        destination: 'https://www.ozonenetwork.news/social/meta/instagram-drops-encrypted-dms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
