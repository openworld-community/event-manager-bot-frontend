<script lang="ts">
  import { onMount } from "svelte";

  export let expand = true;

  onMount(() => {
    if (expand) Telegram.WebApp.expand();
  });
</script>

<svelte:head>
  <script src="https://telegram.org/js/telegram-web-app.js" />
</svelte:head>
