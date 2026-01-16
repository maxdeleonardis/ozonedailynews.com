# 🎯 Complete Setup Guide: Google OAuth & Analytics

## Part 1: Google Cloud Console - OAuth Setup (15 minutes)

### What You'll Get:
- ✅ **Google Client ID** (looks like: `123456789-abc123def456.apps.googleusercontent.com`)
- ✅ **Google Client Secret** (looks like: `GOCSPX-abc123def456xyz`)

These allow users to sign in with their Google accounts.

---

### Step 1: Create Google Cloud Project

1. **Open Google Cloud Console**
   - Go to: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project**
   - Click the project dropdown at the top (says "Select a project")
   - Click **"NEW PROJECT"** button (top right of the popup)
   
3. **Fill in Project Details**
   ```
   Project name: ObjectWire
   Organization: (leave as "No organization" if you don't have one)
   Location: (leave as "No organization")
   ```
   - Click **"CREATE"**
   - Wait 10-20 seconds for the project to be created
   - You'll see a notification when it's ready

4. **Select Your New Project**
   - Click the project dropdown again
   - Select "ObjectWire" from the list
   - Verify it shows "ObjectWire" in the top bar

---

### Step 2: Enable Google+ API

1. **Open API Library**
   - In the left sidebar, click **"APIs & Services"**
   - Click **"Library"**
   - You should see a page with lots of API cards

2. **Search for Google+ API**
   - In the search bar, type: `Google+ API`
   - Click on **"Google+ API"** card (has a red Google+ icon)

3. **Enable the API**
   - Click the blue **"ENABLE"** button
   - Wait 5-10 seconds
   - You'll be redirected to the API overview page

---

### Step 3: Configure OAuth Consent Screen

This is what users see when they click "Sign in with Google"

1. **Go to OAuth Consent Screen**
   - Click **"APIs & Services"** in left sidebar
   - Click **"OAuth consent screen"**

2. **Choose User Type**
   - Select **"External"** (allows anyone with a Google account)
   - Click **"CREATE"**

3. **Fill in App Information (Page 1)**
   ```
   App name: ObjectWire
   User support email: [your email address]
   
   App logo: (optional - skip for now)
   
   Application home page: https://objectwire.org
   Application privacy policy: https://objectwire.org/privacy-policy
   Application terms of service: (optional)
   
   Authorized domains:
   - Click "+ ADD DOMAIN"
   - Enter: objectwire.org
   
   Developer contact information:
   - Email: [your email address]
   ```
   - Click **"SAVE AND CONTINUE"**

4. **Scopes (Page 2)**
   - Click **"ADD OR REMOVE SCOPES"**
   - Scroll down and check these boxes:
     - ✅ `.../auth/userinfo.email` (See your email address)
     - ✅ `.../auth/userinfo.profile` (See your personal info)
     - ✅ `openid` (Associate you with your personal info)
   - Click **"UPDATE"** at the bottom
   - Click **"SAVE AND CONTINUE"**

5. **Test Users (Page 3)**
   - Click **"+ ADD USERS"**
   - Enter your email address (and any others you want to test with)
   - Click **"ADD"**
   - Click **"SAVE AND CONTINUE"**

6. **Summary (Page 4)**
   - Review everything
   - Click **"BACK TO DASHBOARD"**

---

### Step 4: Create OAuth Credentials (THIS IS IMPORTANT!)

This is where you get your Client ID and Client Secret!

1. **Go to Credentials**
   - Click **"APIs & Services"** in left sidebar
   - Click **"Credentials"**

2. **Create OAuth Client ID**
   - Click **"+ CREATE CREDENTIALS"** at the top
   - Select **"OAuth client ID"**

3. **Choose Application Type**
   - Application type: Select **"Web application"**
   - Name: `ObjectWire Web Client`

4. **Add Authorized JavaScript Origins**
   
   This tells Google where your app runs from.
   
   - Click **"+ ADD URI"** under "Authorized JavaScript origins"
   - Add these TWO URIs (one at a time):
   ```
   http://localhost:3000
   ```
   - Click **"+ ADD URI"** again
   ```
   https://objectwire.org
   ```

5. **Add Authorized Redirect URIs**
   
   This tells Google where to send users after they sign in.
   
   ⚠️ **CRITICAL**: Must be EXACT or sign-in will fail!
   
   - Click **"+ ADD URI"** under "Authorized redirect URIs"
   - Add these TWO URIs (one at a time):
   ```
   http://localhost:3000/api/auth/callback/google
   ```
   - Click **"+ ADD URI"** again
   ```
   https://objectwire.org/api/auth/callback/google
   ```
   
   ⚠️ **Double check**:
   - Includes `/api/auth/callback/google` at the end
   - No trailing slash
   - Matches your domain exactly

6. **Create and Copy Credentials**
   - Click **"CREATE"**
   - A popup appears with your credentials!
   
   📋 **COPY THESE IMMEDIATELY:**
   
   ```
   Your Client ID:
   [Copy this - looks like: 123456789-abc123.apps.googleusercontent.com]
   
   Your Client Secret:
   [Copy this - looks like: GOCSPX-abc123xyz]
   ```
   
   - Click **"DOWNLOAD JSON"** (optional, for backup)
   - Click **"OK"**

