# ObjectWire × Discord Integration Blueprint

## The Core Idea

Every article on ObjectWire has a comment section powered by Discord. When a reader comments on an article, two things happen simultaneously:

1. The comment is **saved to Supabase** (`discord_comments` table) so it persists on the website
2. The comment is **forwarded via webhook** to a Discord Forum Channel where it becomes a permanent, threaded discussion

This creates a flywheel: **website traffic feeds the Discord community, and Discord activity feeds the website.**

---

## How Forum Channel Integration Works

### Why a Forum Channel?

Discord Forum Channels were designed for exactly this use case, organized, searchable, topic-based discussions. Unlike regular channels:

- Each article automatically gets its own **Forum Post** (thread), no manual channel creation
- Posts are **browsable and searchable**, Discord users can scroll through articles like a feed
- Posts support **tags**, we can tag by beat (Tech, News, Entertainment, etc.)
- Posts **auto-archive** when inactive but reopen instantly when someone replies
- One channel handles **unlimited articles** cleanly

### The Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                         READER ON SITE                              │
│                                                                     │
│  1. Reader clicks "Comment" on any article                          │
│  2. Signs in with Discord OAuth (or is already signed in)           │
│  3. Types comment, hits "Post"                                      │
│                                                                     │
└───────────────────────────┬─────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     POST /api/discord/comments                      │
│                                                                     │
│  1. Validates Discord session + comment body (≤1000 chars)          │
│  2. INSERT into Supabase `discord_comments` table                   │
│  3. Check `discord_threads` table for existing thread_id            │
│     - If none → webhook with `thread_name: "Article Title"`         │
│       Discord auto-creates a new Forum Post, returns thread_id      │
│       Store thread_id in `discord_threads` for future comments      │
│     - If exists → webhook with `?thread_id=<id>` query param        │
│       Comment appears as a reply in the existing Forum Post         │
│  4. Return comment to frontend for instant display                  │
│                                                                     │
└───────────────────────────┬─────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    DISCORD FORUM CHANNEL                             │
│                    #article-discussion                               │
│                                                                     │
│  ┌─────────────────────────────────────┐                            │
│  │ 📰 Amazon's New AI Chip Challenges   │ ← Forum Post (auto-created│
│  │    NVIDIA Dominance                  │    by first comment)       │
│  │                                     │                            │
│  │  JohnDoe via ObjectWire:            │                            │
│  │  "This is huge for the industry..." │                            │
│  │                                     │                            │
│  │  JaneSmith via ObjectWire:          │                            │
│  │  "I think NVIDIA will respond..."   │                            │
│  │                                     │                            │
│  │  [Read full article →]              │ ← Link back to site        │
│  └─────────────────────────────────────┘                            │
│                                                                     │
│  ┌─────────────────────────────────────┐                            │
│  │ 📰 KSI Announces New Boxing Match    │ ← Different article       │
│  │                                     │                            │
│  │  GamerX via ObjectWire:             │                            │
│  │  "Let's gooo!"                      │                            │
│  └─────────────────────────────────────┘                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### What Discord Users See

Every webhook message in the Forum Post includes:

- **Username + avatar** of the commenter
- **Comment text** as the message body
- **Article title + link** back to the full article on ObjectWire
- **Timestamp**
- **Article category/beat** as a footer tag

Discord members who weren't on the website can:
- React to comments with emoji
- Reply to start deeper discussions
- Click the article link to read the full piece on ObjectWire
- Get notified when new comments are posted (if they follow the post)

### Webhook Payload (Technical)

First comment on a new article:
```json
{
  "username": "JohnDoe via ObjectWire",
  "avatar_url": "https://cdn.discordapp.com/avatars/123/abc.png",
  "thread_name": "Amazon's New AI Chip Challenges NVIDIA Dominance",
  "embeds": [{
    "color": 5793266,
    "description": "This is huge for the semiconductor industry...",
    "author": {
      "name": "JohnDoe",
      "icon_url": "https://cdn.discordapp.com/avatars/123/abc.png"
    },
    "fields": [{
      "name": "📰 Read Article",
      "value": "[Amazon's New AI Chip →](https://www.objectwire.org/amazon/ai-chip)"
    }],
    "footer": { "text": "Tech · objectwire.org" },
    "timestamp": "2026-03-21T15:30:00Z"
  }]
}
```

Subsequent comments on the same article hit:
```
POST https://discord.com/api/webhooks/{id}/{token}?thread_id=1234567890
```

The `thread_id` is stored in a `discord_threads` table so we never create duplicate posts.

