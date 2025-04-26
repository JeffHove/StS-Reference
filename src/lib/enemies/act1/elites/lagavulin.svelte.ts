import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const attack: Move = $derived({
  effect: `${aLevel.v >= 3 ? 20 : 18} Damage.`,
  intent: `${base}/assets/intents/4.png`,
  name: "Attack",
});

const siphonSoul: Move = $derived({
  effect: ` -${aLevel.v >= 18 ? 2 : 1} Dexterity. -${aLevel.v >= 18 ? 2 : 1} Strength.`,
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Siphon Soul",
});

const lagavulin: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${attack.effect}<img src=${attack.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      A2(${attack.effect}<img src=${attack.intent} class="h-10 object-contain" />)
      B(${siphonSoul.effect}<img src=${siphonSoul.intent} class="h-10 object-contain" />)
      A==>A2==>B==>A
  `,
  img: `${base}/assets/act1/elites/lagavulin.webp`,
  name: "Lagavulin",
  slug: "lagavulin",
});

export const getLagavulin = () => lagavulin;
