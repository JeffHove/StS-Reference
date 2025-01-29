import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const chomp: Move = $derived({
  effect: `${aLevel.v >= 2 ? 12 : 11} Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Chomp",
});

const thrash: Move = {
  effect: "7 Damage. 5 Block.",
  intent: `${base}/assets/intents/attackDefend.png`,
  name: "Thrash",
};

const bellow: Move = $derived({
  effect: `${aLevel.v >= 2 ? (aLevel.v >= 17 ? 5 : 4) : 3} Strength. ${aLevel.v >= 17 ? 9 : 6} Block.`,
  intent: `${base}/assets/intents/defendBuff.png`,
  name: "Bellow",
});

const jawWorm: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${chomp.effect}<img src=${chomp.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\nAct 1, Turn 1: 100%\n25%</span>)
      B(${thrash.effect}<img src=${thrash.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n30%</span>)
      C(${bellow.effect}<img src=${bellow.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n45%</span>)
  `,
  img: `${base}/assets/act1/monsters/jaw-worm.webp`,
  name: "Jaw Worm",
  slug: "jaw-worm",
});

export const getJawWorm = () => jawWorm;
