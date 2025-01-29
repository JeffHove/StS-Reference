<script lang="ts">
  import { base } from "$app/paths";
</script>

{#snippet card(num: number)}
  <a href="{base}/act{num}">
    <div class="rounded border-1 border-secondary p-6 text-center">
      Act {num}
    </div>
  </a>
{/snippet}

<main class="flex flex-1 items-center justify-around">
  {@render card(1)}
  {@render card(2)}
  {@render card(3)}
  {@render card(4)}
</main>
