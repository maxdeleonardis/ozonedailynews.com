import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opinion Columns | Object Wire - ObjectWire.org",
  description: "Read independent opinion columns analyzing cultural, political, & economic shifts. Contribute your insights today!",
};

export default function OpinionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Opinion Columns
          </h1>
          <p className="text-xl text-gray-600">
            Independent opinion columns analyzing cultural, political, & economic shifts.
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Diverse Perspectives
            </h2>
            <p className="text-gray-700 mb-4">
              Our Opinion section features thoughtful commentary from independent voices across the 
              political and ideological spectrum. We believe that robust debate and diverse viewpoints 
              are essential to informed decision-making.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Analyze
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Cultural Trends</h3>
                <p className="text-gray-700 text-sm">
                  Social movements, demographic shifts, and cultural evolution
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Political Analysis</h3>
                <p className="text-gray-700 text-sm">
                  Policy debates, governance, and institutional change
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Economic Shifts</h3>
                <p className="text-gray-700 text-sm">
                  Market dynamics, labor trends, and economic policy
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contribute Your Voice
            </h2>
            <p className="text-gray-700 mb-4">
              Have insights to share? We welcome submissions from independent thinkers who can 
              contribute original analysis and well-reasoned arguments.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Submit Your Opinion
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Editorial Independence
            </h2>
            <p className="text-gray-700">
              Opinion columns represent the views of individual authors and do not necessarily reflect 
              the position of ObjectWire. We maintain strict editorial independence and fact-checking 
              standards even in opinion content.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
