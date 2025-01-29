import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

// Offensive
const chargingUp: Move = {
  effect: "9 Block",
  intent: `${base}/assets/intents/defend.png`,
  name: "Charging Up",
};

const fierceBash: Move = $derived({
  effect: `${aLevel.v >= 4 ? 36 : 32} Damage.`,
  intent: `${base}/assets/intents/7.png`,
  name: "Fierce Bash",
});

const ventSteam: Move = {
  effect: "2 Weak. 2 Vulnerable",
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Charging Up",
};

const whirlwind: Move = {
  effect: "5 x 4 Damage.",
  intent: `${base}/assets/intents/5.png`,
  name: "Whirlwind",
};

// Defensive
const defensiveMode: Move = $derived({
  effect: `${aLevel.v >= 19 ? 4 : 3} Sharp Hide.`,
  intent: `${base}/assets/intents/buff1.png`,
  name: "Defensive Mode",
});

const rollAttack: Move = $derived({
  effect: `${aLevel.v >= 4 ? 10 : 9} Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Roll Attack",
});

const twinSlam: Move = {
  effect: "8 x 2 Damage. Removes Sharp Hide. Enters Offensive mode.",
  intent: `${base}/assets/intents/attackBuff.png`,
  name: "Twin Slam",
};

const theGuardian: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${chargingUp.effect}<img src=${chargingUp.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${fierceBash.effect}<img src=${fierceBash.intent} class="h-10 object-contain" />)
      C(${ventSteam.effect}<img src=${ventSteam.intent} class="h-10 object-contain" />)
      D(${whirlwind.effect}<img src=${whirlwind.intent} class="h-10 object-contain" />)
      E(${defensiveMode.effect}<img src=${defensiveMode.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      F(${rollAttack.effect}<img src=${rollAttack.intent} class="h-10 object-contain" />)
      G(${twinSlam.effect}<img src=${twinSlam.intent} class="h-10 object-contain" />)
      subgraph Offensive [<img src=${base}/assets/act1/bosses/the-guardian-offensive.webp class="h-10 object-contain inline" />]
        direction LR
        A==>B==>C==>D==>A
      end
      subgraph Defensive [<img src=${base}/assets/act1/bosses/the-guardian-defensive.webp class="h-10 object-contain inline" />]
        direction LR
        E==>F==>G==>E
      end 
  `,
  img: `${base}/assets/act1/bosses/the-guardian-offensive.webp`,
  name: "The Guardian",
  slug: "the-guardian",
});

export const getTheGuardian = () => theGuardian;
