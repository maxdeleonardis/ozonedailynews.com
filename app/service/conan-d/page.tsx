import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interviews and Podcasting Services | Conan D - ObjectWire.org",
  description: "Influenced by Joseph Campbell and bell hooks, Conan sees journalism as mythic storytelling. Off-duty, he collects vinyl and explores urban landscapes.",
};

export default function ConanDPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conan D
          </h1>
          <p className="text-xl text-gray-600">
            Interviews & Podcasting Services | Austin, TX
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Journalism as Mythic Storytelling
            </h2>
            <p className="text-gray-700 mb-4">
              Influenced by Joseph Campbell and bell hooks, Conan sees journalism as mythic storytelling. 
              His approach combines deep narrative structure with social consciousness, creating content 
              that resonates on both intellectual and emotional levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Offered</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Long-form interviews</li>
                <li>• Podcast production</li>
                <li>• Story development</li>
                <li>• Narrative journalism</li>
                <li>• Audio documentary</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Influences</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Joseph Campbell's monomyth</li>
                <li>• bell hooks' critical theory</li>
                <li>• Narrative journalism tradition</li>
                <li>• Audio storytelling craft</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Beyond the Microphone
            </h2>
            <p className="text-gray-700 mb-4">
              Off-duty, Conan collects vinyl and explores urban landscapes. These passions inform 
              his journalistic approach, bringing texture and cultural depth to his interviews and 
              podcast productions.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Connect with Conan
            </h2>
            <p className="text-gray-700 mb-6">
              Interested in podcast collaboration, interview opportunities, or storytelling projects? 
              Get in touch to discuss your vision.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule Consultation
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Approach to Storytelling
            </h2>
            <p className="text-gray-700">
              Every interview is an opportunity to uncover the hero's journey within ordinary lives. 
              Through careful listening and thoughtful questioning, Conan creates podcasts and 
              interviews that reveal the universal in the particular.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
