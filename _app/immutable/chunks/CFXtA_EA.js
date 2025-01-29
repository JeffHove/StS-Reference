import{ap as Ln,aG as Gn,aH as yn,x as Pn,m as Dt,w as Fn,D as Hn,C as Wn,F as On,U as Nn,i as t,k as n}from"./C8kGYK0E.js";import{a as e}from"./DMnMmMEO.js";function Ja(bt,x,In){Dt&&Fn();var Bt=bt,vt=Nn,ht,En=Ln()?Gn:yn;Pn(()=>{En(vt,vt=x())&&(ht&&Hn(ht),ht=Wn(()=>In(Bt)))}),Dt&&(Bt=On)}const St={effect:"Nothing.",intent:"/assets/intents/unknown.png",name:"Activate"},At={effect:"H x 6 Damage. H = Player HP / 12 + 1, rounded down.",intent:"/assets/intents/7.png",name:"Divider"},Mt=n(()=>({effect:`${e.v>=4?3:2} x 6 Damage. Upgrades all Burn. 3 Burn+ into discard.`,intent:"/assets/intents/3.png",name:"Inferno"})),r=n(()=>({effect:`6 Damage. ${e.v>=19?2:1} Burn into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Sear"})),d=n(()=>({effect:`${e.v>=4?6:5} x 2 Damage.`,intent:"/assets/intents/3.png",name:"Tackle"})),Rt=n(()=>({effect:`${e.v>=19?3:2} Strength. 12 Block.`,intent:"/assets/intents/defendBuff.png",name:"Inflame"})),zn=n(()=>({flowchart:`
    flowchart LR
      A(${St.effect}<img src=${St.intent} class="h-10 object-contain" />)
      B(${At.effect}<img src=${At.intent} class="h-10 object-contain" />)
      C(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
      C2(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
      C3(${t(r).effect}<img src=${t(r).intent} class="h-10 object-contain" />)
      D(${t(d).effect}<img src=${t(d).intent} class="h-10 object-contain" />)
      D2(${t(d).effect}<img src=${t(d).intent} class="h-10 object-contain" />)
      E(${t(Rt).effect}<img src=${t(Rt).intent} class="h-10 object-contain" />)
      F(${t(Mt).effect}<img src=${t(Mt).intent} class="h-10 object-contain" />)
      A==>B
      B==>C
      C==>D
      D==>C2
      C2==>E
      E==>D2
      D2==>C3
      C3==>F
      F== Gives Burn+ instead of Burn ==>B
  `,img:"/assets/act1/bosses/hexaghost.webp",name:"Hexaghost",slug:"hexaghost"})),Un=()=>t(zn),Ct=n(()=>({effect:`${e.v>=19?5:3} Slimed into discard.`,intent:"/assets/intents/debuff2.png",name:"Goop Spray"})),Tt={effect:"Nothing.",intent:"/assets/intents/unknown.png",name:"Preparing"},It=n(()=>({effect:`${e.v>=4?38:35} Damage.`,intent:"/assets/intents/7.png",name:"Slam"})),Et={effect:"Spawns Acid Slime L and Spike Slime L with current HP. Dies.",intent:"/assets/intents/unknown.png",name:"Split"},Vn=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Ct).effect}<img src=${t(Ct).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${Tt.effect}<img src=${Tt.intent} class="h-10 object-contain" />)
      C(${t(It).effect}<img src=${t(It).intent} class="h-10 object-contain" />)
      D(${Et.effect}<img src=${Et.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
    A==>B
    B==>C
    C==>A
  `,img:"/assets/act1/bosses/slime-boss.webp",name:"Slime Boss",slug:"slime-boss"})),_n=()=>t(Vn),Lt={effect:"9 Block",intent:"/assets/intents/defend.png",name:"Charging Up"},Gt=n(()=>({effect:`${e.v>=4?36:32} Damage.`,intent:"/assets/intents/7.png",name:"Fierce Bash"})),yt={effect:"2 Weak. 2 Vulnerable",intent:"/assets/intents/debuff2.png",name:"Charging Up"},Pt={effect:"5 x 4 Damage.",intent:"/assets/intents/5.png",name:"Whirlwind"},Ft=n(()=>({effect:`${e.v>=19?4:3} Sharp Hide.`,intent:"/assets/intents/buff1.png",name:"Defensive Mode"})),Ht=n(()=>({effect:`${e.v>=4?10:9} Damage.`,intent:"/assets/intents/3.png",name:"Roll Attack"})),Wt={effect:"8 x 2 Damage. Removes Sharp Hide. Enters Offensive mode.",intent:"/assets/intents/attackBuff.png",name:"Twin Slam"},qn=n(()=>({flowchart:`
    flowchart-elk LR
      A(${Lt.effect}<img src=${Lt.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      B(${t(Gt).effect}<img src=${t(Gt).intent} class="h-10 object-contain" />)
      C(${yt.effect}<img src=${yt.intent} class="h-10 object-contain" />)
      D(${Pt.effect}<img src=${Pt.intent} class="h-10 object-contain" />)
      E(${t(Ft).effect}<img src=${t(Ft).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
      F(${t(Ht).effect}<img src=${t(Ht).intent} class="h-10 object-contain" />)
      G(${Wt.effect}<img src=${Wt.intent} class="h-10 object-contain" />)
      subgraph Offensive [<img src=/assets/act1/bosses/the-guardian-offensive.webp class="h-10 object-contain inline" />]
        direction LR
        A==>B==>C==>D==>A
      end
      subgraph Defensive [<img src=/assets/act1/bosses/the-guardian-defensive.webp class="h-10 object-contain inline" />]
        direction LR
        E==>F==>G==>E
      end 
  `,img:"/assets/act1/bosses/the-guardian-offensive.webp",name:"The Guardian",slug:"the-guardian"})),Xn=()=>t(qn),w=n(()=>({effect:`${e.v>=18?3:2} Enrage.`,intent:"/assets/intents/buff1.png",name:"Bellow"})),l=n(()=>({effect:`${e.v>=3?16:14} Damage.`,intent:"/assets/intents/3.png",name:"Rush"})),j=n(()=>({effect:`${e.v>=3?8:6} Damage. 2 Vulnerable.`,intent:"/assets/intents/attackDebuff.png",name:"Skull Bash"})),Jn=n(()=>({flowchart:e.v>=18?`
    flowchart-elk LR
      A(${t(w).effect}<img src=${t(w).intent} class="h-10 object-contain" />)
      B(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
      B2(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" />)
      C(${t(j).effect}<img src=${t(j).intent} class="h-10 object-contain" />)
    A==>C
    C==>B
    B==>B2
    B2==>A
  `:`
    flowchart-elk LR
      A(${t(w).effect}<img src=${t(w).intent} class="h-10 object-contain" />)
      B(${t(l).effect}<img src=${t(l).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
67%</span>)
      C(${t(j).effect}<img src=${t(j).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
      A==>Turn2+
      subgraph Turn2+ [Turn 2+]
        direction LR
        B
        C
      end
  `,img:"/assets/act1/elites/gremlin-nob.webp",name:"Gremlin Nob",slug:"gremlin-nob"})),Zn=()=>t(Jn),k=n(()=>({effect:`${e.v>=3?20:18} Damage.`,intent:"/assets/intents/4.png",name:"Attack"})),Ot=n(()=>({effect:` -${e.v>=18?2:1} Dexterity. -${e.v>=18?2:1} Strength.`,intent:"/assets/intents/debuff2.png",name:"Siphon Soul"})),Qn=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(k).effect}<img src=${t(k).intent} class="h-10 object-contain" />)
      A2(${t(k).effect}<img src=${t(k).intent} class="h-10 object-contain" />)
      B(${t(Ot).effect}<img src=${t(Ot).intent} class="h-10 object-contain" />)
      A==>A2
      A2==>B
      B==>A
  `,img:"/assets/act1/elites/lagavulin.webp",name:"Lagavulin",slug:"lagavulin"})),Yn=()=>t(Qn),Nt=n(()=>({effect:`${e.v>=3?10:9} Damage.`,intent:"/assets/intents/4.png",name:"Beam"})),zt=n(()=>({effect:`${e.v>=18?3:2} Dazed into discard.`,intent:"/assets/intents/debuff1.png",name:"Bolt"})),Kn=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Nt).effect}<img src=${t(Nt).intent} class="h-10 object-contain" />)
      B(${t(zt).effect}<img src=${t(zt).intent} class="h-10 object-contain" />)
      A<==>B
  `,img:"/assets/act1/elites/sentry.webp",name:"Sentry",slug:"sentry"})),ts=()=>t(Kn),Ut=n(()=>({effect:`${e.v>=2?12:11} Damage. 2 Slimed into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Corrosive Spit"})),Vt=n(()=>({effect:"2 Weak.",intent:"/assets/intents/debuff1.png",name:"Lick"})),_t=n(()=>({effect:`${e.v>=2?18:16} Damage.`,intent:"/assets/intents/4.png",name:"Tackle"})),qt={effect:"Spawns 2 Acid Slime M with current HP. Dies.",intent:"/assets/intents/unknown.png",name:"Split"},Xt=n(()=>({effect:`${e.v>=2?8:7} Damage. 1 Slimed into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Corrosive Spit"})),Jt=n(()=>({effect:"1 Weak.",intent:"/assets/intents/debuff1.png",name:"Lick"})),Zt=n(()=>({effect:`${e.v>=2?12:10} Damage.`,intent:"/assets/intents/3.png",name:"Tackle"})),Qt=n(()=>({effect:"1 Weak.",intent:"/assets/intents/debuff1.png",name:"Lick"})),Yt=n(()=>({effect:`${e.v>=2?4:3} Damage.`,intent:"/assets/intents/1.png",name:"Tackle"})),es=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=/assets/act1/monsters/acid-slime-l.webp class="h-10 object-contain inline" />]
        A(${t(Ut).effect}<img src=${t(Ut).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
${e.v>=17?"40%":"30%"}</span>)
        B(${t(Vt).effect}<img src=${t(Vt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?1:2}
30%</span>)
        C(${t(_t).effect}<img src=${t(_t).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?2:1}
${e.v>=17?"30%":"40%"}</span>)
        D(${qt.effect}<img src=${qt.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower.</span>)
      end
      subgraph Medium [<img src=/assets/act1/monsters/acid-slime-m.webp class="h-10 object-contain inline" />]
        A2(${t(Xt).effect}<img src=${t(Xt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
${e.v>=17?"40%":"30%"}</span>)
        B2(${t(Jt).effect}<img src=${t(Jt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?1:2}
30%</span>)
        C2(${t(Zt).effect}<img src=${t(Zt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?2:1}
${e.v>=17?"30%":"40%"}</span>)
      end
      subgraph Small [<img src=/assets/act1/monsters/acid-slime-s.webp class="h-10 object-contain inline" />]
        A3(${t(Qt).effect}<img src=${t(Qt).intent} class="h-10 object-contain" /><span class="text-xs">${e.v>=17?"Turn 1: 100%":"Turn 1: 50%"}</span>)
        B3(${t(Yt).effect}<img src=${t(Yt).intent} class="h-10 object-contain" /><span class="text-xs">${e.v>=17?"":"Turn 1: 50%"}</span>)
        A3<==>B3
      end
  `,img:"/assets/act1/monsters/acid-slimes.webp",name:"Acid Slimes",slug:"acid-slimes"})),ns=()=>t(es),Kt=n(()=>({effect:`${e.v>=2?13:12} Damage.`,intent:"/assets/intents/3.png",name:"Stab"})),te=n(()=>({effect:`${e.v>=2?8:7} Damage. ${e.v>=17?2:1} Weak.`,intent:"/assets/intents/attackDebuff.png",name:"Rake"})),ss=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(Kt).effect}<img src=${t(Kt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(te).effect}<img src=${t(te).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?1:2}
40%</span>)
  `,img:"/assets/act1/monsters/blue-slaver.webp",name:"Blue Slaver",slug:"blue-slaver"})),as=()=>t(ss),ee=n(()=>({effect:`${e.v>=2?e.v>=17?5:4:3} Ritual.`,intent:"/assets/intents/buff1.png",name:"Incantation"})),ne={effect:"6 Damage.",intent:"/assets/intents/2.png",name:"Dark Strike"},cs=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(ee).effect}<img src=${t(ee).intent} class="h-10 object-contain" />)
      B(${ne.effect}<img src=${ne.intent} class="h-10 object-contain" />)
      A==>B
      B==>B
  `,img:"/assets/act1/monsters/cultist.webp",name:"Cultist",slug:"cultist"})),is=()=>t(cs),se={effect:"6 Damage.",intent:"/assets/intents/2.png",name:"Bite"},ae=n(()=>({effect:`${e.v>=2?e.v>=17?5:4:3} Strength.`,intent:"/assets/intents/buff1.png",name:"Grow"})),os=n(()=>({flowchart:`
    flowchart-elk TB
      A(${se.effect}<img src=${se.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(ae).effect}<img src=${t(ae).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
40%</span>)
  `,img:"/assets/act1/monsters/fungi-beast.webp",name:"Fungi Beast",slug:"fungi-beast"})),fs=()=>t(os),c={effect:"Nothing.",intent:"/assets/intents/unknown.png",name:"Charging"},B=n(()=>({effect:`${e.v>=2?30:25} Damage.`,intent:"/assets/intents/6.png",name:"Ultimate Blast"})),v=n(()=>({effect:`${e.v>=2?5:4} Damage.`,intent:"/assets/intents/1.png",name:"Scratch"})),D=n(()=>({effect:`${e.v>=2?5:4} Damage. 1 Weak.${e.v>=17?" 1 Frail":""}.`,intent:"/assets/intents/attackDebuff.png",name:"Smash"})),S=n(()=>({effect:`Ally ${e.v>=2?e.v>=17?11:8:7} Block.`,intent:"/assets/intents/defend.png",name:"Protect"})),A=n(()=>({effect:`${e.v>=2?8:6} Damage.`,intent:"/assets/intents/2.png",name:"Shield Bash"})),M=n(()=>({effect:`${e.v>=2?10:9} Damage.`,intent:"/assets/intents/2.png",name:"Puncture"})),rs=n(()=>({flowchart:e.v>=17?`
    flowchart-elk TB
      subgraph Wizard [<img src=/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        A2(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        B(${t(B).effect}<img src=${t(B).intent} class="h-10 object-contain" />)
        A==>A2==>B==>B
      end
      subgraph Mad [<img src=/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A3(${t(v).effect}<img src=${t(v).intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A4(${t(D).effect}<img src=${t(D).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A5(${t(S).effect}<img src=${t(S).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B5(${t(A).effect}<img src=${t(A).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A6(${t(M).effect}<img src=${t(M).intent} class="h-10 object-contain" />)
      end
  `:`
    flowchart-elk TB
      subgraph Wizard [<img src=/assets/act1/monsters/wizard-gremlin.webp class="h-10 object-contain inline" />]
        A(${c.effect}<img src=${c.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        A3(${c.effect}<img src=${c.intent} class="h-10 object-contain" />)
        B(${t(B).effect}<img src=${t(B).intent} class="h-10 object-contain" />)
        A==>A2==>B==>A3==>A
      end
      subgraph Mad [<img src=/assets/act1/monsters/mad-gremlin.webp class="h-10 object-contain inline" />]
        A4(${t(v).effect}<img src=${t(v).intent} class="h-10 object-contain" />)
      end
      subgraph Fat [<img src=/assets/act1/monsters/fat-gremlin.webp class="h-10 object-contain inline" />]
        A5(${t(D).effect}<img src=${t(D).intent} class="h-10 object-contain" />)
      end
      subgraph Shield [<img src=/assets/act1/monsters/shield-gremlin.webp class="h-10 object-contain inline" />]
        A6(${t(S).effect}<img src=${t(S).intent} class="h-10 object-contain" /><span class="text-xs">Accompanied: 100%
Targets others when able.</span>)
        B6(${t(A).effect}<img src=${t(A).intent} class="h-10 object-contain" /><span class="text-xs">Alone: 100%</span>)
      end
      subgraph Sneaky [<img src=/assets/act1/monsters/sneaky-gremlin.webp class="h-10 object-contain inline" />]
        A7(${t(M).effect}<img src=${t(M).intent} class="h-10 object-contain" />)
      end
  `,img:"/assets/act1/monsters/gremlins.webp",name:"Gremlins",slug:"gremlins"})),ls=()=>t(rs),ce=n(()=>({effect:`${e.v>=2?12:11} Damage.`,intent:"/assets/intents/3.png",name:"Chomp"})),ie={effect:"7 Damage. 5 Block.",intent:"/assets/intents/attackDefend.png",name:"Thrash"},oe=n(()=>({effect:`${e.v>=2?e.v>=17?5:4:3} Strength. ${e.v>=17?9:6} Block.`,intent:"/assets/intents/defendBuff.png",name:"Bellow"})),gs=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(ce).effect}<img src=${t(ce).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Act 1, Turn 1: 100%
25%</span>)
      B(${ie.effect}<img src=${ie.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
      C(${t(oe).effect}<img src=${t(oe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
  `,img:"/assets/act1/monsters/jaw-worm.webp",name:"Jaw Worm",slug:"jaw-worm"})),ms=()=>t(gs),R=n(()=>({effect:`${e.v>=2?11:10} Damage.`,intent:"/assets/intents/3.png",name:"Mug"})),fe=n(()=>({effect:`${e.v>=2?14:12} Damage`,intent:"/assets/intents/3.png",name:"Lunge"})),re={effect:"6 Block.",intent:"/assets/intents/defend.png",name:"Smoke Bomb"},le={effect:"Escape.",intent:"/assets/intents/escape.png",name:"Escape"},ps=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(R).effect}<img src=${t(R).intent} class="h-10 object-contain" />)
      A2(${t(R).effect}<img src=${t(R).intent} class="h-10 object-contain" />)
      B(${t(fe).effect}<img src=${t(fe).intent} class="h-10 object-contain" />)
      C(${re.effect}<img src=${re.intent} class="h-10 object-contain" />)
      D(${le.effect}<img src=${le.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:"/assets/act1/monsters/looter.webp",name:"Looter",slug:"looter"})),bs=()=>t(ps),C=n(()=>({effect:`${e.v>=2?"D+1":"D"} Damage. D is chosen between 5 and 7 at the beginning of the battle.`,intent:"/assets/intents/2.png",name:"Bite"})),ge=n(()=>({effect:`${e.v>=17?4:3} Strength.`,intent:"/assets/intents/buff1.png",name:"Grow"})),me={effect:"2 Weak.",intent:"/assets/intents/debuff1.png",name:"Spit Web"},hs=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Red [<img src=/assets/act1/monsters/red-louse.webp class="h-10 object-contain inline" />]
        A(${t(C).effect}<img src=${t(C).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
75%</span>)
        B(${t(ge).effect}<img src=${t(ge).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?1:2}
25%</span>)
      end
      subgraph Green [<img src=/assets/act1/monsters/green-louse.webp class="h-10 object-contain inline" />]
        A2(${t(C).effect}<img src=${t(C).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
75%</span>)
        B2(${me.effect}<img src=${me.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?1:2}
25%</span>)
      end
  `,img:"/assets/act1/monsters/louses.webp",name:"Louses",slug:"louses"})),$s=()=>t(hs),s=n(()=>({effect:`${e.v>=2?14:13} Damage.`,intent:"/assets/intents/3.png",name:"Stab"})),i=n(()=>({effect:`${e.v>=2?9:8} Damage. ${e.v>=17?2:1} Vulnerable.`,intent:"/assets/intents/attackDebuff.png",name:"Scrape"})),T={effect:"1 Entangled.",intent:"/assets/intents/debuff2.png",name:"Entangle"},us=n(()=>({flowchart:e.v>=17?`
    flowchart-elk LR
      A(${t(s).effect}<img src=${t(s).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
      A2(${t(s).effect}<img src=${t(s).intent} class="h-10 object-contain" />)
      B(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" />)
      C(${T.effect}<img src=${T.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      A3(${t(s).effect}<img src=${t(s).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
      B2(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?1:2}
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
      A(${t(s).effect}<img src=${t(s).intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%</span>)
      A2(${t(s).effect}<img src=${t(s).intent} class="h-10 object-contain" />)
      B(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" />)
      B2(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" />)
      C(${T.effect}<img src=${T.intent} class="h-10 object-contain" /><span class="text-xs">Turn 2+: 25%</span>)
      A3(${t(s).effect}<img src=${t(s).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
      B3(${t(i).effect}<img src=${t(i).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?1:2}
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
  `,img:"/assets/act1/monsters/red-slaver.webp",name:"Red Slaver",slug:"red-slaver"})),xs=()=>t(us),pe=n(()=>({effect:`${e.v>=2?18:16} Damage. 2 Slimed into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Flame Tackle"})),be=n(()=>({effect:`${e.v>=17?3:2} Frail.`,intent:"/assets/intents/debuff1.png",name:"Lick"})),he={effect:"Spawns 2 Spike Slime M with current HP. Dies",intent:"/assets/intents/unknown.png",name:"Split"},$e=n(()=>({effect:`${e.v>=2?10:8} Damage. 1 Slimed into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Flame Tackle"})),ue=n(()=>({effect:"1 Frail.",intent:"/assets/intents/debuff1.png",name:"Lick"})),xe=n(()=>({effect:`${e.v>=2?6:5} Damage.`,intent:"/assets/intents/2.png",name:"Tackle"})),ds=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Large [<img src=/assets/act1/monsters/spike-slime-l.webp class="h-10 object-contain inline" />]
        A(${t(pe).effect}<img src=${t(pe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
        B(${t(be).effect}<img src=${t(be).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?1:2}
70%</span>)
        C(${he.effect}<img src=${he.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP reaches 50% or lower</span>)
      end
      subgraph Medium [<img src=/assets/act1/monsters/spike-slime-m.webp class="h-10 object-contain inline" />]
        A2(${t($e).effect}<img src=${t($e).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
30%</span>)
        B2(${t(ue).effect}<img src=${t(ue).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?1:2}
70%</span>)
      end
      subgraph Small [<img src=/assets/act1/monsters/spike-slime-s.webp class="h-10 object-contain inline" />]
        A3(${t(xe).effect}<img src=${t(xe).intent} class="h-10 object-contain" />)
      end
  `,img:"/assets/act1/monsters/spike-slimes.webp",name:"Spike Slimes",slug:"spike-slimes"})),ws=()=>t(ds),I={effect:"Spawns 2 Bronze Orbs.",intent:"/assets/intents/unknown.png",name:"Spawn Orbs"},o=n(()=>({effect:`${e.v>=4?4:3} Strength. ${e.v>=9?12:9} Block.`,intent:"/assets/intents/defendBuff.png",name:"Boost"})),f=n(()=>({effect:`${e.v>=4?8:7} x 2 Damage.`,intent:"/assets/intents/3.png",name:"Flail"})),E=n(()=>({effect:`${e.v>=4?50:45} Damage.`,intent:"/assets/intents/7.png",name:"HYPER BEAM"})),L={effect:"Steals the rarest card in the draw pile, or from the discard pile if the draw pile is empty.",intent:"/assets/intents/debuff2.png",name:"Stasis"},G={effect:"8 Damage.",intent:"/assets/intents/2.png",name:"Beam"},y={effect:"<img src=/assets/act2/bosses/bronze-automaton.webp class='h-10 object-contain inline' /> 12 Block.",intent:"/assets/intents/defend.png",name:"Support Beam"},js=n(()=>({flowchart:e.v>=19?`
    flowchart-elk TB
      A(${I.effect}<img src=${I.intent} class="h-10 object-contain" />)
      B(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      B2(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      B3(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      C(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" />)
      C2(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" />)
      D(${t(E).effect}<img src=${t(E).intent} class="h-10 object-contain" />)
      subgraph Bronze [<img src=/assets/act2/bosses/bronze-automaton.webp class="h-10 object-contain inline" />]
        direction LR
        A==>C==>B==>C2==>B2==>D==>B3==>C
      end
      subgraph Orb [<img src=/assets/act2/bosses/bronze-orb.webp class="h-10 object-contain inline" />]
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
      B(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      B2(${t(o).effect}<img src=${t(o).intent} class="h-10 object-contain" />)
      C(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" />)
      C2(${t(f).effect}<img src=${t(f).intent} class="h-10 object-contain" />)
      D(${t(E).effect}<img src=${t(E).intent} class="h-10 object-contain" />)  
      E(Stunned<img src='/assets/intents/stun.png' class="h-10 object-contain" />)
      subgraph Bronze [<img src=/assets/act2/bosses/bronze-automaton.webp class="h-10 object-contain inline" />]
        direction LR
        A==>C==>B==>C2==>B2==>D==>E==>C
      end
      subgraph Orb [<img src=/assets/act2/bosses/bronze-orb.webp class="h-10 object-contain inline" />]
        F(${L.effect}<img src=${L.intent} class="h-10 object-contain" /><span class="text-xs">75%
Card Stolen: 0%</span>)  
        G(${G.effect}<img src=${G.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
7.5%
Card Stolen: 30%</span>)  
        H(${y.effect}<img src=${y.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
17.5%
Card Stolen: 70%</span>)  
      end
  `,img:"/assets/act2/bosses/bronze-automaton.webp",name:"Bronze Automaton",slug:"bronze-automaton"})),ks=()=>t(js),P=n(()=>({effect:`${e.v>=9?e.v>=19?20:18:15} Block. ${e.v>=9?e.v>=19?7:6:5} Metallicize.`,intent:"/assets/intents/defendBuff.png",name:"Defensive Stance"})),F=n(()=>({effect:`${e.v>=4?14:12} Damage. 2 Frail. 2 Vulnerable.`,intent:"/assets/intents/attackDebuff.png",name:"Face Slap"})),H={effect:"2 Weak. 2 Vulnerable.",intent:"/assets/intents/debuff1.png",name:"Taunt"},W=n(()=>({effect:`${e.v>=4?18:16} Damage.`,intent:"/assets/intents/4.png",name:"Heavy Slash"})),de=n(()=>({effect:`${e.v>=4?e.v>=19?4:3:2} Strength.`,intent:"/assets/intents/buff1.png",name:"Gloat"})),O={effect:"10 x 2 Damage.",intent:"/assets/intents/5.png",name:"Execute"},N=n(()=>({effect:`Removes debuffs. ${e.v>=4?e.v>=19?12:9:6} Strength.`,intent:"/assets/intents/buff1.png",name:"Anger"})),Bs=n(()=>({flowchart:e.v>=19?`
    flowchart-elk TB
      subgraph Main [Main.
<span class="text-xs">Invalid moves, when rolled, use next instead.</span>]
        direction LR
        A(${t(P).effect}<img src=${t(P).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max In a Row: 1
${e.v>=19?"30%":"15%"}</span>)
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
        G(${t(N).effect}<img src=${t(N).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Does NOT interupt current intent.</span>)
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `:`
    flowchart-elk TB
      subgraph Main [Main.
<span class="text-xs">Invalid moves, when rolled, use next instead.</span>]
        direction LR
        A(${t(P).effect}<img src=${t(P).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 2
Max In a Row: 1
${e.v>=19?"30%":"15%"}</span>)
        B(${t(F).effect}<img src=${t(F).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(W).effect}<img src=${t(W).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
45%</span>)
        E(${t(de).effect}<img src=${t(de).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
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
        G(${t(N).effect}<img src=${t(N).intent} class="h-10 object-contain" /><span class="text-xs">Trigger: HP below 50%. Does NOT interupt current intent.</span>)
        G==>F==>M1(Main)==>M2(Main)==>F
      end
  `,img:"/assets/act2/bosses/the-champ.webp",name:"The Champ",slug:"the-champ"})),vs=()=>t(Bs),z=n(()=>({effect:`Group ${e.v>=4?e.v>=19?5:4:3} Strength. ${e.v>=4?e.v>=19?23:18:15} Block.`,intent:"/assets/intents/defendBuff.png",name:"Buff"})),U=n(()=>({effect:`${e.v>=4?21:18} Damage.`,intent:"/assets/intents/4.png",name:"Fireball"})),$t=n(()=>({effect:`${e.v>=19?5:3} Weak. ${e.v>=19?5:3} Vulnerable. ${e.v>=19?5:3} Frail.`,intent:"/assets/intents/debuff2.png",name:"Mega Debuff"})),ut={effect:"Spawns up to 2 Torch Heads.",intent:"/assets/intents/unknown.png",name:"Spawn"},we={effect:"7 Damage.",intent:"/assets/intents/2.png",name:"Tackle"},Ds=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Head [<img src=/assets/act2/bosses/torch-head.webp class="h-10 object-contain inline" />]
        E(${we.effect}<img src=${we.intent} class="h-10 object-contain" />)
      end
      subgraph Collector [<img src=/assets/act2/bosses/the-collector.webp class="h-10 object-contain inline" />]
      subgraph 0-1Torch [0-1 Torch Heads]
          A(<img src=${t(z).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
          B(<img src=${t(U).intent} class="h-10 object-contain" /><span class="text-xs">45%</span>)
          D(<img src=${ut.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
        end
        subgraph 2Torch [2 Torch Heads]
          A2(<img src=${t(z).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
          B2(<img src=${t(U).intent} class="h-10 object-contain" /><span class="text-xs">70%</span>)
        end
        subgraph Turn4 [Turn 4]
          C(<img src=${t($t).intent} class="h-10 object-contain" />)
        end
      end
  `,moves:`
    flowchart-elk TB
      A(${t(z).effect}<img src=${t(z).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${t(U).effect}<img src=${t(U).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      C(${t($t).effect}<img src=${t($t).intent} class="h-10 object-contain" />)
      D(${ut.effect}<img src=${ut.intent} class="h-10 object-contain" />)
  `,img:"/assets/act2/bosses/the-collector.webp",name:"The Collector",slug:"the-collector"})),Ss=()=>t(Ds),xt=n(()=>({effect:`${e.v>=3?7:6} x N Damage. N = 2 + ${e.v>=18?"Multi/Single Stabs":"Multi-Stabs"} used`,intent:"/assets/intents/3.png",name:"Multi-Stab"})),dt=n(()=>({effect:`${e.v>=3?24:21} Damage.`,intent:"/assets/intents/5.png",name:"Single Stab"})),As=n(()=>({flowchart:`
    flowchart-elk TB
      A(*${t(xt).name}*
${t(xt).effect}<img src=${t(xt).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max In a Row: 2
85%</span>)
      B(*${t(dt).name}*
${t(dt).effect}<img src=${t(dt).intent} class="h-10 object-contain" /><span class="text-xs">Unblocked: Wound into discard
Max In a Row: 1
15%</span>)
  `,img:"/assets/act2/elites/book-of-stabbing.webp",name:"Book of Stabbing",slug:"book-of-stabbing"})),Ms=()=>t(As),$=n(()=>({effect:`Group ${e.v>=3?e.v>=18?5:4:3} Strength. Group ${e.v>=18?10:6} Block.`,intent:"/assets/intents/defendBuff.png",name:"Encourage"})),u={effect:"Spawns 2 Gremlins.",intent:"/assets/intents/unknown.png",name:"Rally!"},g={effect:"6 x 3 Damage.",intent:"/assets/intents/4.png",name:"Stab"},Rs=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t($).effect}<img src=${t($).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B(${u.effect}<img src=${u.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${g.effect}<img src=${g.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      B0(<img src=${u.intent} class="h-10 object-contain" /><span class="text-xs">75%</span>)
      C0(<img src=${g.intent} class="h-10 object-contain" /><span class="text-xs">25%</span>)
      A1(<img src=${t($).intent} class="h-10 object-contain" /><span class="text-xs">37.5%</span>)
      B1a(<img src=${u.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B1b(<img src=${u.intent} class="h-10 object-contain" /><span class="text-xs">62.5%</span>)
      C1(<img src=${g.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      A2(<img src=${t($).intent} class="h-10 object-contain" /><span class="text-xs">66%</span>)
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
        subgraph prevMoveEncourage [Previous Move <img src=${t($).intent} class="h-10 object-contain inline" />]
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
  `,img:"/assets/act2/elites/gremlin-leader.webp",name:"Gremlin Leader",slug:"gremlin-leader"})),Cs=()=>t(Rs),je=n(()=>({effect:`7 Damage. ${e.v>=3?e.v>=18?3:2:1} Wound into discard.${e.v>=18?" 1 Strength.":""}`,intent:"/assets/intents/attackDebuff.png",name:"Scouring Whip"})),Ts=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(je).effect}<img src=${t(je).intent} class="h-10 object-contain" />)
  `,img:"/assets/act2/elites/taskmaster.webp",name:"Taskmaster",slug:"taskmaster"})),Is=()=>t(Ts),ke={effect:"1 Strength.",intent:"/assets/intents/buff1.png",name:"Caw"},Be=n(()=>({effect:`1 x ${e.v>=2?6:5} Damage.`,intent:"/assets/intents/2.png",name:"Peck"})),ve=n(()=>({effect:`${e.v>=2?14:12} Damage.`,intent:"/assets/intents/3.png",name:"Swoop"})),De=n(()=>({effect:`Flying ${e.v>=17?4:3}.`,intent:"/assets/intents/unknown.png",name:"Fly"})),Se={effect:"3 Damage",intent:"/assets/intents/1.png",name:"Headbutt"},Es=n(()=>({flowchart:`
    flowchart-elk TB
      A(${ke.effect}<img src=${ke.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 37.5%
30%</span>)
      B(${t(Be).effect}<img src=${t(Be).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: 62.5%
50%</span>)
      C(${t(ve).effect}<img src=${t(ve).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 0%
20%</span>)
      D(${t(De).effect}<img src=${t(De).intent} class="h-10 object-contain" />)
      E(${Se.effect}<img src=${Se.intent} class="h-10 object-contain" />)
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
  `,img:"/assets/act2/monsters/byrd-flying.webp",name:"Byrd",slug:"byrd"})),Ls=()=>t(Es),Ae=n(()=>({effect:`${e.v>=2?14:12} Damage.`,intent:"/assets/intents/3.png",name:"Slash"})),Me=n(()=>({effect:`${e.v>=2?7:6} x 3 Damage.`,intent:"/assets/intents/4.png",name:"Fury"})),Re=n(()=>({effect:`Ally ${e.v>=17?20:15} Block.`,intent:"/assets/intents/defend.png",name:"Defend"})),Ce=n(()=>({effect:`Group ${e.v>=17?20:16} Heal.`,intent:"/assets/intents/buff1.png",name:"Heal"})),Te=n(()=>({effect:`Group ${e.v>=2?e.v>=17?4:3:2} Strength.`,intent:"/assets/intents/buff1.png",name:"Buff"})),Ie=n(()=>({effect:`${e.v>=2?9:8} Damage. 2 Frail.`,intent:"/assets/intents/attackDebuff.png",name:"Attack/Debuff"})),Gs=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Centurion [<img src=/assets/act2/monsters/centurion.webp class="h-10 object-contain inline" />]
        A(${t(Ae).effect}<img src=${t(Ae).intent} class="h-10 object-contain" /><span class="text-xs">65%</span>)
        subgraph MysticAlive [Mystic Alive]
          C(${t(Re).effect}<img src=${t(Re).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
        subgraph MysticDead [Mystic Dead]
          B(${t(Me).effect}<img src=${t(Me).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        end
      end
      subgraph Mystic [<img src=/assets/act2/monsters/mystic.webp class="h-10 object-contain inline" />]
        A2(${t(Ce).effect}<img src=${t(Ce).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Trigger: An enemy is hurt ${e.v>=17?21:16} or more</span>)
        B2(${t(Te).effect}<img src=${t(Te).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
        C2(${t(Ie).effect}<img src=${t(Ie).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: ${e.v>=17?1:2}
60%</span>)
      end
  `,img:"/assets/act2/monsters/centurion-mystic.webp",name:"Centurion and Mystic",slug:"centurion-mystic"})),ys=()=>t(Gs),m=n(()=>({effect:`${e.v>=2?6:5} x 2 Damage.`,intent:"/assets/intents/3.png",name:"Poke"})),V=n(()=>({effect:`${e.v>=2?21:18} Damage.`,intent:"/assets/intents/4.png",name:"Zap"})),_=n(()=>({effect:`${e.v>=2?12:10} Damage. 2 Vulnerable.`,intent:"/assets/intents/attackDebuff.png",name:"Debilitate"})),q={effect:"3 Weak. 3 Strength.",intent:"/assets/intents/debuff1.png",name:"Drain"},X={effect:"1 Hex.",intent:"/assets/intents/debuff2.png",name:"Hex"},Ps=n(()=>({flowchart:e.v>=17?`
    flowchart-elk LR
      A(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${t(V).effect}<img src=${t(V).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(_).effect}<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${q.effect}<img src=${q.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
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
      A(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" />)
      A2(${t(m).effect}<img src=${t(m).intent} class="h-10 object-contain" /><span class="text-xs">60%</span>)
      B(${t(V).effect}<img src=${t(V).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(_).effect}<img src=${t(_).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${q.effect}<img src=${q.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
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
  `,img:"/assets/act2/monsters/chosen.webp",name:"Chosen",slug:"chosen"})),Fs=()=>t(Ps),J=n(()=>({effect:`${e.v>=2?11:10} Damage.`,intent:"/assets/intents/3.png",name:"Mug"})),Ee=n(()=>({effect:`${e.v>=2?18:16} Damage`,intent:"/assets/intents/4.png",name:"Lunge"})),Le=n(()=>({effect:`${e.v>=17?17:11} Block.`,intent:"/assets/intents/defend.png",name:"Smoke Bomb"})),Ge={effect:"Escape.",intent:"/assets/intents/escape.png",name:"Escape"},Hs=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(J).effect}<img src=${t(J).intent} class="h-10 object-contain" />)
      A2(${t(J).effect}<img src=${t(J).intent} class="h-10 object-contain" />)
      B(${t(Ee).effect}<img src=${t(Ee).intent} class="h-10 object-contain" />)
      C(${t(Le).effect}<img src=${t(Le).intent} class="h-10 object-contain" />)
      D(${Ge.effect}<img src=${Ge.intent} class="h-10 object-contain" />)
      A==>A2
      A2== 50% ==>B
      A2== 50% ==>C
      B==>C
      C==>D
  `,img:"/assets/act2/monsters/mugger.webp",name:"Mugger",slug:"mugger"})),Ws=()=>t(Hs),ye=n(()=>({effect:`${e.v>=2?7:6} x 2 Damage.`,intent:"/assets/intents/3.png",name:"Double Strike"})),Pe=n(()=>({effect:`${e.v>=2?12:10} Lifesteal.`,intent:"/assets/intents/attackBuff.png",name:"Suck"})),Fe=n(()=>({effect:`${e.v>=2?21:18} Damage. 2 Frail.`,intent:"/assets/intents/attackDebuff.png",name:"Fell"})),Os=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(ye).effect}<img src=${t(ye).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: ${e.v>=17?"0%":"50%"}
40%</span>)
      B(${t(Pe).effect}<img src=${t(Pe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: ${e.v>=17?"0%":"50%"}
40%</span>)
      C(${t(Fe).effect}<img src=${t(Fe).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: ${e.v>=17?"100%":"0%"}
20%</span>)
      D(Stunned<img src='/assets/intents/stun.png' class="h-10 object-contain" /><span class="text-xs">Trigger: Platted Armor reduced to 0</span>)
  `,img:"/assets/act2/monsters/shelled-parasite.webp",name:"Shelled Parasite",slug:"shelled-parasite"})),Ns=()=>t(Os),He=n(()=>({effect:`${e.v>=2?8:7} x 3 Damage.`,intent:"/assets/intents/5.png",name:"Chomp"})),We={effect:"2 Frail. 2 Weak.",intent:"/assets/intents/debuff2.png",name:"Enfeebling Spores"},zs=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(He).effect}<img src=${t(He).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
65%</span>)
      B(${We.effect}<img src=${We.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
35%</span>)
  `,img:"/assets/act2/monsters/snake-plant.webp",name:"Snake Plant",slug:"snake-plant"})),Us=()=>t(zs),Oe={effect:"Confuse.",intent:"/assets/intents/debuff2.png",name:"Perplexing Glare"},Ne=n(()=>({effect:`${e.v>=2?10:8} Damage. 2 Vulnerable${e.v>=17?" 2 Weak":""}.`,intent:"/assets/intents/attackDebuff.png",name:"Chomp"})),ze=n(()=>({effect:`${e.v>=2?18:15} Damage.`,intent:"/assets/intents/4.png",name:"Bite"})),Vs=n(()=>({flowchart:`
    flowchart-elk TB
      A(${Oe.effect}<img src=${Oe.intent} class="h-10 object-contain" /><span class="text-xs">Turn 1: 100%
0%</span>)
      B(${t(Ne).effect}<img src=${t(Ne).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
      C(${t(ze).effect}<img src=${t(ze).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
  `,img:"/assets/act2/monsters/snecko.webp",name:"Snecko",slug:"snecko"})),_s=()=>t(Vs),Ue=n(()=>({effect:`${e.v>=2?11:10} x 2 Damage.`,intent:"/assets/intents/5.png",name:"Slam"})),Ve=n(()=>({effect:`${e.v>=17?35:25} Block.`,intent:"/assets/intents/defend.png",name:"Activate"})),_e=n(()=>({effect:`${e.v>=2?11:10} Damage. 15 Block.`,intent:"/assets/intents/attackDefend.png",name:"Harden"})),qe=n(()=>({effect:`${e.v>=2?11:10} Damage. 5 Frail.`,intent:"/assets/intents/attackDebuff.png",name:"Attack/Debuff"})),qs=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Ue).effect}<img src=${t(Ue).intent} class="h-10 object-contain" />)
      B(${t(Ve).effect}<img src=${t(Ve).intent} class="h-10 object-contain" />)
      C(${t(_e).effect}<img src=${t(_e).intent} class="h-10 object-contain" />)
      D(${t(qe).effect}<img src=${t(qe).intent} class="h-10 object-contain" />)
      B==>D==>A<==>C
  `,img:"/assets/act2/monsters/spheric-guardian.webp",name:"Spheric Guardian",slug:"spheric-guardian"})),Xs=()=>t(qs),Xe={effect:"20 Damage.",intent:"/assets/intents/5.png",name:"Slash"},Je={effect:"6 x 4 Damage.",intent:"/assets/intents/5.png",name:"Soul Strike"},Ze={effect:"Removes debuffs.",intent:"/assets/intents/unknown.png",name:"Rebirth"},Qe={effect:"40 Damage.",intent:"/assets/intents/7.png",name:"Dark Echo"},Ye={effect:"18 Damage. 1 Void into draw.",intent:"/assets/intents/attackDebuff.png",name:"Sludge"},Ke={effect:"10 x 3 Damage.",intent:"/assets/intents/7.png",name:"Tackle"},Js=n(()=>({flowchart:`
    flowchart-elk LR
      subgraph Unawakened [<img src=/assets/act3/bosses/awakened-one-unawakened.webp class="h-10 object-contain inline" />]
        direction LR
        A(${Xe.effect}<img src=${Xe.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
Turn 1: 100%
75%</span>)
        B(${Je.effect}<img src=${Je.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
Turn 1: 0%
25%</span>)
      end
      C(${Ze.effect}<img src=${Ze.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      A2(${Qe.effect}<img src=${Qe.intent} class="h-10 object-contain" />)
      C==>A2==>Awakened
      subgraph Awakened [<img src=/assets/act3/bosses/awakened-one-awakened.webp class="h-10 object-contain inline" />]
        direction LR
        B2(${Ye.effect}<img src=${Ye.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        C2(${Ke.effect}<img src=${Ke.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
  `,img:"/assets/act3/bosses/awakened-one-unawakened.webp",name:"Awakened One",slug:"awakened-one"})),Zs=()=>t(Js),tn={effect:"Group 3 Strength.",intent:"/assets/intents/buff1.png",name:"Circle of Power"},en=n(()=>({effect:`${e.v>=4?12:10} x 2 Damage.`,intent:"/assets/intents/5.png",name:"Beam"})),nn=n(()=>({effect:`Group 16 Block.${e.v>=19?" 3 Plated Armor.":""}`,intent:`/assets/intents/${e.v>=19?"defendBuff":"defend"}.png`,name:"Square Of Protection"})),sn=n(()=>({effect:`${e.v>=4?12:10} x 2 Damage. 2 Dazed into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Beam"})),Qs=n(()=>({flowchart:`
    flowchart-elk LR
      subgraph Donu [<img src=/assets/act3/bosses/donu.webp class="h-10 object-contain inline" />]
        A(${tn.effect}<img src=${tn.intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        B(${t(en).effect}<img src=${t(en).intent} class="h-10 object-contain" />)
        A<==>B
      end
      subgraph Deca [<img src=/assets/act3/bosses/deca.webp class="h-10 object-contain inline" />]
        A2(${t(nn).effect}<img src=${t(nn).intent} class="h-10 object-contain" />)
        B2(${t(sn).effect}<img src=${t(sn).intent} class="h-10 object-contain" /><span class="text-xs">Start</span>)
        A2<==>B2
      end
  `,img:"/assets/act3/bosses/donu-deca.webp",name:"Donu and Deca",slug:"donu-deca"})),Ys=()=>t(Qs),an=n(()=>({effect:`${e.v>=4?8:7} x 3 Damage.`,intent:"/assets/intents/5.png",name:"Reverberate"})),cn=n(()=>({effect:`${e.v>=4?32:26} Damage. 1 Draw Reduction.${e.v>=19?" 2 Slimed into discard.":""}`,intent:"/assets/intents/6.png",name:"Head Slam"})),on=n(()=>({effect:`20 Block. 1 Vulnerable. 1 Weak.${e.v>=19?" 1 Frail.":""}`,intent:"/assets/intents/defendDebuff.png",name:"Ripple"})),fn=n(()=>({effect:`Heals to 50% HP. Removes debuffs.${e.v>=19?" 32 Block. ":""}`,intent:"/assets/intents/buff1.png",name:"Haste"})),Ks=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t(an).effect}<img src=${t(an).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
45%</span>)
      B(${t(cn).effect}<img src=${t(cn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
35%</span>)
      C(${t(on).effect}<img src=${t(on).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
      D(${t(fn).effect}<img src=${t(fn).intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
Trigger: Below 50% HP.</span>)
  `,img:"/assets/act3/bosses/time-eater.webp",name:"Time Eater",slug:"time-eater"})),ta=()=>t(Ks),rn={effect:"13 Damage.",intent:"/assets/intents/3.png",name:"Count"},ln={effect:"1 Weak.",intent:"/assets/intents/debuff1.png",name:"Glare"},gn=n(()=>({effect:`${e.v>=3?40:30} + T Damage. T starts at 0 and increases by 5 every time the attack is used, up to 30 additional Damage.`,intent:"/assets/intents/7.png",name:"It Is Time"})),ea=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turns [Turns 1-${e.v>=18?3:4}]
        A(${rn.effect}<img src=${rn.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
        B(${ln.effect}<img src=${ln.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
50%</span>)
      end
      subgraph Turns+ [Turn ${e.v>=18?4:5}+]
        C(${t(gn).effect}<img src=${t(gn).intent} class="h-10 object-contain" />)
      end
  `,img:"/assets/act3/elites/giant-head.webp",name:"Giant Head",slug:"giant-head"})),na=()=>t(ea),Z=n(()=>({effect:`${e.v>=18?5:3} Burn into discard.`,intent:"/assets/intents/debuff1.png",name:"Debuff"})),Q=n(()=>({effect:`${e.v>=3?7:6} x 3 Damage.`,intent:"/assets/intents/4.png",name:"Attack"})),wt={effect:"45 Damage.",intent:"/assets/intents/7.png",name:"Scythe"},sa=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Moves
        A(${t(Z).effect}<img src=${t(Z).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
        B(${t(Q).effect}<img src=${t(Q).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
        C(${wt.effect}<img src=${wt.intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      end
      subgraph Turn1 [Turn 1]
        A1(<img src=${t(Z).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B1(<img src=${t(Q).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Turn+ [Turn 2+]
        A2(<img src=${t(Z).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        B2(<img src=${t(Q).intent} class="h-10 object-contain" /><span class="text-xs">35%</span>)
        C2(<img src=${wt.intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      Turn1~~~Moves
      Turn+~~~Moves
  `,img:"/assets/act3/elites/nemesis.webp",name:"Nemesis",slug:"nemesis"})),aa=()=>t(sa),jt=n(()=>({effect:`Spawns ${e.v>=18?2:"a"} Dagger.`,intent:"/assets/intents/unknown.png",name:"Summon"})),Y=n(()=>({effect:`${e.v>=3?16:13} x 2 Damage. 1 Weak.`,intent:"/assets/intents/attackDebuff.png",name:"Snake Strike"})),K=n(()=>({effect:`${e.v>=3?34:30} Damage.`,intent:"/assets/intents/7.png",name:"Big Bite"})),mn={effect:"9 Damage. 1 Wound into discard.",intent:"/assets/intents/attackDebuff.png",name:"Stab"},pn={effect:"25 Damage. Dies.",intent:"/assets/intents/6.png",name:"Explode"},ca=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Reptomancer [<img src=/assets/act3/elites/reptomancer.webp class="h-10 object-contain inline" />]
        subgraph 0-3Daggers [0-3 Daggers]
          A2(<img src=${t(jt).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          B2(<img src=${t(Y).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
          C2(<img src=${t(K).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
        subgraph 4Daggers [4 Daggers]
          B3(<img src=${t(Y).intent} class="h-10 object-contain" /><span class="text-xs">67%</span>)
          C3(<img src=${t(K).intent} class="h-10 object-contain" /><span class="text-xs">33%</span>)
        end
      end
      subgraph Dagger [<img src=/assets/act3/elites/dagger.webp class="h-10 object-contain inline" />]
        D(${mn.effect}<img src=${mn.intent} class="h-10 object-contain" />)
        E(${pn.effect}<img src=${pn.intent} class="h-10 object-contain" />)
        D==>E
      end
  `,moves:`
    flowchart-elk TB
      A(${t(jt).effect}<img src=${t(jt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
      B(${t(Y).effect}<img src=${t(Y).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      C(${t(K).effect}<img src=${t(K).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
  `,img:"/assets/act3/elites/reptomancer.webp",name:"Reptomancer",slug:"reptomancer"})),ia=()=>t(ca),tt=n(()=>({effect:`${e.v>=2?"D + 2":"D"} Damage. D is chosen between 7 and 11 at the beginning of the battle.`,intent:"/assets/intents/2.png",name:"Nip"})),kt=n(()=>({effect:`${e.v>=2?9:8} x 2 Damage.`,intent:"/assets/intents/4.png",name:"Chomp"})),et=n(()=>({effect:`12 Block.${e.v>=17?" 2 Strength.":""}`,intent:`/assets/intents/${e.v>=17?"defendBuff":"defend"}.png`,name:"Harden"})),bn={effect:"Revives with 50% HP.",intent:"/assets/intents/buff1.png",name:"Reincarnate"},hn={effect:"Nothing.",intent:"/assets/intents/unknown.png",name:"Regrow"},oa=n(()=>({flowchart:`
    flowchart-elk TB
      D(${bn.effect}<img src=${bn.intent} class="h-10 object-contain" />)
      E(${hn.effect}<img src=${hn.intent} class="h-10 object-contain" /><span class="text-xs">Trigger: 0 HP.</span>)
      E==>D
      subgraph Middle [Middle Darkling / Outer Darklings Turn 1]
        A1(<img src=${t(tt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C1(<img src=${t(et).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph Outer [Outer Darklings Turn 2+]
        A2(<img src=${t(tt).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
        B2(<img src=${t(kt).intent} class="h-10 object-contain" /><span class="text-xs">40%</span>)
        C2(<img src=${t(et).intent} class="h-10 object-contain" /><span class="text-xs">30%</span>)
      end
      subgraph Moves
        A(${t(tt).effect}<img src=${t(tt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2</span>)
        B(${t(kt).effect}<img src=${t(kt).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
        C(${t(et).effect}<img src=${t(et).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1</span>)
      end
      Middle~~~Moves
      Outer~~~Moves
  `,img:"/assets/act3/monsters/darkling.webp",name:"Darkling",slug:"darkling"})),fa=()=>t(oa),$n=n(()=>({effect:`${e.v>=2?11:10} Damage. 1 Burn into draw. 1 Burn into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Laser"})),un=n(()=>({effect:`${e.v>=2?16:15} Damage.`,intent:"/assets/intents/4.png",name:"Claw"})),ra=n(()=>({flowchart:`
    flowchart-elk TB
      A(${t($n).effect}<img src=${t($n).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
60%</span>)
      B(${t(un).effect}<img src=${t(un).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
  `,img:"/assets/act3/monsters/orb-walker.webp",name:"Orb Walker",slug:"orb-walker"})),la=()=>t(ra),xn=n(()=>({effect:`${e.v>=2?9:7} Damage.`,intent:"/assets/intents/2.png",name:"Cut"})),dn={effect:"2 Thorns.",intent:"/assets/intents/buff1.png",name:"Spike"},nt=n(()=>({effect:`${e.v>=2?11:9} Damage.`,intent:"/assets/intents/2.png",name:"Slam"})),wn={effect:"30 Damage. Dies.",intent:"/assets/intents/unknown.png",name:"Explode"},jn=n(()=>({effect:`${e.v>=2?13:11} Damage.`,intent:"/assets/intents/3.png",name:"Bash"})),kn={effect:"2 Dazed into draw.",intent:"/assets/intents/debuff1.png",name:"Repulse"},ga=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Spiker [<img src=/assets/act3/monsters/spiker.webp class="h-10 object-contain inline" />]
        A(${t(xn).effect}<img src=${t(xn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 2
40%</span>)
        B(${dn.effect}<img src=${dn.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 6
50%</span>)
      end
      subgraph Exploder [<img src=/assets/act3/monsters/exploder.webp class="h-10 object-contain inline" />]
        A2(${t(nt).effect}<img src=${t(nt).intent} class="h-10 object-contain" />)
        A3(${t(nt).effect}<img src=${t(nt).intent} class="h-10 object-contain" />)
        B2(${wn.effect}<img src=${wn.intent} class="h-10 object-contain" />)
        A2==>A3==>B2
      end
      subgraph Repulsor [<img src=/assets/act3/monsters/repulsor.webp class="h-10 object-contain inline" />]
        A4(${t(jn).effect}<img src=${t(jn).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
        B3(${kn.effect}<img src=${kn.intent} class="h-10 object-contain" /><span class="text-xs">80%</span>)
      end
  `,img:"/assets/act3/monsters/shapes.webp",name:"Shapes",slug:"shapes"})),ma=()=>t(ga),p=n(()=>({effect:`${e.v>=2?18:16} Damage.`,intent:"/assets/intents/4.png",name:"Quick Tackle"})),st=n(()=>({effect:`${e.v>=2?25:22} Damage.`,intent:"/assets/intents/5.png",name:"Smash"})),b=n(()=>({effect:`${e.v>=17?12:10} Constricted.`,intent:"/assets/intents/debuff2.png",name:"Constrict"})),pa=n(()=>({flowchart:e.v>=17?`
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
  `,img:"/assets/act3/monsters/spire-growth.webp",name:"Spire Growth",slug:"spire-growth"})),ba=()=>t(pa),Bn=n(()=>({effect:`${e.v>=17?5:3} Weak. ${e.v>=17?5:3} Frail.`,intent:"/assets/intents/debuff2.png",name:"Roar"})),vn=n(()=>({effect:`${e.v>=17?5:3} Strength.`,intent:"/assets/intents/buff1.png",name:"Drool"})),Dn=n(()=>({effect:`${e.v>=2?30:25} Damage.`,intent:"/assets/intents/6.png",name:"Slam"})),at={effect:"5 x T Damage. T = Turn Number / 2, rounded up.",intent:"/assets/intents/2.png",name:"Nom"},ha=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Bn).effect}<img src=${t(Bn).intent} class="h-10 object-contain" />)
      A==>afterDebuff
      subgraph afterDebuff [After Debuff]
        C(${t(Dn).effect}<img src=${t(Dn).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D(${at.effect}<img src=${at.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      subgraph afterSlam [After Slam]
        B(${t(vn).effect}<img src=${t(vn).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        D2(${at.effect}<img src=${at.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      end
      D2==>B
      B==>afterDebuff
      D==>B
      C==>afterSlam
  `,img:"/assets/act3/monsters/the-maw.webp",name:"The Maw",slug:"the-maw"})),$a=()=>t(ha),Sn=n(()=>({effect:`${e.v>=2?40:30} + X*10 Damage. X = Turn - 1`,intent:"/assets/intents/7.png",name:"Attack"})),ua=n(()=>({flowchart:`
    flowchart-elk LR
      A(${t(Sn).effect}<img src=${t(Sn).intent} class="h-10 object-contain" />)
  `,img:"/assets/act3/monsters/transient.webp",name:"Transient",slug:"transient"})),xa=()=>t(ua),An={effect:"1 Parasite into deck. Only affects future combats.",intent:"/assets/intents/debuff2.png",name:"Implant"},ct=n(()=>({effect:`${e.v>=2?16:15} Damage. ${e.v>=2?18:16} Block.`,intent:"/assets/intents/attackDefend.png",name:"Flail"})),it=n(()=>({effect:`${e.v>=2?12:10} Damage. 2 Weak. 2 Vulnerable.`,intent:"/assets/intents/attackDebuff.png",name:"Wither"})),ot=n(()=>({effect:`${e.v>=2?9:7} x 3 Damage.`,intent:"/assets/intents/5.png",name:"Multi-Strike"})),ft=n(()=>({effect:`${e.v>=2?38:32} Damage.`,intent:"/assets/intents/7.png",name:"Strong Strike"})),da=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Turn1 [Turn 1]
        B(${t(ct).effect}<img src=${t(ct).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        C(${t(it).effect}<img src=${t(it).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        D(${t(ot).effect}<img src=${t(ot).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
        E(${t(ft).effect}<img src=${t(ft).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
25%</span>)
      end
      subgraph Turn2+ [Turn 2+]
        A(${An.effect}<img src=${An.intent} class="h-10 object-contain" /><span class="text-xs">Max Uses: 1
10%</span>)
        B2(${t(ct).effect}<img src=${t(ct).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
30%</span>)
        C2(${t(it).effect}<img src=${t(it).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
20%</span>)
        D2(${t(ot).effect}<img src=${t(ot).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
30%</span>)
        E2(${t(ft).effect}<img src=${t(ft).intent} class="h-10 object-contain" /><span class="text-xs">Max In a Row: 1
10%</span>)
      end
  `,img:"/assets/act3/monsters/writhing-mass.webp",name:"Writhing Mass",slug:"writhing-mass"})),wa=()=>t(da),Mn={effect:"2 Vulnerable. 2 Weak. 2 Frail. Dazed, Slimed, Wound, Burn and Void into draw.",intent:"/assets/intents/debuff2.png",name:"Debilitate"},rt=n(()=>({effect:`2 x ${e.v>=4?15:12} Damage.`,intent:"/assets/intents/5.png",name:"Blood Shots"})),lt=n(()=>({effect:`${e.v>=4?45:40} Damage.`,intent:"/assets/intents/7.png",name:"Echo"})),Rn={effect:"Removes Strength Down. 2 Strength and additional buff.",intent:"/assets/intents/buff1.png",name:"Buff"},ja=n(()=>({flowchart:`
    flowchart-elk LR
      A(${Mn.effect}<img src=${Mn.intent} class="h-10 object-contain" />)
      B(${t(rt).effect}<img src=${t(rt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      B2(${t(rt).effect}<img src=${t(rt).intent} class="h-10 object-contain" />)
      C(${t(lt).effect}<img src=${t(lt).intent} class="h-10 object-contain" />)
      C2(${t(lt).effect}<img src=${t(lt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
      D(${Rn.effect}<img src=${Rn.intent} class="h-10 object-contain" /><span class="text-xs">1. Artifact 2
2. Beat of Death 1
3. Painful Stabs
4. 10 Strength
5+. 50 Strength</span>)
      A==>Loop
      subgraph Loop
      B==>C==>D
      C2==>B2==>D
      end
  `,img:"/assets/act4/bosses/corrupt-heart.webp",name:"Corrupt Heart",slug:"corrupt-heart"})),ka=()=>t(ja),gt=n(()=>({effect:`${e.v>=3?14:12} Damage. If Player has 1+ orb slot, 50/50 -1 Focus or -1 Strength. Else, -1 Strength.`,intent:"/assets/intents/attackDebuff.png",name:"Bash"})),mt={effect:"Group 30 Block.",intent:"/assets/intents/defend.png",name:"Fortify"},Cn=n(()=>({effect:`${e.v>=3?38:34} Damage. ${e.v>=18?"99 Block":"X Block. X = Damage Output"}.`,intent:"/assets/intents/attackDefend.png",name:"Smash"})),h=n(()=>({effect:`${e.v>=3?6:5} x 2 Damage. 2 Burns into discard.`,intent:"/assets/intents/attackDebuff.png",name:"Burn Strike"})),pt={effect:"Group 2 Strength.",intent:"/assets/intents/buff1.png",name:"Piercer"},Tn=n(()=>({effect:`10 x ${e.v>=3?4:3} Damage.`,intent:"/assets/intents/7.png",name:"Skewer"})),Ba=n(()=>({flowchart:`
    flowchart-elk TB
      subgraph Shield [<img src=/assets/act4/elites/spire-shield.webp class="h-10 object-contain inline" />]
        direction LR
        A(${t(gt).effect}<img src=${t(gt).intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        B(${mt.effect}<img src=${mt.intent} class="h-10 object-contain" />)
        A2(${t(gt).effect}<img src=${t(gt).intent} class="h-10 object-contain" />)
        B2(${mt.effect}<img src=${mt.intent} class="h-10 object-contain" /><span class="text-xs">50%</span>)
        C(${t(Cn).effect}<img src=${t(Cn).intent} class="h-10 object-contain" />)
        subgraph Loop
          A==>B==>C
          B2==>A2==>C
        end
      end
      subgraph Spear [<img src=/assets/act4/elites/spire-spear.webp class="h-10 object-contain inline" />]
        direction LR
        A3(${t(h).effect}<img src=${t(h).intent} class="h-10 object-contain" />)
        A4(${t(h).effect}<img src=${t(h).intent} class="h-10 object-contain" />)
        A5(${t(h).effect}<img src=${t(h).intent} class="h-10 object-contain" />)
        B3(${pt.effect}<img src=${pt.intent} class="h-10 object-contain" />)
        B4(${pt.effect}<img src=${pt.intent} class="h-10 object-contain" />)
        C2(${t(Tn).effect}<img src=${t(Tn).intent} class="h-10 object-contain" />)
        A3==>Loop2
        subgraph Loop2 [Loop]
          C2== 50% ==>A4==>B3
          C2== 50% ==>B4==>A5
        end
      end
  `,img:"/assets/act4/elites/spire-shield-spear.webp",name:"Spire Shield and Spear",slug:"spire-shield-spear"})),va=()=>t(Ba),Da=[ns,ws,is,ms,$s,fs,ls,bs,as,xs],Sa=[Zn,Yn,ts],Aa=[Xn,Un,_n],Ma=[Ls,Fs,Ws,Ns,Xs,ys,Us,_s],Ra=[Ms,Cs,Is],Ca=[ks,vs,Ss],Ta=[fa,la,ma,$a,ba,xa,wa],Ia=[na,aa,ia],Ea=[Zs,Ys,ta],La=[va],Ga=[ka],a=bt=>new Map(bt.map(x=>[x().slug,x])),ya=a(Da),Pa=a(Sa),Fa=a(Aa),Ha=a(Ma),Wa=a(Ra),Oa=a(Ca),Na=a(Ta),za=a(Ia),Ua=a(Ea),Va=a(La),_a=a(Ga),Za=new Map([...ya,...Pa,...Fa,...Ha,...Wa,...Oa,...Na,...za,...Ua,...Va,..._a]);export{Aa as a,Sa as b,Da as c,Ca as d,Ra as e,Ma as f,Ea as g,Ia as h,Ta as i,Ga as j,Ja as k,La as l,Za as m};
