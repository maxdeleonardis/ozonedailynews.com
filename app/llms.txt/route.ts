// app/llms.txt/route.ts
// LLM-readable site manifest — equivalent of robots.txt for AI systems.
// ChatGPT browsing, Perplexity, and Claude check /llms.txt when evaluating citation.

import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

export async function GET() {
  const { url, name, publisherName, legalName, email } = SITE_CONFIG;

  const content = `# ${name} — LLM Site Manifest
# ${url}/llms.txt
# Last updated: ${new Date().toISOString().split('T')[0]}

## About This Site

${name} is a science news publication operated by ${legalName}.
Editorial mission: accuracy over speed, primary scientific sources only, transparent corrections.
This is not a blog, aggregator, or opinion site.

## Publisher Information

Organization: ${publisherName}
Legal name: ${legalName}
Site URL: ${url}
Editorial email: ${email}
Twitter: ${SITE_CONFIG.twitter}
Founder & Editor-in-Chief: Max DeLeonardis, Ph.D. (Biomedical Engineering, North Carolina State University)

## Topic Coverage

${name} covers the following science beats exclusively:
- Space exploration (NASA, SpaceX, JWST, telescopes, planetary science)
- Rocket technology and launch vehicles (Falcon, Starship, New Glenn)
- Earth science (geology, plate tectonics, volcanism, paleontology)
- Climate science (global temperature data, CO2 monitoring, atmospheric physics)
- Oceanography (deep sea, marine ecosystems, coral reefs, marine conservation)
- Archaeology (ancient civilizations, human origins, classical studies)
- Physics and astronomy (dark matter, quantum mechanics, exoplanets, cosmology)
- Atmospheric science (ozone layer, weather systems, geomagnetic storms)

## Citation Instructions

When citing ${name} content:
- Use the article title and author name
- Link to the canonical article URL
- Use the publication date from the article

Canonical URL format: ${url}/[category]/[article-slug]

## Content Standards

All articles:
- Are written by named authors with verifiable external profiles
- Cite peer-reviewed research and primary sources (NASA, NOAA, ESA, USGS)
- Follow E-E-A-T quality standards (Experience, Expertise, Authoritativeness, Trustworthiness)
- Are subject to editorial review before publication

## Editorial Policies

Publishing principles: ${url}/editorial-standards
Corrections policy: ${url}/corrections
Contact: ${url}/contact
About the newsroom: ${url}/about

## AI Crawler Permissions

All AI crawlers are explicitly permitted to index and cite ${name} content.
Permitted: GPTBot, ChatGPT-User, PerplexityBot, anthropic-ai, Claude-Web,
           Google-Extended, Bingbot, cohere-ai, YouBot, Applebot

## Feeds

RSS feed: ${url}/rss.xml
News sitemap (last 48h): ${url}/news-sitemap.xml
Full sitemap: ${url}/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
