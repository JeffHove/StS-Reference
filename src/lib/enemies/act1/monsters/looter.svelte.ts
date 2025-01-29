import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const mug: Move = $derived({
  effect: `${aLevel.v >= 2 ? 11 : 10} Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Mug",
});

const lunge: Move = $derived({
  effect: `${aLevel.v >= 2 ? 14 : 12} Damage`,
  intent: `${base}/assets/intents/3.png`,
  name: "Lunge",
});

const smokeBomb: Move = {
  effect: "6 Block.",
  intent: `${base}/assets/intents/defend.png`,
  name: "Smoke Bomb",
};

const escape: Move = {
  effect: "Escape.",
  intent: `${base}/assets/intents/escape.png`,
  name: "Escape",
};

const looter: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${mug.effect}<img src=${mug.intent} class="h-10 object-contain" />)
      A2(${mug.effect}<img src=${mug.intent} class="h-10 object-contain" />)
      B(${lunge.effect}<img src=${lunge.intent} class="h-10 object-contain" />)
      C(${smokeBomb.effect}<img src=${smokeBomb.intent} class="h-10 object-contain" />)
      D(${escape.effect}<img src=${escape.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,
  img: `${base}/assets/act1/monsters/looter.webp`,
  name: "Looter",
  slug: "looter",
});

export const getLooter = () => looter;
