"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  getCookieConsent,
  setCookieConsent,
  getCookiePreferences,
  setCookiePreferences,
  clearAllCookies,
  type CookiePreferences,
} from "@/lib/cookie-manager";
import { initializeAnalytics } from "@/lib/analytics";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === null) {
      setShowBanner(true);
    } else if (consent) {
      const savedPreferences = getCookiePreferences();
      setPreferences(savedPreferences);
      if (savedPreferences.analytics) {
        initializeAnalytics();
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };

    setCookieConsent(true);
    setCookiePreferences(allAccepted);
    setPreferences(allAccepted);
    setShowBanner(false);

    // Initialize analytics after consent
    initializeAnalytics();
  };

  const handleRejectAll = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };

    setCookieConsent(false);
    setCookiePreferences(essentialOnly);
    setPreferences(essentialOnly);
    setShowBanner(false);

    // Clear non-essential cookies
    clearAllCookies();
  };

  const handleSavePreferences = () => {
    const hasAccepted = preferences.analytics || preferences.marketing || preferences.preferences;
    setCookieConsent(hasAccepted);
    setCookiePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);

    if (preferences.analytics) {
      initializeAnalytics();
    } else {
      clearAllCookies();
    }
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Essential cookies cannot be disabled

    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg animate-slide-up">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 We value your privacy
              </h3>
              <p className="text-sm text-gray-600 max-w-3xl">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                Read our{" "}
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>{" "}
                to learn more.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button
                onClick={() => setShowSettings(true)}
                variant="outline"
                className="w-full sm:w-auto"
              >
                Customize
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="w-full sm:w-auto"
              >
                Reject All
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Cookie Settings</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Manage your cookie preferences. You can enable or disable different types of cookies below.
              </p>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-gray-900">Essential Cookies</span>
                      <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
                        Always Active
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are necessary for the website to function and cannot be disabled. 
                    They are usually only set in response to actions made by you such as setting your 
                    privacy preferences, logging in or filling in forms.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">Analytics Cookies</span>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies allow us to count visits and traffic sources so we can measure and 
                    improve the performance of our site. They help us understand which pages are the 
                    most and least popular and see how visitors move around the site.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">Marketing Cookies</span>
                    <button
                      onClick={() => togglePreference("marketing")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies may be set through our site by our advertising partners. They may be 
                    used by those companies to build a profile of your interests and show you relevant 
                    ads on other sites.
                  </p>
                </div>

                {/* Preferences Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">Preferences Cookies</span>
                    <button
                      onClick={() => togglePreference("preferences")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.preferences ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.preferences ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies enable the website to remember choices you make (such as your username, 
                    language, or the region you are in) and provide enhanced, more personal features.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1"
                >
                  Reject All
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
