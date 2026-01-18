import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avatar: Fire and Ash - Complete Guide to James Cameron's 2025 Epic | ObjectWire",
  description: "Everything about Avatar 3: Fire and Ash. $1.235B box office, cast details, plot summary, production history. James Cameron's third installment in the Avatar saga.",
  keywords: [
    "Avatar Fire and Ash",
    "Avatar 3",
    "James Cameron",
    "Avatar 2025",
    "Sam Worthington",
    "Zoe Saldana",
    "Pandora",
    "Na'vi",
    "Mangkwan",
    "Ash People",
    "box office",
    "20th Century Studios",
    "science fiction film"
  ],
  authors: [{ name: "ObjectWire Entertainment Desk" }],
  publisher: "ObjectWire",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://objectwire.org/james-cameron/avatar-fire-and-ash",
    siteName: "ObjectWire",
    title: "Avatar: Fire and Ash - Complete Guide to James Cameron's 2025 Epic",
    description: "Everything about Avatar 3: Fire and Ash. $1.235B box office, cast details, plot summary, and production history.",
    images: [
      {
        url: "/images/avatar-fire-and-ash-og.jpg",
        width: 1200,
        height: 630,
        alt: "Avatar: Fire and Ash - James Cameron's 2025 Epic",
      },
    ],
    publishedTime: "2025-12-20T08:00:00Z",
    modifiedTime: "2026-01-14T12:00:00Z",
    authors: ["ObjectWire Entertainment Desk"],
    section: "Entertainment",
    tags: ["Avatar", "James Cameron", "Movies", "Box Office", "Science Fiction"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avatar: Fire and Ash — Complete Guide",
    description: "$1.235B box office, cast, plot & production history of James Cameron's Avatar 3",
    images: ["/images/avatar-fire-and-ash-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://objectwire.org/james-cameron/avatar-fire-and-ash",
  },
  other: {
    "news_keywords": "Avatar Fire and Ash, Avatar 3, James Cameron, box office, 2025 movies",
    "article:published_time": "2025-12-20T08:00:00Z",
    "article:modified_time": "2026-01-14T12:00:00Z",
    "article:author": "ObjectWire Entertainment Desk",
    "article:section": "Entertainment",
  },
};

export default function AvatarFireAndAshLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
