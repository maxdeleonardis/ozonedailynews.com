// =============================================================================
// usePageTracking — scroll depth + time-on-page tracking
// =============================================================================
// Drop into any page component (or the global layout) to automatically:
//   - Fire GA4 article_engagement events at 25 / 50 / 75 / 100% scroll
//   - Fire a time_spent event on page unload
// =============================================================================

'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { tracking } from './tracking';

export function usePageTracking() {
  const pathname = usePathname();
  const startTimeRef = useRef<number>(Date.now());
  const milestonesHit = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset on each navigation
    startTimeRef.current = Date.now();
    milestonesHit.current = new Set();

    function getScrollPercent(): number {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight <= 0) return 100;
      return Math.round((scrollTop / docHeight) * 100);
    }

    function onScroll() {
      const pct = getScrollPercent();
      const milestones = [25, 50, 75, 100];
      for (const m of milestones) {
        if (pct >= m && !milestonesHit.current.has(m)) {
          milestonesHit.current.add(m);
          tracking.trackArticleEngagement(
            pathname,
            document.title,
            '', // category not needed here — GA4 filters by page_path
            m,
          );
        }
      }
    }

    function onUnload() {
      const seconds = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (seconds > 2) {
        tracking.trackTimeSpent(pathname, seconds);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('beforeunload', onUnload);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('beforeunload', onUnload);
      // Also fire on client-side navigation away
      onUnload();
    };
  }, [pathname]);
}
