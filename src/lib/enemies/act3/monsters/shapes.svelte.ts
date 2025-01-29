import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

// Spiker
const cut: Move = $derived({
  effect: `${aLevel.v >= 2 ? 9 : 7} Damage.`,
  intent: "/assets/intents/2.png",
  name: "Cut",
});

const spike: Move = {
  effect: "2 Thorns.",
  intent: "/assets/intents/buff1.png",
  name: "Spike",
};

// Exploder
const slam: Move = $derived({
  effect: `${aLevel.v >= 2 ? 11 : 9} Damage.`,
  intent: "/assets/intents/2.png",
  name: "Slam",
});

const explode: Move = {
  effect: "30 Damage. Dies.",
  intent: "/assets/intents/unknown.png",
  name: "Explode",
};

// Repulsor
const bash: Move = $derived({
  effect: `${aLevel.v >= 2 ? 13 : 11} Damage.`,
  intent: "/assets/intents/3.png",
  name: "Bash",
});

const repulse: Move = {
  effect: "2 Dazed into draw.",
  intent: "/assets/intents/debuff1.png",
  name: "Repulse",
};

const shapes: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Spiker [<img src=/assets/act3/monsters/spiker.webp class="h-10 object-contain inline" />]
        A(${cut.effect}<img src=${cut.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n40%</span>)
        B(${spike.effect}<img src=${spike.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 6\n50%</span>)
      end
      subgraph Exploder [<img src=/assets/act3/monsters/exploder.webp class="h-10 object-contain inline" />]
        A2(${slam.effect}<img src=${slam.intent} class="h-10 object-contain" />)
        A3(${slam.effect}<img src=${slam.intent} class="h-10 object-contain" />)
        B2(${explode.effect}<img src=${explode.intent} class="h-10 object-contain" />)
        A2==>A3==>B2
      end
      subgraph Repulsor [<img src=/assets/act3/monsters/repulsor.webp class="h-10 object-contain inline" />]
        A4(${bash.effect}<img src=${bash.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1\n20%</span>)
        B3(${repulse.effect}<img src=${repulse.intent} class="h-10 object-contain" /><span class="text-xs">80%</span>)
      end
  `,
  img: "/assets/act3/monsters/shapes.webp",
  name: "Shapes",
  slug: "shapes",
});

export const getShapes = () => shapes;
