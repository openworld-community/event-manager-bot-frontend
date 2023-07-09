<script lang="ts">
  import { onMount } from 'svelte';
  let version = 'Unknown';

  onMount(async () => {
    const res = await fetch('/version.txt');
    version = await res.text();
  });
</script>

<footer>
  Frontend Version: {version}
</footer>
