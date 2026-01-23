import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "California Joins WHO Disease Network After US Withdrawal | ObjectWire",
  description: "California becomes first US state to join WHO's Global Outbreak Alert and Response Network one day after federal withdrawal, in direct challenge to Trump administration.",
  keywords: ["California", "WHO", "World Health Organization", "Gavin Newsom", "Trump", "US withdrawal", "disease network", "public health"],
  authors: [{ name: "Jack S", url: "https://www.objectwire.org/author/jack-s" }],
  openGraph: {
    title: "California Joins WHO Disease Network After US Withdrawal",
    description: "Governor Gavin Newsom announces California's membership in WHO global health network, defying federal policy.",
    type: "article",
    publishedTime: "2026-01-23T15:00:00Z",
    authors: ["Jack S"],
    section: "Politics",
    tags: ["California", "WHO", "Gavin Newsom", "Trump", "Public Health"],
  },
  other: {
    'news_keywords': 'California, WHO, World Health Organization, Gavin Newsom, Trump administration, US withdrawal, GOARN, public health, disease outbreak',
  }
};

// Article structured data for Google News
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "California Joins WHO Disease Network After US Withdrawal",
  description: "California becomes first US state to join WHO's Global Outbreak Alert and Response Network one day after federal withdrawal from WHO.",
  image: "https://www.objectwire.org/objectwire-logo.png",
  datePublished: "2026-01-23T15:00:00Z",
  dateModified: "2026-01-23T15:00:00Z",
  author: {
    "@type": "Person",
    name: "Jack S",
    url: "https://www.objectwire.org/author/jack-s",
    jobTitle: "Journalist"
  },
  publisher: {
    "@type": "Organization",
    name: "ObjectWire",
    logo: {
      "@type": "ImageObject",
      url: "https://www.objectwire.org/objectwire-logo.png"
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.objectwire.org/news/california-joins-who-disease-network-after-us-withdrawal"
  },
  articleSection: "Politics",
  keywords: "California, WHO, World Health Organization, Gavin Newsom, Trump, public health"
};

