<script lang="ts">
  import { page } from "$app/state";
  import Graph from "$lib/components/Graph.svelte";
  import { all } from "$lib/enemies";

  const enemy = $derived(all.get(page.params.enemy)!());
</script>

{#key enemy.flowchart}
  <Graph flowchart={enemy.flowchart} moves={enemy.moves} />
{/key}
