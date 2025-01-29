import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    prerender: {
      entries: [
        "/",
        "/act1",
        "/act2",
        "/act3",
        "/act4",
        "/act1/acid-slimes",
        "/act1/cultist",
        "/act1/fungi-beast",
        "/act1/jaw-worm",
        "/act1/looter",
        "/act1/louses",
        "/act1/blue-slaver",
        "/act1/red-slaver",
        "/act1/spike-slimes",
        "/act1/gremlins",
        "/act1/gremlin-nob",
        "/act1/lagavulin",
        "/act1/sentry",
        "/act1/hexaghost",
        "/act1/slime-boss",
        "/act1/the-guardian",
        "/act2/the-champ",
        "/act2/bronze-automaton",
        "/act2/the-collector",
        "/act2/book-of-stabbing",
        "/act2/gremlin-leader",
        "/act2/taskmaster",
        "/act2/byrd",
        "/act2/centurion-mystic",
        "/act2/chosen",
        "/act2/mugger",
        "/act2/shelled-parasite",
        "/act2/snake-plant",
        "/act2/snecko",
        "/act2/spheric-guardian",
        "/act3/awakened-one",
        "/act3/donu-deca",
        "/act3/time-eater",
        "/act3/giant-head",
        "/act3/nemesis",
        "/act3/reptomancer",
        "/act3/darkling",
        "/act3/orb-walker",
        "/act3/shapes",
        "/act3/spire-growth",
        "/act3/the-maw",
        "/act3/transient",
        "/act3/writhing-mass",
        "/act4/spire-shield-spear",
        "/act4/corrupt-heart",
      ],
    },
  },

  paths: { base: process.env.NODE_ENV === "production" ? "/StS-Reference" : "" },

  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
};

export default config;