7. **Save Your Credentials**
   
   Open your `.env.local` file and add:
   ```env
   GOOGLE_CLIENT_ID=paste-your-client-id-here
   GOOGLE_CLIENT_SECRET=paste-your-client-secret-here
   ```

---

### ✅ OAuth Setup Complete!

You now have:
- ✅ Google Cloud Project created
- ✅ Google+ API enabled
- ✅ OAuth consent screen configured
- ✅ OAuth credentials created
- ✅ Client ID and Secret saved

---

## Part 2: Google Analytics 4 Setup (10 minutes)

### What You'll Get:
- ✅ **Measurement ID** (looks like: `G-ABC123XYZ`)

This allows you to track visitors, page views, and events.

---

### Step 1: Access Google Analytics

1. **Open Google Analytics**
   - Go to: https://analytics.google.com/
   - Sign in with your Google account

2. **Check for Existing Account**
   - If you already have an account, skip to "Create Property" below
   - If you see "Start measuring", you need to create an account first

---

### Step 2: Create Analytics Account (if needed)

1. **Start Account Setup**
   - Click **"Start measuring"** button
   - Or click **"Admin"** (gear icon) → **"Create Account"**

2. **Account Setup**
   ```
   Account name: ObjectWire
   
   Account data sharing settings:
   ✅ Check the boxes you're comfortable with (recommended: all)
   ```
   - Click **"Next"**

---

### Step 3: Create Property

1. **Property Setup**
   ```
   Property name: ObjectWire Production
   
   Reporting time zone: [Select your timezone]
   Example: (GMT-06:00) Central Time (US & Canada)
   
   Currency: USD - US Dollar (or your preferred currency)
   ```
   - Click **"Next"**

2. **Business Information**
   ```
   Industry category: News / Media / Publishing
   Business size: Small (1-10 employees) [or your actual size]
   ```
   - Click **"Next"**

3. **Business Objectives**
   - Select what you want to measure (check all that apply):
     - ✅ Get baseline reports
     - ✅ Examine user behavior
     - ✅ Measure customer engagement
   - Click **"Create"**

4. **Accept Terms**
   - Check the boxes to accept:
     - ✅ Google Analytics Terms of Service
     - ✅ Data Processing Amendment (if applicable)
   - Click **"I Accept"**

---

### Step 4: Set Up Data Stream (THIS IS CRITICAL!)

This is where you get your Measurement ID!

1. **Choose Platform**
   - You'll see "Choose a platform"
   - Click **"Web"** (the globe icon)

2. **Set Up Web Stream**
   ```
   Website URL: https://objectwire.org
   Stream name: ObjectWire Website
   
   Enhanced measurement:
   ✅ Leave this ON (it's enabled by default)
   
   This automatically tracks:
   - Page views
   - Scrolls
   - Outbound clicks
   - Site search
   - Video engagement
   - File downloads
   ```
   - Click **"Create stream"**

3. **Copy Your Measurement ID**
   
   📋 **THIS IS YOUR MEASUREMENT ID!**
   
   You'll see a page with:
   ```
   Measurement ID: G-XXXXXXXXXX
   ```
   
   - Look for "Measurement ID" at the top
   - It starts with "G-" followed by 10 characters
   - Click the copy icon next to it
   
   Example: `G-ABC123XYZ`

4. **View Detailed Instructions (Optional)**
   - Scroll down to see "Tagging instructions"
   - Click "Global site tag (gtag.js)" to see the code
   - You don't need this - we already have it implemented!

---

### Step 5: Configure Your App

1. **Add Measurement ID to `.env.local`**
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

2. **Verify Your `.env.local` File**
   
   Your complete file should now look like:
   ```env
   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-generated-secret
   
   # Google OAuth Credentials
   GOOGLE_CLIENT_ID=123456789-abc123.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=GOCSPX-abc123xyz
   
   # Google Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123XYZ
   
   # Cookie Configuration
   NEXT_PUBLIC_COOKIE_DOMAIN=localhost
   ```

---

### Step 6: Enhanced Measurement Settings (Optional but Recommended)

Let's configure what Google Analytics automatically tracks:

1. **Go to Stream Settings**
   - In Google Analytics, click **"Admin"** (gear icon at bottom left)
   - Under "Data collection and modification", click **"Data Streams"**
   - Click on your stream name (ObjectWire Website)

2. **Configure Enhanced Measurement**
   - Toggle to see what's being tracked:
     - ✅ **Page views** (Required - always on)
     - ✅ **Scrolls** (Tracks 90% scroll depth)
     - ✅ **Outbound clicks** (Links to external sites)
     - ✅ **Site search** (If you have search functionality)
     - ✅ **Video engagement** (YouTube, Vimeo videos)
     - ✅ **File downloads** (.pdf, .doc, .zip, etc.)
   - Recommended: Leave all ON

