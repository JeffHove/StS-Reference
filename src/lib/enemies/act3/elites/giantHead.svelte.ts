import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const count: Move = {
  effect: "13 Damage.",
  intent: "/assets/intents/3.png",
  name: "Count",
};

const glare: Move = {
  effect: "1 Weak.",
  intent: "/assets/intents/debuff1.png",
  name: "Glare",
};

const itIsTime: Move = $derived({
  effect: `${aLevel.v >= 3 ? 40 : 30} + T Damage. T starts at 0 and increases by 5 every time the attack is used, up to 30 additional Damage.`,
  intent: "/assets/intents/7.png",
  name: "It Is Time",
});

const giantHead: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Turns [Turns 1-${aLevel.v >= 18 ? 3 : 4}]
        A(${count.effect}<img src=${count.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n50%</span>)
        B(${glare.effect}<img src=${glare.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n50%</span>)
      end
      subgraph Turns+ [Turn ${aLevel.v >= 18 ? 4 : 5}+]
        C(${itIsTime.effect}<img src=${itIsTime.intent} class="h-10 object-contain" />)
      end
  `,
  img: "/assets/act3/elites/giant-head.webp",
  name: "Giant Head",
  slug: "giant-head",
});

export const getGiantHead = () => giantHead;
