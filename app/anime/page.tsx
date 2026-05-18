import type { Metadata } from 'next';
import Link from 'next/link';

const SLUG = '/anime';

export const metadata: Metadata = {
  title: 'Anime News | Coverage Coming Soon | OzoneNews 2026',
  description: 'OzoneNews anime coverage is coming soon. In the meantime, explore our tech, gaming, and science verticals.',
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Anime News | OzoneNews 2026',
    description: 'OzoneNews anime coverage coming soon.',
    type: 'website',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
  },
};

export default function AnimePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16 text-center">
        <p className="text-[9px] font-black tracking-[.4em] uppercase text-gray-400 mb-4">OzoneNews</p>
        <h1 className="font-serif text-4xl font-black mb-4">Anime</h1>
        <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
          Anime coverage is coming soon. Explore our other verticals in the meantime.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/video-games" className="text-[10px] font-black tracking-widest uppercase px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
            Video Games
          </Link>
          <Link href="/tech" className="text-[10px] font-black tracking-widest uppercase px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
            Tech
          </Link>
          <Link href="/video-games/mha/ultra-rumble/season-16" className="text-[10px] font-black tracking-widest uppercase px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
            MHA Ultra Rumble
          </Link>
        </div>
      </main>
    </div>
  );
}
