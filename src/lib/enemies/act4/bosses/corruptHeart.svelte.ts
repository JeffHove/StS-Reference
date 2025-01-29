import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const debilitate: Move = {
  effect: "2 Vulnerable. 2 Weak. 2 Frail. Dazed, Slimed, Wound, Burn and Void into draw.",
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Debilitate",
};

const bloodShots: Move = $derived({
  effect: `2 x ${aLevel.v >= 4 ? 15 : 12} Damage.`,
  intent: `${base}/assets/intents/5.png`,
  name: "Blood Shots",
});

const echo: Move = $derived({
  effect: `${aLevel.v >= 4 ? 45 : 40} Damage.`,
  intent: `${base}/assets/intents/7.png`,
  name: "Echo",
});

const buff: Move = {
  effect: "Removes Strength Down. 2 Strength and additional buff.",
  intent: `${base}/assets/intents/buff1.png`,
  name: "Buff",
};

const corruptHeart: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${debilitate.effect}<img src=${debilitate.intent} class="h-10 object-contain" />)
      B(${bloodShots.effect}<img src=${bloodShots.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B2(${bloodShots.effect}<img src=${bloodShots.intent} class="h-10 object-contain" />)
      C(${echo.effect}<img src=${echo.intent} class="h-10 object-contain" />)
      C2(${echo.effect}<img src=${echo.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${buff.effect}<img src=${buff.intent} class="h-10 object-contain" /><span class="text-xs">1. Artifact 2\n2. Beat of Death 1\n3. Painful Stabs\n4. 10 Strength\n5+. 50 Strength</span>)
      A==>Loop
      subgraph Loop
      B==>C==>D
      C2==>B2==>D
      end
  `,
  img: `${base}/assets/act4/bosses/corrupt-heart.webp`,
  name: "Corrupt Heart",
  slug: "corrupt-heart",
});

export const getCorruptHeart = () => corruptHeart;
