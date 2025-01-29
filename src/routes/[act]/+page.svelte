<script lang="ts">
  import { page } from "$app/state";
  import {
    act1Bosses,
    act1Elites,
    act1Monsters,
    act2Bosses,
    act2Elites,
    act2Monsters,
    act3Bosses,
    act3Elites,
    act3Monsters,
    act4Bosses,
    act4Elites,
  } from "$lib/enemies";
  import { type Enemy } from "$lib/types";
  import { base } from "$app/paths";

  const actData = {
    act1: { bosses: act1Bosses, elites: act1Elites, monsters: act1Monsters },
    act2: { bosses: act2Bosses, elites: act2Elites, monsters: act2Monsters },
    act3: { bosses: act3Bosses, elites: act3Elites, monsters: act3Monsters },
    act4: { bosses: act4Bosses, elites: act4Elites, monsters: [] },
  };
  const act = page.params.act as keyof typeof actData;

  let monsters: Enemy[] = actData[act].monsters.map(m => m());
  let elites: Enemy[] = actData[act].elites.map(m => m());
  let bosses: Enemy[] = actData[act].bosses.map(m => m());

  let key = 0;
</script>

{#snippet card(slug: string, img: string, name: string)}
  <a href="{base}/{act}/{slug}">
    <div class="h-24 w-24 rounded border-1 border-secondary p-2">
      <img src={img} alt={name} class="h-full w-full object-contain" />
    </div>
  </a>
{/snippet}

<!-- Key needed b/c these assets don't load on refresh in prod -->
{#key key}
  <div class="flex flex-1 items-center justify-around">
    {#each bosses as boss}
      {@render card(boss.slug, boss.img, boss.name)}
    {/each}
  </div>

  <div class="flex flex-1 items-center justify-around">
    {#each elites as elite}
      {@render card(elite.slug, elite.img, elite.name)}
    {/each}
  </div>

  {#if monsters.length > 0}
    <div class="flex flex-1 flex-wrap items-center justify-center">
      {#each monsters as monster}
        {@render card(monster.slug, monster.img, monster.name)}
      {/each}
    </div>
  {/if}
{/key}

<svelte:window onload={() => key++} />