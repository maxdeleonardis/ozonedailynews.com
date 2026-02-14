'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  // For admin routes, just return children without header/footer
  if (isAdminRoute) {
    return <>{children}</>;
  }

  // For public routes, show header and footer
  return (
    <>
      {/* Header - Sticky */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <nav className="container flex justify-between items-center py-8 px-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">ObjectWire</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link href="/blog" className="text-base font-medium text-gray-700 hover:text-black transition-colors duration-200">
              News
            </Link>
            <Link href="/finance" className="text-base font-medium text-gray-700 hover:text-black transition-colors duration-200">
              Finance
            </Link>
            <Link href="/tech" className="text-base font-medium text-gray-700 hover:text-black transition-colors duration-200">
              Tech
            </Link>
            <Link href="/editorial-standards" className="text-base font-medium text-gray-700 hover:text-black transition-colors duration-200">
              Standards
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-700 hover:text-black transition-colors duration-200">
              About
            </Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-24">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-black flex items-center justify-center">
                  <span className="text-white font-bold text-base">O</span>
                </div>
                <span className="font-bold text-lg">ObjectWire</span>
              </Link>
              <p className="text-sm text-gray-600 leading-relaxed">
                Precision intelligence for professionals who demand verified, source-cited reporting.
              </p>
            </div>
            
            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Useful Links</h4>
              <div className="flex flex-col gap-2.5">
                <Link href="/" className="text-sm text-gray-600 hover:text-black transition-colors">Home</Link>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-black transition-colors">News</Link>
                <Link href="/editorial-standards" className="text-sm text-gray-600 hover:text-black transition-colors">Editorial Standards</Link>
                <Link href="/about" className="text-sm text-gray-600 hover:text-black transition-colors">About</Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Legal</h4>
              <div className="flex flex-col gap-2.5">
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-black transition-colors">Terms of Service</Link>
                <Link href="/admin" className="text-sm text-gray-600 hover:text-black transition-colors">Admin Portal</Link>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Stay Updated</h4>
              <p className="text-sm text-gray-600 mb-3">Subscribe to our newsletter for the latest insights.</p>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <button className="px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2026 ObjectWire. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-black transition-colors">Twitter</a>
              <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-black transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
