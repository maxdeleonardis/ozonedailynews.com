"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView, initializeAnalytics } from "@/lib/analytics";

export function usePageTracking() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize analytics on mount
    initializeAnalytics();
  }, []);

  useEffect(() => {
    // Track page view on route change
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);
}
