import type { Metadata } from "next";
import {
  ArticlePage,
  Section,
  Quote,
  DataTable,
  ExternalLinks,
} from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "James Cameron - Filmmaker & Explorer | ObjectWire",
  description:
    "James Cameron is a Canadian filmmaker and deep-sea explorer. Director of Avatar, Titanic, and The Terminator franchise.",
  keywords: [
    "James Cameron",
    "Avatar",
    "Titanic",
    "filmmaker",
    "director",
    "deep-sea explorer",
  ],
};

export default function JamesCameronPage() {
  const infoBox = {
    title: "James Cameron",
    items: [
      { label: "Born", value: "August 16, 1954 (age 71)" },
      { label: "Birthplace", value: "Kapuskasing, Ontario, Canada" },
      { label: "Nationality", value: "Canadian" },
      { label: "Occupation", value: "Director, Producer, Screenwriter" },
      { label: "Years Active", value: "1978–present" },
      { label: "Spouse", value: "Suzy Amis (m. 2000)" },
      { label: "Awards", value: "3 Academy Awards, 2 Golden Globes" },
      { label: "Box Office", value: "$10 billion+ worldwide" },
    ],
  };

  const tableOfContents = [
    { id: "early-life", label: "Early Life" },
    { id: "career", label: "Career" },
    { id: "filmography", label: "Filmography" },
    { id: "box-office", label: "Box Office Records" },
    { id: "exploration", label: "Deep-Sea Exploration" },
    { id: "upcoming", label: "Upcoming Projects" },
  ];

  const relatedLinks = [
    {
      href: "/blog?tag=james-cameron",
      label: "James Cameron News",
      description: "Latest updates and articles",
    },
    {
      href: "/blog?tag=avatar",
      label: "Avatar Franchise",
      description: "Coverage of the Avatar films",
    },
  ];

  return (
    <ArticlePage
      title="James Cameron"
      subtitle="Canadian filmmaker and deep-sea explorer"
      category="Filmmaker"
      lastUpdated="January 23, 2026"
      infoBox={infoBox}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        <strong>James Francis Cameron</strong> (born August 16, 1954) is a
        Canadian filmmaker and deep-sea explorer. He is best known for directing{" "}
        <em>The Terminator</em> (1984), <em>Aliens</em> (1986),{" "}
        <em>The Abyss</em> (1989), <em>Terminator 2: Judgment Day</em> (1991),
        and <em>Avatar</em> (2009), as well as the epic romance-disaster film{" "}
        <em>Titanic</em> (1997).
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Cameron&apos;s films have grossed over $10 billion worldwide, making him
        the second-highest-grossing film director of all time. He holds the
        record for directing the two highest-grossing films ever made:{" "}
        <em>Avatar</em> and <em>Avatar: The Way of Water</em>.
      </p>

      <Section id="early-life" title="Early Life">
        <p className="text-gray-700 mb-4">
          Cameron was born in Kapuskasing, Ontario, Canada, to Shirley, an
          artist and nurse, and Phillip Cameron, an electrical engineer. He grew
          up in Chippawa, Ontario, and later moved to Brea, California in 1971.
          His interest in filmmaking began after seeing{" "}
          <em>2001: A Space Odyssey</em> in 1968.
        </p>
        <p className="text-gray-700">
          He studied physics at Fullerton College but dropped out to pursue
          filmmaking. He worked as a truck driver while writing screenplays,
          eventually breaking into the film industry through Roger Cormans
          studio.
        </p>
      </Section>

      <Section id="career" title="Career">
        <p className="text-gray-700 mb-4">
          Camerons directorial debut was <em>Piranha II: The Spawning</em>{" "}
          (1982), though he was fired during production. His breakthrough came
          with <em>The Terminator</em> (1984), a low-budget science fiction film
          that became a surprise hit and launched his career.
        </p>

        <Quote source="James Cameron, 1997 Academy Awards">
          Im the king of the world!
        </Quote>

        <p className="text-gray-700 mb-4">
          His subsequent films pushed the boundaries of visual effects and
          filmmaking technology. <em>Titanic</em> (1997) won 11 Academy Awards
          including Best Picture and Best Director. <em>Avatar</em> (2009)
          revolutionized 3D filmmaking and became the highest-grossing film of
          all time.
        </p>
      </Section>

      <Section id="filmography" title="Filmography">
        <DataTable
          headers={["Year", "Film", "Role", "Box Office"]}
          rows={[
            ["1984", "The Terminator", "Director, Writer", "$78.3M"],
            ["1986", "Aliens", "Director, Writer", "$183.2M"],
            ["1989", "The Abyss", "Director, Writer", "$90M"],
            ["1991", "Terminator 2: Judgment Day", "Director, Writer", "$520.9M"],
            ["1994", "True Lies", "Director, Writer", "$378.9M"],
            ["1997", "Titanic", "Director, Writer, Producer", "$2.2B"],
            ["2009", "Avatar", "Director, Writer, Producer", "$2.92B"],
            ["2022", "Avatar: The Way of Water", "Director, Writer, Producer", "$2.32B"],
          ]}
        />
      </Section>

      <Section id="box-office" title="Box Office Records">
        <p className="text-gray-700 mb-4">
          Cameron holds numerous box office records:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>First director to have two films gross over $2 billion</li>
          <li>Director of the highest-grossing film of all time (Avatar)</li>
          <li>Director of the third highest-grossing film (Avatar: The Way of Water)</li>
          <li>Director of the fourth highest-grossing film (Titanic)</li>
          <li>Total worldwide box office: over $10 billion</li>
        </ul>
      </Section>

      <Section id="exploration" title="Deep-Sea Exploration">
        <p className="text-gray-700 mb-4">
          Beyond filmmaking, Cameron is an accomplished deep-sea explorer. In
          2012, he became the third person to reach the bottom of the Mariana
          Trench, the deepest point in the ocean, in the Deepsea Challenger
          submersible.
        </p>
        <p className="text-gray-700">
          He has led over 70 deep-sea expeditions and contributed to marine
          science research. His passion for underwater exploration has
          influenced many of his films, including The Abyss, Titanic, and the
          Avatar sequels.
        </p>
      </Section>

      <Section id="upcoming" title="Upcoming Projects">
        <p className="text-gray-700 mb-4">
          Cameron is currently developing the Avatar franchise with multiple
          sequels planned:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Avatar 3</strong> - Expected December 2025</li>
          <li><strong>Avatar 4</strong> - In development (2029)</li>
          <li><strong>Avatar 5</strong> - In development (2031)</li>
        </ul>
        <p className="text-gray-700">
          The sequels will continue to explore the world of Pandora and expand
          on the environmental and indigenous themes of the original films.
        </p>
      </Section>

      <ExternalLinks
        links={[
          { href: "https://www.imdb.com/name/nm0000116/", label: "James Cameron on IMDb" },
          { href: "https://en.wikipedia.org/wiki/James_Cameron", label: "Wikipedia: James Cameron" },
        ]}
      />
    </ArticlePage>
  );
}
