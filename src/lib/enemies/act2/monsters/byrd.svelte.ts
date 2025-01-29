import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const caw: Move = {
  effect: "1 Strength.",
  intent: `${base}/assets/intents/buff1.png`,
  name: "Caw",
};

const peck: Move = $derived({
  effect: `1 x ${aLevel.v >= 2 ? 6 : 5} Damage.`,
  intent: `${base}/assets/intents/2.png`,
  name: "Peck",
});

const swoop: Move = $derived({
  effect: `${aLevel.v >= 2 ? 14 : 12} Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Swoop",
});

const fly: Move = $derived({
  effect: `Flying ${aLevel.v >= 17 ? 4 : 3}.`,
  intent: `${base}/assets/intents/unknown.png`,
  name: "Fly",
});

const headbutt: Move = {
  effect: "3 Damage",
  intent: `${base}/assets/intents/1.png`,
  name: "Headbutt",
};

const byrd: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${caw.effect}<img src=${caw.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1\nTurn 1: 37.5%\n30%</span>)
      B(${peck.effect}<img src=${peck.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\nTurn 1: 62.5%\n50%</span>)
      C(${swoop.effect}<img src=${swoop.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1\nTurn 1: 0%\n20%</span>)
      D(${fly.effect}<img src=${fly.intent} class="h-10 object-contain" />)
      E(${headbutt.effect}<img src=${headbutt.intent} class="h-10 object-contain" />)
      F(Stunned<img src='${base}/assets/intents/stun.png' class="h-10 object-contain" />)
      subgraph Grounded [<img src=${base}/assets/act2/monsters/byrd-grounded.webp class="h-10 object-contain inline" />]
        direction LR
        F==>E==>D
      end
      Grounded==>Flying
      subgraph Flying [<img src=${base}/assets/act2/monsters/byrd-flying.webp class="h-10 object-contain inline" />]
        A
        B
        C
      end
  `,
  img: `${base}/assets/act2/monsters/byrd-flying.webp`,
  name: "Byrd",
  slug: "byrd",
});

export const getByrd = () => byrd;