3. **Additional Settings** (Optional)
   - Click the gear icon next to "Enhanced measurement"
   - Configure thresholds if needed
   - Click "Save"

---

### Step 7: Set Up Custom Definitions (Optional)

Track custom user properties:

1. **Go to Custom Definitions**
   - Click **"Admin"** → **"Custom definitions"**
   - Click **"Create custom dimension"**

2. **Create Custom Dimensions**
   
   These will help you track user behavior:
   
   **Dimension 1: User Type**
   ```
   Dimension name: user_type
   Scope: User
   Description: Type of user (anonymous, registered)
   Event parameter: user_type
   ```
   - Click "Save"
   
   **Dimension 2: Content Category**
   ```
   Dimension name: content_category
   Scope: Event
   Description: Article or page category
   Event parameter: category
   ```
   - Click "Save"

---

### ✅ Google Analytics Setup Complete!

You now have:
- ✅ Analytics account created
- ✅ Property created
- ✅ Data stream configured
- ✅ Measurement ID obtained
- ✅ Enhanced measurement enabled
- ✅ Custom dimensions set up (optional)

---

## Part 3: Generate Your NEXTAUTH_SECRET

You need one more thing - a secure random secret for NextAuth.

### Option 1: PowerShell (Windows)
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

### Option 2: Online (if you don't have OpenSSL)
1. Go to: https://generate-secret.vercel.app/32
2. Copy the generated string
3. Paste it in your `.env.local` as `NEXTAUTH_SECRET`

### Option 3: Node.js (if you have it installed)
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy the output and add to `.env.local`:
```env
NEXTAUTH_SECRET=paste-the-generated-secret-here
```

---

## 🎉 Final Checklist

Before you start testing, verify you have:

### Environment Variables (`.env.local` file):
- [ ] NEXTAUTH_URL (http://localhost:3000)
- [ ] NEXTAUTH_SECRET (generated random string)
- [ ] GOOGLE_CLIENT_ID (from Google Cloud Console)
- [ ] GOOGLE_CLIENT_SECRET (from Google Cloud Console)
- [ ] NEXT_PUBLIC_GA_MEASUREMENT_ID (from Google Analytics)
- [ ] NEXT_PUBLIC_COOKIE_DOMAIN (localhost)

### Google Cloud Console:
- [ ] Project created
- [ ] Google+ API enabled
- [ ] OAuth consent screen configured
- [ ] OAuth credentials created
- [ ] Redirect URIs include: `http://localhost:3000/api/auth/callback/google`

### Google Analytics:
- [ ] Account created (if new)
- [ ] Property created
- [ ] Web data stream created
- [ ] Measurement ID copied
- [ ] Enhanced measurement enabled

---

## 🚀 Start Your Server

```bash
npm run dev
```

Visit: http://localhost:3000

You should see:
1. ✅ Cookie consent banner at the bottom
2. ✅ "Sign in with Google" button in the header
3. ✅ No console errors

---

## 🧪 Test Everything

### Test 1: Cookie Consent
1. Open http://localhost:3000
2. You should see a cookie banner
3. Click "Customize"
4. Toggle analytics cookies
5. Click "Save Preferences"
6. Refresh page - banner should not appear

### Test 2: Google Sign-In
1. Click "Sign in with Google" button
2. You should see Google's sign-in popup
3. Select your Google account
4. Grant permissions
5. You should be redirected back to your site
6. Your profile picture should appear in the header
7. Click it to see the dropdown menu
8. Click "Sign Out"

### Test 3: Google Analytics
1. Accept analytics cookies (if rejected earlier)
2. Navigate to a few pages
3. Go to: https://analytics.google.com/
4. Click "Reports" → "Realtime"
5. Wait 5-10 minutes
6. You should see your visit in the real-time report

---

## 🐛 Common Issues & Solutions

### Issue: "redirect_uri_mismatch"
**Solution**: 
- Go back to Google Cloud Console
- Check your redirect URIs EXACTLY match:
  - `http://localhost:3000/api/auth/callback/google`
- No extra spaces, no trailing slash
- Restart your dev server after fixing

### Issue: "Invalid client secret"
**Solution**:
- Double-check you copied the entire secret
- Check for extra spaces in `.env.local`
- Make sure the file is named `.env.local` (not `.env.local.txt`)

### Issue: Analytics not receiving data
**Solution**:
1. Check that you accepted analytics cookies
2. Verify Measurement ID is correct (starts with G-)
3. Check browser console for errors
4. Wait 10-15 minutes (data is delayed)
5. Try visiting in an incognito window

### Issue: Changes not reflecting
**Solution**:
```bash
# Stop the server (Ctrl+C)
# Restart it
npm run dev
```

---

## 📞 Still Need Help?

If you're stuck on a specific step, let me know which part and I'll help you troubleshoot!

- **Step 1-4**: Google OAuth issues
- **Step 5-7**: Google Analytics issues  
- **Testing**: If something doesn't work after setup

**Ready to go?** Start with Part 1: Google Cloud Console OAuth Setup! 🚀
