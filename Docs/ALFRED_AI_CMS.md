# Alfred AI CMS | RSS Feed Ingestion → Mobile Notifications → Automated Publishing

**Alfred** is OzoneNews's intelligent CMS assistant that monitors RSS feeds from your topic hubs, sends breaking news notifications to your phone, and publishes articles automatically based on your SMS/chat responses.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         RSS FEED SOURCES                                 │
├─────────────────────────────────────────────────────────────────────────┤
│  • TechCrunch        • The Verge          • Reuters Tech                │
│  • GameSpot          • Polygon            • IGN                          │
│  • CoinDesk          • Decrypt            • The Block                    │
│  • Variety           • Deadline           • Hollywood Reporter           │
│  • Bloomberg Tech    • Financial Times    • WSJ                          │
└────────────────┬────────────────────────────────────────────────────────┘
                 │
                 │ Every 15 minutes (cron job)
                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    ALFRED RSS INGESTION ENGINE                           │
│  • Parse RSS feeds (feedparser)                                          │
│  • Deduplicate against content_registry (last 7 days)                   │
│  • Extract: title, URL, publish_date, source, summary                   │
│  • Categorize by vertical (Tech, Gaming, Crypto, Entertainment)         │
│  • Store in Supabase `alfred_feed_items` table                          │
└────────────────┬────────────────────────────────────────────────────────┘
                 │
                 │ New items detected
                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                   RELEVANCE SCORING ENGINE                               │
│  • Keyword matching against your topics (GTA 6, Switch 2, OpenAI, etc.) │
│  • Named entity recognition (company names, people, products)            │
│  • Trending score (social signals, Reddit mentions, HN upvotes)          │
│  • Recency score (published in last 4 hours = high priority)            │
│  • Final score: 0-100 (70+ triggers notification)                       │
└────────────────┬────────────────────────────────────────────────────────┘
                 │
                 │ Score >= 70
                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    MOBILE NOTIFICATION SYSTEM                            │
│  Option A: Twilio SMS (fastest, most reliable)                          │
│  Option B: Telegram Bot (rich formatting, inline buttons)               │
│  Option C: Discord DM (existing integration)                            │
│  Option D: Pushover (dedicated notification app)                        │
└────────────────┬────────────────────────────────────────────────────────┘
                 │
                 │ Notification sent to your phone:
                 │ "🚨 OpenAI releases GPT-5 | Reuters | 5 min ago"
                 │ "Reply: WRITE [angle] or SKIP"
                 │
                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      YOUR RESPONSE (SMS/Chat)                            │
│  • "WRITE OzoneNews angle on enterprise impact"                         │
│  • "WRITE 800 words focus on API pricing"                               │
│  • "SKIP" (marks item as reviewed, no action)                           │
│  • "BOOKMARK" (saves for later review)                                  │
└────────────────┬────────────────────────────────────────────────────────┘
                 │
                 │ Command parsed by Alfred
                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      ALFRED ARTICLE GENERATOR                            │
│  • Fetches original source via Jina AI Reader API                       │
│  • Extracts key facts, quotes, data points                              │
│  • Generates 1,500-2,000 word article via Claude 3.5 Sonnet             │
│  • Applies OStandard rules (no em dashes, 130-155 char description)     │
│  • Creates static JSON file in content/static/articles/                 │
│  • Generates page.tsx stub with full metadata                           │
│  • Creates opengraph-image.tsx with Satori template                     │
└────────────────┬────────────────────────────────────────────────────────┘
                 │
                 │ Draft ready
                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      DRAFT REVIEW NOTIFICATION                           │
│  "✅ Draft ready: /open-ai/gpt-5-enterprise-api-pricing-2026"           │
│  "Preview: https://draft.ozonenetwork.news/[slug]"                      │
│  "Reply: PUBLISH, EDIT [instructions], or DELETE"                       │
└────────────────┬────────────────────────────────────────────────────────┘
                 │
                 │ "PUBLISH" command
                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      AUTOMATED PUBLISHING                                │
