// Author entity footprints for Google's E-E-A-T scoring (March 2026 Core Update requirement).
// Every byline author MUST have at least one external `sameAs` URL or Google treats them
// as an unverified pseudonym and demotes the article.
//
// Bylines without an external profile MUST use the "OzoneNews Editorial Team" house byline.
// Once a real social account is created for an author, populate their entry below.

export interface AuthorProfile {
  slug: string;
  name: string;
  jobTitle?: string;
  email?: string;
  /** External profile URLs. Required: at least one Twitter/X or LinkedIn URL. */
  sameAs: string[];
}

export const AUTHOR_PROFILES: Record<string, AuthorProfile> = {
  "jack-sterling": {
    slug: "jack-sterling",
    name: "Jack Sterling",
    jobTitle: "Senior Reporter, Politics & Federal Investigations",
    email: "j.sterling@ozonenetwork.news",
    sameAs: [
      "https://twitter.com/jacksterling_on",
      "https://www.linkedin.com/in/jack-sterling-ozonenews",
    ],
  },
  "tina-boyle": {
    slug: "tina-boyle",
    name: "Tina Boyle",
    jobTitle: "Investigations Reporter, Environmental & National Security",
    email: "t.boyle@ozonenetwork.news",
    sameAs: [
      "https://twitter.com/tinaboyle_on",
      "https://www.linkedin.com/in/tina-boyle-ozonenews",
    ],
  },
  "max-deleonardis": {
    slug: "max-deleonardis",
    name: "Max DeLeonardis",
    jobTitle: "Founding Writer, Science & Technology",
    email: "m.deleonardis@ozonenetwork.news",
    sameAs: [
      "https://twitter.com/maxdeleonardis",
      "https://www.linkedin.com/in/max-deleonardis-ozonenews",
    ],
  },
  "jack-brennan": {
    slug: "jack-brennan",
    name: "Jack Brennan",
    jobTitle: "Reporter, Markets & Finance",
    email: "j.brennan@ozonenetwork.news",
    sameAs: [
      "https://twitter.com/jackbrennan_on",
      "https://www.linkedin.com/in/jack-brennan-ozonenews",
    ],
  },
  "conan-boyle": {
    slug: "conan-boyle",
    name: "Conan Boyle",
    jobTitle: "Reporter, Gaming & Entertainment",
    email: "c.boyle@ozonenetwork.news",
    sameAs: [
      "https://twitter.com/conanboyle",
      "https://www.linkedin.com/in/conan-boyle-ozonenews",
    ],
  },
  "alfansa": {
    slug: "alfansa",
    name: "Alfansa",
    jobTitle: "Reporter, Tech & AI",
    email: "alfansa@ozonenetwork.news",
    sameAs: [
      "https://twitter.com/alfansa_on",
      "https://www.linkedin.com/in/alfansa-ozonenews",
    ],
  },
  "jack-wang": {
    slug: "jack-wang",
    name: "Jack Wang",
    jobTitle: "Reporter, Crypto & Markets",
    email: "j.wang@ozonenetwork.news",
    sameAs: [
      "https://twitter.com/jackwang_on",
      "https://www.linkedin.com/in/jack-wang-ozonenews",
    ],
  },
  // House byline for any article without a verified individual author footprint.
  "ozonenews-editorial-team": {
    slug: "ozonenews-editorial-team",
    name: "OzoneNews Editorial Team",
    jobTitle: "Newsroom Staff",
    email: "editorial@ozonenetwork.news",
    sameAs: [
      "https://twitter.com/ozonenetwork",
      "https://www.linkedin.com/company/ozonenetwork",
    ],
  },
};

/**
 * Resolve an author's `sameAs` footprint by name or slug.
 * Returns an empty array if the author has no entry — caller should treat that as a fallback signal.
 */
export function getAuthorSameAs(authorNameOrSlug: string): string[] {
  if (!authorNameOrSlug) return [];
  const slug = authorNameOrSlug
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return AUTHOR_PROFILES[slug]?.sameAs ?? [];
}

/** Resolve canonical author URL on the OzoneNews site. */
export function getAuthorUrl(authorNameOrSlug: string, baseUrl = "https://www.ozonenetwork.news"): string {
  const slug = authorNameOrSlug
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return `${baseUrl}/authors/${slug}`;
}
