import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const poke: Move = $derived({
  effect: `${aLevel.v >= 2 ? 6 : 5} x 2 Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Poke",
});

const zap: Move = $derived({
  effect: `${aLevel.v >= 2 ? 21 : 18} Damage.`,
  intent: `${base}/assets/intents/4.png`,
  name: "Zap",
});

const debilitate: Move = $derived({
  effect: `${aLevel.v >= 2 ? 12 : 10} Damage. 2 Vulnerable.`,
  intent: `${base}/assets/intents/unknown.png`,
  name: "Debilitate",
});

const drain: Move = {
  effect: "3 Weak. 3 Strength.",
  intent: `${base}/assets/intents/debuff1.png`,
  name: "Drain",
};

const hex: Move = {
  effect: "1 Hex.",
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Hex",
};

const chosen: Enemy = $derived({
  flowchart: aLevel.v >= 17
    ? `
    flowchart-elk LR
      A(${poke.effect}<img src=${poke.intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${zap.effect}<img src=${zap.intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${debilitate.effect}<img src=${debilitate.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${drain.effect}<img src=${drain.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${hex.effect}<img src=${hex.intent} class="h-10 object-contain" />)
      E==>EvenTurn
      subgraph EvenTurn [Even Turn]
        C
        D
      end
      subgraph OddTurn [Odd Turn]
        A
        B
      end
      EvenTurn<==>OddTurn

  `
    : `
    flowchart-elk LR
      A(${poke.effect}<img src=${poke.intent} class="h-10 object-contain" />)
      A2(${poke.effect}<img src=${poke.intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${zap.effect}<img src=${zap.intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${debilitate.effect}<img src=${debilitate.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${drain.effect}<img src=${drain.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${hex.effect}<img src=${hex.intent} class="h-10 object-contain" />)
      A==>E==>OddTurn
      subgraph OddTurn [Odd Turn]
        C
        D
      end
      subgraph EvenTurn [Even Turn]
        A2
        B
      end
      OddTurn<==>EvenTurn
  `,
  img: `${base}/assets/act2/monsters/chosen.webp`,
  name: "Chosen",
  slug: "chosen",
});

export const getChosen = () => chosen;
