import React from "react";
import { Metadata } from "next";
import { 
  ArticlePage, 
  Section, 
  InfoBox, 
  Quote, 
  ExternalLinks,
  References 
} from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "Sepp Blatter Calls for World Cup Boycott | ObjectWire",
  description: "Former FIFA president Sepp Blatter joins growing chorus calling for boycott of USA 2026 World Cup amid political and organizational concerns.",
  keywords: ["Sepp Blatter", "FIFA", "World Cup 2026", "Boycott", "USA", "Corruption"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  alternates: {
    canonical: 'https://www.objectwire.org/news/sepp-blatter-world-cup-boycott',
  },
};

export default function SeppBlatterBoycottPage() {
  const infoBoxData = {
    title: "Blatter Statement Overview",
    image: {
      src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=1000",
      alt: "FIFA World Cup Trophy",
      caption: "The 2026 World Cup in the United States faces mounting criticism from former FIFA leadership."
    },
    items: [
      { label: "Source", value: "Sepp Blatter (Former FIFA President)" },
      { label: "FIFA Tenure", value: "1998–2015 (17 years)" },
      { label: "Call Type", value: "Boycott / Relocation Request" },
      { label: "Target Event", value: "FIFA World Cup 2026 (USA)" },
      { label: "Primary Concerns", value: "Political interference, travel bans, human rights" },
      { label: "Status", value: "Controversial / Unofficial" },
      { label: "FIFA Response", value: "No official statement" }
    ]
  };

  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "blatter-statement", label: "Blatter's Statement" },
    { id: "growing-chorus", label: "Growing Boycott Movement" },
    { id: "political-context", label: "Political Context" },
    { id: "fifa-reaction", label: "FIFA and US Soccer Reaction" }
  ];

  return (
    <ArticlePage
      title="Sepp Blatter Joins Calls for World Cup Boycott"
      subtitle="Disgraced former FIFA president adds controversial voice to growing movement against USA 2026 tournament"
      category="Sports"
      lastUpdated="February 16, 2026"
      infoBox={infoBoxData}
      tableOfContents={tocItems}
    >
      <Section id="overview" title="Overview">
        <p className="mb-4">
          Sepp Blatter, the former FIFA president who led world football's governing body from 1998 until his ouster in the 2015 corruption scandal, has unexpectedly joined calls for a boycott of the 2026 FIFA World Cup in the United States. The controversial statement adds a complicated dimension to growing concerns about the tournament's viability amid political upheaval.
        </p>
        <p className="mb-4">
          Blatter's intervention comes as multiple stakeholders—including human rights organizations, several national governments, and now football's former establishment—raise questions about whether the United States remains a suitable host given recent policy changes affecting international travel and diplomatic relations.
        </p>
      </Section>

      <Section id="blatter-statement" title="Blatter's Statement">
        <p className="mb-4">
          In an interview with Swiss media outlet Blick, Blatter stated that "FIFA made a serious error in awarding the 2026 tournament to the United States without adequate political safeguards." The 89-year-old, who remains banned from football activities until 2027, argued that current conditions make the U.S. "unfit to host a global celebration of football."
        </p>
        <p className="mb-4">
          Blatter specifically cited:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Travel Restrictions:</strong> Recent bans affecting citizens from multiple qualified nations</li>
          <li><strong>Political Interference:</strong> Concerns about government pressure on tournament operations</li>
          <li><strong>Human Rights Record:</strong> Treatment of immigrant communities and asylum seekers</li>
          <li><strong>Diplomatic Instability:</strong> Unpredictable foreign policy affecting international relations</li>
        </ul>
        <Quote source="Sepp Blatter, speaking to Blick">
          "I oversaw many World Cups. I know what it takes to welcome the world. The America of today is not the America that bid for this tournament. Players, fans, and officials from dozens of countries now face uncertainty about whether they can even enter the country. This is not acceptable for a World Cup host."
        </Quote>
      </Section>

      <Section id="growing-chorus" title="The Growing Boycott Movement">
        <p className="mb-4">
          Blatter's comments add to an increasingly vocal coalition calling for action against the U.S.-hosted tournament. The movement includes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Human Rights Watch:</strong> Issued a report documenting concerns about discriminatory policies affecting fans and players</li>
          <li><strong>European Parliament Members:</strong> Cross-party group of MEPs calling for FIFA to reconsider host arrangements</li>
          <li><strong>Player Associations:</strong> FIFPRO has raised concerns about player safety and freedom of movement</li>
          <li><strong>National Governments:</strong> Several qualified nations have expressed diplomatic reservations about sending delegations</li>
        </ul>
        <p className="mb-4">
          The UK Parliament has seen early-day motions signed by MPs from multiple parties urging the English and Scottish FAs to pressure FIFA for guarantees regarding player and fan safety.
        </p>
      </Section>

      <Section id="political-context" title="Political Context">
        <p className="mb-4">
          The controversy centers on recent U.S. policy changes that have created uncertainty for international visitors. Most significantly, travel restrictions affecting citizens from several countries that have qualified for the 2026 tournament—including Iran, Syria, and Yemen—have raised questions about whether those teams could participate fully.
        </p>
        <p className="mb-4">
          See also: <a href="/news/world-cup-travel-bans-trump-policy" className="text-blue-600 hover:underline">FIFA World Cup: What does president Donald Trump's foreign policy mean for USA 2026</a>
        </p>
        <p className="mb-4">
          The Trump administration's foreign policy shifts have created a diplomatic environment that many argue is incompatible with FIFA's requirements for open, welcoming tournament conditions. The situation is further complicated by the tournament's unique three-nation format involving the U.S., Canada, and Mexico.
        </p>
      </Section>

      <Section id="fifa-reaction" title="FIFA and US Soccer Reaction">
        <p className="mb-4">
          FIFA has declined to officially respond to Blatter's comments, with a spokesperson stating only that "planning for the 2026 FIFA World Cup continues on schedule across all three host nations." The organization has previously defended its host selection process and emphasized its confidence in U.S. organizational capabilities.
        </p>
        <p className="mb-4">
          US Soccer Federation president Cindy Parlow Cone issued a statement dismissing Blatter's intervention as "ironic coming from someone whose tenure was marked by the corruption that damaged world football." She added that "the United States remains fully committed to delivering an inclusive, welcoming tournament for all 48 participating nations."
        </p>
        <Quote source="Cindy Parlow Cone, US Soccer President">
          "We understand there are political debates happening, but our focus is on delivering the greatest World Cup in history. We've hosted before successfully, and we will do so again."
        </Quote>
      </Section>

      <References>
        <ul className="list-decimal pl-6 space-y-1">
          <li>Blick (Switzerland), "Blatter: USA unfit for World Cup", Feb 2026</li>
          <li>Human Rights Watch, "World Cup 2026: Travel Restrictions and Player Rights", Jan 2026</li>
          <li>The Guardian, "Growing calls for World Cup boycott amid US travel bans", Feb 2026</li>
          <li>Associated Press, "FIFA silent on Blatter boycott comments", Feb 2026</li>
          <li>Sky Sports, "US Soccer defends tournament preparations", Feb 2026</li>
        </ul>
      </References>

      <ExternalLinks
        links={[
          { label: "FIFA World Cup 2026 Official Site", href: "https://www.fifa.com/worldcup" },
          { label: "Human Rights Watch", href: "https://www.hrw.org" },
          { label: "US Soccer Federation", href: "https://www.ussoccer.com" },
          { label: "FIFPRO - World Player Union", href: "https://www.fifpro.org" }
        ]}
      />
    </ArticlePage>
  );
}
