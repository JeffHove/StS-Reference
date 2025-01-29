import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const quickTackle: Move = $derived({
  effect: `${aLevel.v >= 2 ? 18 : 16} Damage.`,
  intent: `${base}/assets/intents/4.png`,
  name: "Quick Tackle",
});

const smash: Move = $derived({
  effect: `${aLevel.v >= 2 ? 25 : 22} Damage.`,
  intent: `${base}/assets/intents/5.png`,
  name: "Smash",
});

const constrict: Move = $derived({
  effect: `${aLevel.v >= 17 ? 12 : 10} Constricted.`,
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Constrict",
});

const spireGrowth: Enemy = $derived({
  flowchart: aLevel.v >= 17
    ? `
    flowchart-elk TB
      subgraph notC [Not Constricted]
        C(${constrict.effect}<img src=${constrict.intent} class="h-10 object-contain" />)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${constrict.intent} class="h-10 object-contain inline" />]
        A2(${quickTackle.effect}<img src=${quickTackle.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n50%</span>)
        B(${smash.effect}<img src=${smash.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n50%</span>)
      end
      C==>isC
  `
    : `
    flowchart-elk TB
      subgraph notC [Not Constricted]
        A(${quickTackle.effect}<img src=${quickTackle.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n50%</span>)
        C(${constrict.effect}<img src=${constrict.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${constrict.intent} class="h-10 object-contain inline" />]
        A2(${quickTackle.effect}<img src=${quickTackle.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n50%</span>)
        B(${smash.effect}<img src=${smash.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n50%</span>)
      end
      C==>isC
  `,
  img: `${base}/assets/act3/monsters/spire-growth.webp`,
  name: "Spire Growth",
  slug: "spire-growth",
});

export const getSpireGrowth = () => spireGrowth;
