<script lang="ts">
import { FormSteps } from "$lib/types/enums";
import { submitForm, createFormEventHandler, formDataStores } from "$lib/logic/editForm";
import { formStepStore } from "$lib/logic/editFormSteps";
import Input from "../../Input.svelte";
  import StepOne from "./stepOne.svelte";
  import StepTwo from "./stepTwo.svelte";
  import StepThree from "./stepThree.svelte";

console.log($formStepStore)

export let activeStep: FormSteps = $formStepStore;
</script>

<form class="multisteps-form" on:submit={createFormEventHandler(submitForm)}>
    {#if activeStep === FormSteps.ABOUT }
     <StepOne />
    {/if}
    {#if activeStep === FormSteps.CAPACITY }
     <StepTwo />
    {/if}
    {#if activeStep === FormSteps.PRICE }
     <StepThree />
    {/if}
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