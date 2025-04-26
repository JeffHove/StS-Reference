import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const stab: Move = $derived({
  effect: `${aLevel.v >= 2 ? 13 : 12} Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Stab",
});

const rake: Move = $derived({
  effect: `${aLevel.v >= 2 ? 8 : 7} Damage. ${aLevel.v >= 17 ? 2 : 1} Weak.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Rake",
});

const blueSlaver: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n60%</span>)
      B(${rake.effect}<img src=${rake.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n40%</span>)
  `,
  img: `${base}/assets/act1/monsters/blue-slaver.webp`,
  name: "Blue Slaver",
  slug: "blue-slaver",
});

export const getBlueSlaver = () => blueSlaver;
