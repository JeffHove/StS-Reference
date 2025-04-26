import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const stab: Move = $derived({
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

const redSlaver: Enemy = $derived({
  flowchart: aLevel.v >= 17
    ? `
    flowchart-elk LR
      subgraph Not [Entangle Not Used]
        A(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
        B(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" />)
        B<==>A
      end
      C(${entangle.effect}<img src=${entangle.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      C==>Used
      subgraph Used [Entangle Used]
        direction LR
        A3(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n45%</span>)
        B2(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n55%</span>)
      end
  `
    : `
    flowchart-elk LR
      subgraph Not [Entangle Not Used]
        A(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
        B(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" />)
        B2(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" />)
        B==>B2==>A==>B
      end
      C(${entangle.effect}<img src=${entangle.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      C==>Used
      subgraph Used [Entangle Used]
        direction LR
        A3(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n45%</span>)
        B3(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n55%</span>)
      end
  `,
  img: `${base}/assets/act1/monsters/red-slaver.webp`,
  name: "Red Slaver",
  slug: "red-slaver",
});

export const getRedSlaver = () => redSlaver;
