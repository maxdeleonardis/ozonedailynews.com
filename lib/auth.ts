/**
 * Admin Authentication with Session Management
 * - Uses sessionStorage (clears on tab close)
 * - 30-minute inactivity timeout
 * - Auto-logout on tab close
 */

const ADMIN_CREDENTIALS = {
  username: 'max@objectwire.org',
  password: 'max@objectwire.org',
};

const SESSION_KEY = 'ow_admin_session';
const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}

export function createSession(): void {
  if (typeof window === 'undefined') return;
  
  const session = {
    authenticated: true,
    createdAt: new Date().toISOString(),
    lastActivity: Date.now(),
  };
  
  // Use sessionStorage instead of localStorage (clears on tab close)
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function updateActivity(): void {
  if (typeof window === 'undefined') return;
  
  try {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (!session) return;
    
    const parsed = JSON.parse(session);
    parsed.lastActivity = Date.now();
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(parsed));
  } catch {
    // Silent fail
  }
}

export function destroySession(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (!session) return false;
    
    const parsed = JSON.parse(session);
    if (!parsed.authenticated) return false;
    
    // Check inactivity timeout
    const timeSinceActivity = Date.now() - parsed.lastActivity;
    if (timeSinceActivity > INACTIVITY_TIMEOUT) {
      destroySession();
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
}

export function getSessionInfo(): { createdAt: string; minutesRemaining: number } | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (!session) return null;
    
    const parsed = JSON.parse(session);
    const timeSinceActivity = Date.now() - parsed.lastActivity;
    const minutesRemaining = Math.max(0, Math.floor((INACTIVITY_TIMEOUT - timeSinceActivity) / 60000));
    
    return {
      createdAt: parsed.createdAt,
      minutesRemaining,
    };
  } catch {
    return null;
  }
}
