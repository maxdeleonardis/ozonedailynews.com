# Google Analytics & Search Console Setup Guide

## 🎯 Overview
This guide walks you through setting up Google Analytics 4 (GA4) and Google Search Console for ObjectWire. Both are **critical** for SEO monitoring and traffic analysis.

---

## Part 1: Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon in bottom left)
3. Click **+ Create Property**
4. Enter Property Details:
   - **Property name:** ObjectWire
   - **Reporting time zone:** Your timezone (e.g., America/Chicago)
   - **Currency:** USD
5. Click **Next**
6. Fill in Business Information:
   - **Industry category:** News and Media Publishers
   - **Business size:** Select appropriate size
7. Click **Next**
8. Select business objectives:
   - ✅ Examine user behavior
   - ✅ Measure advertising ROI
9. Click **Create**
10. Accept Terms of Service

### Step 2: Set Up Data Stream

1. Select **Web** as platform
2. Enter Website Details:
   - **Website URL:** `https://www.objectwire.org`
   - **Stream name:** ObjectWire Production
3. Click **Create stream**
4. **Copy your Measurement ID** (Format: `G-XXXXXXXXXX`)
   - This is shown at the top right of the Web stream details

### Step 3: Configure Your Environment

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your Measurement ID:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Save the file
5. **Restart your dev server** for changes to take effect

```bash
npm run dev
```

### Step 4: Verify Installation

1. Visit your website: `http://localhost:3000`
2. Open Chrome DevTools (F12)
3. Go to **Network** tab
4. Filter by "gtag" or "google-analytics"
5. You should see requests to `www.google-analytics.com`

**Alternative Verification:**
1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/) Chrome extension
2. Visit your site
3. Open DevTools Console
4. Look for GA debug messages

### Step 5: Check Real-Time Reports

1. Go back to Google Analytics
2. Click **Reports** > **Realtime**
3. Visit your website in another tab
4. Within 30 seconds, you should see yourself in the Real-time report

✅ **If you see activity, GA4 is working!**

---

## Part 2: Google Search Console Setup

### Step 1: Add Property

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click **Add Property**
3. Choose **URL prefix** method
4. Enter: `https://www.objectwire.org`
5. Click **Continue**

### Step 2: Verify Ownership

**Method 1: HTML Tag (Recommended)**

1. Google will show you a meta tag like:
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

2. Add this to your `app/layout.tsx` in the `<head>` section:

```tsx
export const metadata: Metadata = {
  // ... existing metadata
  verification: {
    google: 'YOUR_VERIFICATION_CODE', // Just the code, not the full tag
  },
};
```

3. Deploy your changes (or test locally with ngrok)
4. Go back to Search Console
5. Click **Verify**

**Method 2: DNS Verification (If you manage DNS)**

1. Select **DNS record**
2. Copy the TXT record provided
3. Add it to your DNS settings (where you manage objectwire.org)
4. Wait 10-30 minutes for DNS propagation
5. Click **Verify** in Search Console

### Step 3: Submit Sitemaps

Once verified:

1. Go to **Sitemaps** (left sidebar)
2. Add your sitemaps:
   - `https://www.objectwire.org/sitemap.xml`
   - `https://www.objectwire.org/news-sitemap.xml`
3. Click **Submit**

### Step 4: Verify Sitemap Status

- Wait 24-48 hours
- Check **Sitemaps** section
- Status should show:
  - ✅ **Success**
  - Number of discovered URLs

---

## Part 3: Enhanced Event Tracking (Optional but Recommended)

Your site already has basic page view tracking. To track user engagement:

### Already Implemented Events ✅

Check `/lib/tracking/ga4.ts` for:
- ✅ Page views
- ✅ Scroll depth tracking
- ✅ External link clicks
- ✅ Article read time
- ✅ Search queries
- ✅ Newsletter signups

### Custom Events You Can Add

Add these to your components:

```tsx
import { tracking } from '@/lib/tracking';

// Track article shares
tracking.trackEvent({
  action: 'share',
  category: 'engagement',
  label: 'twitter',
  value: articleId,
});

// Track video plays
tracking.trackEvent({
  action: 'video_play',
  category: 'engagement',
  label: videoTitle,
});

// Track comments
tracking.trackEvent({
  action: 'comment_posted',
  category: 'engagement',
  label: articleSlug,
});
```

---

## Part 4: Configure Important GA4 Settings

### Enable Google Signals

1. Go to **Admin** > **Data Settings** > **Data Collection**
2. Enable **Google signals data collection**
3. This allows:
   - Cross-device tracking
   - Remarketing
   - Demographics and interests reports

### Set Up Conversions

1. Go to **Admin** > **Events**
2. Mark these as conversions:
   - `newsletter_signup`
   - `article_complete` (if users read 80%+)
   - `external_link_click` (for referral tracking)

### Create Custom Reports

**1. Top Articles Report:**
- Go to **Explore** > **Blank**
- Add dimensions: `page_path`, `page_title`
- Add metrics: `event_count`, `engaged_sessions`
- Filter: pages starting with `/news/`

**2. Traffic Sources:**
- Dimensions: `source`, `medium`, `campaign`
- Metrics: `new_users`, `sessions`, `engagement_rate`

---

## Part 5: Link GA4 to Search Console

