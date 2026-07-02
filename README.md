# Almena Network Web

Public-facing marketing and information site for the Almena Network — an open, decentralized platform.

## Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| [**Task**](https://taskfile.dev/) | 3.x | Task runner |
| [**Node.js**](https://nodejs.org/) | 20+ | Astro, Vite |
| [**pnpm**](https://pnpm.io/) | Latest | Package manager |

## Description

Pre-launch marketing site built with Astro. It is framed around a **launch-date countdown** to the Almena network launch, with copy that reflects the real stage of development (messenger core and node network on devnet today; calls in testing; veracity — the transparency log — as the differentiating capability). Content is fully bilingual (English / Spanish) and driven by `src/data/landing.ts`. Suitable for deployment to any static host (Vercel, Netlify, etc.).

### Launch date

The countdown target is a **single constant** in `src/data/landing.ts`:

```ts
export const launch = { date: "2026-11-11T12:00:00Z", /* … */ };
```

`launch.date` (ISO 8601, UTC) is the confirmed launch date — **11 November 2026**. The countdown, the header/footer launch chips and all "at launch" copy derive from it; change this one line to move the date.

### Pages

The network is the product; messaging is one use case. The pages reflect that priority:

| Route | Description |
|-------|-------------|
| `/` and `/es/` | The Almena network / platform — launch countdown, what it is, "one platform, many uses", identity in focus, how the network works, development roadmap |
| `/identity/` and `/es/identity/` | Decentralized identity as a use case — issuers/holders/verifiers, zero-knowledge / minimal disclosure, verifiable credentials, reusable KYC |
| `/messaging/` and `/es/messaging/` | Messaging as a use case — onion routing, groups, disappearing messages, calls (in development) |
| `/network/` and `/es/network/` | The network in depth — service nodes, how the network runs, run a node |
| `/veracity/` and `/es/veracity/` | Veracity as the differentiator — the transparency log: integrity, authorship, and proof of existence for what the network carries |

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
