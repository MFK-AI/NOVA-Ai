# NOVA AI Super-Agent — Android Build Guide

## What you get
- Full Android APK installable on any Android phone
- All 9 AIs in one app: Claude, ChatGPT, Gemini, DeepSeek, Perplexity, Kimi, Grok, Blackbox, Manus
- 3 screens: Chat (API), Accounts (API keys), Web Panel (real browser login)

---

## OPTION A — Install as PWA (Easiest, No Build Needed)

1. Upload all files to your GitHub repo (icukhalil)
2. Open Chrome on your Android phone
3. Go to your website URL
4. Tap the 3-dot menu → "Add to Home Screen"
5. Tap "Install" — NOVA appears on your home screen like an app ✅

---

## OPTION B — Build a Real APK (Requires PC)

### Prerequisites (install once)
- Node.js: https://nodejs.org (download LTS)
- Android Studio: https://developer.android.com/studio
- Java JDK 17: included with Android Studio

### Step 1 — Setup
```bash
# Create project folder
mkdir nova-app && cd nova-app

# Copy all files here: index.html, manifest.json, sw.js, capacitor.config.json, package.json

# Install dependencies
npm install
```

### Step 2 — Add Android platform
```bash
npx cap add android
npx cap sync android
```

### Step 3 — Open in Android Studio
```bash
npx cap open android
```

### Step 4 — Build APK in Android Studio
1. Menu → Build → Build Bundle(s) / APK(s) → Build APK(s)
2. Wait for build (~3 minutes)
3. Click "locate" to find your APK file
4. Transfer APK to your phone → Install

---

## OPTION C — Online Build (No PC Setup)

1. Create account at **Expo.dev** or **AppFlow (Ionic)**
2. Upload your files
3. Build APK in the cloud
4. Download and install

---

## Account Connections Explained

| AI | How to connect | Where |
|---|---|---|
| Claude | API Key | console.anthropic.com |
| ChatGPT | API Key | platform.openai.com |
| Gemini | API Key (FREE) | aistudio.google.com |
| DeepSeek | API Key | platform.deepseek.com |
| Perplexity | API Key | perplexity.ai/settings |
| Kimi | API Key (FREE) | platform.moonshot.cn |
| Grok | API Key | console.x.ai |
| Blackbox AI | Web login | Opens in Web Panel tab |
| Manus | Web login | Opens in Web Panel tab |

**API Key = YOUR account** — billing appears in your dashboard, 
usage is attributed to your account, your API quota is used.

---

## Files in this package
- `index.html` — Main app (works in browser + Android WebView)
- `manifest.json` — PWA manifest (makes it installable)
- `sw.js` — Service worker (offline support)
- `capacitor.config.json` — Android app config
- `package.json` — Dependencies for Capacitor build

---

## Quick Start (Recommended)
Use Option A (PWA) immediately.
All features work — chat, compare, agent, accounts, web panels.
