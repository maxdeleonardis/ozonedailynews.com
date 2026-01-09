// This shows what your EmailCapture component would look like with Supabase
'use client';

import { useState } from 'react';
import { subscribeToNewsletter } from '@/lib/email';

export function EmailCaptureWithSupabase() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const subscriber = await subscribeToNewsletter(email, ['News', 'Technology', 'Business'], 'weekly');

      if (subscriber) {
        setMessage({
          type: 'success',
          text: 'Successfully subscribed! Check your email for confirmation.',
        });
        setEmail('');
      }
    } catch (error: any) {
      setMessage({
        type: 'error',
        text: error.message || 'Failed to subscribe. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-2 border rounded"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>

      {message && (
        <div
          className={`mt-2 text-sm ${
            message.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
