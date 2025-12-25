export default function JournalismStandardsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">Journalism Standards</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Professional content creation, press release services, and editorial consulting for organizations 
            seeking credible, well-researched communications.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed">
              ObjectWire applies rigorous editorial standards to all communications, ensuring accuracy, 
              clarity, and credibility. We help organizations tell their stories with the same precision 
              and verification protocols used in professional journalism.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Services</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Press release writing and distribution</li>
              <li>Corporate communications and thought leadership content</li>
              <li>Editorial consulting and content strategy</li>
              <li>Fact-checking and verification services</li>
              <li>Media relations and outreach support</li>
              <li>Content review and quality assurance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Editorial Principles</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content produced under our journalism standards follows strict protocols:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Accuracy through primary source verification</li>
              <li>Transparency in sourcing and attribution</li>
              <li>Clarity in language and structure</li>
              <li>Fairness and balance in presentation</li>
              <li>Disclosure of conflicts of interest</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Press Release Submission</h2>
            <p className="text-gray-700 leading-relaxed">
              Organizations can submit press releases for review and potential publication on ObjectWire. 
              All submissions are evaluated against our editorial standards before publication.
            </p>
            <p className="mt-4">
              <a href="mailto:press@objectwire.org" className="text-blue-600 hover:underline font-semibold">
                press@objectwire.org
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For journalism services and editorial consulting:
            </p>
            <p className="mt-4">
              <a href="mailto:editorial@objectwire.org" className="text-blue-600 hover:underline font-semibold">
                editorial@objectwire.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
