/**
 * Simple Admin Authentication
 * Uses localStorage for session management
 */

const ADMIN_CREDENTIALS = {
  username: 'amarketology',
  password: '123456md',
};

const SESSION_KEY = 'ow_admin_session';

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}

export function createSession(): void {
  if (typeof window === 'undefined') return;
  
  const session = {
    authenticated: true,
    timestamp: new Date().toISOString(),
  };
  
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function destroySession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) return false;
    
    const parsed = JSON.parse(session);
    return parsed.authenticated === true;
  } catch {
    return false;
  }
}
