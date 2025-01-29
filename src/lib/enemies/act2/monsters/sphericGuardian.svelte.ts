import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const slam: Move = $derived({
  effect: `${aLevel.v >= 2 ? 11 : 10} x 2 Damage.`,
  intent: "/assets/intents/5.png",
  name: "Slam",
});

const activate: Move = $derived({
  effect: `${aLevel.v >= 17 ? 35 : 25} Block.`,
  intent: "/assets/intents/defend.png",
  name: "Activate",
});

const harden: Move = $derived({
  effect: `${aLevel.v >= 2 ? 11 : 10} Damage. 15 Block.`,
  intent: "/assets/intents/attackDefend.png",
  name: "Harden",
});

const attackDebuff: Move = $derived({
  effect: `${aLevel.v >= 2 ? 11 : 10} Damage. 5 Frail.`,
  intent: "/assets/intents/attackDebuff.png",
  name: "Attack/Debuff",
});

const sphericGuardian: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${slam.effect}<img src=${slam.intent} class="h-10 object-contain" />)
      B(${activate.effect}<img src=${activate.intent} class="h-10 object-contain" />)
      C(${harden.effect}<img src=${harden.intent} class="h-10 object-contain" />)
      D(${attackDebuff.effect}<img src=${attackDebuff.intent} class="h-10 object-contain" />)
      B==>D==>A<==>C
  `,
  img: "/assets/act2/monsters/spheric-guardian.webp",
  name: "Spheric Guardian",
  slug: "spheric-guardian",
});

export const getSphericGuardian = () => sphericGuardian;
