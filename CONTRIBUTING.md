# Contributing to Almena Network Web

Thanks for your interest in contributing! This repository holds the
**public-facing marketing and information site** for the Almena Network — a
static [Astro](https://astro.build/) site, bilingual (English / Spanish),
deployed to a static host.

By participating in this project you agree to abide by our
[Code of Conduct](CODE_OF_CONDUCT.md).

## Table of contents

- [Scope of this repository](#scope-of-this-repository)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Content and copy](#content-and-copy)
- [Coding conventions](#coding-conventions)
- [Commits and pull requests](#commits-and-pull-requests)
- [Reporting issues](#reporting-issues)
- [Security](#security)
- [License](#license)

## Scope of this repository

This repo is **only** the marketing/information website. The Almena
applications (the client, the node software, the blockchain) live in separate
repositories. Please keep pull requests here focused on the website: copy,
pages, layout, styling, accessibility, performance, and build tooling.

If your change concerns the protocol, node, or client software, open it in the
corresponding repository instead.

## Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| [**Task**](https://taskfile.dev/) | 3.x | Task runner |
| [**Node.js**](https://nodejs.org/) | 20+ | Astro, Vite |
| [**pnpm**](https://pnpm.io/) | Latest | Package manager |

## Getting started

```bash
# From this directory
task install     # install dependencies
task dev         # run the dev server with hot reload
task build       # build the static site to dist/
task preview     # serve the built site locally
```

From the repository root you can prefix with `-d web`, e.g. `task -d web dev`.

Run `task --list` to see all available tasks.

## Project structure

```
src/
  components/    Astro components (page sections, diagrams, mockups)
  data/          landing.ts — single source of truth for content and copy
  layouts/       Shared page layout
  pages/         Routes; English at the root, Spanish under /es/
public/          Static assets served as-is
```

Key routes: `/` (home), `/identity/`, `/messaging/`, `/network/`, `/coin/`, and
their Spanish counterparts under `/es/`.

## Content and copy

- **Bilingual first.** Every user-facing string exists in both English and
  Spanish. Content is data-driven from
  [`src/data/landing.ts`](src/data/landing.ts) — add or edit copy there rather
  than hardcoding strings inside components.
- **English is the default locale**; Spanish lives under `/es/`. Keep both in
  sync in the same change.
- **The launch date is a single constant.** The countdown target lives in
  `src/data/landing.ts` (`launch.date`, ISO 8601, UTC). Change that one line to
  move the date — do not duplicate it.
- **The network is the product; messaging is one use case.** Keep framing
  consistent with the existing pages: Almena is a general-purpose decentralized
  platform, not "just a messenger."
- **The ALMENA coin economics are still being designed** — do not publish
  amounts, prices, or token values on the coin page; those go live at mainnet.

## Coding conventions

- Write all code, comments, and commit messages in **English**.
- Prefer editing existing components over duplicating them; keep one shared
  implementation per piece of UI (DRY).
- Keep the site **static, accessible, and fast** — avoid unnecessary
  client-side JavaScript and heavy dependencies.
- Make sure `task build` completes cleanly before opening a pull request.

## Commits and pull requests

1. Fork the repository and create a branch from `main`.
2. Make your changes in focused, logical commits with clear messages
   (imperative mood, e.g. "Add roadmap section to network page").
3. Verify locally: `task build` succeeds and the affected pages render as
   expected in `task dev`.
4. Open a pull request against `main` describing **what** changed and **why**.
   Include before/after screenshots for visual changes, and note whether both
   the English and Spanish copy were updated.
5. Be responsive to review feedback. Maintainers may request changes before
   merging.

Small fixes (typos, broken links, copy tweaks) are always welcome and can go
straight to a pull request.

## Reporting issues

Use the GitHub issue tracker to report bugs, broken links, rendering problems,
or to suggest content improvements. Please include:

- The affected page/route and locale (EN or ES)
- What you expected vs. what you saw
- Browser and device, plus a screenshot when relevant

## Security

Do **not** report security vulnerabilities through public issues or pull
requests. See [SECURITY.md](SECURITY.md) for how to report them privately.

## License

By contributing, you agree that your contributions will be licensed under the
[GNU General Public License v3.0](LICENSE), the same license that covers this
project.
