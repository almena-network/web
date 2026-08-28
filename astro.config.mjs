// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Fixed, and different from its neighbours. All three sites are Astro and all three would
  // otherwise take 4321 — whichever started second would silently land on the next port up and
  // every instruction naming 4321 would be wrong for it. The public site answers here:
  // web 4321, registry 4322, docs 4323.
  server: { port: 4321 },
});
