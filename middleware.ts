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

// Redirect rules (old URL -> new URL)
const REDIRECTS: Record<string, { destination: string; permanent: boolean }> = {
  // Site index (Next.js reserves /index internally)
  '/index': { destination: '/site-index', permanent: true },
  // Trump variations
  '/donaldtrump': { destination: '/trump', permanent: true },
  '/donald-trump': { destination: '/trump', permanent: true },
  '/president-trump': { destination: '/trump', permanent: true },
  '/trump-wiki': { destination: '/trump', permanent: true },
  // TikTok variations
  '/tik-tok': { destination: '/tiktok', permanent: true },
  '/tik_tok': { destination: '/tiktok', permanent: true },
  // James Cameron variations
  '/cameron': { destination: '/entertainment/james-cameron', permanent: true },
  '/jamescameron': { destination: '/entertainment/james-cameron', permanent: true },
  '/james-cameron': { destination: '/entertainment/james-cameron', permanent: true },
  // Old URL patterns
  '/articles': { destination: '/blog', permanent: true },
  '/posts': { destination: '/blog', permanent: true },
  '/technology': { destination: '/', permanent: true },
  '/start-up-news': { destination: '/news', permanent: true },
  // Author page redirects (old service URLs -> new author URLs)
  '/service/conan-d': { destination: '/author/conan-d', permanent: true },
  '/service/jack-s': { destination: '/author/jack-s', permanent: true },
  // Removed authors
  '/service/skip-s': { destination: '/about', permanent: true },
  // Texas news articles moved to /news/texas
  '/texas-instruments-ti-cc23xx-and-cc26xx-long-range-low-energy-mesh-for-edge-computing': { 
    destination: '/news/texas/texas-instruments-ti-cc23xx-and-cc26xx', 
    permanent: true 
  },
  '/pegatron-opens-us-factory-tx': {
    destination: '/news/texas/pegatron-opens-us-factory',
    permanent: true
  },
  '/semiconductor-supplier-asml-to-open-in-hutto-co-op-district': {
    destination: '/news/texas/asml-hutto-semiconductor',
    permanent: true
  },
  '/austins-reign-as-a-tech-hub-might-be-coming-to-an-end': {
    destination: '/news/texas/austin-tech-hub-decline',
    permanent: true
  },
  '/lifetime-fitness-austin-new-location-opening-in-2025-november-1301-south-lamar': {
    destination: '/news/texas/lifetime-fitness-austin-new-location-opening-in-2025-november-1301-south-lamar',
    permanent: true
  },
  // Finance articles
  '/oanda-or-interactive-brokers-forex-trading-usa': {
    destination: '/finance',
    permanent: true
  },
  // Other news articles moved to /news
  '/does-doordash-take-snap': {
    destination: '/news/doordash-snap-ebt',
    permanent: true
  },
  // Canada news articles moved to /news/canada
  '/oh-canada-what-has-happened': {
    destination: '/news/canada/canada-political-crisis',
    permanent: true
  },
  // Crypto articles moved to /crypto
  '/txc-stable-coin': {
    destination: '/crypto/txc-stablecoin',
    permanent: true
  },
  // Video game articles moved to /videogames
  '/nintendo': {
    destination: '/videogame/nintendo',
    permanent: true
  },
  '/video-games/top-10-anime-games-2026': {
    destination: '/videogame/top-10-anime-games-2026',
    permanent: true
  },
  // Influencer pages
  '/who-is-serge-gatari-ai-course-review': {
    destination: '/influencer/serge-gatari',
    permanent: true
  },
  // Cars articles
  '/2025-nissan-z-vs-toyota-gr-supra-comparison': {
    destination: '/cars/2025-nissan-z-vs-toyota-gr-supra-comparison',
    permanent: true
  },
  // College guides
  '/non-degree-studies-at-university-of-texas-austin': {
    destination: '/college/guides/non-degree-studies-at-university-of-texas-austin',
    permanent: true
  },
  // SaaS articles
  '/render-vs-vercel-for-free-start-up-app-deployment': {
    destination: '/saas/news/render-vs-vercel-for-free-start-up-app-deployment',
    permanent: true
  },
  '/introducing-bitchat-jack-dorseys-game-changing-bluetooth-mesh-messaging-app': {
    destination: '/saas/news/introducing-bitchat-jack-dorseys-game-changing-bluetooth-mesh-messaging-app',
    permanent: true
  },
  // Define articles
  '/hedera-vs-solana-for-dapps': {
    destination: '/define/hedera-vs-solana-for-dapps',
    permanent: true
  },
  // SaaS company profiles moved to /saas
  '/cognyte-software-ltd-cgnt': {
    destination: '/saas/cognyte',
    permanent: true
  },

  '/mha/ultra-rumble': {
    destination: '/videogame/mha/ultra-rumble',
    permanent: true
  }
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
  // 6. NON-WWW TO WWW REDIRECT (Squarespace canonical domain)
  // ==========================================================================
  const host = request.headers.get('host') || '';
  if (host === 'objectwire.org') {
    const newUrl = new URL(request.url);
    newUrl.host = 'www.objectwire.org';
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
