/**
 * What the linter enforces here, beyond what `astro check` already does.
 *
 * **This is `registry/eslint.config.js` copied, not imported.** The repositories share no code —
 * not a common library, not a central crate, so that none of them becomes the owner of the
 * others' ground; what they share is the pattern, and two Astro sites checked by different rules
 * would drift in ways no reviewer would notice until one of them stopped building.
 *
 * The size limits are the numbers at which a reviewer can still tell whether a change is correct.
 * Comments and blank lines are excluded from every count, so documenting a function is never what
 * pushes it over a limit.
 *
 * Formatting is Prettier's and is not argued about here, which is why no stylistic rule appears
 * below.
 */

import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import tsdoc from "eslint-plugin-tsdoc";

/** The counts, applied to every file the linter reads. */
const sizeLimits = {
  "max-lines": [
    "error",
    { max: 400, skipBlankLines: true, skipComments: true },
  ],
  "max-lines-per-function": [
    "error",
    { max: 50, skipBlankLines: true, skipComments: true },
  ],
  "max-params": ["error", 4],
  "max-depth": ["error", 3],
};

export default defineConfig([
  { ignores: ["dist/", ".astro/", "node_modules/"] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  {
    plugins: { tsdoc },
    rules: {
      ...sizeLimits,
      "tsdoc/syntax": "error",
      // `unknown`, narrowed, is the answer where a type is genuinely not known.
      "@typescript-eslint/no-explicit-any": "error",
    },
  },

  {
    // A component's frontmatter is not a function, and its markup is not a body: the
    // per-function count would measure the whole file and mean nothing.
    files: ["**/*.astro"],
    rules: { "max-lines-per-function": "off" },
  },

  {
    // Node, not the browser: these run before Astro exists, which is why `process` is theirs
    // to read and why they carry no TSDoc.
    files: ["astro.config.mjs", "eslint.config.js"],
    languageOptions: { globals: { process: "readonly" } },
    rules: { "tsdoc/syntax": "off" },
  },
]);
