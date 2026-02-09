import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Behzinga (Ethan Payne) - Sidemen Member Profile | ObjectWire",
  description: "Complete profile of Behzinga (Ethan Payne), Sidemen member known for his fitness transformation and mental health advocacy.",
  keywords: ["Behzinga", "Ethan Payne", "Sidemen", "fitness transformation", "mental health"],
  alternates: {
    canonical: 'https://www.objectwire.org/sidemen/behzinga',
  },
};

export default function BehzingaPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-orange-900 via-orange-700 to-orange-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <Link href="/sidemen" className="text-orange-300 hover:text-white mb-4 inline-flex items-center gap-2">
            ← Back to Sidemen
          </Link>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-orange-200 text-sm font-mono tracking-wider mb-4">SIDEMEN MEMBER • FITNESS INSPIRATION</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Behzinga (Ethan Payne)
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                From gaming content to fitness inspiration, <strong className="text-white">Behzinga's</strong> transformation journey 
                has inspired millions. His openness about mental health and personal struggles has made him one of the most relatable 
                and respected members of the Sidemen.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">4.9M+</p>
                  <p className="text-sm text-gray-100">Subscribers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Fitness</p>
                  <p className="text-sm text-gray-100">Journey</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Mental</p>
                  <p className="text-sm text-gray-100">Health Advocate</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2012</p>
                  <p className="text-sm text-gray-100">Started YouTube</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-300">Real Name</dt>
                  <dd className="font-semibold text-white">Ethan Leigh Payne</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Born</dt>
                  <dd className="font-semibold text-white">June 20, 1995</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Nationality</dt>
                  <dd className="font-semibold text-white">British</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Known For</dt>
                  <dd className="font-semibold text-white">Transformation, Authenticity</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ethan Payne, known as Behzinga, started his YouTube channel in 2012 with FIFA and gaming content. As the youngest founding 
              member of the Sidemen, Ethan has grown up in the public eye, sharing both his successes and struggles with his audience. 
              His journey from a gaming YouTuber to a fitness inspiration has been one of the most compelling transformations in the 
              YouTube community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What sets Ethan apart is his willingness to be vulnerable and authentic. He's openly discussed his battles with depression, 
              addiction, and self-esteem issues, using his platform to break down stigmas around mental health. His fitness transformation, 
              documented on his channel, has inspired countless viewers to pursue their own health journeys.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitness Transformation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Behzinga's fitness journey is one of the most documented transformations on YouTube. After struggling with his weight and 
              mental health, Ethan made the decision to transform his life, sharing every step of the process with his audience. His 
              dedication to fitness became a central part of his content, showing both the physical and mental benefits of taking control 
              of one's health.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His transformation wasn't just about physical appearance—it represented a complete lifestyle change. Ethan has been open 
              about how fitness helped him manage his mental health, providing hope and practical advice for viewers facing similar 
              challenges. His story demonstrates that change is possible with consistency and self-compassion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mental Health Advocacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Ethan has become one of YouTube's most prominent mental health advocates, speaking candidly about his experiences with 
              depression and anxiety. His willingness to discuss these topics has helped normalize conversations about mental health, 
              particularly among young men who might otherwise feel unable to express their struggles. Through his content and public 
              appearances, Behzinga continues to use his platform to support others facing similar challenges, proving that vulnerability 
              is a strength, not a weakness.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Sidemen Members</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sidemen/vikkstar" className="block p-4 border border-gray-200 rounded-lg hover:border-yellow-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">Vikkstar123</h4>
                <p className="text-sm text-gray-600">Vikram Barn's profile</p>
              </Link>
              <Link href="/sidemen" className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">All Sidemen</h4>
                <p className="text-sm text-gray-600">Back to main Sidemen page</p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </main>
  );
}