export default function CaliforniaWHOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-4 py-16 max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-blue-200 text-sm font-mono tracking-wider mb-4">
                BREAKING NEWS • POLITICS & HEALTH
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                California Joins WHO Disease Network After US Withdrawal
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                State becomes first to join WHO's Global Outbreak Alert and Response Network just one day after 
                federal government completes withdrawal from international health organization
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                <span>January 23, 2026</span>
                <span>•</span>
                <span>Published 1 hour ago</span>
                <span>•</span>
                <span>By <Link href="/author/jack-s" className="underline hover:text-white font-semibold">Jack S</Link></span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
              SACRAMENTO, CA — California has become the first American state to join the World Health Organization's 
              Global Outbreak Alert and Response Network (GOARN), Governor Gavin Newsom announced Friday, just one day 
              after the United States formally completed its withdrawal from the WHO following nearly eight decades of 
              membership.
            </p>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Direct Challenge to Federal Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The move represents a direct challenge to the Trump administration's decision to exit the international 
                health body and signals California's continued defiance of federal health policy under the second Trump 
                term. Governor Newsom made the announcement at a Sacramento press conference flanked by state health 
                officials and international health experts.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "While the federal government may choose to abdicate its responsibility to global health security, 
                California will not stand idly by," Newsom said. "We are the world's fifth-largest economy, home to 
                leading research institutions, and a critical hub for pandemic preparedness. We will continue to work 
                with international partners to protect public health."
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Trump administration completed its formal withdrawal from the WHO on Thursday, citing the 
                organization's handling of the COVID-19 pandemic and alleged Chinese influence over the body. President 
                Trump first initiated the withdrawal process during his first term in 2020, which was reversed by 
                President Biden, and then re-initiated upon Trump's return to office in 2025.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is GOARN?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Global Outbreak Alert and Response Network is a technical collaboration of institutions and networks 
                that pool resources and expertise to rapidly identify, confirm, and respond to disease outbreaks of 
                international concern. Established in 2000, GOARN has responded to more than 150 disease outbreaks worldwide.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3">GOARN Key Functions:</h3>
                <ul className="space-y-2 mb-0">
                  <li className="text-gray-700">• Rapid deployment of multidisciplinary teams during health emergencies</li>
                  <li className="text-gray-700">• Real-time disease surveillance and early warning systems</li>
                  <li className="text-gray-700">• Technical assistance to countries facing outbreaks</li>
                  <li className="text-gray-700">• Laboratory support and diagnostics coordination</li>
                  <li className="text-gray-700">• Training and capacity building for outbreak response</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                California's membership means state health officials will have direct access to WHO intelligence on 
                emerging diseases, participate in coordinated international responses, and contribute California's 
                considerable epidemiological expertise to global health security efforts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">California's Public Health Infrastructure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a population of 39 million people and a GDP of $3.9 trillion, California operates one of the most 
                sophisticated public health systems in the United States. The state is home to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Major Research Institutions:</strong> Stanford, UC Berkeley, UCLA, USC, Scripps Research, 
                and numerous other universities conducting cutting-edge epidemiological research</li>
                <li><strong>Biotech Hub:</strong> San Diego and Bay Area biotech clusters with vaccine development and 
                diagnostic capabilities</li>
                <li><strong>Port Systems:</strong> Los Angeles and Long Beach ports handling 40% of US cargo, requiring 
                robust disease surveillance</li>
                <li><strong>International Airports:</strong> Major gateways at LAX, SFO, and San Diego requiring 
                constant health monitoring</li>
                <li><strong>Diverse Population:</strong> International connections requiring multilingual public health 
                infrastructure</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                "California has always been at the forefront of public health innovation," said Dr. Tomás Aragón, 
                California's State Public Health Officer. "This partnership with GOARN will enhance our ability to 
                detect and respond to emerging threats while contributing our expertise to global health security."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Political Implications and Federal Response</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The announcement has sparked immediate political controversy, with Republicans accusing Newsom of 
                grandstanding and Democrats praising California's leadership. The White House issued a sharp rebuke 
                within hours of Newsom's announcement.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Governor Newsom's publicity stunt won't change the fact that the WHO is a corrupt, China-controlled 
                organization that failed the world during COVID-19," White House Press Secretary Karoline Leavitt said 
                in a statement. "California taxpayers should question why their governor is more interested in 
                international organizations than fixing the state's homelessness crisis and crime problem."
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                However, public health experts largely praised the move as a pragmatic step to maintain disease 
                surveillance capabilities regardless of federal politics.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "Disease outbreaks don't respect political boundaries or partisan divisions," said Dr. Jennifer Nuzzo, 
                Director of the Pandemic Center at Brown University School of Public Health. "California's decision to 
                maintain connections with the international health community is sound public health policy, not a 
                political statement."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Questions and Precedent</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Constitutional law experts have raised questions about whether states can independently join 
                international health networks without federal coordination, though most agree California is on solid 
                legal ground.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "States have inherent police powers that include protecting public health," said Professor Erwin 
                Chemerinsky, Dean of UC Berkeley School of Law. "As long as California's membership doesn't conflict 
                with federal treaty obligations or foreign policy, there's no constitutional barrier to this arrangement."
              </p>
              <p className="text-gray-700 leading-relaxed">
                The arrangement is structured as a technical partnership rather than formal treaty membership, which 
                would require federal approval. California will contribute expertise and receive information but will 
                not have voting rights on WHO policy matters, which remain the province of national governments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Other States May Follow</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Several other Democratic-led states have indicated they may pursue similar partnerships with international 
                health organizations following California's lead.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                New York Governor Kathy Hochul said her administration is "actively exploring similar partnerships" to 
                maintain the state's pandemic preparedness capabilities. Washington Governor Bob Ferguson and Illinois 
                Governor J.B. Pritzker also expressed interest in coordinating with international health networks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "What California is doing makes eminent sense," Hochul said. "New York is a global hub with constant 
                international travel. We need to be plugged into global disease surveillance systems regardless of 
                what's happening in Washington."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Funding and Implementation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                California will dedicate <strong>$5 million annually</strong> from its existing public health budget 
                to support GOARN membership activities, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Staff participation in GOARN steering committee meetings and technical working groups</li>
                <li>Deployment of California epidemiologists to international outbreak responses</li>
                <li>Laboratory support for diagnostic testing and pathogen characterization</li>
                <li>Training programs for outbreak investigation and response</li>
                <li>Data sharing and surveillance system integration</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                The California Department of Public Health will serve as the primary coordinating agency, working 
                closely with the state's county health departments and academic medical centers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">International Reactions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                WHO Director-General Dr. Tedros Adhanom Ghebreyesus welcomed California's membership in a statement, 
                calling it "an important step in maintaining strong partnerships with American health institutions."
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "While we regret the United States government's decision to withdraw from WHO, we are encouraged by 
                California's commitment to global health security," Dr. Tedros said. "Disease outbreaks require 
                international cooperation, and we welcome all partners who share this understanding."
              </p>
              <p className="text-gray-700 leading-relaxed">
                European health officials also praised the move, with several suggesting it could serve as a model for 
                subnational engagement with international health organizations during periods of federal withdrawal.
              </p>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">Key Takeaways:</h3>
              <ul className="space-y-2 mb-0">
                <li className="text-gray-700">• California becomes first US state to join WHO's GOARN network</li>
                <li className="text-gray-700">• Announcement comes one day after US completed WHO withdrawal</li>
                <li className="text-gray-700">• Direct challenge to Trump administration's international health policy</li>
                <li className="text-gray-700">• Other Democratic states considering similar partnerships</li>
                <li className="text-gray-700">• $5 million annual commitment from California public health budget</li>
                <li className="text-gray-700">• Legal experts say arrangement is constitutionally sound</li>
              </ul>
            </div>

            {/* Author Bio */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">About the Author</h3>
                <Link href="/author/jack-s" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                  Jack S
                </Link>
                <p className="text-gray-600 mt-2">
                  Jack S is a journalist at ObjectWire specializing in investigative reporting and political analysis. 
                  Committed to ethical journalism and accurate, unbiased reporting in an era of misinformation.
                </p>
                <Link 
                  href="/author/jack-s"
                  className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  View all articles by Jack S →
                </Link>
              </div>
            </div>

            {/* Related Topics */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/news"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <h4 className="font-bold text-gray-900 mb-2">Latest Political News</h4>
                  <p className="text-sm text-gray-600">More breaking news from politics and health policy</p>
                </Link>
                <Link 
                  href="/news/winter-storm-senate-vote-shutdown-deadline"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <h4 className="font-bold text-gray-900 mb-2">Senate Shutdown Deadline</h4>
                  <p className="text-sm text-gray-600">Winter storm delays critical spending vote</p>
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                <strong>Editor's Note:</strong> This is a developing story. Additional updates will be provided as 
                reactions continue to develop. Last updated: January 23, 2026, 3:00 PM ET.
              </p>
            </div>

          </article>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated on Health Policy & Politics
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest updates on public health, government policy, and political developments.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/news"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  More News
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300"
                >
                  Subscribe for Updates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
