// lib/site-config.ts
// All site identity values are driven by env vars.
// Override per Railway service via environment variables.
// Fallback to ozonedailynews.com flagship values.

export const SITE_CONFIG = {
  name:           process.env.NEXT_PUBLIC_SITE_NAME      ?? 'OzoneNews',
  legalName:      process.env.NEXT_PUBLIC_SITE_LEGAL     ?? 'Ozone Network News LLC',
  publisherName:  process.env.NEXT_PUBLIC_SITE_PUBLISHER ?? 'Ozone Network News',
  url:            process.env.NEXT_PUBLIC_SITE_URL       ?? 'https://www.ozonedailynews.com',
  logo:           process.env.NEXT_PUBLIC_SITE_LOGO      ?? 'https://www.ozonedailynews.com/ozonednews-logo.png',
  email:          process.env.NEXT_PUBLIC_SITE_EMAIL     ?? 'editorial@ozonedailynews.com',
  twitter:        process.env.NEXT_PUBLIC_SITE_TWITTER   ?? '@ozonedailynews',
  sameAs: [
    process.env.NEXT_PUBLIC_SITE_TWITTER_URL  ?? 'https://twitter.com/ozonedailynews',
    process.env.NEXT_PUBLIC_SITE_LINKEDIN_URL ?? 'https://www.linkedin.com/company/ozonedailynews',
  ],
  // Sitemap scope guards — sub-brands set these to prevent cross-contamination.
  // null = no filter (flagship default — all categories and all URL prefixes allowed).
  // Examples:
  //   NEXT_PUBLIC_SITE_CATEGORIES=Finance,News,Crypto
  //   NEXT_PUBLIC_SITE_SLUG_PREFIXES=/finance,/jobs,/markets
  validCategories: process.env.NEXT_PUBLIC_SITE_CATEGORIES
    ? process.env.NEXT_PUBLIC_SITE_CATEGORIES.split(',').map((s) => s.trim()).filter(Boolean)
    : null,
  slugPrefixes: process.env.NEXT_PUBLIC_SITE_SLUG_PREFIXES
    ? process.env.NEXT_PUBLIC_SITE_SLUG_PREFIXES.split(',').map((s) => s.trim()).filter(Boolean)
    : null,
  // Trust policy pages (all required for NewsMediaOrganization schema)
  publishingPrinciples:       '/editorial-standards',
  correctionsPolicy:          '/corrections',
  actionableFeedbackPolicy:   '/contact',
  ethicsPolicy:               '/editorial-standards#ethics',
  verificationFactCheckingPolicy: '/editorial-standards#verification',
  diversityPolicy:            '/editorial-standards#diversity',
  unnamedSourcesPolicy:       '/editorial-standards#unnamed-sources',
  masthead:                   '/about',
  ownershipFundingInfo:       '/about#ownership',
} as const;
