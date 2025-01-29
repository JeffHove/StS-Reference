<script lang="ts">
  import Ascension from "$lib/components/Ascension.svelte";
  import GitHub from "$lib/components/GitHub.svelte";

  import "../app.css";
  let { children } = $props();
</script>

<header class="flex items-center px-2">
  <div class="flex flex-1 justify-start">
    <a href="/">Home</a>
  </div>
  <div class="flex flex-1 justify-center">
    <Ascension />
  </div>
  <div class="flex flex-1 justify-end">
    <GitHub />
  </div>
</header>

{@render children()}
