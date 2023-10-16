<script lang="ts">
  import { formDataStores } from '$lib/logic/editForm';
  import { formStepSignStore } from '$lib/logic/editFormSteps';
  import { FormSteps } from '$lib/types/enums';
  import Input from '$lib/components/Input.svelte';

  const signs = formStepSignStore.getState();
  console.log(signs.toString());
</script>

<div class="step-two">
  {#each formDataStores as inputData}
    {#if inputData.step === FormSteps.CAPACITY}
      {#if inputData.systemName === 'max_adults'}
        <h3 class="step-two--sign">{signs[0]}</h3>
        <Input
          label={inputData.label}
          type={inputData.type}
          handler={inputData.handler}
          valueStore={inputData.valueStore}
          variant={inputData.variant}
          step={FormSteps.CAPACITY}
        />
      {:else if inputData.systemName === 'max_children'}
        <Input
          label={inputData.label}
          type={inputData.type}
          handler={inputData.handler}
          valueStore={inputData.valueStore}
          variant={inputData.variant}
          step={FormSteps.CAPACITY}
        />
      {/if}
      {#if inputData.systemName === 'max_adults_per_reservation'}
        <h3 class="step-two--sign">{signs[1]}</h3>
        <Input
          label={inputData.label}
          type={inputData.type}
          handler={inputData.handler}
          valueStore={inputData.valueStore}
          variant={inputData.variant}
          step={FormSteps.CAPACITY}
        />
      {:else if inputData.systemName === 'max_children_per_reservation'}
        <Input
          label={inputData.label}
          type={inputData.type}
          handler={inputData.handler}
          valueStore={inputData.valueStore}
          variant={inputData.variant}
          step={FormSteps.CAPACITY}
        />
      {/if}
    {/if}
  {/each}
</div>

<style lang="scss">
  .step-two {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-template-rows: auto 1fr 1fr;

    & > &--sign {
      font-size: 24px;
      font-weight: 500;
      white-space: nowrap;

      margin-bottom: 10px;
      padding: 0;
    }
  }
</style>
