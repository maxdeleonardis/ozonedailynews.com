'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ClearCachePage() {
  const router = useRouter();

  useEffect(() => {
    // Clear articles cache
    if (typeof window !== 'undefined') {
      localStorage.removeItem('objectwire-articles');
      console.log('Articles cache cleared!');
      
      // Redirect to home after 1 second
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="mb-4">
          <div className="w-16 h-16 bg-black mx-auto flex items-center justify-center rounded animate-pulse">
            <span className="text-white font-bold text-2xl">O</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Clearing Cache...</h1>
        <p className="text-gray-600">Redirecting to homepage...</p>
      </div>
    </div>
  );
}
