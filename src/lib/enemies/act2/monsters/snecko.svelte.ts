import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const perplexingGlare: Move = {
  effect: "Confuse.",
  intent: "/assets/intents/debuff2.png",
  name: "Perplexing Glare",
};

const tailWhip: Move = $derived({
  effect: `${aLevel.v >= 2 ? 10 : 8} Damage. 2 Vulnerable${aLevel.v >= 17 ? " 2 Weak" : ""}.`,
  intent: "/assets/intents/attackDebuff.png",
  name: "Chomp",
});

const bite: Move = $derived({
  effect: `${aLevel.v >= 2 ? 18 : 15} Damage.`,
  intent: "/assets/intents/4.png",
  name: "Bite",
});

const snecko: Enemy = $derived({
  flowchart: `
    flowchart-elk TB
      A(${perplexingGlare.effect}<img src=${perplexingGlare.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%\n0%</span>)
      B(${tailWhip.effect}<img src=${tailWhip.intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${bite.effect}<img src=${bite.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2\n60%</span>)
  `,
  img: "/assets/act2/monsters/snecko.webp",
  name: "Snecko",
  slug: "snecko",
});

export const getSnecko = () => snecko;
