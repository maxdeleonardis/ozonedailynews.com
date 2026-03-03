'use client';

import { useState } from 'react';

// =============================================================================
// NEWSLETTER SIGNUP INLINE — Client Component
// Renders inside NewsArticle footer; posts to /api/newsletter/subscribe
// =============================================================================

export default function NewsletterSignupInline() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');

    try {
      const res  = await fetch('/api/newsletter/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
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

  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-10 my-8 shadow-xl border border-gray-700">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-pink-600/15 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center gap-4 max-w-xl mx-auto">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-600/30 border border-purple-500/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-purple-300">
          📩 Newsletter
        </span>

        <h3 className="text-2xl font-extrabold text-white leading-tight">
          Stay ahead of every story
        </h3>
        <p className="text-gray-400 text-sm max-w-sm">
          Breaking news, deep-dives, and editor picks — delivered straight to your inbox. No spam, ever.
        </p>

        {status === 'success' ? (
          <div className="flex items-center gap-2 rounded-xl bg-green-500/20 border border-green-500/40 px-5 py-3 text-green-300 font-semibold text-sm mt-2">
            ✅ {message}
          </div>
        ) : status === 'duplicate' ? (
          <div className="flex items-center gap-2 rounded-xl bg-blue-500/20 border border-blue-500/40 px-5 py-3 text-blue-300 font-semibold text-sm mt-2">
            ℹ️ {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2 mt-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="
                flex-1 rounded-xl border border-gray-600 bg-gray-800/80 px-4 py-3
                text-white placeholder-gray-500 text-sm
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                disabled:opacity-50 transition
              "
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="
                shrink-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600
                px-5 py-3 text-sm font-bold text-white shadow
                hover:from-purple-500 hover:to-pink-500
                active:scale-95 disabled:opacity-60 transition-all
              "
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
