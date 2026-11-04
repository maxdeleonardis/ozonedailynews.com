// lib/authors.ts
// ── THE AUTHOR ENTITY REGISTRY — single source of truth for E-E-A-T authorship ──
//
// Google ranks ENTITIES, not just URLs. Every article must resolve to a verifiable
// Person entity with a stable @id (their author page URL), a real bio, declared
// areas of expertise (knowsAbout), and external profiles (sameAs) that prove the
// byline is a recognised individual — not anonymous content-farm output.
//
// This registry is consumed by:
//   - app/authors/[slug]/page.tsx   → renders the public Person profile + Person JSON-LD
//   - components/SEOWrapper.tsx       → links each NewsArticle's author to this entity
//   - app/api/cms/publish/route.ts    → KNOWN_AUTHORS gate (no byline may publish unless registered)
//
// Adding a new journalist = add one entry here. Do NOT hand-build author pages.

import { SITE_CONFIG } from './site-config';

export interface AuthorEntity {
  slug: string;                 // URL segment: /authors/<slug>
  name: string;                 // Full display name (byline)
  jobTitle: string;
  /** True for the network owner/publisher. Drives ownership schema + footer. */
  isOwner?: boolean;
  /** Short one-line role shown under the name. */
  tagline: string;
  /** Full bio paragraphs (rendered in order on the profile page). */
  bio: string[];
  /** Editorial beats shown as tags. */
  beats: string[];
  /** schema.org knowsAbout — declared expertise for entity authority. */
  knowsAbout: string[];
  /** External profiles that PROVE the entity is real. Empty = not yet verified. */
  sameAs: string[];
  /** Initials for the avatar fallback. */
  initials: string;
  /** Optional avatar image URL (overrides initials). */
  avatarUrl?: string;
  /** Year the author began reporting for the network. */
  since?: string;
  /** Optional education credentials for schema.org alumniOf and E-E-A-T. */
  education?: Array<{
    institution: string;
    degree: string;
    year?: string;
    url?: string;
  }>;
}

// ─── Registry ────────────────────────────────────────────────────────────────
// Network owner: Max DeLeonardis.

