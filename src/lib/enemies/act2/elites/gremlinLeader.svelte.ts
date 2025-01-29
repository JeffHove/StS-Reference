import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const encourage: Move = $derived({
  effect: `Group ${aLevel.v >= 3 ? (aLevel.v >= 18 ? 5 : 4) : 3} Strength. Group ${aLevel.v >= 18 ? 10 : 6} Block.`,
  intent: "/assets/intents/defendBuff.png",
  name: "Encourage",
});

const rally: Move = {
  effect: "Spawns 2 Gremlins.",
  intent: "/assets/intents/unknown.png",
  name: "Rally!",
};

const stab: Move = {
  effect: "6 x 3 Damage.",
  intent: "/assets/intents/4.png",
  name: "Stab",
};

const gremlinLeader: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${encourage.effect}<img src=${encourage.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      B(${rally.effect}<img src=${rally.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      C(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      B0(<img src=${rally.intent} class="h-10 object-contain" /><span class="text-xs">75%</span>)
      C0(<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
      A1(<img src=${encourage.intent} class="h-10 object-contain" /><span class="text-xs">37.5%</span>)
      B1a(<img src=${rally.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B1b(<img src=${rally.intent} class="h-10 object-contain" /><span class="text-xs">62.5%</span>)
      C1(<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      A2(<img src=${encourage.intent} class="h-10 object-contain" /><span class="text-xs">66%</span>)
      C2(<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">34%</span>)
      0Gremlin~~~Moves
      1Gremlin~~~Moves
      2Gremlin~~~Moves
      subgraph Moves
        A
        B
        C
      end
      subgraph 0Gremlin [0 Gremlins]
        B0
        C0
      end
      subgraph 1Gremlin [1 Gremlin]
        subgraph prevMoveEncourage [Previous Move <img src=${encourage.intent} class="h-10 object-contain inline" />]
          B1a
          C1
        end
        subgraph prevMoveStab [Previous Move <img src=${stab.intent} class="h-10 object-contain inline" />]
          A1
          B1b
        end
      end
      subgraph 2Gremlin [2+ Gremlins]
        A2
        C2
      end
  `,
  img: "/assets/act2/elites/gremlin-leader.webp",
  name: "Gremlin Leader",
  slug: "gremlin-leader",
});

export const getGremlinLeader = () => gremlinLeader;
