<script lang="ts">
  import {submitForm, createFormEventHandler, formDataStores} from './logic';
  import Input from "$lib/Input.svelte";
  import TelegramScript from "$lib/TelegramScript.svelte";
</script>

<TelegramScript />

<main>
  <form class="form" on:submit={createFormEventHandler(submitForm)}>
    <h1>Create new event</h1>

    {#each formDataStores as input}
      <Input label={input.label} type={input.type} handler={input.handler} valueStore={input.valueStore}/>
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
