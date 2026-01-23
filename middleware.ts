import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// =============================================================================
// SEO GOVERNANCE MIDDLEWARE
// Enforces Duda-level URL normalization, redirects, and canonical management
// Uses centralized config from lib/site-config.ts
// =============================================================================

// NOTE: We inline these values here because middleware runs on Edge Runtime
// and cannot import from lib/ directly in all cases
const SITE_URL = 'https://objectwire.org';

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

// Redirect rules (old URL -> new URL)
const REDIRECTS: Record<string, { destination: string; permanent: boolean }> = {
  // Trump variations
  '/donaldtrump': { destination: '/trump', permanent: true },
  '/donald-trump': { destination: '/trump', permanent: true },
  '/president-trump': { destination: '/trump', permanent: true },
  '/trump-wiki': { destination: '/trump', permanent: true },
  // TikTok variations
  '/tik-tok': { destination: '/tiktok', permanent: true },
  '/tik_tok': { destination: '/tiktok', permanent: true },
  // James Cameron variations
  '/cameron': { destination: '/james-cameron', permanent: true },
  '/jamescameron': { destination: '/james-cameron', permanent: true },
  // Old URL patterns
  '/articles': { destination: '/blog', permanent: true },
  '/posts': { destination: '/blog', permanent: true },
  // Author page redirects (old service URLs -> new author URLs)
  '/service/conan-d': { destination: '/author/conan-d', permanent: true },
  '/service/jack-s': { destination: '/author/jack-s', permanent: true },
  // Removed authors
  '/service/skip-s': { destination: '/about', permanent: true },
};

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
  // 1. EXPLICIT REDIRECTS
  // ==========================================================================
  const lowercasePath = pathname.toLowerCase();
  const redirect = REDIRECTS[lowercasePath];
  if (redirect) {
    return NextResponse.redirect(
      new URL(redirect.destination, request.url),
      redirect.permanent ? 308 : 307
    );
  }
  
  // ==========================================================================
  // 2. TRAILING SLASH NORMALIZATION (Remove trailing slashes)
  // ==========================================================================
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }
  
  // ==========================================================================
  // 3. LOWERCASE ENFORCEMENT
  // ==========================================================================
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }
  
  // ==========================================================================
  // 4. DOUBLE SLASH NORMALIZATION
  // ==========================================================================
  if (pathname.includes('//')) {
    url.pathname = pathname.replace(/\/+/g, '/');
    return NextResponse.redirect(url, 308);
  }
  
  // ==========================================================================
  // 5. STRIP TRACKING PARAMETERS (Canonical enforcement)
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
  // 6. WWW TO NON-WWW REDIRECT
  // ==========================================================================
  const host = request.headers.get('host') || '';
  if (host.startsWith('www.')) {
    const newUrl = new URL(request.url);
    newUrl.host = host.replace('www.', '');
    return NextResponse.redirect(newUrl, 308);
  }
  
  // ==========================================================================
  // 7. SET SEO HEADERS
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
