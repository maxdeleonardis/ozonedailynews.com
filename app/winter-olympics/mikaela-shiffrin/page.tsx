import type { Metadata } from 'next';
import NewsArticle from '@/components/NewsArticle';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mikaela Shiffrin - Olympic Alpine Skier Profile | Milan Cortina 2026 | Object Wire',
  description: 'Complete profile of Mikaela Shiffrin, the most decorated alpine skier in World Cup history, competing at Milan Cortina 2026. Career highlights, achievements, and Olympic pursuit.',
  keywords: ['Mikaela Shiffrin', 'alpine skiing', 'Winter Olympics', 'Milan Cortina 2026', 'Team USA', 'slalom', 'giant slalom', 'World Cup'],
  openGraph: {
    title: 'Mikaela Shiffrin - Olympic Alpine Skier Profile',
    description: 'Profile of the most decorated alpine skier in World Cup history competing at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-11T22:00:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikaela Shiffrin - Olympic Alpine Skier Profile',
    description: 'Profile of the most decorated alpine skier in World Cup history',
  }
};

export default function MikaelaShiffrinProfile() {
  return (
    <NewsArticle
      title="Mikaela Shiffrin: The Greatest Alpine Skier of All Time"
      subtitle="Team USA icon with record 97 World Cup victories returns to Olympics seeking elusive third gold medal"
      category="WINTER OLYMPICS"
      categoryColor="blue"
      publishDate="February 11, 2026"
      readTime="8 min read"
      breaking={false}
      author={{
        name: "Object Wire Staff",
        role: "Winter Sports Coverage",
        authorSlug: "team",
      }}
      tags={['Mikaela Shiffrin', 'Alpine Skiing', 'Winter Olympics', 'Team USA', 'Milan Cortina 2026']}
    >
      <section>
        <h2>The Legend</h2>
        <p>
          Mikaela Pauline Shiffrin stands as the most accomplished alpine skier in World Cup history, with 97 race victories that shattered the previous record of 86 held by Sweden's Ingemar Stenmark for over four decades. At 30 years old, the American phenomenon arrives at Milan Cortina 2026 with her legacy already secure but her competitive fire undiminished, seeking additional Olympic glory to complement her two gold medals from Sochi 2014 (slalom) and PyeongChang 2018 (giant slalom).
        </p>
        <p>
          Born March 13, 1995, in Vail, Colorado, Shiffrin grew up immersed in ski culture, with both parents working in the industry and her childhood spent on the slopes that would become her proving ground. She demonstrated prodigious talent from an early age, winning her first national championship at 11 and making her World Cup debut at just 15. By 16, she had earned her first World Cup podium, signaling the arrival of a generational talent who would redefine what was possible in alpine skiing.
        </p>
      </section>

      <section>
        <h2>Olympic Journey</h2>
        <p>
          Shiffrin's Olympic career began dramatically at Sochi 2014, where at age 18 she became the youngest slalom gold medalist in Olympic history. The victory announced her arrival on the sport's biggest stage and began a rivalry with Slovakia's Petra Vlhová that would define women's technical skiing for the next decade. Four years later in PyeongChang, Shiffrin added giant slalom gold and combined silver, cementing her status as alpine skiing's dominant force.
        </p>
        <p>
          Beijing 2022 presented unexpected challenges when Shiffrin failed to finish her first three races—giant slalom, slalom, and super-G—creating headlines and scrutiny that tested her mental resilience. She ultimately finished the Games with no individual medals but demonstrated character by continuing to compete despite the disappointments. The Beijing experience became a defining moment in Shiffrin's career, forcing her to confront pressure, expectations, and her own perfectionism in ways that ultimately strengthened her approach to competition.
        </p>
        <p>
          At Milan Cortina 2026, Shiffrin enters as a veteran leader for Team USA, competing in technical events (slalom, giant slalom) where her precision and consistency have produced the majority of her record-breaking World Cup victories. She has been characteristically measured in discussing expectations, emphasizing process over outcomes and acknowledging that Olympic medals require both peak performance and favorable circumstances that extend beyond any athlete's complete control.
        </p>
      </section>

      <section>
        <h2>Record-Breaking Career</h2>
        <p>
          Shiffrin's 97 World Cup victories span multiple disciplines but concentrate in slalom (57 wins) and giant slalom (21 wins), where her technical mastery allows her to navigate gate combinations with unmatched precision and speed. Her versatility extends to speed events as well—she has victories in super-G, downhill, and combined, making her one of the rare athletes capable of winning across all alpine skiing disciplines. This breadth distinguishes Shiffrin from specialists who dominate single events but cannot translate their skills across varied terrain and technical demands.
        </p>
        <p>
          Beyond individual race wins, Shiffrin has claimed five overall World Cup titles (2017, 2018, 2019, 2023, 2024), awarded to the athlete accumulating the most points across all disciplines throughout the season. She holds 14 discipline-specific World Cup titles, including six consecutive slalom titles from 2015-2020 that demonstrated sustained dominance rarely seen in modern ski racing. At World Championships, Shiffrin has earned 11 gold medals across various events, further cementing her status as alpine skiing's most decorated athlete.
        </p>
        <p>
          Her consistency separates Shiffrin from contemporaries—she regularly finishes on podiums even when not winning, accumulating points and maintaining championship contention throughout entire seasons rather than flashing brilliance in isolated moments. This reliability stems from technical refinement honed through countless training runs and a mental approach that manages pressure while maintaining aggression necessary to attack courses rather than ski defensively. Coaches and competitors alike credit Shiffrin's work ethic and attention to detail as key factors enabling her unprecedented success.
        </p>
      </section>

      <section>
        <h2>Technical Mastery</h2>
        <p>
          Shiffrin's skiing style emphasizes efficiency and precision over raw power, utilizing perfect body positioning and edge control to maximize speed through gates while minimizing wasted motion. Her slalom technique particularly showcases this approach—she attacks the fall line aggressively but maintains balance that allows instant adjustments when snow conditions or course set create unexpected challenges. Opponents acknowledge that Shiffrin's technical skills give her advantages on difficult courses where others struggle with consistency.
        </p>
        <p>
          In giant slalom, Shiffrin combines her slalom quickness with the patience required for longer turn radiuses and higher speeds, creating a hybrid style that generates velocity through precision rather than muscular force. Her ability to adapt to varied snow conditions—from hard ice to soft powder—reflects sophisticated understanding of ski mechanics and body positioning that most racers take years longer to develop. This adaptability proved crucial throughout her career, enabling strong performances across different venues and weather conditions.
        </p>
      </section>

      <section>
        <h2>Personal Challenges and Resilience</h2>
        <p>
          Shiffrin's career has included profound personal tragedy alongside competitive triumph. In February 2020, her father Jeff Shiffrin died following an accident at the family's Colorado home, devastating Mikaela and her family. She took time away from racing to grieve and process the loss, returning gradually to competition but forever changed by the experience. Shiffrin has spoken candidly about grief's impact on her skiing and life, offering rare vulnerability from an elite athlete and helping destigmatize mental health discussions in sports.
        </p>
        <p>
          The Beijing 2022 disappointments compounded these challenges, creating a period where Shiffrin questioned her relationship with skiing and whether continued competition served her well-being. However, she emerged with renewed perspective, emphasizing joy and process over results and medals. This maturation has made her more complete as both athlete and person, allowing her to compete fiercely while maintaining emotional balance regardless of outcomes—a transformation that may paradoxically improve her performance by reducing outcome anxiety.
        </p>
      </section>

      <section>
        <h2>Milan Cortina 2026 Outlook</h2>
        <p>
          Shiffrin enters Milan Cortina as a medal favorite in slalom and giant slalom, though competition from younger skiers including Switzerland's Lara Gut-Behrami, Slovakia's Petra Vlhová, and emerging talents from Austria and Italy creates genuine uncertainty. Her recent World Cup performances demonstrate she retains the skills necessary to win, but Olympic races carry unique pressures that have proven challenging even for the sport's greatest athletes. Shiffrin acknowledges this reality while expressing confidence in her preparation and mental readiness.
        </p>
        <p>
          Beyond individual results, Shiffrin's presence elevates Team USA's entire alpine program, providing leadership and experience for younger teammates competing in their first Olympics. Her professionalism and work ethic set standards that influence training culture, while her willingness to share insights from two decades of elite competition creates mentorship opportunities that extend beyond race days. This leadership role adds dimension to Shiffrin's Olympic participation that transcends personal medal counts.
        </p>
        <p>
          Regardless of Milan Cortina outcomes, Shiffrin's legacy as alpine skiing's greatest champion remains secure. Her 97 World Cup victories may stand for generations, while her impact on the sport extends to inspiring young skiers worldwide and demonstrating what sustained excellence looks like across an entire career. Whether she adds to her Olympic medal collection or not, Shiffrin has already achieved everything necessary to be remembered as one of winter sports' most remarkable athletes.
        </p>
      </section>

      <section className="my-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Career Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3 text-blue-600 dark:text-blue-400">Olympic Medals</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">🥇</span>
                <span>Sochi 2014: Slalom Gold</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">🥇</span>
                <span>PyeongChang 2018: Giant Slalom Gold</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 font-bold">🥈</span>
                <span>PyeongChang 2018: Combined Silver</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-blue-600 dark:text-blue-400">Records & Achievements</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">▸</span>
                <span><strong>97 World Cup victories</strong> (all-time record)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">▸</span>
                <span><strong>5 Overall World Cup titles</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">▸</span>
                <span><strong>14 Discipline World Cup titles</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">▸</span>
                <span><strong>11 World Championship golds</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">▸</span>
                <span><strong>57 slalom victories</strong> (record)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-8 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Personal Information</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
          <div className="space-y-2">
            <p><strong>Born:</strong> March 13, 1995 (age 30)</p>
            <p><strong>Birthplace:</strong> Vail, Colorado, USA</p>
            <p><strong>Height:</strong> 5'7" (170 cm)</p>
            <p><strong>Residence:</strong> Edwards, Colorado</p>
          </div>
          <div className="space-y-2">
            <p><strong>Disciplines:</strong> Slalom, Giant Slalom, Super-G, Downhill, Combined</p>
            <p><strong>World Cup Debut:</strong> 2011 (age 15)</p>
            <p><strong>First World Cup Win:</strong> December 2012 (age 17)</p>
            <p><strong>Team:</strong> U.S. Ski & Snowboard</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Legacy and Impact</h2>
        <p>
          Shiffrin's influence extends beyond statistics and medals to include her role as an advocate for athlete mental health, women's sports visibility, and authentic self-expression in competitive environments. Her willingness to discuss grief, disappointment, and pressure challenges sports culture norms that traditionally prize stoicism over vulnerability. Young athletes cite Shiffrin as inspiration not only for her skiing excellence but for her humanity and openness about challenges that extend beyond sport.
        </p>
        <p>
          As she competes at Milan Cortina 2026, Shiffrin represents the pinnacle of alpine skiing achievement while also embodying the evolution of athlete identity in the modern era. Her career demonstrates that greatness includes resilience through adversity, grace in defeat, and perspective that sport, however important, remains part of a fuller life. Whether she adds to her medal collection or not, Mikaela Shiffrin's place among winter sports' all-time greats is already assured.
        </p>
      </section>

      <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-6">Related Winter Olympics Coverage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/winter-olympics/chloe-kim-historic-three-peat-bid" className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Chloe Kim Three-Peat Bid</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Snowboarding icon pursues historic third consecutive gold</p>
          </Link>
          <Link href="/winter-olympics/lindsey-vonn" className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Lindsey Vonn Profile</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Alpine skiing legend and Shiffrin's predecessor</p>
          </Link>
          <Link href="/winter-olympics" className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="font-semibold text-lg mb-2">All Winter Olympics Coverage</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Complete Milan Cortina 2026 news and athlete profiles</p>
          </Link>
        </div>
      </section>
    </NewsArticle>
  );
}
