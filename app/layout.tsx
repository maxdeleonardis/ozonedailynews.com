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
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/" className="text-black hover:underline transition">Home</Link>
              <Link href="/news" className="text-black hover:underline transition">News</Link>
              <Link href="/about" className="text-black hover:underline transition">About</Link>
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
                  <li><Link href="/privacy" className="hover:underline transition">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:underline transition">Terms</Link></li>
                  <li><a href="mailto:contact@objectwire.org" className="hover:underline transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-black">Editorial</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><Link href="/standards" className="hover:underline transition">Standards</Link></li>
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
