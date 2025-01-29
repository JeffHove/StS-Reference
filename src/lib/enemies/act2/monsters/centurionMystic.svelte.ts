import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

// Centurion
const slash: Move = $derived({
  effect: `${aLevel.v >= 2 ? 14 : 12} Damage.`,
  intent: "/assets/intents/3.png",
  name: "Slash",
});

const fury: Move = $derived({
  effect: `${aLevel.v >= 2 ? 7 : 6} x 3 Damage.`,
  intent: "/assets/intents/4.png",
  name: "Fury",
});

const defend: Move = $derived({
  effect: `Ally ${aLevel.v >= 17 ? 20 : 15} Block.`,
  intent: "/assets/intents/defend.png",
  name: "Defend",
});

// Mystic
const heal: Move = $derived({
  effect: `Group ${aLevel.v >= 17 ? 20 : 16} Heal.`,
  intent: "/assets/intents/buff1.png",
  name: "Heal",
});

const buff: Move = $derived({
  effect: `Group ${aLevel.v >= 2 ? (aLevel.v >= 17 ? 4 : 3) : 2} Strength.`,
  intent: "/assets/intents/buff1.png",
  name: "Buff",
});

const attackDebuff: Move = $derived({
  effect: `${aLevel.v >= 2 ? 9 : 8} Damage. 2 Frail.`,
  intent: "/assets/intents/attackDebuff.png",
  name: "Attack/Debuff",
});

const centurionMystic: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Centurion [<img src=/assets/act2/monsters/centurion.webp class="h-10 object-contain inline" />]
        A(${slash.effect}<img src=${slash.intent} class="h-10 object-contain" /><span class="text-xs">65%</span>)
        subgraph MysticAlive [Mystic Alive]
          C(${defend.effect}<img src=${defend.intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
        subgraph MysticDead [Mystic Dead]
          B(${fury.effect}<img src=${fury.intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
      end
      subgraph Mystic [<img src=/assets/act2/monsters/mystic.webp class="h-10 object-contain inline" />]
        A2(${heal.effect}<img src=${heal.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\nTrigger: An enemy is hurt ${aLevel.v >= 17 ? 21 : 16} or more</span>)
        B2(${buff.effect}<img src=${buff.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n40%</span>)
        C2(${attackDebuff.effect}<img src=${attackDebuff.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${aLevel.v >= 17 ? 1 : 2}\n60%</span>)
      end
  `,
  img: "/assets/act2/monsters/centurion-mystic.webp",
  name: "Centurion and Mystic",
  slug: "centurion-mystic",
});

export const getCenturionMystic = () => centurionMystic;
