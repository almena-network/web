/**
 * How this site decides which language to show, and how it stops deciding once you have.
 *
 * A portal has one source for it — **the browser**, and its `Accept-Language` — and then the rule
 * that matters more than the source: what a reader chooses overrules what the system says, and is
 * remembered. Detecting is a courtesy on arrival, never a decision imposed on anybody.
 *
 * So three rules, in order:
 *
 * 1. **A remembered choice wins**, always and over everything.
 * 2. Otherwise the browser's own order decides, first match against the languages this site is
 *    published in.
 * 3. Otherwise English, which is the default and the fallback.
 *
 * And one boundary that is easy to miss: **the courtesy applies at the door, not indoors.** The
 * redirect runs on the English home and nowhere else, so somebody who follows a link to `/es/`
 * stays there. Reading a page in a language you did not pick is a choice you made by clicking;
 * being moved off it would be the imposition the rule forbids.
 */

/**
 * Where a reader's choice lives.
 *
 * Their browser and nowhere else: this site holds no state of any kind — nothing on the network
 * reads it, and switching it off changes nothing — and a preference sent anywhere would be one
 * more thing known about somebody who only came to read.
 */
export const LANGUAGE_KEY = "almena.language";

/**
 * Remember a choice, if the browser will have it.
 *
 * Storage throws in a private window and where site data is blocked, and neither is a failure
 * worth a message: the person still gets the language they clicked, it just will not be there
 * next time.
 */
export function remember(lang: string): void {
  try {
    localStorage.setItem(LANGUAGE_KEY, lang);
  } catch {
    // Nothing to do and nothing to say.
  }
}
