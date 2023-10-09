<script lang="ts">
import { FormSteps } from "$lib/types/enums";
import { submitForm, createFormEventHandler, formDataStores } from "$lib/logic/editForm";
import { formStepStore } from "$lib/logic/editFormSteps";
import Input from "../Input.svelte";

console.log($formStepStore)

export let activeStep: FormSteps = $formStepStore;
</script>

<form class="multisteps-form" on:submit={createFormEventHandler(submitForm)}>
    {#each formDataStores as inputData}
    {#if activeStep === FormSteps.ABOUT && inputData.step === FormSteps.ABOUT}
      <div class="multisteps-form--input-box">
        <Input label={inputData.label} type={inputData.type} handler={inputData.handler}
        valueStore={inputData.valueStore} variant={inputData.variant} step={FormSteps.ABOUT}/>
      </div>
    {/if}
    {#if activeStep === FormSteps.CAPACITY && inputData.step === FormSteps.CAPACITY}
      <div class="multisteps-form--input-box">
        <Input label={inputData.label} type={inputData.type} handler={inputData.handler}
        valueStore={inputData.valueStore} variant={inputData.variant} step={FormSteps.CAPACITY}/>
      </div>
    {/if}
    {#if activeStep === FormSteps.PRICE  && inputData.step == FormSteps.PRICE}
      <div class="multisteps-form--input-box">
        <Input label={inputData.label} type={inputData.type} handler={inputData.handler}
        valueStore={inputData.valueStore} variant={inputData.variant} step={FormSteps.PRICE}/>
      </div>
    {/if}
  {/each}
</form>

<style lang="scss">
  .multisteps-form {
    width: 220px;

    &--input-box {
      width: fit-content;
      margin: 1px 2px 3px 0;
    }
  }
</style>