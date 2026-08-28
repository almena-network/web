/**
 * The shape a use case has, and the two audiences the carousel is split between.
 *
 * The cases themselves live one file per audience, because they are written differently: a person
 * reads *what is asked and what stays theirs*, and an organisation reads *what this costs today
 * and what it costs instead*. Same skeleton, different argument, and keeping them apart is what
 * stops one being rewritten in the other's voice.
 */

import type { Widened } from "./site";
import { peopleCases } from "./cases-people";
import { organisationCases } from "./cases-organisations";

/**
 * Which picture a case is told with.
 *
 * `card` is the credential itself — rows that stay shut and one that opens — and it is what a
 * disclosure looks like. `swap` is two stacked blocks, what happens today and what happens
 * instead, which is what a saving looks like. A case gets the one that matches its argument, not
 * the one that matches its audience: losing a phone is a person's case and it is told as a swap,
 * because nothing about it is a disclosure.
 */
export type CaseKind = "card" | "swap";

const chromeEn = {
  num: "02",
  kicker: "What it is for",
  title: "The same errand, with almost nothing handed over",
  lead: "Everything above is the mechanism. This is what it looks like on an ordinary Tuesday — first for the person doing the errand, and then for the organisation on the other side of the counter.",
  audiences: ["Person", "Organisation"] as const,
  /** What a screen reader is told the audience switch, and then each strip of cases, is for. */
  audiencePicker: "Whose side to read this from",
  pickers: ["Use cases for a person", "Use cases for an organisation"] as const,
  /** What the credential in the picture is called, which is the same on every case that has one. */
  cardHeading: "What leaves your device",
};

/**
 * Spanish, typed against English so that the compiler is the catalogue check.
 *
 * A key English has and this lacks is an error; a key this has and English lacks is an excess
 * property, also an error. That is the check in both directions, and it matters because a half
 * language is worse than one language: the gap turns up on the screen it can least afford to.
 */
const chromeEs: Widened<typeof chromeEn> = {
  num: "02",
  kicker: "Para qué sirve",
  title: "El mismo trámite, entregando casi nada",
  lead: "Todo lo de arriba es el mecanismo. Esto es cómo se ve un martes cualquiera — primero para la persona que hace el trámite, y después para la organización que está al otro lado del mostrador.",
  audiences: ["Persona", "Organización"] as const,
  audiencePicker: "Desde qué lado leer esto",
  pickers: [
    "Casos de uso para una persona",
    "Casos de uso para una organización",
  ] as const,
  cardHeading: "Lo que sale de tu dispositivo",
};

export const cases = {
  en: {
    ...chromeEn,
    groups: [peopleCases.en, organisationCases.en] as const,
  },
  es: {
    ...chromeEs,
    groups: [peopleCases.es, organisationCases.es] as const,
  },
};
