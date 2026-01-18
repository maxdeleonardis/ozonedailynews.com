"use client";

import ReactGA from "react-ga4";
import { getCookiePreferences } from "./cookie-manager";

let isInitialized = false;

export function initializeAnalytics(): void {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn("GA Measurement ID not found");
    return;
  }

  const preferences = getCookiePreferences();

  if (preferences.analytics && !isInitialized) {
    ReactGA.initialize(measurementId, {
      gtagOptions: {
        anonymize_ip: true,
        cookie_flags: "SameSite=Lax;Secure",
      },
    });
    isInitialized = true;
  }
}

export function trackPageView(path: string, title?: string): void {
  const preferences = getCookiePreferences();

  if (!preferences.analytics) return;

  if (!isInitialized) {
    initializeAnalytics();
  }

  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: title || document.title,
  });
}

export function trackEvent(
  category: string,
  action: string,
  label?: string,
  value?: number
): void {
  const preferences = getCookiePreferences();

  if (!preferences.analytics) return;

  if (!isInitialized) {
    initializeAnalytics();
  }

  ReactGA.event({
    category,
    action,
    label,
    value,
  });
}

export function trackUserSignIn(method: string, userId?: string): void {
  trackEvent("Auth", "Sign In", method);

  if (userId) {
    ReactGA.set({ userId });
  }
}

export function trackUserSignOut(): void {
  trackEvent("Auth", "Sign Out");
}

export function trackArticleRead(articleId: string, timeSpent: number): void {
  trackEvent("Content", "Article Read", articleId, timeSpent);
}

export function trackSearch(query: string): void {
  ReactGA.event("search", {
    search_term: query,
  });
}

export function trackShare(method: string, contentType: string, contentId: string): void {
  ReactGA.event("share", {
    method,
    content_type: contentType,
    content_id: contentId,
  });
}

export function trackNewsletterSignup(email: string): void {
  trackEvent("Engagement", "Newsletter Signup", email);
}

export function trackOutboundLink(url: string): void {
  trackEvent("Navigation", "Outbound Link", url);
}

export function trackError(errorMessage: string, errorLocation: string): void {
  ReactGA.event("exception", {
    description: errorMessage,
    fatal: false,
  });

  trackEvent("Error", errorLocation, errorMessage);
}

export function trackTiming(
  category: string,
  variable: string,
  value: number,
  label?: string
): void {
  const preferences = getCookiePreferences();

  if (!preferences.analytics) return;

  ReactGA.event("timing_complete", {
    name: variable,
    value,
    event_category: category,
    event_label: label,
  });
}

// Advanced tracking for user engagement
export function trackScrollDepth(depth: number): void {
  trackEvent("Engagement", "Scroll Depth", `${depth}%`, depth);
}

export function trackTimeOnPage(timeInSeconds: number): void {
  trackTiming("Engagement", "Time on Page", timeInSeconds);
}

export function trackCommentPosted(articleId: string): void {
  trackEvent("Engagement", "Comment Posted", articleId);
}

export function trackVideoPlay(videoId: string): void {
  trackEvent("Media", "Video Play", videoId);
}

export function trackDownload(fileName: string): void {
  trackEvent("Downloads", "File Download", fileName);
}

// E-commerce tracking (if applicable)
export function trackPurchase(transactionId: string, value: number, currency: string = "USD"): void {
  const preferences = getCookiePreferences();

  if (!preferences.analytics) return;

  ReactGA.event("purchase", {
    transaction_id: transactionId,
    value,
    currency,
  });
}

// Custom dimensions
export function setUserProperty(propertyName: string, propertyValue: string): void {
  const preferences = getCookiePreferences();

  if (!preferences.analytics) return;

  if (!isInitialized) {
    initializeAnalytics();
  }

  ReactGA.set({ [propertyName]: propertyValue });
}

// Session management
export function startSession(): void {
  trackEvent("Session", "Start");
}

export function endSession(durationInSeconds: number): void {
  trackTiming("Session", "Duration", durationInSeconds);
  trackEvent("Session", "End");
}
