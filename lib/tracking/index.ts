/**
 * ObjectWire Tracking System
 * 
 * Central export for all tracking functionality.
 * 
 * Usage:
 *   import { tracking } from '@/lib/tracking';
 *   
 *   // Initialize on app load
 *   tracking.initialize();
 *   
 *   // Track events
 *   tracking.trackEvent('button_click', { button: 'subscribe' });
 *   
 *   // Identify user
 *   tracking.identifyUser('user@email.com', 'John Doe');
 *   
 *   // Get user info
 *   const user = tracking.getUserIdentity();
 */

export * from './user-identity';
export * from './ga4';

import { 
  getAnonymousId, 
  recordSession, 
  getUserIdentity,
  identifyUser as identifyUserLocal,
  isReturningVisitor,
  isUserIdentified,
} from './user-identity';

import {
  initializeGA4,
  trackPageView,
  trackEvent,
  upgradeUserIdentity,
  trackArticleEngagement,
  trackTimeSpent,
  trackEmailSignup,
} from './ga4';

export const tracking = {
  // Initialize tracking on app load
  initialize: () => {
    getAnonymousId(); // Ensure ID exists
    recordSession(); // Record new session
    initializeGA4(); // Setup GA4
  },
  
  // Page tracking
  trackPageView,
  
  // Event tracking
  trackEvent,
  trackArticleEngagement,
  trackTimeSpent,
  trackEmailSignup,
  
  // User identity
  identifyUser: (email: string, name?: string) => {
    identifyUserLocal(email, name);
    upgradeUserIdentity(email, name);
  },
  getUserIdentity,
  isReturningVisitor,
  isUserIdentified,
  getAnonymousId,
};

export default tracking;
