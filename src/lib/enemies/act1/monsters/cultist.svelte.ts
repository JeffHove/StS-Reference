import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const incantation: Move = $derived({
  effect: `${aLevel.v >= 2 ? (aLevel.v >= 17 ? 5 : 4) : 3} Ritual.`,
  intent: `${base}/assets/intents/buff1.png`,
  name: "Incantation",
});

const darkStrike: Move = {
  effect: "6 Damage.",
  intent: `${base}/assets/intents/2.png`,
  name: "Dark Strike",
};

const cultist: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${incantation.effect}<img src=${incantation.intent} class="h-10 object-contain" />)
      B(${darkStrike.effect}<img src=${darkStrike.intent} class="h-10 object-contain" />)
      A==>B
      B==>B
  `,
  img: `${base}/assets/act1/monsters/cultist.webp`,
  name: "Cultist",
  slug: "cultist",
});

export const getCultist = () => cultist;
