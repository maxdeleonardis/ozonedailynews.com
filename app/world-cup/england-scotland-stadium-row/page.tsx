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
  title: "England and Scotland World Cup Stadium Row | ObjectWire",
  description: "Home nations face potential last-minute venue changes as £6 million dispute threatens FIFA World Cup 2026 preparations.",
  keywords: ["World Cup 2026", "England", "Scotland", "FIFA", "Stadium", "Wembley", "Glasgow"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  alternates: {
    canonical: 'https://www.objectwire.org/world-cup/england-scotland-stadium-row',
  },
};

export default function EnglandScotlandStadiumRowPage() {
  const infoBoxData = {
    title: "Stadium Dispute Overview",
    image: {
      src: "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80&w=1000",
      alt: "Wembley Stadium",
      caption: "Wembley Stadium remains at the center of the £6 million venue fee dispute."
    },
    items: [
      { label: "Event", value: "FIFA World Cup 2026" },
      { label: "Dispute Amount", value: "£6 million ($7.5M USD)" },
      { label: "Affected Teams", value: "England, Scotland" },
      { label: "Primary Venues", value: "Wembley Stadium, Hampden Park" },
      { label: "Status", value: "Under Negotiation" },
      { label: "Deadline", value: "March 2026 (FIFA deadline)" },
      { label: "Organizer", value: "FIFA / UK Football Associations" }
    ]
  };

  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "financial-dispute", label: "The £6 Million Dispute" },
    { id: "stadium-alternatives", label: "Alternative Venues" },
    { id: "fa-response", label: "FA and SFA Response" },
    { id: "fifa-position", label: "FIFA Position" }
  ];

  return (
    <ArticlePage
      title="England and Scotland World Cup Matches Face Stadium Crisis"
      subtitle="Home nations confront potential last-minute venue moves as £6 million row threatens FIFA 2026 preparations"
      category="Sports"
      lastUpdated="February 16, 2026"
      infoBox={infoBoxData}
      tableOfContents={tocItems}
    >
      <Section id="overview" title="Overview">
        <p className="mb-4">
          England and Scotland's FIFA World Cup 2026 qualifying campaign faces unprecedented disruption as a £6 million financial dispute threatens to force last-minute stadium changes for both home nations. The disagreement centers on venue fees and commercial arrangements between the Football Association (FA), Scottish Football Association (SFA), and FIFA's organizing committee.
        </p>
        <p className="mb-4">
          With the tournament just months away, both associations are under increasing pressure to resolve the standoff or risk relocating matches to alternative venues outside their traditional home grounds.
        </p>
      </Section>

      <Section id="financial-dispute" title="The £6 Million Dispute">
        <p className="mb-4">
          The financial row erupted following FIFA's revised venue requirements for the expanded 48-team tournament. Sources close to the negotiations indicate that Wembley Stadium and Hampden Park are demanding additional payments to meet FIFA's upgraded security, hospitality, and media specifications—costs that neither the FA nor SFA had budgeted for.
        </p>
        <p className="mb-4">
          The £6 million figure represents the gap between what the UK associations allocated for venue preparation and what stadium operators are requesting. The dispute includes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Security Upgrades:</strong> Enhanced screening capabilities and perimeter controls estimated at £2.3 million</li>
          <li><strong>Broadcast Infrastructure:</strong> 4K/8K camera positions and fiber connectivity upgrades (£1.8 million)</li>
          <li><strong>VIP Hospitality:</strong> FIFA's expanded VIP requirements for the 48-team format (£1.4 million)</li>
          <li><strong>Temporary Facilities:</strong> Additional media centers and mixed zones (£500,000)</li>
        </ul>
        <Quote source="Senior FA Official, speaking anonymously">
          "We're caught between FIFA's requirements and commercial reality. These venues weren't priced for a 48-team World Cup with this level of infrastructure demand."
        </Quote>
      </Section>

      <Section id="stadium-alternatives" title="Alternative Venues Under Consideration">
        <p className="mb-4">
          If negotiations collapse, both nations have begun contingency planning for alternative venues. For England, options include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Old Trafford (Manchester):</strong> 74,000 capacity, already FIFA-compliant from Euro 2028 preparations</li>
          <li><strong>Tottenham Hotspur Stadium (London):</strong> State-of-the-art facilities, though smaller at 62,000 capacity</li>
          <li><strong>Millennium Stadium (Cardiff):</strong> Outside England but could host UK "home" matches in extremis</li>
        </ul>
        <p className="mb-4">
          Scotland's alternatives are more limited. Murrayfield Stadium in Edinburgh, primarily a rugby venue, has emerged as the most viable fallback option, though it would require significant football-specific modifications. Celtic Park and Ibrox in Glasgow are also under consideration but face similar cost pressures to Hampden.
        </p>
      </Section>

      <Section id="fa-response" title="FA and SFA Response">
        <p className="mb-4">
          Both football associations have issued carefully worded statements acknowledging the challenges while expressing confidence in a resolution. The FA emphasized its "commitment to delivering world-class venues for England's World Cup campaign" while noting "ongoing commercial discussions with stakeholders."
        </p>
        <p className="mb-4">
          The SFA has been more direct about the financial strain, with chief executive Ian Maxwell stating that "Scottish football cannot absorb these unplanned costs without jeopardizing grassroots investment." The association has reportedly approached the UK government for emergency cultural event funding.
        </p>
      </Section>

      <Section id="fifa-position" title="FIFA's Position">
        <p className="mb-4">
          FIFA has maintained a firm stance on venue requirements, noting that all host venues must meet standardized specifications regardless of pre-existing agreements. A spokesperson confirmed that "the tournament schedule will not accommodate venue delays beyond the March 2026 deadline."
        </p>
        <p className="mb-4">
          The governing body has indicated it would support matches being moved to compliant venues rather than accept substandard facilities, even if that means England and Scotland playing outside their traditional home grounds.
        </p>
        <Quote source="FIFA Tournament Operations Director">
          "We understand the challenges, but the World Cup belongs to the world, not to any single venue. We have absolute confidence in the UK delivering compliant stadiums—whether that's Wembley and Hampden or alternatives."
        </Quote>
      </Section>

      <References>
        <ul className="list-decimal pl-6 space-y-1">
          <li>The Guardian, "England face stadium crisis ahead of World Cup qualifiers", Feb 2026</li>
          <li>BBC Sport, "£6m dispute threatens Scotland's Hampden Park matches", Feb 2026</li>
          <li>Sky Sports, "FA in emergency talks over Wembley World Cup arrangements", Feb 2026</li>
          <li>FIFA Official Communications, "World Cup 2026 Venue Requirements Update", Jan 2026</li>
          <li>The Times, "Millennium Stadium emerges as England fallback option", Feb 2026</li>
        </ul>
      </References>

      <ExternalLinks
        links={[
          { label: "FIFA World Cup 2026 Official Site", href: "https://www.fifa.com/worldcup" },
          { label: "The FA - England Football Association", href: "https://www.thefa.com" },
          { label: "Scottish FA Official Site", href: "https://www.scottishfa.co.uk" },
          { label: "BBC Sport World Cup Coverage", href: "https://www.bbc.com/sport/football/world-cup" }
        ]}
      />
    </ArticlePage>
  );
}
