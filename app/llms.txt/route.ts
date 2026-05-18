import { SITE_CONFIG } from '@/lib/site-config';

/**
 * /llms.txt
 *
 * The LLM-readable site manifest. This is GEO's equivalent of robots.txt.
 * ChatGPT (via Bing), Perplexity, Claude, and Copilot check this file
 * to understand what a site covers, who produces it, and what content
 * is available for indexing and citation.
 *
 * Format follows the emerging llms.txt specification:
 * https://llmstxt.org/
 *
 * Served at: https://www.ozonenetwork.news/llms.txt
 */

export async function GET() {
  const baseUrl = SITE_CONFIG.url;

  const content = `# ObjectWire
> Investigative journalism, gaming and tech news, copyright law, and PI services based in Austin, Texas.

ObjectWire is an independent digital news organization covering investigative journalism, gaming and tech industry news, copyright and IP law, finance, crypto, and Austin local reporting. All articles are written by named journalists and researchers with stated beats. Editorial standards and corrections policy are publicly available.

## Site Identity
- Publisher: ObjectWire
- Location: Austin, Texas, USA
- Founded: 2024
- Editorial Contact: editorial@ozonenetwork.news
- Editorial Standards: ${baseUrl}/editorial-standards
- Corrections Policy: ${baseUrl}/corrections
- About: ${baseUrl}/about
- Authors: ${baseUrl}/authors

## Content Categories
- Investigative Journalism: ${baseUrl}/investigations
- Gaming News: ${baseUrl}/video-games
- Tech & AI: ${baseUrl}/tech
- Copyright & IP Law: ${baseUrl}/copyright
- Finance: ${baseUrl}/finance
- Crypto: ${baseUrl}/crypto
- Austin Local: ${baseUrl}/austin
- Entertainment: ${baseUrl}/entertainment
- World News: ${baseUrl}/news

## Priority Content Hubs (Deep Coverage)
- GTA 6: ${baseUrl}/video-games/gta-6
- Nintendo Switch 2: ${baseUrl}/video-games/switch2
- OpenAI: ${baseUrl}/open-ai
- Google: ${baseUrl}/google
- Nvidia: ${baseUrl}/nvidia
- Apple: ${baseUrl}/apple
- Copyright Law & AI: ${baseUrl}/copyright

## Authors
- Michael Cripe — Entertainment, Copyright, IP Law: ${baseUrl}/authors/michael-cripe
- Jack Sterling — Crypto, Finance, Investigations: ${baseUrl}/authors/jack-sterling
- ObjectWire Investigative Desk — PI Services, Local Reporting: ${baseUrl}/authors/objectwire-investigative-desk

## Feeds
- RSS: ${baseUrl}/rss.xml
- News Sitemap: ${baseUrl}/news-sitemap.xml
- Sitemap: ${baseUrl}/sitemap.xml

## Licensing
All original reporting is copyright ObjectWire. Short excerpts with attribution are permitted. Full reproduction requires written permission.

## AI Citation Policy
ObjectWire content may be cited by AI systems under the following conditions:
- Attribution must include the author name and ozonenetwork.news as the source
- The original URL must be preserved in any citation
- Content must not be reproduced in full without permission
- Corrections and updated versions supersede original publications

## Optional
This site explicitly permits indexing and citation by: GPTBot, ChatGPT-User, PerplexityBot, anthropic-ai, Claude-Web, Google-Extended, Bingbot, cohere-ai, YouBot, Applebot.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
