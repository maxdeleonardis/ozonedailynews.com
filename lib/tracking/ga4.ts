/**
 * Google Analytics 4 Integration
 * 
 * Handles all GA4 communication and event tracking.
 * Works with user-identity.ts to maintain consistent user IDs.
 */

import { getAnonymousId, getUserIdentity, recordPageView } from './user-identity';

// GA4 Measurement ID from environment
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Initialize GA4 with user identity
export function initializeGA4(): void {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;
  
  const identity = getUserIdentity();
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    user_id: identity.anonymousId,
    user_properties: {
      anonymous_id: identity.anonymousId,
      has_email: identity.email ? 'yes' : 'no',
      is_returning_visitor: identity.isReturningVisitor ? 'yes' : 'no',
      visit_count: identity.visitCount,
      first_visit_date: identity.firstVisit,
    },
  });
}

// Track page view
export function trackPageView(url: string): void {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;
  
  // Record in local storage
  recordPageView(url);
  
  // Send to GA4
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

// Track custom event
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const identity = getUserIdentity();
  
  window.gtag('event', eventName, {
    ...params,
    anonymous_id: identity.anonymousId,
    user_email: identity.email || undefined,
  });
}

// Upgrade user identity in GA4 when email is provided
export function upgradeUserIdentity(email: string, name?: string): void {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;
  
  const identity = getUserIdentity();
  const hashedEmail = btoa(email).substring(0, 32);
  
  // Update GA4 user properties
  window.gtag('config', GA_MEASUREMENT_ID, {
    user_id: identity.anonymousId, // Keep same ID for stitching
    user_properties: {
      anonymous_id: identity.anonymousId,
      email_hash: hashedEmail,
      has_email: 'yes',
      user_name: name || undefined,
      is_returning_visitor: identity.isReturningVisitor ? 'yes' : 'no',
      visit_count: identity.visitCount,
      first_visit_date: identity.firstVisit,
      identified_date: new Date().toISOString(),
      sessions_before_identification: identity.sessions.length,
    },
  });
  
  // Track identification event
  trackEvent('user_identified', {
    method: 'email',
    sessions_before_id: identity.sessions.length,
    visits_before_id: identity.visitCount,
    days_to_identification: Math.floor(
      (Date.now() - new Date(identity.firstVisit).getTime()) / (1000 * 60 * 60 * 24)
    ),
  });
}

// Track article engagement
export function trackArticleEngagement(
  articleSlug: string,
  articleTitle: string,
  category: string,
  scrollPercentage: number
): void {
  trackEvent('article_engagement', {
    article_slug: articleSlug,
    article_title: articleTitle.substring(0, 100),
    article_category: category,
    scroll_percentage: Math.round(scrollPercentage),
  });
}

// Track time spent on page
export function trackTimeSpent(pageUrl: string, seconds: number): void {
  trackEvent('time_spent', {
    page_url: pageUrl,
    seconds: seconds,
    minutes: Math.round(seconds / 60),
  });
}

// Track email signup
export function trackEmailSignup(source: string): void {
  trackEvent('email_signup', {
    signup_source: source,
  });
}

// Type declarations
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}
