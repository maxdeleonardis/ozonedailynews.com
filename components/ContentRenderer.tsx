/**
 * ContentRenderer — Renders content_html strings that contain a mix of raw HTML
 * and embedded JSX component tags (e.g. <PrismTable>, <HighlightBox>, <Timeline>).
 *
 * When content is stored in Supabase via wiki:publish, JSX component tags survive
 * the extraction as literal strings. Using dangerouslySetInnerHTML drops them
 * because the browser's HTML parser treats unknown tags as opaque blocks.
 *
 * This component splits the HTML string on known component boundaries, renders
 * the HTML segments via dangerouslySetInnerHTML, and renders recognised component
 * tags as actual React components with parsed props.
 *
 * Usage (drop-in replacement for dangerouslySetInnerHTML):
 *   <ContentRenderer html={row.content_html ?? ''} />
 */

'use client';

import React from 'react';
import { PrismTable } from '@/components/PrismTable';
import {
  HighlightBox,
  EmbedBox,
  Timeline,
  RelatedStories,
} from '@/components/NewsArticle';
import {
  JackCallout,
  JackCard,
  JackCardGrid,
  JackIndicatorGrid,
  JackSection,
  JackSubheading,
  JackQuote,
  JackVideo,
  JackImage,
  JackSideBlock,
  JackCaseOverview,
  JackStats,
  JackProcess,
  ScienceCallout,
  FactList,
} from '@/components/JackArticle';
import type { JackAccentColor } from '@/components/JackArticle';

// ── Known component registry ────────────────────────────────────────────────

interface ComponentDef {
  render: (props: Record<string, unknown>) => React.ReactNode;
  selfClosing?: boolean;
}

const COMPONENTS: Record<string, ComponentDef> = {
  // ── NewsArticle components ────────────────────────────────────────────────
  PrismTable: {
    render: (props) => (
      <PrismTable
        accent={(props.accent as 'blue' | 'purple' | 'red' | 'green' | 'orange' | 'cyan' | 'yellow') ?? 'purple'}
        headers={props.headers as [string, string] | undefined}
        rows={(props.rows as [string, string][]) ?? []}
        caption={props.caption as string | undefined}
      />
    ),
    selfClosing: true,
  },
  HighlightBox: {
    render: (props) => (
      <HighlightBox
        type={(props.type as 'quote' | 'key-point' | 'stat') ?? 'quote'}
        color={(props.color as 'purple' | 'blue' | 'pink' | 'orange' | 'green') ?? 'purple'}
      >
        <span dangerouslySetInnerHTML={{ __html: (props.__children as string) ?? '' }} />
      </HighlightBox>
    ),
  },
  Timeline: {
    render: (props) => (
      <Timeline events={(props.events as Array<{ time: string; title: string; description?: string }>) ?? []} />
    ),
    selfClosing: true,
  },
  // TagsSection removed from ContentRenderer — tags are rendered by ArticleFooter
  // from the Supabase `tags` column, preventing duplicates.
  EmbedBox: {
    render: (props) => (
      <EmbedBox
        platform={(props.platform as 'twitter' | 'instagram' | 'youtube' | 'tiktok') ?? 'twitter'}
        handle={(props.handle as string) ?? ''}
        description={props.description as string | undefined}
        link={props.link as string | undefined}
      />
    ),
    selfClosing: true,
  },
  RelatedStories: {
    render: (props) => (
      <RelatedStories
        stories={(props.stories as Array<{ href: string; title: string; category: string; image?: string; date?: string }>) ?? []}
      />
    ),
    selfClosing: true,
  },
  // ── JackArticle components ────────────────────────────────────────────────
  JackSection: {
    render: (props) => (
      <JackSection
        number={props.number as number | string | undefined}
        title={(props.title as string) ?? ''}
        accentColor={props.accentColor as JackAccentColor | undefined}
      >
        <span dangerouslySetInnerHTML={{ __html: (props.__children as string) ?? '' }} />
      </JackSection>
    ),
  },
  JackSubheading: {
    render: (props) => (
      <JackSubheading>
        <span dangerouslySetInnerHTML={{ __html: (props.__children as string) ?? '' }} />
      </JackSubheading>
    ),
  },
  JackCallout: {
    render: (props) => (
      <JackCallout
        label={props.label as string | undefined}
        accentColor={props.accentColor as JackAccentColor | undefined}
      >
        <span dangerouslySetInnerHTML={{ __html: (props.__children as string) ?? '' }} />
      </JackCallout>
    ),
  },
  JackQuote: {
    render: (props) => (
      <JackQuote
        quote={(props.quote as string) ?? ''}
        author={props.author as string | undefined}
        title={props.title as string | undefined}
        accentColor={props.accentColor as JackAccentColor | undefined}
      />
    ),
    selfClosing: true,
  },
  JackCard: {
    render: (props) => (
      <JackCard
        title={(props.title as string) ?? ''}
        variant={props.variant as 'white' | 'gray' | undefined}
      >
        <span dangerouslySetInnerHTML={{ __html: (props.__children as string) ?? '' }} />
      </JackCard>
    ),
  },
  JackCardGrid: {
    render: (props) => (
      <JackCardGrid columns={props.columns as 2 | 3 | undefined}>
        <span dangerouslySetInnerHTML={{ __html: (props.__children as string) ?? '' }} />
      </JackCardGrid>
    ),
  },
  JackIndicatorGrid: {
    render: (props) => (
      <JackIndicatorGrid
        title={props.title as string | undefined}
        items={(props.items as Array<{ label: string; description: string }>) ?? []}
      />
    ),
    selfClosing: true,
  },
  JackVideo: {
    render: (props) => (
      <JackVideo
        videoId={(props.videoId as string) ?? ''}
        title={(props.title as string) ?? ''}
        caption={props.caption as string | undefined}
        provider={props.provider as 'youtube' | 'vimeo' | undefined}
      />
    ),
    selfClosing: true,
  },
  JackImage: {
    render: (props) => (
      <JackImage
        src={(props.src as string) ?? ''}
        alt={(props.alt as string) ?? ''}
        caption={props.caption as string | undefined}
        credit={props.credit as string | undefined}
      />
    ),
    selfClosing: true,
  },
  JackSideBlock: {
    render: (props) => (
      <JackSideBlock
        title={(props.title as string) ?? ''}
        accentColor={props.accentColor as JackAccentColor | undefined}
      >
        <span dangerouslySetInnerHTML={{ __html: (props.__children as string) ?? '' }} />
      </JackSideBlock>
    ),
  },
  JackCaseOverview: {
    render: (props) => (
      <JackCaseOverview
        title={props.title as string | undefined}
        items={(props.items as Array<{ label: string; value: string }>) ?? []}
        accentColor={props.accentColor as JackAccentColor | undefined}
      />
    ),
    selfClosing: true,
  },
  JackStats: {
    render: (props) => (
      <JackStats
        title={props.title as string | undefined}
        stats={(props.stats as Array<{ value: string; label: string }>) ?? []}
        accentColor={props.accentColor as JackAccentColor | undefined}
      />
    ),
    selfClosing: true,
  },
  JackProcess: {
    render: (props) => (
      <JackProcess
        title={(props.title as string) ?? ''}
        steps={(props.steps as Array<{ title: string; description: string }>) ?? []}
        accentColor={props.accentColor as JackAccentColor | undefined}
      />
    ),
    selfClosing: true,
  },
  ScienceCallout: {
    render: (props) => (
      <ScienceCallout type={props.type as 'key-finding' | 'clinical-data' | 'warning' | 'source' | 'definition' | undefined}>
        <span dangerouslySetInnerHTML={{ __html: (props.__children as string) ?? '' }} />
      </ScienceCallout>
    ),
  },
  FactList: {
    render: (props) => (
      <FactList
        title={props.title as string | undefined}
        items={(props.items as Array<{ label: string; value: string }>) ?? []}
      />
    ),
    selfClosing: true,
  },
};

