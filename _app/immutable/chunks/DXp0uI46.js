import{i as t,k as s}from"./p3HBQUDF.js";import{a as n}from"./6d_3YSWG.js";import{b as e}from"./B-rARGAa.js";const kt={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Activate"},Bt={effect:"H x 6 Damage. H = Player HP / 12 + 1, rounded down.",intent:`${e}/assets/intents/7.png`,name:"Divider"},vt=s(()=>({effect:`${n.v>=4?3:2} x 6 Damage. Upgrades all Burn. 3 Burn+ into discard.`,intent:`${e}/assets/intents/3.png`,name:"Inferno"})),l=s(()=>({effect:`6 Damage. ${n.v>=19?2:1} Burn into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Sear"})),d=s(()=>({effect:`${n.v>=4?6:5} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Tackle"})),Dt=s(()=>({effect:`${n.v>=19?3:2} Strength. 12 Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Inflame"})),Rn=s(()=>({flowchart:`
    flowchart LR
      A(${kt.effect}<img src=${kt.intent} class="h-10 object-contain" />)
      B(${Bt.effect}<img src=${Bt.intent} class="h-10 object-contain" />)
      C(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
      C2(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
      C3(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
      D(${t(d).effect}<img src=${t(d).intent} class="h-10 object-contain" />)
      D2(${t(d).effect}<img src=${t(d).intent} class="h-10 object-contain" />)
      E(${t(Dt).effect}<img src=${t(Dt).intent} class="h-10 object-contain" />)
      F(${t(vt).effect}<img src=${t(vt).intent} class="h-10 object-contain" />)
      A==>B
      B==>C
      C==>D
      D==>C2
      C2==>E
      E==>D2
      D2==>C3
      C3==>F
      F== Gives Burn+ instead of Burn ==>B
  `,img:`${e}/assets/act1/bosses/hexaghost.webp`,name:"Hexaghost",slug:"hexaghost"})),Cn=()=>t(Rn),St=s(()=>({effect:`${n.v>=19?5:3} Slimed into discard.`,intent:`${e}/assets/intents/debuff2.png`,name:"Goop Spray"})),At={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Preparing"},Mt=s(()=>({effect:`${n.v>=4?38:35} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Slam"})),Rt={effect:"Spawns Acid Slime L and Spike Slime L with current HP. Dies.",intent:`${e}/assets/intents/unknown.png`,name:"Split"},Tn=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(St).effect}<img src=${t(St).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${At.effect}<img src=${At.intent} class="h-10 object-contain" />)
      C(${t(Mt).effect}<img src=${t(Mt).intent} class="h-10 object-contain" />)
      D(${Rt.effect}<img src=${Rt.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
    A==>B
    B==>C
    C==>A
  `,img:`${e}/assets/act1/bosses/slime-boss.webp`,name:"Slime Boss",slug:"slime-boss"})),In=()=>t(Tn),Ct={effect:"9 Block",intent:`${e}/assets/intents/defend.png`,name:"Charging Up"},Tt=s(()=>({effect:`${n.v>=4?36:32} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Fierce Bash"})),It={effect:"2 Weak. 2 Vulnerable",intent:`${e}/assets/intents/debuff2.png`,name:"Charging Up"},Et={effect:"5 x 4 Damage.",intent:`${e}/assets/intents/5.png`,name:"Whirlwind"},Lt=s(()=>({effect:`${n.v>=19?4:3} Sharp Hide.`,intent:`${e}/assets/intents/buff1.png`,name:"Defensive Mode"})),Gt=s(()=>({effect:`${n.v>=4?10:9} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Roll Attack"})),yt={effect:"8 x 2 Damage. Removes Sharp Hide. Enters Offensive mode.",intent:`${e}/assets/intents/attackBuff.png`,name:"Twin Slam"},En=s(()=>({flowchart:`
    flowchart-elk LR
      A(${Ct.effect}<img src=${Ct.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${t(Tt).effect}<img src=${t(Tt).intent} class="h-10 object-contain" />)
      C(${It.effect}<img src=${It.intent} class="h-10 object-contain" />)
      D(${Et.effect}<img src=${Et.intent} class="h-10 object-contain" />)
      E(${t(Lt).effect}<img src=${t(Lt).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      F(${t(Gt).effect}<img src=${t(Gt).intent} class="h-10 object-contain" />)
      G(${yt.effect}<img src=${yt.intent} class="h-10 object-contain" />)
      subgraph Offensive [<img src=${e}/assets/act1/bosses/the-guardian-offensive.webp class="h-10 object-contain inline" />]
        direction LR
        A==>B==>C==>D==>A
      end
      subgraph Defensive [<img src=${e}/assets/act1/bosses/the-guardian-defensive.webp class="h-10 object-contain inline" />]
        direction LR
        E==>F==>G==>E
      end 
  `,img:`${e}/assets/act1/bosses/the-guardian-offensive.webp`,name:"The Guardian",slug:"the-guardian"})),Ln=()=>t(En),w=s(()=>({effect:`${n.v>=18?3:2} Enrage.`,intent:`${e}/assets/intents/buff1.png`,name:"Bellow"})),g=s(()=>({effect:`${n.v>=3?16:14} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Rush"})),j=s(()=>({effect:`${n.v>=3?8:6} Damage. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Skull Bash"})),Gn=s(()=>({flowchart:n.v>=18?`
    flowchart-elk LR
      A(${t(w).effect}<img src=${t(w).intent} class="h-10 object-contain" />)
      B(${t(g).effect}<img src=${t(g).intent} class="h-10 object-contain" />)
      B2(${t(g).effect}<img src=${t(g).intent} class="h-10 object-contain" />)
      C(${t(j).effect}<img src=${t(j).intent} class="h-10 object-contain" />)
    A==>C
    C==>B
    B==>B2
    B2==>A
  `:`
    flowchart-elk LR
      A(${t(w).effect}<img src=${t(w).intent} class="h-10 object-contain" />)
      B(${t(g).effect}<img src=${t(g).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
67%</span>)
      C(${t(j).effect}<img src=${t(j).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
      A==>Turn2+
      subgraph Turn2+ [Turn 2+]
        direction LR
        B
        C
      end
  `,img:`${e}/assets/act1/elites/gremlin-nob.webp`,name:"Gremlin Nob",slug:"gremlin-nob"})),yn=()=>t(Gn),k=s(()=>({effect:`${n.v>=3?20:18} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Attack"})),Pt=s(()=>({effect:` -${n.v>=18?2:1} Dexterity. -${n.v>=18?2:1} Strength.`,intent:`${e}/assets/intents/debuff2.png`,name:"Siphon Soul"})),Pn=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(k).effect}<img src=${t(k).intent} class="h-10 object-contain" />)
      A2(${t(k).effect}<img src=${t(k).intent} class="h-10 object-contain" />)
      B(${t(Pt).effect}<img src=${t(Pt).intent} class="h-10 object-contain" />)
      A==>A2
      A2==>B
      B==>A
  `,img:`${e}/assets/act1/elites/lagavulin.webp`,name:"Lagavulin",slug:"lagavulin"})),Fn=()=>t(Pn),Ft=s(()=>({effect:`${n.v>=3?10:9} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Beam"})),Ht=s(()=>({effect:`${n.v>=18?3:2} Dazed into discard.`,intent:`${e}/assets/intents/debuff1.png`,name:"Bolt"})),Hn=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Ft).effect}<img src=${t(Ft).intent} class="h-10 object-contain" />)
      B(${t(Ht).effect}<img src=${t(Ht).intent} class="h-10 object-contain" />)
      A<==>B
  `,img:`${e}/assets/act1/elites/sentry.webp`,name:"Sentry",slug:"sentry"})),Wn=()=>t(Hn),Wt=s(()=>({effect:`${n.v>=2?12:11} Damage. 2 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Corrosive Spit"})),Ot=s(()=>({effect:"2 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),zt=s(()=>({effect:`${n.v>=2?18:16} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Tackle"})),Nt={effect:"Spawns 2 Acid Slime M with current HP. Dies.",intent:`${e}/assets/intents/unknown.png`,name:"Split"},Ut=s(()=>({effect:`${n.v>=2?8:7} Damage. 1 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Corrosive Spit"})),Vt=s(()=>({effect:"1 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),Xt=s(()=>({effect:`${n.v>=2?12:10} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Tackle"})),qt=s(()=>({effect:"1 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),Jt=s(()=>({effect:`${n.v>=2?4:3} Damage.`,intent:`${e}/assets/intents/1.png`,name:"Tackle"})),On=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=${e}/assets/act1/monsters/acid-slime-l.webp class="h-10 object-contain inline" />]
        A(${t(Wt).effect}<img src=${t(Wt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
${n.v>=17?"40%":"30%"}</span>)
        B(${t(Ot).effect}<img src=${t(Ot).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
30%</span>)
        C(${t(zt).effect}<img src=${t(zt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?2:1}
${n.v>=17?"30%":"40%"}</span>)
        D(${Nt.effect}<img src=${Nt.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
      end
      subgraph Medium [<img src=${e}/assets/act1/monsters/acid-slime-m.webp class="h-10 object-contain inline" />]
        A2(${t(Ut).effect}<img src=${t(Ut).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
${n.v>=17?"40%":"30%"}</span>)
        B2(${t(Vt).effect}<img src=${t(Vt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
30%</span>)
        C2(${t(Xt).effect}<img src=${t(Xt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?2:1}
${n.v>=17?"30%":"40%"}</span>)
      end
      subgraph Small [<img src=${e}/assets/act1/monsters/acid-slime-s.webp class="h-10 object-contain inline" />]
        A3(${t(qt).effect}<img src=${t(qt).intent} class="h-10 object-contain" /><span class="text-xs">${n.v>=17?"Turn 1: 100%":"Turn 1: 50%"}</span>)
        B3(${t(Jt).effect}<img src=${t(Jt).intent} class="h-10 object-contain" /><span class="text-xs">${n.v>=17?"":"Turn 1: 50%"}</span>)
        A3<==>B3
      end
  `,img:`${e}/assets/act1/monsters/acid-slimes.webp`,name:"Acid Slimes",slug:"acid-slimes"})),zn=()=>t(On),Qt=s(()=>({effect:`${n.v>=2?13:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Stab"})),Yt=s(()=>({effect:`${n.v>=2?8:7} Damage. ${n.v>=17?2:1} Weak.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Rake"})),Nn=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(Qt).effect}<img src=${t(Qt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(Yt).effect}<img src=${t(Yt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
40%</span>)
  `,img:`${e}/assets/act1/monsters/blue-slaver.webp`,name:"Blue Slaver",slug:"blue-slaver"})),Un=()=>t(Nn),Zt=s(()=>({effect:`${n.v>=2?n.v>=17?5:4:3} Ritual.`,intent:`${e}/assets/intents/buff1.png`,name:"Incantation"})),Kt={effect:"6 Damage.",intent:`${e}/assets/intents/2.png`,name:"Dark Strike"},Vn=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Zt).effect}<img src=${t(Zt).intent} class="h-10 object-contain" />)
      B(${Kt.effect}<img src=${Kt.intent} class="h-10 object-contain" />)
      A==>B
      B==>B
  `,img:`${e}/assets/act1/monsters/cultist.webp`,name:"Cultist",slug:"cultist"})),Xn=()=>t(Vn),_t={effect:"6 Damage.",intent:`${e}/assets/intents/2.png`,name:"Bite"},te=s(()=>({effect:`${n.v>=2?n.v>=17?5:4:3} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Grow"})),qn=s(()=>({flowchart:`
    flowchart-elk TB
      A(${_t.effect}<img src=${_t.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(te).effect}<img src=${t(te).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
40%</span>)
  `,img:`${e}/assets/act1/monsters/fungi-beast.webp`,name:"Fungi Beast",slug:"fungi-beast"})),Jn=()=>t(qn),i={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Charging"},B=s(()=>({effect:`${n.v>=2?30:25} Damage.`,intent:`${e}/assets/intents/6.png`,name:"Ultimate Blast"})),v=s(()=>({effect:`${n.v>=2?5:4} Damage.`,intent:`${e}/assets/intents/1.png`,name:"Scratch"})),D=s(()=>({effect:`${n.v>=2?5:4} Damage. 1 Weak.${n.v>=17?" 1 Frail":""}.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Smash"})),S=s(()=>({effect:`Ally ${n.v>=2?n.v>=17?11:8:7} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Protect"})),A=s(()=>({effect:`${n.v>=2?8:6} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Shield Bash"})),M=s(()=>({effect:`${n.v>=2?10:9} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Puncture"})),Qn=s(()=>({flowchart:n.v>=17?`
    flowchart-elk TB
      subgraph Wizard [<img src=${e}/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${i.effect}<img src=${i.intent} class="h-10 object-contain" />)
        A2(${i.effect}<img src=${i.intent} class="h-10 object-contain" />)
        B(${t(B).effect}<img src=${t(B).intent} class="h-10 object-contain" />)
        A==>A2==>B==>B
      end
      subgraph Mad [<img src=${e}/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A3(${t(v).effect}<img src=${t(v).intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=${e}/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A4(${t(D).effect}<img src=${t(D).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=${e}/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A5(${t(S).effect}<img src=${t(S).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B5(${t(A).effect}<img src=${t(A).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=${e}/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A6(${t(M).effect}<img src=${t(M).intent} class="h-10 object-contain" />)
      end
  `:`
    flowchart-elk TB
      subgraph Wizard [<img src=${e}/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${i.effect}<img src=${i.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2(${i.effect}<img src=${i.intent} class="h-10 object-contain" />)
        A3(${i.effect}<img src=${i.intent} class="h-10 object-contain" />)
        B(${t(B).effect}<img src=${t(B).intent} class="h-10 object-contain" />)
        A==>A2==>B==>A3==>A
      end
      subgraph Mad [<img src=${e}/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A4(${t(v).effect}<img src=${t(v).intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=${e}/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A5(${t(D).effect}<img src=${t(D).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=${e}/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A6(${t(S).effect}<img src=${t(S).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B6(${t(A).effect}<img src=${t(A).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=${e}/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A7(${t(M).effect}<img src=${t(M).intent} class="h-10 object-contain" />)
      end
  `,img:`${e}/assets/act1/monsters/gremlins.webp`,name:"Gremlins",slug:"gremlins"})),Yn=()=>t(Qn),ee=s(()=>({effect:`${n.v>=2?12:11} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Chomp"})),ne={effect:"7 Damage. 5 Block.",intent:`${e}/assets/intents/attackDefend.png`,name:"Thrash"},se=s(()=>({effect:`${n.v>=2?n.v>=17?5:4:3} Strength. ${n.v>=17?9:6} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Bellow"})),Zn=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(ee).effect}<img src=${t(ee).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Act 1, Turn 1: 100%
25%</span>)
      B(${ne.effect}<img src=${ne.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
      C(${t(se).effect}<img src=${t(se).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
  `,img:`${e}/assets/act1/monsters/jaw-worm.webp`,name:"Jaw Worm",slug:"jaw-worm"})),Kn=()=>t(Zn),R=s(()=>({effect:`${n.v>=2?11:10} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Mug"})),ae=s(()=>({effect:`${n.v>=2?14:12} Damage`,intent:`${e}/assets/intents/3.png`,name:"Lunge"})),ce={effect:"6 Block.",intent:`${e}/assets/intents/defend.png`,name:"Smoke Bomb"},ie={effect:"Escape.",intent:`${e}/assets/intents/escape.png`,name:"Escape"},_n=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(R).effect}<img src=${t(R).intent} class="h-10 object-contain" />)
      A2(${t(R).effect}<img src=${t(R).intent} class="h-10 object-contain" />)
      B(${t(ae).effect}<img src=${t(ae).intent} class="h-10 object-contain" />)
      C(${ce.effect}<img src=${ce.intent} class="h-10 object-contain" />)
      D(${ie.effect}<img src=${ie.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:`${e}/assets/act1/monsters/looter.webp`,name:"Looter",slug:"looter"})),ts=()=>t(_n),C=s(()=>({effect:`${n.v>=2?"D+1":"D"} Damage. D is chosen between 5 and 7 at the beginning of the battle.`,intent:`${e}/assets/intents/2.png`,name:"Bite"})),oe=s(()=>({effect:`${n.v>=17?4:3} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Grow"})),re={effect:"2 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Spit Web"},es=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Red [<img src=${e}/assets/act1/monsters/red-louse.webp class="h-10 object-contain inline" />]
        A(${t(C).effect}<img src=${t(C).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
75%</span>)
        B(${t(oe).effect}<img src=${t(oe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
25%</span>)
      end
      subgraph Green [<img src=${e}/assets/act1/monsters/green-louse.webp class="h-10 object-contain inline" />]
        A2(${t(C).effect}<img src=${t(C).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
75%</span>)
        B2(${re.effect}<img src=${re.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
25%</span>)
      end
  `,img:`${e}/assets/act1/monsters/louses.webp`,name:"Louses",slug:"louses"})),ns=()=>t(es),a=s(()=>({effect:`${n.v>=2?14:13} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Stab"})),o=s(()=>({effect:`${n.v>=2?9:8} Damage. ${n.v>=17?2:1} Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Scrape"})),T={effect:"1 Entangled.",intent:`${e}/assets/intents/debuff2.png`,name:"Entangle"},ss=s(()=>({flowchart:n.v>=17?`
    flowchart-elk LR
      A(${t(a).effect}<img src=${t(a).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
      A2(${t(a).effect}<img src=${t(a).intent} class="h-10 object-contain" />)
      B(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      C(${T.effect}<img src=${T.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      A3(${t(a).effect}<img src=${t(a).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
      B2(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
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
      A(${t(a).effect}<img src=${t(a).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
      A2(${t(a).effect}<img src=${t(a).intent} class="h-10 object-contain" />)
      B(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      B2(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      C(${T.effect}<img src=${T.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      A3(${t(a).effect}<img src=${t(a).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
      B3(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
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
  `,img:`${e}/assets/act1/monsters/red-slaver.webp`,name:"Red Slaver",slug:"red-slaver"})),as=()=>t(ss),fe=s(()=>({effect:`${n.v>=2?18:16} Damage. 2 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Flame Tackle"})),le=s(()=>({effect:`${n.v>=17?3:2} Frail.`,intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),ge={effect:"Spawns 2 Spike Slime M with current HP. Dies",intent:`${e}/assets/intents/unknown.png`,name:"Split"},$e=s(()=>({effect:`${n.v>=2?10:8} Damage. 1 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Flame Tackle"})),me=s(()=>({effect:"1 Frail.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),pe=s(()=>({effect:`${n.v>=2?6:5} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Tackle"})),cs=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=${e}/assets/act1/monsters/spike-slime-l.webp class="h-10 object-contain inline" />]
        A(${t(fe).effect}<img src=${t(fe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
        B(${t(le).effect}<img src=${t(le).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
70%</span>)
        C(${ge.effect}<img src=${ge.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower</span>)
      end
      subgraph Medium [<img src=${e}/assets/act1/monsters/spike-slime-m.webp class="h-10 object-contain inline" />]
        A2(${t($e).effect}<img src=${t($e).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
        B2(${t(me).effect}<img src=${t(me).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
70%</span>)
      end
      subgraph Small [<img src=${e}/assets/act1/monsters/spike-slime-s.webp class="h-10 object-contain inline" />]
        A3(${t(pe).effect}<img src=${t(pe).intent} class="h-10 object-contain" />)
      end
  `,img:`${e}/assets/act1/monsters/spike-slimes.webp`,name:"Spike Slimes",slug:"spike-slimes"})),is=()=>t(cs),I={effect:"Spawns 2 Bronze Orbs.",intent:`${e}/assets/intents/unknown.png`,name:"Spawn Orbs"},r=s(()=>({effect:`${n.v>=4?4:3} Strength. ${n.v>=9?12:9} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Boost"})),f=s(()=>({effect:`${n.v>=4?8:7} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Flail"})),E=s(()=>({effect:`${n.v>=4?50:45} Damage.`,intent:`${e}/assets/intents/7.png`,name:"HYPER BEAM"})),L={effect:"Steals the rarest card in the draw pile, or from the discard pile if the draw pile is empty.",intent:`${e}/assets/intents/debuff2.png`,name:"Stasis"},G={effect:"8 Damage.",intent:`${e}/assets/intents/2.png`,name:"Beam"},y={effect:`<img src=${e}/assets/act2/bosses/bronze-automaton.webp class='h-10 object-contain inline' /> 12 Block.`,intent:`${e}/assets/intents/defend.png`,name:"Support Beam"},os=s(()=>({flowchart:n.v>=19?`
    flowchart-elk TB
      A(${I.effect}<img src=${I.intent} class="h-10 object-contain" />)
      B(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
      B2(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
      B3(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
      C(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" />)
      C2(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" />)
      D(${t(E).effect}<img src=${t(E).intent} class="h-10 object-contain" />)
      subgraph Bronze [<img src=${e}/assets/act2/bosses/bronze-automaton.webp class="h-10 object-contain inline" />]
        direction LR
        A==>C==>B==>C2==>B2==>D==>B3==>C
      end
      subgraph Orb [<img src=${e}/assets/act2/bosses/bronze-orb.webp class="h-10 object-contain inline" />]
        E(${L.effect}<img src=${L.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        F(${G.effect}<img src=${G.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
7.5%
Card Stolen: 30%</span>)  
        G(${y.effect}<img src=${y.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
17.5%
Card Stolen: 70%</span>)  
      end
  `:`
    flowchart-elk TB
      A(${I.effect}<img src=${I.intent} class="h-10 object-contain" />)
      B(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
      B2(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
      C(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" />)
      C2(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" />)
      D(${t(E).effect}<img src=${t(E).intent} class="h-10 object-contain" />)  
      E(Stunned<img src='${e}/assets/intents/stun.png' class="h-10 object-contain" />)
      subgraph Bronze [<img src=${e}/assets/act2/bosses/bronze-automaton.webp class="h-10 object-contain inline" />]
        direction LR
        A==>C==>B==>C2==>B2==>D==>E==>C
      end
      subgraph Orb [<img src=${e}/assets/act2/bosses/bronze-orb.webp class="h-10 object-contain inline" />]
        F(${L.effect}<img src=${L.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        G(${G.effect}<img src=${G.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
7.5%
Card Stolen: 30%</span>)  
        H(${y.effect}<img src=${y.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
17.5%
Card Stolen: 70%</span>)  
      end
  `,img:`${e}/assets/act2/bosses/bronze-automaton.webp`,name:"Bronze Automaton",slug:"bronze-automaton"})),rs=()=>t(os),P=s(()=>({effect:`${n.v>=9?n.v>=19?20:18:15} Block. ${n.v>=9?n.v>=19?7:6:5} Metallicize.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Defensive Stance"})),F=s(()=>({effect:`${n.v>=4?14:12} Damage. 2 Frail. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Face Slap"})),H={effect:"2 Weak. 2 Vulnerable.",intent:`${e}/assets/intents/debuff1.png`,name:"Taunt"},W=s(()=>({effect:`${n.v>=4?18:16} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Heavy Slash"})),be=s(()=>({effect:`${n.v>=4?n.v>=19?4:3:2} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Gloat"})),O={effect:"10 x 2 Damage.",intent:`${e}/assets/intents/5.png`,name:"Execute"},z=s(()=>({effect:`Removes debuffs. ${n.v>=4?n.v>=19?12:9:6} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Anger"})),fs=s(()=>({flowchart:n.v>=19?`
    flowchart-elk TB
      subgraph Main [Main.
<span class="text-xs">Invalid moves, when rolled, use next instead.</span>]
        direction LR
        A(${t(P).effect}<img src=${t(P).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max In a Row: 1
${n.v>=19?"30%":"15%"}</span>)
        B(${t(F).effect}<img src=${t(F).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(W).effect}<img src=${t(W).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
        A==>B<==>D
      end
      subgraph Phase1 [Phase 1]
        subgraph Turn4 [Turn 4, 8, 12, etc.]
          C(${H.effect}<img src=${H.intent} class="h-10 object-contain" />)
        end
      end
      subgraph Phase2 [Phase 2]
        F(${O.effect}<img src=${O.intent} class="h-10 object-contain" />)
        G(${t(z).effect}<img src=${t(z).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Does NOT interupt current intent.</span>)
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `:`
    flowchart-elk TB
      subgraph Main [Main.
<span class="text-xs">Invalid moves, when rolled, use next instead.</span>]
        direction LR
        A(${t(P).effect}<img src=${t(P).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max In a Row: 1
${n.v>=19?"30%":"15%"}</span>)
        B(${t(F).effect}<img src=${t(F).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(W).effect}<img src=${t(W).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
        E(${t(be).effect}<img src=${t(be).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
15%</span>)
        A==>E==>B<==>D
      end
      subgraph Phase1 [Phase 1]
        subgraph Turn4 [Turn 4, 8, 12, etc.]
          C(${H.effect}<img src=${H.intent} class="h-10 object-contain" />)
        end
      end
      subgraph Phase2 [Phase 2]
        F(${O.effect}<img src=${O.intent} class="h-10 object-contain" />)
        G(${t(z).effect}<img src=${t(z).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Does NOT interupt current intent.</span>)
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `,img:`${e}/assets/act2/bosses/the-champ.webp`,name:"The Champ",slug:"the-champ"})),ls=()=>t(fs),N=s(()=>({effect:`Group ${n.v>=4?n.v>=19?5:4:3} Strength. ${n.v>=4?n.v>=19?23:18:15} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Buff"})),U=s(()=>({effect:`${n.v>=4?21:18} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Fireball"})),pt=s(()=>({effect:`${n.v>=19?5:3} Weak. ${n.v>=19?5:3} Vulnerable. ${n.v>=19?5:3} Frail.`,intent:`${e}/assets/intents/debuff2.png`,name:"Mega Debuff"})),bt={effect:"Spawns up to 2 Torch Heads.",intent:`${e}/assets/intents/unknown.png`,name:"Spawn"},he={effect:"7 Damage.",intent:`${e}/assets/intents/2.png`,name:"Tackle"},gs=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Head [<img src=${e}/assets/act2/bosses/torch-head.webp class="h-10 object-contain inline" />]
        E(${he.effect}<img src=${he.intent} class="h-10 object-contain" />)
      end
      subgraph Collector [<img src=${e}/assets/act2/bosses/the-collector.webp class="h-10 object-contain inline" />]
      subgraph 0-1Torch [0-1 Torch Heads]
          A(<img src=${t(N).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
          B(<img src=${t(U).intent} class="h-10 object-contain" /><span class="text-xs">45%</span>)
          D(<img src=${bt.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
        end
        subgraph 2Torch [2 Torch Heads]
          A2(<img src=${t(N).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
          B2(<img src=${t(U).intent} class="h-10 object-contain" /><span class="text-xs">70%</span>)
        end
        subgraph Turn4 [Turn 4]
          C(<img src=${t(pt).intent} class="h-10 object-contain" />)
        end
      end
  `,moves:`
    flowchart-elk TB
      A(${t(N).effect}<img src=${t(N).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${t(U).effect}<img src=${t(U).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      C(${t(pt).effect}<img src=${t(pt).intent} class="h-10 object-contain" />)
      D(${bt.effect}<img src=${bt.intent} class="h-10 object-contain" />)
  `,img:`${e}/assets/act2/bosses/the-collector.webp`,name:"The Collector",slug:"the-collector"})),$s=()=>t(gs),ht=s(()=>({effect:`${n.v>=3?7:6} x N Damage. N = 2 + ${n.v>=18?"Multi/Single Stabs":"Multi-Stabs"} used`,intent:`${e}/assets/intents/3.png`,name:"Multi-Stab"})),ut=s(()=>({effect:`${n.v>=3?24:21} Damage.`,intent:`${e}/assets/intents/5.png`,name:"Single Stab"})),ms=s(()=>({flowchart:`
    flowchart-elk TB
      A(*${t(ht).name}*
${t(ht).effect}<img src=${t(ht).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max In a Row: 2
85%</span>)
      B(*${t(ut).name}*
${t(ut).effect}<img src=${t(ut).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max In a Row: 1
15%</span>)
  `,img:`${e}/assets/act2/elites/book-of-stabbing.webp`,name:"Book of Stabbing",slug:"book-of-stabbing"})),ps=()=>t(ms),u=s(()=>({effect:`Group ${n.v>=3?n.v>=18?5:4:3} Strength. Group ${n.v>=18?10:6} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Encourage"})),x={effect:"Spawns 2 Gremlins.",intent:`${e}/assets/intents/unknown.png`,name:"Rally!"},$={effect:"6 x 3 Damage.",intent:`${e}/assets/intents/4.png`,name:"Stab"},bs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(u).effect}<img src=${t(u).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${x.effect}<img src=${x.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${$.effect}<img src=${$.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B0(<img src=${x.intent} class="h-10 object-contain" /><span class="text-xs">75%</span>)
      C0(<img src=${$.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
      A1(<img src=${t(u).intent} class="h-10 object-contain" /><span class="text-xs">37.5%</span>)
      B1a(<img src=${x.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B1b(<img src=${x.intent} class="h-10 object-contain" /><span class="text-xs">62.5%</span>)
      C1(<img src=${$.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      A2(<img src=${t(u).intent} class="h-10 object-contain" /><span class="text-xs">66%</span>)
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
        subgraph prevMoveEncourage [Previous Move <img src=${t(u).intent} class="h-10 object-contain inline" />]
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
  `,img:`${e}/assets/act2/elites/gremlin-leader.webp`,name:"Gremlin Leader",slug:"gremlin-leader"})),hs=()=>t(bs),ue=s(()=>({effect:`7 Damage. ${n.v>=3?n.v>=18?3:2:1} Wound into discard.${n.v>=18?" 1 Strength.":""}`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Scouring Whip"})),us=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(ue).effect}<img src=${t(ue).intent} class="h-10 object-contain" />)
  `,img:`${e}/assets/act2/elites/taskmaster.webp`,name:"Taskmaster",slug:"taskmaster"})),xs=()=>t(us),xe={effect:"1 Strength.",intent:`${e}/assets/intents/buff1.png`,name:"Caw"},de=s(()=>({effect:`1 x ${n.v>=2?6:5} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Peck"})),we=s(()=>({effect:`${n.v>=2?14:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Swoop"})),je=s(()=>({effect:`Flying ${n.v>=17?4:3}.`,intent:`${e}/assets/intents/unknown.png`,name:"Fly"})),ke={effect:"3 Damage",intent:`${e}/assets/intents/1.png`,name:"Headbutt"},ds=s(()=>({flowchart:`
    flowchart-elk TB
      A(${xe.effect}<img src=${xe.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 37.5%
30%</span>)
      B(${t(de).effect}<img src=${t(de).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: 62.5%
50%</span>)
      C(${t(we).effect}<img src=${t(we).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 0%
20%</span>)
      D(${t(je).effect}<img src=${t(je).intent} class="h-10 object-contain" />)
      E(${ke.effect}<img src=${ke.intent} class="h-10 object-contain" />)
      F(Stunned<img src='${e}/assets/intents/stun.png' class="h-10 object-contain" />)
      subgraph Grounded [<img src=${e}/assets/act2/monsters/byrd-grounded.webp class="h-10 object-contain inline" />]
        direction LR
        F==>E==>D
      end
      Grounded==>Flying
      subgraph Flying [<img src=${e}/assets/act2/monsters/byrd-flying.webp class="h-10 object-contain inline" />]
        A
        B
        C
      end
  `,img:`${e}/assets/act2/monsters/byrd-flying.webp`,name:"Byrd",slug:"byrd"})),ws=()=>t(ds),Be=s(()=>({effect:`${n.v>=2?14:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Slash"})),ve=s(()=>({effect:`${n.v>=2?7:6} x 3 Damage.`,intent:`${e}/assets/intents/4.png`,name:"Fury"})),De=s(()=>({effect:`Ally ${n.v>=17?20:15} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Defend"})),Se=s(()=>({effect:`Group ${n.v>=17?20:16} Heal.`,intent:`${e}/assets/intents/buff1.png`,name:"Heal"})),Ae=s(()=>({effect:`Group ${n.v>=2?n.v>=17?4:3:2} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Buff"})),Me=s(()=>({effect:`${n.v>=2?9:8} Damage. 2 Frail.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Attack/Debuff"})),js=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Centurion [<img src=${e}/assets/act2/monsters/centurion.webp class="h-10 object-contain inline" />]
        A(${t(Be).effect}<img src=${t(Be).intent} class="h-10 object-contain" /><span class="text-xs">65%</span>)
        subgraph MysticAlive [Mystic Alive]
          C(${t(De).effect}<img src=${t(De).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
        subgraph MysticDead [Mystic Dead]
          B(${t(ve).effect}<img src=${t(ve).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
      end
      subgraph Mystic [<img src=${e}/assets/act2/monsters/mystic.webp class="h-10 object-contain inline" />]
        A2(${t(Se).effect}<img src=${t(Se).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Trigger: An enemy is hurt ${n.v>=17?21:16} or more</span>)
        B2(${t(Ae).effect}<img src=${t(Ae).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
        C2(${t(Me).effect}<img src=${t(Me).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
60%</span>)
      end
  `,img:`${e}/assets/act2/monsters/centurion-mystic.webp`,name:"Centurion and Mystic",slug:"centurion-mystic"})),ks=()=>t(js),m=s(()=>({effect:`${n.v>=2?6:5} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Poke"})),V=s(()=>({effect:`${n.v>=2?21:18} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Zap"})),X=s(()=>({effect:`${n.v>=2?12:10} Damage. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Debilitate"})),q={effect:"3 Weak. 3 Strength.",intent:`${e}/assets/intents/debuff1.png`,name:"Drain"},J={effect:"1 Hex.",intent:`${e}/assets/intents/debuff2.png`,name:"Hex"},Bs=s(()=>({flowchart:n.v>=17?`
    flowchart-elk LR
      A(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${t(V).effect}<img src=${t(V).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(X).effect}<img src=${t(X).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${q.effect}<img src=${q.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${J.effect}<img src=${J.intent} class="h-10 object-contain" />)
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
      A(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" />)
      A2(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${t(V).effect}<img src=${t(V).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(X).effect}<img src=${t(X).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${q.effect}<img src=${q.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${J.effect}<img src=${J.intent} class="h-10 object-contain" />)
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
  `,img:`${e}/assets/act2/monsters/chosen.webp`,name:"Chosen",slug:"chosen"})),vs=()=>t(Bs),Q=s(()=>({effect:`${n.v>=2?11:10} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Mug"})),Re=s(()=>({effect:`${n.v>=2?18:16} Damage`,intent:`${e}/assets/intents/4.png`,name:"Lunge"})),Ce=s(()=>({effect:`${n.v>=17?17:11} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Smoke Bomb"})),Te={effect:"Escape.",intent:`${e}/assets/intents/escape.png`,name:"Escape"},Ds=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Q).effect}<img src=${t(Q).intent} class="h-10 object-contain" />)
      A2(${t(Q).effect}<img src=${t(Q).intent} class="h-10 object-contain" />)
      B(${t(Re).effect}<img src=${t(Re).intent} class="h-10 object-contain" />)
      C(${t(Ce).effect}<img src=${t(Ce).intent} class="h-10 object-contain" />)
      D(${Te.effect}<img src=${Te.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:`${e}/assets/act2/monsters/mugger.webp`,name:"Mugger",slug:"mugger"})),Ss=()=>t(Ds),Ie=s(()=>({effect:`${n.v>=2?7:6} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Double Strike"})),Ee=s(()=>({effect:`${n.v>=2?12:10} Lifesteal.`,intent:`${e}/assets/intents/attackBuff.png`,name:"Suck"})),Le=s(()=>({effect:`${n.v>=2?21:18} Damage. 2 Frail.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Fell"})),As=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(Ie).effect}<img src=${t(Ie).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: ${n.v>=17?"0%":"50%"}
40%</span>)
      B(${t(Ee).effect}<img src=${t(Ee).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: ${n.v>=17?"0%":"50%"}
40%</span>)
      C(${t(Le).effect}<img src=${t(Le).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: ${n.v>=17?"100%":"0%"}
20%</span>)
      D(Stunned<img src='${e}/assets/intents/stun.png' class="h-10 object-contain" /><span class="text-xs">Trigger: Platted Armor reduced to 0</span>)
  `,img:`${e}/assets/act2/monsters/shelled-parasite.webp`,name:"Shelled Parasite",slug:"shelled-parasite"})),Ms=()=>t(As),Ge=s(()=>({effect:`${n.v>=2?8:7} x 3 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Chomp"})),ye={effect:"2 Frail. 2 Weak.",intent:`${e}/assets/intents/debuff2.png`,name:"Enfeebling Spores"},Rs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(Ge).effect}<img src=${t(Ge).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
65%</span>)
      B(${ye.effect}<img src=${ye.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
35%</span>)
  `,img:`${e}/assets/act2/monsters/snake-plant.webp`,name:"Snake Plant",slug:"snake-plant"})),Cs=()=>t(Rs),Pe={effect:"Confuse.",intent:`${e}/assets/intents/debuff2.png`,name:"Perplexing Glare"},Fe=s(()=>({effect:`${n.v>=2?10:8} Damage. 2 Vulnerable${n.v>=17?" 2 Weak":""}.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Chomp"})),He=s(()=>({effect:`${n.v>=2?18:15} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Bite"})),Ts=s(()=>({flowchart:`
    flowchart-elk TB
      A(${Pe.effect}<img src=${Pe.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%
0%</span>)
      B(${t(Fe).effect}<img src=${t(Fe).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(He).effect}<img src=${t(He).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
  `,img:`${e}/assets/act2/monsters/snecko.webp`,name:"Snecko",slug:"snecko"})),Is=()=>t(Ts),We=s(()=>({effect:`${n.v>=2?11:10} x 2 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Slam"})),Oe=s(()=>({effect:`${n.v>=17?35:25} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Activate"})),ze=s(()=>({effect:`${n.v>=2?11:10} Damage. 15 Block.`,intent:`${e}/assets/intents/attackDefend.png`,name:"Harden"})),Ne=s(()=>({effect:`${n.v>=2?11:10} Damage. 5 Frail.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Attack/Debuff"})),Es=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(We).effect}<img src=${t(We).intent} class="h-10 object-contain" />)
      B(${t(Oe).effect}<img src=${t(Oe).intent} class="h-10 object-contain" />)
      C(${t(ze).effect}<img src=${t(ze).intent} class="h-10 object-contain" />)
      D(${t(Ne).effect}<img src=${t(Ne).intent} class="h-10 object-contain" />)
      B==>D==>A<==>C
  `,img:`${e}/assets/act2/monsters/spheric-guardian.webp`,name:"Spheric Guardian",slug:"spheric-guardian"})),Ls=()=>t(Es),Ue={effect:"20 Damage.",intent:`${e}/assets/intents/5.png`,name:"Slash"},Ve={effect:"6 x 4 Damage.",intent:`${e}/assets/intents/5.png`,name:"Soul Strike"},Xe={effect:"Removes debuffs.",intent:`${e}/assets/intents/unknown.png`,name:"Rebirth"},qe={effect:"40 Damage.",intent:`${e}/assets/intents/7.png`,name:"Dark Echo"},Je={effect:"18 Damage. 1 Void into draw.",intent:`${e}/assets/intents/attackDebuff.png`,name:"Sludge"},Qe={effect:"10 x 3 Damage.",intent:`${e}/assets/intents/7.png`,name:"Tackle"},Gs=s(()=>({flowchart:`
    flowchart-elk LR
      subgraph Unawakened [<img src=${e}/assets/act3/bosses/awakened-one-unawakened.webp class="h-10 object-contain inline" />]
        direction LR
        A(${Ue.effect}<img src=${Ue.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: 100%
75%</span>)
        B(${Ve.effect}<img src=${Ve.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 0%
25%</span>)
      end
      C(${Xe.effect}<img src=${Xe.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      A2(${qe.effect}<img src=${qe.intent} class="h-10 object-contain" />)
      C==>A2==>Awakened
      subgraph Awakened [<img src=${e}/assets/act3/bosses/awakened-one-awakened.webp class="h-10 object-contain inline" />]
        direction LR
        B2(${Je.effect}<img src=${Je.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        C2(${Qe.effect}<img src=${Qe.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
  `,img:`${e}/assets/act3/bosses/awakened-one-unawakened.webp`,name:"Awakened One",slug:"awakened-one"})),ys=()=>t(Gs),Ye={effect:"Group 3 Strength.",intent:`${e}/assets/intents/buff1.png`,name:"Circle of Power"},Ze=s(()=>({effect:`${n.v>=4?12:10} x 2 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Beam"})),Ke=s(()=>({effect:`Group 16 Block.${n.v>=19?" 3 Plated Armor.":""}`,intent:`${e}/assets/intents/${n.v>=19?"defendBuff":"defend"}.png`,name:"Square Of Protection"})),_e=s(()=>({effect:`${n.v>=4?12:10} x 2 Damage. 2 Dazed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Beam"})),Ps=s(()=>({flowchart:`
    flowchart-elk LR
      subgraph Donu [<img src=${e}/assets/act3/bosses/donu.webp class="h-10 object-contain inline" />]
        A(${Ye.effect}<img src=${Ye.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        B(${t(Ze).effect}<img src=${t(Ze).intent} class="h-10 object-contain" />)
        A<==>B
      end
      subgraph Deca [<img src=${e}/assets/act3/bosses/deca.webp class="h-10 object-contain inline" />]
        A2(${t(Ke).effect}<img src=${t(Ke).intent} class="h-10 object-contain" />)
        B2(${t(_e).effect}<img src=${t(_e).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2<==>B2
      end
  `,img:`${e}/assets/act3/bosses/donu-deca.webp`,name:"Donu and Deca",slug:"donu-deca"})),Fs=()=>t(Ps),tn=s(()=>({effect:`${n.v>=4?8:7} x 3 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Reverberate"})),en=s(()=>({effect:`${n.v>=4?32:26} Damage. 1 Draw Reduction.${n.v>=19?" 2 Slimed into discard.":""}`,intent:`${e}/assets/intents/6.png`,name:"Head Slam"})),nn=s(()=>({effect:`20 Block. 1 Vulnerable. 1 Weak.${n.v>=19?" 1 Frail.":""}`,intent:`${e}/assets/intents/defendDebuff.png`,name:"Ripple"})),sn=s(()=>({effect:`Heals to 50% HP. Removes debuffs.${n.v>=19?" 32 Block. ":""}`,intent:`${e}/assets/intents/buff1.png`,name:"Haste"})),Hs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(tn).effect}<img src=${t(tn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
      B(${t(en).effect}<img src=${t(en).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
35%</span>)
      C(${t(nn).effect}<img src=${t(nn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
      D(${t(sn).effect}<img src=${t(sn).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
Trigger: Below 50% HP.</span>)
  `,img:`${e}/assets/act3/bosses/time-eater.webp`,name:"Time Eater",slug:"time-eater"})),Ws=()=>t(Hs),an={effect:"13 Damage.",intent:`${e}/assets/intents/3.png`,name:"Count"},cn={effect:"1 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Glare"},on=s(()=>({effect:`${n.v>=3?40:30} + T Damage. T starts at 0 and increases by 5 every time the attack is used, up to 30 additional Damage.`,intent:`${e}/assets/intents/7.png`,name:"It Is Time"})),Os=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turns [Turns 1-${n.v>=18?3:4}]
        A(${an.effect}<img src=${an.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        B(${cn.effect}<img src=${cn.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
      subgraph Turns+ [Turn ${n.v>=18?4:5}+]
        C(${t(on).effect}<img src=${t(on).intent} class="h-10 object-contain" />)
      end
  `,img:`${e}/assets/act3/elites/giant-head.webp`,name:"Giant Head",slug:"giant-head"})),zs=()=>t(Os),Y=s(()=>({effect:`${n.v>=18?5:3} Burn into discard.`,intent:`${e}/assets/intents/debuff1.png`,name:"Debuff"})),Z=s(()=>({effect:`${n.v>=3?7:6} x 3 Damage.`,intent:`${e}/assets/intents/4.png`,name:"Attack"})),xt={effect:"45 Damage.",intent:`${e}/assets/intents/7.png`,name:"Scythe"},Ns=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Moves
        A(${t(Y).effect}<img src=${t(Y).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
        B(${t(Z).effect}<img src=${t(Z).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
        C(${xt.effect}<img src=${xt.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      end
      subgraph Turn1 [Turn 1]
        A1(<img src=${t(Y).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B1(<img src=${t(Z).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Turn+ [Turn 2+]
        A2(<img src=${t(Y).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        B2(<img src=${t(Z).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        C2(<img src=${xt.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      Turn1~~~Moves
      Turn+~~~Moves
  `,img:`${e}/assets/act3/elites/nemesis.webp`,name:"Nemesis",slug:"nemesis"})),Us=()=>t(Ns),dt=s(()=>({effect:`Spawns ${n.v>=18?2:"a"} Dagger.`,intent:`${e}/assets/intents/unknown.png`,name:"Summon"})),K=s(()=>({effect:`${n.v>=3?16:13} x 2 Damage. 1 Weak.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Snake Strike"})),_=s(()=>({effect:`${n.v>=3?34:30} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Big Bite"})),rn={effect:"9 Damage. 1 Wound into discard.",intent:`${e}/assets/intents/attackDebuff.png`,name:"Stab"},fn={effect:"25 Damage. Dies.",intent:`${e}/assets/intents/6.png`,name:"Explode"},Vs=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Reptomancer [<img src=${e}/assets/act3/elites/reptomancer.webp class="h-10 object-contain inline" />]
        subgraph 0-3Daggers [0-3 Daggers]
          A2(<img src=${t(dt).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          B2(<img src=${t(K).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          C2(<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
        subgraph 4Daggers [4 Daggers]
          B3(<img src=${t(K).intent} class="h-10 object-contain" /><span class="text-xs">67%</span>)
          C3(<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
      end
      subgraph Dagger [<img src=${e}/assets/act3/elites/dagger.webp class="h-10 object-contain inline" />]
        D(${rn.effect}<img src=${rn.intent} class="h-10 object-contain" />)
        E(${fn.effect}<img src=${fn.intent} class="h-10 object-contain" />)
        D==>E
      end
  `,moves:`
    flowchart-elk TB
      A(${t(dt).effect}<img src=${t(dt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      B(${t(K).effect}<img src=${t(K).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${t(_).effect}<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
  `,img:`${e}/assets/act3/elites/reptomancer.webp`,name:"Reptomancer",slug:"reptomancer"})),Xs=()=>t(Vs),tt=s(()=>({effect:`${n.v>=2?"D + 2":"D"} Damage. D is chosen between 7 and 11 at the beginning of the battle.`,intent:`${e}/assets/intents/2.png`,name:"Nip"})),wt=s(()=>({effect:`${n.v>=2?9:8} x 2 Damage.`,intent:`${e}/assets/intents/4.png`,name:"Chomp"})),et=s(()=>({effect:`12 Block.${n.v>=17?" 2 Strength.":""}`,intent:`${e}/assets/intents/${n.v>=17?"defendBuff":"defend"}.png`,name:"Harden"})),ln={effect:"Revives with 50% HP.",intent:`${e}/assets/intents/buff1.png`,name:"Reincarnate"},gn={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Regrow"},qs=s(()=>({flowchart:`
    flowchart-elk TB
      D(${ln.effect}<img src=${ln.intent} class="h-10 object-contain" />)
      E(${gn.effect}<img src=${gn.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      E==>D
      subgraph Middle [Middle Darkling / Outer Darklings Turn 1]
        A1(<img src=${t(tt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C1(<img src=${t(et).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Outer [Outer Darklings Turn 2+]
        A2(<img src=${t(tt).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
        B2(<img src=${t(wt).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
        C2(<img src=${t(et).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      subgraph Moves
        A(${t(tt).effect}<img src=${t(tt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
        B(${t(wt).effect}<img src=${t(wt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
        C(${t(et).effect}<img src=${t(et).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      end
      Middle~~~Moves
      Outer~~~Moves
  `,img:`${e}/assets/act3/monsters/darkling.webp`,name:"Darkling",slug:"darkling"})),Js=()=>t(qs),$n=s(()=>({effect:`${n.v>=2?11:10} Damage. 1 Burn into draw. 1 Burn into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Laser"})),mn=s(()=>({effect:`${n.v>=2?16:15} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Claw"})),Qs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t($n).effect}<img src=${t($n).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(mn).effect}<img src=${t(mn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
  `,img:`${e}/assets/act3/monsters/orb-walker.webp`,name:"Orb Walker",slug:"orb-walker"})),Ys=()=>t(Qs),pn=s(()=>({effect:`${n.v>=2?9:7} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Cut"})),bn={effect:"2 Thorns.",intent:`${e}/assets/intents/buff1.png`,name:"Spike"},nt=s(()=>({effect:`${n.v>=2?11:9} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Slam"})),hn={effect:"30 Damage. Dies.",intent:`${e}/assets/intents/unknown.png`,name:"Explode"},un=s(()=>({effect:`${n.v>=2?13:11} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Bash"})),xn={effect:"2 Dazed into draw.",intent:`${e}/assets/intents/debuff1.png`,name:"Repulse"},Zs=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Spiker [<img src=${e}/assets/act3/monsters/spiker.webp class="h-10 object-contain inline" />]
        A(${t(pn).effect}<img src=${t(pn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
        B(${bn.effect}<img src=${bn.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 6
50%</span>)
      end
      subgraph Exploder [<img src=${e}/assets/act3/monsters/exploder.webp class="h-10 object-contain inline" />]
        A2(${t(nt).effect}<img src=${t(nt).intent} class="h-10 object-contain" />)
        A3(${t(nt).effect}<img src=${t(nt).intent} class="h-10 object-contain" />)
        B2(${hn.effect}<img src=${hn.intent} class="h-10 object-contain" />)
        A2==>A3==>B2
      end
      subgraph Repulsor [<img src=${e}/assets/act3/monsters/repulsor.webp class="h-10 object-contain inline" />]
        A4(${t(un).effect}<img src=${t(un).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
        B3(${xn.effect}<img src=${xn.intent} class="h-10 object-contain" /><span class="text-xs">80%</span>)
      end
  `,img:`${e}/assets/act3/monsters/shapes.webp`,name:"Shapes",slug:"shapes"})),Ks=()=>t(Zs),p=s(()=>({effect:`${n.v>=2?18:16} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Quick Tackle"})),st=s(()=>({effect:`${n.v>=2?25:22} Damage.`,intent:`${e}/assets/intents/5.png`,name:"Smash"})),b=s(()=>({effect:`${n.v>=17?12:10} Constricted.`,intent:`${e}/assets/intents/debuff2.png`,name:"Constrict"})),_s=s(()=>({flowchart:n.v>=17?`
    flowchart-elk TB
      subgraph notC [Not Constricted]
        C(${t(b).effect}<img src=${t(b).intent} class="h-10 object-contain" />)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${t(b).intent} class="h-10 object-contain inline" />]
        A2(${t(p).effect}<img src=${t(p).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        B(${t(st).effect}<img src=${t(st).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
      C==>isC
  `:`
    flowchart-elk TB
      subgraph notC [Not Constricted]
        A(${t(p).effect}<img src=${t(p).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        C(${t(b).effect}<img src=${t(b).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${t(b).intent} class="h-10 object-contain inline" />]
        A2(${t(p).effect}<img src=${t(p).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        B(${t(st).effect}<img src=${t(st).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
      C==>isC
  `,img:`${e}/assets/act3/monsters/spire-growth.webp`,name:"Spire Growth",slug:"spire-growth"})),ta=()=>t(_s),dn=s(()=>({effect:`${n.v>=17?5:3} Weak. ${n.v>=17?5:3} Frail.`,intent:`${e}/assets/intents/debuff2.png`,name:"Roar"})),wn=s(()=>({effect:`${n.v>=17?5:3} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Drool"})),jn=s(()=>({effect:`${n.v>=2?30:25} Damage.`,intent:`${e}/assets/intents/6.png`,name:"Slam"})),at={effect:"5 x T Damage. T = Turn Number / 2, rounded up.",intent:`${e}/assets/intents/2.png`,name:"Nom"},ea=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(dn).effect}<img src=${t(dn).intent} class="h-10 object-contain" />)
      A==>afterDebuff
      subgraph afterDebuff [After Debuff]
        C(${t(jn).effect}<img src=${t(jn).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D(${at.effect}<img src=${at.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph afterSlam [After Slam]
        B(${t(wn).effect}<img src=${t(wn).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D2(${at.effect}<img src=${at.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      D2==>B
      B==>afterDebuff
      D==>B
      C==>afterSlam
  `,img:`${e}/assets/act3/monsters/the-maw.webp`,name:"The Maw",slug:"the-maw"})),na=()=>t(ea),kn=s(()=>({effect:`${n.v>=2?40:30} + X*10 Damage. X = Turn - 1`,intent:`${e}/assets/intents/7.png`,name:"Attack"})),sa=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(kn).effect}<img src=${t(kn).intent} class="h-10 object-contain" />)
  `,img:`${e}/assets/act3/monsters/transient.webp`,name:"Transient",slug:"transient"})),aa=()=>t(sa),Bn={effect:"1 Parasite into deck. Only affects future combats.",intent:`${e}/assets/intents/debuff2.png`,name:"Implant"},ct=s(()=>({effect:`${n.v>=2?16:15} Damage. ${n.v>=2?18:16} Block.`,intent:`${e}/assets/intents/attackDefend.png`,name:"Flail"})),it=s(()=>({effect:`${n.v>=2?12:10} Damage. 2 Weak. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Wither"})),ot=s(()=>({effect:`${n.v>=2?9:7} x 3 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Multi-Strike"})),rt=s(()=>({effect:`${n.v>=2?38:32} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Strong Strike"})),ca=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turn1 [Turn 1]
        B(${t(ct).effect}<img src=${t(ct).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        C(${t(it).effect}<img src=${t(it).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(ot).effect}<img src=${t(ot).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        E(${t(rt).effect}<img src=${t(rt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
      end
      subgraph Turn2+ [Turn 2+]
        A(${Bn.effect}<img src=${Bn.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
10%</span>)
        B2(${t(ct).effect}<img src=${t(ct).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
30%</span>)
        C2(${t(it).effect}<img src=${t(it).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
        D2(${t(ot).effect}<img src=${t(ot).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
30%</span>)
        E2(${t(rt).effect}<img src=${t(rt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
10%</span>)
      end
  `,img:`${e}/assets/act3/monsters/writhing-mass.webp`,name:"Writhing Mass",slug:"writhing-mass"})),ia=()=>t(ca),vn={effect:"2 Vulnerable. 2 Weak. 2 Frail. Dazed, Slimed, Wound, Burn and Void into draw.",intent:`${e}/assets/intents/debuff2.png`,name:"Debilitate"},ft=s(()=>({effect:`2 x ${n.v>=4?15:12} Damage.`,intent:`${e}/assets/intents/5.png`,name:"Blood Shots"})),lt=s(()=>({effect:`${n.v>=4?45:40} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Echo"})),Dn={effect:"Removes Strength Down. 2 Strength and additional buff.",intent:`${e}/assets/intents/buff1.png`,name:"Buff"},oa=s(()=>({flowchart:`
    flowchart-elk LR
      A(${vn.effect}<img src=${vn.intent} class="h-10 object-contain" />)
      B(${t(ft).effect}<img src=${t(ft).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B2(${t(ft).effect}<img src=${t(ft).intent} class="h-10 object-contain" />)
      C(${t(lt).effect}<img src=${t(lt).intent} class="h-10 object-contain" />)
      C2(${t(lt).effect}<img src=${t(lt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${Dn.effect}<img src=${Dn.intent} class="h-10 object-contain" /><span class="text-xs">1. Artifact 2
2. Beat of Death 1
3. Painful Stabs
4. 10 Strength
5+. 50 Strength</span>)
      A==>Loop
      subgraph Loop
      B==>C==>D
      C2==>B2==>D
      end
  `,img:`${e}/assets/act4/bosses/corrupt-heart.webp`,name:"Corrupt Heart",slug:"corrupt-heart"})),ra=()=>t(oa),gt=s(()=>({effect:`${n.v>=3?14:12} Damage. If Player has 1+ orb slot, 50/50 -1 Focus or -1 Strength. Else, -1 Strength.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Bash"})),$t={effect:"Group 30 Block.",intent:`${e}/assets/intents/defend.png`,name:"Fortify"},Sn=s(()=>({effect:`${n.v>=3?38:34} Damage. ${n.v>=18?"99 Block":"X Block. X = Damage Output"}.`,intent:`${e}/assets/intents/attackDefend.png`,name:"Smash"})),h=s(()=>({effect:`${n.v>=3?6:5} x 2 Damage. 2 Burns into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Burn Strike"})),mt={effect:"Group 2 Strength.",intent:`${e}/assets/intents/buff1.png`,name:"Piercer"},An=s(()=>({effect:`10 x ${n.v>=3?4:3} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Skewer"})),fa=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Shield [<img src=${e}/assets/act4/elites/spire-shield.webp class="h-10 object-contain inline" />]
        direction LR
        A(${t(gt).effect}<img src=${t(gt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B(${$t.effect}<img src=${$t.intent} class="h-10 object-contain" />)
        A2(${t(gt).effect}<img src=${t(gt).intent} class="h-10 object-contain" />)
        B2(${$t.effect}<img src=${$t.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C(${t(Sn).effect}<img src=${t(Sn).intent} class="h-10 object-contain" />)
        subgraph Loop
          A==>B==>C
          B2==>A2==>C
        end
      end
      subgraph Spear [<img src=${e}/assets/act4/elites/spire-spear.webp class="h-10 object-contain inline" />]
        direction LR
        A3(${t(h).effect}<img src=${t(h).intent} class="h-10 object-contain" />)
        A4(${t(h).effect}<img src=${t(h).intent} class="h-10 object-contain" />)
        A5(${t(h).effect}<img src=${t(h).intent} class="h-10 object-contain" />)
        B3(${mt.effect}<img src=${mt.intent} class="h-10 object-contain" />)
        B4(${mt.effect}<img src=${mt.intent} class="h-10 object-contain" />)
        C2(${t(An).effect}<img src=${t(An).intent} class="h-10 object-contain" />)
        A3==>Loop2
        subgraph Loop2 [Loop]
          C2== 50% ==>A4==>B3
          C2== 50% ==>B4==>A5
        end
      end
  `,img:`${e}/assets/act4/elites/spire-shield-spear.webp`,name:"Spire Shield and Spear",slug:"spire-shield-spear"})),la=()=>t(fa),ga=[zn,is,Xn,Kn,ns,Jn,Yn,ts,Un,as],$a=[yn,Fn,Wn],ma=[Ln,Cn,In],pa=[ws,vs,Ss,Ms,Ls,ks,Cs,Is],ba=[ps,hs,xs],ha=[rs,ls,$s],ua=[Js,Ys,Ks,na,ta,aa,ia],xa=[zs,Us,Xs],da=[ys,Fs,Ws],wa=[la],ja=[ra],c=Mn=>new Map(Mn.map(jt=>[jt().slug,jt])),ka=c(ga),Ba=c($a),va=c(ma),Da=c(pa),Sa=c(ba),Aa=c(ha),Ma=c(ua),Ra=c(xa),Ca=c(da),Ta=c(wa),Ia=c(ja),ya=new Map([...ka,...Ba,...va,...Da,...Sa,...Aa,...Ma,...Ra,...Ca,...Ta,...Ia]);export{ma as a,$a as b,ga as c,ha as d,ba as e,pa as f,da as g,xa as h,ua as i,ja as j,wa as k,ya as l};
