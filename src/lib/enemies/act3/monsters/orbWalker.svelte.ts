import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const laser: Move = $derived({
  effect: `${aLevel.v >= 2 ? 11 : 10} Damage. 1 Burn into draw. 1 Burn into discard.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Laser",
});

const claw: Move = $derived({
  effect: `${aLevel.v >= 2 ? 16 : 15} Damage.`,
  intent: `${base}/assets/intents/4.png`,
  name: "Claw",
});

const orbWalker: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${laser.effect}<img src=${laser.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n60%</span>)
      B(${claw.effect}<img src=${claw.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n40%</span>)
  `,
  img: `${base}/assets/act3/monsters/orb-walker.webp`,
  name: "Orb Walker",
  slug: "orb-walker",
});

export const getOrbWalker = () => orbWalker;