│  1. Run sync-registry.ts --write (updates content_registry.json)        │
│  2. Git commit with message: "feat: publish [title] via Alfred"         │
│  3. Git push to main (triggers Railway deployment)                      │
│  4. Send confirmation: "🚀 Published! Live in 2 min"                    │
│  5. Post to Discord #new-articles channel                               │
│  6. Queue for newsletter (next weekly digest)                           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## RSS Feed Configuration

### File: `config/alfred-feeds.json`

```json
{
  "feeds": [
    {
      "name": "TechCrunch",
      "url": "https://techcrunch.com/feed/",
      "category": "Tech",
      "priority": "high",
      "keywords": ["OpenAI", "Google", "Microsoft", "Meta", "Nvidia", "Apple", "AI", "machine learning", "LLM"],
      "min_score": 70
    },
    {
      "name": "The Verge",
      "url": "https://www.theverge.com/rss/index.xml",
      "category": "Tech",
      "priority": "high",
      "keywords": ["iPhone", "Android", "gadget", "Google", "Apple", "Meta", "AI"],
      "min_score": 70
    },
    {
      "name": "GameSpot",
      "url": "https://www.gamespot.com/feeds/mashup/",
      "category": "Gaming",
      "priority": "high",
      "keywords": ["GTA 6", "Nintendo Switch 2", "PlayStation", "Xbox", "Fortnite", "Rockstar"],
      "min_score": 75
    },
    {
      "name": "IGN",
      "url": "https://feeds.ign.com/ign/all",
      "category": "Gaming",
      "priority": "medium",
      "keywords": ["GTA 6", "Nintendo", "PlayStation", "Xbox", "Fortnite", "release date"],
      "min_score": 75
    },
    {
      "name": "Polygon",
      "url": "https://www.polygon.com/rss/index.xml",
      "category": "Gaming",
      "priority": "medium",
      "keywords": ["GTA 6", "Nintendo Switch 2", "indie game", "game review"],
      "min_score": 70
    },
    {
      "name": "CoinDesk",
      "url": "https://www.coindesk.com/arc/outboundfeeds/rss/",
      "category": "Crypto",
      "priority": "high",
      "keywords": ["Bitcoin", "Ethereum", "crypto", "blockchain", "DeFi", "stablecoin", "USDC"],
      "min_score": 70
    },
    {
      "name": "Decrypt",
      "url": "https://decrypt.co/feed",
      "category": "Crypto",
      "priority": "medium",
      "keywords": ["crypto", "NFT", "Web3", "DeFi", "stablecoin"],
      "min_score": 70
    },
    {
      "name": "The Block",
      "url": "https://www.theblock.co/rss.xml",
      "category": "Crypto",
      "priority": "high",
      "keywords": ["crypto", "blockchain", "DeFi", "institutional", "regulation"],
      "min_score": 75
    },
    {
      "name": "Variety",
      "url": "https://variety.com/feed/",
      "category": "Entertainment",
      "priority": "medium",
      "keywords": ["Disney", "streaming", "box office", "Netflix", "HBO"],
      "min_score": 70
    },
    {
      "name": "Deadline Hollywood",
      "url": "https://deadline.com/feed/",
      "category": "Entertainment",
      "priority": "medium",
      "keywords": ["Disney", "Warner Bros", "Paramount", "streaming", "box office"],
      "min_score": 70
    },
    {
      "name": "Reuters Technology",
      "url": "https://www.reuters.com/technology",
      "category": "Tech",
      "priority": "critical",
      "keywords": ["*"],
      "min_score": 80,
      "note": "Tier 1 source — always prioritize"
    },
    {
      "name": "Bloomberg Technology",
      "url": "https://www.bloomberg.com/technology",
      "category": "Tech",
      "priority": "critical",
      "keywords": ["*"],
      "min_score": 80,
      "note": "Tier 1 source — always prioritize"
    },
    {
      "name": "Financial Times Tech",
      "url": "https://www.ft.com/technology",
      "category": "Tech",
      "priority": "critical",
      "keywords": ["*"],
      "min_score": 80,
      "note": "Tier 1 source — always prioritize"
    },
    {
      "name": "Ars Technica",
      "url": "https://feeds.arstechnica.com/arstechnica/index",
      "category": "Tech",
      "priority": "medium",
      "keywords": ["OpenAI", "Google", "Microsoft", "security", "privacy", "AI"],
      "min_score": 70
    },
    {
      "name": "VentureBeat",
      "url": "https://venturebeat.com/feed/",
      "category": "Tech",
      "priority": "medium",
      "keywords": ["AI", "machine learning", "startup", "funding", "acquisition"],
      "min_score": 70
    },
    {
      "name": "Hacker News (via Algolia)",
      "url": "https://hn.algolia.com/api/v1/search_by_date?tags=story",
      "category": "Tech",
      "priority": "low",
      "keywords": ["GTA 6", "Nintendo Switch 2", "OpenAI", "Google", "Microsoft"],
      "min_score": 85,
      "note": "High engagement threshold — HN frontpage = strong signal"
    }
  ],
  "refresh_interval_minutes": 15,
  "notification_settings": {
    "method": "telegram",
    "min_score_for_notification": 70,
    "batch_notifications": false,
    "quiet_hours": {
      "enabled": true,
      "start": "23:00",
      "end": "07:00",
      "timezone": "America/Chicago"
    }
  }
}
```

