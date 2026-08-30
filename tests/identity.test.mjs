/**
 * That this site is drawn in the platform's own identity, and not in one of its own.
 *
 * A public site is the first thing anybody sees of Almena and the application is the second, so a
 * site with its own orange, its own greys and its own type is one arguing against itself before a
 * reader has read a sentence. The values live in `almena/src/styles/tokens.css` and
 * `client/src/styles/tokens.css`, which are the same file twice; what is checked here is that the
 * third copy — this one — still says what those two say.
 *
 * It is a test rather than a note in a stylesheet because the failure is silent: a colour edited
 * here on a Tuesday looks fine on this site, and looks like a different product beside the app.
 *
 * Read out of the built stylesheet rather than the source, for the same reason the language test
 * reads the built page: what a reader is shown is what shipped.
 */

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, "..", "dist");

/** Everything the build emitted, as one string: the page and every stylesheet it links. */
function shipped() {
  const page = readFileSync(join(dist, "index.html"), "utf8");
  const assets = join(dist, "_astro");
  const styles = readdirSync(assets)
    .filter((name) => name.endsWith(".css"))
    .map((name) => readFileSync(join(assets, name), "utf8"))
    .join("\n");
  return `${page}\n${styles}`;
}

test("the identity colour is the application's own", () => {
  // `#eb7229` is the colour of the icon and of everything the interface says *this is Almena* or
  // *this is the thing you came for* with. A near-miss is worse than a different colour: it reads
  // as the same brand printed badly.
  assert.match(shipped(), /#eb7229/i);
});

test("the ladder is the platform's five rungs", () => {
  // Dark is not the same as flat, and what stops it being flat is that the rungs are far enough
  // apart to tell apart. These are the same five the application is built on.
  const built = shipped();
  for (const rung of ["#080a0e", "#0e1116", "#1c212a", "#262b36", "#313743"]) {
    assert.match(
      built,
      new RegExp(rung, "i"),
      `${rung} is missing from the ladder`,
    );
  }
});

test("the state colours mean what they mean everywhere else", () => {
  // Green, amber and red are the same colours in the app, the registry and here, so a reader who
  // has used one meets the same greens meaning the same thing.
  const built = shipped();
  for (const state of ["#3fb950", "#f85149"]) {
    assert.match(built, new RegExp(state, "i"), `${state} is missing`);
  }
});

test("no typeface is fetched from anywhere", () => {
  // The platform's stack is the system's, and a face pulled from a third party is a request this
  // site makes on a reader's behalf to somebody they did not choose — on a page whose argument is
  // that they should get to choose. It is also one more thing between arriving and reading.
  const built = shipped();
  assert.doesNotMatch(built, /fonts\.googleapis\.com/);
  assert.doesNotMatch(built, /fonts\.gstatic\.com/);
  assert.doesNotMatch(built, /@font-face/);
});

test("one breakpoint carries the page, and the exception is named", () => {
  // The platform reflows by letting each grid find its own column count from the width it is
  // given, which is what leaves a single breakpoint instead of nine. One thing cannot: a row of
  // navigation, whose fit depends on how long the words are in the language being read.
  // `@media` only. A container query asks how wide *this element* is, which is the same question
  // an auto-fit grid asks and not a decision about the window — counting one as a breakpoint would
  // punish exactly the technique that removed the others.
  const widths = [
    ...shipped().matchAll(/@media[^{]*?\(m(?:in|ax)-width:\s*(\d+)px\)/g),
  ].map((found) => Number(found[1]));
  const others = [...new Set(widths)]
    .filter((width) => width !== 600)
    .sort((a, b) => a - b);
  assert.deepEqual(
    others,
    [940, 941],
    `every width other than 600 has to be the navigation's, and these were ${others.join(", ")}`,
  );
});
