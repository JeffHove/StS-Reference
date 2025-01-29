import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const goopSpray: Move = $derived({
  effect: `${aLevel.v >= 19 ? 5 : 3} Slimed into discard.`,
  intent: "/assets/intents/debuff2.png",
  name: "Goop Spray",
});

const preparing: Move = {
  effect: "Nothing.",
  intent: "/assets/intents/unknown.png",
  name: "Preparing",
};

const slam: Move = $derived({
  effect: `${aLevel.v >= 4 ? 38 : 35} Damage.`,
  intent: "/assets/intents/7.png",
  name: "Slam",
});

const split: Move = {
  effect: "Spawns Acid Slime L and Spike Slime L with current HP. Dies.",
  intent: "/assets/intents/unknown.png",
  name: "Split",
};

const slimeBoss: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${goopSpray.effect}<img src=${goopSpray.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${preparing.effect}<img src=${preparing.intent} class="h-10 object-contain" />)
      C(${slam.effect}<img src=${slam.intent} class="h-10 object-contain" />)
      D(${split.effect}<img src=${split.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
    A==>B
    B==>C
    C==>A
  `,
  img: "/assets/act1/bosses/slime-boss.webp",
  name: "Slime Boss",
  slug: "slime-boss",
});

export const getSlimeBoss = () => slimeBoss;
