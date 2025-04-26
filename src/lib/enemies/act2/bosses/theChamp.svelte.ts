import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const defensiveStance: Move = $derived({
  effect: `${aLevel.v >= 9 ? (aLevel.v >= 19 ? 20 : 18) : 15} Block. ${aLevel.v >= 9 ? (aLevel.v >= 19 ? 7 : 6) : 5} Metallicize.`,
  intent: `${base}/assets/intents/defendBuff.png`,
  name: "Defensive Stance",
});

const faceSlap: Move = $derived({
  effect: `${aLevel.v >= 4 ? 14 : 12} Damage. 2 Frail. 2 Vulnerable.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Face Slap",
});

const taunt: Move = {
  effect: "2 Weak. 2 Vulnerable.",
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Taunt",
};

const heavySlash: Move = $derived({
  effect: `${aLevel.v >= 4 ? 18 : 16} Damage.`,
  intent: `${base}/assets/intents/4.png`,
  name: "Heavy Slash",
});

const gloat: Move = $derived({
  effect: `${aLevel.v >= 4 ? (aLevel.v >= 19 ? 4 : 3) : 2} Strength.`,
  intent: `${base}/assets/intents/buff1.png`,
  name: "Gloat",
});

const execute: Move = {
  effect: "10 x 2 Damage.",
  intent: `${base}/assets/intents/5.png`,
  name: "Execute",
};

const anger: Move = $derived({
  effect: `Removes debuffs. ${aLevel.v >= 4 ? (aLevel.v >= 19 ? 12 : 9) : 6} Strength.`,
  intent: `${base}/assets/intents/buff1.png`,
  name: "Anger",
});

const theChamp: Enemy = $derived({
  flowchart: aLevel.v >= 19
    ? `
    flowchart-elk TB
      subgraph Main [Main.\n<span class="text-xs">Invalid moves, when rolled, use next instead.</span>]
        direction LR
        A(${defensiveStance.effect}<img src=${defensiveStance.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2\nMax In a Row: 1\n${aLevel.v >= 19 ? "30%" : "15%"}</span>)
        B(${faceSlap.effect}<img src=${faceSlap.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n25%</span>)
        D(${heavySlash.effect}<img src=${heavySlash.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n45%</span>)
        A==>B<==>D
      end
      subgraph Phase1 [Phase 1]
        subgraph Turn4 [Turn 4, 8, 12, etc.]
          C(${taunt.effect}<img src=${taunt.intent} class="h-10 object-contain" />)
        end
      end
      subgraph Phase2 [Phase 2]
        F(${execute.effect}<img src=${execute.intent} class="h-10 object-contain" />)
        G(${anger.effect}<img src=${anger.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Does NOT interupt current intent.</span>)
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `
    : `
    flowchart-elk TB
      subgraph Main [Main.\n<span class="text-xs">Invalid moves, when rolled, use next instead.</span>]
        direction LR
        A(${defensiveStance.effect}<img src=${defensiveStance.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2\nMax In a Row: 1\n${aLevel.v >= 19 ? "30%" : "15%"}</span>)
        B(${faceSlap.effect}<img src=${faceSlap.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n25%</span>)
        D(${heavySlash.effect}<img src=${heavySlash.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n45%</span>)
        E(${gloat.effect}<img src=${gloat.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n15%</span>)
        A==>E==>B<==>D
      end
      subgraph Phase1 [Phase 1]
        subgraph Turn4 [Turn 4, 8, 12, etc.]
          C(${taunt.effect}<img src=${taunt.intent} class="h-10 object-contain" />)
        end
      end
      subgraph Phase2 [Phase 2]
        F(${execute.effect}<img src=${execute.intent} class="h-10 object-contain" />)
        G(${anger.effect}<img src=${anger.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Does NOT interupt current intent.</span>)
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `,
  img: `${base}/assets/act2/bosses/the-champ.webp`,
  name: "The Champ",
  slug: "the-champ",
});

export const getTheChamp = () => theChamp;