---

## Database Schema

### Table: `alfred_feed_items`

```sql
CREATE TABLE alfred_feed_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- RSS feed metadata
  feed_name TEXT NOT NULL,              -- "TechCrunch", "GameSpot", etc.
  feed_category TEXT NOT NULL,          -- "Tech", "Gaming", "Crypto", etc.
  
  -- Article metadata
  title TEXT NOT NULL,                  -- Original headline from RSS feed
  url TEXT NOT NULL UNIQUE,             -- Canonical URL to original article
  published_at TIMESTAMPTZ NOT NULL,    -- When the source published it
  summary TEXT,                         -- RSS <description> or excerpt
  author TEXT,                          -- Original author (if available)
  
  -- Alfred processing
  ingested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  relevance_score INTEGER,              -- 0-100, computed by scoring engine
  matched_keywords TEXT[],              -- Keywords that triggered high score
  category_assigned TEXT,               -- OzoneNews category (Tech, Gaming, etc.)
  
  -- Notification tracking
  notification_sent BOOLEAN DEFAULT FALSE,
  notification_sent_at TIMESTAMPTZ,
  
  -- User response
  user_response TEXT,                   -- "WRITE", "SKIP", "BOOKMARK", null
  user_response_at TIMESTAMPTZ,
  user_instructions TEXT,               -- "800 words focus on API pricing"
  
  -- Article generation
  article_generated BOOLEAN DEFAULT FALSE,
  article_slug TEXT,                    -- "/open-ai/gpt-5-enterprise-api-pricing-2026"
  article_generated_at TIMESTAMPTZ,
  
  -- Publishing
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  published_url TEXT,                   -- "https://ozonenetwork.news/open-ai/gpt-5-..."
  
  -- Metadata
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_feed_items_feed_name ON alfred_feed_items(feed_name);
CREATE INDEX idx_feed_items_category ON alfred_feed_items(feed_category);
CREATE INDEX idx_feed_items_relevance_score ON alfred_feed_items(relevance_score DESC);
CREATE INDEX idx_feed_items_published_at ON alfred_feed_items(published_at DESC);
CREATE INDEX idx_feed_items_notification_sent ON alfred_feed_items(notification_sent) WHERE notification_sent = FALSE;
CREATE INDEX idx_feed_items_user_response ON alfred_feed_items(user_response) WHERE user_response IS NOT NULL;
CREATE INDEX idx_feed_items_url ON alfred_feed_items(url);
```

---

## Implementation Files

### 1. RSS Feed Ingestion Script

**File:** `scripts/alfred-ingest-rss.ts`

