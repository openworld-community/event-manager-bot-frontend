<script lang="ts">
  import { submitForm, createFormEventHandler, formDataStores } from "$lib/logic/editForm";
  import Input from "$lib/components/Input.svelte";
  import TelegramScript from "$lib/components/TelegramScript.svelte";

</script>

<TelegramScript />

<main>
  <form class="form" on:submit={createFormEventHandler(submitForm)}>
    <h1>Create new event</h1>

    {#each formDataStores as inputData}
      <Input label={inputData.label} type={inputData.type} handler={inputData.handler}
             valueStore={inputData.valueStore} />
    {/each}

    <button type="submit">Create event</button>
  </form>
</main>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
