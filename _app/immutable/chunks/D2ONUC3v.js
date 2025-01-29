import{ap as Hs,aG as Ws,aH as Os,m as Us,o as It,q as Ns,A as zs,z as Vs,B as _s,U as qs,i as t,k as n}from"./CDO3kmqM.js";import{a as s}from"./ByQhS2z5.js";import{b as e}from"./B3QRQEa5.js";function sc(jt,j,Ps){It&&Ns();var Tt=jt,Ct=qs,kt,Fs=Hs()?Ws:Os;Us(()=>{Fs(Ct,Ct=j())&&(kt&&zs(kt),kt=Vs(()=>Ps(Tt)))}),It&&(Tt=_s)}const Et={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Activate"},Lt={effect:"H x 6 Damage. H = Player HP / 12 + 1, rounded down.",intent:`${e}/assets/intents/7.png`,name:"Divider"},Gt=n(()=>({effect:`${s.v>=4?3:2} x 6 Damage. Upgrades all Burn. 3 Burn+ into discard.`,intent:`${e}/assets/intents/3.png`,name:"Inferno"})),$=n(()=>({effect:`6 Damage. ${s.v>=19?2:1} Burn into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Sear"})),k=n(()=>({effect:`${s.v>=4?6:5} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Tackle"})),yt=n(()=>({effect:`${s.v>=19?3:2} Strength. 12 Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Inflame"})),Xs=n(()=>({flowchart:`
    flowchart LR
      A(${Et.effect}<img src=${Et.intent} class="h-10 object-contain" />)
      B(${Lt.effect}<img src=${Lt.intent} class="h-10 object-contain" />)
      C(${t($).effect}<img src=${t($).intent} class="h-10 object-contain" />)
      C2(${t($).effect}<img src=${t($).intent} class="h-10 object-contain" />)
      C3(${t($).effect}<img src=${t($).intent} class="h-10 object-contain" />)
      D(${t(k).effect}<img src=${t(k).intent} class="h-10 object-contain" />)
      D2(${t(k).effect}<img src=${t(k).intent} class="h-10 object-contain" />)
      E(${t(yt).effect}<img src=${t(yt).intent} class="h-10 object-contain" />)
      F(${t(Gt).effect}<img src=${t(Gt).intent} class="h-10 object-contain" />)
      A==>B
      B==>C
      C==>D
      D==>C2
      C2==>E
      E==>D2
      D2==>C3
      C3==>F
      F== Gives Burn+ instead of Burn ==>B
  `,img:`${e}/assets/act1/bosses/hexaghost.webp`,name:"Hexaghost",slug:"hexaghost"})),Js=()=>t(Xs),Pt=n(()=>({effect:`${s.v>=19?5:3} Slimed into discard.`,intent:`${e}/assets/intents/debuff2.png`,name:"Goop Spray"})),Ft={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Preparing"},Ht=n(()=>({effect:`${s.v>=4?38:35} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Slam"})),Wt={effect:"Spawns Acid Slime L and Spike Slime L with current HP. Dies.",intent:`${e}/assets/intents/unknown.png`,name:"Split"},Zs=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Pt).effect}<img src=${t(Pt).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${Ft.effect}<img src=${Ft.intent} class="h-10 object-contain" />)
      C(${t(Ht).effect}<img src=${t(Ht).intent} class="h-10 object-contain" />)
      D(${Wt.effect}<img src=${Wt.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
    A==>B
    B==>C
    C==>A
  `,img:`${e}/assets/act1/bosses/slime-boss.webp`,name:"Slime Boss",slug:"slime-boss"})),Qs=()=>t(Zs),Ot={effect:"9 Block",intent:`${e}/assets/intents/defend.png`,name:"Charging Up"},Ut=n(()=>({effect:`${s.v>=4?36:32} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Fierce Bash"})),Nt={effect:"2 Weak. 2 Vulnerable",intent:`${e}/assets/intents/debuff2.png`,name:"Charging Up"},zt={effect:"5 x 4 Damage.",intent:`${e}/assets/intents/5.png`,name:"Whirlwind"},Vt=n(()=>({effect:`${s.v>=19?4:3} Sharp Hide.`,intent:`${e}/assets/intents/buff1.png`,name:"Defensive Mode"})),_t=n(()=>({effect:`${s.v>=4?10:9} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Roll Attack"})),qt={effect:"8 x 2 Damage. Removes Sharp Hide. Enters Offensive mode.",intent:`${e}/assets/intents/attackBuff.png`,name:"Twin Slam"},Ys=n(()=>({flowchart:`
    flowchart-elk LR
      A(${Ot.effect}<img src=${Ot.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${t(Ut).effect}<img src=${t(Ut).intent} class="h-10 object-contain" />)
      C(${Nt.effect}<img src=${Nt.intent} class="h-10 object-contain" />)
      D(${zt.effect}<img src=${zt.intent} class="h-10 object-contain" />)
      E(${t(Vt).effect}<img src=${t(Vt).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      F(${t(_t).effect}<img src=${t(_t).intent} class="h-10 object-contain" />)
      G(${qt.effect}<img src=${qt.intent} class="h-10 object-contain" />)
      subgraph Offensive [<img src=${e}/assets/act1/bosses/the-guardian-offensive.webp class="h-10 object-contain inline" />]
        direction LR
        A==>B==>C==>D==>A
      end
      subgraph Defensive [<img src=${e}/assets/act1/bosses/the-guardian-defensive.webp class="h-10 object-contain inline" />]
        direction LR
        E==>F==>G==>E
      end 
  `,img:`${e}/assets/act1/bosses/the-guardian-offensive.webp`,name:"The Guardian",slug:"the-guardian"})),Ks=()=>t(Ys),B=n(()=>({effect:`${s.v>=18?3:2} Enrage.`,intent:`${e}/assets/intents/buff1.png`,name:"Bellow"})),m=n(()=>({effect:`${s.v>=3?16:14} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Rush"})),v=n(()=>({effect:`${s.v>=3?8:6} Damage. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Skull Bash"})),tn=n(()=>({flowchart:s.v>=18?`
    flowchart-elk LR
      A(${t(B).effect}<img src=${t(B).intent} class="h-10 object-contain" />)
      B(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" />)
      B2(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" />)
      C(${t(v).effect}<img src=${t(v).intent} class="h-10 object-contain" />)
    A==>C
    C==>B
    B==>B2
    B2==>A
  `:`
    flowchart-elk LR
      A(${t(B).effect}<img src=${t(B).intent} class="h-10 object-contain" />)
      B(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
67%</span>)
      C(${t(v).effect}<img src=${t(v).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
      A==>Turn2+
      subgraph Turn2+ [Turn 2+]
        direction LR
        B
        C
      end
  `,img:`${e}/assets/act1/elites/gremlin-nob.webp`,name:"Gremlin Nob",slug:"gremlin-nob"})),en=()=>t(tn),D=n(()=>({effect:`${s.v>=3?20:18} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Attack"})),Xt=n(()=>({effect:` -${s.v>=18?2:1} Dexterity. -${s.v>=18?2:1} Strength.`,intent:`${e}/assets/intents/debuff2.png`,name:"Siphon Soul"})),sn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(D).effect}<img src=${t(D).intent} class="h-10 object-contain" />)
      A2(${t(D).effect}<img src=${t(D).intent} class="h-10 object-contain" />)
      B(${t(Xt).effect}<img src=${t(Xt).intent} class="h-10 object-contain" />)
      A==>A2
      A2==>B
      B==>A
  `,img:`${e}/assets/act1/elites/lagavulin.webp`,name:"Lagavulin",slug:"lagavulin"})),nn=()=>t(sn),Jt=n(()=>({effect:`${s.v>=3?10:9} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Beam"})),Zt=n(()=>({effect:`${s.v>=18?3:2} Dazed into discard.`,intent:`${e}/assets/intents/debuff1.png`,name:"Bolt"})),an=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Jt).effect}<img src=${t(Jt).intent} class="h-10 object-contain" />)
      B(${t(Zt).effect}<img src=${t(Zt).intent} class="h-10 object-contain" />)
      A<==>B
  `,img:`${e}/assets/act1/elites/sentry.webp`,name:"Sentry",slug:"sentry"})),cn=()=>t(an),Qt=n(()=>({effect:`${s.v>=2?12:11} Damage. 2 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Corrosive Spit"})),Yt=n(()=>({effect:"2 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),Kt=n(()=>({effect:`${s.v>=2?18:16} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Tackle"})),te={effect:"Spawns 2 Acid Slime M with current HP. Dies.",intent:`${e}/assets/intents/unknown.png`,name:"Split"},ee=n(()=>({effect:`${s.v>=2?8:7} Damage. 1 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Corrosive Spit"})),se=n(()=>({effect:"1 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),ne=n(()=>({effect:`${s.v>=2?12:10} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Tackle"})),ae=n(()=>({effect:"1 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),ce=n(()=>({effect:`${s.v>=2?4:3} Damage.`,intent:`${e}/assets/intents/1.png`,name:"Tackle"})),on=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=${e}/assets/act1/monsters/acid-slime-l.webp class="h-10 object-contain inline" />]
        A(${t(Qt).effect}<img src=${t(Qt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
${s.v>=17?"40%":"30%"}</span>)
        B(${t(Yt).effect}<img src=${t(Yt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
30%</span>)
        C(${t(Kt).effect}<img src=${t(Kt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?2:1}
${s.v>=17?"30%":"40%"}</span>)
        D(${te.effect}<img src=${te.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
      end
      subgraph Medium [<img src=${e}/assets/act1/monsters/acid-slime-m.webp class="h-10 object-contain inline" />]
        A2(${t(ee).effect}<img src=${t(ee).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
${s.v>=17?"40%":"30%"}</span>)
        B2(${t(se).effect}<img src=${t(se).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
30%</span>)
        C2(${t(ne).effect}<img src=${t(ne).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?2:1}
${s.v>=17?"30%":"40%"}</span>)
      end
      subgraph Small [<img src=${e}/assets/act1/monsters/acid-slime-s.webp class="h-10 object-contain inline" />]
        A3(${t(ae).effect}<img src=${t(ae).intent} class="h-10 object-contain" /><span class="text-xs">${s.v>=17?"Turn 1: 100%":"Turn 1: 50%"}</span>)
        B3(${t(ce).effect}<img src=${t(ce).intent} class="h-10 object-contain" /><span class="text-xs">${s.v>=17?"":"Turn 1: 50%"}</span>)
        A3<==>B3
      end
  `,img:`${e}/assets/act1/monsters/acid-slimes.webp`,name:"Acid Slimes",slug:"acid-slimes"})),rn=()=>t(on),ie=n(()=>({effect:`${s.v>=2?13:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Stab"})),oe=n(()=>({effect:`${s.v>=2?8:7} Damage. ${s.v>=17?2:1} Weak.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Rake"})),fn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(ie).effect}<img src=${t(ie).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(oe).effect}<img src=${t(oe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
40%</span>)
  `,img:`${e}/assets/act1/monsters/blue-slaver.webp`,name:"Blue Slaver",slug:"blue-slaver"})),ln=()=>t(fn),re=n(()=>({effect:`${s.v>=2?s.v>=17?5:4:3} Ritual.`,intent:`${e}/assets/intents/buff1.png`,name:"Incantation"})),fe={effect:"6 Damage.",intent:`${e}/assets/intents/2.png`,name:"Dark Strike"},gn=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(re).effect}<img src=${t(re).intent} class="h-10 object-contain" />)
      B(${fe.effect}<img src=${fe.intent} class="h-10 object-contain" />)
      A==>B
      B==>B
  `,img:`${e}/assets/act1/monsters/cultist.webp`,name:"Cultist",slug:"cultist"})),$n=()=>t(gn),le={effect:"6 Damage.",intent:`${e}/assets/intents/2.png`,name:"Bite"},ge=n(()=>({effect:`${s.v>=2?s.v>=17?5:4:3} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Grow"})),mn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${le.effect}<img src=${le.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(ge).effect}<img src=${t(ge).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
40%</span>)
  `,img:`${e}/assets/act1/monsters/fungi-beast.webp`,name:"Fungi Beast",slug:"fungi-beast"})),pn=()=>t(mn),c={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Charging"},S=n(()=>({effect:`${s.v>=2?30:25} Damage.`,intent:`${e}/assets/intents/6.png`,name:"Ultimate Blast"})),A=n(()=>({effect:`${s.v>=2?5:4} Damage.`,intent:`${e}/assets/intents/1.png`,name:"Scratch"})),M=n(()=>({effect:`${s.v>=2?5:4} Damage. 1 Weak.${s.v>=17?" 1 Frail":""}.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Smash"})),R=n(()=>({effect:`Ally ${s.v>=2?s.v>=17?11:8:7} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Protect"})),T=n(()=>({effect:`${s.v>=2?8:6} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Shield Bash"})),C=n(()=>({effect:`${s.v>=2?10:9} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Puncture"})),bn=n(()=>({flowchart:s.v>=17?`
    flowchart-elk TB
      subgraph Wizard [<img src=${e}/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        A2(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        B(${t(S).effect}<img src=${t(S).intent} class="h-10 object-contain" />)
        A==>A2==>B==>B
      end
      subgraph Mad [<img src=${e}/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A3(${t(A).effect}<img src=${t(A).intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=${e}/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A4(${t(M).effect}<img src=${t(M).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=${e}/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A5(${t(R).effect}<img src=${t(R).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B5(${t(T).effect}<img src=${t(T).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=${e}/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A6(${t(C).effect}<img src=${t(C).intent} class="h-10 object-contain" />)
      end
  `:`
    flowchart-elk TB
      subgraph Wizard [<img src=${e}/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${c.effect}<img src=${c.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        A3(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        B(${t(S).effect}<img src=${t(S).intent} class="h-10 object-contain" />)
        A==>A2==>B==>A3==>A
      end
      subgraph Mad [<img src=${e}/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A4(${t(A).effect}<img src=${t(A).intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=${e}/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A5(${t(M).effect}<img src=${t(M).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=${e}/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A6(${t(R).effect}<img src=${t(R).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B6(${t(T).effect}<img src=${t(T).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=${e}/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A7(${t(C).effect}<img src=${t(C).intent} class="h-10 object-contain" />)
      end
  `,img:`${e}/assets/act1/monsters/gremlins.webp`,name:"Gremlins",slug:"gremlins"})),hn=()=>t(bn),$e=n(()=>({effect:`${s.v>=2?12:11} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Chomp"})),me={effect:"7 Damage. 5 Block.",intent:`${e}/assets/intents/attackDefend.png`,name:"Thrash"},pe=n(()=>({effect:`${s.v>=2?s.v>=17?5:4:3} Strength. ${s.v>=17?9:6} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Bellow"})),un=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t($e).effect}<img src=${t($e).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Act 1, Turn 1: 100%
25%</span>)
      B(${me.effect}<img src=${me.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
      C(${t(pe).effect}<img src=${t(pe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
  `,img:`${e}/assets/act1/monsters/jaw-worm.webp`,name:"Jaw Worm",slug:"jaw-worm"})),xn=()=>t(un),I=n(()=>({effect:`${s.v>=2?11:10} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Mug"})),be=n(()=>({effect:`${s.v>=2?14:12} Damage`,intent:`${e}/assets/intents/3.png`,name:"Lunge"})),he={effect:"6 Block.",intent:`${e}/assets/intents/defend.png`,name:"Smoke Bomb"},ue={effect:"Escape.",intent:`${e}/assets/intents/escape.png`,name:"Escape"},dn=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(I).effect}<img src=${t(I).intent} class="h-10 object-contain" />)
      A2(${t(I).effect}<img src=${t(I).intent} class="h-10 object-contain" />)
      B(${t(be).effect}<img src=${t(be).intent} class="h-10 object-contain" />)
      C(${he.effect}<img src=${he.intent} class="h-10 object-contain" />)
      D(${ue.effect}<img src=${ue.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:`${e}/assets/act1/monsters/looter.webp`,name:"Looter",slug:"looter"})),wn=()=>t(dn),E=n(()=>({effect:`${s.v>=2?"D+1":"D"} Damage. D is chosen between 5 and 7 at the beginning of the battle.`,intent:`${e}/assets/intents/2.png`,name:"Bite"})),xe=n(()=>({effect:`${s.v>=17?4:3} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Grow"})),de={effect:"2 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Spit Web"},jn=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Red [<img src=${e}/assets/act1/monsters/red-louse.webp class="h-10 object-contain inline" />]
        A(${t(E).effect}<img src=${t(E).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
75%</span>)
        B(${t(xe).effect}<img src=${t(xe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
25%</span>)
      end
      subgraph Green [<img src=${e}/assets/act1/monsters/green-louse.webp class="h-10 object-contain inline" />]
        A2(${t(E).effect}<img src=${t(E).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
75%</span>)
        B2(${de.effect}<img src=${de.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
25%</span>)
      end
  `,img:`${e}/assets/act1/monsters/louses.webp`,name:"Louses",slug:"louses"})),kn=()=>t(jn),f=n(()=>({effect:`${s.v>=2?14:13} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Stab"})),i=n(()=>({effect:`${s.v>=2?9:8} Damage. ${s.v>=17?2:1} Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Scrape"})),L={effect:"1 Entangled.",intent:`${e}/assets/intents/debuff2.png`,name:"Entangle"},Bn=n(()=>({flowchart:s.v>=17?`
    flowchart-elk LR
      subgraph Not [Entangle Not Used]
        A(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
        B(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" />)
        B<==>A
      end
      C(${L.effect}<img src=${L.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      C==>Used
      subgraph Used [Entangle Used]
        direction LR
        A3(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
        B2(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
55%</span>)
      end
  `:`
    flowchart-elk LR
      subgraph Not [Entangle Not Used]
        A(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
        B(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" />)
        B2(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" />)
        B==>B2==>A==>B
      end
      C(${L.effect}<img src=${L.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      C==>Used
      subgraph Used [Entangle Used]
        direction LR
        A3(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
        B3(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
55%</span>)
      end
  `,img:`${e}/assets/act1/monsters/red-slaver.webp`,name:"Red Slaver",slug:"red-slaver"})),vn=()=>t(Bn),we=n(()=>({effect:`${s.v>=2?18:16} Damage. 2 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Flame Tackle"})),je=n(()=>({effect:`${s.v>=17?3:2} Frail.`,intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),ke={effect:"Spawns 2 Spike Slime M with current HP. Dies",intent:`${e}/assets/intents/unknown.png`,name:"Split"},Be=n(()=>({effect:`${s.v>=2?10:8} Damage. 1 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Flame Tackle"})),ve=n(()=>({effect:"1 Frail.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),De=n(()=>({effect:`${s.v>=2?6:5} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Tackle"})),Dn=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=${e}/assets/act1/monsters/spike-slime-l.webp class="h-10 object-contain inline" />]
        A(${t(we).effect}<img src=${t(we).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
        B(${t(je).effect}<img src=${t(je).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
70%</span>)
        C(${ke.effect}<img src=${ke.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower</span>)
      end
      subgraph Medium [<img src=${e}/assets/act1/monsters/spike-slime-m.webp class="h-10 object-contain inline" />]
        A2(${t(Be).effect}<img src=${t(Be).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
        B2(${t(ve).effect}<img src=${t(ve).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
70%</span>)
      end
      subgraph Small [<img src=${e}/assets/act1/monsters/spike-slime-s.webp class="h-10 object-contain inline" />]
        A3(${t(De).effect}<img src=${t(De).intent} class="h-10 object-contain" />)
      end
  `,img:`${e}/assets/act1/monsters/spike-slimes.webp`,name:"Spike Slimes",slug:"spike-slimes"})),Sn=()=>t(Dn),G={effect:"Spawns 2 Bronze Orbs.",intent:`${e}/assets/intents/unknown.png`,name:"Spawn Orbs"},o=n(()=>({effect:`${s.v>=4?4:3} Strength. ${s.v>=9?12:9} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Boost"})),l=n(()=>({effect:`${s.v>=4?8:7} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Flail"})),y=n(()=>({effect:`${s.v>=4?50:45} Damage.`,intent:`${e}/assets/intents/7.png`,name:"HYPER BEAM"})),P={effect:"Steals the rarest card in the draw pile, or from the discard pile if the draw pile is empty.",intent:`${e}/assets/intents/debuff2.png`,name:"Stasis"},F={effect:"8 Damage.",intent:`${e}/assets/intents/2.png`,name:"Beam"},H={effect:`<img src=${e}/assets/act2/bosses/bronze-automaton.webp class='h-10 object-contain inline' /> 12 Block.`,intent:`${e}/assets/intents/defend.png`,name:"Support Beam"},An=n(()=>({flowchart:s.v>=19?`
    flowchart-elk TB
      A(${G.effect}<img src=${G.intent} class="h-10 object-contain" />)
      B(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      B2(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      B3(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      C(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
      C2(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
      D(${t(y).effect}<img src=${t(y).intent} class="h-10 object-contain" />)
      subgraph Bronze [<img src=${e}/assets/act2/bosses/bronze-automaton.webp class="h-10 object-contain inline" />]
        direction LR
        A==>C==>B==>C2==>B2==>D==>B3==>C
      end
      subgraph Orb [<img src=${e}/assets/act2/bosses/bronze-orb.webp class="h-10 object-contain inline" />]
        E(${P.effect}<img src=${P.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        F(${F.effect}<img src=${F.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
7.5%
Card Stolen: 30%</span>)  
        G(${H.effect}<img src=${H.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
17.5%
Card Stolen: 70%</span>)  
      end
  `:`
    flowchart-elk TB
      A(${G.effect}<img src=${G.intent} class="h-10 object-contain" />)
      B(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      B2(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      C(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
      C2(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
      D(${t(y).effect}<img src=${t(y).intent} class="h-10 object-contain" />)  
      E(Stunned<img src='${e}/assets/intents/stun.png' class="h-10 object-contain" />)
      subgraph Bronze [<img src=${e}/assets/act2/bosses/bronze-automaton.webp class="h-10 object-contain inline" />]
        direction LR
        A==>C==>B==>C2==>B2==>D==>E==>C
      end
      subgraph Orb [<img src=${e}/assets/act2/bosses/bronze-orb.webp class="h-10 object-contain inline" />]
        F(${P.effect}<img src=${P.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        G(${F.effect}<img src=${F.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
7.5%
Card Stolen: 30%</span>)  
        H(${H.effect}<img src=${H.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
17.5%
Card Stolen: 70%</span>)  
      end
  `,img:`${e}/assets/act2/bosses/bronze-automaton.webp`,name:"Bronze Automaton",slug:"bronze-automaton"})),Mn=()=>t(An),W=n(()=>({effect:`${s.v>=9?s.v>=19?20:18:15} Block. ${s.v>=9?s.v>=19?7:6:5} Metallicize.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Defensive Stance"})),O=n(()=>({effect:`${s.v>=4?14:12} Damage. 2 Frail. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Face Slap"})),U={effect:"2 Weak. 2 Vulnerable.",intent:`${e}/assets/intents/debuff1.png`,name:"Taunt"},N=n(()=>({effect:`${s.v>=4?18:16} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Heavy Slash"})),Se=n(()=>({effect:`${s.v>=4?s.v>=19?4:3:2} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Gloat"})),z={effect:"10 x 2 Damage.",intent:`${e}/assets/intents/5.png`,name:"Execute"},V=n(()=>({effect:`Removes debuffs. ${s.v>=4?s.v>=19?12:9:6} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Anger"})),Rn=n(()=>({flowchart:s.v>=19?`
    flowchart-elk TB
      subgraph Main [Main.
<span class="text-xs">Invalid moves, when rolled, use next instead.</span>]
        direction LR
        A(${t(W).effect}<img src=${t(W).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max In a Row: 1
${s.v>=19?"30%":"15%"}</span>)
        B(${t(O).effect}<img src=${t(O).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(N).effect}<img src=${t(N).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
        A==>B<==>D
      end
      subgraph Phase1 [Phase 1]
        subgraph Turn4 [Turn 4, 8, 12, etc.]
          C(${U.effect}<img src=${U.intent} class="h-10 object-contain" />)
        end
      end
      subgraph Phase2 [Phase 2]
        F(${z.effect}<img src=${z.intent} class="h-10 object-contain" />)
        G(${t(V).effect}<img src=${t(V).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Does NOT interupt current intent.</span>)
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `:`
    flowchart-elk TB
      subgraph Main [Main.
<span class="text-xs">Invalid moves, when rolled, use next instead.</span>]
        direction LR
        A(${t(W).effect}<img src=${t(W).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max In a Row: 1
${s.v>=19?"30%":"15%"}</span>)
        B(${t(O).effect}<img src=${t(O).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(N).effect}<img src=${t(N).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
        E(${t(Se).effect}<img src=${t(Se).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
15%</span>)
        A==>E==>B<==>D
      end
      subgraph Phase1 [Phase 1]
        subgraph Turn4 [Turn 4, 8, 12, etc.]
          C(${U.effect}<img src=${U.intent} class="h-10 object-contain" />)
        end
      end
      subgraph Phase2 [Phase 2]
        F(${z.effect}<img src=${z.intent} class="h-10 object-contain" />)
        G(${t(V).effect}<img src=${t(V).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Does NOT interupt current intent.</span>)
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `,img:`${e}/assets/act2/bosses/the-champ.webp`,name:"The Champ",slug:"the-champ"})),Tn=()=>t(Rn),_=n(()=>({effect:`Group ${s.v>=4?s.v>=19?5:4:3} Strength. ${s.v>=4?s.v>=19?23:18:15} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Buff"})),q=n(()=>({effect:`${s.v>=4?21:18} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Fireball"})),Bt=n(()=>({effect:`${s.v>=19?5:3} Weak. ${s.v>=19?5:3} Vulnerable. ${s.v>=19?5:3} Frail.`,intent:`${e}/assets/intents/debuff2.png`,name:"Mega Debuff"})),vt={effect:"Spawns up to 2 Torch Heads.",intent:`${e}/assets/intents/unknown.png`,name:"Spawn"},Ae={effect:"7 Damage.",intent:`${e}/assets/intents/2.png`,name:"Tackle"},Cn=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Head [<img src=${e}/assets/act2/bosses/torch-head.webp class="h-10 object-contain inline" />]
        E(${Ae.effect}<img src=${Ae.intent} class="h-10 object-contain" />)
      end
      subgraph Collector [<img src=${e}/assets/act2/bosses/the-collector.webp class="h-10 object-contain inline" />]
      subgraph 0-1Torch [0-1 Torch Heads]
          A(<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
          B(<img src=${t(q).intent} class="h-10 object-contain" /><span class="text-xs">45%</span>)
          D(<img src=${vt.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
        end
        subgraph 2Torch [2 Torch Heads]
          A2(<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
          B2(<img src=${t(q).intent} class="h-10 object-contain" /><span class="text-xs">70%</span>)
        end
        subgraph Turn4 [Turn 4]
          C(<img src=${t(Bt).intent} class="h-10 object-contain" />)
        end
      end
  `,moves:`
    flowchart-elk TB
      A(${t(_).effect}<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${t(q).effect}<img src=${t(q).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      C(${t(Bt).effect}<img src=${t(Bt).intent} class="h-10 object-contain" />)
      D(${vt.effect}<img src=${vt.intent} class="h-10 object-contain" />)
  `,img:`${e}/assets/act2/bosses/the-collector.webp`,name:"The Collector",slug:"the-collector"})),In=()=>t(Cn),Dt=n(()=>({effect:`${s.v>=3?7:6} x N Damage. N = 2 + ${s.v>=18?"Multi/Single Stabs":"Multi-Stabs"} used`,intent:`${e}/assets/intents/3.png`,name:"Multi-Stab"})),St=n(()=>({effect:`${s.v>=3?24:21} Damage.`,intent:`${e}/assets/intents/5.png`,name:"Single Stab"})),En=n(()=>({flowchart:`
    flowchart-elk TB
      A(*${t(Dt).name}*
${t(Dt).effect}<img src=${t(Dt).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max In a Row: 2
85%</span>)
      B(*${t(St).name}*
${t(St).effect}<img src=${t(St).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max In a Row: 1
15%</span>)
  `,img:`${e}/assets/act2/elites/book-of-stabbing.webp`,name:"Book of Stabbing",slug:"book-of-stabbing"})),Ln=()=>t(En),d=n(()=>({effect:`Group ${s.v>=3?s.v>=18?5:4:3} Strength. Group ${s.v>=18?10:6} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Encourage"})),w={effect:"Spawns 2 Gremlins.",intent:`${e}/assets/intents/unknown.png`,name:"Rally!"},p={effect:"6 x 3 Damage.",intent:`${e}/assets/intents/4.png`,name:"Stab"},Gn=n(()=>({flowchart:`
    flowchart-elk TB
      B0(<img src=${w.intent} class="h-10 object-contain" /><span class="text-xs">75%</span>)
      C0(<img src=${p.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
      A1(<img src=${t(d).intent} class="h-10 object-contain" /><span class="text-xs">37.5%</span>)
      B1a(<img src=${w.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B1b(<img src=${w.intent} class="h-10 object-contain" /><span class="text-xs">62.5%</span>)
      C1(<img src=${p.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      A2(<img src=${t(d).intent} class="h-10 object-contain" /><span class="text-xs">66%</span>)
      C2(<img src=${p.intent} class="h-10 object-contain" /><span class="text-xs">34%</span>)
      subgraph 0Gremlin [0 Gremlins]
        B0
        C0
      end
      subgraph 1Gremlin [1 Gremlin]
        subgraph prevMoveEncourage [Previous Move <img src=${t(d).intent} class="h-10 object-contain inline" />]
          B1a
          C1
        end
        subgraph prevMoveStab [Previous Move <img src=${p.intent} class="h-10 object-contain inline" />]
          A1
          B1b
        end
      end
      subgraph 2Gremlin [2+ Gremlins]
        A2
        C2
      end
  `,moves:`
    flowchart-elk TB
      A(${t(d).effect}<img src=${t(d).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${w.effect}<img src=${w.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${p.effect}<img src=${p.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
  `,img:`${e}/assets/act2/elites/gremlin-leader.webp`,name:"Gremlin Leader",slug:"gremlin-leader"})),yn=()=>t(Gn),X=n(()=>({effect:`7 Damage. ${s.v>=3?s.v>=18?3:2:1} Wound into discard.${s.v>=18?" 1 Strength.":""}`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Scouring Whip"})),J=n(()=>({effect:`${s.v>=2?13:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Stab"})),Z=n(()=>({effect:`${s.v>=2?8:7} Damage. ${s.v>=17?2:1} Weak.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Rake"})),g=n(()=>({effect:`${s.v>=2?14:13} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Stab"})),r=n(()=>({effect:`${s.v>=2?9:8} Damage. ${s.v>=17?2:1} Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Scrape"})),Q={effect:"1 Entangled.",intent:`${e}/assets/intents/debuff2.png`,name:"Entangle"},Pn=n(()=>({flowchart:s.v>=17?`
    flowchart-elk TB
      subgraph Red [<img src=${e}/assets/act1/monsters/red-slaver.webp class="h-10 object-contain inline" />]
        direction LR
        subgraph Not [Entangle Not Used]
          A(${t(g).effect}<img src=${t(g).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
          B(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
          B<==>A
        end
        C(${Q.effect}<img src=${Q.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
        C==>Used
        subgraph Used [Entangle Used]
          A2(${t(g).effect}<img src=${t(g).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
          B2(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
55%</span>)
        end
      end
      subgraph Master [<img src=${e}/assets/act2/elites/taskmaster.webp class="h-10 object-contain inline" />]
        A4(${t(X).effect}<img src=${t(X).intent} class="h-10 object-contain" />)
      end
      subgraph Blue [<img src=${e}/assets/act1/monsters/blue-slaver.webp class="h-10 object-contain inline" />]
        A5(${t(J).effect}<img src=${t(J).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
        B5(${t(Z).effect}<img src=${t(Z).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
40%</span>)
      end
  `:`
    flowchart-elk TB
      subgraph Red [<img src=${e}/assets/act1/monsters/red-slaver.webp class="h-10 object-contain inline" />]
        direction LR
        subgraph Not [Entangle Not Used]
          A(${t(g).effect}<img src=${t(g).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
          B(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
          B2(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
          B==>B2==>A==>B
        end
        C(${Q.effect}<img src=${Q.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
        C==>Used
        subgraph Used [Entangle Used]
          A2(${t(g).effect}<img src=${t(g).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
          B3(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
55%</span>)
        end
      end
      subgraph Master [<img src=${e}/assets/act2/elites/taskmaster.webp class="h-10 object-contain inline" />]
        A4(${t(X).effect}<img src=${t(X).intent} class="h-10 object-contain" />)
      end
      subgraph Blue [<img src=${e}/assets/act1/monsters/blue-slaver.webp class="h-10 object-contain inline" />]
        A5(${t(J).effect}<img src=${t(J).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
        B5(${t(Z).effect}<img src=${t(Z).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
40%</span>)
      end
  `,img:`${e}/assets/act2/elites/taskmaster.webp`,name:"Taskmaster",slug:"taskmaster"})),Fn=()=>t(Pn),Me={effect:"1 Strength.",intent:`${e}/assets/intents/buff1.png`,name:"Caw"},Re=n(()=>({effect:`1 x ${s.v>=2?6:5} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Peck"})),Te=n(()=>({effect:`${s.v>=2?14:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Swoop"})),Ce=n(()=>({effect:`Flying ${s.v>=17?4:3}.`,intent:`${e}/assets/intents/unknown.png`,name:"Fly"})),Ie={effect:"3 Damage",intent:`${e}/assets/intents/1.png`,name:"Headbutt"},Hn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${Me.effect}<img src=${Me.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 37.5%
30%</span>)
      B(${t(Re).effect}<img src=${t(Re).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: 62.5%
50%</span>)
      C(${t(Te).effect}<img src=${t(Te).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 0%
20%</span>)
      D(${t(Ce).effect}<img src=${t(Ce).intent} class="h-10 object-contain" />)
      E(${Ie.effect}<img src=${Ie.intent} class="h-10 object-contain" />)
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
  `,img:`${e}/assets/act2/monsters/byrd-flying.webp`,name:"Byrd",slug:"byrd"})),Wn=()=>t(Hn),Ee=n(()=>({effect:`${s.v>=2?14:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Slash"})),Le=n(()=>({effect:`${s.v>=2?7:6} x 3 Damage.`,intent:`${e}/assets/intents/4.png`,name:"Fury"})),Ge=n(()=>({effect:`Ally ${s.v>=17?20:15} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Defend"})),ye=n(()=>({effect:`Group ${s.v>=17?20:16} Heal.`,intent:`${e}/assets/intents/buff1.png`,name:"Heal"})),Pe=n(()=>({effect:`Group ${s.v>=2?s.v>=17?4:3:2} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Buff"})),Fe=n(()=>({effect:`${s.v>=2?9:8} Damage. 2 Frail.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Attack/Debuff"})),On=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Centurion [<img src=${e}/assets/act2/monsters/centurion.webp class="h-10 object-contain inline" />]
        A(${t(Ee).effect}<img src=${t(Ee).intent} class="h-10 object-contain" /><span class="text-xs">65%</span>)
        subgraph MysticAlive [Mystic Alive]
          C(${t(Ge).effect}<img src=${t(Ge).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
        subgraph MysticDead [Mystic Dead]
          B(${t(Le).effect}<img src=${t(Le).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
      end
      subgraph Mystic [<img src=${e}/assets/act2/monsters/mystic.webp class="h-10 object-contain inline" />]
        A2(${t(ye).effect}<img src=${t(ye).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Trigger: An enemy is hurt ${s.v>=17?21:16} or more</span>)
        B2(${t(Pe).effect}<img src=${t(Pe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
        C2(${t(Fe).effect}<img src=${t(Fe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${s.v>=17?1:2}
60%</span>)
      end
  `,img:`${e}/assets/act2/monsters/centurion-mystic.webp`,name:"Centurion and Mystic",slug:"centurion-mystic"})),Un=()=>t(On),b=n(()=>({effect:`${s.v>=2?6:5} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Poke"})),Y=n(()=>({effect:`${s.v>=2?21:18} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Zap"})),K=n(()=>({effect:`${s.v>=2?12:10} Damage. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Debilitate"})),tt={effect:"3 Weak. 3 Strength.",intent:`${e}/assets/intents/debuff1.png`,name:"Drain"},et={effect:"1 Hex.",intent:`${e}/assets/intents/debuff2.png`,name:"Hex"},Nn=n(()=>({flowchart:s.v>=17?`
    flowchart-elk LR
      A(${t(b).effect}<img src=${t(b).intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${t(Y).effect}<img src=${t(Y).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(K).effect}<img src=${t(K).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${tt.effect}<img src=${tt.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${et.effect}<img src=${et.intent} class="h-10 object-contain" />)
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
      A(${t(b).effect}<img src=${t(b).intent} class="h-10 object-contain" />)
      A2(${t(b).effect}<img src=${t(b).intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${t(Y).effect}<img src=${t(Y).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(K).effect}<img src=${t(K).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${tt.effect}<img src=${tt.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${et.effect}<img src=${et.intent} class="h-10 object-contain" />)
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
  `,img:`${e}/assets/act2/monsters/chosen.webp`,name:"Chosen",slug:"chosen"})),zn=()=>t(Nn),st=n(()=>({effect:`${s.v>=2?11:10} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Mug"})),He=n(()=>({effect:`${s.v>=2?18:16} Damage`,intent:`${e}/assets/intents/4.png`,name:"Lunge"})),We=n(()=>({effect:`${s.v>=17?17:11} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Smoke Bomb"})),Oe={effect:"Escape.",intent:`${e}/assets/intents/escape.png`,name:"Escape"},Vn=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(st).effect}<img src=${t(st).intent} class="h-10 object-contain" />)
      A2(${t(st).effect}<img src=${t(st).intent} class="h-10 object-contain" />)
      B(${t(He).effect}<img src=${t(He).intent} class="h-10 object-contain" />)
      C(${t(We).effect}<img src=${t(We).intent} class="h-10 object-contain" />)
      D(${Oe.effect}<img src=${Oe.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:`${e}/assets/act2/monsters/mugger.webp`,name:"Mugger",slug:"mugger"})),_n=()=>t(Vn),Ue=n(()=>({effect:`${s.v>=2?7:6} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Double Strike"})),Ne=n(()=>({effect:`${s.v>=2?12:10} Lifesteal.`,intent:`${e}/assets/intents/attackBuff.png`,name:"Suck"})),ze=n(()=>({effect:`${s.v>=2?21:18} Damage. 2 Frail.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Fell"})),qn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(Ue).effect}<img src=${t(Ue).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: ${s.v>=17?"0%":"50%"}
40%</span>)
      B(${t(Ne).effect}<img src=${t(Ne).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: ${s.v>=17?"0%":"50%"}
40%</span>)
      C(${t(ze).effect}<img src=${t(ze).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: ${s.v>=17?"100%":"0%"}
20%</span>)
      D(Stunned<img src='${e}/assets/intents/stun.png' class="h-10 object-contain" /><span class="text-xs">Trigger: Platted Armor reduced to 0</span>)
  `,img:`${e}/assets/act2/monsters/shelled-parasite.webp`,name:"Shelled Parasite",slug:"shelled-parasite"})),Xn=()=>t(qn),Ve=n(()=>({effect:`${s.v>=2?8:7} x 3 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Chomp"})),_e={effect:"2 Frail. 2 Weak.",intent:`${e}/assets/intents/debuff2.png`,name:"Enfeebling Spores"},Jn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(Ve).effect}<img src=${t(Ve).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
65%</span>)
      B(${_e.effect}<img src=${_e.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
35%</span>)
  `,img:`${e}/assets/act2/monsters/snake-plant.webp`,name:"Snake Plant",slug:"snake-plant"})),Zn=()=>t(Jn),qe={effect:"Confuse.",intent:`${e}/assets/intents/debuff2.png`,name:"Perplexing Glare"},Xe=n(()=>({effect:`${s.v>=2?10:8} Damage. 2 Vulnerable${s.v>=17?" 2 Weak":""}.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Chomp"})),Je=n(()=>({effect:`${s.v>=2?18:15} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Bite"})),Qn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${qe.effect}<img src=${qe.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%
0%</span>)
      B(${t(Xe).effect}<img src=${t(Xe).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(Je).effect}<img src=${t(Je).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
  `,img:`${e}/assets/act2/monsters/snecko.webp`,name:"Snecko",slug:"snecko"})),Yn=()=>t(Qn),Ze=n(()=>({effect:`${s.v>=2?11:10} x 2 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Slam"})),Qe=n(()=>({effect:`${s.v>=17?35:25} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Activate"})),Ye=n(()=>({effect:`${s.v>=2?11:10} Damage. 15 Block.`,intent:`${e}/assets/intents/attackDefend.png`,name:"Harden"})),Ke=n(()=>({effect:`${s.v>=2?11:10} Damage. 5 Frail.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Attack/Debuff"})),Kn=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Ze).effect}<img src=${t(Ze).intent} class="h-10 object-contain" />)
      B(${t(Qe).effect}<img src=${t(Qe).intent} class="h-10 object-contain" />)
      C(${t(Ye).effect}<img src=${t(Ye).intent} class="h-10 object-contain" />)
      D(${t(Ke).effect}<img src=${t(Ke).intent} class="h-10 object-contain" />)
      B==>D==>A<==>C
  `,img:`${e}/assets/act2/monsters/spheric-guardian.webp`,name:"Spheric Guardian",slug:"spheric-guardian"})),ta=()=>t(Kn),ts={effect:"20 Damage.",intent:`${e}/assets/intents/5.png`,name:"Slash"},es={effect:"6 x 4 Damage.",intent:`${e}/assets/intents/5.png`,name:"Soul Strike"},ss={effect:"Removes debuffs.",intent:`${e}/assets/intents/unknown.png`,name:"Rebirth"},ns={effect:"40 Damage.",intent:`${e}/assets/intents/7.png`,name:"Dark Echo"},as={effect:"18 Damage. 1 Void into draw.",intent:`${e}/assets/intents/attackDebuff.png`,name:"Sludge"},cs={effect:"10 x 3 Damage.",intent:`${e}/assets/intents/7.png`,name:"Tackle"},ea=n(()=>({flowchart:`
    flowchart-elk LR
      subgraph Unawakened [<img src=${e}/assets/act3/bosses/awakened-one-unawakened.webp class="h-10 object-contain inline" />]
        direction LR
        A(${ts.effect}<img src=${ts.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: 100%
75%</span>)
        B(${es.effect}<img src=${es.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 0%
25%</span>)
      end
      C(${ss.effect}<img src=${ss.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      A2(${ns.effect}<img src=${ns.intent} class="h-10 object-contain" />)
      C==>A2==>Awakened
      subgraph Awakened [<img src=${e}/assets/act3/bosses/awakened-one-awakened.webp class="h-10 object-contain inline" />]
        direction LR
        B2(${as.effect}<img src=${as.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        C2(${cs.effect}<img src=${cs.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
  `,img:`${e}/assets/act3/bosses/awakened-one-unawakened.webp`,name:"Awakened One",slug:"awakened-one"})),sa=()=>t(ea),is={effect:"Group 3 Strength.",intent:`${e}/assets/intents/buff1.png`,name:"Circle of Power"},os=n(()=>({effect:`${s.v>=4?12:10} x 2 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Beam"})),rs=n(()=>({effect:`Group 16 Block.${s.v>=19?" 3 Plated Armor.":""}`,intent:`${e}/assets/intents/${s.v>=19?"defendBuff":"defend"}.png`,name:"Square Of Protection"})),fs=n(()=>({effect:`${s.v>=4?12:10} x 2 Damage. 2 Dazed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Beam"})),na=n(()=>({flowchart:`
    flowchart-elk LR
      subgraph Donu [<img src=${e}/assets/act3/bosses/donu.webp class="h-10 object-contain inline" />]
        A(${is.effect}<img src=${is.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        B(${t(os).effect}<img src=${t(os).intent} class="h-10 object-contain" />)
        A<==>B
      end
      subgraph Deca [<img src=${e}/assets/act3/bosses/deca.webp class="h-10 object-contain inline" />]
        A2(${t(rs).effect}<img src=${t(rs).intent} class="h-10 object-contain" />)
        B2(${t(fs).effect}<img src=${t(fs).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2<==>B2
      end
  `,img:`${e}/assets/act3/bosses/donu-deca.webp`,name:"Donu and Deca",slug:"donu-deca"})),aa=()=>t(na),ls=n(()=>({effect:`${s.v>=4?8:7} x 3 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Reverberate"})),gs=n(()=>({effect:`${s.v>=4?32:26} Damage. 1 Draw Reduction.${s.v>=19?" 2 Slimed into discard.":""}`,intent:`${e}/assets/intents/6.png`,name:"Head Slam"})),$s=n(()=>({effect:`20 Block. 1 Vulnerable. 1 Weak.${s.v>=19?" 1 Frail.":""}`,intent:`${e}/assets/intents/defendDebuff.png`,name:"Ripple"})),ms=n(()=>({effect:`Heals to 50% HP. Removes debuffs.${s.v>=19?" 32 Block. ":""}`,intent:`${e}/assets/intents/buff1.png`,name:"Haste"})),ca=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(ls).effect}<img src=${t(ls).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
      B(${t(gs).effect}<img src=${t(gs).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
35%</span>)
      C(${t($s).effect}<img src=${t($s).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
      D(${t(ms).effect}<img src=${t(ms).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
Trigger: Below 50% HP.</span>)
  `,img:`${e}/assets/act3/bosses/time-eater.webp`,name:"Time Eater",slug:"time-eater"})),ia=()=>t(ca),ps={effect:"13 Damage.",intent:`${e}/assets/intents/3.png`,name:"Count"},bs={effect:"1 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Glare"},hs=n(()=>({effect:`${s.v>=3?40:30} + T Damage. T starts at 0 and increases by 5 every time the attack is used, up to 30 additional Damage.`,intent:`${e}/assets/intents/7.png`,name:"It Is Time"})),oa=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turns [Turns 1-${s.v>=18?3:4}]
        A(${ps.effect}<img src=${ps.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        B(${bs.effect}<img src=${bs.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
      subgraph Turns+ [Turn ${s.v>=18?4:5}+]
        C(${t(hs).effect}<img src=${t(hs).intent} class="h-10 object-contain" />)
      end
  `,img:`${e}/assets/act3/elites/giant-head.webp`,name:"Giant Head",slug:"giant-head"})),ra=()=>t(oa),nt=n(()=>({effect:`${s.v>=18?5:3} Burn into discard.`,intent:`${e}/assets/intents/debuff1.png`,name:"Debuff"})),at=n(()=>({effect:`${s.v>=3?7:6} x 3 Damage.`,intent:`${e}/assets/intents/4.png`,name:"Attack"})),At={effect:"45 Damage.",intent:`${e}/assets/intents/7.png`,name:"Scythe"},fa=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Moves
        A(${t(nt).effect}<img src=${t(nt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
        B(${t(at).effect}<img src=${t(at).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
        C(${At.effect}<img src=${At.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      end
      subgraph Turn1 [Turn 1]
        A1(<img src=${t(nt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B1(<img src=${t(at).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Turn+ [Turn 2+]
        A2(<img src=${t(nt).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        B2(<img src=${t(at).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        C2(<img src=${At.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      Turn1~~~Moves
      Turn+~~~Moves
  `,img:`${e}/assets/act3/elites/nemesis.webp`,name:"Nemesis",slug:"nemesis"})),la=()=>t(fa),Mt=n(()=>({effect:`Spawns ${s.v>=18?2:"a"} Dagger.`,intent:`${e}/assets/intents/unknown.png`,name:"Summon"})),ct=n(()=>({effect:`${s.v>=3?16:13} x 2 Damage. 1 Weak.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Snake Strike"})),it=n(()=>({effect:`${s.v>=3?34:30} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Big Bite"})),us={effect:"9 Damage. 1 Wound into discard.",intent:`${e}/assets/intents/attackDebuff.png`,name:"Stab"},xs={effect:"25 Damage. Dies.",intent:`${e}/assets/intents/6.png`,name:"Explode"},ga=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Reptomancer [<img src=${e}/assets/act3/elites/reptomancer.webp class="h-10 object-contain inline" />]
        subgraph 0-3Daggers [0-3 Daggers]
          A2(<img src=${t(Mt).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          B2(<img src=${t(ct).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          C2(<img src=${t(it).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
        subgraph 4Daggers [4 Daggers]
          B3(<img src=${t(ct).intent} class="h-10 object-contain" /><span class="text-xs">67%</span>)
          C3(<img src=${t(it).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
      end
      subgraph Dagger [<img src=${e}/assets/act3/elites/dagger.webp class="h-10 object-contain inline" />]
        D(${us.effect}<img src=${us.intent} class="h-10 object-contain" />)
        E(${xs.effect}<img src=${xs.intent} class="h-10 object-contain" />)
        D==>E
      end
  `,moves:`
    flowchart-elk TB
      A(${t(Mt).effect}<img src=${t(Mt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      B(${t(ct).effect}<img src=${t(ct).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${t(it).effect}<img src=${t(it).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
  `,img:`${e}/assets/act3/elites/reptomancer.webp`,name:"Reptomancer",slug:"reptomancer"})),$a=()=>t(ga),ot=n(()=>({effect:`${s.v>=2?"D + 2":"D"} Damage. D is chosen between 7 and 11 at the beginning of the battle.`,intent:`${e}/assets/intents/2.png`,name:"Nip"})),Rt=n(()=>({effect:`${s.v>=2?9:8} x 2 Damage.`,intent:`${e}/assets/intents/4.png`,name:"Chomp"})),rt=n(()=>({effect:`12 Block.${s.v>=17?" 2 Strength.":""}`,intent:`${e}/assets/intents/${s.v>=17?"defendBuff":"defend"}.png`,name:"Harden"})),ds={effect:"Revives with 50% HP.",intent:`${e}/assets/intents/buff1.png`,name:"Reincarnate"},ws={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Regrow"},ma=n(()=>({flowchart:`
    flowchart-elk TB
      D(${ds.effect}<img src=${ds.intent} class="h-10 object-contain" />)
      E(${ws.effect}<img src=${ws.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      E==>D
      subgraph Middle [Middle Darkling / Outer Darklings Turn 1]
        A1(<img src=${t(ot).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C1(<img src=${t(rt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Outer [Outer Darklings Turn 2+]
        A2(<img src=${t(ot).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
        B2(<img src=${t(Rt).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
        C2(<img src=${t(rt).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      subgraph Moves
        A(${t(ot).effect}<img src=${t(ot).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
        B(${t(Rt).effect}<img src=${t(Rt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
        C(${t(rt).effect}<img src=${t(rt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      end
      Middle~~~Moves
      Outer~~~Moves
  `,img:`${e}/assets/act3/monsters/darkling.webp`,name:"Darkling",slug:"darkling"})),pa=()=>t(ma),js=n(()=>({effect:`${s.v>=2?11:10} Damage. 1 Burn into draw. 1 Burn into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Laser"})),ks=n(()=>({effect:`${s.v>=2?16:15} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Claw"})),ba=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(js).effect}<img src=${t(js).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(ks).effect}<img src=${t(ks).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
  `,img:`${e}/assets/act3/monsters/orb-walker.webp`,name:"Orb Walker",slug:"orb-walker"})),ha=()=>t(ba),Bs=n(()=>({effect:`${s.v>=2?9:7} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Cut"})),vs={effect:"2 Thorns.",intent:`${e}/assets/intents/buff1.png`,name:"Spike"},ft=n(()=>({effect:`${s.v>=2?11:9} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Slam"})),Ds={effect:"30 Damage. Dies.",intent:`${e}/assets/intents/unknown.png`,name:"Explode"},Ss=n(()=>({effect:`${s.v>=2?13:11} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Bash"})),As={effect:"2 Dazed into draw.",intent:`${e}/assets/intents/debuff1.png`,name:"Repulse"},ua=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Spiker [<img src=${e}/assets/act3/monsters/spiker.webp class="h-10 object-contain inline" />]
        A(${t(Bs).effect}<img src=${t(Bs).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
        B(${vs.effect}<img src=${vs.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 6
50%</span>)
      end
      subgraph Exploder [<img src=${e}/assets/act3/monsters/exploder.webp class="h-10 object-contain inline" />]
        A2(${t(ft).effect}<img src=${t(ft).intent} class="h-10 object-contain" />)
        A3(${t(ft).effect}<img src=${t(ft).intent} class="h-10 object-contain" />)
        B2(${Ds.effect}<img src=${Ds.intent} class="h-10 object-contain" />)
        A2==>A3==>B2
      end
      subgraph Repulsor [<img src=${e}/assets/act3/monsters/repulsor.webp class="h-10 object-contain inline" />]
        A4(${t(Ss).effect}<img src=${t(Ss).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
        B3(${As.effect}<img src=${As.intent} class="h-10 object-contain" /><span class="text-xs">80%</span>)
      end
  `,img:`${e}/assets/act3/monsters/shapes.webp`,name:"Shapes",slug:"shapes"})),xa=()=>t(ua),h=n(()=>({effect:`${s.v>=2?18:16} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Quick Tackle"})),lt=n(()=>({effect:`${s.v>=2?25:22} Damage.`,intent:`${e}/assets/intents/5.png`,name:"Smash"})),u=n(()=>({effect:`${s.v>=17?12:10} Constricted.`,intent:`${e}/assets/intents/debuff2.png`,name:"Constrict"})),da=n(()=>({flowchart:s.v>=17?`
    flowchart-elk TB
      subgraph notC [Not Constricted]
        C(${t(u).effect}<img src=${t(u).intent} class="h-10 object-contain" />)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${t(u).intent} class="h-10 object-contain inline" />]
        A2(${t(h).effect}<img src=${t(h).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        B(${t(lt).effect}<img src=${t(lt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
      C==>isC
  `:`
    flowchart-elk TB
      subgraph notC [Not Constricted]
        A(${t(h).effect}<img src=${t(h).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        C(${t(u).effect}<img src=${t(u).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${t(u).intent} class="h-10 object-contain inline" />]
        A2(${t(h).effect}<img src=${t(h).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        B(${t(lt).effect}<img src=${t(lt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
      C==>isC
  `,img:`${e}/assets/act3/monsters/spire-growth.webp`,name:"Spire Growth",slug:"spire-growth"})),wa=()=>t(da),Ms=n(()=>({effect:`${s.v>=17?5:3} Weak. ${s.v>=17?5:3} Frail.`,intent:`${e}/assets/intents/debuff2.png`,name:"Roar"})),Rs=n(()=>({effect:`${s.v>=17?5:3} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Drool"})),Ts=n(()=>({effect:`${s.v>=2?30:25} Damage.`,intent:`${e}/assets/intents/6.png`,name:"Slam"})),gt={effect:"5 x T Damage. T = Turn Number / 2, rounded up.",intent:`${e}/assets/intents/2.png`,name:"Nom"},ja=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Ms).effect}<img src=${t(Ms).intent} class="h-10 object-contain" />)
      A==>afterDebuff
      subgraph afterDebuff [After Debuff]
        C(${t(Ts).effect}<img src=${t(Ts).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D(${gt.effect}<img src=${gt.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph afterSlam [After Slam]
        B(${t(Rs).effect}<img src=${t(Rs).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D2(${gt.effect}<img src=${gt.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      D2==>B
      B==>afterDebuff
      D==>B
      C==>afterSlam
  `,img:`${e}/assets/act3/monsters/the-maw.webp`,name:"The Maw",slug:"the-maw"})),ka=()=>t(ja),Cs=n(()=>({effect:`${s.v>=2?40:30} + X*10 Damage. X = Turn - 1`,intent:`${e}/assets/intents/7.png`,name:"Attack"})),Ba=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Cs).effect}<img src=${t(Cs).intent} class="h-10 object-contain" />)
  `,img:`${e}/assets/act3/monsters/transient.webp`,name:"Transient",slug:"transient"})),va=()=>t(Ba),Is={effect:"1 Parasite into deck. Only affects future combats.",intent:`${e}/assets/intents/debuff2.png`,name:"Implant"},$t=n(()=>({effect:`${s.v>=2?16:15} Damage. ${s.v>=2?18:16} Block.`,intent:`${e}/assets/intents/attackDefend.png`,name:"Flail"})),mt=n(()=>({effect:`${s.v>=2?12:10} Damage. 2 Weak. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Wither"})),pt=n(()=>({effect:`${s.v>=2?9:7} x 3 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Multi-Strike"})),bt=n(()=>({effect:`${s.v>=2?38:32} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Strong Strike"})),Da=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turn1 [Turn 1]
        B(${t($t).effect}<img src=${t($t).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        C(${t(mt).effect}<img src=${t(mt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(pt).effect}<img src=${t(pt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        E(${t(bt).effect}<img src=${t(bt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
      end
      subgraph Turn2+ [Turn 2+]
        A(${Is.effect}<img src=${Is.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
10%</span>)
        B2(${t($t).effect}<img src=${t($t).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
30%</span>)
        C2(${t(mt).effect}<img src=${t(mt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
        D2(${t(pt).effect}<img src=${t(pt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
30%</span>)
        E2(${t(bt).effect}<img src=${t(bt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
10%</span>)
      end
  `,img:`${e}/assets/act3/monsters/writhing-mass.webp`,name:"Writhing Mass",slug:"writhing-mass"})),Sa=()=>t(Da),Es={effect:"2 Vulnerable. 2 Weak. 2 Frail. Dazed, Slimed, Wound, Burn and Void into draw.",intent:`${e}/assets/intents/debuff2.png`,name:"Debilitate"},ht=n(()=>({effect:`2 x ${s.v>=4?15:12} Damage.`,intent:`${e}/assets/intents/5.png`,name:"Blood Shots"})),ut=n(()=>({effect:`${s.v>=4?45:40} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Echo"})),Ls={effect:"Removes Strength Down. 2 Strength and additional buff.",intent:`${e}/assets/intents/buff1.png`,name:"Buff"},Aa=n(()=>({flowchart:`
    flowchart-elk LR
      A(${Es.effect}<img src=${Es.intent} class="h-10 object-contain" />)
      B(${t(ht).effect}<img src=${t(ht).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B2(${t(ht).effect}<img src=${t(ht).intent} class="h-10 object-contain" />)
      C(${t(ut).effect}<img src=${t(ut).intent} class="h-10 object-contain" />)
      C2(${t(ut).effect}<img src=${t(ut).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${Ls.effect}<img src=${Ls.intent} class="h-10 object-contain" /><span class="text-xs">1. Artifact 2
2. Beat of Death 1
3. Painful Stabs
4. 10 Strength
5+. 50 Strength</span>)
      A==>Loop
      subgraph Loop
      B==>C==>D
      C2==>B2==>D
      end
  `,img:`${e}/assets/act4/bosses/corrupt-heart.webp`,name:"Corrupt Heart",slug:"corrupt-heart"})),Ma=()=>t(Aa),xt=n(()=>({effect:`${s.v>=3?14:12} Damage. If Player has 1+ orb slot, 50/50 -1 Focus or -1 Strength. Else, -1 Strength.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Bash"})),dt={effect:"Group 30 Block.",intent:`${e}/assets/intents/defend.png`,name:"Fortify"},Gs=n(()=>({effect:`${s.v>=3?38:34} Damage. ${s.v>=18?"99 Block":"X Block. X = Damage Output"}.`,intent:`${e}/assets/intents/attackDefend.png`,name:"Smash"})),x=n(()=>({effect:`${s.v>=3?6:5} x 2 Damage. 2 Burns into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Burn Strike"})),wt={effect:"Group 2 Strength.",intent:`${e}/assets/intents/buff1.png`,name:"Piercer"},ys=n(()=>({effect:`10 x ${s.v>=3?4:3} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Skewer"})),Ra=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Shield [<img src=${e}/assets/act4/elites/spire-shield.webp class="h-10 object-contain inline" />]
        direction LR
        A(${t(xt).effect}<img src=${t(xt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B(${dt.effect}<img src=${dt.intent} class="h-10 object-contain" />)
        A2(${t(xt).effect}<img src=${t(xt).intent} class="h-10 object-contain" />)
        B2(${dt.effect}<img src=${dt.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C(${t(Gs).effect}<img src=${t(Gs).intent} class="h-10 object-contain" />)
        subgraph Loop
          A==>B==>C
          B2==>A2==>C
        end
      end
      subgraph Spear [<img src=${e}/assets/act4/elites/spire-spear.webp class="h-10 object-contain inline" />]
        direction LR
        A3(${t(x).effect}<img src=${t(x).intent} class="h-10 object-contain" />)
        A4(${t(x).effect}<img src=${t(x).intent} class="h-10 object-contain" />)
        A5(${t(x).effect}<img src=${t(x).intent} class="h-10 object-contain" />)
        B3(${wt.effect}<img src=${wt.intent} class="h-10 object-contain" />)
        B4(${wt.effect}<img src=${wt.intent} class="h-10 object-contain" />)
        C2(${t(ys).effect}<img src=${t(ys).intent} class="h-10 object-contain" />)
        A3==>Loop2
        subgraph Loop2 [Loop]
          C2== 50% ==>A4==>B3
          C2== 50% ==>B4==>A5
        end
      end
  `,img:`${e}/assets/act4/elites/spire-shield-spear.webp`,name:"Spire Shield and Spear",slug:"spire-shield-spear"})),Ta=()=>t(Ra),Ca=[rn,Sn,$n,xn,kn,pn,hn,wn,ln,vn],Ia=[en,nn,cn],Ea=[Ks,Js,Qs],La=[Wn,zn,_n,Xn,ta,Un,Zn,Yn],Ga=[Ln,yn,Fn],ya=[Mn,Tn,In],Pa=[pa,ha,xa,ka,wa,va,Sa],Fa=[ra,la,$a],Ha=[sa,aa,ia],Wa=[Ta],Oa=[Ma],a=jt=>new Map(jt.map(j=>[j().slug,j])),Ua=a(Ca),Na=a(Ia),za=a(Ea),Va=a(La),_a=a(Ga),qa=a(ya),Xa=a(Pa),Ja=a(Fa),Za=a(Ha),Qa=a(Wa),Ya=a(Oa),nc=new Map([...Ua,...Na,...za,...Va,..._a,...qa,...Xa,...Ja,...Za,...Qa,...Ya]);export{Ea as a,Ia as b,Ca as c,ya as d,Ga as e,La as f,Ha as g,Fa as h,Pa as i,Oa as j,sc as k,Wa as l,nc as m};
