import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

// Both
const bite: Move = $derived({
  effect: `${aLevel.v >= 2 ? "D+1" : "D"} Damage. D is chosen between 5 and 7 at the beginning of the battle.`,
  intent: "/assets/intents/2.png",
  name: "Bite",
});

// Red
const grow: Move = $derived({
  effect: `${aLevel.v >= 17 ? 4 : 3} Strength.`,
  intent: "/assets/intents/buff1.png",
  name: "Grow",
});

// Green
const spitWeb: Move = {
  effect: "2 Weak.",
  intent: "/assets/intents/debuff1.png",
  name: "Spit Web",
};

const louses: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Red [<img src=/assets/act1/monsters/red-louse.webp class="h-10 object-contain inline" />]
        A(${bite.effect}<img src=${bite.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n75%</span>)
        B(${grow.effect}<img src=${grow.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${aLevel.v >= 17 ? 1 : 2}\n25%</span>)
      end
      subgraph Green [<img src=/assets/act1/monsters/green-louse.webp class="h-10 object-contain inline" />]
        A2(${bite.effect}<img src=${bite.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n75%</span>)
        B2(${spitWeb.effect}<img src=${spitWeb.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${aLevel.v >= 17 ? 1 : 2}\n25%</span>)
      end
  `,
  img: "/assets/act1/monsters/louses.webp",
  name: "Louses",
  slug: "louses",
});

export const getLouses = () => louses;
