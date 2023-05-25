<script lang="ts">
  import {submitForm, createFormEventHandler, formDataStores} from '$lib/logic/edit-form';
  import Input from "$lib/components/Input.svelte";
  import TelegramScript from "$lib/components/TelegramScript.svelte";
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
