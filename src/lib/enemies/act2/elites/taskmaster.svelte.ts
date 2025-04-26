import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

// Master
const scouringWhip: Move = $derived({
  effect: `7 Damage. ${aLevel.v >= 3 ? (aLevel.v >= 18 ? 3 : 2) : 1} Wound into discard.${aLevel.v >= 18 ? " 1 Strength." : ""}`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Scouring Whip",
});

// Blue
const stabB: Move = $derived({
  effect: `${aLevel.v >= 2 ? 13 : 12} Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Stab",
});

const rake: Move = $derived({
  effect: `${aLevel.v >= 2 ? 8 : 7} Damage. ${aLevel.v >= 17 ? 2 : 1} Weak.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Rake",
});

// Red
const stabR: Move = $derived({
  effect: `${aLevel.v >= 2 ? 14 : 13} Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Stab",
});

const scrape: Move = $derived({
  effect: `${aLevel.v >= 2 ? 9 : 8} Damage. ${aLevel.v >= 17 ? 2 : 1} Vulnerable.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Scrape",
});

const entangle: Move = {
  effect: "1 Entangled.",
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Entangle",
};

const taskmaster: Enemy = $derived({
  flowchart: aLevel.v >= 17
    ? `
    flowchart-elk TB
      subgraph Red [<img src=${base}/assets/act1/monsters/red-slaver.webp class="h-10 object-contain inline" />]
        direction LR
        subgraph Not [Entangle Not Used]
          A(${stabR.effect}<img src=${stabR.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
          B(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" />)
          B<==>A
        end
        C(${entangle.effect}<img src=${entangle.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
        C==>Used
        subgraph Used [Entangle Used]
          A2(${stabR.effect}<img src=${stabR.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n45%</span>)
          B2(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n55%</span>)
        end
      end
      subgraph Master [<img src=${base}/assets/act2/elites/taskmaster.webp class="h-10 object-contain inline" />]
        A4(${scouringWhip.effect}<img src=${scouringWhip.intent} class="h-10 object-contain" />)
      end
      subgraph Blue [<img src=${base}/assets/act1/monsters/blue-slaver.webp class="h-10 object-contain inline" />]
        A5(${stabB.effect}<img src=${stabB.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n60%</span>)
        B5(${rake.effect}<img src=${rake.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n40%</span>)
      end
  `
    : `
    flowchart-elk TB
      subgraph Red [<img src=${base}/assets/act1/monsters/red-slaver.webp class="h-10 object-contain inline" />]
        direction LR
        subgraph Not [Entangle Not Used]
          A(${stabR.effect}<img src=${stabR.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
          B(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" />)
          B2(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" />)
          B==>B2==>A==>B
        end
        C(${entangle.effect}<img src=${entangle.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
        C==>Used
        subgraph Used [Entangle Used]
          A2(${stabR.effect}<img src=${stabR.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n45%</span>)
          B3(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n55%</span>)
        end
      end
      subgraph Master [<img src=${base}/assets/act2/elites/taskmaster.webp class="h-10 object-contain inline" />]
        A4(${scouringWhip.effect}<img src=${scouringWhip.intent} class="h-10 object-contain" />)
      end
      subgraph Blue [<img src=${base}/assets/act1/monsters/blue-slaver.webp class="h-10 object-contain inline" />]
        A5(${stabB.effect}<img src=${stabB.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n60%</span>)
        B5(${rake.effect}<img src=${rake.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n40%</span>)
      end
  `,
  img: `${base}/assets/act2/elites/taskmaster.webp`,
  name: "Taskmaster",
  slug: "taskmaster",
});

export const getTaskmaster = () => taskmaster;
