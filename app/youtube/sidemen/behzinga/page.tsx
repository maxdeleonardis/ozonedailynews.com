import type { Metadata } from "next";
import { ArticlePage, Section, Quote, RelatedLinks, Notice } from "@/components/ArticlePage";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Behzinga (Ethan Payne) — Fitness Transformation & Mental Health Advocate | ObjectWire",
  description: "Complete profile of Behzinga (Ethan Payne): Sidemen member's inspiring fitness transformation, mental health advocacy, relationship with Faith Kelly, and charity football performance. 2026 coverage.",
  keywords: [
    "Behzinga",
    "Ethan Payne",
    "Behzinga fitness transformation",
    "Behzinga weight loss",
    "Ethan Payne mental health",
    "Behzinga Faith Kelly",
    "Sidemen Behzinga",
    "Behzinga 2026",
    "Ethan Payne fitness journey",
    "Behzinga charity match"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/behzinga',
  },
  openGraph: {
    title: 'Behzinga (Ethan Payne) — Fitness Journey & Mental Health Champion',
    description: 'Full profile of Behzinga: transformative weight loss journey, mental health advocacy, engagement to Faith Kelly, and inspiring fitness content.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/sidemen/behzinga',
    siteName: 'ObjectWire',
    section: 'YouTube',
  },
};

