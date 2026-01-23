// =============================================================================
// SEO GOVERNANCE - Duda-Level URL and Canonical Management
// Prevents duplicate content, enforces canonical URLs, manages redirects
// =============================================================================

import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = 'https://objectwire.org';

// =============================================================================
// URL NORMALIZATION RULES
// =============================================================================

/**
 * Normalize a URL slug to prevent duplicates
 * - Lowercase only
 * - No trailing slashes
 * - No double slashes
 * - Hyphens instead of underscores
 * - No special characters except hyphens
 */
export function normalizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Spaces to hyphens
    .replace(/_+/g, '-')            // Underscores to hyphens
    .replace(/[^a-z0-9-]/g, '')     // Remove special chars
    .replace(/-+/g, '-')            // Multiple hyphens to single
    .replace(/^-|-$/g, '');         // Remove leading/trailing hyphens
}

/**
 * Normalize a full URL path
 */
export function normalizeUrlPath(path: string): string {
  return path
    .toLowerCase()
    .replace(/\/+/g, '/')           // Multiple slashes to single
    .replace(/\/$/, '')             // Remove trailing slash
    .replace(/^(?!\/)/, '/');       // Ensure leading slash
}

/**
 * Get canonical URL for a path
 */
export function getCanonicalUrl(path: string): string {
  const normalizedPath = normalizeUrlPath(path);
  return `${BASE_URL}${normalizedPath}`;
}

// =============================================================================
// SLUG REGISTRY - Track all valid slugs to prevent duplicates
// =============================================================================

// Known valid slugs (add all your routes here)
const RESERVED_SLUGS = new Set([
  // Core pages
  '',
  'about',
  'contact',
  'news',
  'blog',
  'opinion',
  'privacy-policy',
  'editorial-standards',
  'corrections',
  'get-help',
  
  // Wiki pages
  'trump',
  'tiktok',
  'james-cameron',
  
  // Categories
  'health',
  'coding',
  'analyst',
  
  // Admin (should not be indexed)
  'admin',
  'api',
]);

// Slugs that should NEVER be indexed
const NO_INDEX_SLUGS = new Set([
  'admin',
  'api',
  'preview',
  'draft',
  'test',
  '(admin)',
]);

/**
 * Check if a slug is reserved/valid
 */
export function isReservedSlug(slug: string): boolean {
  return RESERVED_SLUGS.has(normalizeSlug(slug));
}

/**
 * Check if a slug should be indexed
 */
export function shouldIndex(slug: string): boolean {
  const normalized = normalizeSlug(slug);
  
  // Check explicit no-index list
  if (NO_INDEX_SLUGS.has(normalized)) return false;
  
  // Check for patterns that shouldn't be indexed
  if (normalized.startsWith('api')) return false;
  if (normalized.startsWith('admin')) return false;
  if (normalized.startsWith('preview')) return false;
  if (normalized.includes('draft')) return false;
  
  return true;
}

// =============================================================================
// REDIRECT MANAGEMENT
// =============================================================================

interface RedirectRule {
  source: string;
  destination: string;
  permanent: boolean;
}

// Define all redirects in one place
export const REDIRECT_RULES: RedirectRule[] = [
  // Example: Old URL -> New URL
  // { source: '/old-page', destination: '/new-page', permanent: true },
  
  // Common typos and variations
  { source: '/donaldtrump', destination: '/trump', permanent: true },
  { source: '/donald-trump', destination: '/trump', permanent: true },
  { source: '/president-trump', destination: '/trump', permanent: true },
  { source: '/tik-tok', destination: '/tiktok', permanent: true },
  { source: '/cameroon', destination: '/james-cameron', permanent: false },
];

/**
 * Get redirect destination for a path
 */
export function getRedirect(path: string): RedirectRule | null {
  const normalizedPath = normalizeUrlPath(path);
  return REDIRECT_RULES.find(r => normalizeUrlPath(r.source) === normalizedPath) || null;
}

// =============================================================================
// QUERY PARAMETER HANDLING (Prevent index bloat)
// =============================================================================

// Parameters that should be IGNORED (stripped from canonical)
const IGNORED_PARAMS = new Set([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'ref',
  'fbclid',
  'gclid',
  'msclkid',
  '_ga',
  'mc_cid',
  'mc_eid',
]);

// Parameters that create DUPLICATE content (should redirect to base)
const DUPLICATE_PARAMS = new Set([
  'sort',
  'filter',
  'view',
  'page', // For non-paginated content
]);

