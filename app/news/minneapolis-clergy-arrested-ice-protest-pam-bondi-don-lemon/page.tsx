import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "100 Clergy Members Arrested at Minneapolis Airport in ICE Protest; Bondi Considers Criminal Charges Against Don Lemon | ObjectWire",
  description: "Religious leaders stage mass protest at MSP Airport against deportations while Attorney General Pam Bondi explores charging journalist Don Lemon for disrupting worship service.",
  keywords: ["Minneapolis", "ICE protest", "clergy arrests", "Pam Bondi", "Don Lemon", "immigration", "deportation", "MSP Airport", "criminal charges"],
  authors: [{ name: "Jack S", url: "https://www.objectwire.org/author/jack-s" }],
  openGraph: {
    title: "100 Clergy Arrested at Minneapolis Airport ICE Protest; Bondi Eyes Charges Against Don Lemon",
    description: "Mass religious protest against deportations leads to arrests while separate controversy erupts over journalist's church disruption.",
    type: "article",
    publishedTime: "2026-01-23T16:00:00Z",
    authors: ["Jack S"],
    section: "Politics",
    tags: ["Minneapolis", "ICE", "Immigration", "Pam Bondi", "Don Lemon", "Clergy", "Protest"],
  },
  other: {
    'news_keywords': 'Minneapolis, ICE protest, clergy arrests, Pam Bondi, Don Lemon, immigration enforcement, deportation, MSP Airport, criminal charges, First Amendment',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/news/minneapolis-clergy-arrested-ice-protest-pam-bondi-don-lemon',
  },
};

// Article structured data for Google News
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "100 Clergy Members Arrested at Minneapolis Airport in ICE Protest; Bondi Considers Criminal Charges Against Don Lemon",
  description: "Religious leaders stage mass civil disobedience at Minneapolis-St. Paul Airport protesting deportations, while Attorney General explores charges against journalist for church disruption.",
  image: "https://www.objectwire.org/objectwire-logo.png",
  datePublished: "2026-01-23T16:00:00Z",
  dateModified: "2026-01-23T16:00:00Z",
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
    "@id": "https://www.objectwire.org/news/minneapolis-clergy-arrested-ice-protest-pam-bondi-don-lemon"
  },
  articleSection: "Politics",
  keywords: "Minneapolis, ICE protest, clergy, Pam Bondi, Don Lemon, immigration"
};

