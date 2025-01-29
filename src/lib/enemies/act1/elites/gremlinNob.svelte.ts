import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const bellow: Move = $derived({
  effect: `${aLevel.v >= 18 ? 3 : 2} Enrage.`,
  intent: "/assets/intents/buff1.png",
  name: "Bellow",
});

const rush: Move = $derived({
  effect: `${aLevel.v >= 3 ? 16 : 14} Damage.`,
  intent: "/assets/intents/3.png",
  name: "Rush",
});

const skullBash: Move = $derived({
  effect: `${aLevel.v >= 3 ? 8 : 6} Damage. 2 Vulnerable.`,
  intent: "/assets/intents/attackDebuff.png",
  name: "Skull Bash",
});

const gremlinNob: Enemy = $derived({
  flowchart: aLevel.v >= 18
    ? `
    flowchart-elk LR
      A(${bellow.effect}<img src=${bellow.intent} class="h-10 object-contain" />)
      B(${rush.effect}<img src=${rush.intent} class="h-10 object-contain" />)
      B2(${rush.effect}<img src=${rush.intent} class="h-10 object-contain" />)
      C(${skullBash.effect}<img src=${skullBash.intent} class="h-10 object-contain" />)
    A==>C
    C==>B
    B==>B2
    B2==>A
  `
    : `
    flowchart-elk LR
      A(${bellow.effect}<img src=${bellow.intent} class="h-10 object-contain" />)
      B(${rush.effect}<img src=${rush.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n67%</span>)
      C(${skullBash.effect}<img src=${skullBash.intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
      A==>Turn2+
      subgraph Turn2+ [Turn 2+]
        direction LR
        B
        C
      end
  `,
  img: "/assets/act1/elites/gremlin-nob.webp",
  name: "Gremlin Nob",
  slug: "gremlin-nob",
});

export const getGremlinNob = () => gremlinNob;
