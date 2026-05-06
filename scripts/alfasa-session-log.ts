/**
 * alfasa-session-log.ts
 *
 * Writes a session entry to .alfasa/session_log.json after every successful
 * wiki:publish. Keeps the last 50 entries (rolling window).
 *
 * Called internally by wiki-publish.ts on successful publish.
 * Can also be read by alfasa-suggest.ts for session briefings.
 */

import * as fs from 'fs';
import * as path from 'path';

const LOG_DIR = path.resolve(process.cwd(), '.alfasa');
const LOG_FILE = path.join(LOG_DIR, 'session_log.json');
const MAX_ENTRIES = 50;

export interface SessionEntry {
  date: string;           // ISO-8601
  slug: string;           // Full slug, e.g. "entertainment-news-fortnite-moves-into-movies"
  url: string;            // Canonical path, e.g. "/entertainment/news/fortnite-..."
  component: string;      // "NewsArticleDB" | "JackArticleDB" | etc.
  wordCount: number;
  author: string;
  category: string;
  eeaScore: number;
  eeaGrade: string;
  sentinelPassed: boolean;
  skippedSentinel: boolean;
  warnings: number;
}

export function logPublishSession(entry: SessionEntry): void {
  try {
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    }

    let entries: SessionEntry[] = [];
    if (fs.existsSync(LOG_FILE)) {
      try {
        entries = JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'));
      } catch {
        entries = [];
      }
    }

    entries.unshift(entry); // newest first
    entries = entries.slice(0, MAX_ENTRIES);

    fs.writeFileSync(LOG_FILE, JSON.stringify(entries, null, 2));
  } catch (err) {
    // Non-fatal — session log write failure never blocks the publish
    console.warn(`\x1b[33m  [Alfasa] Warning: Could not write session log: ${err}\x1b[0m`);
  }
}

export function readSessionLog(): SessionEntry[] {
  try {
    if (!fs.existsSync(LOG_FILE)) return [];
    return JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'));
  } catch {
    return [];
  }
}
