<script lang="ts">
  import { submitForm, createFormEventHandler, formDataStores } from "$lib/logic/editForm";
  import Input from "$lib/components/Input.svelte";
  import TelegramScript from "$lib/components/TelegramScript.svelte";

</script>

<TelegramScript />

<main>
  <form class="form" on:submit={createFormEventHandler(submitForm)}>
    <h1>Create new event</h1>
    <div class="form--box">
    {#each formDataStores as inputData}
      <Input label={inputData.label} type={inputData.type} handler={inputData.handler}
             valueStore={inputData.valueStore} variant={inputData.variant}/>
    {/each}
  </div>
    <button type="submit">Create event</button>
  </form>
</main>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &--box {
      margin-left: 40px;
    }
  }
</style>
