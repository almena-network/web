# Almena Network Web

Public-facing site for the Almena Network. It presents, graphically, the **Almena Founding Charter** — the platform's constitutional document: *Protocol of Sovereignty, Reputation & Integrity*.

## Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| [**Task**](https://taskfile.dev/) | 3.x | Task runner |
| [**Node.js**](https://nodejs.org/) | 20+ | Astro, Vite |
| [**pnpm**](https://pnpm.io/) | Latest | Package manager |

## Description

A single-purpose site built with Astro: one page per language that renders the founding charter as a graphical narrative — hero + mission, the social contract, the identity layer (Holders / Issuers / circular governance), the trust & reputation graph, capability milestones, distributed arbitration, positive friction, resilience, and the final declaration. Each section pairs the charter's text with a purpose-built SVG diagram. Content is fully bilingual (English / Spanish) and driven by a single source of truth, `src/data/charter.ts`. Suitable for deployment to any static host (Vercel, Netlify, etc.).

The charter itself is authored as an agent rule (`.cursor/rules/almena-founding-charter.mdc`); this site is the public, visual expression of the same principles.

### Content

All copy — both locales — lives in `src/data/charter.ts`. Edit that file to change wording; the section components read from it and never hardcode text.

### Pages

| Route | Description |
|-------|-------------|
| `/` | The founding charter, in English |
| `/es/` | The founding charter, in Spanish |

### Structure

| Path | Purpose |
|------|---------|
| `src/data/charter.ts` | Single source of truth for all charter copy (en / es) |
| `src/components/CharterPage.astro` | Assembles the page: header, all sections, footer |
| `src/components/charter/*.astro` | One component per charter section (SVG diagram + text) |
| `src/components/CharterHeader.astro`, `CharterFooter.astro` | Nav (in-page section anchors + language switch) and footer |
| `src/layouts/LandingLayout.astro` | Base layout: brand tokens and shared section primitives |

## Tech Stack

- **Framework**: Astro 6
- **Analytics**: Vercel Analytics
- **Package manager**: pnpm

## Tasks (Taskfile)

Run `task` or `task --list` from this directory.

| Task | Description |
|------|-------------|
| `task install` | Install dependencies |
| `task dev` | Run dev server with hot reload |
| `task build` | Build static site to `dist/` |
| `task preview` | Serve built site locally |
| `task serve` | Serve built site (run build first) |
| `task clean` | Remove build artifacts (dist/) |

From the repo root: `task -d web install`, `task -d web build`, etc.
