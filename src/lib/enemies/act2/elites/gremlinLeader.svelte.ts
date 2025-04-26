import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const encourage: Move = $derived({
  effect: `Group ${aLevel.v >= 3 ? (aLevel.v >= 18 ? 5 : 4) : 3} Strength. Group ${aLevel.v >= 18 ? 10 : 6} Block.`,
  intent: `${base}/assets/intents/defendBuff.png`,
  name: "Encourage",
});

const rally: Move = {
  effect: "Spawns 2 Gremlins.",
  intent: `${base}/assets/intents/unknown.png`,
  name: "Rally!",
};

const stab: Move = {
  effect: "6 x 3 Damage.",
  intent: `${base}/assets/intents/4.png`,
  name: "Stab",
};

const gremlinLeader: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      subgraph 0Gremlin [0 Gremlins]
        direction LR
        B0(<img src=${rally.intent} class="h-10 object-contain" /><span class="text-xs">75%</span>)
        C0(<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
      end
      subgraph 1Gremlin [1 Gremlin]
        direction LR
        subgraph prevMoveEncourage [Previous Move <img src=${encourage.intent} class="h-10 object-contain inline" />]
          direction LR
          B1a(<img src=${rally.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
          C1(<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        end
        subgraph prevMoveStab [Previous Move <img src=${stab.intent} class="h-10 object-contain inline" />]
          direction LR
          A1(<img src=${encourage.intent} class="h-10 object-contain" /><span class="text-xs">37.5%</span>)
          B1b(<img src=${rally.intent} class="h-10 object-contain" /><span class="text-xs">62.5%</span>)
        end
      end
      subgraph 2Gremlin [2+ Gremlins]
        direction LR
        A2(<img src=${encourage.intent} class="h-10 object-contain" /><span class="text-xs">66%</span>)
        C2(<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">34%</span>)
      end
      0Gremlin~~~1Gremlin~~~2Gremlin
  `,
  img: `${base}/assets/act2/elites/gremlin-leader.webp`,
  moves: `
    flowchart-elk TB
      A(${encourage.effect}<img src=${encourage.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${rally.effect}<img src=${rally.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
  `,
  name: "Gremlin Leader",
  slug: "gremlin-leader",
});

export const getGremlinLeader = () => gremlinLeader;
