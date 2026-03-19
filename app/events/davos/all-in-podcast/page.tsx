import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "All-In Podcast at Davos 2026: Silicon Valley Meets Global Elite | ObjectWire",
  description: "How Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg brought the All-In Podcast to the World Economic Forum in Davos, including exclusive interviews, private dinners, and live episodes.",
  keywords: [
    "All-In Podcast",
    "Davos 2026",
    "Chamath Palihapitiya",
    "Jason Calacanis",
    "David Sacks",
    "David Friedberg",
    "World Economic Forum",
    "tech podcast",
    "Silicon Valley Davos",
    "WEF 2026",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/davos/all-in-podcast',
  },
  openGraph: {
    title: "All-In Podcast Takes Davos 2026 by Storm",
    description: "Inside the All-In Podcast's historic trip to the World Economic Forum, featuring exclusive access to world leaders and tech titans.",
    type: "article",
    url: "https://www.objectwire.org/davos/all-in-podcast",
    images: [
      {
        url: "https://www.objectwire.org/images/all-in-davos-2026-og.jpg",
        width: 1200,
        height: 630,
        alt: "All-In Podcast at Davos 2026",
      },
    ],
  },
};

export default function AllInPodcastDavosPage() {
  const publishedDate = new Date("2026-01-27T14:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="All-In Podcast at Davos 2026: Silicon Valley Meets Global Elite"
        description="Comprehensive coverage of the All-In Podcast's historic trip to the 2026 World Economic Forum, featuring live episodes, exclusive interviews, and behind-the-scenes access."
        author="ObjectWire Editorial Team"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/all-in-davos-hero.jpg"
        articleUrl="https://www.objectwire.org/davos/all-in-podcast"
        section="Media & Technology"
        keywords={["All-In Podcast", "Davos", "Chamath", "Calacanis", "Sacks", "Friedberg", "WEF"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-red-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-purple-200 text-sm font-mono tracking-wider mb-4">
              MEDIA • TECHNOLOGY • JANUARY 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              All-In Podcast at Davos 2026: When Silicon Valley Crashed the Global Elite's Party
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>January 27, 2026</span>
              <span>•</span>
              <span>Davos, Switzerland</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { name: "Home", item: "/" },
            { name: "Davos 2026", item: "/davos" },
            { name: "All-In Podcast", item: "/davos/all-in-podcast" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
            The All-In Podcast — featuring Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg — 
            made their highly anticipated debut at the 2026 World Economic Forum in Davos, Switzerland. The move marked 
            a watershed moment where Silicon Valley's most influential tech podcast secured a seat at the table with 
            global leaders, CEOs, and policymakers.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Davos 2026 Was Different</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For years, the All-In hosts have critiqued the World Economic Forum from afar, calling it everything from 
              "elite cosplay" to "where bad policy ideas get laundered." So when the WEF extended a formal invitation 
              for 2026, the tech world watched closely to see if the besties would show up — and if so, what they'd do.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Spoiler: They showed up. And they didn't hold back.
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2">Key Quote from Chamath:</p>
              <p className="text-gray-700 italic">
                "We're not here to network. We're here to ask the questions that nobody else will ask. If you're 
                uncomfortable, we're doing our job."
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The All-In Davos Setup</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The All-In team arrived with full production equipment, transforming a Davos conference room into a 
              makeshift podcast studio. Over four days, they recorded:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>3 live episodes</strong> with audiences of 500+ attendees each</li>
              <li><strong>15 one-on-one interviews</strong> with world leaders and CEOs</li>
              <li><strong>2 exclusive dinners</strong> (50 people each) with off-the-record conversations</li>
              <li><strong>Daily "emergency pod" clips</strong> reacting to breaking news from the forum</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The production quality matched their signature style: no-nonsense discussions, rapid-fire debates, 
              and zero tolerance for corporate speak or political platitudes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notable Interviews and Moments</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Sam Altman (OpenAI CEO)</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Topic:</strong> AGI timeline, AI safety, and the Davos AI Accord
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Memorable exchange:</strong>
              </p>
              <p className="text-sm text-gray-600 italic mb-2">
                <strong>Chamath:</strong> "You're asking governments to regulate you. Why?"
              </p>
              <p className="text-sm text-gray-600 italic">
                <strong>Altman:</strong> "Because if we get this wrong, there's no second chance. I'd rather have 
                imperfect regulation than no regulation and existential risk."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Larry Fink (BlackRock CEO)</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Topic:</strong> ESG investing, climate finance, and shareholder capitalism
              </p>
              <p className="text-gray-700 mb-2">
                David Sacks challenged Fink on BlackRock's climate commitments while simultaneously investing in fossil 
                fuels. Fink defended the approach as "pragmatic transition finance," leading to a tense but respectful debate.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Emmanuel Macron (French President)</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Topic:</strong> European tech policy, AI regulation, and transatlantic relations
              </p>
              <p className="text-gray-700 mb-2">
                In a 45-minute interview conducted partially in English and French, Macron made the case for European 
                "digital sovereignty." Jason Calacanis pushed back on EU regulations potentially stifling innovation, 
                while Friedberg asked about France's nuclear energy strategy for powering AI data centers.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Jensen Huang (NVIDIA CEO)</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Topic:</strong> Compute democratization, AI chip supply chains, and geopolitics
              </p>
              <p className="text-gray-700 mb-2">
                Huang revealed NVIDIA's plans to distribute 10,000 H100 GPUs to universities in developing nations as part 
                of the "AI for All" initiative announced at Davos. Chamath called it "the most important thing announced 
                at this entire forum."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Klaus Schwab (WEF Founder)</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Topic:</strong> The future of the WEF, Great Reset criticisms, and stakeholder capitalism
              </p>
              <p className="text-gray-700 mb-2">
                This was the most controversial interview. The hosts pressed Schwab on accusations of elitism, lack of 
                accountability, and whether Davos commitments ever materialize into real change. Schwab defended the forum 
                as a "necessary convening power" but acknowledged room for improvement in transparency and follow-through.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Private Dinners</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Perhaps more important than the public interviews were the two private dinners hosted by the All-In crew:
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">"Tech & Policy" Dinner (Night 1)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Attendees included Sam Altman, Demis Hassabis (Google DeepMind), Dario Amodei (Anthropic), several senators, 
              and EU commissioners. The conversation centered on coordinating AI safety research across borders and whether 
              open-source AI models should face restrictions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              According to sources, the dinner resulted in a tentative agreement to create an "International AI Safety Board" 
              modeled after the International Atomic Energy Agency (IAEA).
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">"Builders & Capital" Dinner (Night 3)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This dinner brought together venture capitalists, sovereign wealth fund managers, and founders. Topics included 
              climate tech investment opportunities, whether crypto is "dead" or "just getting started," and the future of 
              space commercialization.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Multiple attendees reported that several billion-dollar deals were "soft-circled" at this dinner, though details 
              remain confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The "Bestie" Dynamics on Display</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The All-In Podcast's appeal comes from the hosts' authentic disagreements and diverse perspectives. Davos 
              amplified these dynamics:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white border-2 border-purple-200 rounded-lg p-4">
                <h4 className="font-bold text-purple-900 mb-2">🔴 Chamath Palihapitiya</h4>
                <p className="text-sm text-gray-700">
                  <strong>Position:</strong> Skeptical of government regulation; pro-innovation at all costs
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Hot take:</strong> Called the Davos AI Accord "regulatory theater" that will "accomplish nothing"
                </p>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-2">🔵 Jason Calacanis</h4>
                <p className="text-sm text-gray-700">
                  <strong>Position:</strong> Pro-free market but willing to consider "light touch" regulation
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Hot take:</strong> Praised the $500B climate fund as "actually putting money where your mouth is"
                </p>
              </div>
              <div className="bg-white border-2 border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-900 mb-2">🔴 David Sacks</h4>
                <p className="text-sm text-gray-700">
                  <strong>Position:</strong> Most libertarian; highly critical of WEF's stakeholder capitalism push
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Hot take:</strong> Warned that AI regulation will be "captured by incumbents to prevent competition"
                </p>
              </div>
              <div className="bg-white border-2 border-green-200 rounded-lg p-4">
                <h4 className="font-bold text-green-900 mb-2">🟢 David Friedberg</h4>
                <p className="text-sm text-gray-700">
                  <strong>Position:</strong> Most focused on climate and food systems; pragmatic on regulation
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Hot take:</strong> Called for "Manhattan Project for climate adaptation" regardless of politics
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reaction and Impact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The All-In Podcast's Davos coverage generated significant buzz:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>40+ million combined views</strong> across YouTube, Spotify, and Apple Podcasts</li>
              <li><strong>#1 news podcast</strong> globally during the Davos week</li>
              <li><strong>1,200+ media mentions</strong> citing All-In interviews as primary sources</li>
              <li><strong>Multiple trending topics</strong> on X (Twitter) from clip highlights</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traditional media outlets both praised and criticized the podcast's approach. The Wall Street Journal called it 
              "refreshing directness in a forum known for diplomatic doublespeak," while The Guardian described it as 
              "tech bro libertarianism masquerading as journalism."
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Controversies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The All-In presence at Davos wasn't without criticism:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Main Criticisms:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Hypocrisy claims:</strong> Criticizing elite gatherings while attending as VIPs</li>
                <li><strong>Access journalism concerns:</strong> Did access to world leaders soften their critiques?</li>
                <li><strong>Private jet usage:</strong> The hosts flew private, despite climate discussions</li>
                <li><strong>Echo chamber worries:</strong> Mostly interviewing tech-friendly voices</li>
                <li><strong>Gender imbalance:</strong> Zero female guests interviewed during Davos coverage</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Jason Calacanis addressed some critiques on the final episode: "We're not journalists. We're operators 
              asking questions from an operator's perspective. If you want different questions, start your own podcast."
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What This Means for Media</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The All-In Podcast's Davos trip represents a broader shift in media and influence:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
              <li><strong>Podcasts are now primary sources</strong> - World leaders now seek podcast appearances 
                  to reach key demographics</li>
              <li><strong>Silicon Valley has a megaphone</strong> - Tech operators can shape policy narratives 
                  without going through traditional media</li>
              <li><strong>Long-form is winning</strong> - 45-minute interviews provide more depth than 3-minute 
                  TV segments</li>
              <li><strong>Trust is fragmenting</strong> - Audiences increasingly prefer opinionated hosts over 
                  "objective" journalists</li>
              <li><strong>Access is democratizing</strong> - You don't need a major network to interview world leaders 
                  anymore</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking Ahead: Davos 2027?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When asked if they'll return to Davos 2027, the hosts gave mixed signals:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Chamath:</strong> "Probably not. We got what we needed. It's not as interesting the second time."</li>
              <li><strong>Calacanis:</strong> "I'd go back. There's value in being in the room where decisions are made."</li>
              <li><strong>Sacks:</strong> "Only if we can ask harder questions. Otherwise it becomes access journalism."</li>
              <li><strong>Friedberg:</strong> "I think we should go to different global forums. G20, COP, Bilderberg next?"</li>
            </ul>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-6">
              <p className="font-semibold text-gray-900 mb-2">Bottom Line:</p>
              <p className="text-gray-700">
                Whether you love or hate the All-In Podcast, their Davos appearance proved that independent media can 
                now compete with — and often outperform — traditional outlets for access, audience, and influence. The 
                gatekeepers are gone. The megaphone is available to anyone who can build an audience.
              </p>
            </div>
          </section>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Coverage</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/davos"
                className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Davos 2026 Overview</h4>
                <p className="text-sm text-gray-600">Complete coverage of the World Economic Forum Annual Meeting</p>
              </Link>
              <Link 
                href="/podcasts/all-in-podcast"
                className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">All-In Podcast Profile</h4>
                <p className="text-sm text-gray-600">Deep dive into tech's most influential podcast</p>
              </Link>
              <Link 
                href="/news"
                className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Latest Technology News</h4>
                <p className="text-sm text-gray-600">Breaking news from Silicon Valley and beyond</p>
              </Link>
              <Link 
                href="/podcasts/joe-rogan"
                className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Joe Rogan Experience</h4>
                <p className="text-sm text-gray-600">Another influential podcast shaping tech and culture</p>
              </Link>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
