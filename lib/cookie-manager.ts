// Cookie management utilities
export interface CookiePreferences {
  essential?: boolean;
  analytics: boolean;
  marketing: boolean;
  functional?: boolean;
  preferences?: boolean;
}

export function getCookieConsent(): boolean | null {
  if (typeof window === 'undefined') return null;
  const consent = localStorage.getItem('cookieConsent');
  return consent ? consent === 'true' : null;
}

export function setCookieConsent(consent: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cookieConsent', consent.toString());
}

export function getCookiePreferences(): CookiePreferences {
  if (typeof window === 'undefined') {
    return { essential: true, analytics: false, marketing: false, functional: true, preferences: false };
  }
  const prefs = localStorage.getItem('cookiePreferences');
  if (!prefs) {
    return { essential: true, analytics: false, marketing: false, functional: true, preferences: false };
  }
  return JSON.parse(prefs);
}

export function setCookiePreferences(prefs: CookiePreferences): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
}

export function clearAllCookies(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('cookieConsent');
  localStorage.removeItem('cookiePreferences');
}
