import { getHexaghost } from "./enemies/act1/bosses/hexaghost.svelte";
import { getSlimeBoss } from "./enemies/act1/bosses/slimeBoss.svelte";
import { getTheGuardian } from "./enemies/act1/bosses/theGuardian.svelte";
import { getGremlinNob } from "./enemies/act1/elites/gremlinNob.svelte";
import { getLagavulin } from "./enemies/act1/elites/lagavulin.svelte";
import { getSentry } from "./enemies/act1/elites/sentry.svelte";
import { getAcidSlimes } from "./enemies/act1/monsters/acidSlimes.svelte";
import { getBlueSlaver } from "./enemies/act1/monsters/blueSlaver.svelte";
import { getCultist } from "./enemies/act1/monsters/cultist.svelte";
import { getFungiBeast } from "./enemies/act1/monsters/fungiBeast.svelte";
import { getGremlins } from "./enemies/act1/monsters/gremlins.svelte";
import { getJawWorm } from "./enemies/act1/monsters/jawWorm.svelte";
import { getLooter } from "./enemies/act1/monsters/looter.svelte";
import { getLouses } from "./enemies/act1/monsters/louses.svelte";
import { getRedSlaver } from "./enemies/act1/monsters/redSlaver.svelte";
import { getSpikeSlimes } from "./enemies/act1/monsters/spikeSlimes.svelte";
import { getBronzeAutomaton } from "./enemies/act2/bosses/bronzeAutomaton.svelte";
import { getTheChamp } from "./enemies/act2/bosses/theChamp.svelte";
import { getTheCollector } from "./enemies/act2/bosses/theCollector.svelte";
import { getBookOfStabbing } from "./enemies/act2/elites/bookOfStabbing.svelte";
import { getGremlinLeader } from "./enemies/act2/elites/gremlinLeader.svelte";
import { getTaskmaster } from "./enemies/act2/elites/taskmaster.svelte";
import { getByrd } from "./enemies/act2/monsters/byrd.svelte";
import { getCenturionMystic } from "./enemies/act2/monsters/centurionMystic.svelte";
import { getChosen } from "./enemies/act2/monsters/chosen.svelte";
import { getMugger } from "./enemies/act2/monsters/mugger.svelte";
import { getShelledParasite } from "./enemies/act2/monsters/shelledParasite.svelte";
import { getSnakePlant } from "./enemies/act2/monsters/snakePlant.svelte";
import { getSnecko } from "./enemies/act2/monsters/snecko.svelte";
import { getSphericGuardian } from "./enemies/act2/monsters/sphericGuardian.svelte";
import { getAwakenedOne } from "./enemies/act3/bosses/awakenedOne.svelte";
import { getDonuDeca } from "./enemies/act3/bosses/donuDeca.svelte";
import { getTimeEater } from "./enemies/act3/bosses/timeEater.svelte";
import { getGiantHead } from "./enemies/act3/elites/giantHead.svelte";
import { getNemesis } from "./enemies/act3/elites/nemesis.svelte";
import { getReptomancer } from "./enemies/act3/elites/reptomancer.svelte";
import { getDarkling } from "./enemies/act3/monsters/darkling.svelte";
import { getOrbWalker } from "./enemies/act3/monsters/orbWalker.svelte";
import { getShapes } from "./enemies/act3/monsters/shapes.svelte";
import { getSpireGrowth } from "./enemies/act3/monsters/spireGrowth.svelte";
import { getTheMaw } from "./enemies/act3/monsters/theMaw.svelte";
import { getTransient } from "./enemies/act3/monsters/transient.svelte";
import { getWrithingMass } from "./enemies/act3/monsters/writhingMass.svelte";
import { getCorruptHeart } from "./enemies/act4/bosses/corruptHeart.svelte";
import { getSpireShieldSpear } from "./enemies/act4/elites/spireShieldSpear.svelte";
import { type Enemy } from "./types";

export const act1Monsters = [
  getAcidSlimes,
  getSpikeSlimes,
  getCultist,
  getJawWorm,
  getLouses,
  getFungiBeast,
  getGremlins,
  getLooter,
  getBlueSlaver,
  getRedSlaver,
];

export const act1Elites = [
  getGremlinNob,
  getLagavulin,
  getSentry,
];

export const act1Bosses = [
  getTheGuardian,
  getHexaghost,
  getSlimeBoss,
];

export const act2Monsters = [
  getByrd,
  getChosen,
  getMugger,
  getShelledParasite,
  getSphericGuardian,
  getCenturionMystic,
  getSnakePlant,
  getSnecko,
];

export const act2Elites = [
  getBookOfStabbing,
  getGremlinLeader,
  getTaskmaster,
];

export const act2Bosses = [
  getBronzeAutomaton,
  getTheChamp,
  getTheCollector,
];

export const act3Monsters = [
  getDarkling,
  getOrbWalker,
  getShapes,
  getTheMaw,
  getSpireGrowth,
  getTransient,
  getWrithingMass,
];

export const act3Elites = [
  getGiantHead,
  getNemesis,
  getReptomancer,
];

export const act3Bosses = [
  getAwakenedOne,
  getDonuDeca,
  getTimeEater,
];

export const act4Elites = [
  getSpireShieldSpear,
];

export const act4Bosses = [
  getCorruptHeart,
];

const createEnemyMap = (enemies: (() => Enemy)[]): Map<string, () => Enemy> =>
  new Map(enemies.map(enemy => [enemy().slug, enemy]));

const act1MonsterGetters = createEnemyMap(act1Monsters);
const act1EliteGetters = createEnemyMap(act1Elites);
const act1BossGetters = createEnemyMap(act1Bosses);
const act2MonsterGetters = createEnemyMap(act2Monsters);
const act2EliteGetters = createEnemyMap(act2Elites);
const act2BossGetters = createEnemyMap(act2Bosses);
const act3MonsterGetters = createEnemyMap(act3Monsters);
const act3EliteGetters = createEnemyMap(act3Elites);
const act3BossGetters = createEnemyMap(act3Bosses);
const act4EliteGetters = createEnemyMap(act4Elites);
const act4BossGetters = createEnemyMap(act4Bosses);
export const all = new Map<string, () => Enemy>([
  ...act1MonsterGetters,
  ...act1EliteGetters,
  ...act1BossGetters,
  ...act2MonsterGetters,
  ...act2EliteGetters,
  ...act2BossGetters,
  ...act3MonsterGetters,
  ...act3EliteGetters,
  ...act3BossGetters,
  ...act4EliteGetters,
  ...act4BossGetters,
]);
