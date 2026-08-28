/**
 * The glyphs on the cards, as bare path data.
 *
 * They live apart from the two languages because they are not words: a drawing of a phone is the
 * same drawing in every language, and putting it beside the translations would invite somebody to
 * translate it. They are matched to their card **by position**, which is why each list is named
 * after the section it belongs to and has to keep its length when that section gains a card.
 *
 * Every path is drawn as a stroke and carries no fill of its own, so a chip's colour is the one
 * thing that decides what colour the glyph comes out.
 */

/** Vouches for, keeps, puts the question. */
export const HOW = [
  "M12 2.5 4.5 6v6.2c0 4.3 3.2 8 7.5 9.3 4.3-1.3 7.5-5 7.5-9.3V6L12 2.5Z M8.8 12l2.2 2.2 4.2-4.6",
  "M7.5 2.5h9c.8 0 1.5.7 1.5 1.5v16c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5V4c0-.8.7-1.5 1.5-1.5Z M10.5 18.5h3",
  "M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z M15.4 15.4l5.1 5.1",
] as const;

/** Devices, guardians, words. */
export const KEYS = [
  "M2.5 5.5h12v9h-12z M6 18.5h5 M17 9.5h4.5v10H17z",
  "M9.5 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z M2.5 20.5c0-3.9 3.1-7 7-7s7 3.1 7 7 M17 4.4a3.5 3.5 0 0 1 0 6.7",
  "M4.5 6h15 M4.5 12h15 M4.5 18h9",
] as const;

/** Refuses but cannot lie; is never rewritten; cannot be read on the way. */
export const NETWORK = [
  "M12 2.5 4.5 6v6.2c0 4.3 3.2 8 7.5 9.3 4.3-1.3 7.5-5 7.5-9.3V6L12 2.5Z M8.8 12l2.2 2.2 4.2-4.6",
  "M12 3.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17Z M12 7.5v5l3.5 2",
  "M6.5 10.5h11c.8 0 1.5.7 1.5 1.5v7c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-7c0-.8.7-1.5 1.5-1.5Z M8.5 10.5V7a3.5 3.5 0 0 1 7 0v3.5 M12 14.5v2.5",
] as const;

/** Every one of the four things this platform is not. */
export const NOT = "M6.5 6.5l11 11 M17.5 6.5l-11 11";
