'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { tracking } from '@/lib/tracking';
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

// Wraps AnalyticsTracker in Suspense (required for useSearchParams)
export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  );
}
