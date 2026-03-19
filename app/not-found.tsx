import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4">
      <p className="text-5xl font-black text-gray-900">404</p>
      <p className="text-gray-500 text-sm">This page could not be found.</p>
      <Link href="/news" className="text-sm text-blue-600 underline">Back to News</Link>
    </div>
  );
}
