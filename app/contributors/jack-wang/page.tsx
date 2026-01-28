import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Jack Wang | Contributor & Journalist",
  description: "Jack Wang is a co-founder and contributor at ObjectWire from New York, known for cunning insights and powerful metaphors bridging life and art.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contributors/jack-wang`,
  },
  openGraph: {
    title: "Jack Wang | ObjectWire Contributor",
    description: "Co-founder bringing insightful metaphors and deep perspectives to journalism.",
    type: "profile",
    url: `${SITE_CONFIG.url}/contributors/jack-wang`,
  },
};

// Contributor JSON-LD structured data
const contributorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jack Wang",
  jobTitle: "Co-Founder & Contributor",
  worksFor: {
    "@type": "Organization",
    name: "ObjectWire",
    url: SITE_CONFIG.url,
  },
  description: "Co-founder of ObjectWire with a long history of cunning and insightful metaphors for life and art.",
  url: `${SITE_CONFIG.url}/contributors/jack-wang`,
  sameAs: [],
};

export default function JackSAuthorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contributorSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="hover:text-gray-900">Team</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Jack S</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-start gap-6">
              {/* Author Avatar Placeholder */}
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600">
                JS
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Jack S
                </h1>
                <p className="text-xl text-gray-600 mb-2">
                  Journalist
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
                About Jack
              </h2>
              <p className="text-gray-700 mb-4">
                In an era of misinformation, ethical journalism is more critical than ever. Jack 
                prioritizes accurate and unbiased reporting practices to provide audiences with 
                trustworthy information.
              </p>
              <p className="text-gray-700">
                His interviewing style combines rigorous preparation with genuine curiosity. Every 
                conversation is grounded in research, fact-checking, and a commitment to presenting 
                multiple perspectives.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Core Values & Specializations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Core Values</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Truth and accuracy</li>
                    <li>• Fairness and balance</li>
                    <li>• Independence</li>
                    <li>• Accountability</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Specializations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Investigative interviews</li>
                    <li>• Fact-based reporting</li>
                    <li>• Source verification</li>
                    <li>• Context and analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Recent Articles
              </h2>
              <p className="text-gray-500 italic">
                Articles by Jack S will appear here.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact Jack
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
