/**
 * What the site does about language, tested against the script it actually ships.
 *
 * The script is read out of `dist/index.html` rather than out of the source, because what decides
 * a reader's language is the built page and not the file it came from. That also means this test
 * needs a build first, which `task test` does.
 *
 * The rules: a remembered choice wins over the browser, the browser wins over nothing, English is
 * the fallback, and detection is a courtesy at the door — the Spanish page is never redirected
 * away from, because arriving there was already a choice.
 *
 * `node:test` and no dependency: a site with one behaviour worth testing does not need a runner.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

const here = dirname(fileURLToPath(import.meta.url));
const built = readFileSync(join(here, "..", "dist", "index.html"), "utf8");

const script = built
  .match(/<script>\s*\/\/ Inline and in the head[\s\S]*?<\/script>/)?.[0]
  ?.replace(/^<script>/, "")
  .replace(/<\/script>$/, "");

assert.ok(script, "the greeting script is missing from the built page");

const HOMES = JSON.stringify({ en: "/", es: "/es/" });

/**
 * Run the shipped script against a made-up browser, and report where it sent the reader.
 *
 * `page` is which language's page they landed on, `remembered` what they chose last time (or
 * null), `browser` what their browser asks for in its own order, and `path` where they are.
 *
 * @returns the path it redirected to, or null if it left them alone
 */
function greet({ page, remembered, browser, path }) {
  let replaced = null;
  const dataset = {
    languageKey: "almena.language",
    languageHomes: HOMES,
    ...(page === "en" ? { languageGreets: "" } : {}),
  };
  const sandbox = {
    document: { documentElement: { dataset } },
    localStorage: {
      getItem: () => remembered,
    },
    navigator: { languages: browser },
    location: {
      pathname: path,
      search: "",
      hash: "",
      replace: (to) => {
        replaced = to;
      },
    },
    JSON,
    String,
  };
  const names = Object.keys(sandbox);
  new Function(...names, script)(...names.map((name) => sandbox[name]));
  return replaced;
}

const STAYS = null;

test("a reader whose browser matches the page is left where they are", () => {
  assert.equal(
    greet({
      page: "en",
      remembered: null,
      browser: ["en-GB", "en"],
      path: "/",
    }),
    STAYS,
  );
});

test("a Spanish browser arriving at the English home is greeted in Spanish", () => {
  assert.equal(
    greet({
      page: "en",
      remembered: null,
      browser: ["es-ES", "es"],
      path: "/",
    }),
    "/es/",
  );
});

test("a language the site does not speak falls back to English", () => {
  // English is the default *and* the fallback. Not an error, not a blank — English.
  assert.equal(
    greet({
      page: "en",
      remembered: null,
      browser: ["fr-FR", "fr"],
      path: "/",
    }),
    STAYS,
  );
});

test("a remembered choice beats the browser, in both directions", () => {
  // The rule this whole mechanism exists to obey: a reader's choice overrules the system. It has
  // to hold the unhelpful way round too — someone with a Spanish browser who asked for English
  // keeps English.
  assert.equal(
    greet({ page: "en", remembered: "es", browser: ["en-GB"], path: "/" }),
    "/es/",
  );
  assert.equal(
    greet({ page: "en", remembered: "en", browser: ["es-ES"], path: "/" }),
    STAYS,
  );
});

test("the Spanish page is never redirected away from", () => {
  // Arriving there was already a choice — a link, a bookmark, a search result. Moving somebody off
  // it would be the imposition detection must never become, dressed as helpfulness.
  assert.equal(
    greet({ page: "es", remembered: null, browser: ["en-GB"], path: "/es/" }),
    STAYS,
  );
  assert.equal(
    greet({ page: "es", remembered: "en", browser: ["en-GB"], path: "/es/" }),
    STAYS,
  );
});

test("storage that refuses to be read is not an error", () => {
  // A private window, or site data blocked. The reader still gets a language; they just get the
  // browser's rather than the one they chose last time.
  let replaced = null;
  const sandbox = {
    document: {
      documentElement: {
        dataset: {
          languageKey: "almena.language",
          languageHomes: HOMES,
          languageGreets: "",
        },
      },
    },
    localStorage: {
      getItem: () => {
        throw new Error("blocked");
      },
    },
    navigator: { languages: ["es-ES"] },
    location: {
      pathname: "/",
      search: "",
      hash: "",
      replace: (to) => {
        replaced = to;
      },
    },
    JSON,
    String,
  };
  const names = Object.keys(sandbox);
  new Function(...names, script)(...names.map((name) => sandbox[name]));
  assert.equal(replaced, "/es/");
});

test("the anchor and the query survive the greeting", () => {
  // Somebody sharing a link to a section of the page must land on that section, not at the top of
  // a translated one.
  let replaced = null;
  const sandbox = {
    document: {
      documentElement: {
        dataset: {
          languageKey: "almena.language",
          languageHomes: HOMES,
          languageGreets: "",
        },
      },
    },
    localStorage: { getItem: () => null },
    navigator: { languages: ["es"] },
    location: {
      pathname: "/",
      search: "?from=x",
      hash: "#keys",
      replace: (to) => {
        replaced = to;
      },
    },
    JSON,
    String,
  };
  const names = Object.keys(sandbox);
  new Function(...names, script)(...names.map((name) => sandbox[name]));
  assert.equal(replaced, "/es/?from=x#keys");
});
