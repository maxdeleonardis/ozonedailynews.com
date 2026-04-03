import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

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
  // Analytics (do NOT strip _ga/_gl — those are GA4 cross-domain linker params)
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

export async function middleware(request: NextRequest) {
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
  // 0. PERMANENT 301 REDIRECTS
  // ==========================================================================
  const REDIRECTS: Record<string, string> = {
    // No matching page - redirect to nearest relevant section
    '/nycs-ranked-choice-voting-system-faces-scrutiny-after-mayoral-upset': '/news',
    '/ethiopia-evacuates-80-000-after-earthquakes-fears-of-volcanic-eruption': '/news',
    '/semiconductor-supplier-asml-to-open-in-hutto-co-op-district': '/tech',
    '/render-vs-vercel-for-free-start-up-app-deployment': '/tech',
    '/does-doordash-take-snap': '/news/doordash-snap-ebt',
    '/start-up-news': '/news',
    '/james-cameron': '/entertainment/james-cameron',
    '/opinion': '/',
    // Articles found under /define
    '/comet-ai-web-browser-vs-atlas-by-chatgpt': '/define/comet-ai-web-browser-vs-atlas-by-chatgpt',
    '/coding/nestjs-vs-nextjs-vs-express': '/define/nestjs-vs-nextjs-express',
    '/hedera-vs-solana-for-dapps': '/define/hedera-vs-solana-for-dapps',
    '/non-degree-studies-at-university-of-texas-austin': '/college/guides/non-degree-studies-at-university-of-texas-austin',
    '/2025-nissan-z-vs-toyota-gr-supra-comparison': '/cars/2025-nissan-z-vs-toyota-gr-supra-comparison',
    '/who-is-serge-gatari-ai-course-review': '/influencer/serge-gatari/ai-course-review',
    '/oanda-or-interactive-brokers-forex-trading-usa': '/finance/articles/oanda-or-interactive-brokers-forex-trading-usa',
    // Detective agency service pages
    '/austin-private-detective-agency/infidelity': '/service/infidelity',
    // MHA consolidated under /video-games
    '/mha': '/video-games/mha',
    '/mha/ultra-rumble-season-15-everything-we-know': '/video-games/mha/ultra-rumble/season-15',
    // Fortnite moved under /video-games/epic
    '/fortnite/epic-games-vbucks-shrinkflation-chapter-7-season-2-2026': '/video-games/epic/epic-games-vbucks-shrinkflation-chapter-7-season-2-2026',
    // Old Supabase DB-slug format → canonical URL (legacy blog/* redirects)
    '/blog/trump-news-trump-administration-10-billion-fee-tiktok-deal': '/trump/news/trump-administration-10-billion-fee-tiktok-deal',
    '/blog/youtube-news-omnibus-project-ken-jennings-john-roderick-suspended-ai-moderation': '/youtube/news/omnibus-project-ken-jennings-john-roderick-suspended-ai-moderation',
    '/blog/tech-perplexity-news-perplexity-personal-computer-ai-agent-developer-suite-ask-2026': '/tech/perplexity/news/perplexity-personal-computer-ai-agent-developer-suite-ask-2026',
    '/blog/tech-perplexity-news-crowdstrike-perplexity-comet-enterprise-falcon-security-partnership': '/tech/perplexity/news/crowdstrike-perplexity-comet-enterprise-falcon-security-partnership',
    '/blog/tech-news-tenstorrent-tt-quietbox-2-risc-v-ai-workstation-9999': '/tech/news/tenstorrent-tt-quietbox-2-risc-v-ai-workstation-9999',
    '/blog/tech-news-87-percent-ai-agent-pull-requests-security-flaws-dryrun-report-2026': '/tech/news/87-percent-ai-agent-pull-requests-security-flaws-dryrun-report-2026',
    '/blog/entertainment-news-conan-obrien-hosting-98th-oscars-abc-hulu': '/entertainment/news/conan-obrien-hosting-98th-oscars-abc-hulu',
    '/blog/entertainment-news-marty-supreme-enters-oscar-weekend-nine-nominations-low-odds': '/entertainment/news/marty-supreme-enters-oscar-weekend-nine-nominations-low-odds',
    '/blog/entertainment-apple-tv-spring-2026-premiere-schedule-imperfect-women-for-all-mankind-outcome-margos-got-money-troubles': '/entertainment/apple-tv/spring-2026-premiere-schedule-imperfect-women-for-all-mankind-outcome-margos-got-money-troubles',
    '/blog/elon-musk-news-tesla-terafab-chip-fabrication-launch-march-21-2026': '/elon-musk/news/tesla-terafab-chip-fabrication-launch-march-21-2026',
    '/blog/claude-news-federal-agencies-replace-claude-gpt-41-trump-executive-directive': '/claude/news/federal-agencies-replace-claude-gpt-41-trump-executive-directive',
    '/blog/copyright-news-letitia-james-sues-counter-strike': '/copyright/news/letitia-james-sues-counter-strike',
    '/blog/tech-news-anthropic-court-filings-disclose-5-billion-in-total-revenue': '/tech/news/anthropic-court-filings-disclose-5-billion-in-total-revenue',
    '/blog/video-games-nintendo-donkey-kong-bananza': '/video-games/nintendo/donkey-kong-bananza',
    '/blog/video-games-game-of-the-year-2026-Clair-Obscur': '/video-games/game-of-the-year-2026-Clair-Obscur',
    '/blog/video-games-news-outersloth-rejects-ai': '/video-games/news/outersloth-rejects-ai',
    '/blog/video-games-news-marathon-bungie-update-1-0-0-4-uesc-nerf-patch-notes': '/video-games/news/marathon-bungie-update-1-0-0-4-uesc-nerf-patch-notes',
    '/blog/video-games-nintendo-pokemon-pokopia-2-million-copies-4-days-switch-2': '/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2',
    '/blog/amazon-news-aws-uae-data-center-fire-iran-strikes-march-2026': '/amazon/news/aws-uae-data-center-fire-iran-strikes-march-2026',
    '/blog/amazon-news-andy-jassy-ai-will-reduce-headcount-many-roles-cnbc-february-2026': '/amazon/news/andy-jassy-ai-will-reduce-headcount-many-roles-cnbc-february-2026',
  };

  if (REDIRECTS[pathname]) {
    url.pathname = REDIRECTS[pathname];
    return NextResponse.redirect(url, 301);
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
  let response = NextResponse.next();

  // Refresh Supabase session cookies on every request so they don't expire
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );
  // Must call getUser to refresh the session — do not remove
  await supabase.auth.getUser();
  
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
