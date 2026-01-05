import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interviews and Podcasting Services | Jack S - ObjectWire.org",
  description: "In an era of misinformation, ethical journalism is more critical than ever. At Objectwire, we prioritize accurate and unbiased reporting practices.",
};

export default function JackSPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jack S
          </h1>
          <p className="text-xl text-gray-600">
            Interviews & Podcasting Services | Austin, TX
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ethical Journalism in a Misinformation Era
            </h2>
            <p className="text-gray-700 mb-4">
              In an era of misinformation, ethical journalism is more critical than ever. At Objectwire, 
              we prioritize accurate and unbiased reporting practices to provide our audience with 
              trustworthy information. Jack embodies these principles in every interview and podcast.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Approach
            </h2>
            <p className="text-gray-700 mb-4">
              Jack's interviewing style combines rigorous preparation with genuine curiosity. Every 
              conversation is grounded in research, fact-checking, and a commitment to presenting 
              multiple perspectives.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Core Values</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Truth and accuracy</li>
                  <li>• Fairness and balance</li>
                  <li>• Independence</li>
                  <li>• Accountability</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Specializations</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Investigative interviews</li>
                  <li>• Fact-based reporting</li>
                  <li>• Source verification</li>
                  <li>• Context and analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Services Offered
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• In-depth interview production</li>
              <li>• Investigative podcast series</li>
              <li>• Expert panel discussions</li>
              <li>• Documentary-style audio</li>
              <li>• Fact-checking consultation</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Collaborate with Jack
            </h2>
            <p className="text-gray-700 mb-6">
              Whether you need an experienced interviewer, podcast host, or editorial consultant, 
              Jack brings journalistic rigor and ethical standards to every project.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Request Consultation
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Fighting Misinformation
            </h2>
            <p className="text-gray-700">
              Through careful research, thorough fact-checking, and transparent sourcing, Jack's work 
              serves as a counterweight to the misinformation ecosystem. Every interview and podcast 
              is an opportunity to elevate truth and provide audiences with reliable information.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
