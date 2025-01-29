import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const mug: Move = $derived({
  effect: `${aLevel.v >= 2 ? 11 : 10} Damage.`,
  intent: "/assets/intents/3.png",
  name: "Mug",
});

const lunge: Move = $derived({
  effect: `${aLevel.v >= 2 ? 18 : 16} Damage`,
  intent: "/assets/intents/4.png",
  name: "Lunge",
});

const smokeBomb: Move = $derived({
  effect: `${aLevel.v >= 17 ? 17 : 11} Block.`,
  intent: "/assets/intents/defend.png",
  name: "Smoke Bomb",
});

const escape: Move = {
  effect: "Escape.",
  intent: "/assets/intents/escape.png",
  name: "Escape",
};

const mugger: Enemy = $derived({
  flowchart: `
    flowchart-elk LR
      A(${mug.effect}<img src=${mug.intent} class="h-10 object-contain" />)
      A2(${mug.effect}<img src=${mug.intent} class="h-10 object-contain" />)
      B(${lunge.effect}<img src=${lunge.intent} class="h-10 object-contain" />)
      C(${smokeBomb.effect}<img src=${smokeBomb.intent} class="h-10 object-contain" />)
      D(${escape.effect}<img src=${escape.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,
  img: "/assets/act2/monsters/mugger.webp",
  name: "Mugger",
  slug: "mugger",
});

export const getMugger = () => mugger;
