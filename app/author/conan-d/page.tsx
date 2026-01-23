import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Conan D | Author & Journalist",
  description: "Conan D is a journalist and podcaster at ObjectWire. Influenced by Joseph Campbell and bell hooks, he approaches journalism as mythic storytelling.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/author/conan-d`,
  },
  openGraph: {
    title: "Conan D | ObjectWire Author",
    description: "Journalist and podcaster specializing in narrative journalism and long-form interviews.",
    type: "profile",
    url: `${SITE_CONFIG.url}/author/conan-d`,
  },
};

// Author JSON-LD structured data
const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Conan D",
  jobTitle: "Journalist & Podcaster",
  worksFor: {
    "@type": "Organization",
    name: "ObjectWire",
    url: SITE_CONFIG.url,
  },
  description: "Influenced by Joseph Campbell and bell hooks, Conan sees journalism as mythic storytelling.",
  url: `${SITE_CONFIG.url}/author/conan-d`,
  sameAs: [],
};

export default function ConanDAuthorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="hover:text-gray-900">Team</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Conan D</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-start gap-6">
              {/* Author Avatar Placeholder */}
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600">
                CD
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Conan D
                </h1>
                <p className="text-xl text-gray-600 mb-2">
                  Journalist & Podcaster
                </p>
                <p className="text-gray-500">
                  Austin, TX
                </p>
              </div>
            </div>
          </header>

          <section className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                About Conan
              </h2>
              <p className="text-gray-700 mb-4">
                Influenced by Joseph Campbell and bell hooks, Conan sees journalism as mythic storytelling. 
                His approach combines deep narrative structure with social consciousness, creating content 
                that resonates on both intellectual and emotional levels.
              </p>
              <p className="text-gray-700">
                Off-duty, he collects vinyl and explores urban landscapes. These passions inform his 
                storytelling, bringing texture and authenticity to every piece.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Areas of Focus
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• Long-form interviews</li>
                  <li>• Podcast production</li>
                  <li>• Story development</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Narrative journalism</li>
                  <li>• Audio documentary</li>
                  <li>• Cultural commentary</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Recent Articles
              </h2>
              <p className="text-gray-500 italic">
                Articles by Conan D will appear here.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact Conan
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
