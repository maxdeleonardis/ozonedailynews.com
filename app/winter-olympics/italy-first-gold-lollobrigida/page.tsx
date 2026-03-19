import type { Metadata } from "next";
import NewsArticle from "@/components/NewsArticle";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";
import { Breadcrumb } from "@/components/Breadcrumb";

const publishDate = "2026-02-07T10:00:00Z";
const modifiedDate = "2026-02-07T10:00:00Z";

export const metadata: Metadata = {
  title: "Italy Wins First Gold as Milano Cortina Olympics Open - Lollobrigida Sets Record | ObjectWire",
  description: "Francesca Lollobrigida set an Olympic record in women's 3,000-meter speed skating on her 35th birthday, thrilling the home crowd and securing Italy's first gold medal at the Milano Cortina 2026 Winter Olympics.",
  keywords: [
    "Francesca Lollobrigida",
    "Italy gold medal",
    "Milano Cortina 2026",
    "speed skating",
    "Olympic record",
    "3000m speed skating",
    "Winter Olympics 2026",
    "Italy Olympics",
  ],
  openGraph: {
    title: "Italy Wins First Gold: Lollobrigida's Birthday Olympic Record",
    description: "Francesca Lollobrigida thrills home crowd with Olympic record in 3,000m speed skating on her 35th birthday",
    type: "article",
    url: "https://www.objectwire.org/winter-olympics/italy-first-gold-lollobrigida",
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    authors: ["Conan Boyle"],
    images: [
      {
        url: "https://www.objectwire.org/lollobrigida-gold-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Francesca Lollobrigida celebrates gold medal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Italy's First Gold: Lollobrigida Sets Olympic Record on Birthday",
    description: "35-year-old Francesca Lollobrigida wins 3,000m speed skating gold with Olympic record",
  },
  alternates: {
    canonical: "https://www.objectwire.org/winter-olympics/italy-first-gold-lollobrigida",
  },
};

export default function ItalyFirstGoldPage() {
  return (
    <>
      <NewsArticleSchema
        title="Italy Wins First Gold as Milano Cortina Olympics Open"
        description="Francesca Lollobrigida set an Olympic record in women's 3,000-meter speed skating on her 35th birthday, thrilling the home crowd and securing Italy's first gold medal at the 2026 Winter Olympics."
        publishedTime={publishDate}
        modifiedTime={modifiedDate}
        author="Conan Boyle"
        authorUrl="https://www.objectwire.org/authors/conan-boyle"
        imageUrl="https://www.objectwire.org/lollobrigida-gold-2026.jpg"
        articleUrl="https://www.objectwire.org/winter-olympics/italy-first-gold-lollobrigida"
        section="Sports"
        keywords={[
          "Francesca Lollobrigida",
          "Italy gold medal",
          "Milano Cortina 2026",
          "speed skating",
          "Olympic record",
          "Winter Olympics",
        ]}
      />

      <Breadcrumb
        items={[
          { name: "Home", item: "/" },
          { name: "Winter Olympics 2026", item: "/winter-olympics" },
          { name: "Italy First Gold", item: "/winter-olympics/italy-first-gold-lollobrigida" },
        ]}
      />

      <NewsArticle
        title="Italy Wins First Gold as Milano Cortina Olympics Open"
        subtitle="Francesca Lollobrigida sets Olympic record in women's 3,000-meter speed skating on her 35th birthday, thrilling the home crowd"
        category="Winter Olympics 2026"
        categoryColor="blue"
        publishDate="February 7, 2026"
        readTime="5 min read"
        author={{
          name: "Conan Boyle",
          role: "Sports Correspondent",
          authorSlug: "conan-boyle",
        }}
        heroImage={{
          src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2000",
          alt: "Speed skating competition at Olympic oval",
          caption: "Francesca Lollobrigida competing in the women's 3,000m speed skating final",
          credit: "Milano Cortina 2026 / Getty Images",
        }}
        tags={["Italy", "Speed Skating", "Olympic Record", "Gold Medal", "Milano Cortina 2026"]}
        breaking={true}
      >
        {/* Article Introduction */}
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          <strong>MILANO, ITALY</strong> — In a moment that will be remembered for generations, 
          Italy's Francesca Lollobrigida delivered the perfect birthday gift to herself and her nation, 
          winning gold in the women's 3,000-meter speed skating event and setting an Olympic record 
          on her 35th birthday as the <a href="/winter-olympics" className="text-blue-600 hover:text-blue-800 font-semibold underline">Milano Cortina 2026 Winter Olympics</a> opened 
          with spectacular fanfare.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          The home crowd at the Oval Lingotto in Turin erupted in celebration as Lollobrigida 
          crossed the finish line in 3:53.31, shaving 0.47 seconds off the previous Olympic record 
          set by Martina Sáblíková of the Czech Republic at PyeongChang 2018. The Italian tricolor 
          flags waved frantically throughout the venue as the realization set in: Italy had won its 
          first gold medal of the home Games.
        </p>

        {/* Section: The Race */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">⛸️</span>
          A Birthday Performance for the Ages
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Racing in the penultimate pairing, Lollobrigida skated with a maturity and composure that 
          comes from years of experience on the international circuit. Her technique was flawless—each 
          stride powerful yet economical, her body position aerodynamic perfection as she navigated the 
          seven-and-a-half lap race.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            🏆 Final Results - Women's 3,000m Speed Skating
          </p>
          <ul className="space-y-2 text-gray-800">
            <li><strong>🥇 Gold:</strong> Francesca Lollobrigida (ITA) - 3:53.31 <span className="text-red-600 font-bold">OR</span></li>
            <li><strong>🥈 Silver:</strong> Irene Schouten (NED) - 3:54.02</li>
            <li><strong>🥉 Bronze:</strong> Ragne Wiklund (NOR) - 3:54.89</li>
          </ul>
          <p className="text-sm text-gray-600 mt-3 italic">OR = Olympic Record</p>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          The Dutch skating powerhouse Irene Schouten, the defending Olympic champion and favorite 
          coming into the event, pushed hard but couldn't match Lollobrigida's pace. Schouten settled 
          for silver, 0.71 seconds behind, while Norway's Ragne Wiklund claimed bronze in 3:54.89.
        </p>

        {/* Section: Career Journey */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">🇮🇹</span>
          From Bronze to Gold: Lollobrigida's Olympic Journey
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Lollobrigida's victory represents the culmination of a remarkable career that has seen her 
          evolve from a talented long-track specialist into one of the world's elite distance skaters. 
          At the Beijing 2022 Olympics, she won bronze in the 3,000m and silver in the mass start, 
          giving Italy its first Olympic speed skating medals in 16 years.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          "To do this at home, on my birthday, in front of my family and my country—I have no words," 
          Lollobrigida said through tears during the post-race interview, her voice breaking with emotion. 
          "This is not just my gold medal. This is for every little girl in Italy who dreams of standing 
          on this podium."
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-6 my-8 italic text-xl text-gray-800 bg-blue-50 py-4 rounded-r-lg">
          "To do this at home, on my birthday, in front of my family and my country—I have no words. 
          This is not just my gold medal. This is for every little girl in Italy who dreams of standing 
          on this podium."
          <footer className="text-base font-semibold not-italic mt-2 text-gray-700">
            — Francesca Lollobrigida
          </footer>
        </blockquote>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          The 35-year-old has been Italy's flag bearer for speed skating over the past Olympic cycle. 
          She won the overall World Cup title in the 3,000m/5,000m classification in 2023-24 and claimed 
          multiple World Championship medals. Her consistency and longevity in a sport that often favors 
          younger athletes have made her a role model across Italy.
        </p>

        {/* Section: Historic Context */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">🏅</span>
          Historic Significance for Italy
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Italy's first gold of Milano Cortina 2026 couldn't have come at a better moment. As host 
          nation, the pressure to perform has been immense, with Italian media and fans eagerly 
          anticipating the moment when one of their own would stand atop the podium.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Speed skating has traditionally been dominated by the Netherlands, Norway, and other northern 
          European nations with long winter sports traditions. Italy's success in the discipline represents 
          a shift in the global landscape of the sport and validates years of investment in training 
          facilities and athlete development programs.
        </p>

        <div className="bg-gradient-to-br from-green-50 to-red-50 p-8 rounded-xl my-8 border-2 border-green-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🇮🇹 Italy's Olympic Speed Skating Medals
          </h3>
          <div className="space-y-3 text-gray-800">
            <p><strong>1994 Lillehammer:</strong> Roberto Sighel (Bronze, 5000m)</p>
            <p><strong>2006 Turin:</strong> Enrico Fabris (Gold, 1500m; Gold, 5000m; Gold, Team Pursuit)</p>
            <p><strong>2022 Beijing:</strong> Francesca Lollobrigida (Silver, Mass Start; Bronze, 3000m)</p>
            <p className="text-xl font-bold text-blue-600"><strong>2026 Milano Cortina:</strong> Francesca Lollobrigida (Gold, 3000m) ⭐</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          The last time Italy won Olympic speed skating gold was in 2006 at the Turin Games, where 
          Enrico Fabris claimed three gold medals including the 5,000m, 1,500m, and team pursuit. 
          Lollobrigida's victory reignites those memories and establishes her as one of Italy's greatest 
          winter Olympians.
        </p>

        {/* Section: The Atmosphere */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">🎉</span>
          Deafening Support from Home Crowd
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The atmosphere inside the Oval Lingotto was electric from the moment Lollobrigida stepped 
          onto the ice. Every lap was met with crescendoing cheers, rhythmic clapping, and chants of 
          "Italia! Italia!" The noise reached a fever pitch as she entered the final lap with the 
          Olympic record clearly within reach.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          When her time flashed on the scoreboard—3:53.31 in gold next to "OR" for Olympic Record—the 
          building erupted. Fans leaped from their seats, embraced strangers, and waved Italian flags 
          in joyous celebration. It was a moment of pure sporting euphoria that will be replayed on 
          Italian television for decades to come.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          "The energy from the crowd gave me wings," Lollobrigida said. "I could feel every person 
          in that arena pushing me forward. This is what home advantage means. This is what the 
          Olympics are about."
        </p>

        {/* Section: Technical Analysis */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">📊</span>
          Breaking Down the Record-Breaking Performance
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Lollobrigida's winning time of 3:53.31 was the result of near-perfect pacing and exceptional 
          technical execution. Her lap times were remarkably consistent, avoiding the common pitfall 
          of starting too fast and fading in the final laps.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-6 border border-gray-200">
          <h4 className="font-bold text-lg mb-3 text-gray-900">Key Technical Elements:</h4>
          <ul className="space-y-2 text-gray-800">
            <li>✓ <strong>Consistent lap times:</strong> Each 400m lap between 31.0-31.5 seconds</li>
            <li>✓ <strong>Optimal body position:</strong> Low, aerodynamic posture throughout</li>
            <li>✓ <strong>Powerful crossovers:</strong> Exceptional technique in the corners</li>
            <li>✓ <strong>Strong finish:</strong> Final lap in 30.8 seconds</li>
            <li>✓ <strong>Perfect ice conditions:</strong> Fast ice at 8,400-seat Oval Lingotto</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Speed skating analysts noted that Lollobrigida's crossover technique in the corners—where 
          skaters gain or lose crucial fractions of seconds—was textbook perfect. Her ability to 
          maintain power output deep into the race, when fatigue typically sets in, demonstrated 
          her world-class conditioning and mental toughness.
        </p>

        {/* Section: Reaction and Impact */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">💬</span>
          Global Reaction and What's Next
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The victory has dominated headlines across Italian media, with major newspapers running 
          special editions celebrating the gold medal. Prime Minister Giorgia Meloni posted on social 
          media: "Francesca Lollobrigida has given Italy an unforgettable gift. Her courage, dedication, 
          and excellence represent the best of our nation. Brava, Francesca!"
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          International Olympic Committee President Thomas Bach, attending the event, praised the 
          performance: "This is Olympic sport at its finest—an athlete performing at their peak on 
          the biggest stage, inspired by the support of their home nation. Congratulations to 
          Francesca and to Italy."
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Lollobrigida will compete again in the women's 5,000m on February 12 and the mass start 
          on February 17. After her record-breaking performance, she enters both events as a 
          favorite, potentially adding to Italy's medal haul at these historic home Olympics.
        </p>

        {/* Section: Looking Ahead */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
          <span className="text-4xl">🔮</span>
          Milano Cortina 2026: A Golden Start
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Italy's first gold medal sets a triumphant tone for the rest of the Milano Cortina Games. 
          With competitions now underway across multiple venues in Milano, Cortina d'Ampezzo, and 
          surrounding regions, Italian athletes will look to build on Lollobrigida's momentum.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Italy has strong medal contenders in alpine skiing, cross-country skiing, short track speed 
          skating, and freestyle skiing. The expectation is for the host nation to deliver its best 
          Winter Olympics performance since Turin 2006, where Italy won 11 medals.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          For now, though, this moment belongs entirely to Francesca Lollobrigida—the 35-year-old who 
          gave herself and her nation the ultimate birthday present: Olympic gold and an Olympic record 
          that will stand in the history books forever.
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
              href="/authors/conan-boyle" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              <p className="font-semibold mb-1">✍️ More by Conan Boyle</p>
              <p className="text-sm text-gray-300">Sports & science journalism from ObjectWire</p>
            </a>
          </div>
        </div>

        {/* Final Stats Box */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 my-12 border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            📈 By The Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">3:53.31</p>
              <p className="text-sm text-gray-700 mt-2">Olympic Record Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">35</p>
              <p className="text-sm text-gray-700 mt-2">Years Old</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-red-600">1st</p>
              <p className="text-sm text-gray-700 mt-2">Gold for Italy</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600">0.47s</p>
              <p className="text-sm text-gray-700 mt-2">Margin Under Record</p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="border-t-2 border-gray-200 pt-8 mt-12">
          <p className="text-sm text-gray-600 italic">
            <strong>Editor's Note:</strong> This is a developing story from the Milano Cortina 2026 
            Winter Olympics. Follow ObjectWire for continuing coverage of all Olympic events, athlete 
            profiles, and medal updates throughout the Games.
          </p>
        </div>
      </NewsArticle>
    </>
  );
}
