import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

// Large
const flameTackleL: Move = $derived({
  effect: `${aLevel.v >= 2 ? 18 : 16} Damage. 2 Slimed into discard.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Flame Tackle",
});

const lickL: Move = $derived({
  effect: `${aLevel.v >= 17 ? 3 : 2} Frail.`,
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Lick",
});

const split: Move = {
  effect: "Spawns 2 Spike Slime M with current HP. Dies",
  intent: `${base}/assets/intents/unknown.png`,
  name: "Split",
};

// Medium
const flameTackleM: Move = $derived({
  effect: `${aLevel.v >= 2 ? 10 : 8} Damage. 1 Slimed into discard.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Flame Tackle",
});

const lickM: Move = $derived({
  effect: "1 Frail.",
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Lick",
});

// Small
const tackle: Move = $derived({
  effect: `${aLevel.v >= 2 ? 6 : 5} Damage.`,
  intent: `${base}/assets/intents/2.png`,
  name: "Tackle",
});

const spikeSlimes: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Large [<img src=${base}/assets/act1/monsters/spike-slime-l.webp class="h-10 object-contain inline" />]
        A(${flameTackleL.effect}<img src=${flameTackleL.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n30%</span>)
        B(${lickL.effect}<img src=${lickL.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n70%</span>)
        C(${split.effect}<img src=${split.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower. Interrupts current intent.</span>)
      end
      subgraph Medium [<img src=${base}/assets/act1/monsters/spike-slime-m.webp class="h-10 object-contain inline" />]
        A2(${flameTackleM.effect}<img src=${flameTackleM.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n30%</span>)
        B2(${lickM.effect}<img src=${lickM.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${aLevel.v >= 17 ? 1 : 2}\n70%</span>)
      end
      subgraph Small [<img src=${base}/assets/act1/monsters/spike-slime-s.webp class="h-10 object-contain inline" />]
        A3(${tackle.effect}<img src=${tackle.intent} class="h-10 object-contain" />)
      end
  `,
  img: `${base}/assets/act1/monsters/spike-slimes.webp`,
  name: "Spike Slimes",
  slug: "spike-slimes",
});

export const getSpikeSlimes = () => spikeSlimes;