---

## Database Schema

### Existing: `discord_comments` (in Supabase)

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| slug | TEXT | Article slug (e.g., `amazon/ai-chip`) |
| discord_id | TEXT | Commenter's Discord user ID |
| discord_username | TEXT | Display name |
| discord_avatar | TEXT | Avatar CDN URL |
| body | TEXT | Comment text (≤1000 chars) |
| created_at | TIMESTAMPTZ | When posted |

### New: `discord_threads` (needs to be created)

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| slug | TEXT | Article slug (UNIQUE) |
| thread_id | TEXT | Discord Forum Post thread ID |
| thread_name | TEXT | Article title used when creating |
| created_at | TIMESTAMPTZ | When the forum post was first created |

This ensures: one article → one Forum Post → all comments threaded together.

---

## How the Website Promotes the Discord

The integration is designed so that **every touchpoint on the site nudges users toward Discord.** Here's every surface:

### 1. Comment Section (Every Article)

The `<DiscordComments>` component appears at the bottom of every article. It has three built-in conversion points:

**For signed-out users:**
- Large Discord-branded sign-in gate with the message: *"Sign in with Discord to join the conversation"*
- Subtext: *"Your comments appear live in our Discord server, every post grows the community."*
- Link: *"Don't have Discord? Join our server first →"* pointing to `discord.gg/objectwire`

**After posting a comment:**
- Success toast includes: *"See it live in Discord →"* with invite link

**Community growth banner (always visible):**
- Bottom of comment section: *"Every comment appears live in our Discord server."*
- CTA button: **"Join ObjectWire Discord"** with Discord branding

### 2. ReactionBar "Comment" Button (Every Article)

The existing ReactionBar on every article has a 💬 Comment button that scrolls to `#discord-comments`. This means:
- Users see the Discord branding every time they want to engage
- The comment section doubles as a Discord recruitment funnel

### 3. Header / Navigation

Add a small Discord icon in the site header next to the auth button. Clicking it opens `discord.gg/objectwire` in a new tab. Always visible, zero friction.

### 4. Article Sidebar / Related Content

On article pages, include a "Join the Discussion" card in the sidebar:
- Shows the number of comments from the Discord thread
- Discord-branded with blurple accent
- Direct invite link

### 5. Newsletter Signup Confirmation

After newsletter signup, show: *"Want real-time updates? Join our Discord →"*

### 6. User Profile Dropdown

The existing `UserProfile` dropdown already shows Discord link status. When a user hasn't linked Discord:
- Show "Link Discord" with an explanation: *"Comment on articles + join our community"*

### 7. New Article Notifications (Phase 2)

When a new article is published, a webhook posts to a `#new-articles` channel in Discord:
- Article title, thumbnail, category, excerpt
- Direct link to the article
- This drives Discord users → website traffic

---

## Growth Flywheel

```
                    ┌──────────────────┐
                    │   Reader visits   │
                    │    article on     │
                    │    ObjectWire     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Sees Discord     │
                    │  comment section  │──→ Signs up for Discord
                    │  (conversion CTA) │     to comment
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Posts comment    │
                    │  on article       │
                    └────────┬─────────┘
                             │
                    ┌────────┴─────────┐
                    │                  │
                    ▼                  ▼
           ┌───────────────┐  ┌───────────────┐
           │  Saved to      │  │  Appears in    │
           │  Supabase      │  │  Discord Forum │
           │  (site shows   │  │  (community    │
           │   comments)    │  │   sees it)     │
           └───────────────┘  └───────┬────────┘
                                      │
                                      ▼
                             ┌──────────────────┐
                             │  Discord members  │
                             │  see discussion,  │
                             │  click article    │──→ MORE site traffic
                             │  link to read it  │
                             └──────────────────┘
```

**Every comment creates two pieces of content** — one on the site, one in Discord. Both drive traffic to the other.

---

## Discord Server Structure (Recommended)

```
OBJECTWIRE DISCORD SERVER
│
├── 📢 ANNOUNCEMENTS
│   ├── #new-articles        ← Webhook: auto-posts when articles publish
│   └── #site-updates        ← Manual: feature announcements, changelog
│
├── 💬 ARTICLE DISCUSSION (Forum Channel)
│   └── #article-discussion  ← Webhook: comments auto-create/append posts
│
├── 🗣️ COMMUNITY
│   ├── #general             ← Free chat
│   ├── #tech                ← Beat-specific discussion
│   ├── #entertainment
│   ├── #news
│   └── #introductions       ← New members introduce themselves
│
├── 📰 BEATS (Read-only)
│   ├── #tech-feed           ← Webhook: new tech articles auto-post
│   ├── #news-feed           ← Webhook: new news articles auto-post
│   └── #entertainment-feed  ← Webhook: new entertainment articles auto-post
│
└── 🔧 META
    ├── #feedback            ← Community feedback on the site
    └── #bug-reports         ← Report site issues
```

