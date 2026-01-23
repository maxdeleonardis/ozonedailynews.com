import type { Metadata } from "next";
import {
  ArticlePage,
  Section,
  DataTable,
  Notice,
  Quote,
  ExternalLinks,
} from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "The Joe Rogan Experience - Podcast Profile | ObjectWire",
  description:
    "Complete profile of The Joe Rogan Experience, the world's most popular podcast. Host info, notable episodes, Spotify deal, and cultural impact.",
  keywords: [
    "Joe Rogan",
    "The Joe Rogan Experience",
    "JRE",
    "podcast",
    "Spotify",
    "comedy",
    "interviews",
  ],
};

export default function JoeRoganPage() {
  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "host", label: "Host Profile" },
    { id: "format", label: "Show Format" },
    { id: "spotify-deal", label: "Spotify Deal" },
    { id: "notable-episodes", label: "Notable Episodes" },
    { id: "impact", label: "Cultural Impact" },
  ];

  return (
    <ArticlePage
      title="The Joe Rogan Experience"
      subtitle="The world's most popular podcast with over 2,000 episodes"
      category="Podcasts"
      lastUpdated="January 23, 2026"
      tableOfContents={tableOfContents}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        <strong>The Joe Rogan Experience</strong> (JRE) is a long-form conversation
        podcast hosted by <strong>Joe Rogan</strong>, launched in December 2009.
        With over 2,000 episodes and billions of downloads, it has become the most
        influential podcast in the world, featuring conversations with comedians,
        scientists, athletes, politicians, and cultural icons.
      </p>

      <Notice type="info">
        In 2020, Joe Rogan signed an exclusive licensing deal with Spotify worth
        an estimated $200-250 million, making it one of the largest podcast deals
        in history.
      </Notice>

      <Section id="overview" title="Overview">
        <p className="text-gray-700 mb-4">
          The Joe Rogan Experience began as a casual conversation between friends
          and evolved into a cultural phenomenon. What started in Rogan's home with
          a simple recording setup has grown into a professional production with
          millions of listeners per episode.
        </p>
        <p className="text-gray-700 mb-4">
          The podcast is known for its long-form format, typically running 2-4
          hours, allowing for deep, unfiltered conversations that explore topics
          ranging from comedy and MMA to science, philosophy, politics, and
          consciousness.
        </p>
        <p className="text-gray-700">
          JRE's success has redefined podcasting as a medium, proving that audiences
          crave authentic, unedited long-form content over traditional media's
          sound-bite culture.
        </p>
      </Section>

      <Section id="host" title="Host Profile">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Joe Rogan</h3>
        <p className="text-gray-700 mb-4">
          <strong>Joseph James Rogan</strong> (born August 11, 1967) is an American
          comedian, UFC commentator, podcast host, and former television presenter.
          His diverse career spans stand-up comedy, martial arts, television, and
          digital media.
        </p>

        <DataTable
          headers={["Category", "Details"]}
          rows={[
            ["Born", "August 11, 1967 (age 58)"],
            ["Location", "Newark, NJ; based in Austin, TX"],
            ["Career", "Comedian, UFC Commentator, Podcast Host"],
            ["Podcast Launch", "December 24, 2009"],
            ["Total Episodes", "2,000+ (as of January 2026)"],
            ["Platform", "Spotify (exclusive since 2020)"],
          ]}
        />

        <Quote source="Joe Rogan, Interview about JRE's success">
          "I'm just having conversations with people. The fact that it became this big thing is kind of crazy."
        </Quote>
      </Section>

      <Section id="format" title="Show Format">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Episode Structure</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Duration:</strong> Typically 2-4 hours of unedited conversation
          </li>
          <li>
            <strong>Frequency:</strong> Multiple episodes per week (3-5 typically)
          </li>
          <li>
            <strong>Format:</strong> Long-form interviews and conversations
          </li>
          <li>
            <strong>Setting:</strong> Casual studio environment in Austin, TX
          </li>
          <li>
            <strong>Video:</strong> Full video available on Spotify and YouTube clips
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Guest Categories</h3>
        <p className="text-gray-700 mb-4">
          The podcast features diverse guests across multiple categories:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Comedians and entertainers</li>
          <li>Scientists and researchers</li>
          <li>Athletes and MMA fighters</li>
          <li>Politicians and activists</li>
          <li>Authors and intellectuals</li>
          <li>Entrepreneurs and tech innovators</li>
          <li>Musicians and artists</li>
        </ul>
      </Section>

      <Section id="spotify-deal" title="Spotify Deal">
        <p className="text-gray-700 mb-4">
          In May 2020, Joe Rogan announced an exclusive multi-year licensing deal
          with Spotify, marking a watershed moment for podcasting. The deal,
          estimated at <strong>$200-250 million</strong>, made JRE a Spotify
          exclusive starting September 2020.
        </p>

        <DataTable
          headers={["Milestone", "Date", "Details"]}
          rows={[
            ["Deal Announced", "May 2020", "Multi-year licensing agreement with Spotify"],
            ["Exclusivity Begins", "September 2020", "JRE becomes Spotify exclusive"],
            ["Deal Value", "Estimated $200-250M", "One of largest podcast deals ever"],
            ["Renewal", "2024", "Deal renewed for additional years"],
            ["Current Status", "2026", "Continues as Spotify exclusive"],
          ]}
        />

        <Notice type="info">
          The Spotify deal allowed Rogan to maintain creative control while Spotify
          gained exclusive rights to distribute the podcast, transforming Spotify's
          position in the podcast market.
        </Notice>
      </Section>

      <Section id="notable-episodes" title="Notable Episodes">
        <p className="text-gray-700 mb-4">
          The Joe Rogan Experience has hosted some of the most viral and influential
          podcast episodes in history. Here are some of the most notable:
        </p>

        <DataTable
          headers={["Guest", "Episode", "Year", "Significance"]}
          rows={[
            [
              "Elon Musk",
              "#1169",
              "2018",
              "Viral moment smoking on podcast, Tesla stock impact",
            ],
            [
              "Bernie Sanders",
              "#1330",
              "2019",
              "Presidential candidate's appeal to younger voters",
            ],
            [
              "Edward Snowden",
              "#1368",
              "2019",
              "NSA whistleblower's rare public conversation",
            ],
            [
              "Alex Jones",
              "Multiple",
              "Various",
              "Controversial conspiracy theorist appearances",
            ],
            [
              "Neil deGrasse Tyson",
              "Multiple",
              "Various",
              "Science communication and astrophysics discussions",
            ],
            [
              "Kanye West",
              "#1554",
              "2020",
              "Unfiltered conversation during presidential campaign",
            ],
            [
              "Mike Tyson",
              "Multiple",
              "Various",
              "Legendary boxer's life story and philosophy",
            ],
            [
              "Jordan Peterson",
              "Multiple",
              "Various",
              "Psychology, philosophy, and cultural debates",
            ],
          ]}
        />

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Most Downloaded Episodes
        </h3>
        <p className="text-gray-700 mb-4">
          Several JRE episodes have exceeded 50+ million views/listens, with Elon
          Musk's appearances consistently ranking among the most popular. The podcast's
          reach extends far beyond typical podcast metrics, with clips generating
          billions of views across YouTube and social media.
        </p>
      </Section>

      <Section id="impact" title="Cultural Impact">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Influence on Media Landscape
        </h3>
        <p className="text-gray-700 mb-4">
          The Joe Rogan Experience has fundamentally changed how audiences consume
          media and how public figures communicate with the public:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Long-form content revolution:</strong> Proved audiences want
            depth over sound bites
          </li>
          <li>
            <strong>Alternative media influence:</strong> Rivaling traditional media
            in reach and impact
          </li>
          <li>
            <strong>Political impact:</strong> Presidential candidates and major
            politicians seek JRE appearances
          </li>
          <li>
            <strong>Career launcher:</strong> Guest appearances can transform careers
            and public perception
          </li>
          <li>
            <strong>Free speech debates:</strong> Center of conversations about
            content moderation and censorship
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Impact</h3>
        <p className="text-gray-700 mb-4">
          JRE's success has inspired thousands of podcasts and changed the economics
          of podcasting. The Spotify deal demonstrated podcasts could command
          massive licensing fees, leading to a podcast gold rush with major deals
          for creators across the industry.
        </p>

        <Quote source="Media Analyst, Podcast Industry Report 2025">
          "Joe Rogan didn't just build a podcast. He built an alternative media empire that challenges traditional gatekeepers."
        </Quote>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Controversies</h3>
        <p className="text-gray-700 mb-4">
          The podcast has faced controversies over COVID-19 discussions, guest
          selections, and content moderation. These debates have sparked broader
          conversations about platform responsibility, free speech, and the role of
          alternative media in public discourse.
        </p>
      </Section>

      <ExternalLinks
        links={[
          {
            label: "Listen on Spotify",
            href: "https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk",
          },
          {
            label: "Official Website",
            href: "https://www.joerogan.com",
          },
          {
            label: "YouTube Clips",
            href: "https://www.youtube.com/@joerogan",
          },
        ]}
      />
    </ArticlePage>
  );
}