```typescript
import Parser from 'rss-parser';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface FeedConfig {
  name: string;
  url: string;
  category: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  keywords: string[];
  min_score: number;
}

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  creator?: string;
}

const parser = new Parser();

async function loadFeedConfig(): Promise<FeedConfig[]> {
  const configPath = path.join(process.cwd(), 'config', 'alfred-feeds.json');
  const raw = fs.readFileSync(configPath, 'utf-8');
  const config = JSON.parse(raw);
  return config.feeds;
}

function calculateRelevanceScore(
  item: FeedItem,
  config: FeedConfig
): { score: number; matched_keywords: string[] } {
  let score = 0;
  const matched_keywords: string[] = [];
  
  const text = `${item.title} ${item.contentSnippet || ''}`.toLowerCase();
  
  // Keyword matching (40 points max)
  for (const keyword of config.keywords) {
    if (keyword === '*') {
      score += 40; // Tier 1 sources always get max keyword score
      matched_keywords.push('tier1-source');
      break;
    }
    if (text.includes(keyword.toLowerCase())) {
      score += 5;
      matched_keywords.push(keyword);
      if (score >= 40) break;
    }
  }
  
  // Recency bonus (30 points max)
  const publishedAt = new Date(item.pubDate);
  const hoursAgo = (Date.now() - publishedAt.getTime()) / (1000 * 60 * 60);
  if (hoursAgo < 1) score += 30;
  else if (hoursAgo < 4) score += 20;
  else if (hoursAgo < 12) score += 10;
  else if (hoursAgo < 24) score += 5;
  
  // Priority boost (20 points max)
  if (config.priority === 'critical') score += 20;
  else if (config.priority === 'high') score += 15;
  else if (config.priority === 'medium') score += 10;
  else score += 5;
  
  // Named entity bonus (10 points)
  const companies = ['openai', 'google', 'microsoft', 'meta', 'nvidia', 'apple', 'rockstar', 'nintendo'];
  const products = ['gta 6', 'switch 2', 'chatgpt', 'gemini', 'copilot'];
  for (const entity of [...companies, ...products]) {
    if (text.includes(entity)) {
      score += 2;
      if (!matched_keywords.includes(entity)) matched_keywords.push(entity);
      if (score >= 100) break;
    }
  }
  
  return { score: Math.min(score, 100), matched_keywords };
}

async function ingestFeed(config: FeedConfig) {
  console.log(`📥 Ingesting ${config.name}...`);
  
  try {
    const feed = await parser.parseURL(config.url);
    let newItems = 0;
    
    for (const item of feed.items) {
      if (!item.link) continue;
      
      // Check if already ingested
      const { data: existing } = await supabase
        .from('alfred_feed_items')
        .select('id')
        .eq('url', item.link)
        .single();
      
      if (existing) continue;
      
      const { score, matched_keywords } = calculateRelevanceScore(item, config);
      
      // Only ingest if score meets minimum
      if (score < config.min_score) continue;
      
      const { error } = await supabase.from('alfred_feed_items').insert({
        feed_name: config.name,
        feed_category: config.category,
        title: item.title,
        url: item.link,
        published_at: new Date(item.pubDate).toISOString(),
        summary: item.contentSnippet || null,
        author: item.creator || null,
        relevance_score: score,
        matched_keywords,
        category_assigned: config.category,
      });
      
      if (error) {
        console.error(`❌ Failed to insert ${item.title}:`, error);
        continue;
      }
      
      newItems++;
      console.log(`✅ [${score}] ${item.title}`);
    }
    
    console.log(`✅ ${config.name}: ${newItems} new items`);
  } catch (error) {
    console.error(`❌ Failed to ingest ${config.name}:`, error);
  }
}

async function main() {
  console.log('🤖 Alfred RSS Ingestion Engine\n');
  
  const feeds = await loadFeedConfig();
  
  for (const feed of feeds) {
    await ingestFeed(feed);
  }
  
  console.log('\n✅ Ingestion complete!');
}

main();
```

**Run:** `npx tsx scripts/alfred-ingest-rss.ts`

---

### 2. Notification Sender (Telegram)

