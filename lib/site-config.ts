// =============================================================================
// SITE-WIDE SEO CONFIG - Single Source of Truth
// All SEO settings, routes, and governance rules in one place
// =============================================================================

export const SITE_CONFIG = {
  // Base configuration
  name: 'ObjectWire',
  tagline: 'Precision Intelligence News Network',
  description: 'ObjectWire delivers verified, source-cited intelligence on business, technology, and policy.',
  url: 'https://www.objectwire.org', // WWW is canonical (Squarespace requirement)
  locale: 'en_US',
  
  // Contact
  email: 'contact@objectwire.org',
  correctionsEmail: 'corrections@objectwire.org',
  aiPartnershipsEmail: 'ai@objectwire.org',
  
  // Social
  social: {
    twitter: 'https://twitter.com/objectwire',
    linkedin: 'https://www.linkedin.com/company/objectwire',
    facebook: 'https://www.facebook.com/objectwire',
  },
  
  // Images
  defaultOgImage: '/og-image.png',
  logo: '/logo.png',
  logoWidth: 600,
  logoHeight: 60,
  
  // Founding
  foundingDate: '2024',
} as const;

// =============================================================================
// ROUTE REGISTRY - All valid routes with SEO metadata
// =============================================================================

export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  indexable: boolean;
  includeInNewsSitemap: boolean;
  type: 'static' | 'wiki' | 'news' | 'category' | 'utility';
}

export const ROUTE_REGISTRY: RouteConfig[] = [
  // ==========================================================================
  // CORE PAGES (Always index)
  // ==========================================================================
  {
    path: '/',
    title: 'ObjectWire | Precision Intelligence News Network',
    description: 'ObjectWire delivers verified, source-cited intelligence on business, technology, and policy.',
    priority: 1.0,
    changeFrequency: 'daily',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'static',
  },
  {
    path: '/about',
    title: 'About ObjectWire',
    description: 'Learn about ObjectWire, our mission, editorial team, and commitment to verified journalism.',
    priority: 0.5,
    changeFrequency: 'monthly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'static',
  },
  {
    path: '/contact',
    title: 'Contact Us',
    description: 'Get in touch with ObjectWire for tips, corrections, partnerships, or general inquiries.',
    priority: 0.4,
    changeFrequency: 'monthly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'static',
  },
  {
    path: '/editorial-standards',
    title: 'Editorial Standards',
    description: 'Our commitment to accuracy, fairness, and transparency in journalism.',
    priority: 0.6,
    changeFrequency: 'monthly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'static',
  },
  {
    path: '/corrections',
    title: 'Corrections Policy',
    description: 'How we handle corrections and updates to our published content.',
    priority: 0.4,
    changeFrequency: 'monthly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'static',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'How ObjectWire collects, uses, and protects your personal information.',
    priority: 0.3,
    changeFrequency: 'yearly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'utility',
  },
  
  // ==========================================================================
  // CATEGORY HUBS (High priority for SEO)
  // ==========================================================================
  {
    path: '/news',
    title: 'News',
    description: 'Latest verified news coverage from ObjectWire on business, technology, and policy.',
    priority: 0.9,
    changeFrequency: 'hourly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'category',
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'In-depth articles, analysis, and commentary from ObjectWire.',
    priority: 0.8,
    changeFrequency: 'daily',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'category',
  },
  {
    path: '/opinion',
    title: 'Opinion',
    description: 'Expert opinion and commentary on current events and industry trends.',
    priority: 0.7,
    changeFrequency: 'daily',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'category',
  },
  {
    path: '/health',
    title: 'Health News',
    description: 'Health and medical news coverage from ObjectWire.',
    priority: 0.7,
    changeFrequency: 'daily',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'category',
  },
  {
    path: '/coding',
    title: 'Coding & Development',
    description: 'Programming, software development, and tech tutorials.',
    priority: 0.7,
    changeFrequency: 'daily',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'category',
  },
  
  // ==========================================================================
  // WIKI/ENCYCLOPEDIA PAGES (High priority, high value)
  // ==========================================================================
  {
    path: '/trump',
    title: 'Donald Trump - Complete Biography and Presidency',
    description: 'Comprehensive information about Donald J. Trump, 45th and 47th President of the United States.',
    priority: 0.9,
    changeFrequency: 'daily',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'wiki',
  },
  {
    path: '/tiktok',
    title: 'TikTok - Complete Guide',
    description: 'Comprehensive guide to TikTok, the social media platform.',
    priority: 0.9,
    changeFrequency: 'daily',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'wiki',
  },
  {
    path: '/james-cameron',
    title: 'James Cameron - Filmmaker & Explorer',
    description: 'James Cameron is a Canadian filmmaker and deep-sea explorer. Director of Avatar, Titanic, and The Terminator franchise.',
    priority: 0.8,
    changeFrequency: 'weekly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'wiki',
  },
  
  // ==========================================================================
  // AUTHOR PAGES
  // ==========================================================================
  {
    path: '/author/conan-d',
    title: 'Conan D | Author & Journalist',
    description: 'Conan D is a journalist and podcaster at ObjectWire specializing in narrative journalism and long-form interviews.',
    priority: 0.6,
    changeFrequency: 'monthly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'static',
  },
  {
    path: '/author/jack-s',
    title: 'Jack S | Author & Journalist',
    description: 'Jack S is a journalist at ObjectWire committed to ethical journalism and fact-based reporting.',
    priority: 0.6,
    changeFrequency: 'monthly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'static',
  },
  
  // ==========================================================================
  // SERVICE PAGES
  // ==========================================================================
  {
    path: '/service/photography-videography-austin-tx',
    title: 'Photography & Videography Services | Austin, TX',
    description: 'Professional photography and videography services for investigative, legal, and private documentation purposes.',
    priority: 0.6,
    changeFrequency: 'monthly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'static',
  },
  {
    path: '/service/press-release',
    title: 'PR, Branding & Press Release Services',
    description: 'Professional PR, branding, and press release writing services for Austin-based businesses, startups, and nonprofits.',
    priority: 0.6,
    changeFrequency: 'monthly',
    indexable: true,
    includeInNewsSitemap: false,
    type: 'static',
  },
  
  // ==========================================================================
  // NO-INDEX PAGES (Never crawl/index)
  // ==========================================================================
  {
    path: '/admin',
    title: 'Admin',
    description: '',
    priority: 0,
    changeFrequency: 'never',
    indexable: false,
    includeInNewsSitemap: false,
    type: 'utility',
  },
  {
    path: '/api',
    title: 'API',
    description: '',
    priority: 0,
    changeFrequency: 'never',
    indexable: false,
    includeInNewsSitemap: false,
    type: 'utility',
  },
  {
    path: '/preview',
    title: 'Preview',
    description: '',
    priority: 0,
    changeFrequency: 'never',
    indexable: false,
    includeInNewsSitemap: false,
    type: 'utility',
  },
];

