# AGENTS.md — Global Knowledge Base

> **Reference:** `README.md`
> This file acts as the consolidated set of operational rules and context for AI Agents working in this repository.

---

## 1. Overview

This repository contains the source code for the **Floristeria Rosi** web application, built with the Astro framework.
AI agents act in the role of **co-developers**: they implement new features, create UI components, manage routing, and improve styling using Tailwind CSS.

---

## 2. Commands

> **⚠️ Important regarding development server:**
> When starting the dev server via an agent, always use background mode.

```bash
# Start the server in background mode
astro dev --background

# Manage the background server
astro dev status
astro dev stop
astro dev logs

# Standard npm scripts
npm run dev
npm run build
npm run preview
```

---

## 3. Technologies and Versions

| Package                     | Purpose                                  |
| --------------------------- | ---------------------------------------- |
| `astro`                     | Core web framework                       |
| `tailwindcss`               | Utility-first CSS framework              |
| `typescript`                | Static typing                            |
| `@astrojs/partytown`        | Off-thread analytics execution           |
| `@jdevalk/astro-seo-graph`  | Strict SEO, metadata and JSON-LD graph   |

_(Refer to `package.json` for exact active dependency versions)_

---

## 4. Code Conventions

- **Astro Components**: Use `.astro` files for UI components whenever possible. Rely on Astro's Islands Architecture if client-side interactivity is required.
- **Styling**: Use Tailwind CSS for all styling, utilizing the configuration defined in `tailwind.config.ts`.
- **Architecture (The Lookbook)**: This site operates as a digital Lookbook/Catalog without explicit pricing. All CTAs drive users directly to WhatsApp.
- **Imports & Assets**: 
  - Use the `@/` path alias configured in `tsconfig.json` for all internal imports (e.g., `import logo from '@/assets/branding/logo.png'`).
  - Catalog images must maintain a strict `4:5` vertical aspect ratio.
  - When batch loading images, use Vite's `import.meta.glob('/src/assets/...', { eager: true })` instead of `Astro.glob`.
- **SEO & Analytics**:
  - Always maintain the `LocalBusiness`/`Florist` JSON-LD schema in `Layout.astro`.
  - Open Graph images must be `1200x675` and properly linked as absolute URLs (`public/og-image.webp`).
  - Third-party scripts (like Google Analytics) **MUST** be loaded using Partytown (`type="text/partytown"`) to preserve performance.
- **Documentation**: Consult the official Astro guides (https://docs.astro.build) before working on routing, framework components, content collections, styling, or internationalization.

---

## 5. Core Agent Boundaries (Always / Ask / Never)

These are absolute behavioral boundaries for the AI Agent when interacting with this specific project.

```text
Always:
  - When starting the development server, use background mode: `astro dev --background`.
  - Manage the background server using `astro dev stop`, `astro dev status`, and `astro dev logs`.
  - Consult the official Astro guides before working on core framework features.
  - Structure new pages inside `src/pages/` and reusable UI components inside `src/components/ui/` and `src/components/sections/`.
  - Maintain strict TypeScript typings (`interface Props`, custom interfaces for data) instead of relying on implicit `any`.
  - Verify your changes by running the Quality Pipeline commands (lint, format, typecheck).
  - Ensure images from Unsplash are replaced with local `.webp`/`.png` assets processed by Astro's <Image /> component.
  - Load tracking scripts via Partytown (`type="text/partytown"`) off the main thread.

Ask:
  - Before introducing new heavy dependencies (e.g., adding React/Vue frameworks if not strictly necessary).
  - Before modifying the core configuration files like `astro.config.ts` or `tailwind.config.ts` significantly.
  - Before restructuring the `src/` directory layout.

Never:
  - Start the dev server in a blocking foreground process (always use `--background`).
  - Duplicate information already present in `README.md`.
  - Commit sensitive information or `.env` files.
  - Overcomplicate the architecture; favor Astro's built-in static site generation and minimal client-side JavaScript.
  - Execute testing or build scripts automatically without asking the user.
```

---

## 6. Execution Policy (Quality Pipeline)

**The agent must never execute build or long-running commands automatically after making changes unless explicitly requested.**

After completing any change in components, configurations, or content, the agent must produce a list of specific commands that the developer should execute to verify the change, along with a reason line for each. The project uses a strict Quality Pipeline.

### Post-change verification list format

```text
Suggested commands to verify this change:

  npm run format
  # Reason: Ensures code formatting and Tailwind CSS classes are properly standardized.

  npm run dev
  # Reason: Check the local development server to ensure UI components render correctly.

  npm run build:strict
  # Reason: Executes typecheck and lint before building. Verifies that the static build completes perfectly without TypeScript or logic errors.
```
