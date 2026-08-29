/**
 * Everything the portal says, in the two languages the platform ships in.
 *
 * This is a letter of introduction and not documentation: it says what Almena is, for whom, and
 * what it lets you do. Where a section could go into mechanism it stops and points at a diagram
 * instead — whoever wants the mechanism wants `docs`, and whoever wants the reasons wants the
 * specification.
 *
 * **Two languages, and English is the default and the fallback.** English is served at the root
 * and Spanish under `/es/`, which is why `Lang` is ordered the way it is.
 *
 * Nothing here is measured, counted or promised. An empty ecosystem is presented empty — no sample
 * data, no filler entities — and a marketing page is where the temptation to dress it up is
 * highest, so there are none: no participants, no adoption, no benchmark. The pictures illustrate
 * a shape, never a reading: the errand in them is an age check because everybody has done one, and
 * no real organisation is named because naming one would be inventing a fact about it.
 */

/** The languages the site is published in. English first: it is the default and the fallback. */
export const langs = ["en", "es"] as const;

/** One of the languages the site is published in. */
export type Lang = (typeof langs)[number];

/** Which locale each language formats its dates with. */
const DATE_LOCALE: Record<Lang, string> = { en: "en-GB", es: "es-ES" };

/** Where a language lives. English at the root, everything else under its own prefix. */
export function langPath(lang: Lang): string {
  return lang === "en" ? "/" : `/${lang}/`;
}

/**
 * Where the project's code lives, and the one outward link this site makes.
 *
 * **The organisation, never a repository inside it.** Not every repository the project has is
 * public, and a link that four visitors out of five meet as a 404 reads as a project that has
 * gone quiet rather than as one that has something it does not publish. Linking the organisation
 * shows exactly what is open, and stays true the day another repository joins it.
 */
export const GITHUB_URL = "https://github.com/almena-network";

/** The languages offered in the picker, in order. */
export const LOCALES: readonly Lang[] = langs;

/** What each language calls itself, in itself — never translated into the other. */
export const langNames: Record<Lang, string> = { en: "English", es: "Español" };

/** Where a language's home page is. The header and footer link with this. */
export const langHome = langPath;

/**
 * English with its exact wording forgotten: every string becomes `string`, and every tuple keeps
 * its length.
 *
 * Needed because the English catalogues are written `as const` — the diagrams take fixed-length
 * tuples, so the literal types are load-bearing — and a Spanish catalogue typed against them
 * verbatim would be asked to say *"Issuer"* in Spanish. This widens the words and keeps the shape,
 * which is exactly what the other language has to match.
 */
export type Widened<T> = T extends string
  ? string
  : { [K in keyof T]: Widened<T[K]> };

const launchEn = {
  eyebrow: "Countdown to launch",
  title: "Almena launches in",
  done: "Almena is live.",
  units: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },
};

/**
 * Spanish, typed against English so that the compiler is the catalogue check.
 *
 * A key English has and this lacks is an error; a key this has and English lacks is an excess
 * property, also an error. That is the check in both directions, and it matters because a half
 * language is worse than one language: the gap turns up on the screen it can least afford to. It
 * is done here by `astro check` rather than by a script, because unlike the JSON catalogues of
 * the applications these are TypeScript and the compiler already reads them.
 */
const launchEs: Widened<typeof launchEn> = {
  eyebrow: "Cuenta atrás para el lanzamiento",
  title: "Almena se lanza en",
  done: "Almena está activa.",
  units: {
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
  },
};

export const launch = {
  /** Confirmed launch: 11 November 2026. */
  date: "2026-11-11T12:00:00Z",
  en: launchEn,
  es: launchEs,
};

/**
 * The launch date written out, in the reader's language and with the zone it is in.
 *
 * **The format is the language's; the zone is stated.** `03/04/2026` does not mean the same thing
 * to somebody reading in Spanish as to somebody reading in English, and a date without its zone is
 * a date somebody will read wrong: this is one instant, and for a reader in Auckland it falls on
 * the following day. The countdown beside it is a **duration**, which is how a deadline is shown
 * precisely because it does not change when you cross a meridian.
 */
export function launchLabel(lang: Lang): string {
  const date = new Date(launch.date).toLocaleDateString(DATE_LOCALE[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  return `${date} · UTC`;
}

/** The chrome: what the tab says, what the bar holds, what the foot carries. */
const siteEn = {
  title: "Almena — identity that stays with the person",
  description:
    "A decentralised identity platform where credentials belong to the person who holds them, and where what every issuer and verifier asks for is public and comparable.",
  nav: {
    how: "How it works",
    cases: "Use cases",
    different: "What is different",
    keys: "Your keys",
    network: "The network",
    roadmap: "Roadmap",
  },
  skip: "Skip to content",
  language: "Language",
  footer: {
    tagline:
      "Almena is open source, and built in the open. Anybody can run a node, and the code it runs is public.",
    code: "Code",
    rights: "The Almena Network Authors",
  },
};

/**
 * Spanish, typed against English so that the compiler is the catalogue check.
 *
 * A key English has and this lacks is an error; a key this has and English lacks is an excess
 * property, also an error. That is the check in both directions, and it matters because a half
 * language is worse than one language: the gap turns up on the screen it can least afford to. It
 * is done here by `astro check` rather than by a script, because unlike the JSON catalogues of
 * the applications these are TypeScript and the compiler already reads them.
 */
const siteEs: Widened<typeof siteEn> = {
  title: "Almena — la identidad se queda con la persona",
  description:
    "Una plataforma de identidad descentralizada donde las credenciales son de quien las tiene, y donde lo que pide cada issuer y cada verifier es público y comparable.",
  nav: {
    how: "Cómo funciona",
    cases: "Casos de uso",
    different: "Qué es distinto",
    keys: "Tus claves",
    network: "La red",
    roadmap: "Hoja de ruta",
  },
  skip: "Ir al contenido",
  language: "Idioma",
  footer: {
    tagline:
      "Almena es de código abierto y se construye a la vista. Cualquiera puede levantar un nodo, y el código que ejecuta es público.",
    code: "Código",
    rights: "The Almena Network Authors",
  },
};

export const site = {
  en: siteEn,
  es: siteEs,
};
