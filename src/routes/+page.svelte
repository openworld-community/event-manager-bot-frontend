<script lang="ts">
  import { userFirstNameStore, userIDStore, userLastNameStore } from "./logic";
  import TelegramScript from "$lib/TelegramScript.svelte";
</script>

<TelegramScript />

<p>Hello, {$userLastNameStore} {$userFirstNameStore}! Your id is {$userIDStore}</p>

<a href="./edit-form">Create new event</a>
