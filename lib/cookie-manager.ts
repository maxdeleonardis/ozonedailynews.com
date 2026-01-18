"use client";

import { getCookie, setCookie } from "cookies-next";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const COOKIE_CONSENT_KEY = "ow_cookie_consent";
const COOKIE_PREFERENCES_KEY = "ow_cookie_preferences";

export function getCookieConsent(): boolean | null {
  const consent = getCookie(COOKIE_CONSENT_KEY);
  if (consent === undefined) return null;
  return consent === "true";
}

export function setCookieConsent(consent: boolean): void {
  setCookie(COOKIE_CONSENT_KEY, consent.toString(), {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    path: "/",
    sameSite: "lax",
  });
}

export function getCookiePreferences(): CookiePreferences {
  const preferences = getCookie(COOKIE_PREFERENCES_KEY);
  if (!preferences) {
    return {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
  }

  try {
    return JSON.parse(preferences as string);
  } catch {
    return {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
  }
}

export function setCookiePreferences(preferences: CookiePreferences): void {
  setCookie(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences), {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    path: "/",
    sameSite: "lax",
  });
}

export function clearAllCookies(): void {
  // This will clear all non-essential cookies
  const cookies = document.cookie.split(";");

  cookies.forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

    // Don't clear essential cookies
    if (
      name !== COOKIE_CONSENT_KEY &&
      name !== COOKIE_PREFERENCES_KEY &&
      !name.startsWith("next-auth")
    ) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });
}
