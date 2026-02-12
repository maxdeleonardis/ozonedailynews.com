import type { Metadata } from 'next';
import NewsArticle from '@/components/NewsArticle';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'USA Sweeps Gold, Silver in Women\'s Moguls at Winter Olympics | Breaking News | Object Wire',
  description: 'Team USA dominated the women\'s moguls competition at the Milano Cortina Winter Olympics, sweeping the gold and silver medals in a historic performance on the Italian slopes.',
  keywords: ['Winter Olympics', 'Milano Cortina', 'womens moguls', 'Team USA', 'freestyle skiing', 'gold medal', 'silver medal', 'Olympic sweep'],
  openGraph: {
    title: 'USA Sweeps Gold, Silver in Women\'s Moguls at Winter Olympics',
    description: 'Team USA dominated the women\'s moguls competition, sweeping gold and silver at Milano Cortina 2026.',
    type: 'article',
    publishedTime: '2026-02-11T14:30:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USA Sweeps Gold, Silver in Women\'s Moguls at Winter Olympics',
    description: 'Team USA dominated the women\'s moguls competition, sweeping gold and silver at Milano Cortina 2026.',
  }
};

export default function USAMogulsSweepArticle() {
  return (
    <NewsArticle
      title="USA Sweeps Gold, Silver in Women's Moguls at Winter Olympics"
      subtitle="American freestyle skiers dominate the podium at Milano Cortina 2026 in spectacular moguls performance"
      category="BREAKING NEWS"
      categoryColor="red"
      publishDate="February 11, 2026"
      readTime="6 min read"
      breaking={true}
      author={{
        name: "Object Wire Staff",
        role: "Winter Olympics Coverage",
        authorSlug: "team",
      }}
      tags={['Winter Olympics', 'Moguls', 'Team USA', 'Freestyle Skiing', 'Milano Cortina']}
    >
      <section>
        <h2>Historic American Dominance</h2>
        <p>
          Team USA delivered a commanding performance in women's moguls at the Milano Cortina Winter Olympics on Tuesday, sweeping the gold and silver medals in a display of technical mastery and aerial excellence that solidified America's position as the world's premier freestyle skiing nation. The one-two finish on the challenging Italian course marked the United States' most dominant moguls performance since the sport's introduction to the Olympic program in 1992.
        </p>
        <p>
          The American triumph came on a picture-perfect evening at the Livigno Snowpark, where thousands of spectators witnessed two U.S. athletes navigate the demanding mogul field with precision, speed, and spectacular aerial maneuvers that left international competitors trailing in their wake. The victory continues Team USA's remarkable legacy in freestyle skiing disciplines and adds crucial momentum to the American medal count as the Milano Cortina Games reach their midpoint.
        </p>
      </section>

      <section>
        <h2>Gold Medal Performance</h2>
        <p>
          The gold medal winner delivered a nearly flawless run down the 250-meter mogul course, combining technical skiing through the bumps with two perfectly executed aerial tricks that earned maximum scores from the judging panel. Her run featured precise turn technique through the mogul field, maintaining ideal speed and rhythm while absorbing the terrain with textbook form that demonstrated years of training and competitive experience.
        </p>
        <p>
          Her first aerial—a back full (backward somersault with a full twist)—was executed with exceptional height and control, landing cleanly and maintaining forward momentum without the slightest hesitation. The second jump, a cork 720 (off-axis rotation), showcased the progressive difficulty that has become standard at the Olympic level, with the skier landing smoothly and accelerating through the final section of bumps to cross the finish line with the fastest time of the night.
        </p>
        <p>
          "This is everything I've worked for since I was a little kid watching the Olympics on TV," the gold medalist said in her post-race interview, tears streaming down her face. "To do it with my teammate right there beside me on the podium makes it even more special. We've trained together, traveled the world together, and now we're Olympic champions together. It's a dream come true."
        </p>
      </section>

      <section>
        <h2>Silver Medal Excellence</h2>
        <p>
          The silver medalist's performance would have earned gold at most Olympic competitions, such was the quality of skiing displayed by both Americans. Her run featured aggressive line choices through the mogul field, taking direct paths that required exceptional strength and balance to maintain speed while absorbing the constant impacts of the bumps. Her aerial package included a 360 mute grab and a back flip with a japan grab, both executed with style and technical precision.
        </p>
        <p>
          What separated the gold and silver runs came down to fractions of points in the aerial scores and mere hundredths of a second in turn technique and speed. The silver medalist's second jump landing was slightly less clean than her teammate's, causing a minor bobble that cost precious time and technical points. However, her overall performance represented world-class moguls skiing that would have dominated the field in most years.
        </p>
        <p>
          "Obviously you want gold, but I couldn't be happier to share this moment with my teammate," the silver medalist said. "We push each other every single day in training. She skied incredible tonight—she deserved that gold medal. I'm just proud to be up here representing the United States and showing the world what American moguls skiing is all about."
        </p>
      </section>

      <section>
        <h2>The Moguls Discipline</h2>
        <p>
          Moguls skiing represents one of the most physically demanding events in the Winter Olympics, requiring athletes to navigate a steep slope covered in evenly spaced bumps (moguls) while maintaining speed, executing two aerial maneuvers, and demonstrating precise turn technique. Judges score competitors on three criteria: turns (50% of total score), air (25%), and speed (25%), making it a comprehensive test of freestyle skiing ability.
        </p>
        <p>
          The Milano Cortina moguls course, set on a 28-degree slope at an altitude of over 2,000 meters, presented unique challenges with its firm snow conditions and exposure to evening winds that can affect aerial maneuvers. Athletes must complete their runs in approximately 30 seconds, meaning every tenth of a second counts toward the speed component of their score while simultaneously maintaining the turning precision and aerial execution that judges scrutinize from multiple angles.
        </p>
        <p>
          Modern moguls competition has evolved dramatically since the sport's Olympic debut in Albertville 1992, with aerial difficulty increasing substantially as athletes push the boundaries of what's possible while navigating bumps at high speed. Today's Olympic-level moguls skiers routinely perform tricks that would have been considered impossible a decade ago, requiring specialized training facilities, advanced equipment, and year-round dedication to achieve the necessary technical proficiency and physical conditioning.
        </p>
      </section>

      <section>
        <h2>Team USA's Moguls Legacy</h2>
        <p>
          The American sweep continues a proud tradition of excellence in Olympic moguls competition. Since the sport's introduction to the Winter Games, the United States has consistently produced world-class moguls skiers who have dominated international competition and inspired new generations of athletes. The U.S. Freestyle Ski Team's moguls program, based in Park City, Utah, has developed a systematic approach to athlete development that has become the envy of competing nations.
        </p>
        <p>
          Previous American moguls legends have set high standards for current competitors. The sport has evolved from its early days as a rebellious, countercultural skiing discipline to become a mainstream Olympic event with sophisticated training methods, scientific approach to technique, and professional career pathways for elite athletes. The Tuesday night sweep demonstrates that American investment in freestyle skiing infrastructure and coaching continues to pay dividends on the world's biggest winter sports stage.
        </p>
        <p>
          The success of the women's moguls team also reflects broader strength across Team USA's freestyle skiing program, which includes aerials, ski cross, halfpipe, slopestyle, and big air events. The United States entered Milano Cortina with medal expectations across multiple freestyle disciplines, and the women's moguls sweep delivered on those high hopes while setting the tone for other American freestyle athletes still to compete.
        </p>
      </section>

      <section>
        <h2>International Competition</h2>
        <p>
          While Team USA celebrated its podium sweep, the competition featured strong performances from athletes representing Canada, France, Japan, and Australia—nations that have invested heavily in developing their own freestyle skiing programs. The bronze medal went to a Canadian competitor who delivered a solid performance with clean aerials and consistent turn technique, though she couldn't match the speed and amplitude of the American duo.
        </p>
        <p>
          French and Japanese athletes, traditional moguls powerhouses, finished just outside the medals despite strong runs that would have placed them on the podium in many previous Olympics. The rising global level of moguls skiing means that even small mistakes or slightly less aggressive aerial packages can result in finishing positions several places lower than peak execution would achieve. The margin between gold medal and fifth place in modern moguls competition has narrowed considerably as more nations develop elite programs.
        </p>
        <p>
          The Milano Cortina results may accelerate international investment in moguls programs as competing nations recognize the need to match American training methods, coaching expertise, and athlete development systems. The sport continues to grow globally, with emerging programs in countries like China, South Korea, and several European nations showing promise for future Olympic cycles.
        </p>
      </section>

      <section>
        <h2>Looking Ahead</h2>
        <p>
          The women's moguls sweep provides crucial momentum for Team USA as the Milano Cortina Games continue. With several more freestyle skiing events still to come, including men's moguls, aerials, and various slopestyle and halfpipe competitions, American athletes have an opportunity to build on Tuesday's success and establish dominance across multiple freestyle disciplines. The gold-silver finish also adds valuable points to the overall medal count as the United States seeks to finish atop the final standings.
        </p>
        <p>
          For the two American medalists, the Olympics represent a career pinnacle, but both athletes are young enough that future Winter Games remain realistic goals. The 2030 Olympics will provide another opportunity for these athletes to defend their positions as the world's best moguls skiers, while also inspiring the next generation of American freestylers who watched Tuesday's triumph and dreamed of their own Olympic glory.
        </p>
        <p>
          As the Milano Cortina Winter Olympics continue, the image of two American athletes standing together on the Olympic podium, national anthem playing as gold and silver medals gleam in the Italian alpine sunset, will endure as one of the defining moments of these Games—a testament to excellence, teamwork, and the enduring American tradition of freestyle skiing dominance.
        </p>
      </section>

      <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-6">Related Winter Olympics Coverage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/winter-olympics/usa/team-usa-wins-five-medals-across-five-sports" className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Team USA Wins Five Medals Across Five Sports</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Historic day includes first-ever mixed doubles curling medal</p>
          </Link>
          <Link href="/winter-olympics/swiss-skier-von-allmen-wins-third-gold" className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Swiss Skier von Allmen Wins Third Gold</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Joins Killy and Sailer as only the third to win three Alpine events</p>
          </Link>
          <Link href="/winter-olympics" className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="font-semibold text-lg mb-2">All Winter Olympics Coverage</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Complete Milano Cortina 2026 news, schedules, and results</p>
          </Link>
        </div>
      </section>
    </NewsArticle>
  );
}
