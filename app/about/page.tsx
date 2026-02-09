import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About ObjectWire",
  description: "Learn about ObjectWire's mission to deliver precision intelligence through verified, source-cited reporting.",
  alternates: {
    canonical: 'https://www.objectwire.org/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 border-b border-gray-200">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">About ObjectWire</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Precision intelligence for professionals who demand verified, source-cited reporting.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
            <p>
              ObjectWire is a verification-first intelligence platform that provides cited business and 
              technology analysis. We operate as a credibility engine, not a content aggregator.
            </p>
            <p>
              Every piece of content published on ObjectWire undergoes rigorous verification using primary 
              sources and custom language model processing specifically trained for fact-checking and 
              citation validation.
            </p>
            <p>
              Our mission is to reveal truth through transparent verification methodology and documented claims.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">What We Provide</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Verified Intelligence</h3>
              <p className="text-gray-600">
                Business and technology news with primary source citations. Every claim is documented 
                and verifiable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Event-Driven Reporting</h3>
              <p className="text-gray-600">
                Real-time analysis of developments affecting business, technology, and policy domains.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Structured Content</h3>
              <p className="text-gray-600">
                Citation-grade content designed for integration into research and decision workflows.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">API Access</h3>
              <p className="text-gray-600">
                Programmatic access to verified intelligence data and structured content metadata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Editorial Standards</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            ObjectWire maintains rigorous editorial standards to ensure the accuracy and reliability 
            of our reporting. All content undergoes verification using primary sources, fact-checking, 
            and citation validation before publication.
          </p>
          <Link 
            href="/editorial-standards"
            className="inline-flex items-center px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Read Our Editorial Standards →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-2">Email</h3>
              <a href="mailto:jack@objectwire.org" className="text-lg hover:text-blue-600 transition-colors">
                jack@objectwire.org
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-2">Phone</h3>
              <p className="text-lg">(575) 495-0323</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-2">Location</h3>
              <p className="text-lg">Austin, TX 78702</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
