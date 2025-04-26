import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

// Large
const corrosiveSpitL: Move = $derived({
  effect: `${aLevel.v >= 2 ? 12 : 11} Damage. 2 Slimed into discard.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Corrosive Spit",
});

// Once fixed can add icons like Weak: https://github.com/mermaid-js/mermaid/issues/5010
const lickL: Move = $derived({
  effect: "2 Weak.",
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Lick",
});

const tackleL: Move = $derived({
  effect: `${aLevel.v >= 2 ? 18 : 16} Damage.`,
  intent: `${base}/assets/intents/4.png`,
  name: "Tackle",
});

const split: Move = {
  effect: "Spawns 2 Acid Slime M with current HP. Dies.",
  intent: `${base}/assets/intents/unknown.png`,
  name: "Split",
};

// Medium
const corrosiveSpitM: Move = $derived({
  effect: `${aLevel.v >= 2 ? 8 : 7} Damage. 1 Slimed into discard.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Corrosive Spit",
});

const lickM: Move = $derived({
  effect: "1 Weak.",
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Lick",
});

const tackleM: Move = $derived({
  effect: `${aLevel.v >= 2 ? 12 : 10} Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Tackle",
});

// Small
const lickS: Move = $derived({
  effect: "1 Weak.",
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Lick",
});

const tackleS: Move = $derived({
  effect: `${aLevel.v >= 2 ? 4 : 3} Damage.`,
  intent: `${base}/assets/intents/1.png`,
  name: "Tackle",
});

const acidSlimes: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Large [<img src=${base}/assets/act1/monsters/acid-slime-l.webp class="h-10 object-contain inline" />]
        A(${corrosiveSpitL.effect}<img src=${corrosiveSpitL.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n${aLevel.v >= 17 ? "40%" : "30%"}</span>)
        B(${lickL.effect}<img src=${lickL.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n30%</span>)
        C(${tackleL.effect}<img src=${tackleL.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 2 : 1}\n${aLevel.v >= 17 ? "30%" : "40%"}</span>)
        D(${split.effect}<img src=${split.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower. Interrupts current intent.</span>)
      end
      subgraph Medium [<img src=${base}/assets/act1/monsters/acid-slime-m.webp class="h-10 object-contain inline" />]
        A2(${corrosiveSpitM.effect}<img src=${corrosiveSpitM.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n${aLevel.v >= 17 ? "40%" : "30%"}</span>)
        B2(${lickM.effect}<img src=${lickM.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n30%</span>)
        C2(${tackleM.effect}<img src=${tackleM.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 2 : 1}\n${aLevel.v >= 17 ? "30%" : "40%"}</span>)
      end
      subgraph Small [<img src=${base}/assets/act1/monsters/acid-slime-s.webp class="h-10 object-contain inline" />]
        A3(${lickS.effect}<img src=${lickS.intent} class="h-10 object-contain" /><span class="text-xs">${aLevel.v >= 17 ? "Turn 1: 100%" : "Turn 1: 50%"}</span>)
        B3(${tackleS.effect}<img src=${tackleS.intent} class="h-10 object-contain" /><span class="text-xs">${aLevel.v >= 17 ? "" : "Turn 1: 50%"}</span>)
        A3<==>B3
      end
  `,
  img: `${base}/assets/act1/monsters/acid-slimes.webp`,
  name: "Acid Slimes",
  slug: "acid-slimes",
});

export const getAcidSlimes = () => acidSlimes;
