/**
 * Script to help update article metadata with proper publishedTime and modifiedTime
 * Run this when you need to add dates to multiple articles at once
 */

import fs from 'fs';
import path from 'path';

interface ArticleUpdate {
  filePath: string;
  publishedTime: string;
  modifiedTime?: string;
  section?: string;
}

/**
 * Update an article's metadata with proper date fields
 */
export function updateArticleDates(updates: ArticleUpdate[]) {
  for (const update of updates) {
    try {
      const content = fs.readFileSync(update.filePath, 'utf-8');
      
      // Find the openGraph section
      const openGraphMatch = content.match(/openGraph:\s*{([^}]+(?:{[^}]*}[^}]*)*)/s);
      if (!openGraphMatch) {
        console.warn(`No openGraph found in ${update.filePath}`);
        continue;
      }

      const openGraphSection = openGraphMatch[0];
      let updatedOpenGraph = openGraphSection;

      // Add or update publishedTime
      if (openGraphSection.includes('publishedTime:')) {
        // Update existing
        updatedOpenGraph = updatedOpenGraph.replace(
          /publishedTime:\s*["'][^"']+["']/,
          `publishedTime: "${update.publishedTime}"`
        );
      } else {
        // Add new - insert after 'url' field
        updatedOpenGraph = updatedOpenGraph.replace(
          /(url:\s*["'][^"']+["'],?)/,
          `$1\n    publishedTime: "${update.publishedTime}",`
        );
      }

      // Add or update modifiedTime
      const modTime = update.modifiedTime || update.publishedTime;
      if (openGraphSection.includes('modifiedTime:')) {
        updatedOpenGraph = updatedOpenGraph.replace(
          /modifiedTime:\s*["'][^"']+["']/,
          `modifiedTime: "${modTime}"`
        );
      } else {
        // Add after publishedTime
        updatedOpenGraph = updatedOpenGraph.replace(
          /(publishedTime:\s*["'][^"']+["'],?)/,
          `$1\n    modifiedTime: "${modTime}",`
        );
      }

      // Add or update section if provided
      if (update.section) {
        if (openGraphSection.includes('section:')) {
          updatedOpenGraph = updatedOpenGraph.replace(
            /section:\s*["'][^"']+["']/,
            `section: "${update.section}"`
          );
        } else {
          updatedOpenGraph = updatedOpenGraph.replace(
            /(modifiedTime:\s*["'][^"']+["'],?)/,
            `$1\n    section: "${update.section}",`
          );
        }
      }

      // Replace in file
      const newContent = content.replace(openGraphSection, updatedOpenGraph);
      fs.writeFileSync(update.filePath, newContent, 'utf-8');
      
      console.log(`✅ Updated ${path.basename(update.filePath)}`);
    } catch (error) {
      console.error(`❌ Error updating ${update.filePath}:`, error);
    }
  }
}

/**
 * Generate current timestamp in ISO format
 */
export function getCurrentTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Create a timestamp from date components
 */
export function createTimestamp(year: number, month: number, day: number, hour: number = 12, minute: number = 0): string {
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  return date.toISOString();
}

// Example usage:
// const updates: ArticleUpdate[] = [
//   {
//     filePath: 'app/news/some-article/page.tsx',
//     publishedTime: createTimestamp(2026, 1, 27, 18, 0),
//     section: 'Technology'
//   },
//   {
//     filePath: 'app/news/another-article/page.tsx',
//     publishedTime: createTimestamp(2026, 1, 26, 14, 30),
//     modifiedTime: createTimestamp(2026, 1, 28, 10, 0),
//     section: 'Politics'
//   }
// ];
// 
// updateArticleDates(updates);
