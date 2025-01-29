import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const attack: Move = $derived({
  effect: `${aLevel.v >= 2 ? 40 : 30} + X*10 Damage. X = Turn - 1`,
  intent: "/assets/intents/7.png",
  name: "Attack",
});

const transient: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${attack.effect}<img src=${attack.intent} class="h-10 object-contain" />)
  `,
  img: "/assets/act3/monsters/transient.webp",
  name: "Transient",
  slug: "transient",
});

export const getTransient = () => transient;
