'use client';

import Script from 'next/script';
import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { tracking, GA_MEASUREMENT_ID } from '@/lib/tracking';
import { usePageTracking } from '@/lib/use-page-tracking';

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize visitor identity on first mount
  useEffect(() => {
    tracking.initialize();
  }, []);

  // Track page views on every client-side navigation
  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      tracking.trackPageView(url);
    }
  }, [pathname, searchParams]);

  // Scroll depth + time-on-page
  usePageTracking();

  return null;
}

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      {/* Google tag (gtag.js) — loads async, does not block render */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,
              cookie_flags: 'SameSite=Lax;Secure',
            });
          `,
        }}
      />
      {/* Client tracker: page views, scroll depth, visitor identity */}
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  );
}
