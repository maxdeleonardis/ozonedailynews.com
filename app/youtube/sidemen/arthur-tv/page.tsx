import type { Metadata } from "next";
import { ArticlePage, Section, InfoBox, Quote, RelatedLinks } from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "ArthurTV - YouTube Content Creator & Sidemen Collaborator | ObjectWire",
  description: "Complete profile of ArthurTV (Arthur Frederick), British YouTube content creator known for collaborations with the Sidemen and his charismatic personality.",
  keywords: ["ArthurTV", "Arthur Frederick", "Sidemen", "YouTube", "UK YouTuber", "Entertainment"],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/arthur-tv',
  },
};

export default function ArthurTVPage() {
  return (
    <ArticlePage
      title="ArthurTV"
      subtitle="British YouTube content creator and Sidemen collaborator"
      category="YouTube Creator"
      lastUpdated="February 23, 2026"
      backLink={{
        href: "/youtube/sidemen",
        label: "Back to Sidemen"
      }}
      infoBox={{
        title: "ArthurTV",
        image: {
          src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
          alt: "ArthurTV",
          caption: "British YouTube personality"
        },
        items: [
          { label: "Real Name", value: "Arthur Frederick" },
          { label: "Born", value: "June 26, 1996" },
          { label: "Nationality", value: "British" },
          { label: "Platform", value: "YouTube" },
          { label: "Subscribers", value: "2M+ (Main Channel)" },
          { label: "Known For", value: "Sidemen collaborations, Vlogs" },
          { label: "Active Since", value: "2014" },
        ]
      }}
      tableOfContents={[
        { id: "early-life", label: "Early Life and Career" },
        { id: "content", label: "Content Style" },
        { id: "sidemen", label: "Sidemen Connection" },
        { id: "impact", label: "Impact and Influence" },
      ]}
      relatedLinks={[
        { 
          href: "/youtube/sidemen", 
          label: "Sidemen Overview",
          description: "Complete guide to the Sidemen YouTube collective"
        },
        { 
          href: "/youtube/sidemen/george-clark", 
          label: "George Clarkey",
          description: "Frequent collaborator and friend"
        },
        { 
          href: "/youtube/sidemen/italian-bach", 
          label: "Italian Bach",
          description: "Part of the extended Sidemen circle"
        },
      ]}
    >
      <Section id="early-life" title="Early Life and Career">
        <p>
          <strong>Arthur Frederick</strong>, better known online as <strong>ArthurTV</strong>, is a British YouTube content 
          creator born on June 26, 1996. He launched his YouTube channel in 2014 and has since grown to become one of the 
          most recognizable faces in the UK YouTube scene, particularly within the Sidemen's extended network of creators.
        </p>
        
        <p>
          Arthur's rise to prominence came through his authentic personality and natural charisma, which made him a perfect 
          fit for collaborative content. His early videos focused on vlogs and reaction content, but his career trajectory 
          changed significantly when he began appearing in Sidemen videos and forming close friendships with the group's members.
        </p>

        <Quote source="ArthurTV, 2023">
          I never expected to become part of this world. I just made videos with my mates, and suddenly I'm in Sidemen 
          Sundays. It's been mental.
        </Quote>
      </Section>

      <Section id="content" title="Content Style">
        <p>
          ArthurTV's content is characterized by:
        </p>

        <ul>
          <li><strong>Vlogs and Behind-the-Scenes</strong> - Daily life content and event coverage</li>
          <li><strong>Collaborative Challenges</strong> - Regular appearances in group challenge videos</li>
          <li><strong>Gaming Content</strong> - Occasional gaming streams and videos</li>
          <li><strong>Reaction Videos</strong> - Commentary on trending topics and viral content</li>
          <li><strong>Travel Content</strong> - International trips and adventures with friends</li>
        </ul>

        <p>
          His approachable demeanor and quick wit have made him a fan favorite in collaborative videos. Arthur excels in 
          challenge-based content where his competitive nature and comedic timing shine through.
        </p>
      </Section>

      <Section id="sidemen" title="Sidemen Connection">
        <p>
          While not an official member of the Sidemen, <strong>ArthurTV has become one of the most frequent collaborators</strong> 
          with the group. He regularly appears in Sidemen Sundays, MoreSidemen content, and various Sidemen-adjacent projects. 
          His chemistry with the group, particularly with members like <strong>ChrisMD</strong>, <strong>George Clarkey</strong>, 
          and <strong>Angry Ginge</strong>, has made him an integral part of the extended Sidemen universe.
        </p>

        <p>
          Notable appearances include:
        </p>

        <ul>
          <li>Multiple Sidemen Sunday videos</li>
          <li>Charity football matches alongside Sidemen members</li>
          <li>Collaborative challenges and competitions</li>
          <li>Side+ exclusive content</li>
          <li>Sidemen Clothing launches and promotional events</li>
        </ul>

        <p>
          His regular presence has led many fans to consider him an "honorary Sidemen member," though he maintains his own 
          successful independent brand and content creation career.
        </p>
      </Section>

      <Section id="impact" title="Impact and Influence">
        <p>
          With over <strong>2 million subscribers</strong> on his main channel and millions more across his social media 
          platforms, ArthurTV has established himself as a significant figure in UK YouTube culture. His influence extends 
          beyond just view counts—he's helped bridge different creator communities and popularized collaborative content 
          formats.
        </p>

        <p>
          His success has inspired a new generation of UK YouTubers to focus on personality-driven content rather than 
          niche-specific videos. Arthur's career demonstrates that authenticity and strong interpersonal relationships can 
          be just as valuable as production quality or specific content verticals.
        </p>

        <p>
          In the broader YouTube ecosystem, ArthurTV represents the evolution of creator collaboration networks. Rather than 
          traditional "collab houses" or formal groups, he's part of a fluid community of creators who regularly work together 
          while maintaining individual brands—a model that's increasingly common in the creator economy.
        </p>
      </Section>

      <Section id="business" title="Business Ventures">
        <p>
          Beyond YouTube revenue, Arthur has diversified his income through:
        </p>

        <ul>
          <li>Brand partnerships and sponsorships</li>
          <li>Merchandise sales</li>
          <li>Event appearances and hosting</li>
          <li>Podcast participation</li>
          <li>Platform-exclusive deals (Side+, etc.)</li>
        </ul>
      </Section>
    </ArticlePage>
  );
}