### Key Channels

| Channel | Type | Purpose | Webhook? |
|---------|------|---------|----------|
| #article-discussion | Forum | All article comments land here as threaded posts | Yes, `DISCORD_COMMENTS_WEBHOOK_URL` |
| #new-articles | Text | Auto-posts every new article with thumbnail + link | Yes, Phase 2 |
| #general | Text | Organic community chat | No |

---

## Environment Variables Needed

```env
# Discord OAuth (already configured)
DISCORD_CLIENT_ID=your_app_client_id
DISCORD_CLIENT_SECRET=your_app_client_secret

# Forum Channel webhook | the ONLY webhook needed for comments
# Create in: Server Settings → Integrations → Webhooks → target #article-discussion
DISCORD_COMMENTS_WEBHOOK_URL=https://discord.com/api/webhooks/{id}/{token}

# (Phase 2) New article notification webhook → #new-articles channel
DISCORD_NEW_ARTICLES_WEBHOOK_URL=https://discord.com/api/webhooks/{id}/{token}
```

---

## Setup Steps

### Discord Side (One-time, ~5 minutes)

1. **Create the Forum Channel**
   - Server Settings → Channels → Create Channel
   - Name: `article-discussion`
   - Type: **Forum**
   - Default sort: Recent Activity
   - Available tags: `Tech`, `News`, `Entertainment`, `Finance`, `Sports` (match your beats)

2. **Create a Webhook for that channel**
   - Server Settings → Integrations → Webhooks → New Webhook
   - Name: `ObjectWire Comments`
   - Channel: `#article-discussion`
   - Copy the webhook URL → paste into `.env.local` as `DISCORD_COMMENTS_WEBHOOK_URL`

3. **Set up the Discord OAuth app** (already done)
   - Ensure redirect URL is set to `https://www.objectwire.org/api/auth/callback/discord`

### Code Side (What we'll build)

1. **Wire API to Supabase**, Replace in-memory `commentStore` with `discord_comments` table
2. **Add `discord_threads` table**, Track which articles already have Forum Posts
3. **Forum Post auto-creation**, First comment creates the post, subsequent comments reply to it
4. **Embed `<DiscordComments>` in all article types**, NewsArticle, JackArticle, ArticlePage
5. **Add `#comments` scroll anchor**, ReactionBar comment button scrolls to it

---

## Implementation Priority

| Priority | Task | Effort |
|----------|------|--------|
| P0 | Wire `/api/discord/comments` to Supabase (replace in-memory) | 30 min |
| P0 | Create `discord_threads` table + thread tracking logic | 30 min |
| P0 | Add `thread_name` / `thread_id` to webhook payload | 15 min |
| P0 | Embed `<DiscordComments>` in all article components | 15 min |
| P1 | Discord invite link in site header | 10 min |
| P1 | New article notification webhook (#new-articles) | 30 min |
| P2 | Beat-specific article feed channels | 30 min |
| P2 | Bi-directional sync (Discord replies → site) | Requires bot |
| P3 | Member count widget on site | 15 min |

---

## Metrics to Track

| Metric | Where | What it tells you |
|--------|-------|-------------------|
| `discord_sign_in` | GA4 | How many site visitors auth with Discord |
| `discord_comment` | GA4 | Comments posted per article |
| Comment count per slug | Supabase | Which articles generate discussion |
| Discord member growth | Discord Server Insights | Is the website driving signups? |
| Click-throughs from Discord | GA4 referrer | Are Discord members coming to the site? |
| Forum Post engagement | Discord Server Insights | Which articles get the most Discord reactions |

---

## Phase 2: Bi-Directional Sync (Future)

Currently the flow is **one-way: site → Discord.** Phase 2 adds the reverse:

- A lightweight Discord bot listens for new messages in the Forum Channel
- When a Discord-native user replies to a Forum Post, the bot calls `POST /api/discord/comments/sync` with the message content
- The comment appears on the website under that article's comment section
- This means the conversation is identical on both platforms

This requires a hosted bot (can run on the same VPS or a free Railway/Fly.io deploy). Not needed for launch, the one-way flow already creates massive value.
