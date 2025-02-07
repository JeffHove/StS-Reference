<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import Graph from "$lib/components/Graph.svelte";
  import { all } from "$lib/enemies";

  const enemy = $derived(all.get(page.params.enemy)!());
</script>

{#key enemy.flowchart}
  <Graph flowchart={enemy.flowchart} moves={enemy.moves} />
{/key}

{#if enemy.slug === "gremlin-leader"}
  <a href="{base}/act1/gremlins" >
    <div class="absolute bottom-0 left-0 h-24 w-24 rounded border-1 border-secondary p-2">
      <img src="{base}/assets/act1/monsters/gremlins.webp" alt="gremlins" class="h-full w-full object-contain" />
    </div>
  </a>
{:else if enemy.slug === "slime-boss"}
  <div class="flex">
    <a href="{base}/act1/acid-slimes" >
      <div class="absolute bottom-0 left-0 h-24 w-24 rounded border-1 border-secondary p-2">
        <img src="{base}/assets/act1/monsters/acid-slimes.webp" alt="Acid Slimes" class="h-full w-full object-contain" />
      </div>
    </a>
    <a href="{base}/act1/spike-slimes" >
      <div class="absolute bottom-0 left-0 h-24 w-24 rounded border-1 border-secondary p-2">
        <img src="{base}/assets/act1/monsters/spike-slimes.webp" alt="Spike Slimes" class="h-full w-full object-contain" />
      </div>
    </a>
  </div>
{:else if enemy.slug === "awakened-one"}
  <a href="{base}/act1/cultist" >
    <div class="absolute bottom-0 left-0 h-24 w-24 rounded border-1 border-secondary p-2">
      <img src="{base}/assets/act1/monsters/cultist.webp" alt="Cultist" class="h-full w-full object-contain" />
    </div>
  </a>
{/if}
