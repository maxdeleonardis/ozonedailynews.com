import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Sam Altman and Dario Amodei Condemn ICE Shooting of Minneapolis Nurse While Praising Trump as 'Strong Leader' | ObjectWire",
  description: "OpenAI CEO Sam Altman and Anthropic CEO Dario Amodei issued statements condemning the fatal ICE shooting of Minneapolis nurse while simultaneously praising President Trump's leadership, sparking debate in tech community.",
  keywords: [
    "Sam Altman",
    "Dario Amodei",
    "ICE shooting",
    "Minneapolis nurse",
    "OpenAI CEO",
    "Anthropic CEO",
    "Trump leadership",
    "tech CEOs",
    "AI industry",
    "immigration enforcement",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/news/altman-amodei-condemn-ice-shooting-praise-trump',
  },
  openGraph: {
    title: "AI CEOs Condemn ICE Shooting While Praising Trump",
    description: "Sam Altman and Dario Amodei criticize fatal shooting of Minneapolis nurse by federal agents while calling Trump 'a very strong leader.'",
    type: "article",
    url: "https://www.objectwire.org/news/altman-amodei-condemn-ice-shooting-praise-trump",
    images: [
      {
        url: "https://www.objectwire.org/images/altman-amodei-ice-shooting-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sam Altman and Dario Amodei statements on ICE shooting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI CEOs Condemn ICE Shooting While Praising Trump",
    description: "OpenAI and Anthropic CEOs issue statements on Minneapolis nurse shooting and Trump leadership.",
    images: ["https://www.objectwire.org/images/altman-amodei-ice-shooting-twitter.jpg"],
  },
};

export default function AltmanAmodeiICEStatementPage() {
  const publishedDate = new Date("2026-01-27T19:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="Sam Altman and Dario Amodei Condemn ICE Shooting of Minneapolis Nurse While Praising Trump as 'Strong Leader'"
        description="OpenAI CEO Sam Altman and Anthropic CEO Dario Amodei issued public statements condemning the fatal shooting of a Minneapolis nurse by ICE agents while simultaneously praising President Trump's leadership."
        author="ObjectWire News Desk"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/altman-amodei-ice-shooting.jpg"
        articleUrl="https://www.objectwire.org/news/altman-amodei-condemn-ice-shooting-praise-trump"
        section="Technology & Politics"
        keywords={["Sam Altman", "Dario Amodei", "ICE shooting", "Trump", "OpenAI", "Anthropic"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-red-200 text-sm font-mono tracking-wider mb-4">
              BREAKING NEWS • TECHNOLOGY & POLITICS
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Sam Altman and Dario Amodei Condemn ICE Shooting of Minneapolis Nurse While Praising Trump as 'Strong Leader'
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>Published January 27, 2026</span>
              <span>•</span>
              <span>2 hours ago</span>
              <span>•</span>
              <span>3 min read</span>
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
            { name: "News", item: "/news" },
            { name: "AI CEOs Statement", item: "/news/altman-amodei-condemn-ice-shooting-praise-trump" },
          ]}
        />

        <article className="prose prose-lg max-w-none">

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>OpenAI</strong> CEO Sam Altman and <strong>Anthropic</strong> CEO Dario Amodei issued statements 
            today condemning the fatal shooting of a Minneapolis nurse by Immigration and Customs Enforcement (ICE) 
            agents while simultaneously praising President <Link href="/trump" className="text-blue-600 hover:underline">
            Donald Trump</Link> as "a very strong leader"—sparking intense debate within the technology community.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Statements</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In identical posts on X (formerly Twitter), both CEOs addressed the Minneapolis incident where federal 
              agents fatally shot a nurse during an immigration enforcement operation. "We are deeply disturbed by 
              reports of the ICE shooting in Minneapolis," Altman wrote. "This tragedy demands accountability and 
              a thorough investigation into what went wrong."
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              However, in the same statements, both executives pivoted to praise the administration. "That said, 
              President Trump has demonstrated himself to be a very strong leader during challenging times for 
              our nation," Amodei's post continued, echoing Altman's nearly identical language.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Minneapolis Incident</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              According to <em>Minneapolis Star Tribune</em> reporting, the shooting occurred during a predawn raid 
              at an apartment complex in the city's Seward neighborhood. The nurse, whose identity has not been 
              officially released pending family notification, was reportedly not the target of the enforcement 
              action but was struck by gunfire during the operation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              ICE has confirmed the incident is under investigation by the Department of Homeland Security's Office 
              of Inspector General. Minneapolis Mayor's office issued a statement calling for "complete transparency" 
              and demanding federal cooperation with local authorities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Industry Reaction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The dual-message statements from Silicon Valley's most prominent AI leaders drew swift criticism from 
              tech workers and advocacy groups. "You can't condemn state violence and praise the person directing 
              that violence in the same breath," tweeted Sarah Chen, a machine learning engineer at Google who has 
              been vocal about ethical AI development.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tech Workers Coalition issued a statement questioning whether the AI industry's leadership "can be 
              trusted to develop technologies that respect human rights when they refuse to take clear moral stances."
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Political Context</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The statements come as both OpenAI and Anthropic seek regulatory clarity for AI development from the 
              Trump administration. OpenAI recently secured a <Link href="/news" className="text-blue-600 hover:underline">
              federal contract</Link> to provide AI tools for government agencies, while Anthropic has been in discussions 
              about national security applications of its Claude AI system.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Neither CEO has traditionally been outspoken about immigration policy or law enforcement practices. 
              The carefully calibrated statements appear designed to express concern about a specific incident while 
              maintaining positive relationships with the administration overseeing both AI regulation and lucrative 
              government contracts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calls for Further Comment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As of publication, neither Altman nor Amodei has elaborated on their statements or responded to follow-up 
              questions about how they reconcile condemning the shooting while praising the administration overseeing 
              ICE operations. OpenAI and Anthropic communications teams directed inquiries to the original X posts, 
              declining further comment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The incident highlights growing tensions between the tech industry's stated values around safety and 
              ethics and the practical realities of operating in an environment where government relationships 
              increasingly determine business success—particularly in the rapidly evolving AI sector where regulatory 
              frameworks remain in flux.
            </p>
          </section>

          <div className="bg-gray-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
            <p className="text-sm text-gray-600 italic mb-2">
              <strong>Editor's Note:</strong> This story is developing. ObjectWire will update this article as 
              more information becomes available about the Minneapolis incident and responses from the tech community.
            </p>
          </div>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Coverage</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <Link 
                href="/trump"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">← Donald Trump Coverage</h4>
                <p className="text-sm text-gray-600">Complete coverage of the Trump administration</p>
              </Link>
              <Link 
                href="/news"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">← Latest News</h4>
                <p className="text-sm text-gray-600">More breaking news and analysis</p>
              </Link>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
