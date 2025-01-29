import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

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
      A(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
      A2(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" />)
      B(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" />)
      C(${entangle.effect}<img src=${entangle.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      A3(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n45%</span>)
      B2(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${aLevel.v >= 17 ? 1 : 2}\n55%</span>)
      A==>B
      C==>Used
      subgraph Used [Entangle Used]
        direction LR
        A3
        B2
      end
      subgraph Not [Entangle Not Used]
        B==>A2
        A2==>B
      end
  `
    : `
    flowchart-elk LR
      A(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
      A2(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" />)
      B(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" />)
      B2(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" />)
      C(${entangle.effect}<img src=${entangle.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      A3(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n45%</span>)
      B3(${scrape.effect}<img src=${scrape.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${aLevel.v >= 17 ? 1 : 2}\n55%</span>)
      A==>B
      C==>Used
      subgraph Used [Entangle Used]
        direction LR
        A3
        B3
      end
      subgraph Not [Entangle Not Used]
        B==>B2
        B2==>A2
        A2==>B
      end
  `,
  img: `${base}/assets/act1/monsters/red-slaver.webp`,
  name: "Red Slaver",
  slug: "red-slaver",
});

export const getRedSlaver = () => redSlaver;
