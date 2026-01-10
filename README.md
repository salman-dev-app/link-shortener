# 🚀 ULTRA-LINKS: Professional Monetized URL Shortener

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

**ULTRA-LINKS** is a high-performance URL shortener designed for ad monetization. Features a 4-page flow with math captchas and security timers.

---

## ⚡ Quick Deploy

Deploy your own instance of ULTRA-LINKS with one click on your favorite platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsalman-dev-app%2Flink-shortener)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/salman-dev-app/link-shortener)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/redeploy?repository=https://github.com/salman-dev-app/link-shortener)

---

## ✨ Features
- **Professional UI:** Built with Tailwind CSS v4 for a premium look.
- **4-Phase Gateway:** Homepage -> Math Captcha -> Timer -> Final Link.
- **Ad-Ready:** Specific zones optimized for high CTR (Click-Through Rate).
- **No Database Needed:** Uses Base64 encoding for link handling.

---

## 🛠️ Platforms Supported

### 1. Vercel (Recommended)
Best for Next.js apps. Automatic SSL, global CDN, and fastest performance.

### 2. Netlify
Great alternative to Vercel. Includes built-in form handling and split testing.

### 3. Railway / Render
Excellent for developers who want a more "server-like" environment. Note: Railway may require a small $5 credit for long-term hosting.

---

## 💵 Monetization Setup
To add your ads, edit the following files:
- `app/page.js`: Banner Ads
- `app/step1/page.js`: Above/Below Captcha Ads
- `app/step2/page.js`: Double Square Ads
- `app/step3/page.js`: High-impact Final Ad

Replace the `AD SPACE` placeholder divs with your ad network script (Google AdSense, Adsterra, etc.).

---

**Developed by [salman-dev-app](https://github.com/salman-dev-app)**
