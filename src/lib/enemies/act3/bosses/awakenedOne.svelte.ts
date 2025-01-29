import { type Enemy, type Move } from "$lib/types";
import { base } from "$app/paths";

// Unawakened
const slash: Move = {
  effect: "20 Damage.",
  intent: `${base}/assets/intents/5.png`,
  name: "Slash",
};

const soulStrike: Move = {
  effect: "6 x 4 Damage.",
  intent: `${base}/assets/intents/5.png`,
  name: "Soul Strike",
};

const rebirth: Move = {
  effect: "Removes debuffs.",
  intent: `${base}/assets/intents/unknown.png`,
  name: "Rebirth",
};

// Awakened
const darkEcho: Move = {
  effect: "40 Damage.",
  intent: `${base}/assets/intents/7.png`,
  name: "Dark Echo",
};

const sludge: Move = {
  effect: "18 Damage. 1 Void into draw.",
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Sludge",
};

const tackle: Move = {
  effect: "10 x 3 Damage.",
  intent: `${base}/assets/intents/7.png`,
  name: "Tackle",
};

const awakenedOne: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      subgraph Unawakened [<img src=${base}/assets/act3/bosses/awakened-one-unawakened.webp class="h-10 object-contain inline" />]
        direction LR
        A(${slash.effect}<img src=${slash.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\nTurn 1: 100%\n75%</span>)
        B(${soulStrike.effect}<img src=${soulStrike.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1\nTurn 1: 0%\n25%</span>)
      end
      C(${rebirth.effect}<img src=${rebirth.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      A2(${darkEcho.effect}<img src=${darkEcho.intent} class="h-10 object-contain" />)
      C==>A2==>Awakened
      subgraph Awakened [<img src=${base}/assets/act3/bosses/awakened-one-awakened.webp class="h-10 object-contain inline" />]
        direction LR
        B2(${sludge.effect}<img src=${sludge.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n50%</span>)
        C2(${tackle.effect}<img src=${tackle.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n50%</span>)
      end
  `,
  img: `${base}/assets/act3/bosses/awakened-one-unawakened.webp`,
  name: "Awakened One",
  slug: "awakened-one",
});

export const getAwakenedOne = () => awakenedOne;
