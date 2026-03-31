/**
 * lib/auth.ts — Hardcoded admin auth (placeholder until Supabase Auth)
 *
 * Stores a session flag in localStorage. Will be replaced with real
 * Supabase Auth + role-based access control later.
 */

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'BlackBook26';
const SESSION_KEY = 'ow_admin_session';

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function createSession(userId: string): string {
  if (typeof window === 'undefined') return '';
  const token = `ow_${userId}_${Date.now()}`;
  localStorage.setItem(SESSION_KEY, token);
  return token;
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem(SESSION_KEY);
}

export function destroySession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
}