// Component names pattern for splitting
const COMPONENT_NAMES = Object.keys(COMPONENTS).join('|');

// ── JSX prop parser ─────────────────────────────────────────────────────────

/**
 * Parse a JSX-style props string into a Record.
 * Handles: prop="string", prop='string', prop={expression}, prop={true/false}
 * For expressions (arrays, objects), attempts JSON.parse with light normalisation.
 */
function parseProps(propsStr: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  if (!propsStr || !propsStr.trim()) return result;

  // Match prop=value patterns
  const propRegex = /(\w+)=(?:"([^"]*)"|'([^']*)'|\{([\s\S]*?)\}(?=\s+\w+=|\s*\/?>|\s*$))/g;

  // For complex JSX expressions with nested braces, we need a smarter approach
  const str = propsStr.trim();
  let i = 0;

  while (i < str.length) {
    // Skip whitespace
    while (i < str.length && /\s/.test(str[i])) i++;
    if (i >= str.length) break;

    // Read prop name
    const nameStart = i;
    while (i < str.length && /[\w]/.test(str[i])) i++;
    const name = str.slice(nameStart, i);
    if (!name) { i++; continue; }

    // Skip whitespace
    while (i < str.length && /\s/.test(str[i])) i++;

    // Check for =
    if (str[i] !== '=') {
      // Boolean prop (e.g. `allowFullScreen`)
      result[name] = true;
      continue;
    }
    i++; // skip =

    // Skip whitespace
    while (i < str.length && /\s/.test(str[i])) i++;

    if (str[i] === '"') {
      // Double-quoted string
      i++;
      const start = i;
      while (i < str.length && str[i] !== '"') i++;
      result[name] = str.slice(start, i);
      i++; // skip closing quote
    } else if (str[i] === "'") {
      // Single-quoted string
      i++;
      const start = i;
      while (i < str.length && str[i] !== "'") i++;
      result[name] = str.slice(start, i);
      i++; // skip closing quote
    } else if (str[i] === '{') {
      // JSX expression — find matching closing brace
      let depth = 1;
      i++; // skip opening brace
      const start = i;
      while (i < str.length && depth > 0) {
        if (str[i] === '{') depth++;
        else if (str[i] === '}') depth--;
        if (depth > 0) i++;
      }
      const expr = str.slice(start, i).trim();
      i++; // skip closing brace

      // Try to parse the expression
      if (expr === 'true') {
        result[name] = true;
      } else if (expr === 'false') {
        result[name] = false;
      } else if (/^-?\d+(\.\d+)?$/.test(expr)) {
        result[name] = Number(expr);
      } else {
        // Use Function() to evaluate JS expressions safely — handles single-quoted
        // arrays/objects, nested structures, and text with apostrophes without the
        // fragile quote-replacement that breaks values containing ' or :.
        try {
          // eslint-disable-next-line no-new-func
          result[name] = new Function(`return (${expr})`)();
        } catch {
          // Fall back: store as raw string if expression can't be evaluated
          result[name] = expr;
        }
      }
    } else {
      // Unquoted value — read until whitespace
      const start = i;
      while (i < str.length && !/\s/.test(str[i])) i++;
      result[name] = str.slice(start, i);
    }
  }

  return result;
}

