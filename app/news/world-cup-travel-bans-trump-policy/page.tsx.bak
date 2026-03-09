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
  title: "World Cup Travel Bans: Trump's Foreign Policy Impact | ObjectWire",
  description: "Citizens from multiple qualified nations face entry restrictions as Trump's foreign policy creates unprecedented challenges for FIFA World Cup 2026.",
  keywords: ["Donald Trump", "World Cup 2026", "Travel Ban", "FIFA", "Foreign Policy", "USA", "Immigration"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  alternates: {
    canonical: 'https://www.objectwire.org/news/world-cup-travel-bans-trump-policy',
  },
};

export default function WorldCupTravelBansPage() {
  const infoBoxData = {
    title: "Travel Ban Overview",
    image: {
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1000",
      alt: "US Border Control",
      caption: "New travel restrictions threaten to prevent qualified nations from participating in World Cup 2026."
    },
    items: [
      { label: "Policy Source", value: "Trump Administration" },
      { label: "Affected Tournament", value: "FIFA World Cup 2026" },
      { label: "Host Nation", value: "United States (with Canada, Mexico)" },
      { label: "Qualified Nations Affected", value: "Multiple (Iran, Syria, Yemen, others)" },
      { label: "Travel Ban Status", value: "Active / Expanding" },
      { label: "FIFA Response", value: "Under Review" },
      { label: "Parliamentary Action", value: "MPs call for US expulsion consideration" }
    ]
  };

  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "affected-nations", label: "Affected Nations" },
    { id: "trump-policy", label: "Trump's Foreign Policy" },
    { id: "uk-parliament", label: "UK Parliament Action" },
    { id: "fifa-dilemma", label: "FIFA's Dilemma" },
    { id: "alternative-solutions", label: "Alternative Solutions" }
  ];

  return (
    <ArticlePage
      title="World Cup Travel Bans: What Trump's Foreign Policy Means for USA 2026"
      subtitle="Citizens from qualified nations face entry restrictions as political shifts create unprecedented challenges for global football's premier tournament"
      category="Politics"
      lastUpdated="February 16, 2026"
      infoBox={infoBoxData}
      tableOfContents={tocItems}
    >
      <Section id="overview" title="Overview">
        <p className="mb-4">
          The 2026 FIFA World Cup faces a crisis unprecedented in tournament history: multiple nations that have qualified to compete may be unable to send their teams, staff, or supporters to the United States due to travel restrictions imposed by the Trump administration. The situation has sparked international condemnation and calls for FIFA to take extraordinary action—including potentially expelling the United States as a host nation.
        </p>
        <p className="mb-4">
          The travel ban crisis represents the most significant challenge to World Cup preparations since the tournament was awarded to the three-nation North American bid in 2018. With the tournament just months away, football's governing body faces a choice between enforcing its inclusive values and accepting a diminished, politically compromised competition.
        </p>
      </Section>

      <Section id="affected-nations" title="Affected Nations">
        <p className="mb-4">
          Citizens from several countries that have qualified for the 2026 World Cup have been explicitly targeted by recent U.S. travel restrictions. The affected qualified nations include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Iran:</strong> Asian Football Confederation qualifiers; entry suspended under revived travel ban</li>
          <li><strong>Syria:</strong> Historic qualification threatened by blanket entry denial</li>
          <li><strong>Yemen:</strong> Despite qualifying, team faces inability to enter host country</li>
          <li><strong>Venezuela:</strong> Enhanced visa scrutiny effectively preventing travel</li>
          <li><strong>Cuba:</strong> Qualified via CONCACAF; travel restrictions remain in force</li>
        </ul>
        <p className="mb-4">
          The restrictions extend beyond players to coaching staff, medical teams, federation officials, and supporters. Iranian federation sources have confirmed that even with FIFA accreditation, visa applications are being systematically denied or left in administrative limbo.
        </p>
        <Quote source="Iranian Football Federation Spokesperson">
          "Our players earned their place on the pitch. Now they face being excluded by politics. This is not the World Cup we qualified for."
        </Quote>
      </Section>

      <Section id="trump-policy" title="Trump's Foreign Policy Impact">
        <p className="mb-4">
          The Trump administration's second term has seen a dramatic expansion of immigration and travel restrictions that directly impact World Cup participation. Key policy changes include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Revived Travel Ban:</strong> Expanded version affecting citizens from 13 countries, including four World Cup qualifiers</li>
          <li><strong>Enhanced Vetting:</strong> "Extreme vetting" procedures causing months-long delays for applicants from Muslim-majority countries</li>
          <li><strong>Diplomatic Ruptures:</strong> Withdrawal from international agreements affecting consular cooperation</li>
          <li><strong>Visa Processing Slowdown:</strong> Deliberate slowdown in B-1/B-2 visa processing for targeted nations</li>
        </ul>
        <p className="mb-4">
          See also: <a href="/news/sepp-blatter-world-cup-boycott" className="text-blue-600 hover:underline">Ex-FIFA president Sepp Blatter joins those calling for boycott of World Cup in U.S.</a>
        </p>
        <p className="mb-4">
          For more on the Trump administration's broader foreign policy impact on international events, see our coverage of <a href="/news/trump-international-sports-impact" className="text-blue-600 hover:underline">international sports relations under the Trump presidency</a>.
        </p>
      </Section>

      <Section id="uk-parliament" title="UK Parliamentary Action">
        <p className="mb-4">
          The crisis has prompted formal political action in the United Kingdom, where a cross-party group of MPs has tabled an early day motion calling on FIFA to "consider all available options, including expulsion of the United States from tournament hosting, until such time as the country demonstrates its commitment to welcoming all qualified nations without discrimination."
        </p>
        <p className="mb-4">
          The motion, signed by Labour, Liberal Democrat, SNP, and Green MPs, argues that "the spirit of the World Cup requires equal participation regardless of nationality, religion, or political circumstance." It notes that the 2026 tournament's original bid commitments included guarantees of open borders for all participants.
        </p>
        <Quote source="Layla Moran MP (Liberal Democrat), Motion Co-Sponsor">
          "FIFA awarded this tournament to the United States based on certain conditions. Those conditions are now being violated. The integrity of the competition is at stake. If the U.S. cannot host all qualified teams equally, it should not host at all."
        </Quote>
      </Section>

      <Section id="fifa-dilemma" title="FIFA's Dilemma">
        <p className="mb-4">
          FIFA finds itself in an impossible position. The organization's statutes explicitly prohibit political interference in football, yet the current crisis stems from the host nation's government policies rather than football federation actions. Potential responses include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Diplomatic Pressure:</strong> Using the threat of tournament relocation to negotiate exemptions with the U.S. government</li>
          <li><strong>Venue Redistribution:</strong> Moving affected teams' matches to Canadian or Mexican venues not subject to U.S. entry restrictions</li>
          <li><strong>Sanctions:</strong> Financial penalties or warnings to US Soccer Federation</li>
          <li><strong>Expulsion:</strong> The nuclear option—removing the U.S. as host entirely (logistically nearly impossible)</li>
          <li><strong>Compromise:</strong> Accepting a diminished tournament with some teams unable to participate</li>
        </ul>
        <p className="mb-4">
          FIFA President Gianni Infantino has held emergency consultations with the State Department but has publicly maintained that "solutions are being explored" without committing to specific actions.
        </p>
      </Section>

      <Section id="alternative-solutions" title="Alternative Solutions Under Discussion">
        <p className="mb-4">
          Behind closed doors, multiple contingency plans are being discussed:
        </p>
        <p className="mb-4">
          <strong>Canadian/Mexican Redirection:</strong> The most viable option involves routing all affected teams through Canada or Mexico for their group stage matches. Both countries have confirmed they would not apply equivalent restrictions. However, this creates inequities in travel burden and tournament experience.
        </p>
        <p className="mb-4">
          <strong>Diplomatic Exemptions:</strong> Negotiating special FIFA accreditation that overrides standard visa requirements—a system used for UN events but unprecedented for sports tournaments.
        </p>
        <p className="mb-4">
          <strong>Delayed Relocation:</strong> Some officials have floated the possibility of moving the entire tournament to alternative hosts, though this faces insurmountable logistical and financial obstacles with the event so near.
        </p>
      </Section>

      <References>
        <ul className="list-decimal pl-6 space-y-1">
          <li>BBC News, "FIFA World Cup: What does president Donald Trump's foreign policy mean for USA 2026", Jan 2026</li>
          <li>UK Parliament Early Day Motions, "Motion on FIFA World Cup Host Compliance", Feb 2026</li>
          <li>The Washington Post, "Travel ban expansion affects World Cup qualifiers", Feb 2026</li>
          <li>Reuters, "Iran football federation protests US visa denials", Feb 2026</li>
          <li>Sports Illustrated, "The impossible logistics of moving the 2026 World Cup", Feb 2026</li>
          <li>The Guardian, "FIFA explores Canadian venue options for banned teams", Feb 2026</li>
        </ul>
      </References>

      <ExternalLinks
        links={[
          { label: "FIFA World Cup 2026 Official Site", href: "https://www.fifa.com/worldcup" },
          { label: "US State Department Travel Advisories", href: "https://travel.state.gov" },
          { label: "UK Parliament Early Day Motions", href: "https://edm.parliament.uk" },
          { label: "FIFPRO Player Union Statement", href: "https://www.fifpro.org" }
        ]}
      />
    </ArticlePage>
  );
}
