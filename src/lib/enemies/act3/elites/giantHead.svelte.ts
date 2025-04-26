import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const count: Move = {
  effect: "13 Damage.",
  intent: `${base}/assets/intents/3.png`,
  name: "Count",
};

const glare: Move = {
  effect: "1 Weak.",
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Glare",
};

const itIsTime: Move = $derived({
  effect: `${aLevel.v >= 3 ? 40 : 30} + T Damage. T starts at 0 and increases by 5 every time the attack is used, up to 30 additional Damage.`,
  intent: `${base}/assets/intents/7.png`,
  name: "It Is Time",
});

const giantHead: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Turns+ [Turn ${aLevel.v >= 18 ? 4 : 5}+]
        C(${itIsTime.effect}<img src=${itIsTime.intent} class="h-10 object-contain" />)
      end
      subgraph Turns [Turns 1-${aLevel.v >= 18 ? 3 : 4}]
        A(${count.effect}<img src=${count.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n50%</span>)
        B(${glare.effect}<img src=${glare.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n50%</span>)
      end
  `,
  img: `${base}/assets/act3/elites/giant-head.webp`,
  name: "Giant Head",
  slug: "giant-head",
});

export const getGiantHead = () => giantHead;
