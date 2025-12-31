import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme",
  description: "Investigation into the Feeding Our Future scandal - one of the largest COVID-19 pandemic fraud cases in U.S. history. 70 defendants indicted for stealing $250 million from federal child nutrition programs.",
  keywords: ["Feeding Our Future", "Minnesota fraud", "COVID fraud", "pandemic fraud", "child nutrition fraud", "Aimee Bock", "federal indictment", "USDA fraud"],
  authors: [{ name: "ObjectWire Investigations" }],
  openGraph: {
    title: "Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme",
    description: "Investigation into one of the largest pandemic-era fraud cases in U.S. history.",
    type: "article",
    publishedTime: "2025-12-30T00:00:00.000Z",
    authors: ["ObjectWire Investigations"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme",
    description: "70 defendants indicted for stealing $250 million from federal child nutrition programs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
