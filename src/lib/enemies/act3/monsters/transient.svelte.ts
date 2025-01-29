import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const attack: Move = $derived({
  effect: `${aLevel.v >= 2 ? 40 : 30} + X*10 Damage. X = Turn - 1`,
  intent: `${base}/assets/intents/7.png`,
  name: "Attack",
});

const transient: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${attack.effect}<img src=${attack.intent} class="h-10 object-contain" />)
  `,
  img: `${base}/assets/act3/monsters/transient.webp`,
  name: "Transient",
  slug: "transient",
});

export const getTransient = () => transient;