**File:** `scripts/alfred-send-notifications.ts`

```typescript
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const TELEGRAM_BOT_TOKEN = process.env.ALFRED_TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.ALFRED_TELEGRAM_CHAT_ID!;

interface FeedItem {
  id: string;
  feed_name: string;
  title: string;
  url: string;
  relevance_score: number;
  matched_keywords: string[];
  published_at: string;
}

async function sendTelegramMessage(text: string) {
  await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    chat_id: TELEGRAM_CHAT_ID,
    text,
    parse_mode: 'Markdown',
  });
}

function formatNotification(item: FeedItem): string {
  const hoursAgo = Math.floor((Date.now() - new Date(item.published_at).getTime()) / (1000 * 60 * 60));
  const timeAgo = hoursAgo < 1 ? 'just now' : `${hoursAgo}h ago`;
  
  return `
🚨 *Breaking ${item.feed_name}* (Score: ${item.relevance_score})

*${item.title}*

📰 Source: ${item.feed_name}
⏰ ${timeAgo}
🔑 Keywords: ${item.matched_keywords.join(', ')}

🔗 ${item.url}

*Reply with:*
\`WRITE ${item.id.slice(0, 8)} [your instructions]\`
\`SKIP ${item.id.slice(0, 8)}\`
\`BOOKMARK ${item.id.slice(0, 8)}\`
  `.trim();
}

async function main() {
  console.log('🤖 Alfred Notification Sender\n');
  
  // Get unnotified items with high scores
  const { data: items, error } = await supabase
    .from('alfred_feed_items')
    .select('*')
    .eq('notification_sent', false)
    .gte('relevance_score', 70)
    .order('relevance_score', { ascending: false })
    .limit(10);
  
  if (error) {
    console.error('❌ Failed to fetch items:', error);
    return;
  }
  
  if (!items || items.length === 0) {
    console.log('✅ No new items to notify');
    return;
  }
  
  console.log(`📤 Sending ${items.length} notifications...\n`);
  
  for (const item of items) {
    const message = formatNotification(item);
    
    try {
      await sendTelegramMessage(message);
      
      // Mark as notified
      await supabase
        .from('alfred_feed_items')
        .update({ notification_sent: true, notification_sent_at: new Date().toISOString() })
        .eq('id', item.id);
      
      console.log(`✅ Sent: ${item.title.slice(0, 60)}...`);
      
      // Rate limit: 1 message per 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`❌ Failed to send notification for ${item.id}:`, error);
    }
  }
  
  console.log('\n✅ Notifications sent!');
}

