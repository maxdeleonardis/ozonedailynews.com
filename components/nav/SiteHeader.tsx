import Logo from '@/components/nav/Logo';
import AuthNav from '@/components/nav/AuthNav';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Space',       href: '/space' },
  { label: 'Rockets',     href: '/rockets' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Science',     href: '/science' },
  { label: 'Defense',     href: '/defense' },
  { label: 'Policy',      href: '/policy' },
] as const;

export default function SiteHeader() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-5 text-[0.7rem] font-bold uppercase tracking-widest text-gray-500">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-gray-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            href="/rss.xml"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-orange-500 transition-colors font-medium"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
            </svg>
            RSS
          </Link>
          <AuthNav />
        </div>
      </div>
    </div>
  );
}