export const AUTHORS: Record<string, AuthorEntity> = {
  'max-deleonardis': {
    slug: 'max-deleonardis',
    name: 'Max DeLeonardis',
    jobTitle: 'Founder, Publisher & Editor-in-Chief',
    isOwner: true,
    tagline: 'Founder, Publisher & Editor-in-Chief, OzoneNews',
    bio: [
      'Max DeLeonardis is the founder, publisher, and Editor-in-Chief of OzoneNews, the flagship science publication of Ozone Network News LLC. He leads a network of digital news brands dedicated to Earth science, atmospheric research, space exploration, and climate reporting.',
      'He earned his undergraduate degree and his Ph.D. from North Carolina State University, completing his doctoral work in Biomedical Engineering in 2024 through the joint graduate program with the University of North Carolina at Chapel Hill. His research training spans quantitative data analysis, fluid dynamics, and complex biological systems, giving him direct expertise in the physical processes that govern Earth\u2019s atmosphere, oceans, and living systems.',
      'His scientific background directly informs his editorial oversight of OzoneNews. Under his direction, the network reports on ozone layer recovery, atmospheric chemistry, climate dynamics, oceanography, geology, and space science with the rigor of peer-reviewed research. He personally enforces the network\u2019s editorial standards: named authorship on every article, primary-source verification, and a published corrections policy for full transparency.',
    ],
    beats: ['Earth Science', 'Atmospheric Science', 'Ozone Research', 'Climate', 'Space Exploration', 'Publishing'],
    knowsAbout: [
      'Earth Science',
      'Atmospheric Science',
      'Ozone Layer',
      'Climate Science',
      'Oceanography',
      'Geology',
      'Biomedical Engineering',
      'Scientific Research',
      'Peer-Reviewed Literature',
      'Space Exploration',
      'Science Journalism',
      'Editorial Standards',
    ],
    sameAs: [
      'https://www.linkedin.com/in/maximillion-deleonardis/',
      'https://x.com/ozonedailynews',
      'https://www.facebook.com/don.deleonardis/',
    ],
    initials: 'MD',
    since: '2026',
    education: [
      {
        institution: 'North Carolina State University',
        degree: 'Ph.D. in Biomedical Engineering',
        year: '2024',
        url: 'https://www.bme.ncsu.edu/',
      },
      {
        institution: 'North Carolina State University',
        degree: 'B.S.',
        url: 'https://www.ncsu.edu/',
      },
    ],
  },

  'simon-minter': {
    slug: 'simon-minter',
    name: 'Simon Alfred Minter',
    jobTitle: 'Paleontology & Evolutionary Biology Correspondent',
    tagline: 'Paleontology & Evolutionary Biology Correspondent, OzoneNews',
    bio: [
      'Simon Alfred Minter is a paleontology and evolutionary biology correspondent for OzoneNews. He covers fossil discoveries, evolutionary origins, extinct ecosystems, and the deep history of life on Earth, drawing directly on primary sources including peer-reviewed journals, museum collections, and institutional research announcements.',
      'His reporting focuses on translating complex paleontological and genomic data into clear, sourced news coverage, from the fossil record of ancient mammals to the evolutionary relationships reconstructed through phylogenomics.',
    ],
    beats: ['Paleontology', 'Evolutionary Biology', 'Fossils', 'Extinction Events', 'Archaeology'],
    knowsAbout: [
      'Paleontology',
      'Evolutionary Biology',
      'Phylogenomics',
      'Fossil Record',
      'Mass Extinction',
      'Mammalian Evolution',
      'Archaeology',
      'Scientific Research',
    ],
    sameAs: [],
    initials: 'SM',
    since: '2026',
  },

  'ozonedailynews-editorial-team': {
    slug: 'ozonedailynews-editorial-team',
    name: 'OzoneNews Editorial Team',
    jobTitle: 'Editorial Desk',
    tagline: 'The OzoneNews Editorial Team',
    bio: [
      'The OzoneNews Editorial Team byline is used for collaboratively reported, desk-edited, or wire-assisted coverage that does not carry a single named author. All work published under this byline is reviewed by a named editor and follows the same editorial standards, sourcing, and corrections policy as individually bylined reporting.',
    ],
    beats: ['Science', 'Technology', 'Climate', 'Space'],
    knowsAbout: ['Science Journalism', 'Breaking News', 'Editorial Review'],
    sameAs: [],
    initials: 'ON',
    since: '2026',
  },

  'kaustubh-madiraju': {
    slug: 'kaustubh-madiraju',
    name: 'Kaustubh Madiraju',
    jobTitle: 'Contributing Reporter',
    tagline: 'Contributing Reporter, OzoneNews',
    bio: [
      'Kaustubh Madiraju is a contributing reporter for OzoneNews, covering technology, science, and the people and companies shaping them. His reporting follows the network editorial standards: named sourcing, independent verification, and a published corrections policy.',
    ],
    beats: ['Technology', 'Science', 'Innovation'],
    knowsAbout: ['Technology', 'Science', 'Innovation', 'Reporting'],
    sameAs: [
      'https://www.linkedin.com/in/kmmadiraju',
      'https://www.instagram.com/kaustubhkm/',
      'https://www.facebook.com/kaustubh.madiraju/',
    ],
    initials: 'KM',
    since: '2026',
  },

  'josh-donnelly': {
    slug: 'josh-donnelly',
    name: 'Josh Donnelly',
    jobTitle: 'Contributing Writer',
    tagline: 'Contributing Writer, OzoneNews',
    bio: [
      'Josh Donnelly is the founder and owner of the Josh\u2019s Hope Foundation, a 501(c)(3) nonprofit in Hillsborough, North Carolina that provides personal support and on-the-job training to young adults living with mental health challenges.',
      'He contributes to OzoneNews on community impact, mental health, and the nonprofit sector, writing under the network editorial standards with named sourcing and a published corrections policy.',
    ],
    beats: ['Community', 'Mental Health', 'Nonprofit', 'Human Interest'],
    knowsAbout: [
      'Mental Health',
      'Nonprofit Leadership',
      'Community Support',
    ],
    sameAs: [],
    initials: 'JD',
    since: '2026',
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const KNOWN_AUTHOR_SLUGS: string[] = Object.keys(AUTHORS);

export function getAuthor(slug: string | undefined | null): AuthorEntity | null {
  if (!slug) return null;
  return AUTHORS[slug] ?? null;
}

export function authorUrl(slug: string): string {
  return `${SITE_CONFIG.url}/authors/${slug}`;
}

/** Build schema.org Person JSON-LD for an author entity. */
export function authorPersonSchema(author: AuthorEntity) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': authorUrl(author.slug),
    name: author.name,
    url: authorUrl(author.slug),
    jobTitle: author.jobTitle,
    description: author.bio[0],
    knowsAbout: author.knowsAbout,
    ...(author.sameAs.length > 0 && { sameAs: author.sameAs }),
    ...(author.education && author.education.length > 0 && {
      alumniOf: author.education.map((edu) => ({
        '@type': 'EducationalOrganization',
        name: edu.institution,
        ...(edu.url && { url: edu.url }),
        ...(edu.degree && { department: { '@type': 'EducationalOrganization', name: edu.degree } }),
      })),
    }),
    worksFor: {
      '@type': 'NewsMediaOrganization',
      name: SITE_CONFIG.publisherName,
      url: SITE_CONFIG.url,
      publishingPrinciples: `${SITE_CONFIG.url}${SITE_CONFIG.publishingPrinciples}`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: SITE_CONFIG.email,
        contactType: 'editorial',
      },
    },
  };
}