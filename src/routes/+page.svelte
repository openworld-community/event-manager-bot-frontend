<script lang="ts">
  import { userFirstNameStore, userIDStore, userLastNameStore } from "$lib/logic/main-page";
  import TelegramScript from "$lib/components/TelegramScript.svelte";
</script>

<TelegramScript />

<p>Hello, {$userLastNameStore} {$userFirstNameStore}! Your id is {$userIDStore}</p>

<a href="./edit-form">Create new event</a>
