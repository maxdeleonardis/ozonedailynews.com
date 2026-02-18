import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// =============================================================================
// SEO GOVERNANCE MIDDLEWARE
// Enforces Duda-level URL normalization, redirects, and canonical management
// Uses centralized config from lib/site-config.ts
// =============================================================================

// NOTE: We inline these values here because middleware runs on Edge Runtime
// and cannot import from lib/ directly in all cases
const SITE_URL = 'https://www.objectwire.org'; // Changed to www as canonical

// Tracking parameters to strip (prevents index bloat)
const PARAMS_TO_STRIP = [
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
];

// Redirect rules removed to prevent redirect loops

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  
  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // Static files
  ) {
    return NextResponse.next();
  }
  
  // ==========================================================================
  // 1. TRAILING SLASH NORMALIZATION (Remove trailing slashes)
  // ==========================================================================
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }
  
  // ==========================================================================
  // 2. LOWERCASE ENFORCEMENT
  // ==========================================================================
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }
  
  // ==========================================================================
  // 3. DOUBLE SLASH NORMALIZATION
  // ==========================================================================
  if (pathname.includes('//')) {
    url.pathname = pathname.replace(/\/+/g, '/');
    return NextResponse.redirect(url, 308);
  }
  
  // ==========================================================================
  // 4. STRIP TRACKING PARAMETERS (Canonical enforcement)
  // ==========================================================================
  let hasTrackingParams = false;
  for (const param of PARAMS_TO_STRIP) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      hasTrackingParams = true;
    }
  }
  
  if (hasTrackingParams) {
    return NextResponse.redirect(url, 308);
  }
  
  // ==========================================================================
  // 5. NON-WWW TO WWW REDIRECT (Canonical domain)
  // ==========================================================================
  const host = request.headers.get('host') || '';
  if (host === 'objectwire.org') {
    const newUrl = new URL(request.url);
    newUrl.host = 'www.objectwire.org';
    return NextResponse.redirect(newUrl, 308);
  }
  
  // ==========================================================================
  // 6. SET SEO HEADERS
  // ==========================================================================
  const response = NextResponse.next();
  
  // X-Robots-Tag for non-indexable routes
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/(admin)') ||
    pathname.startsWith('/preview') ||
    pathname.includes('draft')
  ) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  
  // Cache headers for better performance
  if (!pathname.startsWith('/api')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=60, stale-while-revalidate=120'
    );
  }
  
  return response;
}

// =============================================================================
// MATCHER CONFIG
// =============================================================================
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};
