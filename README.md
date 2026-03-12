# Almena Network Web

Astro-based landing and marketing site for the Almena Network decentralized platform.

## Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| **Task** | 3.x | Task runner |
| **Node.js** | 20+ | Astro, Vite |
| **pnpm** | Latest | Package manager |

## Description

The web project provides the public-facing website for Almena Network. It is a static site built with Astro, suitable for deployment to any static hosting (Vercel, Netlify, etc.).

## Tech Stack

- **Framework**: Astro 5
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
