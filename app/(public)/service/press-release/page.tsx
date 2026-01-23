import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PR Branding Press Release | Object Wire - ObjectWire.org",
  description: "At Objective Wire, we specialize in public relations (PR), branding, and press release writing services to help Austin-based businesses, startups, nonprofits, and individuals amplify their message.",
  alternates: {
    canonical: 'https://www.objectwire.org/service/press-release',
  },
};

export default function PressReleasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PR, Branding & Press Release Services
          </h1>
          <p className="text-xl text-gray-600">
            Professional communications services for Austin-based organizations
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Amplify Your Message
            </h2>
            <p className="text-gray-700 mb-4">
              At Objective Wire, we specialize in public relations (PR), branding, and press release 
              writing services to help Austin-based businesses, startups, nonprofits, and individuals 
              amplify their message. Our journalism background ensures your story is told with 
              clarity, credibility, and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Press Release Writing</h3>
              <p className="text-gray-700 text-sm">
                Professional press releases that capture media attention and deliver your message effectively
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Public Relations</h3>
              <p className="text-gray-700 text-sm">
                Strategic PR campaigns to build relationships with media and shape public perception
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Development</h3>
              <p className="text-gray-700 text-sm">
                Create and refine your brand identity, messaging, and positioning in the market
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Services for Every Need
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">For Businesses</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Product launches and announcements</li>
                  <li>• Executive thought leadership</li>
                  <li>• Corporate communications</li>
                  <li>• Crisis management</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">For Startups</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Funding announcements</li>
                  <li>• Founder positioning</li>
                  <li>• Product-market fit messaging</li>
                  <li>• Media relationship building</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">For Nonprofits</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Mission-driven storytelling</li>
                  <li>• Donor communications</li>
                  <li>• Event promotion</li>
                  <li>• Impact reporting</li>
                </ul>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">For Individuals</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Personal brand development</li>
                  <li>• Author and expert positioning</li>
                  <li>• Speaking engagement promotion</li>
                  <li>• Professional reputation management</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Objective Wire Advantage
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Journalism Background:</strong> Our team understands what makes news 
                and how to craft compelling stories
              </li>
              <li>
                <strong>Media Relationships:</strong> Established connections with journalists 
                and outlets across industries
              </li>
              <li>
                <strong>Local Expertise:</strong> Deep knowledge of the Austin business and tech 
                ecosystem
              </li>
              <li>
                <strong>Strategic Approach:</strong> PR and branding aligned with your business 
                goals
              </li>
              <li>
                <strong>Measurable Results:</strong> Clear metrics and reporting on campaign 
                performance
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-gray-700 mb-6">
              Ready to elevate your communications strategy? Contact us for a consultation and 
              let's discuss how we can help amplify your message.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Request Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Pricing
            </h2>
            <p className="text-gray-700 mb-4">
              We offer flexible pricing options to suit different needs and budgets:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Per-project pricing for press releases and one-time services</li>
              <li>• Monthly retainers for ongoing PR and branding support</li>
              <li>• Custom packages for comprehensive campaigns</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Contact us for a detailed quote based on your specific requirements.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
