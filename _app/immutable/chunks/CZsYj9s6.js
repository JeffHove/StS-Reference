import{y as e,A as n}from"./Rv30n1oE.js";import{a as s}from"./C92Wfy_o.js";import{b as t}from"./YeH-d3rn.js";const de={effect:"Nothing.",intent:`${t}/assets/intents/unknown.png`,name:"Activate"},ve={effect:"H x 6 Damage. H = Player HP / 12 + 1, rounded down.",intent:`${t}/assets/intents/7.png`,name:"Divider"},je=n(()=>({effect:`${s.v>=4?3:2} x 6 Damage. Upgrades all Burn. 3 Burn+ into discard.`,intent:`${t}/assets/intents/3.png`,name:"Inferno"})),l=n(()=>({effect:`6 Damage. ${s.v>=19?2:1} Burn into discard.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Sear"})),d=n(()=>({effect:`${s.v>=4?6:5} x 2 Damage.`,intent:`${t}/assets/intents/3.png`,name:"Tackle"})),we=n(()=>({effect:`${s.v>=19?3:2} Strength. 12 Block.`,intent:`${t}/assets/intents/defendBuff.png`,name:"Inflame"})),As=n(()=>({flowchart:`
    flowchart LR
      A(${de.effect}<img src=${de.intent} class="h-10 object-contain" />)
      B(${ve.effect}<img src=${ve.intent} class="h-10 object-contain" />)
      C(${e(l).effect}<img src=${e(l).intent} class="h-10 object-contain" />)
      C2(${e(l).effect}<img src=${e(l).intent} class="h-10 object-contain" />)
      C3(${e(l).effect}<img src=${e(l).intent} class="h-10 object-contain" />)
      D(${e(d).effect}<img src=${e(d).intent} class="h-10 object-contain" />)
      D2(${e(d).effect}<img src=${e(d).intent} class="h-10 object-contain" />)
      E(${e(we).effect}<img src=${e(we).intent} class="h-10 object-contain" />)
      F(${e(je).effect}<img src=${e(je).intent} class="h-10 object-contain" />)
      A==>B
      B==>C
      C==>D
      D==>C2
      C2==>E
      E==>D2
      D2==>C3
      C3==>F
      F== Gives Burn+ instead of Burn ==>B
  `,img:`${t}/assets/act1/bosses/hexaghost.webp`,name:"Hexaghost",slug:"hexaghost"})),Ms=()=>e(As),ke=n(()=>({effect:`${s.v>=19?5:3} Slimed into discard.`,intent:`${t}/assets/intents/debuff2.png`,name:"Goop Spray"})),Be={effect:"Nothing.",intent:`${t}/assets/intents/unknown.png`,name:"Preparing"},De=n(()=>({effect:`${s.v>=4?38:35} Damage.`,intent:`${t}/assets/intents/7.png`,name:"Slam"})),Ce={effect:"Spawns Acid Slime L and Spike Slime L with current HP. Dies.",intent:`${t}/assets/intents/unknown.png`,name:"Split"},Ts=n(()=>({flowchart:`
    flowchart-elk LR
      A(${e(ke).effect}<img src=${e(ke).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${Be.effect}<img src=${Be.intent} class="h-10 object-contain" />)
      C(${e(De).effect}<img src=${e(De).intent} class="h-10 object-contain" />)
      D(${Ce.effect}<img src=${Ce.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
    A==>B
    B==>C
    C==>A
  `,img:`${t}/assets/act1/bosses/slime-boss.webp`,name:"Slime Boss",slug:"slime-boss"})),Ls=()=>e(Ts),Se={effect:"9 Block",intent:`${t}/assets/intents/defend.png`,name:"Charging Up"},Ae=n(()=>({effect:`${s.v>=4?36:32} Damage.`,intent:`${t}/assets/intents/7.png`,name:"Fierce Bash"})),Me={effect:"2 Weak. 2 Vulnerable",intent:`${t}/assets/intents/debuff2.png`,name:"Charging Up"},Te={effect:"5 x 4 Damage.",intent:`${t}/assets/intents/5.png`,name:"Whirlwind"},Le=n(()=>({effect:`${s.v>=19?4:3} Sharp Hide.`,intent:`${t}/assets/intents/buff1.png`,name:"Defensive Mode"})),Ee=n(()=>({effect:`${s.v>=4?10:9} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Roll Attack"})),Ge={effect:"8 x 2 Damage. Removes Sharp Hide. Enters Offensive mode.",intent:`${t}/assets/intents/attackBuff.png`,name:"Twin Slam"},Es=n(()=>({flowchart:`
    flowchart-elk LR
      A(${Se.effect}<img src=${Se.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${e(Ae).effect}<img src=${e(Ae).intent} class="h-10 object-contain" />)
      C(${Me.effect}<img src=${Me.intent} class="h-10 object-contain" />)
      D(${Te.effect}<img src=${Te.intent} class="h-10 object-contain" />)
      E(${e(Le).effect}<img src=${e(Le).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      F(${e(Ee).effect}<img src=${e(Ee).intent} class="h-10 object-contain" />)
      G(${Ge.effect}<img src=${Ge.intent} class="h-10 object-contain" />)
      subgraph Offensive [<img src=${t}/assets/act1/bosses/the-guardian-offensive.webp class="h-10 object-contain inline" />]
        direction LR
        A==>B==>C==>D==>A
      end
      subgraph Defensive [<img src=${t}/assets/act1/bosses/the-guardian-defensive.webp class="h-10 object-contain inline" />]
        direction LR
        E==>F==>G==>E
      end 
  `,img:`${t}/assets/act1/bosses/the-guardian-offensive.webp`,name:"The Guardian",slug:"the-guardian"})),Gs=()=>e(Es),v=n(()=>({effect:`${s.v>=18?3:2} Enrage.`,intent:`${t}/assets/intents/buff1.png`,name:"Bellow"})),g=n(()=>({effect:`${s.v>=3?16:14} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Rush"})),j=n(()=>({effect:`${s.v>=3?8:6} Damage. 2 Vulnerable.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Skull Bash"})),Rs=n(()=>({flowchart:s.v>=18?`
    flowchart-elk LR
      A(${e(v).effect}<img src=${e(v).intent} class="h-10 object-contain" />)
      B(${e(g).effect}<img src=${e(g).intent} class="h-10 object-contain" />)
      B2(${e(g).effect}<img src=${e(g).intent} class="h-10 object-contain" />)
      C(${e(j).effect}<img src=${e(j).intent} class="h-10 object-contain" />)
    A==>C
    C==>B
    B==>B2
    B2==>A
  `:`
    flowchart-elk LR
      A(${e(v).effect}<img src=${e(v).intent} class="h-10 object-contain" />)
      B(${e(g).effect}<img src=${e(g).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
67%</span>)
      C(${e(j).effect}<img src=${e(j).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
      A==>Turn2+
      subgraph Turn2+ [Turn 2+]
        direction LR
        B
        C
      end
  `,img:`${t}/assets/act1/elites/gremlin-nob.webp`,name:"Gremlin Nob",slug:"gremlin-nob"})),ys=()=>e(Rs),w=n(()=>({effect:`${s.v>=3?20:18} Damage.`,intent:`${t}/assets/intents/4.png`,name:"Attack"})),Re=n(()=>({effect:` -${s.v>=18?2:1} Dexterity. -${s.v>=18?2:1} Strength.`,intent:`${t}/assets/intents/debuff2.png`,name:"Siphon Soul"})),Ps=n(()=>({flowchart:`
    flowchart-elk TB
      A(${e(w).effect}<img src=${e(w).intent} class="h-10 object-contain" />)
      A2(${e(w).effect}<img src=${e(w).intent} class="h-10 object-contain" />)
      B(${e(Re).effect}<img src=${e(Re).intent} class="h-10 object-contain" />)
      A==>A2
      A2==>B
      B==>A
  `,img:`${t}/assets/act1/elites/lagavulin.webp`,name:"Lagavulin",slug:"lagavulin"})),Fs=()=>e(Ps),ye=n(()=>({effect:`${s.v>=3?10:9} Damage.`,intent:`${t}/assets/intents/4.png`,name:"Beam"})),Pe=n(()=>({effect:`${s.v>=18?3:2} Dazed into discard.`,intent:`${t}/assets/intents/debuff1.png`,name:"Bolt"})),Hs=n(()=>({flowchart:`
    flowchart-elk LR
      A(${e(ye).effect}<img src=${e(ye).intent} class="h-10 object-contain" />)
      B(${e(Pe).effect}<img src=${e(Pe).intent} class="h-10 object-contain" />)
      A<==>B
  `,img:`${t}/assets/act1/elites/sentry.webp`,name:"Sentry",slug:"sentry"})),Ws=()=>e(Hs),Fe=n(()=>({effect:`${s.v>=2?12:11} Damage. 2 Slimed into discard.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Corrosive Spit"})),He=n(()=>({effect:"2 Weak.",intent:`${t}/assets/intents/debuff1.png`,name:"Lick"})),We=n(()=>({effect:`${s.v>=2?18:16} Damage.`,intent:`${t}/assets/intents/4.png`,name:"Tackle"})),Oe={effect:"Spawns 2 Acid Slime M with current HP. Dies.",intent:`${t}/assets/intents/unknown.png`,name:"Split"},ze=n(()=>({effect:`${s.v>=2?8:7} Damage. 1 Slimed into discard.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Corrosive Spit"})),Ue=n(()=>({effect:"1 Weak.",intent:`${t}/assets/intents/debuff1.png`,name:"Lick"})),Ne=n(()=>({effect:`${s.v>=2?12:10} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Tackle"})),Ie=n(()=>({effect:"1 Weak.",intent:`${t}/assets/intents/debuff1.png`,name:"Lick"})),Ve=n(()=>({effect:`${s.v>=2?4:3} Damage.`,intent:`${t}/assets/intents/1.png`,name:"Tackle"})),Os=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=${t}/assets/act1/monsters/acid-slime-l.webp class="h-10 object-contain inline" />]
        A(${e(Fe).effect}<img src=${e(Fe).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
${s.v>=17?"40%":"30%"}</span>)
        B(${e(He).effect}<img src=${e(He).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?1:2}
30%</span>)
        C(${e(We).effect}<img src=${e(We).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?2:1}
${s.v>=17?"30%":"40%"}</span>)
        D(${Oe.effect}<img src=${Oe.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
      end
      subgraph Medium [<img src=${t}/assets/act1/monsters/acid-slime-m.webp class="h-10 object-contain inline" />]
        A2(${e(ze).effect}<img src=${e(ze).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
${s.v>=17?"40%":"30%"}</span>)
        B2(${e(Ue).effect}<img src=${e(Ue).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?1:2}
30%</span>)
        C2(${e(Ne).effect}<img src=${e(Ne).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?2:1}
${s.v>=17?"30%":"40%"}</span>)
      end
      subgraph Small [<img src=${t}/assets/act1/monsters/acid-slime-s.webp class="h-10 object-contain inline" />]
        A3(${e(Ie).effect}<img src=${e(Ie).intent} class="h-10 object-contain" /><span class="text-xs">${s.v>=17?"Turn 1: 100%":"Turn 1: 50%"}</span>)
        B3(${e(Ve).effect}<img src=${e(Ve).intent} class="h-10 object-contain" /><span class="text-xs">${s.v>=17?"":"Turn 1: 50%"}</span>)
        A3<==>B3
      end
  `,img:`${t}/assets/act1/monsters/acid-slimes.webp`,name:"Acid Slimes",slug:"acid-slimes"})),zs=()=>e(Os),Xe=n(()=>({effect:`${s.v>=2?13:12} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Stab"})),qe=n(()=>({effect:`${s.v>=2?8:7} Damage. ${s.v>=17?2:1} Weak.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Rake"})),Us=n(()=>({flowchart:`
    flowchart-elk TB
      A(${e(Xe).effect}<img src=${e(Xe).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
60%</span>)
      B(${e(qe).effect}<img src=${e(qe).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?1:2}
40%</span>)
  `,img:`${t}/assets/act1/monsters/blue-slaver.webp`,name:"Blue Slaver",slug:"blue-slaver"})),Ns=()=>e(Us),Je=n(()=>({effect:`${s.v>=2?s.v>=17?5:4:3} Ritual.`,intent:`${t}/assets/intents/buff1.png`,name:"Incantation"})),Qe={effect:"6 Damage.",intent:`${t}/assets/intents/2.png`,name:"Dark Strike"},Is=n(()=>({flowchart:`
    flowchart-elk LR
      A(${e(Je).effect}<img src=${e(Je).intent} class="h-10 object-contain" />)
      B(${Qe.effect}<img src=${Qe.intent} class="h-10 object-contain" />)
      A==>B
      B==>B
  `,img:`${t}/assets/act1/monsters/cultist.webp`,name:"Cultist",slug:"cultist"})),Vs=()=>e(Is),Ye={effect:"6 Damage.",intent:`${t}/assets/intents/2.png`,name:"Bite"},Ze=n(()=>({effect:`${s.v>=2?s.v>=17?5:4:3} Strength.`,intent:`${t}/assets/intents/buff1.png`,name:"Grow"})),Xs=n(()=>({flowchart:`
    flowchart-elk TB
      A(${Ye.effect}<img src=${Ye.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
60%</span>)
      B(${e(Ze).effect}<img src=${e(Ze).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
40%</span>)
  `,img:`${t}/assets/act1/monsters/fungi-beast.webp`,name:"Fungi Beast",slug:"fungi-beast"})),qs=()=>e(Xs),i={effect:"Nothing.",intent:`${t}/assets/intents/unknown.png`,name:"Charging"},k=n(()=>({effect:`${s.v>=2?30:25} Damage.`,intent:`${t}/assets/intents/6.png`,name:"Ultimate Blast"})),B=n(()=>({effect:`${s.v>=2?5:4} Damage.`,intent:`${t}/assets/intents/1.png`,name:"Scratch"})),D=n(()=>({effect:`${s.v>=2?5:4} Damage. 1 Weak.${s.v>=17?" 1 Frail":""}.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Smash"})),C=n(()=>({effect:`Ally ${s.v>=2?s.v>=17?11:8:7} Block.`,intent:`${t}/assets/intents/defend.png`,name:"Protect"})),S=n(()=>({effect:`${s.v>=2?8:6} Damage.`,intent:`${t}/assets/intents/2.png`,name:"Shield Bash"})),A=n(()=>({effect:`${s.v>=2?10:9} Damage.`,intent:`${t}/assets/intents/2.png`,name:"Puncture"})),Js=n(()=>({flowchart:s.v>=17?`
    flowchart-elk TB
      subgraph Wizard [<img src=${t}/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${i.effect}<img src=${i.intent} class="h-10 object-contain" />)
        A2(${i.effect}<img src=${i.intent} class="h-10 object-contain" />)
        B(${e(k).effect}<img src=${e(k).intent} class="h-10 object-contain" />)
        A==>A2==>B==>B
      end
      subgraph Mad [<img src=${t}/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A3(${e(B).effect}<img src=${e(B).intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=${t}/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A4(${e(D).effect}<img src=${e(D).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=${t}/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A5(${e(C).effect}<img src=${e(C).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B5(${e(S).effect}<img src=${e(S).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=${t}/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A6(${e(A).effect}<img src=${e(A).intent} class="h-10 object-contain" />)
      end
  `:`
    flowchart-elk TB
      subgraph Wizard [<img src=${t}/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${i.effect}<img src=${i.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2(${i.effect}<img src=${i.intent} class="h-10 object-contain" />)
        A3(${i.effect}<img src=${i.intent} class="h-10 object-contain" />)
        B(${e(k).effect}<img src=${e(k).intent} class="h-10 object-contain" />)
        A==>A2==>B==>A3==>A
      end
      subgraph Mad [<img src=${t}/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A4(${e(B).effect}<img src=${e(B).intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=${t}/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A5(${e(D).effect}<img src=${e(D).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=${t}/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A6(${e(C).effect}<img src=${e(C).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B6(${e(S).effect}<img src=${e(S).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=${t}/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A7(${e(A).effect}<img src=${e(A).intent} class="h-10 object-contain" />)
      end
  `,img:`${t}/assets/act1/monsters/gremlins.webp`,name:"Gremlins",slug:"gremlins"})),Qs=()=>e(Js),Ke=n(()=>({effect:`${s.v>=2?12:11} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Chomp"})),_e={effect:"7 Damage. 5 Block.",intent:`${t}/assets/intents/attackDefend.png`,name:"Thrash"},et=n(()=>({effect:`${s.v>=2?s.v>=17?5:4:3} Strength. ${s.v>=17?9:6} Block.`,intent:`${t}/assets/intents/defendBuff.png`,name:"Bellow"})),Ys=n(()=>({flowchart:`
    flowchart-elk TB
      A(${e(Ke).effect}<img src=${e(Ke).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
Act 1, Turn 1: 100%
25%</span>)
      B(${_e.effect}<img src=${_e.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
30%</span>)
      C(${e(et).effect}<img src=${e(et).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
45%</span>)
  `,img:`${t}/assets/act1/monsters/jaw-worm.webp`,name:"Jaw Worm",slug:"jaw-worm"})),Zs=()=>e(Ys),M=n(()=>({effect:`${s.v>=2?11:10} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Mug"})),tt=n(()=>({effect:`${s.v>=2?14:12} Damage`,intent:`${t}/assets/intents/3.png`,name:"Lunge"})),st={effect:"6 Block.",intent:`${t}/assets/intents/defend.png`,name:"Smoke Bomb"},nt={effect:"Escape.",intent:`${t}/assets/intents/escape.png`,name:"Escape"},Ks=n(()=>({flowchart:`
    flowchart-elk LR
      A(${e(M).effect}<img src=${e(M).intent} class="h-10 object-contain" />)
      A2(${e(M).effect}<img src=${e(M).intent} class="h-10 object-contain" />)
      B(${e(tt).effect}<img src=${e(tt).intent} class="h-10 object-contain" />)
      C(${st.effect}<img src=${st.intent} class="h-10 object-contain" />)
      D(${nt.effect}<img src=${nt.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:`${t}/assets/act1/monsters/looter.webp`,name:"Looter",slug:"looter"})),_s=()=>e(Ks),T=n(()=>({effect:`${s.v>=2?"D+1":"D"} Damage. D is chosen between 5 and 7 at the beginning of the battle.`,intent:`${t}/assets/intents/2.png`,name:"Bite"})),at=n(()=>({effect:`${s.v>=17?4:3} Strength.`,intent:`${t}/assets/intents/buff1.png`,name:"Grow"})),ct={effect:"2 Weak.",intent:`${t}/assets/intents/debuff1.png`,name:"Spit Web"},en=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Red [<img src=${t}/assets/act1/monsters/red-louse.webp class="h-10 object-contain inline" />]
        A(${e(T).effect}<img src=${e(T).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
75%</span>)
        B(${e(at).effect}<img src=${e(at).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?1:2}
25%</span>)
      end
      subgraph Green [<img src=${t}/assets/act1/monsters/green-louse.webp class="h-10 object-contain inline" />]
        A2(${e(T).effect}<img src=${e(T).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
75%</span>)
        B2(${ct.effect}<img src=${ct.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?1:2}
25%</span>)
      end
  `,img:`${t}/assets/act1/monsters/louses.webp`,name:"Louses",slug:"louses"})),tn=()=>e(en),a=n(()=>({effect:`${s.v>=2?14:13} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Stab"})),o=n(()=>({effect:`${s.v>=2?9:8} Damage. ${s.v>=17?2:1} Vulnerable.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Scrape"})),L={effect:"1 Entangled.",intent:`${t}/assets/intents/debuff2.png`,name:"Entangle"},sn=n(()=>({flowchart:s.v>=17?`
    flowchart-elk LR
      A(${e(a).effect}<img src=${e(a).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
      A2(${e(a).effect}<img src=${e(a).intent} class="h-10 object-contain" />)
      B(${e(o).effect}<img src=${e(o).intent} class="h-10 object-contain" />)
      C(${L.effect}<img src=${L.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      A3(${e(a).effect}<img src=${e(a).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
45%</span>)
      B2(${e(o).effect}<img src=${e(o).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?1:2}
55%</span>)
      A==>B
      C==>Used
      subgraph Used [Entangle Used]
        direction LR
        A3
        B2
      end
      subgraph Not [Entangle Not Used]
        B==>A2
        A2==>B
      end
  `:`
    flowchart-elk LR
      A(${e(a).effect}<img src=${e(a).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
      A2(${e(a).effect}<img src=${e(a).intent} class="h-10 object-contain" />)
      B(${e(o).effect}<img src=${e(o).intent} class="h-10 object-contain" />)
      B2(${e(o).effect}<img src=${e(o).intent} class="h-10 object-contain" />)
      C(${L.effect}<img src=${L.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      A3(${e(a).effect}<img src=${e(a).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
45%</span>)
      B3(${e(o).effect}<img src=${e(o).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?1:2}
55%</span>)
      A==>B
      C==>Used
      subgraph Used [Entangle Used]
        direction LR
        A3
        B3
      end
      subgraph Not [Entangle Not Used]
        B==>B2
        B2==>A2
        A2==>B
      end
  `,img:`${t}/assets/act1/monsters/red-slaver.webp`,name:"Red Slaver",slug:"red-slaver"})),nn=()=>e(sn),it=n(()=>({effect:`${s.v>=2?18:16} Damage. 2 Slimed into discard.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Flame Tackle"})),ot=n(()=>({effect:`${s.v>=17?3:2} Frail.`,intent:`${t}/assets/intents/debuff1.png`,name:"Lick"})),ft={effect:"Spawns 2 Spike Slime M with current HP. Dies",intent:`${t}/assets/intents/unknown.png`,name:"Split"},rt=n(()=>({effect:`${s.v>=2?10:8} Damage. 1 Slimed into discard.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Flame Tackle"})),lt=n(()=>({effect:"1 Frail.",intent:`${t}/assets/intents/debuff1.png`,name:"Lick"})),gt=n(()=>({effect:`${s.v>=2?6:5} Damage.`,intent:`${t}/assets/intents/2.png`,name:"Tackle"})),an=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=${t}/assets/act1/monsters/spike-slime-l.webp class="h-10 object-contain inline" />]
        A(${e(it).effect}<img src=${e(it).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
30%</span>)
        B(${e(ot).effect}<img src=${e(ot).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?1:2}
70%</span>)
        C(${ft.effect}<img src=${ft.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower</span>)
      end
      subgraph Medium [<img src=${t}/assets/act1/monsters/spike-slime-m.webp class="h-10 object-contain inline" />]
        A2(${e(rt).effect}<img src=${e(rt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
30%</span>)
        B2(${e(lt).effect}<img src=${e(lt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?1:2}
70%</span>)
      end
      subgraph Small [<img src=${t}/assets/act1/monsters/spike-slime-s.webp class="h-10 object-contain inline" />]
        A3(${e(gt).effect}<img src=${e(gt).intent} class="h-10 object-contain" />)
      end
  `,img:`${t}/assets/act1/monsters/spike-slimes.webp`,name:"Spike Slimes",slug:"spike-slimes"})),cn=()=>e(an),E={effect:"Spawns 2 Bronze Orbs.",intent:`${t}/assets/intents/unknown.png`,name:"Spawn Orbs"},f=n(()=>({effect:`${s.v>=4?4:3} Strength. ${s.v>=9?12:9} Block.`,intent:`${t}/assets/intents/defendBuff.png`,name:"Boost"})),r=n(()=>({effect:`${s.v>=4?8:7} x 2 Damage.`,intent:`${t}/assets/intents/3.png`,name:"Flail"})),G=n(()=>({effect:`${s.v>=4?50:45} Damage.`,intent:`${t}/assets/intents/7.png`,name:"HYPER BEAM"})),R={effect:"Steals the rarest card in the draw pile, or from the discard pile if the draw pile is empty.",intent:`${t}/assets/intents/debuff2.png`,name:"Stasis"},y={effect:"8 Damage.",intent:`${t}/assets/intents/2.png`,name:"Beam"},P={effect:"Bronze Automaton 12 Block.",intent:`${t}/assets/intents/defend.png`,name:"Support Beam"},on=n(()=>({flowchart:s.v>=19?`
    flowchart-elk TB
      A(${E.effect}<img src=${E.intent} class="h-10 object-contain" />)
      B(${e(f).effect}<img src=${e(f).intent} class="h-10 object-contain" />)
      B2(${e(f).effect}<img src=${e(f).intent} class="h-10 object-contain" />)
      B3(${e(f).effect}<img src=${e(f).intent} class="h-10 object-contain" />)
      C(${e(r).effect}<img src=${e(r).intent} class="h-10 object-contain" />)
      C2(${e(r).effect}<img src=${e(r).intent} class="h-10 object-contain" />)
      D(${e(G).effect}<img src=${e(G).intent} class="h-10 object-contain" />)
      subgraph Bronze [<img src=${t}/assets/act2/bosses/bronze-automaton.webp class="h-10 object-contain inline" />]
        direction LR
        A==>C==>B==>C2==>B2==>D==>B3==>C
      end
      subgraph Orb [<img src=${t}/assets/act2/bosses/bronze-orb.webp class="h-10 object-contain inline" />]
        E(${R.effect}<img src=${R.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        F(${y.effect}<img src=${y.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
7.5%
Card Stolen: 30%</span>)  
        G(${P.effect}<img src=${P.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
17.5%
Card Stolen: 70%</span>)  
      end
  `:`
    flowchart-elk TB
      A(${E.effect}<img src=${E.intent} class="h-10 object-contain" />)
      B(${e(f).effect}<img src=${e(f).intent} class="h-10 object-contain" />)
      B2(${e(f).effect}<img src=${e(f).intent} class="h-10 object-contain" />)
      C(${e(r).effect}<img src=${e(r).intent} class="h-10 object-contain" />)
      C2(${e(r).effect}<img src=${e(r).intent} class="h-10 object-contain" />)
      D(${e(G).effect}<img src=${e(G).intent} class="h-10 object-contain" />)  
      E(Stunned<img src='${t}/assets/intents/stun.png' class="h-10 object-contain" />)
      subgraph Bronze [<img src=${t}/assets/act2/bosses/bronze-automaton.webp class="h-10 object-contain inline" />]
        direction LR
        A==>C==>B==>C2==>B2==>D==>E==>C
      end
      subgraph Orb [<img src=${t}/assets/act2/bosses/bronze-orb.webp class="h-10 object-contain inline" />]
        F(${R.effect}<img src=${R.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        G(${y.effect}<img src=${y.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
7.5%
Card Stolen: 30%</span>)  
        H(${P.effect}<img src=${P.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
17.5%
Card Stolen: 70%</span>)  
      end
  `,img:`${t}/assets/act2/bosses/bronze-automaton.webp`,name:"Bronze Automaton",slug:"bronze-automaton"})),fn=()=>e(on),F=n(()=>({effect:`${s.v>=9?s.v>=19?20:18:15} Block. ${s.v>=9?s.v>=19?7:6:5} Metallicize.`,intent:`${t}/assets/intents/defendBuff.png`,name:"Defensive Stance"})),H=n(()=>({effect:`${s.v>=4?14:12} Damage. 2 Frail. 2 Vulnerable.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Face Slap"})),W={effect:"2 Weak. 2 Vulnerable.",intent:`${t}/assets/intents/debuff1.png`,name:"Taunt"},O=n(()=>({effect:`${s.v>=4?18:16} Damage.`,intent:`${t}/assets/intents/4.png`,name:"Heavy Slash"})),$t=n(()=>({effect:`${s.v>=4?s.v>=19?4:3:2} Strength.`,intent:`${t}/assets/intents/buff1.png`,name:"Gloat"})),z={effect:"10 x 2 Damage.",intent:`${t}/assets/intents/5.png`,name:"Execute"},U=n(()=>({effect:`Removes debuffs. ${s.v>=4?s.v>=19?12:9:6} Strength.`,intent:`${t}/assets/intents/buff1.png`,name:"Anger"})),rn=n(()=>({flowchart:s.v>=19?`
    flowchart-elk TB
      A(${e(F).effect}<img src=${e(F).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max Consecutive: 1
${s.v>=19?"30%":"15%"}</span>)
      B(${e(H).effect}<img src=${e(H).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25% + Invalid Left/Right%</span>)
      C(${W.effect}<img src=${W.intent} class="h-10 object-contain" />)
      D(${e(O).effect}<img src=${e(O).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
45% + Invalid Left%</span>)
      F(${z.effect}<img src=${z.intent} class="h-10 object-contain" />)
      G(${e(U).effect}<img src=${e(U).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Uses next turn.</span>)
      subgraph Main
        direction LR
        A==>B<==>D
      end
      subgraph Phase1 [Phase 1]
        subgraph Turn4 [Turn 4, 8, 12, etc.]
          C
        end
      end
      subgraph Phase2 [Phase 2]
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `:`
    flowchart-elk TB
      A(${e(F).effect}<img src=${e(F).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max Consecutive: 1
${s.v>=19?"30%":"15%"}</span>)
      B(${e(H).effect}<img src=${e(H).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25% + Invalid Left/Right%</span>)
      C(${W.effect}<img src=${W.intent} class="h-10 object-contain" />)
      D(${e(O).effect}<img src=${e(O).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
45% + Invalid Left%</span>)
      E(${e($t).effect}<img src=${e($t).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
15% + Invalid Left%</span>)
      F(${z.effect}<img src=${z.intent} class="h-10 object-contain" />)
      G(${e(U).effect}<img src=${e(U).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Uses next turn.</span>)
      subgraph Main
        direction LR
        A==>E==>B<==>D
      end
      subgraph Phase1 [Phase 1]
        subgraph Turn4 [Turn 4, 8, 12, etc.]
          C
        end
      end
      subgraph Phase2 [Phase 2]
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `,img:`${t}/assets/act2/bosses/the-champ.webp`,name:"The Champ",slug:"the-champ"})),ln=()=>e(rn),mt=n(()=>({effect:`Group ${s.v>=4?s.v>=19?5:4:3} Strength. ${s.v>=4?s.v>=19?23:18:15} Block.`,intent:`${t}/assets/intents/defendBuff.png`,name:"Buff"})),N=n(()=>({effect:`${s.v>=4?21:18} Damage.`,intent:`${t}/assets/intents/4.png`,name:"Fireball"})),pt=n(()=>({effect:`${s.v>=19?5:3} Weak. ${s.v>=19?5:3} Vulnerable. ${s.v>=19?5:3} Frail.`,intent:`${t}/assets/intents/debuff2.png`,name:"Mega Debuff"})),bt={effect:"Spawns up to 2 Torch Heads.",intent:`${t}/assets/intents/unknown.png`,name:"Spawn"},ht={effect:"7 Damage.",intent:`${t}/assets/intents/2.png`,name:"Tackle"},gn=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Head [<img src=${t}/assets/act2/bosses/torch-head.webp class="h-10 object-contain inline" />]
        E(${ht.effect}<img src=${ht.intent} class="h-10 object-contain" />)
      end
      subgraph Collector [<img src=${t}/assets/act2/bosses/the-collector.webp class="h-10 object-contain inline" />]
        A(${e(mt).effect}<img src=${e(mt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
30%</span>)
        subgraph 0-1Torch [0-1 Torch Heads]
          B0(${e(N).effect}<img src=${e(N).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
45%</span>)
          D0(${bt.effect}<img src=${bt.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
        end
        subgraph 2Torch [2 Torch Heads]
          B2(${e(N).effect}<img src=${e(N).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
70%</span>)
        end
        subgraph Turn4 [Turn 4]
          C(${e(pt).effect}<img src=${e(pt).intent} class="h-10 object-contain" />)
        end
      end
  `,img:`${t}/assets/act2/bosses/the-collector.webp`,name:"The Collector",slug:"the-collector"})),$n=()=>e(gn),me=n(()=>({effect:`${s.v>=3?7:6} x N Damage. N = 2 + ${s.v>=18?"Multi/Single Stabs":"Multi-Stabs"} used`,intent:`${t}/assets/intents/3.png`,name:"Multi-Stab"})),pe=n(()=>({effect:`${s.v>=3?24:21} Damage.`,intent:`${t}/assets/intents/5.png`,name:"Single Stab"})),mn=n(()=>({flowchart:`
    flowchart-elk TB
      A(*${e(me).name}*
${e(me).effect}<img src=${e(me).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max Consecutive: 2
85%</span>)
      B(*${e(pe).name}*
${e(pe).effect}<img src=${e(pe).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max Consecutive: 1
15%</span>)
  `,img:`${t}/assets/act2/elites/book-of-stabbing.webp`,name:"Book of Stabbing",slug:"book-of-stabbing"})),pn=()=>e(mn),u=n(()=>({effect:`Group ${s.v>=3?s.v>=18?5:4:3} Strength. Group ${s.v>=18?10:6} Block.`,intent:`${t}/assets/intents/defendBuff.png`,name:"Encourage"})),x={effect:"Spawns 2 Gremlins.",intent:`${t}/assets/intents/unknown.png`,name:"Rally!"},$={effect:"6 x 3 Damage.",intent:`${t}/assets/intents/4.png`,name:"Stab"},bn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${e(u).effect}<img src=${e(u).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      B(${x.effect}<img src=${x.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      C(${$.effect}<img src=${$.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      B0(<img src=${x.intent} class="h-10 object-contain" /><span class="text-xs">75%</span>)
      C0(<img src=${$.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
      A1(<img src=${e(u).intent} class="h-10 object-contain" /><span class="text-xs">37.5%</span>)
      B1a(<img src=${x.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B1b(<img src=${x.intent} class="h-10 object-contain" /><span class="text-xs">62.5%</span>)
      C1(<img src=${$.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      A2(<img src=${e(u).intent} class="h-10 object-contain" /><span class="text-xs">66%</span>)
      C2(<img src=${$.intent} class="h-10 object-contain" /><span class="text-xs">34%</span>)
      0Gremlin~~~Moves
      1Gremlin~~~Moves
      2Gremlin~~~Moves
      subgraph Moves
        A
        B
        C
      end
      subgraph 0Gremlin [0 Gremlins]
        B0
        C0
      end
      subgraph 1Gremlin [1 Gremlin]
        subgraph prevMoveEncourage [Previous Move <img src=${e(u).intent} class="h-10 object-contain inline" />]
          B1a
          C1
        end
        subgraph prevMoveStab [Previous Move <img src=${$.intent} class="h-10 object-contain inline" />]
          A1
          B1b
        end
      end
      subgraph 2Gremlin [2+ Gremlins]
        A2
        C2
      end
  `,img:`${t}/assets/act2/elites/gremlin-leader.webp`,name:"Gremlin Leader",slug:"gremlin-leader"})),hn=()=>e(bn),ut=n(()=>({effect:`7 Damage. ${s.v>=3?s.v>=18?3:2:1} Wound into discard.${s.v>=18?" 1 Strength.":""}`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Scouring Whip"})),un=n(()=>({flowchart:`
    flowchart-elk TB
      A(${e(ut).effect}<img src=${e(ut).intent} class="h-10 object-contain" />)
  `,img:`${t}/assets/act2/elites/taskmaster.webp`,name:"Taskmaster",slug:"taskmaster"})),xn=()=>e(un),xt={effect:"1 Strength.",intent:`${t}/assets/intents/buff1.png`,name:"Caw"},dt=n(()=>({effect:`1 x ${s.v>=2?6:5} Damage.`,intent:`${t}/assets/intents/2.png`,name:"Peck"})),vt=n(()=>({effect:`${s.v>=2?14:12} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Swoop"})),jt=n(()=>({effect:`Flying ${s.v>=17?4:3}.`,intent:`${t}/assets/intents/unknown.png`,name:"Fly"})),wt={effect:"3 Damage",intent:`${t}/assets/intents/1.png`,name:"Headbutt"},dn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${xt.effect}<img src=${xt.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
Turn 1: 37.5%
30%</span>)
      B(${e(dt).effect}<img src=${e(dt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
Turn 1: 62.5%
50%</span>)
      C(${e(vt).effect}<img src=${e(vt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
Turn 1: 0%
20%</span>)
      D(${e(jt).effect}<img src=${e(jt).intent} class="h-10 object-contain" />)
      E(${wt.effect}<img src=${wt.intent} class="h-10 object-contain" />)
      F(Stunned<img src='${t}/assets/intents/stun.png' class="h-10 object-contain" />)
      subgraph Grounded [<img src=${t}/assets/act2/monsters/byrd-grounded.webp class="h-10 object-contain inline" />]
        direction LR
        F==>E==>D
      end
      Grounded==>Flying
      subgraph Flying [<img src=${t}/assets/act2/monsters/byrd-flying.webp class="h-10 object-contain inline" />]
        A
        B
        C
      end
  `,img:`${t}/assets/act2/monsters/byrd-flying.webp`,name:"Byrd",slug:"byrd"})),vn=()=>e(dn),kt=n(()=>({effect:`${s.v>=2?14:12} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Slash"})),Bt=n(()=>({effect:`${s.v>=2?7:6} x 3 Damage.`,intent:`${t}/assets/intents/4.png`,name:"Fury"})),Dt=n(()=>({effect:`Ally ${s.v>=17?20:15} Block.`,intent:`${t}/assets/intents/defend.png`,name:"Defend"})),Ct=n(()=>({effect:`Group ${s.v>=17?20:16} Heal.`,intent:`${t}/assets/intents/buff1.png`,name:"Heal"})),St=n(()=>({effect:`Group ${s.v>=2?s.v>=17?4:3:2} Strength.`,intent:`${t}/assets/intents/buff1.png`,name:"Buff"})),At=n(()=>({effect:`${s.v>=2?9:8} Damage. 2 Frail.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Attack/Debuff"})),jn=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Centurion [<img src=${t}/assets/act2/monsters/centurion.webp class="h-10 object-contain inline" />]
        A(${e(kt).effect}<img src=${e(kt).intent} class="h-10 object-contain" /><span class="text-xs">65%</span>)
        subgraph MysticAlive [Mystic Alive]
          C(${e(Dt).effect}<img src=${e(Dt).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
        subgraph MysticDead [Mystic Dead]
          B(${e(Bt).effect}<img src=${e(Bt).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
      end
      subgraph Mystic [<img src=${t}/assets/act2/monsters/mystic.webp class="h-10 object-contain inline" />]
        A2(${e(Ct).effect}<img src=${e(Ct).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
Trigger: An enemy is hurt ${s.v>=17?21:16} or more</span>)
        B2(${e(St).effect}<img src=${e(St).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
40%</span>)
        C2(${e(At).effect}<img src=${e(At).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${s.v>=17?1:2}
60%</span>)
      end
  `,img:`${t}/assets/act2/monsters/centurion-mystic.webp`,name:"Centurion and Mystic",slug:"centurion-mystic"})),wn=()=>e(jn),m=n(()=>({effect:`${s.v>=2?6:5} x 2 Damage.`,intent:`${t}/assets/intents/3.png`,name:"Poke"})),I=n(()=>({effect:`${s.v>=2?21:18} Damage.`,intent:`${t}/assets/intents/4.png`,name:"Zap"})),V=n(()=>({effect:`${s.v>=2?12:10} Damage. 2 Vulnerable.`,intent:`${t}/assets/intents/unknown.png`,name:"Debilitate"})),X={effect:"3 Weak. 3 Strength.",intent:`${t}/assets/intents/debuff1.png`,name:"Drain"},q={effect:"1 Hex.",intent:`${t}/assets/intents/debuff2.png`,name:"Hex"},kn=n(()=>({flowchart:s.v>=17?`
    flowchart-elk LR
      A(${e(m).effect}<img src=${e(m).intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${e(I).effect}<img src=${e(I).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${e(V).effect}<img src=${e(V).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${X.effect}<img src=${X.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${q.effect}<img src=${q.intent} class="h-10 object-contain" />)
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

  `:`
    flowchart-elk LR
      A(${e(m).effect}<img src=${e(m).intent} class="h-10 object-contain" />)
      A2(${e(m).effect}<img src=${e(m).intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${e(I).effect}<img src=${e(I).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${e(V).effect}<img src=${e(V).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${X.effect}<img src=${X.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${q.effect}<img src=${q.intent} class="h-10 object-contain" />)
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
  `,img:`${t}/assets/act2/monsters/chosen.webp`,name:"Chosen",slug:"chosen"})),Bn=()=>e(kn),J=n(()=>({effect:`${s.v>=2?11:10} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Mug"})),Mt=n(()=>({effect:`${s.v>=2?18:16} Damage`,intent:`${t}/assets/intents/4.png`,name:"Lunge"})),Tt=n(()=>({effect:`${s.v>=17?17:11} Block.`,intent:`${t}/assets/intents/defend.png`,name:"Smoke Bomb"})),Lt={effect:"Escape.",intent:`${t}/assets/intents/escape.png`,name:"Escape"},Dn=n(()=>({flowchart:`
    flowchart-elk LR
      A(${e(J).effect}<img src=${e(J).intent} class="h-10 object-contain" />)
      A2(${e(J).effect}<img src=${e(J).intent} class="h-10 object-contain" />)
      B(${e(Mt).effect}<img src=${e(Mt).intent} class="h-10 object-contain" />)
      C(${e(Tt).effect}<img src=${e(Tt).intent} class="h-10 object-contain" />)
      D(${Lt.effect}<img src=${Lt.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:`${t}/assets/act2/monsters/mugger.webp`,name:"Mugger",slug:"mugger"})),Cn=()=>e(Dn),Et=n(()=>({effect:`${s.v>=2?7:6} x 2 Damage.`,intent:`${t}/assets/intents/3.png`,name:"Double Strike"})),Gt=n(()=>({effect:`${s.v>=2?12:10} Lifesteal.`,intent:`${t}/assets/intents/attackBuff.png`,name:"Suck"})),Rt=n(()=>({effect:`${s.v>=2?21:18} Damage. 2 Frail.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Fell"})),Sn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${e(Et).effect}<img src=${e(Et).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
Turn 1: ${s.v>=17?"0%":"50%"}
40%</span>)
      B(${e(Gt).effect}<img src=${e(Gt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
Turn 1: ${s.v>=17?"0%":"50%"}
40%</span>)
      C(${e(Rt).effect}<img src=${e(Rt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
Turn 1: ${s.v>=17?"100%":"0%"}
20%</span>)
      D(Stunned<img src='${t}/assets/intents/stun.png' class="h-10 object-contain" /><span class="text-xs">Trigger: Platted Armor reduced to 0</span>)
  `,img:`${t}/assets/act2/monsters/shelled-parasite.webp`,name:"Shelled Parasite",slug:"shelled-parasite"})),An=()=>e(Sn),yt=n(()=>({effect:`${s.v>=2?8:7} x 3 Damage.`,intent:`${t}/assets/intents/5.png`,name:"Chomp"})),Pt={effect:"2 Frail. 2 Weak.",intent:`${t}/assets/intents/debuff2.png`,name:"Enfeebling Spores"},Mn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${e(yt).effect}<img src=${e(yt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
65%</span>)
      B(${Pt.effect}<img src=${Pt.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
35%</span>)
  `,img:`${t}/assets/act2/monsters/snake-plant.webp`,name:"Snake Plant",slug:"snake-plant"})),Tn=()=>e(Mn),Ft={effect:"Confuse.",intent:`${t}/assets/intents/debuff2.png`,name:"Perplexing Glare"},Ht=n(()=>({effect:`${s.v>=2?10:8} Damage. 2 Vulnerable${s.v>=17?" 2 Weak":""}.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Chomp"})),Wt=n(()=>({effect:`${s.v>=2?18:15} Damage.`,intent:`${t}/assets/intents/4.png`,name:"Bite"})),Ln=n(()=>({flowchart:`
    flowchart-elk TB
      A(${Ft.effect}<img src=${Ft.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%
0%</span>)
      B(${e(Ht).effect}<img src=${e(Ht).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${e(Wt).effect}<img src=${e(Wt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
60%</span>)
  `,img:`${t}/assets/act2/monsters/snecko.webp`,name:"Snecko",slug:"snecko"})),En=()=>e(Ln),Ot=n(()=>({effect:`${s.v>=2?11:10} x 2 Damage.`,intent:`${t}/assets/intents/5.png`,name:"Slam"})),zt=n(()=>({effect:`${s.v>=17?35:25} Block.`,intent:`${t}/assets/intents/defend.png`,name:"Activate"})),Ut=n(()=>({effect:`${s.v>=2?11:10} Damage. 15 Block.`,intent:`${t}/assets/intents/attackDefend.png`,name:"Harden"})),Nt=n(()=>({effect:`${s.v>=2?11:10} Damage. 5 Frail.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Attack/Debuff"})),Gn=n(()=>({flowchart:`
    flowchart-elk LR
      A(${e(Ot).effect}<img src=${e(Ot).intent} class="h-10 object-contain" />)
      B(${e(zt).effect}<img src=${e(zt).intent} class="h-10 object-contain" />)
      C(${e(Ut).effect}<img src=${e(Ut).intent} class="h-10 object-contain" />)
      D(${e(Nt).effect}<img src=${e(Nt).intent} class="h-10 object-contain" />)
      B==>D==>A<==>C
  `,img:`${t}/assets/act2/monsters/spheric-guardian.webp`,name:"Spheric Guardian",slug:"spheric-guardian"})),Rn=()=>e(Gn),It={effect:"20 Damage.",intent:`${t}/assets/intents/5.png`,name:"Slash"},Vt={effect:"6 x 4 Damage.",intent:`${t}/assets/intents/5.png`,name:"Soul Strike"},Xt={effect:"Removes debuffs.",intent:`${t}/assets/intents/unknown.png`,name:"Rebirth"},qt={effect:"40 Damage.",intent:`${t}/assets/intents/7.png`,name:"Dark Echo"},Jt={effect:"18 Damage. 1 Void into draw.",intent:`${t}/assets/intents/attackDebuff.png`,name:"Sludge"},Qt={effect:"10 x 3 Damage.",intent:`${t}/assets/intents/7.png`,name:"Tackle"},yn=n(()=>({flowchart:`
    flowchart-elk LR
      subgraph Unawakened [<img src=${t}/assets/act3/bosses/awakened-one-unawakened.webp class="h-10 object-contain inline" />]
        direction LR
        A(${It.effect}<img src=${It.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
Turn 1: 100%
75%</span>)
        B(${Vt.effect}<img src=${Vt.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
Turn 1: 0%
25%</span>)
      end
      C(${Xt.effect}<img src=${Xt.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      A2(${qt.effect}<img src=${qt.intent} class="h-10 object-contain" />)
      C==>A2==>Awakened
      subgraph Awakened [<img src=${t}/assets/act3/bosses/awakened-one-awakened.webp class="h-10 object-contain inline" />]
        direction LR
        B2(${Jt.effect}<img src=${Jt.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
        C2(${Qt.effect}<img src=${Qt.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
      end
  `,img:`${t}/assets/act3/bosses/awakened-one-unawakened.webp`,name:"Awakened One",slug:"awakened-one"})),Pn=()=>e(yn),Yt={effect:"Group 3 Strength.",intent:`${t}/assets/intents/buff1.png`,name:"Circle of Power"},Zt=n(()=>({effect:`${s.v>=4?12:10} x 2 Damage.`,intent:`${t}/assets/intents/5.png`,name:"Beam"})),Kt=n(()=>({effect:`Group 16 Block.${s.v>=19?" 3 Plated Armor.":""}`,intent:`${t}/assets/intents/${s.v>=19?"defendBuff":"defend"}.png`,name:"Square Of Protection"})),_t=n(()=>({effect:`${s.v>=4?12:10} x 2 Damage. 2 Dazed into discard.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Beam"})),Fn=n(()=>({flowchart:`
    flowchart-elk LR
      subgraph Donu [<img src=${t}/assets/act3/bosses/donu.webp class="h-10 object-contain inline" />]
        A(${Yt.effect}<img src=${Yt.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        B(${e(Zt).effect}<img src=${e(Zt).intent} class="h-10 object-contain" />)
        A<==>B
      end
      subgraph Deca [<img src=${t}/assets/act3/bosses/deca.webp class="h-10 object-contain inline" />]
        A2(${e(Kt).effect}<img src=${e(Kt).intent} class="h-10 object-contain" />)
        B2(${e(_t).effect}<img src=${e(_t).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2<==>B2
      end
  `,img:`${t}/assets/act3/bosses/donu-deca.webp`,name:"Donu and Deca",slug:"donu-deca"})),Hn=()=>e(Fn),es=n(()=>({effect:`${s.v>=4?8:7} x 3 Damage.`,intent:`${t}/assets/intents/5.png`,name:"Reverberate"})),ts=n(()=>({effect:`${s.v>=4?32:26} Damage. 1 Draw Reduction.${s.v>=19?" 2 Slimed into discard.":""}`,intent:`${t}/assets/intents/6.png`,name:"Head Slam"})),ss=n(()=>({effect:`20 Block. 1 Vulnerable. 1 Weak.${s.v>=19?" 1 Frail.":""}`,intent:`${t}/assets/intents/defendDebuff.png`,name:"Ripple"})),ns=n(()=>({effect:`Heals to 50% HP. Removes debuffs.${s.v>=19?" 32 Block. ":""}`,intent:`${t}/assets/intents/buff1.png`,name:"Haste"})),Wn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${e(es).effect}<img src=${e(es).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
45%</span>)
      B(${e(ts).effect}<img src=${e(ts).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
35%</span>)
      C(${e(ss).effect}<img src=${e(ss).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
20%</span>)
      D(${e(ns).effect}<img src=${e(ns).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
Trigger: Below 50% HP.</span>)
  `,img:`${t}/assets/act3/bosses/time-eater.webp`,name:"Time Eater",slug:"time-eater"})),On=()=>e(Wn),as={effect:"13 Damage.",intent:`${t}/assets/intents/3.png`,name:"Count"},cs={effect:"1 Weak.",intent:`${t}/assets/intents/debuff1.png`,name:"Glare"},is=n(()=>({effect:`${s.v>=3?40:30} + T Damage. T starts at 0 and increases by 5 every time the attack is used, up to 30 additional Damage.`,intent:`${t}/assets/intents/7.png`,name:"It Is Time"})),zn=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turns [Turns 1-${s.v>=18?3:4}]
        A(${as.effect}<img src=${as.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
        B(${cs.effect}<img src=${cs.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
      end
      subgraph Turns+ [Turn ${s.v>=18?4:5}+]
        C(${e(is).effect}<img src=${e(is).intent} class="h-10 object-contain" />)
      end
  `,img:`${t}/assets/act3/elites/giant-head.webp`,name:"Giant Head",slug:"giant-head"})),Un=()=>e(zn),Q=n(()=>({effect:`${s.v>=18?5:3} Burn into discard.`,intent:`${t}/assets/intents/debuff1.png`,name:"Debuff"})),Y=n(()=>({effect:`${s.v>=3?7:6} x 3 Damage.`,intent:`${t}/assets/intents/4.png`,name:"Attack"})),be={effect:"45 Damage.",intent:`${t}/assets/intents/7.png`,name:"Scythe"},Nn=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Moves
        A(${e(Q).effect}<img src=${e(Q).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
        B(${e(Y).effect}<img src=${e(Y).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2</span>)
        C(${be.effect}<img src=${be.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      end
      subgraph Turn1 [Turn 1]
        A1(<img src=${e(Q).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B1(<img src=${e(Y).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Turn+ [Turn 2+]
        A2(<img src=${e(Q).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        B2(<img src=${e(Y).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        C2(<img src=${be.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      Turn1~~~Moves
      Turn+~~~Moves
  `,img:`${t}/assets/act3/elites/nemesis.webp`,name:"Nemesis",slug:"nemesis"})),In=()=>e(Nn),he=n(()=>({effect:`Spawns ${s.v>=18?2:"a"} Dagger.`,intent:`${t}/assets/intents/unknown.png`,name:"Summon"})),Z=n(()=>({effect:`${s.v>=3?16:13} x 2 Damage. 1 Weak.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Snake Strike"})),K=n(()=>({effect:`${s.v>=3?34:30} Damage.`,intent:`${t}/assets/intents/7.png`,name:"Big Bite"})),os={effect:"9 Damage. 1 Wound into discard.",intent:`${t}/assets/intents/attackDebuff.png`,name:"Stab"},fs={effect:"25 Damage. Dies.",intent:`${t}/assets/intents/6.png`,name:"Explode"},Vn=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Reptomancer [<img src=${t}/assets/act3/elites/reptomancer.webp class="h-10 object-contain inline" />]
        subgraph Moves
          A(${e(he).effect}<img src=${e(he).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2</span>)
          B(${e(Z).effect}<img src=${e(Z).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
          C(${e(K).effect}<img src=${e(K).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
        end
        subgraph 1-3Daggers [1-3 Daggers]
          A1(<img src=${e(he).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          B1(<img src=${e(Z).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          C1(<img src=${e(K).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
        subgraph 4Daggers [4 Daggers]
          B2(<img src=${e(Z).intent} class="h-10 object-contain" /><span class="text-xs">67%</span>)
          C2(<img src=${e(K).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
        1-3Daggers~~~Moves
        4Daggers~~~Moves
      end
      subgraph Dagger [<img src=${t}/assets/act3/elites/dagger.webp class="h-10 object-contain inline" />]
        D(${os.effect}<img src=${os.intent} class="h-10 object-contain" />)
        E(${fs.effect}<img src=${fs.intent} class="h-10 object-contain" />)
        D==>E
      end
  `,img:`${t}/assets/act3/elites/reptomancer.webp`,name:"Reptomancer",slug:"reptomancer"})),Xn=()=>e(Vn),_=n(()=>({effect:`${s.v>=2?"D + 2":"D"} Damage. D is chosen between 7 and 11 at the beginning of the battle.`,intent:`${t}/assets/intents/2.png`,name:"Nip"})),ue=n(()=>({effect:`${s.v>=2?9:8} x 2 Damage.`,intent:`${t}/assets/intents/4.png`,name:"Chomp"})),ee=n(()=>({effect:`12 Block.${s.v>=17?" 2 Strength.":""}`,intent:`${t}/assets/intents/${s.v>=17?"defendBuff":"defend"}.png`,name:"Harden"})),rs={effect:"Revives with 50% HP.",intent:`${t}/assets/intents/buff1.png`,name:"Reincarnate"},ls={effect:"Nothing.",intent:`${t}/assets/intents/unknown.png`,name:"Regrow"},qn=n(()=>({flowchart:`
    flowchart-elk TB
      D(${rs.effect}<img src=${rs.intent} class="h-10 object-contain" />)
      E(${ls.effect}<img src=${ls.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      E==>D
      subgraph Middle [Middle Darkling / Outer Darklings Turn 1]
        A1(<img src=${e(_).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C1(<img src=${e(ee).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Outer [Outer Darklings Turn 2+]
        A2(<img src=${e(_).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
        B2(<img src=${e(ue).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
        C2(<img src=${e(ee).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      subgraph Moves
        A(${e(_).effect}<img src=${e(_).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2</span>)
        B(${e(ue).effect}<img src=${e(ue).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
        C(${e(ee).effect}<img src=${e(ee).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      end
      Middle~~~Moves
      Outer~~~Moves
  `,img:`${t}/assets/act3/monsters/darkling.webp`,name:"Darkling",slug:"darkling"})),Jn=()=>e(qn),gs=n(()=>({effect:`${s.v>=2?11:10} Damage. 1 Burn into draw. 1 Burn into discard.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Laser"})),$s=n(()=>({effect:`${s.v>=2?16:15} Damage.`,intent:`${t}/assets/intents/4.png`,name:"Claw"})),Qn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${e(gs).effect}<img src=${e(gs).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
60%</span>)
      B(${e($s).effect}<img src=${e($s).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
40%</span>)
  `,img:`${t}/assets/act3/monsters/orb-walker.webp`,name:"Orb Walker",slug:"orb-walker"})),Yn=()=>e(Qn),ms=n(()=>({effect:`${s.v>=2?9:7} Damage.`,intent:`${t}/assets/intents/2.png`,name:"Cut"})),ps={effect:"2 Thorns.",intent:`${t}/assets/intents/buff1.png`,name:"Spike"},te=n(()=>({effect:`${s.v>=2?11:9} Damage.`,intent:`${t}/assets/intents/2.png`,name:"Slam"})),bs={effect:"30 Damage. Dies.",intent:`${t}/assets/intents/unknown.png`,name:"Explode"},hs=n(()=>({effect:`${s.v>=2?13:11} Damage.`,intent:`${t}/assets/intents/3.png`,name:"Bash"})),us={effect:"2 Dazed into draw.",intent:`${t}/assets/intents/debuff1.png`,name:"Repulse"},Zn=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Spiker [<img src=${t}/assets/act3/monsters/spiker.webp class="h-10 object-contain inline" />]
        A(${e(ms).effect}<img src=${e(ms).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
40%</span>)
        B(${ps.effect}<img src=${ps.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 6
50%</span>)
      end
      subgraph Exploder [<img src=${t}/assets/act3/monsters/exploder.webp class="h-10 object-contain inline" />]
        A2(${e(te).effect}<img src=${e(te).intent} class="h-10 object-contain" />)
        A3(${e(te).effect}<img src=${e(te).intent} class="h-10 object-contain" />)
        B2(${bs.effect}<img src=${bs.intent} class="h-10 object-contain" />)
        A2==>A3==>B2
      end
      subgraph Repulsor [<img src=${t}/assets/act3/monsters/repulsor.webp class="h-10 object-contain inline" />]
        A4(${e(hs).effect}<img src=${e(hs).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
20%</span>)
        B3(${us.effect}<img src=${us.intent} class="h-10 object-contain" /><span class="text-xs">80%</span>)
      end
  `,img:`${t}/assets/act3/monsters/shapes.webp`,name:"Shapes",slug:"shapes"})),Kn=()=>e(Zn),p=n(()=>({effect:`${s.v>=2?18:16} Damage.`,intent:`${t}/assets/intents/4.png`,name:"Quick Tackle"})),se=n(()=>({effect:`${s.v>=2?25:22} Damage.`,intent:`${t}/assets/intents/5.png`,name:"Smash"})),b=n(()=>({effect:`${s.v>=17?12:10} Constricted.`,intent:`${t}/assets/intents/debuff2.png`,name:"Constrict"})),_n=n(()=>({flowchart:s.v>=17?`
    flowchart-elk TB
      subgraph notC [Not Constricted]
        C(${e(b).effect}<img src=${e(b).intent} class="h-10 object-contain" />)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${e(b).intent} class="h-10 object-contain inline" />]
        A2(${e(p).effect}<img src=${e(p).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
        B(${e(se).effect}<img src=${e(se).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
      end
      C==>isC
  `:`
    flowchart-elk TB
      subgraph notC [Not Constricted]
        A(${e(p).effect}<img src=${e(p).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
        C(${e(b).effect}<img src=${e(b).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${e(b).intent} class="h-10 object-contain inline" />]
        A2(${e(p).effect}<img src=${e(p).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
        B(${e(se).effect}<img src=${e(se).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
      end
      C==>isC
  `,img:`${t}/assets/act3/monsters/spire-growth.webp`,name:"Spire Growth",slug:"spire-growth"})),ea=()=>e(_n),xs=n(()=>({effect:`${s.v>=17?5:3} Weak. ${s.v>=17?5:3} Frail.`,intent:`${t}/assets/intents/debuff2.png`,name:"Roar"})),ds=n(()=>({effect:`${s.v>=17?5:3} Strength.`,intent:`${t}/assets/intents/buff1.png`,name:"Drool"})),vs=n(()=>({effect:`${s.v>=2?30:25} Damage.`,intent:`${t}/assets/intents/6.png`,name:"Slam"})),ne={effect:"5 x T Damage. T = Turn Number / 2, rounded up.",intent:`${t}/assets/intents/2.png`,name:"Nom"},ta=n(()=>({flowchart:`
    flowchart-elk LR
      A(${e(xs).effect}<img src=${e(xs).intent} class="h-10 object-contain" />)
      A==>afterDebuff
      subgraph afterDebuff [After Debuff]
        C(${e(vs).effect}<img src=${e(vs).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D(${ne.effect}<img src=${ne.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph afterSlam [After Slam]
        B(${e(ds).effect}<img src=${e(ds).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D2(${ne.effect}<img src=${ne.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      D2==>B
      B==>afterDebuff
      D==>B
      C==>afterSlam
  `,img:`${t}/assets/act3/monsters/the-maw.webp`,name:"The Maw",slug:"the-maw"})),sa=()=>e(ta),js=n(()=>({effect:`${s.v>=2?40:30} + X*10 Damage. X = Turn - 1`,intent:`${t}/assets/intents/7.png`,name:"Attack"})),na=n(()=>({flowchart:`
    flowchart-elk LR
      A(${e(js).effect}<img src=${e(js).intent} class="h-10 object-contain" />)
  `,img:`${t}/assets/act3/monsters/transient.webp`,name:"Transient",slug:"transient"})),aa=()=>e(na),ws={effect:"1 Parasite into deck. Only affects future combats.",intent:`${t}/assets/intents/debuff2.png`,name:"Implant"},ae=n(()=>({effect:`${s.v>=2?16:15} Damage. ${s.v>=2?18:16} Block.`,intent:`${t}/assets/intents/attackDefend.png`,name:"Flail"})),ce=n(()=>({effect:`${s.v>=2?12:10} Damage. 2 Weak. 2 Vulnerable.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Wither"})),ie=n(()=>({effect:`${s.v>=2?9:7} x 3 Damage.`,intent:`${t}/assets/intents/5.png`,name:"Multi-Strike"})),oe=n(()=>({effect:`${s.v>=2?38:32} Damage.`,intent:`${t}/assets/intents/7.png`,name:"Strong Strike"})),ca=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turn1 [Turn 1]
        B(${e(ae).effect}<img src=${e(ae).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25%</span>)
        C(${e(ce).effect}<img src=${e(ce).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25%</span>)
        D(${e(ie).effect}<img src=${e(ie).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25%</span>)
        E(${e(oe).effect}<img src=${e(oe).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25%</span>)
      end
      subgraph Turn2+ [Turn 2+]
        A(${ws.effect}<img src=${ws.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
10%</span>)
        B2(${e(ae).effect}<img src=${e(ae).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
30%</span>)
        C2(${e(ce).effect}<img src=${e(ce).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
20%</span>)
        D2(${e(ie).effect}<img src=${e(ie).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
30%</span>)
        E2(${e(oe).effect}<img src=${e(oe).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
10%</span>)
      end
  `,img:`${t}/assets/act3/monsters/writhing-mass.webp`,name:"Writhing Mass",slug:"writhing-mass"})),ia=()=>e(ca),ks={effect:"2 Vulnerable. 2 Weak. 2 Frail. Dazed, Slimed, Wound, Burn and Void into draw.",intent:`${t}/assets/intents/debuff2.png`,name:"Debilitate"},fe=n(()=>({effect:`2 x ${s.v>=4?15:12} Damage.`,intent:`${t}/assets/intents/5.png`,name:"Blood Shots"})),re=n(()=>({effect:`${s.v>=4?45:40} Damage.`,intent:`${t}/assets/intents/7.png`,name:"Echo"})),Bs={effect:"Removes Strength Down. 2 Strength and additional buff.",intent:`${t}/assets/intents/buff1.png`,name:"Buff"},oa=n(()=>({flowchart:`
    flowchart-elk LR
      A(${ks.effect}<img src=${ks.intent} class="h-10 object-contain" />)
      B(${e(fe).effect}<img src=${e(fe).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B2(${e(fe).effect}<img src=${e(fe).intent} class="h-10 object-contain" />)
      C(${e(re).effect}<img src=${e(re).intent} class="h-10 object-contain" />)
      C2(${e(re).effect}<img src=${e(re).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${Bs.effect}<img src=${Bs.intent} class="h-10 object-contain" /><span class="text-xs">1. Artifact 2
2. Beat of Death 1
3. Painful Stabs
4. 10 Strength
5+. 50 Strength</span>)
      A==>Loop
      subgraph Loop
      B==>C==>D
      C2==>B2==>D
      end
  `,img:`${t}/assets/act4/bosses/corrupt-heart.webp`,name:"Corrupt Heart",slug:"corrupt-heart"})),fa=()=>e(oa),le=n(()=>({effect:`${s.v>=3?14:12} Damage. If Player has 1+ orb slot, 50/50 -1 Focus or -1 Strength. Else, -1 Strength.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Bash"})),ge={effect:"Group 30 Block.",intent:`${t}/assets/intents/defend.png`,name:"Fortify"},Ds=n(()=>({effect:`${s.v>=3?38:34} Damage. ${s.v>=18?"99 Block":"X Block. X = Damage Output"}.`,intent:`${t}/assets/intents/attackDefend.png`,name:"Smash"})),h=n(()=>({effect:`${s.v>=3?6:5} x 2 Damage. 2 Burns into discard.`,intent:`${t}/assets/intents/attackDebuff.png`,name:"Burn Strike"})),$e={effect:"Group 2 Strength.",intent:`${t}/assets/intents/buff1.png`,name:"Piercer"},Cs=n(()=>({effect:`10 x ${s.v>=3?4:3} Damage.`,intent:`${t}/assets/intents/7.png`,name:"Skewer"})),ra=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Shield [<img src=${t}/assets/act4/elites/spire-shield.webp class="h-10 object-contain inline" />]
        direction LR
        A(${e(le).effect}<img src=${e(le).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B(${ge.effect}<img src=${ge.intent} class="h-10 object-contain" />)
        A2(${e(le).effect}<img src=${e(le).intent} class="h-10 object-contain" />)
        B2(${ge.effect}<img src=${ge.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C(${e(Ds).effect}<img src=${e(Ds).intent} class="h-10 object-contain" />)
        subgraph Loop
          A==>B==>C
          B2==>A2==>C
        end
      end
      subgraph Spear [<img src=${t}/assets/act4/elites/spire-spear.webp class="h-10 object-contain inline" />]
        direction LR
        A3(${e(h).effect}<img src=${e(h).intent} class="h-10 object-contain" />)
        A4(${e(h).effect}<img src=${e(h).intent} class="h-10 object-contain" />)
        A5(${e(h).effect}<img src=${e(h).intent} class="h-10 object-contain" />)
        B3(${$e.effect}<img src=${$e.intent} class="h-10 object-contain" />)
        B4(${$e.effect}<img src=${$e.intent} class="h-10 object-contain" />)
        C2(${e(Cs).effect}<img src=${e(Cs).intent} class="h-10 object-contain" />)
        A3==>Loop2
        subgraph Loop2 [Loop]
          C2== 50% ==>A4==>B3
          C2== 50% ==>B4==>A5
        end
      end
  `,img:`${t}/assets/act4/elites/spire-shield-spear.webp`,name:"Spire Shield and Spear",slug:"spire-shield-spear"})),la=()=>e(ra),ga=[zs,cn,Vs,Zs,tn,qs,Qs,_s,Ns,nn],$a=[ys,Fs,Ws],ma=[Gs,Ms,Ls],pa=[vn,Bn,Cn,An,Rn,wn,Tn,En],ba=[pn,hn,xn],ha=[fn,ln,$n],ua=[Jn,Yn,Kn,sa,ea,aa,ia],xa=[Un,In,Xn],da=[Pn,Hn,On],va=[la],ja=[fa],c=Ss=>new Map(Ss.map(xe=>[xe().slug,xe])),wa=c(ga),ka=c($a),Ba=c(ma),Da=c(pa),Ca=c(ba),Sa=c(ha),Aa=c(ua),Ma=c(xa),Ta=c(da),La=c(va),Ea=c(ja),Pa=new Map([...wa,...ka,...Ba,...Da,...Ca,...Sa,...Aa,...Ma,...Ta,...La,...Ea]);export{ma as a,$a as b,ga as c,ha as d,ba as e,pa as f,da as g,xa as h,ua as i,ja as j,va as k,Pa as l};
