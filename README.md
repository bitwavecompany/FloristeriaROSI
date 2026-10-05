# Floristeria Rosi

This repository hosts the source code for the **Floristeria Rosi** web application. It is a modern web project built with the [Astro](https://astro.build/) framework and Tailwind CSS.

### 🌸 Project Concept: The Digital Lookbook
Floristeria ROSI is a local florist specializing in natural flowers, "eternal" flowers (handmade), and special arrangements (plushies, chocolates). The website is designed as a **visual lookbook/catalog**.
- **No e-commerce checkout or pricing:** All call-to-actions drive the user directly to WhatsApp with pre-filled messages.
- **Image-driven:** Heavy reliance on high-quality photography, structured via categories (`naturales`, `eternas`, `especiales`).

---

## Prerequisites

| Tool    | Version                |
| ------- | ---------------------- |
| Node.js | ≥ 18 (LTS recommended) |
| npm     | bundled with Node.js   |

---

## Installation

```bash
npm install
```

---

## Running the Application

All commands are run from the root of the project, using a terminal.

### 💻 Development Commands
| Command                    | Action                                                    |
| -------------------------- | --------------------------------------------------------- |
| `npm run dev`              | Starts local dev server at `localhost:4321`               |
| `npm run preview`          | Previews your build locally, before deploying             |
| `npm run graphify:rebuild` | Analyzes and generates a codebase graph map for AI agents |

### 🛡️ Quality Pipeline (Auditing & Building)
| Command                    | Action                                                                   |
| -------------------------- | ------------------------------------------------------------------------ |
| `npm run format`           | Formats all code using Prettier (including Tailwind class sorting)       |
| `npm run lint`             | Checks code quality, logic errors, and accessibility using ESLint        |
| `npm run typecheck`        | Strictly verifies TypeScript and Astro props using `astro check`         |
| `npm run audit:security`   | Scans NPM dependencies for known security vulnerabilities                |
| **`npm run build:strict`** | **The ultimate command**: Runs typecheck, lint, and builds for production|

---

## Project Structure

```text
/
├── .agents/          ← Agent-specific context and skills
├── public/           ← Static assets (favicons, og-image.webp, robots.txt)
├── src/
│   ├── assets/       ← Processed assets (optimized by Astro)
│   │   ├── branding/ ← Logos and brand identity
│   │   ├── catalog/  ← Product photos divided by category
│   │   └── ui/       ← UI backgrounds and hero images
│   ├── components/   ← Reusable Astro components
│   ├── layouts/      ← Page layouts (includes SEO, JSON-LD and GA)
│   └── pages/        ← File-based routing (index.astro, 404.astro)
├── AGENTS.md         ← Repo-wide AI agent rules and conventions
├── astro.config.ts   ← Astro framework configuration (TypeScript)
├── eslint.config.mjs ← ESLint flat configuration
├── tailwind.config.ts ← Tailwind CSS configuration
├── package.json      ← Project dependencies and scripts
└── README.md         ← Project overview and setup (this file)
```

---

## 🚀 Deployment (Vercel)

This project is configured to be easily deployed on **Vercel**. 
1. Import the repository into your Vercel dashboard.
2. Vercel will automatically detect the Astro framework and build settings.
3. **Important:** Once deployed, update the `site` URL in `astro.config.ts` to match your Vercel domain (e.g., `https://floristeria-rosi.vercel.app`) to ensure your Sitemap and Open Graph images work correctly.

---

## 📈 SEO & Analytics

- **SEO:** Handled by `@jdevalk/astro-seo-graph`. A `LocalBusiness`/`Florist` JSON-LD schema is injected into the `<head>` to boost local search rankings on Google Maps. Open Graph meta tags and a default `og-image.webp` are configured for social media and WhatsApp sharing.
- **Analytics:** Google Analytics (GA4) is integrated via **Partytown** (`@astrojs/partytown`). The script is loaded in a web worker off the main thread, ensuring a `100/100` performance score. Replace the `G-XXXXXXXXXX` placeholder in `src/layouts/Layout.astro` with your actual tracking ID.
