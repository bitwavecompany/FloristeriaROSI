<div align="center">
  <h1>🌸 Floristería ROSI</h1>
  <p><strong>The Digital Lookbook for the Best Local Florist</strong></p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Astro-5.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/SEO-100%25-00C7B7?style=for-the-badge" alt="SEO Optimized" />
  </p>
</div>

---

## 📋 Table of Contents

1. [About the Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Quick Start](#-quick-start)
6. [Available Scripts](#-available-scripts)
7. [SEO & Analytics](#-seo--analytics)
8. [Deployment](#-deployment)

---

## 📖 About the Project

**Floristería ROSI** is a modern web application designed as a **Digital Lookbook/Catalog**. It showcases natural flower arrangements, eternal (handmade) bouquets, and special gifts in a highly visual way. The site intentionally omits a traditional e-commerce checkout. Instead, all call-to-actions (CTAs) redirect users directly to **WhatsApp** with pre-filled messages, ensuring immediate and personalized customer service.

---

## ✨ Key Features

- **Extreme Speed (Zero-JS):** Built using Astro's Islands Architecture. Ships zero blocking JavaScript to the client by default.
- **Direct WhatsApp Funnel:** Products are linked directly to WhatsApp chats, optimizing local sales conversions.
- **Visual Performance:** On-the-fly optimized and responsive images via Astro's `<Image />` component.
- **Built-in Local SEO:** Injects `LocalBusiness` and `Florist` JSON-LD schemas to dominate Google Maps and local search results.
- **Off-Thread Analytics:** Google Analytics (GA4) runs entirely in a Web Worker using _Partytown_, tracking metrics without impacting page load times.

---

## 🛠 Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Typing:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) (Lucide & MDI)
- **Animations:** [Motion](https://motion.dev/)
- **SEO & Graph:** [@jdevalk/astro-seo-graph](https://github.com/jdevalk/seo-graph)
- **Analytics:** [@astrojs/partytown](https://partytown.builder.io/)

---

## 📂 Project Structure

Astro relies on file-based routing. Here is the core topology:

```text
/
├── .agents/          ← AI Agent context rules (AGENTS.md)
├── public/           ← Static assets (robots.txt, og-image.webp, favicons)
├── src/
│   ├── assets/       ← Source images optimized automatically by Astro
│   ├── components/   ← Reusable Astro UI blocks
│   ├── layouts/      ← Master templates (handles <head>, SEO, and Analytics)
│   └── pages/        ← Application routes (index.astro, 404.astro)
├── AGENTS.md         ← Repo-wide AI agent rules and conventions
├── astro.config.ts   ← Framework configuration and integrations
└── tailwind.config.ts ← Tailwind CSS design tokens
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js:** Version 18.0 or higher.
- **Package Manager:** npm, pnpm, or yarn.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bitwavecompany/FloristeriaROSI.git
   cd FloristeriaROSI
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   _(Note: The project uses an `.npmrc` file with `legacy-peer-deps=true` to automatically resolve strict Astro/Tailwind peer dependency constraints)._

3. Start the development server:
   ```bash
   npm run dev
   ```
   > Visit `http://localhost:4321` to view the app live.

---

## 💻 Available Scripts

This project enforces a strict quality pipeline to ensure code integrity before deployment.

| Command                    | Description                                                           |
| -------------------------- | --------------------------------------------------------------------- |
| `npm run dev`              | Starts the local dev server with Hot Module Replacement (HMR).        |
| `npm run preview`          | Serves the compiled build locally to preview the final result.        |
| `npm run format`           | Formats codebase and sorts Tailwind classes using Prettier.           |
| `npm run lint`             | Scans code for bad practices and syntax errors using ESLint.          |
| `npm run typecheck`        | Strictly verifies TypeScript and Astro component props.               |
| **`npm run build:strict`** | **Recommended before deploy.** Runs lint, typecheck, and final build. |

---

## 📈 SEO & Analytics

### Technical SEO

The site achieves a **100/100 SEO score** through:

- **`Layout.astro`** dynamically injecting `Florist` JSON-LD schema with address, phone numbers, and operating hours for the Google Local Pack.
- Automatic Open Graph (`og:image`) and Twitter Cards metadata pointing to `public/og-image.webp` for rich social media sharing.
- Strict compile-time validation via `astro-seo-graph` (ensuring unique H1s, internal link integrity, and alt texts).

### Analytics (Google Analytics)

Tracking is handled securely without blocking the main thread:

1. Powered by **Partytown**.
2. To update the tracking ID, open `src/layouts/Layout.astro`.
3. Locate the `<script type="text/partytown">` tag and replace `G-XXXXXXXXXX` with your official Measurement ID.

---

## ☁️ Deployment

This repository is pre-configured for frictionless deployment on **Vercel**.

1. Import the repository into your Vercel dashboard.
2. Vercel will automatically detect the Astro framework and install dependencies.
3. **Post-Deployment Step:** If you connect a custom domain in the future, remember to update the `site` property inside `astro.config.ts` so that your `robots.txt` and sitemaps resolve correctly.
