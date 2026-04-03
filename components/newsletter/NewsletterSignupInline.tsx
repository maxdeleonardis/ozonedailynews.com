'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/use-auth';

// =============================================================================
// NEWSLETTER SIGNUP INLINE — Client Component
//
// Renders inside NewsArticle / CreatorArticle footer.
// Posts to /api/newsletter/subscribe → Beehiiv API.
//
// Logged-in users: one-click subscribe (email pre-filled from Supabase auth).
// Guests: standard email input + subscribe button.
// =============================================================================

export default function NewsletterSignupInline() {
  const { email: authEmail, isAuth, loading: authLoading } = useAuth();

  const [email, setEmail]           = useState('');
  const [status, setStatus]         = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle');
  const [message, setMessage]       = useState('');
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null); // null = unchecked

  // Check subscription status once we know the logged-in email
  useEffect(() => {
    if (!isAuth || !authEmail || authLoading) return;
    fetch(`/api/newsletter/status?email=${encodeURIComponent(authEmail)}`)
      .then(r => r.json())
      .then(d => setIsSubscribed(d.subscribed === true))
      .catch(() => setIsSubscribed(false));
  }, [isAuth, authEmail, authLoading]);

  // Use auth email if logged in, otherwise use the manual input
  const subscribeEmail = isAuth && authEmail ? authEmail : email;

  async function subscribe(targetEmail: string) {
    if (!targetEmail.trim()) return;
    setStatus('loading');

    try {
      const res  = await fetch('/api/newsletter/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: targetEmail }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || 'Subscribed!');
        setStatus(data.message?.includes('already') ? 'duplicate' : 'success');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setMessage('Network error. Please try again.');
      setStatus('error');
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    subscribe(subscribeEmail);
  }

  function handleOneClick() {
    if (authEmail) subscribe(authEmail);
  }

  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-10 shadow-xl border border-gray-700">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-pink-600/15 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center gap-4 max-w-xl mx-auto">

        <h3 className="text-2xl font-extrabold text-white leading-tight">
          Stay ahead of every story
        </h3>
        <p className="text-gray-400 text-sm max-w-sm">
          Breaking news, deep-dives, and editor picks, delivered straight to your inbox. No spam, ever.
        </p>

        {/* ── Success state ──────────────────────────────────────────── */}
        {status === 'success' ? (
          <div className="flex items-center gap-2 rounded-xl bg-green-500/20 border border-green-500/40 px-5 py-3 text-green-300 font-semibold text-sm mt-2">
            ✅ {message}
          </div>
        ) : status === 'duplicate' ? (
          <div className="flex items-center gap-2 rounded-xl bg-blue-500/20 border border-blue-500/40 px-5 py-3 text-blue-300 font-semibold text-sm mt-2">
            ℹ️ {message}
          </div>

        /* ── Logged-in: one-click subscribe ──────────────────────────── */
        ) : isAuth && authEmail && !authLoading ? (
          <div className="flex flex-col items-center gap-3 mt-2 w-full max-w-md">
            <div className="flex items-center gap-2 rounded-lg bg-gray-800/60 border border-gray-600 px-4 py-2 w-full">
              <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-300 truncate">
                Signed in as <span className="font-medium text-white">{authEmail}</span>
              </span>
            </div>
            <button
              onClick={handleOneClick}
              disabled={status === 'loading'}
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-500/25 active:scale-[0.98] disabled:opacity-60 transition-all"
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                  Subscribing...
                </span>
              ) : (
                'Subscribe with one click'
              )}
            </button>
          </div>

        /* ── Guest: email input form ─────────────────────────────────── */
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2 mt-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="flex-1 rounded-xl border border-gray-600 bg-gray-800/80 px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50 transition"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="shrink-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-bold text-white shadow hover:from-purple-500 hover:to-pink-500 active:scale-95 disabled:opacity-60 transition-all"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-xs mt-1">{message}</p>
        )}

        <p className="text-gray-600 text-xs mt-1">
          Free · Unsubscribe anytime · No ads
        </p>
      </div>
    </section>
  );
}
