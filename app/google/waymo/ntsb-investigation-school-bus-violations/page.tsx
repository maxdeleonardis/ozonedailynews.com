import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NTSB Opens Investigation into Waymo Over School Bus Violations | ObjectWire",
  description: "National Transportation Safety Board launches federal investigation after Waymo robotaxis illegally passed stopped school buses more than 20 times in Austin and Atlanta since beginning of school year.",
  keywords: ["NTSB", "Waymo", "school bus", "investigation", "autonomous vehicles", "safety", "Austin", "Atlanta", "robotaxi", "NHTSA"],
  authors: [{ name: "Jack S", url: "https://www.objectwire.org/author/jack-s" }],
  openGraph: {
    title: "NTSB Opens Investigation into Waymo Over School Bus Violations",
    description: "First federal NTSB probe into Waymo after 20+ incidents of robotaxis illegally passing stopped school buses.",
    type: "article",
    publishedTime: "2026-01-23T17:00:00Z",
    authors: ["Jack S"],
    section: "Technology",
    tags: ["NTSB", "Waymo", "Autonomous Vehicles", "Safety", "Investigation"],
  },
  other: {
    'news_keywords': 'NTSB, Waymo, school bus safety, autonomous vehicles, robotaxi, federal investigation, Austin Texas, Atlanta Georgia, NHTSA, self-driving cars',
  }
};

// Article structured data for Google News
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "NTSB Opens Investigation into Waymo Over School Bus Violations",
  description: "National Transportation Safety Board launches federal investigation after Waymo robotaxis illegally passed stopped school buses more than 20 times.",
  image: "https://www.objectwire.org/objectwire-logo.png",
  datePublished: "2026-01-23T17:00:00Z",
  dateModified: "2026-01-23T17:00:00Z",
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
    "@id": "https://www.objectwire.org/google/waymo/ntsb-investigation-school-bus-violations"
  },
  articleSection: "Technology",
  keywords: "NTSB, Waymo, school bus, autonomous vehicles, safety investigation"
};

export default function WaymoNTSBInvestigationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-900 via-red-700 to-orange-700 text-white">
          <div className="container mx-auto px-4 py-16 max-w-7xl">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm text-red-200">
                <Link href="/google" className="hover:text-white">Google & Alphabet</Link>
                <span className="mx-2">/</span>
                <Link href="/google/waymo" className="hover:text-white">Waymo</Link>
                <span className="mx-2">/</span>
                <span className="text-white font-semibold">NTSB Investigation</span>
              </nav>

              <p className="text-red-200 text-sm font-mono tracking-wider mb-4">
                BREAKING NEWS • SAFETY INVESTIGATION
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                NTSB Opens Investigation into Waymo Over School Bus Violations
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed mb-6">
                Federal safety board launches first-ever probe into Waymo after robotaxis illegally passed stopped 
                school buses more than 20 times in Austin, Texas, and at least once in Atlanta, Georgia
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                <span>January 23, 2026</span>
                <span>•</span>
                <span>Published 3 hours ago</span>
                <span>•</span>
                <span>By <Link href="/author/jack-s" className="underline hover:text-white font-semibold">Jack S</Link></span>
                <span>•</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
              WASHINGTON, D.C. — The National Transportation Safety Board announced Friday that it is launching an 
              investigation into Waymo after the company's robotaxis have been recorded illegally passing stopped 
              school buses more than 20 times in Austin, Texas, and at least once in Atlanta, Georgia, since the 
              beginning of the current school year.
            </p>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">First NTSB Investigation into Waymo</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This marks the first time the NTSB has investigated Waymo, and it comes as the second federal probe 
                into the company's school bus issue. The National Highway Traffic Safety Administration (NHTSA) opened 
                its own investigation in October 2025 after a Waymo vehicle in Atlanta failed to stop for a school bus 
                with its red lights flashing and stop arm deployed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The NTSB's decision to open a separate investigation signals the severity with which federal safety 
                officials view these violations. Unlike NHTSA, which focuses on vehicle safety defects and recalls, 
                the NTSB investigates transportation accidents and incidents to determine probable causes and issue 
                safety recommendations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "Illegally passing a stopped school bus is one of the most dangerous traffic violations because it puts 
                children's lives at direct risk," NTSB Chair Jennifer Homendy said in a statement. "When autonomous 
                vehicles fail to recognize and obey school bus stop signals repeatedly, it raises fundamental questions 
                about the technology's readiness for public deployment."
              </p>
            </section>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">Critical Safety Concern:</h3>
              <p className="text-gray-700 mb-3">
                In all 50 states, it is illegal to pass a stopped school bus with flashing red lights and an extended 
                stop arm. This law exists because children are most vulnerable when crossing streets to board or exit 
                school buses.
              </p>
              <p className="text-gray-700 mb-0">
                According to the National Association of State Directors of Pupil Transportation Services, an estimated 
                <strong> 50,000-100,000 drivers illegally pass school buses every day</strong> in the United States, 
                contributing to dozens of child fatalities annually.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Documented Incidents Trigger Investigation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The NTSB investigation was prompted by documented evidence compiled by local school districts, law 
                enforcement, and concerned citizens in both Austin and Atlanta. According to the board's preliminary 
                findings:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Austin, Texas:</strong> At least 22 documented instances of Waymo vehicles illegally 
                passing stopped school buses between August 2025 and January 2026</li>
                <li><strong>Atlanta, Georgia:</strong> Minimum of 3 confirmed incidents, including the October 2025 
                incident that triggered the NHTSA investigation</li>
                <li><strong>Video Evidence:</strong> Multiple incidents captured on school bus dash cameras and external 
                video recording systems</li>
                <li><strong>Witness Reports:</strong> Dozens of reports filed by bus drivers, school officials, and 
                parents</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Austin Independent School District Superintendent Dr. Matias Segura said his district has been raising 
                concerns about Waymo vehicles with city officials and the company for months.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Waymo's System Failed</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Preliminary analysis suggests that Waymo's autonomous driving system is experiencing difficulties 
                properly recognizing and responding to school bus stop signals in certain scenarios. The failures appear 
                to occur most frequently when:
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3">Common Failure Patterns:</h3>
                <ul className="space-y-3 mb-0">
                  <li className="text-gray-700">
                    <strong>1. Multiple Lane Scenarios:</strong> Waymo vehicles in adjacent lanes failing to stop when 
                    bus is stopped in neighboring lane
                  </li>
                  <li className="text-gray-700">
                    <strong>2. Dawn/Dusk Conditions:</strong> Reduced ability to detect flashing red lights during 
                    low-light transition periods
                  </li>
                  <li className="text-gray-700">
                    <strong>3. Partial Obstructions:</strong> Failing to recognize stop arm when partially obscured by 
                    other vehicles or objects
                  </li>
                  <li className="text-gray-700">
                    <strong>4. Timing Issues:</strong> Delayed recognition resulting in vehicle passing bus before 
                    completing stop
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Transportation safety experts note that these scenarios should be well within the capabilities of modern 
                autonomous driving systems, which use multiple redundant sensors including cameras, LiDAR, and radar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Waymo's Response</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Waymo issued a statement Friday afternoon acknowledging the NTSB investigation and defending its safety 
                record while pledging cooperation with investigators.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Safety is Waymo's core mission, and we take any incident involving our vehicles with the utmost 
                seriousness," the company said. "We have been actively working with NHTSA since their investigation 
                began in October 2025, and we will provide the NTSB with full cooperation and transparency."
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The company noted that it has already implemented software updates aimed at improving school bus 
                detection and has increased training data for its machine learning systems. However, Waymo did not 
                provide specifics on when these updates were deployed or their effectiveness in preventing future 
                violations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "Our data shows that Waymo vehicles have driven millions of miles safely and have a significantly better 
                safety record than human drivers," the statement continued. "That said, we recognize that even a single 
                safety incident is one too many, and we are committed to continuous improvement."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Local Officials Demand Action</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Local government officials in both Austin and Atlanta have expressed frustration with Waymo's response 
                to the school bus issues and are calling for stronger regulatory oversight of autonomous vehicle operations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Austin City Council Member Vanessa Fuentes, whose district includes several schools where incidents 
                occurred, said the repeated violations demonstrate that the technology is not yet ready for widespread 
                deployment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "We're talking about the safety of our children," Fuentes said. "Twenty-two violations in one city in 
                just five months is unacceptable. If a human driver did this repeatedly, they would lose their license. 
                Why should we hold autonomous vehicles to a lower standard?"
              </p>
              <p className="text-gray-700 leading-relaxed">
                Atlanta City Council has scheduled a special hearing for February to examine autonomous vehicle 
                regulations and may consider requiring additional permits or insurance for robotaxi operations within 
                city limits.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Parent and Safety Advocates React</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Parents and child safety advocates have reacted with alarm to the news of repeated school bus violations 
                by autonomous vehicles. Several advocacy groups are calling for a temporary suspension of Waymo operations 
                until the safety issues are resolved.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Every parent's worst nightmare is their child being hit by a car while getting on or off a school bus," 
                said Janette Fennell, founder and president of Kids and Cars, a national child safety organization. "The 
                fact that this has happened more than 20 times with no consequences is deeply troubling. We need federal 
                action now."
              </p>
              <p className="text-gray-700 leading-relaxed">
                The National Safety Council issued a statement supporting the NTSB investigation and calling for 
                standardized testing protocols for autonomous vehicles' ability to recognize school bus safety signals 
                before vehicles are approved for public road use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Implications for Autonomous Vehicle Industry</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The NTSB investigation into Waymo could have significant ramifications for the entire autonomous vehicle 
                industry. As the acknowledged leader in self-driving technology with the most extensive real-world 
                deployment, Waymo's struggles with school bus recognition raise questions about whether other companies' 
                systems face similar challenges.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Competitors including General Motors' Cruise (which recently resumed limited operations after its own 
                safety suspension) and Aurora Innovation have not reported similar school bus incidents, though their 
                operations are significantly smaller in scale than Waymo's.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "This investigation will likely lead to new federal requirements for autonomous vehicle testing and 
                validation," said Bryant Walker Smith, a professor at the University of South Carolina School of Law 
                who specializes in autonomous vehicle regulation. "School bus recognition should be table stakes for any 
                autonomous system operating on public roads. If Waymo is struggling with this, regulators will want to 
                know how other companies are addressing it."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Investigation Timeline and Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The NTSB investigation will examine multiple aspects of the school bus violations, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Detailed analysis of sensor data, video footage, and vehicle logs from all documented incidents</li>
                <li>Evaluation of Waymo's autonomous driving software and decision-making algorithms</li>
                <li>Assessment of the company's testing protocols for school zone and school bus scenarios</li>
                <li>Review of Waymo's safety management systems and incident response procedures</li>
                <li>Comparison with industry best practices and other autonomous vehicle operators</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                NTSB investigations typically take 12-24 months to complete, though preliminary findings may be released 
                sooner if immediate safety concerns are identified. The board's final report will include probable cause 
                determinations and safety recommendations, which while not legally binding, carry significant weight with 
                regulators and the industry.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The parallel NHTSA investigation, which has enforcement authority, could result in recalls, fines, or 
                restrictions on Waymo's operations if safety defects are found.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Regulatory Landscape</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The incidents highlight ongoing debates about the adequacy of current autonomous vehicle regulation. 
                Unlike traditional vehicles, which must meet extensive federal safety standards before sale, autonomous 
                vehicles largely operate under patchwork state and local regulations with limited federal oversight.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Congressional efforts to establish comprehensive federal autonomous vehicle regulations have stalled 
                repeatedly over the past decade, leaving companies largely free to self-certify their vehicles' safety.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "These incidents demonstrate why we need federal autonomous vehicle safety standards, not voluntary 
                industry guidelines," said Senator Ed Markey (D-MA), who has long advocated for stronger AV regulation. 
                "We wouldn't allow a human driver to repeatedly endanger children without consequences. Autonomous 
                vehicles shouldn't get a pass either."
              </p>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">Key Takeaways:</h3>
              <ul className="space-y-2 mb-0">
                <li className="text-gray-700">• NTSB opens first-ever investigation into Waymo for school bus violations</li>
                <li className="text-gray-700">• 20+ documented incidents in Austin, TX; at least 3 in Atlanta, GA</li>
                <li className="text-gray-700">• Second federal probe after NHTSA investigation began October 2025</li>
                <li className="text-gray-700">• Violations occurred despite multiple redundant sensors in Waymo vehicles</li>
                <li className="text-gray-700">• Local officials calling for stronger regulatory oversight</li>
                <li className="text-gray-700">• Investigation could lead to new industry-wide testing requirements</li>
                <li className="text-gray-700">• NTSB investigation typically takes 12-24 months to complete</li>
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
                  Jack S is a journalist at ObjectWire specializing in investigative reporting and technology analysis. 
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
                  href="/google/waymo"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all"
                >
                  <h4 className="font-bold text-gray-900 mb-2">Waymo Coverage Hub</h4>
                  <p className="text-sm text-gray-600">Complete coverage of Waymo's autonomous vehicle technology</p>
                </Link>
                <Link 
                  href="/google"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all"
                >
                  <h4 className="font-bold text-gray-900 mb-2">Google & Alphabet Inc</h4>
                  <p className="text-sm text-gray-600">All news and analysis on Google and its subsidiaries</p>
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                <strong>Editor's Note:</strong> This is a developing story. Updates will be provided as the NTSB and 
                NHTSA investigations progress and as additional information becomes available. Last updated: January 23, 
                2026, 5:00 PM ET.
              </p>
            </div>

          </article>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated on Autonomous Vehicle Safety
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest updates on Waymo investigations, autonomous vehicle regulation, and transportation safety.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/google/waymo"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Waymo Coverage
                </Link>
                <Link
                  href="/news"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300"
                >
                  All Tech News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
