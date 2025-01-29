import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const scouringWhip: Move = $derived({
  effect: `7 Damage. ${aLevel.v >= 3 ? (aLevel.v >= 18 ? 3 : 2) : 1} Wound into discard.${aLevel.v >= 18 ? " 1 Strength." : ""}`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Scouring Whip",
});

const taskmaster: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${scouringWhip.effect}<img src=${scouringWhip.intent} class="h-10 object-contain" />)
  `,
  img: `${base}/assets/act2/elites/taskmaster.webp`,
  name: "Taskmaster",
  slug: "taskmaster",
});

export const getTaskmaster = () => taskmaster;
