import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const bite: Move = {
  effect: "6 Damage.",
  intent: `${base}/assets/intents/2.png`,
  name: "Bite",
};

const grow: Move = $derived({
  effect: `${aLevel.v >= 2 ? (aLevel.v >= 17 ? 5 : 4) : 3} Strength.`,
  intent: `${base}/assets/intents/buff1.png`,
  name: "Grow",
});

const fungiBeast: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${bite.effect}<img src=${bite.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n60%</span>)
      B(${grow.effect}<img src=${grow.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1\n40%</span>)
  `,
  img: `${base}/assets/act1/monsters/fungi-beast.webp`,
  name: "Fungi Beast",
  slug: "fungi-beast",
});

export const getFungiBeast = () => fungiBeast;
