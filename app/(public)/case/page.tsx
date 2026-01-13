import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | The Objective Wire - ObjectWire.org",
  description: "Contact Object Wire for inquiries, tips, or story submissions. Get in touch with our team today.",
};

export default function CasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with The Objective Wire team
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              General Inquiries
            </h2>
            <p className="text-gray-700 mb-6">
              Have a question or feedback? We'd love to hear from you.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 555-5555"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Send Message
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                News Tips
              </h2>
              <p className="text-gray-700 mb-4">
                Have a story tip or information about business, technology, or innovation developments?
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Submit a Tip
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Media Inquiries
              </h2>
              <p className="text-gray-700 mb-4">
                For press inquiries and media relations, please contact our communications team.
              </p>
              <p className="text-gray-600 text-sm">
                Email: <span className="text-blue-600">media@objectwire.org</span>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Address
              </h2>
              <p className="text-gray-700 text-sm">
                ObjectWire<br />
                Texas, United States<br />
                <br />
                For specific inquiries, please use the contact form.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Need Help with a Case?
          </h2>
          <p className="text-gray-700 mb-4">
            For investigative inquiries, fact-checking requests, or evidence collection assistance, 
            please provide detailed information about your case using the contact form above.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Fact verification and research</li>
            <li>• Document analysis</li>
            <li>• Public records requests</li>
            <li>• Investigative journalism support</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
