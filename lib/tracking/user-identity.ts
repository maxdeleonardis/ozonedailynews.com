/**
 * ObjectWire User Tracking System
 * 
 * This module handles persistent user identification across sessions:
 * 1. Anonymous visitors get a unique ID stored in localStorage
 * 2. All sessions are tracked under this anonymous ID
 * 3. When user provides email, we "upgrade" their identity
 * 4. Historical data is linked to their email via the anonymous ID
 */

// Keys for localStorage
const STORAGE_KEYS = {
  ANONYMOUS_ID: 'ow_anonymous_id',
  USER_EMAIL: 'ow_user_email',
  USER_NAME: 'ow_user_name',
  FIRST_VISIT: 'ow_first_visit',
  VISIT_COUNT: 'ow_visit_count',
  LAST_VISIT: 'ow_last_visit',
  IDENTIFIED_AT: 'ow_identified_at',
  SESSIONS: 'ow_sessions',
} as const;

export interface UserSession {
  id: string;
  startTime: string;
  pages: string[];
  duration?: number;
}

export interface UserIdentity {
  anonymousId: string;
  email: string | null;
  name: string | null;
  firstVisit: string;
  visitCount: number;
  lastVisit: string;
  identifiedAt: string | null;
  isReturningVisitor: boolean;
  sessions: UserSession[];
}

// Generate a unique anonymous ID
function generateAnonymousId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 15);
  return `anon_${timestamp}_${randomPart}`;
}

// Get or create anonymous ID (persists across sessions)
export function getAnonymousId(): string {
  if (typeof window === 'undefined') return '';
  
  let anonymousId = localStorage.getItem(STORAGE_KEYS.ANONYMOUS_ID);
  
  if (!anonymousId) {
    anonymousId = generateAnonymousId();
    localStorage.setItem(STORAGE_KEYS.ANONYMOUS_ID, anonymousId);
    localStorage.setItem(STORAGE_KEYS.FIRST_VISIT, new Date().toISOString());
    localStorage.setItem(STORAGE_KEYS.VISIT_COUNT, '1');
  }
  
  return anonymousId;
}

// Record a new session/visit
export function recordSession(): UserSession {
  if (typeof window === 'undefined') {
    return { id: '', startTime: '', pages: [] };
  }
  
  // Increment visit count
  const visitCount = parseInt(localStorage.getItem(STORAGE_KEYS.VISIT_COUNT) || '0', 10);
  localStorage.setItem(STORAGE_KEYS.VISIT_COUNT, String(visitCount + 1));
  localStorage.setItem(STORAGE_KEYS.LAST_VISIT, new Date().toISOString());
  
  // Create new session
  const session: UserSession = {
    id: `session_${Date.now()}`,
    startTime: new Date().toISOString(),
    pages: [window.location.pathname],
  };
  
  // Add to sessions history (keep last 50)
  const sessions = getSessions();
  sessions.push(session);
  if (sessions.length > 50) {
    sessions.shift();
  }
  localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
  
  return session;
}

// Get all stored sessions
export function getSessions(): UserSession[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const sessions = localStorage.getItem(STORAGE_KEYS.SESSIONS);
    return sessions ? JSON.parse(sessions) : [];
  } catch {
    return [];
  }
}

// Add page to current session
export function recordPageView(pathname: string): void {
  if (typeof window === 'undefined') return;
  
  const sessions = getSessions();
  if (sessions.length > 0) {
    const currentSession = sessions[sessions.length - 1];
    if (!currentSession.pages.includes(pathname)) {
      currentSession.pages.push(pathname);
      localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
    }
  }
}

// Identify user with email (upgrades anonymous to known)
export function identifyUser(email: string, name?: string): UserIdentity {
  if (typeof window === 'undefined') {
    return getDefaultIdentity();
  }
  
  // Store identification
  localStorage.setItem(STORAGE_KEYS.USER_EMAIL, email);
  if (name) {
    localStorage.setItem(STORAGE_KEYS.USER_NAME, name);
  }
  localStorage.setItem(STORAGE_KEYS.IDENTIFIED_AT, new Date().toISOString());
  
  return getUserIdentity();
}

// Check if user is identified (has email)
export function isUserIdentified(): boolean {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem(STORAGE_KEYS.USER_EMAIL);
}

// Check if returning visitor
export function isReturningVisitor(): boolean {
  if (typeof window === 'undefined') return false;
  const visitCount = parseInt(localStorage.getItem(STORAGE_KEYS.VISIT_COUNT) || '0', 10);
  return visitCount > 1;
}

// Get complete user identity
export function getUserIdentity(): UserIdentity {
  if (typeof window === 'undefined') {
    return getDefaultIdentity();
  }
  
  const anonymousId = getAnonymousId();
  const visitCount = parseInt(localStorage.getItem(STORAGE_KEYS.VISIT_COUNT) || '1', 10);
  
  return {
    anonymousId,
    email: localStorage.getItem(STORAGE_KEYS.USER_EMAIL),
    name: localStorage.getItem(STORAGE_KEYS.USER_NAME),
    firstVisit: localStorage.getItem(STORAGE_KEYS.FIRST_VISIT) || new Date().toISOString(),
    visitCount,
    lastVisit: localStorage.getItem(STORAGE_KEYS.LAST_VISIT) || new Date().toISOString(),
    identifiedAt: localStorage.getItem(STORAGE_KEYS.IDENTIFIED_AT),
    isReturningVisitor: visitCount > 1,
    sessions: getSessions(),
  };
}

// Clear user data (logout/reset)
export function clearUserIdentity(): void {
  if (typeof window === 'undefined') return;
  
  // Keep anonymous ID but clear personal data
  localStorage.removeItem(STORAGE_KEYS.USER_EMAIL);
  localStorage.removeItem(STORAGE_KEYS.USER_NAME);
  localStorage.removeItem(STORAGE_KEYS.IDENTIFIED_AT);
}

// Reset everything (full clear)
export function resetAllUserData(): void {
  if (typeof window === 'undefined') return;
  
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
}

function getDefaultIdentity(): UserIdentity {
  return {
    anonymousId: '',
    email: null,
    name: null,
    firstVisit: new Date().toISOString(),
    visitCount: 1,
    lastVisit: new Date().toISOString(),
    identifiedAt: null,
    isReturningVisitor: false,
    sessions: [],
  };
}