/**
 * Clean URL by removing tracking/duplicate params
 */
export function cleanUrl(url: string): string {
  try {
    const urlObj = new URL(url, BASE_URL);
    
    // Remove ignored params
    IGNORED_PARAMS.forEach(param => {
      urlObj.searchParams.delete(param);
    });
    
    // Build clean URL
    const cleanPath = normalizeUrlPath(urlObj.pathname);
    const remainingParams = urlObj.searchParams.toString();
    
    return remainingParams 
      ? `${BASE_URL}${cleanPath}?${remainingParams}`
      : `${BASE_URL}${cleanPath}`;
  } catch {
    return `${BASE_URL}${normalizeUrlPath(url)}`;
  }
}

/**
 * Check if URL has duplicate-causing params
 */
export function hasDuplicateParams(url: string): boolean {
  try {
    const urlObj = new URL(url, BASE_URL);
    for (const param of DUPLICATE_PARAMS) {
      if (urlObj.searchParams.has(param)) return true;
    }
    return false;
  } catch {
    return false;
  }
}

// =============================================================================
// MIDDLEWARE HELPERS
// =============================================================================

/**
 * Process URL in middleware for SEO governance
 * Returns redirect response if needed, null otherwise
 */
export function processUrlForSEO(request: NextRequest): NextResponse | null {
  const url = request.nextUrl.clone();
  const path = url.pathname;
  
  // 1. Check for explicit redirects
  const redirectRule = getRedirect(path);
  if (redirectRule) {
    return NextResponse.redirect(
      new URL(redirectRule.destination, BASE_URL),
      redirectRule.permanent ? 308 : 307
    );
  }
  
  // 2. Normalize URL (trailing slash, case)
  const normalizedPath = normalizeUrlPath(path);
  if (path !== normalizedPath && path !== '/') {
    url.pathname = normalizedPath;
    return NextResponse.redirect(url, 308);
  }
  
  // 3. Strip tracking parameters (redirect to clean URL)
  let hasTrackingParams = false;
  IGNORED_PARAMS.forEach(param => {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      hasTrackingParams = true;
    }
  });
  
  if (hasTrackingParams) {
    return NextResponse.redirect(url, 308);
  }
  
  // 4. Handle duplicate-causing params
  if (hasDuplicateParams(request.url)) {
    // For SEO, we don't redirect but ensure canonical is set
    // This is handled in the page metadata
  }
  
  return null;
}

// =============================================================================
// METADATA HELPERS
// =============================================================================

/**
 * Generate robots meta based on page characteristics
 */
export function getRobotsDirective(options: {
  slug: string;
  hasContent: boolean;
  isPublished?: boolean;
  isDraft?: boolean;
}): { index: boolean; follow: boolean } {
  const { slug, hasContent, isPublished = true, isDraft = false } = options;
  
  // Never index these
  if (!shouldIndex(slug)) {
    return { index: false, follow: false };
  }
  
  // Don't index drafts
  if (isDraft) {
    return { index: false, follow: true };
  }
  
  // Don't index unpublished
  if (!isPublished) {
    return { index: false, follow: true };
  }
  
  // Don't index empty pages (soft 404 prevention)
  if (!hasContent) {
    return { index: false, follow: true };
  }
  
  return { index: true, follow: true };
}

/**
 * Validate that a page should exist (prevent soft 404s)
 */
export function validatePageExists(
  slug: string,
  content: any
): { valid: boolean; reason?: string } {
  if (!content) {
    return { valid: false, reason: 'No content found' };
  }
  
  if (typeof content === 'object' && Object.keys(content).length === 0) {
    return { valid: false, reason: 'Empty content object' };
  }
  
  if (typeof content === 'string' && content.trim().length < 100) {
    return { valid: false, reason: 'Content too short' };
  }
  
  return { valid: true };
}

// =============================================================================
// EXPORTS
// =============================================================================

export const SEOGovernance = {
  // URL handling
  normalizeSlug,
  normalizeUrlPath,
  getCanonicalUrl,
  cleanUrl,
  
  // Slug management
  isReservedSlug,
  shouldIndex,
  
  // Redirects
  getRedirect,
  REDIRECT_RULES,
  
  // Query params
  hasDuplicateParams,
  IGNORED_PARAMS,
  DUPLICATE_PARAMS,
  
  // Middleware
  processUrlForSEO,
  
  // Metadata
  getRobotsDirective,
  validatePageExists,
  
  // Constants
  BASE_URL,
};

export default SEOGovernance;
