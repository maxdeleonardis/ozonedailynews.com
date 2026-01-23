import type { Metadata } from "next";
import {
  ArticlePage,
  Section,
  DataTable,
  Quote,
  ExternalLinks,
} from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "Drake - Hip-Hop Icon & Most Streamed Artist | ObjectWire",
  description:
    "Complete profile of Drake, the most streamed artist of all time. Discography, awards, streaming records, and latest news from the 6 God.",
  keywords: [
    "Drake",
    "hip-hop",
    "OVO",
    "most streamed artist",
    "Toronto rapper",
    "Gods Plan",
  ],
};

export default function DrakePage() {
  const infoBox = {
    title: "Drake",
    items: [
      { label: "Real Name", value: "Aubrey Drake Graham" },
      { label: "Born", value: "October 24, 1986 (age 39)" },
      { label: "Origin", value: "Toronto, Ontario, Canada" },
      { label: "Genre", value: "Hip-Hop, R&B, Pop" },
      { label: "Active", value: "2001–present" },
      { label: "Labels", value: "OVO Sound, Republic, Young Money" },
      { label: "Monthly Listeners", value: "85 million+" },
      { label: "Awards", value: "5 Grammys, 34 Billboard Music Awards" },
    ],
  };

  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "career", label: "Career" },
    { id: "discography", label: "Discography" },
    { id: "records", label: "Records & Achievements" },
    { id: "business", label: "Business Ventures" },
    { id: "upcoming", label: "Upcoming Projects" },
  ];

  const relatedLinks = [
    {
      href: "/artists",
      label: "All Artists",
      description: "Back to top artists rankings",
    },
    {
      href: "/artists/yeat",
      label: "Yeat",
      description: "Rising hip-hop star",
    },
  ];

  return (
    <ArticlePage
      title="Drake"
      subtitle="The most streamed artist of all time"
      category="Music Artist"
      lastUpdated="January 23, 2026"
      infoBox={infoBox}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        <strong>Drake</strong> (Aubrey Drake Graham) is a Canadian rapper,
        singer, and actor who has become one of the most commercially successful
        and influential artists in modern music history. With over{" "}
        <strong>85 million monthly listeners</strong> and the title of{" "}
        <strong>most streamed artist of all time</strong>, Drake has dominated
        hip-hop and pop culture for over a decade.
      </p>

      <Section id="overview" title="Overview">
        <p className="text-gray-700 mb-4">
          Drake first gained recognition as an actor on the teen drama series
          Degrassi: The Next Generation in the early 2000s before transitioning
          to music. He signed with Lil Waynes Young Money Entertainment in 2009
          and released his debut album Thank Me Later in 2010, which debuted at
          #1 on the Billboard 200.
        </p>
        <p className="text-gray-700 mb-4">
          Known for blending rap, R&B, and pop influences, Drake has created a
          signature sound that balances introspective lyrics, melodic hooks, and
          party anthems. His emotional vulnerability and crossover appeal have
          made him one of the most ubiquitous artists across all genres.
        </p>
      </Section>

      <Section id="career" title="Career">
        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Early Career (2006-2009)
        </h3>
        <p className="text-gray-700 mb-4">
          While still acting on Degrassi, Drake released his first mixtape Room
          for Improvement in 2006. His third mixtape, So Far Gone (2009),
          featuring Hit Em Up Style and Best I Ever Had, became a viral success
          and caught the attention of major labels.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Commercial Dominance (2010-2015)
        </h3>
        <p className="text-gray-700 mb-4">
          Drakes first three studio albums - Thank Me Later (2010), Take Care
          (2011), and Nothing Was the Same (2013) - all debuted at #1 and
          established him as a commercial powerhouse. Take Care won the Grammy
          for Best Rap Album.
        </p>

        <Quote source="The New York Times, 2013">
          Drake has become the defining figure of hip-hop in the streaming era,
          masterfully blending genres and emotions.
        </Quote>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Streaming Era King (2016-Present)
        </h3>
        <p className="text-gray-700 mb-4">
          With Views (2016), Scorpion (2018), and Certified Lover Boy (2021),
          Drake solidified his status as the streaming eras biggest star. His
          2018 single Gods Plan topped charts worldwide and won Grammy for Best
          Rap Song. For All the Dogs (2023) continued his chart dominance.
        </p>
      </Section>

      <Section id="discography" title="Discography">
        <DataTable
          headers={["Year", "Album", "Peak Position", "Certification"]}
          rows={[
            ["2010", "Thank Me Later", "#1", "Platinum"],
            ["2011", "Take Care", "#1", "6x Platinum"],
            ["2013", "Nothing Was the Same", "#1", "4x Platinum"],
            ["2015", "If Youre Reading This Its Too Late", "#1", "3x Platinum"],
            ["2016", "Views", "#1", "8x Platinum"],
            ["2018", "Scorpion", "#1", "5x Platinum"],
            ["2021", "Certified Lover Boy", "#1", "3x Platinum"],
            ["2022", "Honestly, Nevermind", "#1", "Platinum"],
            ["2023", "For All the Dogs", "#1", "2x Platinum"],
          ]}
        />
      </Section>

      <Section id="records" title="Records & Achievements">
        <p className="text-gray-700 mb-4">
          Drake holds numerous records in the music industry:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Most streamed artist of all time</strong> on Spotify
          </li>
          <li>
            <strong>320+ entries on Billboard Hot 100</strong> - most in history
          </li>
          <li>
            <strong>13 #1 albums</strong> on Billboard 200
          </li>
          <li>
            <strong>34 Billboard Music Awards</strong> - most wins ever
          </li>
          <li>
            <strong>5 Grammy Awards</strong> from 51 nominations
          </li>
          <li>
            <strong>Gods Plan:</strong> First song to surpass 1 billion streams
            on Spotify
          </li>
          <li>
            <strong>One Dance:</strong> Most streamed song on Spotify (multiple
            years)
          </li>
        </ul>
      </Section>

      <Section id="business" title="Business Ventures">
        <h3 className="text-xl font-bold text-gray-900 mb-3">OVO Sound</h3>
        <p className="text-gray-700 mb-4">
          Drake co-founded OVO Sound record label in 2012 with longtime
          collaborator Noah 40 Shebib and Oliver El-Khatib. The label has signed
          artists like PartyNextDoor, Majid Jordan, and Roy Woods.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Other Ventures</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>October s Very Own (OVO):</strong> Fashion and lifestyle
            brand
          </li>
          <li>
            <strong>Virginia Black Whiskey:</strong> Spirit brand partnership
          </li>
          <li>
            <strong>Nocta:</strong> Nike collaboration line
          </li>
          <li>
            <strong>DreamCrew Entertainment:</strong> Production company
          </li>
          <li>
            <strong>Toronto Raptors Ambassador:</strong> Official global
            ambassador
          </li>
        </ul>
      </Section>

      <Section id="upcoming" title="Upcoming Projects">
        <h3 className="text-xl font-bold text-gray-900 mb-3">2026 Plans</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>New Music:</strong> Album expected Q2/Q3 2026
          </li>
          <li>
            <strong>OVO Fest:</strong> Annual Toronto festival returning summer
            2026
          </li>
          <li>
            <strong>Collaborations:</strong> Working with various artists on
            features
          </li>
          <li>
            <strong>Business Expansion:</strong> Growing OVO brand and
            partnerships
          </li>
        </ul>
      </Section>

      <ExternalLinks
        links={[
          {
            href: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
            label: "Drake on Spotify",
          },
          {
            href: "https://www.instagram.com/champagnepapi",
            label: "Drake on Instagram",
          },
          {
            href: "https://www.octobersveryown.com",
            label: "OVO Official Website",
          },
        ]}
      />
    </ArticlePage>
  );
}