1. In Google Analytics, go to **Admin**
2. Under **Product Links**, click **Search Console Links**
3. Click **Link**
4. Select your Search Console property
5. Click **Confirm**

This allows you to see:
- Search queries in GA4
- Landing pages from Google Search
- Click-through rates
- Average position

---

## Part 6: Weekly Monitoring Checklist

### Google Analytics (Check Weekly)

- [ ] **Realtime Report:** Verify tracking is working
- [ ] **Acquisition Overview:** Top traffic sources
- [ ] **Pages and Screens:** Most viewed articles
- [ ] **Engagement:** Bounce rate, avg. session duration
- [ ] **Events:** Newsletter signups, link clicks

### Google Search Console (Check Weekly)

- [ ] **Performance:** Clicks, impressions, CTR, position
- [ ] **Coverage:** Indexing status, any errors
- [ ] **Experience:** Core Web Vitals scores
- [ ] **Sitemaps:** Ensure both sitemaps are being crawled

---

## Part 7: Troubleshooting

### GA4 Not Tracking

**Problem:** No data showing in Real-time report

**Solutions:**
1. Check `.env.local` has correct `NEXT_PUBLIC_GA_MEASUREMENT_ID`
2. Restart dev server after adding env variable
3. Clear browser cache
4. Check browser console for errors
5. Verify GA script is loading:
   ```bash
   curl -I https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX
   ```
6. Check cookie consent - analytics only loads if user accepts

### Search Console Verification Failed

**Problem:** "Verification failed"

**Solutions:**
1. Check meta tag is in `<head>` section
2. View page source - verify tag is present
3. Use exact verification code (no extra spaces)
4. Try DNS method instead
5. Ensure site is accessible (not password-protected)

### Sitemaps Not Indexing

**Problem:** "Couldn't fetch" error

**Solutions:**
1. Visit sitemap directly: `https://www.objectwire.org/sitemap.xml`
2. Check for XML errors (should be valid XML)
3. Ensure URLs use HTTPS (not HTTP)
4. Check `robots.txt` allows crawling
5. Verify correct sitemap URL in Search Console

---

## Part 8: Privacy & Cookie Consent

Your site already has cookie consent implemented via `/components/CookieConsent.tsx`.

**How it works:**
1. User visits site → sees cookie banner
2. If user accepts "Analytics" → GA4 loads
3. If user rejects → GA4 doesn't load
4. Preferences stored in `localStorage`

**GDPR Compliance:**
- ✅ IP anonymization enabled
- ✅ Consent-based loading
- ✅ Cookie policy link
- ✅ Opt-out mechanism

---

## Part 9: Advanced Setup (Month 2+)

### 1. Set Up GA4 Audiences

Create audiences for:
- Returning visitors
- High-engagement users (3+ articles read)
- Newsletter subscribers
- Mobile vs. Desktop users

### 2. Create Funnels

Track user journey:
```
Homepage → Article → Newsletter Signup → Return Visit
```

### 3. Set Up Alerts

Get notified of:
- Traffic spikes/drops (>50% change)
- Server errors (500 errors)
- Coverage issues in Search Console

### 4. Export to BigQuery (Optional)

For advanced analysis:
1. Go to **Admin** > **Product Links** > **BigQuery Links**
2. Link GA4 to BigQuery
3. Run SQL queries on raw event data

---

## Part 10: Expected Results Timeline

### Week 1
- GA4 collecting data
- Search Console verified
- Sitemaps submitted

### Week 2-4
- 100+ pages indexed
- Search appearance data available
- Traffic patterns emerging

### Month 2-3
- 500+ pages indexed
- Keyword rankings data
- Conversion tracking optimized

### Month 3+
- 1,000+ pages indexed
- Featured snippets appearing
- Data-driven optimization decisions

---

## 📊 Success Metrics

### Minimum Viable Setup (This Week)
- ✅ GA4 Measurement ID configured
- ✅ Real-time tracking confirmed
- ✅ Search Console verified
- ✅ Sitemaps submitted

### Full Setup (This Month)
- ✅ All events tracking properly
- ✅ Conversions configured
- ✅ Custom reports created
- ✅ GA4 linked to Search Console

---

## 🆘 Getting Help

**Google Analytics Support:**
- [GA4 Help Center](https://support.google.com/analytics/)
- [GA4 Community](https://support.google.com/analytics/community)

**Google Search Console Support:**
- [Search Console Help](https://support.google.com/webmasters/)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

**Your Implementation:**
- Check `/lib/tracking/ga4.ts` for tracking code
- Check `/components/GoogleAnalytics.tsx` for GA4 component
- Check `/lib/cookie-manager.ts` for consent logic

---

## ✅ Verification Checklist

Before marking this as "complete":

- [ ] GA4 Measurement ID added to `.env.local`
- [ ] Real-time report shows your test visits
- [ ] Search Console property verified
- [ ] Both sitemaps submitted (sitemap.xml, news-sitemap.xml)
- [ ] Meta verification tag added (if using HTML method)
- [ ] GA4 linked to Search Console
- [ ] Cookie consent banner tested (accept/reject both work)
- [ ] Events appearing in GA4 (page_view, scroll, etc.)

---

**Setup Time Estimate:** 30-60 minutes  
**Next Review:** 1 week after setup  
**Questions?** Check the troubleshooting section or Google's help docs.

🎉 Once complete, you'll have full visibility into your traffic and SEO performance!
