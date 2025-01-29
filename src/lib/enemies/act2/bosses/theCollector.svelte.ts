import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const buff: Move = $derived({
  effect: `Group ${aLevel.v >= 4 ? (aLevel.v >= 19 ? 5 : 4) : 3} Strength. ${aLevel.v >= 4 ? (aLevel.v >= 19 ? 23 : 18) : 15} Block.`,
  intent: `${base}/assets/intents/defendBuff.png`,
  name: "Buff",
});

const fireball: Move = $derived({
  effect: `${aLevel.v >= 4 ? 21 : 18} Damage.`,
  intent: `${base}/assets/intents/4.png`,
  name: "Fireball",
});

const megaDebuff: Move = $derived({
  effect: `${aLevel.v >= 19 ? 5 : 3} Weak. ${aLevel.v >= 19 ? 5 : 3} Vulnerable. ${aLevel.v >= 19 ? 5 : 3} Frail.`,
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Mega Debuff",
});

const spawn: Move = {
  effect: "Spawns up to 2 Torch Heads.",
  intent: `${base}/assets/intents/unknown.png`,
  name: "Spawn",
};

// Torch Head
const tackle: Move = {
  effect: "7 Damage.",
  intent: `${base}/assets/intents/2.png`,
  name: "Tackle",
};

const theCollector: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Head [<img src=${base}/assets/act2/bosses/torch-head.webp class="h-10 object-contain inline" />]
        E(${tackle.effect}<img src=${tackle.intent} class="h-10 object-contain" />)
      end
      subgraph Collector [<img src=${base}/assets/act2/bosses/the-collector.webp class="h-10 object-contain inline" />]
      subgraph 0-1Torch [0-1 Torch Heads]
          A(<img src=${buff.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
          B(<img src=${fireball.intent} class="h-10 object-contain" /><span class="text-xs">45%</span>)
          D(<img src=${spawn.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
        end
        subgraph 2Torch [2 Torch Heads]
          A2(<img src=${buff.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
          B2(<img src=${fireball.intent} class="h-10 object-contain" /><span class="text-xs">70%</span>)
        end
        subgraph Turn4 [Turn 4]
          C(<img src=${megaDebuff.intent} class="h-10 object-contain" />)
        end
      end
  `,
  moves: `
    flowchart-elk TB
      A(${buff.effect}<img src=${buff.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${fireball.effect}<img src=${fireball.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      C(${megaDebuff.effect}<img src=${megaDebuff.intent} class="h-10 object-contain" />)
      D(${spawn.effect}<img src=${spawn.intent} class="h-10 object-contain" />)
  `,
  img: `${base}/assets/act2/bosses/the-collector.webp`,
  name: "The Collector",
  slug: "the-collector",
});

export const getTheCollector = () => theCollector;
