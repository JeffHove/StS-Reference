import { base } from "$app/paths";
import { aLevel } from "$lib/shared.svelte";
import { type Enemy, type Move } from "$lib/types";

const activate: Move = {
  effect: "Nothing.",
  intent: `${base}/assets/intents/unknown.png`,
  name: "Activate",
};

const divider: Move = {
  effect: "H x 6 Damage. H = Player HP / 12 + 1, rounded down.",
  intent: `${base}/assets/intents/7.png`,
  name: "Divider",
};

const inferno: Move = $derived({
  effect: `${aLevel.v >= 4 ? 3 : 2} x 6 Damage. Upgrades all Burn. 3 Burn+ into discard.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Inferno",
});

const sear: Move = $derived({
  effect: `6 Damage. ${aLevel.v >= 19 ? 2 : 1} Burn into discard.`,
  intent: `${base}/assets/intents/attackDebuff.png`,
  name: "Sear",
});

const tackle: Move = $derived({
  effect: `${aLevel.v >= 4 ? 6 : 5} x 2 Damage.`,
  intent: `${base}/assets/intents/3.png`,
  name: "Tackle",
});

const inflame: Move = $derived({
  effect: `${aLevel.v >= 19 ? 3 : 2} Strength. 12 Block.`,
  intent: `${base}/assets/intents/defendBuff.png`,
  name: "Inflame",
});

const hexaghost: Enemy = $derived({
  flowchart: `
    flowchart LR
      A(${activate.effect}<img src=${activate.intent} class="h-10 object-contain" />)
      B(${divider.effect}<img src=${divider.intent} class="h-10 object-contain" />)
      C(${sear.effect}<img src=${sear.intent} class="h-10 object-contain" />)
      C2(${sear.effect}<img src=${sear.intent} class="h-10 object-contain" />)
      C3(${sear.effect}<img src=${sear.intent} class="h-10 object-contain" />)
      D(${tackle.effect}<img src=${tackle.intent} class="h-10 object-contain" />)
      D2(${tackle.effect}<img src=${tackle.intent} class="h-10 object-contain" />)
      E(${inflame.effect}<img src=${inflame.intent} class="h-10 object-contain" />)
      F(${inferno.effect}<img src=${inferno.intent} class="h-10 object-contain" />)
      A==>B
      B==>C
      C==>D
      D==>C2
      C2==>E
      E==>D2
      D2==>C3
      C3==>F
      F== Gives Burn+ instead of Burn ==>B
  `,
  img: `${base}/assets/act1/bosses/hexaghost.webp`,
  name: "Hexaghost",
  slug: "hexaghost",
});

export const getHexaghost = () => hexaghost;
