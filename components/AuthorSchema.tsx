/**
 * AuthorSchema — Comprehensive Person JSON-LD for E-E-A-T
 *
 * Emits the full Person structured data that Google uses for author verification
 * in Google News. Covers: identity, credentials, expertise, publication history,
 * social profiles, and editorial principles.
 *
 * Usage:
 *   <AuthorSchema
 *     name="Alfansa"
 *     jobTitle="Finance & Markets Reporter"
 *     description="Covers payments, fintech, and MHA gaming."
 *     url="https://www.objectwire.org/authors/alfansa"
 *     knowsAbout={['Finance', 'Fintech', 'My Hero Academia']}
 *     articleCount={5}
 *   />
 */

export interface AuthorSchemaProps {
  /** Full name */
  name: string;
  /** Job title / role at ObjectWire */
  jobTitle: string;
  /** Bio / description */
  description: string;
  /** Canonical author profile URL */
  url: string;
  /** Topics the author is an expert on */
  knowsAbout?: string[];
  /** Social profile URLs (Twitter, LinkedIn, GitHub, etc.) */
  sameAs?: string[];
  /** Education background */
  alumniOf?: { name: string; department?: string }[];
  /** Location */
  location?: { city: string; region: string; country?: string };
  /** Total articles published (drives E-E-A-T "experience" signal) */
  articleCount?: number;
  /** Avatar / headshot image URL */
  image?: string;
}

export function AuthorSchema({
  name,
  jobTitle,
  description,
  url,
  knowsAbout = [],
  sameAs = [],
  alumniOf = [],
  location,
  articleCount,
  image,
}: AuthorSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    url,
    worksFor: {
      '@type': 'NewsMediaOrganization',
      name: 'ObjectWire',
      url: 'https://www.objectwire.org',
      publishingPrinciples: 'https://www.objectwire.org/editorial-standards',
      correctionsPolicy: 'https://www.objectwire.org/corrections',
    },
    ...(image ? { image } : {}),
    ...(knowsAbout.length > 0 ? { knowsAbout } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(alumniOf.length > 0
      ? {
          alumniOf: alumniOf.map((school) => ({
            '@type': 'EducationalOrganization',
            name: school.name,
            ...(school.department ? { department: school.department } : {}),
          })),
        }
      : {}),
    ...(location
      ? {
          address: {
            '@type': 'PostalAddress',
            addressLocality: location.city,
            addressRegion: location.region,
            ...(location.country
              ? { addressCountry: location.country }
              : { addressCountry: 'United States' }),
          },
        }
      : {}),
    // Signals publication volume — Google uses this for authority
    ...(articleCount
      ? {
          mainEntityOfPage: {
            '@type': 'ProfilePage',
            url,
            description: `${name} has published ${articleCount} articles on ObjectWire.`,
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default AuthorSchema;
