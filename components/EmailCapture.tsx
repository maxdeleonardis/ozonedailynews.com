'use client';

import { useState, useEffect } from 'react';
import { tracking } from '@/lib/tracking';
import { subscribeToNewsletter } from '@/lib/email';

interface EmailCaptureProps {
  source?: string;
  placement?: 'inline' | 'popup' | 'footer';
  onSuccess?: (email: string) => void;
}

export default function EmailCapture({ 
  source = 'unknown', 
  placement = 'inline',
  onSuccess 
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<{ visitCount: number; isReturning: boolean } | null>(null);

  // Get user info on mount
  useEffect(() => {
    const identity = tracking.getUserIdentity();
    setUserInfo({
      visitCount: identity.visitCount,
      isReturning: identity.isReturningVisitor,
    });
    
    // Pre-fill if user already identified
    if (identity.email) {
      setEmail(identity.email);
      setSubmitted(true);
    }
    if (identity.name) {
      setName(identity.name);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);

    try {
      // Save to Supabase database
      await subscribeToNewsletter(email, ['News', 'Technology', 'Business'], 'weekly');
      
      // Identify user - links all previous anonymous sessions to this email
      tracking.identifyUser(email, name || undefined);
      tracking.trackEmailSignup(source);

      setSubmitted(true);
      
      if (onSuccess) {
        onSuccess(email);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      // Could show error message to user here
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 text-lg font-semibold mb-2">✓ You're subscribed!</div>
        <p className="text-gray-600 text-sm">
          {userInfo?.isReturning 
            ? `Welcome back! We've linked your ${userInfo.visitCount} previous visits to your account.`
            : 'Get ready for insights delivered to your inbox.'}
        </p>
      </div>
    );
  }

  return (
    <div className={`${placement === 'inline' ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-white'} border border-gray-200 rounded-lg p-6`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {userInfo?.isReturning ? `Welcome back! Visit #${userInfo.visitCount}` : 'Subscribe & Earn'}
        </h3>
        <p className="text-gray-600 text-sm">
          {userInfo?.isReturning 
            ? 'Add your email to link your reading history and start earning.'
            : 'Join our intelligence network. Read premium content and earn a share of ad revenue.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
        
        <div>
          <input
            type="email"
            required
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading || !email}
          className="w-full bg-black text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {loading ? 'Subscribing...' : userInfo?.isReturning ? 'Link My History & Subscribe' : 'Subscribe & Start Earning'}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-3 text-center">
        We track your engagement to calculate your revenue share. No spam, unsubscribe anytime.
      </p>
    </div>
  );
}
