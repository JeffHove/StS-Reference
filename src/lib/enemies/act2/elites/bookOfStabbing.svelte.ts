import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const multiStab: Move = $derived({
  effect: `${aLevel.v >= 3 ? 7 : 6} x N Damage. N = 2 + ${aLevel.v >= 18 ? "Multi/Single Stabs" : "Multi-Stabs"} used`,
  intent: "/assets/intents/3.png",
  name: "Multi-Stab",
});

const singleStab: Move = $derived({
  effect: `${aLevel.v >= 3 ? 24 : 21} Damage.`,
  intent: "/assets/intents/5.png",
  name: "Single Stab",
});

const bookOfStabbing: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(*${multiStab.name}*\n${multiStab.effect}<img src=${multiStab.intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard\nMax Consecutive: 2\n85%</span>)
      B(*${singleStab.name}*\n${singleStab.effect}<img src=${singleStab.intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard\nMax Consecutive: 1\n15%</span>)
  `,
  img: "/assets/act2/elites/book-of-stabbing.webp",
  name: "Book of Stabbing",
  slug: "book-of-stabbing",
});

export const getBookOfStabbing = () => bookOfStabbing;
