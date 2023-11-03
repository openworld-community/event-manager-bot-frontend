<script lang="ts">
  import { formDataStores } from '$lib/logic/editForm';
  import { formStepSignStore } from '$lib/logic/editFormSteps';
  import { FormSteps } from '$lib/types/enums';
  import Input from '$lib/components/Input.svelte';

  const signs = formStepSignStore.getState();
</script>

<div class="step-two">
  {#each formDataStores as inputData}
    {#if inputData.step === FormSteps.CAPACITY}
      {#if inputData.systemName === 'max_adults'}
        <h3 class="step-two--sign" style="grid-row: 1;">{signs[0]}</h3>
        <div style="grid-row: 2;">
          <Input
          label={inputData.label}
          type={inputData.type}
          handler={inputData.handler}
          valueStore={inputData.valueStore}
          variant={inputData.variant}
          step={FormSteps.CAPACITY}
        />
        </div>
      {:else if inputData.systemName === 'max_children'}
       <div style="grid-row: 2; margin-left: -70px">
        <Input
        label={inputData.label}
        type={inputData.type}
        handler={inputData.handler}
        valueStore={inputData.valueStore}
        variant={inputData.variant}
        step={FormSteps.CAPACITY}
      />
      </div>
    {/if}
      {#if inputData.systemName === 'max_adults_per_reservation'}
        <h3 class="step-two--sign" style="grid-row: 3;">{signs[1]}</h3>
        <div style="grid-row: 4;">
          <Input
          label={inputData.label}
          type={inputData.type}
          handler={inputData.handler}
          valueStore={inputData.valueStore}
          variant={inputData.variant}
          step={FormSteps.CAPACITY}
        />
        </div>
      {:else if inputData.systemName === 'max_children_per_reservation'}
        <div style="grid-row: 4; margin-left: -70px">
          <Input
          label={inputData.label}
          type={inputData.type}
          handler={inputData.handler}
          valueStore={inputData.valueStore}
          variant={inputData.variant}
          step={FormSteps.CAPACITY}
        />
        </div>
      {/if}
    {/if}
  {/each}
</div>

<style lang="scss">
  .step-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);

    grid-row-gap: -20px;
    width: 300px;

    & > &--sign {
      font-size: 24px;
      font-weight: 500;
      white-space: nowrap;

      margin-bottom: 10px;
      padding: 0;
    }
  }
</style>
