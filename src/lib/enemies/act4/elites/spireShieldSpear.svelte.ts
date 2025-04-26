import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

// Shield
const bash: Move = $derived({
  effect: `${aLevel.v >= 3 ? 14 : 12} Damage. If Player has 1+ orb slot, 50/50 -1 Focus or -1 Strength. Else, -1 Strength.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Bash",
});

const fortify: Move = {
  effect: "Group 30 Block.",
  intent: `${base}/assets/intents/defend.png`,
  name: "Fortify",
};

const smash: Move = $derived({
  effect: `${aLevel.v >= 3 ? 38 : 34} Damage. ${aLevel.v >= 18 ? "99 Block" : "X Block. X = Damage Output"}.`,
  intent: `${base}/assets/intents/attackDefend.png`,
  name: "Smash",
});

// Spear
const burnStrike: Move = $derived({
  effect: `${aLevel.v >= 3 ? 6 : 5} x 2 Damage. 2 Burns into discard.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Burn Strike",
});

const piercer: Move = {
  effect: "Group 2 Strength.",
  intent: `${base}/assets/intents/buff1.png`,
  name: "Piercer",
};

const skewer: Move = $derived({
  effect: `10 x ${aLevel.v >= 3 ? 4 : 3} Damage.`,
  intent: `${base}/assets/intents/7.png`,
  name: "Skewer",
});

const spireShieldSpear: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Shield [<img src=${base}/assets/act4/elites/spire-shield.webp class="h-10 object-contain inline" />]
        direction LR
        A(${bash.effect}<img src=${bash.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B(${fortify.effect}<img src=${fortify.intent} class="h-10 object-contain" />)
        A2(${bash.effect}<img src=${bash.intent} class="h-10 object-contain" />)
        B2(${fortify.effect}<img src=${fortify.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C(${smash.effect}<img src=${smash.intent} class="h-10 object-contain" />)
        subgraph Loop
          A==>B==>C
          B2==>A2==>C
        end
      end
      subgraph Spear [<img src=${base}/assets/act4/elites/spire-spear.webp class="h-10 object-contain inline" />]
        direction LR
        A3(${burnStrike.effect}<img src=${burnStrike.intent} class="h-10 object-contain" />)
        A4(${burnStrike.effect}<img src=${burnStrike.intent} class="h-10 object-contain" />)
        A5(${burnStrike.effect}<img src=${burnStrike.intent} class="h-10 object-contain" />)
        B3(${piercer.effect}<img src=${piercer.intent} class="h-10 object-contain" />)
        B4(${piercer.effect}<img src=${piercer.intent} class="h-10 object-contain" />)
        C2(${skewer.effect}<img src=${skewer.intent} class="h-10 object-contain" />)
        A3==>Loop2
        subgraph Loop2 [Loop]
          C2== 50% ==>A4==>B3
          C2== 50% ==>B4==>A5
        end
      end
  `,
  img: `${base}/assets/act4/elites/spire-shield-spear.webp`,
  name: "Spire Shield and Spear",
  slug: "spire-shield-spear",
});

export const getSpireShieldSpear = () => spireShieldSpear;
