import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Objective.Wire | Intelligence Platform",
  description: "Detective Reporting Austin. Real-time intelligence and structured analysis for business, tech, and policy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/* Reading Progress Bar */}
        <div className="reading-progress" id="readingProgress" suppressHydrationWarning></div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-black">
          <div className="container flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-black font-serif hover:text-gray-700 transition">
              Objective.Wire
            </Link>
            
            {/* Center Navigation */}
            <div className="hidden md:flex gap-8 text-sm font-semibold items-center">
              <Link href="/news" className="text-black hover:text-gray-700 transition">News</Link>
              
              {/* About Dropdown */}
              <div className="relative group">
                <button className="text-black hover:text-gray-700 transition flex items-center gap-1">
                  About
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-300 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/editorial-standards" className="block px-4 py-3 text-black hover:bg-gray-50 transition rounded-t-xl">Editorial Standards</Link>
                  <Link href="/terms-of-service" className="block px-4 py-3 text-black hover:bg-gray-50 transition">Terms of Service</Link>
                  <Link href="/privacy-policy" className="block px-4 py-3 text-black hover:bg-gray-50 transition rounded-b-xl">Privacy Policy</Link>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-black hover:text-gray-700 transition flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-300 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/services/austin-web-market" className="block px-4 py-3 text-black hover:bg-gray-50 transition rounded-t-xl">Austin Web Market</Link>
                  <Link href="/services/private-investigators" className="block px-4 py-3 text-black hover:bg-gray-50 transition">Private Investigators</Link>
                  <Link href="/services/journalism-standards" className="block px-4 py-3 text-black hover:bg-gray-50 transition rounded-b-xl">Journalism Standards</Link>
                </div>
              </div>
            </div>

            {/* Right Side - Search & Theme */}
            <div className="flex gap-4 items-center">
              <button className="p-2 hover:bg-gray-200 transition" title="Search">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-200 transition" id="themeToggle" title="Toggle dark mode">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-20">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-black py-16">
          <div className="container max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="font-bold text-lg mb-4 text-black font-serif">
                  Objective.Wire
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Detective reporting from Austin. Intelligence and analysis for the information age.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-black">Navigation</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><Link href="/news" className="hover:text-black transition">News</Link></li>
                  <li><Link href="/about" className="hover:text-black transition">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-black">Policies</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><Link href="/privacy-policy" className="hover:text-black transition">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="hover:text-black transition">Terms of Service</Link></li>
                  <li><a href="mailto:contact@objectwire.org" className="hover:text-black transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-black">Editorial</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><Link href="/editorial-standards" className="hover:text-black transition">Editorial Standards</Link></li>
                  <li><a href="mailto:submit@objectwire.org" className="hover:text-black transition">Submit</a></li>
                  <li><a href="mailto:corrections@objectwire.org" className="hover:text-black transition">Corrections</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-black pt-8 text-center">
              <p className="text-gray-700 text-sm metadata">© 2025 Objective.Wire. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* JavaScript for interactivity */}
        <script dangerouslySetInnerHTML={{__html: `
          // Reading progress bar
          window.addEventListener('scroll', () => {
            const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            const progressBar = document.getElementById('readingProgress');
            if (progressBar) {
              progressBar.style.width = progress + '%';
            }
          });

          // Dark mode toggle
          const themeToggle = document.getElementById('themeToggle');
          const isDarkMode = localStorage.getItem('darkMode') === 'true';
          
          if (isDarkMode) {
            document.documentElement.classList.add('dark');
          }

          themeToggle?.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', isDark);
          });
        `}} />
      </body>
    </html>
  );
}
