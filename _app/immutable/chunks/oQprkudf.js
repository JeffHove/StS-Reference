import{aq as Wn,aI as On,aJ as Un,o as Nn,q as Ct,B as zn,I as Vn,G as _n,z as qn,U as Xn,i as t,k as s}from"./s1OyUeIO.js";import{a as n}from"./MJkhzuwp.js";import{b as e}from"./D5cDgG1d.js";function nc(wt,j,Fn){Ct&&zn();var Mt=wt,Tt=Xn,jt,Hn=Wn()?On:Un;Nn(()=>{Hn(Tt,Tt=j())&&(jt&&Vn(jt),jt=_n(()=>Fn(Mt)))}),Ct&&(Mt=qn)}const It={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Activate"},Lt={effect:"H x 6 Damage. H = Player HP / 12 + 1, rounded down.",intent:`${e}/assets/intents/7.png`,name:"Divider"},Et=s(()=>({effect:`${n.v>=4?3:2} x 6 Damage. Upgrades all Burn. 3 Burn+ into discard.`,intent:`${e}/assets/intents/3.png`,name:"Inferno"})),$=s(()=>({effect:`6 Damage. ${n.v>=19?2:1} Burn into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Sear"})),k=s(()=>({effect:`${n.v>=4?6:5} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Tackle"})),Gt=s(()=>({effect:`${n.v>=19?3:2} Strength. 12 Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Inflame"})),Jn=s(()=>({flowchart:`
    flowchart LR
      A(${It.effect}<img src=${It.intent} class="h-10 object-contain" />)
      B(${Lt.effect}<img src=${Lt.intent} class="h-10 object-contain" />)
      C(${t($).effect}<img src=${t($).intent} class="h-10 object-contain" />)
      C2(${t($).effect}<img src=${t($).intent} class="h-10 object-contain" />)
      C3(${t($).effect}<img src=${t($).intent} class="h-10 object-contain" />)
      D(${t(k).effect}<img src=${t(k).intent} class="h-10 object-contain" />)
      D2(${t(k).effect}<img src=${t(k).intent} class="h-10 object-contain" />)
      E(${t(Gt).effect}<img src=${t(Gt).intent} class="h-10 object-contain" />)
      F(${t(Et).effect}<img src=${t(Et).intent} class="h-10 object-contain" />)
      A==>B
      B==>C
      C==>D
      D==>C2
      C2==>E
      E==>D2
      D2==>C3
      C3==>F
      F== Gives Burn+ instead of Burn ==>B
  `,img:`${e}/assets/act1/bosses/hexaghost.webp`,name:"Hexaghost",slug:"hexaghost"})),Zn=()=>t(Jn),yt=s(()=>({effect:`${n.v>=19?5:3} Slimed into discard.`,intent:`${e}/assets/intents/debuff2.png`,name:"Goop Spray"})),Pt={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Preparing"},Ft=s(()=>({effect:`${n.v>=4?38:35} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Slam"})),Ht={effect:"Spawns Acid Slime L and Spike Slime L with current HP. Dies.",intent:`${e}/assets/intents/unknown.png`,name:"Split"},Qn=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(yt).effect}<img src=${t(yt).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${Pt.effect}<img src=${Pt.intent} class="h-10 object-contain" />)
      C(${t(Ft).effect}<img src=${t(Ft).intent} class="h-10 object-contain" />)
      D(${Ht.effect}<img src=${Ht.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower. Interrupts current intent.</span>)
    A==>B
    B==>C
    C==>A
  `,img:`${e}/assets/act1/bosses/slime-boss.webp`,name:"Slime Boss",slug:"slime-boss"})),Yn=()=>t(Qn),Wt={effect:"9 Block",intent:`${e}/assets/intents/defend.png`,name:"Charging Up"},Ot=s(()=>({effect:`${n.v>=4?36:32} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Fierce Bash"})),Ut={effect:"2 Weak. 2 Vulnerable",intent:`${e}/assets/intents/debuff2.png`,name:"Charging Up"},Nt={effect:"5 x 4 Damage.",intent:`${e}/assets/intents/5.png`,name:"Whirlwind"},zt=s(()=>({effect:`${n.v>=19?4:3} Sharp Hide.`,intent:`${e}/assets/intents/buff1.png`,name:"Defensive Mode"})),Vt=s(()=>({effect:`${n.v>=4?10:9} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Roll Attack"})),_t={effect:"8 x 2 Damage. Removes Sharp Hide. Enters Offensive mode.",intent:`${e}/assets/intents/attackBuff.png`,name:"Twin Slam"},Kn=s(()=>({flowchart:`
    flowchart-elk LR
      subgraph Defensive [<img src=${e}/assets/act1/bosses/the-guardian-defensive.webp class="h-10 object-contain inline" />]
        E(${t(zt).effect}<img src=${t(zt).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        F(${t(Vt).effect}<img src=${t(Vt).intent} class="h-10 object-contain" />)
        G(${_t.effect}<img src=${_t.intent} class="h-10 object-contain" />)
        E==>F==>G==>E
      end 
      subgraph Offensive [<img src=${e}/assets/act1/bosses/the-guardian-offensive.webp class="h-10 object-contain inline" />]
        B(${t(Ot).effect}<img src=${t(Ot).intent} class="h-10 object-contain" />)
        C(${Ut.effect}<img src=${Ut.intent} class="h-10 object-contain" />)
        A(${Wt.effect}<img src=${Wt.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        D(${Nt.effect}<img src=${Nt.intent} class="h-10 object-contain" />)
        A==>B==>C==>D==>A
      end
  `,img:`${e}/assets/act1/bosses/the-guardian-offensive.webp`,name:"The Guardian",slug:"the-guardian"})),ts=()=>t(Kn),v=s(()=>({effect:`${n.v>=18?3:2} Enrage.`,intent:`${e}/assets/intents/buff1.png`,name:"Bellow"})),m=s(()=>({effect:`${n.v>=3?16:14} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Rush"})),B=s(()=>({effect:`${n.v>=3?8:6} Damage. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Skull Bash"})),es=s(()=>({flowchart:n.v>=18?`
    flowchart-elk LR
      C(${t(B).effect}<img src=${t(B).intent} class="h-10 object-contain" />)
      A(${t(v).effect}<img src=${t(v).intent} class="h-10 object-contain" />)
      B(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" />)
      B2(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" />)
      A==>C==>B==>B2==>C
  `:`
    flowchart-elk LR
      A(${t(v).effect}<img src=${t(v).intent} class="h-10 object-contain" />)
      A==>Turn2+
      subgraph Turn2+ [Turn 2+]
        direction LR
        B(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
67%</span>)
        C(${t(B).effect}<img src=${t(B).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
      end
  `,img:`${e}/assets/act1/elites/gremlin-nob.webp`,name:"Gremlin Nob",slug:"gremlin-nob"})),ns=()=>t(es),D=s(()=>({effect:`${n.v>=3?20:18} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Attack"})),qt=s(()=>({effect:` -${n.v>=18?2:1} Dexterity. -${n.v>=18?2:1} Strength.`,intent:`${e}/assets/intents/debuff2.png`,name:"Siphon Soul"})),ss=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(D).effect}<img src=${t(D).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      A2(${t(D).effect}<img src=${t(D).intent} class="h-10 object-contain" />)
      B(${t(qt).effect}<img src=${t(qt).intent} class="h-10 object-contain" />)
      A==>A2==>B==>A
  `,img:`${e}/assets/act1/elites/lagavulin.webp`,name:"Lagavulin",slug:"lagavulin"})),as=()=>t(ss),Xt=s(()=>({effect:`${n.v>=3?10:9} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Beam"})),Jt=s(()=>({effect:`${n.v>=18?3:2} Dazed into discard.`,intent:`${e}/assets/intents/debuff1.png`,name:"Bolt"})),cs=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Xt).effect}<img src=${t(Xt).intent} class="h-10 object-contain" />)
      B(${t(Jt).effect}<img src=${t(Jt).intent} class="h-10 object-contain" />)
      A<==>B
  `,img:`${e}/assets/act1/elites/sentry.webp`,name:"Sentry",slug:"sentry"})),is=()=>t(cs),Zt=s(()=>({effect:`${n.v>=2?12:11} Damage. 2 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Corrosive Spit"})),Qt=s(()=>({effect:"2 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),Yt=s(()=>({effect:`${n.v>=2?18:16} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Tackle"})),Kt={effect:"Spawns 2 Acid Slime M with current HP. Dies.",intent:`${e}/assets/intents/unknown.png`,name:"Split"},te=s(()=>({effect:`${n.v>=2?8:7} Damage. 1 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Corrosive Spit"})),ee=s(()=>({effect:"1 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),ne=s(()=>({effect:`${n.v>=2?12:10} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Tackle"})),se=s(()=>({effect:"1 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),ae=s(()=>({effect:`${n.v>=2?4:3} Damage.`,intent:`${e}/assets/intents/1.png`,name:"Tackle"})),os=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=${e}/assets/act1/monsters/acid-slime-l.webp class="h-10 object-contain inline" />]
        A(${t(Zt).effect}<img src=${t(Zt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
${n.v>=17?"40%":"30%"}</span>)
        B(${t(Qt).effect}<img src=${t(Qt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
30%</span>)
        C(${t(Yt).effect}<img src=${t(Yt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?2:1}
${n.v>=17?"30%":"40%"}</span>)
        D(${Kt.effect}<img src=${Kt.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower. Interrupts current intent.</span>)
      end
      subgraph Medium [<img src=${e}/assets/act1/monsters/acid-slime-m.webp class="h-10 object-contain inline" />]
        A2(${t(te).effect}<img src=${t(te).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
${n.v>=17?"40%":"30%"}</span>)
        B2(${t(ee).effect}<img src=${t(ee).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
30%</span>)
        C2(${t(ne).effect}<img src=${t(ne).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?2:1}
${n.v>=17?"30%":"40%"}</span>)
      end
      subgraph Small [<img src=${e}/assets/act1/monsters/acid-slime-s.webp class="h-10 object-contain inline" />]
        A3(${t(se).effect}<img src=${t(se).intent} class="h-10 object-contain" /><span class="text-xs">${n.v>=17?"Turn 1: 100%":"Turn 1: 50%"}</span>)
        B3(${t(ae).effect}<img src=${t(ae).intent} class="h-10 object-contain" /><span class="text-xs">${n.v>=17?"":"Turn 1: 50%"}</span>)
        A3<==>B3
      end
  `,img:`${e}/assets/act1/monsters/acid-slimes.webp`,name:"Acid Slimes",slug:"acid-slimes"})),rs=()=>t(os),ce=s(()=>({effect:`${n.v>=2?13:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Stab"})),ie=s(()=>({effect:`${n.v>=2?8:7} Damage. ${n.v>=17?2:1} Weak.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Rake"})),fs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(ce).effect}<img src=${t(ce).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(ie).effect}<img src=${t(ie).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
40%</span>)
  `,img:`${e}/assets/act1/monsters/blue-slaver.webp`,name:"Blue Slaver",slug:"blue-slaver"})),ls=()=>t(fs),oe=s(()=>({effect:`${n.v>=2?n.v>=17?5:4:3} Ritual.`,intent:`${e}/assets/intents/buff1.png`,name:"Incantation"})),re={effect:"6 Damage.",intent:`${e}/assets/intents/2.png`,name:"Dark Strike"},gs=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(oe).effect}<img src=${t(oe).intent} class="h-10 object-contain" />)
      B(${re.effect}<img src=${re.intent} class="h-10 object-contain" />)
      A==>B
      B==>B
  `,img:`${e}/assets/act1/monsters/cultist.webp`,name:"Cultist",slug:"cultist"})),$s=()=>t(gs),fe={effect:"6 Damage.",intent:`${e}/assets/intents/2.png`,name:"Bite"},le=s(()=>({effect:`${n.v>=2?n.v>=17?5:4:3} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Grow"})),ms=s(()=>({flowchart:`
    flowchart-elk TB
      A(${fe.effect}<img src=${fe.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(le).effect}<img src=${t(le).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
40%</span>)
  `,img:`${e}/assets/act1/monsters/fungi-beast.webp`,name:"Fungi Beast",slug:"fungi-beast"})),ps=()=>t(ms),c={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Charging"},S=s(()=>({effect:`${n.v>=2?30:25} Damage.`,intent:`${e}/assets/intents/6.png`,name:"Ultimate Blast"})),A=s(()=>({effect:`${n.v>=2?5:4} Damage.`,intent:`${e}/assets/intents/1.png`,name:"Scratch"})),R=s(()=>({effect:`${n.v>=2?5:4} Damage. 1 Weak.${n.v>=17?" 1 Frail":""}.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Smash"})),M=s(()=>({effect:`Ally ${n.v>=2?n.v>=17?11:8:7} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Protect"})),T=s(()=>({effect:`${n.v>=2?8:6} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Shield Bash"})),C=s(()=>({effect:`${n.v>=2?10:9} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Puncture"})),bs=s(()=>({flowchart:n.v>=17?`
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
        A4(${t(R).effect}<img src=${t(R).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=${e}/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A5(${t(M).effect}<img src=${t(M).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
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
        A5(${t(R).effect}<img src=${t(R).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=${e}/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A6(${t(M).effect}<img src=${t(M).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B6(${t(T).effect}<img src=${t(T).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=${e}/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A7(${t(C).effect}<img src=${t(C).intent} class="h-10 object-contain" />)
      end
  `,img:`${e}/assets/act1/monsters/gremlins.webp`,name:"Gremlins",slug:"gremlins"})),hs=()=>t(bs),ge=s(()=>({effect:`${n.v>=2?12:11} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Chomp"})),$e={effect:"7 Damage. 5 Block.",intent:`${e}/assets/intents/attackDefend.png`,name:"Thrash"},me=s(()=>({effect:`${n.v>=2?n.v>=17?5:4:3} Strength. ${n.v>=17?9:6} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Bellow"})),us=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(ge).effect}<img src=${t(ge).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Act 1, Turn 1: 100%
25%</span>)
      B(${$e.effect}<img src=${$e.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
      C(${t(me).effect}<img src=${t(me).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
  `,img:`${e}/assets/act1/monsters/jaw-worm.webp`,name:"Jaw Worm",slug:"jaw-worm"})),xs=()=>t(us),I=s(()=>({effect:`${n.v>=2?11:10} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Mug"})),pe=s(()=>({effect:`${n.v>=2?14:12} Damage`,intent:`${e}/assets/intents/3.png`,name:"Lunge"})),be={effect:"6 Block.",intent:`${e}/assets/intents/defend.png`,name:"Smoke Bomb"},he={effect:"Escape.",intent:`${e}/assets/intents/escape.png`,name:"Escape"},ds=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(I).effect}<img src=${t(I).intent} class="h-10 object-contain" />)
      A2(${t(I).effect}<img src=${t(I).intent} class="h-10 object-contain" />)
      B(${t(pe).effect}<img src=${t(pe).intent} class="h-10 object-contain" />)
      C(${be.effect}<img src=${be.intent} class="h-10 object-contain" />)
      D(${he.effect}<img src=${he.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:`${e}/assets/act1/monsters/looter.webp`,name:"Looter",slug:"looter"})),ws=()=>t(ds),ue=s(()=>({effect:`${n.v>=2?"D+1":"D"} Damage. D is chosen between 5 and 7 at the beginning of the battle.`,intent:`${e}/assets/intents/2.png`,name:"Bite"})),xe=s(()=>({effect:`${n.v>=17?4:3} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Grow"})),de={effect:"2 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Spit Web"},js=s(()=>({flowchart:`
    flowchart-elk LR
      subgraph Red [<img src=${e}/assets/act1/monsters/red-louse.webp class="h-10 object-contain inline" />]
        B(${t(xe).effect}<img src=${t(xe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
25%</span>)
      end
      subgraph Both
        A(${t(ue).effect}<img src=${t(ue).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
75%</span>)
      end
      subgraph Green [<img src=${e}/assets/act1/monsters/green-louse.webp class="h-10 object-contain inline" />]
        B2(${de.effect}<img src=${de.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
25%</span>)
      end
      Red~~~Both~~~Green
  `,img:`${e}/assets/act1/monsters/louses.webp`,name:"Louses",slug:"louses"})),ks=()=>t(js),f=s(()=>({effect:`${n.v>=2?14:13} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Stab"})),i=s(()=>({effect:`${n.v>=2?9:8} Damage. ${n.v>=17?2:1} Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Scrape"})),L={effect:"1 Entangled.",intent:`${e}/assets/intents/debuff2.png`,name:"Entangle"},vs=s(()=>({flowchart:n.v>=17?`
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
        B2(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
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
        B3(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
55%</span>)
      end
  `,img:`${e}/assets/act1/monsters/red-slaver.webp`,name:"Red Slaver",slug:"red-slaver"})),Bs=()=>t(vs),we=s(()=>({effect:`${n.v>=2?18:16} Damage. 2 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Flame Tackle"})),je=s(()=>({effect:`${n.v>=17?3:2} Frail.`,intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),ke={effect:"Spawns 2 Spike Slime M with current HP. Dies",intent:`${e}/assets/intents/unknown.png`,name:"Split"},ve=s(()=>({effect:`${n.v>=2?10:8} Damage. 1 Slimed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Flame Tackle"})),Be=s(()=>({effect:"1 Frail.",intent:`${e}/assets/intents/debuff1.png`,name:"Lick"})),De=s(()=>({effect:`${n.v>=2?6:5} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Tackle"})),Ds=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=${e}/assets/act1/monsters/spike-slime-l.webp class="h-10 object-contain inline" />]
        A(${t(we).effect}<img src=${t(we).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
        B(${t(je).effect}<img src=${t(je).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
70%</span>)
        C(${ke.effect}<img src=${ke.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower. Interrupts current intent.</span>)
      end
      subgraph Medium [<img src=${e}/assets/act1/monsters/spike-slime-m.webp class="h-10 object-contain inline" />]
        A2(${t(ve).effect}<img src=${t(ve).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
        B2(${t(Be).effect}<img src=${t(Be).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
70%</span>)
      end
      subgraph Small [<img src=${e}/assets/act1/monsters/spike-slime-s.webp class="h-10 object-contain inline" />]
        A3(${t(De).effect}<img src=${t(De).intent} class="h-10 object-contain" />)
      end
  `,img:`${e}/assets/act1/monsters/spike-slimes.webp`,name:"Spike Slimes",slug:"spike-slimes"})),Ss=()=>t(Ds),E={effect:"Spawns 2 Bronze Orbs.",intent:`${e}/assets/intents/unknown.png`,name:"Spawn Orbs"},o=s(()=>({effect:`${n.v>=4?4:3} Strength. ${n.v>=9?12:9} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Boost"})),l=s(()=>({effect:`${n.v>=4?8:7} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Flail"})),G=s(()=>({effect:`${n.v>=4?50:45} Damage.`,intent:`${e}/assets/intents/7.png`,name:"HYPER BEAM"})),y={effect:"Steals the rarest card in the draw pile, or from the discard pile if the draw pile is empty.",intent:`${e}/assets/intents/debuff2.png`,name:"Stasis"},P={effect:"8 Damage.",intent:`${e}/assets/intents/2.png`,name:"Beam"},F={effect:`<img src=${e}/assets/act2/bosses/bronze-automaton.webp class='h-10 object-contain inline' /> 12 Block.`,intent:`${e}/assets/intents/defend.png`,name:"Support Beam"},As=s(()=>({flowchart:n.v>=19?`
    flowchart LR
      subgraph Automaton
        direction LR
        A(${E.effect}<img src=${E.intent} class="h-10 object-contain" />)
        B(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
        B2(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
        B3(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
        C(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
        C2(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
        D(${t(G).effect}<img src=${t(G).intent} class="h-10 object-contain" />)
        A==>C==>B==>C2==>B2==>D==>B3==>C
      end
      subgraph Orb
        E(${y.effect}<img src=${y.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        F(${P.effect}<img src=${P.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
7.5%
Card Stolen: 30%</span>)  
        G(${F.effect}<img src=${F.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
17.5%
Card Stolen: 70%</span>)  
      end
      Automaton~~~Orb
  `:`
    flowchart LR
      subgraph Automaton
        direction LR
        A(${E.effect}<img src=${E.intent} class="h-10 object-contain" />)
        C(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
        B(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
        B2(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
        C2(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
        D(${t(G).effect}<img src=${t(G).intent} class="h-10 object-contain" />)  
        E(Stunned<img src='${e}/assets/intents/stun.png' class="h-10 object-contain" />)
        A==>C==>B==>C2==>B2==>D==>E==>C
      end
      subgraph Orb
          F(${y.effect}<img src=${y.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        G(${P.effect}<img src=${P.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
7.5%
Card Stolen: 30%</span>)  
        H(${F.effect}<img src=${F.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
17.5%
Card Stolen: 70%</span>)  
      end
      Automaton~~~Orb
  `,img:`${e}/assets/act2/bosses/bronze-automaton.webp`,name:"Bronze Automaton",slug:"bronze-automaton"})),Rs=()=>t(As),H=s(()=>({effect:`${n.v>=9?n.v>=19?20:18:15} Block. ${n.v>=9?n.v>=19?7:6:5} Metallicize.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Defensive Stance"})),W=s(()=>({effect:`${n.v>=4?14:12} Damage. 2 Frail. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Face Slap"})),O={effect:"2 Weak. 2 Vulnerable.",intent:`${e}/assets/intents/debuff1.png`,name:"Taunt"},U=s(()=>({effect:`${n.v>=4?18:16} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Heavy Slash"})),Se=s(()=>({effect:`${n.v>=4?n.v>=19?4:3:2} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Gloat"})),N={effect:"10 x 2 Damage.",intent:`${e}/assets/intents/5.png`,name:"Execute"},z=s(()=>({effect:`Removes debuffs. ${n.v>=4?n.v>=19?12:9:6} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Anger"})),Ms=s(()=>({flowchart:n.v>=19?`
    flowchart-elk TB
      subgraph Main [Main.
<span class="text-xs">Invalid moves, when rolled, use next instead.</span>]
        direction LR
        A(${t(H).effect}<img src=${t(H).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max In a Row: 1
${n.v>=19?"30%":"15%"}</span>)
        B(${t(W).effect}<img src=${t(W).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(U).effect}<img src=${t(U).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
        A==>B<==>D
      end
      subgraph Phase1 [Phase 1]
        subgraph Turn4 [Turn 4, 8, 12, etc.]
          C(${O.effect}<img src=${O.intent} class="h-10 object-contain" />)
        end
      end
      subgraph Phase2 [Phase 2]
        F(${N.effect}<img src=${N.intent} class="h-10 object-contain" />)
        G(${t(z).effect}<img src=${t(z).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Does NOT interupt current intent.</span>)
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `:`
    flowchart-elk TB
      subgraph Main [Main.
<span class="text-xs">Invalid moves, when rolled, use next instead.</span>]
        direction LR
        A(${t(H).effect}<img src=${t(H).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max In a Row: 1
${n.v>=19?"30%":"15%"}</span>)
        B(${t(W).effect}<img src=${t(W).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(U).effect}<img src=${t(U).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
        E(${t(Se).effect}<img src=${t(Se).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
15%</span>)
        A==>E==>B<==>D
      end
      subgraph Phase1 [Phase 1]
        subgraph Turn4 [Turn 4, 8, 12, etc.]
          C(${O.effect}<img src=${O.intent} class="h-10 object-contain" />)
        end
      end
      subgraph Phase2 [Phase 2]
        F(${N.effect}<img src=${N.intent} class="h-10 object-contain" />)
        G(${t(z).effect}<img src=${t(z).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Does NOT interupt current intent.</span>)
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `,img:`${e}/assets/act2/bosses/the-champ.webp`,name:"The Champ",slug:"the-champ"})),Ts=()=>t(Ms),V=s(()=>({effect:`Group ${n.v>=4?n.v>=19?5:4:3} Strength. ${n.v>=4?n.v>=19?23:18:15} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Buff"})),_=s(()=>({effect:`${n.v>=4?21:18} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Fireball"})),kt=s(()=>({effect:`${n.v>=19?5:3} Weak. ${n.v>=19?5:3} Vulnerable. ${n.v>=19?5:3} Frail.`,intent:`${e}/assets/intents/debuff2.png`,name:"Mega Debuff"})),vt={effect:"Spawns up to 2 Torch Heads.",intent:`${e}/assets/intents/unknown.png`,name:"Spawn"},Ae={effect:"7 Damage.",intent:`${e}/assets/intents/2.png`,name:"Tackle"},Cs=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Head [<img src=${e}/assets/act2/bosses/torch-head.webp class="h-10 object-contain inline" />]
        E(${Ae.effect}<img src=${Ae.intent} class="h-10 object-contain" />)
      end
      subgraph Collector [<img src=${e}/assets/act2/bosses/the-collector.webp class="h-10 object-contain inline" />]
      subgraph 0-1Torch [0-1 Torch Heads]
          A(<img src=${t(V).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
          B(<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">45%</span>)
          D(<img src=${vt.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
        end
        subgraph 2Torch [2 Torch Heads]
          A2(<img src=${t(V).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
          B2(<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">70%</span>)
        end
        subgraph Turn4 [Turn 4]
          C(<img src=${t(kt).intent} class="h-10 object-contain" />)
        end
      end
  `,moves:`
    flowchart-elk TB
      A(${t(V).effect}<img src=${t(V).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${t(_).effect}<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      C(${t(kt).effect}<img src=${t(kt).intent} class="h-10 object-contain" />)
      D(${vt.effect}<img src=${vt.intent} class="h-10 object-contain" />)
  `,img:`${e}/assets/act2/bosses/the-collector.webp`,name:"The Collector",slug:"the-collector"})),Is=()=>t(Cs),Bt=s(()=>({effect:`${n.v>=3?7:6} x N Damage. N = 2 + ${n.v>=18?"Multi/Single Stabs":"Multi-Stabs"} used`,intent:`${e}/assets/intents/3.png`,name:"Multi-Stab"})),Dt=s(()=>({effect:`${n.v>=3?24:21} Damage.`,intent:`${e}/assets/intents/5.png`,name:"Single Stab"})),Ls=s(()=>({flowchart:`
    flowchart-elk TB
      A(*${t(Bt).name}*
${t(Bt).effect}<img src=${t(Bt).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max In a Row: 2
85%</span>)
      B(*${t(Dt).name}*
${t(Dt).effect}<img src=${t(Dt).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max In a Row: 1
15%</span>)
  `,img:`${e}/assets/act2/elites/book-of-stabbing.webp`,name:"Book of Stabbing",slug:"book-of-stabbing"})),Es=()=>t(Ls),d=s(()=>({effect:`Group ${n.v>=3?n.v>=18?5:4:3} Strength. Group ${n.v>=18?10:6} Block.`,intent:`${e}/assets/intents/defendBuff.png`,name:"Encourage"})),w={effect:"Spawns 2 Gremlins.",intent:`${e}/assets/intents/unknown.png`,name:"Rally!"},p={effect:"6 x 3 Damage.",intent:`${e}/assets/intents/4.png`,name:"Stab"},Gs=s(()=>({flowchart:`
    flowchart-elk LR
      subgraph 0Gremlin [0 Gremlins]
        direction LR
        B0(<img src=${w.intent} class="h-10 object-contain" /><span class="text-xs">75%</span>)
        C0(<img src=${p.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
      end
      subgraph 1Gremlin [1 Gremlin]
        direction LR
        subgraph prevMoveEncourage [Previous Move <img src=${t(d).intent} class="h-10 object-contain inline" />]
          direction LR
          B1a(<img src=${w.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
          C1(<img src=${p.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        end
        subgraph prevMoveStab [Previous Move <img src=${p.intent} class="h-10 object-contain inline" />]
          direction LR
          A1(<img src=${t(d).intent} class="h-10 object-contain" /><span class="text-xs">37.5%</span>)
          B1b(<img src=${w.intent} class="h-10 object-contain" /><span class="text-xs">62.5%</span>)
        end
      end
      subgraph 2Gremlin [2+ Gremlins]
        direction LR
        A2(<img src=${t(d).intent} class="h-10 object-contain" /><span class="text-xs">66%</span>)
        C2(<img src=${p.intent} class="h-10 object-contain" /><span class="text-xs">34%</span>)
      end
      0Gremlin~~~1Gremlin~~~2Gremlin
  `,moves:`
    flowchart-elk TB
      A(${t(d).effect}<img src=${t(d).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${w.effect}<img src=${w.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${p.effect}<img src=${p.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
  `,img:`${e}/assets/act2/elites/gremlin-leader.webp`,name:"Gremlin Leader",slug:"gremlin-leader"})),ys=()=>t(Gs),q=s(()=>({effect:`7 Damage. ${n.v>=3?n.v>=18?3:2:1} Wound into discard.${n.v>=18?" 1 Strength.":""}`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Scouring Whip"})),X=s(()=>({effect:`${n.v>=2?13:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Stab"})),J=s(()=>({effect:`${n.v>=2?8:7} Damage. ${n.v>=17?2:1} Weak.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Rake"})),g=s(()=>({effect:`${n.v>=2?14:13} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Stab"})),r=s(()=>({effect:`${n.v>=2?9:8} Damage. ${n.v>=17?2:1} Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Scrape"})),Z={effect:"1 Entangled.",intent:`${e}/assets/intents/debuff2.png`,name:"Entangle"},Ps=s(()=>({flowchart:n.v>=17?`
    flowchart-elk TB
      subgraph Red [<img src=${e}/assets/act1/monsters/red-slaver.webp class="h-10 object-contain inline" />]
        direction LR
        subgraph Not [Entangle Not Used]
          A(${t(g).effect}<img src=${t(g).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
          B(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
          B<==>A
        end
        C(${Z.effect}<img src=${Z.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
        C==>Used
        subgraph Used [Entangle Used]
          A2(${t(g).effect}<img src=${t(g).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
          B2(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
55%</span>)
        end
      end
      subgraph Master [<img src=${e}/assets/act2/elites/taskmaster.webp class="h-10 object-contain inline" />]
        A4(${t(q).effect}<img src=${t(q).intent} class="h-10 object-contain" />)
      end
      subgraph Blue [<img src=${e}/assets/act1/monsters/blue-slaver.webp class="h-10 object-contain inline" />]
        A5(${t(X).effect}<img src=${t(X).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
        B5(${t(J).effect}<img src=${t(J).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
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
        C(${Z.effect}<img src=${Z.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
        C==>Used
        subgraph Used [Entangle Used]
          A2(${t(g).effect}<img src=${t(g).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
          B3(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
55%</span>)
        end
      end
      subgraph Master [<img src=${e}/assets/act2/elites/taskmaster.webp class="h-10 object-contain inline" />]
        A4(${t(q).effect}<img src=${t(q).intent} class="h-10 object-contain" />)
      end
      subgraph Blue [<img src=${e}/assets/act1/monsters/blue-slaver.webp class="h-10 object-contain inline" />]
        A5(${t(X).effect}<img src=${t(X).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
        B5(${t(J).effect}<img src=${t(J).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
40%</span>)
      end
  `,img:`${e}/assets/act2/elites/taskmaster.webp`,name:"Taskmaster",slug:"taskmaster"})),Fs=()=>t(Ps),Re={effect:"1 Strength.",intent:`${e}/assets/intents/buff1.png`,name:"Caw"},Me=s(()=>({effect:`1 x ${n.v>=2?6:5} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Peck"})),Te=s(()=>({effect:`${n.v>=2?14:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Swoop"})),Ce=s(()=>({effect:`Flying ${n.v>=17?4:3}.`,intent:`${e}/assets/intents/unknown.png`,name:"Fly"})),Ie={effect:"3 Damage",intent:`${e}/assets/intents/1.png`,name:"Headbutt"},Hs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${Re.effect}<img src=${Re.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 37.5%
30%</span>)
      B(${t(Me).effect}<img src=${t(Me).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
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
  `,img:`${e}/assets/act2/monsters/byrd-flying.webp`,name:"Byrd",slug:"byrd"})),Ws=()=>t(Hs),Le=s(()=>({effect:`${n.v>=2?14:12} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Slash"})),Ee=s(()=>({effect:`${n.v>=2?7:6} x 3 Damage.`,intent:`${e}/assets/intents/4.png`,name:"Fury"})),Ge=s(()=>({effect:`Ally ${n.v>=17?20:15} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Defend"})),ye=s(()=>({effect:`Group ${n.v>=17?20:16} Heal.`,intent:`${e}/assets/intents/buff1.png`,name:"Heal"})),Pe=s(()=>({effect:`Group ${n.v>=2?n.v>=17?4:3:2} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Buff"})),Fe=s(()=>({effect:`${n.v>=2?9:8} Damage. 2 Frail.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Attack/Debuff"})),Os=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Centurion [<img src=${e}/assets/act2/monsters/centurion.webp class="h-10 object-contain inline" />]
        A(${t(Le).effect}<img src=${t(Le).intent} class="h-10 object-contain" /><span class="text-xs">65%</span>)
        subgraph MysticAlive [Mystic Alive]
          C(${t(Ge).effect}<img src=${t(Ge).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
        subgraph MysticDead [Mystic Dead]
          B(${t(Ee).effect}<img src=${t(Ee).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
      end
      subgraph Mystic [<img src=${e}/assets/act2/monsters/mystic.webp class="h-10 object-contain inline" />]
        A2(${t(ye).effect}<img src=${t(ye).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Trigger: An enemy is hurt ${n.v>=17?21:16} or more. Does NOT interrupt current intent.</span>)
        B2(${t(Pe).effect}<img src=${t(Pe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
        C2(${t(Fe).effect}<img src=${t(Fe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${n.v>=17?1:2}
60%</span>)
      end
  `,img:`${e}/assets/act2/monsters/centurion-mystic.webp`,name:"Centurion and Mystic",slug:"centurion-mystic"})),Us=()=>t(Os),b=s(()=>({effect:`${n.v>=2?6:5} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Poke"})),Q=s(()=>({effect:`${n.v>=2?21:18} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Zap"})),Y=s(()=>({effect:`${n.v>=2?12:10} Damage. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Debilitate"})),K={effect:"3 Weak. 3 Strength.",intent:`${e}/assets/intents/debuff1.png`,name:"Drain"},tt={effect:"1 Hex.",intent:`${e}/assets/intents/debuff2.png`,name:"Hex"},Ns=s(()=>({flowchart:n.v>=17?`
    flowchart-elk LR
      A(${t(b).effect}<img src=${t(b).intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${t(Q).effect}<img src=${t(Q).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(Y).effect}<img src=${t(Y).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${K.effect}<img src=${K.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${tt.effect}<img src=${tt.intent} class="h-10 object-contain" />)
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
      B(${t(Q).effect}<img src=${t(Q).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(Y).effect}<img src=${t(Y).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${K.effect}<img src=${K.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      E(${tt.effect}<img src=${tt.intent} class="h-10 object-contain" />)
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
  `,img:`${e}/assets/act2/monsters/chosen.webp`,name:"Chosen",slug:"chosen"})),zs=()=>t(Ns),et=s(()=>({effect:`${n.v>=2?11:10} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Mug"})),He=s(()=>({effect:`${n.v>=2?18:16} Damage`,intent:`${e}/assets/intents/4.png`,name:"Lunge"})),We=s(()=>({effect:`${n.v>=17?17:11} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Smoke Bomb"})),Oe={effect:"Escape.",intent:`${e}/assets/intents/escape.png`,name:"Escape"},Vs=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(et).effect}<img src=${t(et).intent} class="h-10 object-contain" />)
      A2(${t(et).effect}<img src=${t(et).intent} class="h-10 object-contain" />)
      B(${t(He).effect}<img src=${t(He).intent} class="h-10 object-contain" />)
      C(${t(We).effect}<img src=${t(We).intent} class="h-10 object-contain" />)
      D(${Oe.effect}<img src=${Oe.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:`${e}/assets/act2/monsters/mugger.webp`,name:"Mugger",slug:"mugger"})),_s=()=>t(Vs),Ue=s(()=>({effect:`${n.v>=2?7:6} x 2 Damage.`,intent:`${e}/assets/intents/3.png`,name:"Double Strike"})),Ne=s(()=>({effect:`${n.v>=2?12:10} Lifesteal.`,intent:`${e}/assets/intents/attackBuff.png`,name:"Suck"})),ze=s(()=>({effect:`${n.v>=2?21:18} Damage. 2 Frail.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Fell"})),qs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(Ue).effect}<img src=${t(Ue).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: ${n.v>=17?"0%":"50%"}
40%</span>)
      B(${t(Ne).effect}<img src=${t(Ne).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: ${n.v>=17?"0%":"50%"}
40%</span>)
      C(${t(ze).effect}<img src=${t(ze).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: ${n.v>=17?"100%":"0%"}
20%</span>)
      D(Stunned<img src='${e}/assets/intents/stun.png' class="h-10 object-contain" /><span class="text-xs">Trigger: Platted Armor reduced to 0. Interrupts current intent.</span>)
  `,img:`${e}/assets/act2/monsters/shelled-parasite.webp`,name:"Shelled Parasite",slug:"shelled-parasite"})),Xs=()=>t(qs),Ve=s(()=>({effect:`${n.v>=2?8:7} x 3 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Chomp"})),_e={effect:"2 Frail. 2 Weak.",intent:`${e}/assets/intents/debuff2.png`,name:"Enfeebling Spores"},Js=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(Ve).effect}<img src=${t(Ve).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
65%</span>)
      B(${_e.effect}<img src=${_e.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
35%</span>)
  `,img:`${e}/assets/act2/monsters/snake-plant.webp`,name:"Snake Plant",slug:"snake-plant"})),Zs=()=>t(Js),qe={effect:"Confuse.",intent:`${e}/assets/intents/debuff2.png`,name:"Perplexing Glare"},Xe=s(()=>({effect:`${n.v>=2?10:8} Damage. 2 Vulnerable${n.v>=17?" 2 Weak":""}.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Chomp"})),Je=s(()=>({effect:`${n.v>=2?18:15} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Bite"})),Qs=s(()=>({flowchart:`
    flowchart-elk TB
      A(${qe.effect}<img src=${qe.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%
0%</span>)
      B(${t(Xe).effect}<img src=${t(Xe).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(Je).effect}<img src=${t(Je).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
  `,img:`${e}/assets/act2/monsters/snecko.webp`,name:"Snecko",slug:"snecko"})),Ys=()=>t(Qs),Ze=s(()=>({effect:`${n.v>=2?11:10} x 2 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Slam"})),Qe=s(()=>({effect:`${n.v>=17?35:25} Block.`,intent:`${e}/assets/intents/defend.png`,name:"Activate"})),Ye=s(()=>({effect:`${n.v>=2?11:10} Damage. 15 Block.`,intent:`${e}/assets/intents/attackDefend.png`,name:"Harden"})),Ke=s(()=>({effect:`${n.v>=2?11:10} Damage. 5 Frail.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Attack/Debuff"})),Ks=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Ze).effect}<img src=${t(Ze).intent} class="h-10 object-contain" />)
      B(${t(Qe).effect}<img src=${t(Qe).intent} class="h-10 object-contain" />)
      C(${t(Ye).effect}<img src=${t(Ye).intent} class="h-10 object-contain" />)
      D(${t(Ke).effect}<img src=${t(Ke).intent} class="h-10 object-contain" />)
      B==>D==>A<==>C
  `,img:`${e}/assets/act2/monsters/spheric-guardian.webp`,name:"Spheric Guardian",slug:"spheric-guardian"})),ta=()=>t(Ks),tn={effect:"20 Damage.",intent:`${e}/assets/intents/5.png`,name:"Slash"},en={effect:"6 x 4 Damage.",intent:`${e}/assets/intents/5.png`,name:"Soul Strike"},nn={effect:"Removes debuffs.",intent:`${e}/assets/intents/unknown.png`,name:"Rebirth"},sn={effect:"40 Damage.",intent:`${e}/assets/intents/7.png`,name:"Dark Echo"},an={effect:"18 Damage. 1 Void into draw.",intent:`${e}/assets/intents/attackDebuff.png`,name:"Sludge"},cn={effect:"10 x 3 Damage.",intent:`${e}/assets/intents/7.png`,name:"Tackle"},ea=s(()=>({flowchart:`
    flowchart-elk LR
      subgraph Unawakened [<img src=${e}/assets/act3/bosses/awakened-one-unawakened.webp class="h-10 object-contain inline" />]
        direction LR
        A(${tn.effect}<img src=${tn.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: 100%
75%</span>)
        B(${en.effect}<img src=${en.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 0%
25%</span>)
      end
      C(${nn.effect}<img src=${nn.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP. Interrupts current intent.</span>)
      A2(${sn.effect}<img src=${sn.intent} class="h-10 object-contain" />)
      C==>A2==>Awakened
      subgraph Awakened [<img src=${e}/assets/act3/bosses/awakened-one-awakened.webp class="h-10 object-contain inline" />]
        direction LR
        B2(${an.effect}<img src=${an.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        C2(${cn.effect}<img src=${cn.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
  `,img:`${e}/assets/act3/bosses/awakened-one-unawakened.webp`,name:"Awakened One",slug:"awakened-one"})),na=()=>t(ea),on={effect:"Group 3 Strength.",intent:`${e}/assets/intents/buff1.png`,name:"Circle of Power"},rn=s(()=>({effect:`${n.v>=4?12:10} x 2 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Beam"})),fn=s(()=>({effect:`Group 16 Block.${n.v>=19?" 3 Plated Armor.":""}`,intent:`${e}/assets/intents/${n.v>=19?"defendBuff":"defend"}.png`,name:"Square Of Protection"})),ln=s(()=>({effect:`${n.v>=4?12:10} x 2 Damage. 2 Dazed into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Beam"})),sa=s(()=>({flowchart:`
    flowchart-elk LR
      subgraph Donu [<img src=${e}/assets/act3/bosses/donu.webp class="h-10 object-contain inline" />]
        A(${on.effect}<img src=${on.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        B(${t(rn).effect}<img src=${t(rn).intent} class="h-10 object-contain" />)
        A<==>B
      end
      subgraph Deca [<img src=${e}/assets/act3/bosses/deca.webp class="h-10 object-contain inline" />]
        A2(${t(fn).effect}<img src=${t(fn).intent} class="h-10 object-contain" />)
        B2(${t(ln).effect}<img src=${t(ln).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        B2<==>A2
      end
  `,img:`${e}/assets/act3/bosses/donu-deca.webp`,name:"Donu and Deca",slug:"donu-deca"})),aa=()=>t(sa),gn=s(()=>({effect:`${n.v>=4?8:7} x 3 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Reverberate"})),$n=s(()=>({effect:`${n.v>=4?32:26} Damage. 1 Draw Reduction.${n.v>=19?" 2 Slimed into discard.":""}`,intent:`${e}/assets/intents/6.png`,name:"Head Slam"})),mn=s(()=>({effect:`20 Block. 1 Vulnerable. 1 Weak.${n.v>=19?" 1 Frail.":""}`,intent:`${e}/assets/intents/defendDebuff.png`,name:"Ripple"})),pn=s(()=>({effect:`Heals to 50% HP. Removes debuffs.${n.v>=19?" 32 Block. ":""}`,intent:`${e}/assets/intents/buff1.png`,name:"Haste"})),ca=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(gn).effect}<img src=${t(gn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
      B(${t($n).effect}<img src=${t($n).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
35%</span>)
      C(${t(mn).effect}<img src=${t(mn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
      D(${t(pn).effect}<img src=${t(pn).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
Trigger: Below 50% HP. Does NOT interrupt current intent.</span>)
  `,img:`${e}/assets/act3/bosses/time-eater.webp`,name:"Time Eater",slug:"time-eater"})),ia=()=>t(ca),bn={effect:"13 Damage.",intent:`${e}/assets/intents/3.png`,name:"Count"},hn={effect:"1 Weak.",intent:`${e}/assets/intents/debuff1.png`,name:"Glare"},un=s(()=>({effect:`${n.v>=3?40:30} + T Damage. T starts at 0 and increases by 5 every time the attack is used, up to 30 additional Damage.`,intent:`${e}/assets/intents/7.png`,name:"It Is Time"})),oa=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turns+ [Turn ${n.v>=18?4:5}+]
        C(${t(un).effect}<img src=${t(un).intent} class="h-10 object-contain" />)
      end
      subgraph Turns [Turns 1-${n.v>=18?3:4}]
        A(${bn.effect}<img src=${bn.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        B(${hn.effect}<img src=${hn.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
  `,img:`${e}/assets/act3/elites/giant-head.webp`,name:"Giant Head",slug:"giant-head"})),ra=()=>t(oa),nt=s(()=>({effect:`${n.v>=18?5:3} Burn into discard.`,intent:`${e}/assets/intents/debuff1.png`,name:"Debuff"})),st=s(()=>({effect:`${n.v>=3?7:6} x 3 Damage.`,intent:`${e}/assets/intents/4.png`,name:"Attack"})),St={effect:"45 Damage.",intent:`${e}/assets/intents/7.png`,name:"Scythe"},fa=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turn+ [Turn 2+]
        A2(<img src=${t(nt).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        B2(<img src=${t(st).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        C2(<img src=${St.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      subgraph Turn1 [Turn 1]
        A1(<img src=${t(nt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B1(<img src=${t(st).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
  `,moves:`
    flowchart-elk TB
      A(${t(nt).effect}<img src=${t(nt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${t(st).effect}<img src=${t(st).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      C(${St.effect}<img src=${St.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)  
  `,img:`${e}/assets/act3/elites/nemesis.webp`,name:"Nemesis",slug:"nemesis"})),la=()=>t(fa),At=s(()=>({effect:`Spawns ${n.v>=18?2:"a"} Dagger.`,intent:`${e}/assets/intents/unknown.png`,name:"Summon"})),at=s(()=>({effect:`${n.v>=3?16:13} x 2 Damage. 1 Weak.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Snake Strike"})),ct=s(()=>({effect:`${n.v>=3?34:30} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Big Bite"})),xn={effect:"9 Damage. 1 Wound into discard.",intent:`${e}/assets/intents/attackDebuff.png`,name:"Stab"},dn={effect:"25 Damage. Dies.",intent:`${e}/assets/intents/6.png`,name:"Explode"},ga=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Reptomancer [<img src=${e}/assets/act3/elites/reptomancer.webp class="h-10 object-contain inline" />]
        subgraph 4Daggers [4 Daggers]
          B3(<img src=${t(at).intent} class="h-10 object-contain" /><span class="text-xs">67%</span>)
          C3(<img src=${t(ct).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
        subgraph 0-3Daggers [0-3 Daggers]
          A2(<img src=${t(At).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          B2(<img src=${t(at).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          C2(<img src=${t(ct).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
      end
      subgraph Dagger [<img src=${e}/assets/act3/elites/dagger.webp class="h-10 object-contain inline" />]
        D(${xn.effect}<img src=${xn.intent} class="h-10 object-contain" />)
        E(${dn.effect}<img src=${dn.intent} class="h-10 object-contain" />)
        D==>E
      end
  `,moves:`
    flowchart-elk TB
      A(${t(At).effect}<img src=${t(At).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      B(${t(at).effect}<img src=${t(at).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${t(ct).effect}<img src=${t(ct).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
  `,img:`${e}/assets/act3/elites/reptomancer.webp`,name:"Reptomancer",slug:"reptomancer"})),$a=()=>t(ga),it=s(()=>({effect:`${n.v>=2?"D + 2":"D"} Damage. D is chosen between 7 and 11 at the beginning of the battle.`,intent:`${e}/assets/intents/2.png`,name:"Nip"})),Rt=s(()=>({effect:`${n.v>=2?9:8} x 2 Damage.`,intent:`${e}/assets/intents/4.png`,name:"Chomp"})),ot=s(()=>({effect:`12 Block.${n.v>=17?" 2 Strength.":""}`,intent:`${e}/assets/intents/${n.v>=17?"defendBuff":"defend"}.png`,name:"Harden"})),wn={effect:"Revives with 50% HP.",intent:`${e}/assets/intents/buff1.png`,name:"Reincarnate"},jn={effect:"Nothing.",intent:`${e}/assets/intents/unknown.png`,name:"Regrow"},ma=s(()=>({flowchart:`
    flowchart-elk LR
      D(${wn.effect}<img src=${wn.intent} class="h-10 object-contain" />)
      E(${jn.effect}<img src=${jn.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP. Interrupts current intent.</span>)
      E==>D
      subgraph Middle [Middle Darkling and Outer Darklings Turn 1]
        direction LR
        A1(<img src=${t(it).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C1(<img src=${t(ot).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Outer [Outer Darklings Turn 2+]
        direction LR
        A2(<img src=${t(it).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
        B2(<img src=${t(Rt).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
        C2(<img src=${t(ot).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      Middle~~~Outer~~~E
  `,moves:`
    flowchart-elk TB
      A(${t(it).effect}<img src=${t(it).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      B(${t(Rt).effect}<img src=${t(Rt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${t(ot).effect}<img src=${t(ot).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)  
  `,img:`${e}/assets/act3/monsters/darkling.webp`,name:"Darkling",slug:"darkling"})),pa=()=>t(ma),kn=s(()=>({effect:`${n.v>=2?11:10} Damage. 1 Burn into draw. 1 Burn into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Laser"})),vn=s(()=>({effect:`${n.v>=2?16:15} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Claw"})),ba=s(()=>({flowchart:`
    flowchart-elk TB
      A(${t(kn).effect}<img src=${t(kn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(vn).effect}<img src=${t(vn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
  `,img:`${e}/assets/act3/monsters/orb-walker.webp`,name:"Orb Walker",slug:"orb-walker"})),ha=()=>t(ba),Bn=s(()=>({effect:`${n.v>=2?9:7} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Cut"})),Dn={effect:"2 Thorns.",intent:`${e}/assets/intents/buff1.png`,name:"Spike"},rt=s(()=>({effect:`${n.v>=2?11:9} Damage.`,intent:`${e}/assets/intents/2.png`,name:"Slam"})),Sn={effect:"30 Damage. Dies.",intent:`${e}/assets/intents/unknown.png`,name:"Explode"},An=s(()=>({effect:`${n.v>=2?13:11} Damage.`,intent:`${e}/assets/intents/3.png`,name:"Bash"})),Rn={effect:"2 Dazed into draw.",intent:`${e}/assets/intents/debuff1.png`,name:"Repulse"},ua=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Spiker [<img src=${e}/assets/act3/monsters/spiker.webp class="h-10 object-contain inline" />]
        A(${t(Bn).effect}<img src=${t(Bn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
        B(${Dn.effect}<img src=${Dn.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 6
50%</span>)
      end
      subgraph Exploder [<img src=${e}/assets/act3/monsters/exploder.webp class="h-10 object-contain inline" />]
        A2(${t(rt).effect}<img src=${t(rt).intent} class="h-10 object-contain" />)
        A3(${t(rt).effect}<img src=${t(rt).intent} class="h-10 object-contain" />)
        B2(${Sn.effect}<img src=${Sn.intent} class="h-10 object-contain" />)
        A2==>A3==>B2
      end
      subgraph Repulsor [<img src=${e}/assets/act3/monsters/repulsor.webp class="h-10 object-contain inline" />]
        A4(${t(An).effect}<img src=${t(An).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
        B3(${Rn.effect}<img src=${Rn.intent} class="h-10 object-contain" /><span class="text-xs">80%</span>)
      end
  `,img:`${e}/assets/act3/monsters/shapes.webp`,name:"Shapes",slug:"shapes"})),xa=()=>t(ua),h=s(()=>({effect:`${n.v>=2?18:16} Damage.`,intent:`${e}/assets/intents/4.png`,name:"Quick Tackle"})),ft=s(()=>({effect:`${n.v>=2?25:22} Damage.`,intent:`${e}/assets/intents/5.png`,name:"Smash"})),u=s(()=>({effect:`${n.v>=17?12:10} Constricted.`,intent:`${e}/assets/intents/debuff2.png`,name:"Constrict"})),da=s(()=>({flowchart:n.v>=17?`
    flowchart-elk TB
      subgraph notC [Not Constricted]
        C(${t(u).effect}<img src=${t(u).intent} class="h-10 object-contain" />)
      end
      subgraph isC [Is Constricted or Previous Move <img src=${t(u).intent} class="h-10 object-contain inline" />]
        A2(${t(h).effect}<img src=${t(h).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        B(${t(ft).effect}<img src=${t(ft).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
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
        B(${t(ft).effect}<img src=${t(ft).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
      C==>isC
  `,img:`${e}/assets/act3/monsters/spire-growth.webp`,name:"Spire Growth",slug:"spire-growth"})),wa=()=>t(da),Mn=s(()=>({effect:`${n.v>=17?5:3} Weak. ${n.v>=17?5:3} Frail.`,intent:`${e}/assets/intents/debuff2.png`,name:"Roar"})),Tn=s(()=>({effect:`${n.v>=17?5:3} Strength.`,intent:`${e}/assets/intents/buff1.png`,name:"Drool"})),Cn=s(()=>({effect:`${n.v>=2?30:25} Damage.`,intent:`${e}/assets/intents/6.png`,name:"Slam"})),lt={effect:"5 x T Damage. T = Turn Number / 2, rounded up.",intent:`${e}/assets/intents/2.png`,name:"Nom"},ja=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Mn).effect}<img src=${t(Mn).intent} class="h-10 object-contain" />)
      A==>afterDebuff
      subgraph afterDebuff [After Debuff]
        C(${t(Cn).effect}<img src=${t(Cn).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D(${lt.effect}<img src=${lt.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph afterSlam [After Slam]
        B(${t(Tn).effect}<img src=${t(Tn).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D2(${lt.effect}<img src=${lt.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      D2==>B
      B==>afterDebuff
      D==>B
      C==>afterSlam
  `,img:`${e}/assets/act3/monsters/the-maw.webp`,name:"The Maw",slug:"the-maw"})),ka=()=>t(ja),In=s(()=>({effect:`${n.v>=2?40:30} + X*10 Damage. X = Turn - 1`,intent:`${e}/assets/intents/7.png`,name:"Attack"})),va=s(()=>({flowchart:`
    flowchart-elk LR
      A(${t(In).effect}<img src=${t(In).intent} class="h-10 object-contain" />)
  `,img:`${e}/assets/act3/monsters/transient.webp`,name:"Transient",slug:"transient"})),Ba=()=>t(va),Ln={effect:"1 Parasite into deck. Only affects future combats.",intent:`${e}/assets/intents/debuff2.png`,name:"Implant"},gt=s(()=>({effect:`${n.v>=2?16:15} Damage. ${n.v>=2?18:16} Block.`,intent:`${e}/assets/intents/attackDefend.png`,name:"Flail"})),$t=s(()=>({effect:`${n.v>=2?12:10} Damage. 2 Weak. 2 Vulnerable.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Wither"})),mt=s(()=>({effect:`${n.v>=2?9:7} x 3 Damage.`,intent:`${e}/assets/intents/5.png`,name:"Multi-Strike"})),pt=s(()=>({effect:`${n.v>=2?38:32} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Strong Strike"})),Da=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turn1 [Turn 1]
        B(${t(gt).effect}<img src=${t(gt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        C(${t($t).effect}<img src=${t($t).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(mt).effect}<img src=${t(mt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        E(${t(pt).effect}<img src=${t(pt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
      end
      subgraph Turn2+ [Turn 2+]
        A(${Ln.effect}<img src=${Ln.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
10%</span>)
        B2(${t(gt).effect}<img src=${t(gt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
30%</span>)
        C2(${t($t).effect}<img src=${t($t).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
        D2(${t(mt).effect}<img src=${t(mt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
30%</span>)
        E2(${t(pt).effect}<img src=${t(pt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
10%</span>)
      end
  `,img:`${e}/assets/act3/monsters/writhing-mass.webp`,name:"Writhing Mass",slug:"writhing-mass"})),Sa=()=>t(Da),En={effect:"2 Vulnerable. 2 Weak. 2 Frail. Dazed, Slimed, Wound, Burn and Void into draw.",intent:`${e}/assets/intents/debuff2.png`,name:"Debilitate"},bt=s(()=>({effect:`2 x ${n.v>=4?15:12} Damage.`,intent:`${e}/assets/intents/5.png`,name:"Blood Shots"})),ht=s(()=>({effect:`${n.v>=4?45:40} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Echo"})),Gn={effect:"Removes Strength Down. 2 Strength and additional buff.",intent:`${e}/assets/intents/buff1.png`,name:"Buff"},Aa=s(()=>({flowchart:`
    flowchart-elk LR
      A(${En.effect}<img src=${En.intent} class="h-10 object-contain" />)
      B(${t(bt).effect}<img src=${t(bt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B2(${t(bt).effect}<img src=${t(bt).intent} class="h-10 object-contain" />)
      C(${t(ht).effect}<img src=${t(ht).intent} class="h-10 object-contain" />)
      C2(${t(ht).effect}<img src=${t(ht).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${Gn.effect}<img src=${Gn.intent} class="h-10 object-contain" /><span class="text-xs">1. Artifact 2
2. Beat of Death 1
3. Painful Stabs
4. 10 Strength
5+. 50 Strength</span>)
      A==>Loop
      subgraph Loop
      B==>C==>D
      C2==>B2==>D
      end
  `,img:`${e}/assets/act4/bosses/corrupt-heart.webp`,name:"Corrupt Heart",slug:"corrupt-heart"})),Ra=()=>t(Aa),ut=s(()=>({effect:`${n.v>=3?14:12} Damage. If Player has 1+ orb slot, 50/50 -1 Focus or -1 Strength. Else, -1 Strength.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Bash"})),xt={effect:"Group 30 Block.",intent:`${e}/assets/intents/defend.png`,name:"Fortify"},yn=s(()=>({effect:`${n.v>=3?38:34} Damage. ${n.v>=18?"99 Block":"X Block. X = Damage Output"}.`,intent:`${e}/assets/intents/attackDefend.png`,name:"Smash"})),x=s(()=>({effect:`${n.v>=3?6:5} x 2 Damage. 2 Burns into discard.`,intent:`${e}/assets/intents/attackDebuff.png`,name:"Burn Strike"})),dt={effect:"Group 2 Strength.",intent:`${e}/assets/intents/buff1.png`,name:"Piercer"},Pn=s(()=>({effect:`10 x ${n.v>=3?4:3} Damage.`,intent:`${e}/assets/intents/7.png`,name:"Skewer"})),Ma=s(()=>({flowchart:`
    flowchart-elk TB
      subgraph Shield [<img src=${e}/assets/act4/elites/spire-shield.webp class="h-10 object-contain inline" />]
        direction LR
        A(${t(ut).effect}<img src=${t(ut).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B(${xt.effect}<img src=${xt.intent} class="h-10 object-contain" />)
        A2(${t(ut).effect}<img src=${t(ut).intent} class="h-10 object-contain" />)
        B2(${xt.effect}<img src=${xt.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C(${t(yn).effect}<img src=${t(yn).intent} class="h-10 object-contain" />)
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
        B3(${dt.effect}<img src=${dt.intent} class="h-10 object-contain" />)
        B4(${dt.effect}<img src=${dt.intent} class="h-10 object-contain" />)
        C2(${t(Pn).effect}<img src=${t(Pn).intent} class="h-10 object-contain" />)
        A3==>Loop2
        subgraph Loop2 [Loop]
          C2== 50% ==>A4==>B3
          C2== 50% ==>B4==>A5
        end
      end
  `,img:`${e}/assets/act4/elites/spire-shield-spear.webp`,name:"Spire Shield and Spear",slug:"spire-shield-spear"})),Ta=()=>t(Ma),Ca=[rs,Ss,$s,xs,ks,ps,hs,ws,ls,Bs],Ia=[ns,as,is],La=[ts,Zn,Yn],Ea=[Ws,zs,_s,Xs,ta,Us,Zs,Ys],Ga=[Es,ys,Fs],ya=[Rs,Ts,Is],Pa=[pa,ha,xa,ka,wa,Ba,Sa],Fa=[ra,la,$a],Ha=[na,aa,ia],Wa=[Ta],Oa=[Ra],a=wt=>new Map(wt.map(j=>[j().slug,j])),Ua=a(Ca),Na=a(Ia),za=a(La),Va=a(Ea),_a=a(Ga),qa=a(ya),Xa=a(Pa),Ja=a(Fa),Za=a(Ha),Qa=a(Wa),Ya=a(Oa),sc=new Map([...Ua,...Na,...za,...Va,..._a,...qa,...Xa,...Ja,...Za,...Qa,...Ya]);export{La as a,Ia as b,Ca as c,ya as d,Ga as e,Ea as f,Ha as g,Fa as h,Pa as i,Oa as j,nc as k,Wa as l,sc as m};
