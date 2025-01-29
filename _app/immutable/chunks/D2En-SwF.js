import{y as e,A as s}from"./DZVdYBxV.js";import{a as t}from"./Dy9-zjNe.js";const xe={effect:"Nothing.",intent:"/assets/intents/unknown.png",name:"Activate"},de={effect:"H x 6 Damage. H = Player HP / 12 + 1, rounded down.",intent:"/assets/intents/7.png",name:"Divider"},ve=s(()=>({effect:`${t.v>=4?3:2} x 6 Damage. Upgrades all Burn. 3 Burn+ into discard.`,intent:"/assets/intents/3.png",name:"Inferno"})),r=s(()=>({effect:`6 Damage. ${t.v>=19?2:1} Burn into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Sear"})),x=s(()=>({effect:`${t.v>=4?6:5} x 2 Damage.`,intent:"/assets/intents/3.png",name:"Tackle"})),je=s(()=>({effect:`${t.v>=19?3:2} Strength. 12 Block.`,intent:"/assets/intents/defendBuff.png",name:"Inflame"})),Ss=s(()=>({flowchart:`
    flowchart LR
      A(${xe.effect}<img src=${xe.intent} class="h-10 object-contain" />)
      B(${de.effect}<img src=${de.intent} class="h-10 object-contain" />)
      C(${e(r).effect}<img src=${e(r).intent} class="h-10 object-contain" />)
      C2(${e(r).effect}<img src=${e(r).intent} class="h-10 object-contain" />)
      C3(${e(r).effect}<img src=${e(r).intent} class="h-10 object-contain" />)
      D(${e(x).effect}<img src=${e(x).intent} class="h-10 object-contain" />)
      D2(${e(x).effect}<img src=${e(x).intent} class="h-10 object-contain" />)
      E(${e(je).effect}<img src=${e(je).intent} class="h-10 object-contain" />)
      F(${e(ve).effect}<img src=${e(ve).intent} class="h-10 object-contain" />)
      A==>B
      B==>C
      C==>D
      D==>C2
      C2==>E
      E==>D2
      D2==>C3
      C3==>F
      F== Gives Burn+ instead of Burn ==>B
  `,img:"/assets/act1/bosses/hexaghost.webp",name:"Hexaghost",slug:"hexaghost"})),As=()=>e(Ss),we=s(()=>({effect:`${t.v>=19?5:3} Slimed into discard.`,intent:"/assets/intents/debuff2.png",name:"Goop Spray"})),ke={effect:"Nothing.",intent:"/assets/intents/unknown.png",name:"Preparing"},Be=s(()=>({effect:`${t.v>=4?38:35} Damage.`,intent:"/assets/intents/7.png",name:"Slam"})),De={effect:"Spawns Acid Slime L and Spike Slime L with current HP. Dies.",intent:"/assets/intents/unknown.png",name:"Split"},Ms=s(()=>({flowchart:`
    flowchart-elk LR
      A(${e(we).effect}<img src=${e(we).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${ke.effect}<img src=${ke.intent} class="h-10 object-contain" />)
      C(${e(Be).effect}<img src=${e(Be).intent} class="h-10 object-contain" />)
      D(${De.effect}<img src=${De.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
    A==>B
    B==>C
    C==>A
  `,img:"/assets/act1/bosses/slime-boss.webp",name:"Slime Boss",slug:"slime-boss"})),Ts=()=>e(Ms),Ce={effect:"9 Block",intent:"/assets/intents/defend.png",name:"Charging Up"},Se=s(()=>({effect:`${t.v>=4?36:32} Damage.`,intent:"/assets/intents/7.png",name:"Fierce Bash"})),Ae={effect:"2 Weak. 2 Vulnerable",intent:"/assets/intents/debuff2.png",name:"Charging Up"},Me={effect:"5 x 4 Damage.",intent:"/assets/intents/5.png",name:"Whirlwind"},Te=s(()=>({effect:`${t.v>=19?4:3} Sharp Hide.`,intent:"/assets/intents/buff1.png",name:"Defensive Mode"})),Le=s(()=>({effect:`${t.v>=4?10:9} Damage.`,intent:"/assets/intents/3.png",name:"Roll Attack"})),Ee={effect:"8 x 2 Damage. Removes Sharp Hide. Enters Offensive mode.",intent:"/assets/intents/attackBuff.png",name:"Twin Slam"},Ls=s(()=>({flowchart:`
    flowchart-elk LR
      A(${Ce.effect}<img src=${Ce.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${e(Se).effect}<img src=${e(Se).intent} class="h-10 object-contain" />)
      C(${Ae.effect}<img src=${Ae.intent} class="h-10 object-contain" />)
      D(${Me.effect}<img src=${Me.intent} class="h-10 object-contain" />)
      E(${e(Te).effect}<img src=${e(Te).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      F(${e(Le).effect}<img src=${e(Le).intent} class="h-10 object-contain" />)
      G(${Ee.effect}<img src=${Ee.intent} class="h-10 object-contain" />)
      subgraph Offensive [<img src=/assets/act1/bosses/the-guardian-offensive.webp class="h-10 object-contain inline" />]
        direction LR
        A==>B==>C==>D==>A
      end
      subgraph Defensive [<img src=/assets/act1/bosses/the-guardian-defensive.webp class="h-10 object-contain inline" />]
        direction LR
        E==>F==>G==>E
      end 
  `,img:"/assets/act1/bosses/the-guardian-offensive.webp",name:"The Guardian",slug:"the-guardian"})),Es=()=>e(Ls),d=s(()=>({effect:`${t.v>=18?3:2} Enrage.`,intent:"/assets/intents/buff1.png",name:"Bellow"})),l=s(()=>({effect:`${t.v>=3?16:14} Damage.`,intent:"/assets/intents/3.png",name:"Rush"})),v=s(()=>({effect:`${t.v>=3?8:6} Damage. 2 Vulnerable.`,intent:"/assets/intents/attackDebuff.png",name:"Skull Bash"})),Gs=s(()=>({flowchart:t.v>=18?`
    flowchart-elk LR
      A(${e(d).effect}<img src=${e(d).intent} class="h-10 object-contain" />)
      B(${e(l).effect}<img src=${e(l).intent} class="h-10 object-contain" />)
      B2(${e(l).effect}<img src=${e(l).intent} class="h-10 object-contain" />)
      C(${e(v).effect}<img src=${e(v).intent} class="h-10 object-contain" />)
    A==>C
    C==>B
    B==>B2
    B2==>A
  `:`
    flowchart-elk LR
      A(${e(d).effect}<img src=${e(d).intent} class="h-10 object-contain" />)
      B(${e(l).effect}<img src=${e(l).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
67%</span>)
      C(${e(v).effect}<img src=${e(v).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
      A==>Turn2+
      subgraph Turn2+ [Turn 2+]
        direction LR
        B
        C
      end
  `,img:"/assets/act1/elites/gremlin-nob.webp",name:"Gremlin Nob",slug:"gremlin-nob"})),Rs=()=>e(Gs),j=s(()=>({effect:`${t.v>=3?20:18} Damage.`,intent:"/assets/intents/4.png",name:"Attack"})),Ge=s(()=>({effect:` -${t.v>=18?2:1} Dexterity. -${t.v>=18?2:1} Strength.`,intent:"/assets/intents/debuff2.png",name:"Siphon Soul"})),ys=s(()=>({flowchart:`
    flowchart-elk TB
      A(${e(j).effect}<img src=${e(j).intent} class="h-10 object-contain" />)
      A2(${e(j).effect}<img src=${e(j).intent} class="h-10 object-contain" />)
      B(${e(Ge).effect}<img src=${e(Ge).intent} class="h-10 object-contain" />)
      A==>A2
      A2==>B
      B==>A
  `,img:"/assets/act1/elites/lagavulin.webp",name:"Lagavulin",slug:"lagavulin"})),Ps=()=>e(ys),Re=s(()=>({effect:`${t.v>=3?10:9} Damage.`,intent:"/assets/intents/4.png",name:"Beam"})),ye=s(()=>({effect:`${t.v>=18?3:2} Dazed into discard.`,intent:"/assets/intents/debuff1.png",name:"Bolt"})),Fs=s(()=>({flowchart:`
    flowchart-elk LR
      A(${e(Re).effect}<img src=${e(Re).intent} class="h-10 object-contain" />)
      B(${e(ye).effect}<img src=${e(ye).intent} class="h-10 object-contain" />)
      A<==>B
  `,img:"/assets/act1/elites/sentry.webp",name:"Sentry",slug:"sentry"})),Hs=()=>e(Fs),Pe=s(()=>({effect:`${t.v>=2?12:11} Damage. 2 Slimed into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Corrosive Spit"})),Fe=s(()=>({effect:"2 Weak.",intent:"/assets/intents/debuff1.png",name:"Lick"})),He=s(()=>({effect:`${t.v>=2?18:16} Damage.`,intent:"/assets/intents/4.png",name:"Tackle"})),We={effect:"Spawns 2 Acid Slime M with current HP. Dies.",intent:"/assets/intents/unknown.png",name:"Split"},Oe=s(()=>({effect:`${t.v>=2?8:7} Damage. 1 Slimed into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Corrosive Spit"})),ze=s(()=>({effect:"1 Weak.",intent:"/assets/intents/debuff1.png",name:"Lick"})),Ue=s(()=>({effect:`${t.v>=2?12:10} Damage.`,intent:"/assets/intents/3.png",name:"Tackle"})),Ne=s(()=>({effect:"1 Weak.",intent:"/assets/intents/debuff1.png",name:"Lick"})),Ie=s(()=>({effect:`${t.v>=2?4:3} Damage.`,intent:"/assets/intents/1.png",name:"Tackle"})),Ws=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=/assets/act1/monsters/acid-slime-l.webp class="h-10 object-contain inline" />]
        A(${e(Pe).effect}<img src=${e(Pe).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
${t.v>=17?"40%":"30%"}</span>)
        B(${e(Fe).effect}<img src=${e(Fe).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?1:2}
30%</span>)
        C(${e(He).effect}<img src=${e(He).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?2:1}
${t.v>=17?"30%":"40%"}</span>)
        D(${We.effect}<img src=${We.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
      end
      subgraph Medium [<img src=/assets/act1/monsters/acid-slime-m.webp class="h-10 object-contain inline" />]
        A2(${e(Oe).effect}<img src=${e(Oe).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
${t.v>=17?"40%":"30%"}</span>)
        B2(${e(ze).effect}<img src=${e(ze).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?1:2}
30%</span>)
        C2(${e(Ue).effect}<img src=${e(Ue).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?2:1}
${t.v>=17?"30%":"40%"}</span>)
      end
      subgraph Small [<img src=/assets/act1/monsters/acid-slime-s.webp class="h-10 object-contain inline" />]
        A3(${e(Ne).effect}<img src=${e(Ne).intent} class="h-10 object-contain" /><span class="text-xs">${t.v>=17?"Turn 1: 100%":"Turn 1: 50%"}</span>)
        B3(${e(Ie).effect}<img src=${e(Ie).intent} class="h-10 object-contain" /><span class="text-xs">${t.v>=17?"":"Turn 1: 50%"}</span>)
        A3<==>B3
      end
  `,img:"/assets/act1/monsters/acid-slimes.webp",name:"Acid Slimes",slug:"acid-slimes"})),Os=()=>e(Ws),Ve=s(()=>({effect:`${t.v>=2?13:12} Damage.`,intent:"/assets/intents/3.png",name:"Stab"})),Xe=s(()=>({effect:`${t.v>=2?8:7} Damage. ${t.v>=17?2:1} Weak.`,intent:"/assets/intents/attackDebuff.png",name:"Rake"})),zs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${e(Ve).effect}<img src=${e(Ve).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
60%</span>)
      B(${e(Xe).effect}<img src=${e(Xe).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?1:2}
40%</span>)
  `,img:"/assets/act1/monsters/blue-slaver.webp",name:"Blue Slaver",slug:"blue-slaver"})),Us=()=>e(zs),qe=s(()=>({effect:`${t.v>=2?t.v>=17?5:4:3} Ritual.`,intent:"/assets/intents/buff1.png",name:"Incantation"})),Je={effect:"6 Damage.",intent:"/assets/intents/2.png",name:"Dark Strike"},Ns=s(()=>({flowchart:`
    flowchart-elk LR
      A(${e(qe).effect}<img src=${e(qe).intent} class="h-10 object-contain" />)
      B(${Je.effect}<img src=${Je.intent} class="h-10 object-contain" />)
      A==>B
      B==>B
  `,img:"/assets/act1/monsters/cultist.webp",name:"Cultist",slug:"cultist"})),Is=()=>e(Ns),Qe={effect:"6 Damage.",intent:"/assets/intents/2.png",name:"Bite"},Ye=s(()=>({effect:`${t.v>=2?t.v>=17?5:4:3} Strength.`,intent:"/assets/intents/buff1.png",name:"Grow"})),Vs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${Qe.effect}<img src=${Qe.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
60%</span>)
      B(${e(Ye).effect}<img src=${e(Ye).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
40%</span>)
  `,img:"/assets/act1/monsters/fungi-beast.webp",name:"Fungi Beast",slug:"fungi-beast"})),Xs=()=>e(Vs),c={effect:"Nothing.",intent:"/assets/intents/unknown.png",name:"Charging"},w=s(()=>({effect:`${t.v>=2?30:25} Damage.`,intent:"/assets/intents/6.png",name:"Ultimate Blast"})),k=s(()=>({effect:`${t.v>=2?5:4} Damage.`,intent:"/assets/intents/1.png",name:"Scratch"})),B=s(()=>({effect:`${t.v>=2?5:4} Damage. 1 Weak.${t.v>=17?" 1 Frail":""}.`,intent:"/assets/intents/attackDebuff.png",name:"Smash"})),D=s(()=>({effect:`Ally ${t.v>=2?t.v>=17?11:8:7} Block.`,intent:"/assets/intents/defend.png",name:"Protect"})),C=s(()=>({effect:`${t.v>=2?8:6} Damage.`,intent:"/assets/intents/2.png",name:"Shield Bash"})),S=s(()=>({effect:`${t.v>=2?10:9} Damage.`,intent:"/assets/intents/2.png",name:"Puncture"})),qs=s(()=>({flowchart:t.v>=17?`
    flowchart-elk TB
      subgraph Wizard [<img src=/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        A2(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        B(${e(w).effect}<img src=${e(w).intent} class="h-10 object-contain" />)
        A==>A2==>B==>B
      end
      subgraph Mad [<img src=/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A3(${e(k).effect}<img src=${e(k).intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A4(${e(B).effect}<img src=${e(B).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A5(${e(D).effect}<img src=${e(D).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B5(${e(C).effect}<img src=${e(C).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A6(${e(S).effect}<img src=${e(S).intent} class="h-10 object-contain" />)
      end
  `:`
    flowchart-elk TB
      subgraph Wizard [<img src=/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${c.effect}<img src=${c.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        A3(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        B(${e(w).effect}<img src=${e(w).intent} class="h-10 object-contain" />)
        A==>A2==>B==>A3==>A
      end
      subgraph Mad [<img src=/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A4(${e(k).effect}<img src=${e(k).intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A5(${e(B).effect}<img src=${e(B).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A6(${e(D).effect}<img src=${e(D).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B6(${e(C).effect}<img src=${e(C).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A7(${e(S).effect}<img src=${e(S).intent} class="h-10 object-contain" />)
      end
  `,img:"/assets/act1/monsters/gremlins.webp",name:"Gremlins",slug:"gremlins"})),Js=()=>e(qs),Ze=s(()=>({effect:`${t.v>=2?12:11} Damage.`,intent:"/assets/intents/3.png",name:"Chomp"})),Ke={effect:"7 Damage. 5 Block.",intent:"/assets/intents/attackDefend.png",name:"Thrash"},_e=s(()=>({effect:`${t.v>=2?t.v>=17?5:4:3} Strength. ${t.v>=17?9:6} Block.`,intent:"/assets/intents/defendBuff.png",name:"Bellow"})),Qs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${e(Ze).effect}<img src=${e(Ze).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
Act 1, Turn 1: 100%
25%</span>)
      B(${Ke.effect}<img src=${Ke.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
30%</span>)
      C(${e(_e).effect}<img src=${e(_e).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
45%</span>)
  `,img:"/assets/act1/monsters/jaw-worm.webp",name:"Jaw Worm",slug:"jaw-worm"})),Ys=()=>e(Qs),A=s(()=>({effect:`${t.v>=2?11:10} Damage.`,intent:"/assets/intents/3.png",name:"Mug"})),et=s(()=>({effect:`${t.v>=2?14:12} Damage`,intent:"/assets/intents/3.png",name:"Lunge"})),tt={effect:"6 Block.",intent:"/assets/intents/defend.png",name:"Smoke Bomb"},st={effect:"Escape.",intent:"/assets/intents/escape.png",name:"Escape"},Zs=s(()=>({flowchart:`
    flowchart-elk LR
      A(${e(A).effect}<img src=${e(A).intent} class="h-10 object-contain" />)
      A2(${e(A).effect}<img src=${e(A).intent} class="h-10 object-contain" />)
      B(${e(et).effect}<img src=${e(et).intent} class="h-10 object-contain" />)
      C(${tt.effect}<img src=${tt.intent} class="h-10 object-contain" />)
      D(${st.effect}<img src=${st.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:"/assets/act1/monsters/looter.webp",name:"Looter",slug:"looter"})),Ks=()=>e(Zs),M=s(()=>({effect:`${t.v>=2?"D+1":"D"} Damage. D is chosen between 5 and 7 at the beginning of the battle.`,intent:"/assets/intents/2.png",name:"Bite"})),nt=s(()=>({effect:`${t.v>=17?4:3} Strength.`,intent:"/assets/intents/buff1.png",name:"Grow"})),at={effect:"2 Weak.",intent:"/assets/intents/debuff1.png",name:"Spit Web"},_s=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Red [<img src=/assets/act1/monsters/red-louse.webp class="h-10 object-contain inline" />]
        A(${e(M).effect}<img src=${e(M).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
75%</span>)
        B(${e(nt).effect}<img src=${e(nt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?1:2}
25%</span>)
      end
      subgraph Green [<img src=/assets/act1/monsters/green-louse.webp class="h-10 object-contain inline" />]
        A2(${e(M).effect}<img src=${e(M).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
75%</span>)
        B2(${at.effect}<img src=${at.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?1:2}
25%</span>)
      end
  `,img:"/assets/act1/monsters/louses.webp",name:"Louses",slug:"louses"})),en=()=>e(_s),n=s(()=>({effect:`${t.v>=2?14:13} Damage.`,intent:"/assets/intents/3.png",name:"Stab"})),i=s(()=>({effect:`${t.v>=2?9:8} Damage. ${t.v>=17?2:1} Vulnerable.`,intent:"/assets/intents/attackDebuff.png",name:"Scrape"})),T={effect:"1 Entangled.",intent:"/assets/intents/debuff2.png",name:"Entangle"},tn=s(()=>({flowchart:t.v>=17?`
    flowchart-elk LR
      A(${e(n).effect}<img src=${e(n).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
      A2(${e(n).effect}<img src=${e(n).intent} class="h-10 object-contain" />)
      B(${e(i).effect}<img src=${e(i).intent} class="h-10 object-contain" />)
      C(${T.effect}<img src=${T.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      A3(${e(n).effect}<img src=${e(n).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
45%</span>)
      B2(${e(i).effect}<img src=${e(i).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?1:2}
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
      A(${e(n).effect}<img src=${e(n).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
      A2(${e(n).effect}<img src=${e(n).intent} class="h-10 object-contain" />)
      B(${e(i).effect}<img src=${e(i).intent} class="h-10 object-contain" />)
      B2(${e(i).effect}<img src=${e(i).intent} class="h-10 object-contain" />)
      C(${T.effect}<img src=${T.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      A3(${e(n).effect}<img src=${e(n).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
45%</span>)
      B3(${e(i).effect}<img src=${e(i).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?1:2}
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
  `,img:"/assets/act1/monsters/red-slaver.webp",name:"Red Slaver",slug:"red-slaver"})),sn=()=>e(tn),ct=s(()=>({effect:`${t.v>=2?18:16} Damage. 2 Slimed into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Flame Tackle"})),it=s(()=>({effect:`${t.v>=17?3:2} Frail.`,intent:"/assets/intents/debuff1.png",name:"Lick"})),ot={effect:"Spawns 2 Spike Slime M with current HP. Dies",intent:"/assets/intents/unknown.png",name:"Split"},ft=s(()=>({effect:`${t.v>=2?10:8} Damage. 1 Slimed into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Flame Tackle"})),rt=s(()=>({effect:"1 Frail.",intent:"/assets/intents/debuff1.png",name:"Lick"})),lt=s(()=>({effect:`${t.v>=2?6:5} Damage.`,intent:"/assets/intents/2.png",name:"Tackle"})),nn=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=/assets/act1/monsters/spike-slime-l.webp class="h-10 object-contain inline" />]
        A(${e(ct).effect}<img src=${e(ct).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
30%</span>)
        B(${e(it).effect}<img src=${e(it).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?1:2}
70%</span>)
        C(${ot.effect}<img src=${ot.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower</span>)
      end
      subgraph Medium [<img src=/assets/act1/monsters/spike-slime-m.webp class="h-10 object-contain inline" />]
        A2(${e(ft).effect}<img src=${e(ft).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
30%</span>)
        B2(${e(rt).effect}<img src=${e(rt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?1:2}
70%</span>)
      end
      subgraph Small [<img src=/assets/act1/monsters/spike-slime-s.webp class="h-10 object-contain inline" />]
        A3(${e(lt).effect}<img src=${e(lt).intent} class="h-10 object-contain" />)
      end
  `,img:"/assets/act1/monsters/spike-slimes.webp",name:"Spike Slimes",slug:"spike-slimes"})),an=()=>e(nn),L={effect:"Spawns 2 Bronze Orbs.",intent:"/assets/intents/unknown.png",name:"Spawn Orbs"},o=s(()=>({effect:`${t.v>=4?4:3} Strength. ${t.v>=9?12:9} Block.`,intent:"/assets/intents/defendBuff.png",name:"Boost"})),f=s(()=>({effect:`${t.v>=4?8:7} x 2 Damage.`,intent:"/assets/intents/3.png",name:"Flail"})),E=s(()=>({effect:`${t.v>=4?50:45} Damage.`,intent:"/assets/intents/7.png",name:"HYPER BEAM"})),G={effect:"Steals the rarest card in the draw pile, or from the discard pile if the draw pile is empty.",intent:"/assets/intents/debuff2.png",name:"Stasis"},R={effect:"8 Damage.",intent:"/assets/intents/2.png",name:"Beam"},y={effect:"Bronze Automaton 12 Block.",intent:"/assets/intents/defend.png",name:"Support Beam"},cn=s(()=>({flowchart:t.v>=19?`
    flowchart-elk TB
      A(${L.effect}<img src=${L.intent} class="h-10 object-contain" />)
      B(${e(o).effect}<img src=${e(o).intent} class="h-10 object-contain" />)
      B2(${e(o).effect}<img src=${e(o).intent} class="h-10 object-contain" />)
      B3(${e(o).effect}<img src=${e(o).intent} class="h-10 object-contain" />)
      C(${e(f).effect}<img src=${e(f).intent} class="h-10 object-contain" />)
      C2(${e(f).effect}<img src=${e(f).intent} class="h-10 object-contain" />)
      D(${e(E).effect}<img src=${e(E).intent} class="h-10 object-contain" />)
      subgraph Bronze [<img src=/assets/act2/bosses/bronze-automaton.webp class="h-10 object-contain inline" />]
        direction LR
        A==>C==>B==>C2==>B2==>D==>B3==>C
      end
      subgraph Orb [<img src=/assets/act2/bosses/bronze-orb.webp class="h-10 object-contain inline" />]
        E(${G.effect}<img src=${G.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        F(${R.effect}<img src=${R.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
7.5%
Card Stolen: 30%</span>)  
        G(${y.effect}<img src=${y.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
17.5%
Card Stolen: 70%</span>)  
      end
  `:`
    flowchart-elk TB
      A(${L.effect}<img src=${L.intent} class="h-10 object-contain" />)
      B(${e(o).effect}<img src=${e(o).intent} class="h-10 object-contain" />)
      B2(${e(o).effect}<img src=${e(o).intent} class="h-10 object-contain" />)
      C(${e(f).effect}<img src=${e(f).intent} class="h-10 object-contain" />)
      C2(${e(f).effect}<img src=${e(f).intent} class="h-10 object-contain" />)
      D(${e(E).effect}<img src=${e(E).intent} class="h-10 object-contain" />)  
      E(Stunned<img src='/assets/intents/stun.png' class="h-10 object-contain" />)
      subgraph Bronze [<img src=/assets/act2/bosses/bronze-automaton.webp class="h-10 object-contain inline" />]
        direction LR
        A==>C==>B==>C2==>B2==>D==>E==>C
      end
      subgraph Orb [<img src=/assets/act2/bosses/bronze-orb.webp class="h-10 object-contain inline" />]
        F(${G.effect}<img src=${G.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        G(${R.effect}<img src=${R.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
7.5%
Card Stolen: 30%</span>)  
        H(${y.effect}<img src=${y.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
17.5%
Card Stolen: 70%</span>)  
      end
  `,img:"/assets/act2/bosses/bronze-automaton.webp",name:"Bronze Automaton",slug:"bronze-automaton"})),on=()=>e(cn),P=s(()=>({effect:`${t.v>=9?t.v>=19?20:18:15} Block. ${t.v>=9?t.v>=19?7:6:5} Metallicize.`,intent:"/assets/intents/defendBuff.png",name:"Defensive Stance"})),F=s(()=>({effect:`${t.v>=4?14:12} Damage. 2 Frail. 2 Vulnerable.`,intent:"/assets/intents/attackDebuff.png",name:"Face Slap"})),H={effect:"2 Weak. 2 Vulnerable.",intent:"/assets/intents/debuff1.png",name:"Taunt"},W=s(()=>({effect:`${t.v>=4?18:16} Damage.`,intent:"/assets/intents/4.png",name:"Heavy Slash"})),gt=s(()=>({effect:`${t.v>=4?t.v>=19?4:3:2} Strength.`,intent:"/assets/intents/buff1.png",name:"Gloat"})),O={effect:"10 x 2 Damage.",intent:"/assets/intents/5.png",name:"Execute"},z=s(()=>({effect:`Removes debuffs. ${t.v>=4?t.v>=19?12:9:6} Strength.`,intent:"/assets/intents/buff1.png",name:"Anger"})),fn=s(()=>({flowchart:t.v>=19?`
    flowchart-elk TB
      A(${e(P).effect}<img src=${e(P).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max Consecutive: 1
${t.v>=19?"30%":"15%"}</span>)
      B(${e(F).effect}<img src=${e(F).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25% + Invalid Left/Right%</span>)
      C(${H.effect}<img src=${H.intent} class="h-10 object-contain" />)
      D(${e(W).effect}<img src=${e(W).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
45% + Invalid Left%</span>)
      F(${O.effect}<img src=${O.intent} class="h-10 object-contain" />)
      G(${e(z).effect}<img src=${e(z).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Uses next turn.</span>)
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
      A(${e(P).effect}<img src=${e(P).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max Consecutive: 1
${t.v>=19?"30%":"15%"}</span>)
      B(${e(F).effect}<img src=${e(F).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25% + Invalid Left/Right%</span>)
      C(${H.effect}<img src=${H.intent} class="h-10 object-contain" />)
      D(${e(W).effect}<img src=${e(W).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
45% + Invalid Left%</span>)
      E(${e(gt).effect}<img src=${e(gt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
15% + Invalid Left%</span>)
      F(${O.effect}<img src=${O.intent} class="h-10 object-contain" />)
      G(${e(z).effect}<img src=${e(z).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Uses next turn.</span>)
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
  `,img:"/assets/act2/bosses/the-champ.webp",name:"The Champ",slug:"the-champ"})),rn=()=>e(fn),mt=s(()=>({effect:`Group ${t.v>=4?t.v>=19?5:4:3} Strength. ${t.v>=4?t.v>=19?23:18:15} Block.`,intent:"/assets/intents/defendBuff.png",name:"Buff"})),U=s(()=>({effect:`${t.v>=4?21:18} Damage.`,intent:"/assets/intents/4.png",name:"Fireball"})),pt=s(()=>({effect:`${t.v>=19?5:3} Weak. ${t.v>=19?5:3} Vulnerable. ${t.v>=19?5:3} Frail.`,intent:"/assets/intents/debuff2.png",name:"Mega Debuff"})),$t={effect:"Spawns up to 2 Torch Heads.",intent:"/assets/intents/unknown.png",name:"Spawn"},bt={effect:"7 Damage.",intent:"/assets/intents/2.png",name:"Tackle"},ln=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Head [<img src=/assets/act2/bosses/torch-head.webp class="h-10 object-contain inline" />]
        E(${bt.effect}<img src=${bt.intent} class="h-10 object-contain" />)
      end
      subgraph Collector [<img src=/assets/act2/bosses/the-collector.webp class="h-10 object-contain inline" />]
        A(${e(mt).effect}<img src=${e(mt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
30%</span>)
        subgraph 0-1Torch [0-1 Torch Heads]
          B0(${e(U).effect}<img src=${e(U).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
45%</span>)
          D0(${$t.effect}<img src=${$t.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
        end
        subgraph 2Torch [2 Torch Heads]
          B2(${e(U).effect}<img src=${e(U).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
70%</span>)
        end
        subgraph Turn4 [Turn 4]
          C(${e(pt).effect}<img src=${e(pt).intent} class="h-10 object-contain" />)
        end
      end
  `,img:"/assets/act2/bosses/the-collector.webp",name:"The Collector",slug:"the-collector"})),gn=()=>e(ln),me=s(()=>({effect:`${t.v>=3?7:6} x N Damage. N = 2 + ${t.v>=18?"Multi/Single Stabs":"Multi-Stabs"} used`,intent:"/assets/intents/3.png",name:"Multi-Stab"})),pe=s(()=>({effect:`${t.v>=3?24:21} Damage.`,intent:"/assets/intents/5.png",name:"Single Stab"})),mn=s(()=>({flowchart:`
    flowchart-elk TB
      A(*${e(me).name}*
${e(me).effect}<img src=${e(me).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max Consecutive: 2
85%</span>)
      B(*${e(pe).name}*
${e(pe).effect}<img src=${e(pe).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max Consecutive: 1
15%</span>)
  `,img:"/assets/act2/elites/book-of-stabbing.webp",name:"Book of Stabbing",slug:"book-of-stabbing"})),pn=()=>e(mn),h=s(()=>({effect:`Group ${t.v>=3?t.v>=18?5:4:3} Strength. Group ${t.v>=18?10:6} Block.`,intent:"/assets/intents/defendBuff.png",name:"Encourage"})),u={effect:"Spawns 2 Gremlins.",intent:"/assets/intents/unknown.png",name:"Rally!"},g={effect:"6 x 3 Damage.",intent:"/assets/intents/4.png",name:"Stab"},$n=s(()=>({flowchart:`
    flowchart-elk TB
      A(${e(h).effect}<img src=${e(h).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      B(${u.effect}<img src=${u.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      C(${g.effect}<img src=${g.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      B0(<img src=${u.intent} class="h-10 object-contain" /><span class="text-xs">75%</span>)
      C0(<img src=${g.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
      A1(<img src=${e(h).intent} class="h-10 object-contain" /><span class="text-xs">37.5%</span>)
      B1a(<img src=${u.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B1b(<img src=${u.intent} class="h-10 object-contain" /><span class="text-xs">62.5%</span>)
      C1(<img src=${g.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      A2(<img src=${e(h).intent} class="h-10 object-contain" /><span class="text-xs">66%</span>)
      C2(<img src=${g.intent} class="h-10 object-contain" /><span class="text-xs">34%</span>)
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
        subgraph prevMoveEncourage [Previous Move <img src=${e(h).intent} class="h-10 object-contain inline" />]
          B1a
          C1
        end
        subgraph prevMoveStab [Previous Move <img src=${g.intent} class="h-10 object-contain inline" />]
          A1
          B1b
        end
      end
      subgraph 2Gremlin [2+ Gremlins]
        A2
        C2
      end
  `,img:"/assets/act2/elites/gremlin-leader.webp",name:"Gremlin Leader",slug:"gremlin-leader"})),bn=()=>e($n),ht=s(()=>({effect:`7 Damage. ${t.v>=3?t.v>=18?3:2:1} Wound into discard.${t.v>=18?" 1 Strength.":""}`,intent:"/assets/intents/attackDebuff.png",name:"Scouring Whip"})),hn=s(()=>({flowchart:`
    flowchart-elk TB
      A(${e(ht).effect}<img src=${e(ht).intent} class="h-10 object-contain" />)
  `,img:"/assets/act2/elites/taskmaster.webp",name:"Taskmaster",slug:"taskmaster"})),un=()=>e(hn),ut={effect:"1 Strength.",intent:"/assets/intents/buff1.png",name:"Caw"},xt=s(()=>({effect:`1 x ${t.v>=2?6:5} Damage.`,intent:"/assets/intents/2.png",name:"Peck"})),dt=s(()=>({effect:`${t.v>=2?14:12} Damage.`,intent:"/assets/intents/3.png",name:"Swoop"})),vt=s(()=>({effect:`Flying ${t.v>=17?4:3}.`,intent:"/assets/intents/unknown.png",name:"Fly"})),jt={effect:"3 Damage",intent:"/assets/intents/1.png",name:"Headbutt"},xn=s(()=>({flowchart:`
    flowchart-elk TB
      A(${ut.effect}<img src=${ut.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
Turn 1: 37.5%
30%</span>)
      B(${e(xt).effect}<img src=${e(xt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
Turn 1: 62.5%
50%</span>)
      C(${e(dt).effect}<img src=${e(dt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
Turn 1: 0%
20%</span>)
      D(${e(vt).effect}<img src=${e(vt).intent} class="h-10 object-contain" />)
      E(${jt.effect}<img src=${jt.intent} class="h-10 object-contain" />)
      F(Stunned<img src='/assets/intents/stun.png' class="h-10 object-contain" />)
      subgraph Grounded [<img src=/assets/act2/monsters/byrd-grounded.webp class="h-10 object-contain inline" />]
        direction LR
        F==>E==>D
      end
      Grounded==>Flying
      subgraph Flying [<img src=/assets/act2/monsters/byrd-flying.webp class="h-10 object-contain inline" />]
        A
        B
        C
      end
  `,img:"/assets/act2/monsters/byrd-flying.webp",name:"Byrd",slug:"byrd"})),dn=()=>e(xn),wt=s(()=>({effect:`${t.v>=2?14:12} Damage.`,intent:"/assets/intents/3.png",name:"Slash"})),kt=s(()=>({effect:`${t.v>=2?7:6} x 3 Damage.`,intent:"/assets/intents/4.png",name:"Fury"})),Bt=s(()=>({effect:`Ally ${t.v>=17?20:15} Block.`,intent:"/assets/intents/defend.png",name:"Defend"})),Dt=s(()=>({effect:`Group ${t.v>=17?20:16} Heal.`,intent:"/assets/intents/buff1.png",name:"Heal"})),Ct=s(()=>({effect:`Group ${t.v>=2?t.v>=17?4:3:2} Strength.`,intent:"/assets/intents/buff1.png",name:"Buff"})),St=s(()=>({effect:`${t.v>=2?9:8} Damage. 2 Frail.`,intent:"/assets/intents/attackDebuff.png",name:"Attack/Debuff"})),vn=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Centurion [<img src=/assets/act2/monsters/centurion.webp class="h-10 object-contain inline" />]
        A(${e(wt).effect}<img src=${e(wt).intent} class="h-10 object-contain" /><span class="text-xs">65%</span>)
        subgraph MysticAlive [Mystic Alive]
          C(${e(Bt).effect}<img src=${e(Bt).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
        subgraph MysticDead [Mystic Dead]
          B(${e(kt).effect}<img src=${e(kt).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
      end
      subgraph Mystic [<img src=/assets/act2/monsters/mystic.webp class="h-10 object-contain inline" />]
        A2(${e(Dt).effect}<img src=${e(Dt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
Trigger: An enemy is hurt ${t.v>=17?21:16} or more</span>)
        B2(${e(Ct).effect}<img src=${e(Ct).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
40%</span>)
        C2(${e(St).effect}<img src=${e(St).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: ${t.v>=17?1:2}
60%</span>)
      end
  `,img:"/assets/act2/monsters/centurion-mystic.webp",name:"Centurion and Mystic",slug:"centurion-mystic"})),jn=()=>e(vn),m=s(()=>({effect:`${t.v>=2?6:5} x 2 Damage.`,intent:"/assets/intents/3.png",name:"Poke"})),N=s(()=>({effect:`${t.v>=2?21:18} Damage.`,intent:"/assets/intents/4.png",name:"Zap"})),I=s(()=>({effect:`${t.v>=2?12:10} Damage. 2 Vulnerable.`,intent:"/assets/intents/unknown.png",name:"Debilitate"})),V={effect:"3 Weak. 3 Strength.",intent:"/assets/intents/debuff1.png",name:"Drain"},X={effect:"1 Hex.",intent:"/assets/intents/debuff2.png",name:"Hex"},wn=s(()=>({flowchart:t.v>=17?`
    flowchart-elk LR
      A(${e(m).effect}<img src=${e(m).intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${e(N).effect}<img src=${e(N).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${e(I).effect}<img src=${e(I).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${V.effect}<img src=${V.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${X.effect}<img src=${X.intent} class="h-10 object-contain" />)
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
      B(${e(N).effect}<img src=${e(N).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${e(I).effect}<img src=${e(I).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${V.effect}<img src=${V.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${X.effect}<img src=${X.intent} class="h-10 object-contain" />)
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
  `,img:"/assets/act2/monsters/chosen.webp",name:"Chosen",slug:"chosen"})),kn=()=>e(wn),q=s(()=>({effect:`${t.v>=2?11:10} Damage.`,intent:"/assets/intents/3.png",name:"Mug"})),At=s(()=>({effect:`${t.v>=2?18:16} Damage`,intent:"/assets/intents/4.png",name:"Lunge"})),Mt=s(()=>({effect:`${t.v>=17?17:11} Block.`,intent:"/assets/intents/defend.png",name:"Smoke Bomb"})),Tt={effect:"Escape.",intent:"/assets/intents/escape.png",name:"Escape"},Bn=s(()=>({flowchart:`
    flowchart-elk LR
      A(${e(q).effect}<img src=${e(q).intent} class="h-10 object-contain" />)
      A2(${e(q).effect}<img src=${e(q).intent} class="h-10 object-contain" />)
      B(${e(At).effect}<img src=${e(At).intent} class="h-10 object-contain" />)
      C(${e(Mt).effect}<img src=${e(Mt).intent} class="h-10 object-contain" />)
      D(${Tt.effect}<img src=${Tt.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:"/assets/act2/monsters/mugger.webp",name:"Mugger",slug:"mugger"})),Dn=()=>e(Bn),Lt=s(()=>({effect:`${t.v>=2?7:6} x 2 Damage.`,intent:"/assets/intents/3.png",name:"Double Strike"})),Et=s(()=>({effect:`${t.v>=2?12:10} Lifesteal.`,intent:"/assets/intents/attackBuff.png",name:"Suck"})),Gt=s(()=>({effect:`${t.v>=2?21:18} Damage. 2 Frail.`,intent:"/assets/intents/attackDebuff.png",name:"Fell"})),Cn=s(()=>({flowchart:`
    flowchart-elk TB
      A(${e(Lt).effect}<img src=${e(Lt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
Turn 1: ${t.v>=17?"0%":"50%"}
40%</span>)
      B(${e(Et).effect}<img src=${e(Et).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
Turn 1: ${t.v>=17?"0%":"50%"}
40%</span>)
      C(${e(Gt).effect}<img src=${e(Gt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
Turn 1: ${t.v>=17?"100%":"0%"}
20%</span>)
      D(Stunned<img src='/assets/intents/stun.png' class="h-10 object-contain" /><span class="text-xs">Trigger: Platted Armor reduced to 0</span>)
  `,img:"/assets/act2/monsters/shelled-parasite.webp",name:"Shelled Parasite",slug:"shelled-parasite"})),Sn=()=>e(Cn),Rt=s(()=>({effect:`${t.v>=2?8:7} x 3 Damage.`,intent:"/assets/intents/5.png",name:"Chomp"})),yt={effect:"2 Frail. 2 Weak.",intent:"/assets/intents/debuff2.png",name:"Enfeebling Spores"},An=s(()=>({flowchart:`
    flowchart-elk TB
      A(${e(Rt).effect}<img src=${e(Rt).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
65%</span>)
      B(${yt.effect}<img src=${yt.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
35%</span>)
  `,img:"/assets/act2/monsters/snake-plant.webp",name:"Snake Plant",slug:"snake-plant"})),Mn=()=>e(An),Pt={effect:"Confuse.",intent:"/assets/intents/debuff2.png",name:"Perplexing Glare"},Ft=s(()=>({effect:`${t.v>=2?10:8} Damage. 2 Vulnerable${t.v>=17?" 2 Weak":""}.`,intent:"/assets/intents/attackDebuff.png",name:"Chomp"})),Ht=s(()=>({effect:`${t.v>=2?18:15} Damage.`,intent:"/assets/intents/4.png",name:"Bite"})),Tn=s(()=>({flowchart:`
    flowchart-elk TB
      A(${Pt.effect}<img src=${Pt.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%
0%</span>)
      B(${e(Ft).effect}<img src=${e(Ft).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${e(Ht).effect}<img src=${e(Ht).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
60%</span>)
  `,img:"/assets/act2/monsters/snecko.webp",name:"Snecko",slug:"snecko"})),Ln=()=>e(Tn),Wt=s(()=>({effect:`${t.v>=2?11:10} x 2 Damage.`,intent:"/assets/intents/5.png",name:"Slam"})),Ot=s(()=>({effect:`${t.v>=17?35:25} Block.`,intent:"/assets/intents/defend.png",name:"Activate"})),zt=s(()=>({effect:`${t.v>=2?11:10} Damage. 15 Block.`,intent:"/assets/intents/attackDefend.png",name:"Harden"})),Ut=s(()=>({effect:`${t.v>=2?11:10} Damage. 5 Frail.`,intent:"/assets/intents/attackDebuff.png",name:"Attack/Debuff"})),En=s(()=>({flowchart:`
    flowchart-elk LR
      A(${e(Wt).effect}<img src=${e(Wt).intent} class="h-10 object-contain" />)
      B(${e(Ot).effect}<img src=${e(Ot).intent} class="h-10 object-contain" />)
      C(${e(zt).effect}<img src=${e(zt).intent} class="h-10 object-contain" />)
      D(${e(Ut).effect}<img src=${e(Ut).intent} class="h-10 object-contain" />)
      B==>D==>A<==>C
  `,img:"/assets/act2/monsters/spheric-guardian.webp",name:"Spheric Guardian",slug:"spheric-guardian"})),Gn=()=>e(En),Nt={effect:"20 Damage.",intent:"/assets/intents/5.png",name:"Slash"},It={effect:"6 x 4 Damage.",intent:"/assets/intents/5.png",name:"Soul Strike"},Vt={effect:"Removes debuffs.",intent:"/assets/intents/unknown.png",name:"Rebirth"},Xt={effect:"40 Damage.",intent:"/assets/intents/7.png",name:"Dark Echo"},qt={effect:"18 Damage. 1 Void into draw.",intent:"/assets/intents/attackDebuff.png",name:"Sludge"},Jt={effect:"10 x 3 Damage.",intent:"/assets/intents/7.png",name:"Tackle"},Rn=s(()=>({flowchart:`
    flowchart-elk LR
      subgraph Unawakened [<img src=/assets/act3/bosses/awakened-one-unawakened.webp class="h-10 object-contain inline" />]
        direction LR
        A(${Nt.effect}<img src=${Nt.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
Turn 1: 100%
75%</span>)
        B(${It.effect}<img src=${It.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
Turn 1: 0%
25%</span>)
      end
      C(${Vt.effect}<img src=${Vt.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      A2(${Xt.effect}<img src=${Xt.intent} class="h-10 object-contain" />)
      C==>A2==>Awakened
      subgraph Awakened [<img src=/assets/act3/bosses/awakened-one-awakened.webp class="h-10 object-contain inline" />]
        direction LR
        B2(${qt.effect}<img src=${qt.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
        C2(${Jt.effect}<img src=${Jt.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
      end
  `,img:"/assets/act3/bosses/awakened-one-unawakened.webp",name:"Awakened One",slug:"awakened-one"})),yn=()=>e(Rn),Qt={effect:"Group 3 Strength.",intent:"/assets/intents/buff1.png",name:"Circle of Power"},Yt=s(()=>({effect:`${t.v>=4?12:10} x 2 Damage.`,intent:"/assets/intents/5.png",name:"Beam"})),Zt=s(()=>({effect:`Group 16 Block.${t.v>=19?" 3 Plated Armor.":""}`,intent:`/assets/intents/${t.v>=19?"defendBuff":"defend"}.png`,name:"Square Of Protection"})),Kt=s(()=>({effect:`${t.v>=4?12:10} x 2 Damage. 2 Dazed into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Beam"})),Pn=s(()=>({flowchart:`
    flowchart-elk LR
      subgraph Donu [<img src=/assets/act3/bosses/donu.webp class="h-10 object-contain inline" />]
        A(${Qt.effect}<img src=${Qt.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        B(${e(Yt).effect}<img src=${e(Yt).intent} class="h-10 object-contain" />)
        A<==>B
      end
      subgraph Deca [<img src=/assets/act3/bosses/deca.webp class="h-10 object-contain inline" />]
        A2(${e(Zt).effect}<img src=${e(Zt).intent} class="h-10 object-contain" />)
        B2(${e(Kt).effect}<img src=${e(Kt).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2<==>B2
      end
  `,img:"/assets/act3/bosses/donu-deca.webp",name:"Donu and Deca",slug:"donu-deca"})),Fn=()=>e(Pn),_t=s(()=>({effect:`${t.v>=4?8:7} x 3 Damage.`,intent:"/assets/intents/5.png",name:"Reverberate"})),es=s(()=>({effect:`${t.v>=4?32:26} Damage. 1 Draw Reduction.${t.v>=19?" 2 Slimed into discard.":""}`,intent:"/assets/intents/6.png",name:"Head Slam"})),ts=s(()=>({effect:`20 Block. 1 Vulnerable. 1 Weak.${t.v>=19?" 1 Frail.":""}`,intent:"/assets/intents/defendDebuff.png",name:"Ripple"})),ss=s(()=>({effect:`Heals to 50% HP. Removes debuffs.${t.v>=19?" 32 Block. ":""}`,intent:"/assets/intents/buff1.png",name:"Haste"})),Hn=s(()=>({flowchart:`
    flowchart-elk TB
      A(${e(_t).effect}<img src=${e(_t).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
45%</span>)
      B(${e(es).effect}<img src=${e(es).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
35%</span>)
      C(${e(ts).effect}<img src=${e(ts).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
20%</span>)
      D(${e(ss).effect}<img src=${e(ss).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
Trigger: Below 50% HP.</span>)
  `,img:"/assets/act3/bosses/time-eater.webp",name:"Time Eater",slug:"time-eater"})),Wn=()=>e(Hn),ns={effect:"13 Damage.",intent:"/assets/intents/3.png",name:"Count"},as={effect:"1 Weak.",intent:"/assets/intents/debuff1.png",name:"Glare"},cs=s(()=>({effect:`${t.v>=3?40:30} + T Damage. T starts at 0 and increases by 5 every time the attack is used, up to 30 additional Damage.`,intent:"/assets/intents/7.png",name:"It Is Time"})),On=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turns [Turns 1-${t.v>=18?3:4}]
        A(${ns.effect}<img src=${ns.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
        B(${as.effect}<img src=${as.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
      end
      subgraph Turns+ [Turn ${t.v>=18?4:5}+]
        C(${e(cs).effect}<img src=${e(cs).intent} class="h-10 object-contain" />)
      end
  `,img:"/assets/act3/elites/giant-head.webp",name:"Giant Head",slug:"giant-head"})),zn=()=>e(On),J=s(()=>({effect:`${t.v>=18?5:3} Burn into discard.`,intent:"/assets/intents/debuff1.png",name:"Debuff"})),Q=s(()=>({effect:`${t.v>=3?7:6} x 3 Damage.`,intent:"/assets/intents/4.png",name:"Attack"})),$e={effect:"45 Damage.",intent:"/assets/intents/7.png",name:"Scythe"},Un=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Moves
        A(${e(J).effect}<img src=${e(J).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
        B(${e(Q).effect}<img src=${e(Q).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2</span>)
        C(${$e.effect}<img src=${$e.intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      end
      subgraph Turn1 [Turn 1]
        A1(<img src=${e(J).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B1(<img src=${e(Q).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Turn+ [Turn 2+]
        A2(<img src=${e(J).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        B2(<img src=${e(Q).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        C2(<img src=${$e.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      Turn1~~~Moves
      Turn+~~~Moves
  `,img:"/assets/act3/elites/nemesis.webp",name:"Nemesis",slug:"nemesis"})),Nn=()=>e(Un),be=s(()=>({effect:`Spawns ${t.v>=18?2:"a"} Dagger.`,intent:"/assets/intents/unknown.png",name:"Summon"})),Y=s(()=>({effect:`${t.v>=3?16:13} x 2 Damage. 1 Weak.`,intent:"/assets/intents/attackDebuff.png",name:"Snake Strike"})),Z=s(()=>({effect:`${t.v>=3?34:30} Damage.`,intent:"/assets/intents/7.png",name:"Big Bite"})),is={effect:"9 Damage. 1 Wound into discard.",intent:"/assets/intents/attackDebuff.png",name:"Stab"},os={effect:"25 Damage. Dies.",intent:"/assets/intents/6.png",name:"Explode"},In=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Reptomancer [<img src=/assets/act3/elites/reptomancer.webp class="h-10 object-contain inline" />]
        subgraph Moves
          A(${e(be).effect}<img src=${e(be).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2</span>)
          B(${e(Y).effect}<img src=${e(Y).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
          C(${e(Z).effect}<img src=${e(Z).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
        end
        subgraph 1-3Daggers [1-3 Daggers]
          A1(<img src=${e(be).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          B1(<img src=${e(Y).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          C1(<img src=${e(Z).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
        subgraph 4Daggers [4 Daggers]
          B2(<img src=${e(Y).intent} class="h-10 object-contain" /><span class="text-xs">67%</span>)
          C2(<img src=${e(Z).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
        1-3Daggers~~~Moves
        4Daggers~~~Moves
      end
      subgraph Dagger [<img src=/assets/act3/elites/dagger.webp class="h-10 object-contain inline" />]
        D(${is.effect}<img src=${is.intent} class="h-10 object-contain" />)
        E(${os.effect}<img src=${os.intent} class="h-10 object-contain" />)
        D==>E
      end
  `,img:"/assets/act3/elites/reptomancer.webp",name:"Reptomancer",slug:"reptomancer"})),Vn=()=>e(In),K=s(()=>({effect:`${t.v>=2?"D + 2":"D"} Damage. D is chosen between 7 and 11 at the beginning of the battle.`,intent:"/assets/intents/2.png",name:"Nip"})),he=s(()=>({effect:`${t.v>=2?9:8} x 2 Damage.`,intent:"/assets/intents/4.png",name:"Chomp"})),_=s(()=>({effect:`12 Block.${t.v>=17?" 2 Strength.":""}`,intent:`/assets/intents/${t.v>=17?"defendBuff":"defend"}.png`,name:"Harden"})),fs={effect:"Revives with 50% HP.",intent:"/assets/intents/buff1.png",name:"Reincarnate"},rs={effect:"Nothing.",intent:"/assets/intents/unknown.png",name:"Regrow"},Xn=s(()=>({flowchart:`
    flowchart-elk TB
      D(${fs.effect}<img src=${fs.intent} class="h-10 object-contain" />)
      E(${rs.effect}<img src=${rs.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      E==>D
      subgraph Middle [Middle Darkling / Outer Darklings Turn 1]
        A1(<img src=${e(K).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C1(<img src=${e(_).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Outer [Outer Darklings Turn 2+]
        A2(<img src=${e(K).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
        B2(<img src=${e(he).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
        C2(<img src=${e(_).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      subgraph Moves
        A(${e(K).effect}<img src=${e(K).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2</span>)
        B(${e(he).effect}<img src=${e(he).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
        C(${e(_).effect}<img src=${e(_).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1</span>)
      end
      Middle~~~Moves
      Outer~~~Moves
  `,img:"/assets/act3/monsters/darkling.webp",name:"Darkling",slug:"darkling"})),qn=()=>e(Xn),ls=s(()=>({effect:`${t.v>=2?11:10} Damage. 1 Burn into draw. 1 Burn into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Laser"})),gs=s(()=>({effect:`${t.v>=2?16:15} Damage.`,intent:"/assets/intents/4.png",name:"Claw"})),Jn=s(()=>({flowchart:`
    flowchart-elk TB
      A(${e(ls).effect}<img src=${e(ls).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
60%</span>)
      B(${e(gs).effect}<img src=${e(gs).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
40%</span>)
  `,img:"/assets/act3/monsters/orb-walker.webp",name:"Orb Walker",slug:"orb-walker"})),Qn=()=>e(Jn),ms=s(()=>({effect:`${t.v>=2?9:7} Damage.`,intent:"/assets/intents/2.png",name:"Cut"})),ps={effect:"2 Thorns.",intent:"/assets/intents/buff1.png",name:"Spike"},ee=s(()=>({effect:`${t.v>=2?11:9} Damage.`,intent:"/assets/intents/2.png",name:"Slam"})),$s={effect:"30 Damage. Dies.",intent:"/assets/intents/unknown.png",name:"Explode"},bs=s(()=>({effect:`${t.v>=2?13:11} Damage.`,intent:"/assets/intents/3.png",name:"Bash"})),hs={effect:"2 Dazed into draw.",intent:"/assets/intents/debuff1.png",name:"Repulse"},Yn=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Spiker [<img src=/assets/act3/monsters/spiker.webp class="h-10 object-contain inline" />]
        A(${e(ms).effect}<img src=${e(ms).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
40%</span>)
        B(${ps.effect}<img src=${ps.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 6
50%</span>)
      end
      subgraph Exploder [<img src=/assets/act3/monsters/exploder.webp class="h-10 object-contain inline" />]
        A2(${e(ee).effect}<img src=${e(ee).intent} class="h-10 object-contain" />)
        A3(${e(ee).effect}<img src=${e(ee).intent} class="h-10 object-contain" />)
        B2(${$s.effect}<img src=${$s.intent} class="h-10 object-contain" />)
        A2==>A3==>B2
      end
      subgraph Repulsor [<img src=/assets/act3/monsters/repulsor.webp class="h-10 object-contain inline" />]
        A4(${e(bs).effect}<img src=${e(bs).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
20%</span>)
        B3(${hs.effect}<img src=${hs.intent} class="h-10 object-contain" /><span class="text-xs">80%</span>)
      end
  `,img:"/assets/act3/monsters/shapes.webp",name:"Shapes",slug:"shapes"})),Zn=()=>e(Yn),p=s(()=>({effect:`${t.v>=2?18:16} Damage.`,intent:"/assets/intents/4.png",name:"Quick Tackle"})),te=s(()=>({effect:`${t.v>=2?25:22} Damage.`,intent:"/assets/intents/5.png",name:"Smash"})),$=s(()=>({effect:`${t.v>=17?12:10} Constricted.`,intent:"/assets/intents/debuff2.png",name:"Constrict"})),Kn=s(()=>({flowchart:t.v>=17?`
    flowchart-elk TB
      subgraph notC [Not Constricted]
        C(${e($).effect}<img src=${e($).intent} class="h-10 object-contain" />)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${e($).intent} class="h-10 object-contain inline" />]
        A2(${e(p).effect}<img src=${e(p).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
        B(${e(te).effect}<img src=${e(te).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
      end
      C==>isC
  `:`
    flowchart-elk TB
      subgraph notC [Not Constricted]
        A(${e(p).effect}<img src=${e(p).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
        C(${e($).effect}<img src=${e($).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${e($).intent} class="h-10 object-contain inline" />]
        A2(${e(p).effect}<img src=${e(p).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
        B(${e(te).effect}<img src=${e(te).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 2
50%</span>)
      end
      C==>isC
  `,img:"/assets/act3/monsters/spire-growth.webp",name:"Spire Growth",slug:"spire-growth"})),_n=()=>e(Kn),us=s(()=>({effect:`${t.v>=17?5:3} Weak. ${t.v>=17?5:3} Frail.`,intent:"/assets/intents/debuff2.png",name:"Roar"})),xs=s(()=>({effect:`${t.v>=17?5:3} Strength.`,intent:"/assets/intents/buff1.png",name:"Drool"})),ds=s(()=>({effect:`${t.v>=2?30:25} Damage.`,intent:"/assets/intents/6.png",name:"Slam"})),se={effect:"5 x T Damage. T = Turn Number / 2, rounded up.",intent:"/assets/intents/2.png",name:"Nom"},ea=s(()=>({flowchart:`
    flowchart-elk LR
      A(${e(us).effect}<img src=${e(us).intent} class="h-10 object-contain" />)
      A==>afterDebuff
      subgraph afterDebuff [After Debuff]
        C(${e(ds).effect}<img src=${e(ds).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D(${se.effect}<img src=${se.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph afterSlam [After Slam]
        B(${e(xs).effect}<img src=${e(xs).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D2(${se.effect}<img src=${se.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      D2==>B
      B==>afterDebuff
      D==>B
      C==>afterSlam
  `,img:"/assets/act3/monsters/the-maw.webp",name:"The Maw",slug:"the-maw"})),ta=()=>e(ea),vs=s(()=>({effect:`${t.v>=2?40:30} + X*10 Damage. X = Turn - 1`,intent:"/assets/intents/7.png",name:"Attack"})),sa=s(()=>({flowchart:`
    flowchart-elk LR
      A(${e(vs).effect}<img src=${e(vs).intent} class="h-10 object-contain" />)
  `,img:"/assets/act3/monsters/transient.webp",name:"Transient",slug:"transient"})),na=()=>e(sa),js={effect:"1 Parasite into deck. Only affects future combats.",intent:"/assets/intents/debuff2.png",name:"Implant"},ne=s(()=>({effect:`${t.v>=2?16:15} Damage. ${t.v>=2?18:16} Block.`,intent:"/assets/intents/attackDefend.png",name:"Flail"})),ae=s(()=>({effect:`${t.v>=2?12:10} Damage. 2 Weak. 2 Vulnerable.`,intent:"/assets/intents/attackDebuff.png",name:"Wither"})),ce=s(()=>({effect:`${t.v>=2?9:7} x 3 Damage.`,intent:"/assets/intents/5.png",name:"Multi-Strike"})),ie=s(()=>({effect:`${t.v>=2?38:32} Damage.`,intent:"/assets/intents/7.png",name:"Strong Strike"})),aa=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turn1 [Turn 1]
        B(${e(ne).effect}<img src=${e(ne).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25%</span>)
        C(${e(ae).effect}<img src=${e(ae).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25%</span>)
        D(${e(ce).effect}<img src=${e(ce).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25%</span>)
        E(${e(ie).effect}<img src=${e(ie).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
25%</span>)
      end
      subgraph Turn2+ [Turn 2+]
        A(${js.effect}<img src=${js.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
10%</span>)
        B2(${e(ne).effect}<img src=${e(ne).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
30%</span>)
        C2(${e(ae).effect}<img src=${e(ae).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
20%</span>)
        D2(${e(ce).effect}<img src=${e(ce).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
30%</span>)
        E2(${e(ie).effect}<img src=${e(ie).intent} class="h-10 object-contain" /><span class="text-xs">Max Consecutive: 1
10%</span>)
      end
  `,img:"/assets/act3/monsters/writhing-mass.webp",name:"Writhing Mass",slug:"writhing-mass"})),ca=()=>e(aa),ws={effect:"2 Vulnerable. 2 Weak. 2 Frail. Dazed, Slimed, Wound, Burn and Void into draw.",intent:"/assets/intents/debuff2.png",name:"Debilitate"},oe=s(()=>({effect:`2 x ${t.v>=4?15:12} Damage.`,intent:"/assets/intents/5.png",name:"Blood Shots"})),fe=s(()=>({effect:`${t.v>=4?45:40} Damage.`,intent:"/assets/intents/7.png",name:"Echo"})),ks={effect:"Removes Strength Down. 2 Strength and additional buff.",intent:"/assets/intents/buff1.png",name:"Buff"},ia=s(()=>({flowchart:`
    flowchart-elk LR
      A(${ws.effect}<img src=${ws.intent} class="h-10 object-contain" />)
      B(${e(oe).effect}<img src=${e(oe).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B2(${e(oe).effect}<img src=${e(oe).intent} class="h-10 object-contain" />)
      C(${e(fe).effect}<img src=${e(fe).intent} class="h-10 object-contain" />)
      C2(${e(fe).effect}<img src=${e(fe).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${ks.effect}<img src=${ks.intent} class="h-10 object-contain" /><span class="text-xs">1. Artifact 2
2. Beat of Death 1
3. Painful Stabs
4. 10 Strength
5+. 50 Strength</span>)
      A==>Loop
      subgraph Loop
      B==>C==>D
      C2==>B2==>D
      end
  `,img:"/assets/act4/bosses/corrupt-heart.webp",name:"Corrupt Heart",slug:"corrupt-heart"})),oa=()=>e(ia),re=s(()=>({effect:`${t.v>=3?14:12} Damage. If Player has 1+ orb slot, 50/50 -1 Focus or -1 Strength. Else, -1 Strength.`,intent:"/assets/intents/attackDebuff.png",name:"Bash"})),le={effect:"Group 30 Block.",intent:"/assets/intents/defend.png",name:"Fortify"},Bs=s(()=>({effect:`${t.v>=3?38:34} Damage. ${t.v>=18?"99 Block":"X Block. X = Damage Output"}.`,intent:"/assets/intents/attackDefend.png",name:"Smash"})),b=s(()=>({effect:`${t.v>=3?6:5} x 2 Damage. 2 Burns into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Burn Strike"})),ge={effect:"Group 2 Strength.",intent:"/assets/intents/buff1.png",name:"Piercer"},Ds=s(()=>({effect:`10 x ${t.v>=3?4:3} Damage.`,intent:"/assets/intents/7.png",name:"Skewer"})),fa=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Shield [<img src=/assets/act4/elites/spire-shield.webp class="h-10 object-contain inline" />]
        direction LR
        A(${e(re).effect}<img src=${e(re).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B(${le.effect}<img src=${le.intent} class="h-10 object-contain" />)
        A2(${e(re).effect}<img src=${e(re).intent} class="h-10 object-contain" />)
        B2(${le.effect}<img src=${le.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C(${e(Bs).effect}<img src=${e(Bs).intent} class="h-10 object-contain" />)
        subgraph Loop
          A==>B==>C
          B2==>A2==>C
        end
      end
      subgraph Spear [<img src=/assets/act4/elites/spire-spear.webp class="h-10 object-contain inline" />]
        direction LR
        A3(${e(b).effect}<img src=${e(b).intent} class="h-10 object-contain" />)
        A4(${e(b).effect}<img src=${e(b).intent} class="h-10 object-contain" />)
        A5(${e(b).effect}<img src=${e(b).intent} class="h-10 object-contain" />)
        B3(${ge.effect}<img src=${ge.intent} class="h-10 object-contain" />)
        B4(${ge.effect}<img src=${ge.intent} class="h-10 object-contain" />)
        C2(${e(Ds).effect}<img src=${e(Ds).intent} class="h-10 object-contain" />)
        A3==>Loop2
        subgraph Loop2 [Loop]
          C2== 50% ==>A4==>B3
          C2== 50% ==>B4==>A5
        end
      end
  `,img:"/assets/act4/elites/spire-shield-spear.webp",name:"Spire Shield and Spear",slug:"spire-shield-spear"})),ra=()=>e(fa),la=[Os,an,Is,Ys,en,Xs,Js,Ks,Us,sn],ga=[Rs,Ps,Hs],ma=[Es,As,Ts],pa=[dn,kn,Dn,Sn,Gn,jn,Mn,Ln],$a=[pn,bn,un],ba=[on,rn,gn],ha=[qn,Qn,Zn,ta,_n,na,ca],ua=[zn,Nn,Vn],xa=[yn,Fn,Wn],da=[ra],va=[oa],a=Cs=>new Map(Cs.map(ue=>[ue().slug,ue])),ja=a(la),wa=a(ga),ka=a(ma),Ba=a(pa),Da=a($a),Ca=a(ba),Sa=a(ha),Aa=a(ua),Ma=a(xa),Ta=a(da),La=a(va),Ra=new Map([...ja,...wa,...ka,...Ba,...Da,...Ca,...Sa,...Aa,...Ma,...Ta,...La]);export{ma as a,ga as b,la as c,ba as d,$a as e,pa as f,xa as g,ua as h,ha as i,va as j,da as k,Ra as l};
