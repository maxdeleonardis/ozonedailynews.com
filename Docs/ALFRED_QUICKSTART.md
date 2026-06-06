# Alfred AI CMS | Quick Start Guide

Alfred is your intelligent RSS feed → article automation system. It monitors news sources, notifies you on your phone, and publishes articles based on your SMS/chat responses.

---

## Setup (15 minutes)

### 1. Install Dependencies

```bash
npm install rss-parser @anthropic-ai/sdk
```

### 2. Create Supabase Table

1. Go to your Supabase project SQL Editor
2. Copy/paste the migration from `supabase/migrations/20260605000000_alfred_feed_items.sql`
3. Run the migration

### 3. Set Up Telegram Bot

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Send `/newbot`
3. Name: `Alfred OzoneNews` (or whatever you want)
4. Username: `alfred_ozonews_bot` (must be unique)
5. Copy the bot token (looks like `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### 4. Get Your Telegram Chat ID

1. Message your new bot (send any message like "hi")
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Look for `"chat":{"id":123456789}` — that's your chat ID
4. Copy the chat ID number

### 5. Set Environment Variables

Add to `.env.local`:

```bash
# Alfred AI CMS
ALFRED_TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
ALFRED_TELEGRAM_CHAT_ID=123456789
ALFRED_TELEGRAM_WEBHOOK_SECRET=your_random_secret_here

# Anthropic API (for article generation)
ANTHROPIC_API_KEY=sk-ant-api03-...

# Site URL (for webhooks)
NEXT_PUBLIC_SITE_URL=https://ozonenetwork.news
```

### 6. Test RSS Ingestion (Manual)

```bash
# This will fetch RSS feeds and store items in Supabase
npx tsx scripts/alfred-ingest-rss.ts
```

**Expected output:**
```
🤖 Alfred RSS Ingestion Engine

📥 Ingesting TechCrunch...
✅ [85] OpenAI releases GPT-5 with improved reasoning
✅ [78] Google announces Gemini 2.0 Pro
✅ TechCrunch: 12 new items

📥 Ingesting GameSpot...
✅ [92] GTA 6 trailer 3 drops tomorrow, Rockstar confirms
✅ [81] Nintendo Switch 2 pre-orders open March 2026
✅ GameSpot: 8 new items

✅ Ingestion complete!
```

### 7. Test Notifications (Manual)

```bash
# This will send Telegram notifications for high-scoring items
npx tsx scripts/alfred-send-notifications.ts
```

**Expected output:**
```
🤖 Alfred Notification Sender

📤 Sending 5 notifications...

✅ Sent: OpenAI releases GPT-5 with improved reasoning
✅ Sent: GTA 6 trailer 3 drops tomorrow, Rockstar confirms
✅ Sent: Nintendo Switch 2 pre-orders open March 2026

✅ Notifications sent!
```

**You should receive Telegram messages on your phone!**

---

## Daily Usage

### Step 1: Receive Notification

Your phone vibrates. Alfred sends:

```
🚨 Breaking TechCrunch (Score: 85)

OpenAI releases GPT-5 with improved reasoning

📰 Source: TechCrunch
⏰ 5 min ago
🔑 Keywords: OpenAI, GPT-5, AI

🔗 https://techcrunch.com/2026/06/05/openai-gpt5-launch

Reply with:
`WRITE abc12345 [your instructions]`
`SKIP abc12345`
`BOOKMARK abc12345`
```

### Step 2: Command Alfred

Reply to the message:

#### Option A: Write Article
```
WRITE abc12345 Focus on enterprise pricing, 1000 words, compare to GPT-4
```

#### Option B: Skip This Item
```
SKIP abc12345
```

#### Option C: Bookmark for Later
```
BOOKMARK abc12345
```

### Step 3: Review Draft

~3 minutes later, Alfred sends:

```
✅ Draft Ready!

OpenAI releases GPT-5 with improved reasoning

📝 Slug: `/tech/open-ai/gpt-5-enterprise-pricing-2026`
🔗 Preview: https://draft.ozonenetwork.news/tech/open-ai/gpt-5-enterprise-pricing-2026

Reply with:
`PUBLISH abc12345`
`EDIT abc12345 [new instructions]`
`DELETE abc12345`
```

### Step 4: Publish

Reply:
```
PUBLISH abc12345
```

Alfred responds:
```
🚀 Published!

OpenAI releases GPT-5 with improved reasoning

🔗 https://ozonenetwork.news/tech/open-ai/gpt-5-enterprise-pricing-2026

Live in ~2 minutes (Railway deployment).
```

---

## Automation (Set & Forget)

### Option 1: Railway Cron Jobs

Add to `railway.json`:

```json
{
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

### Option 2: GitHub Actions

Create `.github/workflows/alfred.yml`:

```yaml
name: Alfred RSS Ingestion

on:
  schedule:
    - cron: '*/15 * * * *'  # Every 15 minutes
  workflow_dispatch:  # Manual trigger

jobs:
  ingest:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - name: Ingest RSS feeds
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
          SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}
        run: npx tsx scripts/alfred-ingest-rss.ts
      - name: Send notifications
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
          SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}
          ALFRED_TELEGRAM_BOT_TOKEN: ${{ secrets.ALFRED_TELEGRAM_BOT_TOKEN }}
          ALFRED_TELEGRAM_CHAT_ID: ${{ secrets.ALFRED_TELEGRAM_CHAT_ID }}
        run: npx tsx scripts/alfred-send-notifications.ts
```

---

## Commands Reference

### Notification Response Commands

| Command | Example | What It Does |
|---|---|---|
| `WRITE [id] [instructions]` | `WRITE abc12345 800 words, focus on API pricing` | Queues article for generation with your specific angle |
| `SKIP [id]` | `SKIP abc12345` | Marks item as reviewed, no article generated |
| `BOOKMARK [id]` | `BOOKMARK abc12345` | Saves for later review (find in `/alfred/bookmarks`) |

### Draft Review Commands

| Command | Example | What It Does |
|---|---|---|
| `PUBLISH [id]` | `PUBLISH abc12345` | Commits, pushes, deploys article to production |
| `EDIT [id] [instructions]` | `EDIT abc12345 Add section on security concerns` | Regenerates article with new instructions |
| `DELETE [id]` | `DELETE abc12345` | Deletes draft files, marks item as skipped |

---

## Customization

### Add More RSS Feeds

Edit `config/alfred-feeds.json`:

```json
{
  "name": "Your New Feed",
  "url": "https://example.com/rss",
  "category": "Tech",
  "priority": "high",
  "keywords": ["keyword1", "keyword2"],
  "min_score": 70
}
```

### Adjust Relevance Scoring

Edit `scripts/alfred-ingest-rss.ts` → `calculateRelevanceScore()`:

- **Keyword matching:** 40 points max
- **Recency bonus:** 30 points max (<1h = 30pts, <4h = 20pts, <12h = 10pts, <24h = 5pts)
- **Priority boost:** 20 points max (critical = 20pts, high = 15pts, medium = 10pts, low = 5pts)
- **Named entity bonus:** 10 points max (company/product names)

### Change Quiet Hours

Edit `config/alfred-feeds.json`:

```json
"quiet_hours": {
  "enabled": true,
  "start": "22:00",
  "end": "08:00",
  "timezone": "America/New_York"
}
```

---

## Monitoring

### View All Ingested Items

```sql
SELECT 
  title,
  feed_name,
  relevance_score,
  notification_sent,
  user_response,
  published
FROM alfred_feed_items
ORDER BY ingested_at DESC
LIMIT 50;
```

### Check Pending Notifications

```sql
SELECT 
  title,
  relevance_score,
  matched_keywords,
  url
FROM alfred_feed_items
WHERE notification_sent = FALSE
  AND relevance_score >= 70
ORDER BY relevance_score DESC;
```

### View Published Articles

```sql
SELECT 
  title,
  feed_name,
  relevance_score,
  published_url,
  published_at
FROM alfred_feed_items
WHERE published = TRUE
ORDER BY published_at DESC
LIMIT 20;
```

---

## Troubleshooting

### "No new items to notify"

**Possible causes:**
1. No RSS items scored >= 70 (check `min_score` in `alfred-feeds.json`)
2. All high-scoring items already notified (check `notification_sent = TRUE`)
3. Quiet hours enabled (check config)

**Fix:** Lower `min_score` to 60 temporarily, or adjust keywords to match more items.

### "Failed to send notification"

**Possible causes:**
1. Invalid Telegram bot token
2. Invalid chat ID
3. Bot not started (you must message the bot first)

**Fix:** Verify bot token and chat ID, make sure you've sent at least one message to the bot.

### "Article generation failed"

**Possible causes:**
1. Invalid Anthropic API key
2. Rate limit exceeded (free tier: 50 requests/day)
3. Jina AI Reader API error (source URL blocked)

**Fix:** Check Anthropic API key, upgrade to paid tier, or use alternative content fetcher.

---

## Next Steps

1. **Week 1:** Run RSS ingestion + notifications manually for a few days to calibrate scoring
2. **Week 2:** Enable automation via Railway cron or GitHub Actions
3. **Week 3:** Implement article generator webhook (requires Anthropic API)
4. **Week 4:** Add auto-publisher for hands-free publishing

---

## Support

- **Documentation:** `/Docs/ALFRED_AI_CMS.md`
- **Issues:** Open GitHub issue with `[Alfred]` prefix
- **Feature Requests:** Same as issues

---

**Ready to automate your newsroom? Run the first ingestion now:**

```bash
npx tsx scripts/alfred-ingest-rss.ts
npx tsx scripts/alfred-send-notifications.ts
```

Check your phone! 📱🚀
