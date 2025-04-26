import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const doubleStrike: Move = $derived({
  effect: `${aLevel.v >= 2 ? 7 : 6} x 2 Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Double Strike",
});

const suck: Move = $derived({
  effect: `${aLevel.v >= 2 ? 12 : 10} Lifesteal.`,
  intent: `${base}/assets/intents/attackBuff.png`,
  name: "Suck",
});

const fell: Move = $derived({
  effect: `${aLevel.v >= 2 ? 21 : 18} Damage. 2 Frail.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Fell",
});

const shelledParasite: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${doubleStrike.effect}<img src=${doubleStrike.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\nTurn 1: ${aLevel.v >= 17 ? "0%" : "50%"}\n40%</span>)
      B(${suck.effect}<img src=${suck.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\nTurn 1: ${aLevel.v >= 17 ? "0%" : "50%"}\n40%</span>)
      C(${fell.effect}<img src=${fell.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\nTurn 1: ${aLevel.v >= 17 ? "100%" : "0%"}\n20%</span>)
      D(Stunned<img src='${base}/assets/intents/stun.png' class="h-10 object-contain" /><span class="text-xs">Trigger: Platted Armor reduced to 0. Interrupts current intent.</span>)
  `,
  img: `${base}/assets/act2/monsters/shelled-parasite.webp`,
  name: "Shelled Parasite",
  slug: "shelled-parasite",
});

export const getShelledParasite = () => shelledParasite;
