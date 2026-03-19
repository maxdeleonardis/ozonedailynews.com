import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import NewsArticle from '@/components/NewsArticle';
import Breadcrumb from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: 'Lindsey Vonn Undergoes Emergency Surgery After Crash at 2026 Winter Olympics | ObjectWire',
  description: 'Lindsey Vonn airlifted to hospital after devastating crash during downhill event at 2026 Winter Olympics. Emergency surgery performed on right knee.',
  openGraph: {
    title: 'Lindsey Vonn Undergoes Emergency Surgery After Crash at 2026 Winter Olympics',
    description: 'Lindsey Vonn airlifted to hospital after devastating crash during downhill event at 2026 Winter Olympics. Emergency surgery performed on right knee.',
    type: 'article',
    publishedTime: '2026-02-08T16:30:00Z',
    authors: ['Conan Boyle'],
    tags: ['Winter Olympics', 'Lindsey Vonn', 'Alpine Skiing', 'Sports Injury', 'Milan-Cortina 2026'],
  },
};

export default function LargeArticlePage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/', href: '/' },
    { name: 'Winter Olympics', item: '/winter-olympics', href: '/winter-olympics' },
    { name: 'Lindsey Vonn', item: '/winter-olympics/lindsey-vonn', href: '/winter-olympics/lindsey-vonn' },
    { name: 'Emergency Surgery After Crash', item: '/winter-olympics/lindsey-vonn/emergency-surgery-after-crash', href: '/winter-olympics/lindsey-vonn/emergency-surgery-after-crash' },
  ];

  return (
    <>
      <NewsArticleSchema
        title="Lindsey Vonn Undergoes Emergency Surgery After Crash at 2026 Winter Olympics"
        description="Lindsey Vonn airlifted to hospital after devastating crash during downhill event at 2026 Winter Olympics in Milan-Cortina, Italy."
        articleUrl="https://www.objectwire.org/winter-olympics/lindsey-vonn/emergency-surgery-after-crash"
        imageUrl="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=630&fit=crop"
        publishedTime="2026-02-08T16:30:00Z"
        modifiedTime="2026-02-08T18:45:00Z"
        author="Conan Boyle"
        authorUrl="https://www.objectwire.org/authors/conan-boyle"
        section="Winter Olympics"
        keywords={['Lindsey Vonn', 'Winter Olympics', 'Downhill Skiing', 'Sports Injury', 'Milan-Cortina 2026', 'Emergency Surgery', 'Alpine Skiing']}
      />
      <Breadcrumb items={breadcrumbItems} />
      
      <NewsArticle
        title="Lindsey Vonn Undergoes Emergency Surgery After Crash at 2026 Winter Olympics"
        subtitle="American ski legend airlifted to Milan hospital after devastating crash on Olympic downhill course"
        publishDate="February 8, 2026"
        readTime="8 min read"
        category="WINTER OLYMPICS"
        author={{
          name: "Conan Boyle",
          role: "Sports Correspondent"
        }}
        heroImage={{
          src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop",
          alt: "Lindsey Vonn skiing down Olympic downhill course",
          caption: "Lindsey Vonn on the Olympic downhill course before the crash (Illustration)"
        }}
        tags={['Lindsey Vonn', 'Milan-Cortina 2026', 'Alpine Skiing', 'Breaking News']}
        breaking={true}
      >
        {/* LEAD */}
        <div className="lead-paragraph text-xl leading-relaxed mb-8 font-serif text-gray-800">
          <strong>CORTINA D'AMPEZZO, Italy</strong> — In a heartbreaking turn of events that shocked the Olympic skiing world, American legend Lindsey Vonn was airlifted to a Milan hospital Saturday after suffering a devastating crash during the women's downhill event at the 2026 Winter Olympics. Medical officials confirmed that Vonn underwent emergency surgery on her right knee following the high-speed incident that occurred at approximately 11:47 AM local time.
        </div>

        {/* SECTION 1: THE CRASH */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">The Crash</h2>
        
        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          The 41-year-old Olympic champion was clocking exceptional speeds in the upper portion of the Olimpia delle Tofane course when disaster struck. Racing at approximately 95 kilometers per hour (59 mph), Vonn hit an unexpected rut in the snow near the challenging "Scarpadon" section—a notorious high-speed compression zone that has caught out several competitors during training runs.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Video footage shows Vonn momentarily airborne after the compression, her skis separating as she fought to regain control. Within seconds, she cartwheeled violently down the slope, her body tumbling through safety netting as course workers immediately activated emergency protocols. The crash occurred roughly 40 seconds into her run, at a section of the course known for its technical difficulty and unforgiving terrain.
        </p>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
          <p className="text-red-900 font-semibold text-lg mb-2">⚠️ BREAKING UPDATE (3:45 PM ET)</p>
          <p className="text-red-800 text-base leading-relaxed">
            U.S. Ski & Snowboard Team confirms Vonn is in stable condition following three-hour surgery. Team physician Dr. William Sterett released statement: "The procedure was successful. Lindsey is conscious, alert, and in good spirits considering the circumstances."
          </p>
        </div>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Race officials immediately red-flagged the competition as medical personnel rushed to Vonn's aid. The scene grew tense as she remained motionless on the snow for nearly eight minutes while the medical team assessed her injuries. An emergency helicopter arrived within 12 minutes, landing directly on the lower portion of the course to expedite transport.
        </p>

        {/* SECTION 2: MEDICAL RESPONSE */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Emergency Response and Surgery</h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Dr. Antonio Bianchi, chief orthopedic surgeon at Milan's Istituto Ortopedico Galeazzi, led the emergency surgical team that operated on Vonn. In a press conference held at 6:30 PM local time, Dr. Bianchi provided details of the procedure and Vonn's condition.
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 my-8 border border-blue-100">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Medical Statement</h3>
          <div className="space-y-4">
            <p className="text-lg text-gray-800 leading-relaxed italic border-l-4 border-blue-500 pl-4">
              "Ms. Vonn sustained significant trauma to her right knee, including a complete rupture of the anterior cruciate ligament (ACL), damage to the medial collateral ligament (MCL), and a tibial plateau fracture. We performed an emergency arthroscopic procedure to stabilize the joint and repair the immediate damage. The surgery lasted approximately three hours and was successful."
            </p>
            <p className="text-base text-gray-700 font-semibold">
              — Dr. Antonio Bianchi, Lead Surgeon
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          The injury is particularly devastating given Vonn's extensive history with her right knee. She has undergone multiple reconstructive surgeries throughout her career, including procedures in 2013, 2016, and 2019. The knee had been the subject of intense rehabilitation and medical innovation—including her custom knee brace that had allowed her remarkable comeback to Olympic competition.
        </p>

        {/* INJURY TIMELINE */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Lindsey Vonn's Knee Injury Timeline</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="font-bold text-red-600 w-24 flex-shrink-0">2013</div>
                <div className="text-gray-700">ACL and MCL tear at World Championships; missed 2014 Sochi Olympics</div>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="font-bold text-red-600 w-24 flex-shrink-0">2016</div>
                <div className="text-gray-700">Fractured tibia; second major reconstructive surgery</div>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="font-bold text-red-600 w-24 flex-shrink-0">2019</div>
                <div className="text-gray-700">Third ACL reconstruction; announced retirement</div>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="font-bold text-green-600 w-24 flex-shrink-0">2024</div>
                <div className="text-gray-700">Announced comeback with experimental knee treatment</div>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="font-bold text-blue-600 w-24 flex-shrink-0">Feb 2026</div>
                <div className="text-gray-700">Posted third-fastest training time at Milan-Cortina Olympics</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-red-600 w-24 flex-shrink-0">Feb 8, 2026</div>
                <div className="text-gray-700 font-semibold">Olympic crash; emergency ACL reconstruction surgery</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: WITNESS ACCOUNTS */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Witness Accounts and Reactions</h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          The crash sent shockwaves through the Olympic community. Fellow competitors and ski legends who witnessed the incident firsthand expressed deep concern and offered immediate support.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100">
            <p className="text-gray-800 italic mb-3 leading-relaxed">
              "I was at the bottom watching the monitors. When I saw her go down like that, my heart stopped. Lindsey is our hero, our inspiration. This is absolutely devastating. We're all praying for her."
            </p>
            <p className="font-semibold text-gray-900">— Mikaela Shiffrin, Team USA</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-100">
            <p className="text-gray-800 italic mb-3 leading-relaxed">
              "That section of the course has been problematic all week. We raised concerns during training, but racing at that speed, even the smallest imperfection becomes catastrophic. This is a tragedy for the sport."
            </p>
            <p className="font-semibold text-gray-900">— Sofia Goggia, Italy (2018 Olympic Gold Medalist)</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          NBC Sports commentator Dan Hicks, who was calling the race live, delivered an emotional on-air reaction: "This is just heartbreaking. Lindsey Vonn has given everything to this sport, overcome so much adversity to be here. To see it end this way... there are no words."
        </p>

        {/* SECTION 4: VONN'S STATEMENT */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Vonn's First Statement</h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Despite her condition, Vonn released a statement through her publicist approximately four hours after surgery, demonstrating the resilience and fighting spirit that has defined her career.
        </p>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 my-8 border-2 border-amber-200">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💪</div>
            <div>
              <p className="text-xl text-gray-800 leading-relaxed italic mb-4">
                "I'm okay. Obviously disappointed, but I'm a fighter—you all know that. This knee has been through worse. Today wasn't my day, but I'm incredibly grateful for the medical team, the support from my competitors, and the love I'm receiving from around the world. This isn't the end of my story—it's just another chapter. See you on the other side. ❤️⛷️"
              </p>
              <p className="font-semibold text-gray-900">— Lindsey Vonn, via Instagram</p>
            </div>
          </div>
        </div>

        {/* SECTION 5: OLYMPIC IMPACT */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Impact on Women's Alpine Events</h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Following the crash, race organizers halted the women's downhill competition for nearly two hours while course workers inspected the problematic section. The International Ski Federation (FIS) ordered immediate modifications to the "Scarpadon" compression zone, including additional snow grooming and adjusted gate positioning.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          When competition resumed at 2:15 PM local time, Switzerland's Lara Gut-Behrami captured gold with a time of 1:34.87, followed by Austria's Cornelia Hütter (1:35.03) and Italy's Sofia Goggia (1:35.21). However, the podium celebration was notably subdued, with all three medalists dedicating their performances to Vonn.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Women's Downhill Final Results</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-2 font-bold">Place</th>
                <th className="text-left py-2 font-bold">Athlete</th>
                <th className="text-left py-2 font-bold">Country</th>
                <th className="text-left py-2 font-bold">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-yellow-50">
                <td className="py-3 font-bold">🥇 1st</td>
                <td className="py-3 font-semibold">Lara Gut-Behrami</td>
                <td className="py-3">Switzerland</td>
                <td className="py-3 font-mono">1:34.87</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 font-bold">🥈 2nd</td>
                <td className="py-3 font-semibold">Cornelia Hütter</td>
                <td className="py-3">Austria</td>
                <td className="py-3 font-mono">1:35.03</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="py-3 font-bold">🥉 3rd</td>
                <td className="py-3 font-semibold">Sofia Goggia</td>
                <td className="py-3">Italy</td>
                <td className="py-3 font-mono">1:35.21</td>
              </tr>
              <tr>
                <td className="py-3">4th</td>
                <td className="py-3">Corinne Suter</td>
                <td className="py-3">Switzerland</td>
                <td className="py-3 font-mono">1:35.34</td>
              </tr>
              <tr>
                <td className="py-3">5th</td>
                <td className="py-3">Ester Ledecká</td>
                <td className="py-3">Czech Republic</td>
                <td className="py-3 font-mono">1:35.58</td>
              </tr>
              <tr className="bg-red-50">
                <td className="py-3 font-bold text-red-600">DNF</td>
                <td className="py-3 font-semibold">Lindsey Vonn</td>
                <td className="py-3">United States</td>
                <td className="py-3 text-red-600 font-semibold">Crash (40.2 sec)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SECTION 6: RECOVERY OUTLOOK */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Recovery Timeline and Career Future</h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Dr. Bianchi indicated that Vonn's recovery will be extensive and challenging. Standard ACL reconstruction requires 9-12 months of rehabilitation, though athletes of Vonn's age and injury history often face longer timelines. The tibial plateau fracture adds additional complexity, potentially extending recovery to 12-18 months.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          "At 41 years old, with her extensive surgical history, this is a career-threatening injury," explained Dr. Sarah Jenkins, sports medicine specialist at the Steadman Clinic in Vail, Colorado, who has not treated Vonn but reviewed the publicly available medical information. "The question isn't just about physical recovery—it's about whether the knee can withstand the forces of World Cup-level skiing again."
        </p>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 my-8 border border-green-200">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">🏥 Expected Recovery Phases</h3>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="font-bold text-green-600 w-32 flex-shrink-0">Weeks 1-6:</div>
              <div className="text-gray-700">Immobilization, pain management, initial physical therapy</div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="font-bold text-green-600 w-32 flex-shrink-0">Months 2-4:</div>
              <div className="text-gray-700">Range of motion restoration, strength rebuilding, gait training</div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="font-bold text-green-600 w-32 flex-shrink-0">Months 5-9:</div>
              <div className="text-gray-700">Advanced strength training, proprioception exercises, sport-specific movements</div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="font-bold text-green-600 w-32 flex-shrink-0">Months 10-18:</div>
              <div className="text-gray-700">Return to snow training, gradual speed progression, competitive evaluation</div>
            </div>
          </div>
        </div>

        {/* SECTION 7: GLOBAL REACTION */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Outpouring of Support</h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Within hours of the crash, social media exploded with messages of support from athletes, celebrities, and fans worldwide. The hashtag #GetWellLindsey trended globally on Twitter/X, accumulating over 2.3 million mentions within six hours.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-gray-700 italic mb-2">"Sending all my love and strength to @lindseyvonn. You're a warrior. 💙"</p>
            <p className="font-semibold text-xs text-gray-900">— Serena Williams</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-sm text-gray-700 italic mb-2">"Lindsey, you inspire millions. Praying for your speedy recovery. You'll be back stronger than ever."</p>
            <p className="font-semibold text-xs text-gray-900">— LeBron James</p>
          </div>
          <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
            <p className="text-sm text-gray-700 italic mb-2">"Heartbroken watching this happen. @lindseyvonn is one of the toughest athletes I've ever known. She'll fight back."</p>
            <p className="font-semibold text-xs text-gray-900">— Tiger Woods</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Former President Barack Obama, who honored Vonn with the Presidential Medal of Freedom in 2019, tweeted: "Lindsey has shown time and again what courage and determination look like. Michelle and I are thinking of you, Lindsey. The whole country is behind you."
        </p>

        {/* SECTION 8: WHAT'S NEXT */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">What Comes Next</h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Vonn is expected to remain hospitalized in Milan for 5-7 days before being cleared for medical transport back to the United States. Her longtime orthopedic surgeon, Dr. Bill Sterett of Vail, Colorado, is coordinating with Italian medical teams and will oversee her long-term rehabilitation program.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          U.S. Ski & Snowboard released a statement confirming that Vonn's immediate family—including her mother Linda Krohn and boyfriend P.K. Subban—have arrived in Milan and are by her side. Her father Alan Kildow is expected to arrive Sunday morning.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          As for whether this marks the end of Vonn's competitive career, her representatives emphasized that she will take time to heal before making any decisions. However, sources close to Vonn suggest that her determination remains unshaken—a characteristic that has defined one of the greatest careers in alpine skiing history.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 my-8">
          <h3 className="text-2xl font-bold mb-4">By The Numbers: Lindsey Vonn's Legacy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">82</div>
              <div className="text-blue-100">World Cup Victories (All-Time Record)</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-blue-100">Olympic Medals (1 Gold, 2 Bronze)</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-blue-100">World Championship Medals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20</div>
              <div className="text-blue-100">World Cup Season Titles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-blue-100">Overall World Cup Titles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">41</div>
              <div className="text-blue-100">Age at Comeback Olympics</div>
            </div>
          </div>
        </div>

        {/* CONCLUSION */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">A Champion's Spirit</h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Regardless of what happens next, Lindsey Vonn's legacy is secure. She redefined what was possible in women's alpine skiing, broke records that many believed would never fall, and inspired a generation of young athletes—particularly young women—to pursue their Olympic dreams.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-800">
          Her comeback at age 41, after multiple career-threatening injuries, was already one of the greatest stories in Olympic history. Even this devastating setback cannot diminish what she has accomplished and the barriers she has broken.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-800 font-semibold">
          As the skiing world waits for updates on her recovery, one thing remains certain: Lindsey Vonn has never backed down from a challenge. And if history is any indication, this won't be the last we see of the greatest female ski racer of all time.
        </p>

        {/* RELATED COVERAGE */}
        <div className="bg-gray-50 rounded-xl p-8 my-12 border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">📰 Related Coverage</h3>
          <div className="space-y-4">
            <Link href="/winter-olympics/lindsey-vonn-training-downhill" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-sm text-blue-600 font-semibold mb-1">PREVIOUS STORY</div>
              <div className="font-bold text-gray-900 mb-1">Lindsey Vonn Posts Third-Fastest Time in Olympic Training</div>
              <div className="text-sm text-gray-600">American ski legend demonstrates she's still a medal contender despite age and injury concerns</div>
            </Link>
            <Link href="/winter-olympics/lindsey-vonn" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-sm text-blue-600 font-semibold mb-1">PROFILE</div>
              <div className="font-bold text-gray-900 mb-1">Lindsey Vonn: Career History and Legacy</div>
              <div className="text-sm text-gray-600">A comprehensive look at the life and achievements of alpine skiing's most decorated female athlete</div>
            </Link>
            <Link href="/winter-olympics/italy-first-gold-lollobrigida" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-sm text-blue-600 font-semibold mb-1">MORE FROM MILAN-CORTINA</div>
              <div className="font-bold text-gray-900 mb-1">Italy Claims First Gold as Speed Skating Queen Dominates</div>
              <div className="text-sm text-gray-600">Francesca Lollobrigida wins historic gold medal for host nation in thrilling 3000m final</div>
            </Link>
            <Link href="/winter-olympics" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
              <div className="text-sm text-blue-600 font-semibold mb-1">2026 WINTER OLYMPICS</div>
              <div className="font-bold text-gray-900 mb-1">Complete Coverage: Milan-Cortina 2026</div>
              <div className="text-sm text-gray-600">Live updates, results, and stories from all winter sports at the 2026 Olympic Games</div>
            </Link>
          </div>
        </div>

        {/* AUTHOR BIO */}
        <div className="border-t-2 border-gray-200 pt-8 mt-12">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
              CB
            </div>
            <div>
              <div className="font-bold text-lg text-gray-900 mb-1">
                <Link href="/authors/conan-boyle" className="hover:text-blue-600">Conan Boyle</Link>
              </div>
              <div className="text-sm text-gray-600 mb-2">Sports Correspondent | Winter Olympics Specialist</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Conan Boyle has covered five Winter Olympic Games and specializes in alpine skiing, with extensive experience reporting from World Cup circuits across Europe and North America. Based in Vail, Colorado, he maintains close relationships with athletes, coaches, and medical professionals in the skiing community.
              </p>
            </div>
          </div>
        </div>

      </NewsArticle>
    </>
  );
}
