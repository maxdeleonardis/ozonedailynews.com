import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Source for Independents | The Objective Wire",
  description: "Independent news coverage focused on business, technology, and innovation. Stay informed with objective reporting.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News Source for Independents
          </h1>
          <p className="text-xl text-gray-600">
            Independent news coverage focused on business, technology, and innovation.
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Unbiased Reporting
            </h2>
            <p className="text-gray-700 mb-4">
              The Objective Wire delivers news without partisan spin. We focus on facts, context, and 
              analysis that matters to independent thinkers who value accuracy over agenda.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Coverage Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business</h3>
                <p className="text-gray-700 text-sm">
                  Market developments, corporate strategy, and economic trends
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technology</h3>
                <p className="text-gray-700 text-sm">
                  Innovation, digital transformation, and tech industry news
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Startups</h3>
                <p className="text-gray-700 text-sm">
                  Funding rounds, founder insights, and emerging companies
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Policy</h3>
                <p className="text-gray-700 text-sm">
                  Regulations, legislation, and policy impacts on business
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose ObjectWire
            </h2>
            <p className="text-gray-700">
              In an era of media polarization, ObjectWire provides a trusted alternative. Our App Router 
              system delivers fast, reliable news coverage optimized for modern readers. We leverage 
              React Server Components and parallel routing to ensure you get the information you need 
              quickly and efficiently.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
