/**
 * Permanent 301 redirects for ObjectWire.
 *
 * HOW TO ADD:    Push an entry to the correct section array below.
 * HOW TO REMOVE: Delete or comment out the entry.
 * HOW TO TEST:   npm run dev, then curl -I http://localhost:3000/old-path
 *
 * IMPORTANT: Do NOT add wildcard redirects for paths that have real article
 * pages (e.g. /tech/:path+, /video-games/:path+). Those will block articles
 * from rendering. Only redirect genuinely dead paths with no content.
 */

type R = { source: string; destination: string; permanent: boolean };

export const redirects: R[] = [

  // ==========================================================================
  // BLOG MIGRATIONS — old /blog/* paths
  // ==========================================================================
  {
    source: '/blog/sam-altman-visits-hedera-team',
    destination: '/sam-altman-visits-hedera-team',
    permanent: true,
  },
  {
    source: '/blitzy-ai-powered-autonomous-software-development-platform-developer-review-for-2025',
    destination: '/blitzy-ai-powered-autonomous-software-development',
    permanent: true,
  },

  // ==========================================================================
  // SIDEMEN CONTENT MIGRATION — /sidemen → /youtube/sidemen
  // Date: February 7, 2026
  // ==========================================================================
  { source: '/sidemen',           destination: '/youtube/sidemen',           permanent: true },
  { source: '/sidemen/ksi',       destination: '/youtube/sidemen/ksi',       permanent: true },
  { source: '/sidemen/miniminter', destination: '/youtube/sidemen/miniminter', permanent: true },
  { source: '/sidemen/zerkaa',    destination: '/youtube/sidemen/zerkaa',    permanent: true },
  { source: '/sidemen/tbjzl',     destination: '/youtube/sidemen/tbjzl',     permanent: true },
  { source: '/sidemen/behzinga',  destination: '/youtube/sidemen/behzinga',  permanent: true },
  { source: '/sidemen/vikkstar',  destination: '/youtube/sidemen/vikkstar',  permanent: true },
  { source: '/sidemen/w2s',       destination: '/youtube/sidemen/w2s',       permanent: true },
  { source: '/sidemen/:path*',    destination: '/youtube/sidemen/:path*',    permanent: true },

  // ==========================================================================
  // CRYPTO DEFINITIONS — /crypto/tether → /define/crypto/tether
  // Date: April 2, 2026
  // ==========================================================================
  { source: '/crypto/tether',         destination: '/define/crypto/tether',         permanent: true },
  { source: '/crypto/txc-stablecoin', destination: '/define/crypto/txc-stablecoin', permanent: true },

  // ==========================================================================
  // MISC DEAD PATHS — no content, redirect to nearest hub
  // ==========================================================================
  { source: '/blog',           destination: '/news',         permanent: true },
  { source: '/history',        destination: '/news',         permanent: true },
  { source: '/index',          destination: '/news',         permanent: true },
  { source: '/team',           destination: '/news',         permanent: true },
  { source: '/research',       destination: '/news',         permanent: true },
  { source: '/objectwire',     destination: '/news',         permanent: true },
  { source: '/missing-persons', destination: '/news',        permanent: true },
  { source: '/rocket-league',  destination: '/news',         permanent: true },
  { source: '/bank-of-america', destination: '/news',        permanent: true },
  { source: '/contactus',      destination: '/',             permanent: true },
  { source: '/mha',            destination: '/video-games',  permanent: true },
  { source: '/james-cameron',  destination: '/entertainment',permanent: true },

  // Tag pages — no individual tag pages exist
  { source: '/tags/:path*',    destination: '/news', permanent: true },

  // Service pages — detective agency
  { source: '/service/:path*', destination: '/austin-private-detective-agency', permanent: true },
  { source: '/service',        destination: '/austin-private-detective-agency', permanent: true },

];
