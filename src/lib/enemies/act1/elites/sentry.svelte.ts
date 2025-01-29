import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const beam: Move = $derived({
  effect: `${aLevel.v >= 3 ? 10 : 9} Damage.`,
  intent: `${base}/assets/intents/4.png`,
  name: "Beam",
});

const bolt: Move = $derived({
  effect: `${aLevel.v >= 18 ? 3 : 2} Dazed into discard.`,
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Bolt",
});

const sentry: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${beam.effect}<img src=${beam.intent} class="h-10 object-contain" />)
      B(${bolt.effect}<img src=${bolt.intent} class="h-10 object-contain" />)
      A<==>B
  `,
  img: `${base}/assets/act1/elites/sentry.webp`,
  name: "Sentry",
  slug: "sentry",
});

export const getSentry = () => sentry;
