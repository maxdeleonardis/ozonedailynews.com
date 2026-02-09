import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Lives Matter Lady GOING TO PRISON 2-20 Years - ObjectWire.org",
  description: "In December 2025, federal authorities indicted Tashella Sheri Amore Dickerson, 52, longtime executive director of Black Lives Matter chapter.",
  alternates: {
    canonical: 'https://www.objectwire.org/black-lady-blacklives-matter',
  },
};

export default function BLMIndictmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">3 days ago</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Black Lives Matter Executive Director Faces Federal Indictment
          </h1>
          <p className="text-xl text-gray-600">
            Former director charged with fraud, facing 2-20 years in prison
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Federal Indictment Filed
            </h2>
            <p className="text-gray-700 mb-4">
              In December 2025, federal authorities indicted Tashella Sheri Amore Dickerson, 52, 
              longtime executive director of a Black Lives Matter chapter. The charges relate to 
              alleged financial misconduct and misuse of organizational funds.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Charges and Allegations
            </h2>
            <p className="text-gray-700 mb-4">
              The indictment alleges that Dickerson misappropriated donations intended for the 
              organization's charitable work. Federal prosecutors claim the funds were diverted 
              for personal use rather than supporting the movement's stated mission.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Potential Sentencing
            </h2>
            <p className="text-gray-700 mb-4">
              If convicted, Dickerson faces between 2 and 20 years in federal prison, depending on 
              the specific charges and any aggravating or mitigating circumstances. The case 
              highlights ongoing concerns about financial transparency in nonprofit organizations.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Broader Implications
            </h2>
            <p className="text-gray-700">
              This case is part of a broader pattern of financial scrutiny facing various BLM 
              chapters and affiliated organizations. Calls for increased transparency and 
              accountability have intensified as donors seek assurance their contributions support 
              the movement's stated goals.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Legal Process Ahead
            </h2>
            <p className="text-gray-700">
              Dickerson is presumed innocent until proven guilty. The case will proceed through 
              federal court, where prosecutors must prove their allegations beyond a reasonable 
              doubt. Trial dates and further proceedings are expected in the coming months.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
