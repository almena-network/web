# Security Policy

The Almena Network team takes the security of this project seriously. This
policy covers the **Almena Network website** (this repository) — a static
marketing and information site built with Astro.

> For vulnerabilities in the Almena **client**, **node**, or **blockchain**
> software, please report them in the corresponding repository rather than
> here.

## Supported versions

This is a continuously deployed static website; only the currently deployed
version (the `main` branch) is supported. Fixes are applied to `main` and
redeployed — there are no separate maintained release branches.

| Version | Supported |
|---------|-----------|
| `main` (latest deploy) | ✅ |
| Older commits / tags | ❌ |

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues,
pull requests, or discussions.**

Instead, use one of the following private channels:

1. **GitHub private advisory (preferred):** open a report via the repository's
   **Security → Report a vulnerability** tab
   ([GitHub Private Vulnerability Reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability)).
2. **Email:** send details to **security@almena.network**.

Please include as much of the following as you can:

- A description of the vulnerability and its potential impact
- The affected page/route or component
- Step-by-step instructions to reproduce it
- Any proof-of-concept, logs, or screenshots
- Your suggested remediation, if you have one

## What to expect

- **Acknowledgement:** we aim to acknowledge your report within **72 hours**.
- **Assessment:** we will investigate and keep you informed of our progress,
  typically providing an initial assessment within **7 days**.
- **Resolution:** confirmed issues will be fixed and deployed as quickly as is
  practical, with the timeline depending on severity and complexity.
- **Disclosure:** we follow coordinated disclosure. Please give us reasonable
  time to release a fix before any public disclosure, and we will credit you
  for the report if you wish.

## Scope

Because this repository is a **static informational website**, the most
relevant classes of issues include:

- Cross-site scripting (XSS) or content injection in rendered pages
- Exposure of secrets or sensitive data in the repository or build output
- Vulnerable or malicious third-party dependencies
- Misconfigured security headers or deployment settings
- Broken or malicious outbound links / redirects

The following are generally **out of scope** for this repository:

- Vulnerabilities in the Almena client, node, or blockchain software (report
  those in their own repositories)
- Findings that require a compromised host, browser, or network
- Volumetric denial-of-service or automated scanner output without a
  demonstrable, specific impact
- Missing best-practice hardening with no realistic exploit path

## Safe harbor

We consider security research conducted in good faith and in accordance with
this policy to be authorized. We will not pursue or support legal action
against researchers who report vulnerabilities responsibly and who avoid
privacy violations, data destruction, and service disruption.

Thank you for helping keep Almena Network and its users safe.
