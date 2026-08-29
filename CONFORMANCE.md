# Conformance — `web`

Which sections of `SPECS.md` this repository owns, and how much of each is built. The rule is
**`SPECS.md §13.13`**:

- **The matrix belongs to the project.** The specification says what must exist; this file says
  where it lives and how far along it is.
- **A section closes where it is implemented, not where it is read.**
- **When `SPECS.md` changes, the affected rows go to *under review***.
- **If code and the specification disagree, the specification wins — or the specification is
  fixed.**

**States:** `not started` · `partial` · `done` · `under review`. **Phase** points at `PLAN.md`.

> **This repository holds up nothing, and that is the point.** Turning it off does not affect the
> network: nodes carry on, credentials keep verifying, entities keep operating (§13.10). It
> blocks no phase and is blocked by none — but it must be aligned and published before **F10**,
> because it is where whoever knows nothing arrives first.

---

## What it is

| Section | What it requires here | Phase | State |
|---|---|---|---|
| §13.10 | The platform's portal: **what Almena is, for whom, and what it lets you do**. Holds no state, is consulted by no component, and its being down degrades nothing | parallel · before F10 | partial — `src/components/SitePage.astro`, with the words in `src/data/content.ts`, `src/data/diagrams.ts` and `src/data/roadmap.ts`, and the chrome in `src/data/site.ts`; nine numbered sections, ten drawings under `src/components/diagrams/`, the use-case carousel in `src/components/UseCases.astro`, and `src/components/Technology.astro` for what being owned by nobody buys |
| §13.10 | **Said in words the reader has.** A portal is where somebody who knows nothing arrives, and a sentence they have to decode is a sentence they leave | parallel · before F10 | done — the prose names no mechanism it does not immediately explain. Where a term of art was load-bearing it was replaced with what it means: *who is who, who is trusted, what has been withdrawn* rather than *identities, trust and revocation* |
| §13.10 | **What it lets you do, and how far along each part is.** The portal is where somebody who knows nothing arrives, and *when* is the second thing they ask | parallel · before F10 | done — the roadmap section, thirteen capabilities stated functionally with a state each. `.agents/rules/the-site-tracks-the-build.md` is what keeps it from going stale, and the state list is held to the capability list by the compiler |
| §0 · §1 | Saying accurately what the platform is **and what it is not** — a credential is not a voucher, a receipt or a file — and that what makes it different is that demanding unnecessary data is **visible**, not impossible | parallel | done — the *what is different* and *what it is not* sections, with the catalogue diagram that carries the argument |
| §0.1 | **The shape every use case has to fit**: an issuer vouches for a fact it already holds, a holder keeps it, a verifier checks it against a challenge. A page selling the platform is where something that does not fit gets in | parallel | done — twelve cases in `src/data/cases-people.ts` and `src/data/cases-organisations.ts`, six from the person's side and six from the organisation's, each drawn as either the credential (`CaseCard`) or what-changes (`CaseSwap`), and every one of them ending on a line saying what it does **not** do |
| §9.4 | **A derived attribute is not a zero-knowledge proof, and the difference is not only theoretical**: the predicate is fixed at issue, and the disclosure is stable enough for two verifiers to link. Both are easy to oversell and this is the page where they would be | parallel | done — the age case states both in as many words, and nothing anywhere on the site claims either unlinkability or an open-ended question |

## The discourse it has to get right

Two frictions of §16 name this repository explicitly, because they are failures of *what is
said*, not of what is built:

| Section | What it requires here | Phase | State |
|---|---|---|---|
| §16-H | **Never *"every node has a copy of the network"***, which stopped being true with §4.6, and never *"nodes hold no data"* flat: they hold no **personal** data, and not all of them hold the same. The public wording is still unsettled and this is where it lands | parallel | partial — every claim on the page is qualified (*no **personal** data*, and *not every node keeps the same part of it*), and no sentence says a node carries the network. The settled wording it is supposed to land is still not written |
| §16-N | The platform's neutrality is **more qualified than the user's sovereignty over their data**: Almena decides the seal, who may hold an alias, who may define the forms everyone uses, and convenes the public votes. The discourse has to reflect that rather than round it up | parallel | done — said in a sentence directly under the four things being owned by nobody buys: *Almena decides who carries the trust grade, who may hold a public name, and who may define the forms everybody asks with — and it is Almena that calls the network's votes* |
| §7.9 | **An empty ecosystem is presented empty.** No sample entities, no invented figures, no credentials that do not exist — on a marketing site the temptation is at its highest and the rule does not bend | parallel | done — nothing is counted, measured or promised anywhere on the page. The one place a figure appears is the roadmap tally, and it is **derived from the capability list** rather than written down, so it cannot claim more than the list does |
| §7.9 | **And the same rule applied to a picture.** A world with named cities on it is the drawing a reader most readily mistakes for a claim about where the platform runs, and no node runs in production anywhere yet | parallel | partial — `src/components/diagrams/World.astro` names seven cities, which is what the owner asked for, and its caption carries the limit in as many words: *the map shows how the network is reached, not where it runs today*. That is a sentence set against a picture, and a picture is the louder of the two |

## As a product

| Section | What it requires here | Phase | State |
|---|---|---|---|
| §13.9 | English and Spanish complete, **English the default and the fallback**; language taken from the browser and overridable; catalogues validated in both directions | F0 · parallel | done — English is the schema in `src/data/site.ts` (`Widened<typeof …En>`), so a key missing from Spanish and a key Spanish alone has are both compile errors; `src/lib/language.ts` and the head script read the browser, remember a choice and let it override; seven cases in `tests/language.test.mjs`, run against the **built** page |
| §13.13 | This file, kept true. **Universal row** | F0 | partial — this file |
| §4.14 | Any date shown in the reader's zone, always stated; format decided by language. **Universal row** | F0 | done — the one instant this site shows is the launch, and it says `· UTC`; the countdown beside it is a **duration**, which is what §4.14 prefers because it survives crossing a meridian |

## Visual identity

`SPECS.md` does not legislate colour, but `AGENTS.md` and `PLAN.md` do: the identity is
`#eb7229` with the three-node mark.

| | What it requires here | Phase | State |
|---|---|---|---|
| Identity | Realign to the canonical palette and the three-node mark, as `registry` did — *copied rather than imported: the repositories share no code, only the identity* | parallel · before F10 | partial — **the colour and the mark are aligned**: one orange, `#eb7229`, in `src/styles/site.css`, and the three-node mark as the logo, the favicon and the seal on the credential in `src/components/diagrams/Proof.astro`. **Two things are still this site's own**: its grey ladder is a four-step cool scale of its own values rather than the canonical five-step one, and it loads Inter as a webfont where the canonical type is the system stack. Both are in `TODO.md` |
| Legibility | Every tone the page uses has to be readable on the surface it lands on | parallel · before F10 | done — every text tone clears 4.5:1, and the drawings letter themselves from `.dia-title` / `.dia-label` / `.dia-note` rather than each naming its own colour |

---

## What is **not** this repository's

- **Documentation** (§13.11) — that is `docs`. This site says what Almena is; that one says how
  to use it.
- **The catalogue and the monitor** (§13.6, §5) — the Registry serves them publicly.
- **Anything that touches the network.** No key, no operation, no resolution. If this repository
  ever needs to read a node, something has been misplaced.
