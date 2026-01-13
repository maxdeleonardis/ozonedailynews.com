import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missing Persons Investigations - The Objective Wire",
  description: "As a licensed private detective agency in Austin, Texas, we handle a wide range of missing persons cases with discretion, persistence, and sensitivity.",
};

export default function MissingPersonsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Missing Persons Investigations
          </h1>
          <p className="text-xl text-gray-600">
            Professional locate services with discretion, persistence, and sensitivity
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Experienced Missing Persons Investigators
            </h2>
            <p className="text-gray-700 mb-4">
              As a licensed private detective agency in Austin, Texas, we handle a wide range of 
              missing persons cases with discretion, persistence, and sensitivity. Whether searching 
              for a long-lost family member, locating a debtor, or finding a runaway teen, our 
              investigators combine traditional detective work with modern technology.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Types of Missing Persons Cases
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Family Reunification</h3>
                <p className="text-gray-700 text-sm">
                  Locating biological parents, adopted siblings, estranged relatives, or long-lost 
                  family members for emotional closure and connection
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Runaway Minors</h3>
                <p className="text-gray-700 text-sm">
                  Time-sensitive searches for missing teenagers and children working closely with 
                  law enforcement when appropriate
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Skip Tracing</h3>
                <p className="text-gray-700 text-sm">
                  Locating individuals who have intentionally disappeared to avoid debts, legal 
                  obligations, or other responsibilities
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Witness Location</h3>
                <p className="text-gray-700 text-sm">
                  Finding witnesses for legal proceedings, including civil litigation and criminal cases
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Missing Adults</h3>
                <p className="text-gray-700 text-sm">
                  Searches for adults who have lost contact with family due to mental health issues, 
                  homelessness, or other circumstances
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Investigation Methods
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Traditional Techniques</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Witness interviews</li>
                  <li>• Neighborhood canvassing</li>
                  <li>• Records research</li>
                  <li>• Physical surveillance</li>
                  <li>• Asset location</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Modern Technology</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Database searches</li>
                  <li>• Social media analysis</li>
                  <li>• Digital footprint tracking</li>
                  <li>• Public records mining</li>
                  <li>• Network analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Licensed Investigators:</strong> Fully licensed private detectives with 
                specialized training in missing persons cases
              </li>
              <li>
                <strong>Nationwide Network:</strong> Connections with investigators across the country 
                for cases that cross state lines
              </li>
              <li>
                <strong>Law Enforcement Cooperation:</strong> We work alongside authorities when 
                appropriate and legal
              </li>
              <li>
                <strong>Sensitive Approach:</strong> Understanding the emotional nature of these 
                searches, we handle every case with compassion
              </li>
              <li>
                <strong>Persistent Investigation:</strong> We don't give up easily and pursue every 
                lead thoroughly
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Process
            </h2>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li><strong>Initial Consultation:</strong> Gather all available information about the missing person</li>
              <li><strong>Case Assessment:</strong> Evaluate the difficulty level and develop investigation strategy</li>
              <li><strong>Database Research:</strong> Conduct comprehensive searches of public and proprietary databases</li>
              <li><strong>Field Investigation:</strong> Follow leads through interviews, surveillance, and canvassing</li>
              <li><strong>Regular Updates:</strong> Keep clients informed of progress throughout the investigation</li>
              <li><strong>Location & Contact:</strong> Upon locating the individual, facilitate appropriate contact</li>
            </ol>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Start Your Search Today
            </h2>
            <p className="text-gray-700 mb-6">
              Time is critical in missing persons cases. Contact us immediately for a confidential 
              consultation about locating your missing loved one or person of interest.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Emergency Contact
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Working with Families
            </h2>
            <p className="text-gray-700">
              We understand that searching for a missing person is an emotionally difficult experience. 
              Our team provides not only professional investigative services but also compassionate 
              support throughout the process. We maintain clear communication and respect your wishes 
              regarding contact preferences once the person is located.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
