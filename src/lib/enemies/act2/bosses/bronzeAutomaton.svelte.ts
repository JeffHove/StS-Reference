import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

// Bronze Automaton
const spawnOrbs: Move = {
  effect: "Spawns 2 Bronze Orbs.",
  intent: `${base}/assets/intents/unknown.png`,
  name: "Spawn Orbs",
};

const boost: Move = $derived({
  effect: `${aLevel.v >= 4 ? 4 : 3} Strength. ${aLevel.v >= 9 ? 12 : 9} Block.`,
  intent: `${base}/assets/intents/defendBuff.png`,
  name: "Boost",
});

const flail: Move = $derived({
  effect: `${aLevel.v >= 4 ? 8 : 7} x 2 Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Flail",
});

const hyperBeam: Move = $derived({
  effect: `${aLevel.v >= 4 ? 50 : 45} Damage.`,
  intent: `${base}/assets/intents/7.png`,
  name: "HYPER BEAM",
});

// Bronze Orb
const stasis: Move = {
  effect: "Steals the rarest card in the draw pile, or from the discard pile if the draw pile is empty.",
  intent: `${base}/assets/intents/debuff2.png`,
  name: "Stasis",
};

const beam: Move = {
  effect: "8 Damage.",
  intent: `${base}/assets/intents/2.png`,
  name: "Beam",
};

const supportBeam: Move = {
  effect: `<img src=${base}/assets/act2/bosses/bronze-automaton.webp class='h-10 object-contain inline' /> 12 Block.`,
  intent: `${base}/assets/intents/defend.png`,
  name: "Support Beam",
};

const bronzeAutomaton: Enemy = $derived({
  flowchart: aLevel.v >= 19
    ? `
    flowchart LR
      subgraph Automaton
        direction LR
        A(${spawnOrbs.effect}<img src=${spawnOrbs.intent} class="h-10 object-contain" />)
        B(${boost.effect}<img src=${boost.intent} class="h-10 object-contain" />)
        B2(${boost.effect}<img src=${boost.intent} class="h-10 object-contain" />)
        B3(${boost.effect}<img src=${boost.intent} class="h-10 object-contain" />)
        C(${flail.effect}<img src=${flail.intent} class="h-10 object-contain" />)
        C2(${flail.effect}<img src=${flail.intent} class="h-10 object-contain" />)
        D(${hyperBeam.effect}<img src=${hyperBeam.intent} class="h-10 object-contain" />)
        A==>C==>B==>C2==>B2==>D==>B3==>C
      end
      subgraph Orb
        E(${stasis.effect}<img src=${stasis.intent} class="h-10 object-contain" /><span class="text-xs">75%\nCard Stolen: 0%</span>)  
        F(${beam.effect}<img src=${beam.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n7.5%\nCard Stolen: 30%</span>)  
        G(${supportBeam.effect}<img src=${supportBeam.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n17.5%\nCard Stolen: 70%</span>)  
      end
      Automaton~~~Orb
  `
    : `
    flowchart LR
      subgraph Automaton
        direction LR
        A(${spawnOrbs.effect}<img src=${spawnOrbs.intent} class="h-10 object-contain" />)
        C(${flail.effect}<img src=${flail.intent} class="h-10 object-contain" />)
        B(${boost.effect}<img src=${boost.intent} class="h-10 object-contain" />)
        B2(${boost.effect}<img src=${boost.intent} class="h-10 object-contain" />)
        C2(${flail.effect}<img src=${flail.intent} class="h-10 object-contain" />)
        D(${hyperBeam.effect}<img src=${hyperBeam.intent} class="h-10 object-contain" />)  
        E(Stunned<img src='${base}/assets/intents/stun.png' class="h-10 object-contain" />)
        A==>C==>B==>C2==>B2==>D==>E==>C
      end
      subgraph Orb
          F(${stasis.effect}<img src=${stasis.intent} class="h-10 object-contain" /><span class="text-xs">75%\nCard Stolen: 0%</span>)  
        G(${beam.effect}<img src=${beam.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n7.5%\nCard Stolen: 30%</span>)  
        H(${supportBeam.effect}<img src=${supportBeam.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2\n17.5%\nCard Stolen: 70%</span>)  
      end
      Automaton~~~Orb
  `,
  img: `${base}/assets/act2/bosses/bronze-automaton.webp`,
  name: "Bronze Automaton",
  slug: "bronze-automaton",
});

export const getBronzeAutomaton = () => bronzeAutomaton;
