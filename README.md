# Almena Network Web

Public-facing marketing and information site for the Almena Network decentralized messenger platform.

## Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| [**Task**](https://taskfile.dev/) | 3.x | Task runner |
| [**Node.js**](https://nodejs.org/) | 20+ | Astro, Vite |
| [**pnpm**](https://pnpm.io/) | Latest | Package manager |

## Description

Static site built with Astro. Content is fully bilingual (English / Spanish) and driven by `src/data/landing.ts`. Suitable for deployment to any static host (Vercel, Netlify, etc.).

### Pages

| Route | Description |
|-------|-------------|
| `/` and `/es/` | Almena messenger landing — identity, onion routing, groups, calls, disappearing messages |
| `/network/` and `/es/network/` | Network infrastructure — service nodes, blockchain node, staking, rewards |

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
