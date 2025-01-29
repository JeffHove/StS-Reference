import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const implant: Move = {
  effect: "1 Parasite into deck. Only affects future combats.",
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Implant",
};

const flail: Move = $derived({
  effect: `${aLevel.v >= 2 ? 16 : 15} Damage. ${aLevel.v >= 2 ? 18 : 16} Block.`,
  intent: `${base}/assets/intents/attackDefend.png`,
  name: "Flail",
});

const wither: Move = $derived({
  effect: `${aLevel.v >= 2 ? 12 : 10} Damage. 2 Weak. 2 Vulnerable.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Wither",
});

const multiStrike: Move = $derived({
  effect: `${aLevel.v >= 2 ? 9 : 7} x 3 Damage.`,
  intent: `${base}/assets/intents/5.png`,
  name: "Multi-Strike",
});

const strongStrike: Move = $derived({
  effect: `${aLevel.v >= 2 ? 38 : 32} Damage.`,
  intent: `${base}/assets/intents/7.png`,
  name: "Strong Strike",
});

const writhingMass: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      subgraph Turn1 [Turn 1]
        B(${flail.effect}<img src=${flail.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n25%</span>)
        C(${wither.effect}<img src=${wither.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n25%</span>)
        D(${multiStrike.effect}<img src=${multiStrike.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n25%</span>)
        E(${strongStrike.effect}<img src=${strongStrike.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n25%</span>)
      end
      subgraph Turn2+ [Turn 2+]
        A(${implant.effect}<img src=${implant.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1\n10%</span>)
        B2(${flail.effect}<img src=${flail.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n30%</span>)
        C2(${wither.effect}<img src=${wither.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n20%</span>)
        D2(${multiStrike.effect}<img src=${multiStrike.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n30%</span>)
        E2(${strongStrike.effect}<img src=${strongStrike.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n10%</span>)
      end
  `,
  img: `${base}/assets/act3/monsters/writhing-mass.webp`,
  name: "Writhing Mass",
  slug: "writhing-mass",
});

export const getWrithingMass = () => writhingMass;
