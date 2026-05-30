'use client';

import { useState, Suspense, useEffect } from 'react';
import { createAuthBrowserClient } from '@/lib/supabase/client';
import Logo from '@/components/nav/Logo';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

type Mode = 'signin' | 'signup';

export default function LoginPage() {
  return (
    <Suspense fallback={
      <main className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="h-6 w-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
      </main>
    }>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/';
  const [mode, setMode] = useState<Mode>(
    searchParams.get('mode') === 'signup' ? 'signup' : 'signin',
  );

  useEffect(() => {
    setMode(searchParams.get('mode') === 'signup' ? 'signup' : 'signin');
  }, [searchParams]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (mode === 'signup' && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    const supabase = createAuthBrowserClient();
    if (!supabase) {
      setError('Auth not configured. Set Supabase env vars in Vercel.');
      setLoading(false);
      return;
    }

    if (mode === 'signup') {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({ email, password });
      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }
      // If Supabase returns a session immediately, email confirmation is OFF — redirect now.
      // If no session, confirmation email was sent — tell the user to check their inbox.
      if (signUpData.session) {
        setSuccess(`Account created! Redirecting…`);
        setTimeout(() => { window.location.href = redirectTo; }, 800);
      } else {
        setSuccess(`Check your inbox — we sent a confirmation link to ${email}.`);
        setLoading(false);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
      } else {
        setSuccess(`Signed in as ${email}. Redirecting to ${redirectTo}…`);
        setTimeout(() => { window.location.href = redirectTo; }, 800);
      }
    }
    setLoading(false);
  };

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Masthead mini */}
        <div className="flex flex-col items-center mb-10 gap-2">
          <Logo size="lg" />
          <p className="text-[0.65rem] tracking-[0.2em] text-gray-400 font-sans uppercase">
            Space · Engineering · Science
          </p>
        </div>

        {/* Card */}
        <div className="border-2 border-black bg-white p-8">
          <h1 className="text-xl font-black tracking-tight mb-1">
            {mode === 'signin' ? 'Sign in' : 'Create account'}
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Save articles, track your reading, and personalise your feed.
          </p>

          {error && (
            <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 px-3 py-2 bg-green-50 border border-green-200 text-green-700 text-sm rounded">
              {success}
            </div>
          )}

          {/* Email / Password form */}
          <form onSubmit={handleEmailAuth} className="space-y-3">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full border-2 border-gray-200 focus:border-black outline-none px-3 py-2.5 text-sm transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full border-2 border-gray-200 focus:border-black outline-none px-3 py-2.5 text-sm transition-colors"
            />
            {mode === 'signup' && (
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="w-full border-2 border-gray-200 focus:border-black outline-none px-3 py-2.5 text-sm transition-colors"
              />
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white px-4 py-3 font-bold text-sm tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
              {mode === 'signin' ? 'Sign in with Email' : 'Create Account'}
            </button>
          </form>

          {/* Toggle mode */}
          <p className="text-center text-xs text-gray-500 mt-5">
            {mode === 'signin' ? (
              <>No account?{' '}
                <button onClick={() => { setMode('signup'); setError(''); setSuccess(''); setConfirmPassword(''); }} className="font-bold underline hover:text-black">
                  Create one
                </button>
              </>
            ) : (
              <>Already have an account?{' '}
                <button onClick={() => { setMode('signin'); setError(''); setSuccess(''); setConfirmPassword(''); }} className="font-bold underline hover:text-black">
                  Sign in
                </button>
              </>
            )}
          </p>

          <p className="text-[11px] text-gray-400 text-center mt-5 leading-relaxed">
            By signing in you agree to our{' '}
            <Link href="/terms-of-service" className="underline hover:text-black">Terms</Link>{' '}
            and{' '}
            <Link href="/privacy-policy" className="underline hover:text-black">Privacy Policy</Link>.
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          <Link href="/" className="hover:text-black underline">← Back to OzoneNews</Link>
        </p>
      </div>
    </main>
  );
}