main();
```

**Run:** `npx tsx scripts/alfred-send-notifications.ts`

---

### 3. Response Handler Webhook

**File:** `app/api/alfred/webhook/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Verify Telegram webhook signature (recommended for production)
    // const secretToken = request.headers.get('X-Telegram-Bot-Api-Secret-Token');
    // if (secretToken !== process.env.ALFRED_TELEGRAM_WEBHOOK_SECRET) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    
    const message = body.message?.text || '';
    const chatId = body.message?.chat?.id;
    
    if (!message.startsWith('WRITE') && !message.startsWith('SKIP') && !message.startsWith('BOOKMARK')) {
      return NextResponse.json({ ok: true });
    }
    
    const parts = message.split(' ');
    const command = parts[0]; // WRITE, SKIP, or BOOKMARK
    const itemId = parts[1];  // UUID prefix (first 8 chars)
    const instructions = parts.slice(2).join(' '); // Rest of message
    
    // Find the feed item by ID prefix
    const { data: items } = await supabase
      .from('alfred_feed_items')
      .select('*')
      .ilike('id', `${itemId}%`)
      .limit(1);
    
    if (!items || items.length === 0) {
      await sendTelegramReply(chatId, `❌ Could not find item with ID ${itemId}`);
      return NextResponse.json({ ok: true });
    }
    
    const item = items[0];
    
    if (command === 'SKIP') {
      await supabase
        .from('alfred_feed_items')
        .update({ user_response: 'SKIP', user_response_at: new Date().toISOString() })
        .eq('id', item.id);
      
      await sendTelegramReply(chatId, `✅ Skipped: ${item.title}`);
    }
    else if (command === 'BOOKMARK') {
      await supabase
        .from('alfred_feed_items')
        .update({ user_response: 'BOOKMARK', user_response_at: new Date().toISOString() })
        .eq('id', item.id);
      
      await sendTelegramReply(chatId, `🔖 Bookmarked: ${item.title}`);
    }
    else if (command === 'WRITE') {
      await supabase
        .from('alfred_feed_items')
        .update({
          user_response: 'WRITE',
          user_instructions: instructions || 'Standard OzoneNews coverage',
          user_response_at: new Date().toISOString()
        })
        .eq('id', item.id);
      
      await sendTelegramReply(
        chatId,
        `✅ Queued for generation: ${item.title}\n\nInstructions: ${instructions || 'Standard coverage'}\n\n⏳ Alfred is writing... (~3 min)`
      );
      
      // Trigger article generation (runs in background)
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/alfred/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: item.id })
      });
    }
    
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Alfred webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function sendTelegramReply(chatId: string, text: string) {
  await fetch(`https://api.telegram.org/bot${process.env.ALFRED_TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text })
  });
}
```

---

### 4. Article Generator

**File:** `app/api/alfred/generate/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

export async function POST(request: NextRequest) {
  try {
    const { item_id } = await request.json();
    
    // Fetch feed item
    const { data: item, error } = await supabase
      .from('alfred_feed_items')
      .select('*')
      .eq('id', item_id)
      .single();
    
    if (error || !item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    
    console.log(`🤖 Generating article for: ${item.title}`);
    
    // 1. Fetch original article content via Jina AI Reader
    const originalContent = await fetchArticleContent(item.url);
    
    // 2. Generate article via Claude
    const article = await generateArticle(item, originalContent);
    
    // 3. Write static JSON file
    const slug = generateSlug(item.title, item.category_assigned);
    const jsonPath = path.join(process.cwd(), 'content', 'static', 'articles', `${slug}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(article.json, null, 2));
    
    // 4. Write page.tsx stub
    const pageDir = path.join(process.cwd(), 'app', ...slug.split('-').slice(0, 2), slug);
    fs.mkdirSync(pageDir, { recursive: true });
    const pagePath = path.join(pageDir, 'page.tsx');
    fs.writeFileSync(pagePath, article.pageTsx);
    
    // 5. Write opengraph-image.tsx
    const ogPath = path.join(pageDir, 'opengraph-image.tsx');
    fs.writeFileSync(ogPath, article.ogImageTsx);
    
    // 6. Update feed item
    await supabase
      .from('alfred_feed_items')
      .update({
        article_generated: true,
        article_slug: `/${slug.replace(/-/g, '/')}`,
        article_generated_at: new Date().toISOString()
      })
      .eq('id', item_id);
    
    // 7. Send draft notification
    await sendDraftNotification(item, slug);
    
    console.log(`✅ Draft ready: /${slug.replace(/-/g, '/')}`);
    
    return NextResponse.json({ ok: true, slug });
  } catch (error) {
    console.error('Alfred generate error:', error);
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 });
  }
}

async function fetchArticleContent(url: string): Promise<string> {
  const response = await fetch(`https://r.jina.ai/${url}`, {
    headers: { 'X-Return-Format': 'text' }
  });
  return await response.text();
}