// =============================================================================
// URL NORMALIZATION RULES
// =============================================================================

/**
 * Normalize a URL slug
 */
export function normalizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/_+/g, '-')
    .replace(/[^a-z0-9-/]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Normalize a full URL path
 */
export function normalizePath(path: string): string {
  return path
    .toLowerCase()
    .replace(/\/+/g, '/')
    .replace(/\/$/, '')
    .replace(/^(?!\/)/, '/');
}

/**
 * Get canonical URL for a path
 */
export function getCanonicalUrl(path: string): string {
  return `${SITE_CONFIG.url}${normalizePath(path)}`;
}

// =============================================================================
// REDIRECT RULES
// =============================================================================

export interface RedirectRule {
  source: string;
  destination: string;
  permanent: boolean;
}

export const REDIRECT_RULES: RedirectRule[] = [
  // Trump variations
  { source: '/donaldtrump', destination: '/trump', permanent: true },
  { source: '/donald-trump', destination: '/trump', permanent: true },
  { source: '/president-trump', destination: '/trump', permanent: true },
  { source: '/trump-wiki', destination: '/trump', permanent: true },
  
  // TikTok variations
  { source: '/tik-tok', destination: '/tiktok', permanent: true },
  { source: '/tik_tok', destination: '/tiktok', permanent: true },
  
  // James Cameron variations
  { source: '/cameron', destination: '/james-cameron', permanent: true },
  { source: '/jamescameron', destination: '/james-cameron', permanent: true },
  
  // Old URL patterns
  { source: '/articles', destination: '/blog', permanent: true },
  { source: '/posts', destination: '/blog', permanent: true },
];

// =============================================================================
// BLOCKED PARAMETERS (Strip from URLs)
// =============================================================================

export const TRACKING_PARAMS = [
  // UTM parameters
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  
  // Referral tracking
  'ref',
  'referrer',
  'source',
  
  // Ad platform tracking
  'fbclid',
  'gclid',
  'gclsrc',
  'msclkid',
  'dclid',
  'zanpid',
  
  // Analytics
  '_ga',
  '_gl',
  'mc_cid',
  'mc_eid',
  
  // Social
  'igshid',
  'twclid',
  
  // Other
  'oly_enc_id',
  'oly_anon_id',
  'vero_id',
  '__s',
  '_hsenc',
  '_hsmi',
  'mkt_tok',
] as const;

export const DUPLICATE_PARAMS = [
  'sort',
  'filter',
  'view',
  'order',
  'page', // For non-paginated content
] as const;

// =============================================================================
// BLOCKED CRAWLERS
// =============================================================================

export const BLOCKED_USER_AGENTS = [
  'AhrefsBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'BLEXBot',
  'DataForSeoBot',
  'serpstatbot',
  'Bytespider',
] as const;

// =============================================================================
// ROUTE HELPERS
// =============================================================================

/**
 * Get route config by path
 */
export function getRouteConfig(path: string): RouteConfig | undefined {
  const normalized = normalizePath(path);
  return ROUTE_REGISTRY.find(r => r.path === normalized);
}

/**
 * Check if a path should be indexed
 */
export function shouldIndex(path: string): boolean {
  const config = getRouteConfig(path);
  if (config) return config.indexable;
  
  // Default checks for unknown paths
  const normalized = normalizePath(path);
  if (normalized.startsWith('/api')) return false;
  if (normalized.startsWith('/admin')) return false;
  if (normalized.startsWith('/preview')) return false;
  if (normalized.includes('draft')) return false;
  
  return true;
}

/**
 * Check if a path should be in news sitemap
 */
export function shouldIncludeInNewsSitemap(path: string): boolean {
  const config = getRouteConfig(path);
  return config?.includeInNewsSitemap ?? false;
}

/**
 * Get all indexable routes
 */
export function getIndexableRoutes(): RouteConfig[] {
  return ROUTE_REGISTRY.filter(r => r.indexable);
}

/**
 * Get redirect for a path
 */
export function getRedirect(path: string): RedirectRule | undefined {
  const normalized = normalizePath(path);
  return REDIRECT_RULES.find(r => normalizePath(r.source) === normalized);
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  SITE_CONFIG,
  ROUTE_REGISTRY,
  REDIRECT_RULES,
  TRACKING_PARAMS,
  DUPLICATE_PARAMS,
  BLOCKED_USER_AGENTS,
  normalizeSlug,
  normalizePath,
  getCanonicalUrl,
  getRouteConfig,
  shouldIndex,
  shouldIncludeInNewsSitemap,
  getIndexableRoutes,
  getRedirect,
};
