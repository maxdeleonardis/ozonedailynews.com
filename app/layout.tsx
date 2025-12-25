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
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-black">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Objective.Wire
            </Link>
            <div className="flex gap-8 text-sm font-medium items-center">
              <Link href="/news" className="text-black hover:underline transition">News</Link>
              
              {/* About Dropdown */}
              <div className="relative group">
                <button className="text-black hover:underline transition flex items-center gap-1">
                  About
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white border border-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/editorial-standards" className="block px-4 py-3 text-black hover:bg-gray-100 transition">Editorial Standards</Link>
                  <Link href="/terms-of-service" className="block px-4 py-3 text-black hover:bg-gray-100 transition">Terms of Service</Link>
                  <Link href="/privacy-policy" className="block px-4 py-3 text-black hover:bg-gray-100 transition">Privacy Policy</Link>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-black hover:underline transition flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white border border-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/services/austin-web-market" className="block px-4 py-3 text-black hover:bg-gray-100 transition">Austin Web Market</Link>
                  <Link href="/services/private-investigators" className="block px-4 py-3 text-black hover:bg-gray-100 transition">Private Investigators</Link>
                  <Link href="/services/journalism-standards" className="block px-4 py-3 text-black hover:bg-gray-100 transition">Journalism Standards</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-20">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-black py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="font-bold text-lg mb-4">
                  Objective.Wire
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Detective reporting from Austin. Intelligence and analysis for the information age.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-black">Navigation</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><Link href="/news" className="hover:underline transition">News</Link></li>
                  <li><Link href="/about" className="hover:underline transition">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-black">Policies</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><Link href="/privacy-policy" className="hover:underline transition">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="hover:underline transition">Terms of Service</Link></li>
                  <li><a href="mailto:contact@objectwire.org" className="hover:underline transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-black">Editorial</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><Link href="/editorial-standards" className="hover:underline transition">Editorial Standards</Link></li>
                  <li><a href="mailto:submit@objectwire.org" className="hover:underline transition">Submit</a></li>
                  <li><a href="mailto:corrections@objectwire.org" className="hover:underline transition">Corrections</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-black pt-8 text-center">
              <p className="text-gray-600 text-sm">© 2025 Objective.Wire. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