async function generateArticle(item: any, originalContent: string) {
  const prompt = `
You are Alfred, OzoneNews's AI writing assistant. Write a 1,500-2,000 word news article based on this source material.

**Original Source:**
${originalContent.slice(0, 4000)}

**User Instructions:** ${item.user_instructions || 'Standard OzoneNews coverage'}

**OzoneNews Standards (MANDATORY):**
1. NO em dashes (—) anywhere. Use | in headings, commas in prose.
2. Description must be 130-155 chars.
3. Title must be ≤60 chars, no brand suffix.
4. Include 3-5 external source links (Reuters, Bloomberg, company press releases).
5. Write in third person, neutral tone. No "I", "we", "our".
6. Include specific numbers, dates, company names, people names.
7. H2 headings use | separators, include primary keyword.
8. No generic AI phrases ("It is important to note", "In conclusion", etc.).

**Output Format:**
Return a JSON object with:
{
  "title": "Primary Keyword | Specific Detail",
  "subtitle": "One sentence hook, 130-155 chars, no period",
  "content_html": "<div class=\\"prose prose-lg max-w-none\\">...</div>",
  "category": "Tech|Gaming|Crypto|Entertainment",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "sources": ["https://source1.com", "https://source2.com"]
}
  `.trim();
  
  const response = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }]
  });
  
  const content = response.content[0].type === 'text' ? response.content[0].text : '';
  const json = JSON.parse(content);
  
  // Generate page.tsx and OG image stubs
  const slug = generateSlug(json.title, item.category_assigned);
  const pageTsx = generatePageStub(slug, json);
  const ogImageTsx = generateOGImageStub(json);
  
  return { json, pageTsx, ogImageTsx };
}

function generateSlug(title: string, category: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 60);
  
  const categoryPrefix = category.toLowerCase().replace(/\s+/g, '-');
  return `${categoryPrefix}-${base}`;
}

function generatePageStub(slug: string, article: any): string {
  return `
import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/${slug.replace(/-/g, '/')}';

export const metadata: Metadata = {
  title: '${article.title}',
  description: '${article.subtitle}',
  alternates: { canonical: \`https://www.ozonenetwork.news\${SLUG}\` },
};

export default function Page() {
  return <NewsArticleDB slug="${slug}" />;
}
  `.trim();
}

function generateOGImageStub(article: any): string {
  return `
import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = '${article.title}';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <NewsArticleOG
      title="${article.title}"
      category="${article.category}"
      author="OzoneNews Editorial"
      publishDate="${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}"
    />,
    { ...size }
  );
}
  `.trim();
}

async function sendDraftNotification(item: any, slug: string) {
  const message = `
✅ *Draft Ready!*

${item.title}

📝 Slug: \`/${slug.replace(/-/g, '/')}\`
🔗 Preview: https://draft.ozonenetwork.news/${slug.replace(/-/g, '/')}

*Reply with:*
\`PUBLISH ${item.id.slice(0, 8)}\`
\`EDIT ${item.id.slice(0, 8)} [new instructions]\`
\`DELETE ${item.id.slice(0, 8)}\`
  `.trim();
  
  await fetch(`https://api.telegram.org/bot${process.env.ALFRED_TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: process.env.ALFRED_TELEGRAM_CHAT_ID!,
      text: message,
      parse_mode: 'Markdown'
    })
  });
}
```

---

### 5. Auto-Publisher

**File:** `app/api/alfred/publish/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { item_id } = await request.json();
    
    // Fetch feed item
    const { data: item } = await supabase
      .from('alfred_feed_items')
      .select('*')
      .eq('id', item_id)
      .single();
    
    if (!item || !item.article_generated) {
      return NextResponse.json({ error: 'No draft to publish' }, { status: 400 });
    }
    
    console.log(`🚀 Publishing: ${item.title}`);
    
    // 1. Run sync-registry
    await execAsync('npx tsx scripts/sync-registry.ts --write');
    
    // 2. Git commit
    const commitMsg = `feat: publish ${item.title} via Alfred`;
    await execAsync(`git add -A && git commit -m "${commitMsg}"`);
    
    // 3. Git push (triggers Railway deployment)
    await execAsync('git push');
    
    // 4. Update feed item
    const publishedUrl = `https://www.ozonenetwork.news${item.article_slug}`;
    await supabase
      .from('alfred_feed_items')
      .update({
        published: true,
        published_at: new Date().toISOString(),
        published_url: publishedUrl
      })
      .eq('id', item_id);
    
    // 5. Send confirmation
    await sendPublishConfirmation(item, publishedUrl);
    
    console.log(`✅ Published: ${publishedUrl}`);
    
    return NextResponse.json({ ok: true, url: publishedUrl });
  } catch (error) {
    console.error('Alfred publish error:', error);
    return NextResponse.json({ error: 'Publish failed' }, { status: 500 });
  }
}

