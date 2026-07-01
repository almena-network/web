# Almena Network Web

Public-facing marketing and information site for the Almena Network decentralized messenger platform.

## Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| [**Task**](https://taskfile.dev/) | 3.x | Task runner |
| [**Node.js**](https://nodejs.org/) | 20+ | Astro, Vite |
| [**pnpm**](https://pnpm.io/) | Latest | Package manager |

## Description

Pre-launch marketing site built with Astro. It is framed around a **launch-date countdown** to the Almena mainnet, with copy that reflects the real stage of development (messenger core and node network on devnet today; calls in testing; ALMENA market/economics at mainnet). Content is fully bilingual (English / Spanish) and driven by `src/data/landing.ts`. Suitable for deployment to any static host (Vercel, Netlify, etc.).

### Launch date

The countdown target is a **single constant** in `src/data/landing.ts`:

```ts
export const launch = { date: "2026-11-11T12:00:00Z", /* … */ };
```

`launch.date` (ISO 8601, UTC) is the confirmed mainnet launch date — **11 November 2026**. The countdown, the header/footer launch chips and all "at launch" copy derive from it; change this one line to move the date.

### Pages

| Route | Description |
|-------|-------------|
| `/` and `/es/` | Almena messenger landing — launch countdown, development roadmap, identity, onion routing, groups, disappearing messages, calls (in development) |
| `/network/` and `/es/network/` | Network infrastructure — service nodes, blockchain node, staking, rewards |
| `/coin/` and `/es/coin/` | The ALMENA coin — proof-of-work rewards, tokenomics, staking; market goes live at mainnet |

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
