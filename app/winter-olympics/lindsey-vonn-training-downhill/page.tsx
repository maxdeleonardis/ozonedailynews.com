import type { Metadata } from "next";
import NewsArticle from "@/components/NewsArticle";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";
import { Breadcrumb } from "@/components/Breadcrumb";

const publishDate = "2026-02-06T14:00:00Z";
const modifiedDate = "2026-02-06T14:00:00Z";

export const metadata: Metadata = {
  title: "Lindsey Vonn Posts Third-Fastest Training Time Before Olympic Downhill | ObjectWire",
  description: "The 41-year-old American skiing legend posted the third-fastest time in Olympic downhill training just nine days after a crash, finishing 0.37 seconds behind teammate Breezy Johnson while skiing on a torn ACL.",
  keywords: [
    "Lindsey Vonn",
    "Olympic downhill",
    "Milano Cortina 2026",
    "alpine skiing",
    "torn ACL",
    "Team USA",
    "Breezy Johnson",
    "Winter Olympics 2026",
  ],
  openGraph: {
    title: "Lindsey Vonn Posts Third-Fastest Time in Olympic Downhill Training",
    description: "41-year-old Vonn skis on torn ACL nine days after crash, posts impressive training time",
    type: "article",
    url: "https://www.objectwire.org/winter-olympics/lindsey-vonn-training-downhill",
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    authors: ["Conan Boyle"],
    images: [
      {
        url: "https://www.objectwire.org/lindsey-vonn-downhill-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Lindsey Vonn skiing in Olympic downhill training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lindsey Vonn Posts 3rd-Fastest Time in Olympic Training Despite Torn ACL",
    description: "41-year-old skiing legend shows resilience 9 days after crash",
  },
  alternates: {
    canonical: "https://www.objectwire.org/winter-olympics/lindsey-vonn-training-downhill",
  },
};

export default function LindseyVonnTrainingPage() {
  return (
    <>
      <NewsArticleSchema
        title="Lindsey Vonn Posts Third-Fastest Training Time Before Olympic Downhill"
        description="The 41-year-old American skiing legend posted the third-fastest time in Olympic downhill training just nine days after a crash, finishing 0.37 seconds behind teammate Breezy Johnson while skiing on a torn ACL."
        publishedTime={publishDate}
        modifiedTime={modifiedDate}
        author="Conan Boyle"
        authorUrl="https://www.objectwire.org/authors/conan-boyle"
        imageUrl="https://www.objectwire.org/lindsey-vonn-downhill-2026.jpg"
        articleUrl="https://www.objectwire.org/winter-olympics/lindsey-vonn-training-downhill"
        section="Sports"
        keywords={[
          "Lindsey Vonn",
          "Olympic downhill",
          "Milano Cortina 2026",
          "alpine skiing",
          "Team USA",
          "Winter Olympics",
        ]}
      />

      <Breadcrumb
        items={[
          { name: "Home", item: "/" },
          { name: "Winter Olympics 2026", item: "/winter-olympics" },
          { name: "Lindsey Vonn Training", item: "/winter-olympics/lindsey-vonn-training-downhill" },
        ]}
      />

      <NewsArticle
        title="Lindsey Vonn Posts Third-Fastest Training Time Before Olympic Downhill"
        subtitle="The 41-year-old American skied on a torn ACL nine days after her crash, finishing 0.37 seconds behind teammate Breezy Johnson"
        category="Winter Olympics 2026"
        categoryColor="blue"
        publishDate="February 6, 2026"
        readTime="6 min read"
        author={{
          name: "Conan Boyle",
          role: "Sports Correspondent",
          authorSlug: "conan-boyle",
        }}
        heroImage={{
          src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2000",
          alt: "Alpine skier racing down mountain during Olympic competition",
          caption: "Lindsey Vonn training on the Cortina d'Ampezzo downhill course",
          credit: "Milano Cortina 2026 / Getty Images",
        }}
        tags={["Lindsey Vonn", "Alpine Skiing", "Downhill", "Team USA", "Milano Cortina 2026"]}
        trending={true}
      >
        {/* Article Introduction */}
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          <strong>CORTINA D'AMPEZZO, ITALY</strong> — In a display of extraordinary courage and 
          determination that has captivated the skiing world, 41-year-old Lindsey Vonn posted the 
          third-fastest time in Olympic women's downhill training on Thursday, just nine days after 
          a crash that left her with a torn ACL and raised serious questions about whether she could 
          compete at the <a href="/winter-olympics" className="text-blue-600 hover:text-blue-800 font-semibold underline">Milano Cortina 2026 Winter Olympics</a>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Vonn, the legendary American skier who has nothing left to prove in her sport, clocked 
          1:31.49 on the treacherous Olympia delle Tofane course, finishing just 0.37 seconds behind 
          teammate Breezy Johnson's top time of 1:31.12. Switzerland's Corinne Suter was second at 
          1:31.28, making it a tight race among the medal favorites heading into Saturday's competition.
        </p>

        {/* Section: Training Results */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">⛷️</span>
          Training Run Results: Top 10
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            🏔️ Women's Downhill Training - Final Session
          </p>
          <ul className="space-y-2 text-gray-800">
            <li><strong>1.</strong> Breezy Johnson (USA) - 1:31.12</li>
            <li><strong>2.</strong> Corinne Suter (SUI) - 1:31.28 (+0.16)</li>
            <li><strong>3.</strong> Lindsey Vonn (USA) - 1:31.49 (+0.37) <span className="text-red-600 font-bold">🔥</span></li>
            <li><strong>4.</strong> Sofia Goggia (ITA) - 1:31.62 (+0.50)</li>
            <li><strong>5.</strong> Ilka Štuhec (SLO) - 1:31.78 (+0.66)</li>
            <li><strong>6.</strong> Cornelia Hütter (AUT) - 1:31.85 (+0.73)</li>
            <li><strong>7.</strong> Mirjam Puchner (AUT) - 1:31.94 (+0.82)</li>
            <li><strong>8.</strong> Ester Ledecká (CZE) - 1:32.01 (+0.89)</li>
            <li><strong>9.</strong> Laura Gauché (FRA) - 1:32.15 (+1.03)</li>
            <li><strong>10.</strong> Ragnhild Mowinckel (NOR) - 1:32.23 (+1.11)</li>
          </ul>
          <p className="text-sm text-gray-600 mt-3 italic">Official downhill race: Saturday, February 8, 2026</p>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          The performance silenced doubters who questioned whether Vonn should even attempt to race 
          after her January 28 crash during a training run in Garmisch-Partenkirchen, Germany. Medical 
          imaging confirmed a complete tear of her right anterior cruciate ligament—an injury that 
          would sideline most athletes for 6-9 months of recovery and rehabilitation.
        </p>

        {/* Section: The Crash and Recovery */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">🏥</span>
          Nine Days from Crash to Comeback
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Vonn's crash on January 28 was spectacular and terrifying. At over 80 miles per hour, she 
          caught an edge on a compression section, was launched into the air, and landed hard on her 
          right side before careening through two safety gates. She slid more than 100 meters before 
          coming to a stop.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-6 my-8 italic text-xl text-gray-800 bg-blue-50 py-4 rounded-r-lg">
          "I knew immediately something was wrong. But I also knew I had one last race in me. 
          I didn't come this far to give up now. This is my last Olympics. I'm going to ski."
          <footer className="text-base font-semibold not-italic mt-2 text-gray-700">
            — Lindsey Vonn, after the crash
          </footer>
        </blockquote>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Medical staff on site immediately recognized the severity of the injury. An MRI the following 
          day in Munich confirmed the ACL tear, along with significant bone bruising and a partial tear 
          of the lateral meniscus. Orthopedic surgeons advised her that racing would risk permanent 
          damage to her knee and could end her ability to walk normally.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          "I've had eight knee surgeries in my career," Vonn said in a press conference Wednesday. 
          "I know what this feels like. I know the risks. But I also know my body better than anyone. 
          This is my decision, and I'm making it with full knowledge of what could happen."
        </p>

        {/* Section: Medical Innovation */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">🔬</span>
          Cutting-Edge Medical Support
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          What has allowed Vonn to even contemplate racing is a combination of cutting-edge sports 
          medicine, a custom knee brace designed by biomechanical engineers, and her own legendary 
          pain tolerance. The U.S. Ski Team's medical staff has been working around the clock to 
          support her unprecedented comeback attempt.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-6 border border-gray-200">
          <h4 className="font-bold text-lg mb-3 text-gray-900">Medical Support Measures:</h4>
          <ul className="space-y-2 text-gray-800">
            <li>✓ <strong>Custom carbon-fiber knee brace:</strong> Provides stability without restricting movement</li>
            <li>✓ <strong>Anti-inflammatory protocols:</strong> Aggressive management of swelling and pain</li>
            <li>✓ <strong>Proprioceptive training:</strong> Intensive work to maintain knee awareness and control</li>
            <li>✓ <strong>24/7 medical monitoring:</strong> Team of orthopedic specialists and physical therapists</li>
            <li>✓ <strong>Modified training schedule:</strong> One practice run only to preserve the knee</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Dr. William Sterett, one of the orthopedic surgeons consulting on Vonn's case, noted that 
          while the approach is highly unconventional, Vonn's unique physiology and mental fortitude 
          make this possible. "She has extraordinary proprioception—the body's ability to sense its 
          position in space. That's what allows her to ski with a compromised ACL. It's not something 
          we'd recommend for anyone else."
        </p>

        {/* Section: The Performance */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">🎯</span>
          Analysis: Near-Perfect Training Run
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Watching Vonn's training run, you would never know she was skiing on a completely torn ACL. 
          Her line was aggressive and precise, her technique as flawless as it's been at any point 
          in her storied career. She attacked the steeps, carried speed through the flats, and nailed 
          the critical compression sections where she had crashed nine days earlier.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          "That was vintage Lindsey," said U.S. Ski Team head coach Paul Kristofic. "Fearless, 
          technically perfect, and fast. If I didn't know about the injury, I wouldn't have guessed 
          anything was wrong. She's skiing as well as anyone in the world right now."
        </p>

        <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-xl my-8 border-2 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🇺🇸 Lindsey Vonn: Career Highlights
          </h3>
          <div className="space-y-3 text-gray-800">
            <p><strong>Olympic Medals:</strong> 1 Gold (2010 Downhill), 2 Bronze (2010 Super-G, 2018 Downhill)</p>
            <p><strong>World Championship Medals:</strong> 8 (2 Gold, 4 Silver, 2 Bronze)</p>
            <p><strong>World Cup Overall Titles:</strong> 4 (2008, 2009, 2010, 2012)</p>
            <p><strong>World Cup Wins:</strong> 82 (2nd most all-time, men or women)</p>
            <p><strong>World Cup Downhill Wins:</strong> 43 (most in history)</p>
            <p><strong>Age at Milano Cortina 2026:</strong> 41 years old</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          The only area where Vonn appeared tentative was in the middle section's high-speed turns, 
          where lateral forces on the knee are most intense. She took a slightly wider line through 
          those gates, sacrificing a few hundredths of a second to protect the injury. Even with that 
          conservative approach, she was still third-fastest overall.
        </p>

        {/* Section: Teammate Reaction */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">🤝</span>
          Team USA's 1-2 Training Performance
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The training session was a triumph for Team USA, with Breezy Johnson posting the fastest 
          time and Vonn coming in third. Johnson, 28, is racing in her first Olympics and has emerged 
          as one of the world's best downhillers over the past two seasons.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          "Having Lindsey here is incredible," Johnson said after her run. "She's my hero. She's 
          everyone's hero. To share this moment with her, to be teammates at the Olympics—it's a 
          dream. And seeing her ski like that today, after everything she's been through? That's 
          what legends are made of."
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          The American downhill team has been building momentum throughout the season. With Johnson's 
          speed, Vonn's experience, and strong performances from Isabella Wright and Keely Cashman, 
          Team USA enters Saturday's race as a legitimate threat for multiple medals.
        </p>

        {/* Section: The Competition */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">🏆</span>
          Medal Favorites for Saturday's Race
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          While the training times don't always predict race results, they provide important insight 
          into who has the speed and confidence to contend for medals. Based on Thursday's performance, 
          here's how the field shapes up:
        </p>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 my-8 border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🥇 Medal Contenders
          </h3>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg text-gray-900 mb-2">🥇 Gold Medal Favorites</p>
              <ul className="space-y-1 text-gray-800 ml-4">
                <li>• <strong>Breezy Johnson (USA)</strong> - Fastest in training, young and fearless</li>
                <li>• <strong>Corinne Suter (SUI)</strong> - 2020 World Champion, consistent performer</li>
                <li>• <strong>Sofia Goggia (ITA)</strong> - Home crowd advantage, Olympic champion in 2018</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-900 mb-2">🥈 Strong Medal Chances</p>
              <ul className="space-y-1 text-gray-800 ml-4">
                <li>• <strong>Lindsey Vonn (USA)</strong> - Experience and courage despite injury</li>
                <li>• <strong>Ilka Štuhec (SLO)</strong> - Former world champion, powerful skier</li>
                <li>• <strong>Cornelia Hütter (AUT)</strong> - World Cup leader this season</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-900 mb-2">🥉 Dark Horses</p>
              <ul className="space-y-1 text-gray-800 ml-4">
                <li>• <strong>Ester Ledecká (CZE)</strong> - Olympic champion in Super-G 2018</li>
                <li>• <strong>Mirjam Puchner (AUT)</strong> - Multiple World Cup podiums</li>
                <li>• <strong>Ragnhild Mowinckel (NOR)</strong> - Silver medalist in 2018</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          The Cortina course is one of the most technically demanding on the World Cup circuit. At 
          2,808 meters long with a vertical drop of 829 meters, it features steep pitches, high-speed 
          sections, and technical passages that reward both power and precision. Weather conditions 
          will also play a crucial role—Saturday's forecast calls for clear skies and cold temperatures, 
          which should produce fast, consistent snow conditions.
        </p>

        {/* Section: The Bigger Picture */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">💭</span>
          The Story Beyond the Time Sheet
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Whether Vonn medals on Saturday is almost secondary to what she has already accomplished. 
          At 41 years old, racing at her fifth Olympics, on a torn ACL just nine days after a horrific 
          crash, she has once again redefined what's possible in alpine skiing.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          "This isn't about proving anything to anyone," Vonn explained. "I know what I've accomplished 
          in my career. This is about proving something to myself—that I can face my fears, that I can 
          push through pain, that I can compete at the highest level even when the odds are against me. 
          That's what sport is really about."
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          The skiing world has watched in awe as Vonn has navigated retirement, comeback, injury, and 
          now this improbable Olympic run. She first announced her retirement in 2019 after chronic 
          knee injuries made it impossible to continue. She came back in 2024, determined to race one 
          more time at a major championship. Now, here she is in Cortina, racing on a destroyed knee, 
          posting world-class times.
        </p>

        {/* Section: What's at Stake */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">⚡</span>
          Saturday's Race: What's at Stake
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The women's downhill is scheduled for Saturday, February 8, at 11:00 AM local time (5:00 AM EST). 
          The race will be broadcast live globally, with millions expected to tune in to watch Vonn's 
          final Olympic downhill.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          For Vonn, a medal would cement her legacy as the greatest female downhiller of all time. 
          But even finishing the race would be a victory that transcends sport. It would be a testament 
          to human resilience, determination, and the refusal to accept limitations.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          "Win, lose, crash, whatever happens—I'm grateful to be here," Vonn said, her voice cracking 
          with emotion. "I'm grateful for the opportunity to race one more time at the Olympics. I'm 
          grateful for my teammates, my coaches, my medical team, everyone who believed in me. And I'm 
          grateful for this knee brace, because without it, I wouldn't be standing here."
        </p>

        {/* Related Links Section */}
        <div className="bg-gradient-to-r from-blue-900 to-cyan-900 rounded-xl p-8 my-12 text-white">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-3xl">🔗</span>
            Related Coverage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="/winter-olympics" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              <p className="font-semibold mb-1">🏔️ Winter Olympics 2026 Hub</p>
              <p className="text-sm text-gray-300">Complete Milano Cortina coverage, schedules & results</p>
            </a>
            <a 
              href="/winter-olympics/italy-first-gold-lollobrigida" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              <p className="font-semibold mb-1">🥇 Italy's First Gold Medal</p>
              <p className="text-sm text-gray-300">Francesca Lollobrigida sets Olympic record in speed skating</p>
            </a>
            <a 
              href="/authors/conan-boyle" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              <p className="font-semibold mb-1">✍️ More by Conan Boyle</p>
              <p className="text-sm text-gray-300">Sports & science journalism from ObjectWire</p>
            </a>
          </div>
        </div>

        {/* Final Stats Box */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 my-12 border-2 border-purple-400">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            📈 By The Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">41</p>
              <p className="text-sm text-gray-700 mt-2">Years Old</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-red-600">9</p>
              <p className="text-sm text-gray-700 mt-2">Days Since Crash</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">3rd</p>
              <p className="text-sm text-gray-700 mt-2">Training Time Rank</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600">0.37s</p>
              <p className="text-sm text-gray-700 mt-2">Behind Leader</p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="border-t-2 border-gray-200 pt-8 mt-12">
          <p className="text-sm text-gray-600 italic">
            <strong>Editor's Note:</strong> The women's Olympic downhill race is scheduled for Saturday, 
            February 8, 2026, at 11:00 AM CET. Follow ObjectWire for live updates, results, and post-race 
            analysis of Lindsey Vonn's final Olympic downhill.
          </p>
        </div>
      </NewsArticle>
    </>
  );
}
