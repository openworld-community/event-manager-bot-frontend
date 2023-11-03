<script lang="ts">
  import { FormSteps } from '$lib/types/enums';
  import { submitForm, createFormEventHandler } from '$lib/logic/editForm';
  import { formStepStore } from '$lib/logic/editFormSteps';
  import StepOne from './stepOne.svelte';
  import StepTwo from './stepTwo.svelte';
  import StepThree from './stepThree.svelte';

  console.log($formStepStore);

  export let activeStep: FormSteps = $formStepStore;
</script>

<form class="multisteps-form" on:submit={createFormEventHandler(submitForm)}>
  {#if activeStep === FormSteps.ABOUT}
    <StepOne />
  {/if}
  {#if activeStep === FormSteps.CAPACITY}
    <StepTwo />
  {/if}
  {#if activeStep === FormSteps.PRICE}
    <StepThree />
  {/if}
</form>

<style lang="scss">
  .multisteps-form {
    display: block;
  }
</style>
