'use client';

import Link from 'next/link';

export default function EditorialStandardsPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 pb-8 border-b-2 border-gray-300">
          <h1 className="text-5xl font-black text-black mb-4">Editorial Standards</h1>
          <p className="text-gray-600 text-lg">Last updated: December 25, 2025 | Version 2.0</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8 text-gray-800">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Mission and Purpose</h2>
            <p className="text-gray-700 leading-relaxed">
              Objectwire.org is a precision intelligence publisher dedicated to delivering event-driven analysis 
              on business and technology developments, with a focus on Texas-based innovations and broader implications. 
              Our mission is to transform raw information into actionable intelligence through rigorous verification 
              and synthesis, serving as a reference-grade resource for professionals who prioritize accuracy over volume.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Content Principles</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">Accuracy</h3>
            <p className="text-gray-700 leading-relaxed">
              All content must be factually correct, thoroughly researched, and verified using primary sources. 
              Publications are event-driven and only produced when they meet our internal threshold for relevance 
              and verifiability. Errors must be corrected promptly, with transparent updates and notations.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6">Clarity</h3>
            <p className="text-gray-700 leading-relaxed">
              Content must be structured for immediate comprehension, using exact and standardized language to 
              avoid reinterpretation. We emphasize synthesis over aggregation, building a coherent, cumulative 
              knowledge base that highlights context, relationships, causal drivers, and downstream implications.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6">Relevance</h3>
            <p className="text-gray-700 leading-relaxed">
              Content must demonstrate strategic relevance to business and technology professionals, focusing on 
              signal over noise. We prioritize developments with actionable insights, particularly those 
              originating from or impacting Texas ecosystems.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6">Fairness and Objectivity</h3>
            <p className="text-gray-700 leading-relaxed">
              We present balanced, evidence-based analysis without bias or favoritism. Opinion or interpretive 
              elements must be clearly labeled and grounded in verifiable data. All claims are documented with 
              primary sources.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6">Originality</h3>
            <p className="text-gray-700 leading-relaxed">
              All content must be original. Plagiarism is strictly prohibited; external sources must be 
              transparently cited and not repurposed without attribution.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Tone and Style</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The tone of Objectwire.org is precise, professional, and technical—authoritative yet accessible 
              for informed readers. We maintain an objective, analytical voice that supports professional workflows, 
              avoiding sensationalism or casual language.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We follow the Associated Press (AP) Stylebook for general writing conventions, with adaptations 
              for technical precision.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Publishing Criteria</h2>
            <p className="text-gray-700 leading-relaxed">
              We publish only on developments that pass our internal criteria: high verifiability (multiple 
              primary sources), strategic impact, and novelty. All publications follow a consistent structure 
              with clear headlines, executive summaries, detailed analysis, and transparent source citations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Editorial Process</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content undergoes a three-stage review:
            </p>
            <ol className="space-y-2 text-gray-700 list-decimal ml-6">
              <li><strong>Drafting:</strong> Author verifies facts against primary sources</li>
              <li><strong>Internal Edit:</strong> Editor checks for clarity, relevance, and adherence to standards</li>
              <li><strong>Final Approval:</strong> Publisher confirms threshold met and publishes</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Ethical Guidelines</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Transparency:</strong> Disclose any conflicts of interest, funding sources, or affiliations</li>
              <li><strong>Inclusivity:</strong> Represent diverse perspectives in Texas and global tech landscapes</li>
              <li><strong>Compliance:</strong> Adhere to data privacy laws and intellectual property standards</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about our editorial standards:
            </p>
            <p className="mt-4">
              <a href="mailto:editorial@objectwire.org" className="text-blue-600 hover:underline font-semibold">
                editorial@objectwire.org
              </a>
            </p>
          </section>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t-2 border-gray-300 flex justify-between">
          <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Terms of Service
          </Link>
          <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 font-semibold">
            Privacy Policy →
          </Link>
        </div>
      </article>
    </main>
  );
}
