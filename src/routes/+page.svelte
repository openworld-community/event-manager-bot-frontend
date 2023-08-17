<script lang="ts">
  import { userFirstNameStore, userIDStore, userLastNameStore } from "$lib/logic/userInfo";
  import TelegramScript from "$lib/components/TelegramScript.svelte";
</script>

<TelegramScript />

  <p>Hello, {$userFirstNameStore} {$userLastNameStore}! Your id is {$userIDStore}</p>

  <a href="./edit-form">Create new event</a>



