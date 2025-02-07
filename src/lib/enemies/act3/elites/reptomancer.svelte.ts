import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const summon: Move = $derived({
  effect: `Spawns ${aLevel.v >= 18 ? 2 : "a"} Dagger.`,
  intent: `${base}/assets/intents/unknown.png`,
  name: "Summon",
});

const snakeStrike: Move = $derived({
  effect: `${aLevel.v >= 3 ? 16 : 13} x 2 Damage. 1 Weak.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Snake Strike",
});

const bigBite: Move = $derived({
  effect: `${aLevel.v >= 3 ? 34 : 30} Damage.`,
  intent: `${base}/assets/intents/7.png`,
  name: "Big Bite",
});

// Dagger
const stab: Move = {
  effect: "9 Damage. 1 Wound into discard.",
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Stab",
};

const explode: Move = {
  effect: "25 Damage. Dies.",
  intent: `${base}/assets/intents/6.png`,
  name: "Explode",
};

const reptomancer: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Reptomancer [<img src=${base}/assets/act3/elites/reptomancer.webp class="h-10 object-contain inline" />]
        subgraph 4Daggers [4 Daggers]
          B3(<img src=${snakeStrike.intent} class="h-10 object-contain" /><span class="text-xs">67%</span>)
          C3(<img src=${bigBite.intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
        subgraph 0-3Daggers [0-3 Daggers]
          A2(<img src=${summon.intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          B2(<img src=${snakeStrike.intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          C2(<img src=${bigBite.intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
      end
      subgraph Dagger [<img src=${base}/assets/act3/elites/dagger.webp class="h-10 object-contain inline" />]
        D(${stab.effect}<img src=${stab.intent} class="h-10 object-contain" />)
        E(${explode.effect}<img src=${explode.intent} class="h-10 object-contain" />)
        D==>E
      end
  `,
  moves: `
    flowchart-elk TB
      A(${summon.effect}<img src=${summon.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      B(${snakeStrike.effect}<img src=${snakeStrike.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${bigBite.effect}<img src=${bigBite.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
  `,
  img: `${base}/assets/act3/elites/reptomancer.webp`,
  name: "Reptomancer",
  slug: "reptomancer",
});

export const getReptomancer = () => reptomancer;
