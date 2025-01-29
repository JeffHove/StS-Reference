import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

const nip: Move = $derived({
  effect: `${aLevel.v >= 2 ? "D + 2" : "D"} Damage. D is chosen between 7 and 11 at the beginning of the battle.`,
  intent: `${base}/assets/intents/2.png`,
  name: "Nip",
});

const chomp: Move = $derived({
  effect: `${aLevel.v >= 2 ? 9 : 8} x 2 Damage.`,
  intent: `${base}/assets/intents/4.png`,
  name: "Chomp",
});

const harden: Move = $derived({
  effect: `12 Block.${aLevel.v >= 17 ? " 2 Strength." : ""}`,
  intent: `${base}/assets/intents/${aLevel.v >= 17 ? "defendBuff" : "defend"}.png`,
  name: "Harden",
});

const reincarnate: Move = {
  effect: "Revives with 50% HP.",
  intent: `${base}/assets/intents/buff1.png`,
  name: "Reincarnate",
};

const regrow: Move = {
  effect: "Nothing.",
  intent: `${base}/assets/intents/unknown.png`,
  name: "Regrow",
};

const darkling: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      D(${reincarnate.effect}<img src=${reincarnate.intent} class="h-10 object-contain" />)
      E(${regrow.effect}<img src=${regrow.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      E==>D
      subgraph Middle [Middle Darkling / Outer Darklings Turn 1]
        A1(<img src=${nip.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C1(<img src=${harden.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Outer [Outer Darklings Turn 2+]
        A2(<img src=${nip.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
        B2(<img src=${chomp.intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
        C2(<img src=${harden.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      subgraph Moves
        A(${nip.effect}<img src=${nip.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
        B(${chomp.effect}<img src=${chomp.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
        C(${harden.effect}<img src=${harden.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      end
      Middle~~~Moves
      Outer~~~Moves
  `,
  img: `${base}/assets/act3/monsters/darkling.webp`,
  name: "Darkling",
  slug: "darkling",
});

export const getDarkling = () => darkling;