export default function MinneapolisICEProtestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 text-white">
          <div className="container mx-auto px-4 py-16 max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-purple-200 text-sm font-mono tracking-wider mb-4">
                BREAKING NEWS • IMMIGRATION & LAW
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                100 Clergy Members Arrested at Minneapolis Airport in ICE Protest; Bondi Looks to File Criminal Charges Against Don Lemon
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Mass civil disobedience at MSP Airport protests deportations while Attorney General explores prosecuting 
                journalist for disrupting place of worship
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                <span>January 23, 2026</span>
                <span>•</span>
                <span>Published 2 hours ago</span>
                <span>•</span>
                <span>By <Link href="/author/jack-s" className="underline hover:text-white font-semibold">Jack S</Link></span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
              MINNEAPOLIS, MN — More than 100 clergy members from multiple faith traditions were arrested Thursday 
              evening at Minneapolis-St. Paul International Airport during a coordinated protest against Immigration 
              and Customs Enforcement deportation operations, marking one of the largest religious civil disobedience 
              actions since the Trump administration resumed aggressive immigration enforcement policies.
            </p>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coordinated Protest Shuts Down Terminal</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The religious leaders, wearing clerical collars and vestments representing Christian, Jewish, Muslim, 
                and Buddhist traditions, linked arms in Terminal 1's main concourse around 6:00 PM local time, blocking 
                passenger access and chanting prayers and hymns. The demonstration lasted approximately three hours before 
                Metropolitan Airports Commission police began making arrests.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "We are here as people of faith to say that the mass deportation of our neighbors, friends, and community 
                members is a moral crisis that demands our witness," said Reverend Dr. James Thompson, senior pastor at 
                First United Methodist Church in Minneapolis, moments before his arrest. "We will not stand by silently 
                while families are torn apart in the name of political expediency."
              </p>
              <p className="text-gray-700 leading-relaxed">
                The protest specifically targeted ICE's expanded use of commercial airports for deportation flights, a 
                practice that has increased significantly under the Trump administration. According to immigrant rights 
                groups, MSP has become a major hub for deportation operations, with multiple chartered flights departing 
                weekly to Central America, Mexico, and other countries.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Mass Arrests and Charges</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Minneapolis Airport Police arrested <strong>103 individuals</strong> on charges including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Trespassing on airport property</li>
                <li>Obstruction of legal process</li>
                <li>Unlawful assembly</li>
                <li>Interfering with transportation security</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Among those arrested were prominent religious leaders including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Archbishop Bernard Hebda</strong> of the Archdiocese of Saint Paul and Minneapolis</li>
                <li><strong>Rabbi David Steinhardt</strong> of Temple Israel in Minneapolis</li>
                <li><strong>Imam Hassan Mohamud</strong> of Dar Al-Hijrah Islamic Center</li>
                <li><strong>Sister Margaret Kelly</strong>, longtime Catholic social justice advocate</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Most were released on their own recognizance within hours, with arraignment hearings scheduled for 
                February. The Hennepin County Attorney's Office has not yet announced whether it will pursue prosecution.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ICE Responds to Protest</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Immigration and Customs Enforcement issued a statement defending its deportation operations and 
                criticizing the protesters for disrupting airport operations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "ICE conducts enforcement operations in accordance with federal law and court orders," the statement 
                read. "Today's protest put travelers at risk and interfered with the lawful removal of individuals who 
                have received final orders of deportation from federal immigration judges. Those who choose to obstruct 
                law enforcement operations will face appropriate consequences."
              </p>
              <p className="text-gray-700 leading-relaxed">
                According to ICE data, the agency has dramatically increased deportation operations since President Trump 
                took office, with removals up 340% compared to the same period under the Biden administration. The agency 
                says it is prioritizing individuals with criminal records, though immigrant advocacy groups dispute this 
                characterization.
              </p>
            </section>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">Protest by the Numbers:</h3>
              <ul className="space-y-2 mb-0">
                <li className="text-gray-700">• <strong>103 clergy members arrested</strong> from 47 different congregations</li>
                <li className="text-gray-700">• <strong>3 hours</strong> duration of airport blockade</li>
                <li className="text-gray-700">• <strong>24 flights delayed</strong> due to protest activity</li>
                <li className="text-gray-700">• <strong>6 denominations</strong> represented in interfaith coalition</li>
                <li className="text-gray-700">• <strong>500+ supporters</strong> gathered outside airport in solidarity</li>
              </ul>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Separate Controversy: Bondi Considers Charges Against Don Lemon</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In a separate but related development, Attorney General Pam Bondi announced Thursday that her office is 
                exploring potential criminal charges against journalist and former CNN anchor Don Lemon for allegedly 
                disrupting a worship service earlier this month.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The incident occurred on January 12 at First Baptist Church in Montgomery, Alabama, where Lemon was 
                reportedly covering a story on religious opposition to Trump administration immigration policies. According 
                to church officials, Lemon and his production team entered the sanctuary during Sunday morning worship 
                without permission and began filming, causing disruption to the service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "The First Amendment protects freedom of the press, but it does not give journalists carte blanche to 
                violate criminal laws or disrupt constitutionally protected religious worship," Bondi said in a statement. 
                "We are reviewing this matter carefully to determine whether charges are warranted under Alabama's laws 
                protecting places of worship."
              </p>
              <p className="text-gray-700 leading-relaxed">
                Alabama code section 13A-11-13 makes it a misdemeanor to "willfully interrupt or disturb any assemblage 
                of people met for religious worship." Violations can result in fines up to $6,000 and up to one year in jail.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lemon Denies Wrongdoing, Cites First Amendment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lemon responded to Bondi's statement in a series of posts on social media, strongly denying any wrongdoing 
                and characterizing the potential charges as political retaliation for his critical coverage of the Trump 
                administration.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "I was reporting on a newsworthy story about religious leaders opposing mass deportations," Lemon wrote. 
                "We attempted to contact church leadership beforehand and were told the service was open to the public. 
                The idea that the Attorney General of the United States would pursue criminal charges against a journalist 
                for doing their job is chilling and authoritarian."
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Church officials dispute Lemon's account, saying they never authorized filming and that Lemon's team 
                ignored requests to stop recording once inside the sanctuary.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "They came in with cameras and lights during the middle of Pastor Johnson's sermon," said church 
                administrator Martha Williams. "When we asked them to leave, they argued with us and said they had a 
                right to be there. It was disrespectful and disruptive to our congregation."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Press Freedom Advocates Sound Alarm</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Press freedom organizations immediately condemned Bondi's announcement, warning of a dangerous precedent 
                for journalist prosecutions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "This appears to be a politically motivated attempt to intimidate journalists who are covering controversial 
                government policies," said Katherine Jacobsen, U.S. and Canada Program Coordinator for the Committee to 
                Protect Journalists. "Even if there was a legitimate dispute about filming permissions, pursuing criminal 
                charges against a journalist under these circumstances sends a chilling message to reporters everywhere."
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Reporters Committee for Freedom of the Press announced it is monitoring the situation and would 
                provide legal support if charges are filed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "Journalists must be able to report on matters of public concern without fear of criminal prosecution," 
                said executive director Bruce Brown. "We urge Attorney General Bondi to reconsider this troubling course 
                of action."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Political Reactions Divide Along Party Lines</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Congressional responses to both the Minneapolis protest and the Lemon controversy broke sharply along 
                partisan lines.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Senate Minority Leader Chuck Schumer (D-NY) praised the clergy protesters as "courageous voices of moral 
                conscience" while condemning the potential prosecution of Lemon as "authoritarian overreach."
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Religious leaders exercising civil disobedience to oppose unjust policies have a long and honorable 
                tradition in America," Schumer said. "And the idea of criminally charging a journalist for newsgathering 
                should concern every American who values press freedom."
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Republican lawmakers took the opposite view, condemning the airport protest as unlawful obstruction while 
                defending Bondi's consideration of charges against Lemon.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "Breaking the law is breaking the law, whether you wear a clerical collar or carry a press credential," 
                said Senator Tom Cotton (R-AR). "No one is above the law, and Attorney General Bondi is right to hold 
                accountable those who think their political views exempt them from legal consequences."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Immigration Enforcement Remains Flashpoint</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Minneapolis protest is the latest in a series of confrontations over the Trump administration's 
                expanded immigration enforcement operations. Since taking office, the administration has:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Increased ICE arrests by 340% compared to 2024 levels</li>
                <li>Ended prosecutorial discretion policies that prioritized serious criminals</li>
                <li>Resumed workplace raids targeting employers of undocumented workers</li>
                <li>Expanded expedited removal procedures at the border</li>
                <li>Threatened federal funding cuts to sanctuary cities</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Immigrant advocacy organizations report a climate of fear in immigrant communities, with reports of 
                families avoiding hospitals, schools, and churches for fear of ICE operations. The administration 
                maintains its policies are necessary to restore respect for immigration laws and protect American workers.
              </p>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">Key Takeaways:</h3>
              <ul className="space-y-2 mb-0">
                <li className="text-gray-700">• 103 clergy members arrested at Minneapolis airport protesting ICE deportations</li>
                <li className="text-gray-700">• Interfaith coalition included Christian, Jewish, Muslim, and Buddhist leaders</li>
                <li className="text-gray-700">• AG Pam Bondi exploring criminal charges against Don Lemon for church disruption</li>
                <li className="text-gray-700">• Press freedom groups condemn potential Lemon prosecution as retaliation</li>
                <li className="text-gray-700">• Immigration enforcement remains major political flashpoint</li>
                <li className="text-gray-700">• Congressional reactions split sharply along partisan lines</li>
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
                  className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
                >
                  <h4 className="font-bold text-gray-900 mb-2">Latest News</h4>
                  <p className="text-sm text-gray-600">More breaking political and immigration news</p>
                </Link>
                <Link 
                  href="/news/california-joins-who-disease-network-after-us-withdrawal"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
                >
                  <h4 className="font-bold text-gray-900 mb-2">California Joins WHO Network</h4>
                  <p className="text-sm text-gray-600">State defies federal policy on international health</p>
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                <strong>Editor's Note:</strong> This is a developing story. Updates will be provided as more information 
                becomes available about potential charges and legal proceedings. Last updated: January 23, 2026, 4:00 PM ET.
              </p>
            </div>

          </article>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Informed on Immigration & Justice Issues
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest updates on immigration policy, civil liberties, and political developments.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/news"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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
