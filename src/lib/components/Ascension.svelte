<script lang="ts">
  import { aLevel } from "$lib/shared.svelte";
</script>

<div class="flex rounded border-1 border-secondary pr-4">
  <img src="/assets/icons/ascension.png" alt="Ascension">
  <input type="number" min=0 max=20 bind:value={aLevel.v} class="bg-primary" />
</div>