async function sendPublishConfirmation(item: any, url: string) {
  const message = `
🚀 *Published!*

${item.title}

🔗 ${url}

Live in ~2 minutes (Railway deployment).
  `.trim();
  
  await fetch(`https://api.telegram.org/bot${process.env.ALFRED_TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: process.env.ALFRED_TELEGRAM_CHAT_ID!,
      text: message,
      parse_mode: 'Markdown'
    })
  });
}
```

---

## Environment Variables

Add to `.env.local`:

```bash
# Alfred AI CMS
ALFRED_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
ALFRED_TELEGRAM_CHAT_ID=your_telegram_chat_id
ALFRED_TELEGRAM_WEBHOOK_SECRET=your_webhook_secret
ANTHROPIC_API_KEY=your_anthropic_api_key

# Optional: Twilio SMS (alternative to Telegram)
ALFRED_TWILIO_ACCOUNT_SID=your_twilio_sid
ALFRED_TWILIO_AUTH_TOKEN=your_twilio_token
ALFRED_TWILIO_PHONE_NUMBER=+1234567890
ALFRED_YOUR_PHONE_NUMBER=+1234567890
```

---

## Deployment Setup

### 1. Create Telegram Bot

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Send `/newbot`
3. Name it "Alfred OzoneNews"
4. Copy the bot token
5. Message your new bot to start a chat
6. Get your chat ID: `https://api.telegram.org/bot<TOKEN>/getUpdates`
7. Set webhook: `https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://ozonenetwork.news/api/alfred/webhook`

### 2. Set Up Cron Jobs (Railway)

Add to `railway.json`:

```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "numReplicas": 1,
    "sleepApplication": false,
    "restartPolicyType": "ON_FAILURE"
  },
  "cron": [
    {
      "name": "alfred-ingest-rss",
      "schedule": "*/15 * * * *",
      "command": "npx tsx scripts/alfred-ingest-rss.ts"
    },
    {
      "name": "alfred-send-notifications",
      "schedule": "*/15 * * * *",
      "command": "npx tsx scripts/alfred-send-notifications.ts"
    }
  ]
}
```

### 3. Install Dependencies

```bash
npm install rss-parser @anthropic-ai/sdk
```

---

## Usage Workflow

### Daily Flow

1. **8:00 AM** — Alfred ingests RSS feeds, finds 5 high-relevance items
2. **8:02 AM** — You receive 5 Telegram notifications on your phone
3. **8:05 AM** — You reply to one:
   ```
   WRITE abc123de Focus on enterprise API pricing, 800 words, include Stripe comparison
   ```
4. **8:08 AM** — Alfred generates draft, sends preview link
5. **8:10 AM** — You review draft on phone, reply:
   ```
   PUBLISH abc123de
   ```
6. **8:12 AM** — Alfred commits, pushes, sends confirmation
7. **8:14 AM** — Article live at `ozonenetwork.news/open-ai/gpt-5-enterprise-api-pricing-2026`

### Weekly Stats

- **~150 RSS items ingested** per day
- **~10 high-relevance notifications** per day
- **~3 articles published** per day via Alfred
- **~21 articles published** per week via Alfred
- **~90 articles published** per month via Alfred

---

## Next Steps

1. **Phase 1 (Week 1):** Set up database, RSS ingestion, Telegram bot
2. **Phase 2 (Week 2):** Implement article generator with Claude
3. **Phase 3 (Week 3):** Add auto-publisher with git integration
4. **Phase 4 (Week 4):** Add edit/delete commands, bookmarking, analytics

Want me to start implementing Phase 1 now? I can:
1. Create the Supabase migration for `alfred_feed_items` table
2. Set up the RSS ingestion script
3. Create the Telegram notification script
4. Add the webhook handler for your responses

Let me know and I'll build it! 🚀
