import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const debuff: Move = $derived({
  effect: `${aLevel.v >= 18 ? 5 : 3} Burn into discard.`,
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Debuff",
});

const attack: Move = $derived({
  effect: `${aLevel.v >= 3 ? 7 : 6} x 3 Damage.`,
  intent: `${base}/assets/intents/4.png`,
  name: "Attack",
});

const scythe: Move = {
  effect: "45 Damage.",
  intent: `${base}/assets/intents/7.png`,
  name: "Scythe",
};

const nemesis: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Turn+ [Turn 2+]
        A2(<img src=${debuff.intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        B2(<img src=${attack.intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        C2(<img src=${scythe.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      subgraph Turn1 [Turn 1]
        A1(<img src=${debuff.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B1(<img src=${attack.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
  `,
  moves: `
    flowchart-elk TB
      A(${debuff.effect}<img src=${debuff.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${attack.effect}<img src=${attack.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      C(${scythe.effect}<img src=${scythe.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)  
  `,
  img: `${base}/assets/act3/elites/nemesis.webp`,
  name: "Nemesis",
  slug: "nemesis",
});

export const getNemesis = () => nemesis;
