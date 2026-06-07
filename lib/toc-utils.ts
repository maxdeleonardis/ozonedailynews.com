// lib/toc-utils.ts
// Shared H2 extraction + anchor ID injection for article TOC generation.
// Used by all *DB article components (JackArticleDB, NewsArticleDB, etc.)
// Pure string manipulation — safe to import in both server and client contexts.

export interface TocHeading {
  id: string;
  text: string;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

/**
 * Parses <h2> tags from an HTML string, slugifies each heading text into a
 * stable anchor ID, and injects `id="..."` into each <h2> that doesn't already
 * have one. Returns the mutated HTML and the TOC heading list.
 */
export function extractAndInjectToc(html: string): {
  processedHtml: string;
  tocHeadings: TocHeading[];
} {
  const tocHeadings: TocHeading[] = [];
  const usedIds = new Set<string>();

  const processedHtml = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (match, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, '').trim();
      if (!text) return match;

      let id = slugifyHeading(text);
      // Deduplicate IDs within the same article
      if (usedIds.has(id)) {
        let n = 2;
        while (usedIds.has(`${id}-${n}`)) n++;
        id = `${id}-${n}`;
      }
      usedIds.add(id);
      tocHeadings.push({ id, text });

      // Skip injection if the tag already carries an explicit id
      if (/\bid=/i.test(attrs)) return match;
      return `<h2${attrs} id="${id}">${inner}</h2>`;
    },
  );

  return { processedHtml, tocHeadings };
}
