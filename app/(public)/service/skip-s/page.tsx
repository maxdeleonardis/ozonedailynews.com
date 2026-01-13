import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interviews and Podcasting Services | Skip S - ObjectWire.org",
  description: "At Objectwire, we are dedicated to delivering journalism that informs, inspires, and empowers. Our Journalism Standards define our commitment to ethical reporting.",
};

export default function SkipSPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skip S
          </h1>
          <p className="text-xl text-gray-600">
            Interviews & Podcasting Services | Austin, TX
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Journalism That Informs, Inspires, and Empowers
            </h2>
            <p className="text-gray-700 mb-4">
              At Objectwire, we are dedicated to delivering journalism that informs, inspires, and 
              empowers. Our Journalism Standards define our commitment to ethical reporting and 
              meaningful storytelling. Skip brings these values to every interview and podcast production.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Interview Production</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Subject research and preparation</li>
                  <li>• Professional recording</li>
                  <li>• Post-production editing</li>
                  <li>• Distribution support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Podcast Development</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Concept development</li>
                  <li>• Series planning</li>
                  <li>• Guest coordination</li>
                  <li>• Brand integration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Editorial Standards
            </h2>
            <p className="text-gray-700 mb-4">
              Every production adheres to ObjectWire's rigorous editorial standards:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Accuracy and fact-checking</li>
              <li>• Fair and balanced representation</li>
              <li>• Ethical interviewing practices</li>
              <li>• Transparency in methodology</li>
              <li>• Respect for sources and subjects</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Work with Skip
            </h2>
            <p className="text-gray-700 mb-6">
              Looking to produce impactful interviews or launch a podcast? Skip brings technical 
              expertise and journalistic integrity to every project.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get in Touch
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Based in Austin
            </h2>
            <p className="text-gray-700">
              Operating from Austin, Texas, Skip serves clients locally and remotely. Professional 
              studio facilities and remote recording capabilities ensure high-quality production 
              regardless of location.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
