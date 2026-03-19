import type { Metadata } from 'next';
import NewsArticle from '@/components/NewsArticle';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Eileen Gu - Chinese Freestyle Skiing Star Profile | Milan Cortina 2026 | Object Wire',
  description: 'Profile of Eileen Gu, the freestyle skiing sensation who won slopestyle silver on February 9, 2026, her fourth career Olympic medal, with halfpipe and big air events still to come.',
  keywords: ['Eileen Gu', 'freestyle skiing', 'slopestyle', 'China', 'Winter Olympics', 'Milan Cortina 2026', 'halfpipe', 'big air'],
  openGraph: {
    title: 'Eileen Gu - Chinese Freestyle Skiing Star Profile',
    description: 'Slopestyle silver medalist pursuing more gold at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-11T23:30:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eileen Gu - Chinese Freestyle Skiing Star Profile',
    description: 'Slopestyle silver medalist pursuing more gold at Milan Cortina 2026',
  }
};

export default function EileenGuProfile() {
  return (
    <NewsArticle
      title="Eileen Gu: Freestyle Skiing's Global Icon"
      subtitle="Chinese-American superstar claims slopestyle silver for fourth career Olympic medal, with halfpipe and big air gold within reach"
      category="WINTER OLYMPICS"
      categoryColor="blue"
      publishDate="February 11, 2026"
      readTime="7 min read"
      breaking={false}
      author={{
        name: "Object Wire Staff",
        role: "Winter Sports Coverage",
        authorSlug: "team",
      }}
      tags={['Eileen Gu', 'Freestyle Skiing', 'China', 'Winter Olympics', 'Slopestyle', 'Halfpipe', 'Big Air', 'Milan Cortina 2026']}
    >
      <section>
        <h2>A Silver Start in Milan</h2>
        <p>
          Eileen Gu added another medal to her growing Olympic collection on February 9, 2026, capturing silver in women's slopestyle at Milan Cortina's freestyle park. The 22-year-old's performance showcased the innovative trick combinations and stylish execution that have made her freestyle skiing's most recognizable athlete, though she fell just short of gold in a tightly contested final where millimeters and hundredths separated podium positions. Nevertheless, the silver marked her fourth career Olympic medal across two Games, cementing her status among winter sports' elite performers.
        </p>
        <p>
          More significantly, Gu's slopestyle result positioned her for potential additional medals in upcoming halfpipe and big air events where she enters as a primary gold medal contender. Having demonstrated excellent form despite the competitive slopestyle field, Gu carries momentum into disciplines where her technical mastery and competitive experience create substantial advantages. The prospect of multiple medals at Milan Cortina 2026 would further enhance a legacy already defined by historic achievements and global impact transcending sports.
        </p>
      </section>

      <section>
        <h2>Beijing 2022 Breakthrough</h2>
        <p>
          Gu's emergence as a global sporting icon occurred during Beijing 2022, where competing for China—the nation of her mother's birth—she captured three medals including two golds in an extraordinary Olympic debut. Her victory in big air featured a never-before-attempted double cork 1620 on her final run, delivering under immense pressure to secure gold in dramatic fashion. She followed with halfpipe gold, dominating with amplitude and technical difficulty that left competitors far behind, before adding slopestyle silver to complete an unprecedented three-medal performance across freestyle skiing's three Olympic events.
        </p>
        <p>
          These results generated massive attention in China, where Gu became a cultural phenomenon transcending sports. Her face appeared on billboards throughout major cities, luxury brands competed for endorsement deals, and young Chinese girls suddenly aspired to freestyle skiing careers previously unimaginable. The combination of athletic excellence, articulate multilingual communication skills, and compelling personal story—she was born in San Francisco and competed for China starting in 2019—created a unique global profile that made her one of the world's most recognizable athletes.
        </p>
        <p>
          However, Beijing's success also created enormous expectations for Milan Cortina. Chinese fans anticipated similar medal hauls, sponsors expected continued marketing value from Olympic triumphs, and Gu herself faced questions about whether she could replicate performances that had seemed almost effortless four years earlier. The pressure accompanying global superstardom would test not just her athletic abilities but her mental resilience and competitive instincts under scrutiny that few athletes ever experience.
        </p>
      </section>

      <section>
        <h2>Balancing Athletics and Academia</h2>
        <p>
          Unlike many elite athletes who dedicate themselves exclusively to sport, Gu has pursued academics alongside athletic training. She enrolled at Stanford University following Beijing 2022, studying with aspirations toward eventual professional careers beyond freestyle skiing while maintaining training schedules necessary for Olympic-level competition. This balancing act requires extraordinary time management and discipline—collegiate coursework, training sessions, competition travel, and sponsor obligations leave little room for typical student experiences or athletic specialization that competitors pursuing only skiing can achieve.
        </p>
        <p>
          Critics have questioned whether academic commitments compromise athletic performance, suggesting that full training dedication might produce better results. Gu has rejected these concerns, arguing that intellectual stimulation and diverse experiences enhance rather than detract from athletic pursuits by providing mental balance and preventing burnout that exclusive sports focus can create. Her continued elite results support this philosophy, demonstrating that unconventional paths can produce Olympic medals even as competitors follow more traditional athletic development models.
        </p>
      </section>

      <section>
        <h2>Freestyle Skiing's Technical Evolution</h2>
        <p>
          Freestyle skiing has evolved dramatically over recent decades, with athletes now performing tricks that would have seemed impossible when the discipline entered the Olympic program. Modern competitors spin 1440 degrees (four full rotations) or more while flipping, grab boards in stylish positions mid-air, and land switch (backwards) to increase difficulty scores. Judging evaluates both technical difficulty—rotation degrees, flip complexity, grab variations—and execution quality including amplitude (height), landing smoothness, and overall style that separates memorable runs from merely competent ones.
        </p>
        <p>
          Gu excels across these judging dimensions. Her technical repertoire includes the sport's most difficult tricks—1620s combining four-and-a-half rotations with flips, switch landings that double difficulty, and grab variations that add style points. More importantly, she performs these tricks with amplitude that competitors struggle to match, launching higher off features to create extra air time for rotations and grabs. This combination of difficulty and execution creates run scores that consistently place her on podiums even against deep international fields.
        </p>
        <p>
          Beyond physical capabilities, Gu possesses exceptional competitive instincts about when to attempt riskier tricks versus safer options. In Beijing's big air final, she opted for the unprecedented 1620 despite having never landed it in competition, correctly calculating that safe tricks wouldn't secure gold. This ability to assess risk-reward scenarios in high-pressure moments and execute accordingly demonstrates elite athletic mentality that coaching cannot teach—some athletes possess innate competitive courage that separates champions from podium contenders.
        </p>
      </section>

      <section>
        <h2>Milan Cortina Campaigns</h2>
        <p>
          Gu's slopestyle performance on February 9 demonstrated both her continued elite capabilities and the increasingly competitive international field pursuing her. While her run featured multiple high-difficulty tricks executed cleanly, the gold medalist delivered a near-perfect performance that narrowly edged Gu's score. The tight margins reflected how competitors have caught up to Gu's technical level since Beijing, studying her tricks and developing similar capabilities that have closed what was once a substantial competitive gap.
        </p>
        <p>
          Looking ahead to halfpipe and big air events, Gu enters as a favorite but faces serious challengers. In halfpipe, competitors like Chloe Kim (USA) possess similar technical arsenals and competitive resumes, setting up potential classic matchups between the sport's biggest stars. Big air's single-trick format creates opportunities for specialists who focus exclusively on that discipline versus Gu's three-event approach. Nevertheless, her Beijing performances demonstrated clutch capabilities under pressure that make her dangerous in any event regardless of pre-competition form or results.
        </p>
        <p>
          The schedule presents unique challenges—competing across three events over multiple days creates physical and mental demands that single-discipline athletes avoid. Gu must balance between events, managing energy and focus to peak for each without burning out from cumulative competition stress. Her slopestyle silver suggests good form heading into subsequent events, though whether she can maintain this level through halfpipe and big air qualifications and finals remains to be seen.
        </p>
      </section>

      <section>
        <h2>Global Impact and Legacy</h2>
        <p>
          Beyond medals, Gu's significance lies in her impact on freestyle skiing's global growth, particularly in China where winter sports participation has exploded following Beijing 2022. Government investments in ski facilities, youth development programs, and winter sports promotion have created infrastructure supporting millions of new participants who cite Gu as inspiration. This growth extends beyond elite competition, establishing recreational skiing and snowboarding cultures in regions where winter sports were previously minimal, fundamentally changing China's sporting landscape.
        </p>
        <p>
          Her influence also extends to conversations about identity, nationality, and athletic representation in globalized contexts. Born in America to a Chinese mother and American father, raised between cultures, and choosing to represent China internationally, Gu embodies modern transnational identities that don't fit neatly into traditional national categories. While this decision generated controversy—particularly in American media questioning her choice—it also sparked discussions about heritage, opportunity, and personal identity that transcend sports while reflecting broader societal questions about belonging in multicultural contexts.
        </p>
        <p>
          Looking forward, Gu's post-Olympic career paths remain open. Whether she continues competitive skiing through 2030 or pursues business, fashion, entertainment, or other opportunities her global profile enables, she has already secured legacy status as freestyle skiing's most influential athlete and one of winter sports' transcendent figures whose impact extends far beyond competition results.
        </p>
      </section>

      <section className="my-8 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Milan Cortina 2026 Results</h2>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🥈</span>
            <div>
              <p className="font-bold text-lg">Women's Slopestyle - Silver Medal</p>
              <p className="text-sm">February 9, 2026</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="font-semibold">Upcoming Events:</p>
            <ul className="mt-2 space-y-1 ml-4">
              <li>🔵 Women's Halfpipe - Gold medal contender</li>
              <li>🔵 Women's Big Air - Gold medal contender</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-400 dark:border-blue-700">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Career Olympic Medals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
          <div>
            <p className="font-bold mb-2">Beijing 2022 🇨🇳</p>
            <ul className="space-y-1 ml-4">
              <li>🥇 Big Air Gold</li>
              <li>🥇 Halfpipe Gold</li>
              <li>🥈 Slopestyle Silver</li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-2">Milan Cortina 2026 🇨🇳</p>
            <ul className="space-y-1 ml-4">
              <li>🥈 Slopestyle Silver</li>
              <li className="text-blue-600 dark:text-blue-400">🔵 Halfpipe (upcoming)</li>
              <li className="text-blue-600 dark:text-blue-400">🔵 Big Air (upcoming)</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 font-semibold text-center">4 Career Olympic Medals (2 Gold, 2 Silver)</p>
      </section>

      <section className="my-8 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Facts</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
            <span><strong>Born:</strong> September 3, 2003 (age 22) • San Francisco, California</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
            <span><strong>Competes for:</strong> China (since 2019)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
            <span><strong>Education:</strong> Stanford University student</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
            <span><strong>Signature trick:</strong> Double cork 1620 (landed in Beijing 2022 big air final)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
            <span><strong>Cultural impact:</strong> Global sports icon with massive following in China</span>
          </li>
        </ul>
      </section>

      <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-6">Related Winter Olympics Coverage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/winter-olympics/chloe-kim-historic-three-peat-bid" className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Chloe Kim: Three-Peat Quest</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">U.S. halfpipe star pursues unprecedented third gold</p>
          </Link>
          <Link href="/winter-olympics/usa/ilia-malinin" className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Ilia Malinin: Quad God</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Figure skating phenomenon leads men's singles</p>
          </Link>
          <Link href="/winter-olympics" className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="font-semibold text-lg mb-2">All Winter Olympics Coverage</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Complete Milan Cortina 2026 news and results</p>
          </Link>
        </div>
      </section>
    </NewsArticle>
  );
}
