import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

// Wizard
const charging: Move = {
  effect: "Nothing.",
  intent: `${base}/assets/intents/unknown.png`,
  name: "Charging",
};

const ultimateBlast: Move = $derived({
  effect: `${aLevel.v >= 2 ? 30 : 25} Damage.`,
  intent: `${base}/assets/intents/6.png`,
  name: "Ultimate Blast",
});

// Mad
const scratch: Move = $derived({
  effect: `${aLevel.v >= 2 ? 5 : 4} Damage.`,
  intent: `${base}/assets/intents/1.png`,
  name: "Scratch",
});

// Fat
const smash: Move = $derived({
  effect: `${aLevel.v >= 2 ? 5 : 4} Damage. 1 Weak.${aLevel.v >= 17 ? " 1 Frail" : ""}.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Smash",
});

// Shield
const protect: Move = $derived({
  effect: `Ally ${aLevel.v >= 2 ? (aLevel.v >= 17 ? 11 : 8) : 7} Block.`,
  intent: `${base}/assets/intents/defend.png`,
  name: "Protect",
});

const shieldBash: Move = $derived({
  effect: `${aLevel.v >= 2 ? 8 : 6} Damage.`,
  intent: `${base}/assets/intents/2.png`,
  name: "Shield Bash",
});

// Sneaky
const puncture: Move = $derived({
  effect: `${aLevel.v >= 2 ? 10 : 9} Damage.`,
  intent: `${base}/assets/intents/2.png`,
  name: "Puncture",
});

const gremlins: Enemy = $derived({
  flowchart: aLevel.v >= 17
    ? `
    flowchart-elk TB
      subgraph Wizard [<img src=${base}/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${charging.effect}<img src=${charging.intent} class="h-10 object-contain" />)
        A2(${charging.effect}<img src=${charging.intent} class="h-10 object-contain" />)
        B(${ultimateBlast.effect}<img src=${ultimateBlast.intent} class="h-10 object-contain" />)
        A==>A2==>B==>B
      end
      subgraph Mad [<img src=${base}/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A3(${scratch.effect}<img src=${scratch.intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=${base}/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A4(${smash.effect}<img src=${smash.intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=${base}/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A5(${protect.effect}<img src=${protect.intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%\nTargets others when able.</span>)
        B5(${shieldBash.effect}<img src=${shieldBash.intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=${base}/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A6(${puncture.effect}<img src=${puncture.intent} class="h-10 object-contain" />)
      end
  `
    : `
    flowchart-elk TB
      subgraph Wizard [<img src=${base}/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${charging.effect}<img src=${charging.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2(${charging.effect}<img src=${charging.intent} class="h-10 object-contain" />)
        A3(${charging.effect}<img src=${charging.intent} class="h-10 object-contain" />)
        B(${ultimateBlast.effect}<img src=${ultimateBlast.intent} class="h-10 object-contain" />)
        A==>A2==>B==>A3==>A
      end
      subgraph Mad [<img src=${base}/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A4(${scratch.effect}<img src=${scratch.intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=${base}/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A5(${smash.effect}<img src=${smash.intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=${base}/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A6(${protect.effect}<img src=${protect.intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%\nTargets others when able.</span>)
        B6(${shieldBash.effect}<img src=${shieldBash.intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=${base}/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A7(${puncture.effect}<img src=${puncture.intent} class="h-10 object-contain" />)
      end
  `,
  img: `${base}/assets/act1/monsters/gremlins.webp`,
  name: "Gremlins",
  slug: "gremlins",
});

export const getGremlins = () => gremlins;
