import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const reverberate: Move = $derived({
  effect: `${aLevel.v >= 4 ? 8 : 7} x 3 Damage.`,
  intent: `${base}/assets/intents/5.png`,
  name: "Reverberate",
});

const headSlam: Move = $derived({
  effect: `${aLevel.v >= 4 ? 32 : 26} Damage. 1 Draw Reduction.${aLevel.v >= 19 ? " 2 Slimed into discard." : ""}`,
  intent: `${base}/assets/intents/6.png`,
  name: "Head Slam",
});

const ripple: Move = $derived({
  effect: `20 Block. 1 Vulnerable. 1 Weak.${aLevel.v >= 19 ? " 1 Frail." : ""}`,
  intent: `${base}/assets/intents/defendDebuff.png`,
  name: "Ripple",
});

const haste: Move = $derived({
  effect: `Heals to 50% HP. Removes debuffs.${aLevel.v >= 19 ? " 32 Block. " : ""}`,
  intent: `${base}/assets/intents/buff1.png`,
  name: "Haste",
});

const timeEater: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${reverberate.effect}<img src=${reverberate.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n45%</span>)
      B(${headSlam.effect}<img src=${headSlam.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n35%</span>)
      C(${ripple.effect}<img src=${ripple.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1\n20%</span>)
      D(${haste.effect}<img src=${haste.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1\nTrigger: Below 50% HP.</span>)
  `,
  img: `${base}/assets/act3/bosses/time-eater.webp`,
  name: "Time Eater",
  slug: "time-eater",
});

export const getTimeEater = () => timeEater;
