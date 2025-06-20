import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

// Both
const bite: Move = $derived({
  effect: `${aLevel.v >= 2 ? "D+1" : "D"} Damage. D is chosen between 5 and 7 at the beginning of the battle.`,
  intent: `${base}/assets/intents/2.png`,
  name: "Bite",
});

// Red
const grow: Move = $derived({
  effect: `${aLevel.v >= 17 ? 4 : 3} Strength.`,
  intent: `${base}/assets/intents/buff1.png`,
  name: "Grow",
});

// Green
const spitWeb: Move = {
  effect: "2 Weak.",
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Spit Web",
};

const louses: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      subgraph Red [<img src=${base}/assets/act1/monsters/red-louse.webp class="h-10 object-contain inline" />]
        B(${grow.effect}<img src=${grow.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n25%</span>)
      end
      subgraph Both
        A(${bite.effect}<img src=${bite.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n75%</span>)
      end
      subgraph Green [<img src=${base}/assets/act1/monsters/green-louse.webp class="h-10 object-contain inline" />]
        B2(${spitWeb.effect}<img src=${spitWeb.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n25%</span>)
      end
      Red~~~Both~~~Green
  `,
  img: `${base}/assets/act1/monsters/louses.webp`,
  name: "Louses",
  slug: "louses",
});

export const getLouses = () => louses;
