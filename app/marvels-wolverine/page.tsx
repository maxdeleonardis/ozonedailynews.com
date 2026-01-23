import type { Metadata } from "next";
import {
  ArticlePage,
  Section,
  DataTable,
  Notice,
  ExternalLinks,
} from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "Marvels Wolverine - PS5 Exclusive Game | ObjectWire",
  description:
    "Everything you need to know about Marvels Wolverine, the brutal single-player adventure by Insomniac Games. Release date, gameplay, and latest news.",
  keywords: [
    "Marvels Wolverine",
    "Wolverine game",
    "Insomniac Games",
    "PS5 exclusive",
    "Logan",
    "X-Men",
    "PlayStation 5",
  ],
};

export default function WolverineGamePage() {
  const infoBox = {
    title: "Marvels Wolverine",
    items: [
      { label: "Developer", value: "Insomniac Games" },
      { label: "Publisher", value: "Sony Interactive Entertainment" },
      { label: "Platform", value: "PlayStation 5 (Exclusive)" },
      { label: "Genre", value: "Action-Adventure" },
      { label: "Release Date", value: "TBA (Expected 2026-2027)" },
      { label: "Rating", value: "M for Mature (Expected)" },
      { label: "Engine", value: "Insomniac Engine" },
      { label: "Announced", value: "September 9, 2021" },
    ],
  };

  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "gameplay", label: "Expected Gameplay" },
    { id: "story", label: "Story & Setting" },
    { id: "features", label: "Key Features" },
    { id: "development", label: "Development" },
    { id: "release", label: "Release Window" },
  ];

  const relatedLinks = [
    {
      href: "/007-first-light",
      label: "007: First Light",
      description: "Another highly anticipated PS5 exclusive",
    },
    {
      href: "/resident-evil-requiem",
      label: "Resident Evil: Requiem",
      description: "Upcoming survival horror game",
    },
  ];

  return (
    <ArticlePage
      title="Marvels Wolverine"
      subtitle="Brutal PS5 exclusive action-adventure game by Insomniac Games"
      category="Video Game"
      lastUpdated="January 23, 2026"
      infoBox={infoBox}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        <strong>Marvels Wolverine</strong> is an upcoming action-adventure game
        developed by <strong>Insomniac Games</strong> exclusively for the{" "}
        <strong>PlayStation 5</strong>. From the award-winning creators of
        Marvels Spider-Man, this mature-rated title will feature the iconic
        antihero <strong>Logan</strong> in a brutal, narrative-driven
        experience.
      </p>

      <Notice type="info">
        This game was announced at the PlayStation Showcase on September 9,
        2021. Development details are limited, with an official release date yet
        to be announced.
      </Notice>

      <Section id="overview" title="Overview">
        <p className="text-gray-700 mb-4">
          Marvels Wolverine marks Insomniac Games second foray into the Marvel
          universe, following their critically acclaimed Spider-Man series.
          Unlike the family-friendly wall-crawler, Wolverine promises a darker,
          more mature experience that embraces the characters brutal nature and
          complex past.
        </p>
        <p className="text-gray-700 mb-4">
          The game will be a single-player, narrative-driven action-adventure
          that explores Logans violent history, his struggles with his berserker
          rage, and his journey from weapon to hero. Set in the same universe as
          Insomniacs Spider-Man games, it offers potential for crossover
          elements and shared storytelling.
        </p>
        <p className="text-gray-700">
          As a PlayStation 5 exclusive, the game will leverage the consoles full
          capabilities—from haptic feedback simulating the sensation of
          adamantium claws extending, to 3D audio bringing the sounds of combat
          to life.
        </p>
      </Section>

      <Section id="gameplay" title="Expected Gameplay">
        <p className="text-gray-700 mb-4">
          While official gameplay has not been revealed, several features are
          anticipated based on the characters abilities and Insomniacs
          development style:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Combat System
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Visceral Melee Combat:</strong> Wolverines adamantium claws
            will be the primary weapon, featuring brutal close-quarters combat
          </li>
          <li>
            <strong>Berserker Rage:</strong> A rage mechanic that enhances
            abilities but may affect control or decision-making
          </li>
          <li>
            <strong>Healing Factor:</strong> Regenerative abilities that allow
            aggressive gameplay styles
          </li>
          <li>
            <strong>Environmental Takedowns:</strong> Use surroundings to
            dispatch enemies creatively
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          PlayStation 5 Features
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>DualSense haptic feedback for claw extensions and impacts</li>
          <li>Adaptive trigger resistance during combat</li>
          <li>3D audio for immersive environmental awareness</li>
          <li>Fast SSD loading for seamless world traversal</li>
          <li>Ray-traced graphics and visual effects</li>
        </ul>
      </Section>

      <Section id="story" title="Story & Setting">
        <p className="text-gray-700 mb-4">
          The narrative will explore Logans complex history and inner struggles.
          Key story elements expected to be featured:
        </p>

        <DataTable
          headers={["Story Element", "Description"]}
          rows={[
            [
              "Weapon X Program",
              "Logans traumatic past as part of the experimental program that gave him adamantium",
            ],
            [
              "Berserker Nature",
              "The struggle between Logan the man and the beast within",
            ],
            [
              "Redemption Arc",
              "Journey from weapon to hero, finding humanity despite his violent nature",
            ],
            [
              "Marvel Universe",
              "Connections to Insomniacs Spider-Man universe with potential crossovers",
            ],
            [
              "Iconic Villains",
              "Likely appearances from Sabretooth, Silver Samurai, Lady Deathstrike, or Omega Red",
            ],
          ]}
        />

        <p className="text-gray-700 mt-4">
          The game is expected to feature multiple locations, potentially
          including Canadian wilderness, underground fight clubs, secret
          facilities, and possibly Madripoor—the crime-ridden island nation
          associated with Wolverine in the comics.
        </p>
      </Section>

      <Section id="features" title="Key Features">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Anticipated Features
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Mature Rating:</strong> First M-rated game from Insomniac in
            years, allowing for brutal, uncompromising storytelling
          </li>
          <li>
            <strong>Character-Driven Narrative:</strong> Deep exploration of
            Logans psyche and relationships
          </li>
          <li>
            <strong>Cinematic Presentation:</strong> Insomniacs signature
            storytelling with motion-capture performances
          </li>
          <li>
            <strong>Skill Progression:</strong> Upgrade Wolverines abilities,
            combat moves, and rage powers
          </li>
          <li>
            <strong>Multiple Costumes:</strong> Classic yellow and blue, brown
            costume, X-Force, and other iconic suits
          </li>
          <li>
            <strong>X-Men Connections:</strong> Potential cameos from Cyclops,
            Jean Grey, Storm, or Professor X
          </li>
          <li>
            <strong>Explorable World:</strong> Mix of linear story missions and
            open exploration areas
          </li>
          <li>
            <strong>Photo Mode:</strong> Capture brutal combat moments and
            cinematic scenes
          </li>
        </ul>
      </Section>

      <Section id="development" title="Development">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Insomniac Games</h3>
        <p className="text-gray-700 mb-4">
          Founded in 1994, Insomniac Games is one of the most respected studios
          in the industry. They have created beloved franchises like Ratchet and
          Clank, Resistance, and most recently, Marvels Spider-Man. Their
          Spider-Man games have sold over 33 million copies combined and won
          numerous awards.
        </p>

        <DataTable
          headers={["Metric", "Details"]}
          rows={[
            ["Founded", "1994"],
            ["Headquarters", "Burbank, California"],
            ["Employees", "400+"],
            ["Parent Company", "Sony Interactive Entertainment (since 2019)"],
            ["Notable Games", "Spider-Man, Ratchet & Clank, Resistance"],
            ["Awards", "Multiple Game of the Year wins"],
          ]}
        />

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Key Leadership
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Brian Horton:</strong> Creative Director (previously worked
            on Crystal Dynamics titles)
          </li>
          <li>
            <strong>Cameron Christian:</strong> Game Director
          </li>
          <li>Both are industry veterans with extensive AAA experience</li>
        </ul>

        <Notice type="warning">
          In December 2023, Insomniac Games suffered a ransomware attack that
          leaked early development footage and documents. The studio has since
          enhanced security protocols and continued development.
        </Notice>
      </Section>

      <Section id="release" title="Release Window">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Current Speculation
        </h3>
        <p className="text-gray-700 mb-4">
          With no official release date announced, industry analysts and fans
          have proposed the following estimates:
        </p>

        <DataTable
          headers={["Window", "Likelihood", "Reasoning"]}
          rows={[
            [
              "Late 2026",
              "Possible",
              "Would align with typical 5-year development cycle for AAA games",
            ],
            [
              "2027",
              "Most Likely",
              "Gives Insomniac time to polish after Spider-Man 2 and Ratchet releases",
            ],
            [
              "2028+",
              "Conservative",
              "If scope expands or development faces challenges",
            ],
          ]}
        />

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          What Were Watching
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>PlayStation Showcase events for gameplay reveals</li>
          <li>Game Awards and other major gaming presentations</li>
          <li>Sony fiscal year projections and release calendars</li>
          <li>Insomniac Games job listings indicating development phase</li>
          <li>Industry insider reports and leaks</li>
        </ul>
      </Section>

      <ExternalLinks
        links={[
          {
            href: "https://insomniac.games",
            label: "Insomniac Games Official Site",
          },
          {
            href: "https://www.playstation.com",
            label: "PlayStation Store",
          },
        ]}
      />
    </ArticlePage>
  );
}
