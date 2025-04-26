<script lang="ts">
  import elkLayouts from "@mermaid-js/layout-elk";
  import mermaid from "mermaid";

  // Needed for flowcharts w/ A==>A loops: https://github.com/mermaid-js/mermaid/issues/6049
  mermaid.registerLayoutLoaders(elkLayouts);

  const { flowchart, moves }: { flowchart: string, moves: string | undefined } = $props();

  mermaid.initialize({
    theme: "base",
    themeVariables: {
      clusterBorder: "#ffffff",
      fontFamily: "Kreon, serif",
      fontSize: "24px",
      lineColor: "#ffffff",
      primaryBorderColor: "#ffffff",
      primaryColor: "#000000",
      primaryTextColor: "#ffffff",
    },
  });

  $effect(() => { mermaid.run(); });
</script>

<pre class="mermaid flex flex-1 justify-center">
  {flowchart}
</pre>

{#if moves}
  <pre class="mermaid flex justify-center">
    {moves}
  </pre>
{/if}