// ── Segment splitter ────────────────────────────────────────────────────────

interface HtmlSegment {
  type: 'html';
  content: string;
}

interface ComponentSegment {
  type: 'component';
  name: string;
  props: Record<string, unknown>;
  children?: string;
}

type Segment = HtmlSegment | ComponentSegment;

/**
 * Split an HTML string into segments of raw HTML and component blocks.
 */
function splitIntoSegments(html: string): Segment[] {
  const segments: Segment[] = [];

  // Build regex to find component tags
  // Match self-closing: <PrismTable ... />
  // Match with children: <HighlightBox ...>children</HighlightBox>
  const componentPattern = new RegExp(
    `<(${COMPONENT_NAMES})((?:\\s[\\s\\S]*?)?)\\s*\\/>` +    // self-closing
    `|<(${COMPONENT_NAMES})((?:\\s[\\s\\S]*?)?)\\s*>([\\s\\S]*?)<\\/\\3>`, // with children
    'g'
  );

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = componentPattern.exec(html)) !== null) {
    // Add HTML before this component
    if (match.index > lastIndex) {
      const htmlContent = html.slice(lastIndex, match.index).trim();
      if (htmlContent) {
        segments.push({ type: 'html', content: htmlContent });
      }
    }

    if (match[1]) {
      // Self-closing component
      const name = match[1];
      const propsStr = match[2] ?? '';
      segments.push({
        type: 'component',
        name,
        props: parseProps(propsStr),
      });
    } else if (match[3]) {
      // Component with children
      const name = match[3];
      const propsStr = match[4] ?? '';
      const children = match[5] ?? '';
      const props = parseProps(propsStr);
      props.__children = children;
      segments.push({
        type: 'component',
        name,
        props,
      });
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining HTML
  if (lastIndex < html.length) {
    const remaining = html.slice(lastIndex).trim();
    if (remaining) {
      segments.push({ type: 'html', content: remaining });
    }
  }

  return segments;
}

// ── Fix iframes ─────────────────────────────────────────────────────────────

/**
 * Fix self-closing iframe tags (valid in JSX but invalid in HTML5).
 * <iframe ... /> → <iframe ...></iframe>
 */
function fixIframes(html: string): string {
  return html.replace(/<iframe\s([^>]*?)\/>/gi, '<iframe $1></iframe>');
}

// ── Main component ──────────────────────────────────────────────────────────

export function ContentRenderer({ html }: { html: string }) {
  if (!html) return null;

  // Fix self-closing iframes before processing
  const fixed = fixIframes(html);

  // Check if content has any known component tags
  const hasComponents = new RegExp(`<(${COMPONENT_NAMES})[\\s/>]`).test(fixed);

  // Fast path — no components, just use dangerouslySetInnerHTML
  if (!hasComponents) {
    return <div dangerouslySetInnerHTML={{ __html: fixed }} />;
  }

  // Split into segments and render
  const segments = splitIntoSegments(fixed);

  return (
    <>
      {segments.map((segment, i) => {
        if (segment.type === 'html') {
          return <div key={i} dangerouslySetInnerHTML={{ __html: segment.content }} />;
        }

        const def = COMPONENTS[segment.name];
        if (!def) {
          // Unknown component — render as raw HTML
          return null;
        }

        return <React.Fragment key={i}>{def.render(segment.props)}</React.Fragment>;
      })}
    </>
  );
}

export default ContentRenderer;
