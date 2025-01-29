import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

// Donu
const circleOfPower: Move = {
  effect: "Group 3 Strength.",
  intent: "/assets/intents/buff1.png",
  name: "Circle of Power",
};

const beamDonu: Move = $derived({
  effect: `${aLevel.v >= 4 ? 12 : 10} x 2 Damage.`,
  intent: "/assets/intents/5.png",
  name: "Beam",
});

// Deca
const squareOfProtection: Move = $derived({
  effect: `Group 16 Block.${aLevel.v >= 19 ? " 3 Plated Armor." : ""}`,
  intent: `/assets/intents/${aLevel.v >= 19 ? "defendBuff" : "defend"}.png`,
  name: "Square Of Protection",
});

const beamDeca: Move = $derived({
  effect: `${aLevel.v >= 4 ? 12 : 10} x 2 Damage. 2 Dazed into discard.`,
  intent: "/assets/intents/attackDebuff.png",
  name: "Beam",
});

const donuDeca: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      subgraph Donu [<img src=/assets/act3/bosses/donu.webp class="h-10 object-contain inline" />]
        A(${circleOfPower.effect}<img src=${circleOfPower.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        B(${beamDonu.effect}<img src=${beamDonu.intent} class="h-10 object-contain" />)
        A<==>B
      end
      subgraph Deca [<img src=/assets/act3/bosses/deca.webp class="h-10 object-contain inline" />]
        A2(${squareOfProtection.effect}<img src=${squareOfProtection.intent} class="h-10 object-contain" />)
        B2(${beamDeca.effect}<img src=${beamDeca.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2<==>B2
      end
  `,
  img: "/assets/act3/bosses/donu-deca.webp",
  name: "Donu and Deca",
  slug: "donu-deca",
});

export const getDonuDeca = () => donuDeca;
