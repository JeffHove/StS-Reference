import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const chomp: Move = $derived({
  effect: `${aLevel.v >= 2 ? 8 : 7} x 3 Damage.`,
  intent: `${base}/assets/intents/5.png`,
  name: "Chomp",
});

const enfeeblingSpores: Move = {
  effect: "2 Frail. 2 Weak.",
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Enfeebling Spores",
};

const snakePlant: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${chomp.effect}<img src=${chomp.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n65%</span>)
      B(${enfeeblingSpores.effect}<img src=${enfeeblingSpores.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n35%</span>)
  `,
  img: `${base}/assets/act2/monsters/snake-plant.webp`,
  name: "Snake Plant",
  slug: "snake-plant",
});

export const getSnakePlant = () => snakePlant;