export default function BehzingaPage() {
  return (
    <>
      <NewsArticleSchema
        title="Behzinga (Ethan Payne) — Fitness Transformation & Mental Health Advocate"
        description="Complete profile of Behzinga: Sidemen member's inspiring fitness transformation journey, mental health advocacy, relationship with Faith Kelly, and athletic performance in charity matches."
        publishedTime="2024-01-15T10:00:00Z"
        modifiedTime="2026-01-15T10:00:00Z"
        author="ObjectWire Editorial Team"
        section="YouTube"
        articleUrl="https://www.objectwire.org/youtube/sidemen/behzinga"
        keywords={["Behzinga", "Ethan Payne", "Fitness Transformation", "Mental Health", "Faith Kelly", "Sidemen"]}
      />

      <ArticlePage
        title="Behzinga"
        subtitle="Fitness Transformation Icon & Mental Health Advocate"
        infoBox={{
          title: "Behzinga",
          items: [
            { label: "Real Name", value: "Ethan Leigh Payne" },
            { label: "Born", value: "June 20, 1995 (age 29)" },
            { label: "Nationality", value: "British (English)" },
            { label: "Fiancée", value: <Link href="/youtube/faith-kelly" className="text-blue-600 hover:underline">Faith Kelly</Link> },
            { label: "Subscribers", value: "4.9+ million (main channel)" },
            { label: "Content Type", value: "Fitness, Gaming, Lifestyle, Sidemen" },
            { label: "Channel Start", value: "February 2012" },
            { label: "Sidemen Role", value: "Founding Member (2013)" },
            { label: "Known For", value: "Fitness transformation, Mental health advocacy" },
            { label: "Transformation", value: "20kg+ weight loss (2018-2020)" },
          ],
        }}
      >
        <Section id="overview" title="Overview">
          <p>
            <strong>Ethan Leigh Payne</strong> (born June 20, 1995), known professionally as <strong>Behzinga</strong>, 
            is a British YouTuber, fitness advocate, and founding member of the <Link href="/youtube/sidemen" className="text-blue-600 hover:underline">Sidemen</Link>. 
            With 4.9+ million subscribers, Behzinga has become one of YouTube's most inspiring transformation stories, 
            documenting his journey from struggling with mental health and weight issues to becoming a fitness role model 
            and mental health advocate.
          </p>

          <p>
            As the youngest founding member of the Sidemen, Ethan has grown up in the public eye, sharing his authentic 
            journey through adolescence into adulthood. His willingness to discuss depression, anxiety, addiction, and 
            body image issues has made him one of the platform's most relatable and respected creators, particularly 
            among young audiences facing similar challenges.
          </p>

          <p>
            Beyond his personal transformation, Behzinga has emerged as a standout athlete in the <Link href="/youtube/sidemen/charity-match" className="text-blue-600 hover:underline">Sidemen Charity Football Matches</Link>, 
            consistently demonstrating impressive stamina and performance. His engagement to fellow content creator 
            <Link href="/youtube/faith-kelly" className="text-blue-600 hover:underline">Faith Kelly</Link> in 2024 
            marked another milestone in his public personal journey.
          </p>

          <Notice type="info">
            <p>
              <strong>2026 Update:</strong> Behzinga continues maintaining his fitness transformation while expanding 
              content into advanced workout routines, nutrition education, and couples content with Faith Kelly. His 
              recent collaboration with fitness brands and mental health organizations demonstrates his commitment to 
              using his platform for positive impact.
            </p>
          </Notice>
        </Section>

        <Section id="early-life" title="Early Life and Education">
          <p>
            Ethan Leigh Payne was born on June 20, 1995, in London, England. Growing up in a challenging family environment, 
            Ethan faced difficulties from an early age that would later inform his mental health advocacy work. He attended 
            South Bank University Academy (now South Bank Engineering UTC), where he developed friendships that would later 
            become part of his YouTube journey.
          </p>

          <p>
            From a young age, Ethan struggled with depression and low self-esteem, challenges exacerbated by issues at 
            home and school. Gaming became an escape and coping mechanism, leading him to discover YouTube as a creative 
            outlet. In February 2012, at just 16 years old, he created his Behzinga channel, initially uploading FIFA 
            gameplay and comedic commentary.
          </p>

          <p>
            The channel name "Behzinga" was inspired by Sheldon Cooper's "Bazinga" catchphrase from The Big Bang Theory, 
            with Ethan adding his own twist to create a unique online identity. His early content reflected typical teenage 
            gaming videos, but his authentic personality and willingness to be himself—even when vulnerable—began attracting 
            a dedicated audience who connected with his genuine approach.
          </p>
        </Section>

        <Section id="youtube-career" title="YouTube Career">
          <h3 className="text-xl font-semibold mt-6 mb-3">Early Content and Sidemen Formation (2012-2016)</h3>
          <p>
            Behzinga's initial content focused on FIFA gameplay, pack openings, and gaming challenges similar to other 
            UK FIFA YouTubers of the era. What distinguished his content was his infectious energy and willingness to 
            show genuine emotion—whether excitement at packing a good player or frustration at losing matches. This 
            authenticity resonated with viewers seeking relatable gaming content.
          </p>

          <p>
            In October 2013, Ethan became a founding member of the Sidemen at just 18 years old, making him the youngest 
            member of the group. The Sidemen collaboration accelerated his channel growth exponentially, introducing him 
            to millions of new viewers through group challenges, football videos, and collaborative content. Despite 
            being the youngest, Ethan held his own in the group's dynamic, often serving as the target of jokes but 
            also dishing out humor himself.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Struggles and Vulnerability (2017-2018)</h3>
          <p>
            Behind the energetic on-camera personality, Ethan was privately struggling with severe depression, alcoholism, 
            and weight gain. By 2017, these issues had reached a crisis point, affecting his mental and physical health. 
            In a watershed moment for his channel and career, Ethan decided to speak openly about his struggles in emotional 
            videos that broke down the facade many creators maintain.
          </p>

          <p>
            His honesty about depression, addiction, and body image issues marked a turning point—not just for Ethan 
            personally, but for YouTube mental health discourse generally. Young viewers, particularly young men who 
            often feel pressure to hide emotional struggles, found someone speaking their truth. The response was overwhelming, 
            with millions expressing gratitude for his vulnerability and sharing their own stories.
          </p>

          <Quote 
            text="I realized I couldn't keep pretending everything was okay. If sharing my struggle helps even one person feel less alone, it's worth being vulnerable."
            author="Behzinga"
            context="Video discussing his decision to speak about mental health (2018)"
          />

          <h3 className="text-xl font-semibold mt-6 mb-3">Fitness Transformation Era (2018-2020)</h3>
          <p>
            In 2018, Ethan embarked on a transformative fitness journey that would redefine his content and personal brand. 
            Documenting every step—from initial workouts where he struggled with basic exercises to gradually building 
            strength and endurance—Behzinga created one of YouTube's most comprehensive fitness transformation documentaries. 
            His honesty about setbacks, plateaus, and mental struggles made the journey relatable rather than aspirational fantasy.
          </p>

          <p>
            Over two years, Ethan lost over 20 kilograms, completely transforming his physique and relationship with fitness. 
            More importantly, he demonstrated how physical fitness directly improved his mental health, providing structure, 
            goals, and a healthy coping mechanism. His transformation videos garnered tens of millions of views, inspiring 
            countless viewers to begin their own fitness journeys with realistic expectations.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Continued Evolution (2021-2026)</h3>
          <p>
            Post-transformation, Behzinga has maintained his fitness while evolving content to include advanced workout 
            tutorials, nutrition advice, mental health check-ins, and relationship content with <Link href="/youtube/faith-kelly" className="text-blue-600 hover:underline">Faith Kelly</Link>. 
            His second channel features gaming content, allowing him to maintain his roots while the main channel focuses 
            on lifestyle, fitness, and motivational content.
          </p>

          <p>
            In 2026, Behzinga continues balancing fitness content with Sidemen collaborations, having found a sustainable 
            content strategy that serves both his personal brand and group commitments. Recent series include "Training 
            Like..." where he adopts athletes' workout routines, couples challenges with Faith, and mental health Q&As 
            where he answers viewer questions about managing anxiety and depression.
          </p>
        </Section>

        <Section id="fitness-journey" title="Fitness Transformation Details">
          <p>
            Behzinga's fitness transformation represents one of YouTube's most documented and inspiring health journeys. 
            Starting in early 2018 at his heaviest weight, Ethan partnered with personal trainers and nutritionists to 
            develop a sustainable approach focused on long-term lifestyle change rather than quick fixes. This methodology 
            proved crucial to his success and differentiates his story from unrealistic transformation narratives.
          </p>

          <p>
            His approach combined:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Structured Training:</strong> Progressive gym routines starting with basic movements, gradually increasing intensity</li>
            <li><strong>Nutrition Education:</strong> Learning about calories, macronutrients, and sustainable eating patterns vs. restrictive diets</li>
            <li><strong>Mental Health Focus:</strong> Using fitness as mental health management tool, not just physical transformation</li>
            <li><strong>Accountability:</strong> Public documentation creating external motivation and community support</li>
            <li><strong>Flexibility:</strong> Allowing setbacks and plateaus without giving up, promoting self-compassion</li>
            <li><strong>Professional Support:</strong> Working with trainers, therapists, and medical professionals</li>
          </ul>

          <p>
            The physical results proved remarkable—Ethan lost over 20kg, built visible muscle definition, and dramatically 
            improved his cardiovascular fitness. His performance in the 2022, 2023, and 2024 Sidemen Charity Matches showcased 
            his athletic transformation, with Ethan running tirelessly throughout 90-minute matches and scoring multiple goals.
          </p>

          <Quote 
            text="The transformation isn't just physical. I can now run for 90 minutes in a charity match when two years ago I couldn't jog for 5 minutes. That's life-changing."
            author="Behzinga"
            context="Post-match interview at Sidemen Charity Match 2023"
          />

          <p>
            Perhaps most impactfully, Behzinga's journey demonstrated that transformation is possible while being transparent 
            about struggles. He didn't present a perfect journey—he showed failed workouts, dietary mishaps, periods of 
            low motivation, and mental health rough patches. This honesty made his success feel achievable rather than 
            intimidating, inspiring thousands of viewers to begin their own journeys.
          </p>
        </Section>

        <Section id="mental-health" title="Mental Health Advocacy">
          <p>
            Behzinga has become one of the UK YouTube community's most prominent mental health advocates, using his platform 
            to normalize conversations about depression, anxiety, and addiction. His advocacy work extends beyond his own 
            story to actively promoting mental health resources, supporting charities, and creating safe spaces for viewers 
            to discuss their struggles.
          </p>

          <p>
            His approach to mental health content balances vulnerability with responsibility—he shares his experiences 
            authentically while consistently directing viewers toward professional help rather than positioning himself 
            as an expert. This ethical approach has earned respect from mental health professionals who recognize the 
            positive impact of celebrity advocacy when done thoughtfully.
          </p>

          <p>
            Key aspects of his mental health advocacy include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regular "mental health check-in" videos discussing his current state openly</li>
            <li>Collaboration with mental health charities like Mind and CALM (Campaign Against Living Miserably)</li>
            <li>Speaking at schools and universities about mental health awareness</li>
            <li>Creating resource guides for viewers seeking professional help</li>
            <li>Normalizing therapy and professional support through discussing his own counseling experiences</li>
            <li>Addressing male mental health stigma specifically, encouraging men to seek help</li>
          </ul>

          <p>
            The impact of his advocacy is measurable—countless viewers credit Behzinga's openness with inspiring them to 
            seek therapy, speak to loved ones about struggles, or simply feel less alone. Mental health organizations 
            have recognized his contribution, with some featuring him in campaigns aimed at young audiences.
          </p>
        </Section>

        <Section id="relationship" title="Relationship with Faith Kelly">
          <p>
            Behzinga's relationship with <Link href="/youtube/faith-kelly" className="text-blue-600 hover:underline">Faith Kelly</Link>, 
            a content creator and influencer, became public in 2022, quickly becoming a beloved aspect of his content. 
            Faith, who creates lifestyle and fashion content, brings a complementary energy to Ethan's videos, with 
            their genuine chemistry evident in collaborative content.
          </p>

          <p>
            Their relationship content strikes a balance between sharing moments with fans and maintaining privacy—they 
            feature each other in vlogs, challenges, and Q&As while keeping more intimate aspects of their relationship 
            private. This boundary-setting has helped maintain authenticity while avoiding the pitfalls of over-sharing 
            that sometimes plague YouTube couple content.
          </p>

          <p>
            In December 2024, Ethan proposed to Faith during a romantic getaway, sharing the engagement with fans through 
            an emotional video that garnered millions of views. The proposal represented a significant personal milestone 
            for Ethan, who has spoken about how Faith supported him through ongoing mental health management and provided 
            stability during challenging periods.
          </p>

          <Quote 
            text="Faith has been my rock through everything. She sees me on my worst days and loves me anyway. That's real partnership."
            author="Behzinga"
            context="Engagement announcement video (December 2024)"
          />

          <p>
            As of 2026, the couple is planning their wedding while continuing to create both individual and collaborative 
            content. Their relationship represents a mature, supportive partnership that contrasts with the dramatic 
            relationship content sometimes seen on YouTube, offering viewers a model of healthy communication and mutual support.
          </p>
        </Section>

        <Section id="sidemen-role" title="Sidemen Role and Contributions">
          <p>
            Within the <Link href="/youtube/sidemen" className="text-blue-600 hover:underline">Sidemen</Link>, Behzinga 
            occupies a unique position as the youngest founding member and the group's most transformed individual. His 
            Sidemen role has evolved from being frequently the "butt of jokes" in earlier content to becoming respected 
            for his athletic ability and motivational energy in challenges and football matches.
          </p>

          <p>
            In Sidemen Sunday videos, Ethan brings competitive energy and willingness to fully commit to challenges, 
            whether they're physical competitions, creative tasks, or comedic scenarios. His fitness transformation has 
            made him increasingly competitive in physical challenges, creating entertaining dynamics where he now outperforms 
            members who previously dominated athletic content.
          </p>

          <p>
            The Sidemen Charity Football Matches have become Behzinga showcases—his stamina, work rate, and skill improvements 
            have made him one of the team's most reliable players. In the 2024 charity match at London Stadium before 60,000 
            spectators, Ethan scored and provided assists while running tirelessly for the full match, demonstrating the 
            tangible results of his transformation journey.
          </p>

          <p>
            Beyond on-camera contributions, Ethan is involved in Sidemen business operations, particularly the Sides restaurant 
            chain where his fitness knowledge informed healthier menu options. He's also active in Sidemen Clothing and 
            XIX Vodka promotional campaigns, though he's spoken about managing alcohol brand promotion while maintaining 
            his sobriety—a nuanced position he handles by focusing on responsible consumption messaging.
          </p>
        </Section>

        <Section id="achievements" title="Achievements and Recognition">
          <p>
            Behzinga's achievements span content creation, fitness transformation documentation, and mental health advocacy:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>4.9+ million subscribers (main channel, 2026)</li>
            <li>1.5+ billion total video views</li>
            <li>20kg+ documented weight loss transformation (2018-2020)</li>
            <li>Founding member of Sidemen (50+ million collective subscribers)</li>
            <li>Mental health advocate partnerships with Mind and CALM charities</li>
            <li>Key performer in charity matches raising £2M+ (2018-2024)</li>
            <li>Featured in multiple fitness publications documenting transformation</li>
            <li>Speaking engagements at schools/universities about mental health</li>
            <li>Engagement to Faith Kelly (2024)</li>
            <li>Maintained sobriety and fitness lifestyle (2018-present)</li>
          </ul>

          <p>
            His transformation videos collectively have over 50 million views, inspiring countless fitness journeys worldwide. 
            Mental health organizations have cited his content as positive examples of celebrity advocacy done responsibly, 
            while fitness communities recognize his realistic, sustainable approach to transformation.
          </p>
        </Section>

        <Section id="legacy" title="Legacy and Impact">
          <p>
            Behzinga's legacy extends beyond subscriber counts to represent the potential for genuine transformation and 
            the power of vulnerability in digital media. His willingness to document struggles—not just successes—has created 
            a blueprint for authentic content creation that prioritizes wellbeing over constant performance.
          </p>

          <p>
            For fitness content, Ethan demonstrated that transformations can be documented honestly, including setbacks, 
            without diminishing the achievement. His approach counters toxic fitness culture by promoting self-compassion, 
            sustainable methods, and mental health as primary goals with physical transformation as a beneficial side effect.
          </p>

          <p>
            In mental health advocacy, Behzinga has helped normalize young men discussing depression and anxiety—a demographic 
            that statistically struggles to seek help due to stigma. By showing that vulnerability is strength and help-seeking 
            is courageous, he's likely contributed to saving lives, a impact impossible to fully quantify but evident in 
            countless viewer testimonials.
          </p>

          <p>
            As the Sidemen continue evolving into 2026 and beyond, Behzinga represents the individual growth possible within 
            collaborative creator groups. His transformation—physical, mental, and personal—demonstrates that online personalities 
            can use their platforms for genuine positive impact while building successful careers. His story continues inspiring 
            new audiences discovering his content, proving that authentic vulnerability creates timeless, meaningful connections.
          </p>
        </Section>

        <RelatedLinks
          links={[
            { href: "/youtube/sidemen", text: "The Sidemen" },
            { href: "/youtube/sidemen/ksi", text: "KSI (JJ Olatunji)" },
            { href: "/youtube/sidemen/miniminter", text: "Miniminter (Simon Minter)" },
            { href: "/youtube/faith-kelly", text: "Faith Kelly (Fiancée)" },
            { href: "/youtube/sidemen/charity-match", text: "Sidemen Charity Match" },
            { href: "/health/mental-health-resources", text: "Mental Health Resources" },
          ]}
        />
      </ArticlePage>
    </>
  );
}
