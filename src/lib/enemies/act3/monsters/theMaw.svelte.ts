import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const roar: Move = $derived({
  effect: `${aLevel.v >= 17 ? 5 : 3} Weak. ${aLevel.v >= 17 ? 5 : 3} Frail.`,
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Roar",
});

const drool: Move = $derived({
  effect: `${aLevel.v >= 17 ? 5 : 3} Strength.`,
  intent: `${base}/assets/intents/buff1.png`,
  name: "Drool",
});

const slam: Move = $derived({
  effect: `${aLevel.v >= 2 ? 30 : 25} Damage.`,
  intent: `${base}/assets/intents/6.png`,
  name: "Slam",
});

const nom: Move = {
  effect: "5 x T Damage. T = Turn Number / 2, rounded up.",
  intent: `${base}/assets/intents/2.png`,
  name: "Nom",
};

const theMaw: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${roar.effect}<img src=${roar.intent} class="h-10 object-contain" />)
      A==>afterDebuff
      subgraph afterDebuff [After Debuff]
        C(${slam.effect}<img src=${slam.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D(${nom.effect}<img src=${nom.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph afterSlam [After Slam]
        B(${drool.effect}<img src=${drool.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D2(${nom.effect}<img src=${nom.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      D2==>B
      B==>afterDebuff
      D==>B
      C==>afterSlam
  `,
  img: `${base}/assets/act3/monsters/the-maw.webp`,
  name: "The Maw",
  slug: "the-maw",
});

export const getTheMaw = () => theMaw;
